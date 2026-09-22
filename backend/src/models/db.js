const knex = require('knex');

const db = knex({
  client: 'pg',
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: false
  },
  pool: { min: 2, max: 10 },
  acquireConnectionTimeout: 10000,
});

module.exports = db;