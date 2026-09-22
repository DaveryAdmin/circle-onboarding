const express = require('express');
const router = express.Router();
const { requireSSO } = require('../middleware/sso');
const { syncCircle, getSyncStatus } = require('../controllers/circleSyncController');

router.use(requireSSO);
router.post('/', syncCircle);
router.get('/status', getSyncStatus);

module.exports = router;