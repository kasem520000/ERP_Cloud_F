# سجل الشاشات — محدث 2026-10-22

هذا حصر ملفات صفحات Next.js وليس إثبات فتحها. المسارات الديناميكية تحتاج معرفات محلية؛ مجموعات المسار بين قوسين ليست أجزاء URL. النوافذ المضمنة وشاشات Android والتقارير الديناميكية تحتاج جرداً تكميلياً أثناء التشغيل. الحالة `NOT_RUN` لا تعني نجاحاً.

| ID | التطبيق | مسار مرشح | المصدر | الحالة/العائق |
|---|---|---|---|---|
| SCR-0001 | bakery | /accounting | `apps/bakery/app/accounting/page.tsx` | OPENED_READ_ONLY_R4 — RO4-B001؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0002 | bakery | /collection | `apps/bakery/app/collection/page.tsx` | OPENED_READ_ONLY_R4 — RO4-B002؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0003 | bakery | /custody | `apps/bakery/app/custody/page.tsx` | OPENED_READ_ONLY_R4 — RO4-B003؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0004 | bakery | /distribution | `apps/bakery/app/distribution/page.tsx` | OPENED_READ_ONLY_R4 — RO4-B004؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0005 | bakery | / | `apps/bakery/app/page.tsx` | OPENED_READ_ONLY_R4 — RO4-B005؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0006 | bakery | /production | `apps/bakery/app/production/page.tsx` | OPENED_READ_ONLY_R4 — RO4-B006؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0007 | bakery | /rep | `apps/bakery/app/rep/page.tsx` | OPENED_REP_READ_ONLY — المالك غير مرتبط RO4-B007؛ R4-REP-001 بالمندوب الرسمي؛ GET scope ناجح فقط |
| SCR-0008 | bakery | /reports | `apps/bakery/app/reports/page.tsx` | OPENED_READ_ONLY_R4 — RO4-B008؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0009 | bakery | /reps | `apps/bakery/app/reps/page.tsx` | OPENED_READ_ONLY_R4 — RO4-B009؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0010 | bakery | /sales | `apps/bakery/app/sales/page.tsx` | OPENED_READ_ONLY_R4 — RO4-B010؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0011 | bakery | /treasury | `apps/bakery/app/treasury/page.tsx` | OPENED_READ_ONLY_R4 — RO4-B011؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0012 | customer-portal | /auth/change-password | `apps/customer-portal/app/auth/change-password/page.tsx` | READ_ONLY_OPEN_R5 — RO5-P001؛ RO5 قراءة فقط؛ لا حفظ ولا اعتماد ولا تغيير إعدادات |
| SCR-0013 | customer-portal | /auth/forgot | `apps/customer-portal/app/auth/forgot/page.tsx` | READ_ONLY_OPEN_R5 — RO5-P002؛ RO5 قراءة فقط؛ لا حفظ ولا اعتماد ولا تغيير إعدادات |
| SCR-0014 | customer-portal | /auth/login | `apps/customer-portal/app/auth/login/page.tsx` | READ_ONLY_OPEN_R5 — RO5-P003AUTH؛ RO5 قراءة فقط؛ لا حفظ ولا اعتماد ولا تغيير إعدادات |
| SCR-0015 | customer-portal | / | `apps/customer-portal/app/page.tsx` | REDIRECT_R5 — RO5-P004؛ RO5 تحويل مقصود أو إعادة توجيه قبل رسم المحتوى |
| SCR-0016 | customer-portal | /portal/invoices/[id] | `apps/customer-portal/app/portal/invoices/[id]/page.tsx` | EMPTY_OR_ERROR_STATE_R6 — RO6-P011؛ RO6 مستند غير متاح: رسالة عربية واضحة بلا بيانات ولا نموذج دفع |
| SCR-0017 | customer-portal | /portal/invoices/[id]/pay | `apps/customer-portal/app/portal/invoices/[id]/pay/page.tsx` | EMPTY_OR_ERROR_STATE_R6 — RO6-P012؛ RO6 مستند غير متاح: رسالة عربية واضحة بلا بيانات ولا نموذج دفع |
| SCR-0018 | customer-portal | /portal/invoices | `apps/customer-portal/app/portal/invoices/page.tsx` | READ_ONLY_OPEN_R5 — RO5-P005AUTH؛ RO5 قراءة فقط؛ لا حفظ ولا اعتماد ولا تغيير إعدادات |
| SCR-0019 | customer-portal | /portal | `apps/customer-portal/app/portal/page.tsx` | READ_ONLY_OPEN_R5 — RO5-P006AUTH؛ RO5 قراءة فقط؛ لا حفظ ولا اعتماد ولا تغيير إعدادات |
| SCR-0020 | customer-portal | /portal/payments | `apps/customer-portal/app/portal/payments/page.tsx` | READ_ONLY_OPEN_R5 — RO5-P007AUTH؛ RO5 قراءة فقط؛ لا حفظ ولا اعتماد ولا تغيير إعدادات |
| SCR-0021 | customer-portal | /portal/profile | `apps/customer-portal/app/portal/profile/page.tsx` | READ_ONLY_OPEN_R5 — RO5-P008AUTH؛ RO5 قراءة فقط؛ لا حفظ ولا اعتماد ولا تغيير إعدادات |
| SCR-0022 | customer-portal | /portal/statement | `apps/customer-portal/app/portal/statement/page.tsx` | READ_ONLY_OPEN_R5 — RO5-P009AUTH؛ RO5 قراءة فقط؛ لا حفظ ولا اعتماد ولا تغيير إعدادات |
| SCR-0023 | marketing | /blog/[slug] | `apps/marketing/app/blog/[slug]/page.tsx` | NOT_FOUND_CONFIRMED_R6 — RO6-M002؛ RO6 404 حقيقية بحالة HTTP404 لمحتوى غير منشور |
| SCR-0024 | marketing | /blog | `apps/marketing/app/blog/page.tsx` | READ_ONLY_OPEN_R5 — RO5-M001؛ RO5 قراءة فقط؛ لا حفظ ولا اعتماد ولا تغيير إعدادات |
| SCR-0025 | marketing | /cases/[slug] | `apps/marketing/app/cases/[slug]/page.tsx` | NOT_FOUND_CONFIRMED_R6 — RO6-M006؛ RO6 404 حقيقية بحالة HTTP404 لمحتوى غير منشور |
| SCR-0026 | marketing | /cases | `apps/marketing/app/cases/page.tsx` | READ_ONLY_OPEN_R5 — RO5-M002؛ RO5 قراءة فقط؛ لا حفظ ولا اعتماد ولا تغيير إعدادات |
| SCR-0027 | marketing | /changelog/[slug] | `apps/marketing/app/changelog/[slug]/page.tsx` | NOT_FOUND_CONFIRMED_R6 — RO6-M005؛ RO6 404 حقيقية بحالة HTTP404 لمحتوى غير منشور |
| SCR-0028 | marketing | /changelog | `apps/marketing/app/changelog/page.tsx` | READ_ONLY_OPEN_R5 — RO5-M003؛ RO5 قراءة فقط؛ لا حفظ ولا اعتماد ولا تغيير إعدادات |
| SCR-0029 | marketing | /contact | `apps/marketing/app/contact/page.tsx` | READ_ONLY_OPEN_R5 — RO5-M004؛ RO5 قراءة فقط؛ لا حفظ ولا اعتماد ولا تغيير إعدادات |
| SCR-0030 | marketing | /demo | `apps/marketing/app/demo/page.tsx` | READ_ONLY_OPEN_R5 — RO5-M005؛ RO5 قراءة فقط؛ لا حفظ ولا اعتماد ولا تغيير إعدادات |
| SCR-0031 | marketing | /design | `apps/marketing/app/design/page.tsx` | NOT_FOUND_BY_DESIGN — RO5-M006؛ تصحيح R6: الشيفرة تُعيد notFound في الإنتاج؛ كانت مصنفة خطأً في R5 |
| SCR-0032 | marketing | /en/blog/[slug] | `apps/marketing/app/en/blog/[slug]/page.tsx` | NOT_FOUND_CONFIRMED_R6 — RO6-M008؛ RO6 404 حقيقية بحالة HTTP404 لمحتوى غير منشور |
| SCR-0033 | marketing | /en/blog | `apps/marketing/app/en/blog/page.tsx` | READ_ONLY_OPEN_R5 — RO5-M007؛ RO5 قراءة فقط؛ لا حفظ ولا اعتماد ولا تغيير إعدادات |
| SCR-0034 | marketing | /en/cases/[slug] | `apps/marketing/app/en/cases/[slug]/page.tsx` | NOT_FOUND_CONFIRMED_R6 — RO6-M007؛ RO6 404 حقيقية بحالة HTTP404 لمحتوى غير منشور |
| SCR-0035 | marketing | /en/cases | `apps/marketing/app/en/cases/page.tsx` | READ_ONLY_OPEN_R5 — RO5-M008؛ RO5 قراءة فقط؛ لا حفظ ولا اعتماد ولا تغيير إعدادات |
| SCR-0036 | marketing | /en/features/einvoicing | `apps/marketing/app/en/features/einvoicing/page.tsx` | READ_ONLY_OPEN_R5 — RO5-M009؛ RO5 قراءة فقط؛ لا حفظ ولا اعتماد ولا تغيير إعدادات |
| SCR-0037 | marketing | /en/features | `apps/marketing/app/en/features/page.tsx` | READ_ONLY_OPEN_R5 — RO5-M010؛ RO5 قراءة فقط؛ لا حفظ ولا اعتماد ولا تغيير إعدادات |
| SCR-0038 | marketing | /en/help/[slug] | `apps/marketing/app/en/help/[slug]/page.tsx` | NOT_FOUND_CONFIRMED_R6 — RO6-M009؛ RO6 404 حقيقية بحالة HTTP404 لمحتوى غير منشور |
| SCR-0039 | marketing | /en/help | `apps/marketing/app/en/help/page.tsx` | READ_ONLY_OPEN_R5 — RO5-M011؛ RO5 قراءة فقط؛ لا حفظ ولا اعتماد ولا تغيير إعدادات |
| SCR-0040 | marketing | /en/legal/[slug] | `apps/marketing/app/en/legal/[slug]/page.tsx` | NOT_FOUND_CONFIRMED_R6 — RO6-M004؛ RO6 404 حقيقية بحالة HTTP404 لمحتوى غير منشور |
| SCR-0041 | marketing | /en | `apps/marketing/app/en/page.tsx` | READ_ONLY_OPEN_R5 — RO5-M012؛ RO5 قراءة فقط؛ لا حفظ ولا اعتماد ولا تغيير إعدادات |
| SCR-0042 | marketing | /features/einvoicing | `apps/marketing/app/features/einvoicing/page.tsx` | READ_ONLY_OPEN_R5 — RO5-M013؛ RO5 قراءة فقط؛ لا حفظ ولا اعتماد ولا تغيير إعدادات |
| SCR-0043 | marketing | /features | `apps/marketing/app/features/page.tsx` | READ_ONLY_OPEN_R5 — RO5-M014؛ RO5 قراءة فقط؛ لا حفظ ولا اعتماد ولا تغيير إعدادات |
| SCR-0044 | marketing | /help/[slug] | `apps/marketing/app/help/[slug]/page.tsx` | NOT_FOUND_CONFIRMED_R6 — RO6-M001؛ RO6 404 حقيقية بحالة HTTP404 لمحتوى غير منشور |
| SCR-0045 | marketing | /help | `apps/marketing/app/help/page.tsx` | READ_ONLY_OPEN_R5 — RO5-M015؛ RO5 قراءة فقط؛ لا حفظ ولا اعتماد ولا تغيير إعدادات |
| SCR-0046 | marketing | /industries/[slug] | `apps/marketing/app/industries/[slug]/page.tsx` | READ_ONLY_OPEN_R5 — RO5-M016؛ RO5 قراءة فقط؛ لا حفظ ولا اعتماد ولا تغيير إعدادات |
| SCR-0047 | marketing | /industries | `apps/marketing/app/industries/page.tsx` | READ_ONLY_OPEN_R5 — RO5-M017؛ RO5 قراءة فقط؛ لا حفظ ولا اعتماد ولا تغيير إعدادات |
| SCR-0048 | marketing | /legal/[slug] | `apps/marketing/app/legal/[slug]/page.tsx` | NOT_FOUND_CONFIRMED_R6 — RO6-M003؛ RO6 404 حقيقية بحالة HTTP404 لمحتوى غير منشور |
| SCR-0049 | marketing | /login | `apps/marketing/app/login/page.tsx` | READ_ONLY_OPEN_R5 — RO5-M018؛ RO5 قراءة فقط؛ لا حفظ ولا اعتماد ولا تغيير إعدادات |
| SCR-0050 | marketing | /maintenance | `apps/marketing/app/maintenance/page.tsx` | READ_ONLY_OPEN_R5 — RO5-M019؛ RO5 قراءة فقط؛ لا حفظ ولا اعتماد ولا تغيير إعدادات |
| SCR-0051 | marketing | /not-found-view/[locale] | `apps/marketing/app/not-found-view/[locale]/page.tsx` | READ_ONLY_OPEN_R5 — RO5-M020؛ RO5 قراءة فقط؛ لا حفظ ولا اعتماد ولا تغيير إعدادات |
| SCR-0052 | marketing | /onboarding | `apps/marketing/app/onboarding/page.tsx` | READ_ONLY_OPEN_R5 — RO5-M021؛ RO5 قراءة فقط؛ لا حفظ ولا اعتماد ولا تغيير إعدادات |
| SCR-0053 | marketing | / | `apps/marketing/app/page.tsx` | READ_ONLY_OPEN_R5 — RO5-M022؛ RO5 قراءة فقط؛ لا حفظ ولا اعتماد ولا تغيير إعدادات |
| SCR-0054 | marketing | /pricing | `apps/marketing/app/pricing/page.tsx` | READ_ONLY_OPEN_R5 — RO5-M023؛ RO5 قراءة فقط؛ لا حفظ ولا اعتماد ولا تغيير إعدادات |
| SCR-0055 | marketing | /status | `apps/marketing/app/status/page.tsx` | READ_ONLY_OPEN_R5 — RO5-M024؛ RO5 قراءة فقط؛ لا حفظ ولا اعتماد ولا تغيير إعدادات |
| SCR-0056 | marketing | /trust | `apps/marketing/app/trust/page.tsx` | READ_ONLY_OPEN_R5 — RO5-M025؛ RO5 قراءة فقط؛ لا حفظ ولا اعتماد ولا تغيير إعدادات |
| SCR-0057 | marketing | /unsubscribe | `apps/marketing/app/unsubscribe/page.tsx` | READ_ONLY_OPEN_R5 — RO5-M026؛ RO5 قراءة فقط؛ لا حفظ ولا اعتماد ولا تغيير إعدادات |
| SCR-0058 | marketing | /verify | `apps/marketing/app/verify/page.tsx` | READ_ONLY_OPEN_R5 — RO5-M027؛ RO5 قراءة فقط؛ لا حفظ ولا اعتماد ولا تغيير إعدادات |
| SCR-0059 | platform-admin | /activation-requests | `apps/platform-admin/app/activation-requests/page.tsx` | READ_ONLY_OPEN_R5 — RO5-A001؛ RO5 قراءة فقط؛ لا حفظ ولا اعتماد ولا تغيير إعدادات |
| SCR-0060 | platform-admin | /ai | `apps/platform-admin/app/ai/page.tsx` | READ_ONLY_OPEN_R5 — RO5-A002؛ RO5 قراءة فقط؛ لا حفظ ولا اعتماد ولا تغيير إعدادات |
| SCR-0061 | platform-admin | /analytics | `apps/platform-admin/app/analytics/page.tsx` | READ_ONLY_OPEN_R5 — RO5-A003؛ RO5 قراءة فقط؛ لا حفظ ولا اعتماد ولا تغيير إعدادات |
| SCR-0062 | platform-admin | /analytics/site | `apps/platform-admin/app/analytics/site/page.tsx` | READ_ONLY_OPEN_R5 — RO5-A004؛ RO5 قراءة فقط؛ لا حفظ ولا اعتماد ولا تغيير إعدادات |
| SCR-0063 | platform-admin | /announcements | `apps/platform-admin/app/announcements/page.tsx` | READ_ONLY_OPEN_R5 — RO5-A005؛ RO5 قراءة فقط؛ لا حفظ ولا اعتماد ولا تغيير إعدادات |
| SCR-0064 | platform-admin | /api-explorer | `apps/platform-admin/app/api-explorer/page.tsx` | READ_ONLY_OPEN_R5 — RO5-A006؛ RO5 قراءة فقط؛ لا حفظ ولا اعتماد ولا تغيير إعدادات |
| SCR-0065 | platform-admin | /api-keys | `apps/platform-admin/app/api-keys/page.tsx` | READ_ONLY_OPEN_R5 — RO5-A007؛ RO5 قراءة فقط؛ لا حفظ ولا اعتماد ولا تغيير إعدادات |
| SCR-0066 | platform-admin | /audit | `apps/platform-admin/app/audit/page.tsx` | READ_ONLY_OPEN_R5 — RO5-A008؛ RO5 قراءة فقط؛ لا حفظ ولا اعتماد ولا تغيير إعدادات |
| SCR-0067 | platform-admin | /backups | `apps/platform-admin/app/backups/page.tsx` | READ_ONLY_OPEN_R5 — RO5-A009؛ RO5 قراءة فقط؛ لا حفظ ولا اعتماد ولا تغيير إعدادات |
| SCR-0068 | platform-admin | /campaigns | `apps/platform-admin/app/campaigns/page.tsx` | READ_ONLY_OPEN_R5 — RO5-A010؛ RO5 قراءة فقط؛ لا حفظ ولا اعتماد ولا تغيير إعدادات |
| SCR-0069 | platform-admin | /content | `apps/platform-admin/app/content/page.tsx` | READ_ONLY_OPEN_R5 — RO5-A011؛ RO5 قراءة فقط؛ لا حفظ ولا اعتماد ولا تغيير إعدادات |
| SCR-0070 | platform-admin | /data-requests | `apps/platform-admin/app/data-requests/page.tsx` | READ_ONLY_OPEN_R5 — RO5-A012؛ RO5 قراءة فقط؛ لا حفظ ولا اعتماد ولا تغيير إعدادات |
| SCR-0071 | platform-admin | /design | `apps/platform-admin/app/design/page.tsx` | NOT_FOUND_BY_DESIGN — RO5-A013؛ تصحيح R6: الشيفرة تُعيد notFound في الإنتاج؛ كانت مصنفة خطأً في R5 |
| SCR-0072 | platform-admin | /dunning | `apps/platform-admin/app/dunning/page.tsx` | READ_ONLY_OPEN_R5 — RO5-A014؛ RO5 قراءة فقط؛ لا حفظ ولا اعتماد ولا تغيير إعدادات |
| SCR-0073 | platform-admin | /email | `apps/platform-admin/app/email/page.tsx` | READ_ONLY_OPEN_R5 — RO5-A015؛ RO5 قراءة فقط؛ لا حفظ ولا اعتماد ولا تغيير إعدادات |
| SCR-0074 | platform-admin | /files | `apps/platform-admin/app/files/page.tsx` | READ_ONLY_OPEN_R5 — RO5-A016؛ RO5 قراءة فقط؛ لا حفظ ولا اعتماد ولا تغيير إعدادات |
| SCR-0075 | platform-admin | /health | `apps/platform-admin/app/health/page.tsx` | READ_ONLY_OPEN_R5 — RO5-A017؛ RO5 قراءة فقط؛ لا حفظ ولا اعتماد ولا تغيير إعدادات |
| SCR-0076 | platform-admin | /impersonation | `apps/platform-admin/app/impersonation/page.tsx` | READ_ONLY_OPEN_R5 — RO5-A018؛ RO5 قراءة فقط؛ لا حفظ ولا اعتماد ولا تغيير إعدادات |
| SCR-0077 | platform-admin | /invoices/[id]/print | `apps/platform-admin/app/invoices/[id]/print/page.tsx` | ERROR_STATE_R6 — RO6-A002؛ RO6 حالة خطأ معروضة؛ نصّ API الإنجليزي ظاهر للمستخدم |
| SCR-0078 | platform-admin | /invoices | `apps/platform-admin/app/invoices/page.tsx` | READ_ONLY_OPEN_R5 — RO5-A019؛ RO5 قراءة فقط؛ لا حفظ ولا اعتماد ولا تغيير إعدادات |
| SCR-0079 | platform-admin | /jobs | `apps/platform-admin/app/jobs/page.tsx` | READ_ONLY_OPEN_R5 — RO5-A020؛ RO5 قراءة فقط؛ لا حفظ ولا اعتماد ولا تغيير إعدادات |
| SCR-0080 | platform-admin | /leads | `apps/platform-admin/app/leads/page.tsx` | READ_ONLY_OPEN_R5 — RO5-A021؛ RO5 قراءة فقط؛ لا حفظ ولا اعتماد ولا تغيير إعدادات |
| SCR-0081 | platform-admin | /login | `apps/platform-admin/app/login/page.tsx` | REDIRECT_R5 — RO5-A022؛ RO5 تحويل مقصود أو إعادة توجيه قبل رسم المحتوى |
| SCR-0082 | platform-admin | /marketplace | `apps/platform-admin/app/marketplace/page.tsx` | READ_ONLY_OPEN_R5 — RO5-A023؛ RO5 قراءة فقط؛ لا حفظ ولا اعتماد ولا تغيير إعدادات |
| SCR-0083 | platform-admin | / | `apps/platform-admin/app/page.tsx` | READ_ONLY_OPEN_R5 — RO5-A024؛ RO5 قراءة فقط؛ لا حفظ ولا اعتماد ولا تغيير إعدادات |
| SCR-0084 | platform-admin | /plans | `apps/platform-admin/app/plans/page.tsx` | READ_ONLY_OPEN_R5 — RO5-A025؛ RO5 قراءة فقط؛ لا حفظ ولا اعتماد ولا تغيير إعدادات |
| SCR-0085 | platform-admin | /problems | `apps/platform-admin/app/problems/page.tsx` | READ_ONLY_OPEN_R5 — RO5-A026؛ RO5 قراءة فقط؛ لا حفظ ولا اعتماد ولا تغيير إعدادات |
| SCR-0086 | platform-admin | /releases | `apps/platform-admin/app/releases/page.tsx` | READ_ONLY_OPEN_R5 — RO5-A027؛ RO5 قراءة فقط؛ لا حفظ ولا اعتماد ولا تغيير إعدادات |
| SCR-0087 | platform-admin | /revenue | `apps/platform-admin/app/revenue/page.tsx` | READ_ONLY_OPEN_R5 — RO5-A028؛ RO5 قراءة فقط؛ لا حفظ ولا اعتماد ولا تغيير إعدادات |
| SCR-0088 | platform-admin | /roles | `apps/platform-admin/app/roles/page.tsx` | READ_ONLY_OPEN_R5 — RO5-A029؛ RO5 قراءة فقط؛ لا حفظ ولا اعتماد ولا تغيير إعدادات |
| SCR-0089 | platform-admin | /settings | `apps/platform-admin/app/settings/page.tsx` | READ_ONLY_OPEN_R5 — RO5-A030؛ RO5 قراءة فقط؛ لا حفظ ولا اعتماد ولا تغيير إعدادات |
| SCR-0090 | platform-admin | /subscriptions | `apps/platform-admin/app/subscriptions/page.tsx` | READ_ONLY_OPEN_R5 — RO5-A031؛ RO5 قراءة فقط؛ لا حفظ ولا اعتماد ولا تغيير إعدادات |
| SCR-0091 | platform-admin | /tenants/[id] | `apps/platform-admin/app/tenants/[id]/page.tsx` | READ_ONLY_OPEN_R5 — RO5-A032؛ RO5 قراءة فقط؛ لا حفظ ولا اعتماد ولا تغيير إعدادات |
| SCR-0092 | platform-admin | /tenants/new | `apps/platform-admin/app/tenants/new/page.tsx` | READ_ONLY_OPEN_R5 — RO5-A033؛ RO5 قراءة فقط؛ لا حفظ ولا اعتماد ولا تغيير إعدادات |
| SCR-0093 | platform-admin | /tenants | `apps/platform-admin/app/tenants/page.tsx` | READ_ONLY_OPEN_R5 — RO5-A034؛ RO5 قراءة فقط؛ لا حفظ ولا اعتماد ولا تغيير إعدادات |
| SCR-0094 | platform-admin | /tickets/[id] | `apps/platform-admin/app/tickets/[id]/page.tsx` | ERROR_STATE_R6 — RO6-A001؛ RO6 حالة خطأ معروضة؛ نصّ API الإنجليزي ظاهر للمستخدم |
| SCR-0095 | platform-admin | /tickets | `apps/platform-admin/app/tickets/page.tsx` | READ_ONLY_OPEN_R5 — RO5-A035؛ RO5 قراءة فقط؛ لا حفظ ولا اعتماد ولا تغيير إعدادات |
| SCR-0096 | platform-admin | /usage | `apps/platform-admin/app/usage/page.tsx` | READ_ONLY_OPEN_R5 — RO5-A036؛ RO5 قراءة فقط؛ لا حفظ ولا اعتماد ولا تغيير إعدادات |
| SCR-0097 | platform-admin | /users/[id] | `apps/platform-admin/app/users/[id]/page.tsx` | READ_ONLY_OPEN_R5 — RO5-A037؛ RO5 قراءة فقط؛ لا حفظ ولا اعتماد ولا تغيير إعدادات |
| SCR-0098 | platform-admin | /users | `apps/platform-admin/app/users/page.tsx` | READ_ONLY_OPEN_R5 — RO5-A038؛ RO5 قراءة فقط؛ لا حفظ ولا اعتماد ولا تغيير إعدادات |
| SCR-0099 | platform-admin | /webhooks | `apps/platform-admin/app/webhooks/page.tsx` | READ_ONLY_OPEN_R5 — RO5-A039؛ RO5 قراءة فقط؛ لا حفظ ولا اعتماد ولا تغيير إعدادات |
| SCR-0100 | staff | /accounting/accounts | `apps/staff/app/accounting/accounts/page.tsx` | OPENED_READ_ONLY — RO3-001؛ لا قبول وظيفي شامل |
| SCR-0101 | staff | /accounting/accounts/tree | `apps/staff/app/accounting/accounts/tree/page.tsx` | OPENED_READ_ONLY — RO3-002؛ لا قبول وظيفي شامل |
| SCR-0102 | staff | /accounting/cash-locations | `apps/staff/app/accounting/cash-locations/page.tsx` | OPENED_READ_ONLY — RO3-010؛ لا قبول وظيفي شامل |
| SCR-0103 | staff | /accounting/cost-center-statement | `apps/staff/app/accounting/cost-center-statement/page.tsx` | OPENED_READ_ONLY — RO3-006؛ لا قبول وظيفي شامل |
| SCR-0104 | staff | /accounting/cost-centers | `apps/staff/app/accounting/cost-centers/page.tsx` | OPENED_READ_ONLY — RO3-005؛ لا قبول وظيفي شامل |
| SCR-0105 | staff | /accounting/expenses | `apps/staff/app/accounting/expenses/page.tsx` | OPENED_READ_ONLY — RO3-009؛ لا قبول وظيفي شامل |
| SCR-0106 | staff | /accounting/income-statement | `apps/staff/app/accounting/income-statement/page.tsx` | FAIL — RPT-001/002، ACC-003 ربح1050 بدلاً150 افتراضياً |
| SCR-0107 | staff | /accounting/journal-entries/[id] | `apps/staff/app/accounting/journal-entries/[id]/page.tsx` | PROBE_404_R6 — RO6-S036؛ RO6 معرف غير موجود: عُرضت حالة خطأ صريحة بلا بيانات مُختلقة |
| SCR-0108 | staff | /accounting/journal-entries/new | `apps/staff/app/accounting/journal-entries/new/page.tsx` | DENIED_AS_EXPECTED — RBAC-002 cashier؛ لم ينشأ قيد يدوي |
| SCR-0109 | staff | /accounting/journal-entries | `apps/staff/app/accounting/journal-entries/page.tsx` | OPENED_READ_ONLY — RO3-004؛ لا قبول وظيفي شامل |
| SCR-0110 | staff | /accounting/ledger | `apps/staff/app/accounting/ledger/page.tsx` | OPENED_READ_ONLY — RO3-003؛ لا قبول وظيفي شامل |
| SCR-0111 | staff | /accounting/payment-methods | `apps/staff/app/accounting/payment-methods/page.tsx` | OPENED_READ_ONLY — RO3-008؛ لا قبول وظيفي شامل |
| SCR-0112 | staff | /accounting/periods | `apps/staff/app/accounting/periods/page.tsx` | OPENED_READ_ONLY — RO3-007؛ لا قبول وظيفي شامل |
| SCR-0113 | staff | /accounting/trial-balance | `apps/staff/app/accounting/trial-balance/page.tsx` | PARTIAL — RPT-003؛ مطابقة للأرقام المختبرة فقط |
| SCR-0114 | staff | /approvals/history | `apps/staff/app/approvals/history/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S001؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0115 | staff | /approvals/inbox | `apps/staff/app/approvals/inbox/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S002؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0116 | staff | /assistant | `apps/staff/app/assistant/page.tsx` | READ_ONLY_OPEN_R6 — RO6-S001؛ RO6 قراءة فقط؛ فُتح المحتوى ولم يُحفظ أي تغيير |
| SCR-0117 | staff | /comments/mentions | `apps/staff/app/comments/mentions/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S003؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0118 | staff | /crm/activities | `apps/staff/app/crm/activities/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S004؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0119 | staff | /crm/deals/[id] | `apps/staff/app/crm/deals/[id]/page.tsx` | PROBE_404_R6 — RO6-S042؛ RO6 معرف غير موجود: عُرضت حالة خطأ صريحة بلا بيانات مُختلقة |
| SCR-0120 | staff | /crm/forecast | `apps/staff/app/crm/forecast/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S005؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0121 | staff | /crm/pipelines | `apps/staff/app/crm/pipelines/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S006؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0122 | staff | /dashboards/[id] | `apps/staff/app/dashboards/[id]/page.tsx` | PROBE_404_R6 — RO6-S041؛ RO6 معرف غير موجود: عُرضت حالة خطأ صريحة بلا بيانات مُختلقة |
| SCR-0123 | staff | /dashboards | `apps/staff/app/dashboards/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S007؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0124 | staff | /design | `apps/staff/app/design/page.tsx` | NOT_FOUND_BY_DESIGN_R6 — RO6-S002؛ RO6 صفحة معطّلة قصداً في الإنتاج (notFound) — سلوك مقصود لا عطب |
| SCR-0125 | staff | /esign/[token] | `apps/staff/app/esign/[token]/page.tsx` | PROBE_404_R6 — RO6-S043؛ RO6 معرف غير موجود: عُرضت حالة خطأ صريحة بلا بيانات مُختلقة |
| SCR-0126 | staff | /hrm/adjustments | `apps/staff/app/hrm/adjustments/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S008؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0127 | staff | /hrm/compliance | `apps/staff/app/hrm/compliance/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S009؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0128 | staff | /hrm/departments | `apps/staff/app/hrm/departments/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S010؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0129 | staff | /hrm/employee-movements | `apps/staff/app/hrm/employee-movements/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S011؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0130 | staff | /hrm/employee-statement | `apps/staff/app/hrm/employee-statement/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S012؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0131 | staff | /hrm/employees | `apps/staff/app/hrm/employees/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S013؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0132 | staff | /hrm/geofences | `apps/staff/app/hrm/geofences/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S014؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0133 | staff | /hrm/jobs | `apps/staff/app/hrm/jobs/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S015؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0134 | staff | /hrm/leaves | `apps/staff/app/hrm/leaves/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S016؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0135 | staff | /hrm/payroll/[id] | `apps/staff/app/hrm/payroll/[id]/page.tsx` | PROBE_404_R6 — RO6-S044؛ RO6 معرف غير موجود: عُرضت حالة خطأ صريحة بلا بيانات مُختلقة |
| SCR-0136 | staff | /hrm/payroll/[id]/wps | `apps/staff/app/hrm/payroll/[id]/wps/page.tsx` | PROBE_404_R6 — RO6-S045؛ RO6 معرف غير موجود: عُرضت حالة خطأ صريحة بلا بيانات مُختلقة |
| SCR-0137 | staff | /hrm/payroll | `apps/staff/app/hrm/payroll/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S017؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0138 | staff | /hrm/salary-payments | `apps/staff/app/hrm/salary-payments/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S018؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0139 | staff | /hrm/salary-report | `apps/staff/app/hrm/salary-report/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S019؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0140 | staff | /integrations/salla/orders | `apps/staff/app/integrations/salla/orders/page.tsx` | READ_ONLY_OPEN_R6 — RO6-S003؛ RO6 قراءة فقط؛ فُتح المحتوى ولم يُحفظ أي تغيير |
| SCR-0141 | staff | /integrations/salla/products | `apps/staff/app/integrations/salla/products/page.tsx` | READ_ONLY_OPEN_R6 — RO6-S004؛ RO6 قراءة فقط؛ فُتح المحتوى ولم يُحفظ أي تغيير |
| SCR-0142 | staff | /integrations/salla/settings | `apps/staff/app/integrations/salla/settings/page.tsx` | READ_ONLY_OPEN_R6 — RO6-S005؛ RO6 قراءة فقط؛ فُتح المحتوى ولم يُحفظ أي تغيير |
| SCR-0143 | staff | /integrations/salla/warehouses | `apps/staff/app/integrations/salla/warehouses/page.tsx` | READ_ONLY_OPEN_R6 — RO6-S006؛ RO6 قراءة فقط؛ فُتح المحتوى ولم يُحفظ أي تغيير |
| SCR-0144 | staff | /inventory/adjustments | `apps/staff/app/inventory/adjustments/page.tsx` | OPENED_READ_ONLY — RO3-023؛ لا قبول وظيفي شامل |
| SCR-0145 | staff | /inventory/barcodes | `apps/staff/app/inventory/barcodes/page.tsx` | OPENED_READ_ONLY — RO3-029؛ لا قبول وظيفي شامل |
| SCR-0146 | staff | /inventory/below-minimum | `apps/staff/app/inventory/below-minimum/page.tsx` | OPENED_READ_ONLY — RO3-016؛ لا قبول وظيفي شامل |
| SCR-0147 | staff | /inventory/bin-balances | `apps/staff/app/inventory/bin-balances/page.tsx` | OPENED_READ_ONLY — RO3-017؛ لا قبول وظيفي شامل |
| SCR-0148 | staff | /inventory/bins | `apps/staff/app/inventory/bins/page.tsx` | OPENED_READ_ONLY — RO3-018؛ لا قبول وظيفي شامل |
| SCR-0149 | staff | /inventory/categories | `apps/staff/app/inventory/categories/page.tsx` | PARTIAL — MD-001/005/006، CTRL-001؛ إنشاء/فرعي/تعديل/رفض غير سليم، الحذف لم يختبر |
| SCR-0150 | staff | /inventory/deliveries | `apps/staff/app/inventory/deliveries/page.tsx` | OPENED_READ_ONLY — RO3-027؛ لا قبول وظيفي شامل |
| SCR-0151 | staff | /inventory/expiry | `apps/staff/app/inventory/expiry/page.tsx` | OPENED_READ_ONLY — RO3-021؛ لا قبول وظيفي شامل |
| SCR-0152 | staff | /inventory/in-transit | `apps/staff/app/inventory/in-transit/page.tsx` | OPENED_READ_ONLY — RO3-022؛ لا قبول وظيفي شامل |
| SCR-0153 | staff | /inventory/item-card | `apps/staff/app/inventory/item-card/page.tsx` | OPENED_READ_ONLY — RO3-015؛ لا قبول وظيفي شامل |
| SCR-0154 | staff | /inventory/item-units | `apps/staff/app/inventory/item-units/page.tsx` | PARTIAL — MD-008، CTRL-002؛ عامل12 محفوظ وصفر مرفوض؛ حركةBOX لم تختبر |
| SCR-0155 | staff | /inventory/items | `apps/staff/app/inventory/items/page.tsx` | PARTIAL — MD-007b إنشاء؛ DB مطابق؛ تبويبات/تعطيل لم تستكمل |
| SCR-0156 | staff | /inventory/levels | `apps/staff/app/inventory/levels/page.tsx` | OPENED_READ_ONLY — RO3-013؛ لا قبول وظيفي شامل |
| SCR-0157 | staff | /inventory/lots | `apps/staff/app/inventory/lots/page.tsx` | OPENED_READ_ONLY — RO3-019؛ لا قبول وظيفي شامل |
| SCR-0158 | staff | /inventory/movements | `apps/staff/app/inventory/movements/page.tsx` | OPENED_READ_ONLY — RO3-014؛ لا قبول وظيفي شامل |
| SCR-0159 | staff | /inventory/overview | `apps/staff/app/inventory/overview/page.tsx` | OPENED_READ_ONLY — RO3-011؛ لا قبول وظيفي شامل |
| SCR-0160 | staff | /inventory/production | `apps/staff/app/inventory/production/page.tsx` | OPENED_READ_ONLY — RO3-024؛ لا قبول وظيفي شامل |
| SCR-0161 | staff | /inventory/requests | `apps/staff/app/inventory/requests/page.tsx` | OPENED_READ_ONLY — RO3-025؛ لا قبول وظيفي شامل |
| SCR-0162 | staff | /inventory/serials | `apps/staff/app/inventory/serials/page.tsx` | OPENED_READ_ONLY — RO3-020؛ لا قبول وظيفي شامل |
| SCR-0163 | staff | /inventory/transfers | `apps/staff/app/inventory/transfers/page.tsx` | OPENED_READ_ONLY — RO3-026؛ لا قبول وظيفي شامل |
| SCR-0164 | staff | /inventory/units | `apps/staff/app/inventory/units/page.tsx` | PARTIAL — MD-002 إنشاء؛ تعديلات/حذف لم تختبر |
| SCR-0165 | staff | /inventory/vouchers | `apps/staff/app/inventory/vouchers/page.tsx` | OPENED_READ_ONLY — RO3-028؛ لا قبول وظيفي شامل |
| SCR-0166 | staff | /inventory/warehouses | `apps/staff/app/inventory/warehouses/page.tsx` | OPENED_READ_ONLY — RO3-012؛ لا قبول وظيفي شامل |
| SCR-0167 | staff | /m/approvals | `apps/staff/app/m/approvals/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S020؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0168 | staff | /m/attendance | `apps/staff/app/m/attendance/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S021؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0169 | staff | /m | `apps/staff/app/m/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S022؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0170 | staff | /m/profile | `apps/staff/app/m/profile/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S023؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0171 | staff | /m/requests/new | `apps/staff/app/m/requests/new/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S024؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0172 | staff | /manufacturing/boms | `apps/staff/app/manufacturing/boms/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S025؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0173 | staff | /manufacturing/orders | `apps/staff/app/manufacturing/orders/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S026؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0174 | staff | /marina/additions | `apps/staff/app/marina/additions/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S027؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0175 | staff | /marina/bookings | `apps/staff/app/marina/bookings/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S028؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0176 | staff | /marina/day-close | `apps/staff/app/marina/day-close/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S029؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0177 | staff | /marina/groups | `apps/staff/app/marina/groups/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S030؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0178 | staff | /marina/link-invoices | `apps/staff/app/marina/link-invoices/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S031؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0179 | staff | /marina/preparation | `apps/staff/app/marina/preparation/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S032؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0180 | staff | /marina/rota | `apps/staff/app/marina/rota/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S033؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0181 | staff | /marina/vessels | `apps/staff/app/marina/vessels/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S034؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0182 | staff | /marina/violations | `apps/staff/app/marina/violations/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S035؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0183 | staff | /migration/runs | `apps/staff/app/migration/runs/page.tsx` | READ_ONLY_OPEN_R6 — RO6-S007؛ RO6 قراءة فقط؛ فُتح المحتوى ولم يُحفظ أي تغيير |
| SCR-0184 | staff | /notifications | `apps/staff/app/notifications/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S036؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0185 | staff | /optics/field-labels | `apps/staff/app/optics/field-labels/page.tsx` | READ_ONLY_OPEN_R6 — RO6-S008؛ RO6 قراءة فقط؛ فُتح المحتوى ولم يُحفظ أي تغيير |
| SCR-0186 | staff | /optics/prescriptions | `apps/staff/app/optics/prescriptions/page.tsx` | READ_ONLY_OPEN_R6 — RO6-S009؛ RO6 قراءة فقط؛ فُتح المحتوى ولم يُحفظ أي تغيير |
| SCR-0187 | staff | / | `apps/staff/app/page.tsx` | PARTIAL — LOGIN-001/002 وRBAC-LOGIN؛ لوحة المالك ظهرت، لا اعتمادكل المؤشرات |
| SCR-0188 | staff | /pos/offline | `apps/staff/app/pos/offline/page.tsx` | READ_ONLY_OPEN_R6 — RO6-S010؛ RO6 قراءة فقط؛ فُتح المحتوى ولم يُحفظ أي تغيير |
| SCR-0189 | staff | /pos/offline-queue | `apps/staff/app/pos/offline-queue/page.tsx` | READ_ONLY_OPEN_R6 — RO6-S011؛ RO6 قراءة فقط؛ فُتح المحتوى ولم يُحفظ أي تغيير |
| SCR-0190 | staff | /print/[doc]/[id] | `apps/staff/app/print/[doc]/[id]/page.tsx` | PROBE_404_R6 — RO6-S054؛ RO6 معرف غير موجود: عُرضت حالة خطأ صريحة بلا بيانات مُختلقة |
| SCR-0191 | staff | /projects/[id]/board | `apps/staff/app/projects/[id]/board/page.tsx` | PROBE_404_R6 — RO6-S038؛ RO6 معرف غير موجود: عُرضت حالة خطأ صريحة بلا بيانات مُختلقة |
| SCR-0192 | staff | /projects/[id]/cost | `apps/staff/app/projects/[id]/cost/page.tsx` | PROBE_404_R6 — RO6-S048؛ RO6 معرف غير موجود: عُرضت حالة خطأ صريحة بلا بيانات مُختلقة |
| SCR-0193 | staff | /projects/[id]/gantt | `apps/staff/app/projects/[id]/gantt/page.tsx` | PROBE_404_R6 — RO6-S049؛ RO6 معرف غير موجود: عُرضت حالة خطأ صريحة بلا بيانات مُختلقة |
| SCR-0194 | staff | /projects/[id] | `apps/staff/app/projects/[id]/page.tsx` | PROBE_404_R6 — RO6-S047؛ RO6 معرف غير موجود: عُرضت حالة خطأ صريحة بلا بيانات مُختلقة |
| SCR-0195 | staff | /projects/[id]/tasks/[taskId] | `apps/staff/app/projects/[id]/tasks/[taskId]/page.tsx` | PROBE_404_R6 — RO6-S051؛ RO6 معرف غير موجود: عُرضت حالة خطأ صريحة بلا بيانات مُختلقة |
| SCR-0196 | staff | /projects/[id]/time | `apps/staff/app/projects/[id]/time/page.tsx` | PROBE_404_R6 — RO6-S050؛ RO6 معرف غير موجود: عُرضت حالة خطأ صريحة بلا بيانات مُختلقة |
| SCR-0197 | staff | /projects/board | `apps/staff/app/projects/board/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S037؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0198 | staff | /projects/boq | `apps/staff/app/projects/boq/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S038؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0199 | staff | /projects/contracting-return | `apps/staff/app/projects/contracting-return/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S039؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0200 | staff | /projects/contractor-contract | `apps/staff/app/projects/contractor-contract/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S040؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0201 | staff | /projects/contractor-payment | `apps/staff/app/projects/contractor-payment/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S041؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0202 | staff | /projects/cost | `apps/staff/app/projects/cost/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S042؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0203 | staff | /projects/followup | `apps/staff/app/projects/followup/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S043؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0204 | staff | /projects/gantt | `apps/staff/app/projects/gantt/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S044؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0205 | staff | /projects/offers | `apps/staff/app/projects/offers/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S045؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0206 | staff | /projects | `apps/staff/app/projects/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S046؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0207 | staff | /projects/stages | `apps/staff/app/projects/stages/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S047؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0208 | staff | /projects/tasks/[taskId] | `apps/staff/app/projects/tasks/[taskId]/page.tsx` | PROBE_404_R6 — RO6-S052؛ RO6 معرف غير موجود: عُرضت حالة خطأ صريحة بلا بيانات مُختلقة |
| SCR-0209 | staff | /projects/time | `apps/staff/app/projects/time/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S048؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0210 | staff | /purchases/invoices/[id] | `apps/staff/app/purchases/invoices/[id]/page.tsx` | OPENED_READ_ONLY — RO3-039؛ لا قبول وظيفي شامل |
| SCR-0211 | staff | /purchases/invoices/new | `apps/staff/app/purchases/invoices/new/page.tsx` | PARTIAL — PUR-001 مرحل آجل، لا سداد؛ دورة الذمم FAIL |
| SCR-0212 | staff | /purchases/invoices/ocr | `apps/staff/app/purchases/invoices/ocr/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S049؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0213 | staff | /purchases/invoices | `apps/staff/app/purchases/invoices/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S050؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0214 | staff | /purchases/notes/[kind] | `apps/staff/app/purchases/notes/[kind]/page.tsx` | OPENED_READ_ONLY — RO3-041؛ لا قبول وظيفي شامل |
| SCR-0215 | staff | /purchases | `apps/staff/app/purchases/page.tsx` | REDIRECT_ONLY_VERIFIED — RO4-S051 إلى /purchases/invoices؛ ليست شاشة محتوى مستقلة |
| SCR-0216 | staff | /purchases/supplier-portal | `apps/staff/app/purchases/supplier-portal/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S052؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0217 | staff | /purchases/suppliers | `apps/staff/app/purchases/suppliers/page.tsx` | PARTIAL — MD-003؛ كشف الطرف FAIL ACC-002 |
| SCR-0218 | staff | /reports/[key] | `apps/staff/app/reports/[key]/page.tsx` | PARTIAL/FAIL — invoice-profit ACC-004؛ item-profit/ar-aging/ap-aging مطابقة للحالة؛ غيرها NOT_RUN |
| SCR-0219 | staff | /reports/builder | `apps/staff/app/reports/builder/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S053؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0220 | staff | /reports/custom | `apps/staff/app/reports/custom/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S054؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0221 | staff | /reports | `apps/staff/app/reports/page.tsx` | OPENED_ONLY — محتوى محمل بأدلة OPEN/REOPEN/RPT؛ ليس اختبار جميع الوظائف |
| SCR-0222 | staff | /s/[...slug] | `apps/staff/app/s/[...slug]/page.tsx` | READ_ONLY_OPEN_R6 — RO6-S040؛ RO6 قراءة فقط؛ فُتح المحتوى ولم يُحفظ أي تغيير |
| SCR-0223 | staff | /sales/cash-customers | `apps/staff/app/sales/cash-customers/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S055؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0224 | staff | /sales/customers | `apps/staff/app/sales/customers/page.tsx` | PARTIAL — MD-004؛ كشف الطرف FAIL ACC-002 |
| SCR-0225 | staff | /sales/ecommerce-orders | `apps/staff/app/sales/ecommerce-orders/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S056؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0226 | staff | /sales/invoices/[id] | `apps/staff/app/sales/invoices/[id]/page.tsx` | OPENED_READ_ONLY — RO3-038؛ لا قبول وظيفي شامل |
| SCR-0227 | staff | /sales/invoices/new | `apps/staff/app/sales/invoices/new/page.tsx` | PARTIAL — SAL-001،CTRL-003؛ بيع آجل ورفض مخزون؛ دورة الذمم FAIL |
| SCR-0228 | staff | /sales/invoices | `apps/staff/app/sales/invoices/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S057؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0229 | staff | /sales/notes/[kind] | `apps/staff/app/sales/notes/[kind]/page.tsx` | OPENED_READ_ONLY — RO3-040؛ لا قبول وظيفي شامل |
| SCR-0230 | staff | /sales/portal-access | `apps/staff/app/sales/portal-access/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S058؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0231 | staff | /sales/pos | `apps/staff/app/sales/pos/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S059؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0232 | staff | /sales/quotations/[id]/esign | `apps/staff/app/sales/quotations/[id]/esign/page.tsx` | PROBE_404_R6 — RO6-S053؛ RO6 معرف غير موجود: عُرضت حالة خطأ صريحة بلا بيانات مُختلقة |
| SCR-0233 | staff | /sales/quotations/[id] | `apps/staff/app/sales/quotations/[id]/page.tsx` | PROBE_404_R6 — RO6-S037؛ RO6 معرف غير موجود: عُرضت حالة خطأ صريحة بلا بيانات مُختلقة |
| SCR-0234 | staff | /sales/quotations | `apps/staff/app/sales/quotations/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S060؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0235 | staff | /sales/returns | `apps/staff/app/sales/returns/page.tsx` | OPENED_READ_ONLY — RO3-037؛ لا قبول وظيفي شامل |
| SCR-0236 | staff | /sales/salesman-commissions | `apps/staff/app/sales/salesman-commissions/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S061؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0237 | staff | /sales/salesmen | `apps/staff/app/sales/salesmen/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S062؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0238 | staff | /sales/shifts | `apps/staff/app/sales/shifts/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S063؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0239 | staff | /sales/statements | `apps/staff/app/sales/statements/page.tsx` | FAIL — RPT-004/005، ACC-002 الذمم صفر بدلاً من517.50/1380 |
| SCR-0240 | staff | /settings/ai | `apps/staff/app/settings/ai/page.tsx` | READ_ONLY_OPEN_R6 — RO6-S012؛ RO6 قراءة فقط؛ فُتح المحتوى ولم يُحفظ أي تغيير |
| SCR-0241 | staff | /settings/approvals | `apps/staff/app/settings/approvals/page.tsx` | OPENED_ONLY — محتوى محمل بأدلة OPEN/REOPEN/RPT؛ ليس اختبار جميع الوظائف |
| SCR-0242 | staff | /settings/audit | `apps/staff/app/settings/audit/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S064؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0243 | staff | /settings/backup | `apps/staff/app/settings/backup/page.tsx` | READ_ONLY_OPEN_R6 — RO6-S013؛ RO6 قراءة فقط؛ فُتح المحتوى ولم يُحفظ أي تغيير |
| SCR-0244 | staff | /settings/branches | `apps/staff/app/settings/branches/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S065؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0245 | staff | /settings/change-password | `apps/staff/app/settings/change-password/page.tsx` | READ_ONLY_OPEN_R6 — RO6-S014؛ RO6 قراءة فقط؛ فُتح المحتوى ولم يُحفظ أي تغيير |
| SCR-0246 | staff | /settings/company | `apps/staff/app/settings/company/page.tsx` | OPENED_ONLY — محتوى محمل بأدلة OPEN/REOPEN/RPT؛ ليس اختبار جميع الوظائف |
| SCR-0247 | staff | /settings/custom-fields | `apps/staff/app/settings/custom-fields/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S066؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0248 | staff | /settings/data-rotation | `apps/staff/app/settings/data-rotation/page.tsx` | READ_ONLY_OPEN_R6 — RO6-S015؛ RO6 قراءة فقط؛ فُتح المحتوى ولم يُحفظ أي تغيير |
| SCR-0249 | staff | /settings/devices | `apps/staff/app/settings/devices/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S067؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0250 | staff | /settings/ecommerce | `apps/staff/app/settings/ecommerce/page.tsx` | READ_ONLY_OPEN_R6 — RO6-S016؛ RO6 قراءة فقط؛ فُتح المحتوى ولم يُحفظ أي تغيير |
| SCR-0251 | staff | /settings/email | `apps/staff/app/settings/email/page.tsx` | READ_ONLY_OPEN_R6 — RO6-S017؛ RO6 قراءة فقط؛ فُتح المحتوى ولم يُحفظ أي تغيير |
| SCR-0252 | staff | /settings/files | `apps/staff/app/settings/files/page.tsx` | READ_ONLY_OPEN_R6 — RO6-S018؛ RO6 قراءة فقط؛ فُتح المحتوى ولم يُحفظ أي تغيير |
| SCR-0253 | staff | /settings/general | `apps/staff/app/settings/general/page.tsx` | OPENED_ONLY — محتوى محمل بأدلة OPEN/REOPEN/RPT؛ ليس اختبار جميع الوظائف |
| SCR-0254 | staff | /settings/invoice-maintenance | `apps/staff/app/settings/invoice-maintenance/page.tsx` | READ_ONLY_OPEN_R6 — RO6-S019؛ RO6 قراءة فقط؛ فُتح المحتوى ولم يُحفظ أي تغيير |
| SCR-0255 | staff | /settings/language | `apps/staff/app/settings/language/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S068؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0256 | staff | /settings/marketplace | `apps/staff/app/settings/marketplace/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S069؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0257 | staff | /settings/new-file | `apps/staff/app/settings/new-file/page.tsx` | READ_ONLY_OPEN_R6 — RO6-S020؛ RO6 قراءة فقط؛ فُتح المحتوى ولم يُحفظ أي تغيير |
| SCR-0258 | staff | /settings/offers | `apps/staff/app/settings/offers/page.tsx` | READ_ONLY_OPEN_R6 — RO6-S021؛ RO6 قراءة فقط؛ فُتح المحتوى ولم يُحفظ أي تغيير |
| SCR-0259 | staff | /settings/payment-gateways | `apps/staff/app/settings/payment-gateways/page.tsx` | READ_ONLY_OPEN_R6 — RO6-S022؛ RO6 قراءة فقط؛ فُتح المحتوى ولم يُحفظ أي تغيير |
| SCR-0260 | staff | /settings/payments | `apps/staff/app/settings/payments/page.tsx` | READ_ONLY_OPEN_R6 — RO6-S023؛ RO6 قراءة فقط؛ فُتح المحتوى ولم يُحفظ أي تغيير |
| SCR-0261 | staff | /settings/posting-profiles | `apps/staff/app/settings/posting-profiles/page.tsx` | OPENED_ONLY — محتوى محمل بأدلة OPEN/REOPEN/RPT؛ ليس اختبار جميع الوظائف |
| SCR-0262 | staff | /settings/price-lists | `apps/staff/app/settings/price-lists/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S070؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0263 | staff | /settings/printing | `apps/staff/app/settings/printing/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S071؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0264 | staff | /settings/restore | `apps/staff/app/settings/restore/page.tsx` | READ_ONLY_OPEN_R6 — RO6-S024؛ RO6 قراءة فقط؛ فُتح المحتوى ولم يُحفظ أي تغيير |
| SCR-0265 | staff | /settings/roles | `apps/staff/app/settings/roles/page.tsx` | OPENED_ONLY — محتوى محمل بأدلة OPEN/REOPEN/RPT؛ ليس اختبار جميع الوظائف |
| SCR-0266 | staff | /settings/sync/[entity] | `apps/staff/app/settings/sync/[entity]/page.tsx` | READ_ONLY_OPEN_R6 — RO6-S035؛ RO6 قراءة فقط؛ فُتح المحتوى ولم يُحفظ أي تغيير |
| SCR-0267 | staff | /settings/sync/manage | `apps/staff/app/settings/sync/manage/page.tsx` | READ_ONLY_OPEN_R6 — RO6-S025؛ RO6 قراءة فقط؛ فُتح المحتوى ولم يُحفظ أي تغيير |
| SCR-0268 | staff | /settings/sync | `apps/staff/app/settings/sync/page.tsx` | READ_ONLY_OPEN_R6 — RO6-S026؛ RO6 قراءة فقط؛ فُتح المحتوى ولم يُحفظ أي تغيير |
| SCR-0269 | staff | /settings/sync/zatca | `apps/staff/app/settings/sync/zatca/page.tsx` | READ_ONLY_OPEN_R6 — RO6-S027؛ RO6 قراءة فقط؛ فُتح المحتوى ولم يُحفظ أي تغيير |
| SCR-0270 | staff | /settings/two-factor | `apps/staff/app/settings/two-factor/page.tsx` | READ_ONLY_OPEN_R6 — RO6-S028؛ RO6 قراءة فقط؛ فُتح المحتوى ولم يُحفظ أي تغيير |
| SCR-0271 | staff | /settings/usage | `apps/staff/app/settings/usage/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S072؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0272 | staff | /settings/users | `apps/staff/app/settings/users/page.tsx` | OPENED_ONLY — محتوى محمل بأدلة OPEN/REOPEN/RPT؛ ليس اختبار جميع الوظائف |
| SCR-0273 | staff | /settings/whatsapp | `apps/staff/app/settings/whatsapp/page.tsx` | READ_ONLY_OPEN_R6 — RO6-S029؛ RO6 قراءة فقط؛ فُتح المحتوى ولم يُحفظ أي تغيير |
| SCR-0274 | staff | /settings/white-label | `apps/staff/app/settings/white-label/page.tsx` | READ_ONLY_OPEN_R6 — RO6-S030؛ RO6 قراءة فقط؛ فُتح المحتوى ولم يُحفظ أي تغيير |
| SCR-0275 | staff | /settings/zatca | `apps/staff/app/settings/zatca/page.tsx` | READ_ONLY_OPEN_R6 — RO6-S031؛ RO6 قراءة فقط؛ فُتح المحتوى ولم يُحفظ أي تغيير |
| SCR-0276 | staff | /settings/zatca/sent | `apps/staff/app/settings/zatca/sent/page.tsx` | READ_ONLY_OPEN_R6 — RO6-S032؛ RO6 قراءة فقط؛ فُتح المحتوى ولم يُحفظ أي تغيير |
| SCR-0277 | staff | /settings/zatca/status | `apps/staff/app/settings/zatca/status/page.tsx` | READ_ONLY_OPEN_R6 — RO6-S033؛ RO6 قراءة فقط؛ فُتح المحتوى ولم يُحفظ أي تغيير |
| SCR-0278 | staff | /supplier-portal | `apps/staff/app/supplier-portal/page.tsx` | LOGIN_SURFACE_R6 — RO6-S034؛ RO6 شاشة دخول مستقلة (بوابة الموردين)؛ لم تُزوَّد باعتماد ولم يُختبر محتواها |
| SCR-0279 | staff | /support/about | `apps/staff/app/support/about/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S073؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0280 | staff | /support/help | `apps/staff/app/support/help/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S074؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0281 | staff | /support/license | `apps/staff/app/support/license/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S075؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0282 | staff | /support/report-designer | `apps/staff/app/support/report-designer/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S076؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0283 | staff | /tailoring/invoices | `apps/staff/app/tailoring/invoices/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S077؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0284 | staff | /tailoring/measurements/attributes | `apps/staff/app/tailoring/measurements/attributes/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S078؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0285 | staff | /tailoring/measurements | `apps/staff/app/tailoring/measurements/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S079؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0286 | staff | /tailoring/options | `apps/staff/app/tailoring/options/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S080؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0287 | staff | /tailoring/orders | `apps/staff/app/tailoring/orders/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S081؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0288 | staff | /tailoring/types | `apps/staff/app/tailoring/types/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S082؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0289 | staff | /treasury/bank-accounts | `apps/staff/app/treasury/bank-accounts/page.tsx` | OPENED_ONLY — محتوى محمل بأدلة OPEN/REOPEN/RPT؛ ليس اختبار جميع الوظائف |
| SCR-0290 | staff | /treasury/bank-reconciliation | `apps/staff/app/treasury/bank-reconciliation/page.tsx` | OPENED_READ_ONLY — RO3-033؛ لا قبول وظيفي شامل |
| SCR-0291 | staff | /treasury/bank-statements | `apps/staff/app/treasury/bank-statements/page.tsx` | OPENED_READ_ONLY — RO3-034؛ لا قبول وظيفي شامل |
| SCR-0292 | staff | /treasury/banks | `apps/staff/app/treasury/banks/page.tsx` | OPENED_READ_ONLY — RO3-030؛ لا قبول وظيفي شامل |
| SCR-0293 | staff | /treasury/cheques | `apps/staff/app/treasury/cheques/page.tsx` | OPENED_READ_ONLY — RO3-035؛ لا قبول وظيفي شامل |
| SCR-0294 | staff | /treasury/day-close | `apps/staff/app/treasury/day-close/page.tsx` | OPENED_READ_ONLY — RO3-036؛ لا قبول وظيفي شامل |
| SCR-0295 | staff | /treasury/movements | `apps/staff/app/treasury/movements/page.tsx` | OPENED_ONLY — محتوى محمل بأدلة OPEN/REOPEN/RPT؛ ليس اختبار جميع الوظائف |
| SCR-0296 | staff | /treasury/safes | `apps/staff/app/treasury/safes/page.tsx` | OPENED_ONLY — محتوى محمل بأدلة OPEN/REOPEN/RPT؛ ليس اختبار جميع الوظائف |
| SCR-0297 | staff | /treasury/transfers | `apps/staff/app/treasury/transfers/page.tsx` | OPENED_READ_ONLY — RO3-032؛ لا قبول وظيفي شامل |
| SCR-0298 | staff | /treasury/vouchers | `apps/staff/app/treasury/vouchers/page.tsx` | OPENED_READ_ONLY — RO3-031؛ لا قبول وظيفي شامل |
| SCR-0299 | staff | /van-sales | `apps/staff/app/van-sales/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S083؛ fixture جديدة فارغة؛ لا قبول مالي |
| SCR-0300 | staff | /van-sales/rep | `apps/staff/app/van-sales/rep/page.tsx` | OPENED_READ_ONLY_R4 — RO4-S084؛ fixture جديدة فارغة؛ لا قبول مالي |

