-- ==========================================================
-- TRANSITOPS ERP
-- PHASE 4 - FLEET MODULE
-- ==========================================================

CREATE TABLE vehicles (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    organization_id UUID NOT NULL REFERENCES organizations(id),

    vehicle_type_id UUID NOT NULL REFERENCES vehicle_types(id),

    registration_number VARCHAR(30) NOT NULL UNIQUE,

    make VARCHAR(100) NOT NULL,

    model VARCHAR(100) NOT NULL,

    manufacture_year INTEGER CHECK (
        manufacture_year >= 1990
        AND manufacture_year <= EXTRACT(YEAR FROM CURRENT_DATE)+1
    ),

    fuel_type_id UUID REFERENCES fuel_types(id),

    capacity_kg NUMERIC(10,2),

    mileage_kmpl NUMERIC(6,2),

    current_odometer NUMERIC(12,2) DEFAULT 0,

    chassis_number VARCHAR(100),

    engine_number VARCHAR(100),

    insurance_number VARCHAR(100),

    insurance_expiry DATE,

    registration_expiry DATE,

    fitness_expiry DATE,

    current_status VARCHAR(30)
    CHECK (
        current_status IN
        ('Available','On Trip','Maintenance','Inactive')
    )
    DEFAULT 'Available',

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    is_active BOOLEAN DEFAULT TRUE
);

------------------------------------------------------------

CREATE TABLE drivers (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    organization_id UUID NOT NULL REFERENCES organizations(id),

    user_id UUID UNIQUE REFERENCES users(id),

    license_number VARCHAR(50) UNIQUE NOT NULL,

    license_expiry DATE NOT NULL,

    joining_date DATE,

    phone VARCHAR(20),

    emergency_contact VARCHAR(20),

    experience_years INTEGER DEFAULT 0,

    current_status VARCHAR(30)
    CHECK (
        current_status IN
        ('Available','On Trip','Leave','Inactive')
    )
    DEFAULT 'Available',

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    is_active BOOLEAN DEFAULT TRUE
);

------------------------------------------------------------

CREATE TABLE vehicle_assignments (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    vehicle_id UUID NOT NULL REFERENCES vehicles(id),

    driver_id UUID NOT NULL REFERENCES drivers(id),

    assigned_from TIMESTAMP NOT NULL,

    assigned_to TIMESTAMP,

    remarks TEXT,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

------------------------------------------------------------

CREATE INDEX idx_vehicle_org
ON vehicles(organization_id);

CREATE INDEX idx_vehicle_status
ON vehicles(current_status);

CREATE INDEX idx_driver_status
ON drivers(current_status);

CREATE INDEX idx_assignment_vehicle
ON vehicle_assignments(vehicle_id);

CREATE INDEX idx_assignment_driver
ON vehicle_assignments(driver_id);