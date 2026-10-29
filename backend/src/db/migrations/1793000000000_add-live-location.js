export const up = (pgm) => {
  pgm.sql(`
    CREATE EXTENSION IF NOT EXISTS pgcrypto;
    ALTER TABLE incidents
      ADD COLUMN IF NOT EXISTS update_token UUID NOT NULL DEFAULT gen_random_uuid(),
      ADD COLUMN IF NOT EXISTS location_updated_at TIMESTAMPTZ;
  `);
};

export const down = (pgm) => {
  pgm.sql(`
    ALTER TABLE incidents
      DROP COLUMN IF EXISTS update_token,
      DROP COLUMN IF EXISTS location_updated_at;
  `);
};
