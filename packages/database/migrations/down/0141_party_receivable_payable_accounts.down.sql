-- 0141_party_receivable_payable_accounts.down.sql
-- تراجعُ 0141: يفصل الأطرافَ عن حساباتها الفرعية ويحذف **الحسابات التي لم تُستخدم بعد** فقط.
--
-- وقاعدته الصريحة: حسابٌ عليه سطرُ قيدٍ **لا يُحذف** (الأستاذ لا يُعاد كتابته)، ويبقى في
-- المخطّط كابنٍ لحساب التحكّم؛ والتراجع لا يمسّ أي قيدٍ ولا رصيد. فإن أُعيد تشغيل الهجرة بعد
-- التراجع أُنشئت الحساباتُ من جديد (أو أُعيد ربطُ الباقي إن كان رمزُه محفوظاً — لا، بل تُنشأ
-- جديدةٌ برمزٍ لاحق، وهو أثرٌ مقبولٌ للتراجع الاختياريّ).

BEGIN;

-- 1) فصلُ الأطراف عن الحسابات التي ستُحذف (لا عن كل حساب).
UPDATE parties p
SET receivable_account_id = NULL, updated_at = now()
WHERE p.receivable_account_id IN (
  SELECT a.id FROM accounts a
  JOIN accounts parent ON parent.id = a.parent_id
  WHERE parent.code = '12310001'
    AND a.code ~ '^12310001[0-9]{3}$'
    AND NOT EXISTS (SELECT 1 FROM journal_entry_lines l WHERE l.account_id = a.id)
);

UPDATE parties p
SET payable_account_id = NULL, updated_at = now()
WHERE p.payable_account_id IN (
  SELECT a.id FROM accounts a
  JOIN accounts parent ON parent.id = a.parent_id
  WHERE parent.code = '22111001'
    AND a.code ~ '^22111001[0-9]{3}$'
    AND NOT EXISTS (SELECT 1 FROM journal_entry_lines l WHERE l.account_id = a.id)
);

-- 2) حذفُ الحسابات غير المستخدمة (بلا سطر قيد) تحت حسابَي التحكّم.
DELETE FROM accounts a
USING accounts parent
WHERE parent.id = a.parent_id
  AND parent.code IN ('12310001', '22111001')
  AND a.code ~ ('^' || parent.code || '[0-9]{3}$')
  AND NOT EXISTS (SELECT 1 FROM journal_entry_lines l WHERE l.account_id = a.id);

COMMIT;
