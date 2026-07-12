BEGIN;

------------------------------------------------------------
-- ROLES
------------------------------------------------------------

CREATE TABLE roles (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    role_name VARCHAR(100) NOT NULL UNIQUE,

    role_description TEXT,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    is_active BOOLEAN DEFAULT TRUE

);

------------------------------------------------------------
-- DEPARTMENTS
------------------------------------------------------------

CREATE TABLE departments (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    department_name VARCHAR(100) NOT NULL UNIQUE,

    department_description TEXT,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    is_active BOOLEAN DEFAULT TRUE

);

------------------------------------------------------------
-- VEHICLE TYPES
------------------------------------------------------------

CREATE TABLE vehicle_types (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    type_name VARCHAR(100) UNIQUE NOT NULL,

    description TEXT,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    is_active BOOLEAN DEFAULT TRUE

);

------------------------------------------------------------
-- FUEL TYPES
------------------------------------------------------------

CREATE TABLE fuel_types (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    fuel_name VARCHAR(50) UNIQUE NOT NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    is_active BOOLEAN DEFAULT TRUE

);

------------------------------------------------------------
-- MAINTENANCE TYPES
------------------------------------------------------------

CREATE TABLE maintenance_types (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    maintenance_name VARCHAR(100) UNIQUE NOT NULL,

    description TEXT,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    is_active BOOLEAN DEFAULT TRUE

);

------------------------------------------------------------
-- EXPENSE TYPES
------------------------------------------------------------

CREATE TABLE expense_types (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    expense_name VARCHAR(100) UNIQUE NOT NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    is_active BOOLEAN DEFAULT TRUE

);

------------------------------------------------------------
-- NOTIFICATION TYPES
------------------------------------------------------------

CREATE TABLE notification_types (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    notification_name VARCHAR(100) UNIQUE NOT NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    is_active BOOLEAN DEFAULT TRUE

);

COMMIT;