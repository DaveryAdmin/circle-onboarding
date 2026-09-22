const db = require('../models/db');

const PROFILE_FIELDS = ['display_name', 'avatar_url', 'bio', 'role', 'timezone', 'social_links'];
const WEIGHTS = { display_name: 20, avatar_url: 20, bio: 20, role: 15, timezone: 10, social_links: 15 };

const calculateScore = (member) => {
  let score = 0;
  for (const [field, weight] of Object.entries(WEIGHTS)) {
    if (member[field] && member[field] !== '' && member[field] !== '[]' && member[field] !== '{}') score += weight;
  }
  return score;
};

const getProfileCompleteness = async (req, res) => {
  try {
    const member = await db('circle_members').where({ user_id: req.user.sub }).first();
    if (!member) return res.status(404).json({ error: 'Profile not found' });
    const score = calculateScore(member);
    const missing = PROFILE_FIELDS.filter((f) => !member[f] || member[f] === '' || member[f] === '[]');
    res.json({ score, label: score >= 80 ? 'Complete' : score >= 50 ? 'In Progress' : 'Getting Started', missing_fields: missing });
  } catch (err) { res.status(500).json({ error: err.message }); }
};

const recalculateCompleteness = async (req, res) => {
  try {
    const member = await db('circle_members').where({ user_id: req.user.sub }).first();
    if (!member) return res.status(404).json({ error: 'Profile not found' });
    const score = calculateScore(member);
    await db('circle_members').where({ user_id: req.user.sub }).update({ completeness_score: score, updated_at: new Date().toISOString() });
    res.json({ score, updated: true });
  } catch (err) { res.status(500).json({ error: err.message }); }
};

module.exports = { getProfileCompleteness, recalculateCompleteness };