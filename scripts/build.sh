#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT_DIR"

REQUIRED_VARS=(DATABASE_URL SSO_JWT_SECRET SSO_AUDIENCE SSO_ISSUER)
for var in "${REQUIRED_VARS[@]}"; do
  if [[ -z "${!var:-}" ]]; then
    echo "Error: Required env var $var is not set."
    exit 1
  fi
done

cd "$ROOT_DIR/backend"
npm ci --only=production --prefer-offline
npm run migrate
cd "$ROOT_DIR"

cd "$ROOT_DIR/frontend"
npm ci --prefer-offline
VITE_API_BASE_URL="${VITE_API_BASE_URL:-/api}" npm run build
cd "$ROOT_DIR"

echo "Build complete!"