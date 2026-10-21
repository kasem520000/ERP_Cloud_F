# Defects & Anomalies Register

| Defect ID | Severity | Module / Screen | Summary / Description | Expected Result | Actual Result | Status | Evidence / Notes |
|-----------|----------|-----------------|-----------------------|-----------------|---------------|--------|------------------|
| ACC-001 | HIGH | `/parties` API | Calling `POST /parties/customers` or `/parties/suppliers` returned 404 because path is `POST /parties` with `kind` in payload. | Endpoint returns clear error or handles path alias. | `404 Not Found` returned when using legacy path. | RESOLVED / DOCUMENTED | Handled in service contract. |
| ACC-002 | MEDIUM | Sales Invoice | Creating a sales invoice requires `warehouseId` explicitly when stockable items are present. | UI should auto-populate default branch warehouse. | 500 error if `warehouseId` is missing during post. | RESOLVED / DOCUMENTED | Fixed in UI workflow. |
