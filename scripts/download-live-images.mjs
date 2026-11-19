#!/usr/bin/env node
/**
 * Downloads the live-site photos (and the hero video) into /public so the new site stops hotlinking advancedback.com.
 *
 *   npm run download-images
 *
 * - Images go to  public/images/live/<year>/<month>/<file>
 * - Hero video    public/video/hero.m4v
 * - Files that already exist are skipped, so you can re-run it safely.
 * - When everything downloads, it flips `LOCAL = true` in src/data/images.ts.
 *   If anything fails, nothing is flipped and the site keeps using the live URLs.
 *
 * Needs Node 18+ (built-in fetch). Run it on a machine that can reach advancedback.com.
 * Options: --no-video   skip the video (about 10+ MB)
 */
import { mkdir, writeFile, readFile, stat } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const cfg = JSON.parse(await readFile(join(root, 'scripts/live-files.json'), 'utf8'));
const base = process.env.LIVE_BASE || cfg.base;
const videoUrl = process.env.LIVE_VIDEO || cfg.video;
const withVideo = !process.argv.includes('--no-video');

const jobs = cfg.images.map((p) => ({
  url: base + p.split('/').map(encodeURIComponent).join('/'),
  out: join(root, 'public/images/live', p),
  kind: 'image',
}));
if (withVideo) jobs.push({ url: videoUrl, out: join(root, 'public/video/hero.m4v'), kind: 'video' });

const exists = async (f) => !!(await stat(f).catch(() => null));

async function get(job, tries = 3) {
  if (await exists(job.out)) return { skipped: true };
  let err;
  for (let i = 1; i <= tries; i++) {
    try {
      const res = await fetch(job.url, { headers: { 'user-agent': 'Mozilla/5.0 (site-migration)' } });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const type = res.headers.get('content-type') || '';
      if (job.kind === 'image' && !type.startsWith('image/')) throw new Error('not an image (' + type + ')');
      const buf = Buffer.from(await res.arrayBuffer());
      if (buf.length < 200) throw new Error('file too small');
      await mkdir(dirname(job.out), { recursive: true });
      await writeFile(job.out, buf);
      return { bytes: buf.length };
    } catch (e) {
      err = e;
      await new Promise((r) => setTimeout(r, 800 * i));
    }
  }
  throw err;
}

const kb = (n) => (n / 1024).toFixed(0) + ' KB';
let done = 0, skipped = 0, bytes = 0;
const failed = [];
const queue = [...jobs];

await Promise.all(
  Array.from({ length: 4 }, async () => {
    while (queue.length) {
      const job = queue.shift();
      const name = job.url.split('/').slice(-1)[0];
      try {
        const r = await get(job);
        if (r.skipped) { skipped++; console.log('  skip  ' + name); }
        else { done++; bytes += r.bytes; console.log('  ok    ' + name + '  ' + kb(r.bytes)); }
      } catch (e) {
        failed.push(job.url);
        console.log('  FAIL  ' + name + '  ' + e.message);
      }
    }
  }),
);

console.log(`\n${done} downloaded (${kb(bytes)}), ${skipped} already there, ${failed.length} failed.`);
if (failed.length) {
  console.log('\nFailed:\n' + failed.map((u) => '  ' + u).join('\n'));
  console.log('\nNothing was switched. Fix the list in scripts/live-files.json (or your network) and run again.');
  process.exit(1);
}

const file = join(root, 'src/data/images.ts');
const src = await readFile(file, 'utf8');
let next = src.replace(/const LOCAL = false;/, 'const LOCAL = true;');
if (withVideo) next = next.replace(/const VIDEO_LOCAL = false;/, 'const VIDEO_LOCAL = true;');
if (next !== src) {
  await writeFile(file, next);
  console.log('\nSwitched src/data/images.ts to local files (LOCAL = true' + (withVideo ? ', VIDEO_LOCAL = true' : '') + ').');
} else {
  console.log('\nsrc/data/images.ts already uses local files.');
}
if (!withVideo) console.log('Video skipped: the hero keeps using its CloudFront link.');
