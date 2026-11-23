import { servicePhotos } from './images';

export type Service = {
  slug: string;
  /** H1 */
  title: string;
  /** short name used in "Other services" and the local section */
  name: string;
  seoTitle: string;
  description: string;
  eyebrow: string;
  lede: string;
  photos: [string, string, string];
  photoAlts: [string, string, string];
  intro: { title: string; text: string[] };
  candidates: { title: string; text: string; conditions: string[]; symptoms: string[] };
  benefits: { title: string; text: string; items: { t: string; d: string }[] };
  recovery: { title: string; text: string; steps: { t: string; d: string }[] };
  safety: { title: string; text: string[] };
  faqs: { q: string; a: string[] }[];
};

export const services: Service[] = [
  {
    slug: 'back-pain-chiropractor-in-newark-de',
    title: 'Back Pain Chiropractor in Newark, DE',
    name: 'Back pain care',
    seoTitle: 'Back Pain Treatment in Newark, DE | Advanced Back & Neck Pain Center',
    description:
      'Eliminate chronic lower or upper back discomfort. Our Newark clinic provides specialized chiropractic adjustments to target joint strain and provide lasting relief.',
    eyebrow: 'Back pain care',
    lede: 'Lower back pain and spinal alignment treatment in Newark, DE. We look for the cause of your pain, not only the place it hurts.',
    photos: servicePhotos['back-pain'] as [string, string, string],
    photoAlts: [
      'A chiropractor’s hands gently adjusting a patient’s lower back on a treatment table',
      'A man holding his lower back in pain beside his desk',
      'A smiling older woman stretching on a mat at home',
    ],
    intro: {
      title: 'Lower back pain and spinal alignment treatment in Newark, DE',
      text: [
        'Back pain is one of the most common health complaints for adults of all ages. Lifting injuries, poor posture and disc problems are common causes, and spinal misalignment often plays a part.',
        'At our Newark clinic we focus on the source of the problem instead of covering up symptoms. Personalized chiropractic care helps restore movement, calm inflammation and support your body’s natural healing.',
      ],
    },
    candidates: {
      title: 'Is chiropractic care right for your back pain?',
      text: 'Many people with everyday back pain are good candidates for chiropractic care. After an exam, your doctor tells you plainly if your case needs something else and who to see.',
      conditions: ['Muscle strain', 'Stiff or restricted joints', 'Disc problems', 'Poor posture and desk strain', 'Lifting injuries'],
      symptoms: ['Pain in the lower or upper back', 'Stiffness when you get up or sit for long', 'Pain that spreads into the hip or leg', 'Muscle tightness and spasms', 'Pain that keeps coming back'],
    },
    benefits: {
      title: 'What care can do for you',
      text: 'Every plan is built from your exam. Here is what we work toward.',
      items: [
        { t: 'Better movement', d: 'Adjustments help stiff joints move the way they should.' },
        { t: 'Less pain and tension', d: 'When joints move well, muscles can relax and irritated nerves get relief.' },
        { t: 'A stronger spine', d: 'Stretching and strengthening exercises help keep your spine steady.' },
        { t: 'Fewer repeat flare-ups', d: 'We treat the cause so the pain is less likely to return.' },
      ],
    },
    recovery: {
      title: 'What to expect, step by step',
      text: 'Your care plan depends on your exam. Most plans follow the same path.',
      steps: [
        { t: 'Consultation and exam', d: 'We listen to your story, test how you move and decide if care is right for you.' },
        { t: 'Your care plan', d: 'We explain what we found and the options, in simple words.' },
        { t: 'Adjustments and therapies', d: 'Hands-on care, with stretching or other therapies when they help.' },
        { t: 'Home exercises', d: 'Simple movements that support your spine between visits.' },
        { t: 'Check-ins and upkeep', d: 'We track your progress and adjust the plan as you improve.' },
      ],
    },
    safety: {
      title: 'Careful, customized care',
      text: [
        'Chiropractic care is shaped around your exam findings. For acute pain or disc involvement we use gentle techniques.',
        'If your exam shows something that needs a medical doctor or imaging, we tell you and refer you.',
      ],
    },
    faqs: [
      {
        q: 'What causes lower back pain?',
        a: [
          'Lower back pain can come from muscle strain, joint restriction or disc wear. Long sitting and poor lifting habits add stress to the lower spine. Over time that stress can lead to inflammation and stiffness.',
          'Structural imbalances may also press on nearby nerves. Finding the exact cause lets us tailor care and help prevent it from coming back.',
        ],
      },
      {
        q: 'How does a back pain chiropractor help?',
        a: [
          'Adjustments improve spinal movement and restore alignment. When joints move correctly, inflammation can go down and muscles relax. This also helps ease pressure on irritated nerves.',
          'Stretching and strengthening exercises add stability. A well-supported spine has less strain and better long-term results.',
        ],
      },
      {
        q: 'Can chiropractic care help chronic back pain?',
        a: [
          'Many long-lasting back problems come from joints that stay restricted. When joints stay stiff, inflammation can linger and tissues may not heal fully.',
          'Corrective care looks at the underlying alignment. Over time, better mechanics reduce stress on the spine and can help prevent repeat episodes.',
        ],
      },
      {
        q: 'Is chiropractic care safe for severe back pain?',
        a: [
          'Care is customized after your exam. We use gentle techniques for patients with acute pain or disc involvement.',
          'If your symptoms point to something that needs other care, we will tell you and send you to the right provider.',
        ],
      },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
