/**
 * ammonoidProgramme.js
 * Single source of truth for the Ammonoid Paleobiology Research Programme campaign:
 * landing-page copy, campaign dates, fees, flyer asset and the 37-question
 * application form schema (used by the multi-step native form).
 *
 * No copy is hardcoded inside campaign components.
 */

export const PROGRAMME_PATH = '/collaborate/ammonoid-paleobiology-programme';

// 30 September 2026, 11:59 PM India Standard Time (UTC+05:30)
export const APPLICATION_DEADLINE_ISO = '2026-09-30T23:59:59+05:30';

export const isApplicationOpen = (now = new Date()) =>
  now.getTime() <= new Date(APPLICATION_DEADLINE_ISO).getTime();

export const flyer = {
  src: '/campaign/ammonoid-programme-flyer.webp',
  srcSmall: '/campaign/ammonoid-programme-flyer-small.webp',
  width: 2000,
  height: 1414,
  alt: 'Ammonoid Paleobiology Research Programme for school students aged 12 to 18 organised by Blue Blocks Micro Research Institute',
};

export const programme = {
  eyebrow: 'Authentic Research Programme for School Students',
  title: 'Ammonoid Paleobiology Research Programme',
  supportingHeading: 'Evolution and Study of Fossils',
  marketingLine: 'Explore the world of the Marine Jurassic Park',
  description:
    'A hands-on research programme for school students investigating ammonoid fossils with real paleobiology data.',
  audience: 'Ages 12–18',
  keyFacts: [
    { label: 'Duration', value: '6 Weeks' },
    { label: 'Sessions', value: '12 Live Online Sessions' },
    { label: 'Frequency', value: '2 Sessions Weekly' },
    { label: 'Length', value: '90 Minutes Each' },
    { label: 'Schedule', value: 'Weekend Sessions' },
    { label: 'Eligibility', value: 'Ages 12–18' },
  ],
  dates: {
    deadlineLabel: 'Applications Close',
    deadline: '30 September 2026',
    interviewLabel: 'Interview Round',
    interview: '10 October 2026',
  },
  cta: {
    primary: 'Apply Now',
    secondary: 'Learn About the Programme',
  },
  about: {
    heading: 'About the Programme',
    paragraphs: [
      'Ammonoids were among the most successful ocean animals ever. These shelled cephalopods, relatives of today\u2019s octopus, squid and nautilus, thrived worldwide for over 300 million years before vanishing with the dinosaurs.',
      'Because ammonoids evolved rapidly and spread globally, scientists use them to date rocks with precision and to understand how life responds to changing oceans and mass extinctions.',
      'In this programme, students will not simply read about ammonoids. They will investigate them using the kinds of evidence, datasets and analytical approaches used in real scientific research.',
    ],
  },
  focus: {
    heading: 'What This Programme Is About',
    lead: 'A hands-on programme built around real paleobiology data.',
    paragraphs: [
      'Instead of memorising facts, participants will work with real datasets, shell-shape and size measurements (morphometrics), fossil-occurrence records from published databases, and patterns of diversity and extinction through geological time.',
      'Students will learn how to ask authentic scientific questions, investigate evidence and develop research-based conclusions.',
    ],
  },
  activities: {
    heading: 'What You Will Do',
    items: [
      'Learn the biology, morphology and evolution of ammonoids.',
      'Work with real morphometric and fossil-occurrence datasets.',
      'Organise, analyse and visualise scientific data.',
      'Develop and investigate an original research question under expert mentorship.',
      'Produce genuine research outputs such as a report, poster and research paper.',
    ],
  },
  audienceSection: {
    heading: 'Who Should Apply?',
    paragraphs: [
      'Motivated school students who are curious about science, evolution, deep time, fossils or data.',
      'No prior knowledge of fossils is required.',
      'What matters most is curiosity, commitment and a willingness to work hard on authentic research.',
    ],
    ageRange: 'Age range: 12–18 years',
  },
  format: {
    heading: 'Programme Format',
    items: [
      'Live online sessions led by mentors',
      'Weekend sessions',
      '6-week programme',
      '12 sessions in total',
      '2 sessions per week',
      'Approximately 90 minutes per session',
      'Weekly homework and independent work between sessions',
      'Close mentorship in small groups',
    ],
  },
  commitment: {
    heading: 'Dedication Is Essential',
    paragraphs: [
      'This is a serious research programme, not a casual workshop.',
      'Every participant is expected to attend the sessions, complete weekly homework and dedicate meaningful time to independent work between sessions.',
      'The selection process is designed to identify students who are genuinely interested and committed to completing authentic research.',
    ],
  },
  selection: {
    heading: 'How Selection Works',
    steps: [
      'Submit the completed application by 30 September 2026.',
      'Applications are reviewed and a shortlist is prepared.',
      'Shortlisted candidates are invited to an interview.',
      'Interview round takes place on 10 October 2026.',
      'Final programme participants are selected following the interview process.',
    ],
    note:
      'Selection is on a shortlist basis. Submission of an application does not guarantee admission to the programme.',
  },
  fee: {
    heading: 'Programme Fee',
    items: [
      { label: 'Indian Students', value: 'INR 40,000' },
      { label: 'International Students', value: 'USD 1,000' },
    ],
    paragraphs: [
      'The programme fee covers mentorship, learning materials and dataset access.',
      'Conference-related expenses, if applicable, are separate and will be communicated based on the specific conference.',
    ],
  },
  conference: {
    heading: 'International Conference Opportunity',
    paragraphs: [
      'Outstanding research may be selected for presentation at an international conference.',
      'If a student\u2019s research is selected, the participant may be expected to attend and present the work.',
      'Conference participation, acceptance and publication are dependent on the quality of the research and the requirements of the relevant conference or journal.',
      'Any applicable conference-related costs will be communicated separately once the opportunity is confirmed.',
    ],
  },
  flyerSection: {
    heading: 'Programme at a Glance',
    caption: 'Click the flyer to view it larger.',
  },
  contact: {
    heading: 'Questions?',
    email: 'research@blueblocks.in',
    copy:
      'For questions about the programme or application process, contact the Blue Blocks Micro Research Institute research team.',
  },
  closed: {
    heading: 'Applications for This Intake Are Closed',
    copy:
      'Applications for the current Ammonoid Paleobiology Research Programme intake closed on 30 September 2026.',
    contactCopy: 'For future programme enquiries, contact research@blueblocks.in.',
  },
};