## تحديث الجولة الثانية

فُتحت 35 مسارات فعلية في staff، تقابل 32 ملف صفحة من أصل300 (تكرار معرفات التقارير يجمع في `[key]`). لا يعني هذا اكتمالاختبارها. 268 ملف صفحة ما زال NOT_RUN؛ ليست كلها متعذرة. محاولات OPEN-007..019 علقت مؤقتاً بسبب توقف الخادم ثم أعيد فتحها في REOPEN-001..013. لا تُحتسب قشرة التحميل نجاحاً. صور ونتائج الجولات في evidence/00-discovery، وسجل تفصيلي لكل ظهور في manifest.ndjson. حساب Cashier رُفض في ثلاث شاشات كما هو متوقع؛ هذا اختبار صلاحية محدود لا اختبار وظائفها الإدارية.

## تحديث الجولة الثالثة — أعداد ختامية تاريخية

68 مساراً فعلياً تقابل65 ملف صفحة من300؛235 ملفاً لم يفتح بعد. 67 مساراً أظهر المحتوى، ومسار journal-entries/new دليل رفض صلاحية فقط. أضيفت41 زيارة قرائية RO3-001..041 (33 مساراً جديداً و8 إعادات). الحسابات فُتحت هذه المرة للمالك؛ رفضCashier السابق لا يُمحى. لا يعني OPENED_READ_ONLY اختبار حفظ/اعتماد/إلغاء أوكل حالاتالفلاتر. بطاقةالصنف وكشفGL اختبرا لاحقاً ببياناتحقيقية قائمة RPT-013 وRPT-14..18. حُسب إسناد المسار إلىالمصدر بأولوية المسار الثابت new على[id]؛ لا يُنسب فتحصفحةإنشاء إلىتفاصيلمستند. العدد والصور في coverage-round3.json؛ جميع الزيارات فيstaff فقط.

