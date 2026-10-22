# نطاق المشروع المكتشف — المرحلة الأولى

التاريخ: 2026-10-21. الفرع: `arena/db901dc9-erp-cloud-f`. الأساس: `f7c873be9cdb701a1858dbb7ba37b9bf62870685`. كانت شجرة العمل نظيفة عند البدء. الفحص للمستودع المحلي الحقيقي؛ لم تُفحص PRs أو بيئة GitHub المنشورة.

## التطبيقات والحزم
- 9 أدلة تطبيقات: API، staff، marketing، platform-admin، customer-portal، bakery، migrator، android-rep، android-bakery.
- 5 واجهات Next.js؛ API NestJS؛ أداة migrator؛ تطبيقان Android، ليست تسعة خوادم ويب.
- 7 حزم مشتركة: config، contracts، database، testing، ui، web-core، web-van.
- 51 مجلد وحدة API، ليست كلها وحدات محاسبية مستقلة: accounting, ai, announcements, approvals, backups, campaigns, comments, compat, content, crm, custom-fields, dashboards, developer, devices, ecommerce, einvoicing, email, employee, fitment, hrm, installments, integrations, inventory, marina, marketplace, migration, ocr, operations, optics, organization, parties, payments, platform, platform-services, portal, pos, projects, purchases, releases, reporting, sales, site-analytics, status, supplier-portal, support, tailoring, treasury, usage, van-sales, verify, weekly-report.
- 300 ملف صفحة ويب اكتُشف؛ التفصيل في SCREEN_REGISTER. العدد لا يشمل النوافذ أو كل مثيلات التقارير والمعرفات الديناميكية؛ إجمالي الشاشات الفعلية لم يعتمد بعد.

## مراجع قُرئت قراءة موجهة
`package.json` وملفات حزم API/database/staff، `infrastructure/docker-compose.yml`، `deploy/docker-compose.yml`، `scripts/local-db.mjs` و`local-start.sh` و`next-run.mjs` و`setup-env.mjs`، README وحدات inventory/purchases/treasury/reporting، تقارير PROJECT_AUDIT_FINDINGS_REVIEWED وPRODUCTION_POSTING_AND_MATERIAL_SOURCE_REPORT وEINVOICE_QR_HONESTY_REPORT (قراءة جزئية). تقارير الماضي أدلة تاريخية فقط وليست نتائج الجولة الحالية. README المخزون ما زال يصف الإنتاج بلا قيد على إطلاقه بينما تقرير لاحق يصف الربط الاختياري؛ يجب الرجوع للكود والإعداد المحلي.

## التشغيل والتقنية
Node >=22؛ pnpm 9.15.0؛ TypeScript؛ Next 15 / React 19؛ NestJS 11؛ Drizzle؛ PostgreSQL 16؛ Redis 7 / BullMQ؛ MinIO وMailHog اختياريان حسب التشغيل. لا README جذري مكتشف. أوامر التشغيل الرسمية في scripts/local-start.sh. لا تستخدم سكربت الإقلاع الشامل قبل مراجعة إعدادات البيانات والتكاملات.

## تدفقات مالية تحتاج تحقق تشغيلي
المبيعات والمشتريات تستدعيان InventoryService وAccountingService وملفات الترحيل. الخزينة تدير vouchers ووسائل دفع وتحويلات وإغلاق ورديات وشيكات. القيود ترتبط بالمصدر عبر source_type/source_id وبعض المستندات تحفظ journal_entry_id. الأرصدة الدفترية مشتقة من journal_entries/journal_entry_lines؛ المخزون من inventory_transactions وstock_balances كرصيد مخبأ. التوافق القديم compat ومبيعات المندوب والمخبز لها مسارات إضافية لا يجوز افتراض تطابقها مع الدورة العامة.

## قاعدة البيانات
اكتُشف 256 تصريح pgTable في مخططات TypeScript، وليس عدداً مؤكداً لجداول قاعدة مطبقة. آخر اسم ترحيل رئيسي مكتشف 0139_esign_otp_attempts.sql؛ توجد generated وdown. راجع DATABASE_REGISTER لمصادر الجداول والفهارس والقيود. RLS وسياق withTenantTx موجودان؛ التطبيق بدور erp_api والمهاجر منفصل erp_migrator حسب ملفات الإعداد. لم تُثبت صلاحيات قاعدة حية بعد.

