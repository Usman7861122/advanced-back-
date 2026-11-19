import { useEffect, useState } from 'react';
import { useScroll, useSpring, useReducedMotion } from 'framer-motion';

/**
 * A human spine (side view) fixed on the right edge.
 * 7 cervical + 12 thoracic + 5 lumbar vertebrae, then the sacrum.
 * Vertebrae light up from the neck down as you scroll the page.
 */
const REGIONS = [
  { n: 7, w: 9, h: 7.5, gap: 3.2, proc: 6, ang: 12 },   // cervical: small, short spikes
  { n: 12, w: 12, h: 9.5, gap: 3, proc: 11, ang: 34 },  // thoracic: longer spikes pointing down
  { n: 5, w: 17, h: 13, gap: 3.4, proc: 8, ang: 3 },    // lumbar: biggest, blunt spikes
];
const r2 = (n: number) => Number(n.toFixed(2));

const ITEMS: { y: number; w: number; h: number; proc: number; ang: number }[] = [];
let yy = 8;
REGIONS.forEach((r) => {
  for (let k = 0; k < r.n; k++) {
    const bulge = r.w > 10 ? Math.sin((k / r.n) * Math.PI) * 1.5 : 0;
    ITEMS.push({ y: r2(yy), w: r2(r.w + bulge), h: r.h, proc: r.proc, ang: r.ang });
    yy += r.h + r.gap;
  }
});
const SPINE_END = r2(yy);
const H = r2(SPINE_END + 46);
// natural S-curve: neck curves forward, upper back backward, lower back forward again
const cx = (y: number) => r2(34 + 5 * Math.sin(Math.PI * 3 * (y / SPINE_END) + Math.PI));

function Vertebra({ v }: { v: (typeof ITEMS)[number] }) {
  const xc = cx(v.y + v.h / 2);
  const xr = r2(xc + v.w / 2);
  const rad = (v.ang * Math.PI) / 180;
  const tipX = r2(xr + 2.5 + v.proc * Math.cos(rad));
  const tipY = r2(v.y + v.h * 0.2 + v.proc * Math.sin(rad));
  return (
    <>
      <rect x={r2(xc - v.w / 2)} y={v.y} width={v.w} height={v.h} rx={2.6} />
      <rect x={r2(xr - 0.5)} y={r2(v.y + v.h * 0.15)} width={3.5} height={r2(v.h * 0.55)} rx={1} />
      <polygon points={`${r2(xr + 2.5)},${r2(v.y + v.h * 0.12)} ${tipX},${tipY} ${r2(xr + 2.5)},${r2(v.y + v.h * 0.62)}`} strokeLinejoin="round" />
    </>
  );
}

function Sacrum() {
  const x = cx(SPINE_END * 0.99);
  const y = SPINE_END;
  const d = `M${x - 10},${y + 1} Q${x - 11},${y + 9} ${x - 7},${y + 22} L${x - 1},${y + 38} Q${x + 1},${y + 42} ${x + 3},${y + 38} L${x + 7},${y + 21} Q${x + 11},${y + 9} ${x + 10},${y + 1} Z`;
  return (
    <>
      <path d={d} strokeLinejoin="round" />
      <path d={`M${x + 8},${y + 12} q9,5 8,14 q-1,5 -5,7`} fill="none" strokeWidth={3.2} strokeLinecap="round" />
    </>
  );
}

export default function SpineProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  const [p, setP] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => smooth.on('change', setP), [smooth]);

  // show only after the hero (1st section) is mostly scrolled past
  useEffect(() => {
    const hero = document.querySelector('main section, body section') as HTMLElement | null;
    const check = () => {
      const h = hero ? hero.offsetHeight : window.innerHeight;
      setShow(window.scrollY > h * 0.7);
    };
    check();
    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check);
    return () => { window.removeEventListener('scroll', check); window.removeEventListener('resize', check); };
  }, []);
  if (reduce) return null;

  const pos = p * (H - 10);
  let active = -1;
  ITEMS.forEach((v, i) => { if (pos >= v.y + v.h / 2) active = i; });
  const sacrumOn = pos >= SPINE_END + 8;

  return (
    <div
      className="pointer-events-none fixed right-3 top-1/2 z-40 hidden transition-all duration-700 ease-out xl:block"
      style={{ opacity: show ? 0.5 : 0, transform: `translateY(-50%) translateX(${show ? 0 : 16}px)` }}
      aria-hidden
    >
      <svg viewBox={`0 0 70 ${H}`} className="h-[min(66vh,520px)] w-auto overflow-visible">
        <defs>
          <linearGradient id="spineGrad" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2={H}>
            <stop offset="0" stopColor="#20b1e0" />
            <stop offset="1" stopColor="#7acf45" />
          </linearGradient>
          <filter id="spineGlow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="1.6" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* resting bones (always visible, soft grey with a thin outline so they read on light and dark sections) */}
        <g fill="#94a3b8" fillOpacity={0.22} stroke="#64748b" strokeOpacity={0.4} strokeWidth={0.6}>
          {ITEMS.map((v, i) => <Vertebra key={i} v={v} />)}
          <Sacrum />
        </g>

        {/* lit bones */}
        {ITEMS.map((v, i) => (
          <g
            key={i}
            fill="url(#spineGrad)"
            stroke="url(#spineGrad)"
            strokeWidth={0.4}
            filter={i === active ? 'url(#spineGlow)' : undefined}
            style={{ opacity: pos >= v.y + v.h / 2 ? 1 : 0, transition: 'opacity .35s ease' }}
          >
            <Vertebra v={v} />
          </g>
        ))}
        <g fill="url(#spineGrad)" stroke="url(#spineGrad)" strokeWidth={0.4} style={{ opacity: sacrumOn ? 1 : 0, transition: 'opacity .35s ease' }}>
          <Sacrum />
        </g>
      </svg>
    </div>
  );
}
