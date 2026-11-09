exports.up = async (knex) => {
  await knex.schema.alterTable(
    "member_profiles",
    (table) => {
      table.dropIndex(
        "relationship_status"
      );
    }
  );

  await knex.raw(`
    ALTER TABLE member_profiles
    ALTER COLUMN relationship_status
    TYPE jsonb
    USING (
      CASE
        WHEN relationship_status IS NULL
          OR relationship_status = ''
        THEN '[]'::jsonb
        ELSE jsonb_build_array(
          relationship_status
        )
      END
    )
  `);

  await knex.raw(`
    ALTER TABLE member_profiles
    ALTER COLUMN relationship_status
    SET DEFAULT '[]'::jsonb
  `);

  await knex.raw(`
    CREATE INDEX
    member_profiles_relationship_status_gin_index
    ON member_profiles
    USING GIN (relationship_status)
  `);
};

exports.down = async (knex) => {
  await knex.raw(`
    DROP INDEX IF EXISTS
    member_profiles_relationship_status_gin_index
  `);

  await knex.raw(`
    ALTER TABLE member_profiles
    ALTER COLUMN relationship_status
    DROP DEFAULT
  `);

  await knex.raw(`
    ALTER TABLE member_profiles
    ALTER COLUMN relationship_status
    TYPE varchar(255)
    USING (
      CASE
        WHEN jsonb_array_length(
          relationship_status
        ) > 0
        THEN relationship_status ->> 0
        ELSE NULL
      END
    )
  `);

  await knex.schema.alterTable(
    "member_profiles",
    (table) => {
      table.index(
        "relationship_status"
      );
    }
  );
};