#!/usr/bin/env bash
set -euo pipefail
[[ -z "${RENDER_API_KEY:-}" ]] && { echo "Error: RENDER_API_KEY not set."; exit 1; }
curl -sf -X POST "https://api.render.com/v1/deploys" \
  -H "Authorization: Bearer ${RENDER_API_KEY}" \
  -H "Content-Type: application/json" \
  -d '{"clearCache": false}'
echo "Deploy request sent."