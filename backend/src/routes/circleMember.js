const express = require('express');
const router = express.Router();
const { requireSSO } = require('../middleware/sso');
const { getCircleMember, updateCircleMember, listCircleMembers } = require('../controllers/circleMemberController');

router.use(requireSSO);
router.get('/:id', getCircleMember);
router.get('/', listCircleMembers);
router.patch('/:id', updateCircleMember);

module.exports = router;