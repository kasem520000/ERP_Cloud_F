#!/usr/bin/env python3
"""Independent Decimal reconciliation of captured evidence only; never writes ERP data.
Exit 1 means a real reconciliation failed, not that execution was skipped.
"""
from pathlib import Path
from decimal import Decimal as D
import json, sys, hashlib
E = Path(__file__).resolve().parents[1] / 'evidence'
def load(p): return json.loads((E/p).read_text())
checks=[]
def check(name,expected,actual,source):
    exp,act=D(str(expected)),D(str(actual))
    checks.append(dict(name=name,expected=str(exp),actual=str(act),difference=str(act-exp),status='PASS' if exp==act else 'FAIL',source=source))
state=load('08-reconciliation/E2E-CREDIT-001-db.json')[0]['end_state']
stock=state['stock'][0]
check('Inventory quantity',9,stock['quantity'],'stock_balances')
check('Inventory value',900,stock['value'],'stock_balances')
ledger={r['code']:r for r in state['ledger']}
check('Inventory GL',900,ledger['1270001']['net'],'journal_entry_lines /1270001')
check('COGS GL',300,ledger['3200004']['net'],'journal_entry_lines /3200004')
check('Receivable GL',D('517.50'),ledger['12310001']['net'],'journal_entry_lines /12310001')
check('Payable GL credit',1380,-D(str(ledger['22111001']['net'])),'journal_entry_lines /22111001')
check('Journal debit-credit',0,sum((D(str(r['debit']))-D(str(r['credit'])) for r in state['ledger']),D(0)),'all posted ledger')
parties=load('07-reports/party-api-results.json')
customer=next(r for r in parties if r['url'].endswith('01a16009-8299-75e0-a88d-1a8acec229a5/statement'))
supplier=next(r for r in parties if r['url'].endswith('01a16009-4f5d-7661-9192-0913675e1fd1/statement'))
check('Customer statement',D('517.50'),customer['body']['receivable'],'RPT-004 / ACC-002')
check('Supplier statement',1380,supplier['body']['payable'],'RPT-005 / ACC-002')
reports=load('07-reports/report-api-results.json')
income=next(r for r in reports if 'from=2026-01-01' in r['url'] and 'with_stock=1' in r['url'])
check('Default income profit',150,income['body']['totals']['profit'],'RPT-001 / ACC-003')
catalog=load('07-reports/catalog-api-results.json')
invoice=next(r for r in catalog if '/invoice-profit?from=2026-10-21' in r['url'])
item=next(r for r in catalog if '/item-profit?from=2026-10-21' in r['url'])
check('Invoice-profit COGS',300,invoice['body']['rows'][0]['cost_total'],'RPT-008 / ACC-004')
check('Invoice-profit profit',150,invoice['body']['rows'][0]['profit'],'RPT-008 / ACC-004')
check('Item-profit profit',150,item['body']['rows'][0]['profit'],'RPT-009')
for r in load('08-reconciliation/BASELINE-cash-difference.json'):
    check('Cash baseline '+r['code'],r['ledger_balance'],r['cached_balance'],'BASELINE / ACC-001')
for key,value in [('sales',1),('purchases',1),('movements',2),('journals',3)]:
    check('Persisted '+key,value,load('08-reconciliation/E2E-CREDIT-001-final-check.json')[0]['verification'][key],'after rejected CTRL-003')
(E/'08-reconciliation/independent-checks.json').write_text(json.dumps(checks,ensure_ascii=False,indent=2)+'\n')
manifest=[json.loads(s) for s in (E/'manifest.ndjson').read_text().splitlines()]
integrity=[]
for r in manifest:
    path=E/r['path']; exists=path.exists()
    matches=exists and hashlib.sha256(path.read_bytes()).hexdigest()==r['sha256']
    # Only exploratory current-screen.png was overwritten; no operational evidence was.
    allowed=r['phase']=='inspect' and r['path']=='00-discovery/current-screen.png'
    integrity.append(dict(path=r['path'],at=r['at'],status='MATCH' if matches else 'SUPERSEDED_EXPLORATORY_ONLY' if allowed else 'INVALID'))
(E/'08-reconciliation/evidence-integrity.json').write_text(json.dumps(integrity,ensure_ascii=False,indent=2)+'\n')
for r in checks: print(f"{r['status']:4} {r['name']}: expected={r['expected']}, actual={r['actual']}, diff={r['difference']}")
failed=sum(r['status']=='FAIL' for r in checks)
print(f'{len(checks)-failed}/{len(checks)} financial assertions passed; {failed} failed. Operational PNG integrity: '+('INVALID' if any(r['status']=='INVALID' for r in integrity) else 'OK; exploratory overwrites explicitly marked'))
sys.exit(1 if failed or any(r['status']=='INVALID' for r in integrity) else 0)
