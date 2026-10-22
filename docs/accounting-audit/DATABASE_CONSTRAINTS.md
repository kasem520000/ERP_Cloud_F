# مراجع القيود والفهارس والعلاقات والمشغلات في الهجرات الرئيسية

استخراج سطري أولي، لا SQL محلل؛ قد يمتد التعريف أسطراً ويتغير بهجرة لاحقة. لا يشمل generated/down ولا يثبت الحالة النهائية لقاعدة حية.

جرد ساكن؛ ليس إثبات تشغيل. أعيد توليده بـ `python docs/accounting-audit/tools/discover.py`.

| المصدر | التعريف/مرجع السطر |
|---|---|
| packages/database/migrations/0000_platform_identity.sql:38 | CONSTRAINT tenants_status_check CHECK (status IN ('active', 'suspended', 'archived')) |
| packages/database/migrations/0000_platform_identity.sql:41 | CREATE UNIQUE INDEX IF NOT EXISTS tenants_code_key ON tenants (code); |
| packages/database/migrations/0000_platform_identity.sql:68 | CONSTRAINT users_status_check CHECK (status IN ('active', 'invited', 'suspended')) |
| packages/database/migrations/0000_platform_identity.sql:71 | CREATE UNIQUE INDEX IF NOT EXISTS users_email_key ON users (email); |
| packages/database/migrations/0000_platform_identity.sql:88 | user_id     uuid        NOT NULL REFERENCES users (id) ON DELETE CASCADE, |
| packages/database/migrations/0000_platform_identity.sql:100 | CREATE UNIQUE INDEX IF NOT EXISTS refresh_tokens_token_hash_key ON refresh_tokens (token_hash); |
| packages/database/migrations/0000_platform_identity.sql:101 | CREATE INDEX IF NOT EXISTS refresh_tokens_user_id_family_idx ON refresh_tokens (user_id, family); |
| packages/database/migrations/0000_platform_identity.sql:108 | tenant_id    uuid        NOT NULL REFERENCES tenants (id) ON DELETE CASCADE, |
| packages/database/migrations/0000_platform_identity.sql:109 | user_id      uuid        NOT NULL REFERENCES users (id) ON DELETE CASCADE, |
| packages/database/migrations/0000_platform_identity.sql:121 | CONSTRAINT memberships_status_check CHECK (status IN ('active', 'invited', 'suspended')) |
| packages/database/migrations/0000_platform_identity.sql:124 | CREATE UNIQUE INDEX IF NOT EXISTS memberships_tenant_user_key |
| packages/database/migrations/0000_platform_identity.sql:126 | CREATE INDEX IF NOT EXISTS memberships_tenant_id_idx ON memberships (tenant_id); |
| packages/database/migrations/0000_platform_identity.sql:127 | CREATE INDEX IF NOT EXISTS memberships_user_id_idx ON memberships (user_id); |
| packages/database/migrations/0000_platform_identity.sql:134 | tenant_id   uuid        NOT NULL REFERENCES tenants (id) ON DELETE CASCADE, |
| packages/database/migrations/0000_platform_identity.sql:147 | CREATE UNIQUE INDEX IF NOT EXISTS roles_tenant_id_name_key |
| packages/database/migrations/0000_platform_identity.sql:149 | CREATE INDEX IF NOT EXISTS roles_tenant_id_idx ON roles (tenant_id); |
| packages/database/migrations/0000_platform_identity.sql:155 | role_id         uuid NOT NULL REFERENCES roles (id) ON DELETE CASCADE, |
| packages/database/migrations/0000_platform_identity.sql:156 | permission_code text NOT NULL REFERENCES permissions (code) ON DELETE CASCADE, |
| packages/database/migrations/0000_platform_identity.sql:164 | membership_id uuid NOT NULL REFERENCES memberships (id) ON DELETE CASCADE, |
| packages/database/migrations/0000_platform_identity.sql:165 | role_id       uuid NOT NULL REFERENCES roles (id) ON DELETE CASCADE, |
| packages/database/migrations/0000_platform_identity.sql:169 | CREATE INDEX IF NOT EXISTS membership_roles_role_id_idx ON membership_roles (role_id); |
| packages/database/migrations/0000_platform_identity.sql:175 | tenant_id  uuid        NOT NULL REFERENCES tenants (id) ON DELETE CASCADE, |
| packages/database/migrations/0000_platform_identity.sql:202 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0000_platform_identity.sql:207 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0000_platform_identity.sql:212 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0000_platform_identity.sql:220 | WITH CHECK (EXISTS ( |
| packages/database/migrations/0000_platform_identity.sql:231 | WITH CHECK (EXISTS ( |
| packages/database/migrations/0001_platform_services.sql:23 | tenant_id      uuid        REFERENCES tenants (id) ON DELETE CASCADE, |
| packages/database/migrations/0001_platform_services.sql:24 | actor_user_id  uuid        REFERENCES users (id) ON DELETE SET NULL, |
| packages/database/migrations/0001_platform_services.sql:35 | CREATE INDEX IF NOT EXISTS audit_log_tenant_entity_idx     ON audit_log (tenant_id, entity, entity_id); |
| packages/database/migrations/0001_platform_services.sql:36 | CREATE INDEX IF NOT EXISTS audit_log_tenant_created_at_idx ON audit_log (tenant_id, created_at); |
| packages/database/migrations/0001_platform_services.sql:37 | CREATE INDEX IF NOT EXISTS audit_log_tenant_actor_idx      ON audit_log (tenant_id, actor_user_id); |
| packages/database/migrations/0001_platform_services.sql:45 | tenant_id     uuid        NOT NULL REFERENCES tenants (id) ON DELETE CASCADE, |
| packages/database/migrations/0001_platform_services.sql:55 | uploaded_by   uuid        REFERENCES users (id) ON DELETE SET NULL, |
| packages/database/migrations/0001_platform_services.sql:63 | CONSTRAINT files_status_check     CHECK (status IN ('pending', 'ready', 'deleted')), |
| packages/database/migrations/0001_platform_services.sql:64 | CONSTRAINT files_size_bytes_check CHECK (size_bytes > 0) |
| packages/database/migrations/0001_platform_services.sql:67 | CREATE UNIQUE INDEX IF NOT EXISTS files_bucket_object_key_key      ON files (bucket, object_key); |
| packages/database/migrations/0001_platform_services.sql:68 | CREATE INDEX IF NOT EXISTS files_tenant_entity_idx                 ON files (tenant_id, entity, entity_id); |
| packages/database/migrations/0001_platform_services.sql:69 | CREATE INDEX IF NOT EXISTS files_tenant_status_created_at_idx      ON files (tenant_id, status, created_at); |
| packages/database/migrations/0001_platform_services.sql:76 | tenant_id      uuid        NOT NULL REFERENCES tenants (id) ON DELETE CASCADE, |
| packages/database/migrations/0001_platform_services.sql:77 | membership_id  uuid        NOT NULL REFERENCES memberships (id) ON DELETE CASCADE, |
| packages/database/migrations/0001_platform_services.sql:84 | CREATE INDEX IF NOT EXISTS notifications_tenant_membership_idx |
| packages/database/migrations/0001_platform_services.sql:86 | CREATE INDEX IF NOT EXISTS notifications_tenant_unread_idx |
| packages/database/migrations/0001_platform_services.sql:95 | tenant_id     uuid        NOT NULL REFERENCES tenants (id) ON DELETE CASCADE, |
| packages/database/migrations/0001_platform_services.sql:106 | CONSTRAINT outbox_jobs_status_check CHECK (status IN ('pending', 'published', 'dead')), |
| packages/database/migrations/0001_platform_services.sql:107 | CONSTRAINT outbox_jobs_queue_check  CHECK (queue IN ('einvoice', 'notifications', 'reports-export', 'migration', 'maintenance')) |
| packages/database/migrations/0001_platform_services.sql:110 | CREATE INDEX IF NOT EXISTS outbox_jobs_status_run_at_idx      ON outbox_jobs (status, run_at); |
| packages/database/migrations/0001_platform_services.sql:111 | CREATE INDEX IF NOT EXISTS outbox_jobs_tenant_created_at_idx  ON outbox_jobs (tenant_id, created_at); |
| packages/database/migrations/0001_platform_services.sql:119 | tenant_id     uuid        NOT NULL REFERENCES tenants (id) ON DELETE CASCADE, |
| packages/database/migrations/0001_platform_services.sql:133 | CREATE INDEX IF NOT EXISTS idempotency_keys_expires_at_idx ON idempotency_keys (expires_at); |
| packages/database/migrations/0001_platform_services.sql:146 | tenant_id       uuid        NOT NULL REFERENCES tenants (id) ON DELETE CASCADE, |
| packages/database/migrations/0001_platform_services.sql:155 | CONSTRAINT document_sequences_padding_check CHECK (padding BETWEEN 1 AND 18), |
| packages/database/migrations/0001_platform_services.sql:156 | CONSTRAINT document_sequences_value_check   CHECK (current_value >= 0) |
| packages/database/migrations/0001_platform_services.sql:159 | CREATE UNIQUE INDEX IF NOT EXISTS document_sequences_scope_key |
| packages/database/migrations/0001_platform_services.sql:167 | CREATE INDEX IF NOT EXISTS document_sequences_tenant_doc_type_idx |
| packages/database/migrations/0001_platform_services.sql:192 | WITH CHECK (tenant_id IS NOT DISTINCT FROM nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0001_platform_services.sql:197 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0001_platform_services.sql:202 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0001_platform_services.sql:207 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0001_platform_services.sql:212 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0001_platform_services.sql:217 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0002_organization.sql:30 | tenant_id       uuid PRIMARY KEY REFERENCES tenants (id) ON DELETE CASCADE, |
| packages/database/migrations/0002_organization.sql:35 | logo_file_id    uuid        REFERENCES files (id) ON DELETE SET NULL, |
| packages/database/migrations/0002_organization.sql:48 | CONSTRAINT company_profiles_phones_check CHECK (jsonb_typeof(phones) = 'array') |
| packages/database/migrations/0002_organization.sql:51 | CREATE INDEX IF NOT EXISTS company_profiles_logo_file_idx ON company_profiles (logo_file_id); |
| packages/database/migrations/0002_organization.sql:61 | tenant_id      uuid        NOT NULL REFERENCES tenants (id) ON DELETE CASCADE, |
| packages/database/migrations/0002_organization.sql:82 | CREATE UNIQUE INDEX IF NOT EXISTS branches_tenant_code_key |
| packages/database/migrations/0002_organization.sql:84 | CREATE UNIQUE INDEX IF NOT EXISTS branches_tenant_default_key |
| packages/database/migrations/0002_organization.sql:86 | CREATE INDEX IF NOT EXISTS branches_tenant_active_idx ON branches (tenant_id, is_active); |
| packages/database/migrations/0002_organization.sql:87 | CREATE UNIQUE INDEX IF NOT EXISTS branches_tenant_legacy_key |
| packages/database/migrations/0002_organization.sql:96 | tenant_id             uuid        NOT NULL REFERENCES tenants (id) ON DELETE CASCADE, |
| packages/database/migrations/0002_organization.sql:97 | branch_id             uuid        NOT NULL REFERENCES branches (id) ON DELETE RESTRICT, |
| packages/database/migrations/0002_organization.sql:114 | CREATE UNIQUE INDEX IF NOT EXISTS warehouses_tenant_code_key |
| packages/database/migrations/0002_organization.sql:116 | CREATE UNIQUE INDEX IF NOT EXISTS warehouses_tenant_default_key |
| packages/database/migrations/0002_organization.sql:118 | CREATE INDEX IF NOT EXISTS warehouses_tenant_branch_idx ON warehouses (tenant_id, branch_id); |
| packages/database/migrations/0002_organization.sql:119 | CREATE UNIQUE INDEX IF NOT EXISTS warehouses_tenant_legacy_key |
| packages/database/migrations/0002_organization.sql:129 | tenant_id      uuid        NOT NULL REFERENCES tenants (id) ON DELETE CASCADE, |
| packages/database/migrations/0002_organization.sql:130 | branch_id      uuid        NOT NULL REFERENCES branches (id) ON DELETE RESTRICT, |
| packages/database/migrations/0002_organization.sql:148 | CONSTRAINT cash_locations_kind_check CHECK (kind IN ('safe', 'bank')), |
| packages/database/migrations/0002_organization.sql:151 | CONSTRAINT cash_locations_bank_block_check CHECK (kind = 'bank' OR bank IS NULL) |
| packages/database/migrations/0002_organization.sql:154 | CREATE UNIQUE INDEX IF NOT EXISTS cash_locations_tenant_kind_default_key |
| packages/database/migrations/0002_organization.sql:156 | CREATE INDEX IF NOT EXISTS cash_locations_tenant_branch_idx |
| packages/database/migrations/0002_organization.sql:158 | CREATE UNIQUE INDEX IF NOT EXISTS cash_locations_tenant_legacy_key |
| packages/database/migrations/0002_organization.sql:167 | tenant_id         uuid           NOT NULL REFERENCES tenants (id) ON DELETE CASCADE, |
| packages/database/migrations/0002_organization.sql:168 | cash_location_id  uuid           NOT NULL REFERENCES cash_locations (id) ON DELETE CASCADE, |
| packages/database/migrations/0002_organization.sql:175 | CREATE INDEX IF NOT EXISTS cash_location_balances_tenant_idx ON cash_location_balances (tenant_id); |
| packages/database/migrations/0002_organization.sql:181 | tenant_id    uuid        NOT NULL REFERENCES tenants (id) ON DELETE CASCADE, |
| packages/database/migrations/0002_organization.sql:194 | CONSTRAINT currencies_minor_units_check CHECK (minor_units BETWEEN 0 AND 4) |
| packages/database/migrations/0002_organization.sql:197 | CREATE UNIQUE INDEX IF NOT EXISTS currencies_tenant_base_key ON currencies (tenant_id) WHERE is_base; |
| packages/database/migrations/0002_organization.sql:206 | tenant_id       uuid            NOT NULL REFERENCES tenants (id) ON DELETE CASCADE, |
| packages/database/migrations/0002_organization.sql:218 | CONSTRAINT fx_rates_rate_check      CHECK (rate > 0), |
| packages/database/migrations/0002_organization.sql:219 | CONSTRAINT fx_rates_distinct_check  CHECK (from_code <> to_code) |
| packages/database/migrations/0002_organization.sql:222 | CREATE UNIQUE INDEX IF NOT EXISTS fx_rates_tenant_pair_from_key |
| packages/database/migrations/0002_organization.sql:224 | CREATE INDEX IF NOT EXISTS fx_rates_tenant_pair_effective_idx |
| packages/database/migrations/0002_organization.sql:232 | tenant_id      uuid        NOT NULL REFERENCES tenants (id) ON DELETE CASCADE, |
| packages/database/migrations/0002_organization.sql:248 | CREATE UNIQUE INDEX IF NOT EXISTS price_lists_tenant_name_key |
| packages/database/migrations/0002_organization.sql:250 | CREATE UNIQUE INDEX IF NOT EXISTS price_lists_tenant_default_key |
| packages/database/migrations/0002_organization.sql:252 | CREATE UNIQUE INDEX IF NOT EXISTS price_lists_tenant_legacy_key |
| packages/database/migrations/0002_organization.sql:263 | tenant_id      uuid           NOT NULL REFERENCES tenants (id) ON DELETE CASCADE, |
| packages/database/migrations/0002_organization.sql:264 | price_list_id  uuid           NOT NULL REFERENCES price_lists (id) ON DELETE CASCADE, |
| packages/database/migrations/0002_organization.sql:273 | CONSTRAINT price_list_items_unit_price_check CHECK (unit_price >= 0), |
| packages/database/migrations/0002_organization.sql:274 | CONSTRAINT price_list_items_min_qty_check    CHECK (min_qty >= 0) |
| packages/database/migrations/0002_organization.sql:277 | CREATE UNIQUE INDEX IF NOT EXISTS price_list_items_scope_key |
| packages/database/migrations/0002_organization.sql:283 | CREATE INDEX IF NOT EXISTS price_list_items_list_idx   ON price_list_items (price_list_id, item_id); |
| packages/database/migrations/0002_organization.sql:284 | CREATE INDEX IF NOT EXISTS price_list_items_tenant_idx ON price_list_items (tenant_id); |
| packages/database/migrations/0002_organization.sql:295 | tenant_id      uuid        NOT NULL REFERENCES tenants (id) ON DELETE CASCADE, |
| packages/database/migrations/0002_organization.sql:296 | branch_id      uuid        REFERENCES branches (id) ON DELETE CASCADE, |
| packages/database/migrations/0002_organization.sql:306 | CONSTRAINT branch_posting_profiles_mapping_check CHECK (jsonb_typeof(mapping) = 'object') |
| packages/database/migrations/0002_organization.sql:309 | CREATE UNIQUE INDEX IF NOT EXISTS branch_posting_profiles_scope_key |
| packages/database/migrations/0002_organization.sql:315 | CREATE INDEX IF NOT EXISTS branch_posting_profiles_tenant_doc_type_idx |
| packages/database/migrations/0002_organization.sql:330 | FOREIGN KEY (branch_id) REFERENCES branches (id) ON DELETE RESTRICT; |
| packages/database/migrations/0002_organization.sql:363 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0002_organization.sql:368 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0002_organization.sql:373 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0002_organization.sql:378 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0002_organization.sql:383 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0002_organization.sql:388 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0002_organization.sql:393 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0002_organization.sql:398 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0002_organization.sql:403 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0002_organization.sql:408 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0003_catalog.sql:3 | CREATE TABLE IF NOT EXISTS item_categories (id uuid PRIMARY KEY, tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, parent_id uuid, code text NOT NULL, name_ar text NOT NULL, name_en text, sort_order int NOT NULL DEFAULT 0, show_in_pos boolean NOT NULL DEFAULT true, show_in_sale boolean NOT NULL DEFAULT true, show_in_purch boolean NOT NULL DEFAULT true, kitchen_printer text, print_separately boolean NOT NULL DEFAULT false, branch_id uuid, created_at timestamptz NOT NULL DEFAULT now(), created_by uuid, updated_at timestamptz, updated_by uuid, deleted_at timestamptz, deleted_by uuid, version int NOT NULL DEFAULT 1, legacy_source text, legacy_id text); |
| packages/database/migrations/0003_catalog.sql:4 | CREATE TABLE IF NOT EXISTS units_of_measure (id uuid PRIMARY KEY, tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, code text NOT NULL, name_ar text NOT NULL, name_en text, created_at timestamptz NOT NULL DEFAULT now(), created_by uuid, updated_at timestamptz, updated_by uuid, deleted_at timestamptz, deleted_by uuid, version int NOT NULL DEFAULT 1, legacy_source text, legacy_id text); |
| packages/database/migrations/0003_catalog.sql:5 | CREATE TABLE IF NOT EXISTS tax_groups (id uuid PRIMARY KEY, tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, name_ar text NOT NULL, name_en text, rate numeric(7,4) NOT NULL CHECK(rate >= 0 AND rate <= 100), vat_account_id uuid, is_inclusive_default boolean NOT NULL DEFAULT false, created_at timestamptz NOT NULL DEFAULT now(), created_by uuid, updated_at timestamptz, updated_by uuid, deleted_at timestamptz, deleted_by uuid, version int NOT NULL DEFAULT 1, legacy_source text, legacy_id text); |
| packages/database/migrations/0003_catalog.sql:6 | CREATE TABLE IF NOT EXISTS items (id uuid PRIMARY KEY, tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, sku text NOT NULL, barcode text, name_ar text NOT NULL, name_en text, category_id uuid NOT NULL REFERENCES item_categories(id), base_unit_id uuid NOT NULL REFERENCES units_of_measure(id), kind text NOT NULL DEFAULT 'stock' CHECK(kind IN ('stock','service','composite')), sale_price numeric(20,4), purchase_price numeric(20,4), tax_group_id uuid REFERENCES tax_groups(id), min_qty numeric(20,4) NOT NULL DEFAULT 0, max_qty numeric(20,4), max_discount_pct numeric(7,4), max_discount_amt numeric(20,4), track_lot boolean NOT NULL DEFAULT false, track_serial boolean NOT NULL DEFAULT false, weighted_scale boolean NOT NULL DEFAULT false, show_in_pos boolean NOT NULL DEFAULT true, egy_item_code text, egy_code_type text, withholding_rate numeric(7,4), image_file_id uuid, kind_flags jsonb NOT NULL DEFAULT '{}', created_at timestamptz NOT NULL DEFAULT now(), created_by uuid, updated_at timestamptz, updated_by uuid, deleted_at timestamptz, deleted_by uuid, version int NOT NULL DEFAULT 1, legacy_source text, legacy_id text); |
| packages/database/migrations/0003_catalog.sql:7 | CREATE TABLE IF NOT EXISTS item_units (item_id uuid NOT NULL REFERENCES items(id) ON DELETE CASCADE, unit_id uuid NOT NULL REFERENCES units_of_measure(id), ratio numeric(20,6) NOT NULL CHECK(ratio > 0), barcode text, sale_price numeric(20,4), purchase_price numeric(20,4), is_default_purchase boolean NOT NULL DEFAULT false, is_default_sale boolean NOT NULL DEFAULT false, PRIMARY KEY(item_id,unit_id)); |
| packages/database/migrations/0003_catalog.sql:8 | CREATE TABLE IF NOT EXISTS item_barcodes (tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, barcode text NOT NULL, item_id uuid NOT NULL REFERENCES items(id) ON DELETE CASCADE, unit_id uuid REFERENCES units_of_measure(id), created_at timestamptz NOT NULL DEFAULT now(), PRIMARY KEY(tenant_id,barcode)); |
| packages/database/migrations/0003_catalog.sql:9 | CREATE TABLE IF NOT EXISTS item_alternative_codes (id uuid PRIMARY KEY, tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, item_id uuid NOT NULL REFERENCES items(id) ON DELETE CASCADE, code text NOT NULL, notes text, created_at timestamptz NOT NULL DEFAULT now(), created_by uuid, updated_at timestamptz, updated_by uuid, deleted_at timestamptz, deleted_by uuid, version int NOT NULL DEFAULT 1); |
| packages/database/migrations/0003_catalog.sql:10 | CREATE TABLE IF NOT EXISTS item_components (item_id uuid NOT NULL REFERENCES items(id) ON DELETE CASCADE, component_item_id uuid NOT NULL REFERENCES items(id), qty numeric(20,4) NOT NULL CHECK(qty > 0), unit_id uuid NOT NULL REFERENCES units_of_measure(id), kind text NOT NULL DEFAULT 'component', PRIMARY KEY(item_id,component_item_id), CHECK(item_id <> component_item_id)); |
| packages/database/migrations/0003_catalog.sql:11 | CREATE TABLE IF NOT EXISTS item_price_history (id uuid PRIMARY KEY, tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, item_id uuid NOT NULL REFERENCES items(id), unit_id uuid, prices jsonb NOT NULL, recorded_by uuid, recorded_at timestamptz NOT NULL DEFAULT now()); |
| packages/database/migrations/0003_catalog.sql:12 | CREATE TABLE IF NOT EXISTS item_details (item_id uuid PRIMARY KEY REFERENCES items(id) ON DELETE CASCADE, tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, supplier_ref text, importer text, net_weight numeric(20,4), lead_time text, notes text, created_at timestamptz NOT NULL DEFAULT now(), created_by uuid, updated_at timestamptz, updated_by uuid, deleted_at timestamptz, deleted_by uuid, version int NOT NULL DEFAULT 1); |
| packages/database/migrations/0003_catalog.sql:13 | CREATE UNIQUE INDEX IF NOT EXISTS item_categories_tenant_code_key ON item_categories(tenant_id,code) WHERE deleted_at IS NULL; |
| packages/database/migrations/0003_catalog.sql:14 | CREATE UNIQUE INDEX IF NOT EXISTS units_of_measure_tenant_code_key ON units_of_measure(tenant_id,code) WHERE deleted_at IS NULL; |
| packages/database/migrations/0003_catalog.sql:15 | CREATE UNIQUE INDEX IF NOT EXISTS items_tenant_sku_key ON items(tenant_id,sku) WHERE deleted_at IS NULL; |
| packages/database/migrations/0003_catalog.sql:16 | CREATE UNIQUE INDEX IF NOT EXISTS item_alt_codes_tenant_code_key ON item_alternative_codes(tenant_id,code) WHERE deleted_at IS NULL; |
| packages/database/migrations/0003_catalog.sql:17 | CREATE INDEX IF NOT EXISTS items_name_trgm_idx ON items USING gin ((name_ar \|\| ' ' \|\| coalesce(name_en,'')) gin_trgm_ops); |
| packages/database/migrations/0003_catalog.sql:18 | CREATE INDEX IF NOT EXISTS items_tenant_category_idx ON items(tenant_id,category_id); |
| packages/database/migrations/0003_catalog.sql:19 | CREATE INDEX IF NOT EXISTS items_tenant_barcode_idx ON items(tenant_id,barcode); |
| packages/database/migrations/0003_catalog.sql:20 | DO $$ DECLARE t text; BEGIN FOREACH t IN ARRAY ARRAY['item_categories','units_of_measure','tax_groups','items','item_barcodes','item_alternative_codes','item_price_history','item_details'] LOOP EXECUTE format('ALTER TABLE %I ENABLE ROW LEVEL SECURITY',t); EXECUTE format('ALTER TABLE %I FORCE ROW LEVEL SECURITY',t); EXECUTE format('DROP POLICY IF EXISTS tenant_isolation ON %I',t); EXECUTE format('CREATE POLICY tenant_isolation ON %I USING (tenant_id = current_setting(''app.tenant_id'', true)::uuid) WITH CHECK (tenant_id = current_setting(''app.tenant_id'', true)::uuid)',t); END LOOP; END $$; |
| packages/database/migrations/0003_catalog.sql:26 | CREATE INDEX IF NOT EXISTS price_list_items_item_idx ON price_list_items(item_id); |
| packages/database/migrations/0004_accounting.sql:5 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0004_accounting.sql:12 | type text NOT NULL CHECK (type IN ('asset','liability','equity','revenue','expense')), |
| packages/database/migrations/0004_accounting.sql:14 | normal_balance text NOT NULL CHECK (normal_balance IN ('debit','credit')), |
| packages/database/migrations/0004_accounting.sql:17 | branch_id uuid REFERENCES branches(id) ON DELETE RESTRICT, |
| packages/database/migrations/0004_accounting.sql:23 | CREATE UNIQUE INDEX IF NOT EXISTS accounts_tenant_code_key ON accounts(tenant_id, code) WHERE deleted_at IS NULL; |
| packages/database/migrations/0004_accounting.sql:24 | CREATE INDEX IF NOT EXISTS accounts_tenant_path_gist_idx ON accounts USING gist(path); |
| packages/database/migrations/0004_accounting.sql:25 | CREATE INDEX IF NOT EXISTS accounts_tenant_parent_idx ON accounts(tenant_id, parent_id); |
| packages/database/migrations/0004_accounting.sql:29 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0004_accounting.sql:31 | status text NOT NULL DEFAULT 'open' CHECK (status IN ('open','closed')), |
| packages/database/migrations/0004_accounting.sql:33 | CHECK (start_date < end_date) |
| packages/database/migrations/0004_accounting.sql:35 | CREATE INDEX IF NOT EXISTS fiscal_years_tenant_dates_idx ON fiscal_years(tenant_id, start_date, end_date); |
| packages/database/migrations/0004_accounting.sql:39 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0004_accounting.sql:40 | fiscal_year_id uuid NOT NULL REFERENCES fiscal_years(id) ON DELETE CASCADE, |
| packages/database/migrations/0004_accounting.sql:42 | status text NOT NULL DEFAULT 'open' CHECK (status IN ('open','closed')), |
| packages/database/migrations/0004_accounting.sql:45 | CHECK (start_date < end_date) |
| packages/database/migrations/0004_accounting.sql:47 | CREATE INDEX IF NOT EXISTS fiscal_periods_year_dates_idx ON fiscal_periods(fiscal_year_id, start_date, end_date); |
| packages/database/migrations/0004_accounting.sql:50 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0004_accounting.sql:51 | period_id uuid NOT NULL REFERENCES fiscal_periods(id) ON DELETE CASCADE, |
| packages/database/migrations/0004_accounting.sql:59 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0004_accounting.sql:60 | branch_id uuid NOT NULL REFERENCES branches(id) ON DELETE RESTRICT, |
| packages/database/migrations/0004_accounting.sql:61 | fiscal_period_id uuid NOT NULL REFERENCES fiscal_periods(id) ON DELETE RESTRICT, |
| packages/database/migrations/0004_accounting.sql:63 | kind text NOT NULL DEFAULT 'manual' CHECK (kind IN ('manual','auto','reversal')), |
| packages/database/migrations/0004_accounting.sql:64 | status text NOT NULL DEFAULT 'draft' CHECK (status IN ('draft','posted','void')), |
| packages/database/migrations/0004_accounting.sql:70 | CREATE INDEX IF NOT EXISTS journal_entries_tenant_date_idx ON journal_entries(tenant_id, date); |
| packages/database/migrations/0004_accounting.sql:71 | CREATE INDEX IF NOT EXISTS journal_entries_source_idx ON journal_entries(tenant_id, source_type, source_id); |
| packages/database/migrations/0004_accounting.sql:72 | CREATE UNIQUE INDEX IF NOT EXISTS journal_entries_idempotency_key ON journal_entries(tenant_id, idempotency_key) WHERE idempotency_key IS NOT NULL; |
| packages/database/migrations/0004_accounting.sql:75 | entry_id uuid NOT NULL REFERENCES journal_entries(id) ON DELETE RESTRICT, |
| packages/database/migrations/0004_accounting.sql:77 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0004_accounting.sql:78 | account_id uuid NOT NULL REFERENCES accounts(id) ON DELETE RESTRICT, |
| packages/database/migrations/0004_accounting.sql:79 | debit numeric(20,4) NOT NULL DEFAULT 0 CHECK (debit >= 0), |
| packages/database/migrations/0004_accounting.sql:80 | credit numeric(20,4) NOT NULL DEFAULT 0 CHECK (credit >= 0), |
| packages/database/migrations/0004_accounting.sql:84 | CHECK ((debit > 0 AND credit = 0) OR (credit > 0 AND debit = 0)) |
| packages/database/migrations/0004_accounting.sql:86 | CREATE INDEX IF NOT EXISTS journal_lines_tenant_account_idx ON journal_entry_lines(tenant_id, account_id); |
| packages/database/migrations/0004_accounting.sql:87 | CREATE INDEX IF NOT EXISTS journal_lines_tenant_party_idx ON journal_entry_lines(tenant_id, party_id); |
| packages/database/migrations/0004_accounting.sql:91 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0004_accounting.sql:93 | branch_id uuid REFERENCES branches(id) ON DELETE RESTRICT, |
| packages/database/migrations/0004_accounting.sql:97 | CREATE UNIQUE INDEX IF NOT EXISTS cost_centers_tenant_code_key ON cost_centers(tenant_id, code) WHERE deleted_at IS NULL; |
| packages/database/migrations/0004_accounting.sql:101 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0004_accounting.sql:102 | fiscal_year_id uuid NOT NULL REFERENCES fiscal_years(id) ON DELETE RESTRICT, |
| packages/database/migrations/0004_accounting.sql:103 | account_id uuid NOT NULL REFERENCES accounts(id) ON DELETE RESTRICT, |
| packages/database/migrations/0004_accounting.sql:105 | debit numeric(20,4) NOT NULL DEFAULT 0 CHECK (debit >= 0), |
| packages/database/migrations/0004_accounting.sql:106 | credit numeric(20,4) NOT NULL DEFAULT 0 CHECK (credit >= 0), |
| packages/database/migrations/0004_accounting.sql:108 | status text NOT NULL DEFAULT 'draft' CHECK (status IN ('draft','posted')), |
| packages/database/migrations/0004_accounting.sql:109 | journal_entry_id uuid REFERENCES journal_entries(id) ON DELETE RESTRICT, |
| packages/database/migrations/0004_accounting.sql:111 | CHECK ((debit > 0 AND credit = 0) OR (credit > 0 AND debit = 0) OR (debit = 0 AND credit = 0)) |
| packages/database/migrations/0004_accounting.sql:113 | CREATE UNIQUE INDEX IF NOT EXISTS opening_balances_scope_key ON opening_balances(tenant_id, fiscal_year_id, account_id, party_id, item_id, warehouse_id); |
| packages/database/migrations/0004_accounting.sql:115 | CREATE OR REPLACE FUNCTION prevent_posted_journal_mutation() RETURNS trigger LANGUAGE plpgsql AS $$ |
| packages/database/migrations/0004_accounting.sql:123 | CREATE TRIGGER journal_entries_posted_immutable BEFORE UPDATE OR DELETE ON journal_entries FOR EACH ROW EXECUTE FUNCTION prevent_posted_journal_mutation(); |
| packages/database/migrations/0004_accounting.sql:125 | DO $$ DECLARE t text; BEGIN FOREACH t IN ARRAY ARRAY['accounts','fiscal_years','fiscal_periods','period_module_locks','journal_entries','journal_entry_lines','cost_centers','opening_balances'] LOOP EXECUTE format('ALTER TABLE %I ENABLE ROW LEVEL SECURITY', t); EXECUTE format('ALTER TABLE %I FORCE ROW LEVEL SECURITY', t); EXECUTE format('DROP POLICY IF EXISTS tenant_isolation ON %I', t); EXECUTE format('CREATE POLICY tenant_isolation ON %I USING (tenant_id = current_setting(''app.tenant_id'', true)::uuid) WITH CHECK (tenant_id = current_setting(''app.tenant_id'', true)::uuid)', t); END LOOP; END $$; |
| packages/database/migrations/0005_parties.sql:1 | CREATE TABLE IF NOT EXISTS parties (id uuid PRIMARY KEY, tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, code text NOT NULL, kind text NOT NULL CHECK (kind IN ('customer','supplier','both')), name text NOT NULL, legal_name text, tax_no text, national_id text, address jsonb, phone text, email text, receivable_account_id uuid REFERENCES accounts(id) ON DELETE RESTRICT, payable_account_id uuid REFERENCES accounts(id) ON DELETE RESTRICT, credit_limit numeric(20,4) NOT NULL DEFAULT 0 CHECK (credit_limit >= 0), is_owner boolean NOT NULL DEFAULT false, is_contractor boolean NOT NULL DEFAULT false, branch_id uuid REFERENCES branches(id) ON DELETE RESTRICT, created_at timestamptz NOT NULL DEFAULT now(), created_by uuid, updated_at timestamptz, updated_by uuid, version int NOT NULL DEFAULT 1, deleted_at timestamptz, deleted_by uuid); |
| packages/database/migrations/0005_parties.sql:2 | CREATE UNIQUE INDEX IF NOT EXISTS parties_tenant_code_key ON parties(tenant_id, code) WHERE deleted_at IS NULL; |
| packages/database/migrations/0005_parties.sql:3 | CREATE INDEX IF NOT EXISTS parties_tenant_tax_idx ON parties(tenant_id, tax_no); |
| packages/database/migrations/0005_parties.sql:4 | CREATE INDEX IF NOT EXISTS parties_tenant_kind_idx ON parties(tenant_id, kind); |
| packages/database/migrations/0005_parties.sql:5 | CREATE TABLE IF NOT EXISTS party_contacts (party_id uuid NOT NULL REFERENCES parties(id) ON DELETE CASCADE, id uuid NOT NULL, tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, name text NOT NULL, role text, phone text, email text, is_primary boolean NOT NULL DEFAULT false, created_at timestamptz NOT NULL DEFAULT now(), created_by uuid, updated_at timestamptz, updated_by uuid, version int NOT NULL DEFAULT 1, deleted_at timestamptz, deleted_by uuid, PRIMARY KEY (party_id, id)); |
| packages/database/migrations/0005_parties.sql:6 | CREATE INDEX IF NOT EXISTS party_contacts_tenant_party_idx ON party_contacts(tenant_id, party_id); |
| packages/database/migrations/0005_parties.sql:7 | CREATE TABLE IF NOT EXISTS payment_allocations (id uuid PRIMARY KEY, tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, party_id uuid NOT NULL REFERENCES parties(id) ON DELETE RESTRICT, voucher_id uuid, invoice_kind text NOT NULL, invoice_id uuid NOT NULL, amount numeric(20,4) NOT NULL CHECK (amount > 0), allocated_at timestamptz NOT NULL DEFAULT now(), created_by uuid); |
| packages/database/migrations/0005_parties.sql:8 | CREATE INDEX IF NOT EXISTS payment_allocations_invoice_idx ON payment_allocations(tenant_id, invoice_kind, invoice_id); |
| packages/database/migrations/0005_parties.sql:9 | CREATE INDEX IF NOT EXISTS payment_allocations_party_idx ON payment_allocations(tenant_id, party_id); |
| packages/database/migrations/0005_parties.sql:10 | DO $$ DECLARE t text; BEGIN FOREACH t IN ARRAY ARRAY['parties','party_contacts','payment_allocations'] LOOP EXECUTE format('ALTER TABLE %I ENABLE ROW LEVEL SECURITY', t); EXECUTE format('ALTER TABLE %I FORCE ROW LEVEL SECURITY', t); EXECUTE format('DROP POLICY IF EXISTS %I_tenant_isolation ON %I', t, t); EXECUTE format('CREATE POLICY %I_tenant_isolation ON %I USING (tenant_id = current_setting(''app.tenant_id'', true)::uuid) WITH CHECK (tenant_id = current_setting(''app.tenant_id'', true)::uuid)', t, t); END LOOP; END $$; |
| packages/database/migrations/0006_inventory.sql:1 | CREATE TABLE IF NOT EXISTS inventory_transactions (id uuid PRIMARY KEY, tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, item_id uuid NOT NULL REFERENCES items(id) ON DELETE RESTRICT, warehouse_id uuid NOT NULL REFERENCES warehouses(id) ON DELETE RESTRICT, occurred_at timestamptz NOT NULL, doc_type text NOT NULL, doc_id uuid NOT NULL, line_id uuid, direction text NOT NULL CHECK (direction IN ('in','out')), qty numeric(20,4) NOT NULL CHECK (qty > 0), base_qty numeric(20,4) NOT NULL CHECK (base_qty > 0), unit_cost numeric(20,4) NOT NULL CHECK (unit_cost >= 0), total_cost numeric(20,4) NOT NULL CHECK (total_cost >= 0), costing text NOT NULL, lot_id uuid, serial_id uuid, metadata jsonb NOT NULL DEFAULT '{}', created_at timestamptz NOT NULL DEFAULT now(), created_by uuid); |
| packages/database/migrations/0006_inventory.sql:2 | CREATE INDEX IF NOT EXISTS inventory_transactions_scope_idx ON inventory_transactions(tenant_id, item_id, warehouse_id, occurred_at); |
| packages/database/migrations/0006_inventory.sql:3 | CREATE UNIQUE INDEX IF NOT EXISTS inventory_transactions_document_line_key ON inventory_transactions(tenant_id, doc_type, doc_id, line_id); |
| packages/database/migrations/0006_inventory.sql:4 | CREATE INDEX IF NOT EXISTS inventory_transactions_lot_idx ON inventory_transactions(tenant_id, lot_id); |
| packages/database/migrations/0006_inventory.sql:5 | CREATE INDEX IF NOT EXISTS inventory_transactions_serial_idx ON inventory_transactions(tenant_id, serial_id); |
| packages/database/migrations/0006_inventory.sql:6 | CREATE TABLE IF NOT EXISTS stock_balances (tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, item_id uuid NOT NULL REFERENCES items(id) ON DELETE RESTRICT, warehouse_id uuid NOT NULL REFERENCES warehouses(id) ON DELETE RESTRICT, quantity numeric(20,4) NOT NULL DEFAULT 0, value numeric(20,4) NOT NULL DEFAULT 0, average_cost numeric(20,4) NOT NULL DEFAULT 0, version int NOT NULL DEFAULT 1, updated_at timestamptz NOT NULL DEFAULT now(), PRIMARY KEY(tenant_id, item_id, warehouse_id)); |
| packages/database/migrations/0006_inventory.sql:7 | CREATE TABLE IF NOT EXISTS stock_adjustments (id uuid PRIMARY KEY, tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, warehouse_id uuid NOT NULL REFERENCES warehouses(id), branch_id uuid NOT NULL, number text NOT NULL, status text NOT NULL DEFAULT 'draft' CHECK (status IN ('draft','approved','cancelled')), reason text NOT NULL, approved_at timestamptz, approved_by uuid, journal_entry_id uuid, created_at timestamptz NOT NULL DEFAULT now(), created_by uuid, updated_at timestamptz, updated_by uuid, version int NOT NULL DEFAULT 1, legacy_source text, legacy_id text); |
| packages/database/migrations/0006_inventory.sql:8 | CREATE UNIQUE INDEX IF NOT EXISTS stock_adjustments_tenant_number_key ON stock_adjustments(tenant_id, number); |
| packages/database/migrations/0006_inventory.sql:9 | CREATE TABLE IF NOT EXISTS stock_adjustment_lines (adjustment_id uuid NOT NULL REFERENCES stock_adjustments(id) ON DELETE CASCADE, line_no int NOT NULL, tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, item_id uuid NOT NULL REFERENCES items(id), expected_qty numeric(20,4) NOT NULL, counted_qty numeric(20,4) NOT NULL, unit_cost numeric(20,4), lot_id uuid, note text, PRIMARY KEY(adjustment_id, line_no)); |
| packages/database/migrations/0006_inventory.sql:10 | CREATE TABLE IF NOT EXISTS stock_transfers (id uuid PRIMARY KEY, tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, from_warehouse_id uuid NOT NULL REFERENCES warehouses(id), to_warehouse_id uuid NOT NULL REFERENCES warehouses(id), number text NOT NULL, status text NOT NULL DEFAULT 'draft' CHECK (status IN ('draft','sent','partially_received','received','cancelled')), sent_at timestamptz, received_at timestamptz, cancelled_at timestamptz, created_at timestamptz NOT NULL DEFAULT now(), created_by uuid, updated_at timestamptz, updated_by uuid, version int NOT NULL DEFAULT 1, legacy_source text, legacy_id text, CHECK (from_warehouse_id <> to_warehouse_id)); |
| packages/database/migrations/0006_inventory.sql:11 | CREATE UNIQUE INDEX IF NOT EXISTS stock_transfers_tenant_number_key ON stock_transfers(tenant_id, number); |
| packages/database/migrations/0006_inventory.sql:12 | CREATE TABLE IF NOT EXISTS stock_transfer_lines (transfer_id uuid NOT NULL REFERENCES stock_transfers(id) ON DELETE CASCADE, line_no int NOT NULL, tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, item_id uuid NOT NULL REFERENCES items(id), qty numeric(20,4) NOT NULL CHECK (qty > 0), sent_qty numeric(20,4) NOT NULL DEFAULT 0, received_qty numeric(20,4) NOT NULL DEFAULT 0, unit_cost numeric(20,4) NOT NULL DEFAULT 0, lot_id uuid, serial_ids jsonb NOT NULL DEFAULT '[]', PRIMARY KEY(transfer_id, line_no)); |
| packages/database/migrations/0006_inventory.sql:13 | CREATE TABLE IF NOT EXISTS item_lots (id uuid PRIMARY KEY, tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, item_id uuid NOT NULL REFERENCES items(id), lot_no text NOT NULL, expiry_date date, received_at timestamptz, created_at timestamptz NOT NULL DEFAULT now(), created_by uuid, updated_at timestamptz, updated_by uuid, version int NOT NULL DEFAULT 1, deleted_at timestamptz, deleted_by uuid); |
| packages/database/migrations/0006_inventory.sql:14 | CREATE UNIQUE INDEX IF NOT EXISTS item_lots_tenant_item_lot_key ON item_lots(tenant_id, item_id, lot_no) WHERE deleted_at IS NULL; |
| packages/database/migrations/0006_inventory.sql:15 | CREATE TABLE IF NOT EXISTS item_serials (id uuid PRIMARY KEY, tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, item_id uuid NOT NULL REFERENCES items(id), serial_no text NOT NULL, lot_id uuid, status text NOT NULL DEFAULT 'available', warehouse_id uuid, created_at timestamptz NOT NULL DEFAULT now(), created_by uuid, updated_at timestamptz, updated_by uuid, version int NOT NULL DEFAULT 1, deleted_at timestamptz, deleted_by uuid); |
| packages/database/migrations/0006_inventory.sql:16 | CREATE UNIQUE INDEX IF NOT EXISTS item_serials_tenant_serial_key ON item_serials(tenant_id, serial_no) WHERE deleted_at IS NULL; |
| packages/database/migrations/0006_inventory.sql:17 | CREATE TABLE IF NOT EXISTS invoice_item_attributes (id uuid PRIMARY KEY, tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, document_type text NOT NULL, document_id uuid NOT NULL, line_id uuid NOT NULL, attributes jsonb NOT NULL DEFAULT '{}', created_at timestamptz NOT NULL DEFAULT now(), created_by uuid, updated_at timestamptz, updated_by uuid, version int NOT NULL DEFAULT 1); |
| packages/database/migrations/0006_inventory.sql:18 | CREATE UNIQUE INDEX IF NOT EXISTS invoice_item_attributes_line_key ON invoice_item_attributes(tenant_id, document_type, document_id, line_id); |
| packages/database/migrations/0006_inventory.sql:19 | CREATE OR REPLACE FUNCTION prevent_inventory_transaction_mutation() RETURNS trigger LANGUAGE plpgsql AS $$ BEGIN RAISE EXCEPTION 'inventory ledger is append-only' USING ERRCODE = '42501'; END; $$; |
| packages/database/migrations/0006_inventory.sql:21 | CREATE TRIGGER inventory_transactions_immutable BEFORE UPDATE OR DELETE ON inventory_transactions FOR EACH ROW EXECUTE FUNCTION prevent_inventory_transaction_mutation(); |
| packages/database/migrations/0007_sales.sql:1 | CREATE TABLE IF NOT EXISTS sales_invoices (id uuid PRIMARY KEY, tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, branch_id uuid NOT NULL REFERENCES branches(id), warehouse_id uuid REFERENCES warehouses(id), party_id uuid REFERENCES parties(id), salesman_id uuid, kind text NOT NULL DEFAULT 'sale', status text NOT NULL DEFAULT 'draft', number text, currency text NOT NULL DEFAULT 'SAR', price_includes_vat boolean NOT NULL DEFAULT false, cash_customer_name text, cash_customer_mobile text, invoice_discount numeric(20,4) NOT NULL DEFAULT 0, extra_tax numeric(20,4) NOT NULL DEFAULT 0, withholding numeric(20,4) NOT NULL DEFAULT 0, subtotal numeric(20,4) NOT NULL DEFAULT 0, tax_total numeric(20,4) NOT NULL DEFAULT 0, total numeric(20,4) NOT NULL DEFAULT 0, paid_total numeric(20,4) NOT NULL DEFAULT 0, payment_status text NOT NULL DEFAULT 'unpaid', cost_total numeric(20,4) NOT NULL DEFAULT 0, profit numeric(20,4) NOT NULL DEFAULT 0, zatca_uuid uuid, zatca_hash text, zatca_qr text, zatca_status text, posted_at timestamptz, voided_at timestamptz, created_at timestamptz NOT NULL DEFAULT now(), created_by uuid, updated_at timestamptz, updated_by uuid, version int NOT NULL DEFAULT 1, legacy_source text, legacy_id text); |
| packages/database/migrations/0007_sales.sql:2 | CREATE UNIQUE INDEX IF NOT EXISTS sales_invoices_tenant_number_key ON sales_invoices(tenant_id, number) WHERE number IS NOT NULL; |
| packages/database/migrations/0007_sales.sql:3 | CREATE INDEX IF NOT EXISTS sales_invoices_scope_idx ON sales_invoices(tenant_id, branch_id, status); |
| packages/database/migrations/0007_sales.sql:4 | CREATE INDEX IF NOT EXISTS sales_invoices_party_idx ON sales_invoices(tenant_id, party_id); |
| packages/database/migrations/0007_sales.sql:5 | CREATE TABLE IF NOT EXISTS sales_invoice_lines (id uuid PRIMARY KEY, tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, invoice_id uuid NOT NULL REFERENCES sales_invoices(id) ON DELETE CASCADE, line_no int NOT NULL, item_id uuid REFERENCES items(id), tax_group_id uuid REFERENCES tax_groups(id), description text, quantity numeric(20,4) NOT NULL CHECK (quantity > 0), unit_price numeric(20,4) NOT NULL CHECK (unit_price >= 0), discount_rate numeric(20,4) NOT NULL DEFAULT 0, discount_amount numeric(20,4) NOT NULL DEFAULT 0, tax_rate numeric(20,4) NOT NULL DEFAULT 0, net numeric(20,4) NOT NULL DEFAULT 0, tax numeric(20,4) NOT NULL DEFAULT 0, total numeric(20,4) NOT NULL DEFAULT 0, cost_total numeric(20,4) NOT NULL DEFAULT 0, metadata jsonb NOT NULL DEFAULT '{}', created_at timestamptz NOT NULL DEFAULT now(), created_by uuid, updated_at timestamptz, updated_by uuid, version int NOT NULL DEFAULT 1); |
| packages/database/migrations/0007_sales.sql:6 | CREATE UNIQUE INDEX IF NOT EXISTS sales_invoice_lines_invoice_line_key ON sales_invoice_lines(invoice_id, line_no); |
| packages/database/migrations/0007_sales.sql:7 | CREATE INDEX IF NOT EXISTS sales_invoice_lines_scope_idx ON sales_invoice_lines(tenant_id, item_id); |
| packages/database/migrations/0007_sales.sql:8 | CREATE TABLE IF NOT EXISTS invoice_payments (id uuid PRIMARY KEY, tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, invoice_id uuid NOT NULL REFERENCES sales_invoices(id) ON DELETE CASCADE, method text NOT NULL, amount numeric(20,4) NOT NULL CHECK (amount > 0), cash_location_id uuid, reference text, idempotency_key text NOT NULL, created_at timestamptz NOT NULL DEFAULT now(), created_by uuid); |
| packages/database/migrations/0007_sales.sql:9 | CREATE UNIQUE INDEX IF NOT EXISTS invoice_payments_tenant_idempotency_key ON invoice_payments(tenant_id, idempotency_key); |
| packages/database/migrations/0007_sales.sql:10 | CREATE INDEX IF NOT EXISTS invoice_payments_invoice_idx ON invoice_payments(tenant_id, invoice_id); |
| packages/database/migrations/0007_sales.sql:11 | CREATE TABLE IF NOT EXISTS sales_adjustment_notes (id uuid PRIMARY KEY, tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, invoice_id uuid REFERENCES sales_invoices(id), branch_id uuid NOT NULL REFERENCES branches(id), kind text NOT NULL, status text NOT NULL DEFAULT 'draft', number text, reason text NOT NULL, amount numeric(20,4) NOT NULL CHECK (amount > 0), posted_at timestamptz, created_at timestamptz NOT NULL DEFAULT now(), created_by uuid, updated_at timestamptz, updated_by uuid, version int NOT NULL DEFAULT 1); |
| packages/database/migrations/0007_sales.sql:12 | CREATE UNIQUE INDEX IF NOT EXISTS sales_adjustment_notes_tenant_number_key ON sales_adjustment_notes(tenant_id, number) WHERE number IS NOT NULL; |
| packages/database/migrations/0007_sales.sql:13 | CREATE TABLE IF NOT EXISTS offers (id uuid PRIMARY KEY, tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, code text NOT NULL, name text NOT NULL, valid_from timestamptz NOT NULL, valid_to timestamptz NOT NULL, status text NOT NULL DEFAULT 'active', target_type text NOT NULL DEFAULT 'quantity', target_value numeric(20,4) NOT NULL DEFAULT 0, discount_type text NOT NULL DEFAULT 'percent', discount_value numeric(20,4) NOT NULL DEFAULT 0, created_at timestamptz NOT NULL DEFAULT now(), created_by uuid, updated_at timestamptz, updated_by uuid, version int NOT NULL DEFAULT 1); |
| packages/database/migrations/0007_sales.sql:14 | CREATE UNIQUE INDEX IF NOT EXISTS offers_tenant_code_key ON offers(tenant_id, code); |
| packages/database/migrations/0007_sales.sql:15 | CREATE INDEX IF NOT EXISTS offers_validity_idx ON offers(tenant_id, valid_from, valid_to); |
| packages/database/migrations/0007_sales.sql:16 | CREATE TABLE IF NOT EXISTS offer_items (tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, offer_id uuid NOT NULL REFERENCES offers(id) ON DELETE CASCADE, item_id uuid NOT NULL REFERENCES items(id), created_at timestamptz NOT NULL DEFAULT now(), created_by uuid, updated_at timestamptz, updated_by uuid, version int NOT NULL DEFAULT 1, PRIMARY KEY (tenant_id, offer_id, item_id)); |
| packages/database/migrations/0007_sales.sql:17 | CREATE TABLE IF NOT EXISTS offer_parties (tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, offer_id uuid NOT NULL REFERENCES offers(id) ON DELETE CASCADE, party_id uuid NOT NULL REFERENCES parties(id), created_at timestamptz NOT NULL DEFAULT now(), created_by uuid, updated_at timestamptz, updated_by uuid, version int NOT NULL DEFAULT 1, PRIMARY KEY (tenant_id, offer_id, party_id)); |
| packages/database/migrations/0007_sales.sql:18 | CREATE TABLE IF NOT EXISTS salesmen (id uuid PRIMARY KEY, tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, name text NOT NULL, employee_ref text, active boolean NOT NULL DEFAULT true, created_at timestamptz NOT NULL DEFAULT now(), created_by uuid, updated_at timestamptz, updated_by uuid, version int NOT NULL DEFAULT 1); |
| packages/database/migrations/0007_sales.sql:19 | CREATE UNIQUE INDEX IF NOT EXISTS salesmen_tenant_name_key ON salesmen(tenant_id, name); |
| packages/database/migrations/0007_sales.sql:30 | DO $$ DECLARE table_name text; BEGIN FOREACH table_name IN ARRAY ARRAY['sales_invoices','sales_invoice_lines','invoice_payments','sales_adjustment_notes','offers','offer_items','offer_parties','salesmen'] LOOP EXECUTE format('DROP POLICY IF EXISTS ' \|\| table_name \|\| '_tenant_isolation ON ' \|\| table_name); EXECUTE format('CREATE POLICY ' \|\| table_name \|\| '_tenant_isolation ON ' \|\| table_name \|\| ' USING (tenant_id = current_setting(''app.tenant_id'', true)::uuid) WITH CHECK (tenant_id = current_setting(''app.tenant_id'', true)::uuid)'); END LOOP; END $$; |
| packages/database/migrations/0008_sales_returns.sql:1 | ALTER TABLE sales_invoices ADD COLUMN IF NOT EXISTS reference_invoice_id uuid REFERENCES sales_invoices(id) ON DELETE RESTRICT; |
| packages/database/migrations/0008_sales_returns.sql:2 | CREATE INDEX IF NOT EXISTS sales_invoices_reference_idx ON sales_invoices (tenant_id, reference_invoice_id); |
| packages/database/migrations/0008_sales_returns.sql:11 | WITH CHECK (tenant_id = current_setting('app.tenant_id', true)::uuid); |
| packages/database/migrations/0009_phase_completion_hardening.sql:8 | FOREIGN KEY (party_id) REFERENCES parties(id) ON DELETE RESTRICT; |
| packages/database/migrations/0009_phase_completion_hardening.sql:16 | FOREIGN KEY (party_id) REFERENCES parties(id) ON DELETE RESTRICT; |
| packages/database/migrations/0009_phase_completion_hardening.sql:21 | CREATE INDEX IF NOT EXISTS sales_invoices_reference_status_idx |
| packages/database/migrations/0010_purchases.sql:3 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0010_purchases.sql:4 | branch_id uuid NOT NULL REFERENCES branches(id), |
| packages/database/migrations/0010_purchases.sql:5 | warehouse_id uuid REFERENCES warehouses(id), |
| packages/database/migrations/0010_purchases.sql:6 | party_id uuid NOT NULL REFERENCES parties(id), |
| packages/database/migrations/0010_purchases.sql:7 | reference_invoice_id uuid REFERENCES purchase_invoices(id) ON DELETE RESTRICT, |
| packages/database/migrations/0010_purchases.sql:8 | kind text NOT NULL DEFAULT 'purchase' CHECK (kind IN ('purchase','purchase_return')), |
| packages/database/migrations/0010_purchases.sql:9 | status text NOT NULL DEFAULT 'draft' CHECK (status IN ('draft','posted','voided')), |
| packages/database/migrations/0010_purchases.sql:15 | landed_cost_alloc text CHECK (landed_cost_alloc IN ('qty','value')), |
| packages/database/migrations/0010_purchases.sql:25 | journal_entry_id uuid REFERENCES journal_entries(id) ON DELETE RESTRICT, |
| packages/database/migrations/0010_purchases.sql:36 | CREATE UNIQUE INDEX IF NOT EXISTS purchase_invoices_tenant_number_key ON purchase_invoices(tenant_id, number) WHERE number IS NOT NULL; |
| packages/database/migrations/0010_purchases.sql:37 | CREATE INDEX IF NOT EXISTS purchase_invoices_scope_idx ON purchase_invoices(tenant_id, branch_id, status); |
| packages/database/migrations/0010_purchases.sql:38 | CREATE INDEX IF NOT EXISTS purchase_invoices_party_idx ON purchase_invoices(tenant_id, party_id); |
| packages/database/migrations/0010_purchases.sql:39 | CREATE INDEX IF NOT EXISTS purchase_invoices_reference_idx ON purchase_invoices(tenant_id, reference_invoice_id); |
| packages/database/migrations/0010_purchases.sql:43 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0010_purchases.sql:44 | invoice_id uuid NOT NULL REFERENCES purchase_invoices(id) ON DELETE CASCADE, |
| packages/database/migrations/0010_purchases.sql:46 | item_id uuid NOT NULL REFERENCES items(id), |
| packages/database/migrations/0010_purchases.sql:47 | tax_group_id uuid REFERENCES tax_groups(id), |
| packages/database/migrations/0010_purchases.sql:49 | quantity numeric(20,4) NOT NULL CHECK (quantity > 0), |
| packages/database/migrations/0010_purchases.sql:50 | unit_price numeric(20,4) NOT NULL CHECK (unit_price >= 0), |
| packages/database/migrations/0010_purchases.sql:69 | CREATE INDEX IF NOT EXISTS purchase_invoice_lines_scope_idx ON purchase_invoice_lines(tenant_id, item_id); |
| packages/database/migrations/0010_purchases.sql:73 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0010_purchases.sql:74 | invoice_id uuid NOT NULL REFERENCES purchase_invoices(id) ON DELETE CASCADE, |
| packages/database/migrations/0010_purchases.sql:76 | amount numeric(20,4) NOT NULL CHECK (amount >= 0), |
| packages/database/migrations/0010_purchases.sql:77 | allocation_target text NOT NULL DEFAULT 'inventory' CHECK (allocation_target IN ('inventory','expense')), |
| packages/database/migrations/0010_purchases.sql:79 | account_id uuid REFERENCES accounts(id), |
| packages/database/migrations/0010_purchases.sql:86 | CREATE INDEX IF NOT EXISTS purchase_invoice_costs_invoice_idx ON purchase_invoice_costs(tenant_id, invoice_id); |
| packages/database/migrations/0010_purchases.sql:93 | EXECUTE format('CREATE POLICY %I_tenant_isolation ON %I USING (tenant_id = current_setting(''app.tenant_id'', true)::uuid) WITH CHECK (tenant_id = current_setting(''app.tenant_id'', true)::uuid)', t, t); |
| packages/database/migrations/0011_treasury.sql:1 | CREATE TABLE IF NOT EXISTS vouchers (id uuid PRIMARY KEY, tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, branch_id uuid NOT NULL REFERENCES branches(id), kind text NOT NULL CHECK (kind IN ('receipt','payment')), subtype text NOT NULL CHECK (subtype IN ('customer','supplier','expense','account','salary','vat','other')), number text, date date NOT NULL, party_id uuid REFERENCES parties(id), counter_account_id uuid REFERENCES accounts(id), cash_location_id uuid NOT NULL REFERENCES cash_locations(id), method text NOT NULL CHECK (method IN ('cash','cheque','bank_transfer','card')), amount numeric(20,4) NOT NULL CHECK (amount > 0), vat_amount numeric(20,4) NOT NULL DEFAULT 0, net_amount numeric(20,4) NOT NULL DEFAULT 0, currency text NOT NULL DEFAULT 'SAR', fx_rate numeric(20,10), cheque_no text, cheque_date date, bank_name text, cheque_state text CHECK (cheque_state IS NULL OR cheque_state IN ('pending','cleared','bounced','collected')), cost_center_id uuid REFERENCES cost_centers(id), reference_no text, reference_date date, recipient text, status text NOT NULL DEFAULT 'draft' CHECK (status IN ('draft','posted','voided')), journal_entry_id uuid REFERENCES journal_entries(id), fiscal_period_id uuid REFERENCES fiscal_periods(id), posted_at timestamptz, voided_at timestamptz, idempotency_key text, created_at timestamptz NOT NULL DEFAULT now(), created_by uuid, updated_at timestamptz, updated_by uuid, version int NOT NULL DEFAULT 1, legacy_source text, legacy_id text); |
| packages/database/migrations/0011_treasury.sql:2 | CREATE UNIQUE INDEX IF NOT EXISTS vouchers_tenant_number_key ON vouchers(tenant_id, number) WHERE number IS NOT NULL; |
| packages/database/migrations/0011_treasury.sql:3 | CREATE UNIQUE INDEX IF NOT EXISTS vouchers_tenant_idempotency_key ON vouchers(tenant_id, idempotency_key) WHERE idempotency_key IS NOT NULL; |
| packages/database/migrations/0011_treasury.sql:4 | CREATE INDEX IF NOT EXISTS vouchers_scope_idx ON vouchers(tenant_id, branch_id, status, kind); |
| packages/database/migrations/0011_treasury.sql:5 | CREATE INDEX IF NOT EXISTS vouchers_cash_idx ON vouchers(tenant_id, cash_location_id, posted_at); |
| packages/database/migrations/0011_treasury.sql:7 | CREATE TABLE IF NOT EXISTS cash_transfers (id uuid PRIMARY KEY, tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, branch_id uuid NOT NULL REFERENCES branches(id), from_cash_location_id uuid NOT NULL REFERENCES cash_locations(id), to_cash_location_id uuid NOT NULL REFERENCES cash_locations(id), number text, amount numeric(20,4) NOT NULL CHECK (amount > 0), currency text NOT NULL DEFAULT 'SAR', status text NOT NULL DEFAULT 'draft' CHECK (status IN ('draft','sent','received','voided')), sent_journal_entry_id uuid REFERENCES journal_entries(id), received_journal_entry_id uuid REFERENCES journal_entries(id), sent_at timestamptz, received_at timestamptz, created_at timestamptz NOT NULL DEFAULT now(), created_by uuid, updated_at timestamptz, updated_by uuid, version int NOT NULL DEFAULT 1, legacy_source text, legacy_id text, CHECK (from_cash_location_id <> to_cash_location_id)); |
| packages/database/migrations/0011_treasury.sql:8 | CREATE UNIQUE INDEX IF NOT EXISTS cash_transfers_tenant_number_key ON cash_transfers(tenant_id, number) WHERE number IS NOT NULL; |
| packages/database/migrations/0011_treasury.sql:9 | CREATE INDEX IF NOT EXISTS cash_transfers_scope_idx ON cash_transfers(tenant_id, status); |
| packages/database/migrations/0011_treasury.sql:11 | CREATE TABLE IF NOT EXISTS expense_types (id uuid PRIMARY KEY, tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, name_ar text NOT NULL, name_en text, account_id uuid NOT NULL REFERENCES accounts(id), cost_center_id uuid REFERENCES cost_centers(id), created_at timestamptz NOT NULL DEFAULT now(), created_by uuid, updated_at timestamptz, updated_by uuid, version int NOT NULL DEFAULT 1, deleted_at timestamptz, deleted_by uuid, legacy_source text, legacy_id text); |
| packages/database/migrations/0011_treasury.sql:12 | CREATE UNIQUE INDEX IF NOT EXISTS expense_types_tenant_name_key ON expense_types(tenant_id, name_ar) WHERE deleted_at IS NULL; |
| packages/database/migrations/0011_treasury.sql:14 | CREATE TABLE IF NOT EXISTS shift_closes (id uuid PRIMARY KEY, tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, branch_id uuid NOT NULL REFERENCES branches(id), user_id uuid NOT NULL, opened_at timestamptz NOT NULL DEFAULT now(), closed_at timestamptz, status text NOT NULL DEFAULT 'open' CHECK (status IN ('open','closed','voided')), expected_cash numeric(20,4) NOT NULL DEFAULT 0, counted_cash numeric(20,4) NOT NULL DEFAULT 0, diff numeric(20,4) NOT NULL DEFAULT 0, summary jsonb NOT NULL DEFAULT '{}', report_html text, created_at timestamptz NOT NULL DEFAULT now(), created_by uuid, updated_at timestamptz, updated_by uuid, version int NOT NULL DEFAULT 1); |
| packages/database/migrations/0011_treasury.sql:15 | CREATE UNIQUE INDEX IF NOT EXISTS shift_closes_one_open_key ON shift_closes(tenant_id, branch_id, user_id) WHERE status = 'open'; |
| packages/database/migrations/0011_treasury.sql:16 | CREATE INDEX IF NOT EXISTS shift_closes_scope_idx ON shift_closes(tenant_id, branch_id, status); |
| packages/database/migrations/0011_treasury.sql:18 | CREATE TABLE IF NOT EXISTS shift_close_lines (shift_close_id uuid NOT NULL REFERENCES shift_closes(id) ON DELETE CASCADE, line_no int NOT NULL, tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, kind text NOT NULL, method text, party_id uuid REFERENCES parties(id), amount numeric(20,4) NOT NULL DEFAULT 0, metadata jsonb NOT NULL DEFAULT '{}', PRIMARY KEY(shift_close_id, line_no)); |
| packages/database/migrations/0011_treasury.sql:19 | CREATE TABLE IF NOT EXISTS cash_count_lines (shift_close_id uuid NOT NULL REFERENCES shift_closes(id) ON DELETE CASCADE, line_no int NOT NULL, tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, currency_code text NOT NULL DEFAULT 'SAR', denomination numeric(20,4) NOT NULL CHECK (denomination > 0), count int NOT NULL CHECK (count >= 0), total numeric(20,4) NOT NULL, PRIMARY KEY(shift_close_id, line_no)); |
| packages/database/migrations/0011_treasury.sql:21 | DO $$ DECLARE t text; BEGIN FOREACH t IN ARRAY ARRAY['vouchers','cash_transfers','expense_types','shift_closes','shift_close_lines','cash_count_lines'] LOOP EXECUTE format('ALTER TABLE %I ENABLE ROW LEVEL SECURITY', t); EXECUTE format('ALTER TABLE %I FORCE ROW LEVEL SECURITY', t); EXECUTE format('DROP POLICY IF EXISTS %I_tenant_isolation ON %I', t, t); EXECUTE format('CREATE POLICY %I_tenant_isolation ON %I USING (tenant_id = current_setting(''app.tenant_id'', true)::uuid) WITH CHECK (tenant_id = current_setting(''app.tenant_id'', true)::uuid)', t, t); END LOOP; END $$; |
| packages/database/migrations/0012_einvoicing.sql:1 | CREATE TABLE IF NOT EXISTS einvoice_credentials (id uuid PRIMARY KEY, tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, authority text NOT NULL CHECK (authority IN ('zatca','eta')), environment text NOT NULL CHECK (environment IN ('simulation','production')), csr text, private_key_enc text, csid_enc text, secret_enc text, org jsonb NOT NULL DEFAULT '{}', valid_from timestamptz, valid_to timestamptz, status text NOT NULL DEFAULT 'active', created_at timestamptz NOT NULL DEFAULT now(), created_by uuid, updated_at timestamptz, updated_by uuid, version int NOT NULL DEFAULT 1); |
| packages/database/migrations/0012_einvoicing.sql:2 | CREATE UNIQUE INDEX IF NOT EXISTS einvoice_credentials_tenant_authority_env_key ON einvoice_credentials(tenant_id, authority, environment); |
| packages/database/migrations/0012_einvoicing.sql:3 | CREATE TABLE IF NOT EXISTS einvoice_submissions (id uuid PRIMARY KEY, tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, invoice_id uuid NOT NULL REFERENCES sales_invoices(id) ON DELETE CASCADE, authority text NOT NULL CHECK (authority IN ('zatca','eta')), action text NOT NULL DEFAULT 'submit', environment text NOT NULL DEFAULT 'simulation', status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','cleared','reported','failed','not_implemented')), uuid uuid, hash text, previous_hash text, qr_payload text, request_payload jsonb NOT NULL DEFAULT '{}', response jsonb, error text, attempts text NOT NULL DEFAULT '0', submitted_at timestamptz, created_at timestamptz NOT NULL DEFAULT now(), created_by uuid, updated_at timestamptz, updated_by uuid, version int NOT NULL DEFAULT 1); |
| packages/database/migrations/0012_einvoicing.sql:4 | CREATE INDEX IF NOT EXISTS einvoice_submissions_invoice_idx ON einvoice_submissions(tenant_id, invoice_id); |
| packages/database/migrations/0012_einvoicing.sql:5 | CREATE INDEX IF NOT EXISTS einvoice_submissions_status_idx ON einvoice_submissions(tenant_id, status); |
| packages/database/migrations/0012_einvoicing.sql:6 | CREATE TABLE IF NOT EXISTS einvoice_chain (tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, authority text NOT NULL, environment text NOT NULL, last_hash text NOT NULL DEFAULT '', updated_at timestamptz NOT NULL DEFAULT now(), PRIMARY KEY(tenant_id, authority, environment)); |
| packages/database/migrations/0012_einvoicing.sql:7 | DO $$ DECLARE t text; BEGIN FOREACH t IN ARRAY ARRAY['einvoice_credentials','einvoice_submissions','einvoice_chain'] LOOP EXECUTE format('ALTER TABLE %I ENABLE ROW LEVEL SECURITY', t); EXECUTE format('ALTER TABLE %I FORCE ROW LEVEL SECURITY', t); EXECUTE format('DROP POLICY IF EXISTS %I_tenant_isolation ON %I', t, t); EXECUTE format('CREATE POLICY %I_tenant_isolation ON %I USING (tenant_id = current_setting(''app.tenant_id'', true)::uuid) WITH CHECK (tenant_id = current_setting(''app.tenant_id'', true)::uuid)', t, t); END LOOP; END $$; |
| packages/database/migrations/0013_migration_engine.sql:3 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0013_migration_engine.sql:5 | mode text NOT NULL CHECK (mode IN ('analyze','dry_run','import','reconcile','rollback')), |
| packages/database/migrations/0013_migration_engine.sql:6 | status text NOT NULL DEFAULT 'queued' CHECK (status IN ('queued','running','succeeded','failed','rolled_back')), |
| packages/database/migrations/0013_migration_engine.sql:7 | started_by uuid REFERENCES users(id) ON DELETE SET NULL, |
| packages/database/migrations/0013_migration_engine.sql:12 | CREATE INDEX IF NOT EXISTS migration_runs_tenant_started_idx ON migration_runs(tenant_id, started_at); |
| packages/database/migrations/0013_migration_engine.sql:13 | CREATE INDEX IF NOT EXISTS migration_runs_tenant_status_idx ON migration_runs(tenant_id, status); |
| packages/database/migrations/0013_migration_engine.sql:16 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0013_migration_engine.sql:21 | run_id uuid NOT NULL REFERENCES migration_runs(id) ON DELETE CASCADE, |
| packages/database/migrations/0013_migration_engine.sql:25 | CREATE INDEX IF NOT EXISTS legacy_id_mappings_run_idx ON legacy_id_mappings(tenant_id, run_id); |
| packages/database/migrations/0013_migration_engine.sql:26 | CREATE INDEX IF NOT EXISTS legacy_id_mappings_new_id_idx ON legacy_id_mappings(tenant_id, entity, new_id); |
| packages/database/migrations/0013_migration_engine.sql:30 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0013_migration_engine.sql:31 | run_id uuid NOT NULL REFERENCES migration_runs(id) ON DELETE CASCADE, |
| packages/database/migrations/0013_migration_engine.sql:34 | severity text NOT NULL CHECK (severity IN ('info','warn','error','block')), |
| packages/database/migrations/0013_migration_engine.sql:40 | CREATE INDEX IF NOT EXISTS migration_issues_run_idx ON migration_issues(tenant_id, run_id, severity); |
| packages/database/migrations/0013_migration_engine.sql:41 | CREATE INDEX IF NOT EXISTS migration_issues_code_idx ON migration_issues(tenant_id, code); |
| packages/database/migrations/0013_migration_engine.sql:48 | EXECUTE format('CREATE POLICY %I_tenant_isolation ON %I USING (tenant_id = current_setting(''app.tenant_id'', true)::uuid) WITH CHECK (tenant_id = current_setting(''app.tenant_id'', true)::uuid)', t, t); |
| packages/database/migrations/0014_compat_gateway.sql:3 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0014_compat_gateway.sql:6 | branch_id uuid NOT NULL REFERENCES branches(id) ON DELETE RESTRICT, |
| packages/database/migrations/0014_compat_gateway.sql:9 | status text NOT NULL DEFAULT 'active' CHECK (status IN ('active','revoked')), |
| packages/database/migrations/0014_compat_gateway.sql:19 | CREATE UNIQUE INDEX IF NOT EXISTS compat_devices_tenant_hash_key ON compat_devices(tenant_id, api_key_hash); |
| packages/database/migrations/0014_compat_gateway.sql:20 | CREATE INDEX IF NOT EXISTS compat_devices_branch_idx ON compat_devices(tenant_id, branch_id); |
| packages/database/migrations/0014_compat_gateway.sql:21 | CREATE INDEX IF NOT EXISTS compat_devices_status_idx ON compat_devices(tenant_id, status); |
| packages/database/migrations/0014_compat_gateway.sql:28 | WITH CHECK (tenant_id = current_setting('app.tenant_id', true)::uuid); |
| packages/database/migrations/0015_pos_pack.sql:5 | CREATE INDEX IF NOT EXISTS sales_invoices_order_type_idx ON sales_invoices(tenant_id, order_type) WHERE order_type IS NOT NULL; |
| packages/database/migrations/0015_pos_pack.sql:6 | CREATE INDEX IF NOT EXISTS sales_invoices_table_no_idx ON sales_invoices(tenant_id, table_no) WHERE table_no IS NOT NULL; |
| packages/database/migrations/0015_pos_pack.sql:10 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0015_pos_pack.sql:11 | branch_id uuid NOT NULL REFERENCES branches(id) ON DELETE RESTRICT, |
| packages/database/migrations/0015_pos_pack.sql:25 | CREATE UNIQUE INDEX IF NOT EXISTS table_categories_name_key ON table_categories(tenant_id, branch_id, name) WHERE deleted_at IS NULL; |
| packages/database/migrations/0015_pos_pack.sql:26 | CREATE INDEX IF NOT EXISTS table_categories_branch_idx ON table_categories(tenant_id, branch_id); |
| packages/database/migrations/0015_pos_pack.sql:30 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0015_pos_pack.sql:31 | branch_id uuid NOT NULL REFERENCES branches(id) ON DELETE RESTRICT, |
| packages/database/migrations/0015_pos_pack.sql:32 | category_id uuid NOT NULL REFERENCES table_categories(id) ON DELETE RESTRICT, |
| packages/database/migrations/0015_pos_pack.sql:36 | status text NOT NULL DEFAULT 'free' CHECK (status IN ('free','open','merged','closed','disabled')), |
| packages/database/migrations/0015_pos_pack.sql:37 | current_invoice_id uuid REFERENCES sales_invoices(id) ON DELETE SET NULL, |
| packages/database/migrations/0015_pos_pack.sql:51 | CREATE UNIQUE INDEX IF NOT EXISTS dining_tables_no_key ON dining_tables(tenant_id, branch_id, table_no) WHERE deleted_at IS NULL; |
| packages/database/migrations/0015_pos_pack.sql:52 | CREATE INDEX IF NOT EXISTS dining_tables_status_idx ON dining_tables(tenant_id, branch_id, status); |
| packages/database/migrations/0015_pos_pack.sql:56 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0015_pos_pack.sql:57 | branch_id uuid NOT NULL REFERENCES branches(id) ON DELETE RESTRICT, |
| packages/database/migrations/0015_pos_pack.sql:58 | table_id uuid NOT NULL REFERENCES dining_tables(id) ON DELETE CASCADE, |
| packages/database/migrations/0015_pos_pack.sql:59 | kind text NOT NULL CHECK (kind IN ('open','add_item','fire','void_item','send_to_invoice','split','merge','close')), |
| packages/database/migrations/0015_pos_pack.sql:68 | invoice_id uuid REFERENCES sales_invoices(id) ON DELETE SET NULL, |
| packages/database/migrations/0015_pos_pack.sql:79 | CREATE INDEX IF NOT EXISTS order_events_table_idx ON order_events(tenant_id, table_id, created_at); |
| packages/database/migrations/0015_pos_pack.sql:80 | CREATE INDEX IF NOT EXISTS order_events_invoice_idx ON order_events(tenant_id, invoice_id); |
| packages/database/migrations/0015_pos_pack.sql:81 | CREATE INDEX IF NOT EXISTS order_events_day_idx ON order_events(tenant_id, branch_id, business_day); |
| packages/database/migrations/0015_pos_pack.sql:88 | EXECUTE format('CREATE POLICY %I_tenant_isolation ON %I USING (tenant_id = current_setting(''app.tenant_id'', true)::uuid) WITH CHECK (tenant_id = current_setting(''app.tenant_id'', true)::uuid)', t, t); |
| packages/database/migrations/0016_hrm_payroll.sql:1 | CREATE TABLE IF NOT EXISTS departments (id uuid PRIMARY KEY, tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, branch_id uuid REFERENCES branches(id) ON DELETE RESTRICT, code text NOT NULL, name text NOT NULL, created_at timestamptz NOT NULL DEFAULT now(), created_by uuid, updated_at timestamptz, updated_by uuid, version int NOT NULL DEFAULT 1, deleted_at timestamptz, deleted_by uuid, legacy_source text, legacy_id text); |
| packages/database/migrations/0016_hrm_payroll.sql:2 | CREATE UNIQUE INDEX IF NOT EXISTS departments_tenant_code_key ON departments(tenant_id, code) WHERE deleted_at IS NULL; |
| packages/database/migrations/0016_hrm_payroll.sql:3 | CREATE INDEX IF NOT EXISTS departments_branch_idx ON departments(tenant_id, branch_id); |
| packages/database/migrations/0016_hrm_payroll.sql:4 | CREATE TABLE IF NOT EXISTS jobs (id uuid PRIMARY KEY, tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, code text NOT NULL, name text NOT NULL, created_at timestamptz NOT NULL DEFAULT now(), created_by uuid, updated_at timestamptz, updated_by uuid, version int NOT NULL DEFAULT 1, deleted_at timestamptz, deleted_by uuid, legacy_source text, legacy_id text); |
| packages/database/migrations/0016_hrm_payroll.sql:5 | CREATE UNIQUE INDEX IF NOT EXISTS jobs_tenant_code_key ON jobs(tenant_id, code) WHERE deleted_at IS NULL; |
| packages/database/migrations/0016_hrm_payroll.sql:6 | CREATE TABLE IF NOT EXISTS employees (id uuid PRIMARY KEY, tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, employee_no text NOT NULL, name text NOT NULL, branch_id uuid REFERENCES branches(id) ON DELETE RESTRICT, department_id uuid REFERENCES departments(id) ON DELETE SET NULL, job_id uuid REFERENCES jobs(id) ON DELETE SET NULL, membership_id uuid REFERENCES memberships(id) ON DELETE SET NULL, status text NOT NULL DEFAULT 'active' CHECK (status IN ('active','suspended','terminated')), hire_date date, salary_components jsonb NOT NULL DEFAULT '{}', bank jsonb NOT NULL DEFAULT '{}', salary_expense_account_id uuid REFERENCES accounts(id) ON DELETE RESTRICT, salary_payable_account_id uuid REFERENCES accounts(id) ON DELETE RESTRICT, cost_center_id uuid REFERENCES cost_centers(id) ON DELETE SET NULL, created_at timestamptz NOT NULL DEFAULT now(), created_by uuid, updated_at timestamptz, updated_by uuid, version int NOT NULL DEFAULT 1, deleted_at timestamptz, deleted_by uuid, legacy_source text, legacy_id text); |
| packages/database/migrations/0016_hrm_payroll.sql:7 | CREATE UNIQUE INDEX IF NOT EXISTS employees_tenant_no_key ON employees(tenant_id, employee_no) WHERE deleted_at IS NULL; |
| packages/database/migrations/0016_hrm_payroll.sql:8 | CREATE INDEX IF NOT EXISTS employees_branch_idx ON employees(tenant_id, branch_id); |
| packages/database/migrations/0016_hrm_payroll.sql:9 | CREATE INDEX IF NOT EXISTS employees_membership_idx ON employees(tenant_id, membership_id); |
| packages/database/migrations/0016_hrm_payroll.sql:10 | CREATE TABLE IF NOT EXISTS attendance_logs (id uuid PRIMARY KEY, tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, employee_id uuid REFERENCES employees(id) ON DELETE CASCADE, machine text NOT NULL, enroll text NOT NULL, punch_at timestamptz NOT NULL, direction text NOT NULL CHECK (direction IN ('in','out','unknown')), fingerprint text NOT NULL, payload jsonb NOT NULL DEFAULT '{}', created_at timestamptz NOT NULL DEFAULT now()); |
| packages/database/migrations/0016_hrm_payroll.sql:11 | CREATE UNIQUE INDEX IF NOT EXISTS attendance_logs_fingerprint_key ON attendance_logs(tenant_id, fingerprint); |
| packages/database/migrations/0016_hrm_payroll.sql:12 | CREATE INDEX IF NOT EXISTS attendance_logs_employee_idx ON attendance_logs(tenant_id, employee_id, punch_at); |
| packages/database/migrations/0016_hrm_payroll.sql:13 | CREATE INDEX IF NOT EXISTS attendance_logs_enroll_idx ON attendance_logs(tenant_id, enroll, punch_at); |
| packages/database/migrations/0016_hrm_payroll.sql:14 | CREATE TABLE IF NOT EXISTS salary_adjustments (id uuid PRIMARY KEY, tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, employee_id uuid NOT NULL REFERENCES employees(id) ON DELETE CASCADE, kind text NOT NULL CHECK (kind IN ('addition','deduction')), component_code text NOT NULL, value_text numeric(20,4) NOT NULL, starts_on date NOT NULL, ends_on date, recurring boolean NOT NULL DEFAULT false, sub_from_salary boolean NOT NULL DEFAULT false, status text NOT NULL DEFAULT 'draft' CHECK (status IN ('draft','approved','voided')), cash_location_id uuid REFERENCES cash_locations(id) ON DELETE SET NULL, journal_entry_id uuid REFERENCES journal_entries(id) ON DELETE SET NULL, reason text, created_at timestamptz NOT NULL DEFAULT now(), created_by uuid, updated_at timestamptz, updated_by uuid, version int NOT NULL DEFAULT 1, legacy_source text, legacy_id text); |
| packages/database/migrations/0016_hrm_payroll.sql:15 | CREATE INDEX IF NOT EXISTS salary_adjustments_employee_idx ON salary_adjustments(tenant_id, employee_id, starts_on); |
| packages/database/migrations/0016_hrm_payroll.sql:16 | CREATE INDEX IF NOT EXISTS salary_adjustments_status_idx ON salary_adjustments(tenant_id, status); |
| packages/database/migrations/0016_hrm_payroll.sql:17 | CREATE TABLE IF NOT EXISTS payroll_runs (id uuid PRIMARY KEY, tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, period_id uuid REFERENCES fiscal_periods(id) ON DELETE RESTRICT, year_month text NOT NULL, status text NOT NULL DEFAULT 'draft' CHECK (status IN ('draft','posted','paid','reversed')), currency text NOT NULL DEFAULT 'SAR', summary jsonb NOT NULL DEFAULT '{}', journal_entry_id uuid REFERENCES journal_entries(id) ON DELETE SET NULL, voucher_id uuid REFERENCES vouchers(id) ON DELETE SET NULL, posted_at timestamptz, paid_at timestamptz, reversed_at timestamptz, reversal_reason text, created_at timestamptz NOT NULL DEFAULT now(), created_by uuid, updated_at timestamptz, updated_by uuid, version int NOT NULL DEFAULT 1, legacy_source text, legacy_id text); |
| packages/database/migrations/0016_hrm_payroll.sql:18 | CREATE UNIQUE INDEX IF NOT EXISTS payroll_runs_month_key ON payroll_runs(tenant_id, year_month) WHERE status <> 'reversed'; |
| packages/database/migrations/0016_hrm_payroll.sql:19 | CREATE INDEX IF NOT EXISTS payroll_runs_status_idx ON payroll_runs(tenant_id, status); |
| packages/database/migrations/0016_hrm_payroll.sql:20 | CREATE TABLE IF NOT EXISTS payroll_run_lines (run_id uuid NOT NULL REFERENCES payroll_runs(id) ON DELETE CASCADE, line_no int NOT NULL, tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, employee_id uuid NOT NULL REFERENCES employees(id) ON DELETE RESTRICT, components jsonb NOT NULL DEFAULT '{}', additions numeric(20,4) NOT NULL DEFAULT 0, deductions numeric(20,4) NOT NULL DEFAULT 0, gross numeric(20,4) NOT NULL, net numeric(20,4) NOT NULL, cost_center_id uuid REFERENCES cost_centers(id) ON DELETE SET NULL, status text NOT NULL DEFAULT 'draft', payslip_html text, PRIMARY KEY(run_id, line_no)); |
| packages/database/migrations/0016_hrm_payroll.sql:21 | CREATE INDEX IF NOT EXISTS payroll_run_lines_employee_idx ON payroll_run_lines(tenant_id, employee_id); |
| packages/database/migrations/0016_hrm_payroll.sql:22 | DO $$ DECLARE t text; BEGIN FOREACH t IN ARRAY ARRAY['departments','jobs','employees','attendance_logs','salary_adjustments','payroll_runs','payroll_run_lines'] LOOP EXECUTE format('ALTER TABLE %I ENABLE ROW LEVEL SECURITY', t); EXECUTE format('ALTER TABLE %I FORCE ROW LEVEL SECURITY', t); EXECUTE format('DROP POLICY IF EXISTS %I_tenant_isolation ON %I', t, t); EXECUTE format('CREATE POLICY %I_tenant_isolation ON %I USING (tenant_id = current_setting(''app.tenant_id'', true)::uuid) WITH CHECK (tenant_id = current_setting(''app.tenant_id'', true)::uuid)', t, t); END LOOP; END $$; |
| packages/database/migrations/0017_installments_projects.sql:1 | CREATE TABLE IF NOT EXISTS installment_contracts (id uuid PRIMARY KEY, tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, branch_id uuid NOT NULL REFERENCES branches(id) ON DELETE RESTRICT, party_id uuid NOT NULL REFERENCES parties(id) ON DELETE RESTRICT, item_id uuid REFERENCES items(id) ON DELETE SET NULL, source_invoice_id uuid REFERENCES sales_invoices(id) ON DELETE SET NULL, number text, contract_value numeric(20,4) NOT NULL, down_payment numeric(20,4) NOT NULL DEFAULT 0, installment_count int NOT NULL CHECK (installment_count > 0), period_unit text NOT NULL DEFAULT 'months' CHECK (period_unit IN ('days','months')), period_every int NOT NULL DEFAULT 1 CHECK (period_every > 0), first_due_date date NOT NULL, status text NOT NULL DEFAULT 'draft' CHECK (status IN ('draft','active','closed','voided')), early_settlement_discount numeric(20,4) NOT NULL DEFAULT 0, summary jsonb NOT NULL DEFAULT '{}', created_at timestamptz NOT NULL DEFAULT now(), created_by uuid, updated_at timestamptz, updated_by uuid, version int NOT NULL DEFAULT 1, deleted_at timestamptz, deleted_by uuid, legacy_source text, legacy_id text); |
| packages/database/migrations/0017_installments_projects.sql:2 | CREATE UNIQUE INDEX IF NOT EXISTS installment_contracts_number_key ON installment_contracts(tenant_id, number) WHERE number IS NOT NULL; |
| packages/database/migrations/0017_installments_projects.sql:3 | CREATE INDEX IF NOT EXISTS installment_contracts_party_idx ON installment_contracts(tenant_id, party_id, status); |
| packages/database/migrations/0017_installments_projects.sql:4 | CREATE TABLE IF NOT EXISTS installment_schedule (id uuid PRIMARY KEY, tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, contract_id uuid NOT NULL REFERENCES installment_contracts(id) ON DELETE CASCADE, line_no int NOT NULL, due_date date NOT NULL, due_value numeric(20,4) NOT NULL, paid_value numeric(20,4) NOT NULL DEFAULT 0, status text NOT NULL DEFAULT 'open' CHECK (status IN ('open','partial','paid','overdue','waived')), voucher_id uuid REFERENCES vouchers(id) ON DELETE SET NULL, collected_at timestamptz); |
| packages/database/migrations/0017_installments_projects.sql:5 | CREATE UNIQUE INDEX IF NOT EXISTS installment_schedule_line_key ON installment_schedule(contract_id, line_no); |
| packages/database/migrations/0017_installments_projects.sql:6 | CREATE INDEX IF NOT EXISTS installment_schedule_due_idx ON installment_schedule(tenant_id, due_date, status); |
| packages/database/migrations/0017_installments_projects.sql:7 | CREATE TABLE IF NOT EXISTS projects (id uuid PRIMARY KEY, tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, branch_id uuid REFERENCES branches(id) ON DELETE RESTRICT, code text NOT NULL, name text NOT NULL, party_id uuid NOT NULL REFERENCES parties(id) ON DELETE RESTRICT, contractor_party_id uuid REFERENCES parties(id) ON DELETE SET NULL, status text NOT NULL DEFAULT 'draft' CHECK (status IN ('draft','active','on_hold','closed','voided')), starts_on date, ends_on date, contract_value numeric(20,4) NOT NULL DEFAULT 0, retention_pct numeric(7,4) NOT NULL DEFAULT 0, cost_center_id uuid REFERENCES cost_centers(id) ON DELETE SET NULL, summary jsonb NOT NULL DEFAULT '{}', created_at timestamptz NOT NULL DEFAULT now(), created_by uuid, updated_at timestamptz, updated_by uuid, version int NOT NULL DEFAULT 1, deleted_at timestamptz, deleted_by uuid, legacy_source text, legacy_id text); |
| packages/database/migrations/0017_installments_projects.sql:8 | CREATE UNIQUE INDEX IF NOT EXISTS projects_code_key ON projects(tenant_id, code) WHERE deleted_at IS NULL; |
| packages/database/migrations/0017_installments_projects.sql:9 | CREATE INDEX IF NOT EXISTS projects_party_idx ON projects(tenant_id, party_id, status); |
| packages/database/migrations/0017_installments_projects.sql:10 | CREATE TABLE IF NOT EXISTS project_stage_templates (id uuid PRIMARY KEY, tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, name text NOT NULL, stages jsonb NOT NULL DEFAULT '[]', created_at timestamptz NOT NULL DEFAULT now(), created_by uuid, updated_at timestamptz, updated_by uuid, version int NOT NULL DEFAULT 1, deleted_at timestamptz, deleted_by uuid, legacy_source text, legacy_id text); |
| packages/database/migrations/0017_installments_projects.sql:11 | CREATE UNIQUE INDEX IF NOT EXISTS project_stage_templates_name_key ON project_stage_templates(tenant_id, name) WHERE deleted_at IS NULL; |
| packages/database/migrations/0017_installments_projects.sql:12 | CREATE TABLE IF NOT EXISTS project_stages (id uuid PRIMARY KEY, tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, project_id uuid NOT NULL REFERENCES projects(id) ON DELETE CASCADE, name text NOT NULL, stage_order int NOT NULL DEFAULT 0, status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','active','accredited','rejected')), accredited_by uuid REFERENCES users(id) ON DELETE SET NULL, accredited_at timestamptz, accreditation_note text, created_at timestamptz NOT NULL DEFAULT now(), created_by uuid, updated_at timestamptz, updated_by uuid, version int NOT NULL DEFAULT 1, legacy_source text, legacy_id text); |
| packages/database/migrations/0017_installments_projects.sql:13 | CREATE UNIQUE INDEX IF NOT EXISTS project_stages_order_key ON project_stages(project_id, stage_order); |
| packages/database/migrations/0017_installments_projects.sql:14 | CREATE INDEX IF NOT EXISTS project_stages_project_idx ON project_stages(tenant_id, project_id, status); |
| packages/database/migrations/0017_installments_projects.sql:15 | CREATE TABLE IF NOT EXISTS boq_terms (id uuid PRIMARY KEY, tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, project_id uuid NOT NULL REFERENCES projects(id) ON DELETE CASCADE, code text NOT NULL, description text NOT NULL, qty numeric(20,4) NOT NULL DEFAULT 1, unit_value numeric(20,4) NOT NULL, estimated_cost numeric(20,4) NOT NULL DEFAULT 0, execution_period text, previously_billed numeric(20,4) NOT NULL DEFAULT 0, created_at timestamptz NOT NULL DEFAULT now(), created_by uuid, updated_at timestamptz, updated_by uuid, version int NOT NULL DEFAULT 1, deleted_at timestamptz, deleted_by uuid, legacy_source text, legacy_id text); |
| packages/database/migrations/0017_installments_projects.sql:16 | CREATE UNIQUE INDEX IF NOT EXISTS boq_terms_code_key ON boq_terms(tenant_id, project_id, code) WHERE deleted_at IS NULL; |
| packages/database/migrations/0017_installments_projects.sql:17 | CREATE INDEX IF NOT EXISTS boq_terms_project_idx ON boq_terms(tenant_id, project_id); |
| packages/database/migrations/0017_installments_projects.sql:18 | CREATE TABLE IF NOT EXISTS progress_bills (id uuid PRIMARY KEY, tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, project_id uuid NOT NULL REFERENCES projects(id) ON DELETE RESTRICT, number text, bill_date date NOT NULL, status text NOT NULL DEFAULT 'draft' CHECK (status IN ('draft','posted','released','voided')), work_value numeric(20,4) NOT NULL DEFAULT 0, previous_value numeric(20,4) NOT NULL DEFAULT 0, retention_value numeric(20,4) NOT NULL DEFAULT 0, net_due numeric(20,4) NOT NULL DEFAULT 0, invoice_id uuid REFERENCES sales_invoices(id) ON DELETE SET NULL, posted_at timestamptz, released_at timestamptz, summary jsonb NOT NULL DEFAULT '{}', created_at timestamptz NOT NULL DEFAULT now(), created_by uuid, updated_at timestamptz, updated_by uuid, version int NOT NULL DEFAULT 1, legacy_source text, legacy_id text); |
| packages/database/migrations/0017_installments_projects.sql:19 | CREATE UNIQUE INDEX IF NOT EXISTS progress_bills_number_key ON progress_bills(tenant_id, number) WHERE number IS NOT NULL; |
| packages/database/migrations/0017_installments_projects.sql:20 | CREATE INDEX IF NOT EXISTS progress_bills_project_idx ON progress_bills(tenant_id, project_id, status); |
| packages/database/migrations/0017_installments_projects.sql:21 | CREATE TABLE IF NOT EXISTS progress_bill_lines (bill_id uuid NOT NULL REFERENCES progress_bills(id) ON DELETE CASCADE, line_no int NOT NULL, tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, term_id uuid NOT NULL REFERENCES boq_terms(id) ON DELETE RESTRICT, bill_pct numeric(7,4) NOT NULL DEFAULT 0, bill_value numeric(20,4) NOT NULL, previous_value numeric(20,4) NOT NULL DEFAULT 0, remaining_value numeric(20,4) NOT NULL DEFAULT 0, PRIMARY KEY(bill_id, line_no)); |
| packages/database/migrations/0017_installments_projects.sql:22 | CREATE INDEX IF NOT EXISTS progress_bill_lines_term_idx ON progress_bill_lines(tenant_id, term_id); |
| packages/database/migrations/0017_installments_projects.sql:23 | CREATE TABLE IF NOT EXISTS project_requirements (id uuid PRIMARY KEY, tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, project_id uuid REFERENCES projects(id) ON DELETE CASCADE, party_id uuid REFERENCES parties(id) ON DELETE SET NULL, title text NOT NULL, status text NOT NULL DEFAULT 'open', payload jsonb NOT NULL DEFAULT '{}', created_at timestamptz NOT NULL DEFAULT now(), created_by uuid, updated_at timestamptz, updated_by uuid, version int NOT NULL DEFAULT 1, deleted_at timestamptz, deleted_by uuid, legacy_source text, legacy_id text); |
| packages/database/migrations/0017_installments_projects.sql:24 | CREATE INDEX IF NOT EXISTS project_requirements_status_idx ON project_requirements(tenant_id, status); |
| packages/database/migrations/0017_installments_projects.sql:25 | DO $$ DECLARE t text; BEGIN FOREACH t IN ARRAY ARRAY['installment_contracts','installment_schedule','projects','project_stage_templates','project_stages','boq_terms','progress_bills','progress_bill_lines','project_requirements'] LOOP EXECUTE format('ALTER TABLE %I ENABLE ROW LEVEL SECURITY', t); EXECUTE format('ALTER TABLE %I FORCE ROW LEVEL SECURITY', t); EXECUTE format('DROP POLICY IF EXISTS %I_tenant_isolation ON %I', t, t); EXECUTE format('CREATE POLICY %I_tenant_isolation ON %I USING (tenant_id = current_setting(''app.tenant_id'', true)::uuid) WITH CHECK (tenant_id = current_setting(''app.tenant_id'', true)::uuid)', t, t); END LOOP; END $$; |
| packages/database/migrations/0018_niche_verticals_salla.sql:1 | CREATE TABLE IF NOT EXISTS optical_prescriptions (id uuid PRIMARY KEY, tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, party_id uuid NOT NULL REFERENCES parties(id), invoice_line_id uuid REFERENCES sales_invoice_lines(id) ON DELETE SET NULL, orientation text NOT NULL DEFAULT 'distance', right_eye jsonb NOT NULL DEFAULT '{}', left_eye jsonb NOT NULL DEFAULT '{}', other_grid jsonb NOT NULL DEFAULT '{}', notes text, created_at timestamptz NOT NULL DEFAULT now(), created_by uuid, updated_at timestamptz, updated_by uuid, version int NOT NULL DEFAULT 1, deleted_at timestamptz, deleted_by uuid, legacy_source text, legacy_id text); |
| packages/database/migrations/0018_niche_verticals_salla.sql:2 | CREATE INDEX IF NOT EXISTS optical_prescriptions_party_idx ON optical_prescriptions(tenant_id, party_id); |
| packages/database/migrations/0018_niche_verticals_salla.sql:3 | CREATE INDEX IF NOT EXISTS optical_prescriptions_line_idx ON optical_prescriptions(tenant_id, invoice_line_id); |
| packages/database/migrations/0018_niche_verticals_salla.sql:4 | CREATE TABLE IF NOT EXISTS customer_measurements (id uuid PRIMARY KEY, tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, party_id uuid NOT NULL REFERENCES parties(id), kind text NOT NULL DEFAULT 'tailoring', measurements jsonb NOT NULL DEFAULT '{}', notes text, active boolean NOT NULL DEFAULT true, created_at timestamptz NOT NULL DEFAULT now(), created_by uuid, updated_at timestamptz, updated_by uuid, version int NOT NULL DEFAULT 1, deleted_at timestamptz, deleted_by uuid, legacy_source text, legacy_id text); |
| packages/database/migrations/0018_niche_verticals_salla.sql:5 | CREATE INDEX IF NOT EXISTS customer_measurements_party_idx ON customer_measurements(tenant_id, party_id, created_at); |
| packages/database/migrations/0018_niche_verticals_salla.sql:6 | CREATE TABLE IF NOT EXISTS vessel_groups (id uuid PRIMARY KEY, tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, name text NOT NULL, code text, created_at timestamptz NOT NULL DEFAULT now(), created_by uuid, updated_at timestamptz, updated_by uuid, version int NOT NULL DEFAULT 1, deleted_at timestamptz, deleted_by uuid, legacy_source text, legacy_id text); |
| packages/database/migrations/0018_niche_verticals_salla.sql:7 | CREATE UNIQUE INDEX IF NOT EXISTS vessel_groups_code_key ON vessel_groups(tenant_id, code) WHERE code IS NOT NULL AND deleted_at IS NULL; |
| packages/database/migrations/0018_niche_verticals_salla.sql:8 | CREATE TABLE IF NOT EXISTS vessels (id uuid PRIMARY KEY, tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, group_id uuid REFERENCES vessel_groups(id) ON DELETE SET NULL, code text NOT NULL, name text NOT NULL, status text NOT NULL DEFAULT 'available', capacity int NOT NULL DEFAULT 0, metadata jsonb NOT NULL DEFAULT '{}', created_at timestamptz NOT NULL DEFAULT now(), created_by uuid, updated_at timestamptz, updated_by uuid, version int NOT NULL DEFAULT 1, deleted_at timestamptz, deleted_by uuid, legacy_source text, legacy_id text); |
| packages/database/migrations/0018_niche_verticals_salla.sql:9 | CREATE UNIQUE INDEX IF NOT EXISTS vessels_code_key ON vessels(tenant_id, code) WHERE deleted_at IS NULL; |
| packages/database/migrations/0018_niche_verticals_salla.sql:10 | CREATE INDEX IF NOT EXISTS vessels_group_idx ON vessels(tenant_id, group_id); |
| packages/database/migrations/0018_niche_verticals_salla.sql:11 | CREATE TABLE IF NOT EXISTS vessel_group_pricing (id uuid PRIMARY KEY, tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, group_id uuid NOT NULL REFERENCES vessel_groups(id) ON DELETE CASCADE, period_kind text NOT NULL CHECK (period_kind IN ('hour','half_hour','offer','day')), price numeric(20,4) NOT NULL, currency text NOT NULL DEFAULT 'SAR', created_at timestamptz NOT NULL DEFAULT now(), created_by uuid, updated_at timestamptz, updated_by uuid, version int NOT NULL DEFAULT 1); |
| packages/database/migrations/0018_niche_verticals_salla.sql:12 | CREATE UNIQUE INDEX IF NOT EXISTS vessel_group_pricing_kind_key ON vessel_group_pricing(tenant_id, group_id, period_kind); |
| packages/database/migrations/0018_niche_verticals_salla.sql:13 | CREATE TABLE IF NOT EXISTS vessel_owners (id uuid PRIMARY KEY, tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, vessel_id uuid NOT NULL REFERENCES vessels(id) ON DELETE CASCADE, party_id uuid NOT NULL REFERENCES parties(id), percent numeric(7,4) NOT NULL, created_at timestamptz NOT NULL DEFAULT now(), created_by uuid, updated_at timestamptz, updated_by uuid, version int NOT NULL DEFAULT 1, deleted_at timestamptz, deleted_by uuid); |
| packages/database/migrations/0018_niche_verticals_salla.sql:14 | CREATE UNIQUE INDEX IF NOT EXISTS vessel_owners_party_key ON vessel_owners(tenant_id, vessel_id, party_id) WHERE deleted_at IS NULL; |
| packages/database/migrations/0018_niche_verticals_salla.sql:15 | CREATE TABLE IF NOT EXISTS marina_bookings (id uuid PRIMARY KEY, tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, branch_id uuid NOT NULL REFERENCES branches(id), party_id uuid NOT NULL REFERENCES parties(id), vessel_id uuid NOT NULL REFERENCES vessels(id), starts_at timestamptz NOT NULL, ends_at timestamptz NOT NULL, companions int NOT NULL DEFAULT 0, insurance_amount numeric(20,4) NOT NULL DEFAULT 0, status text NOT NULL DEFAULT 'booked', metadata jsonb NOT NULL DEFAULT '{}', created_at timestamptz NOT NULL DEFAULT now(), created_by uuid, updated_at timestamptz, updated_by uuid, version int NOT NULL DEFAULT 1, deleted_at timestamptz, deleted_by uuid, legacy_source text, legacy_id text); |
| packages/database/migrations/0018_niche_verticals_salla.sql:16 | CREATE INDEX IF NOT EXISTS marina_bookings_vessel_time_idx ON marina_bookings(tenant_id, vessel_id, starts_at, ends_at); |
| packages/database/migrations/0018_niche_verticals_salla.sql:17 | CREATE TABLE IF NOT EXISTS marina_booking_additions (id uuid PRIMARY KEY, tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, booking_id uuid NOT NULL REFERENCES marina_bookings(id) ON DELETE CASCADE, description text NOT NULL, amount numeric(20,4) NOT NULL, created_at timestamptz NOT NULL DEFAULT now(), created_by uuid, updated_at timestamptz, updated_by uuid, version int NOT NULL DEFAULT 1); |
| packages/database/migrations/0018_niche_verticals_salla.sql:18 | CREATE TABLE IF NOT EXISTS rental_invoices (id uuid PRIMARY KEY, tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, booking_id uuid NOT NULL REFERENCES marina_bookings(id), sales_invoice_id uuid REFERENCES sales_invoices(id) ON DELETE SET NULL, period_amount numeric(20,4) NOT NULL, additions_amount numeric(20,4) NOT NULL DEFAULT 0, insurance_amount numeric(20,4) NOT NULL DEFAULT 0, total numeric(20,4) NOT NULL, status text NOT NULL DEFAULT 'draft', metadata jsonb NOT NULL DEFAULT '{}', created_at timestamptz NOT NULL DEFAULT now(), created_by uuid, updated_at timestamptz, updated_by uuid, version int NOT NULL DEFAULT 1, legacy_source text, legacy_id text); |
| packages/database/migrations/0018_niche_verticals_salla.sql:19 | CREATE UNIQUE INDEX IF NOT EXISTS rental_invoices_booking_key ON rental_invoices(tenant_id, booking_id); |
| packages/database/migrations/0018_niche_verticals_salla.sql:20 | CREATE TABLE IF NOT EXISTS marina_violations (id uuid PRIMARY KEY, tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, vessel_id uuid REFERENCES vessels(id), booking_id uuid REFERENCES marina_bookings(id), party_id uuid REFERENCES parties(id), violation_date date NOT NULL, amount numeric(20,4) NOT NULL DEFAULT 0, description text NOT NULL, status text NOT NULL DEFAULT 'open', created_at timestamptz NOT NULL DEFAULT now(), created_by uuid, updated_at timestamptz, updated_by uuid, version int NOT NULL DEFAULT 1, deleted_at timestamptz, deleted_by uuid, legacy_source text, legacy_id text); |
| packages/database/migrations/0018_niche_verticals_salla.sql:21 | CREATE TABLE IF NOT EXISTS marina_operation_plans (id uuid PRIMARY KEY, tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, group_id uuid REFERENCES vessel_groups(id), plan_date date NOT NULL, name text NOT NULL, created_at timestamptz NOT NULL DEFAULT now(), created_by uuid, updated_at timestamptz, updated_by uuid, version int NOT NULL DEFAULT 1, deleted_at timestamptz, deleted_by uuid, legacy_source text, legacy_id text); |
| packages/database/migrations/0018_niche_verticals_salla.sql:22 | CREATE INDEX IF NOT EXISTS marina_operation_plans_day_idx ON marina_operation_plans(tenant_id, plan_date); |
| packages/database/migrations/0018_niche_verticals_salla.sql:23 | CREATE TABLE IF NOT EXISTS marina_operation_plan_lines (plan_id uuid NOT NULL REFERENCES marina_operation_plans(id) ON DELETE CASCADE, line_no int NOT NULL, tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, vessel_id uuid NOT NULL REFERENCES vessels(id), period_label text, metadata jsonb NOT NULL DEFAULT '{}', PRIMARY KEY(plan_id, line_no)); |
| packages/database/migrations/0018_niche_verticals_salla.sql:24 | CREATE TABLE IF NOT EXISTS vehicle_makes (id uuid PRIMARY KEY, tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, name text NOT NULL, created_at timestamptz NOT NULL DEFAULT now(), created_by uuid, updated_at timestamptz, updated_by uuid, version int NOT NULL DEFAULT 1, deleted_at timestamptz, deleted_by uuid, legacy_source text, legacy_id text); |
| packages/database/migrations/0018_niche_verticals_salla.sql:25 | CREATE UNIQUE INDEX IF NOT EXISTS vehicle_makes_name_key ON vehicle_makes(tenant_id, name) WHERE deleted_at IS NULL; |
| packages/database/migrations/0018_niche_verticals_salla.sql:26 | CREATE TABLE IF NOT EXISTS vehicle_models (id uuid PRIMARY KEY, tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, make_id uuid NOT NULL REFERENCES vehicle_makes(id) ON DELETE CASCADE, name text NOT NULL, created_at timestamptz NOT NULL DEFAULT now(), created_by uuid, updated_at timestamptz, updated_by uuid, version int NOT NULL DEFAULT 1, deleted_at timestamptz, deleted_by uuid, legacy_source text, legacy_id text); |
| packages/database/migrations/0018_niche_verticals_salla.sql:27 | CREATE UNIQUE INDEX IF NOT EXISTS vehicle_models_name_key ON vehicle_models(tenant_id, make_id, name) WHERE deleted_at IS NULL; |
| packages/database/migrations/0018_niche_verticals_salla.sql:28 | CREATE TABLE IF NOT EXISTS item_vehicle_fitment (id uuid PRIMARY KEY, tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, item_id uuid NOT NULL REFERENCES items(id) ON DELETE CASCADE, make_id uuid NOT NULL REFERENCES vehicle_makes(id), model_id uuid REFERENCES vehicle_models(id), year_from int, year_to int, notes text, created_at timestamptz NOT NULL DEFAULT now(), created_by uuid, updated_at timestamptz, updated_by uuid, version int NOT NULL DEFAULT 1, deleted_at timestamptz, deleted_by uuid, legacy_source text, legacy_id text); |
| packages/database/migrations/0018_niche_verticals_salla.sql:29 | CREATE INDEX IF NOT EXISTS item_vehicle_fitment_lookup_idx ON item_vehicle_fitment(tenant_id, make_id, model_id, year_from, year_to); |
| packages/database/migrations/0018_niche_verticals_salla.sql:30 | CREATE INDEX IF NOT EXISTS item_vehicle_fitment_item_idx ON item_vehicle_fitment(tenant_id, item_id); |
| packages/database/migrations/0018_niche_verticals_salla.sql:31 | CREATE TABLE IF NOT EXISTS salla_connections (id uuid PRIMARY KEY, tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, store_id text NOT NULL, access_token_enc text NOT NULL, refresh_token_enc text, webhook_secret_enc text NOT NULL, status text NOT NULL DEFAULT 'active', scopes jsonb NOT NULL DEFAULT '[]', expires_at timestamptz, created_at timestamptz NOT NULL DEFAULT now(), created_by uuid, updated_at timestamptz, updated_by uuid, version int NOT NULL DEFAULT 1, deleted_at timestamptz, deleted_by uuid); |
| packages/database/migrations/0018_niche_verticals_salla.sql:32 | CREATE UNIQUE INDEX IF NOT EXISTS salla_connections_store_key ON salla_connections(tenant_id, store_id) WHERE deleted_at IS NULL; |
| packages/database/migrations/0018_niche_verticals_salla.sql:33 | CREATE TABLE IF NOT EXISTS salla_item_sync (id uuid PRIMARY KEY, tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, connection_id uuid REFERENCES salla_connections(id) ON DELETE CASCADE, item_id uuid NOT NULL REFERENCES items(id) ON DELETE CASCADE, remote_id text, last_exported_snapshot jsonb NOT NULL DEFAULT '{}', diff_flags jsonb NOT NULL DEFAULT '[]', status text NOT NULL DEFAULT 'pending', next_retry_at timestamptz, attempts int NOT NULL DEFAULT 0, created_at timestamptz NOT NULL DEFAULT now(), created_by uuid, updated_at timestamptz, updated_by uuid, version int NOT NULL DEFAULT 1); |
| packages/database/migrations/0018_niche_verticals_salla.sql:34 | CREATE UNIQUE INDEX IF NOT EXISTS salla_item_sync_item_key ON salla_item_sync(tenant_id, connection_id, item_id); |
| packages/database/migrations/0018_niche_verticals_salla.sql:35 | CREATE TABLE IF NOT EXISTS salla_export_log (id uuid PRIMARY KEY, tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, connection_id uuid REFERENCES salla_connections(id) ON DELETE SET NULL, item_id uuid REFERENCES items(id) ON DELETE SET NULL, action text NOT NULL, status text NOT NULL DEFAULT 'queued', request_payload jsonb NOT NULL DEFAULT '{}', response_payload jsonb, error text, created_at timestamptz NOT NULL DEFAULT now()); |
| packages/database/migrations/0018_niche_verticals_salla.sql:36 | CREATE INDEX IF NOT EXISTS salla_export_log_status_idx ON salla_export_log(tenant_id, status); |
| packages/database/migrations/0018_niche_verticals_salla.sql:37 | CREATE TABLE IF NOT EXISTS salla_branch_mappings (id uuid PRIMARY KEY, tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, connection_id uuid REFERENCES salla_connections(id) ON DELETE CASCADE, branch_id uuid REFERENCES branches(id), warehouse_id uuid REFERENCES warehouses(id), cash_location_id uuid, remote_branch_id text, created_at timestamptz NOT NULL DEFAULT now(), created_by uuid, updated_at timestamptz, updated_by uuid, version int NOT NULL DEFAULT 1, deleted_at timestamptz, deleted_by uuid); |
| packages/database/migrations/0018_niche_verticals_salla.sql:38 | CREATE UNIQUE INDEX IF NOT EXISTS salla_branch_mappings_remote_key ON salla_branch_mappings(tenant_id, connection_id, remote_branch_id) WHERE deleted_at IS NULL; |
| packages/database/migrations/0018_niche_verticals_salla.sql:39 | DO $$ DECLARE t text; BEGIN FOREACH t IN ARRAY ARRAY['optical_prescriptions','customer_measurements','vessel_groups','vessels','vessel_group_pricing','vessel_owners','marina_bookings','marina_booking_additions','rental_invoices','marina_violations','marina_operation_plans','marina_operation_plan_lines','vehicle_makes','vehicle_models','item_vehicle_fitment','salla_connections','salla_item_sync','salla_export_log','salla_branch_mappings'] LOOP EXECUTE format('ALTER TABLE %I ENABLE ROW LEVEL SECURITY', t); EXECUTE format('ALTER TABLE %I FORCE ROW LEVEL SECURITY', t); EXECUTE format('DROP POLICY IF EXISTS %I_tenant_isolation ON %I', t, t); EXECUTE format('CREATE POLICY %I_tenant_isolation ON %I USING (tenant_id = current_setting(''app.tenant_id'', true)::uuid) WITH CHECK (tenant_id = current_setting(''app.tenant_id'', true)::uuid)', t, t); END LOOP; END $$; |
| packages/database/migrations/0019_billing_subscriptions.sql:8 | interval text NOT NULL CHECK (interval IN ('month', 'year')), |
| packages/database/migrations/0019_billing_subscriptions.sql:9 | amount numeric(20,4) NOT NULL CHECK (amount >= 0), |
| packages/database/migrations/0019_billing_subscriptions.sql:19 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0019_billing_subscriptions.sql:20 | plan_id uuid NOT NULL REFERENCES billing_plans(id), |
| packages/database/migrations/0019_billing_subscriptions.sql:21 | status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'active', 'past_due', 'canceled', 'incomplete')), |
| packages/database/migrations/0019_billing_subscriptions.sql:22 | provider text NOT NULL DEFAULT 'manual' CHECK (provider IN ('manual', 'stripe')), |
| packages/database/migrations/0019_billing_subscriptions.sql:33 | CREATE UNIQUE INDEX IF NOT EXISTS tenant_subscriptions_provider_key |
| packages/database/migrations/0019_billing_subscriptions.sql:36 | CREATE INDEX IF NOT EXISTS tenant_subscriptions_tenant_status_idx |
| packages/database/migrations/0019_billing_subscriptions.sql:41 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0019_billing_subscriptions.sql:42 | requested_by uuid REFERENCES users(id) ON DELETE SET NULL, |
| packages/database/migrations/0019_billing_subscriptions.sql:43 | plan_id uuid REFERENCES billing_plans(id), |
| packages/database/migrations/0019_billing_subscriptions.sql:44 | status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected', 'canceled')), |
| packages/database/migrations/0019_billing_subscriptions.sql:46 | reviewed_by uuid REFERENCES users(id) ON DELETE SET NULL, |
| packages/database/migrations/0019_billing_subscriptions.sql:52 | CREATE INDEX IF NOT EXISTS activation_requests_status_created_idx |
| packages/database/migrations/0019_billing_subscriptions.sql:54 | CREATE INDEX IF NOT EXISTS activation_requests_tenant_status_idx |
| packages/database/migrations/0019_billing_subscriptions.sql:64 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0019_billing_subscriptions.sql:69 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0020_platform_admin_plane.sql:18 | WITH CHECK (COALESCE(current_setting('app.is_platform_admin', true), 'off') = 'on'); |
| packages/database/migrations/0020_platform_admin_plane.sql:23 | WITH CHECK (COALESCE(current_setting('app.is_platform_admin', true), 'off') = 'on'); |
| packages/database/migrations/0020_platform_admin_plane.sql:32 | WITH CHECK (COALESCE(current_setting('app.is_platform_admin', true), 'off') = 'on'); |
| packages/database/migrations/0021_purchase_adjustment_notes.sql:12 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0021_purchase_adjustment_notes.sql:13 | invoice_id uuid REFERENCES purchase_invoices(id), |
| packages/database/migrations/0021_purchase_adjustment_notes.sql:14 | branch_id uuid NOT NULL REFERENCES branches(id), |
| packages/database/migrations/0021_purchase_adjustment_notes.sql:19 | amount numeric(20,4) NOT NULL CHECK (amount > 0), |
| packages/database/migrations/0021_purchase_adjustment_notes.sql:27 | CREATE UNIQUE INDEX IF NOT EXISTS purchase_adjustment_notes_tenant_number_key |
| packages/database/migrations/0021_purchase_adjustment_notes.sql:29 | CREATE INDEX IF NOT EXISTS purchase_adjustment_notes_invoice_idx |
| packages/database/migrations/0021_purchase_adjustment_notes.sql:37 | WITH CHECK (tenant_id = current_setting('app.tenant_id', true)::uuid); |
| packages/database/migrations/0022_sales_quotations.sql:11 | ALTER TABLE sales_invoices ADD COLUMN IF NOT EXISTS converted_invoice_id uuid REFERENCES sales_invoices(id); |
| packages/database/migrations/0022_sales_quotations.sql:12 | CREATE INDEX IF NOT EXISTS sales_invoices_kind_idx ON sales_invoices(tenant_id, kind, status); |
| packages/database/migrations/0023_payment_methods.sql:11 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0023_payment_methods.sql:16 | due_days int NOT NULL DEFAULT 0 CHECK (due_days >= 0), |
| packages/database/migrations/0023_payment_methods.sql:17 | cash_location_id uuid REFERENCES cash_locations(id), |
| packages/database/migrations/0023_payment_methods.sql:28 | CREATE UNIQUE INDEX IF NOT EXISTS payment_methods_tenant_code_key |
| packages/database/migrations/0023_payment_methods.sql:30 | CREATE UNIQUE INDEX IF NOT EXISTS payment_methods_tenant_default_key |
| packages/database/migrations/0023_payment_methods.sql:33 | ALTER TABLE parties ADD COLUMN IF NOT EXISTS payment_method_id uuid REFERENCES payment_methods(id); |
| packages/database/migrations/0023_payment_methods.sql:40 | WITH CHECK (tenant_id = current_setting('app.tenant_id', true)::uuid); |
| packages/database/migrations/0024_goods_requests_and_deliveries.sql:18 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0024_goods_requests_and_deliveries.sql:19 | branch_id uuid NOT NULL REFERENCES branches(id), |
| packages/database/migrations/0024_goods_requests_and_deliveries.sql:20 | to_warehouse_id uuid NOT NULL REFERENCES warehouses(id), |
| packages/database/migrations/0024_goods_requests_and_deliveries.sql:21 | from_warehouse_id uuid REFERENCES warehouses(id), |
| packages/database/migrations/0024_goods_requests_and_deliveries.sql:31 | transfer_id uuid REFERENCES stock_transfers(id), |
| packages/database/migrations/0024_goods_requests_and_deliveries.sql:37 | CONSTRAINT goods_requests_warehouses_differ CHECK (from_warehouse_id IS NULL OR from_warehouse_id <> to_warehouse_id) |
| packages/database/migrations/0024_goods_requests_and_deliveries.sql:39 | CREATE UNIQUE INDEX IF NOT EXISTS goods_requests_tenant_number_key ON goods_requests(tenant_id, number); |
| packages/database/migrations/0024_goods_requests_and_deliveries.sql:40 | CREATE INDEX IF NOT EXISTS goods_requests_status_idx ON goods_requests(tenant_id, status); |
| packages/database/migrations/0024_goods_requests_and_deliveries.sql:43 | request_id uuid NOT NULL REFERENCES goods_requests(id) ON DELETE CASCADE, |
| packages/database/migrations/0024_goods_requests_and_deliveries.sql:45 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0024_goods_requests_and_deliveries.sql:46 | item_id uuid NOT NULL REFERENCES items(id), |
| packages/database/migrations/0024_goods_requests_and_deliveries.sql:47 | qty numeric(20,4) NOT NULL CHECK (qty > 0), |
| packages/database/migrations/0024_goods_requests_and_deliveries.sql:51 | CONSTRAINT goods_request_lines_approved_range CHECK (approved_qty IS NULL OR (approved_qty >= 0 AND approved_qty <= qty)) |
| packages/database/migrations/0024_goods_requests_and_deliveries.sql:53 | CREATE INDEX IF NOT EXISTS goods_request_lines_scope_idx ON goods_request_lines(tenant_id, item_id); |
| packages/database/migrations/0024_goods_requests_and_deliveries.sql:57 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0024_goods_requests_and_deliveries.sql:58 | branch_id uuid NOT NULL REFERENCES branches(id), |
| packages/database/migrations/0024_goods_requests_and_deliveries.sql:59 | warehouse_id uuid NOT NULL REFERENCES warehouses(id), |
| packages/database/migrations/0024_goods_requests_and_deliveries.sql:60 | invoice_id uuid NOT NULL REFERENCES sales_invoices(id), |
| packages/database/migrations/0024_goods_requests_and_deliveries.sql:61 | party_id uuid REFERENCES parties(id), |
| packages/database/migrations/0024_goods_requests_and_deliveries.sql:76 | CREATE UNIQUE INDEX IF NOT EXISTS stock_deliveries_tenant_number_key ON stock_deliveries(tenant_id, number); |
| packages/database/migrations/0024_goods_requests_and_deliveries.sql:77 | CREATE INDEX IF NOT EXISTS stock_deliveries_invoice_idx ON stock_deliveries(tenant_id, invoice_id); |
| packages/database/migrations/0024_goods_requests_and_deliveries.sql:78 | CREATE INDEX IF NOT EXISTS stock_deliveries_status_idx ON stock_deliveries(tenant_id, status); |
| packages/database/migrations/0024_goods_requests_and_deliveries.sql:81 | delivery_id uuid NOT NULL REFERENCES stock_deliveries(id) ON DELETE CASCADE, |
| packages/database/migrations/0024_goods_requests_and_deliveries.sql:83 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0024_goods_requests_and_deliveries.sql:84 | item_id uuid NOT NULL REFERENCES items(id), |
| packages/database/migrations/0024_goods_requests_and_deliveries.sql:85 | qty numeric(20,4) NOT NULL CHECK (qty > 0), |
| packages/database/migrations/0024_goods_requests_and_deliveries.sql:89 | CREATE INDEX IF NOT EXISTS stock_delivery_lines_scope_idx ON stock_delivery_lines(tenant_id, item_id); |
| packages/database/migrations/0024_goods_requests_and_deliveries.sql:96 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0024_goods_requests_and_deliveries.sql:103 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0024_goods_requests_and_deliveries.sql:110 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0024_goods_requests_and_deliveries.sql:117 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0025_marina_operations.sql:17 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0025_marina_operations.sql:18 | booking_id uuid NOT NULL REFERENCES marina_bookings(id) ON DELETE CASCADE, |
| packages/database/migrations/0025_marina_operations.sql:19 | vessel_id uuid NOT NULL REFERENCES vessels(id), |
| packages/database/migrations/0025_marina_operations.sql:34 | CONSTRAINT marina_preparations_jackets_positive CHECK (life_jackets >= 0) |
| packages/database/migrations/0025_marina_operations.sql:36 | CREATE UNIQUE INDEX IF NOT EXISTS marina_preparations_booking_key ON marina_preparations(tenant_id, booking_id); |
| packages/database/migrations/0025_marina_operations.sql:37 | CREATE INDEX IF NOT EXISTS marina_preparations_day_idx ON marina_preparations(tenant_id, prepared_on, status); |
| packages/database/migrations/0025_marina_operations.sql:41 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0025_marina_operations.sql:42 | branch_id uuid NOT NULL REFERENCES branches(id), |
| packages/database/migrations/0025_marina_operations.sql:59 | CREATE UNIQUE INDEX IF NOT EXISTS marina_day_closings_day_key ON marina_day_closings(tenant_id, branch_id, close_date); |
| packages/database/migrations/0025_marina_operations.sql:66 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0025_marina_operations.sql:73 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0026_contractor_contracts_and_offers.sql:18 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0026_contractor_contracts_and_offers.sql:19 | project_id uuid NOT NULL REFERENCES projects(id) ON DELETE RESTRICT, |
| packages/database/migrations/0026_contractor_contracts_and_offers.sql:20 | contractor_party_id uuid NOT NULL REFERENCES parties(id) ON DELETE RESTRICT, |
| packages/database/migrations/0026_contractor_contracts_and_offers.sql:25 | contract_value numeric(20,4) NOT NULL DEFAULT 0 CHECK (contract_value >= 0), |
| packages/database/migrations/0026_contractor_contracts_and_offers.sql:26 | retention_pct numeric(7,4) NOT NULL DEFAULT 0 CHECK (retention_pct >= 0 AND retention_pct <= 100), |
| packages/database/migrations/0026_contractor_contracts_and_offers.sql:27 | advance_amount numeric(20,4) NOT NULL DEFAULT 0 CHECK (advance_amount >= 0), |
| packages/database/migrations/0026_contractor_contracts_and_offers.sql:28 | advance_recovered numeric(20,4) NOT NULL DEFAULT 0 CHECK (advance_recovered >= 0), |
| packages/database/migrations/0026_contractor_contracts_and_offers.sql:40 | CREATE UNIQUE INDEX IF NOT EXISTS contractor_contracts_tenant_number_key ON contractor_contracts(tenant_id, number); |
| packages/database/migrations/0026_contractor_contracts_and_offers.sql:41 | CREATE INDEX IF NOT EXISTS contractor_contracts_project_idx ON contractor_contracts(tenant_id, project_id, status); |
| packages/database/migrations/0026_contractor_contracts_and_offers.sql:44 | contract_id uuid NOT NULL REFERENCES contractor_contracts(id) ON DELETE CASCADE, |
| packages/database/migrations/0026_contractor_contracts_and_offers.sql:46 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0026_contractor_contracts_and_offers.sql:48 | qty numeric(20,4) NOT NULL DEFAULT 1 CHECK (qty > 0), |
| packages/database/migrations/0026_contractor_contracts_and_offers.sql:49 | unit_value numeric(20,4) NOT NULL DEFAULT 0 CHECK (unit_value >= 0), |
| packages/database/migrations/0026_contractor_contracts_and_offers.sql:56 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0026_contractor_contracts_and_offers.sql:57 | contract_id uuid NOT NULL REFERENCES contractor_contracts(id) ON DELETE RESTRICT, |
| packages/database/migrations/0026_contractor_contracts_and_offers.sql:58 | project_id uuid NOT NULL REFERENCES projects(id) ON DELETE RESTRICT, |
| packages/database/migrations/0026_contractor_contracts_and_offers.sql:59 | branch_id uuid REFERENCES branches(id), |
| packages/database/migrations/0026_contractor_contracts_and_offers.sql:64 | gross_amount numeric(20,4) NOT NULL CHECK (gross_amount > 0), |
| packages/database/migrations/0026_contractor_contracts_and_offers.sql:65 | retention_amount numeric(20,4) NOT NULL DEFAULT 0 CHECK (retention_amount >= 0), |
| packages/database/migrations/0026_contractor_contracts_and_offers.sql:66 | advance_recovery numeric(20,4) NOT NULL DEFAULT 0 CHECK (advance_recovery >= 0), |
| packages/database/migrations/0026_contractor_contracts_and_offers.sql:67 | net_amount numeric(20,4) NOT NULL DEFAULT 0 CHECK (net_amount >= 0), |
| packages/database/migrations/0026_contractor_contracts_and_offers.sql:68 | voucher_id uuid REFERENCES vouchers(id) ON DELETE SET NULL, |
| packages/database/migrations/0026_contractor_contracts_and_offers.sql:80 | CREATE UNIQUE INDEX IF NOT EXISTS contractor_payments_tenant_number_key ON contractor_payments(tenant_id, number); |
| packages/database/migrations/0026_contractor_contracts_and_offers.sql:81 | CREATE INDEX IF NOT EXISTS contractor_payments_contract_idx ON contractor_payments(tenant_id, contract_id, status); |
| packages/database/migrations/0026_contractor_contracts_and_offers.sql:85 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0026_contractor_contracts_and_offers.sql:86 | branch_id uuid REFERENCES branches(id), |
| packages/database/migrations/0026_contractor_contracts_and_offers.sql:87 | party_id uuid NOT NULL REFERENCES parties(id) ON DELETE RESTRICT, |
| packages/database/migrations/0026_contractor_contracts_and_offers.sql:88 | project_id uuid REFERENCES projects(id) ON DELETE SET NULL, |
| packages/database/migrations/0026_contractor_contracts_and_offers.sql:94 | total_value numeric(20,4) NOT NULL DEFAULT 0 CHECK (total_value >= 0), |
| packages/database/migrations/0026_contractor_contracts_and_offers.sql:95 | retention_pct numeric(7,4) NOT NULL DEFAULT 0 CHECK (retention_pct >= 0 AND retention_pct <= 100), |
| packages/database/migrations/0026_contractor_contracts_and_offers.sql:105 | CREATE UNIQUE INDEX IF NOT EXISTS project_offers_tenant_number_key ON project_offers(tenant_id, number); |
| packages/database/migrations/0026_contractor_contracts_and_offers.sql:106 | CREATE INDEX IF NOT EXISTS project_offers_party_idx ON project_offers(tenant_id, party_id, status); |
| packages/database/migrations/0026_contractor_contracts_and_offers.sql:109 | offer_id uuid NOT NULL REFERENCES project_offers(id) ON DELETE CASCADE, |
| packages/database/migrations/0026_contractor_contracts_and_offers.sql:111 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0026_contractor_contracts_and_offers.sql:114 | qty numeric(20,4) NOT NULL DEFAULT 1 CHECK (qty > 0), |
| packages/database/migrations/0026_contractor_contracts_and_offers.sql:115 | unit_value numeric(20,4) NOT NULL DEFAULT 0 CHECK (unit_value >= 0), |
| packages/database/migrations/0026_contractor_contracts_and_offers.sql:125 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0026_contractor_contracts_and_offers.sql:132 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0026_contractor_contracts_and_offers.sql:139 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0026_contractor_contracts_and_offers.sql:146 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0026_contractor_contracts_and_offers.sql:153 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0027_contracting_returns_and_production.sql:19 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0027_contracting_returns_and_production.sql:20 | project_id uuid NOT NULL REFERENCES projects(id) ON DELETE RESTRICT, |
| packages/database/migrations/0027_contracting_returns_and_production.sql:21 | bill_id uuid NOT NULL REFERENCES progress_bills(id) ON DELETE RESTRICT, |
| packages/database/migrations/0027_contracting_returns_and_production.sql:22 | branch_id uuid REFERENCES branches(id), |
| packages/database/migrations/0027_contracting_returns_and_production.sql:27 | return_value numeric(20,4) NOT NULL DEFAULT 0 CHECK (return_value >= 0), |
| packages/database/migrations/0027_contracting_returns_and_production.sql:28 | retention_value numeric(20,4) NOT NULL DEFAULT 0 CHECK (retention_value >= 0), |
| packages/database/migrations/0027_contracting_returns_and_production.sql:29 | net_value numeric(20,4) NOT NULL DEFAULT 0 CHECK (net_value >= 0), |
| packages/database/migrations/0027_contracting_returns_and_production.sql:30 | credit_note_id uuid REFERENCES sales_adjustment_notes(id) ON DELETE SET NULL, |
| packages/database/migrations/0027_contracting_returns_and_production.sql:39 | CREATE UNIQUE INDEX IF NOT EXISTS contracting_returns_tenant_number_key ON contracting_returns(tenant_id, number); |
| packages/database/migrations/0027_contracting_returns_and_production.sql:40 | CREATE INDEX IF NOT EXISTS contracting_returns_bill_idx ON contracting_returns(tenant_id, bill_id, status); |
| packages/database/migrations/0027_contracting_returns_and_production.sql:43 | return_id uuid NOT NULL REFERENCES contracting_returns(id) ON DELETE CASCADE, |
| packages/database/migrations/0027_contracting_returns_and_production.sql:45 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0027_contracting_returns_and_production.sql:46 | term_id uuid NOT NULL REFERENCES boq_terms(id) ON DELETE RESTRICT, |
| packages/database/migrations/0027_contracting_returns_and_production.sql:47 | return_value numeric(20,4) NOT NULL CHECK (return_value > 0), |
| packages/database/migrations/0027_contracting_returns_and_production.sql:50 | CREATE INDEX IF NOT EXISTS contracting_return_lines_term_idx ON contracting_return_lines(tenant_id, term_id); |
| packages/database/migrations/0027_contracting_returns_and_production.sql:54 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0027_contracting_returns_and_production.sql:55 | branch_id uuid REFERENCES branches(id), |
| packages/database/migrations/0027_contracting_returns_and_production.sql:56 | warehouse_id uuid NOT NULL REFERENCES warehouses(id) ON DELETE RESTRICT, |
| packages/database/migrations/0027_contracting_returns_and_production.sql:60 | output_item_id uuid NOT NULL REFERENCES items(id) ON DELETE RESTRICT, |
| packages/database/migrations/0027_contracting_returns_and_production.sql:61 | output_qty numeric(20,4) NOT NULL CHECK (output_qty > 0), |
| packages/database/migrations/0027_contracting_returns_and_production.sql:62 | component_cost numeric(20,4) NOT NULL DEFAULT 0 CHECK (component_cost >= 0), |
| packages/database/migrations/0027_contracting_returns_and_production.sql:63 | unit_cost numeric(20,4) NOT NULL DEFAULT 0 CHECK (unit_cost >= 0), |
| packages/database/migrations/0027_contracting_returns_and_production.sql:73 | CREATE UNIQUE INDEX IF NOT EXISTS production_orders_tenant_number_key ON production_orders(tenant_id, number); |
| packages/database/migrations/0027_contracting_returns_and_production.sql:74 | CREATE INDEX IF NOT EXISTS production_orders_status_idx ON production_orders(tenant_id, status, order_date); |
| packages/database/migrations/0027_contracting_returns_and_production.sql:77 | order_id uuid NOT NULL REFERENCES production_orders(id) ON DELETE CASCADE, |
| packages/database/migrations/0027_contracting_returns_and_production.sql:79 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0027_contracting_returns_and_production.sql:80 | item_id uuid NOT NULL REFERENCES items(id) ON DELETE RESTRICT, |
| packages/database/migrations/0027_contracting_returns_and_production.sql:81 | qty numeric(20,4) NOT NULL CHECK (qty > 0), |
| packages/database/migrations/0027_contracting_returns_and_production.sql:82 | unit_cost numeric(20,4) NOT NULL DEFAULT 0 CHECK (unit_cost >= 0), |
| packages/database/migrations/0027_contracting_returns_and_production.sql:83 | line_cost numeric(20,4) NOT NULL DEFAULT 0 CHECK (line_cost >= 0), |
| packages/database/migrations/0027_contracting_returns_and_production.sql:86 | CREATE INDEX IF NOT EXISTS production_order_components_item_idx ON production_order_components(tenant_id, item_id); |
| packages/database/migrations/0027_contracting_returns_and_production.sql:93 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0027_contracting_returns_and_production.sql:100 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0027_contracting_returns_and_production.sql:107 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0027_contracting_returns_and_production.sql:114 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0028_file_operations_and_report_layouts.sql:22 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0028_file_operations_and_report_layouts.sql:40 | CREATE INDEX IF NOT EXISTS backup_runs_tenant_idx ON backup_runs(tenant_id, created_at DESC); |
| packages/database/migrations/0028_file_operations_and_report_layouts.sql:44 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0028_file_operations_and_report_layouts.sql:45 | backup_id uuid REFERENCES backup_runs(id) ON DELETE SET NULL, |
| packages/database/migrations/0028_file_operations_and_report_layouts.sql:58 | CREATE INDEX IF NOT EXISTS restore_runs_tenant_idx ON restore_runs(tenant_id, created_at DESC); |
| packages/database/migrations/0028_file_operations_and_report_layouts.sql:62 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0028_file_operations_and_report_layouts.sql:67 | backup_id uuid REFERENCES backup_runs(id) ON DELETE SET NULL, |
| packages/database/migrations/0028_file_operations_and_report_layouts.sql:76 | CREATE INDEX IF NOT EXISTS maintenance_runs_tenant_idx ON maintenance_runs(tenant_id, kind, created_at DESC); |
| packages/database/migrations/0028_file_operations_and_report_layouts.sql:80 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0028_file_operations_and_report_layouts.sql:81 | new_tenant_id uuid REFERENCES tenants(id) ON DELETE SET NULL, |
| packages/database/migrations/0028_file_operations_and_report_layouts.sql:92 | CREATE INDEX IF NOT EXISTS company_files_tenant_idx ON company_files(tenant_id, created_at DESC); |
| packages/database/migrations/0028_file_operations_and_report_layouts.sql:96 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0028_file_operations_and_report_layouts.sql:109 | CREATE UNIQUE INDEX IF NOT EXISTS report_layouts_tenant_key_name ON report_layouts(tenant_id, report_key, name); |
| packages/database/migrations/0028_file_operations_and_report_layouts.sql:116 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0028_file_operations_and_report_layouts.sql:123 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0028_file_operations_and_report_layouts.sql:130 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0028_file_operations_and_report_layouts.sql:137 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0028_file_operations_and_report_layouts.sql:144 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0029_einvoice_counter.sql:19 | CHECK (status IN ('pending','prepared','signed','cleared','reported','failed','not_implemented')); |
| packages/database/migrations/0030_portal_accounts.sql:21 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0030_portal_accounts.sql:22 | party_id uuid NOT NULL REFERENCES parties(id) ON DELETE CASCADE, |
| packages/database/migrations/0030_portal_accounts.sql:23 | user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE, |
| packages/database/migrations/0030_portal_accounts.sql:24 | status text NOT NULL DEFAULT 'active' CHECK (status IN ('active','suspended')), |
| packages/database/migrations/0030_portal_accounts.sql:34 | CREATE UNIQUE INDEX IF NOT EXISTS portal_accounts_tenant_user_key ON portal_accounts(tenant_id, user_id); |
| packages/database/migrations/0030_portal_accounts.sql:35 | CREATE INDEX IF NOT EXISTS portal_accounts_party_idx ON portal_accounts(tenant_id, party_id); |
| packages/database/migrations/0030_portal_accounts.sql:42 | WITH CHECK (tenant_id = current_setting('app.tenant_id', true)::uuid); |
| packages/database/migrations/0031_mfa.sql:18 | user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE, |
| packages/database/migrations/0031_mfa.sql:26 | CREATE INDEX IF NOT EXISTS mfa_recovery_codes_user_idx ON mfa_recovery_codes(user_id); |
| packages/database/migrations/0032_platform_roles_devices_scopes.sql:44 | user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE, |
| packages/database/migrations/0032_platform_roles_devices_scopes.sql:45 | role_code text NOT NULL REFERENCES platform_roles(code) ON DELETE RESTRICT, |
| packages/database/migrations/0032_platform_roles_devices_scopes.sql:51 | CREATE UNIQUE INDEX IF NOT EXISTS platform_memberships_user_role_key |
| packages/database/migrations/0032_platform_roles_devices_scopes.sql:53 | CREATE INDEX IF NOT EXISTS platform_memberships_user_idx ON platform_memberships(user_id); |
| packages/database/migrations/0032_platform_roles_devices_scopes.sql:90 | ADD CONSTRAINT memberships_kind_check CHECK (kind IN ('staff', 'portal')); |
| packages/database/migrations/0032_platform_roles_devices_scopes.sql:104 | CREATE INDEX IF NOT EXISTS memberships_kind_idx ON memberships(tenant_id, kind); |
| packages/database/migrations/0032_platform_roles_devices_scopes.sql:111 | membership_id uuid NOT NULL REFERENCES memberships(id) ON DELETE CASCADE, |
| packages/database/migrations/0032_platform_roles_devices_scopes.sql:112 | role_id uuid NOT NULL REFERENCES roles(id) ON DELETE CASCADE, |
| packages/database/migrations/0032_platform_roles_devices_scopes.sql:113 | scope_type text NOT NULL CHECK (scope_type IN ('branch', 'warehouse', 'cash_location', 'pos_terminal')), |
| packages/database/migrations/0032_platform_roles_devices_scopes.sql:123 | CREATE INDEX IF NOT EXISTS membership_role_scopes_role_idx |
| packages/database/migrations/0032_platform_roles_devices_scopes.sql:125 | CREATE INDEX IF NOT EXISTS membership_role_scopes_scope_idx |
| packages/database/migrations/0032_platform_roles_devices_scopes.sql:136 | WITH CHECK (EXISTS ( |
| packages/database/migrations/0032_platform_roles_devices_scopes.sql:150 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0032_platform_roles_devices_scopes.sql:151 | branch_id uuid NOT NULL REFERENCES branches(id) ON DELETE RESTRICT, |
| packages/database/migrations/0032_platform_roles_devices_scopes.sql:155 | CHECK (activation_status IN ('pending', 'active', 'suspended', 'revoked')), |
| packages/database/migrations/0032_platform_roles_devices_scopes.sql:168 | CREATE UNIQUE INDEX IF NOT EXISTS devices_tenant_branch_name_key |
| packages/database/migrations/0032_platform_roles_devices_scopes.sql:170 | CREATE INDEX IF NOT EXISTS devices_branch_idx ON devices(tenant_id, branch_id); |
| packages/database/migrations/0032_platform_roles_devices_scopes.sql:171 | CREATE INDEX IF NOT EXISTS devices_status_idx ON devices(tenant_id, activation_status); |
| packages/database/migrations/0032_platform_roles_devices_scopes.sql:178 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0033_pos_shift_link.sql:28 | ADD COLUMN IF NOT EXISTS shift_id uuid REFERENCES shift_closes (id) ON DELETE SET NULL; |
| packages/database/migrations/0033_pos_shift_link.sql:30 | CREATE INDEX IF NOT EXISTS sales_invoices_shift_idx |
| packages/database/migrations/0034_inventory_vouchers.sql:28 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0034_inventory_vouchers.sql:29 | branch_id uuid NOT NULL REFERENCES branches(id), |
| packages/database/migrations/0034_inventory_vouchers.sql:30 | warehouse_id uuid NOT NULL REFERENCES warehouses(id), |
| packages/database/migrations/0034_inventory_vouchers.sql:47 | counter_account_id uuid REFERENCES accounts(id), |
| packages/database/migrations/0034_inventory_vouchers.sql:49 | journal_entry_id uuid REFERENCES journal_entries(id), |
| packages/database/migrations/0034_inventory_vouchers.sql:61 | CONSTRAINT stock_vouchers_kind_check CHECK (kind IN ('stock_in', 'stock_out', 'opening')), |
| packages/database/migrations/0034_inventory_vouchers.sql:62 | CONSTRAINT stock_vouchers_status_check CHECK (status IN ('draft', 'posted', 'voided')) |
| packages/database/migrations/0034_inventory_vouchers.sql:64 | CREATE UNIQUE INDEX IF NOT EXISTS stock_vouchers_tenant_number_key ON stock_vouchers(tenant_id, number); |
| packages/database/migrations/0034_inventory_vouchers.sql:65 | CREATE INDEX IF NOT EXISTS stock_vouchers_scope_idx ON stock_vouchers(tenant_id, branch_id, status); |
| packages/database/migrations/0034_inventory_vouchers.sql:68 | voucher_id uuid NOT NULL REFERENCES stock_vouchers(id) ON DELETE CASCADE, |
| packages/database/migrations/0034_inventory_vouchers.sql:70 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0034_inventory_vouchers.sql:71 | item_id uuid NOT NULL REFERENCES items(id), |
| packages/database/migrations/0034_inventory_vouchers.sql:76 | lot_id uuid REFERENCES item_lots(id), |
| packages/database/migrations/0034_inventory_vouchers.sql:77 | serial_id uuid REFERENCES item_serials(id), |
| packages/database/migrations/0034_inventory_vouchers.sql:81 | CREATE INDEX IF NOT EXISTS stock_voucher_lines_item_idx ON stock_voucher_lines(tenant_id, item_id); |
| packages/database/migrations/0034_inventory_vouchers.sql:88 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0034_inventory_vouchers.sql:95 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0034_inventory_vouchers.sql:107 | CHECK (status IN ('draft', 'in_transit', 'sent', 'partially_received', 'received', 'cancelled')); |
| packages/database/migrations/0034_inventory_vouchers.sql:109 | ALTER TABLE stock_transfers ADD COLUMN IF NOT EXISTS sent_journal_entry_id uuid REFERENCES journal_entries(id); |
| packages/database/migrations/0034_inventory_vouchers.sql:110 | ALTER TABLE stock_transfers ADD COLUMN IF NOT EXISTS received_journal_entry_id uuid REFERENCES journal_entries(id); |
| packages/database/migrations/0034_inventory_vouchers.sql:111 | ALTER TABLE stock_transfers ADD COLUMN IF NOT EXISTS branch_id uuid REFERENCES branches(id); |
| packages/database/migrations/0034_inventory_vouchers.sql:127 | CHECK (status IN ('draft', 'approved', 'posted', 'cancelled')); |
| packages/database/migrations/0035_item_units_barcodes.sql:23 | ALTER TABLE item_units ADD COLUMN IF NOT EXISTS tenant_id uuid REFERENCES tenants(id); |
| packages/database/migrations/0035_item_units_barcodes.sql:24 | ALTER TABLE item_components ADD COLUMN IF NOT EXISTS tenant_id uuid REFERENCES tenants(id); |
| packages/database/migrations/0035_item_units_barcodes.sql:41 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0035_item_units_barcodes.sql:46 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0035_item_units_barcodes.sql:50 | CREATE UNIQUE INDEX IF NOT EXISTS item_units_tenant_item_unit_key ON item_units(tenant_id, item_id, unit_id); |
| packages/database/migrations/0035_item_units_barcodes.sql:51 | CREATE UNIQUE INDEX IF NOT EXISTS item_components_tenant_item_component_key ON item_components(tenant_id, item_id, component_item_id); |
| packages/database/migrations/0035_item_units_barcodes.sql:60 | ALTER TABLE inventory_transactions ADD COLUMN IF NOT EXISTS unit_id uuid REFERENCES units_of_measure(id); |
| packages/database/migrations/0035_item_units_barcodes.sql:74 | ALTER TABLE stock_voucher_lines ADD COLUMN IF NOT EXISTS unit_id uuid REFERENCES units_of_measure(id); |
| packages/database/migrations/0035_item_units_barcodes.sql:75 | ALTER TABLE stock_adjustment_lines ADD COLUMN IF NOT EXISTS unit_id uuid REFERENCES units_of_measure(id); |
| packages/database/migrations/0035_item_units_barcodes.sql:76 | ALTER TABLE stock_transfer_lines ADD COLUMN IF NOT EXISTS unit_id uuid REFERENCES units_of_measure(id); |
| packages/database/migrations/0036_transfer_closure.sql:22 | CHECK (status IN ('draft', 'in_transit', 'sent', 'partially_received', 'received', 'cancelled', 'closed')); |
| packages/database/migrations/0036_transfer_closure.sql:25 | ALTER TABLE stock_transfers ADD COLUMN IF NOT EXISTS closed_journal_entry_id uuid REFERENCES journal_entries(id); |
| packages/database/migrations/0037_item_components.sql:24 | ADD COLUMN IF NOT EXISTS warehouse_id uuid REFERENCES warehouses (id); |
| packages/database/migrations/0037_item_components.sql:28 | CREATE INDEX IF NOT EXISTS item_components_warehouse_idx |
| packages/database/migrations/0037_item_components.sql:37 | ADD COLUMN IF NOT EXISTS unit_id uuid REFERENCES units_of_measure (id); |
| packages/database/migrations/0038_production_order_reference.sql:19 | ADD COLUMN IF NOT EXISTS unit_id uuid REFERENCES units_of_measure (id); |
| packages/database/migrations/0038_production_order_reference.sql:29 | CREATE INDEX IF NOT EXISTS production_orders_reference_idx |
| packages/database/migrations/0039_document_line_serials.sql:35 | tenant_id uuid NOT NULL REFERENCES tenants (id) ON DELETE CASCADE, |
| packages/database/migrations/0039_document_line_serials.sql:39 | item_id uuid NOT NULL REFERENCES items (id), |
| packages/database/migrations/0039_document_line_serials.sql:40 | serial_id uuid NOT NULL REFERENCES item_serials (id), |
| packages/database/migrations/0039_document_line_serials.sql:48 | CREATE UNIQUE INDEX IF NOT EXISTS stock_document_serials_line_key |
| packages/database/migrations/0039_document_line_serials.sql:52 | CREATE INDEX IF NOT EXISTS stock_document_serials_serial_idx |
| packages/database/migrations/0039_document_line_serials.sql:56 | CREATE UNIQUE INDEX IF NOT EXISTS stock_document_serials_doc_key |
| packages/database/migrations/0039_document_line_serials.sql:65 | WITH CHECK (tenant_id = current_setting('app.tenant_id', true)::uuid); |
| packages/database/migrations/0040_treasury_voucher_detail.sql:44 | FOREIGN KEY (salesman_id) REFERENCES employees (id) ON DELETE SET NULL; |
| packages/database/migrations/0040_treasury_voucher_detail.sql:46 | CREATE INDEX IF NOT EXISTS vouchers_salesman_idx |
| packages/database/migrations/0040_treasury_voucher_detail.sql:53 | CREATE INDEX IF NOT EXISTS vouchers_location_date_idx |
| packages/database/migrations/0041_treasury_custody.sql:27 | tenant_id uuid NOT NULL REFERENCES tenants (id) ON DELETE CASCADE, |
| packages/database/migrations/0041_treasury_custody.sql:28 | cash_location_id uuid NOT NULL REFERENCES cash_locations (id) ON DELETE CASCADE, |
| packages/database/migrations/0041_treasury_custody.sql:29 | employee_id uuid NOT NULL REFERENCES employees (id) ON DELETE CASCADE, |
| packages/database/migrations/0041_treasury_custody.sql:43 | CREATE UNIQUE INDEX IF NOT EXISTS cash_location_custodians_key |
| packages/database/migrations/0041_treasury_custody.sql:47 | CREATE INDEX IF NOT EXISTS cash_location_custodians_employee_idx |
| packages/database/migrations/0041_treasury_custody.sql:56 | WITH CHECK (tenant_id = current_setting('app.tenant_id', true)::uuid); |
| packages/database/migrations/0042_shift_close_number.sql:21 | CREATE UNIQUE INDEX IF NOT EXISTS shift_closes_number_key |
| packages/database/migrations/0043_shift_close_entry.sql:18 | ADD COLUMN IF NOT EXISTS journal_entry_id uuid REFERENCES journal_entries(id), |
| packages/database/migrations/0043_shift_close_entry.sql:26 | CREATE INDEX IF NOT EXISTS shift_closes_entry_idx |
| packages/database/migrations/0045_account_card.sql:18 | ADD COLUMN IF NOT EXISTS cost_center_id uuid REFERENCES cost_centers(id); |
| packages/database/migrations/0045_account_card.sql:27 | CREATE INDEX IF NOT EXISTS accounts_cost_center_idx |
| packages/database/migrations/0046_journal_entry_card.sql:22 | ADD COLUMN IF NOT EXISTS salesman_id uuid REFERENCES employees(id); |
| packages/database/migrations/0046_journal_entry_card.sql:31 | CREATE INDEX IF NOT EXISTS journal_entry_lines_salesman_idx |
| packages/database/migrations/0047_reversal_voids_original.sql:29 | CREATE OR REPLACE FUNCTION prevent_posted_journal_mutation() RETURNS trigger LANGUAGE plpgsql AS $$ |
| packages/database/migrations/0048_fiscal_period_card.sql:45 | CREATE UNIQUE INDEX IF NOT EXISTS fiscal_periods_one_active_idx |
| packages/database/migrations/0049_employee_card.sql:50 | ADD COLUMN IF NOT EXISTS parent_id uuid REFERENCES departments (id) ON DELETE restrict; |
| packages/database/migrations/0049_employee_card.sql:52 | CREATE INDEX IF NOT EXISTS departments_parent_idx ON departments (tenant_id, parent_id); |
| packages/database/migrations/0049_employee_card.sql:69 | ADD COLUMN IF NOT EXISTS employee_account_id uuid REFERENCES accounts (id) ON DELETE set null; |
| packages/database/migrations/0049_employee_card.sql:71 | CREATE INDEX IF NOT EXISTS employees_account_idx ON employees (tenant_id, employee_account_id); |
| packages/database/migrations/0050_salary_adjustment_card.sql:41 | tenant_id uuid NOT NULL REFERENCES tenants (id) ON DELETE cascade, |
| packages/database/migrations/0050_salary_adjustment_card.sql:56 | CREATE UNIQUE INDEX IF NOT EXISTS salary_adjustment_types_tenant_code_key |
| packages/database/migrations/0050_salary_adjustment_card.sql:60 | CREATE INDEX IF NOT EXISTS salary_adjustment_types_tenant_idx |
| packages/database/migrations/0050_salary_adjustment_card.sql:83 | ADD COLUMN IF NOT EXISTS type_id uuid REFERENCES salary_adjustment_types (id) ON DELETE restrict, |
| packages/database/migrations/0050_salary_adjustment_card.sql:88 | CREATE UNIQUE INDEX IF NOT EXISTS salary_adjustments_tenant_number_key |
| packages/database/migrations/0050_salary_adjustment_card.sql:92 | CREATE INDEX IF NOT EXISTS salary_adjustments_type_idx |
| packages/database/migrations/0051_salary_payment_card.sql:45 | tenant_id uuid NOT NULL REFERENCES tenants (id) ON DELETE cascade, |
| packages/database/migrations/0051_salary_payment_card.sql:47 | employee_id uuid NOT NULL REFERENCES employees (id) ON DELETE restrict, |
| packages/database/migrations/0051_salary_payment_card.sql:48 | branch_id uuid REFERENCES branches (id) ON DELETE set null, |
| packages/database/migrations/0051_salary_payment_card.sql:49 | run_id uuid REFERENCES payroll_runs (id) ON DELETE set null, |
| packages/database/migrations/0051_salary_payment_card.sql:53 | cash_location_id uuid REFERENCES cash_locations (id) ON DELETE restrict, |
| packages/database/migrations/0051_salary_payment_card.sql:54 | responsible_employee_id uuid REFERENCES employees (id) ON DELETE set null, |
| packages/database/migrations/0051_salary_payment_card.sql:64 | voucher_id uuid REFERENCES vouchers (id) ON DELETE set null, |
| packages/database/migrations/0051_salary_payment_card.sql:65 | journal_entry_id uuid REFERENCES journal_entries (id) ON DELETE set null, |
| packages/database/migrations/0051_salary_payment_card.sql:76 | CREATE UNIQUE INDEX IF NOT EXISTS salary_payments_tenant_number_key |
| packages/database/migrations/0051_salary_payment_card.sql:81 | CREATE UNIQUE INDEX IF NOT EXISTS salary_payments_employee_month_key |
| packages/database/migrations/0051_salary_payment_card.sql:85 | CREATE INDEX IF NOT EXISTS salary_payments_tenant_date_idx |
| packages/database/migrations/0051_salary_payment_card.sql:88 | CREATE INDEX IF NOT EXISTS salary_payments_tenant_employee_idx |
| packages/database/migrations/0052_salesman_card.sql:49 | ADD COLUMN IF NOT EXISTS employee_id uuid REFERENCES employees (id) ON DELETE set null, |
| packages/database/migrations/0052_salesman_card.sql:56 | CREATE UNIQUE INDEX IF NOT EXISTS salesmen_tenant_employee_key |
| packages/database/migrations/0052_salesman_card.sql:60 | CREATE INDEX IF NOT EXISTS salesmen_tenant_active_idx |
| packages/database/migrations/0053_tailoring_orders.sql:66 | tenant_id uuid NOT NULL REFERENCES tenants (id) ON DELETE cascade, |
| packages/database/migrations/0053_tailoring_orders.sql:81 | CREATE UNIQUE INDEX IF NOT EXISTS tailoring_order_statuses_tenant_code_key |
| packages/database/migrations/0053_tailoring_orders.sql:85 | CREATE INDEX IF NOT EXISTS tailoring_order_statuses_tenant_idx |
| packages/database/migrations/0053_tailoring_orders.sql:110 | tenant_id uuid NOT NULL REFERENCES tenants (id) ON DELETE cascade, |
| packages/database/migrations/0053_tailoring_orders.sql:124 | CREATE UNIQUE INDEX IF NOT EXISTS tailoring_types_tenant_name_key |
| packages/database/migrations/0053_tailoring_orders.sql:128 | CREATE UNIQUE INDEX IF NOT EXISTS tailoring_types_tenant_code_key |
| packages/database/migrations/0053_tailoring_orders.sql:135 | tenant_id uuid NOT NULL REFERENCES tenants (id) ON DELETE cascade, |
| packages/database/migrations/0053_tailoring_orders.sql:148 | CREATE UNIQUE INDEX IF NOT EXISTS tailoring_option_categories_tenant_name_key |
| packages/database/migrations/0053_tailoring_orders.sql:152 | CREATE INDEX IF NOT EXISTS tailoring_option_categories_tenant_idx |
| packages/database/migrations/0053_tailoring_orders.sql:158 | tenant_id uuid NOT NULL REFERENCES tenants (id) ON DELETE cascade, |
| packages/database/migrations/0053_tailoring_orders.sql:159 | category_id uuid NOT NULL REFERENCES tailoring_option_categories (id) ON DELETE cascade, |
| packages/database/migrations/0053_tailoring_orders.sql:173 | CREATE UNIQUE INDEX IF NOT EXISTS tailoring_option_values_tenant_name_key |
| packages/database/migrations/0053_tailoring_orders.sql:177 | CREATE INDEX IF NOT EXISTS tailoring_option_values_category_idx |
| packages/database/migrations/0053_tailoring_orders.sql:183 | tenant_id uuid NOT NULL REFERENCES tenants (id) ON DELETE cascade, |
| packages/database/migrations/0053_tailoring_orders.sql:185 | party_id uuid NOT NULL REFERENCES parties (id) ON DELETE restrict, |
| packages/database/migrations/0053_tailoring_orders.sql:186 | measurement_id uuid REFERENCES customer_measurements (id) ON DELETE set null, |
| packages/database/migrations/0053_tailoring_orders.sql:187 | type_id uuid NOT NULL REFERENCES tailoring_types (id) ON DELETE restrict, |
| packages/database/migrations/0053_tailoring_orders.sql:188 | status_id uuid NOT NULL REFERENCES tailoring_order_statuses (id) ON DELETE restrict, |
| packages/database/migrations/0053_tailoring_orders.sql:207 | CREATE UNIQUE INDEX IF NOT EXISTS tailoring_orders_tenant_number_key |
| packages/database/migrations/0053_tailoring_orders.sql:211 | CREATE INDEX IF NOT EXISTS tailoring_orders_tenant_date_idx |
| packages/database/migrations/0053_tailoring_orders.sql:214 | CREATE INDEX IF NOT EXISTS tailoring_orders_tenant_party_idx |
| packages/database/migrations/0053_tailoring_orders.sql:217 | CREATE INDEX IF NOT EXISTS tailoring_orders_tenant_status_idx |
| packages/database/migrations/0053_tailoring_orders.sql:226 | tenant_id uuid NOT NULL REFERENCES tenants (id) ON DELETE cascade, |
| packages/database/migrations/0053_tailoring_orders.sql:227 | order_id uuid NOT NULL REFERENCES tailoring_orders (id) ON DELETE cascade, |
| packages/database/migrations/0053_tailoring_orders.sql:228 | category_id uuid NOT NULL REFERENCES tailoring_option_categories (id) ON DELETE cascade, |
| packages/database/migrations/0053_tailoring_orders.sql:229 | value_id uuid NOT NULL REFERENCES tailoring_option_values (id) ON DELETE restrict, |
| packages/database/migrations/0053_tailoring_orders.sql:237 | CREATE UNIQUE INDEX IF NOT EXISTS tailoring_order_options_tenant_key |
| packages/database/migrations/0054_tailoring_invoices.sql:66 | tenant_id uuid NOT NULL REFERENCES tenants (id) ON DELETE cascade, |
| packages/database/migrations/0054_tailoring_invoices.sql:80 | CREATE UNIQUE INDEX IF NOT EXISTS tailoring_garment_types_tenant_code_key |
| packages/database/migrations/0054_tailoring_invoices.sql:84 | CREATE INDEX IF NOT EXISTS tailoring_garment_types_tenant_idx |
| packages/database/migrations/0054_tailoring_invoices.sql:106 | tenant_id uuid NOT NULL REFERENCES tenants (id) ON DELETE cascade, |
| packages/database/migrations/0054_tailoring_invoices.sql:108 | party_id uuid REFERENCES parties (id) ON DELETE restrict, |
| packages/database/migrations/0054_tailoring_invoices.sql:116 | status_id uuid NOT NULL REFERENCES tailoring_order_statuses (id) ON DELETE restrict, |
| packages/database/migrations/0054_tailoring_invoices.sql:117 | garment_type_id uuid REFERENCES tailoring_garment_types (id) ON DELETE set null, |
| packages/database/migrations/0054_tailoring_invoices.sql:131 | CREATE UNIQUE INDEX IF NOT EXISTS tailoring_invoices_tenant_number_key |
| packages/database/migrations/0054_tailoring_invoices.sql:135 | CREATE INDEX IF NOT EXISTS tailoring_invoices_tenant_date_idx |
| packages/database/migrations/0054_tailoring_invoices.sql:138 | CREATE INDEX IF NOT EXISTS tailoring_invoices_tenant_party_idx |
| packages/database/migrations/0054_tailoring_invoices.sql:141 | CREATE INDEX IF NOT EXISTS tailoring_invoices_tenant_name_idx |
| packages/database/migrations/0054_tailoring_invoices.sql:144 | CREATE INDEX IF NOT EXISTS tailoring_invoices_tenant_status_idx |
| packages/database/migrations/0054_tailoring_invoices.sql:157 | tenant_id uuid NOT NULL REFERENCES tenants (id) ON DELETE cascade, |
| packages/database/migrations/0054_tailoring_invoices.sql:158 | invoice_id uuid NOT NULL REFERENCES tailoring_invoices (id) ON DELETE cascade, |
| packages/database/migrations/0054_tailoring_invoices.sql:159 | voucher_id uuid REFERENCES vouchers (id) ON DELETE set null, |
| packages/database/migrations/0054_tailoring_invoices.sql:167 | CREATE INDEX IF NOT EXISTS tailoring_invoice_payments_invoice_idx |
| packages/database/migrations/0055_measurements.sql:60 | tenant_id uuid NOT NULL REFERENCES tenants (id) ON DELETE cascade, |
| packages/database/migrations/0055_measurements.sql:73 | CREATE UNIQUE INDEX IF NOT EXISTS tailoring_measurement_attributes_tenant_name_key |
| packages/database/migrations/0055_measurements.sql:77 | CREATE INDEX IF NOT EXISTS tailoring_measurement_attributes_tenant_idx |
| packages/database/migrations/0055_measurements.sql:109 | CREATE INDEX IF NOT EXISTS customer_measurements_tenant_date_idx |
| packages/database/migrations/0056_optics_labels.sql:48 | tenant_id uuid NOT NULL REFERENCES tenants (id) ON DELETE cascade, |
| packages/database/migrations/0056_optics_labels.sql:70 | CREATE UNIQUE INDEX IF NOT EXISTS optics_field_labels_tenant_key |
| packages/database/migrations/0057_marina_bookings.sql:63 | CREATE UNIQUE INDEX IF NOT EXISTS marina_bookings_tenant_number_key |
| packages/database/migrations/0057_marina_bookings.sql:66 | CREATE INDEX IF NOT EXISTS marina_bookings_tenant_date_idx |
| packages/database/migrations/0057_marina_bookings.sql:89 | CREATE UNIQUE INDEX IF NOT EXISTS marina_violations_tenant_number_key |
| packages/database/migrations/0057_marina_bookings.sql:92 | CREATE INDEX IF NOT EXISTS marina_violations_tenant_type_idx |
| packages/database/migrations/0058_vessel_group_cards.sql:77 | CREATE UNIQUE INDEX IF NOT EXISTS vessel_groups_tenant_number_key |
| packages/database/migrations/0058_vessel_group_cards.sql:100 | CREATE UNIQUE INDEX IF NOT EXISTS vessel_group_pricing_period_key |
| packages/database/migrations/0058_vessel_group_cards.sql:109 | CHECK (period_kind IN ('hour', 'half_hour', 'offer', 'day') OR period_kind ~ '^period_[0-9]+$'); |
| packages/database/migrations/0059_salla_store.sql:41 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0059_salla_store.sql:42 | connection_id uuid NOT NULL REFERENCES salla_connections(id) ON DELETE CASCADE, |
| packages/database/migrations/0059_salla_store.sql:59 | CREATE UNIQUE INDEX IF NOT EXISTS salla_products_remote_key |
| packages/database/migrations/0059_salla_store.sql:61 | CREATE INDEX IF NOT EXISTS salla_products_connection_idx |
| packages/database/migrations/0059_salla_store.sql:71 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0059_salla_store.sql:72 | connection_id uuid NOT NULL REFERENCES salla_connections(id) ON DELETE CASCADE, |
| packages/database/migrations/0059_salla_store.sql:94 | CREATE UNIQUE INDEX IF NOT EXISTS salla_orders_remote_key |
| packages/database/migrations/0059_salla_store.sql:97 | CREATE INDEX IF NOT EXISTS salla_orders_connection_idx |
| packages/database/migrations/0059_salla_store.sql:109 | 'CREATE POLICY %I_tenant_isolation ON %I USING (tenant_id = current_setting(''app.tenant_id'', true)::uuid) WITH CHECK (tenant_id = current_setting(''app.tenant_id'', true)::uuid)', |
| packages/database/migrations/0060_marina_additions.sql:47 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0060_marina_additions.sql:64 | CREATE UNIQUE INDEX IF NOT EXISTS marina_additions_tenant_number_key |
| packages/database/migrations/0060_marina_additions.sql:67 | CREATE INDEX IF NOT EXISTS marina_additions_tenant_name_idx |
| packages/database/migrations/0060_marina_additions.sql:76 | ALTER TABLE marina_booking_additions ADD COLUMN IF NOT EXISTS addition_id uuid REFERENCES marina_additions(id) ON DELETE SET NULL; |
| packages/database/migrations/0060_marina_additions.sql:77 | CREATE INDEX IF NOT EXISTS marina_booking_additions_addition_idx |
| packages/database/migrations/0060_marina_additions.sql:88 | 'CREATE POLICY %I_tenant_isolation ON %I USING (tenant_id = current_setting(''app.tenant_id'', true)::uuid) WITH CHECK (tenant_id = current_setting(''app.tenant_id'', true)::uuid)', |
| packages/database/migrations/0061_print_settings.sql:16 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0061_print_settings.sql:18 | print_type int NOT NULL DEFAULT 1 CHECK (print_type IN (1, 2)), |
| packages/database/migrations/0061_print_settings.sql:26 | print_no int NOT NULL DEFAULT 1 CHECK (print_no BETWEEN 1 AND 50), |
| packages/database/migrations/0061_print_settings.sql:43 | CREATE UNIQUE INDEX IF NOT EXISTS print_settings_tenant_scope_key |
| packages/database/migrations/0061_print_settings.sql:45 | CREATE INDEX IF NOT EXISTS print_settings_tenant_idx ON print_settings (tenant_id); |
| packages/database/migrations/0061_print_settings.sql:52 | WITH CHECK (tenant_id = current_setting('app.tenant_id', true)::uuid); |
| packages/database/migrations/0062_einvoice_zatca_settings.sql:26 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0062_einvoice_zatca_settings.sql:27 | authority text NOT NULL DEFAULT 'zatca' CHECK (authority IN ('zatca', 'eta')), |
| packages/database/migrations/0062_einvoice_zatca_settings.sql:29 | environment text NOT NULL DEFAULT 'compliance' CHECK (environment IN ('compliance', 'production')), |
| packages/database/migrations/0062_einvoice_zatca_settings.sql:62 | CONSTRAINT einvoice_settings_serial_number_check CHECK (length(serial_number) <= 200) |
| packages/database/migrations/0062_einvoice_zatca_settings.sql:65 | CREATE UNIQUE INDEX IF NOT EXISTS einvoice_settings_tenant_authority_key |
| packages/database/migrations/0062_einvoice_zatca_settings.sql:67 | CREATE INDEX IF NOT EXISTS einvoice_settings_tenant_idx ON einvoice_settings (tenant_id); |
| packages/database/migrations/0062_einvoice_zatca_settings.sql:74 | WITH CHECK (tenant_id = current_setting('app.tenant_id', true)::uuid); |
| packages/database/migrations/0063_einvoice_filing.sql:40 | CREATE INDEX IF NOT EXISTS einvoice_submissions_recent_idx ON einvoice_submissions (tenant_id, created_at DESC); |
| packages/database/migrations/0063_einvoice_filing.sql:47 | EXECUTE 'CREATE POLICY einvoice_submissions_tenant_isolation ON einvoice_submissions USING (tenant_id = current_setting(''app.tenant_id'', true)::uuid) WITH CHECK (tenant_id = current_setting(''app.tenant_id'', true)::uuid)'; |
| packages/database/migrations/0064_payment_gateways.sql:46 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0064_payment_gateways.sql:48 | provider text NOT NULL CHECK (provider IN ('geidea', 'neoleap')), |
| packages/database/migrations/0064_payment_gateways.sql:75 | CONSTRAINT payment_gateway_settings_port_check CHECK (port IS NULL OR (port >= 0 AND port <= 65535)) |
| packages/database/migrations/0064_payment_gateways.sql:78 | CREATE UNIQUE INDEX IF NOT EXISTS payment_gateway_settings_tenant_provider_key |
| packages/database/migrations/0064_payment_gateways.sql:80 | CREATE INDEX IF NOT EXISTS payment_gateway_settings_tenant_idx ON payment_gateway_settings (tenant_id); |
| packages/database/migrations/0064_payment_gateways.sql:87 | WITH CHECK (tenant_id = current_setting('app.tenant_id', true)::uuid); |
| packages/database/migrations/0064_payment_gateways.sql:91 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0064_payment_gateways.sql:92 | provider text NOT NULL CHECK (provider IN ('geidea', 'neoleap')), |
| packages/database/migrations/0064_payment_gateways.sql:105 | CHECK (status IN ('initiated', 'approved', 'declined', 'cancelled', 'unknown', 'error')), |
| packages/database/migrations/0064_payment_gateways.sql:129 | CREATE UNIQUE INDEX IF NOT EXISTS payment_gateway_transactions_reference_key |
| packages/database/migrations/0064_payment_gateways.sql:131 | CREATE INDEX IF NOT EXISTS payment_gateway_transactions_recent_idx |
| packages/database/migrations/0064_payment_gateways.sql:133 | CREATE INDEX IF NOT EXISTS payment_gateway_transactions_invoice_idx |
| packages/database/migrations/0064_payment_gateways.sql:141 | WITH CHECK (tenant_id = current_setting('app.tenant_id', true)::uuid); |
| packages/database/migrations/0065_whatsapp_messages.sql:40 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0065_whatsapp_messages.sql:60 | CONSTRAINT whatsapp_settings_country_code_check CHECK (default_country_code ~ '^[0-9]{1,4}$') |
| packages/database/migrations/0065_whatsapp_messages.sql:63 | CREATE UNIQUE INDEX IF NOT EXISTS whatsapp_settings_tenant_key ON whatsapp_settings (tenant_id); |
| packages/database/migrations/0065_whatsapp_messages.sql:70 | WITH CHECK (tenant_id = current_setting('app.tenant_id', true)::uuid); |
| packages/database/migrations/0065_whatsapp_messages.sql:74 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0065_whatsapp_messages.sql:85 | CHECK (attachment_status IN ('none', 'sent', 'failed')), |
| packages/database/migrations/0065_whatsapp_messages.sql:87 | status text NOT NULL DEFAULT 'sent' CHECK (status IN ('sent', 'failed', 'skipped')), |
| packages/database/migrations/0065_whatsapp_messages.sql:98 | CREATE INDEX IF NOT EXISTS whatsapp_messages_recent_idx ON whatsapp_messages (tenant_id, created_at DESC); |
| packages/database/migrations/0065_whatsapp_messages.sql:99 | CREATE INDEX IF NOT EXISTS whatsapp_messages_invoice_idx ON whatsapp_messages (tenant_id, invoice_id); |
| packages/database/migrations/0065_whatsapp_messages.sql:106 | WITH CHECK (tenant_id = current_setting('app.tenant_id', true)::uuid); |
| packages/database/migrations/0066_platform_settings.sql:33 | tenant_id  uuid REFERENCES tenants (id) ON DELETE CASCADE, |
| packages/database/migrations/0066_platform_settings.sql:42 | CONSTRAINT platform_settings_key_check CHECK (length(btrim(key)) BETWEEN 1 AND 120) |
| packages/database/migrations/0066_platform_settings.sql:47 | CREATE UNIQUE INDEX IF NOT EXISTS platform_settings_scope_key |
| packages/database/migrations/0066_platform_settings.sql:49 | CREATE INDEX IF NOT EXISTS platform_settings_tenant_idx ON platform_settings (tenant_id, key); |
| packages/database/migrations/0066_platform_settings.sql:63 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0066_platform_settings.sql:69 | WITH CHECK (COALESCE(current_setting('app.is_platform_admin', true), 'off') = 'on'); |
| packages/database/migrations/0067_tenant_card.sql:31 | tenant_id      uuid NOT NULL REFERENCES tenants (id) ON DELETE CASCADE, |
| packages/database/migrations/0067_tenant_card.sql:42 | CONSTRAINT tenant_notes_body_check CHECK (length(btrim(body)) BETWEEN 3 AND 4000) |
| packages/database/migrations/0067_tenant_card.sql:45 | CREATE INDEX IF NOT EXISTS tenant_notes_tenant_idx |
| packages/database/migrations/0067_tenant_card.sql:54 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0067_tenant_card.sql:61 | WITH CHECK (COALESCE(current_setting('app.is_platform_admin', true), 'off') = 'on'); |
| packages/database/migrations/0067_tenant_card.sql:78 | WITH CHECK (COALESCE(current_setting('app.is_platform_admin', true), 'off') = 'on'); |
| packages/database/migrations/0067_tenant_card.sql:89 | WITH CHECK (COALESCE(current_setting('app.is_platform_admin', true), 'off') = 'on'); |
| packages/database/migrations/0067_tenant_card.sql:173 | EXECUTE format('ALTER POLICY %I ON %I USING (%s) WITH CHECK (%s)', |
| packages/database/migrations/0068_platform_billing.sql:49 | CHECK (status IN ('pending', 'trialing', 'active', 'past_due', 'paused', 'canceled', 'expired', 'incomplete')); |
| packages/database/migrations/0068_platform_billing.sql:62 | CREATE UNIQUE INDEX IF NOT EXISTS tenant_subscriptions_active_tenant_key |
| packages/database/migrations/0068_platform_billing.sql:72 | plan_id    uuid NOT NULL REFERENCES billing_plans (id) ON DELETE CASCADE, |
| packages/database/migrations/0068_platform_billing.sql:74 | kind       text NOT NULL CHECK (kind IN ('module', 'limit', 'flag')), |
| packages/database/migrations/0068_platform_billing.sql:83 | CREATE UNIQUE INDEX IF NOT EXISTS billing_plan_entitlements_plan_key |
| packages/database/migrations/0068_platform_billing.sql:85 | CREATE INDEX IF NOT EXISTS billing_plan_entitlements_plan_idx |
| packages/database/migrations/0068_platform_billing.sql:96 | WITH CHECK (COALESCE(current_setting('app.is_platform_admin', true), 'off') = 'on'); |
| packages/database/migrations/0068_platform_billing.sql:111 | CONSTRAINT platform_invoice_sequences_padding_check CHECK (padding BETWEEN 1 AND 18), |
| packages/database/migrations/0068_platform_billing.sql:112 | CONSTRAINT platform_invoice_sequences_value_check   CHECK (current_value >= 0) |
| packages/database/migrations/0068_platform_billing.sql:121 | WITH CHECK (COALESCE(current_setting('app.is_platform_admin', true), 'off') = 'on'); |
| packages/database/migrations/0068_platform_billing.sql:135 | tenant_id         uuid NOT NULL REFERENCES tenants (id) ON DELETE CASCADE, |
| packages/database/migrations/0068_platform_billing.sql:136 | subscription_id   uuid REFERENCES tenant_subscriptions (id) ON DELETE SET NULL, |
| packages/database/migrations/0068_platform_billing.sql:137 | kind              text NOT NULL DEFAULT 'invoice' CHECK (kind IN ('invoice', 'credit_note')), |
| packages/database/migrations/0068_platform_billing.sql:138 | status            text NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'issued', 'paid', 'void')), |
| packages/database/migrations/0068_platform_billing.sql:145 | tax_rate          numeric(6,3) NOT NULL DEFAULT 15 CHECK (tax_rate >= 0 AND tax_rate <= 100), |
| packages/database/migrations/0068_platform_billing.sql:170 | CONSTRAINT platform_invoices_total_check CHECK (total = subtotal + tax_amount), |
| packages/database/migrations/0068_platform_billing.sql:171 | CONSTRAINT platform_invoices_paid_check  CHECK (paid_amount >= 0), |
| packages/database/migrations/0068_platform_billing.sql:175 | CONSTRAINT platform_invoices_number_check CHECK (status IN ('draft', 'void') OR number IS NOT NULL) |
| packages/database/migrations/0068_platform_billing.sql:178 | CREATE UNIQUE INDEX IF NOT EXISTS platform_invoices_number_key |
| packages/database/migrations/0068_platform_billing.sql:180 | CREATE INDEX IF NOT EXISTS platform_invoices_tenant_created_idx |
| packages/database/migrations/0068_platform_billing.sql:182 | CREATE INDEX IF NOT EXISTS platform_invoices_status_due_idx |
| packages/database/migrations/0068_platform_billing.sql:184 | CREATE INDEX IF NOT EXISTS platform_invoices_subscription_idx |
| packages/database/migrations/0068_platform_billing.sql:189 | invoice_id  uuid NOT NULL REFERENCES platform_invoices (id) ON DELETE CASCADE, |
| packages/database/migrations/0068_platform_billing.sql:192 | tenant_id   uuid NOT NULL REFERENCES tenants (id) ON DELETE CASCADE, |
| packages/database/migrations/0068_platform_billing.sql:194 | kind        text NOT NULL CHECK (kind IN ('subscription', 'proration', 'discount', 'adjustment')), |
| packages/database/migrations/0068_platform_billing.sql:203 | CREATE UNIQUE INDEX IF NOT EXISTS platform_invoice_lines_invoice_no |
| packages/database/migrations/0068_platform_billing.sql:205 | CREATE INDEX IF NOT EXISTS platform_invoice_lines_tenant_idx |
| packages/database/migrations/0068_platform_billing.sql:214 | invoice_id        uuid NOT NULL REFERENCES platform_invoices (id) ON DELETE CASCADE, |
| packages/database/migrations/0068_platform_billing.sql:215 | tenant_id         uuid NOT NULL REFERENCES tenants (id) ON DELETE CASCADE, |
| packages/database/migrations/0068_platform_billing.sql:216 | method            text NOT NULL CHECK (method IN ('bank_transfer', 'cash', 'card', 'other')), |
| packages/database/migrations/0068_platform_billing.sql:217 | amount            numeric(20,4) NOT NULL CHECK (amount > 0), |
| packages/database/migrations/0068_platform_billing.sql:220 | gateway           text CHECK (gateway IN ('geidea', 'neoleap')), |
| packages/database/migrations/0068_platform_billing.sql:222 | status            text NOT NULL DEFAULT 'recorded' CHECK (status IN ('recorded', 'refunded', 'failed')), |
| packages/database/migrations/0068_platform_billing.sql:229 | CREATE INDEX IF NOT EXISTS platform_payments_invoice_idx |
| packages/database/migrations/0068_platform_billing.sql:231 | CREATE INDEX IF NOT EXISTS platform_payments_tenant_idx |
| packages/database/migrations/0068_platform_billing.sql:240 | tenant_id       uuid NOT NULL REFERENCES tenants (id) ON DELETE CASCADE, |
| packages/database/migrations/0068_platform_billing.sql:241 | subscription_id uuid NOT NULL REFERENCES tenant_subscriptions (id) ON DELETE CASCADE, |
| packages/database/migrations/0068_platform_billing.sql:242 | invoice_id      uuid REFERENCES platform_invoices (id) ON DELETE SET NULL, |
| packages/database/migrations/0068_platform_billing.sql:244 | channel         text NOT NULL DEFAULT 'email' CHECK (channel IN ('email', 'sms', 'manual')), |
| packages/database/migrations/0068_platform_billing.sql:245 | status          text NOT NULL DEFAULT 'scheduled' CHECK (status IN ('scheduled', 'sent', 'failed', 'skipped')), |
| packages/database/migrations/0068_platform_billing.sql:252 | CONSTRAINT dunning_attempts_no_check CHECK (attempt_no > 0) |
| packages/database/migrations/0068_platform_billing.sql:256 | CREATE UNIQUE INDEX IF NOT EXISTS dunning_attempts_invoice_no_key |
| packages/database/migrations/0068_platform_billing.sql:258 | CREATE INDEX IF NOT EXISTS dunning_attempts_subscription_idx |
| packages/database/migrations/0068_platform_billing.sql:260 | CREATE INDEX IF NOT EXISTS dunning_attempts_tenant_status_idx |
| packages/database/migrations/0068_platform_billing.sql:281 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0068_platform_billing.sql:286 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0068_platform_billing.sql:291 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0068_platform_billing.sql:296 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0068_platform_billing.sql:303 | WITH CHECK (COALESCE(current_setting('app.is_platform_admin', true), 'off') = 'on'); |
| packages/database/migrations/0068_platform_billing.sql:308 | WITH CHECK (COALESCE(current_setting('app.is_platform_admin', true), 'off') = 'on'); |
| packages/database/migrations/0068_platform_billing.sql:313 | WITH CHECK (COALESCE(current_setting('app.is_platform_admin', true), 'off') = 'on'); |
| packages/database/migrations/0068_platform_billing.sql:318 | WITH CHECK (COALESCE(current_setting('app.is_platform_admin', true), 'off') = 'on'); |
| packages/database/migrations/0069_usage_metering.sql:31 | tenant_id  uuid NOT NULL REFERENCES tenants (id) ON DELETE CASCADE, |
| packages/database/migrations/0069_usage_metering.sql:40 | CONSTRAINT usage_counters_metric_check CHECK (length(btrim(metric)) BETWEEN 1 AND 80), |
| packages/database/migrations/0069_usage_metering.sql:41 | CONSTRAINT usage_counters_period_check CHECK (period ~ '^[0-9]{4}-[0-9]{2}(-[0-9]{2})?$'), |
| packages/database/migrations/0069_usage_metering.sql:42 | CONSTRAINT usage_counters_value_check CHECK (value >= 0) |
| packages/database/migrations/0069_usage_metering.sql:46 | CREATE UNIQUE INDEX IF NOT EXISTS usage_counters_scope_key |
| packages/database/migrations/0069_usage_metering.sql:48 | CREATE INDEX IF NOT EXISTS usage_counters_metric_period_idx |
| packages/database/migrations/0069_usage_metering.sql:50 | CREATE INDEX IF NOT EXISTS usage_counters_tenant_idx |
| packages/database/migrations/0069_usage_metering.sql:63 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0069_usage_metering.sql:68 | WITH CHECK (COALESCE(current_setting('app.is_platform_admin', true), 'off') = 'on'); |
| packages/database/migrations/0069_usage_metering.sql:94 | 'CREATE POLICY platform_admin_plane ON %I USING (COALESCE(current_setting(''app.is_platform_admin'', true), ''off'') = ''on'') WITH CHECK (COALESCE(current_setting(''app.is_platform_admin'', true), ''off'') = ''on'')', |
| packages/database/migrations/0070_email_service.sql:39 | tenant_id  uuid REFERENCES tenants (id) ON DELETE CASCADE, |
| packages/database/migrations/0070_email_service.sql:51 | updated_by uuid REFERENCES users (id) ON DELETE SET NULL, |
| packages/database/migrations/0070_email_service.sql:52 | CONSTRAINT email_templates_locale_check  CHECK (locale IN ('ar', 'en')), |
| packages/database/migrations/0070_email_service.sql:53 | CONSTRAINT email_templates_event_check   CHECK (length(btrim(event)) BETWEEN 3 AND 80), |
| packages/database/migrations/0070_email_service.sql:54 | CONSTRAINT email_templates_subject_check CHECK (length(btrim(subject)) BETWEEN 1 AND 300), |
| packages/database/migrations/0070_email_service.sql:55 | CONSTRAINT email_templates_body_check    CHECK (length(btrim(body)) BETWEEN 1 AND 20000), |
| packages/database/migrations/0070_email_service.sql:56 | CONSTRAINT email_templates_version_check CHECK (version >= 1) |
| packages/database/migrations/0070_email_service.sql:60 | CREATE UNIQUE INDEX IF NOT EXISTS email_templates_platform_key |
| packages/database/migrations/0070_email_service.sql:62 | CREATE UNIQUE INDEX IF NOT EXISTS email_templates_tenant_key |
| packages/database/migrations/0070_email_service.sql:64 | CREATE INDEX IF NOT EXISTS email_templates_event_idx ON email_templates (event, locale); |
| packages/database/migrations/0070_email_service.sql:73 | tenant_id           uuid REFERENCES tenants (id) ON DELETE CASCADE, |
| packages/database/migrations/0070_email_service.sql:77 | template_id         uuid REFERENCES email_templates (id) ON DELETE SET NULL, |
| packages/database/migrations/0070_email_service.sql:102 | CHECK (status IN ('queued', 'sent', 'failed', 'suppressed', 'bounced')), |
| packages/database/migrations/0070_email_service.sql:103 | CONSTRAINT email_messages_mode_check     CHECK (delivery_mode IN ('queue', 'inline')), |
| packages/database/migrations/0070_email_service.sql:104 | CONSTRAINT email_messages_provider_check CHECK (provider IN ('console', 'smtp')), |
| packages/database/migrations/0070_email_service.sql:105 | CONSTRAINT email_messages_source_check   CHECK (template_source IN ('seed', 'platform', 'tenant')), |
| packages/database/migrations/0070_email_service.sql:106 | CONSTRAINT email_messages_locale_check   CHECK (locale IN ('ar', 'en')), |
| packages/database/migrations/0070_email_service.sql:107 | CONSTRAINT email_messages_to_check       CHECK (position('@' in to_email) > 1), |
| packages/database/migrations/0070_email_service.sql:108 | CONSTRAINT email_messages_attempts_check CHECK (attempts >= 0 AND max_attempts BETWEEN 1 AND 10) |
| packages/database/migrations/0070_email_service.sql:115 | CREATE INDEX IF NOT EXISTS email_messages_tenant_created_idx ON email_messages (tenant_id, created_at DESC); |
| packages/database/migrations/0070_email_service.sql:116 | CREATE INDEX IF NOT EXISTS email_messages_status_created_idx ON email_messages (status, created_at DESC); |
| packages/database/migrations/0070_email_service.sql:117 | CREATE INDEX IF NOT EXISTS email_messages_event_created_idx  ON email_messages (event, created_at DESC); |
| packages/database/migrations/0070_email_service.sql:119 | CREATE INDEX IF NOT EXISTS email_messages_to_idx            ON email_messages (lower(to_email)); |
| packages/database/migrations/0070_email_service.sql:120 | CREATE INDEX IF NOT EXISTS email_messages_outbox_idx        ON email_messages (outbox_job_id); |
| packages/database/migrations/0070_email_service.sql:129 | tenant_id  uuid REFERENCES tenants (id) ON DELETE CASCADE, |
| packages/database/migrations/0070_email_service.sql:133 | created_by uuid REFERENCES users (id) ON DELETE SET NULL, |
| packages/database/migrations/0070_email_service.sql:135 | CONSTRAINT email_suppressions_reason_check CHECK (reason IN ('bounce', 'complaint', 'unsubscribe', 'manual')), |
| packages/database/migrations/0070_email_service.sql:136 | CONSTRAINT email_suppressions_email_check  CHECK (position('@' in email) > 1) |
| packages/database/migrations/0070_email_service.sql:139 | CREATE UNIQUE INDEX IF NOT EXISTS email_suppressions_platform_key |
| packages/database/migrations/0070_email_service.sql:141 | CREATE UNIQUE INDEX IF NOT EXISTS email_suppressions_tenant_key |
| packages/database/migrations/0070_email_service.sql:143 | CREATE INDEX IF NOT EXISTS email_suppressions_email_idx ON email_suppressions (email); |
| packages/database/migrations/0070_email_service.sql:151 | tenant_id      uuid REFERENCES tenants (id) ON DELETE CASCADE, |
| packages/database/migrations/0070_email_service.sql:161 | updated_by     uuid REFERENCES users (id) ON DELETE SET NULL, |
| packages/database/migrations/0070_email_service.sql:162 | CONSTRAINT email_settings_provider_check CHECK (provider IN ('console', 'smtp')), |
| packages/database/migrations/0070_email_service.sql:163 | CONSTRAINT email_settings_from_check     CHECK (position('@' in from_email) > 1), |
| packages/database/migrations/0070_email_service.sql:164 | CONSTRAINT email_settings_reply_check    CHECK (reply_to IS NULL OR position('@' in reply_to) > 1), |
| packages/database/migrations/0070_email_service.sql:165 | CONSTRAINT email_settings_daily_check    CHECK (daily_limit IS NULL OR daily_limit > 0), |
| packages/database/migrations/0070_email_service.sql:166 | CONSTRAINT email_settings_monthly_check  CHECK (monthly_limit IS NULL OR monthly_limit > 0) |
| packages/database/migrations/0070_email_service.sql:172 | CREATE UNIQUE INDEX IF NOT EXISTS email_settings_platform_key |
| packages/database/migrations/0070_email_service.sql:174 | CREATE UNIQUE INDEX IF NOT EXISTS email_settings_tenant_key |
| packages/database/migrations/0070_email_service.sql:191 | 'CREATE POLICY tenant_isolation ON %I USING (tenant_id = nullif(current_setting(''app.tenant_id'', true), '''')::uuid) WITH CHECK (tenant_id = nullif(current_setting(''app.tenant_id'', true), '''')::uuid)', |
| packages/database/migrations/0070_email_service.sql:197 | 'CREATE POLICY platform_admin_plane ON %I USING (COALESCE(current_setting(''app.is_platform_admin'', true), ''off'') = ''on'') WITH CHECK (COALESCE(current_setting(''app.is_platform_admin'', true), ''off'') = ''on'')', |
| packages/database/migrations/0071_announcements.sql:46 | created_by    uuid REFERENCES users (id) ON DELETE SET NULL, |
| packages/database/migrations/0071_announcements.sql:49 | CONSTRAINT announcements_status_check   CHECK (status IN ('draft', 'scheduled', 'published')), |
| packages/database/migrations/0071_announcements.sql:50 | CONSTRAINT announcements_audience_check CHECK (audience IN ('all', 'plan', 'status')), |
| packages/database/migrations/0071_announcements.sql:51 | CONSTRAINT announcements_target_check CHECK ( |
| packages/database/migrations/0071_announcements.sql:56 | CONSTRAINT announcements_status_target_check CHECK ( |
| packages/database/migrations/0071_announcements.sql:59 | CONSTRAINT announcements_channels_check CHECK ( |
| packages/database/migrations/0071_announcements.sql:62 | CONSTRAINT announcements_publish_check CHECK ( |
| packages/database/migrations/0071_announcements.sql:67 | CONSTRAINT announcements_title_check CHECK ( |
| packages/database/migrations/0071_announcements.sql:70 | CONSTRAINT announcements_body_check CHECK ( |
| packages/database/migrations/0071_announcements.sql:76 | CREATE INDEX IF NOT EXISTS announcements_due_idx |
| packages/database/migrations/0071_announcements.sql:78 | CREATE INDEX IF NOT EXISTS announcements_recent_idx ON announcements (created_at DESC); |
| packages/database/migrations/0071_announcements.sql:86 | announcement_id  uuid NOT NULL REFERENCES announcements (id) ON DELETE CASCADE, |
| packages/database/migrations/0071_announcements.sql:87 | tenant_id        uuid NOT NULL REFERENCES tenants (id) ON DELETE CASCADE, |
| packages/database/migrations/0071_announcements.sql:88 | membership_id    uuid NOT NULL REFERENCES memberships (id) ON DELETE CASCADE, |
| packages/database/migrations/0071_announcements.sql:91 | notification_id  uuid REFERENCES notifications (id) ON DELETE SET NULL, |
| packages/database/migrations/0071_announcements.sql:93 | email_message_id uuid REFERENCES email_messages (id) ON DELETE SET NULL, |
| packages/database/migrations/0071_announcements.sql:96 | CONSTRAINT announcement_reads_channel_check CHECK (channel IN ('in_app', 'email')) |
| packages/database/migrations/0071_announcements.sql:100 | CREATE UNIQUE INDEX IF NOT EXISTS announcement_reads_key |
| packages/database/migrations/0071_announcements.sql:102 | CREATE INDEX IF NOT EXISTS announcement_reads_tenant_idx |
| packages/database/migrations/0071_announcements.sql:104 | CREATE INDEX IF NOT EXISTS announcement_reads_unread_idx |
| packages/database/migrations/0071_announcements.sql:117 | WITH CHECK (COALESCE(current_setting('app.is_platform_admin', true), 'off') = 'on'); |
| packages/database/migrations/0071_announcements.sql:126 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0071_announcements.sql:130 | WITH CHECK (COALESCE(current_setting('app.is_platform_admin', true), 'off') = 'on'); |
| packages/database/migrations/0072_support_desk.sql:18 | tenant_id         uuid        NOT NULL REFERENCES tenants (id) ON DELETE CASCADE, |
| packages/database/migrations/0072_support_desk.sql:19 | subject           text        NOT NULL CHECK (length(subject) BETWEEN 3 AND 200), |
| packages/database/migrations/0072_support_desk.sql:21 | CHECK (status IN ('open', 'pending', 'resolved', 'closed')), |
| packages/database/migrations/0072_support_desk.sql:23 | CHECK (priority IN ('low', 'normal', 'high', 'urgent')), |
| packages/database/migrations/0072_support_desk.sql:24 | category          text        CHECK (category IS NULL OR length(category) BETWEEN 2 AND 60), |
| packages/database/migrations/0072_support_desk.sql:25 | assigned_to       uuid        REFERENCES users (id) ON DELETE SET NULL, |
| packages/database/migrations/0072_support_desk.sql:26 | opened_by         uuid        REFERENCES users (id) ON DELETE SET NULL, |
| packages/database/migrations/0072_support_desk.sql:34 | CONSTRAINT support_tickets_closed_check CHECK ( |
| packages/database/migrations/0072_support_desk.sql:39 | CREATE INDEX IF NOT EXISTS support_tickets_tenant_status_idx |
| packages/database/migrations/0072_support_desk.sql:41 | CREATE INDEX IF NOT EXISTS support_tickets_open_idx |
| packages/database/migrations/0072_support_desk.sql:44 | CREATE INDEX IF NOT EXISTS support_tickets_assignee_idx |
| packages/database/migrations/0072_support_desk.sql:53 | ticket_id     uuid        NOT NULL REFERENCES support_tickets (id) ON DELETE CASCADE, |
| packages/database/migrations/0072_support_desk.sql:55 | tenant_id     uuid        NOT NULL REFERENCES tenants (id) ON DELETE CASCADE, |
| packages/database/migrations/0072_support_desk.sql:56 | author_user_id uuid       REFERENCES users (id) ON DELETE SET NULL, |
| packages/database/migrations/0072_support_desk.sql:57 | author_kind   text        NOT NULL CHECK (author_kind IN ('operator', 'customer', 'system')), |
| packages/database/migrations/0072_support_desk.sql:60 | body          text        NOT NULL CHECK (length(body) BETWEEN 1 AND 5000), |
| packages/database/migrations/0072_support_desk.sql:64 | CREATE INDEX IF NOT EXISTS ticket_messages_ticket_idx |
| packages/database/migrations/0072_support_desk.sql:66 | CREATE INDEX IF NOT EXISTS ticket_messages_tenant_idx |
| packages/database/migrations/0072_support_desk.sql:74 | tenant_id        uuid        NOT NULL REFERENCES tenants (id) ON DELETE CASCADE, |
| packages/database/migrations/0072_support_desk.sql:75 | operator_user_id uuid        NOT NULL REFERENCES users (id) ON DELETE CASCADE, |
| packages/database/migrations/0072_support_desk.sql:77 | as_membership_id uuid        NOT NULL REFERENCES memberships (id) ON DELETE CASCADE, |
| packages/database/migrations/0072_support_desk.sql:78 | reason           text        NOT NULL CHECK (length(reason) BETWEEN 10 AND 500), |
| packages/database/migrations/0072_support_desk.sql:82 | CONSTRAINT support_sessions_duration_check CHECK ( |
| packages/database/migrations/0072_support_desk.sql:87 | CREATE INDEX IF NOT EXISTS support_sessions_tenant_idx |
| packages/database/migrations/0072_support_desk.sql:89 | CREATE INDEX IF NOT EXISTS support_sessions_operator_idx |
| packages/database/migrations/0072_support_desk.sql:91 | CREATE INDEX IF NOT EXISTS support_sessions_active_idx |
| packages/database/migrations/0072_support_desk.sql:112 | 'WITH CHECK (tenant_id = nullif(current_setting(''app.tenant_id'', true), '''')::uuid)', |
| packages/database/migrations/0074_platform_backups.sql:20 | CHECK (kind IN ('platform-dump', 'data-export')), |
| packages/database/migrations/0074_platform_backups.sql:22 | store         text        NOT NULL CHECK (store IN ('object-storage', 'filesystem')), |
| packages/database/migrations/0074_platform_backups.sql:29 | bytes         integer     NOT NULL CHECK (bytes > 0), |
| packages/database/migrations/0074_platform_backups.sql:33 | tables        integer     NOT NULL DEFAULT 0 CHECK (tables >= 0), |
| packages/database/migrations/0074_platform_backups.sql:34 | rows          integer     NOT NULL DEFAULT 0 CHECK (rows >= 0), |
| packages/database/migrations/0074_platform_backups.sql:38 | created_by    uuid        REFERENCES users (id) ON DELETE SET NULL |
| packages/database/migrations/0074_platform_backups.sql:41 | CREATE INDEX IF NOT EXISTS backup_artifacts_kind_created_idx |
| packages/database/migrations/0074_platform_backups.sql:43 | CREATE INDEX IF NOT EXISTS backup_artifacts_prunable_idx |
| packages/database/migrations/0074_platform_backups.sql:53 | CHECK (scope IN ('platform', 'tenant')), |
| packages/database/migrations/0074_platform_backups.sql:55 | tenant_id       uuid        REFERENCES tenants (id) ON DELETE SET NULL, |
| packages/database/migrations/0074_platform_backups.sql:57 | CHECK (status IN ('running', 'succeeded', 'failed')), |
| packages/database/migrations/0074_platform_backups.sql:58 | artifact_id     uuid        REFERENCES backup_artifacts (id) ON DELETE SET NULL, |
| packages/database/migrations/0074_platform_backups.sql:59 | note            text        CHECK (note IS NULL OR length(note) BETWEEN 3 AND 500), |
| packages/database/migrations/0074_platform_backups.sql:61 | tables          integer     NOT NULL DEFAULT 0 CHECK (tables >= 0), |
| packages/database/migrations/0074_platform_backups.sql:62 | rows            integer     NOT NULL DEFAULT 0 CHECK (rows >= 0), |
| packages/database/migrations/0074_platform_backups.sql:63 | tenants         integer     NOT NULL DEFAULT 0 CHECK (tenants >= 0), |
| packages/database/migrations/0074_platform_backups.sql:66 | duration_ms     integer     CHECK (duration_ms IS NULL OR duration_ms >= 0), |
| packages/database/migrations/0074_platform_backups.sql:69 | requested_by    uuid        REFERENCES users (id) ON DELETE SET NULL, |
| packages/database/migrations/0074_platform_backups.sql:73 | CONSTRAINT backup_jobs_tenant_scope_check CHECK ( |
| packages/database/migrations/0074_platform_backups.sql:76 | CONSTRAINT backup_jobs_finish_check CHECK ( |
| packages/database/migrations/0074_platform_backups.sql:81 | CREATE INDEX IF NOT EXISTS backup_jobs_started_idx ON backup_jobs (started_at DESC); |
| packages/database/migrations/0074_platform_backups.sql:82 | CREATE INDEX IF NOT EXISTS backup_jobs_tenant_idx ON backup_jobs (tenant_id, started_at DESC); |
| packages/database/migrations/0074_platform_backups.sql:89 | kind          text        NOT NULL CHECK (kind IN ('export', 'erase')), |
| packages/database/migrations/0074_platform_backups.sql:91 | CHECK (status IN ('pending', 'approved', 'rejected', 'completed', 'cancelled')), |
| packages/database/migrations/0074_platform_backups.sql:92 | tenant_id     uuid        NOT NULL REFERENCES tenants (id) ON DELETE CASCADE, |
| packages/database/migrations/0074_platform_backups.sql:95 | subject_email text        NOT NULL CHECK (length(subject_email) BETWEEN 3 AND 200), |
| packages/database/migrations/0074_platform_backups.sql:96 | subject_user_id uuid      REFERENCES users (id) ON DELETE SET NULL, |
| packages/database/migrations/0074_platform_backups.sql:97 | note          text        CHECK (note IS NULL OR length(note) BETWEEN 3 AND 500), |
| packages/database/migrations/0074_platform_backups.sql:98 | decision_note text        CHECK (decision_note IS NULL OR length(decision_note) BETWEEN 5 AND 500), |
| packages/database/migrations/0074_platform_backups.sql:99 | decided_by    uuid        REFERENCES users (id) ON DELETE SET NULL, |
| packages/database/migrations/0074_platform_backups.sql:103 | requested_by  uuid        REFERENCES users (id) ON DELETE SET NULL, |
| packages/database/migrations/0074_platform_backups.sql:107 | CONSTRAINT data_requests_decision_check CHECK ( |
| packages/database/migrations/0074_platform_backups.sql:110 | CONSTRAINT data_requests_execution_check CHECK ( |
| packages/database/migrations/0074_platform_backups.sql:115 | CREATE INDEX IF NOT EXISTS data_requests_status_idx ON data_requests (status, created_at DESC); |
| packages/database/migrations/0074_platform_backups.sql:116 | CREATE INDEX IF NOT EXISTS data_requests_tenant_idx ON data_requests (tenant_id, created_at DESC); |
| packages/database/migrations/0074_platform_backups.sql:131 | WITH CHECK (COALESCE(current_setting('app.is_platform_admin', true), 'off') = 'on'); |
| packages/database/migrations/0075_developer_platform.sql:21 | tenant_id       uuid        NOT NULL REFERENCES tenants (id) ON DELETE CASCADE, |
| packages/database/migrations/0075_developer_platform.sql:22 | name            text        NOT NULL CHECK (length(name) BETWEEN 3 AND 60), |
| packages/database/migrations/0075_developer_platform.sql:24 | key_prefix      text        NOT NULL UNIQUE CHECK (key_prefix LIKE 'erp_live_%'), |
| packages/database/migrations/0075_developer_platform.sql:26 | key_hash        text        NOT NULL CHECK (length(key_hash) = 64), |
| packages/database/migrations/0075_developer_platform.sql:28 | scopes          text[]      NOT NULL CHECK (array_length(scopes, 1) BETWEEN 1 AND 8), |
| packages/database/migrations/0075_developer_platform.sql:29 | status          text        NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'revoked')), |
| packages/database/migrations/0075_developer_platform.sql:34 | revoked_reason  text        CHECK (revoked_reason IS NULL OR length(revoked_reason) BETWEEN 5 AND 200), |
| packages/database/migrations/0075_developer_platform.sql:35 | created_by      uuid        REFERENCES users (id) ON DELETE SET NULL, |
| packages/database/migrations/0075_developer_platform.sql:37 | rotated_from    uuid        REFERENCES api_keys (id) ON DELETE SET NULL, |
| packages/database/migrations/0075_developer_platform.sql:39 | CONSTRAINT api_keys_revocation_check CHECK ((status = 'revoked') = (revoked_at IS NOT NULL)) |
| packages/database/migrations/0075_developer_platform.sql:42 | CREATE INDEX IF NOT EXISTS api_keys_tenant_idx ON api_keys (tenant_id, created_at DESC); |
| packages/database/migrations/0075_developer_platform.sql:44 | CREATE INDEX IF NOT EXISTS api_keys_active_idx ON api_keys (key_prefix) WHERE status = 'active'; |
| packages/database/migrations/0075_developer_platform.sql:50 | api_key_id    uuid        NOT NULL REFERENCES api_keys (id) ON DELETE CASCADE, |
| packages/database/migrations/0075_developer_platform.sql:51 | tenant_id     uuid        NOT NULL REFERENCES tenants (id) ON DELETE CASCADE, |
| packages/database/migrations/0075_developer_platform.sql:54 | path          text        NOT NULL CHECK (length(path) <= 200), |
| packages/database/migrations/0075_developer_platform.sql:59 | CREATE INDEX IF NOT EXISTS api_key_uses_key_idx ON api_key_uses (api_key_id, at DESC); |
| packages/database/migrations/0075_developer_platform.sql:66 | tenant_id       uuid        NOT NULL REFERENCES tenants (id) ON DELETE CASCADE, |
| packages/database/migrations/0075_developer_platform.sql:67 | url             text        NOT NULL CHECK (length(url) BETWEEN 12 AND 500), |
| packages/database/migrations/0075_developer_platform.sql:69 | events          text[]      NOT NULL CHECK (array_length(events, 1) BETWEEN 1 AND 12), |
| packages/database/migrations/0075_developer_platform.sql:70 | status          text        NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'paused')), |
| packages/database/migrations/0075_developer_platform.sql:78 | description     text        CHECK (description IS NULL OR length(description) BETWEEN 3 AND 200), |
| packages/database/migrations/0075_developer_platform.sql:79 | created_by      uuid        REFERENCES users (id) ON DELETE SET NULL, |
| packages/database/migrations/0075_developer_platform.sql:84 | CREATE INDEX IF NOT EXISTS webhook_endpoints_tenant_idx ON webhook_endpoints (tenant_id, created_at DESC); |
| packages/database/migrations/0075_developer_platform.sql:86 | CREATE INDEX IF NOT EXISTS webhook_endpoints_active_idx ON webhook_endpoints (status) WHERE status = 'active'; |
| packages/database/migrations/0075_developer_platform.sql:93 | endpoint_id     uuid        NOT NULL REFERENCES webhook_endpoints (id) ON DELETE CASCADE, |
| packages/database/migrations/0075_developer_platform.sql:94 | tenant_id       uuid        NOT NULL REFERENCES tenants (id) ON DELETE CASCADE, |
| packages/database/migrations/0075_developer_platform.sql:95 | event           text        NOT NULL CHECK (length(event) BETWEEN 3 AND 60), |
| packages/database/migrations/0075_developer_platform.sql:99 | CHECK (status IN ('pending', 'delivered', 'failed')), |
| packages/database/migrations/0075_developer_platform.sql:100 | attempts        integer     NOT NULL DEFAULT 0 CHECK (attempts >= 0), |
| packages/database/migrations/0075_developer_platform.sql:101 | max_attempts    integer     NOT NULL DEFAULT 4 CHECK (max_attempts BETWEEN 1 AND 10), |
| packages/database/migrations/0075_developer_platform.sql:103 | response_body   text        CHECK (response_body IS NULL OR length(response_body) <= 500), |
| packages/database/migrations/0075_developer_platform.sql:104 | duration_ms     integer     CHECK (duration_ms IS NULL OR duration_ms >= 0), |
| packages/database/migrations/0075_developer_platform.sql:110 | CONSTRAINT webhook_deliveries_result_check CHECK ( |
| packages/database/migrations/0075_developer_platform.sql:115 | CREATE INDEX IF NOT EXISTS webhook_deliveries_endpoint_idx |
| packages/database/migrations/0075_developer_platform.sql:118 | CREATE INDEX IF NOT EXISTS webhook_deliveries_pending_idx |
| packages/database/migrations/0075_developer_platform.sql:134 | WITH CHECK (tenant_id = NULLIF(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0075_developer_platform.sql:138 | WITH CHECK (COALESCE(current_setting('app.is_platform_admin', true), 'off') = 'on'); |
| packages/database/migrations/0075_developer_platform.sql:145 | WITH CHECK (tenant_id = NULLIF(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0075_developer_platform.sql:149 | WITH CHECK (COALESCE(current_setting('app.is_platform_admin', true), 'off') = 'on'); |
| packages/database/migrations/0075_developer_platform.sql:156 | WITH CHECK (tenant_id = NULLIF(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0075_developer_platform.sql:160 | WITH CHECK (COALESCE(current_setting('app.is_platform_admin', true), 'off') = 'on'); |
| packages/database/migrations/0075_developer_platform.sql:167 | WITH CHECK (tenant_id = NULLIF(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0075_developer_platform.sql:171 | WITH CHECK (COALESCE(current_setting('app.is_platform_admin', true), 'off') = 'on'); |
| packages/database/migrations/0077_content.sql:56 | created_by     uuid REFERENCES users (id) ON DELETE SET NULL, |
| packages/database/migrations/0077_content.sql:57 | updated_by     uuid REFERENCES users (id) ON DELETE SET NULL, |
| packages/database/migrations/0077_content.sql:60 | CONSTRAINT content_pages_kind_check CHECK ( |
| packages/database/migrations/0077_content.sql:63 | CONSTRAINT content_pages_status_check CHECK (status IN ('draft', 'scheduled', 'published')), |
| packages/database/migrations/0077_content.sql:64 | CONSTRAINT content_pages_locale_check CHECK (default_locale IN ('ar', 'en')), |
| packages/database/migrations/0077_content.sql:65 | CONSTRAINT content_pages_slug_check CHECK (slug ~ '^[a-z0-9]+(?:-[a-z0-9]+)*$' AND length(slug) BETWEEN 2 AND 120), |
| packages/database/migrations/0077_content.sql:66 | CONSTRAINT content_pages_title_check CHECK (length(btrim(title_ar)) BETWEEN 2 AND 200), |
| packages/database/migrations/0077_content.sql:67 | CONSTRAINT content_pages_lifecycle_check CHECK ( |
| packages/database/migrations/0077_content.sql:76 | CREATE UNIQUE INDEX IF NOT EXISTS content_pages_slug_key ON content_pages (slug); |
| packages/database/migrations/0077_content.sql:77 | CREATE INDEX IF NOT EXISTS content_pages_listing_idx ON content_pages (status, kind, published_at DESC); |
| packages/database/migrations/0077_content.sql:78 | CREATE INDEX IF NOT EXISTS content_pages_category_idx ON content_pages (category) WHERE category IS NOT NULL; |
| packages/database/migrations/0077_content.sql:86 | page_id    uuid NOT NULL REFERENCES content_pages (id) ON DELETE CASCADE, |
| packages/database/migrations/0077_content.sql:87 | position   integer NOT NULL CHECK (position BETWEEN 0 AND 500), |
| packages/database/migrations/0077_content.sql:93 | CONSTRAINT content_blocks_kind_check CHECK ( |
| packages/database/migrations/0077_content.sql:96 | CONSTRAINT content_blocks_content_check CHECK (jsonb_typeof(content) = 'object') |
| packages/database/migrations/0077_content.sql:100 | CREATE UNIQUE INDEX IF NOT EXISTS content_blocks_page_position_key ON content_blocks (page_id, position); |
| packages/database/migrations/0077_content.sql:111 | updated_by uuid REFERENCES users (id) ON DELETE SET NULL, |
| packages/database/migrations/0077_content.sql:113 | CONSTRAINT content_menus_position_check CHECK (position IN ('header', 'footer', 'sidebar', 'legal')), |
| packages/database/migrations/0077_content.sql:114 | CONSTRAINT content_menus_items_check CHECK (jsonb_typeof(items) = 'array') |
| packages/database/migrations/0077_content.sql:117 | CREATE UNIQUE INDEX IF NOT EXISTS content_menus_position_key ON content_menus (position); |
| packages/database/migrations/0077_content.sql:136 | created_by  uuid REFERENCES users (id) ON DELETE SET NULL, |
| packages/database/migrations/0077_content.sql:139 | CONSTRAINT content_banners_tone_check CHECK (tone IN ('info', 'ok', 'warn', 'danger')), |
| packages/database/migrations/0077_content.sql:140 | CONSTRAINT content_banners_audience_check CHECK (audience IN ('all', 'visitors')), |
| packages/database/migrations/0077_content.sql:141 | CONSTRAINT content_banners_window_check CHECK (ends_at IS NULL OR ends_at > starts_at), |
| packages/database/migrations/0077_content.sql:142 | CONSTRAINT content_banners_text_check CHECK (length(btrim(text_ar)) BETWEEN 3 AND 200) |
| packages/database/migrations/0077_content.sql:145 | CREATE INDEX IF NOT EXISTS content_banners_active_idx ON content_banners (active, starts_at, ends_at); |
| packages/database/migrations/0077_content.sql:153 | page_id    uuid NOT NULL REFERENCES content_pages (id) ON DELETE CASCADE, |
| packages/database/migrations/0077_content.sql:154 | version    integer NOT NULL CHECK (version > 0), |
| packages/database/migrations/0077_content.sql:158 | created_by uuid REFERENCES users (id) ON DELETE SET NULL, |
| packages/database/migrations/0077_content.sql:160 | CONSTRAINT content_versions_snapshot_check CHECK (jsonb_typeof(snapshot) = 'object') |
| packages/database/migrations/0077_content.sql:163 | CREATE UNIQUE INDEX IF NOT EXISTS content_versions_page_version_key ON content_versions (page_id, version); |
| packages/database/migrations/0077_content.sql:164 | CREATE INDEX IF NOT EXISTS content_versions_page_idx ON content_versions (page_id, created_at DESC); |
| packages/database/migrations/0077_content.sql:180 | 'CREATE POLICY platform_admin_plane ON %I USING (COALESCE(current_setting(''app.is_platform_admin'', true), ''off'') = ''on'') WITH CHECK (COALESCE(current_setting(''app.is_platform_admin'', true), ''off'') = ''on'')', |
| packages/database/migrations/0079_signup_verifications.sql:29 | tenant_id     uuid REFERENCES tenants (id) ON DELETE CASCADE, |
| packages/database/migrations/0079_signup_verifications.sql:34 | plan_id       uuid REFERENCES billing_plans (id) ON DELETE SET NULL, |
| packages/database/migrations/0079_signup_verifications.sql:35 | locale        text NOT NULL DEFAULT 'ar' CHECK (locale IN ('ar', 'en')), |
| packages/database/migrations/0079_signup_verifications.sql:38 | attempts      integer NOT NULL DEFAULT 0 CHECK (attempts >= 0), |
| packages/database/migrations/0079_signup_verifications.sql:39 | sends         integer NOT NULL DEFAULT 1 CHECK (sends >= 1), |
| packages/database/migrations/0079_signup_verifications.sql:48 | CREATE UNIQUE INDEX IF NOT EXISTS signup_verifications_email_pending_key |
| packages/database/migrations/0079_signup_verifications.sql:53 | CREATE INDEX IF NOT EXISTS signup_verifications_token_hash_idx |
| packages/database/migrations/0079_signup_verifications.sql:55 | CREATE INDEX IF NOT EXISTS signup_verifications_tenant_idx |
| packages/database/migrations/0079_signup_verifications.sql:64 | WITH CHECK (COALESCE(current_setting('app.is_platform_admin', true), 'off') = 'on'); |
| packages/database/migrations/0080_leads.sql:46 | assigned_to         uuid REFERENCES users (id) ON DELETE SET NULL, |
| packages/database/migrations/0080_leads.sql:48 | converted_tenant_id uuid REFERENCES tenants (id) ON DELETE SET NULL, |
| packages/database/migrations/0080_leads.sql:52 | CONSTRAINT leads_status_check CHECK (status IN ('new', 'contacted', 'qualified', 'won', 'rejected')), |
| packages/database/migrations/0080_leads.sql:53 | CONSTRAINT leads_source_check CHECK (source IN ('form', 'demo', 'newsletter', 'campaign', 'manual')), |
| packages/database/migrations/0080_leads.sql:54 | CONSTRAINT leads_locale_check CHECK (locale IN ('ar', 'en')), |
| packages/database/migrations/0080_leads.sql:55 | CONSTRAINT leads_branch_count_check CHECK (branch_count IS NULL OR (branch_count >= 0 AND branch_count <= 999)), |
| packages/database/migrations/0080_leads.sql:56 | CONSTRAINT leads_email_check CHECK (length(email) BETWEEN 3 AND 160), |
| packages/database/migrations/0080_leads.sql:57 | CONSTRAINT leads_message_check CHECK (length(message) BETWEEN 10 AND 2000), |
| packages/database/migrations/0080_leads.sql:58 | CONSTRAINT leads_reference_check CHECK (reference ~ '^L-[0-9A-F]{8,16}$'), |
| packages/database/migrations/0080_leads.sql:60 | CONSTRAINT leads_conversion_check CHECK ((converted_tenant_id IS NULL) = (converted_at IS NULL)) |
| packages/database/migrations/0080_leads.sql:66 | CREATE UNIQUE INDEX IF NOT EXISTS leads_dedupe_key_key ON leads (dedupe_key); |
| packages/database/migrations/0080_leads.sql:67 | CREATE UNIQUE INDEX IF NOT EXISTS leads_reference_key ON leads (reference); |
| packages/database/migrations/0080_leads.sql:68 | CREATE INDEX IF NOT EXISTS leads_status_created_idx ON leads (status, created_at DESC); |
| packages/database/migrations/0080_leads.sql:69 | CREATE INDEX IF NOT EXISTS leads_assigned_idx ON leads (assigned_to) WHERE assigned_to IS NOT NULL; |
| packages/database/migrations/0080_leads.sql:70 | CREATE INDEX IF NOT EXISTS leads_source_idx ON leads (source, created_at DESC); |
| packages/database/migrations/0080_leads.sql:78 | lead_id      uuid NOT NULL REFERENCES leads (id) ON DELETE CASCADE, |
| packages/database/migrations/0080_leads.sql:80 | author_id    uuid REFERENCES users (id) ON DELETE SET NULL, |
| packages/database/migrations/0080_leads.sql:84 | CONSTRAINT lead_notes_body_check CHECK (length(body) BETWEEN 2 AND 2000) |
| packages/database/migrations/0080_leads.sql:87 | CREATE INDEX IF NOT EXISTS lead_notes_lead_idx ON lead_notes (lead_id, created_at DESC); |
| packages/database/migrations/0080_leads.sql:95 | lead_id      uuid NOT NULL REFERENCES leads (id) ON DELETE CASCADE, |
| packages/database/migrations/0080_leads.sql:102 | actor_id     uuid REFERENCES users (id) ON DELETE SET NULL, |
| packages/database/migrations/0080_leads.sql:107 | CREATE INDEX IF NOT EXISTS lead_events_lead_idx ON lead_events (lead_id, created_at DESC); |
| packages/database/migrations/0080_leads.sql:128 | CONSTRAINT email_subscribers_status_check CHECK (status IN ('pending', 'confirmed', 'unsubscribed')), |
| packages/database/migrations/0080_leads.sql:129 | CONSTRAINT email_subscribers_locale_check CHECK (locale IN ('ar', 'en')), |
| packages/database/migrations/0080_leads.sql:130 | CONSTRAINT email_subscribers_email_check CHECK (length(email) BETWEEN 3 AND 160), |
| packages/database/migrations/0080_leads.sql:132 | CONSTRAINT email_subscribers_confirmed_check CHECK ((status = 'confirmed') = (confirmed_at IS NOT NULL)) |
| packages/database/migrations/0080_leads.sql:135 | CREATE UNIQUE INDEX IF NOT EXISTS email_subscribers_dedupe_key_key ON email_subscribers (dedupe_key); |
| packages/database/migrations/0080_leads.sql:136 | CREATE UNIQUE INDEX IF NOT EXISTS email_subscribers_confirm_token_key |
| packages/database/migrations/0080_leads.sql:138 | CREATE INDEX IF NOT EXISTS email_subscribers_status_idx ON email_subscribers (status, created_at DESC); |
| packages/database/migrations/0080_leads.sql:153 | 'CREATE POLICY platform_admin_plane ON %I USING (COALESCE(current_setting(''app.is_platform_admin'', true), ''off'') = ''on'') WITH CHECK (COALESCE(current_setting(''app.is_platform_admin'', true), ''off'') = ''on'')', |
| packages/database/migrations/0082_campaigns.sql:56 | created_by    uuid REFERENCES users (id) ON DELETE SET NULL, |
| packages/database/migrations/0082_campaigns.sql:57 | updated_by    uuid REFERENCES users (id) ON DELETE SET NULL, |
| packages/database/migrations/0082_campaigns.sql:61 | CHECK (status IN ('draft', 'scheduled', 'sending', 'sent', 'canceled')), |
| packages/database/migrations/0082_campaigns.sql:63 | CHECK (segment IN ('leads', 'subscribers', 'trialing', 'active', 'past_due', 'churned')), |
| packages/database/migrations/0082_campaigns.sql:64 | CONSTRAINT email_campaigns_locale_check CHECK (locale IN ('ar', 'en')), |
| packages/database/migrations/0082_campaigns.sql:65 | CONSTRAINT email_campaigns_name_check   CHECK (char_length(btrim(name)) BETWEEN 3 AND 120), |
| packages/database/migrations/0082_campaigns.sql:66 | CONSTRAINT email_campaigns_subject_check CHECK (char_length(btrim(subject)) BETWEEN 3 AND 200), |
| packages/database/migrations/0082_campaigns.sql:68 | CONSTRAINT email_campaigns_scheduled_check CHECK (status <> 'scheduled' OR scheduled_at IS NOT NULL), |
| packages/database/migrations/0082_campaigns.sql:69 | CONSTRAINT email_campaigns_started_check   CHECK (status NOT IN ('sending', 'sent') OR started_at IS NOT NULL), |
| packages/database/migrations/0082_campaigns.sql:72 | CHECK (status <> 'canceled' OR (canceled_at IS NOT NULL AND btrim(coalesce(canceled_reason, '')) <> '')), |
| packages/database/migrations/0082_campaigns.sql:73 | CONSTRAINT email_campaigns_finished_check CHECK (status <> 'sent' OR finished_at IS NOT NULL) |
| packages/database/migrations/0082_campaigns.sql:76 | CREATE INDEX IF NOT EXISTS email_campaigns_status_idx ON email_campaigns (status, coalesce(scheduled_at, created_at)); |
| packages/database/migrations/0082_campaigns.sql:77 | CREATE INDEX IF NOT EXISTS email_campaigns_created_idx ON email_campaigns (created_at DESC); |
| packages/database/migrations/0082_campaigns.sql:85 | campaign_id   uuid NOT NULL REFERENCES email_campaigns (id) ON DELETE CASCADE, |
| packages/database/migrations/0082_campaigns.sql:91 | tenant_id     uuid REFERENCES tenants (id) ON DELETE SET NULL, |
| packages/database/migrations/0082_campaigns.sql:92 | lead_id       uuid REFERENCES leads (id) ON DELETE SET NULL, |
| packages/database/migrations/0082_campaigns.sql:93 | subscriber_id uuid REFERENCES email_subscribers (id) ON DELETE SET NULL, |
| packages/database/migrations/0082_campaigns.sql:97 | email_message_id uuid REFERENCES email_messages (id) ON DELETE SET NULL, |
| packages/database/migrations/0082_campaigns.sql:107 | CONSTRAINT campaign_messages_status_check CHECK (status IN ('pending', 'sent', 'failed', 'skipped')), |
| packages/database/migrations/0082_campaigns.sql:108 | CONSTRAINT campaign_messages_email_check  CHECK (position('@' in email) > 1) |
| packages/database/migrations/0082_campaigns.sql:112 | CREATE UNIQUE INDEX IF NOT EXISTS campaign_messages_campaign_email_key ON campaign_messages (campaign_id, email); |
| packages/database/migrations/0082_campaigns.sql:113 | CREATE INDEX IF NOT EXISTS campaign_messages_campaign_status_idx ON campaign_messages (campaign_id, status); |
| packages/database/migrations/0082_campaigns.sql:114 | CREATE INDEX IF NOT EXISTS campaign_messages_token_idx ON campaign_messages (track_token_hash); |
| packages/database/migrations/0082_campaigns.sql:122 | campaign_id uuid NOT NULL REFERENCES email_campaigns (id) ON DELETE CASCADE, |
| packages/database/migrations/0082_campaigns.sql:123 | message_id  uuid REFERENCES campaign_messages (id) ON DELETE CASCADE, |
| packages/database/migrations/0082_campaigns.sql:129 | CONSTRAINT campaign_events_kind_check CHECK ( |
| packages/database/migrations/0082_campaigns.sql:134 | CREATE INDEX IF NOT EXISTS campaign_events_campaign_idx ON campaign_events (campaign_id, created_at DESC); |
| packages/database/migrations/0082_campaigns.sql:135 | CREATE INDEX IF NOT EXISTS campaign_events_message_idx ON campaign_events (message_id, created_at DESC); |
| packages/database/migrations/0082_campaigns.sql:138 | CREATE UNIQUE INDEX IF NOT EXISTS campaign_events_first_open_key |
| packages/database/migrations/0082_campaigns.sql:140 | CREATE UNIQUE INDEX IF NOT EXISTS campaign_events_first_unsubscribe_key |
| packages/database/migrations/0082_campaigns.sql:169 | 'CREATE POLICY platform_admin_plane ON %I USING (COALESCE(current_setting(''app.is_platform_admin'', true), ''off'') = ''on'') WITH CHECK (COALESCE(current_setting(''app.is_platform_admin'', true), ''off'') = ''on'')', |
| packages/database/migrations/0083_help_feedback.sql:35 | ALTER TABLE content_pages ADD CONSTRAINT content_pages_kind_check CHECK ( |
| packages/database/migrations/0083_help_feedback.sql:49 | page_id    uuid NOT NULL REFERENCES content_pages (id) ON DELETE CASCADE, |
| packages/database/migrations/0083_help_feedback.sql:54 | CONSTRAINT content_feedback_visitor_check CHECK (length(visitor) BETWEEN 8 AND 64) |
| packages/database/migrations/0083_help_feedback.sql:58 | CREATE UNIQUE INDEX IF NOT EXISTS content_feedback_once_key ON content_feedback (page_id, visitor); |
| packages/database/migrations/0083_help_feedback.sql:60 | CREATE INDEX IF NOT EXISTS content_feedback_page_idx ON content_feedback (page_id, helpful); |
| packages/database/migrations/0083_help_feedback.sql:71 | WITH CHECK (COALESCE(current_setting('app.is_platform_admin', true), 'off') = 'on'); |
| packages/database/migrations/0084_site_analytics.sql:47 | CONSTRAINT site_events_name_check CHECK ( |
| packages/database/migrations/0084_site_analytics.sql:51 | CONSTRAINT site_events_locale_check CHECK (locale IN ('ar', 'en')), |
| packages/database/migrations/0084_site_analytics.sql:52 | CONSTRAINT site_events_path_check CHECK (length(btrim(path)) BETWEEN 1 AND 200), |
| packages/database/migrations/0084_site_analytics.sql:54 | CONSTRAINT site_events_visitor_check CHECK ( |
| packages/database/migrations/0084_site_analytics.sql:60 | CONSTRAINT site_events_meta_keys_check CHECK ( |
| packages/database/migrations/0084_site_analytics.sql:67 | CREATE INDEX IF NOT EXISTS site_events_occurred_idx ON site_events (occurred_at DESC); |
| packages/database/migrations/0084_site_analytics.sql:68 | CREATE INDEX IF NOT EXISTS site_events_name_occurred_idx ON site_events (name, occurred_at DESC); |
| packages/database/migrations/0084_site_analytics.sql:69 | CREATE INDEX IF NOT EXISTS site_events_visitor_idx ON site_events (visitor, occurred_at DESC); |
| packages/database/migrations/0084_site_analytics.sql:88 | FOREIGN KEY (variant_of) REFERENCES content_pages (id) ON DELETE CASCADE; |
| packages/database/migrations/0084_site_analytics.sql:95 | ADD CONSTRAINT content_pages_variant_check CHECK ( |
| packages/database/migrations/0084_site_analytics.sql:103 | CREATE UNIQUE INDEX IF NOT EXISTS content_pages_variant_once_key |
| packages/database/migrations/0084_site_analytics.sql:121 | WITH CHECK (COALESCE(current_setting('app.is_platform_admin', true), 'off') = 'on'); |
| packages/database/migrations/0085_membership_discount_limits.sql:44 | CHECK (max_discount_pct IS NULL OR (max_discount_pct >= 0 AND max_discount_pct <= 100)); |
| packages/database/migrations/0085_membership_discount_limits.sql:48 | CHECK (max_discount_amount IS NULL OR max_discount_amount >= 0); |
| packages/database/migrations/0087_pos_holds_cashier.sql:43 | FOREIGN KEY (cashier_id) REFERENCES users(id) ON DELETE SET NULL; |
| packages/database/migrations/0087_pos_holds_cashier.sql:45 | CREATE INDEX IF NOT EXISTS sales_invoices_cashier_idx |
| packages/database/migrations/0087_pos_holds_cashier.sql:54 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0087_pos_holds_cashier.sql:55 | branch_id uuid NOT NULL REFERENCES branches(id) ON DELETE RESTRICT, |
| packages/database/migrations/0087_pos_holds_cashier.sql:57 | slot int NOT NULL CHECK (slot >= 0 AND slot <= 8), |
| packages/database/migrations/0087_pos_holds_cashier.sql:74 | CREATE UNIQUE INDEX IF NOT EXISTS pos_holds_slot_key |
| packages/database/migrations/0087_pos_holds_cashier.sql:76 | CREATE INDEX IF NOT EXISTS pos_holds_scope_idx ON pos_holds(tenant_id, branch_id); |
| packages/database/migrations/0087_pos_holds_cashier.sql:103 | EXECUTE format('CREATE POLICY %I_tenant_isolation ON %I USING (tenant_id = nullif(current_setting(''app.tenant_id'', true), '''')::uuid) WITH CHECK (tenant_id = nullif(current_setting(''app.tenant_id'', true), '''')::uuid)', t, t); |
| packages/database/migrations/0088_batch_on_document_line.sql:59 | CREATE INDEX IF NOT EXISTS stock_voucher_lines_batch_idx |
| packages/database/migrations/0088_batch_on_document_line.sql:61 | CREATE INDEX IF NOT EXISTS stock_adjustment_lines_batch_idx |
| packages/database/migrations/0088_batch_on_document_line.sql:63 | CREATE INDEX IF NOT EXISTS stock_transfer_lines_batch_idx |
| packages/database/migrations/0088_batch_on_document_line.sql:67 | CREATE INDEX IF NOT EXISTS item_lots_expiry_idx |
| packages/database/migrations/0089_invoice_line_numbers.sql:26 | ALTER TABLE sales_invoice_lines ADD COLUMN IF NOT EXISTS lot_id uuid REFERENCES item_lots (id) ON DELETE SET NULL; |
| packages/database/migrations/0089_invoice_line_numbers.sql:45 | ALTER TABLE purchase_invoice_lines ADD COLUMN IF NOT EXISTS lot_id uuid REFERENCES item_lots (id) ON DELETE SET NULL; |
| packages/database/migrations/0089_invoice_line_numbers.sql:63 | CREATE INDEX IF NOT EXISTS sales_invoice_lines_batch_idx |
| packages/database/migrations/0089_invoice_line_numbers.sql:65 | CREATE INDEX IF NOT EXISTS purchase_invoice_lines_batch_idx |
| packages/database/migrations/0089_invoice_line_numbers.sql:70 | CREATE INDEX IF NOT EXISTS sales_invoice_lines_serial_idx |
| packages/database/migrations/0089_invoice_line_numbers.sql:72 | CREATE INDEX IF NOT EXISTS purchase_invoice_lines_serial_idx |
| packages/database/migrations/0090_invoice_cost_centers.sql:29 | ALTER TABLE sales_invoices ADD COLUMN IF NOT EXISTS cost_center_id uuid REFERENCES cost_centers (id) ON DELETE SET NULL; |
| packages/database/migrations/0090_invoice_cost_centers.sql:30 | ALTER TABLE sales_invoice_lines ADD COLUMN IF NOT EXISTS cost_center_id uuid REFERENCES cost_centers (id) ON DELETE SET NULL; |
| packages/database/migrations/0090_invoice_cost_centers.sql:36 | ALTER TABLE purchase_invoices ADD COLUMN IF NOT EXISTS cost_center_id uuid REFERENCES cost_centers (id) ON DELETE SET NULL; |
| packages/database/migrations/0090_invoice_cost_centers.sql:38 | ALTER TABLE purchase_invoice_lines ADD COLUMN IF NOT EXISTS cost_center_id uuid REFERENCES cost_centers (id) ON DELETE SET NULL; |
| packages/database/migrations/0090_invoice_cost_centers.sql:44 | CREATE INDEX IF NOT EXISTS sales_invoices_cost_center_idx |
| packages/database/migrations/0090_invoice_cost_centers.sql:46 | CREATE INDEX IF NOT EXISTS sales_invoice_lines_cost_center_idx |
| packages/database/migrations/0090_invoice_cost_centers.sql:48 | CREATE INDEX IF NOT EXISTS purchase_invoices_cost_center_idx |
| packages/database/migrations/0090_invoice_cost_centers.sql:50 | CREATE INDEX IF NOT EXISTS purchase_invoice_lines_cost_center_idx |
| packages/database/migrations/0092_price_list_unit.sql:17 | ALTER TABLE price_list_items ADD COLUMN IF NOT EXISTS unit_id uuid REFERENCES units_of_measure(id) ON DELETE SET NULL; |
| packages/database/migrations/0092_price_list_unit.sql:22 | CREATE UNIQUE INDEX IF NOT EXISTS price_list_items_scope_key |
| packages/database/migrations/0092_price_list_unit.sql:30 | CREATE INDEX IF NOT EXISTS price_list_items_unit_idx |
| packages/database/migrations/0092_price_list_unit.sql:34 | CREATE INDEX IF NOT EXISTS price_list_items_item_unit_qty_idx |
| packages/database/migrations/0093_employee_photo.sql:11 | CREATE INDEX IF NOT EXISTS employees_photo_file_idx ON employees (tenant_id, photo_file_id) WHERE photo_file_id IS NOT NULL; |
| packages/database/migrations/0094_employee_branches.sql:9 | employee_id uuid NOT NULL REFERENCES employees(id) ON DELETE CASCADE, |
| packages/database/migrations/0094_employee_branches.sql:10 | branch_id uuid NOT NULL REFERENCES branches(id) ON DELETE CASCADE, |
| packages/database/migrations/0094_employee_branches.sql:11 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0094_employee_branches.sql:17 | CREATE INDEX IF NOT EXISTS employee_branches_tenant_branch_idx ON employee_branches (tenant_id, branch_id); |
| packages/database/migrations/0094_employee_branches.sql:18 | CREATE INDEX IF NOT EXISTS employee_branches_employee_idx ON employee_branches (tenant_id, employee_id); |
| packages/database/migrations/0095_printer_report_links.sql:8 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0095_printer_report_links.sql:21 | CREATE INDEX IF NOT EXISTS printer_report_links_tenant_scope_idx ON printer_report_links (tenant_id, scope); |
| packages/database/migrations/0095_printer_report_links.sql:22 | CREATE INDEX IF NOT EXISTS printer_report_links_tenant_idx ON printer_report_links (tenant_id); |
| packages/database/migrations/0095_printer_report_links.sql:29 | WITH CHECK (tenant_id = current_setting('app.tenant_id', true)::uuid); |
| packages/database/migrations/0096_bank_feeds.sql:9 | tenant_id         uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0096_bank_feeds.sql:15 | account_id        uuid REFERENCES accounts(id) ON DELETE SET NULL, |
| packages/database/migrations/0096_bank_feeds.sql:22 | CONSTRAINT bank_accounts_status_check CHECK (status IN ('active', 'inactive')) |
| packages/database/migrations/0096_bank_feeds.sql:25 | CREATE INDEX IF NOT EXISTS bank_accounts_tenant_idx ON bank_accounts(tenant_id); |
| packages/database/migrations/0096_bank_feeds.sql:26 | CREATE INDEX IF NOT EXISTS bank_accounts_tenant_account_no_idx ON bank_accounts(tenant_id, account_no); |
| packages/database/migrations/0096_bank_feeds.sql:27 | CREATE UNIQUE INDEX IF NOT EXISTS bank_accounts_tenant_iban_key |
| packages/database/migrations/0096_bank_feeds.sql:32 | tenant_id         uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0096_bank_feeds.sql:33 | bank_account_id   uuid NOT NULL REFERENCES bank_accounts(id) ON DELETE CASCADE, |
| packages/database/migrations/0096_bank_feeds.sql:34 | file_id           uuid REFERENCES files(id) ON DELETE SET NULL, |
| packages/database/migrations/0096_bank_feeds.sql:49 | CONSTRAINT bank_statements_status_check CHECK (status IN ('processing', 'processed', 'reconciled', 'error')), |
| packages/database/migrations/0096_bank_feeds.sql:50 | CONSTRAINT bank_statements_period_check CHECK (period_to >= period_from) |
| packages/database/migrations/0096_bank_feeds.sql:53 | CREATE INDEX IF NOT EXISTS bank_statements_tenant_account_period_idx |
| packages/database/migrations/0096_bank_feeds.sql:55 | CREATE UNIQUE INDEX IF NOT EXISTS bank_statements_file_key |
| packages/database/migrations/0096_bank_feeds.sql:60 | tenant_id                  uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0096_bank_feeds.sql:61 | statement_id               uuid NOT NULL REFERENCES bank_statements(id) ON DELETE CASCADE, |
| packages/database/migrations/0096_bank_feeds.sql:68 | matched_voucher_id         uuid REFERENCES vouchers(id) ON DELETE SET NULL, |
| packages/database/migrations/0096_bank_feeds.sql:73 | suggested_account_id       uuid REFERENCES accounts(id) ON DELETE SET NULL, |
| packages/database/migrations/0096_bank_feeds.sql:74 | suggested_cost_center_id   uuid REFERENCES cost_centers(id) ON DELETE SET NULL, |
| packages/database/migrations/0096_bank_feeds.sql:84 | CONSTRAINT bank_statement_lines_status_check CHECK (status IN ('pending', 'matched', 'ignored')), |
| packages/database/migrations/0096_bank_feeds.sql:85 | CONSTRAINT bank_statement_lines_invoice_type_check CHECK ( |
| packages/database/migrations/0096_bank_feeds.sql:90 | CREATE UNIQUE INDEX IF NOT EXISTS bank_statement_lines_statement_line_key |
| packages/database/migrations/0096_bank_feeds.sql:92 | CREATE INDEX IF NOT EXISTS bank_statement_lines_tenant_status_idx |
| packages/database/migrations/0096_bank_feeds.sql:94 | CREATE INDEX IF NOT EXISTS bank_statement_lines_statement_date_idx |
| packages/database/migrations/0096_bank_feeds.sql:96 | CREATE INDEX IF NOT EXISTS bank_statement_lines_matched_voucher_idx |
| packages/database/migrations/0096_bank_feeds.sql:98 | CREATE INDEX IF NOT EXISTS bank_statement_lines_matched_invoice_idx |
| packages/database/migrations/0096_bank_feeds.sql:103 | tenant_id         uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0096_bank_feeds.sql:105 | account_id        uuid NOT NULL REFERENCES accounts(id) ON DELETE RESTRICT, |
| packages/database/migrations/0096_bank_feeds.sql:106 | cost_center_id    uuid REFERENCES cost_centers(id) ON DELETE SET NULL, |
| packages/database/migrations/0096_bank_feeds.sql:114 | CONSTRAINT bank_reconciliation_rules_status_check CHECK (status IN ('active', 'inactive')) |
| packages/database/migrations/0096_bank_feeds.sql:117 | CREATE UNIQUE INDEX IF NOT EXISTS bank_reconciliation_rules_tenant_keyword_key |
| packages/database/migrations/0096_bank_feeds.sql:119 | CREATE INDEX IF NOT EXISTS bank_reconciliation_rules_priority_idx |
| packages/database/migrations/0096_bank_feeds.sql:130 | 'CREATE POLICY %I_tenant_isolation ON %I USING (tenant_id = nullif(current_setting(''app.tenant_id'', true), '''')::uuid) WITH CHECK (tenant_id = nullif(current_setting(''app.tenant_id'', true), '''')::uuid)', |
| packages/database/migrations/0097_ocr_purchase_invoices.sql:8 | tenant_id         uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0097_ocr_purchase_invoices.sql:9 | file_id           uuid NOT NULL REFERENCES files(id) ON DELETE RESTRICT, |
| packages/database/migrations/0097_ocr_purchase_invoices.sql:18 | draft_invoice_id  uuid REFERENCES purchase_invoices(id) ON DELETE SET NULL, |
| packages/database/migrations/0097_ocr_purchase_invoices.sql:24 | CONSTRAINT ocr_jobs_entity_type_check CHECK (entity_type IN ('purchase_invoice')), |
| packages/database/migrations/0097_ocr_purchase_invoices.sql:25 | CONSTRAINT ocr_jobs_status_check CHECK (status IN ('queued', 'processing', 'done', 'failed')), |
| packages/database/migrations/0097_ocr_purchase_invoices.sql:26 | CONSTRAINT ocr_jobs_confidence_check CHECK (confidence IS NULL OR (confidence >= 0 AND confidence <= 1)) |
| packages/database/migrations/0097_ocr_purchase_invoices.sql:29 | CREATE INDEX IF NOT EXISTS ocr_jobs_tenant_status_created_idx |
| packages/database/migrations/0097_ocr_purchase_invoices.sql:31 | CREATE INDEX IF NOT EXISTS ocr_jobs_tenant_file_idx |
| packages/database/migrations/0097_ocr_purchase_invoices.sql:33 | CREATE INDEX IF NOT EXISTS ocr_jobs_tenant_entity_idx |
| packages/database/migrations/0097_ocr_purchase_invoices.sql:41 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0098_harden_printer_report_links_rls.sql:11 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0099_ecommerce_stores_orders.sql:9 | tenant_id           uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0099_ecommerce_stores_orders.sql:25 | CONSTRAINT ecommerce_stores_provider_check CHECK (provider IN ('salla', 'zid', 'shopify')), |
| packages/database/migrations/0099_ecommerce_stores_orders.sql:26 | CONSTRAINT ecommerce_stores_status_check CHECK (status IN ('active', 'error')), |
| packages/database/migrations/0099_ecommerce_stores_orders.sql:30 | CREATE INDEX IF NOT EXISTS ecommerce_stores_tenant_provider_idx |
| packages/database/migrations/0099_ecommerce_stores_orders.sql:32 | CREATE INDEX IF NOT EXISTS ecommerce_stores_tenant_status_idx |
| packages/database/migrations/0099_ecommerce_stores_orders.sql:34 | CREATE UNIQUE INDEX IF NOT EXISTS ecommerce_stores_tenant_provider_remote_key |
| packages/database/migrations/0099_ecommerce_stores_orders.sql:40 | tenant_id           uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0099_ecommerce_stores_orders.sql:51 | erp_invoice_id      uuid REFERENCES sales_invoices(id) ON DELETE SET NULL, |
| packages/database/migrations/0099_ecommerce_stores_orders.sql:60 | CONSTRAINT ecommerce_orders_status_check CHECK (status IN ('pending', 'imported', 'failed')), |
| packages/database/migrations/0099_ecommerce_stores_orders.sql:62 | FOREIGN KEY (tenant_id, store_id) |
| packages/database/migrations/0099_ecommerce_stores_orders.sql:63 | REFERENCES ecommerce_stores(tenant_id, id) |
| packages/database/migrations/0099_ecommerce_stores_orders.sql:67 | CREATE UNIQUE INDEX IF NOT EXISTS ecommerce_orders_store_remote_key |
| packages/database/migrations/0099_ecommerce_stores_orders.sql:69 | CREATE INDEX IF NOT EXISTS ecommerce_orders_tenant_remote_idx |
| packages/database/migrations/0099_ecommerce_stores_orders.sql:71 | CREATE INDEX IF NOT EXISTS ecommerce_orders_tenant_status_idx |
| packages/database/migrations/0099_ecommerce_stores_orders.sql:73 | CREATE INDEX IF NOT EXISTS ecommerce_orders_tenant_store_created_idx |
| packages/database/migrations/0099_ecommerce_stores_orders.sql:78 | tenant_id           uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0099_ecommerce_stores_orders.sql:93 | CONSTRAINT ecommerce_sync_logs_direction_check CHECK (direction IN ('in', 'out')), |
| packages/database/migrations/0099_ecommerce_stores_orders.sql:94 | CONSTRAINT ecommerce_sync_logs_status_check CHECK (status IN ('started', 'success', 'error')), |
| packages/database/migrations/0099_ecommerce_stores_orders.sql:96 | FOREIGN KEY (tenant_id, store_id) |
| packages/database/migrations/0099_ecommerce_stores_orders.sql:97 | REFERENCES ecommerce_stores(tenant_id, id) |
| packages/database/migrations/0099_ecommerce_stores_orders.sql:101 | CREATE INDEX IF NOT EXISTS ecommerce_sync_logs_tenant_store_idx |
| packages/database/migrations/0099_ecommerce_stores_orders.sql:103 | CREATE INDEX IF NOT EXISTS ecommerce_sync_logs_tenant_status_idx |
| packages/database/migrations/0099_ecommerce_stores_orders.sql:112 | 'CREATE POLICY %I_tenant_isolation ON %I USING (tenant_id = nullif(current_setting(''app.tenant_id'', true), '''')::uuid) WITH CHECK (tenant_id = nullif(current_setting(''app.tenant_id'', true), '''')::uuid)', |
| packages/database/migrations/0100_approval_workflows.sql:8 | tenant_id    uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0100_approval_workflows.sql:13 | created_by   uuid REFERENCES users(id) ON DELETE SET NULL, |
| packages/database/migrations/0100_approval_workflows.sql:15 | updated_by   uuid REFERENCES users(id) ON DELETE SET NULL, |
| packages/database/migrations/0100_approval_workflows.sql:18 | CHECK (entity IN ('sales_invoice', 'purchase_invoice', 'voucher', 'expense', 'leave')), |
| packages/database/migrations/0100_approval_workflows.sql:22 | CREATE INDEX IF NOT EXISTS approval_workflows_tenant_entity_idx |
| packages/database/migrations/0100_approval_workflows.sql:27 | workflow_id       uuid NOT NULL REFERENCES approval_workflows(id) ON DELETE CASCADE, |
| packages/database/migrations/0100_approval_workflows.sql:30 | approver_user_id  uuid REFERENCES users(id) ON DELETE SET NULL, |
| packages/database/migrations/0100_approval_workflows.sql:35 | CONSTRAINT approval_steps_order_check CHECK (step_order > 0), |
| packages/database/migrations/0100_approval_workflows.sql:36 | CONSTRAINT approval_steps_target_check CHECK (approver_role IS NOT NULL OR approver_user_id IS NOT NULL), |
| packages/database/migrations/0100_approval_workflows.sql:37 | CONSTRAINT approval_steps_action_check CHECK (action IN ('approve', 'notify')), |
| packages/database/migrations/0100_approval_workflows.sql:41 | CREATE INDEX IF NOT EXISTS approval_steps_workflow_idx |
| packages/database/migrations/0100_approval_workflows.sql:46 | tenant_id           uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0100_approval_workflows.sql:47 | workflow_id         uuid NOT NULL REFERENCES approval_workflows(id) ON DELETE RESTRICT, |
| packages/database/migrations/0100_approval_workflows.sql:53 | created_by          uuid REFERENCES users(id) ON DELETE SET NULL, |
| packages/database/migrations/0100_approval_workflows.sql:57 | CHECK (entity_type IN ('sales_invoice', 'purchase_invoice', 'voucher', 'expense', 'leave')), |
| packages/database/migrations/0100_approval_workflows.sql:59 | CHECK (status IN ('pending', 'approved', 'rejected')) |
| packages/database/migrations/0100_approval_workflows.sql:62 | CREATE UNIQUE INDEX IF NOT EXISTS approval_requests_pending_entity_key |
| packages/database/migrations/0100_approval_workflows.sql:65 | CREATE INDEX IF NOT EXISTS approval_requests_tenant_status_idx |
| packages/database/migrations/0100_approval_workflows.sql:67 | CREATE INDEX IF NOT EXISTS approval_requests_tenant_entity_idx |
| packages/database/migrations/0100_approval_workflows.sql:72 | request_id  uuid NOT NULL REFERENCES approval_requests(id) ON DELETE CASCADE, |
| packages/database/migrations/0100_approval_workflows.sql:73 | step_id     uuid NOT NULL REFERENCES approval_steps(id) ON DELETE RESTRICT, |
| packages/database/migrations/0100_approval_workflows.sql:74 | user_id     uuid NOT NULL REFERENCES users(id) ON DELETE RESTRICT, |
| packages/database/migrations/0100_approval_workflows.sql:78 | CONSTRAINT approval_decisions_decision_check CHECK (decision IN ('approved', 'rejected')), |
| packages/database/migrations/0100_approval_workflows.sql:82 | CREATE INDEX IF NOT EXISTS approval_decisions_request_idx |
| packages/database/migrations/0100_approval_workflows.sql:84 | CREATE INDEX IF NOT EXISTS approval_decisions_user_idx |
| packages/database/migrations/0100_approval_workflows.sql:101 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0100_approval_workflows.sql:113 | WITH CHECK ( |
| packages/database/migrations/0100_approval_workflows.sql:129 | WITH CHECK (EXISTS ( |
| packages/database/migrations/0100_approval_workflows.sql:142 | WITH CHECK (EXISTS ( |
| packages/database/migrations/0101_custom_fields_reports.sql:6 | tenant_id    uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0101_custom_fields_reports.sql:17 | created_by   uuid REFERENCES users(id) ON DELETE SET NULL, |
| packages/database/migrations/0101_custom_fields_reports.sql:19 | updated_by   uuid REFERENCES users(id) ON DELETE SET NULL, |
| packages/database/migrations/0101_custom_fields_reports.sql:22 | deleted_by   uuid REFERENCES users(id) ON DELETE SET NULL, |
| packages/database/migrations/0101_custom_fields_reports.sql:23 | CONSTRAINT custom_fields_entity_check CHECK (entity IN ('party', 'item', 'invoice', 'employee')), |
| packages/database/migrations/0101_custom_fields_reports.sql:24 | CONSTRAINT custom_fields_type_check CHECK (type IN ('text', 'number', 'date', 'select', 'boolean')), |
| packages/database/migrations/0101_custom_fields_reports.sql:25 | CONSTRAINT custom_fields_key_check CHECK (key ~ '^[a-z][a-z0-9_]{0,63}$'), |
| packages/database/migrations/0101_custom_fields_reports.sql:26 | CONSTRAINT custom_fields_options_array_check CHECK (jsonb_typeof(options) = 'array'), |
| packages/database/migrations/0101_custom_fields_reports.sql:29 | CREATE INDEX IF NOT EXISTS custom_fields_tenant_entity_order_idx ON custom_fields(tenant_id, entity, sort_order); |
| packages/database/migrations/0101_custom_fields_reports.sql:30 | CREATE INDEX IF NOT EXISTS custom_fields_tenant_active_idx ON custom_fields(tenant_id, entity, is_active); |
| packages/database/migrations/0101_custom_fields_reports.sql:34 | tenant_id   uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0101_custom_fields_reports.sql:35 | field_id    uuid NOT NULL REFERENCES custom_fields(id) ON DELETE CASCADE, |
| packages/database/migrations/0101_custom_fields_reports.sql:40 | created_by  uuid REFERENCES users(id) ON DELETE SET NULL, |
| packages/database/migrations/0101_custom_fields_reports.sql:42 | updated_by  uuid REFERENCES users(id) ON DELETE SET NULL, |
| packages/database/migrations/0101_custom_fields_reports.sql:44 | CONSTRAINT custom_field_values_entity_check CHECK (entity_type IN ('party', 'item', 'invoice', 'employee')), |
| packages/database/migrations/0101_custom_fields_reports.sql:47 | CREATE INDEX IF NOT EXISTS custom_field_values_tenant_entity_idx ON custom_field_values(tenant_id, entity_type, entity_id); |
| packages/database/migrations/0101_custom_fields_reports.sql:48 | CREATE INDEX IF NOT EXISTS custom_field_values_tenant_field_idx ON custom_field_values(tenant_id, field_id); |
| packages/database/migrations/0101_custom_fields_reports.sql:52 | tenant_id   uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0101_custom_fields_reports.sql:59 | created_by  uuid REFERENCES users(id) ON DELETE SET NULL, |
| packages/database/migrations/0101_custom_fields_reports.sql:62 | updated_by  uuid REFERENCES users(id) ON DELETE SET NULL, |
| packages/database/migrations/0101_custom_fields_reports.sql:65 | deleted_by  uuid REFERENCES users(id) ON DELETE SET NULL, |
| packages/database/migrations/0101_custom_fields_reports.sql:66 | CONSTRAINT custom_reports_base_entity_check CHECK (base_entity IN ('party', 'item', 'invoice', 'employee', 'sales_invoice')), |
| packages/database/migrations/0101_custom_fields_reports.sql:67 | CONSTRAINT custom_reports_chart_type_check CHECK (chart_type IN ('table', 'bar', 'line', 'pie')), |
| packages/database/migrations/0101_custom_fields_reports.sql:70 | CREATE INDEX IF NOT EXISTS custom_reports_tenant_entity_idx ON custom_reports(tenant_id, base_entity, created_at); |
| packages/database/migrations/0101_custom_fields_reports.sql:84 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0101_custom_fields_reports.sql:92 | WITH CHECK ( |
| packages/database/migrations/0101_custom_fields_reports.sql:100 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0102_offline_pos.sql:9 | tenant_id       uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0102_offline_pos.sql:15 | invoice_id      uuid REFERENCES sales_invoices(id) ON DELETE SET NULL, |
| packages/database/migrations/0102_offline_pos.sql:19 | created_by      uuid REFERENCES users(id) ON DELETE SET NULL, |
| packages/database/migrations/0102_offline_pos.sql:23 | CONSTRAINT offline_queue_status_check CHECK (status IN ('pending', 'synced', 'conflict')), |
| packages/database/migrations/0102_offline_pos.sql:24 | CONSTRAINT offline_queue_sequence_check CHECK (sequence_no > 0), |
| packages/database/migrations/0102_offline_pos.sql:25 | CONSTRAINT offline_queue_device_check CHECK (char_length(device_id) BETWEEN 1 AND 128), |
| packages/database/migrations/0102_offline_pos.sql:26 | CONSTRAINT offline_queue_offline_id_check CHECK (char_length(offline_id) BETWEEN 1 AND 160) |
| packages/database/migrations/0102_offline_pos.sql:29 | CREATE UNIQUE INDEX IF NOT EXISTS offline_queue_tenant_offline_id_key |
| packages/database/migrations/0102_offline_pos.sql:31 | CREATE UNIQUE INDEX IF NOT EXISTS offline_queue_tenant_device_sequence_key |
| packages/database/migrations/0102_offline_pos.sql:33 | CREATE INDEX IF NOT EXISTS offline_queue_tenant_status_idx |
| packages/database/migrations/0102_offline_pos.sql:35 | CREATE INDEX IF NOT EXISTS offline_queue_tenant_device_idx |
| packages/database/migrations/0102_offline_pos.sql:44 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0103_mudad_moyasar.sql:16 | CHECK (gosi_scheme IS NULL OR gosi_scheme IN ('old', 'new')); |
| packages/database/migrations/0103_mudad_moyasar.sql:18 | CREATE INDEX IF NOT EXISTS employees_iqama_expiry_idx |
| packages/database/migrations/0103_mudad_moyasar.sql:21 | CREATE INDEX IF NOT EXISTS employees_insurance_expiry_idx |
| packages/database/migrations/0103_mudad_moyasar.sql:26 | tenant_id uuid PRIMARY KEY REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0103_mudad_moyasar.sql:30 | default_cash_location_id uuid REFERENCES cash_locations(id) ON DELETE SET NULL, |
| packages/database/migrations/0103_mudad_moyasar.sql:36 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0103_mudad_moyasar.sql:37 | payroll_run_id uuid NOT NULL REFERENCES payroll_runs(id) ON DELETE CASCADE, |
| packages/database/migrations/0103_mudad_moyasar.sql:47 | created_by uuid REFERENCES users(id) ON DELETE SET NULL, |
| packages/database/migrations/0103_mudad_moyasar.sql:50 | CONSTRAINT payroll_wps_files_status_check CHECK (status IN ('generated', 'uploaded', 'accepted', 'rejected')), |
| packages/database/migrations/0103_mudad_moyasar.sql:51 | CONSTRAINT payroll_wps_files_count_check CHECK (employee_count > 0) |
| packages/database/migrations/0103_mudad_moyasar.sql:56 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0103_mudad_moyasar.sql:57 | payroll_run_id uuid NOT NULL REFERENCES payroll_runs(id) ON DELETE CASCADE, |
| packages/database/migrations/0103_mudad_moyasar.sql:65 | created_by uuid REFERENCES users(id) ON DELETE SET NULL, |
| packages/database/migrations/0103_mudad_moyasar.sql:68 | CONSTRAINT payroll_gosi_files_status_check CHECK (status IN ('generated', 'uploaded', 'accepted', 'rejected')), |
| packages/database/migrations/0103_mudad_moyasar.sql:69 | CONSTRAINT payroll_gosi_files_count_check CHECK (employee_count > 0) |
| packages/database/migrations/0103_mudad_moyasar.sql:74 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0103_mudad_moyasar.sql:82 | cash_location_id uuid REFERENCES cash_locations(id) ON DELETE SET NULL, |
| packages/database/migrations/0103_mudad_moyasar.sql:85 | CONSTRAINT payment_provider_configs_provider_check CHECK (provider IN ('moyasar', 'hyperpay', 'tap')) |
| packages/database/migrations/0103_mudad_moyasar.sql:90 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0103_mudad_moyasar.sql:91 | invoice_id uuid NOT NULL REFERENCES sales_invoices(id) ON DELETE CASCADE, |
| packages/database/migrations/0103_mudad_moyasar.sql:99 | voucher_id uuid REFERENCES vouchers(id) ON DELETE SET NULL, |
| packages/database/migrations/0103_mudad_moyasar.sql:101 | created_by uuid REFERENCES users(id) ON DELETE SET NULL, |
| packages/database/migrations/0103_mudad_moyasar.sql:104 | CONSTRAINT payment_links_provider_check CHECK (provider IN ('moyasar', 'hyperpay', 'tap')), |
| packages/database/migrations/0103_mudad_moyasar.sql:105 | CONSTRAINT payment_links_status_check CHECK (status IN ('pending', 'paid', 'expired', 'failed')), |
| packages/database/migrations/0103_mudad_moyasar.sql:106 | CONSTRAINT payment_links_amount_check CHECK (amount > 0) |
| packages/database/migrations/0103_mudad_moyasar.sql:109 | CREATE INDEX IF NOT EXISTS payroll_wps_files_run_idx |
| packages/database/migrations/0103_mudad_moyasar.sql:111 | CREATE INDEX IF NOT EXISTS payroll_gosi_files_run_idx |
| packages/database/migrations/0103_mudad_moyasar.sql:113 | CREATE UNIQUE INDEX IF NOT EXISTS payment_provider_configs_tenant_provider_key |
| packages/database/migrations/0103_mudad_moyasar.sql:115 | CREATE INDEX IF NOT EXISTS payment_links_invoice_idx |
| packages/database/migrations/0103_mudad_moyasar.sql:117 | CREATE UNIQUE INDEX IF NOT EXISTS payment_links_external_key |
| packages/database/migrations/0103_mudad_moyasar.sql:135 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0103_mudad_moyasar.sql:139 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0103_mudad_moyasar.sql:143 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0103_mudad_moyasar.sql:147 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0103_mudad_moyasar.sql:151 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0104_ai_assistant.sql:19 | CONSTRAINT ai_platform_settings_singleton CHECK (id), |
| packages/database/migrations/0104_ai_assistant.sql:20 | CONSTRAINT ai_platform_settings_provider_check CHECK (provider IN ('openai', 'anthropic', 'local')), |
| packages/database/migrations/0104_ai_assistant.sql:21 | CONSTRAINT ai_platform_settings_limit_check CHECK (default_monthly_token_limit >= 0) |
| packages/database/migrations/0104_ai_assistant.sql:27 | tenant_id uuid PRIMARY KEY REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0104_ai_assistant.sql:35 | CONSTRAINT ai_settings_provider_check CHECK (provider IS NULL OR provider IN ('openai', 'anthropic', 'local')), |
| packages/database/migrations/0104_ai_assistant.sql:36 | CONSTRAINT ai_settings_token_limit_check CHECK (monthly_token_limit IS NULL OR monthly_token_limit >= 0), |
| packages/database/migrations/0104_ai_assistant.sql:37 | CONSTRAINT ai_settings_cost_limit_check CHECK (monthly_cost_limit IS NULL OR monthly_cost_limit >= 0) |
| packages/database/migrations/0104_ai_assistant.sql:42 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0104_ai_assistant.sql:43 | user_id uuid REFERENCES users(id) ON DELETE SET NULL, |
| packages/database/migrations/0104_ai_assistant.sql:52 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0104_ai_assistant.sql:53 | conversation_id uuid REFERENCES ai_conversations(id) ON DELETE SET NULL, |
| packages/database/migrations/0104_ai_assistant.sql:54 | user_id uuid REFERENCES users(id) ON DELETE SET NULL, |
| packages/database/migrations/0104_ai_assistant.sql:60 | CONSTRAINT ai_usage_logs_tokens_check CHECK (tokens_in >= 0 AND tokens_out >= 0), |
| packages/database/migrations/0104_ai_assistant.sql:61 | CONSTRAINT ai_usage_logs_cost_check CHECK (cost >= 0) |
| packages/database/migrations/0104_ai_assistant.sql:66 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0104_ai_assistant.sql:73 | CONSTRAINT ai_suggestions_kind_check CHECK (kind IN ('overdue_invoices', 'low_stock')) |
| packages/database/migrations/0104_ai_assistant.sql:76 | CREATE INDEX IF NOT EXISTS ai_conversations_user_idx |
| packages/database/migrations/0104_ai_assistant.sql:78 | CREATE INDEX IF NOT EXISTS ai_usage_logs_period_idx |
| packages/database/migrations/0104_ai_assistant.sql:80 | CREATE UNIQUE INDEX IF NOT EXISTS ai_suggestions_tenant_kind_period_key |
| packages/database/migrations/0104_ai_assistant.sql:98 | WITH CHECK (COALESCE(current_setting('app.is_platform_admin', true), 'off') = 'on'); |
| packages/database/migrations/0104_ai_assistant.sql:103 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0104_ai_assistant.sql:107 | WITH CHECK (COALESCE(current_setting('app.is_platform_admin', true), 'off') = 'on'); |
| packages/database/migrations/0104_ai_assistant.sql:112 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0104_ai_assistant.sql:116 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0104_ai_assistant.sql:120 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0105_employee_mobile.sql:9 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0105_employee_mobile.sql:10 | branch_id uuid NOT NULL REFERENCES branches(id) ON DELETE CASCADE, |
| packages/database/migrations/0105_employee_mobile.sql:15 | CONSTRAINT employee_geofences_lat_check CHECK (lat BETWEEN -90 AND 90), |
| packages/database/migrations/0105_employee_mobile.sql:16 | CONSTRAINT employee_geofences_lng_check CHECK (lng BETWEEN -180 AND 180), |
| packages/database/migrations/0105_employee_mobile.sql:17 | CONSTRAINT employee_geofences_radius_check CHECK (radius_meters BETWEEN 1 AND 50000) |
| packages/database/migrations/0105_employee_mobile.sql:20 | CREATE UNIQUE INDEX IF NOT EXISTS employee_geofences_branch_key |
| packages/database/migrations/0105_employee_mobile.sql:25 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0105_employee_mobile.sql:26 | employee_id uuid NOT NULL REFERENCES employees(id) ON DELETE CASCADE, |
| packages/database/migrations/0105_employee_mobile.sql:27 | branch_id uuid REFERENCES branches(id) ON DELETE SET NULL, |
| packages/database/migrations/0105_employee_mobile.sql:37 | CONSTRAINT employee_attendance_type_check CHECK (type IN ('check_in', 'check_out')), |
| packages/database/migrations/0105_employee_mobile.sql:38 | CONSTRAINT employee_attendance_status_check CHECK (status IN ('valid', 'outside_geofence')), |
| packages/database/migrations/0105_employee_mobile.sql:39 | CONSTRAINT employee_attendance_lat_check CHECK (lat BETWEEN -90 AND 90), |
| packages/database/migrations/0105_employee_mobile.sql:40 | CONSTRAINT employee_attendance_lng_check CHECK (lng BETWEEN -180 AND 180) |
| packages/database/migrations/0105_employee_mobile.sql:43 | CREATE UNIQUE INDEX IF NOT EXISTS employee_attendance_client_key |
| packages/database/migrations/0105_employee_mobile.sql:46 | CREATE INDEX IF NOT EXISTS employee_attendance_day_idx |
| packages/database/migrations/0105_employee_mobile.sql:51 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0105_employee_mobile.sql:52 | employee_id uuid NOT NULL REFERENCES employees(id) ON DELETE CASCADE, |
| packages/database/migrations/0105_employee_mobile.sql:60 | approver_membership_id uuid REFERENCES memberships(id) ON DELETE SET NULL, |
| packages/database/migrations/0105_employee_mobile.sql:64 | CONSTRAINT employee_requests_type_check CHECK (type IN ('leave', 'permission', 'custody', 'advance')), |
| packages/database/migrations/0105_employee_mobile.sql:65 | CONSTRAINT employee_requests_status_check CHECK (status IN ('pending', 'approved', 'rejected')) |
| packages/database/migrations/0105_employee_mobile.sql:68 | CREATE INDEX IF NOT EXISTS employee_requests_status_idx |
| packages/database/migrations/0105_employee_mobile.sql:70 | CREATE INDEX IF NOT EXISTS employee_requests_employee_idx |
| packages/database/migrations/0105_employee_mobile.sql:75 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0105_employee_mobile.sql:76 | user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE, |
| packages/database/migrations/0105_employee_mobile.sql:83 | CREATE UNIQUE INDEX IF NOT EXISTS employee_push_subscriptions_endpoint_key |
| packages/database/migrations/0105_employee_mobile.sql:88 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0105_employee_mobile.sql:89 | user_id uuid REFERENCES users(id) ON DELETE SET NULL, |
| packages/database/migrations/0105_employee_mobile.sql:90 | membership_id uuid REFERENCES memberships(id) ON DELETE SET NULL, |
| packages/database/migrations/0105_employee_mobile.sql:97 | CONSTRAINT employee_push_outbox_status_check CHECK (status IN ('queued', 'delivered')) |
| packages/database/migrations/0105_employee_mobile.sql:100 | CREATE INDEX IF NOT EXISTS employee_push_outbox_user_idx |
| packages/database/migrations/0105_employee_mobile.sql:117 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0105_employee_mobile.sql:121 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0105_employee_mobile.sql:125 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0105_employee_mobile.sql:129 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0105_employee_mobile.sql:133 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0106_wms_bom.sql:9 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0106_wms_bom.sql:10 | warehouse_id uuid NOT NULL REFERENCES warehouses(id) ON DELETE RESTRICT, |
| packages/database/migrations/0106_wms_bom.sql:22 | CONSTRAINT warehouse_bins_code_check CHECK (char_length(btrim(code)) BETWEEN 1 AND 32) |
| packages/database/migrations/0106_wms_bom.sql:25 | CREATE UNIQUE INDEX IF NOT EXISTS warehouse_bins_code_key |
| packages/database/migrations/0106_wms_bom.sql:27 | CREATE INDEX IF NOT EXISTS warehouse_bins_warehouse_idx |
| packages/database/migrations/0106_wms_bom.sql:32 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0106_wms_bom.sql:33 | bin_id uuid NOT NULL REFERENCES warehouse_bins(id) ON DELETE RESTRICT, |
| packages/database/migrations/0106_wms_bom.sql:34 | item_id uuid NOT NULL REFERENCES items(id) ON DELETE RESTRICT, |
| packages/database/migrations/0106_wms_bom.sql:35 | lot_id uuid REFERENCES item_lots(id) ON DELETE RESTRICT, |
| packages/database/migrations/0106_wms_bom.sql:38 | CONSTRAINT bin_balances_quantity_check CHECK (quantity >= 0) |
| packages/database/migrations/0106_wms_bom.sql:42 | CREATE UNIQUE INDEX IF NOT EXISTS bin_balances_item_key |
| packages/database/migrations/0106_wms_bom.sql:44 | CREATE INDEX IF NOT EXISTS bin_balances_item_idx ON bin_balances (tenant_id, item_id); |
| packages/database/migrations/0106_wms_bom.sql:45 | CREATE INDEX IF NOT EXISTS bin_balances_bin_idx ON bin_balances (tenant_id, bin_id); |
| packages/database/migrations/0106_wms_bom.sql:49 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0106_wms_bom.sql:50 | from_bin_id uuid NOT NULL REFERENCES warehouse_bins(id) ON DELETE RESTRICT, |
| packages/database/migrations/0106_wms_bom.sql:51 | to_bin_id uuid NOT NULL REFERENCES warehouse_bins(id) ON DELETE RESTRICT, |
| packages/database/migrations/0106_wms_bom.sql:52 | item_id uuid NOT NULL REFERENCES items(id) ON DELETE RESTRICT, |
| packages/database/migrations/0106_wms_bom.sql:53 | lot_id uuid REFERENCES item_lots(id) ON DELETE RESTRICT, |
| packages/database/migrations/0106_wms_bom.sql:57 | CONSTRAINT bin_transfers_quantity_check CHECK (quantity > 0), |
| packages/database/migrations/0106_wms_bom.sql:58 | CONSTRAINT bin_transfers_distinct_check CHECK (from_bin_id <> to_bin_id) |
| packages/database/migrations/0106_wms_bom.sql:61 | CREATE INDEX IF NOT EXISTS bin_transfers_created_idx ON bin_transfers (tenant_id, created_at DESC); |
| packages/database/migrations/0106_wms_bom.sql:65 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0106_wms_bom.sql:66 | product_item_id uuid NOT NULL REFERENCES items(id) ON DELETE RESTRICT, |
| packages/database/migrations/0106_wms_bom.sql:74 | CONSTRAINT boms_name_check CHECK (char_length(btrim(name)) BETWEEN 1 AND 120), |
| packages/database/migrations/0106_wms_bom.sql:75 | CONSTRAINT boms_version_check CHECK (version >= 1) |
| packages/database/migrations/0106_wms_bom.sql:78 | CREATE UNIQUE INDEX IF NOT EXISTS boms_product_version_key |
| packages/database/migrations/0106_wms_bom.sql:80 | CREATE INDEX IF NOT EXISTS boms_product_idx ON boms (tenant_id, product_item_id); |
| packages/database/migrations/0106_wms_bom.sql:84 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0106_wms_bom.sql:85 | bom_id uuid NOT NULL REFERENCES boms(id) ON DELETE CASCADE, |
| packages/database/migrations/0106_wms_bom.sql:86 | component_item_id uuid NOT NULL REFERENCES items(id) ON DELETE RESTRICT, |
| packages/database/migrations/0106_wms_bom.sql:88 | unit_id uuid REFERENCES units_of_measure(id) ON DELETE RESTRICT, |
| packages/database/migrations/0106_wms_bom.sql:90 | CONSTRAINT bom_lines_qty_check CHECK (qty > 0), |
| packages/database/migrations/0106_wms_bom.sql:91 | CONSTRAINT bom_lines_scrap_check CHECK (scrap_percent >= 0 AND scrap_percent <= 100) |
| packages/database/migrations/0106_wms_bom.sql:94 | CREATE INDEX IF NOT EXISTS bom_lines_bom_idx ON bom_lines (tenant_id, bom_id); |
| packages/database/migrations/0106_wms_bom.sql:98 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0106_wms_bom.sql:99 | bom_id uuid NOT NULL REFERENCES boms(id) ON DELETE RESTRICT, |
| packages/database/migrations/0106_wms_bom.sql:100 | warehouse_id uuid NOT NULL REFERENCES warehouses(id) ON DELETE RESTRICT, |
| packages/database/migrations/0106_wms_bom.sql:101 | branch_id uuid REFERENCES branches(id) ON DELETE RESTRICT, |
| packages/database/migrations/0106_wms_bom.sql:103 | product_item_id uuid NOT NULL REFERENCES items(id) ON DELETE RESTRICT, |
| packages/database/migrations/0106_wms_bom.sql:114 | CONSTRAINT manufacturing_orders_qty_check CHECK (qty_planned > 0 AND qty_produced >= 0), |
| packages/database/migrations/0106_wms_bom.sql:115 | CONSTRAINT manufacturing_orders_status_check CHECK (status IN ('draft', 'in_progress', 'done')) |
| packages/database/migrations/0106_wms_bom.sql:118 | CREATE UNIQUE INDEX IF NOT EXISTS manufacturing_orders_number_key |
| packages/database/migrations/0106_wms_bom.sql:120 | CREATE INDEX IF NOT EXISTS manufacturing_orders_status_idx |
| packages/database/migrations/0106_wms_bom.sql:125 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0106_wms_bom.sql:126 | order_id uuid NOT NULL REFERENCES manufacturing_orders(id) ON DELETE CASCADE, |
| packages/database/migrations/0106_wms_bom.sql:127 | item_id uuid NOT NULL REFERENCES items(id) ON DELETE RESTRICT, |
| packages/database/migrations/0106_wms_bom.sql:133 | CONSTRAINT manufacturing_moves_type_check CHECK (type IN ('consume', 'produce')), |
| packages/database/migrations/0106_wms_bom.sql:134 | CONSTRAINT manufacturing_moves_qty_check CHECK (qty > 0) |
| packages/database/migrations/0106_wms_bom.sql:137 | CREATE INDEX IF NOT EXISTS manufacturing_moves_order_idx |
| packages/database/migrations/0106_wms_bom.sql:158 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0106_wms_bom.sql:162 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0106_wms_bom.sql:166 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0106_wms_bom.sql:170 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0106_wms_bom.sql:174 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0106_wms_bom.sql:178 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0106_wms_bom.sql:182 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0107_supplier_portal_esign.sql:8 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0107_supplier_portal_esign.sql:9 | party_id uuid NOT NULL REFERENCES parties(id) ON DELETE CASCADE, |
| packages/database/migrations/0107_supplier_portal_esign.sql:17 | CREATE UNIQUE INDEX IF NOT EXISTS supplier_portal_users_email_key |
| packages/database/migrations/0107_supplier_portal_esign.sql:19 | CREATE INDEX IF NOT EXISTS supplier_portal_users_party_idx |
| packages/database/migrations/0107_supplier_portal_esign.sql:24 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0107_supplier_portal_esign.sql:25 | user_id uuid NOT NULL REFERENCES supplier_portal_users(id) ON DELETE CASCADE, |
| packages/database/migrations/0107_supplier_portal_esign.sql:31 | CREATE UNIQUE INDEX IF NOT EXISTS supplier_portal_sessions_token_key |
| packages/database/migrations/0107_supplier_portal_esign.sql:36 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0107_supplier_portal_esign.sql:37 | party_id uuid NOT NULL REFERENCES parties(id) ON DELETE RESTRICT, |
| packages/database/migrations/0107_supplier_portal_esign.sql:47 | CONSTRAINT supplier_rfqs_status_check CHECK (status IN ('open', 'responded', 'closed')), |
| packages/database/migrations/0107_supplier_portal_esign.sql:48 | CONSTRAINT supplier_rfqs_title_check CHECK (char_length(btrim(title)) BETWEEN 1 AND 160) |
| packages/database/migrations/0107_supplier_portal_esign.sql:51 | CREATE UNIQUE INDEX IF NOT EXISTS supplier_rfqs_number_key ON supplier_rfqs (tenant_id, number); |
| packages/database/migrations/0107_supplier_portal_esign.sql:52 | CREATE INDEX IF NOT EXISTS supplier_rfqs_party_idx ON supplier_rfqs (tenant_id, party_id, status); |
| packages/database/migrations/0107_supplier_portal_esign.sql:56 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0107_supplier_portal_esign.sql:57 | party_id uuid NOT NULL REFERENCES parties(id) ON DELETE RESTRICT, |
| packages/database/migrations/0107_supplier_portal_esign.sql:63 | CONSTRAINT supplier_invoice_uploads_total_check CHECK (declared_total > 0) |
| packages/database/migrations/0107_supplier_portal_esign.sql:66 | CREATE INDEX IF NOT EXISTS supplier_invoice_uploads_party_idx |
| packages/database/migrations/0107_supplier_portal_esign.sql:71 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0107_supplier_portal_esign.sql:88 | CONSTRAINT esign_requests_status_check CHECK (status IN ('sent', 'viewed', 'signed', 'declined')), |
| packages/database/migrations/0107_supplier_portal_esign.sql:89 | CONSTRAINT esign_requests_entity_check CHECK (entity_type IN ('sales_quotation', 'sales_invoice', 'contract')) |
| packages/database/migrations/0107_supplier_portal_esign.sql:92 | CREATE UNIQUE INDEX IF NOT EXISTS esign_requests_token_key ON esign_requests (tenant_id, token_hash); |
| packages/database/migrations/0107_supplier_portal_esign.sql:93 | CREATE INDEX IF NOT EXISTS esign_requests_entity_idx ON esign_requests (tenant_id, entity_type, entity_id); |
| packages/database/migrations/0107_supplier_portal_esign.sql:97 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0107_supplier_portal_esign.sql:98 | request_id uuid NOT NULL REFERENCES esign_requests(id) ON DELETE CASCADE, |
| packages/database/migrations/0107_supplier_portal_esign.sql:102 | CONSTRAINT esign_events_event_check CHECK (event IN ('sent', 'viewed', 'signed', 'declined')) |
| packages/database/migrations/0107_supplier_portal_esign.sql:105 | CREATE INDEX IF NOT EXISTS esign_events_request_idx ON esign_events (tenant_id, request_id, at DESC); |
| packages/database/migrations/0107_supplier_portal_esign.sql:123 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0107_supplier_portal_esign.sql:127 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0107_supplier_portal_esign.sql:131 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0107_supplier_portal_esign.sql:135 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0107_supplier_portal_esign.sql:139 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0107_supplier_portal_esign.sql:143 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0108_bi_dashboards.sql:7 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0108_bi_dashboards.sql:8 | owner_user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE, |
| packages/database/migrations/0108_bi_dashboards.sql:13 | CONSTRAINT dashboards_name_check CHECK (char_length(name) BETWEEN 1 AND 80) |
| packages/database/migrations/0108_bi_dashboards.sql:18 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0108_bi_dashboards.sql:19 | dashboard_id uuid NOT NULL REFERENCES dashboards(id) ON DELETE CASCADE, |
| packages/database/migrations/0108_bi_dashboards.sql:29 | CONSTRAINT dashboard_widgets_kind_check CHECK (kind IN ('kpi', 'chart', 'table', 'list')), |
| packages/database/migrations/0108_bi_dashboards.sql:30 | CONSTRAINT dashboard_widgets_bounds_check CHECK ( |
| packages/database/migrations/0108_bi_dashboards.sql:36 | CREATE INDEX IF NOT EXISTS dashboards_owner_idx ON dashboards (tenant_id, owner_user_id); |
| packages/database/migrations/0108_bi_dashboards.sql:37 | CREATE UNIQUE INDEX IF NOT EXISTS dashboards_one_default_per_user |
| packages/database/migrations/0108_bi_dashboards.sql:40 | CREATE INDEX IF NOT EXISTS dashboard_widgets_board_idx ON dashboard_widgets (tenant_id, dashboard_id); |
| packages/database/migrations/0108_bi_dashboards.sql:50 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0108_bi_dashboards.sql:54 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0109_marketplace_white_label.sql:20 | CONSTRAINT marketplace_apps_code_check CHECK (code ~ '^[a-z][a-z0-9_]{1,40}$'), |
| packages/database/migrations/0109_marketplace_white_label.sql:21 | CONSTRAINT marketplace_apps_price_check CHECK (price_monthly >= 0) |
| packages/database/migrations/0109_marketplace_white_label.sql:24 | CREATE UNIQUE INDEX IF NOT EXISTS marketplace_apps_code_key ON marketplace_apps (code); |
| packages/database/migrations/0109_marketplace_white_label.sql:28 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0109_marketplace_white_label.sql:29 | app_code text NOT NULL REFERENCES marketplace_apps(code), |
| packages/database/migrations/0109_marketplace_white_label.sql:33 | installed_by uuid REFERENCES users(id) ON DELETE SET NULL, |
| packages/database/migrations/0109_marketplace_white_label.sql:38 | CREATE UNIQUE INDEX IF NOT EXISTS tenant_apps_tenant_code_key ON tenant_apps (tenant_id, app_code); |
| packages/database/migrations/0109_marketplace_white_label.sql:39 | CREATE INDEX IF NOT EXISTS tenant_apps_tenant_idx ON tenant_apps (tenant_id); |
| packages/database/migrations/0109_marketplace_white_label.sql:43 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0109_marketplace_white_label.sql:52 | CONSTRAINT tenant_domains_status_check CHECK (status IN ('pending', 'active', 'failed')), |
| packages/database/migrations/0109_marketplace_white_label.sql:53 | CONSTRAINT tenant_domains_ssl_check CHECK (ssl_status IN ('manual', 'pending', 'active')) |
| packages/database/migrations/0109_marketplace_white_label.sql:56 | CREATE UNIQUE INDEX IF NOT EXISTS tenant_domains_domain_key ON tenant_domains (domain) WHERE deleted_at IS NULL; |
| packages/database/migrations/0109_marketplace_white_label.sql:57 | CREATE INDEX IF NOT EXISTS tenant_domains_tenant_idx ON tenant_domains (tenant_id); |
| packages/database/migrations/0109_marketplace_white_label.sql:60 | tenant_id uuid PRIMARY KEY REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0109_marketplace_white_label.sql:61 | logo_file_id uuid REFERENCES files(id) ON DELETE SET NULL, |
| packages/database/migrations/0109_marketplace_white_label.sql:75 | FOR INSERT WITH CHECK (COALESCE(current_setting('app.is_platform_admin', true), 'off') = 'on'); |
| packages/database/migrations/0109_marketplace_white_label.sql:80 | WITH CHECK (COALESCE(current_setting('app.is_platform_admin', true), 'off') = 'on'); |
| packages/database/migrations/0109_marketplace_white_label.sql:90 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0109_marketplace_white_label.sql:97 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0109_marketplace_white_label.sql:114 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0110_crm_whatsapp.sql:7 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0110_crm_whatsapp.sql:13 | CONSTRAINT crm_pipelines_name_check CHECK (char_length(name) BETWEEN 1 AND 80) |
| packages/database/migrations/0110_crm_whatsapp.sql:16 | CREATE INDEX IF NOT EXISTS crm_pipelines_tenant_idx ON crm_pipelines (tenant_id); |
| packages/database/migrations/0110_crm_whatsapp.sql:17 | CREATE UNIQUE INDEX IF NOT EXISTS crm_pipelines_default_key ON crm_pipelines (tenant_id) WHERE is_default; |
| packages/database/migrations/0110_crm_whatsapp.sql:21 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0110_crm_whatsapp.sql:22 | pipeline_id uuid NOT NULL REFERENCES crm_pipelines(id) ON DELETE CASCADE, |
| packages/database/migrations/0110_crm_whatsapp.sql:24 | party_id uuid REFERENCES parties(id) ON DELETE SET NULL, |
| packages/database/migrations/0110_crm_whatsapp.sql:29 | owner_id uuid REFERENCES users(id) ON DELETE SET NULL, |
| packages/database/migrations/0110_crm_whatsapp.sql:34 | CONSTRAINT crm_deals_title_check CHECK (char_length(title) BETWEEN 1 AND 120), |
| packages/database/migrations/0110_crm_whatsapp.sql:35 | CONSTRAINT crm_deals_probability_check CHECK (probability BETWEEN 0 AND 100), |
| packages/database/migrations/0110_crm_whatsapp.sql:36 | CONSTRAINT crm_deals_amount_check CHECK (amount >= 0), |
| packages/database/migrations/0110_crm_whatsapp.sql:37 | CONSTRAINT crm_deals_status_check CHECK (status IN ('open', 'won', 'lost')) |
| packages/database/migrations/0110_crm_whatsapp.sql:40 | CREATE INDEX IF NOT EXISTS crm_deals_board_idx ON crm_deals (tenant_id, pipeline_id, stage_id); |
| packages/database/migrations/0110_crm_whatsapp.sql:44 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0110_crm_whatsapp.sql:45 | deal_id uuid NOT NULL REFERENCES crm_deals(id) ON DELETE CASCADE, |
| packages/database/migrations/0110_crm_whatsapp.sql:54 | CONSTRAINT crm_activities_type_check CHECK (type IN ('call', 'meeting', 'whatsapp', 'email', 'note')) |
| packages/database/migrations/0110_crm_whatsapp.sql:57 | CREATE INDEX IF NOT EXISTS crm_activities_deal_idx ON crm_activities (tenant_id, deal_id, at); |
| packages/database/migrations/0110_crm_whatsapp.sql:61 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0110_crm_whatsapp.sql:68 | CREATE UNIQUE INDEX IF NOT EXISTS crm_whatsapp_templates_name_key ON crm_whatsapp_templates (tenant_id, name); |
| packages/database/migrations/0110_crm_whatsapp.sql:71 | tenant_id uuid PRIMARY KEY REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0110_crm_whatsapp.sql:76 | CREATE UNIQUE INDEX IF NOT EXISTS crm_settings_webhook_token_key ON crm_settings (webhook_token); |
| packages/database/migrations/0110_crm_whatsapp.sql:83 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0110_crm_whatsapp.sql:90 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0110_crm_whatsapp.sql:97 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0110_crm_whatsapp.sql:104 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0110_crm_whatsapp.sql:111 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0111_comments_mentions.sql:7 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0111_comments_mentions.sql:10 | user_id uuid NOT NULL REFERENCES users(id) ON DELETE RESTRICT, |
| packages/database/migrations/0111_comments_mentions.sql:12 | parent_id uuid REFERENCES comments(id) ON DELETE CASCADE, |
| packages/database/migrations/0111_comments_mentions.sql:20 | CONSTRAINT comments_body_check CHECK (char_length(body) BETWEEN 1 AND 4000), |
| packages/database/migrations/0111_comments_mentions.sql:21 | CONSTRAINT comments_entity_type_check CHECK ( |
| packages/database/migrations/0111_comments_mentions.sql:26 | CREATE INDEX IF NOT EXISTS comments_thread_idx ON comments (tenant_id, entity_type, entity_id, created_at); |
| packages/database/migrations/0111_comments_mentions.sql:30 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0111_comments_mentions.sql:31 | comment_id uuid NOT NULL REFERENCES comments(id) ON DELETE CASCADE, |
| packages/database/migrations/0111_comments_mentions.sql:32 | mentioned_user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE, |
| packages/database/migrations/0111_comments_mentions.sql:38 | CREATE UNIQUE INDEX IF NOT EXISTS comment_mentions_once_key ON comment_mentions (comment_id, mentioned_user_id); |
| packages/database/migrations/0111_comments_mentions.sql:39 | CREATE INDEX IF NOT EXISTS comment_mentions_inbox_idx ON comment_mentions (tenant_id, mentioned_user_id, is_read); |
| packages/database/migrations/0111_comments_mentions.sql:46 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0111_comments_mentions.sql:53 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0112_project_kanban.sql:7 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0112_project_kanban.sql:8 | project_id uuid NOT NULL REFERENCES projects(id) ON DELETE CASCADE, |
| packages/database/migrations/0112_project_kanban.sql:9 | stage_id uuid NOT NULL REFERENCES project_stages(id) ON DELETE RESTRICT, |
| packages/database/migrations/0112_project_kanban.sql:10 | boq_term_id uuid REFERENCES boq_terms(id) ON DELETE SET NULL, |
| packages/database/migrations/0112_project_kanban.sql:13 | assignee_id uuid REFERENCES employees(id) ON DELETE SET NULL, |
| packages/database/migrations/0112_project_kanban.sql:24 | CONSTRAINT project_tasks_title_check CHECK (char_length(title) BETWEEN 1 AND 160), |
| packages/database/migrations/0112_project_kanban.sql:25 | CONSTRAINT project_tasks_status_check CHECK (status IN ('todo', 'in_progress', 'done')), |
| packages/database/migrations/0112_project_kanban.sql:26 | CONSTRAINT project_tasks_priority_check CHECK (priority IN ('low', 'normal', 'high')), |
| packages/database/migrations/0112_project_kanban.sql:27 | CONSTRAINT project_tasks_dates_check CHECK (due_date IS NULL OR start_date IS NULL OR due_date >= start_date), |
| packages/database/migrations/0112_project_kanban.sql:28 | CONSTRAINT project_tasks_hours_check CHECK (estimated_hours >= 0 AND actual_hours >= 0 AND expense_amount >= 0) |
| packages/database/migrations/0112_project_kanban.sql:31 | CREATE INDEX IF NOT EXISTS project_tasks_board_idx |
| packages/database/migrations/0112_project_kanban.sql:33 | CREATE INDEX IF NOT EXISTS project_tasks_term_idx ON project_tasks (tenant_id, boq_term_id); |
| packages/database/migrations/0112_project_kanban.sql:37 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0112_project_kanban.sql:38 | task_id uuid NOT NULL REFERENCES project_tasks(id) ON DELETE CASCADE, |
| packages/database/migrations/0112_project_kanban.sql:39 | user_id uuid NOT NULL REFERENCES users(id) ON DELETE RESTRICT, |
| packages/database/migrations/0112_project_kanban.sql:44 | CONSTRAINT project_time_logs_hours_check CHECK (hours > 0 AND hours <= 24) |
| packages/database/migrations/0112_project_kanban.sql:47 | CREATE INDEX IF NOT EXISTS project_time_logs_task_idx |
| packages/database/migrations/0112_project_kanban.sql:52 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0112_project_kanban.sql:53 | task_id uuid NOT NULL REFERENCES project_tasks(id) ON DELETE CASCADE, |
| packages/database/migrations/0112_project_kanban.sql:54 | depends_on_task_id uuid NOT NULL REFERENCES project_tasks(id) ON DELETE CASCADE, |
| packages/database/migrations/0112_project_kanban.sql:57 | CONSTRAINT project_dependencies_kind_check CHECK (kind = 'finish_to_start'), |
| packages/database/migrations/0112_project_kanban.sql:58 | CONSTRAINT project_dependencies_self_check CHECK (task_id <> depends_on_task_id) |
| packages/database/migrations/0112_project_kanban.sql:61 | CREATE UNIQUE INDEX IF NOT EXISTS project_dependencies_once_key |
| packages/database/migrations/0112_project_kanban.sql:63 | CREATE INDEX IF NOT EXISTS project_dependencies_task_idx |
| packages/database/migrations/0112_project_kanban.sql:71 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0112_project_kanban.sql:78 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0112_project_kanban.sql:85 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0112_project_kanban.sql:116 | ALTER TABLE comments ADD CONSTRAINT comments_entity_type_check CHECK ( |
| packages/database/migrations/0113_billing_provider_events.sql:21 | tenant_id uuid REFERENCES tenants(id) ON DELETE SET NULL, |
| packages/database/migrations/0113_billing_provider_events.sql:22 | subscription_id uuid REFERENCES tenant_subscriptions(id) ON DELETE SET NULL, |
| packages/database/migrations/0113_billing_provider_events.sql:27 | CREATE INDEX IF NOT EXISTS billing_webhook_events_tenant_idx |
| packages/database/migrations/0113_billing_provider_events.sql:36 | WITH CHECK (tenant_id IS NOT DISTINCT FROM nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0113_billing_provider_events.sql:41 | WITH CHECK (COALESCE(current_setting('app.is_platform_admin', true), 'off') = 'on'); |
| packages/database/migrations/0113_billing_provider_events.sql:51 | CREATE UNIQUE INDEX IF NOT EXISTS tenant_subscriptions_checkout_session_key |
| packages/database/migrations/0114_salla_webhook_plane.sql:15 | WITH CHECK (COALESCE(current_setting('app.is_platform_admin', true), 'off') = 'on'); |
| packages/database/migrations/0115_compat_sessions.sql:12 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0115_compat_sessions.sql:13 | device_id uuid NOT NULL REFERENCES compat_devices(id) ON DELETE CASCADE, |
| packages/database/migrations/0115_compat_sessions.sql:20 | CREATE UNIQUE INDEX IF NOT EXISTS compat_sessions_token_key ON compat_sessions(token_hash); |
| packages/database/migrations/0115_compat_sessions.sql:21 | CREATE INDEX IF NOT EXISTS compat_sessions_device_idx ON compat_sessions(tenant_id, device_id); |
| packages/database/migrations/0115_compat_sessions.sql:22 | CREATE INDEX IF NOT EXISTS compat_sessions_expiry_idx ON compat_sessions(expires_at); |
| packages/database/migrations/0115_compat_sessions.sql:29 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0116_session_handoff_codes.sql:17 | user_id uuid NOT NULL REFERENCES users (id) ON DELETE CASCADE, |
| packages/database/migrations/0116_session_handoff_codes.sql:27 | CREATE UNIQUE INDEX IF NOT EXISTS session_handoff_codes_code_key ON session_handoff_codes (code_hash); |
| packages/database/migrations/0116_session_handoff_codes.sql:28 | CREATE INDEX IF NOT EXISTS session_handoff_codes_expiry_idx ON session_handoff_codes (expires_at); |
| packages/database/migrations/0118_email_ai_provider_and_default_parties.sql:12 | user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE, |
| packages/database/migrations/0118_email_ai_provider_and_default_parties.sql:19 | CREATE INDEX IF NOT EXISTS password_reset_tokens_user_idx |
| packages/database/migrations/0118_email_ai_provider_and_default_parties.sql:22 | CREATE INDEX IF NOT EXISTS password_reset_tokens_expiry_idx |
| packages/database/migrations/0118_email_ai_provider_and_default_parties.sql:46 | CHECK (provider IN ('console', 'smtp', 'resend', 'http')); |
| packages/database/migrations/0118_email_ai_provider_and_default_parties.sql:57 | CHECK (provider IS NULL OR provider IN ('openai', 'anthropic', 'gemini', 'custom', 'local')); |
| packages/database/migrations/0118_email_ai_provider_and_default_parties.sql:64 | CHECK (provider IN ('openai', 'anthropic', 'gemini', 'custom', 'local')); |
| packages/database/migrations/0119_cloud_addons_van_sales_and_support.sql:17 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0119_cloud_addons_van_sales_and_support.sql:19 | status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')), |
| packages/database/migrations/0119_cloud_addons_van_sales_and_support.sql:20 | requested_by uuid REFERENCES users(id) ON DELETE SET NULL, |
| packages/database/migrations/0119_cloud_addons_van_sales_and_support.sql:23 | decided_by uuid REFERENCES users(id) ON DELETE SET NULL, |
| packages/database/migrations/0119_cloud_addons_van_sales_and_support.sql:29 | CREATE INDEX IF NOT EXISTS marketplace_addon_requests_tenant_idx |
| packages/database/migrations/0119_cloud_addons_van_sales_and_support.sql:32 | CREATE INDEX IF NOT EXISTS marketplace_addon_requests_status_idx |
| packages/database/migrations/0119_cloud_addons_van_sales_and_support.sql:37 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0119_cloud_addons_van_sales_and_support.sql:38 | party_id uuid NOT NULL REFERENCES parties(id) ON DELETE CASCADE, |
| packages/database/migrations/0119_cloud_addons_van_sales_and_support.sql:39 | item_id uuid NOT NULL REFERENCES items(id) ON DELETE CASCADE, |
| packages/database/migrations/0119_cloud_addons_van_sales_and_support.sql:40 | unit_price numeric(20, 4) NOT NULL CHECK (unit_price >= 0), |
| packages/database/migrations/0119_cloud_addons_van_sales_and_support.sql:41 | max_bonus_pct numeric(10, 4) NOT NULL DEFAULT 0 CHECK (max_bonus_pct >= 0 AND max_bonus_pct <= 100), |
| packages/database/migrations/0119_cloud_addons_van_sales_and_support.sql:42 | max_bonus_qty numeric(20, 4) NOT NULL DEFAULT 0 CHECK (max_bonus_qty >= 0), |
| packages/database/migrations/0119_cloud_addons_van_sales_and_support.sql:43 | expected_daily_qty numeric(20, 4) NOT NULL DEFAULT 0 CHECK (expected_daily_qty >= 0), |
| packages/database/migrations/0119_cloud_addons_van_sales_and_support.sql:51 | CREATE INDEX IF NOT EXISTS van_sales_customer_prices_tenant_idx |
| packages/database/migrations/0119_cloud_addons_van_sales_and_support.sql:56 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0119_cloud_addons_van_sales_and_support.sql:57 | branch_id uuid NOT NULL REFERENCES branches(id), |
| packages/database/migrations/0119_cloud_addons_van_sales_and_support.sql:58 | warehouse_id uuid REFERENCES warehouses(id), |
| packages/database/migrations/0119_cloud_addons_van_sales_and_support.sql:59 | salesman_id uuid NOT NULL REFERENCES salesmen(id), |
| packages/database/migrations/0119_cloud_addons_van_sales_and_support.sql:63 | item_id uuid NOT NULL REFERENCES items(id), |
| packages/database/migrations/0119_cloud_addons_van_sales_and_support.sql:64 | loaded_qty numeric(20, 4) NOT NULL CHECK (loaded_qty > 0), |
| packages/database/migrations/0119_cloud_addons_van_sales_and_support.sql:65 | sold_tax_qty numeric(20, 4) NOT NULL DEFAULT 0 CHECK (sold_tax_qty >= 0), |
| packages/database/migrations/0119_cloud_addons_van_sales_and_support.sql:66 | sold_internal_qty numeric(20, 4) NOT NULL DEFAULT 0 CHECK (sold_internal_qty >= 0), |
| packages/database/migrations/0119_cloud_addons_van_sales_and_support.sql:67 | bonus_qty numeric(20, 4) NOT NULL DEFAULT 0 CHECK (bonus_qty >= 0), |
| packages/database/migrations/0119_cloud_addons_van_sales_and_support.sql:68 | returned_qty numeric(20, 4) NOT NULL DEFAULT 0 CHECK (returned_qty >= 0), |
| packages/database/migrations/0119_cloud_addons_van_sales_and_support.sql:69 | shortage_qty numeric(20, 4) NOT NULL DEFAULT 0 CHECK (shortage_qty >= 0), |
| packages/database/migrations/0119_cloud_addons_van_sales_and_support.sql:70 | max_bonus_qty numeric(20, 4) NOT NULL DEFAULT 0 CHECK (max_bonus_qty >= 0), |
| packages/database/migrations/0119_cloud_addons_van_sales_and_support.sql:71 | unit_cost numeric(20, 4) NOT NULL DEFAULT 0 CHECK (unit_cost >= 0), |
| packages/database/migrations/0119_cloud_addons_van_sales_and_support.sql:72 | status text NOT NULL DEFAULT 'loaded' CHECK (status IN ('loaded', 'reconciled')), |
| packages/database/migrations/0119_cloud_addons_van_sales_and_support.sql:78 | CREATE INDEX IF NOT EXISTS van_load_orders_tenant_idx |
| packages/database/migrations/0119_cloud_addons_van_sales_and_support.sql:83 | tenant_id uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0119_cloud_addons_van_sales_and_support.sql:84 | branch_id uuid NOT NULL REFERENCES branches(id), |
| packages/database/migrations/0119_cloud_addons_van_sales_and_support.sql:85 | load_order_id uuid NOT NULL REFERENCES van_load_orders(id) ON DELETE CASCADE, |
| packages/database/migrations/0119_cloud_addons_van_sales_and_support.sql:86 | salesman_id uuid NOT NULL REFERENCES salesmen(id), |
| packages/database/migrations/0119_cloud_addons_van_sales_and_support.sql:87 | party_id uuid REFERENCES parties(id) ON DELETE SET NULL, |
| packages/database/migrations/0119_cloud_addons_van_sales_and_support.sql:91 | doc_mode text NOT NULL DEFAULT 'zatca_tax' CHECK (doc_mode IN ('zatca_tax', 'internal_delivery')), |
| packages/database/migrations/0119_cloud_addons_van_sales_and_support.sql:92 | payment_method text NOT NULL DEFAULT 'cash' CHECK (payment_method IN ('cash', 'credit', 'bank')), |
| packages/database/migrations/0119_cloud_addons_van_sales_and_support.sql:94 | item_id uuid NOT NULL REFERENCES items(id), |
| packages/database/migrations/0119_cloud_addons_van_sales_and_support.sql:96 | sold_qty numeric(20, 4) NOT NULL CHECK (sold_qty > 0), |
| packages/database/migrations/0119_cloud_addons_van_sales_and_support.sql:97 | bonus_qty numeric(20, 4) NOT NULL DEFAULT 0 CHECK (bonus_qty >= 0), |
| packages/database/migrations/0119_cloud_addons_van_sales_and_support.sql:101 | unit_price numeric(20, 4) NOT NULL CHECK (unit_price >= 0), |
| packages/database/migrations/0119_cloud_addons_van_sales_and_support.sql:107 | sales_invoice_id uuid REFERENCES sales_invoices(id) ON DELETE SET NULL, |
| packages/database/migrations/0119_cloud_addons_van_sales_and_support.sql:112 | CREATE INDEX IF NOT EXISTS van_sales_documents_tenant_idx |
| packages/database/migrations/0119_cloud_addons_van_sales_and_support.sql:120 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0119_cloud_addons_van_sales_and_support.sql:125 | WITH CHECK (COALESCE(current_setting('app.is_platform_admin', true), 'off') = 'on'); |
| packages/database/migrations/0119_cloud_addons_van_sales_and_support.sql:137 | 'WITH CHECK (tenant_id = nullif(current_setting(''app.tenant_id'', true), '''')::uuid)', |
| packages/database/migrations/0120_factory_van_sales_complete.sql:26 | ADD COLUMN IF NOT EXISTS damage_inspected_by uuid REFERENCES users(id) ON DELETE SET NULL, |
| packages/database/migrations/0120_factory_van_sales_complete.sql:30 | ADD COLUMN IF NOT EXISTS closing_submitted_by uuid REFERENCES users(id) ON DELETE SET NULL, |
| packages/database/migrations/0120_factory_van_sales_complete.sql:32 | ADD COLUMN IF NOT EXISTS approved_by uuid REFERENCES users(id) ON DELETE SET NULL; |
| packages/database/migrations/0120_factory_van_sales_complete.sql:36 | CHECK (status IN ('draft', 'loaded', 'in_route', 'pending_closing', 'settled', 'canceled')); |
| packages/database/migrations/0120_factory_van_sales_complete.sql:50 | ADD COLUMN IF NOT EXISTS discount_approved_by uuid REFERENCES users(id) ON DELETE SET NULL, |
| packages/database/migrations/0120_factory_van_sales_complete.sql:58 | tenant_id         uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0120_factory_van_sales_complete.sql:61 | item_id           uuid REFERENCES items(id) ON DELETE SET NULL, |
| packages/database/migrations/0120_factory_van_sales_complete.sql:63 | warehouse_id      uuid REFERENCES warehouses(id) ON DELETE SET NULL, |
| packages/database/migrations/0120_factory_van_sales_complete.sql:70 | status            text NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'exhausted', 'closed')), |
| packages/database/migrations/0120_factory_van_sales_complete.sql:73 | created_by        uuid REFERENCES users(id) ON DELETE SET NULL, |
| packages/database/migrations/0120_factory_van_sales_complete.sql:79 | CREATE INDEX IF NOT EXISTS factory_production_batches_tenant_idx |
| packages/database/migrations/0120_factory_van_sales_complete.sql:85 | tenant_id           uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0120_factory_van_sales_complete.sql:86 | movement_type       text NOT NULL CHECK ( |
| packages/database/migrations/0120_factory_van_sales_complete.sql:100 | load_order_id       uuid REFERENCES van_load_orders(id) ON DELETE SET NULL, |
| packages/database/migrations/0120_factory_van_sales_complete.sql:101 | salesman_id         uuid REFERENCES salesmen(id) ON DELETE SET NULL, |
| packages/database/migrations/0120_factory_van_sales_complete.sql:102 | party_id            uuid REFERENCES parties(id) ON DELETE SET NULL, |
| packages/database/migrations/0120_factory_van_sales_complete.sql:103 | item_id             uuid REFERENCES items(id) ON DELETE SET NULL, |
| packages/database/migrations/0120_factory_van_sales_complete.sql:108 | actor_user_id       uuid REFERENCES users(id) ON DELETE SET NULL, |
| packages/database/migrations/0120_factory_van_sales_complete.sql:109 | approved_by_user_id uuid REFERENCES users(id) ON DELETE SET NULL, |
| packages/database/migrations/0120_factory_van_sales_complete.sql:113 | CREATE INDEX IF NOT EXISTS van_stock_movements_tenant_idx |
| packages/database/migrations/0120_factory_van_sales_complete.sql:130 | 'WITH CHECK (tenant_id = nullif(current_setting(''app.tenant_id'', true), '''')::uuid)', |
| packages/database/migrations/0121_van_sales_schema_reconcile.sql:52 | ADD COLUMN IF NOT EXISTS salesman_id uuid REFERENCES salesmen(id) ON DELETE RESTRICT, |
| packages/database/migrations/0121_van_sales_schema_reconcile.sql:53 | ADD COLUMN IF NOT EXISTS branch_id uuid REFERENCES branches(id) ON DELETE SET NULL, |
| packages/database/migrations/0121_van_sales_schema_reconcile.sql:54 | ADD COLUMN IF NOT EXISTS warehouse_id uuid REFERENCES warehouses(id) ON DELETE SET NULL, |
| packages/database/migrations/0121_van_sales_schema_reconcile.sql:55 | ADD COLUMN IF NOT EXISTS item_id uuid REFERENCES items(id) ON DELETE SET NULL, |
| packages/database/migrations/0121_van_sales_schema_reconcile.sql:73 | ADD COLUMN IF NOT EXISTS damage_inspected_by uuid REFERENCES users(id) ON DELETE SET NULL, |
| packages/database/migrations/0121_van_sales_schema_reconcile.sql:77 | ADD COLUMN IF NOT EXISTS closing_submitted_by uuid REFERENCES users(id) ON DELETE SET NULL, |
| packages/database/migrations/0121_van_sales_schema_reconcile.sql:79 | ADD COLUMN IF NOT EXISTS approved_by uuid REFERENCES users(id) ON DELETE SET NULL, |
| packages/database/migrations/0121_van_sales_schema_reconcile.sql:81 | ADD COLUMN IF NOT EXISTS created_by uuid REFERENCES users(id) ON DELETE SET NULL, |
| packages/database/migrations/0121_van_sales_schema_reconcile.sql:88 | CHECK (status IN ('draft', 'loaded', 'in_route', 'pending_closing', 'settled', 'reconciled', 'canceled')); |
| packages/database/migrations/0121_van_sales_schema_reconcile.sql:145 | ADD COLUMN IF NOT EXISTS discount_approved_by uuid REFERENCES users(id) ON DELETE SET NULL, |
| packages/database/migrations/0121_van_sales_schema_reconcile.sql:158 | ADD COLUMN IF NOT EXISTS sales_invoice_id uuid REFERENCES sales_invoices(id) ON DELETE SET NULL, |
| packages/database/migrations/0121_van_sales_schema_reconcile.sql:160 | ADD COLUMN IF NOT EXISTS created_by uuid REFERENCES users(id) ON DELETE SET NULL, |
| packages/database/migrations/0122_van_sales_core_integration_and_idempotency.sql:13 | ADD COLUMN IF NOT EXISTS production_order_id uuid REFERENCES production_orders(id) ON DELETE SET NULL, |
| packages/database/migrations/0122_van_sales_core_integration_and_idempotency.sql:14 | ADD COLUMN IF NOT EXISTS manufacturing_order_id uuid REFERENCES manufacturing_orders(id) ON DELETE SET NULL, |
| packages/database/migrations/0122_van_sales_core_integration_and_idempotency.sql:15 | ADD COLUMN IF NOT EXISTS lot_id uuid REFERENCES item_lots(id) ON DELETE SET NULL, |
| packages/database/migrations/0122_van_sales_core_integration_and_idempotency.sql:16 | ADD COLUMN IF NOT EXISTS inventory_transaction_id uuid REFERENCES inventory_transactions(id) ON DELETE SET NULL, |
| packages/database/migrations/0122_van_sales_core_integration_and_idempotency.sql:20 | CREATE UNIQUE INDEX IF NOT EXISTS factory_production_batches_tenant_idempotency_idx |
| packages/database/migrations/0122_van_sales_core_integration_and_idempotency.sql:26 | ADD COLUMN IF NOT EXISTS van_warehouse_id uuid REFERENCES warehouses(id) ON DELETE SET NULL, |
| packages/database/migrations/0122_van_sales_core_integration_and_idempotency.sql:27 | ADD COLUMN IF NOT EXISTS stock_transfer_id uuid REFERENCES stock_transfers(id) ON DELETE SET NULL, |
| packages/database/migrations/0122_van_sales_core_integration_and_idempotency.sql:28 | ADD COLUMN IF NOT EXISTS return_transfer_id uuid REFERENCES stock_transfers(id) ON DELETE SET NULL, |
| packages/database/migrations/0122_van_sales_core_integration_and_idempotency.sql:29 | ADD COLUMN IF NOT EXISTS damage_voucher_id uuid REFERENCES stock_vouchers(id) ON DELETE SET NULL, |
| packages/database/migrations/0122_van_sales_core_integration_and_idempotency.sql:30 | ADD COLUMN IF NOT EXISTS approval_request_id uuid REFERENCES approval_requests(id) ON DELETE SET NULL, |
| packages/database/migrations/0122_van_sales_core_integration_and_idempotency.sql:34 | CREATE UNIQUE INDEX IF NOT EXISTS van_load_orders_tenant_idempotency_idx |
| packages/database/migrations/0122_van_sales_core_integration_and_idempotency.sql:40 | ADD COLUMN IF NOT EXISTS receipt_voucher_id uuid REFERENCES vouchers(id) ON DELETE SET NULL, |
| packages/database/migrations/0122_van_sales_core_integration_and_idempotency.sql:41 | ADD COLUMN IF NOT EXISTS stock_delivery_id uuid REFERENCES stock_deliveries(id) ON DELETE SET NULL, |
| packages/database/migrations/0122_van_sales_core_integration_and_idempotency.sql:45 | CREATE UNIQUE INDEX IF NOT EXISTS van_sales_documents_tenant_idempotency_idx |
| packages/database/migrations/0122_van_sales_core_integration_and_idempotency.sql:51 | ADD COLUMN IF NOT EXISTS inventory_transaction_id uuid REFERENCES inventory_transactions(id) ON DELETE SET NULL, |
| packages/database/migrations/0122_van_sales_core_integration_and_idempotency.sql:52 | ADD COLUMN IF NOT EXISTS voucher_id uuid REFERENCES vouchers(id) ON DELETE SET NULL, |
| packages/database/migrations/0122_van_sales_core_integration_and_idempotency.sql:55 | CREATE UNIQUE INDEX IF NOT EXISTS van_stock_movements_tenant_idempotency_idx |
| packages/database/migrations/0122_van_sales_core_integration_and_idempotency.sql:70 | CREATE UNIQUE INDEX IF NOT EXISTS van_stock_movements_closing_unique_idx |
| packages/database/migrations/0122_van_sales_core_integration_and_idempotency.sql:82 | CREATE UNIQUE INDEX IF NOT EXISTS van_load_orders_tenant_number_key |
| packages/database/migrations/0122_van_sales_core_integration_and_idempotency.sql:94 | CREATE UNIQUE INDEX IF NOT EXISTS van_sales_documents_tenant_number_key |
| packages/database/migrations/0122_van_sales_core_integration_and_idempotency.sql:106 | CREATE UNIQUE INDEX IF NOT EXISTS factory_production_batches_tenant_batch_key |
| packages/database/migrations/0122_van_sales_core_integration_and_idempotency.sql:116 | ADD COLUMN IF NOT EXISTS updated_by uuid REFERENCES users(id) ON DELETE SET NULL, |
| packages/database/migrations/0122_van_sales_core_integration_and_idempotency.sql:121 | tenant_id                uuid NOT NULL REFERENCES tenants(id) ON DELETE CASCADE, |
| packages/database/migrations/0122_van_sales_core_integration_and_idempotency.sql:122 | customer_price_id        uuid NOT NULL REFERENCES van_sales_customer_prices(id) ON DELETE CASCADE, |
| packages/database/migrations/0122_van_sales_core_integration_and_idempotency.sql:123 | party_id                 uuid NOT NULL REFERENCES parties(id) ON DELETE CASCADE, |
| packages/database/migrations/0122_van_sales_core_integration_and_idempotency.sql:124 | item_id                  uuid REFERENCES items(id) ON DELETE SET NULL, |
| packages/database/migrations/0122_van_sales_core_integration_and_idempotency.sql:134 | changed_by               uuid REFERENCES users(id) ON DELETE SET NULL, |
| packages/database/migrations/0122_van_sales_core_integration_and_idempotency.sql:138 | CREATE INDEX IF NOT EXISTS van_sales_customer_price_history_tenant_idx |
| packages/database/migrations/0122_van_sales_core_integration_and_idempotency.sql:147 | WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true), '')::uuid); |
| packages/database/migrations/0122_van_sales_core_integration_and_idempotency.sql:152 | WITH CHECK (COALESCE(current_setting('app.is_platform_admin', true), 'off') = 'on'); |
| packages/database/migrations/0123_van_sales_rep_workspace_and_receipt_workflow.sql:34 | ADD COLUMN IF NOT EXISTS warehouse_id uuid REFERENCES warehouses(id) ON DELETE SET NULL, |
| packages/database/migrations/0123_van_sales_rep_workspace_and_receipt_workflow.sql:37 | CREATE INDEX IF NOT EXISTS salesmen_warehouse_idx ON salesmen (tenant_id, warehouse_id); |
| packages/database/migrations/0123_van_sales_rep_workspace_and_receipt_workflow.sql:41 | ADD COLUMN IF NOT EXISTS branch_id uuid REFERENCES branches(id) ON DELETE SET NULL; |
| packages/database/migrations/0123_van_sales_rep_workspace_and_receipt_workflow.sql:43 | CREATE INDEX IF NOT EXISTS factory_production_batches_branch_idx |
| packages/database/migrations/0123_van_sales_rep_workspace_and_receipt_workflow.sql:48 | ADD COLUMN IF NOT EXISTS inventory_tx_id uuid REFERENCES inventory_transactions(id) ON DELETE SET NULL, |
| packages/database/migrations/0123_van_sales_rep_workspace_and_receipt_workflow.sql:49 | ADD COLUMN IF NOT EXISTS return_inventory_tx_id uuid REFERENCES inventory_transactions(id) ON DELETE SET NULL, |
| packages/database/migrations/0123_van_sales_rep_workspace_and_receipt_workflow.sql:54 | ADD COLUMN IF NOT EXISTS received_by uuid REFERENCES users(id) ON DELETE SET NULL, |
| packages/database/migrations/0123_van_sales_rep_workspace_and_receipt_workflow.sql:60 | ADD CONSTRAINT van_load_orders_received_qty_check CHECK (received_qty >= 0 AND discrepancy_qty >= 0); |
| packages/database/migrations/0123_van_sales_rep_workspace_and_receipt_workflow.sql:67 | CHECK (status IN ( |
| packages/database/migrations/0123_van_sales_rep_workspace_and_receipt_workflow.sql:79 | CREATE INDEX IF NOT EXISTS van_load_orders_receipt_idx |
| packages/database/migrations/0123_van_sales_rep_workspace_and_receipt_workflow.sql:83 | CREATE INDEX IF NOT EXISTS van_load_orders_salesman_open_idx |
| packages/database/migrations/0123_van_sales_rep_workspace_and_receipt_workflow.sql:91 | ADD COLUMN IF NOT EXISTS inventory_tx_id uuid REFERENCES inventory_transactions(id) ON DELETE SET NULL; |
| packages/database/migrations/0123_van_sales_rep_workspace_and_receipt_workflow.sql:95 | ADD CONSTRAINT van_sales_documents_document_kind_check CHECK (document_kind IN ('sale', 'return')); |
| packages/database/migrations/0123_van_sales_rep_workspace_and_receipt_workflow.sql:105 | FOREIGN KEY (reference_document_id) REFERENCES van_sales_documents(id) ON DELETE SET NULL; |
| packages/database/migrations/0123_van_sales_rep_workspace_and_receipt_workflow.sql:109 | CREATE INDEX IF NOT EXISTS van_sales_documents_reference_idx |
| packages/database/migrations/0123_van_sales_rep_workspace_and_receipt_workflow.sql:112 | CREATE INDEX IF NOT EXISTS van_sales_documents_kind_idx |
| packages/database/migrations/0123_van_sales_rep_workspace_and_receipt_workflow.sql:121 | CHECK (movement_type IN ( |
| packages/database/migrations/0124_van_sales_stock_and_custody_settlement.sql:24 | ADD COLUMN IF NOT EXISTS stock_adjustment_id uuid REFERENCES stock_adjustments(id) ON DELETE SET NULL, |
| packages/database/migrations/0124_van_sales_stock_and_custody_settlement.sql:29 | ADD COLUMN IF NOT EXISTS remaining_inventory_tx_id uuid REFERENCES inventory_transactions(id) ON DELETE SET NULL, |
| packages/database/migrations/0124_van_sales_stock_and_custody_settlement.sql:37 | ADD COLUMN IF NOT EXISTS damage_journal_entry_id uuid REFERENCES journal_entries(id) ON DELETE SET NULL; |
| packages/database/migrations/0124_van_sales_stock_and_custody_settlement.sql:42 | CHECK (remaining_action IS NULL OR remaining_action IN ('return_to_main', 'carry_over')); |
| packages/database/migrations/0124_van_sales_stock_and_custody_settlement.sql:47 | CHECK (stock_settlement_status IN ( |
| packages/database/migrations/0124_van_sales_stock_and_custody_settlement.sql:60 | CHECK (status IN ( |
| packages/database/migrations/0124_van_sales_stock_and_custody_settlement.sql:73 | CREATE INDEX IF NOT EXISTS van_load_orders_settlement_idx |
| packages/database/migrations/0124_van_sales_stock_and_custody_settlement.sql:81 | CHECK (movement_type IN ( |
| packages/database/migrations/0127_production_batch_cost_basis.sql:29 | CHECK (cost_basis IS NULL OR cost_basis IN ('manufacturing_order', 'manual_input', 'item_cost')); |
| packages/database/migrations/0128_van_sales_shortage_charge.sql:33 | ADD COLUMN IF NOT EXISTS shortage_journal_entry_id uuid REFERENCES journal_entries(id) ON DELETE SET NULL, |
| packages/database/migrations/0128_van_sales_shortage_charge.sql:44 | CREATE INDEX IF NOT EXISTS van_load_orders_shortage_entry_idx |
| packages/database/migrations/0130_sector_licence_usage_index.sql:26 | CREATE INDEX IF NOT EXISTS audit_log_sector_licence_use_idx |
| packages/database/migrations/0134_email_provider_check.sql:12 | CHECK (provider IN ('console', 'smtp', 'resend', 'http')); |
| packages/database/migrations/0134_email_provider_check.sql:17 | CHECK (provider IN ('console', 'smtp', 'resend', 'http')); |
| packages/database/migrations/0135_platform_backup_restores.sql:14 | job_id         uuid        NOT NULL REFERENCES backup_jobs (id) ON DELETE CASCADE, |
| packages/database/migrations/0135_platform_backup_restores.sql:15 | artifact_id    uuid        REFERENCES backup_artifacts (id) ON DELETE SET NULL, |
| packages/database/migrations/0135_platform_backup_restores.sql:17 | CHECK (mode IN ('dry_run', 'apply')), |
| packages/database/migrations/0135_platform_backup_restores.sql:19 | CHECK (status IN ('dry_run', 'succeeded', 'partial', 'failed')), |
| packages/database/migrations/0135_platform_backup_restores.sql:21 | CHECK (scope IN ('platform', 'tenant')), |
| packages/database/migrations/0135_platform_backup_restores.sql:22 | tenant_id      uuid        REFERENCES tenants (id) ON DELETE SET NULL, |
| packages/database/migrations/0135_platform_backup_restores.sql:26 | tables         integer     NOT NULL DEFAULT 0 CHECK (tables >= 0), |
| packages/database/migrations/0135_platform_backup_restores.sql:27 | inserted       integer     NOT NULL DEFAULT 0 CHECK (inserted >= 0), |
| packages/database/migrations/0135_platform_backup_restores.sql:28 | skipped        integer     NOT NULL DEFAULT 0 CHECK (skipped >= 0), |
| packages/database/migrations/0135_platform_backup_restores.sql:29 | failed         integer     NOT NULL DEFAULT 0 CHECK (failed >= 0), |
| packages/database/migrations/0135_platform_backup_restores.sql:34 | reason         text        CHECK (reason IS NULL OR length(reason) BETWEEN 5 AND 500), |
| packages/database/migrations/0135_platform_backup_restores.sql:37 | duration_ms    integer     CHECK (duration_ms IS NULL OR duration_ms >= 0), |
| packages/database/migrations/0135_platform_backup_restores.sql:38 | requested_by   uuid        REFERENCES users (id) ON DELETE SET NULL, |
| packages/database/migrations/0135_platform_backup_restores.sql:39 | CONSTRAINT backup_restores_finish_check CHECK ( |
| packages/database/migrations/0135_platform_backup_restores.sql:44 | CREATE INDEX IF NOT EXISTS backup_restores_job_idx ON backup_restores (job_id, started_at DESC); |
| packages/database/migrations/0135_platform_backup_restores.sql:45 | CREATE INDEX IF NOT EXISTS backup_restores_started_idx ON backup_restores (started_at DESC); |
| packages/database/migrations/0135_platform_backup_restores.sql:53 | WITH CHECK (COALESCE(current_setting('app.is_platform_admin', true), 'off') = 'on'); |
| packages/database/migrations/0136_platform_problem_events.sql:15 | CHECK (source IN ('api', 'staff', 'platform-admin', 'marketing', 'customer-portal', 'bakery', 'worker')), |
| packages/database/migrations/0136_platform_problem_events.sql:16 | severity      text        NOT NULL DEFAULT 'error' CHECK (severity IN ('error', 'warning')), |
| packages/database/migrations/0136_platform_problem_events.sql:21 | status        integer     CHECK (status IS NULL OR status BETWEEN 100 AND 599), |
| packages/database/migrations/0136_platform_problem_events.sql:29 | CREATE INDEX IF NOT EXISTS platform_problem_events_recent_idx |
| packages/database/migrations/0136_platform_problem_events.sql:31 | CREATE INDEX IF NOT EXISTS platform_problem_events_source_idx |
| packages/database/migrations/0136_platform_problem_events.sql:34 | CREATE INDEX IF NOT EXISTS platform_problem_events_trace_idx |
| packages/database/migrations/0136_platform_problem_events.sql:43 | WITH CHECK (COALESCE(current_setting('app.is_platform_admin', true), 'off') = 'on'); |
| packages/database/migrations/0137_print_template_design.sql:30 | ADD CONSTRAINT print_settings_template_check CHECK (template IN ('classic', 'modern', 'minimal')); |
| packages/database/migrations/0137_print_template_design.sql:34 | ADD CONSTRAINT print_settings_font_family_check CHECK (font_family IN ('segoe', 'naskh', 'sans')); |
| packages/database/migrations/0137_print_template_design.sql:38 | ADD CONSTRAINT print_settings_font_scale_check CHECK (font_scale BETWEEN 85 AND 130); |
| packages/database/migrations/0137_print_template_design.sql:43 | CHECK (accent_color IS NULL OR accent_color ~ '^#[0-9a-fA-F]{6}$'); |
| packages/database/migrations/0138_platform_releases.sql:20 | version           text        CHECK (version IS NULL OR version ~ '^[0-9]+(\.[0-9]+){1,3}(-[0-9A-Za-z.]+)?$'), |
| packages/database/migrations/0138_platform_releases.sql:21 | channel           text        NOT NULL DEFAULT 'stable' CHECK (channel IN ('stable', 'beta')), |
| packages/database/migrations/0138_platform_releases.sql:24 | CHECK (status IN ('accepted', 'rejected', 'revoked')), |
| packages/database/migrations/0138_platform_releases.sql:25 | notes             text        NOT NULL DEFAULT '' CHECK (length(notes) <= 2000), |
| packages/database/migrations/0138_platform_releases.sql:27 | min_from_version  text        CHECK (min_from_version IS NULL OR min_from_version ~ '^[0-9]+(\.[0-9]+){1,3}(-[0-9A-Za-z.]+)?$'), |
| packages/database/migrations/0138_platform_releases.sql:28 | filename          text        NOT NULL CHECK (length(filename) BETWEEN 1 AND 200), |
| packages/database/migrations/0138_platform_releases.sql:29 | bytes             integer     NOT NULL DEFAULT 0 CHECK (bytes >= 0), |
| packages/database/migrations/0138_platform_releases.sql:30 | entries           integer     NOT NULL DEFAULT 0 CHECK (entries >= 0), |
| packages/database/migrations/0138_platform_releases.sql:32 | checksum          text        NOT NULL CHECK (checksum ~ '^[0-9a-f]{64}$'), |
| packages/database/migrations/0138_platform_releases.sql:35 | reason            text        NOT NULL DEFAULT '' CHECK (length(reason) <= 500), |
| packages/database/migrations/0138_platform_releases.sql:40 | uploaded_by       uuid        REFERENCES users (id) ON DELETE SET NULL, |
| packages/database/migrations/0138_platform_releases.sql:45 | CHECK (NOT is_current OR status = 'accepted'), |
| packages/database/migrations/0138_platform_releases.sql:47 | CHECK ((status = 'revoked') = (revoked_at IS NOT NULL)), |
| packages/database/migrations/0138_platform_releases.sql:49 | CHECK ((status = 'rejected') = (rejection_code IS NOT NULL)) |
| packages/database/migrations/0138_platform_releases.sql:53 | CREATE UNIQUE INDEX IF NOT EXISTS platform_releases_one_current_idx |
| packages/database/migrations/0138_platform_releases.sql:58 | CREATE UNIQUE INDEX IF NOT EXISTS platform_releases_version_channel_key |
| packages/database/migrations/0138_platform_releases.sql:61 | CREATE INDEX IF NOT EXISTS platform_releases_uploaded_idx |
| packages/database/migrations/0139_esign_otp_attempts.sql:16 | CHECK (status IN ('sent', 'viewed', 'signed', 'declined', 'locked')); |
| packages/database/migrations/0139_esign_otp_attempts.sql:21 | CHECK (event IN ('sent', 'viewed', 'signed', 'declined', 'otp_failed', 'locked')); |
