# ⭕ Circle Onboarding System

A full-stack onboarding platform for Circle communities, built with Express, React, PostgreSQL, and Docker.

## Quick Start

```bash
cp .env.example .env
# Edit .env with your values
docker-compose up -d
```

The app will be available at http://localhost.

## Architecture

- **Frontend:** React 18 + Vite + React Router
- **Backend:** Express 4 + Knex + PostgreSQL
- **Auth:** JWT-based SSO verification
- **Deployment:** Docker multi-stage build, Render.com blueprint

## Project Structure

```
circle-onboarding/
├── backend/          # Express API
│   └── src/
│       ├── controllers/
│       ├── middleware/
│       ├── models/
│       └── routes/
├── frontend/         # React SPA
│   └── src/
│       ├── components/
│       ├── context/
│       ├── hooks/
│       ├── styles/
│       └── theme/
├── nginx/            # Reverse proxy config
├── scripts/          # Build & deploy helpers
├── .github/          # CI/CD workflows
├── Dockerfile        # Multi-stage production build
├── Dockerfile.api    # API-only container
├── docker-compose.yml
├── render.yaml       # Render.com blueprint
└── supervisord.conf
```

## API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | /health | Health check |
| GET | /api/circle-member | List members |
| GET | /api/circle-member/:id | Get member |
| PATCH | /api/circle-member/:id | Update member |
| POST | /api/circle-sync | Trigger sync |
| GET | /api/circle-sync/status | Sync status |
| GET | /api/onboarding-status | Get onboarding state |
| PATCH | /api/onboarding-status/:step | Complete step |
| POST | /api/onboarding-status/reset | Reset onboarding |
| GET | /api/profile-completeness | Get profile score |
| POST | /api/profile-completeness/recalculate | Recalculate score |

## Environment Variables

See `.env.example` for the full list of required configuration variables.

## Deployment

### Docker

```bash
docker-compose up -d --build
```

### Render.com

Push to GitHub and connect the repo in Render. The `render.yaml` blueprint will automatically configure all services.

## License

MIT