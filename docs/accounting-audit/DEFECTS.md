# Defects & Anomalies Register

| Defect ID | Severity | Module / Screen | Summary / Description | Expected Result | Actual Result | Status | Evidence / Notes |
|-----------|----------|-----------------|-----------------------|-----------------|---------------|--------|------------------|
| ACC-001 | HIGH | `/parties` API | Calling `POST /parties/customers` or `/parties/suppliers` returned 404 because path is `POST /parties` with `kind` in body payload. | Endpoint returns clear error or handles path alias. | `404 Not Found` returned when using legacy path. | RESOLVED / DOCUMENTED | Handled in service contract. |
| ACC-002 | MEDIUM | Sales Invoice (`/sales/invoices/new`) | Creating a sales invoice requires `warehouseId` explicitly when stockable items are present. | UI should auto-populate default branch warehouse. | 500 internal error if `warehouseId` is omitted during post. | RESOLVED / DOCUMENTED | Fixed in UI workflow. |
| ACC-003 | MEDIUM | Customer Master (`/sales/customers`) | Adding customer with non-numeric code caused party balance calculation string mismatch in legacy helper. | Numeric customer code padding. | Unhandled string comparison in balance validator. | RESOLVED / DOCUMENTED | Patched in `PartiesService.softDelete`. |
| ACC-004 | LOW | Trial Balance (`/accounting/trial-balance`) | Trial balance report query without date range defaults to full period but UI missing quick filter preset for current quarter. | Quick date filter options available in toolbar. | Manual date selection required. | OPEN | Usability enhancement. |
