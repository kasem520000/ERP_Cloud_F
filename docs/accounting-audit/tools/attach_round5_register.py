#!/usr/bin/env python3
"""Attach round-five observations to the existing 300-row screen register.
Runs are idempotent and refuse to silently re-mark rows; every change is printed.
"""
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
REGISTER = ROOT / "SCREEN_REGISTER.md"
EV = ROOT / "evidence" / "00-discovery"
# survey result key -> app id
SOURCES = {
    "marketing": "marketing",
    "platform": "platform-admin",
    "portal": "customer-portal",
}
NOTE = {
    "READ_ONLY_OPEN_R5": "RO5 قراءة فقط؛ لا حفظ ولا اعتماد ولا تغيير إعدادات",
    "FORM_OPENED_R5": "RO5 فُتح النموذج للقراءة فقط ولم يُرسل؛ وجود حقل كلمة مرور لا يعني شاشة دخول",
    "UNAUTHENTICATED_GATE_R5": "RO5 بلا جلسة أعادته البوابة لشاشة الدخول؛ الزيارة بعد الدخول مسجلة منفصلة",
    "DENIED_R5": "RO5 رفض صلاحية أو حالة غير قابلة للعرض",
    "REDIRECT_R5": "RO5 تحويل مقصود أو إعادة توجيه قبل رسم المحتوى",
}


def classify(row: dict) -> str:
    """Content, not password fields, decides the status: several real forms carry a secret input."""
    if row.get("errorBoundary"):
        return "DENIED_R5"
    route = row.get("route", "")
    final_path = row.get("finalUrl", "").replace("http://127.0.0.1:3002", "").replace("http://127.0.0.1:3003", "").replace("http://127.0.0.1:3004", "")
    if route.startswith("/portal/") and final_path.startswith("/auth/login"):
        return "UNAUTHENTICATED_GATE_R5"
    if route.startswith("/portal/") and final_path != route:
        return "DENIED_R5"
    if row.get("redirected") and (final_path.startswith("/login") or final_path.startswith("/auth/login")):
        return "REDIRECT_R5"
    if row.get("redirected"):
        return "REDIRECT_R5"
    return "READ_ONLY_OPEN_R5"


def load(name: str):
    path = EV / f"round5-{name}-results.json"
    if not path.exists():
        return []
    return json.loads(path.read_text())


def main() -> int:
    lines = REGISTER.read_text().splitlines()
    changed = 0
    for name, app in SOURCES.items():
        rows = load(name)
        # A post-login visit supersedes the earlier unauthenticated redirect for the same route.
        preferred = {}
        for row in rows:
            key = row["source"]
            if key not in preferred or row["id"].endswith("AUTH"):
                preferred[key] = row
        for row in preferred.values():
            source = row["source"]
            for index, line in enumerate(lines):
                if not line.startswith("| SCR-") or f"`{source}`" not in line:
                    continue
                cells = line.split("|")
                status = classify(row)
                cells[5] = f" {status} — {row['id']}؛ {NOTE[status]} "
                newline = "|".join(cells)
                if newline != line:
                    lines[index] = newline
                    changed += 1
                break
            else:
                print(f"WARN no register row for {app} {source}", file=sys.stderr)
    REGISTER.write_text("\n".join(lines) + "\n")
    print(f"register rows updated: {changed}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
