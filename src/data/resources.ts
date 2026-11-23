/** Patient resource pages. Text comes from advancedback.com (live site). */
export type Step = { title: string; text: string };
export type Card = { title: string; text: string; href: string; cta: string };
export type Section = {
  eyebrow: string;
  title: string;
  text?: string[];
  checklist?: string[];
  steps?: Step[];
  cards?: Card[];
  forms?: { title: string; href: string }[];
};
export type ResourcePage = {
  slug: string; // path after /resources/
  navLabel: string;
  card: string; // short line for the Resources index
  seoTitle: string;
  description: string;
  heading: string;
  eyebrow: string;
  lede: string;
  image: string; // key into the picker in [...slug].astro
  imageAlt: string;
  crumbs: { label: string; href?: string }[];
  sections: Section[];
};

const brand = ' | Advanced Back & Neck Pain Center';
const R = { label: 'Resources', href: '/resources/' };
const PC = { label: 'Patient Center', href: '/resources/patient-center/' };
const doc = (n: number) => `https://advancedback.com/assets/docs/${n}.pdf`;

export const resourcePages: ResourcePage[] = [
  {
    slug: 'first-visit',
    navLabel: 'First Visit',
    card: 'What to expect on day one',
    seoTitle: 'What to Expect On Your First Visit' + brand,
    description: 'Prepare for your initial consultation. Learn about our comprehensive physical testing, diagnostic spinal imaging rules, and customized treatment planning.',
    heading: 'What to expect on your first visit',
    eyebrow: 'First visit',
    lede: 'No surprises. We explain everything before it happens, so you feel at ease from the moment you walk in.',
    image: 'doctorHero',
    imageAlt: 'A chiropractor talking with a new patient',
    crumbs: [R, { label: 'First Visit' }],
    sections: [
      {
        eyebrow: 'What to expect',
        title: 'We explain everything in advance',
        text: [
          'Since chiropractic care involves a series of visits, with each one building on the ones before, it’s important that our relationship can go the distance. We’ve found that one of the best ways to build successful patient relationships is to explain everything in advance. In other words, no surprises!',
          'You’ll be greeted warmly and made to feel welcome as soon as you enter the Advanced Back & Neck Pain Center. First you’ll be asked to sign in; then you’ll be directed to our desk to fill out new patient paperwork.',
        ],
      },
      {
        eyebrow: 'Please bring',
        title: 'Your first visit checklist',
        text: ['Next, the following information may be requested:'],
        checklist: ['Your medical background', 'Medication lists', 'A photo ID', 'A health insurance card'],
      },
      {
        eyebrow: 'Accident or work injury',
        title: 'Extra paperwork may be needed',
        text: [
          'If you’re referred to us because of an accident, worker’s comp, or a motor vehicle accident, you’ll need to complete additional paperwork. If time allows, you may be asked to fill it out during the first visit; otherwise we’ll send it home for you to bring for your second visit.',
        ],
      },
      {
        eyebrow: 'Step by step',
        title: 'How the first visit goes',
        steps: [
          { title: 'Exam room and consultation', text: 'After the paperwork portion is completed, you’ll be taken to one of our exam rooms to discuss any further medical history questions in detail. You’ll also meet one of our doctors for your chiropractic consultation.' },
          { title: 'Your first care', text: 'Once everything has been explained and your questions have been answered, we’ll get you started on the path to reducing your pain on this very first visit with in-office therapy and at-home care recommendations.' },
          { title: 'X-rays, if needed', text: 'If the doctor deems it necessary, you may have x-rays taken.' },
          { title: 'Therapy station', text: 'Before leaving your initial visit, you’ll be escorted to our therapy station for some electrical stimulation and/or cold laser therapy.' },
          { title: 'Take-home packet and ice', text: 'You’ll be given a packet to take home with important chiropractic information. Ice therapy will be explained, followed by a Q&A session to answer any questions you may have about what happens in the office or what to expect during later visits.' },
          { title: 'Book part two', text: 'Once we agree on your care plan, and before leaving, you’ll be asked to schedule part two of your consultation at the front desk. We’ll also make sure that you have ice packs at home; otherwise we’ll provide them if necessary.' },
        ],
      },
    ],
  },
  {
    slug: 'second-and-regular-visits',
    navLabel: 'Second and Regular Visits',
    card: 'How follow-up care works',
    seoTitle: 'Continuing Care & Regular Checkups' + brand,
    description: 'Discover what happens during progressive follow-up care visits as we focus on stabilizing your spinal structure, building strength, and avoiding relapses.',
    heading: 'Second and regular visits',
    eyebrow: 'Follow-up care',
    lede: 'Your second visit is where we go over your findings and agree on a plan. Regular visits after that are simple and personal.',
    image: 'care',
    imageAlt: 'A chiropractor adjusting a patient during a follow-up visit',
    crumbs: [R, { label: 'Second and Regular Visits' }],
    sections: [
      {
        eyebrow: 'Your second visit',
        title: 'Report of findings',
        text: [
          'Once you arrive for the second visit of your strategy plan, you’ll be warmly greeted and our sign-in procedure will be explained to you. One of our friendly team members will then walk you to our consultation room where the doctors will go over the findings report and strategy plan.',
          'The Doctor will explain your x-rays in order to help you fully understand the degree to which you are or are not correctly aligned. This is also a good time to ask the doctor any questions or explain how you felt after your first visit.',
          'You and the Doctor will discuss the best individualized treatment plan for your personal health goals, working within your time constraints and your budget considerations. Determining the appropriate plan for you and explaining it thoroughly to you is an essential part of a successful treatment plan, and that is what we pride ourselves on delivering.',
        ],
      },
      {
        eyebrow: 'Your second visit',
        title: 'Your chiropractic adjustment and therapy',
        text: [
          'At this time the doctor will bring you out to an open table and you’ll be adjusted based on your x-ray results. Once the doctor is done with your adjustment, you’ll be directed to the therapy station where you may receive one or both of the following:',
        ],
        checklist: ['Electrical stimulation', 'Cold laser therapy'],
      },
      {
        eyebrow: 'Before you leave',
        title: 'Ice, water and your next visits',
        text: [
          'During your therapy, you’ll once again be reminded of the importance of ice and proper water intake during this phase of your care.',
          'Finally, before leaving the office manager will sit down with you to go over your insurance benefits and/or a financial care plan. We’ll also schedule your follow up appointments based on the doctor’s recommendations.',
        ],
      },
      {
        eyebrow: 'Regular visits',
        title: 'What a typical visit looks like',
        text: [
          'A typical office visit begins with a warm welcome and assistance with signing in if necessary. You’ll then be directed to the next open table for your chiropractic adjustment. Once the doctor has completed your adjustment, you’ll be directed toward one of several different areas:',
        ],
        steps: [
          { title: 'Therapy station', text: 'Electrical stimulation and/or cold laser treatment.' },
          { title: 'Therapeutic exercises', text: 'Full assistance and instruction for you.' },
          { title: 'Intersegmental traction table', text: 'Helps to increase motion in the spine, decrease muscle spasms and decrease pain.' },
          { title: 'Massage', text: 'If one was scheduled.' },
        ],
      },
      {
        eyebrow: 'One on one',
        title: 'You are treated as an individual',
        text: [
          'As our patient, you’ll receive a true one-on-one experience whether you’re new here or have been part of our “family” for years. Each patient is treated as an individual and we strive to meet and exceed all your chiropractic needs with each visit. We’re looking forward to meeting you in person and discussing how we can help you get on the road to wellness!',
        ],
      },
    ],
  },
  {
    slug: 'patient-center',
    navLabel: 'Patient Center',
    card: 'Policies and our promise',
    seoTitle: 'Patient Hub & Center' + brand,
    description: 'Welcome to our patient center. Read our guarantee and financial policy, and download new patient paperwork before your visit.',
    heading: 'New patient center',
    eyebrow: 'Patient center',
    lede: 'Chiropractic is a partnership. Here is how we work with you, what we promise and how to get ready for your visit.',
    image: 'about',
    imageAlt: 'The friendly team at Advanced Back & Neck Pain Center',
    crumbs: [R, { label: 'Patient Center' }],
    sections: [
      {
        eyebrow: 'Our partnership',
        title: 'We work together toward your goals',
        text: [
          'Chiropractic involves a partnership approach to better health. We will work together to increase your health and vitality. All of us at Advanced Back & Neck Pain Center are here to support you in achieving your individual health goals. Our job is to offer clear explanations, present choices and deliver the best possible care we can.',
        ],
      },
      {
        eyebrow: 'Good to know',
        title: 'Start with what matters to you',
        cards: [
          { title: 'Our Guarantee', text: 'We guarantee you will be totally satisfied with each office visit.', href: '/resources/patient-center/our-guarantee/', cta: 'Learn more' },
          { title: 'Financial Policy', text: 'So that we can concentrate more fully on helping you reclaim your health, we make our financial policy simple, easy to understand and fair for all parties involved.', href: '/resources/patient-center/financial-policy/', cta: 'Read our policy' },
          { title: 'Admitting Paperwork', text: 'We offer our paperwork online so you can complete it in the convenience of your own home. Here are the essential forms we use and why we need them.', href: '/resources/new-patient-paperwork/', cta: 'Get the forms' },
        ],
      },
    ],
  },
  {
    slug: 'patient-center/our-guarantee',
    navLabel: 'Our Guarantee',
    card: 'Satisfied, or your visit is free',
    seoTitle: 'Our Patient Care Commitment' + brand,
    description: 'Our guarantee: you will be totally satisfied with each office visit, or it is free. Same day appointments, no pushy sales and a free consultation.',
    heading: 'Our guarantee',
    eyebrow: 'Our promise',
    lede: 'You get the best office visit and chiropractic experience when you see us, or it’s free.',
    image: 'guarantee',
    imageAlt: 'A smiling patient after a chiropractic visit',
    crumbs: [R, PC, { label: 'Our Guarantee' }],
    sections: [
      {
        eyebrow: 'Our personal guarantee',
        title: 'Your satisfaction, every visit',
        text: [
          'My personal guarantee to you, the patient, is that you get the best office visit and chiropractic experience when you see us…or it’s FREE. When you come to our Newark office, you will get our undivided attention and care.',
          'We guarantee you will be totally satisfied with each office visit…from our “5 minute maximum wait time”, to our gentle pain free treatments, to our state-of-the-art techniques. In fact, we’ll buy you your first visit, so you can see for yourself.',
        ],
      },
      {
        eyebrow: 'Why people stay',
        title: 'Five great reasons people love our practice',
        steps: [
          { title: 'Speed of service', text: 'We can get you in SAME DAY, so you feel better fast.' },
          { title: 'Over 30 years of experience', text: 'We have successfully treated tens of thousands of patients throughout Delaware, New Jersey, Pennsylvania, and Maryland.' },
          { title: 'No pushy sales games or hidden fees', text: 'Ever.' },
          { title: 'Convenience', text: 'You wait for the doctor for no more than 5 minutes with an appointment, or that visit is FREE.' },
          { title: 'Free consultation', text: 'New patients can get a complimentary initial consultation when requested. This will allow them to see if chiropractic can help them, risk free!' },
        ],
      },
    ],
  },
  {
    slug: 'patient-center/financial-policy',
    navLabel: 'Financial Policy',
    card: 'Simple, fair and clear',
    seoTitle: 'Financial Policy & Payment Options' + brand,
    description: 'Our financial policy is simple and fair. We work with most insurance plans, explain your costs up front and no one is turned away because of cost.',
    heading: 'Financial policy',
    eyebrow: 'Fees and insurance',
    lede: 'Money is always secondary to commitment in our office. Our main goal is to get you better.',
    image: 'finance',
    imageAlt: 'A team member explaining a care plan to a patient',
    crumbs: [R, PC, { label: 'Financial Policy' }],
    sections: [
      {
        eyebrow: 'An investment in your health',
        title: 'What care costs, and what you get',
        text: [
          'Losing anything, especially your health, will require an investment of your time and money to recover it. Rest assured that our fees are competitive with other offices in the area, but if all you want is to get your back or neck “cracked”… please call someone else.',
          'I personally promise that not only will you get rapid pain relief and the latest, cutting edge chiropractic and rehab care, but we will also take the time to help you understand what you can do to get better, faster, outside of our office.',
          'If you are not satisfied with your treatment from our staff and myself, I will refund every penny you’ve spent… GUARANTEED!',
        ],
      },
      {
        eyebrow: 'Insurance and plans',
        title: 'We explain your costs in detail',
        text: [
          'We work with the majority of insurance plans and will explain in detail exactly what your costs will be, and we have a variety of treatment plans that are designed to help you reach your health goals.',
          'Once we have an opportunity to evaluate your case, we’ll explain what we’ve found and what we think it will take for you to get well…and just as important…stay well!',
        ],
      },
      {
        eyebrow: 'Our commitment',
        title: 'No one is turned away',
        text: [
          'We always want our patients to know that money is always secondary to commitment in our office. Our primary goal is to get our patients better. If you are truly serious about getting better but are worried about the financial burden of care, please share your concerns with us.',
          'No one has ever been turned away from our office because they couldn’t afford care. We will always work our best to come up with a solution that allows you to get the care you need!',
        ],
      },
    ],
  },
  {
    slug: 'new-patient-paperwork',
    navLabel: 'New Patient Paperwork',
    card: 'Fill out forms ahead of time',
    seoTitle: 'Download New Patient Intake Forms' + brand,
    description: 'Download and complete our new patient intake forms at home before your first visit, including insurance, auto accident and slip and fall forms.',
    heading: 'New patient paperwork',
    eyebrow: 'Before your visit',
    lede: 'Fill out your forms at home, at your own pace, and bring them with you. It saves time on your first visit.',
    image: 'doctorHero',
    imageAlt: 'A patient filling in forms before a chiropractic visit',
    crumbs: [R, { label: 'New Patient Paperwork' }],
    sections: [
      {
        eyebrow: 'Online forms',
        title: 'Complete them at home',
        text: ['We offer our paperwork online so you can complete it in the convenience of your own home. Here are the essential forms we use and why we need them.'],
        forms: [
          { title: 'New Patient Insurance Intake Form', href: doc(15203) },
          { title: 'Auto Accident Patient Intake Form', href: doc(15204) },
          { title: 'Personal Effects Questionnaire', href: doc(15205) },
          { title: 'Slip/Fall New Patient Interview Form', href: doc(15206) },
        ],
      },
    ],
  },
  {
    slug: 'special-offer',
    navLabel: 'Special Offer',
    card: 'Savings for new patients',
    seoTitle: 'New Patient Specials & Promotions' + brand,
    description: 'New patients can request a complimentary consultation to see if chiropractic care is right for them, risk free.',
    heading: 'New patient special offer',
    eyebrow: 'Special offer',
    lede: 'Not sure if chiropractic is right for you? Start with a complimentary consultation.',
    image: 'offer',
    imageAlt: 'An athlete stretching after chiropractic care',
    crumbs: [R, { label: 'Special Offer' }],
    sections: [
      {
        eyebrow: 'For new patients',
        title: 'Complimentary consultation',
        text: [
          'Every single new patient who requests it will be granted a complimentary consultation with our staff and doctors to help determine if chiropractic care is right for them. This is a perfect time to ask questions or find out more about our treatment approaches, risk free!',
          'Please note though that this only includes the consultation component of an initial visit. Any physical examination that is performed, or necessary x-rays, may be additional.',
        ],
      },
    ],
  },
];

