-- ==========================================================
-- PHASE 5 - TRIP MANAGEMENT
-- ==========================================================

CREATE TABLE trips (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    organization_id UUID NOT NULL REFERENCES organizations(id),

    trip_number VARCHAR(30) UNIQUE NOT NULL,

    vehicle_id UUID NOT NULL REFERENCES vehicles(id),

    driver_id UUID NOT NULL REFERENCES drivers(id),

    origin VARCHAR(150) NOT NULL,

    destination VARCHAR(150) NOT NULL,

    scheduled_departure TIMESTAMP NOT NULL,

    scheduled_arrival TIMESTAMP,

    actual_departure TIMESTAMP,

    actual_arrival TIMESTAMP,

    cargo_description TEXT,

    cargo_weight_kg NUMERIC(10,2),

    trip_status VARCHAR(30)
    CHECK (
        trip_status IN (
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

CREATE TABLE trip_checkpoints (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    trip_id UUID NOT NULL REFERENCES trips(id) ON DELETE CASCADE,

    checkpoint_name VARCHAR(150) NOT NULL,

    arrival_time TIMESTAMP,

    departure_time TIMESTAMP,

    remarks TEXT
);

---------------------------------------------------------

CREATE INDEX idx_trip_status
ON trips(trip_status);

CREATE INDEX idx_trip_vehicle
ON trips(vehicle_id);

CREATE INDEX idx_trip_driver
ON trips(driver_id);


-- ==========================================================
-- TRIGGERS
-- ==========================================================

CREATE TRIGGER trg_trips_updated_at
BEFORE UPDATE ON trips
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();