#!/usr/bin/env python3
"""Round-five coverage and evidence integrity.

Counts are derived from files, the register and the manifest — never typed by hand.
Integration of the earlier rounds is explicit: R4 is re-read, not recomputed.
"""
import json
import re
from collections import Counter
from pathlib import Path

ROUND = Path(__file__).resolve().parents[1]
EVIDENCE = ROUND / "evidence"
DISCOVERY = EVIDENCE / "00-discovery"

STATUS = {
    "READ_ONLY_OPEN_R5": "opened_read_only",
    "REDIRECT_R5": "redirect_only",
    "DENIED_R5": "denied",
    "UNAUTHENTICATED_GATE_R5": "auth_gate",
}
GROUP = {"A": "50-r5-console", "M": "50-r5-marketing", "P": "50-r5-portal"}
# Declared, not silently accepted: a pre-manifest capture that is never cited as evidence.
KNOWN_UNREGISTERED = {"00-discovery/login-initial.png": "captured before manifest wiring; excluded, never cited"}


def register_rows():
    rows = []
    for line in (ROUND / "SCREEN_REGISTER.md").read_text().splitlines():
        if not line.startswith("| SCR-"):
            continue
        cells = [cell.strip() for cell in line.split("|")]
        rows.append({"id": cells[1], "app": cells[2], "route": cells[3], "source": cells[4], "status": cells[5]})
    return rows


def main() -> int:
    rows = register_rows()
    planned = json.loads((DISCOVERY / "round5-planned-routes.json").read_text())
    results = {}
    for key in ("marketing", "platform", "portal"):
        path = DISCOVERY / f"round5-{key}-results.json"
        results[key] = json.loads(path.read_text()) if path.exists() else []

    status_counts = Counter()
    for row in rows:
        head = row["status"].split(" ")[0]
        status_counts[head] += 1
    # Round-five rows are identified by their evidence id, not by their status label: two of them
    # were re-classified in round six (/design → NOT_FOUND_BY_DESIGN) and are still round-five work.
    r5_rows = [row for row in rows if re.search(r"RO5-[AMP]\d{3}", row["status"])]
    visited_any = sum(1 for row in rows if not row["status"].startswith("NOT_RUN"))

    pngs = {str(path.relative_to(EVIDENCE)): path for path in EVIDENCE.rglob("*.png")}
    manifest = [json.loads(line) for line in (EVIDENCE / "manifest.ndjson").read_text().splitlines() if line.strip()]
    manifest_paths = Counter(entry["path"] for entry in manifest)
    unregistered = sorted(set(pngs) - set(manifest_paths))
    missing_files = sorted(set(manifest_paths) - set(pngs))

    r5_evidence = []
    for row in r5_rows:
        match = re.search(r"RO5-([AMP]\d{3})(AUTH)?", row["status"])
        if not match:
            r5_evidence.append({"screen": row["id"], "problem": "no round-five test id"})
            continue
        test_id = "RO5-" + match.group(1) + (match.group(2) or "")
        path = f"{GROUP[test_id[4]]}/{test_id}.png"
        if path not in pngs:
            r5_evidence.append({"screen": row["id"], "test": test_id, "problem": "screenshot missing"})

    observed = [
        {
            "test": entry["id"],
            "route": entry["route"],
            "final": entry["finalUrl"],
            "navStatus": entry["navStatus"],
            "saved": entry["id"] not in {item["test"] for item in r5_evidence if "test" in item},
            "evidenceLevel": "opened_only" if entry["id"] not in {item["test"] for item in r5_evidence if "test" in item} else "observation_only",
        }
        for group in results.values()
        for entry in group
    ]

    coverage = {
        "at": __import__("datetime").datetime.now(__import__("datetime").timezone.utc).isoformat(),
        "plannedRoutes": len(planned),
        "plannedByApp": dict(Counter(route["app"] for route in planned)),
        "registerRowsOutsideRoundFivePlan": len(rows) - len(planned),
        "resultRowsIncludingPostLogin": len(observed),
        "registerStatusCounts": dict(status_counts),
        "registerR5": {
            "rows": len(r5_rows),
            "byStatus": dict(Counter(row["status"].split(" ")[0] for row in r5_rows)),
            "byApp": dict(Counter(row["app"] for row in r5_rows)),
        },
        "cumulative": {
            "registerRows": len(rows),
            "visitedAnyRound": visited_any,
            "notRun": status_counts.get("NOT_RUN", 0),
            "note": "R4 rows were counted in their own round; this total re-reads the register, it is not a new test run",
        },
        "evidence": {
            "pngFiles": len(pngs),
            "manifestRecords": len(manifest),
            "uniqueManifestPaths": len(manifest_paths),
            "round5PngFiles": sum(1 for path in pngs if path.startswith("50-r5-")),
            "declaredUnregistered": KNOWN_UNREGISTERED,
            "unregisteredPng": unregistered,
            "manifestEntriesWithoutFile": missing_files,
            "duplicateManifestPaths": {path: count for path, count in manifest_paths.items() if count > 1},
            "r5RowsMissingScreenshot": r5_evidence,
        },
        "acceptance": "VISITS ONLY — no saved business document, no invoice, no receipt, no profit or party-balance acceptance",
    }
    unexpected = [path for path in unregistered if path not in KNOWN_UNREGISTERED]
    coverage["allPass"] = not unexpected and not missing_files and not r5_evidence and len(planned) == len(r5_rows)
    coverage["unexpectedUnregistered"] = unexpected
    (DISCOVERY / "coverage-round5.json").write_text(json.dumps(coverage, indent=2, ensure_ascii=False) + "\n")
    print(json.dumps(coverage, indent=2, ensure_ascii=False))
    return 0 if coverage["allPass"] else 1


if __name__ == "__main__":
    raise SystemExit(main())
