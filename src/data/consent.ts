/**
 * Cookie banner settings. Edit this file to change the banner without touching code.
 *
 * - `active: false` hides a category from the banner (use it for anything the site does not run).
 * - To gate a script, add `type="text/plain" data-consent="analytics"` to its <script> tag.
 *   It runs only after the visitor allows that category.
 * - Bump `version` when you add a new category, so everyone is asked again.
 */
export type ConsentCategory = {
  id: 'necessary' | 'functional' | 'analytics' | 'marketing';
  label: string;
  text: string;
  locked?: boolean;
  active: boolean;
};

export const consent = {
  version: 1,
  days: 180, // how long a choice is remembered
  title: 'Your privacy choices',
  text: 'We use cookies to keep this site working and to load our chat helper. You choose what else is allowed.',
  policyHref: '/cookie-policy/',
  buttons: { accept: 'Accept all', reject: 'Reject all', customize: 'Customize', save: 'Save choices' },
  categories: [
    { id: 'necessary', label: 'Necessary', text: 'Keep the site safe and remember your cookie choice. Always on.', locked: true, active: true },
    { id: 'functional', label: 'Chat and helpers', text: 'Loads our chat window so you can message the front desk.', active: true },
    { id: 'analytics', label: 'Analytics', text: 'Shows us which pages are used, so we can improve them.', active: false },
    { id: 'marketing', label: 'Marketing', text: 'Lets us measure ads and show you relevant offers.', active: false },
  ] as ConsentCategory[],
};
