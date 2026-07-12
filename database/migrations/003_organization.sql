BEGIN;

------------------------------------------------------------
-- ORGANIZATIONS
------------------------------------------------------------

CREATE TABLE organizations (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    organization_name VARCHAR(150) NOT NULL UNIQUE,

    organization_code VARCHAR(30) UNIQUE,

    email VARCHAR(150),

    phone VARCHAR(30),

    address TEXT,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    is_active BOOLEAN DEFAULT TRUE

);

------------------------------------------------------------
-- ADD ORGANIZATION TO DEPARTMENTS
------------------------------------------------------------

ALTER TABLE departments

ADD COLUMN organization_id UUID;

ALTER TABLE departments

ADD CONSTRAINT fk_department_organization

FOREIGN KEY (organization_id)

REFERENCES organizations(id);

COMMIT;