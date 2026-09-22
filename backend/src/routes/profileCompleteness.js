const express = require('express');
const router = express.Router();
const { requireSSO } = require('../middleware/sso');
const { getProfileCompleteness, recalculateCompleteness } = require('../controllers/profileCompletenessController');

router.use(requireSSO);
router.get('/', getProfileCompleteness);
router.post('/recalculate', recalculateCompleteness);

module.exports = router;