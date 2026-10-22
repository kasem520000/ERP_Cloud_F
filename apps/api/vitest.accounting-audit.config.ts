/** Opt-in financial acceptance tests: currently RED for documented audit defects.
 * Does not change the default suite or mark known failures as passing.
 */
import { defineConfig } from 'vitest/config';

import base from './vitest.config.js';

export default defineConfig({
  ...base,
  test: {
    ...base.test,
    include: ['test/accounting-audit-regressions.audit.ts'],
  },
});
