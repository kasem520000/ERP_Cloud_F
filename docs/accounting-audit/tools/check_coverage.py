#!/usr/bin/env python3
"""Map captured staff URLs to page files, respecting static-route precedence.
Counts opening/denial evidence, not full functional acceptance or API coverage.
"""
from pathlib import Path
from urllib.parse import urlparse
import json, re

ROOT = Path(__file__).resolve().parents[3]
E = ROOT / 'docs/accounting-audit/evidence'
records = [json.loads(line) for line in (E / 'manifest.ndjson').read_text().splitlines()]
routes = sorted({urlparse(r['url']).path for r in records})
pages = []
for file in (ROOT / 'apps/staff/app').rglob('page.tsx'):
    parts = [p for p in file.relative_to(ROOT / 'apps/staff/app').parts[:-1] if not p.startswith('(')]
    pattern = '^/' + '/'.join('[^/]+' if p.startswith('[') else re.escape(p) for p in parts) + '$'
    pages.append((sum(not p.startswith('[') for p in parts), pattern, str(file.relative_to(ROOT))))
matched = []
for route in routes:
    candidates = [p for p in pages if re.match(p[1], route)]
    if not candidates:
        raise ValueError('No staff page source for captured route: ' + route)
    source = sorted(candidates, reverse=True)[0][2]
    matched.append(dict(route=route, source=source))
source_count = len({r['source'] for r in matched})
summary = dict(webPageFiles=len(list((ROOT / 'apps').glob('*/app/**/page.tsx'))),
               capturedRoutes=len(routes), capturedSourcePages=source_count,
               notRunSourcePages=300-source_count, pngFiles=len(list(E.rglob('*.png'))),
               manifestRecords=len(records), mapping=matched)
(E / '00-discovery/coverage-round3.json').write_text(json.dumps(summary, ensure_ascii=False, indent=2)+'\n')
print(json.dumps({k:v for k,v in summary.items() if k != 'mapping'}))
