# سجل مرشحات مسارات API

بادئة الإصدار العامة غير مضافة هنا؛ القيم الخام للزخارف ليست URL نهائياً، وبعض البوادئ مصفوفات.

جرد ساكن؛ ليس إثبات تشغيل. أعيد توليده بـ `python docs/accounting-audit/tools/discover.py`.

| الفعل | Controller | المسار الفرعي | المصدر | الحالة |
|---|---|---|---|---|
| GET | 'health' | 'live' | apps/api/src/health/health.controller.ts:18 | NOT_RUN |
| GET | 'health' | 'ready' | apps/api/src/health/health.controller.ts:23 | NOT_RUN |
| GET |  | 'accounts' | apps/api/src/modules/accounting/accounting.controller.ts:36 | NOT_RUN |
| POST |  | 'accounts' | apps/api/src/modules/accounting/accounting.controller.ts:54 | NOT_RUN |
| PATCH |  | 'accounts/:id' | apps/api/src/modules/accounting/accounting.controller.ts:60 | NOT_RUN |
| DELETE |  | 'accounts/:id' | apps/api/src/modules/accounting/accounting.controller.ts:67 | NOT_RUN |
| GET |  | 'accounts/:id' | apps/api/src/modules/accounting/accounting.controller.ts:74 | NOT_RUN |
| GET |  | 'fiscal-periods' | apps/api/src/modules/accounting/accounting.controller.ts:85 | NOT_RUN |
| POST |  | 'fiscal-periods' | apps/api/src/modules/accounting/accounting.controller.ts:93 | NOT_RUN |
| PATCH |  | 'fiscal-periods/:id' | apps/api/src/modules/accounting/accounting.controller.ts:101 | NOT_RUN |
| DELETE |  | 'fiscal-periods/:id' | apps/api/src/modules/accounting/accounting.controller.ts:109 | NOT_RUN |
| POST |  | 'fiscal-periods/:id/activate' | apps/api/src/modules/accounting/accounting.controller.ts:117 | NOT_RUN |
| POST |  | 'fiscal-periods/:id/close' | apps/api/src/modules/accounting/accounting.controller.ts:124 | NOT_RUN |
| POST |  | 'fiscal-periods/:id/reopen' | apps/api/src/modules/accounting/accounting.controller.ts:131 | NOT_RUN |
| POST |  | 'fiscal-periods/:id/modules/:module/lock' | apps/api/src/modules/accounting/accounting.controller.ts:138 | NOT_RUN |
| POST |  | 'fiscal-periods/:id/modules/:module/unlock' | apps/api/src/modules/accounting/accounting.controller.ts:144 | NOT_RUN |
| GET |  | 'statements/trial-balance' | apps/api/src/modules/accounting/accounting.controller.ts:162 | NOT_RUN |
| GET |  | 'statements/income-statement' | apps/api/src/modules/accounting/accounting.controller.ts:194 | NOT_RUN |
| GET |  | 'statements/general-ledger/:accountId' | apps/api/src/modules/accounting/accounting.controller.ts:227 | NOT_RUN |
| GET |  | 'cost-centers' | apps/api/src/modules/accounting/accounting.controller.ts:268 | NOT_RUN |
| GET |  | 'statements/cost-center/:costCenterId' | apps/api/src/modules/accounting/accounting.controller.ts:291 | NOT_RUN |
| POST |  | 'cost-centers' | apps/api/src/modules/accounting/accounting.controller.ts:324 | NOT_RUN |
| PATCH |  | 'cost-centers/:id' | apps/api/src/modules/accounting/accounting.controller.ts:331 | NOT_RUN |
| DELETE |  | 'cost-centers/:id' | apps/api/src/modules/accounting/accounting.controller.ts:338 | NOT_RUN |
| GET |  | 'fiscal-years' | apps/api/src/modules/accounting/accounting.controller.ts:347 | NOT_RUN |
| POST |  | 'fiscal-years' | apps/api/src/modules/accounting/accounting.controller.ts:354 | NOT_RUN |
| GET |  | 'journal-entries' | apps/api/src/modules/accounting/accounting.controller.ts:363 | NOT_RUN |
| GET |  | 'journal-entries/:id/neighbours' | apps/api/src/modules/accounting/accounting.controller.ts:391 | NOT_RUN |
| GET |  | 'journal-entries/:id' | apps/api/src/modules/accounting/accounting.controller.ts:413 | NOT_RUN |
| POST |  | 'journal-entries' | apps/api/src/modules/accounting/accounting.controller.ts:420 | NOT_RUN |
| POST |  | 'journal-entries/:id/reverse' | apps/api/src/modules/accounting/accounting.controller.ts:445 | NOT_RUN |
| GET | 'platform/ai' | 'settings' | apps/api/src/modules/ai/ai-platform.controller.ts:16 | NOT_RUN |
| PUT | 'platform/ai' | 'settings' | apps/api/src/modules/ai/ai-platform.controller.ts:22 | NOT_RUN |
| POST | 'platform/ai' | 'tenants/:tenantId/suspension' | apps/api/src/modules/ai/ai-platform.controller.ts:28 | NOT_RUN |
| POST | 'platform/ai' | 'tenants/:tenantId/suggest' | apps/api/src/modules/ai/ai-platform.controller.ts:34 | NOT_RUN |
| GET | 'ai' | 'skills' | apps/api/src/modules/ai/ai.controller.ts:21 | NOT_RUN |
| GET | 'ai' | 'conversations' | apps/api/src/modules/ai/ai.controller.ts:27 | NOT_RUN |
| GET | 'ai' | 'conversations/:id' | apps/api/src/modules/ai/ai.controller.ts:34 | NOT_RUN |
| GET | 'ai' | 'suggestions' | apps/api/src/modules/ai/ai.controller.ts:41 | NOT_RUN |
| POST | 'ai' | 'suggest' | apps/api/src/modules/ai/ai.controller.ts:48 | NOT_RUN |
| GET | 'ai' | 'settings' | apps/api/src/modules/ai/ai.controller.ts:55 | NOT_RUN |
| PUT | 'ai' | 'settings' | apps/api/src/modules/ai/ai.controller.ts:61 | NOT_RUN |
| POST | 'ai' | 'settings/test' | apps/api/src/modules/ai/ai.controller.ts:67 | NOT_RUN |
| POST | 'ai' | 'chat' | apps/api/src/modules/ai/ai.controller.ts:73 | NOT_RUN |
| GET | 'platform/announcements' | '' | apps/api/src/modules/announcements/announcements.controller.ts:39 | NOT_RUN |
| POST | 'platform/announcements' | '' | apps/api/src/modules/announcements/announcements.controller.ts:53 | NOT_RUN |
| PATCH | 'platform/announcements' | ':id' | apps/api/src/modules/announcements/announcements.controller.ts:63 | NOT_RUN |
| POST | 'platform/announcements' | ':id/publish' | apps/api/src/modules/announcements/announcements.controller.ts:74 | NOT_RUN |
| GET | 'platform/announcements' | ':id/reads' | apps/api/src/modules/announcements/announcements.controller.ts:85 | NOT_RUN |
| GET |  | ['approval-workflows', 'approvals/workflows'] | apps/api/src/modules/approvals/approvals.controller.ts:17 | NOT_RUN |
| POST |  | ['approval-workflows', 'approvals/workflows'] | apps/api/src/modules/approvals/approvals.controller.ts:23 | NOT_RUN |
| GET |  | ['approval-workflows/:id', 'approvals/workflows/:id'] | apps/api/src/modules/approvals/approvals.controller.ts:34 | NOT_RUN |
| PATCH |  | ['approval-workflows/:id', 'approvals/workflows/:id'] | apps/api/src/modules/approvals/approvals.controller.ts:40 | NOT_RUN |
| DELETE |  | ['approval-workflows/:id', 'approvals/workflows/:id'] | apps/api/src/modules/approvals/approvals.controller.ts:52 | NOT_RUN |
| GET |  | ['approval-workflows/:id/steps', 'approvals/workflows/:id/steps'] | apps/api/src/modules/approvals/approvals.controller.ts:62 | NOT_RUN |
| POST |  | ['approval-workflows/:id/steps', 'approvals/workflows/:id/steps'] | apps/api/src/modules/approvals/approvals.controller.ts:68 | NOT_RUN |
| GET |  | 'approvals/inbox' | apps/api/src/modules/approvals/approvals.controller.ts:78 | NOT_RUN |
| GET |  | 'approvals/history' | apps/api/src/modules/approvals/approvals.controller.ts:86 | NOT_RUN |
| GET |  | 'sales/invoices/:id/approval' | apps/api/src/modules/approvals/approvals.controller.ts:92 | NOT_RUN |
| GET |  | 'purchases/invoices/:id/approval' | apps/api/src/modules/approvals/approvals.controller.ts:98 | NOT_RUN |
| GET |  | 'approvals/requests/:id' | apps/api/src/modules/approvals/approvals.controller.ts:104 | NOT_RUN |
| POST |  | 'approvals/requests/:id/approve' | apps/api/src/modules/approvals/approvals.controller.ts:112 | NOT_RUN |
| POST |  | 'approvals/requests/:id/reject' | apps/api/src/modules/approvals/approvals.controller.ts:127 | NOT_RUN |
| GET | 'platform' | 'backups' | apps/api/src/modules/backups/platform-backups.controller.ts:81 | NOT_RUN |
| POST | 'platform' | 'backups/run' | apps/api/src/modules/backups/platform-backups.controller.ts:96 | NOT_RUN |
| GET | 'platform' | 'backups/preflight' | apps/api/src/modules/backups/platform-backups.controller.ts:119 | NOT_RUN |
| GET | 'platform' | 'backups/restores' | apps/api/src/modules/backups/platform-backups.controller.ts:128 | NOT_RUN |
| POST | 'platform' | 'backups/:id/restore' | apps/api/src/modules/backups/platform-backups.controller.ts:144 | NOT_RUN |
| POST | 'platform' | 'backups/:id/verify' | apps/api/src/modules/backups/platform-backups.controller.ts:166 | NOT_RUN |
| GET | 'platform' | 'backups/:id/download' | apps/api/src/modules/backups/platform-backups.controller.ts:175 | NOT_RUN |
| GET | 'platform' | 'backups/:id/content' | apps/api/src/modules/backups/platform-backups.controller.ts:199 | NOT_RUN |
| GET | 'platform' | 'retention' | apps/api/src/modules/backups/platform-backups.controller.ts:219 | NOT_RUN |
| PUT | 'platform' | 'retention' | apps/api/src/modules/backups/platform-backups.controller.ts:227 | NOT_RUN |
| POST | 'platform' | 'retention/apply' | apps/api/src/modules/backups/platform-backups.controller.ts:239 | NOT_RUN |
| GET | 'platform' | 'data-requests' | apps/api/src/modules/backups/platform-backups.controller.ts:262 | NOT_RUN |
| POST | 'platform' | 'data-requests' | apps/api/src/modules/backups/platform-backups.controller.ts:275 | NOT_RUN |
| POST | 'platform' | 'data-requests/:id/decide' | apps/api/src/modules/backups/platform-backups.controller.ts:298 | NOT_RUN |
| POST | 'platform' | 'data-requests/:id/execute' | apps/api/src/modules/backups/platform-backups.controller.ts:317 | NOT_RUN |
| GET | 'platform' | 'data-requests/exports/:artifactId' | apps/api/src/modules/backups/platform-backups.controller.ts:338 | NOT_RUN |
| GET | 'platform/campaigns' | '' | apps/api/src/modules/campaigns/platform-campaigns.controller.ts:59 | NOT_RUN |
| GET | 'platform/campaigns' | 'segments' | apps/api/src/modules/campaigns/platform-campaigns.controller.ts:76 | NOT_RUN |
| POST | 'platform/campaigns' | '' | apps/api/src/modules/campaigns/platform-campaigns.controller.ts:89 | NOT_RUN |
| GET | 'platform/campaigns' | ':id' | apps/api/src/modules/campaigns/platform-campaigns.controller.ts:106 | NOT_RUN |
| PATCH | 'platform/campaigns' | ':id' | apps/api/src/modules/campaigns/platform-campaigns.controller.ts:114 | NOT_RUN |
| POST | 'platform/campaigns' | ':id/schedule' | apps/api/src/modules/campaigns/platform-campaigns.controller.ts:129 | NOT_RUN |
| POST | 'platform/campaigns' | ':id/cancel' | apps/api/src/modules/campaigns/platform-campaigns.controller.ts:147 | NOT_RUN |
| POST | 'platform/campaigns' | ':id/send-test' | apps/api/src/modules/campaigns/platform-campaigns.controller.ts:164 | NOT_RUN |
| POST | 'platform/campaigns' | ':id/dispatch' | apps/api/src/modules/campaigns/platform-campaigns.controller.ts:181 | NOT_RUN |
| GET | 'platform/campaigns' | ':id/report' | apps/api/src/modules/campaigns/platform-campaigns.controller.ts:195 | NOT_RUN |
| GET | 'public' | 'track/open/:token' | apps/api/src/modules/campaigns/public-campaigns.controller.ts:40 | NOT_RUN |
| GET | 'public' | 'track/click/:token/:index' | apps/api/src/modules/campaigns/public-campaigns.controller.ts:63 | NOT_RUN |
| GET | 'public' | 'unsubscribe/:token' | apps/api/src/modules/campaigns/public-campaigns.controller.ts:85 | NOT_RUN |
| POST | 'public' | 'unsubscribe/:token' | apps/api/src/modules/campaigns/public-campaigns.controller.ts:111 | NOT_RUN |
| GET |  | 'comments/suggest' | apps/api/src/modules/comments/comments.controller.ts:11 | NOT_RUN |
| GET |  | 'comments/mentions' | apps/api/src/modules/comments/comments.controller.ts:17 | NOT_RUN |
| POST |  | 'comments/mentions/:id/read' | apps/api/src/modules/comments/comments.controller.ts:26 | NOT_RUN |
| GET |  | 'comments' | apps/api/src/modules/comments/comments.controller.ts:33 | NOT_RUN |
| POST |  | 'comments' | apps/api/src/modules/comments/comments.controller.ts:52 | NOT_RUN |
| PUT |  | 'comments/:id/resolve' | apps/api/src/modules/comments/comments.controller.ts:59 | NOT_RUN |
| PUT |  | 'comments/:id' | apps/api/src/modules/comments/comments.controller.ts:66 | NOT_RUN |
| DELETE |  | 'comments/:id' | apps/api/src/modules/comments/comments.controller.ts:73 | NOT_RUN |
| POST | 'compat' | 'devices' | apps/api/src/modules/compat/compat.controller.ts:14 | NOT_RUN |
| GET | 'compat' | 'devices' | apps/api/src/modules/compat/compat.controller.ts:15 | NOT_RUN |
| PATCH | 'compat' | 'devices/:id/revoke' | apps/api/src/modules/compat/compat.controller.ts:16 | NOT_RUN |
| GET | 'compat' | 'sync/overview' | apps/api/src/modules/compat/compat.controller.ts:18 | NOT_RUN |
| GET | 'compat' | 'sync/documents' | apps/api/src/modules/compat/compat.controller.ts:19 | NOT_RUN |
| POST | 'compat' | 'auth/device' | apps/api/src/modules/compat/compat.controller.ts:22 | NOT_RUN |
| GET | 'compat' | 'master/items' | apps/api/src/modules/compat/compat.controller.ts:26 | NOT_RUN |
| GET | 'compat' | 'master/parties' | apps/api/src/modules/compat/compat.controller.ts:30 | NOT_RUN |
| GET | 'compat' | 'master/accounts' | apps/api/src/modules/compat/compat.controller.ts:34 | NOT_RUN |
| GET | 'compat' | 'master/tax-groups' | apps/api/src/modules/compat/compat.controller.ts:38 | NOT_RUN |
| POST | 'compat' | 'docs/sales-invoice' | apps/api/src/modules/compat/compat.controller.ts:42 | NOT_RUN |
| POST | 'compat' | 'docs/voucher' | apps/api/src/modules/compat/compat.controller.ts:46 | NOT_RUN |
| GET | 'compat' | 'sync/cursor' | apps/api/src/modules/compat/compat.controller.ts:50 | NOT_RUN |
| POST | 'compat' | 'sync/cursor' | apps/api/src/modules/compat/compat.controller.ts:54 | NOT_RUN |
| GET | 'compat' | 'docs/status' | apps/api/src/modules/compat/compat.controller.ts:58 | NOT_RUN |
| GET | 'platform/content' | 'pages' | apps/api/src/modules/content/platform-content.controller.ts:63 | NOT_RUN |
| GET | 'platform/content' | 'categories' | apps/api/src/modules/content/platform-content.controller.ts:77 | NOT_RUN |
| GET | 'platform/content' | 'menus' | apps/api/src/modules/content/platform-content.controller.ts:84 | NOT_RUN |
| PUT | 'platform/content' | 'menus/:position' | apps/api/src/modules/content/platform-content.controller.ts:91 | NOT_RUN |
| GET | 'platform/content' | 'banners' | apps/api/src/modules/content/platform-content.controller.ts:101 | NOT_RUN |
| POST | 'platform/content' | 'banners' | apps/api/src/modules/content/platform-content.controller.ts:108 | NOT_RUN |
| PATCH | 'platform/content' | 'banners/:id' | apps/api/src/modules/content/platform-content.controller.ts:117 | NOT_RUN |
| POST | 'platform/content' | 'pages' | apps/api/src/modules/content/platform-content.controller.ts:127 | NOT_RUN |
| GET | 'platform/content' | 'pages/:id' | apps/api/src/modules/content/platform-content.controller.ts:136 | NOT_RUN |
| PATCH | 'platform/content' | 'pages/:id' | apps/api/src/modules/content/platform-content.controller.ts:143 | NOT_RUN |
| POST | 'platform/content' | 'pages/:id/publish' | apps/api/src/modules/content/platform-content.controller.ts:153 | NOT_RUN |
| POST | 'platform/content' | 'pages/:id/retract' | apps/api/src/modules/content/platform-content.controller.ts:163 | NOT_RUN |
| GET | 'platform/content' | 'pages/:id/versions' | apps/api/src/modules/content/platform-content.controller.ts:173 | NOT_RUN |
| POST | 'platform/content' | 'pages/:id/versions/:version/restore' | apps/api/src/modules/content/platform-content.controller.ts:182 | NOT_RUN |
| GET | 'public' | 'site' | apps/api/src/modules/content/public-content.controller.ts:45 | NOT_RUN |
| GET | 'public' | 'sitemap' | apps/api/src/modules/content/public-content.controller.ts:53 | NOT_RUN |
| GET | 'public' | 'posts' | apps/api/src/modules/content/public-content.controller.ts:60 | NOT_RUN |
| GET | 'public' | 'help' | apps/api/src/modules/content/public-content.controller.ts:73 | NOT_RUN |
| GET | 'public' | 'help/:slug' | apps/api/src/modules/content/public-content.controller.ts:92 | NOT_RUN |
| POST | 'public' | 'help/:slug/feedback' | apps/api/src/modules/content/public-content.controller.ts:108 | NOT_RUN |
| GET | 'public' | 'faq' | apps/api/src/modules/content/public-content.controller.ts:121 | NOT_RUN |
| GET | 'public' | 'banners' | apps/api/src/modules/content/public-content.controller.ts:128 | NOT_RUN |
| GET | 'public' | 'content/:slug' | apps/api/src/modules/content/public-content.controller.ts:135 | NOT_RUN |
| GET |  | 'crm/pipelines' | apps/api/src/modules/crm/crm.controller.ts:11 | NOT_RUN |
| POST |  | 'crm/pipelines' | apps/api/src/modules/crm/crm.controller.ts:17 | NOT_RUN |
| GET |  | 'crm/deals' | apps/api/src/modules/crm/crm.controller.ts:23 | NOT_RUN |
| POST |  | 'crm/deals' | apps/api/src/modules/crm/crm.controller.ts:42 | NOT_RUN |
| GET |  | 'crm/deals/:id' | apps/api/src/modules/crm/crm.controller.ts:49 | NOT_RUN |
| PUT |  | 'crm/deals/:id/move' | apps/api/src/modules/crm/crm.controller.ts:55 | NOT_RUN |
| PUT |  | 'crm/deals/:id/status' | apps/api/src/modules/crm/crm.controller.ts:62 | NOT_RUN |
| POST |  | 'crm/deals/:id/activities' | apps/api/src/modules/crm/crm.controller.ts:68 | NOT_RUN |
| POST |  | 'crm/deals/:id/whatsapp' | apps/api/src/modules/crm/crm.controller.ts:75 | NOT_RUN |
| GET |  | 'crm/activities' | apps/api/src/modules/crm/crm.controller.ts:85 | NOT_RUN |
| GET |  | 'crm/forecast' | apps/api/src/modules/crm/crm.controller.ts:91 | NOT_RUN |
| GET |  | 'crm/whatsapp/templates' | apps/api/src/modules/crm/crm.controller.ts:97 | NOT_RUN |
| POST |  | 'crm/whatsapp/templates' | apps/api/src/modules/crm/crm.controller.ts:103 | NOT_RUN |
| GET |  | 'crm/settings' | apps/api/src/modules/crm/crm.controller.ts:109 | NOT_RUN |
| POST |  | 'crm/webhooks/whatsapp' | apps/api/src/modules/crm/crm.controller.ts:116 | NOT_RUN |
| GET | 'custom-fields' | '' | apps/api/src/modules/custom-fields/custom-fields.controller.ts:12 | NOT_RUN |
| POST | 'custom-fields' | '' | apps/api/src/modules/custom-fields/custom-fields.controller.ts:18 | NOT_RUN |
| PUT | 'custom-fields' | 'values' | apps/api/src/modules/custom-fields/custom-fields.controller.ts:24 | NOT_RUN |
| PUT | 'custom-fields' | ':id' | apps/api/src/modules/custom-fields/custom-fields.controller.ts:30 | NOT_RUN |
| GET | 'custom-fields' | 'values' | apps/api/src/modules/custom-fields/custom-fields.controller.ts:36 | NOT_RUN |
| GET | 'custom-fields' | ':id' | apps/api/src/modules/custom-fields/custom-fields.controller.ts:43 | NOT_RUN |
| PATCH | 'custom-fields' | ':id' | apps/api/src/modules/custom-fields/custom-fields.controller.ts:49 | NOT_RUN |
| DELETE | 'custom-fields' | ':id' | apps/api/src/modules/custom-fields/custom-fields.controller.ts:55 | NOT_RUN |
| GET | 'custom-fields' | ':id/values' | apps/api/src/modules/custom-fields/custom-fields.controller.ts:61 | NOT_RUN |
| POST | 'custom-fields' | ':id/values' | apps/api/src/modules/custom-fields/custom-fields.controller.ts:69 | NOT_RUN |
| PUT | 'custom-fields' | ':id/values' | apps/api/src/modules/custom-fields/custom-fields.controller.ts:75 | NOT_RUN |
| GET | 'custom-reports' | '' | apps/api/src/modules/custom-fields/custom-reports.controller.ts:24 | NOT_RUN |
| GET | 'custom-reports' | 'fields' | apps/api/src/modules/custom-fields/custom-reports.controller.ts:30 | NOT_RUN |
| POST | 'custom-reports' | '' | apps/api/src/modules/custom-fields/custom-reports.controller.ts:36 | NOT_RUN |
| GET | 'custom-reports' | ':id' | apps/api/src/modules/custom-fields/custom-reports.controller.ts:42 | NOT_RUN |
| PATCH | 'custom-reports' | ':id' | apps/api/src/modules/custom-fields/custom-reports.controller.ts:48 | NOT_RUN |
| PUT | 'custom-reports' | ':id' | apps/api/src/modules/custom-fields/custom-reports.controller.ts:54 | NOT_RUN |
| DELETE | 'custom-reports' | ':id' | apps/api/src/modules/custom-fields/custom-reports.controller.ts:60 | NOT_RUN |
| POST | 'custom-reports' | ':id/run' | apps/api/src/modules/custom-fields/custom-reports.controller.ts:66 | NOT_RUN |
| POST | 'custom-reports' | ':id/export' | apps/api/src/modules/custom-fields/custom-reports.controller.ts:72 | NOT_RUN |
| GET |  | 'dashboards/widgets/catalog' | apps/api/src/modules/dashboards/dashboards.controller.ts:11 | NOT_RUN |
| GET |  | 'dashboards' | apps/api/src/modules/dashboards/dashboards.controller.ts:17 | NOT_RUN |
| POST |  | 'dashboards' | apps/api/src/modules/dashboards/dashboards.controller.ts:24 | NOT_RUN |
| GET |  | 'dashboards/:id' | apps/api/src/modules/dashboards/dashboards.controller.ts:31 | NOT_RUN |
| GET |  | 'dashboards/:id/data' | apps/api/src/modules/dashboards/dashboards.controller.ts:38 | NOT_RUN |
| GET |  | 'dashboards/:id/pdf' | apps/api/src/modules/dashboards/dashboards.controller.ts:45 | NOT_RUN |
| POST |  | 'dashboards/:id/widgets' | apps/api/src/modules/dashboards/dashboards.controller.ts:53 | NOT_RUN |
| PUT |  | 'dashboards/:id/layout' | apps/api/src/modules/dashboards/dashboards.controller.ts:62 | NOT_RUN |
| POST |  | 'dashboards/:id/default' | apps/api/src/modules/dashboards/dashboards.controller.ts:69 | NOT_RUN |
| DELETE |  | 'dashboards/:id/widgets/:widgetId' | apps/api/src/modules/dashboards/dashboards.controller.ts:77 | NOT_RUN |
| DELETE |  | 'dashboards/:id' | apps/api/src/modules/dashboards/dashboards.controller.ts:85 | NOT_RUN |
| GET | 'integration' | 'v1/me' | apps/api/src/modules/developer/integration.controller.ts:32 | NOT_RUN |
| GET | 'integration' | 'v1/invoices' | apps/api/src/modules/developer/integration.controller.ts:43 | NOT_RUN |
| GET | 'integration' | 'v1/signature' | apps/api/src/modules/developer/integration.controller.ts:57 | NOT_RUN |
| GET | 'platform' | 'developer/catalogue' | apps/api/src/modules/developer/platform-developer.controller.ts:67 | NOT_RUN |
| GET | 'platform' | 'tenants/:id/api-keys' | apps/api/src/modules/developer/platform-developer.controller.ts:80 | NOT_RUN |
| POST | 'platform' | 'tenants/:id/api-keys' | apps/api/src/modules/developer/platform-developer.controller.ts:89 | NOT_RUN |
| POST | 'platform' | 'tenants/:id/api-keys/:keyId/rotate' | apps/api/src/modules/developer/platform-developer.controller.ts:102 | NOT_RUN |
| DELETE | 'platform' | 'tenants/:id/api-keys/:keyId' | apps/api/src/modules/developer/platform-developer.controller.ts:115 | NOT_RUN |
| GET | 'platform' | 'tenants/:id/webhooks' | apps/api/src/modules/developer/platform-developer.controller.ts:133 | NOT_RUN |
| POST | 'platform' | 'tenants/:id/webhooks' | apps/api/src/modules/developer/platform-developer.controller.ts:146 | NOT_RUN |
| PATCH | 'platform' | 'tenants/:id/webhooks/:endpointId' | apps/api/src/modules/developer/platform-developer.controller.ts:162 | NOT_RUN |
| DELETE | 'platform' | 'tenants/:id/webhooks/:endpointId' | apps/api/src/modules/developer/platform-developer.controller.ts:174 | NOT_RUN |
| POST | 'platform' | 'webhooks/:id/test' | apps/api/src/modules/developer/platform-developer.controller.ts:186 | NOT_RUN |
| GET | 'platform' | 'webhooks/:id/deliveries' | apps/api/src/modules/developer/platform-developer.controller.ts:197 | NOT_RUN |
| POST | 'platform' | 'webhooks/:id/deliveries/:deliveryId/retry' | apps/api/src/modules/developer/platform-developer.controller.ts:208 | NOT_RUN |
| GET | 'devices' | '' | apps/api/src/modules/devices/devices.controller.ts:32 | NOT_RUN |
| POST | 'devices' | '' | apps/api/src/modules/devices/devices.controller.ts:39 | NOT_RUN |
| PATCH | 'devices' | ':id' | apps/api/src/modules/devices/devices.controller.ts:53 | NOT_RUN |
| POST | 'devices' | ':id/activate' | apps/api/src/modules/devices/devices.controller.ts:67 | NOT_RUN |
| POST | 'devices' | ':id/suspend' | apps/api/src/modules/devices/devices.controller.ts:80 | NOT_RUN |
| POST | 'devices' | ':id/revoke' | apps/api/src/modules/devices/devices.controller.ts:93 | NOT_RUN |
| POST | 'devices' | ':id/rotate-credential' | apps/api/src/modules/devices/devices.controller.ts:106 | NOT_RUN |
| DELETE | 'devices' | ':id' | apps/api/src/modules/devices/devices.controller.ts:119 | NOT_RUN |
| GET | 'ecommerce' | 'providers' | apps/api/src/modules/ecommerce/ecommerce.controller.ts:19 | NOT_RUN |
| POST | 'ecommerce' | 'stores' | apps/api/src/modules/ecommerce/ecommerce.controller.ts:25 | NOT_RUN |
| GET | 'ecommerce' | 'stores' | apps/api/src/modules/ecommerce/ecommerce.controller.ts:31 | NOT_RUN |
| GET | 'ecommerce' | 'stores/:id/logs' | apps/api/src/modules/ecommerce/ecommerce.controller.ts:37 | NOT_RUN |
| DELETE | 'ecommerce' | 'stores/:id' | apps/api/src/modules/ecommerce/ecommerce.controller.ts:43 | NOT_RUN |
| POST | 'ecommerce' | 'stores/:id/sync' | apps/api/src/modules/ecommerce/ecommerce.controller.ts:49 | NOT_RUN |
| POST | 'ecommerce' | 'webhooks/:provider' | apps/api/src/modules/ecommerce/ecommerce.controller.ts:60 | NOT_RUN |
| GET | 'ecommerce' | 'orders' | apps/api/src/modules/ecommerce/ecommerce.controller.ts:84 | NOT_RUN |
| GET |  | 'einvoice/settings' | apps/api/src/modules/einvoicing/einvoicing.controller.ts:18 | NOT_RUN |
| PUT |  | 'einvoice/settings' | apps/api/src/modules/einvoicing/einvoicing.controller.ts:22 | NOT_RUN |
| POST |  | 'einvoice/settings/fill-from-company' | apps/api/src/modules/einvoicing/einvoicing.controller.ts:26 | NOT_RUN |
| POST |  | 'einvoice/csr/generate' | apps/api/src/modules/einvoicing/einvoicing.controller.ts:30 | NOT_RUN |
| POST |  | 'einvoice/onboarding/compliance-csid' | apps/api/src/modules/einvoicing/einvoicing.controller.ts:34 | NOT_RUN |
| POST |  | 'einvoice/onboarding/production-csid' | apps/api/src/modules/einvoicing/einvoicing.controller.ts:38 | NOT_RUN |
| POST |  | 'einvoice/onboarding/renew' | apps/api/src/modules/einvoicing/einvoicing.controller.ts:42 | NOT_RUN |
| POST |  | 'einvoice/onboarding/compliance-check' | apps/api/src/modules/einvoicing/einvoicing.controller.ts:46 | NOT_RUN |
| POST |  | 'einvoice/link/toggle' | apps/api/src/modules/einvoicing/einvoicing.controller.ts:50 | NOT_RUN |
| GET |  | 'einvoice/filings' | apps/api/src/modules/einvoicing/einvoicing.controller.ts:59 | NOT_RUN |
| GET |  | 'einvoice/filings/:id' | apps/api/src/modules/einvoicing/einvoicing.controller.ts:77 | NOT_RUN |
| GET |  | 'einvoice/chain' | apps/api/src/modules/einvoicing/einvoicing.controller.ts:81 | NOT_RUN |
| POST |  | 'einvoice/sync' | apps/api/src/modules/einvoicing/einvoicing.controller.ts:91 | NOT_RUN |
| PUT |  | 'einvoice/credentials' | apps/api/src/modules/einvoicing/einvoicing.controller.ts:94 | NOT_RUN |
| GET |  | 'einvoice/credentials' | apps/api/src/modules/einvoicing/einvoicing.controller.ts:95 | NOT_RUN |
| GET |  | 'einvoice/submissions' | apps/api/src/modules/einvoicing/einvoicing.controller.ts:96 | NOT_RUN |
| POST |  | 'einvoice/submissions/:id/retry' | apps/api/src/modules/einvoicing/einvoicing.controller.ts:98 | NOT_RUN |
| POST |  | 'sales-invoices/:id/einvoice/submit' | apps/api/src/modules/einvoicing/einvoicing.controller.ts:99 | NOT_RUN |
| GET |  | 'einvoice/health' | apps/api/src/modules/einvoicing/einvoicing.controller.ts:100 | NOT_RUN |
| GET | 'email' | 'templates' | apps/api/src/modules/email/email.controller.ts:55 | NOT_RUN |
| PUT | 'email' | 'templates/:event' | apps/api/src/modules/email/email.controller.ts:75 | NOT_RUN |
| GET | 'email' | 'messages' | apps/api/src/modules/email/email.controller.ts:95 | NOT_RUN |
| GET | 'email' | 'settings' | apps/api/src/modules/email/email.controller.ts:116 | NOT_RUN |
| PUT | 'email' | 'settings' | apps/api/src/modules/email/email.controller.ts:125 | NOT_RUN |
| PUT | 'email' | 'settings/provider' | apps/api/src/modules/email/email.controller.ts:154 | NOT_RUN |
| POST | 'email' | 'settings/test' | apps/api/src/modules/email/email.controller.ts:173 | NOT_RUN |
| GET | 'employee' | 'me' | apps/api/src/modules/employee/employee.controller.ts:19 | NOT_RUN |
| POST | 'employee' | 'attendance' | apps/api/src/modules/employee/employee.controller.ts:26 | NOT_RUN |
| POST | 'employee' | 'attendance/sync' | apps/api/src/modules/employee/employee.controller.ts:33 | NOT_RUN |
| GET | 'employee' | 'attendance/today' | apps/api/src/modules/employee/employee.controller.ts:40 | NOT_RUN |
| POST | 'employee' | 'requests' | apps/api/src/modules/employee/employee.controller.ts:47 | NOT_RUN |
| GET | 'employee' | 'requests' | apps/api/src/modules/employee/employee.controller.ts:54 | NOT_RUN |
| POST | 'employee' | 'requests/:id/approve' | apps/api/src/modules/employee/employee.controller.ts:61 | NOT_RUN |
| POST | 'employee' | 'requests/:id/reject' | apps/api/src/modules/employee/employee.controller.ts:68 | NOT_RUN |
| GET | 'employee' | 'payslips' | apps/api/src/modules/employee/employee.controller.ts:75 | NOT_RUN |
| GET | 'employee' | 'custodies' | apps/api/src/modules/employee/employee.controller.ts:82 | NOT_RUN |
| GET | 'employee' | 'leaves' | apps/api/src/modules/employee/employee.controller.ts:89 | NOT_RUN |
| POST | 'employee' | 'push-subscription' | apps/api/src/modules/employee/employee.controller.ts:96 | NOT_RUN |
| GET | 'employee' | 'push-config' | apps/api/src/modules/employee/employee.controller.ts:103 | NOT_RUN |
| GET | 'employee' | 'notices' | apps/api/src/modules/employee/employee.controller.ts:109 | NOT_RUN |
| GET | 'employee' | 'employee-leaves' | apps/api/src/modules/employee/employee.controller.ts:121 | NOT_RUN |
| GET | 'employee' | 'geofences' | apps/api/src/modules/employee/employee.controller.ts:127 | NOT_RUN |
| PUT | 'employee' | 'geofences/:branchId' | apps/api/src/modules/employee/employee.controller.ts:133 | NOT_RUN |
| POST | 'fitment' | 'makes' | apps/api/src/modules/fitment/fitment.controller.ts:8 | NOT_RUN |
| GET | 'hrm' | 'departments' | apps/api/src/modules/hrm/hrm.controller.ts:40 | NOT_RUN |
| POST | 'hrm' | 'departments' | apps/api/src/modules/hrm/hrm.controller.ts:41 | NOT_RUN |
| PATCH | 'hrm' | 'departments/:id' | apps/api/src/modules/hrm/hrm.controller.ts:42 | NOT_RUN |
| DELETE | 'hrm' | 'departments/:id' | apps/api/src/modules/hrm/hrm.controller.ts:43 | NOT_RUN |
| GET | 'hrm' | 'jobs' | apps/api/src/modules/hrm/hrm.controller.ts:44 | NOT_RUN |
| POST | 'hrm' | 'jobs' | apps/api/src/modules/hrm/hrm.controller.ts:45 | NOT_RUN |
| PATCH | 'hrm' | 'jobs/:id' | apps/api/src/modules/hrm/hrm.controller.ts:46 | NOT_RUN |
| DELETE | 'hrm' | 'jobs/:id' | apps/api/src/modules/hrm/hrm.controller.ts:47 | NOT_RUN |
| GET | 'hrm' | 'employees' | apps/api/src/modules/hrm/hrm.controller.ts:49 | NOT_RUN |
| GET | 'hrm' | 'employees/:id' | apps/api/src/modules/hrm/hrm.controller.ts:50 | NOT_RUN |
| POST | 'hrm' | 'employees' | apps/api/src/modules/hrm/hrm.controller.ts:51 | NOT_RUN |
| PATCH | 'hrm' | 'employees/:id' | apps/api/src/modules/hrm/hrm.controller.ts:52 | NOT_RUN |
| DELETE | 'hrm' | 'employees/:id' | apps/api/src/modules/hrm/hrm.controller.ts:53 | NOT_RUN |
| POST | 'hrm' | 'attendance/import' | apps/api/src/modules/hrm/hrm.controller.ts:54 | NOT_RUN |
| GET | 'hrm' | 'attendance/summary' | apps/api/src/modules/hrm/hrm.controller.ts:55 | NOT_RUN |
| GET | 'hrm' | 'adjustment-types' | apps/api/src/modules/hrm/hrm.controller.ts:57 | NOT_RUN |
| POST | 'hrm' | 'adjustment-types' | apps/api/src/modules/hrm/hrm.controller.ts:58 | NOT_RUN |
| PATCH | 'hrm' | 'adjustment-types/:id' | apps/api/src/modules/hrm/hrm.controller.ts:59 | NOT_RUN |
| DELETE | 'hrm' | 'adjustment-types/:id' | apps/api/src/modules/hrm/hrm.controller.ts:60 | NOT_RUN |
| GET | 'hrm' | 'adjustments' | apps/api/src/modules/hrm/hrm.controller.ts:61 | NOT_RUN |
| GET | 'hrm' | 'adjustments/:id' | apps/api/src/modules/hrm/hrm.controller.ts:62 | NOT_RUN |
| POST | 'hrm' | 'adjustments' | apps/api/src/modules/hrm/hrm.controller.ts:63 | NOT_RUN |
| POST | 'hrm' | 'adjustments/:id/approve' | apps/api/src/modules/hrm/hrm.controller.ts:64 | NOT_RUN |
| DELETE | 'hrm' | 'adjustments/:id' | apps/api/src/modules/hrm/hrm.controller.ts:65 | NOT_RUN |
| POST | 'hrm' | 'payroll/preview' | apps/api/src/modules/hrm/hrm.controller.ts:66 | NOT_RUN |
| GET | 'hrm' | 'payroll/runs' | apps/api/src/modules/hrm/hrm.controller.ts:67 | NOT_RUN |
| POST | 'hrm' | 'payroll/runs' | apps/api/src/modules/hrm/hrm.controller.ts:68 | NOT_RUN |
| GET | 'hrm' | 'payroll/runs/:id' | apps/api/src/modules/hrm/hrm.controller.ts:69 | NOT_RUN |
| POST | 'hrm' | 'payroll/runs/:id/post' | apps/api/src/modules/hrm/hrm.controller.ts:70 | NOT_RUN |
| POST | 'hrm' | 'payroll/runs/:id/pay' | apps/api/src/modules/hrm/hrm.controller.ts:71 | NOT_RUN |
| GET | 'hrm' | 'employee-statement' | apps/api/src/modules/hrm/hrm.controller.ts:73 | NOT_RUN |
| GET | 'hrm' | 'employee-movements' | apps/api/src/modules/hrm/hrm.controller.ts:96 | NOT_RUN |
| GET | 'hrm' | 'reports/salary' | apps/api/src/modules/hrm/hrm.controller.ts:133 | NOT_RUN |
| GET | 'hrm' | 'salary-payments' | apps/api/src/modules/hrm/hrm.controller.ts:150 | NOT_RUN |
| GET | 'hrm' | 'salary-payments/:id' | apps/api/src/modules/hrm/hrm.controller.ts:159 | NOT_RUN |
| POST | 'hrm' | 'salary-payments' | apps/api/src/modules/hrm/hrm.controller.ts:160 | NOT_RUN |
| DELETE | 'hrm' | 'salary-payments/:id' | apps/api/src/modules/hrm/hrm.controller.ts:161 | NOT_RUN |
| POST | 'hrm' | 'payroll/runs/:id/reverse' | apps/api/src/modules/hrm/hrm.controller.ts:162 | NOT_RUN |
| GET | 'hrm' | 'compliance/alerts' | apps/api/src/modules/hrm/hrm.controller.ts:164 | NOT_RUN |
| GET | 'hrm' | 'payroll/compliance-settings' | apps/api/src/modules/hrm/hrm.controller.ts:171 | NOT_RUN |
| POST | 'hrm' | 'payroll/compliance-settings' | apps/api/src/modules/hrm/hrm.controller.ts:177 | NOT_RUN |
| GET | 'hrm' | 'payroll/runs/:id/wps-preview' | apps/api/src/modules/hrm/hrm.controller.ts:183 | NOT_RUN |
| POST | 'hrm' | 'payroll/runs/:id/wps-export' | apps/api/src/modules/hrm/hrm.controller.ts:189 | NOT_RUN |
| GET | 'hrm' | 'payroll/runs/:id/wps' | apps/api/src/modules/hrm/hrm.controller.ts:195 | NOT_RUN |
| GET | 'hrm' | 'payroll/wps/:fileId' | apps/api/src/modules/hrm/hrm.controller.ts:201 | NOT_RUN |
| POST | 'hrm' | 'payroll/wps/:fileId/status' | apps/api/src/modules/hrm/hrm.controller.ts:207 | NOT_RUN |
| GET | 'hrm' | 'payroll/runs/:id/gosi-preview' | apps/api/src/modules/hrm/hrm.controller.ts:213 | NOT_RUN |
| POST | 'hrm' | 'payroll/runs/:id/gosi-export' | apps/api/src/modules/hrm/hrm.controller.ts:219 | NOT_RUN |
| GET | 'hrm' | 'payroll/runs/:id/gosi' | apps/api/src/modules/hrm/hrm.controller.ts:225 | NOT_RUN |
| GET | 'installments' | 'contracts' | apps/api/src/modules/installments/installments.controller.ts:11 | NOT_RUN |
| POST | 'installments' | 'contracts' | apps/api/src/modules/installments/installments.controller.ts:12 | NOT_RUN |
| GET | 'installments' | 'contracts/:id' | apps/api/src/modules/installments/installments.controller.ts:13 | NOT_RUN |
| GET | 'installments' | 'overdue' | apps/api/src/modules/installments/installments.controller.ts:14 | NOT_RUN |
| POST | 'installments' | 'contracts/:id/collect' | apps/api/src/modules/installments/installments.controller.ts:15 | NOT_RUN |
| GET | 'integrations/salla' | 'oauth/authorize' | apps/api/src/modules/integrations/salla/salla.controller.ts:34 | NOT_RUN |
| POST | 'integrations/salla' | 'connections' | apps/api/src/modules/integrations/salla/salla.controller.ts:40 | NOT_RUN |
| DELETE | 'integrations/salla' | 'connections/:id' | apps/api/src/modules/integrations/salla/salla.controller.ts:47 | NOT_RUN |
| GET | 'integrations/salla' | 'connections' | apps/api/src/modules/integrations/salla/salla.controller.ts:53 | NOT_RUN |
| POST | 'integrations/salla' | 'branch-mappings' | apps/api/src/modules/integrations/salla/salla.controller.ts:60 | NOT_RUN |
| GET | 'integrations/salla' | 'branch-mappings' | apps/api/src/modules/integrations/salla/salla.controller.ts:66 | NOT_RUN |
| GET | 'integrations/salla' | 'products' | apps/api/src/modules/integrations/salla/salla.controller.ts:75 | NOT_RUN |
| POST | 'integrations/salla' | 'products/pull' | apps/api/src/modules/integrations/salla/salla.controller.ts:82 | NOT_RUN |
| POST | 'integrations/salla' | 'products/push' | apps/api/src/modules/integrations/salla/salla.controller.ts:89 | NOT_RUN |
| GET | 'integrations/salla' | 'catalog' | apps/api/src/modules/integrations/salla/salla.controller.ts:96 | NOT_RUN |
| PUT | 'integrations/salla' | 'products/:remoteId' | apps/api/src/modules/integrations/salla/salla.controller.ts:102 | NOT_RUN |
| DELETE | 'integrations/salla' | 'products/:remoteId' | apps/api/src/modules/integrations/salla/salla.controller.ts:108 | NOT_RUN |
| GET | 'integrations/salla' | 'customers' | apps/api/src/modules/integrations/salla/salla.controller.ts:118 | NOT_RUN |
| POST | 'integrations/salla' | 'orders/pull' | apps/api/src/modules/integrations/salla/salla.controller.ts:127 | NOT_RUN |
| GET | 'integrations/salla' | 'orders' | apps/api/src/modules/integrations/salla/salla.controller.ts:134 | NOT_RUN |
| PUT | 'integrations/salla' | 'orders/:id/status' | apps/api/src/modules/integrations/salla/salla.controller.ts:141 | NOT_RUN |
| DELETE | 'integrations/salla' | 'orders/:id' | apps/api/src/modules/integrations/salla/salla.controller.ts:148 | NOT_RUN |
| POST | 'integrations/salla' | 'export-queue' | apps/api/src/modules/integrations/salla/salla.controller.ts:156 | NOT_RUN |
| POST | 'integrations/salla' | 'export-next' | apps/api/src/modules/integrations/salla/salla.controller.ts:162 | NOT_RUN |
| GET | 'integrations/salla' | 'export-log' | apps/api/src/modules/integrations/salla/salla.controller.ts:168 | NOT_RUN |
| POST | 'integrations/salla' | 'webhooks/:storeId/orders' | apps/api/src/modules/integrations/salla/salla.controller.ts:183 | NOT_RUN |
| GET |  | 'whatsapp/settings' | apps/api/src/modules/integrations/whatsapp/whatsapp.controller.ts:31 | NOT_RUN |
| PUT |  | 'whatsapp/settings' | apps/api/src/modules/integrations/whatsapp/whatsapp.controller.ts:37 | NOT_RUN |
| POST |  | 'whatsapp/test' | apps/api/src/modules/integrations/whatsapp/whatsapp.controller.ts:43 | NOT_RUN |
| POST |  | 'whatsapp/send' | apps/api/src/modules/integrations/whatsapp/whatsapp.controller.ts:49 | NOT_RUN |
| GET |  | 'whatsapp/messages' | apps/api/src/modules/integrations/whatsapp/whatsapp.controller.ts:55 | NOT_RUN |
| GET | 'inventory' | 'levels' | apps/api/src/modules/inventory/inventory.controller.ts:16 | NOT_RUN |
| GET | 'inventory' | 'movements' | apps/api/src/modules/inventory/inventory.controller.ts:23 | NOT_RUN |
| GET | 'inventory' | 'item-card' | apps/api/src/modules/inventory/inventory.controller.ts:40 | NOT_RUN |
| GET | 'inventory' | 'in-transit' | apps/api/src/modules/inventory/inventory.controller.ts:50 | NOT_RUN |
| POST | 'inventory' | 'ledger/record' | apps/api/src/modules/inventory/inventory.controller.ts:55 | NOT_RUN |
| GET | 'inventory' | 'valuation/as-of' | apps/api/src/modules/inventory/inventory.controller.ts:60 | NOT_RUN |
| POST | 'inventory' | 'balances/recompute' | apps/api/src/modules/inventory/inventory.controller.ts:67 | NOT_RUN |
| GET | 'inventory' | 'transfers' | apps/api/src/modules/inventory/inventory.controller.ts:73 | NOT_RUN |
| POST | 'inventory' | 'transfers' | apps/api/src/modules/inventory/inventory.controller.ts:83 | NOT_RUN |
| POST | 'inventory' | 'transfers/draft' | apps/api/src/modules/inventory/inventory.controller.ts:94 | NOT_RUN |
| GET | 'inventory' | 'transfers/:id' | apps/api/src/modules/inventory/inventory.controller.ts:118 | NOT_RUN |
| POST | 'inventory' | 'transfers/:id/receive' | apps/api/src/modules/inventory/inventory.controller.ts:121 | NOT_RUN |
| POST | 'inventory' | 'transfers/:id/close' | apps/api/src/modules/inventory/inventory.controller.ts:129 | NOT_RUN |
| POST | 'inventory' | 'transfers/:id/cancel' | apps/api/src/modules/inventory/inventory.controller.ts:141 | NOT_RUN |
| POST | 'inventory' | 'transfers/:id/send' | apps/api/src/modules/inventory/inventory.controller.ts:147 | NOT_RUN |
| POST | 'inventory' | 'transfers/receive' | apps/api/src/modules/inventory/inventory.controller.ts:153 | NOT_RUN |
| POST | 'inventory' | 'transfers/cancel' | apps/api/src/modules/inventory/inventory.controller.ts:158 | NOT_RUN |
| POST | 'inventory' | 'adjustments/post' | apps/api/src/modules/inventory/inventory.controller.ts:163 | NOT_RUN |
| GET | 'inventory' | 'adjustments' | apps/api/src/modules/inventory/inventory.controller.ts:177 | NOT_RUN |
| POST | 'inventory' | 'adjustments' | apps/api/src/modules/inventory/inventory.controller.ts:182 | NOT_RUN |
| GET | 'inventory' | 'adjustments/:id' | apps/api/src/modules/inventory/inventory.controller.ts:187 | NOT_RUN |
| POST | 'inventory' | 'adjustments/:id/post' | apps/api/src/modules/inventory/inventory.controller.ts:192 | NOT_RUN |
| GET | 'inventory' | 'vouchers' | apps/api/src/modules/inventory/inventory.controller.ts:199 | NOT_RUN |
| POST | 'inventory' | 'vouchers' | apps/api/src/modules/inventory/inventory.controller.ts:206 | NOT_RUN |
| GET | 'inventory' | 'vouchers/:id' | apps/api/src/modules/inventory/inventory.controller.ts:209 | NOT_RUN |
| POST | 'inventory' | 'vouchers/:id/post' | apps/api/src/modules/inventory/inventory.controller.ts:212 | NOT_RUN |
| POST | 'inventory' | 'vouchers/:id/void' | apps/api/src/modules/inventory/inventory.controller.ts:218 | NOT_RUN |
| GET | 'inventory' | 'barcode/:code' | apps/api/src/modules/inventory/inventory.controller.ts:224 | NOT_RUN |
| GET | 'inventory' | 'expiry' | apps/api/src/modules/inventory/inventory.controller.ts:227 | NOT_RUN |
| GET | 'inventory' | 'below-minimum' | apps/api/src/modules/inventory/inventory.controller.ts:233 | NOT_RUN |
| GET | 'inventory' | 'lots' | apps/api/src/modules/inventory/inventory.controller.ts:238 | NOT_RUN |
| DELETE | 'inventory' | 'lots/:id' | apps/api/src/modules/inventory/inventory.controller.ts:244 | NOT_RUN |
| POST | 'inventory' | 'lots' | apps/api/src/modules/inventory/inventory.controller.ts:247 | NOT_RUN |
| GET | 'inventory' | 'serials/lookup' | apps/api/src/modules/inventory/inventory.controller.ts:266 | NOT_RUN |
| GET | 'inventory' | 'serials' | apps/api/src/modules/inventory/inventory.controller.ts:269 | NOT_RUN |
| POST | 'inventory' | 'serials' | apps/api/src/modules/inventory/inventory.controller.ts:277 | NOT_RUN |
| POST | 'inventory' | 'serials/generate' | apps/api/src/modules/inventory/inventory.controller.ts:283 | NOT_RUN |
| DELETE | 'inventory' | 'serials/:id' | apps/api/src/modules/inventory/inventory.controller.ts:288 | NOT_RUN |
| GET | 'inventory' | 'serials/:id/documents' | apps/api/src/modules/inventory/inventory.controller.ts:292 | NOT_RUN |
| POST | 'inventory' | 'serials/reserve' | apps/api/src/modules/inventory/inventory.controller.ts:295 | NOT_RUN |
| POST | 'inventory' | 'serials/release' | apps/api/src/modules/inventory/inventory.controller.ts:300 | NOT_RUN |
| POST | 'inventory' | 'serials/consume' | apps/api/src/modules/inventory/inventory.controller.ts:305 | NOT_RUN |
| POST | 'inventory' | 'serials/return' | apps/api/src/modules/inventory/inventory.controller.ts:310 | NOT_RUN |
| GET | 'manufacturing' | 'boms' | apps/api/src/modules/inventory/manufacturing.controller.ts:43 | NOT_RUN |
| POST | 'manufacturing' | 'boms' | apps/api/src/modules/inventory/manufacturing.controller.ts:49 | NOT_RUN |
| GET | 'manufacturing' | 'orders' | apps/api/src/modules/inventory/manufacturing.controller.ts:62 | NOT_RUN |
| GET | 'manufacturing' | 'orders/:id' | apps/api/src/modules/inventory/manufacturing.controller.ts:68 | NOT_RUN |
| POST | 'manufacturing' | 'orders' | apps/api/src/modules/inventory/manufacturing.controller.ts:74 | NOT_RUN |
| POST | 'manufacturing' | 'orders/:id/produce' | apps/api/src/modules/inventory/manufacturing.controller.ts:85 | NOT_RUN |
| GET | 'inventory/production-orders' | '' | apps/api/src/modules/inventory/production-orders.controller.ts:16 | NOT_RUN |
| POST | 'inventory/production-orders' | '' | apps/api/src/modules/inventory/production-orders.controller.ts:21 | NOT_RUN |
| GET | 'inventory/production-orders' | ':id' | apps/api/src/modules/inventory/production-orders.controller.ts:26 | NOT_RUN |
| POST | 'inventory/production-orders' | ':id/complete' | apps/api/src/modules/inventory/production-orders.controller.ts:35 | NOT_RUN |
| POST | 'inventory/production-orders' | ':id/cancel' | apps/api/src/modules/inventory/production-orders.controller.ts:49 | NOT_RUN |
| GET | 'inventory' | 'requests' | apps/api/src/modules/inventory/warehouse-documents.controller.ts:24 | NOT_RUN |
| GET | 'inventory' | 'requests/:id' | apps/api/src/modules/inventory/warehouse-documents.controller.ts:30 | NOT_RUN |
| POST | 'inventory' | 'requests' | apps/api/src/modules/inventory/warehouse-documents.controller.ts:36 | NOT_RUN |
| POST | 'inventory' | 'requests/:id/submit' | apps/api/src/modules/inventory/warehouse-documents.controller.ts:42 | NOT_RUN |
| POST | 'inventory' | 'requests/:id/cancel' | apps/api/src/modules/inventory/warehouse-documents.controller.ts:48 | NOT_RUN |
| POST | 'inventory' | 'requests/:id/approve' | apps/api/src/modules/inventory/warehouse-documents.controller.ts:54 | NOT_RUN |
| POST | 'inventory' | 'requests/:id/reject' | apps/api/src/modules/inventory/warehouse-documents.controller.ts:60 | NOT_RUN |
| POST | 'inventory' | 'requests/:id/fulfil' | apps/api/src/modules/inventory/warehouse-documents.controller.ts:66 | NOT_RUN |
| GET | 'inventory' | 'deliveries' | apps/api/src/modules/inventory/warehouse-documents.controller.ts:72 | NOT_RUN |
| GET | 'inventory' | 'deliveries/outstanding' | apps/api/src/modules/inventory/warehouse-documents.controller.ts:78 | NOT_RUN |
| POST | 'inventory' | 'deliveries' | apps/api/src/modules/inventory/warehouse-documents.controller.ts:84 | NOT_RUN |
| POST | 'inventory' | 'deliveries/:id/deliver' | apps/api/src/modules/inventory/warehouse-documents.controller.ts:90 | NOT_RUN |
| POST | 'inventory' | 'deliveries/:id/cancel' | apps/api/src/modules/inventory/warehouse-documents.controller.ts:96 | NOT_RUN |
| GET | 'inventory' | 'bins' | apps/api/src/modules/inventory/wms.controller.ts:40 | NOT_RUN |
| POST | 'inventory' | 'bins' | apps/api/src/modules/inventory/wms.controller.ts:47 | NOT_RUN |
| PATCH | 'inventory' | 'bins/:id' | apps/api/src/modules/inventory/wms.controller.ts:61 | NOT_RUN |
| GET | 'inventory' | 'bin-balances' | apps/api/src/modules/inventory/wms.controller.ts:73 | NOT_RUN |
| GET | 'inventory' | 'bin-transfers' | apps/api/src/modules/inventory/wms.controller.ts:89 | NOT_RUN |
| POST | 'inventory' | 'bin-transfers' | apps/api/src/modules/inventory/wms.controller.ts:95 | NOT_RUN |
| POST | 'inventory' | 'bin-counts' | apps/api/src/modules/inventory/wms.controller.ts:108 | NOT_RUN |
| POST | 'inventory' | 'bins/:id/receive' | apps/api/src/modules/inventory/wms.controller.ts:121 | NOT_RUN |
| POST | 'inventory' | 'bins/:id/issue' | apps/api/src/modules/inventory/wms.controller.ts:127 | NOT_RUN |
| GET | 'marina' | '' | apps/api/src/modules/marina/marina.controller.ts:55 | NOT_RUN |
| GET | 'marina' | 'bookings' | apps/api/src/modules/marina/marina.controller.ts:67 | NOT_RUN |
| GET | 'marina' | 'bookings/:id' | apps/api/src/modules/marina/marina.controller.ts:93 | NOT_RUN |
| POST | 'marina' | 'bookings' | apps/api/src/modules/marina/marina.controller.ts:100 | NOT_RUN |
| PATCH | 'marina' | 'bookings/:id' | apps/api/src/modules/marina/marina.controller.ts:106 | NOT_RUN |
| DELETE | 'marina' | 'bookings/:id' | apps/api/src/modules/marina/marina.controller.ts:112 | NOT_RUN |
| POST | 'marina' | 'bookings/:id/additions' | apps/api/src/modules/marina/marina.controller.ts:119 | NOT_RUN |
| DELETE | 'marina' | 'bookings/:id/additions/:additionId' | apps/api/src/modules/marina/marina.controller.ts:126 | NOT_RUN |
| GET | 'marina' | 'additions' | apps/api/src/modules/marina/marina.controller.ts:138 | NOT_RUN |
| GET | 'marina' | 'additions/next' | apps/api/src/modules/marina/marina.controller.ts:145 | NOT_RUN |
| POST | 'marina' | 'additions' | apps/api/src/modules/marina/marina.controller.ts:155 | NOT_RUN |
| PATCH | 'marina' | 'additions/:id' | apps/api/src/modules/marina/marina.controller.ts:162 | NOT_RUN |
| DELETE | 'marina' | 'additions/:id' | apps/api/src/modules/marina/marina.controller.ts:172 | NOT_RUN |
| POST | 'marina' | 'bookings/:id/rental-invoice' | apps/api/src/modules/marina/marina.controller.ts:179 | NOT_RUN |
| GET | 'marina' | 'violations' | apps/api/src/modules/marina/marina.controller.ts:188 | NOT_RUN |
| GET | 'marina' | 'violations/:id' | apps/api/src/modules/marina/marina.controller.ts:208 | NOT_RUN |
| POST | 'marina' | 'violations' | apps/api/src/modules/marina/marina.controller.ts:215 | NOT_RUN |
| PATCH | 'marina' | 'violations/:id' | apps/api/src/modules/marina/marina.controller.ts:221 | NOT_RUN |
| DELETE | 'marina' | 'violations/:id' | apps/api/src/modules/marina/marina.controller.ts:227 | NOT_RUN |
| GET | 'marina' | 'groups' | apps/api/src/modules/marina/marina.controller.ts:241 | NOT_RUN |
| GET | 'marina' | 'groups/navigate' | apps/api/src/modules/marina/marina.controller.ts:253 | NOT_RUN |
| GET | 'marina' | 'rent-periods' | apps/api/src/modules/marina/marina.controller.ts:262 | NOT_RUN |
| GET | 'marina' | 'groups/:id' | apps/api/src/modules/marina/marina.controller.ts:268 | NOT_RUN |
| POST | 'marina' | 'groups' | apps/api/src/modules/marina/marina.controller.ts:280 | NOT_RUN |
| PATCH | 'marina' | 'groups/:id' | apps/api/src/modules/marina/marina.controller.ts:286 | NOT_RUN |
| DELETE | 'marina' | 'groups/:id' | apps/api/src/modules/marina/marina.controller.ts:293 | NOT_RUN |
| PUT | 'marina' | 'groups/:id/periods' | apps/api/src/modules/marina/marina.controller.ts:303 | NOT_RUN |
| POST | 'marina' | 'groups/:id/pricing' | apps/api/src/modules/marina/marina.controller.ts:310 | NOT_RUN |
| POST | 'marina' | 'vessels' | apps/api/src/modules/marina/marina.controller.ts:316 | NOT_RUN |
| DELETE | 'marina' | 'vessels/:id' | apps/api/src/modules/marina/marina.controller.ts:323 | NOT_RUN |
| POST | 'marina' | 'vessels/:id/owners' | apps/api/src/modules/marina/marina.controller.ts:329 | NOT_RUN |
| POST | 'marina' | 'operation-plans' | apps/api/src/modules/marina/marina.controller.ts:335 | NOT_RUN |
| GET | 'marina' | 'operation-plans' | apps/api/src/modules/marina/marina.controller.ts:352 | NOT_RUN |
| GET | 'marina' | 'preparations' | apps/api/src/modules/marina/marina.controller.ts:358 | NOT_RUN |
| POST | 'marina' | 'bookings/:id/preparation' | apps/api/src/modules/marina/marina.controller.ts:364 | NOT_RUN |
| POST | 'marina' | 'preparations/:id/return' | apps/api/src/modules/marina/marina.controller.ts:370 | NOT_RUN |
| GET | 'marina' | 'rental-invoices' | apps/api/src/modules/marina/marina.controller.ts:377 | NOT_RUN |
| GET | 'marina' | 'bookings/uninvoiced' | apps/api/src/modules/marina/marina.controller.ts:390 | NOT_RUN |
| POST | 'marina' | 'rental-invoices/link' | apps/api/src/modules/marina/marina.controller.ts:396 | NOT_RUN |
| GET | 'marina' | 'day-close' | apps/api/src/modules/marina/marina.controller.ts:402 | NOT_RUN |
| GET | 'marina' | 'day-closings' | apps/api/src/modules/marina/marina.controller.ts:408 | NOT_RUN |
| POST | 'marina' | 'day-close' | apps/api/src/modules/marina/marina.controller.ts:414 | NOT_RUN |
| GET | 'platform/marketplace' | 'apps' | apps/api/src/modules/marketplace/marketplace-platform.controller.ts:14 | NOT_RUN |
| PUT | 'platform/marketplace' | 'apps/:code' | apps/api/src/modules/marketplace/marketplace-platform.controller.ts:20 | NOT_RUN |
| GET | 'platform/marketplace' | 'requests' | apps/api/src/modules/marketplace/marketplace-platform.controller.ts:26 | NOT_RUN |
| POST | 'platform/marketplace' | 'requests/:id/decide' | apps/api/src/modules/marketplace/marketplace-platform.controller.ts:32 | NOT_RUN |
| GET | 'platform/marketplace' | 'unlicensed-usage' | apps/api/src/modules/marketplace/marketplace-platform.controller.ts:54 | NOT_RUN |
| GET | 'platform/marketplace' | 'tenants/:tenantId/apps' | apps/api/src/modules/marketplace/marketplace-platform.controller.ts:60 | NOT_RUN |
| PUT | 'platform/marketplace' | 'tenants/:tenantId/apps/:code' | apps/api/src/modules/marketplace/marketplace-platform.controller.ts:66 | NOT_RUN |
| GET |  | 'marketplace/apps' | apps/api/src/modules/marketplace/marketplace.controller.ts:16 | NOT_RUN |
| POST |  | 'marketplace/apps/:code/install' | apps/api/src/modules/marketplace/marketplace.controller.ts:23 | NOT_RUN |
| POST |  | 'marketplace/apps/:code/request' | apps/api/src/modules/marketplace/marketplace.controller.ts:30 | NOT_RUN |
| DELETE |  | 'marketplace/apps/:code' | apps/api/src/modules/marketplace/marketplace.controller.ts:37 | NOT_RUN |
| GET |  | 'settings/white-label/domains' | apps/api/src/modules/marketplace/marketplace.controller.ts:44 | NOT_RUN |
| POST |  | 'settings/white-label/domains' | apps/api/src/modules/marketplace/marketplace.controller.ts:51 | NOT_RUN |
| POST |  | 'settings/white-label/domains/:id/verify' | apps/api/src/modules/marketplace/marketplace.controller.ts:58 | NOT_RUN |
| DELETE |  | 'settings/white-label/domains/:id' | apps/api/src/modules/marketplace/marketplace.controller.ts:65 | NOT_RUN |
| GET |  | 'settings/white-label/branding' | apps/api/src/modules/marketplace/marketplace.controller.ts:72 | NOT_RUN |
| PUT |  | 'settings/white-label/branding' | apps/api/src/modules/marketplace/marketplace.controller.ts:79 | NOT_RUN |
| GET |  | 'public/branding' | apps/api/src/modules/marketplace/marketplace.controller.ts:88 | NOT_RUN |
| POST | 'migration' | 'runs' | apps/api/src/modules/migration/migration.controller.ts:11 | NOT_RUN |
| GET | 'migration' | 'runs' | apps/api/src/modules/migration/migration.controller.ts:12 | NOT_RUN |
| GET | 'migration' | 'runs/:id' | apps/api/src/modules/migration/migration.controller.ts:13 | NOT_RUN |
| GET | 'migration' | 'runs/:id/issues' | apps/api/src/modules/migration/migration.controller.ts:14 | NOT_RUN |
| GET | 'migration' | 'runs/:id/reconciliation' | apps/api/src/modules/migration/migration.controller.ts:15 | NOT_RUN |
| POST | 'ocr' | 'presign' | apps/api/src/modules/ocr/ocr.controller.ts:18 | NOT_RUN |
| POST | 'ocr' | 'jobs' | apps/api/src/modules/ocr/ocr.controller.ts:25 | NOT_RUN |
| GET | 'ocr' | 'jobs' | apps/api/src/modules/ocr/ocr.controller.ts:31 | NOT_RUN |
| GET | 'ocr' | 'jobs/:id' | apps/api/src/modules/ocr/ocr.controller.ts:37 | NOT_RUN |
| POST | 'ocr' | 'from-ocr' | apps/api/src/modules/ocr/ocr.controller.ts:49 | NOT_RUN |
| GET | 'settings' | 'backups' | apps/api/src/modules/operations/operations.controller.ts:29 | NOT_RUN |
| POST | 'settings' | 'backups' | apps/api/src/modules/operations/operations.controller.ts:34 | NOT_RUN |
| GET | 'settings' | 'backups/:id/download' | apps/api/src/modules/operations/operations.controller.ts:39 | NOT_RUN |
| GET | 'settings' | 'restores' | apps/api/src/modules/operations/operations.controller.ts:45 | NOT_RUN |
| POST | 'settings' | 'restores' | apps/api/src/modules/operations/operations.controller.ts:49 | NOT_RUN |
| GET | 'settings' | 'maintenance-runs' | apps/api/src/modules/operations/operations.controller.ts:57 | NOT_RUN |
| POST | 'settings' | 'data-rotation' | apps/api/src/modules/operations/operations.controller.ts:61 | NOT_RUN |
| POST | 'settings' | 'invoice-maintenance' | apps/api/src/modules/operations/operations.controller.ts:69 | NOT_RUN |
| GET | 'settings' | 'company-files' | apps/api/src/modules/operations/operations.controller.ts:77 | NOT_RUN |
| POST | 'settings' | 'company-files' | apps/api/src/modules/operations/operations.controller.ts:81 | NOT_RUN |
| GET | 'platform' | 'jobs' | apps/api/src/modules/operations/platform-operations.controller.ts:58 | NOT_RUN |
| GET | 'platform' | 'jobs/heartbeat' | apps/api/src/modules/operations/platform-operations.controller.ts:74 | NOT_RUN |
| POST | 'platform' | 'jobs/:id/retry' | apps/api/src/modules/operations/platform-operations.controller.ts:82 | NOT_RUN |
| POST | 'platform' | 'jobs/:id/cancel' | apps/api/src/modules/operations/platform-operations.controller.ts:95 | NOT_RUN |
| GET | 'platform' | 'health/detailed' | apps/api/src/modules/operations/platform-operations.controller.ts:110 | NOT_RUN |
| GET | 'platform' | 'files' | apps/api/src/modules/operations/platform-operations.controller.ts:120 | NOT_RUN |
| POST | 'platform' | 'files/:id/scan' | apps/api/src/modules/operations/platform-operations.controller.ts:135 | NOT_RUN |
| DELETE | 'platform' | 'files/:id' | apps/api/src/modules/operations/platform-operations.controller.ts:144 | NOT_RUN |
| GET | 'optics' | 'prescriptions' | apps/api/src/modules/optics/optics.controller.ts:33 | NOT_RUN |
| GET | 'optics' | 'prescriptions/:id' | apps/api/src/modules/optics/optics.controller.ts:49 | NOT_RUN |
| POST | 'optics' | 'prescriptions' | apps/api/src/modules/optics/optics.controller.ts:56 | NOT_RUN |
| PATCH | 'optics' | 'prescriptions/:id' | apps/api/src/modules/optics/optics.controller.ts:62 | NOT_RUN |
| DELETE | 'optics' | 'prescriptions/:id' | apps/api/src/modules/optics/optics.controller.ts:68 | NOT_RUN |
| GET | 'optics' | 'field-labels' | apps/api/src/modules/optics/optics.controller.ts:77 | NOT_RUN |
| PUT | 'optics' | 'field-labels' | apps/api/src/modules/optics/optics.controller.ts:84 | NOT_RUN |
| GET | 'optics' | 'invoice-lines/:lineId/print-section' | apps/api/src/modules/optics/optics.controller.ts:93 | NOT_RUN |
| GET | 'branches' | '' | apps/api/src/modules/organization/branches/branches.controller.ts:30 | NOT_RUN |
| GET | 'branches' | ':id' | apps/api/src/modules/organization/branches/branches.controller.ts:46 | NOT_RUN |
| POST | 'branches' | '' | apps/api/src/modules/organization/branches/branches.controller.ts:55 | NOT_RUN |
| PATCH | 'branches' | ':id' | apps/api/src/modules/organization/branches/branches.controller.ts:67 | NOT_RUN |
| DELETE | 'branches' | ':id' | apps/api/src/modules/organization/branches/branches.controller.ts:81 | NOT_RUN |
| GET | 'cash-locations' | '' | apps/api/src/modules/organization/cash-locations/cash-locations.controller.ts:37 | NOT_RUN |
| GET | 'cash-locations' | ':id' | apps/api/src/modules/organization/cash-locations/cash-locations.controller.ts:52 | NOT_RUN |
| GET | 'cash-locations' | ':id/balances' | apps/api/src/modules/organization/cash-locations/cash-locations.controller.ts:63 | NOT_RUN |
| POST | 'cash-locations' | '' | apps/api/src/modules/organization/cash-locations/cash-locations.controller.ts:73 | NOT_RUN |
| PATCH | 'cash-locations' | ':id' | apps/api/src/modules/organization/cash-locations/cash-locations.controller.ts:85 | NOT_RUN |
| DELETE | 'cash-locations' | ':id' | apps/api/src/modules/organization/cash-locations/cash-locations.controller.ts:98 | NOT_RUN |
| GET | 'organization/catalog' | 'items' | apps/api/src/modules/organization/catalog/catalog.controller.ts:114 | NOT_RUN |
| POST | 'organization/catalog' | 'items' | apps/api/src/modules/organization/catalog/catalog.controller.ts:117 | NOT_RUN |
| PATCH | 'organization/catalog' | 'items/:id' | apps/api/src/modules/organization/catalog/catalog.controller.ts:120 | NOT_RUN |
| DELETE | 'organization/catalog' | 'items/:id' | apps/api/src/modules/organization/catalog/catalog.controller.ts:126 | NOT_RUN |
| GET | 'organization/catalog' | 'items/:id/units' | apps/api/src/modules/organization/catalog/catalog.controller.ts:135 | NOT_RUN |
| POST | 'organization/catalog' | 'items/:id/units' | apps/api/src/modules/organization/catalog/catalog.controller.ts:139 | NOT_RUN |
| DELETE | 'organization/catalog' | 'items/:id/units/:unitId' | apps/api/src/modules/organization/catalog/catalog.controller.ts:146 | NOT_RUN |
| GET | 'organization/catalog' | 'items/:id/barcodes' | apps/api/src/modules/organization/catalog/catalog.controller.ts:155 | NOT_RUN |
| POST | 'organization/catalog' | 'items/:id/barcodes' | apps/api/src/modules/organization/catalog/catalog.controller.ts:161 | NOT_RUN |
| DELETE | 'organization/catalog' | 'items/:id/barcodes/:barcode' | apps/api/src/modules/organization/catalog/catalog.controller.ts:168 | NOT_RUN |
| GET | 'organization/catalog' | 'items/:id/components' | apps/api/src/modules/organization/catalog/catalog.controller.ts:181 | NOT_RUN |
| POST | 'organization/catalog' | 'items/:id/components' | apps/api/src/modules/organization/catalog/catalog.controller.ts:187 | NOT_RUN |
| DELETE | 'organization/catalog' | 'items/:id/components/:componentItemId' | apps/api/src/modules/organization/catalog/catalog.controller.ts:198 | NOT_RUN |
| GET | 'organization/catalog' | 'categories' | apps/api/src/modules/organization/catalog/catalog.controller.ts:207 | NOT_RUN |
| POST | 'organization/catalog' | 'categories' | apps/api/src/modules/organization/catalog/catalog.controller.ts:210 | NOT_RUN |
| PATCH | 'organization/catalog' | 'categories/:id' | apps/api/src/modules/organization/catalog/catalog.controller.ts:213 | NOT_RUN |
| DELETE | 'organization/catalog' | 'categories/:id' | apps/api/src/modules/organization/catalog/catalog.controller.ts:219 | NOT_RUN |
| GET | 'organization/catalog' | 'units' | apps/api/src/modules/organization/catalog/catalog.controller.ts:224 | NOT_RUN |
| POST | 'organization/catalog' | 'units' | apps/api/src/modules/organization/catalog/catalog.controller.ts:227 | NOT_RUN |
| PATCH | 'organization/catalog' | 'units/:id' | apps/api/src/modules/organization/catalog/catalog.controller.ts:230 | NOT_RUN |
| DELETE | 'organization/catalog' | 'units/:id' | apps/api/src/modules/organization/catalog/catalog.controller.ts:236 | NOT_RUN |
| GET | 'organization/catalog' | 'tax-groups' | apps/api/src/modules/organization/catalog/catalog.controller.ts:239 | NOT_RUN |
| POST | 'organization/catalog' | 'tax-groups' | apps/api/src/modules/organization/catalog/catalog.controller.ts:242 | NOT_RUN |
| PATCH | 'organization/catalog' | 'tax-groups/:id' | apps/api/src/modules/organization/catalog/catalog.controller.ts:245 | NOT_RUN |
| GET | 'company-profile' | '' | apps/api/src/modules/organization/company-profile/company-profile.controller.ts:19 | NOT_RUN |
| PUT | 'company-profile' | '' | apps/api/src/modules/organization/company-profile/company-profile.controller.ts:28 | NOT_RUN |
| GET | 'currencies' | '' | apps/api/src/modules/organization/currencies/currencies.controller.ts:46 | NOT_RUN |
| GET | 'currencies' | ':code' | apps/api/src/modules/organization/currencies/currencies.controller.ts:59 | NOT_RUN |
| POST | 'currencies' | '' | apps/api/src/modules/organization/currencies/currencies.controller.ts:70 | NOT_RUN |
| PATCH | 'currencies' | ':code' | apps/api/src/modules/organization/currencies/currencies.controller.ts:82 | NOT_RUN |
| GET | 'currencies' | '' | apps/api/src/modules/organization/currencies/currencies.controller.ts:103 | NOT_RUN |
| GET | 'currencies' | 'resolve' | apps/api/src/modules/organization/currencies/currencies.controller.ts:116 | NOT_RUN |
| GET | 'currencies' | ':id' | apps/api/src/modules/organization/currencies/currencies.controller.ts:131 | NOT_RUN |
| POST | 'currencies' | '' | apps/api/src/modules/organization/currencies/currencies.controller.ts:139 | NOT_RUN |
| PATCH | 'currencies' | ':id' | apps/api/src/modules/organization/currencies/currencies.controller.ts:151 | NOT_RUN |
| DELETE | 'currencies' | ':id' | apps/api/src/modules/organization/currencies/currencies.controller.ts:163 | NOT_RUN |
| GET | 'branch-posting-profiles' | '' | apps/api/src/modules/organization/posting-profiles/posting-profiles.controller.ts:31 | NOT_RUN |
| GET | 'branch-posting-profiles' | 'resolve' | apps/api/src/modules/organization/posting-profiles/posting-profiles.controller.ts:44 | NOT_RUN |
| GET | 'branch-posting-profiles' | ':id' | apps/api/src/modules/organization/posting-profiles/posting-profiles.controller.ts:60 | NOT_RUN |
| POST | 'branch-posting-profiles' | '' | apps/api/src/modules/organization/posting-profiles/posting-profiles.controller.ts:70 | NOT_RUN |
| DELETE | 'branch-posting-profiles' | ':id' | apps/api/src/modules/organization/posting-profiles/posting-profiles.controller.ts:82 | NOT_RUN |
| GET | 'price-lists' | '' | apps/api/src/modules/organization/price-lists/price-lists.controller.ts:40 | NOT_RUN |
| GET | 'price-lists' | ':id' | apps/api/src/modules/organization/price-lists/price-lists.controller.ts:53 | NOT_RUN |
| POST | 'price-lists' | '' | apps/api/src/modules/organization/price-lists/price-lists.controller.ts:63 | NOT_RUN |
| PATCH | 'price-lists' | ':id' | apps/api/src/modules/organization/price-lists/price-lists.controller.ts:75 | NOT_RUN |
| DELETE | 'price-lists' | ':id' | apps/api/src/modules/organization/price-lists/price-lists.controller.ts:87 | NOT_RUN |
| GET | 'price-lists' | ':id/items' | apps/api/src/modules/organization/price-lists/price-lists.controller.ts:96 | NOT_RUN |
| POST | 'price-lists' | ':id/items' | apps/api/src/modules/organization/price-lists/price-lists.controller.ts:107 | NOT_RUN |
| DELETE | 'price-lists' | ':id/items/:itemRowId' | apps/api/src/modules/organization/price-lists/price-lists.controller.ts:121 | NOT_RUN |
| GET | 'warehouses' | '' | apps/api/src/modules/organization/warehouses/warehouses.controller.ts:30 | NOT_RUN |
| GET | 'warehouses' | ':id' | apps/api/src/modules/organization/warehouses/warehouses.controller.ts:45 | NOT_RUN |
| POST | 'warehouses' | '' | apps/api/src/modules/organization/warehouses/warehouses.controller.ts:56 | NOT_RUN |
| PATCH | 'warehouses' | ':id' | apps/api/src/modules/organization/warehouses/warehouses.controller.ts:69 | NOT_RUN |
| DELETE | 'warehouses' | ':id' | apps/api/src/modules/organization/warehouses/warehouses.controller.ts:82 | NOT_RUN |
| GET |  | 'parties' | apps/api/src/modules/parties/parties.controller.ts:10 | NOT_RUN |
| GET |  | 'parties/:id' | apps/api/src/modules/parties/parties.controller.ts:11 | NOT_RUN |
| POST |  | 'parties' | apps/api/src/modules/parties/parties.controller.ts:12 | NOT_RUN |
| PUT |  | 'parties/:id' | apps/api/src/modules/parties/parties.controller.ts:13 | NOT_RUN |
| DELETE |  | 'parties/:id' | apps/api/src/modules/parties/parties.controller.ts:14 | NOT_RUN |
| GET |  | 'parties/:id/contacts' | apps/api/src/modules/parties/parties.controller.ts:15 | NOT_RUN |
| POST |  | 'parties/:id/contacts' | apps/api/src/modules/parties/parties.controller.ts:16 | NOT_RUN |
| DELETE |  | 'parties/:partyId/contacts/:contactId' | apps/api/src/modules/parties/parties.controller.ts:17 | NOT_RUN |
| GET |  | 'parties/:id/balance' | apps/api/src/modules/parties/parties.controller.ts:18 | NOT_RUN |
| GET |  | 'parties/:id/statement' | apps/api/src/modules/parties/parties.controller.ts:19 | NOT_RUN |
| GET |  | 'payment-methods' | apps/api/src/modules/parties/parties.controller.ts:20 | NOT_RUN |
| POST |  | 'payment-methods' | apps/api/src/modules/parties/parties.controller.ts:21 | NOT_RUN |
| PUT |  | 'payment-methods/:id' | apps/api/src/modules/parties/parties.controller.ts:22 | NOT_RUN |
| POST |  | 'allocations' | apps/api/src/modules/parties/parties.controller.ts:23 | NOT_RUN |
| GET |  | 'payments/providers' | apps/api/src/modules/payments/payment-links.controller.ts:17 | NOT_RUN |
| POST |  | 'payments/providers' | apps/api/src/modules/payments/payment-links.controller.ts:23 | NOT_RUN |
| GET |  | 'payments/links' | apps/api/src/modules/payments/payment-links.controller.ts:29 | NOT_RUN |
| POST |  | 'payments/links' | apps/api/src/modules/payments/payment-links.controller.ts:35 | NOT_RUN |
| POST |  | 'payments/links/:id/send' | apps/api/src/modules/payments/payment-links.controller.ts:41 | NOT_RUN |
| POST |  | 'payments/links/:id/simulate' | apps/api/src/modules/payments/payment-links.controller.ts:47 | NOT_RUN |
| POST |  | 'payments/webhooks/:provider' | apps/api/src/modules/payments/payment-links.controller.ts:58 | NOT_RUN |
| GET |  | 'payment-gateways' | apps/api/src/modules/payments/payments.controller.ts:23 | NOT_RUN |
| PUT |  | 'payment-gateways/:provider' | apps/api/src/modules/payments/payments.controller.ts:29 | NOT_RUN |
| POST |  | 'payment-gateways/:provider/test' | apps/api/src/modules/payments/payments.controller.ts:35 | NOT_RUN |
| POST |  | 'payment-gateways/:provider/sale' | apps/api/src/modules/payments/payments.controller.ts:41 | NOT_RUN |
| GET |  | 'payment-gateways/transactions' | apps/api/src/modules/payments/payments.controller.ts:47 | NOT_RUN |
| POST |  | 'payment-gateways/transactions/:id/refresh' | apps/api/src/modules/payments/payments.controller.ts:53 | NOT_RUN |
| GET | 'platform' | 'overview' | apps/api/src/modules/platform/admin/platform-admin.controller.ts:51 | NOT_RUN |
| GET | 'platform' | 'tenants' | apps/api/src/modules/platform/admin/platform-admin.controller.ts:60 | NOT_RUN |
| POST | 'platform' | 'tenants' | apps/api/src/modules/platform/admin/platform-admin.controller.ts:67 | NOT_RUN |
| GET | 'platform' | 'activation-requests' | apps/api/src/modules/platform/admin/platform-admin.controller.ts:94 | NOT_RUN |
| POST | 'platform' | 'activation-requests/:id/review' | apps/api/src/modules/platform/admin/platform-admin.controller.ts:101 | NOT_RUN |
| GET | 'platform/analytics' | 'overview' | apps/api/src/modules/platform/admin/platform-analytics.controller.ts:34 | NOT_RUN |
| GET | 'platform/analytics' | 'funnel' | apps/api/src/modules/platform/admin/platform-analytics.controller.ts:43 | NOT_RUN |
| GET | 'platform/analytics' | 'cohorts' | apps/api/src/modules/platform/admin/platform-analytics.controller.ts:51 | NOT_RUN |
| GET | 'platform/analytics' | 'export.csv' | apps/api/src/modules/platform/admin/platform-analytics.controller.ts:63 | NOT_RUN |
| GET | 'platform' | 'plans/entitlement-keys' | apps/api/src/modules/platform/admin/platform-billing.controller.ts:75 | NOT_RUN |
| GET | 'platform' | 'plans' | apps/api/src/modules/platform/admin/platform-billing.controller.ts:82 | NOT_RUN |
| POST | 'platform' | 'plans' | apps/api/src/modules/platform/admin/platform-billing.controller.ts:89 | NOT_RUN |
| PATCH | 'platform' | 'plans/:id' | apps/api/src/modules/platform/admin/platform-billing.controller.ts:97 | NOT_RUN |
| PUT | 'platform' | 'plans/:id/entitlements' | apps/api/src/modules/platform/admin/platform-billing.controller.ts:108 | NOT_RUN |
| GET | 'platform' | 'subscriptions' | apps/api/src/modules/platform/admin/platform-billing.controller.ts:123 | NOT_RUN |
| POST | 'platform' | 'subscriptions' | apps/api/src/modules/platform/admin/platform-billing.controller.ts:130 | NOT_RUN |
| POST | 'platform' | 'subscriptions/:id/change-plan' | apps/api/src/modules/platform/admin/platform-billing.controller.ts:140 | NOT_RUN |
| POST | 'platform' | 'subscriptions/:id/pause' | apps/api/src/modules/platform/admin/platform-billing.controller.ts:152 | NOT_RUN |
| POST | 'platform' | 'subscriptions/:id/resume' | apps/api/src/modules/platform/admin/platform-billing.controller.ts:163 | NOT_RUN |
| POST | 'platform' | 'subscriptions/:id/cancel' | apps/api/src/modules/platform/admin/platform-billing.controller.ts:174 | NOT_RUN |
| GET | 'platform' | 'invoices' | apps/api/src/modules/platform/admin/platform-billing.controller.ts:187 | NOT_RUN |
| GET | 'platform' | 'invoices/:id' | apps/api/src/modules/platform/admin/platform-billing.controller.ts:196 | NOT_RUN |
| GET | 'platform' | 'invoices/:id/print' | apps/api/src/modules/platform/admin/platform-billing.controller.ts:204 | NOT_RUN |
| POST | 'platform' | 'invoices' | apps/api/src/modules/platform/admin/platform-billing.controller.ts:212 | NOT_RUN |
| POST | 'platform' | 'invoices/:id/issue' | apps/api/src/modules/platform/admin/platform-billing.controller.ts:222 | NOT_RUN |
| POST | 'platform' | 'invoices/:id/pay' | apps/api/src/modules/platform/admin/platform-billing.controller.ts:234 | NOT_RUN |
| POST | 'platform' | 'invoices/:id/void' | apps/api/src/modules/platform/admin/platform-billing.controller.ts:246 | NOT_RUN |
| GET | 'platform' | 'dunning' | apps/api/src/modules/platform/admin/platform-billing.controller.ts:260 | NOT_RUN |
| POST | 'platform' | 'dunning/:subscription/run' | apps/api/src/modules/platform/admin/platform-billing.controller.ts:269 | NOT_RUN |
| GET | 'platform' | 'revenue' | apps/api/src/modules/platform/admin/platform-billing.controller.ts:283 | NOT_RUN |
| GET | 'platform' | 'audit' | apps/api/src/modules/platform/admin/platform-console.controller.ts:45 | NOT_RUN |
| GET | 'platform' | 'problems' | apps/api/src/modules/platform/admin/platform-console.controller.ts:73 | NOT_RUN |
| GET | 'platform' | 'settings' | apps/api/src/modules/platform/admin/platform-console.controller.ts:91 | NOT_RUN |
| PUT | 'platform' | 'settings' | apps/api/src/modules/platform/admin/platform-console.controller.ts:99 | NOT_RUN |
| GET | 'platform' | 'jobs/outbox' | apps/api/src/modules/platform/admin/platform-console.controller.ts:113 | NOT_RUN |
| GET | 'platform' | 'tenants/search' | apps/api/src/modules/platform/admin/platform-console.controller.ts:135 | NOT_RUN |
| GET | 'platform/email' | 'templates' | apps/api/src/modules/platform/admin/platform-email.controller.ts:63 | NOT_RUN |
| POST | 'platform/email' | 'templates' | apps/api/src/modules/platform/admin/platform-email.controller.ts:85 | NOT_RUN |
| PUT | 'platform/email' | 'templates/:id' | apps/api/src/modules/platform/admin/platform-email.controller.ts:102 | NOT_RUN |
| DELETE | 'platform/email' | 'templates/:id' | apps/api/src/modules/platform/admin/platform-email.controller.ts:114 | NOT_RUN |
| POST | 'platform/email' | 'templates/:id/test' | apps/api/src/modules/platform/admin/platform-email.controller.ts:124 | NOT_RUN |
| GET | 'platform/email' | 'messages' | apps/api/src/modules/platform/admin/platform-email.controller.ts:138 | NOT_RUN |
| POST | 'platform/email' | 'messages/:id/retry' | apps/api/src/modules/platform/admin/platform-email.controller.ts:154 | NOT_RUN |
| GET | 'platform/email' | 'settings' | apps/api/src/modules/platform/admin/platform-email.controller.ts:168 | NOT_RUN |
| PUT | 'platform/email' | 'settings' | apps/api/src/modules/platform/admin/platform-email.controller.ts:176 | NOT_RUN |
| POST | 'platform/email' | 'settings/test' | apps/api/src/modules/platform/admin/platform-email.controller.ts:188 | NOT_RUN |
| GET | 'platform/email' | 'suppressions' | apps/api/src/modules/platform/admin/platform-email.controller.ts:202 | NOT_RUN |
| POST | 'platform/email' | 'suppressions' | apps/api/src/modules/platform/admin/platform-email.controller.ts:210 | NOT_RUN |
| DELETE | 'platform/email' | 'suppressions/:id' | apps/api/src/modules/platform/admin/platform-email.controller.ts:221 | NOT_RUN |
| GET | 'platform' | 'users' | apps/api/src/modules/platform/admin/platform-identity.controller.ts:53 | NOT_RUN |
| GET | 'platform' | 'users/:id' | apps/api/src/modules/platform/admin/platform-identity.controller.ts:60 | NOT_RUN |
| POST | 'platform' | 'operators/invite' | apps/api/src/modules/platform/admin/platform-identity.controller.ts:70 | NOT_RUN |
| POST | 'platform' | 'users/:id/roles' | apps/api/src/modules/platform/admin/platform-identity.controller.ts:82 | NOT_RUN |
| DELETE | 'platform' | 'users/:id/roles/:roleCode' | apps/api/src/modules/platform/admin/platform-identity.controller.ts:95 | NOT_RUN |
| POST | 'platform' | 'users/:id/mfa/reset' | apps/api/src/modules/platform/admin/platform-identity.controller.ts:108 | NOT_RUN |
| GET | 'platform' | 'sessions/:id' | apps/api/src/modules/platform/admin/platform-identity.controller.ts:121 | NOT_RUN |
| DELETE | 'platform' | 'sessions/:id' | apps/api/src/modules/platform/admin/platform-identity.controller.ts:130 | NOT_RUN |
| GET | 'platform' | 'roles' | apps/api/src/modules/platform/admin/platform-identity.controller.ts:142 | NOT_RUN |
| GET | 'platform' | 'permissions' | apps/api/src/modules/platform/admin/platform-identity.controller.ts:149 | NOT_RUN |
| PUT | 'platform' | 'roles/:code/permissions' | apps/api/src/modules/platform/admin/platform-identity.controller.ts:160 | NOT_RUN |
| GET | 'platform/tenants' | ':id' | apps/api/src/modules/platform/admin/platform-tenants.controller.ts:70 | NOT_RUN |
| GET | 'platform/tenants' | ':id/usage' | apps/api/src/modules/platform/admin/platform-tenants.controller.ts:82 | NOT_RUN |
| GET | 'platform/tenants' | ':id/health' | apps/api/src/modules/platform/admin/platform-tenants.controller.ts:91 | NOT_RUN |
| PATCH | 'platform/tenants' | ':id' | apps/api/src/modules/platform/admin/platform-tenants.controller.ts:100 | NOT_RUN |
| POST | 'platform/tenants' | ':id/status' | apps/api/src/modules/platform/admin/platform-tenants.controller.ts:113 | NOT_RUN |
| POST | 'platform/tenants' | ':id/owner/transfer' | apps/api/src/modules/platform/admin/platform-tenants.controller.ts:126 | NOT_RUN |
| GET | 'platform/tenants' | ':id/notes' | apps/api/src/modules/platform/admin/platform-tenants.controller.ts:140 | NOT_RUN |
| POST | 'platform/tenants' | ':id/notes' | apps/api/src/modules/platform/admin/platform-tenants.controller.ts:149 | NOT_RUN |
| DELETE | 'platform/tenants' | ':id/notes/:noteId' | apps/api/src/modules/platform/admin/platform-tenants.controller.ts:159 | NOT_RUN |
| GET | 'platform/tenants' | ':id/settings' | apps/api/src/modules/platform/admin/platform-tenants.controller.ts:172 | NOT_RUN |
| PUT | 'platform/tenants' | ':id/settings/:key' | apps/api/src/modules/platform/admin/platform-tenants.controller.ts:181 | NOT_RUN |
| GET | 'platform/tenants' | ':id/flags' | apps/api/src/modules/platform/admin/platform-tenants.controller.ts:195 | NOT_RUN |
| PUT | 'platform/tenants' | ':id/flags' | apps/api/src/modules/platform/admin/platform-tenants.controller.ts:204 | NOT_RUN |
| GET | 'platform/tenants' | ':id/branding' | apps/api/src/modules/platform/admin/platform-tenants.controller.ts:216 | NOT_RUN |
| PUT | 'platform/tenants' | ':id/branding' | apps/api/src/modules/platform/admin/platform-tenants.controller.ts:225 | NOT_RUN |
| GET | 'platform/usage' | '' | apps/api/src/modules/platform/admin/platform-usage.controller.ts:30 | NOT_RUN |
| GET | 'platform/usage' | 'export.csv' | apps/api/src/modules/platform/admin/platform-usage.controller.ts:44 | NOT_RUN |
| POST | 'platform/problems' | 'ingest' | apps/api/src/modules/platform/admin/problem-ingest.controller.ts:28 | NOT_RUN |
| POST | 'auth' | 'login' | apps/api/src/modules/platform/auth/auth.controller.ts:39 | NOT_RUN |
| POST | 'auth' | 'refresh' | apps/api/src/modules/platform/auth/auth.controller.ts:60 | NOT_RUN |
| POST | 'auth' | 'handoff' | apps/api/src/modules/platform/auth/auth.controller.ts:82 | NOT_RUN |
| POST | 'auth' | 'handoff/redeem' | apps/api/src/modules/platform/auth/auth.controller.ts:101 | NOT_RUN |
| POST | 'auth' | 'logout' | apps/api/src/modules/platform/auth/auth.controller.ts:119 | NOT_RUN |
| POST | 'auth' | 'change-password' | apps/api/src/modules/platform/auth/auth.controller.ts:130 | NOT_RUN |
| PATCH | 'auth' | 'profile' | apps/api/src/modules/platform/auth/auth.controller.ts:145 | NOT_RUN |
| POST | 'auth' | 'forgot-password' | apps/api/src/modules/platform/auth/auth.controller.ts:155 | NOT_RUN |
| POST | 'auth' | 'reset-password' | apps/api/src/modules/platform/auth/auth.controller.ts:169 | NOT_RUN |
| GET | 'auth/mfa' | '' | apps/api/src/modules/platform/auth/mfa.controller.ts:32 | NOT_RUN |
| POST | 'auth/mfa' | 'enroll' | apps/api/src/modules/platform/auth/mfa.controller.ts:40 | NOT_RUN |
| POST | 'auth/mfa' | 'enable' | apps/api/src/modules/platform/auth/mfa.controller.ts:51 | NOT_RUN |
| POST | 'auth/mfa' | 'disable' | apps/api/src/modules/platform/auth/mfa.controller.ts:65 | NOT_RUN |
| GET | 'billing' | 'plans' | apps/api/src/modules/platform/billing/billing.controller.ts:32 | NOT_RUN |
| POST | 'billing' | 'webhook' | apps/api/src/modules/platform/billing/billing.controller.ts:39 | NOT_RUN |
| POST | 'billing' | 'checkout' | apps/api/src/modules/platform/billing/billing.controller.ts:53 | NOT_RUN |
| POST | 'billing' | 'activation-requests' | apps/api/src/modules/platform/billing/billing.controller.ts:59 | NOT_RUN |
| GET | 'billing' | 'subscription' | apps/api/src/modules/platform/billing/billing.controller.ts:65 | NOT_RUN |
| GET | 'billing' | 'activation-requests' | apps/api/src/modules/platform/billing/billing.controller.ts:71 | NOT_RUN |
| POST | 'billing' | 'activation-requests/:id/review' | apps/api/src/modules/platform/billing/billing.controller.ts:79 | NOT_RUN |
| GET | 'public' | 'plans' | apps/api/src/modules/platform/billing/public-plans.controller.ts:26 | NOT_RUN |
| GET |  | 'me' | apps/api/src/modules/platform/identity/identity.controller.ts:16 | NOT_RUN |
| GET |  | 'permissions' | apps/api/src/modules/platform/identity/identity.controller.ts:24 | NOT_RUN |
| GET | 'platform/leads' | '' | apps/api/src/modules/platform/leads/platform-leads.controller.ts:48 | NOT_RUN |
| GET | 'platform/leads' | 'subscribers' | apps/api/src/modules/platform/leads/platform-leads.controller.ts:67 | NOT_RUN |
| PATCH | 'platform/leads' | 'subscribers/:id' | apps/api/src/modules/platform/leads/platform-leads.controller.ts:76 | NOT_RUN |
| GET | 'platform/leads' | ':id' | apps/api/src/modules/platform/leads/platform-leads.controller.ts:91 | NOT_RUN |
| PATCH | 'platform/leads' | ':id' | apps/api/src/modules/platform/leads/platform-leads.controller.ts:99 | NOT_RUN |
| POST | 'platform/leads' | ':id/notes' | apps/api/src/modules/platform/leads/platform-leads.controller.ts:116 | NOT_RUN |
| POST | 'platform/leads' | ':id/convert' | apps/api/src/modules/platform/leads/platform-leads.controller.ts:128 | NOT_RUN |
| POST | 'public' | 'leads' | apps/api/src/modules/platform/leads/public-leads.controller.ts:44 | NOT_RUN |
| POST | 'public' | 'subscribe' | apps/api/src/modules/platform/leads/public-leads.controller.ts:62 | NOT_RUN |
| GET | 'public' | 'subscribe/confirm/:token' | apps/api/src/modules/platform/leads/public-leads.controller.ts:79 | NOT_RUN |
| GET |  | 'signup/plans' | apps/api/src/modules/platform/signup/signup-verification.controller.ts:49 | NOT_RUN |
| POST |  | 'signup' | apps/api/src/modules/platform/signup/signup-verification.controller.ts:63 | NOT_RUN |
| POST |  | 'signup/verify' | apps/api/src/modules/platform/signup/signup-verification.controller.ts:88 | NOT_RUN |
| POST |  | 'signup/resend' | apps/api/src/modules/platform/signup/signup-verification.controller.ts:108 | NOT_RUN |
| GET |  | 'signup/status/:email' | apps/api/src/modules/platform/signup/signup-verification.controller.ts:120 | NOT_RUN |
| GET | 'memberships' | 'assignable-roles' | apps/api/src/modules/platform/tenancy/memberships.controller.ts:33 | NOT_RUN |
| GET | 'memberships' | '' | apps/api/src/modules/platform/tenancy/memberships.controller.ts:41 | NOT_RUN |
| GET | 'memberships' | ':id' | apps/api/src/modules/platform/tenancy/memberships.controller.ts:56 | NOT_RUN |
| POST | 'memberships' | '' | apps/api/src/modules/platform/tenancy/memberships.controller.ts:65 | NOT_RUN |
| PATCH | 'memberships' | ':id' | apps/api/src/modules/platform/tenancy/memberships.controller.ts:78 | NOT_RUN |
| DELETE | 'memberships' | ':id' | apps/api/src/modules/platform/tenancy/memberships.controller.ts:94 | NOT_RUN |
| POST | 'memberships' | ':id/scopes' | apps/api/src/modules/platform/tenancy/memberships.controller.ts:105 | NOT_RUN |
| GET | 'roles' | '' | apps/api/src/modules/platform/tenancy/roles.controller.ts:33 | NOT_RUN |
| GET | 'roles' | ':id' | apps/api/src/modules/platform/tenancy/roles.controller.ts:46 | NOT_RUN |
| POST | 'roles' | '' | apps/api/src/modules/platform/tenancy/roles.controller.ts:55 | NOT_RUN |
| PUT | 'roles' | ':id' | apps/api/src/modules/platform/tenancy/roles.controller.ts:68 | NOT_RUN |
| POST | 'roles' | ':id/permissions' | apps/api/src/modules/platform/tenancy/roles.controller.ts:82 | NOT_RUN |
| GET | 'settings' | '' | apps/api/src/modules/platform/tenancy/settings.controller.ts:19 | NOT_RUN |
| PUT | 'settings' | ':key' | apps/api/src/modules/platform/tenancy/settings.controller.ts:27 | NOT_RUN |
| GET | 'tenant' | '' | apps/api/src/modules/platform/tenancy/tenant.controller.ts:21 | NOT_RUN |
| PATCH | 'tenant' | '' | apps/api/src/modules/platform/tenancy/tenant.controller.ts:29 | NOT_RUN |
| GET | 'audit-log' | '' | apps/api/src/modules/platform-services/audit/audit.controller.ts:22 | NOT_RUN |
| POST | 'files' | 'presign' | apps/api/src/modules/platform-services/files/files.controller.ts:41 | NOT_RUN |
| POST | 'files' | ':id/finalize' | apps/api/src/modules/platform-services/files/files.controller.ts:55 | NOT_RUN |
| GET | 'files' | '' | apps/api/src/modules/platform-services/files/files.controller.ts:73 | NOT_RUN |
| DELETE | 'files' | ':id' | apps/api/src/modules/platform-services/files/files.controller.ts:92 | NOT_RUN |
| GET | 'files' | ':id' | apps/api/src/modules/platform-services/files/files.controller.ts:108 | NOT_RUN |
| GET | 'files' | ':id/download' | apps/api/src/modules/platform-services/files/files.controller.ts:117 | NOT_RUN |
| GET | 'files' | ':id/content' | apps/api/src/modules/platform-services/files/files.controller.ts:134 | NOT_RUN |
| GET | 'jobs' | 'outbox' | apps/api/src/modules/platform-services/jobs/jobs.controller.ts:33 | NOT_RUN |
| GET | 'jobs' | 'health' | apps/api/src/modules/platform-services/jobs/jobs.controller.ts:48 | NOT_RUN |
| GET | 'notifications' | '' | apps/api/src/modules/platform-services/notifications/notifications.controller.ts:28 | NOT_RUN |
| GET | 'notifications' | ':id' | apps/api/src/modules/platform-services/notifications/notifications.controller.ts:46 | NOT_RUN |
| POST | 'notifications' | '' | apps/api/src/modules/platform-services/notifications/notifications.controller.ts:60 | NOT_RUN |
| POST | 'notifications' | ':id/read' | apps/api/src/modules/platform-services/notifications/notifications.controller.ts:79 | NOT_RUN |
| GET |  | 'portal-access' | apps/api/src/modules/portal/portal.controller.ts:22 | NOT_RUN |
| GET |  | 'parties/:id/portal-access' | apps/api/src/modules/portal/portal.controller.ts:26 | NOT_RUN |
| POST |  | 'parties/:id/portal-access' | apps/api/src/modules/portal/portal.controller.ts:30 | NOT_RUN |
| PATCH |  | 'portal-access/:id' | apps/api/src/modules/portal/portal.controller.ts:34 | NOT_RUN |
| DELETE |  | 'portal-access/:id' | apps/api/src/modules/portal/portal.controller.ts:38 | NOT_RUN |
| GET |  | 'portal/me' | apps/api/src/modules/portal/portal.controller.ts:43 | NOT_RUN |
| GET |  | 'portal/invoices' | apps/api/src/modules/portal/portal.controller.ts:47 | NOT_RUN |
| GET |  | 'portal/invoices/:id' | apps/api/src/modules/portal/portal.controller.ts:51 | NOT_RUN |
| GET |  | 'portal/invoices/:id/print' | apps/api/src/modules/portal/portal.controller.ts:55 | NOT_RUN |
| GET |  | 'portal/invoices/:id/payment-link' | apps/api/src/modules/portal/portal.controller.ts:59 | NOT_RUN |
| GET |  | 'portal/statement' | apps/api/src/modules/portal/portal.controller.ts:63 | NOT_RUN |
| GET |  | 'portal/payments' | apps/api/src/modules/portal/portal.controller.ts:67 | NOT_RUN |
| GET | 'pos' | 'categories' | apps/api/src/modules/pos/pos.controller.ts:19 | NOT_RUN |
| POST | 'pos' | 'categories' | apps/api/src/modules/pos/pos.controller.ts:22 | NOT_RUN |
| GET | 'pos' | 'tables' | apps/api/src/modules/pos/pos.controller.ts:27 | NOT_RUN |
| POST | 'pos' | 'tables' | apps/api/src/modules/pos/pos.controller.ts:30 | NOT_RUN |
| POST | 'pos' | 'tables/:id/open' | apps/api/src/modules/pos/pos.controller.ts:33 | NOT_RUN |
| POST | 'pos' | 'tables/:id/items' | apps/api/src/modules/pos/pos.controller.ts:39 | NOT_RUN |
| POST | 'pos' | 'events/:id/void' | apps/api/src/modules/pos/pos.controller.ts:45 | NOT_RUN |
| POST | 'pos' | 'tables/:id/send-to-invoice' | apps/api/src/modules/pos/pos.controller.ts:51 | NOT_RUN |
| POST | 'pos' | 'tables/:id/close' | apps/api/src/modules/pos/pos.controller.ts:63 | NOT_RUN |
| GET | 'pos' | 'offline-data' | apps/api/src/modules/pos/pos.controller.ts:75 | NOT_RUN |
| POST | 'pos' | 'offline-sync' | apps/api/src/modules/pos/pos.controller.ts:80 | NOT_RUN |
| POST | 'pos' | 'checkout' | apps/api/src/modules/pos/pos.controller.ts:93 | NOT_RUN |
| GET | 'pos' | 'settings' | apps/api/src/modules/pos/pos.controller.ts:103 | NOT_RUN |
| GET | 'pos' | 'holds' | apps/api/src/modules/pos/pos.controller.ts:107 | NOT_RUN |
| POST | 'pos' | 'holds' | apps/api/src/modules/pos/pos.controller.ts:111 | NOT_RUN |
| POST | 'pos' | 'holds/:id/recall' | apps/api/src/modules/pos/pos.controller.ts:115 | NOT_RUN |
| POST | 'pos' | 'holds/:id/release' | apps/api/src/modules/pos/pos.controller.ts:119 | NOT_RUN |
| POST | 'pos' | 'tables/:sourceId/merge/:targetId' | apps/api/src/modules/pos/pos.controller.ts:123 | NOT_RUN |
| POST | 'pos' | 'tables/:id/split' | apps/api/src/modules/pos/pos.controller.ts:129 | NOT_RUN |
| GET | 'contracting/returns' | '' | apps/api/src/modules/projects/contracting-returns.controller.ts:17 | NOT_RUN |
| GET | 'contracting/returns' | 'returnable' | apps/api/src/modules/projects/contracting-returns.controller.ts:22 | NOT_RUN |
| POST | 'contracting/returns' | '' | apps/api/src/modules/projects/contracting-returns.controller.ts:27 | NOT_RUN |
| GET | 'contracting/returns' | ':id' | apps/api/src/modules/projects/contracting-returns.controller.ts:32 | NOT_RUN |
| POST | 'contracting/returns' | ':id/post' | apps/api/src/modules/projects/contracting-returns.controller.ts:37 | NOT_RUN |
| POST | 'contracting/returns' | ':id/cancel' | apps/api/src/modules/projects/contracting-returns.controller.ts:42 | NOT_RUN |
| GET | 'contracting' | 'contracts' | apps/api/src/modules/projects/contracting.controller.ts:18 | NOT_RUN |
| POST | 'contracting' | 'contracts' | apps/api/src/modules/projects/contracting.controller.ts:23 | NOT_RUN |
| GET | 'contracting' | 'contracts/:id' | apps/api/src/modules/projects/contracting.controller.ts:28 | NOT_RUN |
| POST | 'contracting' | 'contracts/:id/activate' | apps/api/src/modules/projects/contracting.controller.ts:33 | NOT_RUN |
| POST | 'contracting' | 'contracts/:id/close' | apps/api/src/modules/projects/contracting.controller.ts:38 | NOT_RUN |
| POST | 'contracting' | 'contracts/:id/cancel' | apps/api/src/modules/projects/contracting.controller.ts:43 | NOT_RUN |
| GET | 'contracting' | 'payments' | apps/api/src/modules/projects/contracting.controller.ts:49 | NOT_RUN |
| POST | 'contracting' | 'contracts/:id/payments' | apps/api/src/modules/projects/contracting.controller.ts:54 | NOT_RUN |
| POST | 'contracting' | 'payments/:paymentId/approve' | apps/api/src/modules/projects/contracting.controller.ts:59 | NOT_RUN |
| POST | 'contracting' | 'payments/:paymentId/pay' | apps/api/src/modules/projects/contracting.controller.ts:64 | NOT_RUN |
| POST | 'contracting' | 'payments/:paymentId/cancel' | apps/api/src/modules/projects/contracting.controller.ts:69 | NOT_RUN |
| GET | 'contracting' | 'offers' | apps/api/src/modules/projects/contracting.controller.ts:75 | NOT_RUN |
| POST | 'contracting' | 'offers' | apps/api/src/modules/projects/contracting.controller.ts:80 | NOT_RUN |
| POST | 'contracting' | 'offers/:id/send' | apps/api/src/modules/projects/contracting.controller.ts:85 | NOT_RUN |
| POST | 'contracting' | 'offers/:id/accept' | apps/api/src/modules/projects/contracting.controller.ts:90 | NOT_RUN |
| POST | 'contracting' | 'offers/:id/reject' | apps/api/src/modules/projects/contracting.controller.ts:95 | NOT_RUN |
| POST | 'contracting' | 'offers/:id/convert' | apps/api/src/modules/projects/contracting.controller.ts:100 | NOT_RUN |
| GET | 'projects' | ':id/tasks' | apps/api/src/modules/projects/project-kanban.controller.ts:12 | NOT_RUN |
| POST | 'projects' | ':id/tasks' | apps/api/src/modules/projects/project-kanban.controller.ts:29 | NOT_RUN |
| GET | 'projects' | ':id/gantt' | apps/api/src/modules/projects/project-kanban.controller.ts:35 | NOT_RUN |
| GET | 'projects' | ':id/time' | apps/api/src/modules/projects/project-kanban.controller.ts:41 | NOT_RUN |
| GET | 'projects' | ':id/cost' | apps/api/src/modules/projects/project-kanban.controller.ts:47 | NOT_RUN |
| GET | 'projects' | 'tasks/:taskId' | apps/api/src/modules/projects/project-kanban.controller.ts:53 | NOT_RUN |
| PATCH | 'projects' | 'tasks/:taskId' | apps/api/src/modules/projects/project-kanban.controller.ts:59 | NOT_RUN |
| PUT | 'projects' | 'tasks/:taskId/move' | apps/api/src/modules/projects/project-kanban.controller.ts:65 | NOT_RUN |
| POST | 'projects' | 'tasks/:taskId/time-logs' | apps/api/src/modules/projects/project-kanban.controller.ts:71 | NOT_RUN |
| POST | 'projects' | 'tasks/:taskId/dependencies' | apps/api/src/modules/projects/project-kanban.controller.ts:78 | NOT_RUN |
| DELETE | 'projects' | 'dependencies/:dependencyId' | apps/api/src/modules/projects/project-kanban.controller.ts:84 | NOT_RUN |
| GET | 'projects' | '' | apps/api/src/modules/projects/projects.controller.ts:11 | NOT_RUN |
| POST | 'projects' | '' | apps/api/src/modules/projects/projects.controller.ts:12 | NOT_RUN |
| GET | 'projects' | ':id' | apps/api/src/modules/projects/projects.controller.ts:15 | NOT_RUN |
| GET | 'projects' | 'stage-templates' | apps/api/src/modules/projects/projects.controller.ts:19 | NOT_RUN |
| GET | 'projects' | ':id' | apps/api/src/modules/projects/projects.controller.ts:20 | NOT_RUN |
| POST | 'projects' | 'stage-templates' | apps/api/src/modules/projects/projects.controller.ts:21 | NOT_RUN |
| POST | 'projects' | ':id/stages' | apps/api/src/modules/projects/projects.controller.ts:22 | NOT_RUN |
| POST | 'projects' | 'stages/:stageId/move' | apps/api/src/modules/projects/projects.controller.ts:24 | NOT_RUN |
| PATCH | 'projects' | 'stages/:stageId' | apps/api/src/modules/projects/projects.controller.ts:26 | NOT_RUN |
| DELETE | 'projects' | 'stages/:stageId' | apps/api/src/modules/projects/projects.controller.ts:28 | NOT_RUN |
| POST | 'projects' | 'stages/:stageId/accredit' | apps/api/src/modules/projects/projects.controller.ts:29 | NOT_RUN |
| POST | 'projects' | ':id/boq' | apps/api/src/modules/projects/projects.controller.ts:30 | NOT_RUN |
| PATCH | 'projects' | 'boq/:termId' | apps/api/src/modules/projects/projects.controller.ts:32 | NOT_RUN |
| DELETE | 'projects' | 'boq/:termId' | apps/api/src/modules/projects/projects.controller.ts:33 | NOT_RUN |
| GET | 'projects' | ':id/progress-bills' | apps/api/src/modules/projects/projects.controller.ts:34 | NOT_RUN |
| POST | 'projects' | ':id/progress-bills' | apps/api/src/modules/projects/projects.controller.ts:35 | NOT_RUN |
| GET | 'projects' | 'progress-bills/:billId' | apps/api/src/modules/projects/projects.controller.ts:36 | NOT_RUN |
| POST | 'projects' | 'progress-bills/:billId/post' | apps/api/src/modules/projects/projects.controller.ts:37 | NOT_RUN |
| POST | 'projects' | 'progress-bills/:billId/release-retention' | apps/api/src/modules/projects/projects.controller.ts:38 | NOT_RUN |
| POST | 'projects' | 'requirements' | apps/api/src/modules/projects/projects.controller.ts:39 | NOT_RUN |
| GET | 'purchase-invoices' | 'purchases/adjustment-notes' | apps/api/src/modules/purchases/purchase-notes.controller.ts:19 | NOT_RUN |
| POST | 'purchase-invoices' | 'purchase-invoices/:id/adjustment-notes' | apps/api/src/modules/purchases/purchase-notes.controller.ts:25 | NOT_RUN |
| POST | 'purchase-invoices' | 'purchases/adjustment-notes/:id/post' | apps/api/src/modules/purchases/purchase-notes.controller.ts:31 | NOT_RUN |
| GET | 'purchase-invoices' | '' | apps/api/src/modules/purchases/purchases.controller.ts:12 | NOT_RUN |
| GET | 'purchase-invoices' | ':id' | apps/api/src/modules/purchases/purchases.controller.ts:13 | NOT_RUN |
| POST | 'purchase-invoices' | '' | apps/api/src/modules/purchases/purchases.controller.ts:14 | NOT_RUN |
| PATCH | 'purchase-invoices' | ':id' | apps/api/src/modules/purchases/purchases.controller.ts:15 | NOT_RUN |
| POST | 'purchase-invoices' | ':id/post' | apps/api/src/modules/purchases/purchases.controller.ts:16 | NOT_RUN |
| POST | 'purchase-invoices' | ':id/void' | apps/api/src/modules/purchases/purchases.controller.ts:17 | NOT_RUN |
| POST | 'purchase-invoices' | ':id/payments' | apps/api/src/modules/purchases/purchases.controller.ts:18 | NOT_RUN |
| GET | 'purchase-invoices' | ':id/landed-cost' | apps/api/src/modules/purchases/purchases.controller.ts:19 | NOT_RUN |
| POST | 'purchase-invoices' | 'preview-landed-cost' | apps/api/src/modules/purchases/purchases.controller.ts:20 | NOT_RUN |
| POST | 'purchase-invoices' | ':id/costs' | apps/api/src/modules/purchases/purchases.controller.ts:21 | NOT_RUN |
| DELETE | 'purchase-invoices' | ':id/costs/:costId' | apps/api/src/modules/purchases/purchases.controller.ts:22 | NOT_RUN |
| GET | 'platform/releases' | '' | apps/api/src/modules/releases/platform-releases.controller.ts:43 | NOT_RUN |
| POST | 'platform/releases' | '' | apps/api/src/modules/releases/platform-releases.controller.ts:51 | NOT_RUN |
| POST | 'platform/releases' | ':id/promote' | apps/api/src/modules/releases/platform-releases.controller.ts:67 | NOT_RUN |
| POST | 'platform/releases' | ':id/revoke' | apps/api/src/modules/releases/platform-releases.controller.ts:78 | NOT_RUN |
| GET | 'releases' | 'current' | apps/api/src/modules/releases/tenant-release.controller.ts:24 | NOT_RUN |
| GET | 'reports' | '' | apps/api/src/modules/reporting/reporting.controller.ts:21 | NOT_RUN |
| GET | 'reports' | 'layouts' | apps/api/src/modules/reporting/reporting.controller.ts:25 | NOT_RUN |
| POST | 'reports' | 'layouts' | apps/api/src/modules/reporting/reporting.controller.ts:26 | NOT_RUN |
| PATCH | 'reports' | 'layouts/:id' | apps/api/src/modules/reporting/reporting.controller.ts:27 | NOT_RUN |
| DELETE | 'reports' | 'layouts/:id' | apps/api/src/modules/reporting/reporting.controller.ts:28 | NOT_RUN |
| GET | 'reports' | 'print-settings' | apps/api/src/modules/reporting/reporting.controller.ts:33 | NOT_RUN |
| PUT | 'reports' | 'print-settings/:scope' | apps/api/src/modules/reporting/reporting.controller.ts:34 | NOT_RUN |
| DELETE | 'reports' | 'print-settings/:scope' | apps/api/src/modules/reporting/reporting.controller.ts:35 | NOT_RUN |
| GET | 'reports' | 'print-settings/:scope' | apps/api/src/modules/reporting/reporting.controller.ts:36 | NOT_RUN |
| GET | 'reports' | 'printer-links' | apps/api/src/modules/reporting/reporting.controller.ts:39 | NOT_RUN |
| POST | 'reports' | 'printer-links' | apps/api/src/modules/reporting/reporting.controller.ts:40 | NOT_RUN |
| PUT | 'reports' | 'printer-links/:id' | apps/api/src/modules/reporting/reporting.controller.ts:41 | NOT_RUN |
| DELETE | 'reports' | 'printer-links/:id' | apps/api/src/modules/reporting/reporting.controller.ts:42 | NOT_RUN |
| GET | 'reports' | 'print/invoices/:id' | apps/api/src/modules/reporting/reporting.controller.ts:46 | NOT_RUN |
| GET | 'reports' | 'print/purchase-invoices/:id' | apps/api/src/modules/reporting/reporting.controller.ts:47 | NOT_RUN |
| GET | 'reports' | 'print/vouchers/:id' | apps/api/src/modules/reporting/reporting.controller.ts:48 | NOT_RUN |
| GET | 'reports' | 'print/journal-entries/:id' | apps/api/src/modules/reporting/reporting.controller.ts:49 | NOT_RUN |
| GET | 'reports' | 'print/shifts/:id' | apps/api/src/modules/reporting/reporting.controller.ts:50 | NOT_RUN |
| GET | 'reports' | 'print/:key' | apps/api/src/modules/reporting/reporting.controller.ts:53 | NOT_RUN |
| GET | 'reports' | ':key' | apps/api/src/modules/reporting/reporting.controller.ts:57 | NOT_RUN |
| POST | 'reports' | ':key/export' | apps/api/src/modules/reporting/reporting.controller.ts:58 | NOT_RUN |
| GET |  | 'sales/invoices' | apps/api/src/modules/sales/sales.controller.ts:26 | NOT_RUN |
| GET |  | 'sales/invoices/:id' | apps/api/src/modules/sales/sales.controller.ts:27 | NOT_RUN |
| GET |  | 'sales/invoices/:id/print-data' | apps/api/src/modules/sales/sales.controller.ts:28 | NOT_RUN |
| POST |  | 'sales/invoices' | apps/api/src/modules/sales/sales.controller.ts:29 | NOT_RUN |
| PATCH |  | 'sales/invoices/:id' | apps/api/src/modules/sales/sales.controller.ts:30 | NOT_RUN |
| POST |  | 'sales/invoices/:id/post' | apps/api/src/modules/sales/sales.controller.ts:31 | NOT_RUN |
| POST |  | 'sales/invoices/:id/void' | apps/api/src/modules/sales/sales.controller.ts:32 | NOT_RUN |
| POST |  | 'sales/invoices/:id/payments' | apps/api/src/modules/sales/sales.controller.ts:33 | NOT_RUN |
| POST |  | 'sales/invoices/:id/return' | apps/api/src/modules/sales/sales.controller.ts:34 | NOT_RUN |
| POST |  | 'sales/invoices/:id/adjustment-notes' | apps/api/src/modules/sales/sales.controller.ts:35 | NOT_RUN |
| GET |  | 'sales/adjustment-notes' | apps/api/src/modules/sales/sales.controller.ts:36 | NOT_RUN |
| POST |  | 'sales/adjustment-notes/:id/post' | apps/api/src/modules/sales/sales.controller.ts:37 | NOT_RUN |
| POST |  | 'sales/offers/:id/evaluate' | apps/api/src/modules/sales/sales.controller.ts:38 | NOT_RUN |
| GET |  | 'sales/quotations' | apps/api/src/modules/sales/sales.controller.ts:39 | NOT_RUN |
| POST |  | 'sales/quotations' | apps/api/src/modules/sales/sales.controller.ts:40 | NOT_RUN |
| POST |  | 'sales/quotations/:id/convert' | apps/api/src/modules/sales/sales.controller.ts:41 | NOT_RUN |
| GET |  | 'sales/offers' | apps/api/src/modules/sales/sales.controller.ts:42 | NOT_RUN |
| POST |  | 'sales/offers' | apps/api/src/modules/sales/sales.controller.ts:43 | NOT_RUN |
| GET |  | 'sales/salesmen' | apps/api/src/modules/sales/sales.controller.ts:44 | NOT_RUN |
| GET |  | 'sales/cash-customers' | apps/api/src/modules/sales/sales.controller.ts:46 | NOT_RUN |
| POST |  | 'sales/salesmen' | apps/api/src/modules/sales/sales.controller.ts:57 | NOT_RUN |
| PATCH |  | 'sales/salesmen/:id' | apps/api/src/modules/sales/sales.controller.ts:58 | NOT_RUN |
| DELETE |  | 'sales/salesmen/:id' | apps/api/src/modules/sales/sales.controller.ts:59 | NOT_RUN |
| GET |  | 'sales/salesmen/commissions' | apps/api/src/modules/sales/sales.controller.ts:66 | NOT_RUN |
| GET | 'platform/analytics' | 'site' | apps/api/src/modules/site-analytics/platform-site-analytics.controller.ts:26 | NOT_RUN |
| POST | 'public' | 'events' | apps/api/src/modules/site-analytics/public-events.controller.ts:40 | NOT_RUN |
| GET | 'public' | 'status' | apps/api/src/modules/status/public-status.controller.ts:25 | NOT_RUN |
| POST |  | 'supplier-portal/users' | apps/api/src/modules/supplier-portal/supplier-portal.controller.ts:23 | NOT_RUN |
| GET |  | 'supplier-portal/users' | apps/api/src/modules/supplier-portal/supplier-portal.controller.ts:35 | NOT_RUN |
| POST |  | 'supplier-portal/rfqs' | apps/api/src/modules/supplier-portal/supplier-portal.controller.ts:41 | NOT_RUN |
| GET |  | 'supplier-portal/rfqs' | apps/api/src/modules/supplier-portal/supplier-portal.controller.ts:53 | NOT_RUN |
| GET |  | 'supplier-portal/uploads' | apps/api/src/modules/supplier-portal/supplier-portal.controller.ts:59 | NOT_RUN |
| POST |  | 'supplier-portal/auth/login' | apps/api/src/modules/supplier-portal/supplier-portal.controller.ts:66 | NOT_RUN |
| GET |  | 'supplier-portal/invoices' | apps/api/src/modules/supplier-portal/supplier-portal.controller.ts:80 | NOT_RUN |
| GET |  | 'supplier-portal/invoices/:id' | apps/api/src/modules/supplier-portal/supplier-portal.controller.ts:86 | NOT_RUN |
| GET |  | 'supplier-portal/payments' | apps/api/src/modules/supplier-portal/supplier-portal.controller.ts:92 | NOT_RUN |
| GET |  | 'supplier-portal/quotations' | apps/api/src/modules/supplier-portal/supplier-portal.controller.ts:98 | NOT_RUN |
| POST |  | 'supplier-portal/quotations/:id/respond' | apps/api/src/modules/supplier-portal/supplier-portal.controller.ts:104 | NOT_RUN |
| POST |  | 'supplier-portal/invoices' | apps/api/src/modules/supplier-portal/supplier-portal.controller.ts:120 | NOT_RUN |
| POST |  | 'esign/requests' | apps/api/src/modules/supplier-portal/supplier-portal.controller.ts:139 | NOT_RUN |
| GET |  | 'esign/requests' | apps/api/src/modules/supplier-portal/supplier-portal.controller.ts:166 | NOT_RUN |
| GET |  | 'esign/:token' | apps/api/src/modules/supplier-portal/supplier-portal.controller.ts:173 | NOT_RUN |
| POST |  | 'esign/:token/sign' | apps/api/src/modules/supplier-portal/supplier-portal.controller.ts:180 | NOT_RUN |
| GET |  | 'esign/:token/pdf' | apps/api/src/modules/supplier-portal/supplier-portal.controller.ts:198 | NOT_RUN |
| GET | 'platform' | 'tickets' | apps/api/src/modules/support/support.controller.ts:56 | NOT_RUN |
| GET | 'platform' | 'tickets/:id' | apps/api/src/modules/support/support.controller.ts:72 | NOT_RUN |
| POST | 'platform' | 'tickets' | apps/api/src/modules/support/support.controller.ts:81 | NOT_RUN |
| PATCH | 'platform' | 'tickets/:id' | apps/api/src/modules/support/support.controller.ts:94 | NOT_RUN |
| POST | 'platform' | 'tickets/:id/reply' | apps/api/src/modules/support/support.controller.ts:106 | NOT_RUN |
| GET | 'platform' | 'tenants/:tenantId/tickets' | apps/api/src/modules/support/support.controller.ts:118 | NOT_RUN |
| POST | 'platform' | 'impersonate' | apps/api/src/modules/support/support.controller.ts:128 | NOT_RUN |
| GET | 'platform' | 'impersonate/sessions' | apps/api/src/modules/support/support.controller.ts:141 | NOT_RUN |
| DELETE | 'platform' | 'impersonate/:id' | apps/api/src/modules/support/support.controller.ts:149 | NOT_RUN |
| GET | 'support/tickets' | '' | apps/api/src/modules/support/tenant-support.controller.ts:18 | NOT_RUN |
| GET | 'support/tickets' | ':id' | apps/api/src/modules/support/tenant-support.controller.ts:24 | NOT_RUN |
| POST | 'support/tickets' | '' | apps/api/src/modules/support/tenant-support.controller.ts:30 | NOT_RUN |
| POST | 'support/tickets' | ':id/reply' | apps/api/src/modules/support/tenant-support.controller.ts:36 | NOT_RUN |
| GET | 'tailoring' | 'parties/:partyId/measurements' | apps/api/src/modules/tailoring/tailoring.controller.ts:67 | NOT_RUN |
| GET | 'tailoring' | 'parties/:partyId/measurements/latest' | apps/api/src/modules/tailoring/tailoring.controller.ts:73 | NOT_RUN |
| GET | 'tailoring' | 'measurements' | apps/api/src/modules/tailoring/tailoring.controller.ts:83 | NOT_RUN |
| GET | 'tailoring' | 'measurements/:id' | apps/api/src/modules/tailoring/tailoring.controller.ts:99 | NOT_RUN |
| POST | 'tailoring' | 'measurements' | apps/api/src/modules/tailoring/tailoring.controller.ts:105 | NOT_RUN |
| PATCH | 'tailoring' | 'measurements/:id' | apps/api/src/modules/tailoring/tailoring.controller.ts:111 | NOT_RUN |
| DELETE | 'tailoring' | 'measurements/:id' | apps/api/src/modules/tailoring/tailoring.controller.ts:117 | NOT_RUN |
| GET | 'tailoring' | 'measurement-attributes' | apps/api/src/modules/tailoring/tailoring.controller.ts:126 | NOT_RUN |
| POST | 'tailoring' | 'measurement-attributes' | apps/api/src/modules/tailoring/tailoring.controller.ts:132 | NOT_RUN |
| PATCH | 'tailoring' | 'measurement-attributes/:id' | apps/api/src/modules/tailoring/tailoring.controller.ts:138 | NOT_RUN |
| POST | 'tailoring' | 'measurement-attributes/:id/deactivate' | apps/api/src/modules/tailoring/tailoring.controller.ts:145 | NOT_RUN |
| POST | 'tailoring' | 'measurement-attributes/:id/move' | apps/api/src/modules/tailoring/tailoring.controller.ts:152 | NOT_RUN |
| GET | 'tailoring' | 'order-statuses' | apps/api/src/modules/tailoring/tailoring.controller.ts:161 | NOT_RUN |
| GET | 'tailoring' | 'types' | apps/api/src/modules/tailoring/tailoring.controller.ts:169 | NOT_RUN |
| POST | 'tailoring' | 'types' | apps/api/src/modules/tailoring/tailoring.controller.ts:175 | NOT_RUN |
| PATCH | 'tailoring' | 'types/:id' | apps/api/src/modules/tailoring/tailoring.controller.ts:181 | NOT_RUN |
| DELETE | 'tailoring' | 'types/:id' | apps/api/src/modules/tailoring/tailoring.controller.ts:187 | NOT_RUN |
| GET | 'tailoring' | 'option-categories' | apps/api/src/modules/tailoring/tailoring.controller.ts:195 | NOT_RUN |
| POST | 'tailoring' | 'option-categories' | apps/api/src/modules/tailoring/tailoring.controller.ts:201 | NOT_RUN |
| PATCH | 'tailoring' | 'option-categories/:id' | apps/api/src/modules/tailoring/tailoring.controller.ts:207 | NOT_RUN |
| DELETE | 'tailoring' | 'option-categories/:id' | apps/api/src/modules/tailoring/tailoring.controller.ts:216 | NOT_RUN |
| POST | 'tailoring' | 'option-values' | apps/api/src/modules/tailoring/tailoring.controller.ts:222 | NOT_RUN |
| PATCH | 'tailoring' | 'option-values/:id' | apps/api/src/modules/tailoring/tailoring.controller.ts:228 | NOT_RUN |
| DELETE | 'tailoring' | 'option-values/:id' | apps/api/src/modules/tailoring/tailoring.controller.ts:237 | NOT_RUN |
| POST | 'tailoring' | 'option-values/:id/default' | apps/api/src/modules/tailoring/tailoring.controller.ts:244 | NOT_RUN |
| GET | 'tailoring' | 'orders' | apps/api/src/modules/tailoring/tailoring.controller.ts:252 | NOT_RUN |
| GET | 'tailoring' | 'orders/:id' | apps/api/src/modules/tailoring/tailoring.controller.ts:277 | NOT_RUN |
| POST | 'tailoring' | 'orders' | apps/api/src/modules/tailoring/tailoring.controller.ts:283 | NOT_RUN |
| PATCH | 'tailoring' | 'orders/:id' | apps/api/src/modules/tailoring/tailoring.controller.ts:289 | NOT_RUN |
| POST | 'tailoring' | 'orders/:id/status' | apps/api/src/modules/tailoring/tailoring.controller.ts:296 | NOT_RUN |
| DELETE | 'tailoring' | 'orders/:id' | apps/api/src/modules/tailoring/tailoring.controller.ts:302 | NOT_RUN |
| GET | 'tailoring' | 'garment-types' | apps/api/src/modules/tailoring/tailoring.controller.ts:311 | NOT_RUN |
| GET | 'tailoring' | 'measurement-fields' | apps/api/src/modules/tailoring/tailoring.controller.ts:323 | NOT_RUN |
| GET | 'tailoring' | 'invoices' | apps/api/src/modules/tailoring/tailoring.controller.ts:330 | NOT_RUN |
| GET | 'tailoring' | 'invoices/:id' | apps/api/src/modules/tailoring/tailoring.controller.ts:354 | NOT_RUN |
| POST | 'tailoring' | 'invoices' | apps/api/src/modules/tailoring/tailoring.controller.ts:361 | NOT_RUN |
| PATCH | 'tailoring' | 'invoices/:id' | apps/api/src/modules/tailoring/tailoring.controller.ts:367 | NOT_RUN |
| POST | 'tailoring' | 'invoices/:id/status' | apps/api/src/modules/tailoring/tailoring.controller.ts:374 | NOT_RUN |
| POST | 'tailoring' | 'invoices/:id/payments' | apps/api/src/modules/tailoring/tailoring.controller.ts:381 | NOT_RUN |
| DELETE | 'tailoring' | 'invoices/:id' | apps/api/src/modules/tailoring/tailoring.controller.ts:387 | NOT_RUN |
| GET | 'treasury' | 'bank-accounts' | apps/api/src/modules/treasury/bank-feeds.controller.ts:25 | NOT_RUN |
| GET | 'treasury' | 'bank-accounts/:id' | apps/api/src/modules/treasury/bank-feeds.controller.ts:31 | NOT_RUN |
| POST | 'treasury' | 'bank-accounts' | apps/api/src/modules/treasury/bank-feeds.controller.ts:37 | NOT_RUN |
| PATCH | 'treasury' | 'bank-accounts/:id' | apps/api/src/modules/treasury/bank-feeds.controller.ts:43 | NOT_RUN |
| DELETE | 'treasury' | 'bank-accounts/:id' | apps/api/src/modules/treasury/bank-feeds.controller.ts:49 | NOT_RUN |
| GET | 'treasury' | 'bank-statements' | apps/api/src/modules/treasury/bank-feeds.controller.ts:55 | NOT_RUN |
| DELETE | 'treasury' | 'bank-statements/:id' | apps/api/src/modules/treasury/bank-feeds.controller.ts:61 | NOT_RUN |
| GET | 'treasury' | 'bank-statements/:id' | apps/api/src/modules/treasury/bank-feeds.controller.ts:67 | NOT_RUN |
| POST | 'treasury' | 'bank-statements/import' | apps/api/src/modules/treasury/bank-feeds.controller.ts:73 | NOT_RUN |
| GET | 'treasury' | 'bank-statements/:id/lines' | apps/api/src/modules/treasury/bank-feeds.controller.ts:79 | NOT_RUN |
| POST | 'treasury' | 'bank-statements/:id/match' | apps/api/src/modules/treasury/bank-feeds.controller.ts:85 | NOT_RUN |
| POST | 'treasury' | 'bank-statements/:id/auto-match' | apps/api/src/modules/treasury/bank-feeds.controller.ts:91 | NOT_RUN |
| POST | 'treasury' | 'bank-statements/:id/lines/:lineId/ignore' | apps/api/src/modules/treasury/bank-feeds.controller.ts:97 | NOT_RUN |
| DELETE | 'treasury' | 'bank-statements/:id/lines/:lineId/match' | apps/api/src/modules/treasury/bank-feeds.controller.ts:103 | NOT_RUN |
| GET | 'treasury' | 'bank-reconciliation' | apps/api/src/modules/treasury/bank-feeds.controller.ts:109 | NOT_RUN |
| GET | 'treasury' | 'bank-reconciliation-rules' | apps/api/src/modules/treasury/bank-feeds.controller.ts:125 | NOT_RUN |
| POST | 'treasury' | 'bank-reconciliation-rules' | apps/api/src/modules/treasury/bank-feeds.controller.ts:131 | NOT_RUN |
| PATCH | 'treasury' | 'bank-reconciliation-rules/:id' | apps/api/src/modules/treasury/bank-feeds.controller.ts:137 | NOT_RUN |
| DELETE | 'treasury' | 'bank-reconciliation-rules/:id' | apps/api/src/modules/treasury/bank-feeds.controller.ts:143 | NOT_RUN |
| GET |  | 'vouchers' | apps/api/src/modules/treasury/treasury.controller.ts:11 | NOT_RUN |
| GET |  | 'vouchers/:id' | apps/api/src/modules/treasury/treasury.controller.ts:16 | NOT_RUN |
| POST |  | 'vouchers' | apps/api/src/modules/treasury/treasury.controller.ts:17 | NOT_RUN |
| PATCH |  | 'vouchers/:id' | apps/api/src/modules/treasury/treasury.controller.ts:18 | NOT_RUN |
| POST |  | 'vouchers/:id/post' | apps/api/src/modules/treasury/treasury.controller.ts:19 | NOT_RUN |
| POST |  | 'vouchers/:id/void' | apps/api/src/modules/treasury/treasury.controller.ts:20 | NOT_RUN |
| POST |  | 'vouchers/:id/cheque' | apps/api/src/modules/treasury/treasury.controller.ts:21 | NOT_RUN |
| GET |  | 'cash-transfers' | apps/api/src/modules/treasury/treasury.controller.ts:22 | NOT_RUN |
| POST |  | 'cash-transfers' | apps/api/src/modules/treasury/treasury.controller.ts:32 | NOT_RUN |
| POST |  | 'cash-transfers/:id/send' | apps/api/src/modules/treasury/treasury.controller.ts:33 | NOT_RUN |
| POST |  | 'cash-transfers/:id/receive' | apps/api/src/modules/treasury/treasury.controller.ts:34 | NOT_RUN |
| POST |  | 'cash-transfers/:id/cancel' | apps/api/src/modules/treasury/treasury.controller.ts:35 | NOT_RUN |
| GET |  | 'expense-types' | apps/api/src/modules/treasury/treasury.controller.ts:36 | NOT_RUN |
| POST |  | 'expense-types' | apps/api/src/modules/treasury/treasury.controller.ts:37 | NOT_RUN |
| PATCH |  | 'expense-types/:id' | apps/api/src/modules/treasury/treasury.controller.ts:38 | NOT_RUN |
| DELETE |  | 'expense-types/:id' | apps/api/src/modules/treasury/treasury.controller.ts:39 | NOT_RUN |
| POST |  | 'shift-closes/open' | apps/api/src/modules/treasury/treasury.controller.ts:40 | NOT_RUN |
| GET |  | 'shift-closes/current' | apps/api/src/modules/treasury/treasury.controller.ts:41 | NOT_RUN |
| GET |  | 'shift-closes' | apps/api/src/modules/treasury/treasury.controller.ts:42 | NOT_RUN |
| POST |  | 'shift-closes/:id/close' | apps/api/src/modules/treasury/treasury.controller.ts:43 | NOT_RUN |
| GET |  | 'shift-closes/day-closes' | apps/api/src/modules/treasury/treasury.controller.ts:52 | NOT_RUN |
| GET |  | 'shift-closes/:id' | apps/api/src/modules/treasury/treasury.controller.ts:65 | NOT_RUN |
| POST |  | 'shift-closes/:id/post' | apps/api/src/modules/treasury/treasury.controller.ts:76 | NOT_RUN |
| GET |  | 'shift-closes/:id/print-data' | apps/api/src/modules/treasury/treasury.controller.ts:82 | NOT_RUN |
| GET |  | 'cash-locations/:id/movements' | apps/api/src/modules/treasury/treasury.controller.ts:88 | NOT_RUN |
| GET |  | 'cash-locations/:id/balance' | apps/api/src/modules/treasury/treasury.controller.ts:106 | NOT_RUN |
| POST |  | 'cash-locations/:id/recalc-balance' | apps/api/src/modules/treasury/treasury.controller.ts:107 | NOT_RUN |
| GET | 'usage' | '' | apps/api/src/modules/usage/usage.controller.ts:27 | NOT_RUN |
| GET | 'van-sales' | 'dashboard' | apps/api/src/modules/van-sales/van-sales.controller.ts:26 | NOT_RUN |
| GET | 'van-sales' | 'reports' | apps/api/src/modules/van-sales/van-sales.controller.ts:33 | NOT_RUN |
| GET | 'van-sales' | 'me' | apps/api/src/modules/van-sales/van-sales.controller.ts:59 | NOT_RUN |
| GET | 'van-sales' | 'salesmen' | apps/api/src/modules/van-sales/van-sales.controller.ts:71 | NOT_RUN |
| POST | 'van-sales' | 'salesmen/:id/account' | apps/api/src/modules/van-sales/van-sales.controller.ts:82 | NOT_RUN |
| POST | 'van-sales' | 'production-batches' | apps/api/src/modules/van-sales/van-sales.controller.ts:98 | NOT_RUN |
| POST | 'van-sales' | 'customer-prices' | apps/api/src/modules/van-sales/van-sales.controller.ts:126 | NOT_RUN |
| POST | 'van-sales' | 'load-orders' | apps/api/src/modules/van-sales/van-sales.controller.ts:152 | NOT_RUN |
| POST | 'van-sales' | 'load-orders/:id/confirm-receipt' | apps/api/src/modules/van-sales/van-sales.controller.ts:180 | NOT_RUN |
| POST | 'van-sales' | 'documents/:id/returns' | apps/api/src/modules/van-sales/van-sales.controller.ts:199 | NOT_RUN |
| GET | 'van-sales' | 'documents/:id/print-view' | apps/api/src/modules/van-sales/van-sales.controller.ts:230 | NOT_RUN |
| POST | 'van-sales' | 'documents' | apps/api/src/modules/van-sales/van-sales.controller.ts:244 | NOT_RUN |
| GET | 'van-sales' | 'policy' | apps/api/src/modules/van-sales/van-sales.controller.ts:296 | NOT_RUN |
| PUT | 'van-sales' | 'policy' | apps/api/src/modules/van-sales/van-sales.controller.ts:310 | NOT_RUN |
| POST | 'van-sales' | 'load-orders/:id/submit-closing' | apps/api/src/modules/van-sales/van-sales.controller.ts:325 | NOT_RUN |
| POST | 'van-sales' | 'load-orders/:id/approve-closing' | apps/api/src/modules/van-sales/van-sales.controller.ts:357 | NOT_RUN |
| POST | 'van-sales' | 'load-orders/:id/settle-stock' | apps/api/src/modules/van-sales/van-sales.controller.ts:394 | NOT_RUN |
| POST | 'van-sales' | 'load-orders/:id/reject-receipt' | apps/api/src/modules/van-sales/van-sales.controller.ts:408 | NOT_RUN |
| POST | 'van-sales' | 'load-orders/:id/close-transit-difference' | apps/api/src/modules/van-sales/van-sales.controller.ts:421 | NOT_RUN |
| POST | 'van-sales' | 'load-orders/:id/cancel' | apps/api/src/modules/van-sales/van-sales.controller.ts:432 | NOT_RUN |
| POST | 'van-sales' | 'load-orders/:id/settle' | apps/api/src/modules/van-sales/van-sales.controller.ts:439 | NOT_RUN |
| POST | 'van-sales' | 'collections' | apps/api/src/modules/van-sales/van-sales.controller.ts:457 | NOT_RUN |
| POST | 'van-sales' | 'legacy-reconciliation' | apps/api/src/modules/van-sales/van-sales.controller.ts:481 | NOT_RUN |
| POST | 'public' | 'verify' | apps/api/src/modules/verify/public-verify.controller.ts:34 | NOT_RUN |
| GET | 'platform/reports/weekly' | '' | apps/api/src/modules/weekly-report/platform-reports.controller.ts:29 | NOT_RUN |
| POST | 'platform/reports/weekly' | 'run' | apps/api/src/modules/weekly-report/platform-reports.controller.ts:37 | NOT_RUN |
| GET | 'metrics' | '' | apps/api/src/ops/metrics.controller.ts:11 | NOT_RUN |

