const express = require("express");

const router = express.Router();

const {
  requireSSO,
} = require("../middleware/sso");

const {
  getMyProfile,
  saveMyProfile,
  listProfiles,
  getProfileById,
} = require(
  "../controllers/memberProfileController"
);

router.use(requireSSO);

router.get("/me", getMyProfile);

router.put("/me", saveMyProfile);

router.get("/", listProfiles);

router.get("/:id", getProfileById);

module.exports = router;