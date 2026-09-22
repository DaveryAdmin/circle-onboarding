exports.up = async (knex) => {
  await knex.schema.createTable('circle_members', (t) => {
    t.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
    t.uuid('circle_id').notNullable().index();
    t.string('user_id').notNullable().unique().index();
    t.string('display_name');
    t.string('avatar_url');
    t.text('bio');
    t.string('role');
    t.string('timezone');
    t.jsonb('social_links').defaultTo('{}');
    t.integer('completeness_score').defaultTo(0);
    t.timestamps(true, true);
  });

  await knex.schema.createTable('onboarding_status', (t) => {
    t.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
    t.string('user_id').notNullable().unique().index();
    t.string('current_step').notNullable().defaultTo('welcome');
    t.jsonb('completed_steps').defaultTo('[]');
    t.timestamps(true, true);
  });

  await knex.schema.createTable('circle_sync_log', (t) => {
    t.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
    t.uuid('circle_id').notNullable().index();
    t.string('status').notNullable().defaultTo('pending');
    t.string('triggered_by');
    t.timestamp('started_at');
    t.timestamp('completed_at');
    t.jsonb('result').defaultTo('{}');
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('circle_sync_log');
  await knex.schema.dropTableIfExists('onboarding_status');
  await knex.schema.dropTableIfExists('circle_members');
};