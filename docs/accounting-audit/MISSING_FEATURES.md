# Missing Features & Gap Analysis Catalog

| Feature ID | Category / Module | Feature Name | Status | Functional & Accounting Value | Priority | Suggested Fix / Database & API Impact |
|------------|-------------------|--------------|--------|--------------------------------|----------|----------------------------------------|
| GAP-001 | Fixed Assets | Asset Depreciation Module | Missing | Automatic monthly asset depreciation postings and asset cards. | HIGH | Add `fixed_assets` table and monthly depreciation runner. |
| GAP-002 | Banking | Automated Bank Reconciliation Import | Partial | Direct CSV/OFX bank statement parsing and auto-matching. | MEDIUM | Enhance `/treasury/bank-reconciliation` parser. |
| GAP-003 | Inventory | Periodic Physical Inventory Adjustment | Partial | Stock count sheets and automated inventory variance journal entries. | HIGH | Add physical inventory counting audit workflow. |
| GAP-004 | Cost Accounting | Project Cost Center Allocation Rules | Partial | Overhead cost distribution across multiple projects based on percentages. | MEDIUM | Implement cost center allocation percentage tables. |
| GAP-005 | E-Invoicing | ZATCA Phase 2 Real-Time Clearance Queue | Implemented | Real-time XML signing and ZATCA B2B clearance API integration. | HIGH | System has full ZATCA Phase 2 signing engine. |
