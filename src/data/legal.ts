/**
 * Legal pages. Privacy and Terms use the live site's wording.
 * Cookie Policy, Accessibility and Medical Disclaimer are new drafts: the practice's lawyer should review all five.
 */
export type LegalBlock = { h?: string; p?: string[]; ul?: string[]; caps?: boolean; cookieButton?: boolean };
export type LegalPage = {
  slug: string;
  title: string; // H1
  seoTitle: string;
  description: string;
  lede: string;
  updated?: string;
  blocks: LegalBlock[];
};

const brand = ' | Advanced Back & Neck Pain Center';
const contact = 'Please contact us by phone at 302-368-1300 or by mail at 54 Omega Drive, Suite F, Newark, DE 19713.';

export const legalPages: LegalPage[] = [
  {
    slug: 'privacy-policy',
    title: 'Privacy Policy',
    seoTitle: 'Privacy Policy' + brand,
    description: 'How Advanced Back & Neck Pain Center collects, uses and protects your personal information on this website.',
    lede: 'We are committed to protecting your privacy and providing a safe online experience.',
    blocks: [
      { h: 'Privacy statement', p: ['We are committed to protecting your privacy and providing a safe online experience. This Privacy Statement applies to our Practice’s website and governs our data collection and usage practices. By using this website, you consent to the data practices described in this Privacy Statement.'] },
      { h: 'Collection of your personal information', p: [
        'This Practice collects personally identifiable information provided by you, such as your e-mail address, name, home or work address or telephone number. This Practice also collects anonymous demographic information, which is not unique to you, such as your ZIP code, age, gender, preferences, interests and favorites.',
        'There is also information about your computer hardware and software that is automatically collected by this website. This information can include: your IP address, browser type, domain names, access times and referring website addresses. This information is used for the operation of the service, to maintain quality of the service, and to provide general statistics regarding use of this website.',
        'Please keep in mind that if you directly disclose personally identifiable information or personally sensitive data through public message boards, this information may be collected and used by others.',
        'This Practice encourages you to review the privacy statements of websites you choose to link to from the website so that you can understand how those websites collect, use and share your information. This Practice is not responsible for the privacy statements or other content on any other websites.',
      ] },
      { h: 'Use of your personal information', p: [
        'This Practice collects and uses your personal information to operate the website and deliver the services you have requested. This Practice also uses your personally identifiable information to inform you of other products or services available from this Practice and its affiliates. This Practice may also contact you via surveys to conduct research about your opinion of current services or of potential new services that may be offered.',
        'This Practice does not sell, rent or lease its customer lists to third parties. This Practice may share data with trusted partners to help us perform statistical analysis, send you email or postal mail, provide customer support, or arrange for deliveries. All such third parties are prohibited from using your personal information except to provide these services and they are required to maintain the confidentiality of your information.',
        'This Practice does not use or disclose sensitive personal information, such as race, religion, or political affiliations, without your explicit consent. This Practice will disclose your personal information, without notice, only if required to do so by law.',
      ] },
      { h: 'Cookies', p: [
        'The website uses “cookies” to help this Practice personalize your online experience. A cookie is a text file that is placed on your hard disk by a webpage server. Cookies cannot be used to run programs or deliver viruses to your computer. Cookies are uniquely assigned to you, and can only be read by a web server in the domain that issued the cookie to you.',
        'You can see what we use, and change your choices at any time, on our Cookie Policy page.',
      ] },
      { h: 'Security of your information', p: [
        'This Practice secures your personal information from unauthorized access, use or disclosure. This Practice secures the personally identifiable information you provide on computer servers in a controlled, secure environment, protected from unauthorized access, use or disclosure. When personal information (such as a credit card number) is transmitted to other websites, it is protected through the use of encryption, such as the Secure Socket Layer (SSL) protocol.',
      ] },
      { h: 'Changes to this statement', p: ['This Practice will occasionally update this Privacy Statement to reflect company and customer feedback. We encourage you to periodically review this Privacy Statement to be informed of how this Practice is protecting your information.'] },
      { h: 'Contact us', p: [contact] },
    ],
  },
  {
    slug: 'terms-conditions',
    title: 'Terms & Conditions',
    seoTitle: 'Terms & Conditions' + brand,
    description: 'The terms of use for the Advanced Back & Neck Pain Center website, including linked sites, content you submit and limits of liability.',
    lede: 'Please read these terms before you use our website.',
    blocks: [
      { h: 'Modification of these terms of use', p: ['We reserve the right to change the terms, conditions, and notices under which this Site is offered, including but not limited to the charges associated with the use of this Site.'] },
      { h: 'Links to third party sites', p: ['This Site may contain links to other websites (“Linked Sites”). The Linked Sites are not under our control and we are not responsible for the contents of any Linked Site, including without limitation any link contained in a Linked Site, or any changes or updates to a Linked Site. We are not responsible for webcasting or any other form of transmission received from any Linked Site. We are providing these links to you only as a convenience, and the inclusion of any link does not imply endorsement by us of the site or any association with its operators.'] },
      { h: 'No unlawful or prohibited use', p: ['As a condition of your use of this Site, you warrant to us that you will not use this Site for any purpose that is unlawful or prohibited by these terms, conditions, and notices. You may not use this Site in any manner which could damage, disable, overburden, or impair this Site or interfere with any other party’s use and enjoyment of this Site. You may not obtain or attempt to obtain any materials or information through any means not intentionally made available or provided for through this Site.'] },
      {
        h: 'Content you submit',
        p: [
          'When using this Site, you may have the opportunity to submit reviews or feedback regarding your experiences with us, and to participate in bulletin boards, chat areas, news groups, forums, communities, personal web pages, calendars, and/or other message or communication features designed to enable you to communicate with the public at large or with a group (collectively, “Communication Services”). You agree to use the Communication Services only to post, send, and receive messages and material that are proper and related to the particular Communication Service.',
          'By way of example, and not as a limitation, you agree that when using a Communication Service, you will not post content that contains:',
        ],
        ul: [
          'Personal and confidential information, including phone numbers, addresses, and health information;',
          'Vulgar content, including offensive, derogatory, obscene, profane, or inflammatory language or content;',
          'Threats or personal attacks on others;',
          'Discriminatory content or hate speech, including content that advocates against groups of people based on their race, ethnic origin, religion, disability, gender, gender identity, sexual orientation, age, or veteran status;',
          'Misrepresentations, including content submitted fraudulently on behalf of others or that misrepresents your identity or connection with us or our practice;',
          'Non-applicable content, including posts that are not specific to us or our practice;',
          'Advertising or solicitations;',
          'Illegal content; or',
          'References to or information about ongoing legal matters or proceedings.',
        ],
      },
      {
        p: ['You further agree that you will not:'],
        ul: [
          'Upload files that contain software or other material protected by intellectual property laws (or by rights of privacy of publicity) unless you own or control the rights thereto or have received all necessary consents.',
          'Upload files that contain viruses, corrupted files, or any other similar software or programs that may damage the operation of another’s computer.',
          'Conduct or forward surveys, contests, pyramid schemes or chain letters.',
          'Download any file posted by another user of a Communication Service that you know, or reasonably should know, cannot be legally distributed in such manner.',
          'Falsify or delete any legal or other proper notices or proprietary designations or labels of the origin or source of software or other material contained in a file that is uploaded.',
          'Restrict or inhibit any other user from using and enjoying the Communication Services.',
          'Violate any code of conduct or other guidelines which may be applicable for any particular Communication Service.',
          'Harvest or otherwise collect information about others, including e-mail addresses, without their consent.',
        ],
      },
      { p: ['We have no obligation to monitor the Communication Services. However, we reserve the right to review materials posted to a Communication Service and to remove any content that does not comply with these terms or any publicly posted content that includes personal and confidential information. We reserve the right to terminate your access to any or all of the Communication Services at any time without notice for any reason whatsoever. Content uploaded to a Communication Service may be subject to posted limitations on usage, reproduction, and/or dissemination. You are responsible for adhering to such limitations if you download the content. If you would like to remove your own review from this Site, please contact us.'] },
      {
        h: 'Disclaimer and limit of liability', caps: true,
        p: [
          'THE INFORMATION, SOFTWARE, PRODUCTS, AND SERVICES INCLUDED IN OR AVAILABLE THROUGH THIS SITE MAY INCLUDE INACCURACIES OR TYPOGRAPHICAL ERRORS. CHANGES ARE PERIODICALLY ADDED TO THE INFORMATION HEREIN. WE AND/OR OUR SUPPLIERS MAY MAKE IMPROVEMENTS AND/OR CHANGES IN THIS SITE AT ANY TIME. ADVICE RECEIVED VIA THIS SITE SHOULD NOT BE RELIED UPON FOR PERSONAL, MEDICAL, LEGAL OR FINANCIAL DECISIONS AND YOU SHOULD CONSULT AN APPROPRIATE PROFESSIONAL FOR SPECIFIC ADVICE TAILORED TO YOUR SITUATION.',
          'WE AND/OR OUR SUPPLIERS MAKE NO REPRESENTATIONS ABOUT THE SUITABILITY, RELIABILITY, AVAILABILITY, TIMELINESS, AND ACCURACY OF THE INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS CONTAINED ON THIS SITE FOR ANY PURPOSE. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ALL SUCH INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS ARE PROVIDED “AS IS” WITHOUT WARRANTY OR CONDITION OF ANY KIND. WE AND/OR OUR SUPPLIERS HEREBY DISCLAIM ALL WARRANTIES AND CONDITIONS WITH REGARD TO THIS INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS, INCLUDING ALL IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT.',
          'TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL WE AND/OR OUR SUPPLIERS BE LIABLE FOR ANY DIRECT, INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF USE, DATA OR PROFITS, ARISING OUT OF OR IN ANY WAY CONNECTED WITH THE USE OR PERFORMANCE OF THIS SITE, WITH THE DELAY OR INABILITY TO USE THIS SITE OR RELATED SERVICES, THE PROVISION OF OR FAILURE TO PROVIDE SERVICES, OR FOR ANY INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS OBTAINED THROUGH THIS SITE, OR OTHERWISE ARISING OUT OF THE USE OF THIS SITE, WHETHER BASED ON CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY OR OTHERWISE, EVEN IF WE OR ANY OF OUR SUPPLIERS HAS BEEN ADVISED OF THE POSSIBILITY OF DAMAGES. BECAUSE SOME STATES/JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, THE ABOVE LIMITATION MAY NOT APPLY TO YOU. IF YOU ARE DISSATISFIED WITH ANY PORTION OF THIS SITE, OR WITH ANY OF THESE TERMS OF USE, YOUR SOLE AND EXCLUSIVE REMEDY IS TO DISCONTINUE USING THIS SITE.',
        ],
      },
      { h: 'Trademarks', p: ['The names of actual companies and products mentioned herein may be the trademarks of their respective owners. The example companies, organizations, products, people and events depicted herein are fictitious. No association with any real company, organization, product, person, or event is intended or should be inferred. Any rights not expressly granted herein are reserved.'] },
      { h: 'Contact us', p: [contact] },
    ],
  },
  {
    slug: 'cookie-policy',
    title: 'Cookie Policy',
    seoTitle: 'Cookie Policy' + brand,
    description: 'The cookies and similar tools used on the Advanced Back & Neck Pain Center website, and how to change your choices at any time.',
    lede: 'What we store on your device, why, and how you can change your mind.',
    updated: 'November 23, 2026',
    blocks: [
      { h: 'What are cookies', p: ['Cookies are small text files that a website saves on your device. We also use similar tools, such as your browser’s local storage. They help a site work, remember your choices and, if you allow it, understand how the site is used.'] },
      { h: 'Your choices', p: ['When you first visit, a small banner lets you accept all, reject all, or customize. You can change your choices at any time with the button below. Rejecting non-essential cookies does not stop you from reading the site or booking a visit.'], cookieButton: true },
      { h: 'What we use', ul: [
        'Necessary: remembers your cookie choice (stored in your browser as “abnp-consent” for up to 180 days). The site cannot work properly without it.',
        'Chat and helpers: loads our chat window from LeadConnector so you can message the front desk. It loads only if you allow it.',
        'Analytics and marketing: this site does not currently use them. If we add them later, they will stay off until you allow them.',
      ] },
      { h: 'Third-party content', p: [
        'Some pages show content from other companies, such as patient videos from YouTube, a map from Google Maps and our online booking calendar. These providers may set their own cookies when you use their content. Please read their privacy policies to learn more.',
      ] },
      { h: 'Browser controls', p: ['You can also block or delete cookies in your browser settings. If you do, some features may not work. If your browser sends a Global Privacy Control signal, we treat it as a request to keep non-essential cookies off.'] },
      { h: 'Questions', p: [contact, 'See also our Privacy Policy.'] },
    ],
  },
  {
    slug: 'accessibility',
    title: 'Accessibility Statement',
    seoTitle: 'Accessibility Statement' + brand,
    description: 'Our commitment to making the Advanced Back & Neck Pain Center website usable for everyone, and how to ask for help.',
    lede: 'Everyone should be able to read about our care and book a visit.',
    updated: 'November 23, 2026',
    blocks: [
      { h: 'Our commitment', p: ['Advanced Back & Neck Pain Center wants every patient to be able to use this website. We work to follow the Web Content Accessibility Guidelines (WCAG) 2.1, level AA, and we review the site as we update it.'] },
      { h: 'What we do', ul: [
        'Clear headings, plain words and readable text sizes.',
        'Alt text for photos, and captions or descriptions for videos where we can.',
        'Menus and buttons you can use with a keyboard, with a visible focus outline.',
        'A “skip to content” link and reduced motion for people who ask their device for it.',
      ] },
      { h: 'Known limits', p: ['Some content comes from other companies, such as our online booking calendar, chat window, maps and patient videos. We cannot always control how accessible these are. Some downloadable forms are scanned PDFs, which may not work well with screen readers.'] },
      { h: 'Need help or want to report a problem', p: ['If you have trouble using any part of this site, or need a form in another format, please tell us. We will help you book a visit or get the information you need.', contact] },
    ],
  },
  {
    slug: 'medical-disclaimer',
    title: 'Medical Disclaimer',
    seoTitle: 'Medical Disclaimer' + brand,
    description: 'The information on this website is for general education and is not medical advice. Read our medical disclaimer.',
    lede: 'This website shares general information. It does not replace a visit with a doctor.',
    updated: 'November 23, 2026',
    blocks: [
      { h: 'General information only', p: ['The content on this website is for general education. It is not medical advice, a diagnosis or a treatment plan, and it does not create a doctor and patient relationship.'] },
      { h: 'Talk to a professional', p: ['Always ask a qualified health professional about your own situation. Do not ignore professional advice, or delay getting care, because of something you read here. Results from care can vary from person to person, and stories from patients show individual experiences.'] },
      { h: 'In an emergency', p: ['If you think you are having a medical emergency, call 911 or go to the nearest emergency room. Do not use this website or our office phone for emergencies.'] },
      { h: 'Questions', p: [contact, 'See also our Terms & Conditions.'] },
    ],
  },
];

export const getLegal = (slug: string) => legalPages.find((p) => p.slug === slug);
