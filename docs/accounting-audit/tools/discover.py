#!/usr/bin/env python3
"""Read-only source discovery. Writes audit inventories; never connects to a DB."""
from pathlib import Path
import re
ROOT = Path(__file__).resolve().parents[3]
OUT = ROOT / 'docs/accounting-audit'

def write(name, heading, cols, rows):
    text = heading + '\n\nجرد ساكن؛ ليس إثبات تشغيل. أعيد توليده بـ `python docs/accounting-audit/tools/discover.py`.\n\n'
    text += '| ' + ' | '.join(cols) + ' |\n|' + '---|' * len(cols) + '\n'
    text += '\n'.join('| ' + ' | '.join(str(c).replace('|', '\\|') for c in row) + ' |' for row in rows)
    (OUT / name).write_text(text + '\n')

routes = []
for f in sorted((ROOT / 'apps/api/src').rglob('*.controller.ts')):
    source = f.read_text()
    prefix = re.search(r'@Controller\(([^\n]*)\)', source)
    for n, line in enumerate(source.splitlines(), 1):
        method = re.search(r'@(Get|Post|Put|Patch|Delete)\((.*?)\)', line)
        if method:
            routes.append((method[1].upper(), prefix[1] if prefix else 'غير محسوم', method[2] or "''", f'{f.relative_to(ROOT)}:{n}', 'NOT_RUN'))
write('API_REGISTER.md', '# سجل مرشحات مسارات API\n\nبادئة الإصدار العامة غير مضافة هنا؛ القيم الخام للزخارف ليست URL نهائياً، وبعض البوادئ مصفوفات.', ['الفعل', 'Controller', 'المسار الفرعي', 'المصدر', 'الحالة'], routes)
reports = []
f = ROOT / 'apps/api/src/modules/reporting/report-catalog.ts'
for n, line in enumerate(f.read_text().splitlines(), 1):
    m = re.match(r"    key: '([^']+)'", line)
    if m:
        reports.append((m[1], f'{f.relative_to(ROOT)}:{n}', 'NOT_RUN — فلاتر/تصدير/مطابقة مطلوبة'))
write('REPORT_REGISTER.md', '# مفاتيح تعريفات كتالوج التقارير\n\nلا يشمل هذا تلقائياً التقارير المنفصلة في accounting أو van-sales أو كل تصدير؛ لا تعتمد العدد كعدد جميع التقارير.', ['المفتاح', 'المصدر', 'الحالة'], reports)
objects = []
for f in sorted((ROOT / 'packages/database/migrations').glob('*.sql')):
    for n, line in enumerate(f.read_text().splitlines(), 1):
        if re.search(r'CREATE\s+(?:UNIQUE\s+)?INDEX|CREATE\s+(?:CONSTRAINT\s+)?TRIGGER|CREATE\s+(?:OR\s+REPLACE\s+)?FUNCTION|FOREIGN KEY|REFERENCES\s+|\bCHECK\s*\(', line, re.I) and not line.lstrip().startswith('--'):
            objects.append((f'{f.relative_to(ROOT)}:{n}', line.strip()))
write('DATABASE_CONSTRAINTS.md', '# مراجع القيود والفهارس والعلاقات والمشغلات في الهجرات الرئيسية\n\nاستخراج سطري أولي، لا SQL محلل؛ قد يمتد التعريف أسطراً ويتغير بهجرة لاحقة. لا يشمل generated/down ولا يثبت الحالة النهائية لقاعدة حية.', ['المصدر', 'التعريف/مرجع السطر'], objects)
print(f'API candidates={len(routes)}, catalog report keys={len(reports)}, SQL reference lines={len(objects)}')
