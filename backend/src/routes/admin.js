const express = require("express");
 
const {
requireSSO,
} = require("../middleware/sso");
 
const {
seedTestMembers,
deleteTestMembers,
resetMyProfile,
} = require(
"../controllers/adminController"
);
 
const router = express.Router();
 
router.use(requireSSO);
 
router.use((req, res, next) => {
if (
req.user.sub !==
"dev-user-123"
) {
return res.status(403).json({
error:
"Test Lab is only available to the development user",
});
}
 
return next();
});
 
router.post(
"/seed-members",
seedTestMembers
);
 
router.post(
"/delete-test-members",
deleteTestMembers
);
 
router.post(
"/reset-my-profile",
resetMyProfile
);
 
module.exports = router;