export const application = {
  heading: 'Application Form',
  intro:
    'Complete all six steps. Your answers are retained while you move between steps and are submitted only once at the end.',
  declarationText:
    'I confirm that the information provided in this form is true and complete to the best of my knowledge. I understand that this is a serious research programme requiring full attendance, weekly homework and dedicated independent effort, and I am committed to taking part accordingly.',
  guardianConsentLabel: 'Parent / Guardian Consent',
  guardianConsentText:
    'I confirm that I am the parent/legal guardian of the applicant, or that this application is being submitted with the knowledge and consent of the applicant\u2019s parent/legal guardian. I consent to the information provided being used by Blue Blocks Micro Research Institute for programme selection, communication and administration.',
  privacyPath: '/privacy',
  success: {
    heading: 'Application Received',
    paragraphs: [
      'Thank you for applying to the Ammonoid Paleobiology Research Programme.',
      'Your application has been successfully received by the Blue Blocks Micro Research Institute.',
      'Applications will be reviewed as part of the shortlist process. Shortlisted applicants will be contacted regarding the interview round.',
    ],
  },
  errorMessage:
    'We couldn\u2019t submit your application at the moment. Please check your connection and try again. If the problem continues, contact research@blueblocks.in.',
};

/**
 * Multi-step schema — 37 questions across six sections.
 * type: text | date | age | email | tel | textarea | radio | select | file | checkbox
 */
