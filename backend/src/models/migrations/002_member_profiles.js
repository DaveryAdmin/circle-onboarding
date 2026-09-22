exports.up = async (knex) => {
  await knex.schema.createTable(
    "member_profiles",
    (table) => {
      table
        .uuid("id")
        .primary()
        .defaultTo(
          knex.raw("gen_random_uuid()")
        );

      table
        .string("user_id")
        .notNullable()
        .unique()
        .index();

      table
        .uuid("circle_id")
        .nullable()
        .index();

      table
        .string("full_name")
        .notNullable();

      table
        .string("email")
        .nullable();

      table
        .string("timezone")
        .nullable();

      table
        .string("username")
        .notNullable()
        .unique()
        .index();

      table
        .integer("age")
        .nullable();

      table
        .string("location1")
        .nullable()
        .index();

      table
        .string("website")
        .nullable();

      table
        .jsonb("what_describes_you_best")
        .notNullable()
        .defaultTo(
          knex.raw("'[]'::jsonb")
        );

      table
        .jsonb("interests_and_passions")
        .notNullable()
        .defaultTo(
          knex.raw("'[]'::jsonb")
        );

      table
        .text("what_i_am_looking_for")
        .nullable();

      table
        .string("relationship_status")
        .nullable()
        .index();

      table
        .text("relationship_status_other")
        .nullable();

      table
        .jsonb(
          "how_do_you_see_yourself_here"
        )
        .notNullable()
        .defaultTo(
          knex.raw("'[]'::jsonb")
        );

      table
        .text(
          "write_a_few_words_about_your_journey"
        )
        .nullable();

      table
        .jsonb("best_ways_to_connect")
        .notNullable()
        .defaultTo(
          knex.raw("'[]'::jsonb")
        );

      table
        .boolean("onboarding_complete")
        .notNullable()
        .defaultTo(false);

      table.timestamps(true, true);
    }
  );
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists(
    "member_profiles"
  );
};