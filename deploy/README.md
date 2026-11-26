# Deploy flow

git push to `main`  ->  GitHub Actions builds the site and uploads it to S3 (`advanced-back-website`)
                    ->  cron on Lightsail runs `deploy/lightsail-sync.sh` every 5 minutes and copies S3 to the web folder.

## Lightsail server setup (one time)
1. Install AWS CLI on the server (`aws --version` to check).
2. Create a READ-ONLY IAM user (policy below) and run `aws configure` on the server as the user that will run cron.
3. Copy `lightsail-sync.sh` to `/usr/local/bin/advancedback-sync.sh`, set `WEBROOT` to the folder your web server serves.
4. Add the cron line:  `*/5 * * * * /usr/local/bin/advancedback-sync.sh`

## Read-only policy for the server
{
  "Version": "2012-10-17",
  "Statement": [
    { "Effect": "Allow", "Action": ["s3:ListBucket"], "Resource": "arn:aws:s3:::advanced-back-website" },
    { "Effect": "Allow", "Action": ["s3:GetObject"], "Resource": "arn:aws:s3:::advanced-back-website/*" }
  ]
}
