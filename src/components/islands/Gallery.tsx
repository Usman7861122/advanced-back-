import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type Props = { photos: string[]; location: string; street: string; cityLine: string; mapHref: string };

export default function Gallery({ photos, location, street, cityLine, mapHref }: Props) {
  const [open, setOpen] = useState<number | null>(null);
  const go = useCallback((d: number) => setOpen((i) => (i === null ? i : (i + d + photos.length) % photos.length)), [photos.length]);

  useEffect(() => {
    if (open === null) return;
    const k = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(null);
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    };
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [open, go]);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="reveal flex aspect-square flex-col justify-between rounded-[1.25rem] bg-abyss p-6 text-white">
          <p className="eyebrow !text-leaf">Our office</p>
          <h2 className="font-display text-4xl font-semibold leading-none sm:text-5xl">Come see where you will heal</h2>
        </div>

        {photos.map((src, i) => (
          <motion.button
            key={src}
            className="reveal group relative aspect-square overflow-hidden rounded-[1.25rem]"
            style={{ ['--d' as string]: `${(i % 4) * 80}ms` }}
            onClick={() => setOpen(i)}
            whileTap={{ scale: 0.97 }}
            aria-label={`Open office photo ${i + 1}`}
          >
            <img src={src} alt={`Advanced Back & Neck Pain Center office, photo ${i + 1}`} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" loading="lazy" />
            <span className="absolute inset-0 bg-abyss/0 transition group-hover:bg-abyss/30" />
            <span className="absolute bottom-3 right-3 grid h-10 w-10 translate-y-3 place-items-center rounded-full bg-white text-abyss opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" /></svg>
            </span>
          </motion.button>
        ))}

        <a href={mapHref} target="_blank" rel="noreferrer" className="reveal group flex aspect-square flex-col justify-between rounded-[1.25rem] bg-gradient-to-br from-brand to-sky p-6 text-white transition hover:-translate-y-1.5 hover:shadow-2xl">
          <span className="eyebrow !text-white/80">Visit us</span>
          <span>
            <span className="block text-2xl font-medium">{location}</span>
            <span className="mt-1 block text-[17px] leading-relaxed text-white/75">{street}<br />{cityLine}</span>
            <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold">Get directions <span className="transition group-hover:translate-x-1">→</span></span>
          </span>
        </a>
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            className="fixed inset-0 z-[90] grid place-items-center bg-abyss/92 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpen(null)} role="dialog" aria-modal="true" aria-label="Office photo viewer"
          >
            <motion.img
              key={open}
              src={photos[open]}
              alt={`Office photo ${open + 1} of ${photos.length}`}
              className="max-h-[86vh] max-w-full rounded-2xl object-contain shadow-2xl"
              initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />
            <button className="absolute right-5 top-5 grid h-12 w-12 place-items-center rounded-full bg-white text-abyss" onClick={() => setOpen(null)} aria-label="Close">✕</button>
            <button className="absolute left-4 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-abyss" onClick={(e) => { e.stopPropagation(); go(-1); }} aria-label="Previous photo">←</button>
            <button className="absolute right-4 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-abyss" onClick={(e) => { e.stopPropagation(); go(1); }} aria-label="Next photo">→</button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
