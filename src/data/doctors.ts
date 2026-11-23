import { img } from './images';

export type Doctor = {
  slug: string;
  name: string;
  role: string;
  lede: string;
  description: string;
  portrait: string;
  portraitAlt: string;
  facts: { label: string; text: string }[];
  storyTitle: string;
  story: string[];
  approachTitle: string;
  approach: { t: string; d: string }[];
  backgroundTitle: string;
  background: string[];
  interests: string;
  publications: { title: string; source: string; url: string }[];
};

/** One entry per doctor. The page file only maps this data to sections. */
export const doctors: Doctor[] = [
  {
    slug: 'dr-travis-mckay',
    name: 'Dr. Travis McKay',
    role: 'Doctor of Chiropractic',
    lede: 'Raised in a chiropractic family, Dr. McKay helps Newark patients move the spine back toward its normal position with adjustments, exercise and traction.',
    description: 'Meet Dr. Travis McKay, Doctor of Chiropractic at Advanced Back & Neck Pain Center in Newark, DE. Read his story, his background and how he cares for patients.',
    portrait: img.doctors.travis,
    portraitAlt: 'Dr. Travis McKay, chiropractor at Advanced Back & Neck Pain Center in Newark, DE',
    facts: [
      { label: 'Degree', text: 'Doctor of Chiropractic, Life University, Atlanta. Graduated cum laude in March 2014.' },
      { label: 'Before chiropractic', text: 'Advanced Major in Biology and Business Administration, St. Francis Xavier University.' },
      { label: 'Roots', text: 'Grew up in Delaware and in a chiropractic family.' },
    ],
    storyTitle: 'My chiropractic story',
    story: [
      'I grew up in a chiropractic family, so getting adjusted has always been a way of life for me. I saw the benefits and the success stories in the patients my father treated for many years.',
      'I never really understood how chiropractic works until I went to chiropractic school. There I learned that the spine has a normal, best position. When the spine is in that position, the spinal cord and the nerves that branch from it can work as they should.',
      'When the spine moves away from that position, pressure and stress build on those tissues. Most of the time this shows up as neck pain, back pain or headaches. Our goal is to bring the spine back to its normal position, or as close to it as we can.',
      'I joined Advanced Back & Neck Pain Center to carry on my family’s tradition of treating patients well and with respect. I am more interested in learning about you and how we can help than in talking about myself, so please call us with any questions.',
    ],
    approachTitle: 'How I help your spine move back toward normal',
    approach: [
      { t: 'Adjusting', d: 'Hands-on adjustments to help the spine return toward its normal position.' },
      { t: 'Exercise', d: 'Exercises that support your spine between visits.' },
      { t: 'Traction', d: 'Traction to ease pressure on the tissues around the spine.' },
    ],
    backgroundTitle: 'My background',
    background: [
      'I was born in Davenport, Iowa, and moved to Delaware when I was very young. I went to St. Mark’s High School, then earned an Advanced Major in Biology and Business Administration at St. Francis Xavier University.',
      'After working in Delaware for a few years, I moved to Atlanta to study at Life University. I graduated cum laude in March 2014 with my Doctorate of Chiropractic and moved back to the Wilmington area, where I live with my family.',
    ],
    interests: 'Outside the office I enjoy exercise, playing and listening to music, movies, reading and hiking.',
    publications: [
      {
        title: 'Improvement in Motor Function and Mobility in a Pediatric Cerebral Palsy Patient Following Subluxation Centered Chiropractic Care',
        source: 'Vertebral Subluxation Research',
        url: 'https://www.vertebralsubluxationresearch.com/2017/09/10/improvement-in-motor-function-and-mobility-in-a-pediatric-cerebral-palsy-patient-following-subluxation-centered-chiropractic-care/',
      },
      {
        title: 'Chiropractic May Play a Key Role in Combating the Opioid Epidemic',
        source: 'Delaware Online, April 2018',
        url: 'https://www.delawareonline.com/story/opinion/columns/2018/04/06/dr-travis-mckay-chiropractic-may/12808192007/',
      },
    ],
  },
];

export const getDoctor = (slug: string) => doctors.find((d) => d.slug === slug);
