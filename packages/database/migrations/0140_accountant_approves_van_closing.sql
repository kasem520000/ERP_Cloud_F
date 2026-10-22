-- 0140_accountant_approves_van_closing.sql
--
-- 🧾 اعتمادُ إغلاق عهدة المندوب صار في يد المحاسب — DEF-R7-003.
--
-- القياس الحيّ (جولة R7، 2026-10-22): دور `Accountant` (٦٣ صلاحية من بذرة المنشأة) طلب
-- ‏`POST /van-sales/load-orders/:id/approve-closing` ⇒ **403 `permission
-- van_sales.closing.approve required`**، ولم يكن يحمل هذا الكود أيُّ دورٍ عدا `Owner`.
-- والمسار المرسوم في المنتج — «مندوب يُقفل ← محاسب يعتمد» — يصبح غير قابل للتنفيذ، فيقع
-- الاعتماد على المالك الذي أنشأ الحمولة وباعها أيضاً: **اعتمادٌ ذاتي** في أهم تسوية عهدة.
--
-- ولماذا هجرة لا مجرّد تعديلٍ في البذرة: البذرة تُستعمل عند إنشاء منشأة، فلا تُصيب الأدوار
-- القائمة. أمّا هذا الملف فيمنح الكودين لدور المحاسب **الموجود** في كل منشأة، فيعمل عند
-- الترقية بلا أن يعيد المالك تكوين الأدوار يدوياً.
--
-- ما يُمنح ولماذا:
--   * `van_sales.view`            — بلا قراءة أوامر التحميل لا تُفتح شاشة الاعتماد أصلاً؛
--                                    والقراءةُ وحدها لا تُرحّل شيئاً.
--   * `van_sales.closing.approve` — اعتمادُ الإغلاق وتسوية العجز (خصمٌ على ذمة الموظف أو
--                                    شطبُ مخزون). وهو **صراحةً** لا استنتاجاً: سياسة
--                                    الصلاحيات ترفض أن يُستنتج هذا الكود من `sales.*`
--                                    (`packages/contracts/src/permissions.ts:530`)، فالمنح
--                                    هنا صفٌّ مرئي في `role_permissions` يُرى ويُسحب.
--
-- ولا يُمنح المحاسب: `van_sales.load.manage` (إنشاء الأوامر)، ولا `pricing.manage`، ولا
-- `override.approve` — فالفصل بين من يُحمّل ويبيع ومن يعتمد يبقى قائماً، ومَن اعتمد لا يكون
-- بالضرورة مَن أنشأ.
--
-- الأمان:
--   * الأدوار المقصودة **باسمها** فقط (‏`Accountant` بالإنجليزية، و`محاسب` بالعربية كما في
--     كتالوج الأدوار الوظيفية `@erp/contracts`)، ودورُ المالك (`*`) لا يطابق أياً منهما
--     فلم يُمسّ؛
--   * لا يُضاف كودٌ غير موجود في `permissions` (‏FK) — الشرط `EXISTS` يمنع فشل الهجرة في
--     قاعدةٍ ناقصة البذرة؛
--   * إضافاتٌ فقط: لا `UPDATE` ولا `DELETE` لصف صلاحيةٍ قائم، ولا مساس بأي مستند أو رصيد أو
--     قيد؛
--   * `ON CONFLICT DO NOTHING` على المفتاح `(role_id, permission_code)` ⇒ الهجرة عاطلةُ الأثر
--     إن أُعيد تشغيلها؛
--   * قابلة للتراجع (`down/0140_accountant_approves_van_closing.down.sql`).

INSERT INTO role_permissions (role_id, permission_code)
SELECT r.id, code.code
FROM roles r
       CROSS JOIN (VALUES ('van_sales.view'), ('van_sales.closing.approve')) AS code(code)
WHERE r.deleted_at IS NULL
  AND r.name IN ('Accountant', 'محاسب')
  AND EXISTS (SELECT 1 FROM permissions p WHERE p.code = code.code)
  -- دورٌ يملك `*` لا يحتاج شيئاً، ولا يُكتب له صفٌّ زائد.
  AND NOT EXISTS (SELECT 1
                  FROM role_permissions wild
                  WHERE wild.role_id = r.id
                    AND wild.permission_code = '*')
ON CONFLICT (role_id, permission_code) DO NOTHING;
