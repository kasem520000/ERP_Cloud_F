#!/usr/bin/env python3
"""Cross-surface capture inventory, not full functional acceptance.
Keeps the historical round-three coverage file unchanged.
"""
from pathlib import Path
from urllib.parse import urlparse
from collections import Counter
import hashlib
import json
import re

ROOT = Path(__file__).resolve().parents[3]
E = ROOT / 'docs/accounting-audit/evidence'
PORT_APP = {3001: 'staff', 3002: 'marketing', 3003: 'platform-admin', 3004: 'customer-portal', 3005: 'bakery'}
records = [json.loads(line) for line in (E / 'manifest.ndjson').read_text().splitlines()]
pages = {}
for app in PORT_APP.values():
    pages[app] = []
    for file in (ROOT / 'apps' / app / 'app').rglob('page.tsx'):
        parts = [p for p in file.relative_to(ROOT / 'apps' / app / 'app').parts[:-1] if not p.startswith('(')]
        pattern_parts = []
        for part in parts:
            pattern_parts.append('.+' if part.startswith('[...') else '[^/]+' if part.startswith('[') else re.escape(part))
        pattern = '^/' + '/'.join(pattern_parts) + '$'
        pages[app].append((sum(not p.startswith('[') for p in parts), pattern, str(file.relative_to(ROOT))))

unique = set()
for record in records:
    url = urlparse(record['url'])
    if url.port not in PORT_APP:
        raise ValueError('Unmapped capture origin: ' + record['url'])
    unique.add((PORT_APP[url.port], url.path))
mapping = []
for app, route in sorted(unique):
    candidates = [p for p in pages[app] if re.match(p[1], route)]
    if not candidates:
        raise ValueError('No source page: ' + app + ' ' + route)
    source = sorted(candidates, reverse=True)[0][2]
    mapping.append(dict(app=app, route=route, source=source))

source_count = len({r['source'] for r in mapping})
page_count = len(list((ROOT / 'apps').glob('*/app/**/page.tsx')))
statuses = []
for record in records:
    file = E / record['path']
    matched = file.exists() and hashlib.sha256(file.read_bytes()).hexdigest() == record['sha256']
    superseded = record['phase'] == 'inspect' and record['path'] == '00-discovery/current-screen.png'
    statuses.append('MATCH' if matched else 'SUPERSEDED_EXPLORATORY_ONLY' if superseded else 'INVALID')
results_file = E / '00-discovery/read-only-round4-results.json'
results = json.loads(results_file.read_text()) if results_file.exists() else []
review_file = E / '00-discovery/round4-screen-review.json'
reviews = {r['id']: r for r in json.loads(review_file.read_text())} if review_file.exists() else {}
reviewed_statuses = Counter(reviews.get(r['id'], {}).get('reviewedStatus', r['status']) for r in results)
redirects = [dict(id=row['id'], app=row['app'], requested=row['route'], actual=urlparse(row['actual']).path, source=row['source'])
             for row in results if row.get('actual') and urlparse(row['actual']).path != row['route']]
attempted_sources = {r['source'] for r in mapping} | {r['source'] for r in redirects}
attempted_routes = unique | {(r['app'], r['requested']) for r in redirects}
summary = dict(webPageFiles=page_count, capturedAppRoutes=len(unique), capturedSourcePages=source_count,
               attemptedAppRoutes=len(attempted_routes), attemptedSourcePages=len(attempted_sources),
               verifiedRedirectOnlyPages=redirects, notVisitedSourcePages=page_count-len(attempted_sources),
               sourcePagesByApp=dict(Counter(r['source'].split('/')[1] for r in {row['source']: row for row in mapping}.values())),
               capturedRoutesByApp=dict(Counter(row['app'] for row in mapping)),
               pngFiles=len(list(E.rglob('*.png'))), manifestRecords=len(records),
               integrity=dict(Counter(statuses)), round4Attempts=len(results),
               round4Statuses=dict(Counter(row['status'] for row in results)),
               round4ReviewedStatuses=dict(reviewed_statuses), mapping=mapping)
(E / '00-discovery/coverage-round4.json').write_text(json.dumps(summary, ensure_ascii=False, indent=2)+'\n')
print(json.dumps({k:v for k,v in summary.items() if k != 'mapping'}, ensure_ascii=False, indent=2))
raise SystemExit(1 if 'INVALID' in statuses else 0)
