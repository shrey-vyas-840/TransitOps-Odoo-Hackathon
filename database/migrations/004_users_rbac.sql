BEGIN;

------------------------------------------------------------
-- PERMISSIONS
------------------------------------------------------------

CREATE TABLE permissions (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    permission_name VARCHAR(100) UNIQUE NOT NULL,

    permission_description TEXT,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    is_active BOOLEAN DEFAULT TRUE

);

------------------------------------------------------------
-- ROLE PERMISSIONS
------------------------------------------------------------

CREATE TABLE role_permissions (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    role_id UUID NOT NULL,

    permission_id UUID NOT NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    UNIQUE(role_id, permission_id),

    FOREIGN KEY(role_id)
        REFERENCES roles(id)
        ON DELETE CASCADE,

    FOREIGN KEY(permission_id)
        REFERENCES permissions(id)
        ON DELETE CASCADE

);

------------------------------------------------------------
-- USERS
------------------------------------------------------------

CREATE TABLE users (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    organization_id UUID NOT NULL,

    department_id UUID NOT NULL,

    role_id UUID NOT NULL,

    full_name VARCHAR(150) NOT NULL,

    email VARCHAR(150) UNIQUE NOT NULL,

    phone VARCHAR(20),

    password_hash TEXT NOT NULL,

    is_email_verified BOOLEAN DEFAULT FALSE,

    last_login TIMESTAMP,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    is_active BOOLEAN DEFAULT TRUE,

    FOREIGN KEY (organization_id)
        REFERENCES organizations(id),

    FOREIGN KEY (department_id)
        REFERENCES departments(id),

    FOREIGN KEY (role_id)
        REFERENCES roles(id)

);

COMMIT;