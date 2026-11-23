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
  /** 2 or 3 photos: hero, overview, optional care-path photo */
  photos: string[];
  photoAlts: string[];
  /** short card text for the Services index */
  blurb: string;
  intro: { title: string; text: string[] };
  candidates: { title: string; text: string; conditions: string[]; symptoms: string[] };
  benefits: { title: string; text: string; items: { t: string; d: string; icon: 'move' | 'relief' | 'strong' | 'shield' }[] };
  recovery: { title: string; text: string; steps: { t: string; d: string }[] };
  safety: { title: string; text: string[] };
  faqs: { q: string; a: string[] }[];
};

type Pair = [string, string];
const B = (a: Pair, b: Pair, c: Pair, d: Pair) => ([
  { icon: 'move', t: a[0], d: a[1] },
  { icon: 'relief', t: b[0], d: b[1] },
  { icon: 'strong', t: c[0], d: c[1] },
  { icon: 'shield', t: d[0], d: d[1] },
] as Service['benefits']['items']);
const R = (text: string, last = 'We track your progress and adjust the plan as you improve.'): Service['recovery'] => ({
  title: 'What to expect, step by step',
  text,
  steps: [
    { t: 'Consultation and exam', d: 'We listen to your story, test how you move and decide if care is right for you.' },
    { t: 'Your care plan', d: 'We explain what we found and the options, in simple words.' },
    { t: 'Hands-on care', d: 'Your doctor starts the care that fits your exam.' },
    { t: 'Home guidance', d: 'Simple movements and habits that support your care between visits.' },
    { t: 'Check-ins', d: last },
  ],
});

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
    photos: servicePhotos['back-pain'],
    blurb: 'Targeted adjustments and a care plan built around what is causing your back pain.',
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
        { icon: 'move', t: 'Better movement', d: 'Adjustments help stiff joints move the way they should.' },
        { icon: 'relief', t: 'Less pain and tension', d: 'When joints move well, muscles can relax and irritated nerves get relief.' },
        { icon: 'strong', t: 'A stronger spine', d: 'Stretching and strengthening exercises help keep your spine steady.' },
        { icon: 'shield', t: 'Fewer repeat flare-ups', d: 'We treat the cause so the pain is less likely to return.' },
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
  {
    slug: 'car-accident-chiropractor',
    title: 'Car Accident Chiropractor in Newark, DE',
    name: 'Car accident care',
    seoTitle: 'Newark Car Accident Chiropractor | Advanced Back & Neck Pain Center',
    description: 'Recover safely from whiplash and soft tissue trauma. Get comprehensive clinical documentation and target-driven adjustments following an auto accident.',
    eyebrow: 'Car accident care',
    lede: 'Auto accident and whiplash injury care in Newark, DE. A careful exam and clear records after a crash.',
    blurb: 'A careful evaluation and care after a crash for neck, back and joint pain.',
    photos: servicePhotos['car-accident'],
    photoAlts: ['A woman holding her neck in pain beside a damaged car after a crash', 'A couple sitting in a car after a road accident, the man holding his neck', 'A woman standing between two cars after a collision, holding her back'],
    intro: {
      title: 'Auto accident and whiplash injury treatment in Newark, DE',
      text: [
        'A car accident can leave injuries that are not obvious at first and can get worse over time. Even a low-speed crash can strain the spine and the soft tissue around it.',
        'At our Newark clinic we examine you carefully and explain what we find. Early chiropractic care aims to calm inflammation and restore movement, without relying on medication.',
      ],
    },
    candidates: {
      title: 'Should you see a chiropractor after a crash?',
      text: 'If you have pain after a collision, an exam is a good first step. If your symptoms are severe, get emergency care first. We tell you plainly if you need another provider.',
      conditions: ['Whiplash', 'Neck and back sprains', 'Soft tissue strain', 'Stiff or restricted joints', 'Headaches that start after a crash'],
      symptoms: ['Neck pain or stiffness that shows up days later', 'Back or shoulder pain', 'Headaches', 'Pain when you turn your head', 'Aching muscles and trouble sleeping'],
    },
    benefits: {
      title: 'How care can help after an accident',
      text: 'Each plan is built from your exam.',
      items: B(['A full evaluation', 'We look for hidden injuries before they become bigger problems.'], ['Calmer, looser muscles', 'Gentle care helps ease soreness and tension.'], ['Better movement', 'Adjustments help stiff joints move more freely.'], ['Clear records', 'We document your exam and care so your file is easy to follow.']),
    },
    recovery: R('Every recovery is different. This is the path most patients follow.', 'We track your progress and update your plan as you recover.'),
    safety: { title: 'Safety first', text: ['If you have severe pain, numbness, weakness or a head injury after a crash, get emergency care right away.', 'Our care is gentle and matched to your exam. If imaging or a medical doctor is needed, we send you to the right place.'] },
    faqs: [
      { q: 'Why see a chiropractor after a car accident?', a: ['In a crash your body takes sudden force that can strain the spine, muscles and ligaments. You may feel fine at first, and soreness can show up days later.', 'A careful exam can find injuries early, before they turn into long-lasting pain.'] },
      { q: 'Should I wait if I feel fine?', a: ['Many people feel stiff or sore a day or two after a crash. An early exam helps us see what is going on, even if the pain is mild.'] },
      { q: 'How soon should I come in?', a: ['As soon as you can after you are medically safe. Call us and we will find a time that works.'] },
      { q: 'Do you help with insurance paperwork?', a: ['We keep clear records of your exam and care. Call our office to ask how your insurance and claim work with our visits.'] },
    ],
  },
  {
    slug: 'chiropractor-for-headaches-migraines-in-newark-de',
    title: 'Chiropractor for Headaches & Migraines in Newark, DE',
    name: 'Headache and migraine care',
    seoTitle: 'Headache & Migraine Care in Newark, DE | Advanced Back & Neck Pain Center',
    description: 'Address the structural trigger points of chronic headaches. Learn how upper cervical spinal alignments reduce muscle strain and stop tension headaches.',
    eyebrow: 'Headache and migraine care',
    lede: 'Tension headache and migraine care in Newark, DE. We check your neck and upper spine as a possible source.',
    blurb: 'We check the neck and spine as a possible source of frequent headaches.',
    photos: servicePhotos['headaches'],
    photoAlts: ['A woman on a sofa pressing her temple with a headache', 'A woman with her fingers on both temples, frowning in pain'],
    intro: {
      title: 'Tension headache and migraine treatment in Newark, DE',
      text: [
        'Many headaches start with tension in the neck and upper spine. Tight muscles and stiff joints in that area can irritate nearby nerves.',
        'Our Newark chiropractors look at how your neck moves and how you hold your head. Gentle care for the neck can help some patients have fewer or milder headaches.',
      ],
    },
    candidates: {
      title: 'Are your headaches coming from your neck?',
      text: 'Not every headache starts in the neck. Your exam helps us tell, and we send you to a medical doctor when that is the better step.',
      conditions: ['Tension headaches', 'Neck and upper back stiffness', 'Poor posture and screen strain', 'Jaw and shoulder tension', 'Stress held in the neck'],
      symptoms: ['A dull band of pain around the head', 'Pain that starts at the base of the skull', 'Headaches after long hours at a screen', 'A stiff, tight neck', 'Headaches that come back often'],
    },
    benefits: {
      title: 'How care can help with headaches',
      text: 'We aim for fewer headaches and easier days.',
      items: B(['A freer neck', 'Adjustments help stiff neck joints move better.'], ['Less muscle tension', 'Relaxed muscles can mean less pull at the base of the skull.'], ['Better posture habits', 'Simple changes take strain off your neck during the day.'], ['A drug-free option', 'Hands-on care you can combine with advice from your medical doctor.']),
    },
    recovery: R('Headache care is gradual. This is how we usually work with you.'),
    safety: { title: 'When a headache needs a doctor', text: ['Get urgent medical care for a sudden, severe headache, or one with fever, confusion, weakness or trouble speaking.', 'Our care is gentle and based on your exam. If we think your headaches need other testing, we refer you.'] },
    faqs: [
      { q: 'Can chiropractic care help migraines?', a: ['Some migraines are linked to neck problems. If your exam points to the neck, care that improves how the neck moves may help some patients.', 'We are honest about what we find, and we work with your medical doctor when needed.'] },
      { q: 'What causes tension headaches?', a: ['Tension headaches often come from tight muscles. Stress and poor posture add strain to the neck, and stiff joints can keep the tension going.'] },
      { q: 'How often will I need to come in?', a: ['It depends on your exam and how long you have had headaches. We explain the plan at your first visit and update it as you improve.'] },
    ],
  },
  {
    slug: 'chiropractor-for-neck-pain',
    title: 'Chiropractor for Neck Pain in Newark, DE',
    name: 'Neck pain care',
    seoTitle: 'Neck Pain Relief in Newark, DE | Advanced Back & Neck Pain Center',
    description: 'Fix postural stress, stiffness, and chronic neck strain. Our precise, gentle cervical adjustments return fluid motion and take the weight off neck muscles.',
    eyebrow: 'Neck pain care',
    lede: 'Neck pain relief and cervical spine care in Newark, DE. Gentle care for a stiff, sore neck.',
    blurb: 'Focused care for stiff, sore necks from posture, desk work or injury.',
    photos: servicePhotos['neck-pain'],
    photoAlts: ['A man at his desk holding the back of his neck in pain', 'A man with glasses rubbing his neck while working on a laptop'],
    intro: {
      title: 'Neck pain relief and cervical spine treatment in Newark, DE',
      text: [
        'Neck pain can get in the way of work, sleep and focus. It often builds slowly from posture, stress or an old injury.',
        'At our Newark clinic we look for the mechanical problem behind your pain. Restoring movement helps you get lasting relief instead of a short break from symptoms.',
      ],
    },
    candidates: {
      title: 'Is chiropractic care right for your neck pain?',
      text: 'Most everyday neck pain is a good fit for an exam. We tell you if something else needs attention first.',
      conditions: ['Screen and desk strain', 'Forward head posture', 'Whiplash and old injuries', 'Muscle tension from stress', 'Stiff neck joints'],
      symptoms: ['A stiff neck in the morning', 'Pain when you turn your head', 'Tight shoulders', 'Headaches from the neck', 'Neck pain that keeps returning'],
    },
    benefits: {
      title: 'What care can do for your neck',
      text: 'Gentle care aimed at easier movement.',
      items: B(['Easier turning', 'Adjustments help stiff neck joints move more freely.'], ['Less tension', 'Relaxed muscles take pressure off the neck and shoulders.'], ['Better posture', 'We show you easy changes for your desk and your day.'], ['Fewer flare-ups', 'We work on the cause, so pain is less likely to return.']),
    },
    recovery: R('Your neck plan follows your exam. Most plans look like this.'),
    safety: { title: 'Gentle, careful neck care', text: ['We use gentle techniques and choose each one for you. Some patients get low-force options.', 'If your symptoms need imaging or a medical doctor, we tell you and refer you.'] },
    faqs: [
      { q: 'What are the most common causes of neck pain?', a: ['Long hours at a screen, poor posture and repeated strain are common causes. When the head sits forward, the neck joints and muscles work harder.', 'Injuries such as whiplash or a sports hit can also play a part. Finding the cause lets us plan your care.'] },
      { q: 'Is neck adjustment safe?', a: ['We examine you first and pick techniques that suit you, including gentle, low-force options. Tell us about any past injuries or health concerns.'] },
      { q: 'How long until I feel better?', a: ['It varies. Many people notice changes in the first few visits, and your doctor will tell you what to expect after your exam.'] },
    ],
  },
  {
    slug: 'chiropractor-for-sciatica-in-newark-de',
    title: 'Chiropractor for Sciatica in Newark, DE',
    name: 'Sciatica care',
    seoTitle: 'Sciatica Nerve Pain Relief in Newark, DE | Advanced Back & Neck Pain Center',
    description: 'Stop shooting leg pain, numbness, and hip discomfort. We resolve sciatic nerve root compression directly at the source without invasive drugs or surgery.',
    eyebrow: 'Sciatica care',
    lede: 'Sciatic nerve pain and leg pain care in Newark, DE. We look for what is pressing on the nerve.',
    blurb: 'Care for pain that runs from your lower back through the hip and down the leg.',
    photos: servicePhotos['sciatica'],
    photoAlts: ['A senior woman holding her lower back against a soft blue wall', 'A person holding their hip and upper leg in pain'],
    intro: {
      title: 'Sciatic nerve pain and leg pain treatment in Newark, DE',
      text: [
        'Sciatica is sharp or burning pain that travels from the lower back down the leg. It often happens when a nerve in the lower spine is pinched or irritated.',
        'Our Newark chiropractors look for the source of the pressure. Restoring movement in the lower spine and hips can ease irritation and help you move more comfortably, without surgery.',
      ],
    },
    candidates: {
      title: 'Could your leg pain be sciatica?',
      text: 'Leg pain has several causes. Your exam helps us find out, and we refer you if you need other care.',
      conditions: ['Disc problems in the lower back', 'Spinal misalignment', 'Tight hip and buttock muscles', 'Long hours of sitting', 'Past back injuries'],
      symptoms: ['Pain from the back into the buttock and leg', 'Burning or shooting pain', 'Tingling or numbness in the leg or foot', 'Pain that is worse when sitting', 'Trouble standing up straight'],
    },
    benefits: {
      title: 'How care can help with sciatica',
      text: 'The goal is less pressure on the nerve and easier movement.',
      items: B(['Better lower back motion', 'Adjustments help restore movement where the spine is stiff.'], ['Less irritation', 'Easing pressure can calm the nerve and surrounding tissue.'], ['Stronger support', 'Exercises help the muscles that hold your spine steady.'], ['A plan for sitting', 'Easy changes help your back through a long workday.']),
    },
    recovery: R('Sciatica care is built around your exam. Most plans follow this path.'),
    safety: { title: 'Know the warning signs', text: ['Get urgent care for new weakness in a leg, loss of bladder or bowel control, or numbness in the groin area.', 'We choose gentle techniques that fit your exam and refer you when you need imaging or a medical doctor.'] },
    faqs: [
      { q: 'What causes sciatic nerve pain?', a: ['It commonly comes from a disc problem, spinal misalignment or tight muscles that press on the nerve. Long sitting and poor posture can make it worse.', 'Finding the exact source lets us aim care at the right place.'] },
      { q: 'How does chiropractic care help sciatica?', a: ['Adjustments restore motion to stiff joints in the lower spine and hips. That can reduce pressure and irritation around the nerve.', 'Exercises and posture advice help keep the gains.'] },
      { q: 'Do I need surgery for sciatica?', a: ['Most sciatica is managed without surgery. If your exam shows signs that need a surgeon, we tell you and refer you.'] },
    ],
  },
  {
    slug: 'herniated-disc-chiropractor-in-newark-de',
    title: 'Herniated Disc Chiropractor in Newark, DE',
    name: 'Herniated disc care',
    seoTitle: 'Herniated & Bulging Disc Care Newark, DE | Advanced Back & Neck Pain Center',
    description: 'Protect your spinal discs. Our non-invasive therapies take the physical pressure off damaged discs to alleviate radiating numbness, tingling, and weakness.',
    eyebrow: 'Herniated disc care',
    lede: 'Bulging and herniated disc care in Newark, DE. Non-surgical options matched to what your exam shows.',
    blurb: 'Non-surgical options for disc pain, matched to what your exam shows.',
    photos: servicePhotos['herniated-disc'],
    photoAlts: ['A doctor pointing to a spine model showing a herniated disc', 'An MRI scan of the spine with a herniated disc highlighted in red'],
    intro: {
      title: 'Bulging and herniated disc treatment in Newark, DE',
      text: [
        'Between the bones of your spine sit soft discs. When a disc bulges or herniates, it can press on a nearby nerve and cause pain that spreads into an arm or leg.',
        'Our Newark clinic offers non-surgical care that aims to take pressure off the area and improve how your spine moves.',
      ],
    },
    candidates: {
      title: 'Is chiropractic care right for a disc problem?',
      text: 'Many disc problems can be managed without surgery. Your exam, and imaging when needed, tells us what is safe for you.',
      conditions: ['Bulging disc', 'Herniated disc', 'Disc wear from age', 'Lifting strain', 'Long hours of sitting'],
      symptoms: ['Back or neck pain', 'Pain spreading into an arm or leg', 'Tingling or numbness', 'Pain that is worse when bending', 'Weakness in a hand or leg'],
    },
    benefits: {
      title: 'What disc care aims to do',
      text: 'Gentle, matched to your exam.',
      items: B(['Less pressure', 'Care aims to take stress off the irritated area.'], ['Calmer nerves', 'Easing pressure can reduce nerve irritation.'], ['Better support', 'Core and spine exercises help hold things steady.'], ['A safer plan', 'We pick techniques that fit your exam and imaging.']),
    },
    recovery: R('Disc care is built carefully and step by step.'),
    safety: { title: 'Care that fits your disc', text: ['A chiropractor does not “push a disc back in.” We aim to reduce pressure and improve motion, using gentle methods for acute pain.', 'If your symptoms point to something that needs a specialist or surgery, we tell you and refer you.'] },
    faqs: [
      { q: 'What is a herniated disc?', a: ['It happens when the soft center of a disc pushes outward and irritates nearby nerves. Pain may spread into an arm or leg.', 'Lifting strain and wear over time are common causes.'] },
      { q: 'Can chiropractic care fix a bulging disc?', a: ['Chiropractic care does not push a disc back into place. It aims to reduce pressure on the spine and improve movement, which supports your body’s natural recovery.'] },
      { q: 'Will I need surgery?', a: ['Many people with disc problems improve without surgery. If your exam shows serious nerve problems, we refer you promptly.'] },
    ],
  },
  {
    slug: 'spinal-decompression-therapy-in-newark-de',
    title: 'Spinal Decompression Therapy in Newark, DE',
    name: 'Spinal decompression',
    seoTitle: 'Spinal Decompression Therapy Newark, DE | Advanced Back & Neck Pain Center',
    description: 'Experience the benefits of gentle, traction-based spinal decompression. Safely treat severe disc herniations, spinal stenosis, and chronic facet syndrome.',
    eyebrow: 'Spinal decompression',
    lede: 'Non-surgical spinal decompression in Newark, DE. Gentle traction for disc-related back and neck pain.',
    blurb: 'Gentle, traction-based care for disc-related back and neck pain.',
    photos: servicePhotos['decompression'],
    photoAlts: ['A patient lying on a spinal decompression table in a bright clinic room', 'A patient on a traction table next to a decompression machine'],
    intro: {
      title: 'Non-surgical spinal decompression treatment in Newark, DE',
      text: [
        'Spinal decompression uses controlled, gentle traction to stretch the spine. The goal is to take pressure off the discs and nerves.',
        'Our Newark clinic builds a decompression plan for each patient. Plans are matched to your exam, and we tell you if this therapy is not the right fit.',
      ],
    },
    candidates: {
      title: 'Who may be a candidate for decompression?',
      text: 'A full exam, and imaging when needed, decides if decompression is safe and useful for you.',
      conditions: ['Herniated or bulging discs', 'Sciatica from the lower spine', 'Long-lasting back pain', 'Spinal stenosis', 'Facet joint irritation'],
      symptoms: ['Low back pain that spreads into the leg', 'Neck pain that spreads into the arm', 'Pain that is worse when sitting', 'Tingling or numbness', 'Stiffness that limits your day'],
    },
    benefits: {
      title: 'What decompression aims to do',
      text: 'A comfortable, non-invasive option.',
      items: B(['Less pressure on discs', 'Gentle traction aims to ease stress on the spine.'], ['Less nerve irritation', 'Easing pressure can calm irritated nerves.'], ['Better movement', 'A relaxed spine moves more easily.'], ['No surgery, no downtime', 'Sessions are non-invasive and you walk out on your own.']),
    },
    recovery: R('Decompression works over a series of visits. Here is how it goes.', 'We track your progress and adjust the plan as you improve.'),
    safety: { title: 'Safe and comfortable', text: ['Most patients find decompression comfortable and relaxing. You tell us if anything feels wrong, and we adjust right away.', 'It is not right for everyone. We screen you first and refer you when another path is safer.'] },
    faqs: [
      { q: 'What is spinal decompression therapy?', a: ['It uses controlled traction to reduce pressure on the discs. Many patients find the sessions gentle and relaxing.'] },
      { q: 'Who is a candidate for decompression?', a: ['People with disc problems or long-lasting sciatica are often considered. A full evaluation decides if it is safe for you, and your plan is built around you.'] },
      { q: 'Is decompression painful?', a: ['Most patients find it comfortable. You may feel a gentle stretch. Tell us right away if you feel pain.'] },
    ],
  },
  {
    slug: 'sports-injury-chiropractor',
    title: 'Sports Injury Chiropractor in Newark, DE',
    name: 'Sports injury care',
    seoTitle: 'Sports Injury Rehabilitation Newark, DE | Advanced Back & Neck Pain Center',
    description: 'Enhance your athletic performance and recover quickly from joint sprains or muscle strains with targeted sports chiropractic care in Newark.',
    eyebrow: 'Sports injury care',
    lede: 'Sports and athletic injury care in Newark, DE. Recover well and move better for your sport.',
    blurb: 'Recovery and prevention for athletes of every level.',
    photos: servicePhotos['sports-injury'],
    photoAlts: ['A runner on a country road holding her lower back', 'A doctor examining a young athlete’s knee in a clinic'],
    intro: {
      title: 'Sports and athletic injury treatment in Newark, DE',
      text: [
        'Sports put repeated stress on joints and muscles. Stiff joints or uneven movement can lead to injury and slow you down.',
        'Our Newark sports chiropractic care focuses on recovery and prevention. We help you get back to your sport safely and move more efficiently.',
      ],
    },
    candidates: {
      title: 'Is sports chiropractic right for you?',
      text: 'You do not have to be a pro. Weekend runners, gym regulars and team players all come to see us.',
      conditions: ['Sprains and strains', 'Overuse injuries', 'Joint stiffness', 'Back and neck pain from training', 'Uneven movement patterns'],
      symptoms: ['Pain that shows up when you train', 'Stiffness after workouts', 'A joint that feels “off”', 'Slower recovery between sessions', 'An old injury that keeps returning'],
    },
    benefits: {
      title: 'What care can do for athletes',
      text: 'Move well, recover well, and stay in the game.',
      items: B(['Better joint movement', 'Adjustments help joints move the way they should.'], ['Faster recovery', 'Hands-on care helps ease tight, sore muscles.'], ['Balanced strength', 'Exercises support the areas that carry your sport.'], ['Fewer setbacks', 'Regular check-ins can catch small problems early.']),
    },
    recovery: R('Your plan follows your sport and your goals.', 'We track your progress and update your plan as you return to full activity.'),
    safety: { title: 'Return to sport safely', text: ['We do not rush you back. Your doctor tells you what is safe to do while you recover.', 'If you may have a fracture or a serious tear, we refer you for imaging or a specialist.'] },
    faqs: [
      { q: 'What injuries can chiropractic care help with?', a: ['Sprains, strains and joint stiffness are common reasons athletes see us. Care can include the spine and arms and legs.'] },
      { q: 'Can chiropractic care improve performance?', a: ['Better joint movement and balanced mechanics can help you move more efficiently. Results vary by person and sport.'] },
      { q: 'Can regular care help prevent injuries?', a: ['Routine check-ins can show small movement problems before they grow. Your doctor will suggest what fits your training.'] },
    ],
  },
  {
    slug: 'shockwave-therapy-in-newark-de',
    title: 'Shockwave Therapy in Newark, DE',
    name: 'Shockwave therapy',
    seoTitle: 'Shockwave Therapy in Newark, DE | Advanced Back & Neck Pain Center',
    description: 'Non-invasive shockwave therapy for stubborn muscle and tendon pain in Newark, DE. Ask our team if this therapy fits your exam findings.',
    eyebrow: 'Shockwave therapy',
    lede: 'Non-invasive shockwave therapy in Newark, DE for stubborn muscle and tendon pain.',
    blurb: 'A non-invasive option for stubborn muscle and tendon pain.',
    photos: servicePhotos['shockwave'],
    photoAlts: ['A therapist using a shockwave device on a patient’s shoulder', 'A practitioner applying a shockwave applicator to a patient’s upper back'],
    intro: {
      title: 'Non-invasive shockwave therapy in Newark, DE',
      text: [
        'Shockwave therapy uses gentle sound-wave pulses applied to the skin over a sore area. It is often used for stubborn muscle and tendon pain that has not gone away with rest.',
        'At our Newark clinic, shockwave is used when your exam shows it may help. It can be combined with adjustments and exercises.',
      ],
    },
    candidates: {
      title: 'Is shockwave therapy right for you?',
      text: 'Your doctor decides after an exam. Shockwave is not for everyone, and we tell you honestly if it is not a fit.',
      conditions: ['Tight, knotted muscles', 'Tendon soreness', 'Shoulder and upper back strain', 'Heel and foot pain', 'Pain that has lasted for weeks'],
      symptoms: ['A sore spot that does not go away', 'Pain with certain movements', 'Stiffness in one area', 'Trouble returning to activity', 'Pain after rest does not help'],
    },
    benefits: {
      title: 'What shockwave therapy aims to do',
      text: 'A short, non-invasive treatment.',
      items: B(['Targets the sore spot', 'The device is applied right over the problem area.'], ['Eases tight tissue', 'Pulses are used to help calm stubborn muscle tension.'], ['Pairs with other care', 'We combine it with adjustments and exercises.'], ['No needles, no downtime', 'Sessions are short and non-invasive.']),
    },
    recovery: R('Shockwave is usually part of a larger plan. Here is how it fits in.'),
    safety: { title: 'Who should not use it', text: ['You may feel some pressure or mild discomfort during a session. Tell us right away if it is too much.', 'We screen you first. Shockwave is not used in some situations, for example over certain medical devices or in pregnancy, and we explain your options.'] },
    faqs: [
      { q: 'What is shockwave therapy?', a: ['It sends gentle pulses of energy through the skin to the sore tissue underneath. It is used to help with stubborn muscle and tendon pain.'] },
      { q: 'Does it hurt?', a: ['Most people feel pressure and some mild discomfort that you can control. We adjust the strength to keep you comfortable.'] },
      { q: 'How many sessions will I need?', a: ['It depends on your problem and how long you have had it. We explain the plan after your exam.'] },
    ],
  },
  {
    slug: 'arthritis-pain-chiropractor-in-newark-de',
    title: 'Arthritis Pain Chiropractor in Newark, DE',
    name: 'Arthritis pain care',
    seoTitle: 'Arthritis Pain Care in Newark, DE | Advanced Back & Neck Pain Center',
    description: 'Gentle chiropractic care to help with stiff, achy joints from arthritis in Newark, DE. Support easier movement with a plan that fits you.',
    eyebrow: 'Arthritis pain care',
    lede: 'Gentle care for stiff, achy joints in Newark, DE. Support easier movement day to day.',
    blurb: 'Gentle care to help stiff, achy joints move more comfortably.',
    photos: servicePhotos['arthritis'],
    photoAlts: ['An older woman bending forward and holding her sore knee', 'An older woman’s hands resting on her knee on a leather sofa'],
    intro: {
      title: 'Gentle arthritis pain care in Newark, DE',
      text: [
        'Arthritis can make joints stiff, sore and slow, especially in the morning or after sitting. It often affects the spine, knees, hips and hands.',
        'Chiropractic care does not cure arthritis. Our Newark doctors use gentle methods to help your joints move more comfortably and to ease the muscle tension that builds around them.',
      ],
    },
    candidates: {
      title: 'Can chiropractic care help with arthritis?',
      text: 'Many people with arthritis use gentle care to feel looser. We adapt every technique to your age, comfort and health.',
      conditions: ['Osteoarthritis of the spine', 'Knee and hip joint wear', 'Stiff, achy joints', 'Muscle tension around sore joints', 'Reduced movement'],
      symptoms: ['Morning stiffness', 'Joint aching', 'Pain when you start moving', 'Less range of motion', 'Soreness after a long day'],
    },
    benefits: {
      title: 'What gentle care can offer',
      text: 'A comfortable, low-force approach.',
      items: B(['Easier movement', 'Gentle methods help stiff joints move more freely.'], ['Less muscle tension', 'Hands-on work can ease tight muscles near sore joints.'], ['Supportive exercises', 'Simple, safe movements help keep you active.'], ['Care that fits you', 'We choose low-force techniques that suit your comfort.']),
    },
    recovery: R('Arthritis care is about steady progress at a comfortable pace.', 'We check in on how you feel and adjust your plan over time.'),
    safety: { title: 'Gentle and individual', text: ['We use low-force techniques and change the plan to fit how your joints feel.', 'Tell us about medicines, past surgeries and other health conditions. If we think another provider should be involved, we say so.'] },
    faqs: [
      { q: 'Can a chiropractor cure arthritis?', a: ['No. Arthritis is a long-term condition. Care aims to help your joints move more comfortably and to ease the muscle tension around them.'] },
      { q: 'Is chiropractic care safe with arthritis?', a: ['We examine you first and use gentle, low-force methods suited to you. Tell us about all your health conditions.'] },
      { q: 'Which joints can you help?', a: ['We often see people for the spine, hips and knees. Your doctor will explain what care fits after your exam.'] },
    ],
  },
  {
    slug: 'pinched-nerve-chiropractor-in-newark-de',
    title: 'Pinched Nerve Chiropractor in Newark, DE',
    name: 'Pinched nerve care',
    seoTitle: 'Pinched Nerve Care in Newark, DE | Advanced Back & Neck Pain Center',
    description: 'Chiropractic care for pinched nerves in the neck, shoulder, arm and back in Newark, DE. Find the source of pressure and move more comfortably.',
    eyebrow: 'Pinched nerve care',
    lede: 'Care for pinched nerves in the neck, shoulder, arm and back in Newark, DE.',
    blurb: 'Care for nerve pain, tingling and numbness from pressure on a nerve.',
    photos: servicePhotos['pinched-nerve'],
    photoAlts: ['A woman holding her sore shoulder with the painful area highlighted in red', 'An older woman with glasses holding her shoulder while sitting on a sofa'],
    intro: {
      title: 'Pinched nerve treatment in Newark, DE',
      text: [
        'A pinched nerve happens when bone, a disc or tight tissue presses on a nerve. It can cause pain, tingling or numbness, often in the neck, shoulder, arm, back or leg.',
        'Our Newark chiropractors look for what is pressing on the nerve. Gentle care aims to improve movement in the spine and ease that pressure.',
      ],
    },
    candidates: {
      title: 'Do you have a pinched nerve?',
      text: 'Nerve symptoms have many causes. We examine you and send you for more testing if you need it.',
      conditions: ['Stiff joints in the neck or back', 'Disc problems', 'Tight muscles near a nerve', 'Poor posture', 'Repeated strain'],
      symptoms: ['Tingling in a hand or foot', 'Numbness in an arm or leg', 'Pain that shoots or burns', 'Weak grip', 'Pain that spreads from the neck or back'],
    },
    benefits: {
      title: 'How care can help',
      text: 'We aim to ease the pressure behind the symptoms.',
      items: B(['Better joint motion', 'Adjustments help restore movement in tight areas.'], ['Less nerve irritation', 'Easing pressure can calm the nerve.'], ['Stronger support', 'Exercises help keep the area steady.'], ['A clear answer', 'An exam helps us find where the problem starts.']),
    },
    recovery: R('Nerve problems need a careful approach. Here is how we start.'),
    safety: { title: 'Know the warning signs', text: ['Get urgent care for sudden weakness, trouble walking, loss of bladder or bowel control, or numbness in the groin.', 'We use gentle techniques and refer you for imaging or a specialist when your exam calls for it.'] },
    faqs: [
      { q: 'What causes a pinched nerve?', a: ['Pressure on a nerve from a stiff joint, a disc problem or tight muscles. Poor posture and repeated strain add to it.'] },
      { q: 'Can chiropractic care help a pinched nerve?', a: ['Care that improves movement and eases pressure may help some patients. Your exam tells us what is likely to help you.'] },
      { q: 'How long does a pinched nerve last?', a: ['It varies a lot. Some settle in days and others take longer. Your doctor will explain what to expect after your exam.'] },
    ],
  },
  {
    slug: 'work-injury-chiropractor-in-newark-de',
    title: 'Work Injury Chiropractor in Newark, DE',
    name: 'Work injury care',
    seoTitle: 'Work Injury Care in Newark, DE | Advanced Back & Neck Pain Center',
    description: 'Chiropractic care for work injuries, from lifting strain to repetitive stress, in Newark, DE. Get a careful exam and clear records.',
    eyebrow: 'Work injury care',
    lede: 'Care for work injuries in Newark, DE, from lifting strain to repetitive stress.',
    blurb: 'Care for lifting strain, repetitive stress and injuries on the job.',
    photos: servicePhotos['work-injuries'],
    photoAlts: ['A warehouse worker in a safety vest holding his lower back near shelving', 'A worker in a yellow hard hat bending forward with back pain in a warehouse'],
    intro: {
      title: 'Work injury treatment in Newark, DE',
      text: [
        'Lifting, bending, long hours at a desk and repeated motions can all lead to pain at work. A sudden strain or a slow build-up can both cause an injury.',
        'Our Newark clinic gives you a careful exam, a clear plan and records that are easy to follow. We help you move better and get ready to return to your job.',
      ],
    },
    candidates: {
      title: 'Hurt at work?',
      text: 'Tell us how the injury happened. We examine you and explain your options in plain words.',
      conditions: ['Lifting and bending strain', 'Repetitive stress', 'Back and neck sprains', 'Shoulder and wrist strain', 'Long hours in one position'],
      symptoms: ['Back pain after a shift', 'Neck and shoulder tightness', 'Pain when lifting', 'Aching hands and wrists', 'Pain that grows through the week'],
    },
    benefits: {
      title: 'What care can do for you',
      text: 'Focused on getting you moving and back to work.',
      items: B(['A careful exam', 'We find where the strain is coming from.'], ['Less pain and tension', 'Hands-on care helps ease sore muscles and joints.'], ['Safer movement', 'We show you easy ways to lift and sit with less strain.'], ['Clear records', 'We document your exam and care so your file is easy to follow.']),
    },
    recovery: R('We guide you from your first visit to your return to full duty.', 'We track your progress and tell you when you are ready for more activity.'),
    safety: { title: 'Careful and clear', text: ['If you have severe pain, numbness, weakness or a head injury, get emergency care first.', 'We refer you for imaging or another provider when your exam calls for it. Call our office to ask how your claim or insurance works with our visits.'] },
    faqs: [
      { q: 'What work injuries do you treat?', a: ['Back and neck strain from lifting, repetitive stress and long hours in one position are common reasons patients visit us.'] },
      { q: 'Should I come in even if the pain is mild?', a: ['Yes, it is a good idea. Mild pain can build over time, and an early exam helps you and your doctor plan.'] },
      { q: 'Do you help with work injury paperwork?', a: ['We keep clear records of your exam and care. Call our office to ask how your claim and insurance fit with our visits.'] },
    ],
  },
  {
    slug: 'chiropractic-care-in-newark-de',
    title: 'Chiropractic Care in Newark, DE',
    name: 'Chiropractic care',
    seoTitle: 'Chiropractic Care in Newark, DE | Advanced Back & Neck Pain Center',
    description: 'Complete chiropractic care in Newark, DE since 1986. Gentle adjustments for back, neck and joint pain, with a plan built around you.',
    eyebrow: 'Chiropractic care',
    lede: 'Complete chiropractic care in Newark, DE since 1986. Gentle adjustments and a plan built around you.',
    blurb: 'Gentle adjustments and a plan built around you, since 1986.',
    photos: servicePhotos['chiropractic-care'],
    photoAlts: ['A chiropractor gently adjusting a patient’s neck on a treatment table', 'A chiropractor adjusting a man’s neck in a bright office'],
    intro: {
      title: 'Chiropractic care in Newark, DE',
      text: [
        'Chiropractic care focuses on how your spine and joints move. When joints are stiff or out of line, you can feel pain, tightness and limited movement.',
        'We have cared for families in Newark since 1986. Your doctor finds the cause of your pain, explains it simply and lets you choose the care that fits you.',
      ],
    },
    candidates: {
      title: 'Who comes to see us?',
      text: 'People of all ages come for relief and to stay active. Every plan begins with a full exam.',
      conditions: ['Back and neck pain', 'Headaches', 'Joint stiffness', 'Posture problems', 'Everyday aches and strains'],
      symptoms: ['Pain that limits your day', 'Stiffness when you get up', 'Tight, sore muscles', 'Trouble turning or bending', 'Pain that keeps returning'],
    },
    benefits: {
      title: 'What care can do for you',
      text: 'We want you moving well and feeling better.',
      items: B(['Better movement', 'Adjustments help stiff joints move more freely.'], ['Less pain and tension', 'Relaxed muscles and calmer joints help you feel better.'], ['Stronger habits', 'Exercises and posture tips support your spine.'], ['A plan built for you', 'Your care follows your exam, goals and comfort.']),
    },
    recovery: R('Here is what your first visits look like.'),
    safety: { title: 'Gentle, individual care', text: ['We choose techniques that fit your exam, age and comfort, including low-force options.', 'If something needs a medical doctor or imaging, we tell you and refer you.'] },
    faqs: [
      { q: 'What is chiropractic care?', a: ['It is hands-on care that focuses on the spine and joints and how they move. The goal is to ease pain and help you move better.'] },
      { q: 'Does an adjustment hurt?', a: ['Most people find adjustments comfortable. We use gentle options, and you can tell us how you want to be treated.'] },
      { q: 'How many visits will I need?', a: ['It depends on your exam and goals. We explain your plan at the first visit and update it as you improve.'] },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