export const getResource = (slug: string) => resourcePages.find((p) => p.slug === slug);

export const videoStories = [
  { id: 'u05YqdsJKWc', title: 'Kyle: Low Back & Neck Pain After a Car Accident Improved', text: 'Kyle came to our Newark office for chiropractic care after a car accident left him with neck and back pain. As a personal trainer, his job relies on him being able to feel and function normally. With the treatment at our office, Kyle began to improve daily and now has little to no pain and full function!' },
  { id: 'RzlI84F9rXs', title: 'Andrew: Lifelong Posture Problems and Low Back Pain Gone!', text: 'When Andrew came to our Newark chiropractic office for treatment, he had been suffering from low back pain that had been connected to a lifelong posture problem. He had been told by other doctors that it’s just something that he would have to deal with but after one month of care his posture returned to normal and his low back pain had resolved!' },
  { id: 'jg97FXEzVPA', title: 'Ed: Severe Sciatic Pain & Numbness Improved by 95%!', text: 'Ed was initially skeptical about chiropractic but after receiving treatment in our Newark, Delaware office and reducing his leg pain, numbness, sciatic pain and low back pain by 95%, he is not skeptical anymore!' },
  { id: 'HoOPzcrdS_k', title: 'Terry: Crippling Low Back Pain Gone!', text: 'When Terry came to our Newark chiropractic office, his low back pain had progressed to the point that he was unable to walk from his car to his office or home without the pain increasing so much he would need to sit down. After a short period of treatment, Terry’s low back pain has improved enough that he recently played 18 holes of golf with no problem!' },
  { id: 'i6bTKEJIRsY', title: 'Barb: Pinched Nerve Pain Improved in One Visit!', text: 'Barb came to our Newark office after suffering with arm pain and getting no results with traditional treatments for a month. We were able to identify that the pain in her arm was tied in to a pinched nerve in her neck and got her feeling better after just one visit!' },
  { id: '5qszrK7xcnQ', title: 'Justin: Herniated Disc Pain Improved!', text: 'When Justin came to our Newark office with severe lower back pain, he had already been told by two other doctors that surgery was necessary to fix his problem. After only a short time with chiropractic care, Justin’s pain levels, his mobility, and his quality of life have all drastically improved!' },
  { id: 'aO8uLRbMt3Y', title: 'Herb: Low Back Pain Resolved!', text: 'When Herb came to our office, his low back pain was so severe that he couldn’t walk, sleep or work. After a series of chiropractic treatments, corrective exercises and more, Herb is 100% pain free and doing better than ever!' },
  { id: 'HPWs8M_U_L0', title: 'Kevin B: Low Back Pain & Pinched Nerve Pain Gone!', text: 'When Kevin came to our office he had severe lower back pain and a pinched nerve. After a series of sessions, the pain is now gone and Kevin can live a normal life!' },
];