export const formSteps = [
  {
    id: 'personal',
    title: 'Personal Details',
    fields: [
      { name: 'full_name', q: 1, label: 'Full name (as it should appear on the certificate)', type: 'text', required: true },
      { name: 'date_of_birth', q: 2, label: 'Date of Birth', type: 'date', required: true },
      { name: 'age', q: 3, label: 'Age', type: 'age', required: true, help: 'Calculated automatically from your date of birth. Applicants must be 12–18 years old.' },
      { name: 'gender', q: 4, label: 'Gender', type: 'text', required: true },
      { name: 'nationality', q: 5, label: 'Nationality', type: 'text', required: true },
      { name: 'email', q: 6, label: 'Email Address', type: 'email', required: true },
      { name: 'mobile', q: 7, label: 'Mobile Number With Country Code', type: 'tel', required: true, help: 'Include country code, e.g. +91' },
      { name: 'city_country', q: 8, label: 'City & Country of Residence', type: 'text', required: true },
      { name: 'postal_address', q: 9, label: 'Full Postal Address', type: 'textarea', required: true },
    ],
  },
  {
    id: 'academic',
    title: 'Academic Details',
    fields: [
      { name: 'school_name', q: 10, label: 'Name of School', type: 'text', required: true },
      { name: 'grade', q: 11, label: 'Current Grade / Class / Year', type: 'text', required: true },
      { name: 'curriculum', q: 12, label: 'Curriculum / Board', type: 'select', required: true, options: ['CBSE', 'ICSE', 'IGCSE', 'IB', 'State Board', 'Other'] },
      { name: 'curriculum_other', label: 'Please specify your curriculum / board', type: 'text', required: true, showIf: { field: 'curriculum', equals: 'Other' } },
      { name: 'subjects', q: 13, label: 'Subjects You Are Currently Studying', type: 'textarea', required: true, help: 'Especially include science subjects.' },
      { name: 'studied_science', q: 14, label: 'Have You Studied Any Biology, Geology or Earth Science?', type: 'radio', required: true, options: ['Yes', 'No'] },
      { name: 'studied_science_details', q: 15, label: 'If Yes, Please Give Brief Details', type: 'textarea', required: false, showIf: { field: 'studied_science', equals: 'Yes' } },
    ],
  },
  {
    id: 'guardian',
    title: 'Parent / Guardian',
    fields: [
      { name: 'guardian_name', q: 16, label: 'Parent / Guardian Name', type: 'text', required: true },
      { name: 'guardian_relationship', q: 17, label: 'Relationship to Applicant', type: 'text', required: true },
      { name: 'guardian_mobile', q: 18, label: 'Parent / Guardian Mobile', type: 'tel', required: true },
      { name: 'guardian_email', q: 19, label: 'Parent / Guardian Email', type: 'email', required: true },
    ],
  },
  {
    id: 'motivation',
    title: 'Interests & Motivation',
    fields: [
      { name: 'research_interest', q: 20, label: 'Your Primary Research Interest', type: 'textarea', required: true },
      { name: 'achievements', q: 21, label: 'List of achievements (academic, extracurricular or other)', type: 'textarea', required: true },
      { name: 'achievements_file', q: 22, label: 'Upload Achievements Document', type: 'file', required: false, accept: '.pdf', help: 'Optional. PDF only, maximum 10 MB.' },
      { name: 'science_achievements', q: 23, label: 'List of Achievements Specifically in Science', type: 'textarea', required: true },
      { name: 'science_achievements_file', q: 24, label: 'Upload Science Achievements Document', type: 'file', required: false, accept: '.pdf', help: 'Optional. PDF only, maximum 10 MB.' },
      { name: 'prior_research', q: 25, label: 'Any Prior Research or Project Experience', type: 'textarea', required: true, help: 'If you have none, enter "None".' },
      { name: 'data_comfort', q: 26, label: 'How Comfortable Are You Working With Data?', type: 'radio', required: true, options: ['Not yet', 'A little', 'Comfortable'], help: 'For example spreadsheets, basic analysis and charts.' },
      { name: 'why_join', q: 27, label: 'Why Do You Want to Join This Programme on Ammonoid Fossil Research?', type: 'textarea', required: true, wordRange: [150, 200] },
      { name: 'why_research_matters', q: 28, label: 'Why Do You Think Research Is Important?', type: 'textarea', required: true, wordRange: [150, 200] },
      { name: 'ammonoid_report', q: 29, label: 'Upload a Short Report on Ammonoids and Ammonites', type: 'file', required: true, accept: '.pdf,.doc,.docx', help: 'Required. Upload your short report on Ammonoids and Ammonites. PDF, DOC or DOCX, maximum 10 MB.' },
    ],
  },
  {
    id: 'logistics',
    title: 'Commitment & Logistics',
    fields: [
      { name: 'has_device', q: 30, label: 'Do You Have a Working Laptop / Computer With a Stable Internet Connection?', type: 'radio', required: true, options: ['Yes', 'No'] },
      { name: 'time_zone', q: 31, label: 'Your Time Zone', type: 'text', required: true, help: 'This helps us schedule live sessions. For example: IST (UTC+05:30).' },
      { name: 'attend_all', q: 32, label: 'Will You Be Able to Attend Every Session?', type: 'radio', required: true, options: ['Yes', 'No', 'Most of them'] },
      { name: 'attend_explanation', q: 33, label: 'If "Most of Them", Please Explain', type: 'textarea', required: true, showIf: { field: 'attend_all', equals: 'Most of them' } },
      { name: 'homework_willing', q: 34, label: 'There Will Be Additional Homework and Independent Work Each Week. Are You Willing to Complete It?', type: 'radio', required: true, options: ['Yes', 'No'] },
      { name: 'conference_willing', q: 35, label: 'If Your Work Is Selected for an International Conference, Are You Willing to Attend and Present It?', type: 'radio', required: true, options: ['Yes', 'No'], help: 'Details of any conference-related costs will be shared based on the specific conference the work is selected for.' },
      { name: 'referral_source', q: 36, label: 'How Did You Hear About This Programme?', type: 'text', required: true },
    ],
  },
  {
    id: 'declaration',
    title: 'Declaration & Submit',
    fields: [
      { name: 'declaration', q: 37, label: 'Declaration Statement', type: 'checkbox', required: true },
      { name: 'guardian_consent', label: 'Parent / Guardian Consent', type: 'checkbox', required: true },
    ],
  },
];

export const strip = {
  items: [
    'Ammonoid Paleobiology Research Programme',
    'Applications Open',
    'Ages 12–18',
    '12 Live Online Sessions',
    'Applications Close 30 September 2026',
    'Apply Now →',
  ],
  ariaLabel: 'Ammonoid Paleobiology Research Programme — applications open, closing 30 September 2026. Apply now.',
};

export const popup = {
  heading: 'Ammonoid Paleobiology Research Programme',
  copy: [
    'Authentic research programme for school students aged 12–18.',
    'Applications close 30 September 2026.',
  ],
  cta: 'Explore Programme & Apply',
  closeLabel: 'Close programme announcement',
};

export default programme;
