-- 0140_accountant_approves_van_closing.down.sql
-- تراجعُ 0140: يحذف **الكودين اللذين أضافتهما** لدور المحاسب فقط، ولا يمسّ أي صفٍّ آخر.
-- (لو كان الدور يحمل `van_sales.view` قبل الهجرة فالحذف يُزيله؛ وهو الأثر المقبول للتراجع
-- الكامل عن المنح، ويُعاد بمنحٍ يدوي من شاشة الأدوار عند الحاجة.)

DELETE FROM role_permissions rp
USING roles r
WHERE rp.role_id = r.id
  AND r.name IN ('Accountant', 'محاسب')
  AND rp.permission_code IN ('van_sales.view', 'van_sales.closing.approve');
