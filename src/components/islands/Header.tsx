import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { nav, site, type NavItem } from '../../data/site';
import { img } from '../../data/images';

const Chevron = ({ open }: { open?: boolean }) => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={`transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const GROUPS: { title: string; blurb: string; items: string[] }[] = [
  { title: 'Spine & Joint Pain', blurb: 'Find the cause, not just the symptom', items: ['Back Pain', 'Neck Pain', 'Sciatica', 'Herniated Disc', 'Pinched Nerve', 'Arthritis Pain', 'Headaches & Migraines'] },
  { title: 'Injury Recovery', blurb: 'Get moving again, safely', items: ['Car Accident', 'Work Injuries', 'Sports Injury'] },
  { title: 'Therapies & Care', blurb: 'Gentle, non-surgical options', items: ['Chiropractic Care', 'Spinal Decompression Therapy', 'Shockwave Therapy'] },
];

function Mega({ item }: { item: NavItem }) {
  const href = (l: string) => item.children!.find((c) => c.label === l)?.href ?? item.href;
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.24 }}
      className="absolute inset-x-0 top-full z-50 px-5 before:absolute before:inset-x-0 before:-top-8 before:h-8"
    >
      <div className="mx-auto grid max-w-6xl gap-0 overflow-hidden rounded-b-3xl border border-t-0 border-slate-200 bg-white shadow-2xl shadow-abyss/20 lg:grid-cols-[17rem_1fr]">
        {/* featured */}
        <div className="relative isolate overflow-hidden bg-abyss p-5 text-white">
          <img src={img.svc.back} alt="" aria-hidden="true" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-35" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-abyss via-abyss/70 to-abyss/20" />
          <p className="eyebrow !text-sky">Our services</p>
          <h3 className="mt-2 font-display text-2xl font-semibold leading-tight">Care built around your pain</h3>
          <p className="mt-2 text-[13px] leading-relaxed text-white/75">Exams, adjustments and decompression, all under one roof in Newark.</p>
          <a href={site.appointment} className="btn-appt mt-4 !px-4 !py-2.5 text-[13px]"><span>Request Appointment</span></a>
          <a href={site.phoneHref} className="mt-3 block text-[13px] text-white/80 hover:text-white">or call {site.phone}</a>
        </div>
        {/* groups */}
        <div className="grid gap-x-2 p-5 sm:grid-cols-3">
          {GROUPS.map((g) => (
            <div key={g.title}>
              <p className="px-3 font-display text-lg font-semibold text-ink">{g.title}</p>
              <p className="mb-1.5 px-3 text-[12px] text-slate-500">{g.blurb}</p>
              <ul>
                {g.items.map((l) => (
                  <li key={l}>
                    <a href={href(l)} className="group flex items-center gap-2 rounded-lg px-3 py-1.5 text-[14px] font-medium text-ink transition hover:bg-mist hover:text-brand">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300 transition group-hover:scale-125 group-hover:bg-leaf" />
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="col-span-full mt-3 flex items-center justify-between border-t border-slate-200 px-3 pt-3 text-[13px]">
            <a href={item.href} className="font-semibold text-brand hover:underline">View all services →</a>
            <span className="text-slate-500">Most major insurance plans accepted</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Dropdown({ item }: { item: NavItem }) {
  if (item.label === 'Services') return <Mega item={item} />;
  return (
    <motion.ul
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.22 }}
      className="absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-3"
    >
      <div className="max-h-[calc(100vh-9rem)] overflow-y-auto rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl shadow-abyss/15">
        {item.children!.map((c) => (
          <li key={c.label}>
            {c.children ? (
              <div className="px-3 py-2">
                <a href={c.href} className="block rounded-lg px-2 py-1.5 text-[15px] font-semibold hover:bg-mist hover:text-brand">{c.label}</a>
                <ul className="ml-3 border-l border-slate-200 pl-2">
                  {c.children.map((l) => (
                    <li key={l.label}><a href={l.href} className="block rounded-lg px-2 py-1.5 text-[14px] text-slate-600 hover:bg-mist hover:text-brand">{l.label}</a></li>
                  ))}
                </ul>
              </div>
            ) : (
              <a href={c.href} className="block rounded-xl px-4 py-2.5 text-[15px] font-medium text-ink transition hover:bg-mist hover:pl-5 hover:text-brand">{c.label}</a>
            )}
          </li>
        ))}
      </div>
    </motion.ul>
  );
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
                className={item.label === 'Services' ? '' : 'relative'}
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