## حدود المرحلة
لم يُنفذ مستند مالي أو حفظ أو اعتماد. لا بيانات إنتاج ولا إعدادات شركة معدلة. لا يوجد إثبات بصري حالياً. جرد Android والنوافذ وصلاحيات كل شاشة واعتماد كل تقرير لا يزال مفتوحاً.


## تحديث التشغيل الفعلي — الجولة الثانية
PostgreSQL16.14 محلي مضمن على55432؛ قاعدةaudit_2026؛ طبق سجل الهجرات والبذرة الرسمية بنجاح (local-migrations.txt/local-seed.txt). erp_api محدود NOBYPASSRLS وerp_migrator دور الإعداد المحلي المرتفع حسب السكربت؛ لم يختبر كلRLS ضمن هذه الجولة. افتتحت البذرة سنة2026 و12 فترة وSAR ودليل الحسابات والملف الافتراضي. هوية شركة اختبار معلنة وليست بيانات شركة حقيقية. API علىloopback3000، وstaff على0.0.0.0:3001 مع API proxy؛ الواجهة قابلة للمعاينة دون عناوينlocalhost في استدعاءات المتصفح.
المستخدم المالك نفذ البيانات الأساسية والشراء/البيع الآجل. مستخدمCashier مستقل جُرب للقراءة المرفوضة على الحسابات والقيود والأدوار. لم نعدل أياً من صلاحيات seed أو حساباته؛ افتتحنا الشاشات فقط. تفاصيل النتائج لا تختزل إلى عدد ملفات المصدر.

## تحديث الجولة الرابعة — الحالة التشغيلية الحالية
العناوينوالعباراتالأولىالتيلمتنفذبعدتصفمرحلةالاكتشافالتاريخية،ولا تلغيأدلةالمراحلاللاحقة. الآن API وstaff وbakery شغلتعملياً؛بقيتثلاثواجهاتNext وAndroid دونتشغيل. جرىفحص160من300ملفصفحةضمنالزيارة/رفضالصلاحية/التحويل،لااختباروظائف160صفحةكاملاً.

قيدENV-003:القاعدةالمؤقتةالقديمةaudit_2026 ومحيطتشغيلهاغيرمتاحينفيالاستئناف؛الأدلةباقية. الحاليaudit_readonly_r4 جديدببذرةمعلنةبلاقيودافتتاحيةولافواتير،ولاخلطبينمجاميعهودورةPUR/SALالسابقة.0قيود/حركاتقبلوبعدالفحصالقرائي؛لاإعادةمستنداتأومحوإخفاقات. تفصيلالتغطيةوالتطبيقاتوالحدودوالأدلةفيROUND4_PROGRESS.md.

## تحديث الجولة الخامسة — جميع أسطح الويب مشغلة
الآن: API + staff + bakery + platform-admin + customer-portal + marketing. الوحيد الذي لم يُشغّل هو تطبيقAndroid. شُغّلت الثلاثة علىfixture التدقيق القرائي نفسها وبنفس الـAPI، وببناء/تشغيل إنتاجي.

التغطية235 من300 صفحة، والباقي65 أغلبها صفحات تفاصيل تحتاج معرفات حقيقية. حدود الوصول مقاسة على5 فاعلين (بلا جلسة، بوابة، مندوب، مالك منشأة، مشغل منصة) وموثقة فيROUND5_PROGRESS. لم يُختبر أي دفع أو اشتراك أو نسخ إنتاجي أو إشعار خارجي، ولا دورة مالية. الحالة المالية كما هي: **غير معتمد**.

## تحديث الجولة السادسة — تغطية الفتح مكتملة
كل ملفات الصفحات الثلاثمئة لها الآن دليل مصوّر، لكن التوزيع يهم: 261 صفحة عرضت محتواها، و32 صفحة جُرّب فيها مسار «غير موجود/خطأ» فقط (لغياب مستندات حقيقية)، و7 تحويل/رفض/فشل مالي. لا صفحة `NOT_RUN`.

**التغطية الوظيفية لم تتغير:** لا دورة مالية معتمدة، ولا حفظ مستند في هذه الجولة، ولا اختبار للنسخ/الاستعادة/الدفع/المزامنة/الإشعارات، وAndroid لم يُشغّل. أُضيف قرار تصميم يحتاج حسمه قبل الإنتاج: OBS-006 (`GET /einvoice/settings` يُنشئ إعداداً). النظام **غير معتمد مالياً**، والحالة المالية كما هي في الجولات السابقة.
