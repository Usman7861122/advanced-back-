import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { site } from '../../data/site';

// The last word of the headline changes, each in its own typeface.
const words = [
  { t: 'Works.', font: '"Cormorant", serif', weight: 600, style: 'italic', scale: 1 },
  { t: 'Heals.', font: '"Playfair Display", serif', weight: 500, style: 'italic', scale: 0.92 },
  { t: 'Moves You.', font: '"Playfair Display", serif', weight: 600, style: 'normal', scale: 0.92 },
  { t: 'Lasts.', font: '"Fraunces", serif', weight: 600, style: 'italic', scale: 0.92 },
];

export default function AnimatedHero() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setI((n) => (n + 1) % words.length), 3200);
    return () => clearInterval(id);
  }, [reduce]);

  const w = words[i];

  return (
    <div className="relative z-10 mx-auto flex min-h-[calc(100svh-7rem)] max-w-7xl flex-col justify-center px-5 pb-36 pt-20 text-white">
      <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="eyebrow !text-sky">
        Chiropractors in Newark, DE
      </motion.p>

      <h1 className="mt-5 max-w-6xl font-display text-[clamp(2.5rem,5.4vw,5.2rem)] font-semibold leading-[0.95] tracking-tight">
        <motion.span initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }} className="block">
          Advanced Chiropractic Care That
        </motion.span>
        <span className="relative mt-2 block h-[1.35em] overflow-hidden text-sky" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.span
              key={w.t}
              className="absolute left-0 top-0 whitespace-nowrap"
              style={{ fontFamily: w.font, fontWeight: w.weight, fontStyle: w.style, fontSize: `${w.scale}em` }}
              initial={{ y: '90%', opacity: 0, filter: 'blur(8px)' }}
              animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
              exit={{ y: '-90%', opacity: 0, filter: 'blur(8px)' }}
              transition={{ duration: 0.65, ease: [0.2, 0.7, 0.2, 1] }}
            >
              {w.t}
            </motion.span>
          </AnimatePresence>
        </span>
      </h1>

      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55, duration: 0.8 }} className="mt-7 max-w-xl text-lg leading-relaxed text-white/85">
        Personalized spinal care that targets the root cause of your pain, not just the symptoms.
      </motion.p>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75, duration: 0.8 }} className="mt-9 flex flex-wrap gap-4">
        <a href={site.appointment} className="btn-appt on-dark"><span>Request Appointment</span><span className="arrow" aria-hidden>→</span></a>
        <a href={site.phoneHref} className="btn btn-ghost text-white">Call {site.phone}</a>
      </motion.div>
    </div>
  );
}
