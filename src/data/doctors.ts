import { img } from './images';

export type Doctor = {
  slug: string;
  name: string;
  role: string;
  /** card on the homepage and the Meet the Doctors page */
  chips: string[];
  short: string;
  /** page */
  lede: string;
  description: string;
  portrait: string;
  portraitAlt: string;
  facts: { label: string; text: string }[];
  storyEyebrow: string;
  storyTitle: string;
  story: string[];
  approachEyebrow?: string;
  approachTitle?: string;
  approach?: { t: string; d: string }[];
  backgroundEyebrow?: string;
  backgroundTitle?: string;
  background?: string[];
  interests?: string;
  publications?: { title: string; source: string; url: string }[];
};

const alt = (n: string) => `${n}, chiropractor at Advanced Back & Neck Pain Center in Newark, DE`;

/** One entry per doctor. The page file only maps this data to sections. Order = order on the site. */
export const doctors: Doctor[] = [
  {
    slug: 'dr-travis-mckay',
    name: 'Dr. Travis McKay',
    role: 'Doctor of Chiropractic',
    chips: ['Doctor of Chiropractic', 'Spinal alignment'],
    short: 'Grew up in a chiropractic family and focuses on spinal alignment.',
    lede: 'Raised in a chiropractic family, Dr. McKay helps Newark patients move the spine back toward its normal position with adjustments, exercise and traction.',
    description: 'Meet Dr. Travis McKay, Doctor of Chiropractic at Advanced Back & Neck Pain Center in Newark, DE. Read his story, his background and how he cares for patients.',
    portrait: img.doctors.travis,
    portraitAlt: alt('Dr. Travis McKay'),
    facts: [
      { label: 'Degree', text: 'Doctor of Chiropractic, Life University, Atlanta. Graduated cum laude in March 2014.' },
      { label: 'Before chiropractic', text: 'Advanced Major in Biology and Business Administration, St. Francis Xavier University.' },
      { label: 'Roots', text: 'Grew up in Delaware and in a chiropractic family.' },
    ],
    storyEyebrow: 'In his words',
    storyTitle: 'My chiropractic story',
    story: [
      'I grew up in a chiropractic family, so getting adjusted has always been a way of life for me. I saw the benefits and the success stories in the patients my father treated for many years.',
      'I never really understood how chiropractic works until I went to chiropractic school. There I learned that the spine has a normal, best position. When the spine is in that position, the spinal cord and the nerves that branch from it can work as they should.',
      'When the spine moves away from that position, pressure and stress build on those tissues. Most of the time this shows up as neck pain, back pain or headaches. Our goal is to bring the spine back to its normal position, or as close to it as we can.',
      'I joined Advanced Back & Neck Pain Center to carry on my family’s tradition of treating patients well and with respect. I am more interested in learning about you and how we can help than in talking about myself, so please call us with any questions.',
    ],
    approachEyebrow: 'Care approach',
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
  {
    slug: 'dr-richard-mckay',
    name: 'Dr. Richard McKay',
    role: 'Chiropractor',
    chips: ['Chiropractor', 'Palmer College, 1986'],
    short: 'Started as a skeptic, then saw the healing benefits of chiropractic firsthand.',
    lede: 'Dr. McKay once thought chiropractors were quacks. Learning more, and seeing care work for his own family, changed his mind and his career.',
    description: 'Meet Dr. Richard McKay, a Palmer College graduate (1986) who has practiced chiropractic in Newark, Delaware for decades at Advanced Back & Neck Pain Center.',
    portrait: img.doctors.richard,
    portraitAlt: alt('Dr. Richard McKay'),
    facts: [
      { label: 'Degree', text: 'Doctor of Chiropractic, Palmer College of Chiropractic, Davenport, Iowa. Graduated June 1986.' },
      { label: 'Earlier study', text: 'B.S. in Education, University of North Dakota. M.A., University of New Orleans.' },
      { label: 'In practice', text: 'Has practiced from the same Delaware location since graduating.' },
    ],
    storyEyebrow: 'In his words',
    storyTitle: '“I thought all chiropractors were quacks”',
    story: [
      'When my younger brother told me he was going to become a Doctor of Chiropractic, I asked him why he wanted to be one of “those quacks.” He asked how I knew they were quacks. I had no real answer, so because he was my brother, I read what he sent me. The more I read, the more interested I became.',
      'Then my own family’s experience with chiropractic care, including my own recovery from an injury, solidified my opinion. My wife and I made plans to move and I became a chiropractor. I have never regretted that decision.',
    ],
    approachEyebrow: 'Always learning',
    approachTitle: 'Training that keeps growing',
    approach: [
      { t: 'Palmer College', d: 'Doctor of Chiropractic, graduated June 1986.' },
      { t: 'Functional medicine', d: 'Post-graduate Functional Medicine Diagnostic Training with chiropractors and medical doctors.' },
      { t: 'Complex cases', d: 'Training meant to help our office handle longer-lasting, more complex problems faster.' },
    ],
    backgroundEyebrow: 'Outside the office',
    backgroundTitle: 'Beyond the practice',
    background: ['After graduating from Palmer we moved to Delaware, and I have practiced at the same location ever since.'],
    interests: 'Outside the office I enjoy reading, writing, traveling, yoga, working out and learning classical guitar.',
  },
  {
    slug: 'dr-daniel-meers',
    name: 'Dr. Daniel Meers',
    role: 'Chiropractor',
    chips: ['Chiropractor', '15+ years'],
    short: 'More than 15 years of experience helping patients move better.',
    lede: 'Dr. Meers has more than 15 years of experience, with a strong background in personal injury, workers’ compensation and general wellness care.',
    description: 'Meet Dr. Daniel Meers, a chiropractor with over 15 years of experience in personal injury, workers’ compensation and wellness care in Newark, DE.',
    portrait: img.doctors.meers,
    portraitAlt: alt('Dr. Daniel Meers'),
    facts: [
      { label: 'Degree', text: 'Doctor of Chiropractic, New York Chiropractic College.' },
      { label: 'Experience', text: 'More than 15 years in chiropractic care.' },
      { label: 'Practiced in', text: 'Ohio and the Philadelphia area.' },
    ],
    storyEyebrow: 'About Dr. Meers',
    storyTitle: 'Why he chose chiropractic',
    story: [
      'Dr. Meers brings more than 15 years of experience in chiropractic care, with a strong background in treating personal injury, workers’ compensation and general wellness patients. What sets him apart is why he chose this profession.',
      'His journey began as a patient. After a car accident in his hometown of Canton, Ohio, he had severe neck and low back pain. Hands-on, personal chiropractic care helped, and within a few visits he was pain-free. That experience inspired him to give other people the same level of care.',
      'After earning his degree from New York Chiropractic College, Dr. Meers practiced in Ohio and the Philadelphia area, in busy, multidisciplinary settings, helping patients get out of pain and back to their lives.',
      'He sees patients at our Newark office at 54 Omega Drive.',
    ],
    approachEyebrow: 'Techniques',
    approachTitle: 'Care that fits each patient',
    approach: [
      { t: 'Diversified', d: 'A hands-on adjusting technique.' },
      { t: 'Activator', d: 'An instrument-assisted adjusting technique.' },
      { t: 'Cox Flexion/Distraction', d: 'A technique that gently moves and stretches the spine.' },
      { t: 'Soft tissue therapy', d: 'Hands-on work for muscles and the tissues around them.' },
    ],
    backgroundEyebrow: 'Outside the office',
    backgroundTitle: 'Family, bikes and racing',
    background: ['Outside the office, Dr. Meers enjoys time with his family, cycling, playing disc golf and watching Formula 1.'],
  },
  {
    slug: 'dr-nicholas-nick-marini',
    name: 'Dr. Nicholas “Nick” Marini',
    role: 'Chiropractor',
    chips: ['Chiropractor', '16+ years'],
    short: 'More than 16 years of experience in chiropractic care.',
    lede: 'Dr. Marini has more than 16 years of clinical experience and has taught chiropractic students for over 15 years.',
    description: 'Meet Dr. Nicholas “Nick” Marini, a chiropractor with over 16 years of experience who also teaches chiropractic students, at Advanced Back & Neck Pain Center in Newark, DE.',
    portrait: img.doctors.marini,
    portraitAlt: alt('Dr. Nicholas Marini'),
    facts: [
      { label: 'Experience', text: 'More than 16 years of clinical chiropractic work.' },
      { label: 'Teaching', text: 'More than 15 years teaching and mentoring chiropractic students.' },
      { label: 'Patients', text: 'People of all ages.' },
    ],
    storyEyebrow: 'About Dr. Marini',
    storyTitle: 'A teacher who looks at the whole person',
    story: [
      'Dr. Marini brings more than 16 years of clinical experience to our practice. He loves helping patients of all ages get better health and function.',
      'He uses a wide range of chiropractic techniques. He puts a strong focus on careful assessment, patient education and looking at the whole person, rather than treating one symptom alone.',
      'For more than 15 years he has also taught and mentored students in chiropractic school, from health sciences to advanced clinical courses. That teaching has given him a deep understanding of the science and clinical thinking behind chiropractic care, and we are glad to offer it to our patients.',
    ],
    approachEyebrow: 'Clinical interests',
    approachTitle: 'What Dr. Marini focuses on',
    approach: [
      { t: 'Pediatrics and pregnancy', d: 'Care for children and for patients during pregnancy.' },
      { t: 'Radiographic diagnosis', d: 'Reading x-rays as part of a careful assessment.' },
      { t: 'Structural analysis', d: 'Looking closely at how the body is built and moves.' },
      { t: 'Evidence-informed holistic care', d: 'Care that looks at the whole person.' },
    ],
    backgroundEyebrow: 'Outside the office',
    backgroundTitle: 'Family, travel and music',
    background: ['Dr. Marini enjoys time with his two daughters, traveling, scuba diving, playing music, writing poetry, watching sci-fi and playing video games. He cheers for Villanova, the Phillies and the Eagles.'],
  },
];

export const getDoctor = (slug: string) => doctors.find((d) => d.slug === slug);
