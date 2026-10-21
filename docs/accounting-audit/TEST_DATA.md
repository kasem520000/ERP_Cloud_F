# Audit Test Data Specifications (`AUDIT-TEST-2026`)

## 1. Company Identity & Tenant Setup
- Tenant Code: `demo`
- Fiscal Year: `2026`
- Base Currency: `SAR` (Saudi Riyal)
- Default Tax Rate: `15% Standard VAT`

## 2. Test Master Data
- **Supplier**: `000002` | الشركة الدولية للمشتريات - تدقيق
- **Customer**: `000001` | شركة العميل المتقدم - تدقيق
- **Item Category**: `AUDIT-CAT-01` | مجموعة الأجهزة - تدقيق
- **Base Unit**: `BOX-AUDIT` | كرتون - تدقيق
- **Item 1**: `AUDIT-ITEM-01` | جهاز حاسب محمول - تدقيق
  - Standard Cost: 2,000.00 SAR
  - Selling Price: 3,000.00 SAR
  - Tax Group: Standard 15% VAT

## 3. Financial Accounts Mappings
- Cash Account: `110101` (الصندوق الرئيسي)
- Bank Account: `110102` (البنك الأهلي)
- AR Control Account: `110201` (العملاء)
- AP Control Account: `210101` (الموردون)
- Stock Account: `11030099` (مخزون حواسب التدقيق)
- Sales Revenue: `410101` (المبيعات)
- Cost of Goods Sold: `510101` (تكلفة المبيعات)
- Input VAT Account: `110401` (ضريبة المدخلات المستردة)
- Output VAT Account: `210401` (ضريبة المخرجات المستحقة)
