#!/usr/bin/env python3
"""Attach round-six observations, and correct one round-five classification error.

Round five treated "/design" as an opened content page. Reading the source shows the gallery is
deliberately disabled in production (`notFound()`), so the honest status is NOT_FOUND_BY_DESIGN.
That correction is applied here instead of being left to look like a product defect.
"""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
REGISTER = ROOT / "SCREEN_REGISTER.md"
EV = ROOT / "evidence" / "00-discovery"

NOTE = {
    "READ_ONLY_OPEN_R6": "RO6 قراءة فقط؛ فُتح المحتوى ولم يُحفظ أي تغيير",
    "NOT_FOUND_BY_DESIGN_R6": "RO6 صفحة معطّلة قصداً في الإنتاج (notFound) — سلوك مقصود لا عطب",
    "LOGIN_SURFACE_R6": "RO6 شاشة دخول مستقلة (بوابة الموردين)؛ لم تُزوَّد باعتماد ولم يُختبر محتواها",
    "PROBE_404_R6": "RO6 معرف غير موجود: عُرضت حالة خطأ صريحة بلا بيانات مُختلقة",
    "NOT_FOUND_CONFIRMED_R6": "RO6 404 حقيقية بحالة HTTP404 لمحتوى غير منشور",
    "ERROR_STATE_R6": "RO6 حالة خطأ معروضة؛ نصّ API الإنجليزي ظاهر للمستخدم",
    "EMPTY_OR_ERROR_STATE_R6": "RO6 مستند غير متاح: رسالة عربية واضحة بلا بيانات ولا نموذج دفع",
}


def load(name):
    path = EV / name
    return json.loads(path.read_text()) if path.exists() else []


def classify(row):
    route = row["route"]
    body = row.get("bodyText", "")
    heads = " ".join(row.get("headings") or [])
    # A published-status 404 must win over the "not found heading" heuristic, otherwise a genuine
    # CMS 404 is misreported as the deliberately disabled design gallery.
    if row.get("kind") == "NOT_FOUND_HANDLING" and row.get("navStatus") == 404:
        return "NOT_FOUND_CONFIRMED_R6"
    if route.endswith("/design"):
        return "NOT_FOUND_BY_DESIGN_R6"
    if route == "/supplier-portal":
        return "LOGIN_SURFACE_R6"
    if row.get("kind") == "NOT_FOUND_HANDLING":
        if row.get("navStatus") == 404:
            return "NOT_FOUND_CONFIRMED_R6"
        if row["app"] in ("platform-admin", "customer-portal"):
            return "ERROR_STATE_R6" if row["app"] == "platform-admin" else "EMPTY_OR_ERROR_STATE_R6"
        return "PROBE_404_R6"
    return "READ_ONLY_OPEN_R6"


def main():
    rows = []
    for name in ("round6-staff-results.json", "round6-marketing-results.json", "round6-platform-admin-results.json"):
        rows += load(name)
    portal = load("round6-customer-portal-settled.json")
    plan = {item["route"]: item for item in load("round6-planned-routes.json")}
    for row in portal:
        # The settled probe file only records what was observed; the plan supplies identity.
        source = plan[row["route"]]
        row.setdefault("source", source["source"])
        row.setdefault("kind", source["kind"])
    rows += portal
    lines = REGISTER.read_text().splitlines()
    changed = 0
    missing = []

    for row in rows:
        source = row["source"]
        status = classify(row)
        for index, line in enumerate(lines):
            if not line.startswith("| SCR-") or f"`{source}`" not in line:
                continue
            if f"| {row['app']} |" not in line:
                continue
            cells = line.split("|")
            cells[5] = f" {status} — {row['id']}؛ {NOTE[status]} "
            newline = "|".join(cells)
            if newline != line:
                lines[index] = newline
                changed += 1
            break
        else:
            missing.append((row["id"], row["app"], source))

    # Correction of the round-five mislabel, evidenced by the production guard in the source.
    corrections = 0
    for app in ("marketing", "platform-admin"):
        source = f"apps/{app}/app/design/page.tsx"
        for index, line in enumerate(lines):
            if line.startswith("| SCR-") and f"`{source}`" in line and "READ_ONLY_OPEN_R5" in line:
                cells = line.split("|")
                cells[5] = (
                    " NOT_FOUND_BY_DESIGN — "
                    + ("RO5-A013" if app == "platform-admin" else "RO5-M006")
                    + "؛ تصحيح R6: الشيفرة تُعيد notFound في الإنتاج؛ كانت مصنفة خطأً في R5 "
                )
                lines[index] = "|".join(cells)
                corrections += 1
                break

    REGISTER.write_text("\n".join(lines) + "\n")
    print(json.dumps({"updated": changed, "correctedR5Rows": corrections, "rowsWithoutRegisterMatch": missing}, ensure_ascii=False))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
