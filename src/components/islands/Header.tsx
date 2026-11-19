import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { nav, site, type NavItem } from '../../data/site';
import { img } from '../../data/images';

const Chevron = ({ open }: { open?: boolean }) => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={`transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const ICONS: Record<string, string> = {
  'Frequently Asked Questions': 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20ZM9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3M12 17h.01',
  'How Can We Help You': 'M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8Z',
  Insurance: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z',
  'First Visit': 'M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z',
  'Second and Regular Visits': 'M21 12a9 9 0 1 1-3-6.7L21 8M21 3v5h-5',
  'Patient Center': 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8',
  'New Patient Paperwork': 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6ZM14 2v6h6M8 13h8M8 17h8',
  'Special Offer': 'M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7ZM12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7Z',
  Blog: 'M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5Z',
  Testimonials: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10Z',
  'Back Pain': 'M12 2v20M8 5h8M8 9h8M8 13h8M8 17h8',
  'Car Accident': 'M5 17h14M3 13l2-6h14l2 6v4H3v-4ZM7 17v2M17 17v2',
  'Headaches & Migraines': 'M12 2a8 8 0 0 0-8 8c0 3 1.5 5 3 6.5V21h8v-4.5c1.5-1.5 3-3.5 3-6.5a8 8 0 0 0-6-8Z',
  'Neck Pain': 'M12 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM6 21v-3a6 6 0 0 1 12 0v3',
  Sciatica: 'M13 2 4 14h7l-1 8 9-12h-7l1-8Z',
  'Herniated Disc': 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20ZM12 8v8M8 12h8',
  'Spinal Decompression Therapy': 'M12 3v18M7 8l5-5 5 5M7 16l5 5 5-5',
  'Sports Injury': 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20ZM2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20',
  'Shockwave Therapy': 'M2 12h3l3-8 4 16 3-8h7',
  'Arthritis Pain': 'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM12 2v3M12 19v3M2 12h3M19 12h3',
  'Pinched Nerve': 'M4 12h4l2-5 4 10 2-5h4',
  'Work Injuries': 'M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2ZM16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16',
  'Chiropractic Care': 'M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8Z',
  Careers: 'M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2ZM16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16',
};
const BLURBS: Record<string, string> = {
  'Frequently Asked Questions': 'Quick answers before your visit',
  'How Can We Help You': 'Find the right care for your pain',
  Insurance: 'Plans we accept',
  'First Visit': 'What to expect on day one',
  'Second and Regular Visits': 'How follow-up care works',
  'Patient Center': 'Policies and our promise',
  'New Patient Paperwork': 'Fill out forms ahead of time',
  'Special Offer': 'Savings for new patients',
  Blog: 'Tips for a healthier spine',
  Testimonials: 'Stories from our patients',
  Careers: 'Join our Newark team',
  'Back Pain': 'Relief for upper and lower back',
  'Car Accident': 'Recover after a crash',
  'Headaches & Migraines': 'Ease tension at the source',
  'Neck Pain': 'Restore comfortable motion',
  Sciatica: 'Calm leg and nerve pain',
  'Herniated Disc': 'Non-surgical disc care',
  'Spinal Decompression Therapy': 'Gentle traction',
  'Sports Injury': 'Get back in the game',
  'Shockwave Therapy': 'Speed up tissue healing',
  'Arthritis Pain': 'Move with less stiffness',
  'Pinched Nerve': 'Free the trapped nerve',
  'Work Injuries': 'Safe recovery from job injuries',
  'Chiropractic Care': 'Whole-body spinal care',
};
const docImg = (name: string) => {
  const d = img.doctors as Record<string, string>;
  const k = ['travis', 'richard', 'meers', 'marini'].find((x) => name.toLowerCase().includes(x));
  return k ? d[k] : '';
};

const Ico = ({ d }: { d: string }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={d} /></svg>
);

function CardDrop({ item }: { item: NavItem }) {
  const kids = item.children!;
  const wide = kids.length > 4;
  const single = kids.length === 1;
  const services = item.label === 'Services';
  const lastSpans = !single && !services && kids.filter((k) => k.label !== 'Meet the Doctors').length % 3 === 1;
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.24 }}
      className="absolute inset-x-0 top-full z-50 px-5 before:absolute before:inset-x-0 before:-top-8 before:h-8"
    >
      <div className={`mx-auto overflow-hidden rounded-b-3xl border border-t-0 border-slate-200 bg-white p-4 shadow-2xl shadow-abyss/20 ${single ? 'max-w-sm' : services ? 'max-w-6xl' : wide ? 'max-w-4xl' : 'max-w-3xl'}`}>
        <div className={`grid auto-rows-fr gap-3 ${single ? '' : services ? 'sm:grid-cols-4' : 'sm:grid-cols-3'}`}>
          {kids.map((c, idx) => {
            const isDoctors = c.label === 'Meet the Doctors';
            return (
              <div
                key={c.label}
                className={`group flex h-full flex-col ${c.children ? '' : 'justify-center'} rounded-2xl border border-slate-200 bg-white ${services ? 'p-3.5' : 'p-4'} transition duration-300 hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-lg hover:shadow-brand/10 ${isDoctors || (lastSpans && idx === kids.length - 1) ? 'sm:col-span-3' : ''}`}
              >
                <a href={c.href} className="flex items-start gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-mist text-brand transition group-hover:bg-brand group-hover:text-white">
                    <Ico d={isDoctors ? 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z' : ICONS[c.label] ?? ICONS['Blog']} />
                  </span>
                  <span>
                    <span className="block text-[15px] font-semibold leading-tight text-ink group-hover:text-brand">{c.label}</span>
                    <span className="mt-0.5 block text-[12.5px] text-slate-500">{isDoctors ? 'Chiropractors who care about your recovery' : BLURBS[c.label]}</span>
                  </span>
                </a>

                {isDoctors && c.children && (
                  <ul className="mt-3 grid gap-2 sm:grid-cols-4">
                    {c.children.map((l) => (
                      <li key={l.label}>
                        <a href={l.href} className="flex items-center gap-2.5 rounded-xl bg-mist/70 p-2 transition hover:bg-mist hover:text-brand">
                          <img src={docImg(l.label)} alt="" aria-hidden="true" className="h-10 w-10 shrink-0 rounded-lg object-cover object-top" loading="lazy" />
                          <span className="text-[13px] font-medium leading-tight text-ink">{l.label}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                )}

                {!isDoctors && c.children && (
                  <div className="mt-auto flex flex-wrap gap-1.5 pt-3">
                    {c.children.map((l) => (
                      <a key={l.label} href={l.href} className="rounded-full border border-slate-200 bg-mist/70 px-2.5 py-1 text-[12px] font-medium text-slate-700 transition hover:border-brand/40 hover:bg-white hover:text-brand">{l.label}</a>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
          {services && (
            <div className="relative isolate flex flex-col justify-between gap-2 overflow-hidden rounded-2xl bg-abyss p-4 text-white sm:col-span-3 sm:flex-row sm:items-center">
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand/35 to-transparent" />
              <div>
                <p className="font-display text-lg font-semibold leading-tight">Not sure which service you need?</p>
                <p className="text-[12.5px] text-white/70">Call {site.phone} or book a visit. We will point you to the right care.</p>
              </div>
              <a href={site.appointment} className="btn-appt on-dark shrink-0 !px-4 !py-2.5 text-[13px]"><span>Request Appointment</span></a>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function Dropdown({ item }: { item: NavItem }) {
  return <CardDrop item={item} />;
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [logoRun, setLogoRun] = useState(0);
  const [openKey, setOpenKey] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const [mobileSub, setMobileSub] = useState<string | null>(null);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobile ? 'hidden' : '';
  }, [mobile]);

  return (
    <header className="sticky top-0 z-[60]">
      {/* slim top bar */}
      <div className={`overflow-hidden bg-abyss text-white transition-[max-height,opacity] duration-500 ${scrolled ? 'max-h-0 opacity-0' : 'max-h-12 opacity-100'}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-2 text-[13px]">
          <a href={site.mapHref} target="_blank" rel="noreferrer" className="flex items-center gap-2 opacity-90 hover:opacity-100">
            <span className="h-1.5 w-1.5 rounded-full bg-leaf" /> <span className="font-medium text-white">{site.location}</span> <span className="text-white/55">{site.street} {site.cityLine}</span>
          </a>
          <span className="hidden font-slab tracking-wider text-sky sm:block">Serving Newark, DE since 1986</span>
        </div>
      </div>

      {/* main bar */}
      <div className={`border-b bg-white/95 backdrop-blur-xl transition-shadow duration-300 ${scrolled ? 'border-slate-200 shadow-lg shadow-abyss/10' : 'border-transparent'}`}>
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-1.5" aria-label="Main">
          <a href="/" className="shrink-0" aria-label={`${site.name} home`} onMouseEnter={() => setLogoRun((n) => n + 1)}>
            <span key={logoRun} className="logo-anim relative block mix-blend-multiply">
              <img src={img.logo} alt={site.name} className={`logo-fan w-auto transition-[height] duration-300 ${scrolled ? 'h-14' : 'h-[5.25rem]'}`} />
              <img src={img.logo} alt="" aria-hidden="true" className="logo-text absolute inset-0 h-full w-full" />
            </span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <li
                key={item.label}
                className=""
                onMouseEnter={() => item.children && setOpenKey(item.label)}
                onMouseLeave={() => setOpenKey(null)}
                onFocus={() => item.children && setOpenKey(item.label)}
                onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpenKey(null); }}
              >
                <a href={item.href} className="group relative flex items-center gap-1.5 whitespace-nowrap px-3 py-3 text-[15.5px] xl:px-3.5 font-semibold text-ink transition-colors hover:text-brand">
                  {item.label}
                  {item.children && <Chevron open={openKey === item.label} />}
                  <span className="absolute inset-x-3.5 bottom-1.5 h-0.5 origin-left scale-x-0 rounded bg-gradient-to-r from-brand to-leaf transition-transform duration-300 group-hover:scale-x-100" />
                </a>
                <AnimatePresence>{item.children && openKey === item.label && <Dropdown item={item} />}</AnimatePresence>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a href={site.phoneHref} className="hidden items-center gap-2 whitespace-nowrap text-[15px] font-bold text-ink hover:text-brand 2xl:flex">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" /></svg>
              {site.phone}
            </a>
            <a href={site.appointment} className="btn-appt on-light hidden !px-5 !py-3 text-sm sm:inline-flex"><span>Request Appointment</span></a>
            <button
              className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 lg:hidden"
              aria-label={mobile ? 'Close menu' : 'Open menu'}
              aria-expanded={mobile}
              onClick={() => setMobile((m) => !m)}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                {mobile ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>
          </div>
        </nav>
      </div>

      {/* mobile drawer */}
      <AnimatePresence>
        {mobile && (
          <motion.div
            initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
            className="absolute inset-x-0 top-full max-h-[calc(100svh-4.5rem)] overflow-y-auto border-t border-slate-200 bg-white px-5 pb-10 pt-4 shadow-2xl lg:hidden"
          >
            <ul className="space-y-1">
              {nav.map((item) => (
                <li key={item.label} className="border-b border-slate-100">
                  <div className="flex items-center justify-between">
                    <a href={item.href} className="flex-1 py-3.5 text-lg font-semibold">{item.label}</a>
                    {item.children && (
                      <button className="grid h-10 w-10 place-items-center" aria-label={`Show ${item.label} links`} onClick={() => setMobileSub(mobileSub === item.label ? null : item.label)}>
                        <Chevron open={mobileSub === item.label} />
                      </button>
                    )}
                  </div>
                  <AnimatePresence>
                    {item.children && mobileSub === item.label && (
                      <motion.ul initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden pb-2 pl-3">
                        {item.children.flatMap((c) => [c, ...(c.children ?? [])]).map((c) => (
                          <li key={c.label}><a href={c.href} className="block py-2 text-[15px] text-slate-600">{c.label}</a></li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
              ))}
            </ul>
            <div className="mt-6 grid gap-3">
              <a href={site.appointment} className="btn-appt on-light"><span>Request Appointment</span></a>
              <a href={site.phoneHref} className="btn btn-ghost justify-center">Call {site.phone}</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
