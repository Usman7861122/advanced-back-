# Advanced Back & Neck Pain Center: new website

Astro + React islands + Framer Motion + Tailwind CSS v4.

## Start
```bash
npm install
npm run dev      # http://localhost:4321
npm run build
```

## Where things are
- `src/data/images.ts`  ALL images. Unsplash placeholders are marked `SHUTTERSTOCK`; swap them there.
- `src/data/site.ts`    phone, address, full menu (copied from the live site).
- `src/styles/global.css` colors, fonts, animated appointment button (`.btn-appt`), drifting backgrounds (`.drift`), flip cards.
- `src/layouts/BaseLayout.astro` fonts + the LeadConnector chat widget script (same widget id as live site).
- `src/components/sections/*` homepage sections, `src/components/islands/*` React + Framer Motion parts.

## Next
- Appointment page: embed `https://api.ironhealthsolutions.com/widget/booking/LyI7Z0oCrzZATAabrfMs` and its script `https://api.ironhealthsolutions.com/js/form_embed.js` (this is what the live /appointment/ page uses).
- Live-site photos (doctors, office, awards, insurance) and the hero video are hotlinked. Download them into `public/images` before the old site goes away.
- `_to_delete/` holds old skeleton files that can be removed.

## Download the live-site photos

The real photos still load from advancedback.com. To save them (and the hero video) into this project:

```bash
npm run download-images            # images + hero video
npm run download-images -- --no-video   # images only
```

Files go to `public/images/live/` and `public/video/hero.m4v`. If every file downloads, the script switches `LOCAL` to `true` in `src/data/images.ts`. If any file fails, nothing is switched and the failed URLs are printed.
