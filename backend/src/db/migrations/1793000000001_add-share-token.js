export const up = (pgm) => {
  pgm.sql(`
    CREATE EXTENSION IF NOT EXISTS pgcrypto;
    ALTER TABLE incidents
      ADD COLUMN IF NOT EXISTS share_token UUID NOT NULL DEFAULT gen_random_uuid();
  `);
};

export const down = (pgm) => {
  pgm.sql(`ALTER TABLE incidents DROP COLUMN IF EXISTS share_token;`);
};
