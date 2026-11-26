#!/usr/bin/env bash
# Pulls the built site from S3 into the folder your web server serves.
# Run by cron on the Lightsail server (see deploy/README.md).
set -euo pipefail

BUCKET="advanced-back-website"
REGION="us-east-1"
WEBROOT="${WEBROOT:-/var/www/advancedback}"   # change if your web server uses another folder
LOCK="/tmp/advancedback-sync.lock"
LOG="/var/log/advancedback-sync.log"

# only one sync at a time
exec 9>"$LOCK"
flock -n 9 || exit 0

mkdir -p "$WEBROOT"
{
  echo "--- $(date -u +%FT%TZ) sync start"
  # --delete removes files that no longer exist in the bucket, so the server mirrors S3 exactly
  aws s3 sync "s3://$BUCKET" "$WEBROOT" --region "$REGION" --delete --only-show-errors
  echo "--- $(date -u +%FT%TZ) sync done"
} >> "$LOG" 2>&1
