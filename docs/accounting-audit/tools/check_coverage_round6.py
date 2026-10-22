#!/usr/bin/env python3
"""Round-six coverage: every register row now has evidence — and the kinds of evidence differ.

The point of this script is to stop "300/300 visited" from being read as "300/300 tested".
It splits rows by what was actually demonstrated and cross-checks that every round-six row has
a screenshot registered in the manifest.
"""
import json
import re
from collections import Counter
from pathlib import Path

ROUND = Path(__file__).resolve().parents[1]
EVIDENCE = ROUND / "evidence"
DISCOVERY = EVIDENCE / "00-discovery"

CONTENT = {
    "OPENED_READ_ONLY_R4",
    "OPENED_REP_READ_ONLY",
    "READ_ONLY_OPEN_R5",
    "OPENED_READ_ONLY",
    "OPENED_ONLY",
    "PARTIAL",
    "READ_ONLY_OPEN_R6",
    "LOGIN_SURFACE_R6",
}
NEGATIVE = {
    "PROBE_404_R6",
    "NOT_FOUND_CONFIRMED_R6",
    "ERROR_STATE_R6",
    "EMPTY_OR_ERROR_STATE_R6",
    "NOT_FOUND_BY_DESIGN",
    "NOT_FOUND_BY_DESIGN_R6",
}
OTHER = {"REDIRECT_R5", "REDIRECT_ONLY_VERIFIED", "DENIED_AS_EXPECTED", "FAIL", "PARTIAL/FAIL"}
GROUP = {"S": "60-r6-staff", "M": "60-r6-marketing", "A": "60-r6-console", "P": "60-r6-portal"}
# The two design-gallery rows were re-classified in round six; their evidence is the round-five capture.
ROUND5_GROUP = {"A": "50-r5-console", "M": "50-r5-marketing", "P": "50-r5-portal"}


def main() -> int:
    rows = []
    for line in (ROUND / "SCREEN_REGISTER.md").read_text().splitlines():
        if line.startswith("| SCR-"):
            cells = [cell.strip() for cell in line.split("|")]
            rows.append({"screen": cells[1], "app": cells[2], "status": cells[5]})

    kinds = Counter(row["status"].split(" ")[0] for row in rows)
    classified = {key: 0 for key in ("content", "negative", "other")}
    unclassified = []
    for row in rows:
        kind = row["status"].split(" ")[0]
        if kind in CONTENT:
            classified["content"] += 1
        elif kind in NEGATIVE:
            classified["negative"] += 1
        elif kind in OTHER:
            classified["other"] += 1
        else:
            unclassified.append((row["screen"], kind))

    pngs = {str(path.relative_to(EVIDENCE)) for path in EVIDENCE.rglob("*.png")}
    manifest = {json.loads(line)["path"] for line in (EVIDENCE / "manifest.ndjson").read_text().splitlines() if line.strip()}

    r6 = [row for row in rows if "_R6" in row["status"] or row["status"].startswith("NOT_FOUND_BY_DESIGN ")]
    missing = []
    for row in r6:
        match = re.search(r"RO([56])-([SMAP]\d{3})", row["status"])
        if not match:
            missing.append({"screen": row["screen"], "problem": "no test id"})
            continue
        test = f"RO{match.group(1)}-" + match.group(2)
        group = GROUP if match.group(1) == "6" else ROUND5_GROUP
        path = f"{group[test[4]]}/{test}.png"
        if path not in pngs or path not in manifest:
            missing.append({"screen": row["screen"], "test": test, "problem": "screenshot or manifest entry missing"})

    plan = json.loads((DISCOVERY / "round6-planned-routes.json").read_text())
    tested = {
        key: len(json.loads((DISCOVERY / f"round6-{key}-results.json").read_text()))
        for key in ("staff", "marketing", "platform-admin", "customer-portal")
        if (DISCOVERY / f"round6-{key}-results.json").exists()
    }

    coverage = {
        "at": __import__("datetime").datetime.now(__import__("datetime").timezone.utc).isoformat(),
        "registerRows": len(rows),
        "evidenceKind": classified,
        "rowsWithoutEvidence": kinds.get("NOT_RUN", 0),
        "unclassifiedStatuses": unclassified,
        "round6": {
            "plannedRoutes": len(plan),
            "observedRoutes": sum(tested.values()),
            "byApp": tested,
            "newRegisterRows": len(r6),
            "missingEvidence": missing,
        },
        "reading": "content = real page content rendered; negative = only a not-found/error path was exercised; other = redirect, denial, or a documented financial failure. None of these is a functional acceptance of the screen.",
        "functionalAcceptance": {
            "savedDocumentsThisRound": 0,
            "financialWritesThisRound": 0,
            "nonFinancialWrites": "3 in round five only (test customer, portal grant, own password)",
        },
    }
    coverage["allPass"] = (
        classified["content"] + classified["negative"] + classified["other"] == len(rows)
        and not missing
        and kinds.get("NOT_RUN", 0) == 0
    )
    (DISCOVERY / "coverage-round6.json").write_text(json.dumps(coverage, indent=2, ensure_ascii=False) + "\n")
    print(json.dumps(coverage, indent=2, ensure_ascii=False))
    return 0 if coverage["allPass"] else 1


if __name__ == "__main__":
    raise SystemExit(main())
