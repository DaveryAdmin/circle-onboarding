const express = require('express');
const router = express.Router();
const { requireSSO } = require('../middleware/sso');
const { getOnboardingStatus, updateOnboardingStep, resetOnboarding } = require('../controllers/onboardingStatusController');

router.use(requireSSO);
router.get('/', getOnboardingStatus);
router.patch('/:step', updateOnboardingStep);
router.post('/reset', resetOnboarding);

module.exports = router;