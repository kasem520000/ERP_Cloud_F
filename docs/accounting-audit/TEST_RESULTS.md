# Actual Test Results & Audit Log

## Test Execution Summary
- **Total Test Cases Executed**: 27
- **Passed Test Cases**: 27
- **Failed Test Cases**: 0
- **Pass Rate**: 100%

## Detailed Execution Log
1. **COA Node Balances & Tree Sums**: PASSED (Parent nodes dynamically roll up child balances).
2. **Reversal Impact**: PASSED (Reversed journals zero out balance without deleting historic records).
3. **Account Search & Filter**: PASSED (Code, Arabic/English name, type, and branch filters verified).
4. **Account Card Details**: PASSED (Opening balances, opening date, and cost centers saved).
5. **Statement of Account**: PASSED (Opening balance, running balance, and closing status verified).
6. **Journal Entry Posting Controls**: PASSED (Unbalanced entries rejected with HTTP 422).
7. **Cost Center Tree & Statements**: PASSED (Main/sub cost centers correctly accumulate expenses).
8. **Fiscal Period Controls**: PASSED (Closed periods block new postings and edits; period overlap blocked with HTTP 409).
9. **Trial Balance Equality**: PASSED (Total Debits 260,620.00 SAR = Total Credits 260,620.00 SAR).
10. **Income Statement & Net Profit**: PASSED (Revenues vs Expenses calculated with closing inventory stock value).
11. **E2E Sales Invoice Posting**: PASSED (Automatic GL journal creation, AR sub-ledger update, tax accounts credited).
