BEGIN;

CREATE EXTENSION IF NOT EXISTS "pgcrypto";

--------------------------------------------------
-- COMMON FUNCTION
-- Automatically updates updated_at timestamp
--------------------------------------------------

CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER AS
$$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

--------------------------------------------------
-- AUDIT SCHEMA
--------------------------------------------------

CREATE SCHEMA IF NOT EXISTS audit;

--------------------------------------------------
-- AUDIT TABLE
--------------------------------------------------

CREATE TABLE IF NOT EXISTS audit.activity_logs (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    table_name TEXT NOT NULL,

    record_id UUID,

    action TEXT NOT NULL,

    old_data JSONB,

    new_data JSONB,

    changed_by TEXT,

    changed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);

COMMIT;