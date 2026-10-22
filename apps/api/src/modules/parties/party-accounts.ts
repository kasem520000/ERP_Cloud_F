/**
 * 🧾 **حساب ذمم لكل طرف** — DEF-R7-014/015، المرحلة م3.
 *
 * ما كان: كل ذمم العملاء تُرحَّل على حسابٍ واحد «عميل عام» (12310001) وكل ذمم الموردين على
 * «مورد عام» (22111001)، فيُفرَّق بين الطرفين بحقلِ `party_id` على السطر لا بحساب. والمحاسبة
 * السليمة أن يكون لكل طرفٍ حسابُه الفرعيُّ تحت حساب التحكّم، فيُقرأ رصيدُه من مخطّط الحسابات
 * كما يُقرأ من كشف الحساب — بلا اعتمادٍ على فلترة أسطرٍ بحقلٍ قد ينساه مسارٌ جديد.
 *
 * وقرارُ التصميم (م3): **حسابٌ فرعيٌّ لكل طرف** تحت الأب (‏`12310001` للعملاء و`22111001`
 * للموردين، أو حسابُ التحكّم المضبوط في ملفّ الترحيل)، والأبُ يبقى **حسابَ تحكّم** لا يُرحَّل
 * عليه من جديد. والقيودُ التاريخية تبقى على الأب (لا يُعاد كتابة مستندٍ مرحّل)، فمجموعُ الأبناء
 * + بقايا الأب = رصيد الأب في الأستاذ — ويُقاس بذلك في أداة الثوابت.
 *
 * و`ensurePartyAccountInTx` **متكرّرةُ الأثر** (idempotent): تعيد الحساب القائم إن وُجد، وتنشئ
 * واحدًا فقط عند الغياب. فالنداءُ من ثلاثة مواضع (إنشاء الطرف، ترحيل البيع، ترحيل الشراء) لا
 * يُنشئ ثلاثةَ حسابات.
 */
import { newId } from '@erp/contracts';
import { type DrizzleTx } from '@erp/database';
import { sql } from 'drizzle-orm';

export type PartyAccountSide = 'receivable' | 'payable';

type PartyRow = {
  code: string;
  kind: string;
  name: string;
  receivable_account_id: string | null;
  payable_account_id: string | null;
};

type ControlRow = {
  id: string;
  code: string;
  level: number;
  path: string;
  type: string;
  subtype: string | null;
  normal_balance: string;
};

/** أسماءُ حسابَي التحكّم الافتراضيّين في مخطّط الحسابات المُهيَّأ. */
export const CONTROL_CODES: Record<PartyAccountSide, string> = {
  receivable: '12310001',
  payable: '22111001',
};

function rowsOf(result: unknown): Array<Record<string, unknown>> {
  return (result as { rows: Array<Record<string, unknown>> }).rows;
}

function str(value: unknown): string {
  return value === null || value === undefined ? '' : String(value);
}

/**
 * يضمن وجود حسابٍ فرعيٍّ للطرف تحت حساب التحكّم، ويعيد معرّفه (أو `null` إن لم يكن الطرف
 * من النوع الذي يخصّه هذا الجانب، أو لم يوجد حسابُ تحكّم).
 *
 * `fallbackParentId` هو حسابُ التحكّم الذي يعرفه مسارُ الترحيل نفسه (‏`receivableAccountId` /
 * `payableAccountId` من ملفّ الترحيل) — يُقدَّم على البحث بالرمز، فمنشأةٌ بمخطّطٍ مخصّص لا
 * تُجبَر على رموزٍ ليست عندها.
 */
