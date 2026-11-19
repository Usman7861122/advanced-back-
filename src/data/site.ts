export const site = {
  name: 'Advanced Back & Neck Pain Center',
  short: 'Advanced Back',
  description:
    'Expert chiropractic adjustments, motor vehicle accident recovery, non-surgical spinal decompression, and targeted sciatica or disc herniation relief in Newark, DE.',
  phone: '302-368-1300',
  phoneHref: 'tel:302-368-1300',
  fax: '302-368-1695',
  address: '54 Omega Drive, Suite F, Newark, DE 19713',
  location: 'Newark',
  street: '54 Omega Drive, Suite F,',
  cityLine: 'Newark, DE 19713',
  mapHref: 'https://www.google.com/maps/search/?api=1&query=54+Omega+Drive+Suite+F+Newark+DE+19713',
  appointment: '/appointment/',
  // Set this to a form-handling URL (LeadConnector webhook, Formspree, etc.) to turn on the contact form.
  formEndpoint: '',
  hours: [
    { day: 'Monday', time: '10:00 am – 12:00 pm, 3:00 pm – 6:00 pm' },
    { day: 'Tuesday', time: '3:00 pm – 6:00 pm' },
    { day: 'Wednesday', time: '10:00 am – 12:00 pm, 3:00 pm – 6:00 pm' },
    { day: 'Thursday', time: '10:00 am – 12:00 pm, 3:00 pm – 6:00 pm' },
    { day: 'Friday', time: 'Closed' },
    { day: 'Saturday', time: '9:00 am – 11:00 am (by appointment only)' },
    { day: 'Sunday', time: 'Closed' },
  ],
};

export type NavLeaf = { label: string; href: string };
export type NavChild = { label: string; href?: string; children?: NavLeaf[] };
export type NavItem = { label: string; href: string; children?: NavChild[] };

export const nav: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About Practice', href: '/about-practice/',
    children: [
      {
        label: 'Meet the Doctors', href: '/about-practice/meet-the-doctors/',
        children: [
          { label: 'Dr. Travis McKay', href: '/about-practice/meet-the-doctors/dr-travis-mckay/' },
          { label: 'Dr. Richard McKay', href: '/about-practice/meet-the-doctors/dr-richard-mckay/' },
          { label: 'Dr. Daniel Meers', href: '/about-practice/meet-the-doctors/dr-daniel-meers/' },
          { label: 'Dr. Nicholas “Nick” Marini', href: '/about-practice/meet-the-doctors/dr-nicholas-nick-marini/' },
        ],
      },
      { label: 'Frequently Asked Questions', href: '/about-practice/frequently-asked-questions/' },
      { label: 'How Can We Help You', href: '/about-practice/how-can-we-help-you/' },
      { label: 'Insurance', href: '/insurance/' },
    ],
  },
  {
    label: 'Services', href: '/services/',
    children: [
      { label: 'Back Pain', href: '/services/back-pain-chiropractor-in-newark-de/' },
      { label: 'Car Accident', href: '/services/car-accident-chiropractor/' },
      { label: 'Headaches & Migraines', href: '/services/chiropractor-for-headaches-migraines-in-newark-de/' },
      { label: 'Neck Pain', href: '/services/chiropractor-for-neck-pain/' },
      { label: 'Sciatica', href: '/services/chiropractor-for-sciatica-in-newark-de/' },
      { label: 'Herniated Disc', href: '/services/herniated-disc-chiropractor-in-newark-de/' },
      { label: 'Spinal Decompression Therapy', href: '/services/spinal-decompression-therapy-in-newark-de/' },
      { label: 'Sports Injury', href: '/services/sports-injury-chiropractor/' },
      { label: 'Shockwave Therapy', href: '/services/shockwave-therapy-in-newark-de/' },
      { label: 'Arthritis Pain', href: '/services/arthritis-pain-chiropractor-in-newark-de/' },
      { label: 'Pinched Nerve', href: '/services/pinched-nerve-chiropractor-in-newark-de/' },
      { label: 'Work Injuries', href: '/services/work-injury-chiropractor-in-newark-de/' },
      { label: 'Chiropractic Care', href: '/services/chiropractic-care-in-newark-de/' },
    ],
  },
  {
    label: 'Resources', href: '/resources/',
    children: [
      { label: 'First Visit', href: '/resources/first-visit/' },
      { label: 'Second and Regular Visits', href: '/resources/second-and-regular-visits/' },
      {
        label: 'Patient Center', href: '/resources/patient-center/',
        children: [
          { label: 'Our Guarantee', href: '/resources/patient-center/our-guarantee/' },
          { label: 'Financial Policy', href: '/resources/patient-center/financial-policy/' },
        ],
      },
      { label: 'New Patient Paperwork', href: '/resources/new-patient-paperwork/' },
      { label: 'Special Offer', href: '/resources/special-offer/' },
      { label: 'Blog', href: '/blog/' },
      {
        label: 'Testimonials', href: '/testimonials/',
        children: [{ label: 'Video Testimonials', href: '/testimonials/video-testimonials/' }],
      },
    ],
  },
  { label: 'Specials', href: '/specials/', children: [{ label: 'Careers', href: '/careers/' }] },
  { label: 'Contact', href: '/contact-us/' },
];
