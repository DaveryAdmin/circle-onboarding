require('dotenv').config();
const app = require('./app');
const db = require('./models/db');

const PORT = process.env.PORT || 4000;

const start = async () => {
  try {
    await db.raw('SELECT 1');
    console.log('Database connected');
    await db.migrate.latest({ directory: './src/models/migrations' });
    console.log('Migrations up to date');
    app.listen(PORT, () => {
      console.log('Circle Onboarding API listening on port ' + PORT);
    });
  } catch (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
};

start();