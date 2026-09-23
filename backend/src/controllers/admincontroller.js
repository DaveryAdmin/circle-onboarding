const db = require("../models/db");

async function seedTestMembers(req, res) {
  return res.status(501).json({
    error: "Test member seeding is not configured yet",
  });
}

async function deleteTestMembers(req, res) {
  try {
    const deleted = await db("member_profiles")
      .where("user_id", "like", "test-member-%")
      .del();

    return res.json({
      message: "Test members deleted successfully",
      deleted,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
}

async function resetMyProfile(req, res) {
  try {
    const deleted = await db("member_profiles")
      .where({
        user_id: req.user.sub,
      })
      .del();

    return res.json({
      message: "Your profile was reset successfully",
      deleted,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
}

module.exports = {
  seedTestMembers,
  deleteTestMembers,
  resetMyProfile,
};
