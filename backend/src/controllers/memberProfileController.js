const db = require("../models/db");

const PROFILE_FIELDS = [
  "full_name",
  "email",
  "timezone",
  "username",
  "age",
  "location1",
  "website",
  "what_describes_you_best",
  "interests_and_passions",
  "what_i_am_looking_for",
  "relationship_status",
  "relationship_status_other",
  "how_do_you_see_yourself_here",
  "write_a_few_words_about_your_journey",
  "best_ways_to_connect",
  "onboarding_complete",
];

const ARRAY_FIELDS = [
  "what_describes_you_best",
  "interests_and_passions",
  "how_do_you_see_yourself_here",
  "best_ways_to_connect",
];

function normalizeProfileInput(body = {}) {
  const profile = {};

  for (const field of PROFILE_FIELDS) {
    if (
      Object.prototype.hasOwnProperty.call(
        body,
        field
      )
    ) {
      profile[field] = body[field];
    }
  }

  for (const field of ARRAY_FIELDS) {
    if (
      Object.prototype.hasOwnProperty.call(
        profile,
        field
      )
    ) {
      profile[field] = Array.isArray(
        profile[field]
      )
        ? profile[field]
        : [];
    }
  }

  if (
    Object.prototype.hasOwnProperty.call(
      profile,
      "age"
    )
  ) {
    if (
      profile.age === "" ||
      profile.age === null
    ) {
      profile.age = null;
    } else {
      const parsedAge = Number(
        profile.age
      );

      profile.age = Number.isFinite(
        parsedAge
      )
        ? parsedAge
        : null;
    }
  }

  return profile;
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
      profile,
    });
  } catch (err) {
    return res.status(500).json({
      error: err.message,
    });
  }
};

const saveMyProfile = async (req, res) => {
  try {
    const profileInput =
      normalizeProfileInput(req.body);

    if (
      !profileInput.full_name ||
      !profileInput.username
    ) {
      return res.status(400).json({
        error:
          "Full name and username are required",
      });
    }

    const now = new Date().toISOString();

    const record = {
      ...profileInput,
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

    let savedProfile;

    if (existing) {
      const updatedProfiles = await db(
        "member_profiles"
      )
        .where({
          user_id: req.user.sub,
        })
        .update(record)
        .returning("*");

      savedProfile =
        updatedProfiles[0];
    } else {
      const insertedProfiles = await db(
        "member_profiles"
      )
        .insert({
          ...record,
          created_at: now,
        })
        .returning("*");

      savedProfile =
        insertedProfiles[0];
    }

    return res.status(
      existing ? 200 : 201
    ).json({
      profile: savedProfile,
    });
  } catch (err) {
    if (
      err.code === "23505"
    ) {
      return res.status(409).json({
        error:
          "That username is already in use",
      });
    }

    return res.status(500).json({
      error: err.message,
    });
  }
};

const listProfiles = async (req, res) => {
  try {
    const relationshipStatus =
      req.query.relationship_status;

    const location =
      req.query.location;

    const search =
      String(
        req.query.search || ""
      ).trim();

    const query = db(
      "member_profiles"
    )
      .select([
        "id",
        "user_id",
        "full_name",
        "username",
        "age",
        "location1",
        "website",
        "what_describes_you_best",
        "interests_and_passions",
        "what_i_am_looking_for",
        "relationship_status",
        "relationship_status_other",
        "how_do_you_see_yourself_here",
        "write_a_few_words_about_your_journey",
        "best_ways_to_connect",
        "created_at",
        "updated_at",
      ])
      .where({
        onboarding_complete: true,
      });

    if (relationshipStatus) {
      query.andWhere(
        "relationship_status",
        relationshipStatus
      );
    }

    if (location) {
      query.andWhere(
        "location1",
        location
      );
    }

    if (search) {
      query.andWhere((builder) => {
        builder
          .whereILike(
            "full_name",
            `%${search}%`
          )
          .orWhereILike(
            "username",
            `%${search}%`
          )
          .orWhereILike(
            "location1",
            `%${search}%`
          )
          .orWhereRaw(
            "interests_and_passions::text ILIKE ?",
            [`%${search}%`]
          )
          .orWhereRaw(
            "how_do_you_see_yourself_here::text ILIKE ?",
            [`%${search}%`]
          );
      });
    }

    const profiles = await query.orderBy(
      "created_at",
      "desc"
    );

    return res.json({
      profiles,
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
        onboarding_complete: true,
      })
      .first();

    if (!profile) {
      return res.status(404).json({
        error: "Profile not found",
      });
    }

    const publicProfile = {
      id: profile.id,
      user_id: profile.user_id,
      full_name: profile.full_name,
      username: profile.username,
      age: profile.age,
      location1: profile.location1,
      website: profile.website,
      what_describes_you_best:
        profile.what_describes_you_best,
      interests_and_passions:
        profile.interests_and_passions,
      what_i_am_looking_for:
        profile.what_i_am_looking_for,
      relationship_status:
        profile.relationship_status,
      relationship_status_other:
        profile.relationship_status_other,
      how_do_you_see_yourself_here:
        profile.how_do_you_see_yourself_here,
      write_a_few_words_about_your_journey:
        profile.write_a_few_words_about_your_journey,
      best_ways_to_connect:
        profile.best_ways_to_connect,
      created_at: profile.created_at,
      updated_at: profile.updated_at,
    };

    return res.json({
      profile: publicProfile,
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
