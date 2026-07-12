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

-- ==========================================================
-- TRIGGERS
-- ==========================================================

CREATE TRIGGER trg_vehicles_updated_at
BEFORE UPDATE ON vehicles
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();

CREATE TRIGGER trg_drivers_updated_at
BEFORE UPDATE ON drivers
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();

-- ==========================================================
-- PHASE 6 - MAINTENANCE MODULE
-- ==========================================================

CREATE TABLE maintenance_records (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    organization_id UUID NOT NULL REFERENCES organizations(id),

    vehicle_id UUID NOT NULL REFERENCES vehicles(id),

    maintenance_type VARCHAR(50)
    CHECK (
        maintenance_type IN (
            'Preventive',
            'Corrective',
            'Emergency',
            'Inspection'
        )
    ),

    issue_description TEXT,

    service_provider VARCHAR(150),

    estimated_cost NUMERIC(12,2),

    actual_cost NUMERIC(12,2),

    scheduled_date DATE,

    completed_date DATE,

    next_service_due DATE,

    odometer_reading NUMERIC(12,2),

    maintenance_status VARCHAR(30)
    CHECK (
        maintenance_status IN (
            'Scheduled',
            'In Progress',
            'Completed',
            'Cancelled'
        )
    ) DEFAULT 'Scheduled',

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    is_active BOOLEAN DEFAULT TRUE
);

---------------------------------------------------------

CREATE TABLE maintenance_parts (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    maintenance_id UUID NOT NULL
    REFERENCES maintenance_records(id)
    ON DELETE CASCADE,

    part_name VARCHAR(150) NOT NULL,

    quantity INTEGER DEFAULT 1,

    unit_cost NUMERIC(10,2),

    total_cost NUMERIC(10,2)
);

---------------------------------------------------------

CREATE INDEX idx_maintenance_vehicle
ON maintenance_records(vehicle_id);

CREATE INDEX idx_maintenance_status
ON maintenance_records(maintenance_status);

CREATE INDEX idx_next_service
ON maintenance_records(next_service_due);


-- ==========================================================
-- TRIGGERS
-- ==========================================================

CREATE TRIGGER trg_maintenance_updated_at
BEFORE UPDATE ON maintenance_records
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();

-- ==========================================================
-- PHASE 7 - FUEL & EXPENSE MANAGEMENT
-- ==========================================================

CREATE TABLE fuel_logs (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    organization_id UUID NOT NULL REFERENCES organizations(id),

    vehicle_id UUID NOT NULL REFERENCES vehicles(id),

    driver_id UUID REFERENCES drivers(id),

    trip_id UUID REFERENCES trips(id),

    fuel_type_id UUID REFERENCES fuel_types(id),

    fuel_date DATE NOT NULL,

    odometer_reading NUMERIC(12,2) NOT NULL,

    quantity_liters NUMERIC(10,2) NOT NULL,

    price_per_liter NUMERIC(10,2) NOT NULL,

    total_amount NUMERIC(12,2) GENERATED ALWAYS AS
    (quantity_liters * price_per_liter) STORED,

    fuel_station VARCHAR(150),

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    is_active BOOLEAN DEFAULT TRUE
);

------------------------------------------------------------

CREATE TABLE expenses (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    organization_id UUID NOT NULL REFERENCES organizations(id),

    trip_id UUID REFERENCES trips(id),

    vehicle_id UUID REFERENCES vehicles(id),

    expense_category VARCHAR(50)
    CHECK (
        expense_category IN (
            'Fuel',
            'Toll',
            'Repair',
            'Insurance',
            'Salary',
            'Other'
        )
    ),

    amount NUMERIC(12,2) NOT NULL,

    expense_date DATE NOT NULL,

    description TEXT,

    created_by UUID REFERENCES users(id),

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

------------------------------------------------------------

CREATE INDEX idx_fuel_vehicle
ON fuel_logs(vehicle_id);

CREATE INDEX idx_fuel_trip
ON fuel_logs(trip_id);

CREATE INDEX idx_expense_trip
ON expenses(trip_id);

CREATE INDEX idx_expense_vehicle
ON expenses(vehicle_id);

-- ==========================================================
-- TRIGGERS
-- ==========================================================

CREATE TRIGGER trg_fuel_logs_updated_at
BEFORE UPDATE ON fuel_logs
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();

CREATE TRIGGER trg_expenses_updated_at
BEFORE UPDATE ON expenses
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();