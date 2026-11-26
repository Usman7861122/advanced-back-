// Astro integration: after the build, turn every local /images/*.jpg|png used in <img> tags into a smaller .webp,
// and add width and height so the page does not jump while loading.
// Social-share images (og:image) are not touched: they keep the original file.
import { readdir, readFile, writeFile, stat } from 'node:fs/promises';
import { join, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const MAX_W = 1600;
const walk = async (d) => (await Promise.all((await readdir(d, { withFileTypes: true })).map((e) => (e.isDirectory() ? walk(join(d, e.name)) : [join(d, e.name)])))).flat();
const attr = (tag, name) => { const m = tag.match(new RegExp(`\\s${name}="([^"]*)"`)); return m ? m[1] : null; };

export default function optimizeImages() {
  return {
    name: 'optimize-images',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        const root = fileURLToPath(dir);
        const files = await walk(root);
        const cache = new Map();
        let saved = 0, made = 0;
        const make = async (src) => {
          if (cache.has(src)) return cache.get(src);
          const file = join(root, decodeURI(src));
          let res = null;
          try {
            const buf = await readFile(file);
            let img = sharp(buf);
            const meta = await img.metadata();
            let w = meta.width, h = meta.height;
            if (w > MAX_W) { h = Math.round((h * MAX_W) / w); w = MAX_W; img = img.resize({ width: MAX_W }); }
            const out = await img.webp({ quality: 78, effort: 5 }).toBuffer();
            const webpPath = file.replace(/\.(jpe?g|png)$/i, '.webp');
            if (out.length < buf.length) { await writeFile(webpPath, out); saved += buf.length - out.length; made++; res = { src: src.replace(/\.(jpe?g|png)$/i, '.webp'), w, h }; }
            else res = { src, w: meta.width, h: meta.height };
          } catch (e) { res = null; }
          cache.set(src, res);
          return res;
        };
        for (const f of files.filter((f) => f.endsWith('.html'))) {
          let html = await readFile(f, 'utf8');
          const tags = [...new Set(html.match(/<img\b[^>]*>/g) ?? [])];
          for (const tag of tags) {
            const src = attr(tag, 'src');
            if (!src || !/^\/images\/.+\.(jpe?g|png)$/i.test(src)) continue;
            const r = await make(src);
            if (!r) continue;
            let t = tag.replace(`src="${src}"`, `src="${r.src}"`);
            if (!/\swidth=/.test(t)) t = t.replace(/<img\b/, `<img width="${r.w}"`);
            if (!/\sheight=/.test(t)) t = t.replace(/<img\b/, `<img height="${r.h}"`);
            if (!/\sdecoding=/.test(t)) t = t.replace(/<img\b/, '<img decoding="async"');
            html = html.split(tag).join(t);
          }
          await writeFile(f, html);
        }
        console.log(`[optimize-images] ${made} webp files, saved ${(saved / 1048576).toFixed(1)} MB`);
      },
    },
  };
}
