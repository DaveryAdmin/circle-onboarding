const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const compression = require("compression");
const rateLimit = require(
  "express-rate-limit"
);

const circleMemberRoutes = require(
  "./routes/circleMember"
);

const circleSyncRoutes = require(
  "./routes/circleSync"
);

const onboardingStatusRoutes = require(
  "./routes/onboardingStatus"
);

const profileCompletenessRoutes = require(
  "./routes/profileCompleteness"
);

const memberProfileRoutes = require(
  "./routes/memberProfile"
);

const devSsoRoutes = require(
  "./routes/dev-sso"
);

const app = express();

app.use(helmet());

app.use(
  cors({
    origin:
      process.env.CORS_ORIGIN?.split(
        ","
      ) ?? "*",
    credentials: true,
  })
);

app.use(
  "/api/",
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 200,
    standardHeaders: true,
    legacyHeaders: false,
  })
);

app.use(
  express.json({
    limit: "1mb",
  })
);

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(compression());

app.use(
  morgan(
    process.env.NODE_ENV ===
      "production"
      ? "combined"
      : "dev"
  )
);

app.get("/health", (_req, res) => {
  res.json({
    status: "ok",
    timestamp:
      new Date().toISOString(),
  });
});

app.use(
  "/api/circle-member",
  circleMemberRoutes
);

app.use(
  "/api/circle-sync",
  circleSyncRoutes
);

app.use(
  "/api/onboarding-status",
  onboardingStatusRoutes
);

app.use(
  "/api/profile-completeness",
  profileCompletenessRoutes
);

app.use(
  "/api/member-profiles",
  memberProfileRoutes
);

app.use(
  "/dev-sso",
  devSsoRoutes
);

app.use((_req, res) => {
  res.status(404).json({
    error: "Not found",
  });
});

app.use(
  (err, _req, res, _next) => {
    console.error(err.stack);

    res.status(
      err.status ?? 500
    ).json({
      error:
        process.env.NODE_ENV ===
        "production"
          ? "Internal server error"
          : err.message,
    });
  }
);

module.exports = app;