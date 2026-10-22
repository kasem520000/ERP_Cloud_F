#!/usr/bin/env python3
"""Read captured report responses only. No ERP calls or mutations."""
from pathlib import Path
from decimal import Decimal
import json

E = Path(__file__).resolve().parents[1] / 'evidence'
reports = json.loads((E / '07-reports/ledger-itemcard-round3-api.json').read_text())
checks = []

def numeric(case, field, expected, actual):
    checks.append(dict(case=case, field=field, expected=str(expected), actual=str(actual),
                       status='PASS' if Decimal(str(expected)) == Decimal(str(actual)) else 'FAIL'))

card = next(r for r in reports if r['id'] == 'RPT-013')['body']
for section, fields in [('opening', {'quantity': 0, 'value': 0}),
                        ('totals', {'inQty': 12, 'inValue': 1200, 'outQty': 3, 'outValue': 300}),
                        ('closing', {'quantity': 9, 'value': 900})]:
    for field, expected in fields.items():
        numeric('RPT-013', section + '.' + field, expected, card[section][field])
numeric('RPT-013', 'movementCount', 2, len(card['rows']))
for case, debit, credit, closing, direction in [
    ('RPT-14', 1200, 300, 900, 'مدين'), ('RPT-15', 300, 0, 300, 'مدين'),
    ('RPT-16', '517.50', 0, '517.50', 'مدين'), ('RPT-17', 0, 1380, 1380, 'دائن'),
    ('RPT-18', 180, '67.50', '112.50', 'مدين'),
]:
    totals = next(r for r in reports if r['id'] == case)['body']['totals']
    for field, expected in [('debit', debit), ('credit', credit), ('closing', closing)]:
        numeric(case, field, expected, totals[field])
    checks.append(dict(case=case, field='closingStatus', expected=direction,
                       actual=totals['closingStatus'], status='PASS' if direction == totals['closingStatus'] else 'FAIL'))

summary = dict(cases=6, assertions=len(checks), passed=sum(c['status'] == 'PASS' for c in checks),
               failed=sum(c['status'] != 'PASS' for c in checks), checks=checks)
(E / '08-reconciliation/round3-report-checks.json').write_text(json.dumps(summary, ensure_ascii=False, indent=2) + '\n')
print(json.dumps({k:v for k,v in summary.items() if k != 'checks'}, ensure_ascii=False))
raise SystemExit(bool(summary['failed']))
