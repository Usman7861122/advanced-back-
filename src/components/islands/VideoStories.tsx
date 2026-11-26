import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type Video = { id: string; title: string };
const thumb = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

const Play = ({ big }: { big?: boolean }) => (
  <span className={`grid place-items-center rounded-full bg-white text-abyss shadow-xl transition group-hover:scale-110 ${big ? 'h-20 w-20' : 'h-10 w-10'}`}>
    <svg width={big ? 28 : 16} height={big ? 28 : 16} viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M8 5v14l11-7z" /></svg>
  </span>
);

export default function VideoStories({ videos }: { videos: Video[] }) {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const v = videos[active];

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
      {/* main player */}
      <div className="reveal">
        <div className="relative aspect-video overflow-hidden rounded-[1.25rem] bg-black shadow-2xl shadow-black/40">
          <AnimatePresence mode="wait">
            {playing ? (
              <motion.iframe
                key={`p-${v.id}`}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${v.id}?autoplay=1&rel=0`}
                title={v.title}
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
              />
            ) : (
              <motion.button
                key={`t-${v.id}`}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={() => setPlaying(true)}
                className="group absolute inset-0"
                aria-label={`Play video: ${v.title}`}
              >
                <img src={thumb(v.id)} alt="" width="480" height="360" className="h-full w-full scale-105 object-cover transition duration-700 group-hover:scale-110" />
                <span className="absolute inset-0 bg-gradient-to-t from-abyss/80 to-transparent" />
                <span className="absolute inset-0 grid place-items-center"><Play big /></span>
                <span className="absolute bottom-5 left-6 right-6 text-left font-display text-3xl font-semibold text-white sm:text-4xl">{v.title}</span>
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* square thumbnails */}
      <div className="grid grid-cols-4 gap-3 self-start sm:grid-cols-4 lg:grid-cols-3">
        {videos.map((vid, i) => (
          <button
            key={vid.id}
            onClick={() => { setActive(i); setPlaying(false); }}
            className={`reveal group relative aspect-square overflow-hidden rounded-2xl ring-2 transition ${i === active ? 'ring-sky' : 'ring-transparent hover:ring-white/40'}`}
            style={{ ['--d' as string]: `${(i % 4) * 70}ms` }}
            aria-label={`Select video: ${vid.title}`}
            aria-pressed={i === active}
          >
            <img src={thumb(vid.id)} alt="" width="480" height="360" className="h-full w-full object-cover transition duration-500 group-hover:scale-110" loading="lazy" />
            <span className={`absolute inset-0 transition ${i === active ? 'bg-sky/20' : 'bg-abyss/40 group-hover:bg-abyss/10'}`} />
            <span className="absolute inset-0 grid place-items-center"><Play /></span>
          </button>
        ))}
      </div>
    </div>
  );
}
