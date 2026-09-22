const db = require('../models/db');

const STEPS = ['welcome', 'profile', 'circle_setup', 'theme', 'integrations', 'complete'];

const getOnboardingStatus = async (req, res) => {
  try {
    let status = await db('onboarding_status').where({ user_id: req.user.sub }).first();
    if (!status) {
      [status] = await db('onboarding_status').insert({ user_id: req.user.sub, current_step: 'welcome', completed_steps: JSON.stringify([]), created_at: new Date().toISOString(), updated_at: new Date().toISOString() }).returning('*');
    }
    res.json({ ...status, completed_steps: JSON.parse(status.completed_steps || '[]'), steps: STEPS });
  } catch (err) { res.status(500).json({ error: err.message }); }
};

const updateOnboardingStep = async (req, res) => {
  try {
    const { step } = req.params;
    if (!STEPS.includes(step)) return res.status(400).json({ error: 'Invalid step' });
    const existing = await db('onboarding_status').where({ user_id: req.user.sub }).first();
    const completedSteps = existing ? JSON.parse(existing.completed_steps || '[]') : [];
    if (!completedSteps.includes(step)) completedSteps.push(step);
    const nextStep = STEPS[STEPS.indexOf(step) + 1] || 'complete';
    const [updated] = await db('onboarding_status').where({ user_id: req.user.sub }).update({ current_step: nextStep, completed_steps: JSON.stringify(completedSteps), updated_at: new Date().toISOString() }).returning('*');
    res.json({ ...updated, completed_steps: completedSteps, steps: STEPS });
  } catch (err) { res.status(500).json({ error: err.message }); }
};

const resetOnboarding = async (req, res) => {
  try {
    await db('onboarding_status').where({ user_id: req.user.sub }).update({ current_step: 'welcome', completed_steps: JSON.stringify([]), updated_at: new Date().toISOString() });
    res.json({ message: 'Onboarding reset to beginning' });
  } catch (err) { res.status(500).json({ error: err.message }); }
};

module.exports = { getOnboardingStatus, updateOnboardingStep, resetOnboarding };