export async function ensurePartyAccountInTx(
  tx: DrizzleTx,
  tenantId: string,
  partyId: string,
  side: PartyAccountSide,
  fallbackParentId?: string | null,
): Promise<string | null> {
  const partyRows = rowsOf(
    await tx.execute(sql`
      SELECT code, kind, name,
             receivable_account_id::text AS receivable_account_id,
             payable_account_id::text AS payable_account_id
      FROM parties
      WHERE tenant_id = ${tenantId}::uuid AND id = ${partyId}::uuid AND deleted_at IS NULL
      LIMIT 1
    `),
  );
  const party = partyRows[0] as PartyRow | undefined;
  if (!party) return null;

  const existing = side === 'receivable' ? party.receivable_account_id : party.payable_account_id;
  if (existing) return str(existing);

  const kind = str(party.kind);
  const allowed = side === 'receivable' ? ['customer', 'both'] : ['supplier', 'both'];
  if (!allowed.includes(kind)) return null;
  /**
   * «عميل عام» و«مورد عام» ليسا طرفين بل الحسابُ العام نفسه: لا يُنشأ لهما حسابٌ فرعيٌّ —
   * فالدَّينُ الذي يقف عليهما يقف على التحكّم كما كان، وهذا هو المقصود.
   */
  if (['CUST-GEN', 'SUPP-GEN'].includes(str(party.code))) return null;

  /** حسابُ التحكّم: ملفّ الترحيل أولًا، ثم رمزُ المخطّط المُهيَّأ. */
  let parentRows: Array<Record<string, unknown>> = [];
  if (fallbackParentId) {
    parentRows = rowsOf(
      await tx.execute(sql`
        SELECT id::text, code, level, path::text AS path, type, subtype, normal_balance FROM accounts
        WHERE tenant_id = ${tenantId}::uuid AND id = ${fallbackParentId}::uuid
          AND deleted_at IS NULL
        LIMIT 1
      `),
    );
  }
  if (parentRows.length === 0) {
    parentRows = rowsOf(
      await tx.execute(sql`
        SELECT id::text, code, level, path::text AS path, type, subtype, normal_balance FROM accounts
        WHERE tenant_id = ${tenantId}::uuid AND code = ${CONTROL_CODES[side]}
          AND deleted_at IS NULL
        LIMIT 1
      `),
    );
  }
  const parent = parentRows[0] as ControlRow | undefined;
  if (!parent) return null;
  /**
   * حارسُ العود: لو كان «الأب» نفسَه حسابَ طرفٍ (ثلاثةُ أرقامٍ زائدة على رمز التحكّم) لما
   * صلح أبًا — وإلا تفرّعت الحسابات بلا نهايةٍ تحت بعضها.
   */
  if (str(parent.code).length > str(CONTROL_CODES[side]).length) return null;

  const accountId = newId();
  const nameAr = `ذمم ${str(party.name)}`.slice(0, 120);

  /**
   * الترقيم: `${code}001`, `002`, … تحت الأب نفسه. والقراءةُ بـ`MAX` على الأبناء وحدهم،
   * والإدراجُ بـ`ON CONFLICT DO NOTHING` (لا استثناءً) كي تُعاد المحاولة داخل المعاملة نفسها:
   * خطأُ التفرّد يُجهض المعاملة في PostgreSQL فلا يصحّ الاعتماد عليه في حلقة.
   */
  let created = false;
  for (let attempt = 0; attempt < 5 && !created; attempt += 1) {
    const nextRows = rowsOf(
      await tx.execute(sql`
        SELECT COALESCE(MAX(CAST(SUBSTRING(code FROM ${str(parent.code).length + 1}) AS INTEGER)), 0) AS last
        FROM accounts
        WHERE tenant_id = ${tenantId}::uuid AND parent_id = ${parent.id}::uuid
          AND code ~ ${`^${str(parent.code)}[0-9]+$`}
      `),
    );
    const last = Number(nextRows[0]?.last ?? 0);
    const code = `${str(parent.code)}${String((Number.isFinite(last) ? last : 0) + 1 + attempt).padStart(3, '0')}`;
    const inserted = rowsOf(
      await tx.execute(sql`
        INSERT INTO accounts (
          id, tenant_id, code, name_ar, parent_id, level, path, type, subtype,
          normal_balance, is_postable, allow_manual
        ) VALUES (
          ${accountId}::uuid, ${tenantId}::uuid, ${code}, ${nameAr},
          ${parent.id}::uuid, ${Number(parent.level) + 1}, ${`${str(parent.path)}.${accountId}`}::ltree,
          ${str(parent.type)}, ${parent.subtype ?? null}, ${str(parent.normal_balance)}, true, true
        )
        ON CONFLICT (tenant_id, code) WHERE deleted_at IS NULL DO NOTHING
        RETURNING id::text
      `),
    );
    created = inserted.length > 0;
  }
  if (!created) return null;

  await tx.execute(sql`
    UPDATE parties
    SET ${side === 'receivable' ? sql`receivable_account_id` : sql`payable_account_id`} = ${accountId}::uuid,
        updated_at = now()
    WHERE tenant_id = ${tenantId}::uuid AND id = ${partyId}::uuid
  `);

  return accountId;
}

/**
 * حساباتُ الذمم التي يجوز أن يقف عليها رصيدُ الطرف — للقراءة (كشف الحساب والرصيد).
 *
 * ولماذا لزمت: الأسطرُ القديمة كُتبت على حساب التحكّم (‏`12310001` / `22111001`) وحملت
 * `party_id` على **كل** أرجل الفاتورة (إيرادٌ وضريبةٌ وتكلفةٌ ومخزون)، فكان كشفُ الحساب يجمع
 * القيدَ كلّه ويخرج برصيدٍ مضاعف (‏281.88 مدينًا و281.88 دائنًا لعميلٍ رصيده 86.88). فالقارئ
 * يحصر الأسطر في حسابات الذمم — حسابَ الطرف إن وُجد، وحساباتَ التحكّم للبقايا التاريخية —
 * ويُهمل ما سواها.
 *
 * ⚠️ المُدخَل **معرّفاتُ حسابات** لا رموزاً: رمزُ التحكّم (`12310001`) اسمٌ لا `id`، وتمريره
 * إلى `inArray` يُنتج `invalid input syntax for type uuid` (‏22P02) فيردّ الـAPI **400**
 * `INVALID_ID` على قراءةٍ بريئة. ولذلك يُحلّ الرمزُ إلى معرّفه في `parties.service`.
 */
export function partyLedgerAccounts(
  side: PartyAccountSide,
  controlAccountIds: string[],
  partyAccountId?: string | null,
): string[] {
  const values = [...controlAccountIds, partyAccountId].filter(
    (value): value is string => typeof value === 'string' && value.length > 0,
  );
  return [...new Set(values)];
}
