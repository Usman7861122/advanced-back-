/**
 * ALL IMAGES LIVE HERE.
 * - `live()`      = real photos from the current advancedback.com. Hotlinked until you run `npm run download-images`,
 *                   which saves them into /public/images/live and flips LOCAL to true.
 * - `unsplash()`  = TEMPORARY placeholders. Replace each with a Shutterstock image when the plan refreshes.
 *                   Search this file for "SHUTTERSTOCK" to find them.
 */
const LOCAL = false; // `npm run download-images` sets this to true once every file is saved locally
const VIDEO_LOCAL = false; // set to true by the script too, when the video was downloaded
const live = (p: string) => (LOCAL ? `/images/live/${p}` : `https://advancedback.com/wp-content/uploads/${p}`);
export const unsplash = (id: string, w = 1200, h?: number) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=75&w=${w}${h ? `&h=${h}` : ''}`;

export const img = {
  logo: '/images/logo-e1772010222317.png',
  heroVideo: VIDEO_LOCAL ? '/video/hero.m4v' : 'https://d216ujrdi95jbi.cloudfront.net/Travis+Mckay+(1).m4v',
  heroPoster: live('2026/02/2150433205-e1772008394103.jpg'),

  // SHUTTERSTOCK: replace these Unsplash placeholders later
  athlete: unsplash('1552674605-db6ffd4facb5', 2400),         // parallax "Don't Let Pain Control Your Life"
  ctaBig: unsplash('1666214280557-f1b5022eb634', 2400),       // final "Start Your Journey" photo
  svc: {
    back: unsplash('1519823551278-64ac92734fb1', 800, 800),
    neck: unsplash('1519824145371-296894a0daa9', 800, 800),
    sciatica: unsplash('1769029271190-36b22f5e6771', 800, 800),
    disc: unsplash('1772122028898-1640a4dd2d7f', 800, 800),
    headache: unsplash('1559757148-5c350d0d3c56', 800, 800),
    car: unsplash('1449965408869-eaa3f722e40d', 800, 800),
  },
  blog: [
    live('2026/11/Winner-Logo-2026.png'),
    unsplash('1551076805-e1869033e561', 800, 800),
    unsplash('1544367567-0f2fcb009e0b', 800, 800),
    unsplash('1506126613408-eca07ce68773', 800, 800),
  ],

  // real photos from the live site
  doctors: {
    travis: live('2026/02/ChatGPT-Image-Feb-26-2026-09_11_17-PM.png'),
    hollen: live('2026/02/ChatGPT-Image-Feb-26-2026-09_19_34-PM.png'),
    richard: live('2026/03/Smiling-doctor-in-professional-attire.png'),
    roth: live('2026/02/ChatGPT-Image-Feb-26-2026-09_33_07-PM.png'),
    meers: live('2026/06/Daniel-Meers-Headshot-scaled-e1782158670970-1.jpg'),
    marini: live('2026/09/ChatGPT-Image-Feb-26-2026-09_33_07-PM-e1789553667142.png'),
  },
  awards: [
    live('2026/11/Winner-Logo-2026.png'),
    live('2026/03/CC25_DoverNorth_Winner-e1774446956467.png'),
    live('2026/03/2W_nyepw-e1774446974395.png'),
    live('2026/03/CC23_DoverNorth_Winner-e1774446988347.png'),
    live('2026/02/7.png'),
    live('2026/02/6-1.png'),
    live('2026/03/RC.2020_logo_WINNER-e1774447002880.png'),
  ],
  insurance: ['2206449', '2', '1771737', '1', '6', '4', '5', '3'].map((n) => live(`2026/02/${n}.png`)),
  office: ['office-1', 'office-1-1', 'office-3', 'office-4', 'office-5', 'office-6'].map((n) => live(`2026/02/${n}.jpg`)),
  whyUs: '/images/office-1-1.jpg', // your own photo
};
