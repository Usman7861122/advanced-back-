import { useState, type FormEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { site } from '../../data/site';

type Status = 'idle' | 'sending' | 'sent' | 'error' | 'offline';

const field =
  'peer w-full rounded-xl border border-slate-200 bg-white px-4 pb-2.5 pt-6 text-[15px] text-ink outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/15';
const label =
  'pointer-events-none absolute left-4 top-4 origin-left text-[15px] text-slate-500 transition-all duration-200 peer-focus:top-2 peer-focus:scale-75 peer-focus:text-brand peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:scale-75';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    if (!site.formEndpoint) { setStatus('offline'); return; }
    setStatus('sending');
    try {
      const res = await fetch(site.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-4" aria-label="Contact form">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="relative">
          <input id="cf-name" name="name" required placeholder=" " autoComplete="name" className={field} />
          <label htmlFor="cf-name" className={label}>Name</label>
        </div>
        <div className="relative">
          <input id="cf-email" name="email" type="email" required placeholder=" " autoComplete="email" className={field} />
          <label htmlFor="cf-email" className={label}>Email</label>
        </div>
      </div>
      <div className="relative">
        <input id="cf-subject" name="subject" required placeholder=" " className={field} />
        <label htmlFor="cf-subject" className={label}>Subject</label>
      </div>
      <div className="relative">
        <textarea id="cf-message" name="message" required rows={5} placeholder=" " className={`${field} resize-none`} />
        <label htmlFor="cf-message" className={label}>Message</label>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" disabled={status === 'sending'} className="btn-appt on-light disabled:opacity-60">
          <span>{status === 'sending' ? 'Sending…' : 'Send message'}</span>
          <span className="arrow" aria-hidden="true">→</span>
        </button>
        <AnimatePresence mode="wait">
          {status === 'sent' && (
            <motion.p key="s" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-sm font-medium text-emerald-700" role="status">
              Thank you. We will reply as soon as we can.
            </motion.p>
          )}
          {(status === 'error' || status === 'offline') && (
            <motion.p key="e" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-sm font-medium text-slate-600" role="alert">
              {status === 'offline' ? 'Online messages are not switched on yet.' : 'Your message did not send.'} Please call{' '}
              <a href={site.phoneHref} className="font-semibold text-brand underline">{site.phone}</a>.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}