## الجولة الرابعة — الأعداد الحالية وحدودها

اختبرت 95 زيارة جديدة (84staff و11bakery) إضافة إلى مساحة المندوب بسياق منفصل. التغطية التراكمية: **163 مساراً مطلوباً عبر التطبيقين و160 ملف صفحة مصدر من300؛140 ملفاً لم يزر بعد**. منها162 مساراً فعلياً في الصور تقابل159 ملف مصدر، وملفواحد إضافي للتحويل /purchases اختبر فعلياً لكنه لا يرسم صفحة ثانية. هذا فصل متعمد بين المسار المطلوب والوجهة المصورة، لا تضخيم للتغطية.

159 ملفاً له أثر مصور:148staff و11bakery، مع بقاءمسار إنشاءقيد ضمنها دليلرفضCashier فقط. ملفتحويلpurchases إضافي يجعلstaff149 ملفاً ضمن نطاقالزيارة/التحويل. صفحاتمخبزالمندوب اختبرت للمالك غيرالمرتبط ثم للمندوب الصحيح؛ لا قبول لبيع/تحصيل/حمولة/إقفال أوoffline. بقيةالصفحات الديناميكية بلا معرفاتحقيقية R4 لم تختبر بملءمعرفات عشوائية. الشاشات ذات قائمة فارغة لا تعد وظيفتها المالية مختبرة. البيئةالتاريخية audit_2026 غيرمتاحة؛ كلRO4 فيaudit_readonly_r4 المنفصلة.