## تحديث الاختبار الفعلي
حالاتNOT_RUN في هذا الاستخراج تعني أن المسار الخام لم يربط آلياً بنتيجة تشغيل؛ ليست حكماً بفشل المسارات. نُفذت طلبات الواجهات الحقيقية للتصنيفات والوحدات والأطراف والأصناف ووحداتها والشراء/البيع والقيود/الأرصدة/التقارير وGETالمرفوضة لصلاحياتCashier. تفاصيلURLوالطريقةوالحالةوالحمولةالراجعة فيevidence/01-master-data/*response.json و02-purchases و03-sales و07-reports و00-discovery/RBAC-denials.json. لا ترقَّ كلأفعالcontroller إلىPASS لأنGETواحداً نجح. POSTالتصدير قراءة مالية وليست ترحيلاً؛ لا مزود خارجي استدعي.

## الجولة الثالثة — طلبات قرائية وتقنية منفصلة
41 زيارةRO3 قرائية، دون استدعاء أفعال الحفظ/الاعتماد؛ GET بطاقة الصنف وخمسة حساباتgeneral-ledger تحتRPT-013 وRPT-14..18 موثقة بالكامل في `07-reports/ledger-itemcard-round3-api.json`. لا يعني ذلك نجاح كل أفعالcontrollers المعنية. متصفح هذه الجولة يحظر غيرGET/HEAD/OPTIONS عداlogin/refresh؛ لم يسجل حظراً لكتابة أعمال في الجولات المكتملة. fixtures حزمةالقبول API استخدمت قاعدةPostgreSQL مؤقتة مستقلة، نتائجها2PASS/6FAIL ولا تعد عملياتمتصفح. لا تشغيل خارجي.

## الجولة الرابعة — واجهتان وسياق مندوب مستقل
شغلتstaff وباكري علىقاعدةaudit_readonly_r4 الجديدة،واكتملت95زيارةقرائيةدونحفظأعمال. سجلread-only-round4-results.json يربطالمسارالمطلوبوالفعليوالأخطاءالملتَقطة؛ ليسحصرنجاحلكلcontrollers. `round4-rep-read-scope.json`: مستخدممندوبمستقلبصلاحياتالبذرةالطبيعية؛GET /van-sales/me=200/isRep=true،ومجاميعdashboard/salesmen/reports=403/VAN_SALES_COMPANY_SCOPE_REQUIRED. لااختبارPOSTماليأوكلعزلrowsبالمندوب. اختبارالعزل/التكرار/التزامنالـ34لهfixturesعلىPGمؤقتآخر،وليسطلباتالمتصفحالمصورة.

## الجولة الخامسة — البوابة والمنصة والموقع
شُغّلت الواجهات الثلاث على نفس الـAPI. نقاط البوابة المؤكدة حياً: `/portal/me` و`/portal/invoices` و`/portal/statement` و`/portal/payments` (200 لصاحب الحساب)، و404 لفاتورة لا تخصه. مسارات المنصة `/platform/overview` و`/platform/tenants` (200 لمشغل البذرة) و403 لمالكTenant وللبوابة. رفض `portal memberships cannot access staff endpoints` مثبت على`/sales/invoices` و`/parties`. لم تُنفذ أي كتابة مالية أو إدارية عبر أيٍّ منها؛ منح البوابة وتغيير كلمة المرور فقط. تفاصيل الاستدعاءات في round5-access-boundaries.json، وتغطية الاختبارات الآلية في round5-portal-platform-tests.txt (123PASS).

## الجولة السادسة — سلوك نقاط الطرف عند مستند غائب
تحقق بصري فعلي (لا استدعاء كتابة): صفحات التفاصيل تستدعي`GET` للمستند ثم تعرض رسالة عربية عند404 — قيد يومية («العنصر المطلوب غير موجود»)، عرض سعر («فاتورة المبيعات غير موجودة» لأن العروض تُخزَّن في`sales_invoices`)، مشروع/كانبان، طباعة (`/reports/print/{path}/{id}`)، وتذاكر المنصة. البوابة تعرض «الفاتورة غير متاحة — المستند غير موجود أو لا يخص حسابك» بلا كشف وجود. الموقع العام يعيد HTTP404 حقيقية للمحتوى غير المنشور.

**نقطة تحتاج قراراً (OBS-006):** `GET /api/v1/einvoice/settings` تُنشئ صف إعدادات افتراضياً عند غيابه (`settingsFor`). أي أنها ليست قراءة محضة. الاختبار القائم يفترضها كذلك، فالتغيير يحتاج تحديث عقد لا إصلاحاً عابراً.
