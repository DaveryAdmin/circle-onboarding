const db = require("../models/db");

function normalizeArray(value) {
  if (Array.isArray(value)) {
    return value.filter(Boolean);
  }

  if (
    typeof value === "string" &&
    value.trim()
  ) {
    try {
      const parsed = JSON.parse(value);

      if (Array.isArray(parsed)) {
        return parsed.filter(Boolean);
      }
    } catch (error) {
      return [value];
    }

    return [value];
  }

  return [];
}

const getMyProfile = async (req, res) => {
  try {
    const profile = await db(
      "member_profiles"
    )
      .where({
        user_id: req.user.sub,
      })
      .first();

    if (!profile) {
      return res.status(404).json({
        error: "Profile not found",
      });
    }

    return res.json({
      profile: {
        ...profile,
        relationship_status:
          normalizeArray(
            profile.relationship_status
          ),
      },
    });
  } catch (err) {
    return res.status(500).json({
      error: err.message,
    });
  }
};

const saveMyProfile = async (
  req,
  res
) => {
  try {
    const now = new Date().toISOString();

    const record = {
      full_name: req.body.full_name,
      email: req.body.email,
      timezone: req.body.timezone,
      username: req.body.username,

      age: req.body.age
        ? Number(req.body.age)
        : null,

      location1: req.body.location1,
      website: req.body.website,

      what_describes_you_best:
        JSON.stringify(
          normalizeArray(
            req.body
              .what_describes_you_best
          )
        ),

      interests_and_passions:
        JSON.stringify(
          normalizeArray(
            req.body
              .interests_and_passions
          )
        ),

      what_i_am_looking_for:
        req.body.what_i_am_looking_for,

      relationship_status:
        JSON.stringify(
          normalizeArray(
            req.body.relationship_status
          )
        ),

      relationship_status_other:
        req.body
          .relationship_status_other,

      how_do_you_see_yourself_here:
        JSON.stringify(
          normalizeArray(
            req.body
              .how_do_you_see_yourself_here
          )
        ),

      write_a_few_words_about_your_journey:
        req.body
          .write_a_few_words_about_your_journey,

      best_ways_to_connect:
        JSON.stringify(
          normalizeArray(
            req.body.best_ways_to_connect
          )
        ),

      onboarding_complete:
        req.body
          .onboarding_complete === true,

      user_id: req.user.sub,

      circle_id:
        req.user.circleId || null,

      updated_at: now,
    };

    const existing = await db(
      "member_profiles"
    )
      .where({
        user_id: req.user.sub,
      })
      .first();

    let profile;

    if (existing) {
      const result = await db(
        "member_profiles"
      )
        .where({
          user_id: req.user.sub,
        })
        .update(record)
        .returning("*");

      profile = result[0];
    } else {
      const result = await db(
        "member_profiles"
      )
        .insert({
          ...record,
          created_at: now,
        })
        .returning("*");

      profile = result[0];
    }

    return res.json({
      profile: {
        ...profile,
        relationship_status:
          normalizeArray(
            profile.relationship_status
          ),
      },
    });
  } catch (err) {
    console.error(err);

    return res.status(500).json({
      error: err.message,
    });
  }
};

const listProfiles = async (
  req,
  res
) => {
  try {
    const profiles = await db(
      "member_profiles"
    )
      .where({
        onboarding_complete: true,
      })
      .orderBy(
        "created_at",
        "desc"
      );

    const normalizedProfiles =
      profiles.map((profile) => ({
        ...profile,

        relationship_status:
          normalizeArray(
            profile.relationship_status
          ),
      }));

    return res.json({
      profiles: normalizedProfiles,
    });
  } catch (err) {
    return res.status(500).json({
      error: err.message,
    });
  }
};

const getProfileById = async (
  req,
  res
) => {
  try {
    const profile = await db(
      "member_profiles"
    )
      .where({
        id: req.params.id,
      })
      .first();

    if (!profile) {
      return res.status(404).json({
        error: "Profile not found",
      });
    }

    return res.json({
      profile: {
        ...profile,
        relationship_status:
          normalizeArray(
            profile.relationship_status
          ),
      },
    });
  } catch (err) {
    return res.status(500).json({
      error: err.message,
    });
  }
};

module.exports = {
  getMyProfile,
  saveMyProfile,
  listProfiles,
  getProfileById,
};