مصدرالأعداد coverage-round4.json؛ سجلraw فيread-only-round4-results.json وتعقيباالتحويلوسياقالمالك فيround4-screen-review.json؛ إثباتالمندوب round4-rep-read-scope.json. بقيةmarketing/platform-admin/customer-portal وAndroid لم تختبر عملياً.

## الجولة الخامسة — الواجهات الثلاث الباقية

شُغّلت `platform-admin` (3003) و`customer-portal` (3004) و`marketing` (3002) على قاعدة`audit_readonly_r4` ببناء/تشغيل إنتاجي، وزُيرت **75 صفحة**: 39 منصة، 27 موقعاً، 9 بوابة. منها 73 فُتحت وقُرئ محتواها (`READ_ONLY_OPEN_R5`)، و2 تحويل مقصود (`REDIRECT_R5`): `/` في البوابة→`/portal`، و`/login` في المنصة→`/` كما تنص شيفرتها.

**التراكمي بعد هذه الجولة: 235 من300 ملف صفحة زُير عبر خمس جولات، و65 باقٍ.** لا يعني ذلك اختبار وظائف 235 صفحة: الجولة الخامسة قراءة فقط، بلا حفظ مالي ولا تغيير خطة أو إعداد أو اشتراك.

خاص بالبوابة: أول زيارة قبل الدخول أعادت `/portal/*` إلى شاشة الدخول؛ حُفظت تلك اللقطات كدليل بوابة (`RO5-P005..P009`) ثم أعيدت الزيارة بجلسة مصادقة تحت معرفات `*AUTH`، وهي المعتمدة كتغطية محتوى. صور ما قبل الدخول لا تُحتسب صفحة محتوى ثانية.

