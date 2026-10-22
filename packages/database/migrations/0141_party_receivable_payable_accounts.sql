-- 0141 — حسابُ ذمم لكل طرف (DEF-R7-014/015، المرحلة م3)
--
-- ما كان: كلُّ ذمم العملاء على «عميل عام» (12310001) وكلُّ ذمم الموردين على «مورد عام»
-- (22111001)، والتفريقُ بين الأطراف بحقل `party_id` على سطر القيد لا بحساب. فيقرأ المحاسبُ
-- رصيدَ العميل من كشف الحساب فقط، ولا يراه في مخطّط الحسابات — ولا يصلح أن يُبنى عليه إقرارٌ
-- أو أعمارُ ذممٍ بالحساب.
--
-- ما تفعله هذه الهجرة: تُنشئ لكل طرفٍ (عميل/مورد/كليهما) حسابًا فرعيًّا **تحت** حساب التحكّم
-- نفسه، برمزٍ `${رمز الأب}001`, `002`, … وبمسارٍ كاملٍ (`path` = مسار الأب + معرّف الحساب)، ثم
-- تكتب معرّفه في `parties.receivable_account_id` / `payable_account_id`.
--
-- وقواعدُها:
--   • **لا تُنشئ لأبٍ ليس حسابَ تحكّم**: إن كان الحسابُ الرمزي غير موجود (منشأةٌ بمخطّطٍ
--     مخصّص) لا تفعل شيئًا وتترك المسارَ التطبيقيَّ (`ensurePartyAccountInTx`) يُنشئه عند
--     أول ترحيلٍ بحساب التحكّم المضبوط في ملفّ الترحيل.
--   • **لا تمسّ «عميل عام» و«مورد عام»** (CUST-GEN/SUPP-GEN): ليسا طرفين بل الحسابُ العام.
--   • **متكرّرةُ الأثر**: تُعالج الأطراف التي حسابُها NULL، و`ON CONFLICT DO NOTHING` يحمي
--     الفهرسَ الفريد، فلا تُنشئ حسابين لطرفٍ واحدٍ لو أُعيد تشغيلها.
--   • `path` نوعُه `ltree`، و`ltree || '.'` يُحلّ إلى `ltree || ltree` فيُفسَّر النصّ '.' كمسارٍ
--     ويفشل (`ltree syntax error at character 1`). ولذلك يُحوَّل مسار الأب إلى `text` قبل
--     الدمج ثم يُعاد الناتج إلى `ltree` صراحةً.
--   • **لا تكتب قيدًا ولا تعدّل مستندًا مرحّلًا**: القيودُ التاريخية تبقى على الأب، ومجموعُ
--     الأبناء مع بقايا الأب = رصيد الأب — يُقاس في أداة الثوابت (شجرة `path <@`).

BEGIN;

-- ── 1. العملاء: تحت 12310001 ───────────────────────────────────────────────────────────
WITH parents AS (
  SELECT a.tenant_id,
         a.id AS parent_id,
         a.code,
         a.level,
         a.path,
         a.type,
         a.subtype,
         a.normal_balance,
         COALESCE((
           SELECT MAX(CAST(SUBSTRING(c.code FROM LENGTH(a.code) + 1) AS INTEGER))
           FROM accounts c
           WHERE c.tenant_id = a.tenant_id
             AND c.parent_id = a.id
             AND c.code ~ ('^' || a.code || '[0-9]+$')
         ), 0) AS last_seq
  FROM accounts a
  WHERE a.deleted_at IS NULL
    AND a.code = '12310001'
),
targets AS (
  SELECT p.tenant_id,
         p.id AS party_id,
         p.name,
         pa.parent_id,
         pa.level,
         pa.path,
         pa.type,
         pa.subtype,
         pa.normal_balance,
         pa.code || LPAD((pa.last_seq + ROW_NUMBER() OVER (PARTITION BY p.tenant_id ORDER BY p.id))::text, 3, '0') AS new_code,
         gen_random_uuid() AS new_id
  FROM parties p
  JOIN parents pa ON pa.tenant_id = p.tenant_id
  WHERE p.deleted_at IS NULL
    AND p.receivable_account_id IS NULL
    AND p.kind IN ('customer', 'both')
    AND p.code NOT IN ('CUST-GEN', 'SUPP-GEN')
),
inserted AS (
  INSERT INTO accounts (
    id, tenant_id, code, name_ar, parent_id, level, path, type, subtype,
    normal_balance, is_postable, allow_manual
  )
  SELECT t.new_id,
         t.tenant_id,
         t.new_code,
         LEFT('ذمم ' || t.name, 120),
         t.parent_id,
         t.level + 1,
         (t.path::text || '.' || t.new_id::text)::ltree,
         t.type,
         t.subtype,
         t.normal_balance,
         true,
         true
  FROM targets t
  ON CONFLICT DO NOTHING
  RETURNING id, tenant_id, code
)
UPDATE parties p
SET receivable_account_id = i.id,
    updated_at = now()
FROM inserted i
JOIN targets t ON t.tenant_id = i.tenant_id AND t.new_code = i.code
WHERE p.tenant_id = i.tenant_id
  AND p.id = t.party_id
  AND p.receivable_account_id IS NULL;

-- ── 2. الموردون: تحت 22111001 ──────────────────────────────────────────────────────────
WITH parents AS (
  SELECT a.tenant_id,
         a.id AS parent_id,
         a.code,
         a.level,
         a.path,
         a.type,
         a.subtype,
         a.normal_balance,
         COALESCE((
           SELECT MAX(CAST(SUBSTRING(c.code FROM LENGTH(a.code) + 1) AS INTEGER))
           FROM accounts c
           WHERE c.tenant_id = a.tenant_id
             AND c.parent_id = a.id
             AND c.code ~ ('^' || a.code || '[0-9]+$')
         ), 0) AS last_seq
  FROM accounts a
  WHERE a.deleted_at IS NULL
    AND a.code = '22111001'
),
targets AS (
  SELECT p.tenant_id,
         p.id AS party_id,
         p.name,
         pa.parent_id,
         pa.level,
         pa.path,
         pa.type,
         pa.subtype,
         pa.normal_balance,
         pa.code || LPAD((pa.last_seq + ROW_NUMBER() OVER (PARTITION BY p.tenant_id ORDER BY p.id))::text, 3, '0') AS new_code,
         gen_random_uuid() AS new_id
  FROM parties p
  JOIN parents pa ON pa.tenant_id = p.tenant_id
  WHERE p.deleted_at IS NULL
    AND p.payable_account_id IS NULL
    AND p.kind IN ('supplier', 'both')
    AND p.code NOT IN ('CUST-GEN', 'SUPP-GEN')
),
inserted AS (
  INSERT INTO accounts (
    id, tenant_id, code, name_ar, parent_id, level, path, type, subtype,
    normal_balance, is_postable, allow_manual
  )
  SELECT t.new_id,
         t.tenant_id,
         t.new_code,
         LEFT('ذمم ' || t.name, 120),
         t.parent_id,
         t.level + 1,
         (t.path::text || '.' || t.new_id::text)::ltree,
         t.type,
         t.subtype,
         t.normal_balance,
         true,
         true
  FROM targets t
  ON CONFLICT DO NOTHING
  RETURNING id, tenant_id, code
)
UPDATE parties p
SET payable_account_id = i.id,
    updated_at = now()
FROM inserted i
JOIN targets t ON t.tenant_id = i.tenant_id AND t.new_code = i.code
WHERE p.tenant_id = i.tenant_id
  AND p.id = t.party_id
  AND p.payable_account_id IS NULL;

COMMIT;
