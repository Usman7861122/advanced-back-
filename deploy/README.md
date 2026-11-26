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

## nginx on Lightsail (SEO and speed)
Files in `deploy/nginx/`:
- `security-headers.conf` -> `/etc/nginx/snippets/advancedback-security.conf`
- `gzip.conf` -> `/etc/nginx/conf.d/advancedback-gzip.conf`
- `advancedback-seo.conf` -> paste inside the HTTPS `server { }` block (replace its existing `root`, `index` and `location /` lines).
Then run `sudo nginx -t && sudo systemctl reload nginx`.

Test after reload:
    curl -sI https://advancedback.com/sitemap_index.xml   # 301 to /sitemap-index.xml
    curl -sI https://advancedback.com/about/              # 301 to /about-practice/
    curl -sI https://advancedback.com/wp-login.php        # 410
    curl -sI https://advancedback.com/_astro/             # cache-control immutable on hashed files

HSTS `includeSubDomains` applies to every subdomain of advancedback.com. Remove it if any subdomain has no HTTPS.