المصدر الآلي للأعداد والتحقق من وجود صورة لكل صف: `evidence/00-discovery/coverage-round5.json` (مبني من الملفات والسجل عبر `tools/check_coverage_round5.py`)، وبيانات كل زيارة في `round5-*-results.json`. لوحة المنصة تعرض وسم «بيئة اختبار» في الشريط العلوي، وهو ما يؤكد أن التشغيل على بيئة تدقيق لا إنتاج.

## الجولة السادسة — إغلاق ملفات الصفحات الثلاثمئة

لم يبق صفّ `NOT_RUN`. **300/300 لها دليل**، لكن الأدلة ليست من نوع واحد:

| نوع الدليل | العدد | المعنى |
|---|---|---|
| محتوى حقيقي عُرض | 261 | فتح وقراءة فقط؛ لا حفظ ولا اعتماد |
| مسار «غير موجود/خطأ» فقط | 32 | حالة الفشل هي المقصودة |
| تحويل أو رفض صلاحية أو فشل مالي موثق | 7 | كما في الجولات السابقة |

تفصيل الـ32: 16 صفحة ديناميكية جُرّبت بمُعرِّف غير موجود (قيود، عروض، مشاريع، مهام، رواتب، WPS، طباعة، كشف توقيع، لوحات، CRUD)، و9 صفحات محتوى غير منشور أعادت 404 حقيقية، و3 صفحات `/design` معطّلة قصداً في الإنتاج، و4 صفحات عرضت حالة خطأ API (منصة/بوابة).

من الـ67 مساراً الجديد: **34 صفحة staff ثابتة** فُتحت لأول مرة (المساعد، سلة، النظارات، POS أوفلاين، 21 شاشة إعدادات)، و**لوحة حقيقية** بمعرفها الموجود في القاعدة، و**صفحة هيكل** لمسار `planned`، والباقي مسارات فشل.

هذا الإغلاق **إغلاق تغطية فتح لا إغلاق اختبار**: الوظائف المالية والنسخ والاستعادة والدفع والمزامنة لم تُجرَّب. الأعداد مبنية آلياً في `evidence/00-discovery/coverage-round6.json` عبر `tools/check_coverage_round6.py`، الذي يتحقق أيضاً من وجود لقطة مسجّلة لكل صف R6 (وفشل عند نقص أي صورة).
