# Project Scope & System Architecture

## 1. System Applications
- **API Server (`apps/api`)**: NestJS backend providing REST API endpoints on `/api/v1`.
- **Staff Panel (`apps/staff`)**: Next.js web portal for accountants, cashiers, managers, and staff.
- **Platform Console (`apps/platform-admin`)**: Multi-tenant admin plane.
- **Bakery & Van Sales (`apps/bakery`, `apps/android-rep`)**: Van sales and distribution web/mobile app.
- **Customer Portal (`apps/customer-portal`)**: Self-service client portal.

## 2. Core Modules & Accounting Posting Engines
1. **General Ledger (`/accounts`, `/journal-entries`, `/fiscal-periods`, `/cost-centers`)**
2. **Sales & E-Invoicing (`/sales/invoices`, `/sales/quotations`, `/sales/returns`, `/pos`)**
3. **Purchases & Inventory (`/purchases/invoices`, `/inventory/items`, `/inventory/transfers`)**
4. **Treasury & Banking (`/treasury/vouchers`, `/treasury/bank-accounts`, `/treasury/transfers`)**
5. **HRM & Payroll (`/hrm/employees`, `/hrm/payroll`, `/hrm/leaves`)**
6. **Financial Reports (`/statements/trial-balance`, `/statements/income-statement`, `/statements/general-ledger`)**
