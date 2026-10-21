# Financial & Accounting Audit Plan

## Objective
To execute a hands-on audit of the ERP system across all functional layers: UI screens, API endpoints, PostgreSQL database tables, inventory cost tracking, sub-ledger reconciliation, automatic GL postings, and financial reporting integrity.

## Audit Execution Phases
1. **Phase 1: Scope & Architecture Exploration** - Map apps, database tables, API routes, and screen components.
2. **Phase 2: Isolated Test Environment** - Local PostgreSQL DB, API server, and Next.js staff frontend using test dataset `AUDIT-TEST-2026`.
3. **Phase 3: Visual & Functional Evidence Capture** - Record before-save and after-save screenshots via Playwright for all financial operations.
4. **Phase 4: Master Data Audit** - Chart of accounts, tax groups, UOMs, items, customers, suppliers, cost centers.
5. **Phase 5 & 6: Purchases & Sales Cycle** - E2E purchasing, inventory receiving, vendor invoices, cash/credit sales, returns, and reversals.
6. **Phase 7 & 8: Treasury & General Ledger** - Receipt/Payment vouchers, expenses, manual journal entries, reversals, and fiscal period locks.
7. **Phase 9, 10 & 11: End-to-End Accounting Verification & Reconciliation** - Complete E2E business scenario `E2E-001`, trial balance verification, sub-ledger to GL control account reconciliation.
8. **Phase 12, 13 & 14: Internal Controls, Defect Tracking & Feature Gap Analysis** - Boundary testing, defect logging in `DEFECTS.md`, missing ERP features cataloguing in `MISSING_FEATURES.md`.
