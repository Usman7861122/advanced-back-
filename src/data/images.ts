/**
 * ALL IMAGES LIVE HERE.
 * - `live()`      = real photos from the current advancedback.com. Hotlinked until you run `npm run download-images`,
 *                   which saves them into /public/images/live and flips LOCAL to true.
 * - `ss()`        = licensed Shutterstock photos saved in /public/images/shutterstock (resized).
 */
const LOCAL = true; // `npm run download-images` sets this to true once every file is saved locally
const VIDEO_LOCAL = true; // set to true by the script too, when the video was downloaded
const live = (p: string) => (LOCAL ? `/images/live/${p}` : `https://advancedback.com/wp-content/uploads/${p}`);
/** Licensed Shutterstock photos, resized into /public/images/shutterstock */
const ss = (n: string) => `/images/shutterstock/${n}.jpg`;
export const unsplash = (id: string, w = 1200, h?: number) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=75&w=${w}${h ? `&h=${h}` : ''}`;

export const img = {
  logo: '/images/logo-e1772010222317.png',
  heroVideo: VIDEO_LOCAL ? '/video/hero.m4v' : 'https://d216ujrdi95jbi.cloudfront.net/Travis+Mckay+(1).m4v',
  heroPoster: live('2026/02/2150433205-e1772008394103.jpg'),

  // Shutterstock (licensed, standard licence)
  athlete: ss('athlete'),         // parallax "Don't Let Pain Control Your Life"
  ctaBig: ss('cta'),       // final "Start Your Journey" photo
  aboutHero: ss('about-hero'),    // About Practice page hero
  doctorHero: ss('doctor-hero'),  // doctor profile page hero
  svc: {
    back: ss('back'),
    neck: ss('neck'),
    sciatica: ss('sciatica'),
    disc: ss('disc'),
    headache: ss('headache'),
    car: ss('car'),
  },
  blog: [
    live('2026/11/Winner-Logo-2026.png'),
    ss('blog-1'),
    ss('blog-2'),
    ss('blog-3'),
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

/** Photos for service pages, three per service: hero, 'is it right for you', recovery. */
export const servicePhotos = {
  'back-pain': [ss('back-pain-1'), ss('back-pain-2'), ss('back-pain-3')],
};
