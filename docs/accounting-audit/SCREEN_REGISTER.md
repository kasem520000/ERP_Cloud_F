# Screen Register & Testing Matrix

| Screen ID | Route / Path | Module | Tested Status | Pre-Save Evidence | Post-Save Evidence | Notes / Audit Observation |
|-----------|--------------|--------|---------------|-------------------|--------------------|---------------------------|
| SCR-001 | `/` | General | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-002 | `/accounting/accounts` | Accounting | Fully Tested | Yes (`evidence/01-master-data/MDR-006-coa.png`) | Yes | Verified on live server |
| SCR-003 | `/accounting/accounts/tree` | Accounting | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-004 | `/accounting/cash-locations` | Accounting | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-005 | `/accounting/cost-center-statement` | Accounting | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-006 | `/accounting/cost-centers` | Accounting | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-007 | `/accounting/expenses` | Accounting | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-008 | `/accounting/income-statement` | Accounting | Fully Tested | Yes (`evidence/07-reports/RPT-003-income-statement.png`) | Yes | Verified on live server |
| SCR-009 | `/accounting/journal-entries` | Accounting | Fully Tested | Yes (`evidence/06-journals/JRN-001-journals.png`) | Yes | Verified on live server |
| SCR-010 | `/accounting/journal-entries/[id]` | Accounting | Parameterized Route | N/A (Requires Dynamic ID) | N/A | Tested via API contract / parent view |
| SCR-011 | `/accounting/journal-entries/new` | Accounting | Fully Tested | Yes (`evidence/06-journals/JRN-002-new-before-save.png`) | Yes | Verified on live server |
| SCR-012 | `/accounting/ledger` | Accounting | Fully Tested | Yes (`evidence/08-reconciliation/REC-001-ledger.png`) | Yes | Verified on live server |
| SCR-013 | `/accounting/payment-methods` | Accounting | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-014 | `/accounting/periods` | Accounting | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-015 | `/accounting/trial-balance` | Accounting | Fully Tested | Yes (`evidence/07-reports/RPT-002-trial-balance.png`) | Yes | Verified on live server |
| SCR-016 | `/approvals/history` | General | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-017 | `/approvals/inbox` | General | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-018 | `/assistant` | General | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-019 | `/comments/mentions` | General | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-020 | `/crm/activities` | CRM | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-021 | `/crm/deals/[id]` | CRM | Parameterized Route | N/A (Requires Dynamic ID) | N/A | Tested via API contract / parent view |
| SCR-022 | `/crm/forecast` | CRM | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-023 | `/crm/pipelines` | CRM | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-024 | `/dashboards` | General | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-025 | `/dashboards/[id]` | General | Parameterized Route | N/A (Requires Dynamic ID) | N/A | Tested via API contract / parent view |
| SCR-026 | `/design` | General | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-027 | `/esign/[token]` | General | Parameterized Route | N/A (Requires Dynamic ID) | N/A | Tested via API contract / parent view |
| SCR-028 | `/hrm/adjustments` | HRM | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-029 | `/hrm/compliance` | HRM | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-030 | `/hrm/departments` | HRM | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-031 | `/hrm/employee-movements` | HRM | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-032 | `/hrm/employee-statement` | HRM | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-033 | `/hrm/employees` | HRM | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-034 | `/hrm/geofences` | HRM | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-035 | `/hrm/jobs` | HRM | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-036 | `/hrm/leaves` | HRM | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-037 | `/hrm/payroll` | HRM | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-038 | `/hrm/payroll/[id]` | HRM | Parameterized Route | N/A (Requires Dynamic ID) | N/A | Tested via API contract / parent view |
| SCR-039 | `/hrm/payroll/[id]/wps` | HRM | Parameterized Route | N/A (Requires Dynamic ID) | N/A | Tested via API contract / parent view |
| SCR-040 | `/hrm/salary-payments` | HRM | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-041 | `/hrm/salary-report` | HRM | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-042 | `/integrations/salla/orders` | General | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-043 | `/integrations/salla/products` | General | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-044 | `/integrations/salla/settings` | General | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-045 | `/integrations/salla/warehouses` | General | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-046 | `/inventory/adjustments` | Inventory | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-047 | `/inventory/barcodes` | Inventory | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-048 | `/inventory/below-minimum` | Inventory | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-049 | `/inventory/bin-balances` | Inventory | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-050 | `/inventory/bins` | Inventory | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-051 | `/inventory/categories` | Inventory | Fully Tested | Yes (`evidence/01-master-data/MDR-002-categories.png`) | Yes | Verified on live server |
| SCR-052 | `/inventory/deliveries` | Inventory | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-053 | `/inventory/expiry` | Inventory | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-054 | `/inventory/in-transit` | Inventory | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-055 | `/inventory/item-card` | Inventory | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-056 | `/inventory/item-units` | Inventory | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-057 | `/inventory/items` | Inventory | Fully Tested | Yes (`evidence/01-master-data/MDR-003-items.png`) | Yes | Verified on live server |
| SCR-058 | `/inventory/levels` | Inventory | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-059 | `/inventory/lots` | Inventory | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-060 | `/inventory/movements` | Inventory | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-061 | `/inventory/overview` | Inventory | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-062 | `/inventory/production` | Inventory | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-063 | `/inventory/requests` | Inventory | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-064 | `/inventory/serials` | Inventory | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-065 | `/inventory/transfers` | Inventory | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-066 | `/inventory/units` | Inventory | Fully Tested | Yes (`evidence/01-master-data/MDR-001-units.png`) | Yes | Verified on live server |
| SCR-067 | `/inventory/vouchers` | Inventory | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-068 | `/inventory/warehouses` | Inventory | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-069 | `/m` | General | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-070 | `/m/approvals` | General | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-071 | `/m/attendance` | General | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-072 | `/m/profile` | General | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-073 | `/m/requests/new` | General | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-074 | `/manufacturing/boms` | General | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-075 | `/manufacturing/orders` | General | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-076 | `/marina/additions` | General | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-077 | `/marina/bookings` | General | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-078 | `/marina/day-close` | General | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-079 | `/marina/groups` | General | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-080 | `/marina/link-invoices` | General | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-081 | `/marina/preparation` | General | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-082 | `/marina/rota` | General | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-083 | `/marina/vessels` | General | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-084 | `/marina/violations` | General | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-085 | `/migration/runs` | General | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-086 | `/notifications` | General | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-087 | `/optics/field-labels` | General | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-088 | `/optics/prescriptions` | General | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-089 | `/pos/offline` | General | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-090 | `/pos/offline-queue` | General | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-091 | `/print/[doc]/[id]` | General | Parameterized Route | N/A (Requires Dynamic ID) | N/A | Tested via API contract / parent view |
| SCR-092 | `/projects` | Projects | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-093 | `/projects/[id]` | Projects | Parameterized Route | N/A (Requires Dynamic ID) | N/A | Tested via API contract / parent view |
| SCR-094 | `/projects/[id]/board` | Projects | Parameterized Route | N/A (Requires Dynamic ID) | N/A | Tested via API contract / parent view |
| SCR-095 | `/projects/[id]/cost` | Projects | Parameterized Route | N/A (Requires Dynamic ID) | N/A | Tested via API contract / parent view |
| SCR-096 | `/projects/[id]/gantt` | Projects | Parameterized Route | N/A (Requires Dynamic ID) | N/A | Tested via API contract / parent view |
| SCR-097 | `/projects/[id]/tasks/[taskId]` | Projects | Parameterized Route | N/A (Requires Dynamic ID) | N/A | Tested via API contract / parent view |
| SCR-098 | `/projects/[id]/time` | Projects | Parameterized Route | N/A (Requires Dynamic ID) | N/A | Tested via API contract / parent view |
| SCR-099 | `/projects/board` | Projects | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-100 | `/projects/boq` | Projects | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-101 | `/projects/contracting-return` | Projects | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-102 | `/projects/contractor-contract` | Projects | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-103 | `/projects/contractor-payment` | Projects | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-104 | `/projects/cost` | Projects | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-105 | `/projects/followup` | Projects | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-106 | `/projects/gantt` | Projects | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-107 | `/projects/offers` | Projects | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-108 | `/projects/stages` | Projects | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-109 | `/projects/tasks/[taskId]` | Projects | Parameterized Route | N/A (Requires Dynamic ID) | N/A | Tested via API contract / parent view |
| SCR-110 | `/projects/time` | Projects | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-111 | `/purchases` | Purchases | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-112 | `/purchases/invoices` | Purchases | Fully Tested | Yes (`evidence/02-purchases/PUR-001-invoices-list.png`) | Yes | Verified on live server |
| SCR-113 | `/purchases/invoices/[id]` | Purchases | Parameterized Route | N/A (Requires Dynamic ID) | N/A | Tested via API contract / parent view |
| SCR-114 | `/purchases/invoices/new` | Purchases | Fully Tested | Yes (`evidence/02-purchases/PUR-002-new-before-save.png`) | Yes | Verified on live server |
| SCR-115 | `/purchases/invoices/ocr` | Purchases | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-116 | `/purchases/notes/[kind]` | Purchases | Parameterized Route | N/A (Requires Dynamic ID) | N/A | Tested via API contract / parent view |
| SCR-117 | `/purchases/supplier-portal` | Purchases | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-118 | `/purchases/suppliers` | Purchases | Fully Tested | Yes (`evidence/01-master-data/MDR-005-suppliers.png`) | Yes | Verified on live server |
| SCR-119 | `/reports` | Reports | Fully Tested | Yes (`evidence/07-reports/RPT-001-dashboard.png`) | Yes | Verified on live server |
| SCR-120 | `/reports/[key]` | Reports | Parameterized Route | N/A (Requires Dynamic ID) | N/A | Tested via API contract / parent view |
| SCR-121 | `/reports/builder` | Reports | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-122 | `/reports/custom` | Reports | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-123 | `/s/[...slug]` | General | Parameterized Route | N/A (Requires Dynamic ID) | N/A | Tested via API contract / parent view |
| SCR-124 | `/sales/cash-customers` | Sales | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-125 | `/sales/customers` | Sales | Fully Tested | Yes (`evidence/01-master-data/MDR-004-customers.png`) | Yes | Verified on live server |
| SCR-126 | `/sales/ecommerce-orders` | Sales | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-127 | `/sales/invoices` | Sales | Fully Tested | Yes (`evidence/03-sales/SAL-001-invoices-list.png`) | Yes | Verified on live server |
| SCR-128 | `/sales/invoices/[id]` | Sales | Parameterized Route | N/A (Requires Dynamic ID) | N/A | Tested via API contract / parent view |
| SCR-129 | `/sales/invoices/new` | Sales | Fully Tested | Yes (`evidence/03-sales/SAL-002-new-before-save.png`) | Yes | Verified on live server |
| SCR-130 | `/sales/notes/[kind]` | Sales | Parameterized Route | N/A (Requires Dynamic ID) | N/A | Tested via API contract / parent view |
| SCR-131 | `/sales/portal-access` | Sales | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-132 | `/sales/pos` | Sales | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-133 | `/sales/quotations` | Sales | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-134 | `/sales/quotations/[id]` | Sales | Parameterized Route | N/A (Requires Dynamic ID) | N/A | Tested via API contract / parent view |
| SCR-135 | `/sales/quotations/[id]/esign` | Sales | Parameterized Route | N/A (Requires Dynamic ID) | N/A | Tested via API contract / parent view |
| SCR-136 | `/sales/returns` | Sales | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-137 | `/sales/salesman-commissions` | Sales | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-138 | `/sales/salesmen` | Sales | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-139 | `/sales/shifts` | Sales | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-140 | `/sales/statements` | Sales | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-141 | `/settings/ai` | Settings | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-142 | `/settings/approvals` | Settings | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-143 | `/settings/audit` | Settings | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-144 | `/settings/backup` | Settings | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-145 | `/settings/branches` | Settings | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-146 | `/settings/change-password` | Settings | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-147 | `/settings/company` | Settings | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-148 | `/settings/custom-fields` | Settings | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-149 | `/settings/data-rotation` | Settings | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-150 | `/settings/devices` | Settings | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-151 | `/settings/ecommerce` | Settings | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-152 | `/settings/email` | Settings | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-153 | `/settings/files` | Settings | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-154 | `/settings/general` | Settings | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-155 | `/settings/invoice-maintenance` | Settings | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-156 | `/settings/language` | Settings | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-157 | `/settings/marketplace` | Settings | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-158 | `/settings/new-file` | Settings | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-159 | `/settings/offers` | Settings | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-160 | `/settings/payment-gateways` | Settings | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-161 | `/settings/payments` | Settings | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-162 | `/settings/posting-profiles` | Settings | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-163 | `/settings/price-lists` | Settings | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-164 | `/settings/printing` | Settings | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-165 | `/settings/restore` | Settings | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-166 | `/settings/roles` | Settings | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-167 | `/settings/sync` | Settings | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-168 | `/settings/sync/[entity]` | Settings | Parameterized Route | N/A (Requires Dynamic ID) | N/A | Tested via API contract / parent view |
| SCR-169 | `/settings/sync/manage` | Settings | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-170 | `/settings/sync/zatca` | Settings | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-171 | `/settings/two-factor` | Settings | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-172 | `/settings/usage` | Settings | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-173 | `/settings/users` | Settings | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-174 | `/settings/whatsapp` | Settings | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-175 | `/settings/white-label` | Settings | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-176 | `/settings/zatca` | Settings | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-177 | `/settings/zatca/sent` | Settings | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-178 | `/settings/zatca/status` | Settings | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-179 | `/supplier-portal` | General | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-180 | `/support/about` | General | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-181 | `/support/help` | General | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-182 | `/support/license` | General | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-183 | `/support/report-designer` | General | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-184 | `/tailoring/invoices` | General | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-185 | `/tailoring/measurements` | General | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-186 | `/tailoring/measurements/attributes` | General | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-187 | `/tailoring/options` | General | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-188 | `/tailoring/orders` | General | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-189 | `/tailoring/types` | General | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-190 | `/treasury/bank-accounts` | Treasury | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-191 | `/treasury/bank-reconciliation` | Treasury | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-192 | `/treasury/bank-statements` | Treasury | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-193 | `/treasury/banks` | Treasury | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-194 | `/treasury/cheques` | Treasury | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-195 | `/treasury/day-close` | Treasury | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-196 | `/treasury/movements` | Treasury | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-197 | `/treasury/safes` | Treasury | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-198 | `/treasury/transfers` | Treasury | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-199 | `/treasury/vouchers` | Treasury | Fully Tested | Yes (`evidence/05-receipts-payments/TRS-001-vouchers.png`) | Yes | Verified on live server |
| SCR-200 | `/van-sales` | General | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
| SCR-201 | `/van-sales/rep` | General | Scope Discovered | Pending Execution | Pending Execution | Discovered in app route tree |
