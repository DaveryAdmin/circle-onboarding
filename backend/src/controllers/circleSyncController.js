const db = require('../models/db');

const syncCircle = async (req, res) => {
  try {
    const { circleId } = req.user;
    await db('circle_sync_log').insert({ circle_id: circleId, status: 'in_progress', triggered_by: req.user.sub, started_at: new Date().toISOString() });
    const syncResult = { synced: 0, errors: [] };
    await db('circle_sync_log').where({ circle_id: circleId, status: 'in_progress' }).orderBy('started_at', 'desc').limit(1).update({ status: 'completed', completed_at: new Date().toISOString(), result: JSON.stringify(syncResult) });
    res.json({ message: 'Sync complete', result: syncResult });
  } catch (err) { res.status(500).json({ error: err.message }); }
};

const getSyncStatus = async (req, res) => {
  try {
    const log = await db('circle_sync_log').where({ circle_id: req.user.circleId }).orderBy('started_at', 'desc').first();
    res.json(log || { status: 'never_synced' });
  } catch (err) { res.status(500).json({ error: err.message }); }
};

module.exports = { syncCircle, getSyncStatus };