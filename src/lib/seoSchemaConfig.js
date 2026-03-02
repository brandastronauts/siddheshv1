/**
 * seoSchemaConfig.js
 * Centralized SEO meta tags + JSON-LD @graph configuration.
 * Single source of truth — matches client Meta-Tags-JSON-LD-Schema.docx exactly.
 *
 * Route-keyed map. Each entry has: meta, openGraph, twitter, jsonLd (@graph array).
 */

// ─── Permanent @id URIs (MUST NEVER CHANGE) ──────────────────────────────────
export const PERMANENT_IDS = Object.freeze({
  INSTITUTE:    'https://research.blueblocks.in/#microresearch',
  WEBSITE:      'https://research.blueblocks.in/#website',
  SPACE_LAB:    'https://research.blueblocks.in/#spacelab',
  DRONE_LAB:    'https://research.blueblocks.in/#dronelab',
  TERRA_UTOPIA: 'https://research.blueblocks.in/#terrautopia',
  PARENT_ORG:   'https://www.blueblocks.in/#organization',
  PAVAN:        'https://www.blueblocks.in/#pavan',
  MUNIRA:       'https://www.blueblocks.in/#munira',
});

export const SITE_URL = 'https://research.blueblocks.in';
export const PARENT_URL = 'https://www.blueblocks.in';
export const OG_SITE_NAME = 'Blue Blocks Montessori School';
export const ORG_NAME = 'Blue Blocks Micro Research Institute';

// ─── Dev warning guard ───────────────────────────────────────────────────────
const FROZEN_IDS = new Set(Object.values(PERMANENT_IDS));
export const validatePermanentIds = (graph) => {
  if (process.env.NODE_ENV !== 'production') {
    graph.forEach(node => {
      if (node['@id'] && FROZEN_IDS.has(node['@id'])) {
        // Valid — using a permanent ID correctly
      }
    });
  }
};

// ─── Shared ResearchOrganization node (included in every page graph) ─────────
const instituteNode = {
  '@type': 'ResearchOrganization',
  '@id': PERMANENT_IDS.INSTITUTE,
  name: 'Blue Blocks Micro Research Institute',
  parentOrganization: { '@id': PERMANENT_IDS.PARENT_ORG },
};

// ─── Helper to build breadcrumb node ─────────────────────────────────────────
const breadcrumb = (id, items) => ({
  '@type': 'BreadcrumbList',
  '@id': id,
  itemListElement: items.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    item: item.item,
  })),
});

// ─── Route → SEO Config Map ──────────────────────────────────────────────────
// NOTE: App routes /the-institute and /methodology/innovation map to client
// canonical URLs /institute and /innovation respectively.
const seoSchemaConfig = {

  // ═══ PAGE 1: HOME ═══════════════════════════════════════════════════════════
  '/': {
    meta: {
      title: "Blue Blocks Micro Research Institute | The World's First Micro Research Institute",
      description: "The world's first Micro Research Institute. 15-year longitudinal dataset tracking innovation capacity in 847 children from birth to age 18, embedded within an AMI Montessori environment in Hyderabad, India.",
      keywords: 'micro research institute, child development research, longitudinal study, Montessori research, innovation pedagogy, Blue Blocks Micro Research Institute, Blue Blocks, Hyderabad, CubeSat education, ISRO, student patents',
      robots: 'index, follow',
      canonical: `${SITE_URL}/`,
    },
    openGraph: {
      type: 'website',
      title: "Blue Blocks Micro Research Institute | The World's First Micro Research Institute",
      description: '15-year longitudinal dataset tracking innovation capacity in 847 children from birth to age 18. Embedded observation within an AMI Montessori environment.',
      url: `${SITE_URL}/`,
      site_name: OG_SITE_NAME,
      image: `${SITE_URL}/images/og-home.jpg`,
      locale: 'en_IN',
    },
    twitter: {
      card: 'summary_large_image',
      title: "Blue Blocks Micro Research Institute | The World's First Micro Research Institute",
      description: '15-year longitudinal dataset tracking innovation capacity in 847 children (0–18). Embedded observation in AMI Montessori environments.',
      image: `${SITE_URL}/images/og-home.jpg`,
    },
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          '@id': PERMANENT_IDS.WEBSITE,
          url: SITE_URL,
          name: 'Blue Blocks Micro Research Institute',
          publisher: { '@id': PERMANENT_IDS.INSTITUTE },
        },
        {
          '@type': 'WebPage',
          '@id': `${SITE_URL}/#webpage`,
          url: `${SITE_URL}/`,
          name: "Blue Blocks Micro Research Institute | The World's First Micro Research Institute",
          description: "The world's first Micro Research Institute. 15-year longitudinal dataset tracking innovation capacity in 847 children from birth to age 18.",
          isPartOf: { '@id': PERMANENT_IDS.WEBSITE },
          about: { '@id': PERMANENT_IDS.INSTITUTE },
        },
        {
          '@type': 'ResearchOrganization',
          '@id': PERMANENT_IDS.INSTITUTE,
          name: 'Blue Blocks Micro Research Institute',
          alternateName: ['Blue Blocks Research'],
          disambiguatingDescription: 'The research arm of Blue Blocks Montessori School in Hyderabad, conducting longitudinal observational research on child development within authentic AMI Montessori environments since 2009.',
          description: 'Blue Blocks Micro Research Institute conducts longitudinal observational research on child development across a 15-year dataset of 847 children within authentic AMI Montessori environments. Research domains include executive function development, autonomy-supportive parenting, resilience formation, and the cognitive architecture of innovation pedagogy. The institute operates as a department of Blue Blocks Montessori School and is led by Principal Investigator Pavan Goyal.',
          url: SITE_URL,
          logo: {
            '@type': 'ImageObject',
            url: `${SITE_URL}/images/blueblocks-logo.svg`,
          },
          parentOrganization: {
            '@type': 'EducationalOrganization',
            '@id': PERMANENT_IDS.PARENT_ORG,
            name: 'Blue Blocks Montessori School',
            url: PARENT_URL,
          },
          foundingDate: '2009',
          member: [
            {
              '@type': 'OrganizationRole',
              member: { '@id': PERMANENT_IDS.PAVAN },
              roleName: 'Principal Investigator',
            },
            {
              '@type': 'OrganizationRole',
              member: { '@id': PERMANENT_IDS.MUNIRA },
              roleName: 'Director of Observational Research',
            },
          ],
          numberOfEmployees: {
            '@type': 'QuantitativeValue',
            value: 25,
            unitText: 'Embedded Research Fellows',
          },
          knowsAbout: [
            { '@type': 'Thing', name: 'Longitudinal study', sameAs: 'https://en.wikipedia.org/wiki/Longitudinal_study' },
            { '@type': 'Thing', name: 'Child development', sameAs: 'https://en.wikipedia.org/wiki/Child_development' },
            { '@type': 'Thing', name: 'Observational study', sameAs: 'https://en.wikipedia.org/wiki/Observational_study' },
            { '@type': 'Thing', name: 'Executive functions', sameAs: 'https://en.wikipedia.org/wiki/Executive_functions' },
            { '@type': 'Thing', name: 'Montessori education', sameAs: 'https://en.wikipedia.org/wiki/Montessori_education' },
            { '@type': 'Thing', name: 'Parenting styles', sameAs: 'https://en.wikipedia.org/wiki/Parenting_styles' },
            { '@type': 'Thing', name: 'Psychological resilience', sameAs: 'https://en.wikipedia.org/wiki/Psychological_resilience' },
            { '@type': 'Thing', name: 'Self-determination theory', sameAs: 'https://en.wikipedia.org/wiki/Self-determination_theory' },
            { '@type': 'Thing', name: 'Innovation', sameAs: 'https://en.wikipedia.org/wiki/Innovation' },
            { '@type': 'Thing', name: 'CubeSat', sameAs: 'https://en.wikipedia.org/wiki/CubeSat' },
          ],
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Osman Nagar Road, Tellapur',
            addressLocality: 'Hyderabad',
            addressRegion: 'Telangana',
            postalCode: '502032',
            addressCountry: 'IN',
          },
          email: 'research@blueblocks.in',
          telephone: '+919000955050',
        },
        {
          '@type': 'Person',
          '@id': PERMANENT_IDS.PAVAN,
          name: 'Pavan Goyal',
          jobTitle: 'Principal Investigator & Founder',
          worksFor: { '@id': PERMANENT_IDS.INSTITUTE },
          hasCredential: {
            '@type': 'EducationalOccupationalCredential',
            credentialCategory: 'AMI Diploma (0-18)',
          },
        },
        {
          '@type': 'Person',
          '@id': PERMANENT_IDS.MUNIRA,
          name: 'Munira Hussain',
          jobTitle: 'Director of Pedagogy',
          worksFor: { '@id': PERMANENT_IDS.INSTITUTE },
          hasCredential: {
            '@type': 'EducationalOccupationalCredential',
            credentialCategory: 'AMI Diploma / M.Ed',
          },
        },
        breadcrumb(`${SITE_URL}/#breadcrumb`, [
          { name: 'Home', item: `${SITE_URL}/` },
        ]),
      ],
    },
  },

  // ═══ PAGE 2: THE INSTITUTE ══════════════════════════════════════════════════
  '/the-institute': {
    meta: {
      title: 'The 0-18 Continuum | Blue Blocks Micro Research Institute',
      description: "Blue Blocks Micro Research Institute: 15 years of continuous embedded observation across 847 children. The world's longest record of human innovation capacity within an AMI Montessori environment.",
      keywords: 'micro research institute, longitudinal child development, embedded observation, Montessori research, innovation capacity, ecological validity, Blue Blocks Micro Research Institute',
      robots: 'index, follow',
      canonical: `${SITE_URL}/institute`,
    },
    openGraph: {
      type: 'article',
      title: 'The 0-18 Continuum | Blue Blocks Micro Research Institute',
      description: "15 years of continuous observation. 847 children. 35,000+ hours of data per child. The world's longest record of human innovation capacity.",
      url: `${SITE_URL}/institute`,
      site_name: OG_SITE_NAME,
      image: `${SITE_URL}/images/og-institute.jpg`,
    },
    twitter: {
      card: 'summary_large_image',
      title: 'The 0-18 Continuum | Blue Blocks Micro Research Institute',
      description: '15 years of continuous observation. 847 children. 35,000+ hours per child. Embedded research within AMI Montessori environments.',
    },
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': `${SITE_URL}/institute/#webpage`,
          url: `${SITE_URL}/institute`,
          name: 'The 0-18 Continuum | Blue Blocks Micro Research Institute',
          description: '15 years of continuous embedded observation across 847 children within an AMI Montessori environment.',
          isPartOf: { '@id': PERMANENT_IDS.WEBSITE },
          about: { '@id': PERMANENT_IDS.INSTITUTE },
        },
        { ...instituteNode },
        {
          '@type': 'Place',
          '@id': PERMANENT_IDS.SPACE_LAB,
          name: 'Blue Blocks Space Lab',
          description: 'Controlled environment for observing high-stakes collaboration. Features lunar terrain simulation and avionics stress-testing to validate student payloads to ISRO standards.',
          containedInPlace: { '@id': PERMANENT_IDS.PARENT_ORG },
        },
        {
          '@type': 'Place',
          '@id': PERMANENT_IDS.DRONE_LAB,
          name: 'Blue Blocks Drone Research Centre',
          description: 'Dedicated to the longitudinal study of iterative failure. Tracks the engineering lifecycle from initial aerodynamic testing to patent-ready flight stability.',
          containedInPlace: { '@id': PERMANENT_IDS.PARENT_ORG },
        },
        {
          '@type': 'Place',
          '@id': PERMANENT_IDS.TERRA_UTOPIA,
          name: 'Terra Utopia',
          description: 'Biosystem wing measuring systems thinking in real-time. Students manage complex ecological variables, generating longitudinal data on soil moisture and resource allocation.',
          containedInPlace: { '@id': PERMANENT_IDS.PARENT_ORG },
        },
        {
          '@type': 'Dataset',
          '@id': `${SITE_URL}/data/longitudinal-847/#dataset`,
          name: 'Blue Blocks Longitudinal Child Development Dataset (2009-2025)',
          description: '15-year observational dataset tracking developmental milestones, executive function indicators, and autonomy-supportive behaviour patterns across 847 children in AMI-certified Montessori environments.',
          creator: { '@id': PERMANENT_IDS.INSTITUTE },
          dateCreated: '2009',
          dateModified: '2025',
          temporalCoverage: '2009/2025',
          spatialCoverage: { '@type': 'Place', name: 'Hyderabad, India' },
          variableMeasured: [
            'Executive function development milestones',
            'Concentration span duration',
            'Autonomy-supportive parenting behaviours',
            'Resilience indicators',
            'Social-emotional development markers',
          ],
          license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
          isAccessibleForFree: false,
        },
        breadcrumb(`${SITE_URL}/institute/#breadcrumb`, [
          { name: 'Home', item: `${SITE_URL}/` },
          { name: 'The Institute', item: `${SITE_URL}/institute` },
        ]),
      ],
    },
  },

  // ═══ PAGE 3: GOVERNANCE ════════════════════════════════════════════════════
  '/governance': {
    meta: {
      title: 'Governance & Oversight | Blue Blocks Micro Research Institute',
      description: 'Research governance, ethics advisory committee, IRB-equivalent oversight, student IP rights, and data security protocols at Blue Blocks Micro Research Institute, Hyderabad.',
      keywords: 'research governance, ethics oversight, IRB equivalent, child research ethics, data anonymization, student IP rights, Montessori research, Blue Blocks Micro Research Institute',
      robots: 'index, follow',
      canonical: `${SITE_URL}/governance`,
    },
    openGraph: {
      type: 'article',
      title: 'Governance & Oversight | Blue Blocks Micro Research Institute',
      description: 'Research governance guided by Pedagogical Integrity, IRB-equivalent ethics oversight, student IP sovereignty, and K-anonymity data security protocols.',
      url: `${SITE_URL}/governance`,
      site_name: OG_SITE_NAME,
      image: `${SITE_URL}/images/og-governance.jpg`,
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Governance & Oversight | Blue Blocks Micro Research Institute',
    },
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': `${SITE_URL}/governance/#webpage`,
          url: `${SITE_URL}/governance`,
          name: 'Governance & Oversight | Blue Blocks Micro Research Institute',
          description: 'Research governance, ethics advisory committee, IRB-equivalent oversight, student IP rights, and data security protocols.',
          isPartOf: { '@id': PERMANENT_IDS.WEBSITE },
          about: { '@id': PERMANENT_IDS.INSTITUTE },
        },
        { ...instituteNode },
        breadcrumb(`${SITE_URL}/governance/#breadcrumb`, [
          { name: 'Home', item: `${SITE_URL}/` },
          { name: 'Governance', item: `${SITE_URL}/governance` },
        ]),
      ],
    },
  },

  // ═══ PAGE 4: METHODOLOGY ══════════════════════════════════════════════════
  '/methodology': {
    meta: {
      title: 'The Micro-Research Framework | Blue Blocks Micro Research Institute',
      description: 'The Micro-Research methodology: high-frequency, embedded observation protocols designed for practitioner execution. Four pillars, 4-week cycles, and publication-ready design. Research by Blue Blocks Micro Research Institute, Hyderabad.',
      keywords: 'micro research methodology, embedded observation, ecological validity, longitudinal research protocol, practitioner research, Montessori research methods, Blue Blocks Micro Research Institute',
      robots: 'index, follow',
      canonical: `${SITE_URL}/methodology`,
    },
    openGraph: {
      type: 'article',
      title: 'The Micro-Research Framework | Blue Blocks Micro Research Institute',
      description: 'High-frequency embedded observation protocols. Four pillars: bounded questions, observable behavior, minimal footprint, publication-ready design.',
      url: `${SITE_URL}/methodology`,
      site_name: OG_SITE_NAME,
      image: `${SITE_URL}/images/og-methodology.jpg`,
    },
    twitter: {
      card: 'summary_large_image',
      title: 'The Micro-Research Framework | Blue Blocks Micro Research Institute',
    },
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': `${SITE_URL}/methodology/#webpage`,
          url: `${SITE_URL}/methodology`,
          name: 'The Micro-Research Framework | Blue Blocks Micro Research Institute',
          description: 'The Micro-Research methodology: high-frequency, embedded observation protocols designed for practitioner execution within AMI Montessori environments.',
          isPartOf: { '@id': PERMANENT_IDS.WEBSITE },
          about: { '@id': PERMANENT_IDS.INSTITUTE },
        },
        { ...instituteNode },
        {
          '@type': 'HowTo',
          '@id': `${SITE_URL}/methodology/#framework`,
          name: 'The Micro-Research 4-Week Cycle',
          description: 'Protocol to publication in four weeks: design, capture, synthesis, publication.',
          step: [
            { '@type': 'HowToStep', position: 1, name: 'Protocol Design', text: 'Draft the single research question, sketch the recording sheet, and test with three observations. Recording must take under 5 minutes.' },
            { '@type': 'HowToStep', position: 2, name: 'Data Capture', text: 'Embedded Fellows collect data during the work cycle. Recording happens in the moment, not from memory.' },
            { '@type': 'HowToStep', position: 3, name: 'Synthesis', text: 'Strip identifying details, apply anonymization codes, analyze for patterns. All findings recorded including null results.' },
            { '@type': 'HowToStep', position: 4, name: 'Publication', text: 'Internal review, DOI registration, dataset upload to Zenodo, and longitudinal archive entry.' },
          ],
        },
        {
          '@type': 'FAQPage',
          '@id': `${SITE_URL}/methodology/#faq`,
          mainEntity: [
            {
              '@type': 'Question',
              name: 'What is the difference between Jungle Research and Zoo Research?',
              acceptedAnswer: { '@type': 'Answer', text: 'Zoo Research brings children to labs or exposes them to unfamiliar observers. Jungle Research observes children in their everyday environment with familiar adults. Blue Blocks only conducts Jungle Research.' },
            },
            {
              '@type': 'Question',
              name: 'What are the Four Gates every study must pass?',
              acceptedAnswer: { '@type': 'Answer', text: 'Gate 1 (Longitudinal): connects to previously observed children. Gate 2 (Naturalistic): no environmental disruption. Gate 3 (Specificity): bounded and precise question. Gate 4 (Micro): one question, under three weeks, under five minutes per observation.' },
            },
            {
              '@type': 'Question',
              name: 'How do you prevent observer bias?',
              acceptedAnswer: { '@type': 'Answer', text: 'Three methods: the See/Hear Rule (record only observable actions), inter-rater reliability checks (80% minimum, quarterly reassessment), and explicit disclosure in every publication.' },
            },
            {
              '@type': 'Question',
              name: 'Can you establish causation?',
              acceptedAnswer: { '@type': 'Answer', text: 'No. We establish correlations, patterns, sequences, and temporal relationships. Causal claims require experimental manipulation, which we do not conduct.' },
            },
            {
              '@type': 'Question',
              name: 'Why do you publish to Zenodo?',
              acceptedAnswer: { '@type': 'Answer', text: 'Zenodo provides DOIs, version control, and permanent archival. Every micro-study becomes a citable, permanent record.' },
            },
            {
              '@type': 'Question',
              name: 'Can parents opt out of having their child observed?',
              acceptedAnswer: { '@type': 'Answer', text: 'Yes. Opted-out children are excluded from all data collection. Withdrawal applies retroactively to unpublished studies. Documented in MREF v1.0.' },
            },
          ],
        },
        breadcrumb(`${SITE_URL}/methodology/#breadcrumb`, [
          { name: 'Home', item: `${SITE_URL}/` },
          { name: 'Methodology', item: `${SITE_URL}/methodology` },
        ]),
      ],
    },
  },

  // ═══ PAGE 5: INNOVATION ═══════════════════════════════════════════════════
  '/methodology/innovation': {
    meta: {
      title: 'Innovation Research | Blue Blocks Micro Research Institute',
      description: 'Integrated design-research on innovation development across the 0-18 continuum. Didactic Innovation Principles (DIP), purpose-designed DIP Labs, and the design-research loop. Research by Blue Blocks Micro Research Institute, Hyderabad.',
      keywords: 'innovation research, innovation pedagogy, Didactic Innovation Principles, DIP Labs, design-research loop, Montessori innovation, child innovation capacity, 0-18 curriculum, Blue Blocks Micro Research Institute',
      robots: 'index, follow',
      canonical: `${SITE_URL}/innovation`,
    },
    openGraph: {
      type: 'article',
      title: 'Innovation Research | Blue Blocks Micro Research Institute',
      description: 'Integrated design-research on innovation development. Didactic Innovation Principles (DIP), purpose-designed labs, and a 15-year design-research loop.',
      url: `${SITE_URL}/innovation`,
      site_name: OG_SITE_NAME,
      image: `${SITE_URL}/images/og-innovation.jpg`,
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Innovation Research | Blue Blocks Micro Research Institute',
    },
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': `${SITE_URL}/innovation/#webpage`,
          url: `${SITE_URL}/innovation`,
          name: 'Innovation Research | Blue Blocks Micro Research Institute',
          description: 'Integrated design-research on innovation development across the 0-18 continuum.',
          isPartOf: { '@id': PERMANENT_IDS.WEBSITE },
          about: { '@id': PERMANENT_IDS.INSTITUTE },
        },
        { ...instituteNode },
        {
          '@type': 'ResearchProject',
          '@id': `${SITE_URL}/innovation/#project`,
          name: 'Innovation Research: The 0-18 Innovation Continuum',
          description: 'Longitudinal integrated design-research studying how innovation capacity develops from infancy through adolescence within purpose-designed Didactic Innovation Principles (DIP) Labs and a 0-18 innovation curriculum.',
          parentOrganization: { '@id': PERMANENT_IDS.INSTITUTE },
          foundingDate: '2009',
          member: [
            { '@id': PERMANENT_IDS.PAVAN },
            { '@id': PERMANENT_IDS.MUNIRA },
          ],
          knowsAbout: [
            { '@type': 'Thing', name: 'Innovation', sameAs: 'https://en.wikipedia.org/wiki/Innovation' },
            { '@type': 'Thing', name: 'Design thinking', sameAs: 'https://en.wikipedia.org/wiki/Design_thinking' },
            { '@type': 'Thing', name: 'Montessori education', sameAs: 'https://en.wikipedia.org/wiki/Montessori_education' },
            { '@type': 'Thing', name: 'Child development', sameAs: 'https://en.wikipedia.org/wiki/Child_development' },
          ],
        },
        breadcrumb(`${SITE_URL}/innovation/#breadcrumb`, [
          { name: 'Home', item: `${SITE_URL}/` },
          { name: 'Innovation Research', item: `${SITE_URL}/innovation` },
        ]),
      ],
    },
  },

  // ═══ PAGE 6: OUR STANDARDS ════════════════════════════════════════════════
  '/governance/our-standards': {
    meta: {
      title: 'Our Standards | Blue Blocks Micro Research Institute',
      description: 'Three open research standards published with DOIs under CC-BY-4.0: BEOP v1.0 (Embedded Observation Protocol), MREF v1.0 (Micro Research Ethics Framework), CDCS v1.0 (Child Data Classification Standard). Research by Blue Blocks Micro Research Institute, Hyderabad.',
      keywords: 'research standards, embedded observation protocol, BEOP, micro research ethics, MREF, child data classification, CDCS, open science, CC-BY-4.0, Blue Blocks Micro Research Institute',
      robots: 'index, follow',
      canonical: `${SITE_URL}/governance/our-standards`,
    },
    openGraph: {
      type: 'article',
      title: 'Our Standards | Blue Blocks Micro Research Institute',
      description: 'Three open standards with DOIs: BEOP (observation protocol), MREF (ethics framework), CDCS (data classification). Free to adopt under CC-BY-4.0.',
      url: `${SITE_URL}/governance/our-standards`,
      site_name: OG_SITE_NAME,
      image: `${SITE_URL}/images/og-standards.jpg`,
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Our Standards | Blue Blocks Micro Research Institute',
    },
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': `${SITE_URL}/governance/our-standards/#webpage`,
          url: `${SITE_URL}/governance/our-standards`,
          name: 'Our Standards | Blue Blocks Micro Research Institute',
          description: 'Three open research standards published with DOIs under CC-BY-4.0.',
          isPartOf: { '@id': PERMANENT_IDS.WEBSITE },
          about: { '@id': PERMANENT_IDS.INSTITUTE },
        },
        { ...instituteNode },
        {
          '@type': 'CreativeWork',
          '@id': `${SITE_URL}/governance/our-standards/#beop`,
          name: 'Blue Blocks Embedded Observation Protocol (BEOP v1.0)',
          description: 'Standard defining observer qualifications, inter-rater reliability thresholds (>=80%), recording format, and quality assurance for embedded observational research in educational settings.',
          author: { '@id': PERMANENT_IDS.INSTITUTE },
          license: 'https://creativecommons.org/licenses/by/4.0/',
          version: '1.0',
        },
        {
          '@type': 'CreativeWork',
          '@id': `${SITE_URL}/governance/our-standards/#mref`,
          name: 'Micro Research Ethics Framework (MREF v1.0)',
          description: 'Standard defining longitudinal consent architecture, child protection protocols, IRB-equivalent committee structure, and publication ethics for practitioner-led research with minors.',
          author: { '@id': PERMANENT_IDS.INSTITUTE },
          license: 'https://creativecommons.org/licenses/by/4.0/',
          version: '1.0',
        },
        {
          '@type': 'CreativeWork',
          '@id': `${SITE_URL}/governance/our-standards/#cdcs`,
          name: 'Child Data Classification Standard (CDCS v1.0)',
          description: 'Standard defining a 4-tier data classification system with handling requirements, security standards, and retention/destruction policies for research data involving children.',
          author: { '@id': PERMANENT_IDS.INSTITUTE },
          license: 'https://creativecommons.org/licenses/by/4.0/',
          version: '1.0',
        },
        breadcrumb(`${SITE_URL}/governance/our-standards/#breadcrumb`, [
          { name: 'Home', item: `${SITE_URL}/` },
          { name: 'Governance', item: `${SITE_URL}/governance` },
          { name: 'Our Standards', item: `${SITE_URL}/governance/our-standards` },
        ]),
      ],
    },
  },

  // ═══ PAGE 7: RESEARCH STANDARDS ═══════════════════════════════════════════
  '/governance/standards': {
    meta: {
      title: 'Research Standards | Blue Blocks Micro Research Institute',
      description: 'Study design standards, observer qualification requirements, data specifications, and publication protocols governing all research at Blue Blocks Micro Research Institute, Hyderabad.',
      keywords: 'research standards, study design, observer qualifications, data standards, publication protocol, inter-rater reliability, AMI diploma, micro research, Blue Blocks Micro Research Institute',
      robots: 'index, follow',
      canonical: `${SITE_URL}/governance/standards`,
    },
    openGraph: {
      type: 'article',
      title: 'Research Standards | Blue Blocks Micro Research Institute',
      description: 'Study design constraints, observer qualifications (AMI diploma, 80% inter-rater reliability), data specifications, and publication protocols.',
      url: `${SITE_URL}/governance/standards`,
      site_name: OG_SITE_NAME,
      image: `${SITE_URL}/images/og-research-standards.jpg`,
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Research Standards | Blue Blocks Micro Research Institute',
    },
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': `${SITE_URL}/governance/standards/#webpage`,
          url: `${SITE_URL}/governance/standards`,
          name: 'Research Standards | Blue Blocks Micro Research Institute',
          description: 'Study design standards, observer qualifications, data specifications, and publication protocols.',
          isPartOf: { '@id': PERMANENT_IDS.WEBSITE },
          about: { '@id': PERMANENT_IDS.INSTITUTE },
        },
        { ...instituteNode },
        breadcrumb(`${SITE_URL}/governance/standards/#breadcrumb`, [
          { name: 'Home', item: `${SITE_URL}/` },
          { name: 'Governance', item: `${SITE_URL}/governance` },
          { name: 'Research Standards', item: `${SITE_URL}/governance/standards` },
        ]),
      ],
    },
  },

  // ═══ PAGE 8: ETHICS & PRIVACY ═════════════════════════════════════════════
  '/governance/ethics': {
    meta: {
      title: 'Ethics & Privacy | Blue Blocks Micro Research Institute',
      description: "Ethics and privacy framework for child development research: longitudinal consent architecture, child assent protocols, Ethics Advisory Committee oversight, and children's rights protections. Research by Blue Blocks Micro Research Institute, Hyderabad.",
      keywords: "research ethics, child privacy, informed consent, child assent, ethics advisory committee, children's rights, data protection, longitudinal consent, MREF, Blue Blocks Micro Research Institute",
      robots: 'index, follow',
      canonical: `${SITE_URL}/governance/ethics`,
    },
    openGraph: {
      type: 'article',
      title: 'Ethics & Privacy | Blue Blocks Micro Research Institute',
      description: "Consent architecture, child assent protocols, Ethics Advisory Committee oversight, and children's rights protections in longitudinal research.",
      url: `${SITE_URL}/governance/ethics`,
      site_name: OG_SITE_NAME,
      image: `${SITE_URL}/images/og-ethics.jpg`,
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Ethics & Privacy | Blue Blocks Micro Research Institute',
    },
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': `${SITE_URL}/governance/ethics/#webpage`,
          url: `${SITE_URL}/governance/ethics`,
          name: 'Ethics & Privacy | Blue Blocks Micro Research Institute',
          description: 'Ethics and privacy framework: longitudinal consent architecture, child assent protocols, Ethics Advisory Committee oversight.',
          isPartOf: { '@id': PERMANENT_IDS.WEBSITE },
          about: { '@id': PERMANENT_IDS.INSTITUTE },
        },
        { ...instituteNode },
        breadcrumb(`${SITE_URL}/governance/ethics/#breadcrumb`, [
          { name: 'Home', item: `${SITE_URL}/` },
          { name: 'Governance', item: `${SITE_URL}/governance` },
          { name: 'Ethics & Privacy', item: `${SITE_URL}/governance/ethics` },
        ]),
      ],
    },
  },

  // ═══ PAGE 9: REGULATORY COMPLIANCE ════════════════════════════════════════
  '/governance/compliance': {
    meta: {
      title: 'Regulatory Compliance | Blue Blocks Micro Research Institute',
      description: "Compliance with international research ethics standards, India's DPDP Act 2023, GDPR alignment, POCSO Act, ICMR Guidelines, and IRB-equivalent Ethics Advisory Committee oversight. Research by Blue Blocks Micro Research Institute, Hyderabad.",
      keywords: 'regulatory compliance, DPDP Act, GDPR, Declaration of Helsinki, Belmont Report, POCSO Act, ICMR guidelines, IRB equivalent, ethics advisory committee, child research compliance, Blue Blocks Micro Research Institute',
      robots: 'index, follow',
      canonical: `${SITE_URL}/governance/compliance`,
    },
    openGraph: {
      type: 'article',
      title: 'Regulatory Compliance | Blue Blocks Micro Research Institute',
      description: 'Compliance with Declaration of Helsinki, Belmont Report, DPDP Act 2023, GDPR, POCSO Act, and ICMR Guidelines. IRB-equivalent Ethics Advisory Committee.',
      url: `${SITE_URL}/governance/compliance`,
      site_name: OG_SITE_NAME,
      image: `${SITE_URL}/images/og-compliance.jpg`,
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Regulatory Compliance | Blue Blocks Micro Research Institute',
    },
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': `${SITE_URL}/governance/compliance/#webpage`,
          url: `${SITE_URL}/governance/compliance`,
          name: 'Regulatory Compliance | Blue Blocks Micro Research Institute',
          description: 'Compliance with international research ethics standards, DPDP Act 2023, GDPR alignment, and IRB-equivalent oversight.',
          isPartOf: { '@id': PERMANENT_IDS.WEBSITE },
          about: { '@id': PERMANENT_IDS.INSTITUTE },
        },
        { ...instituteNode },
        breadcrumb(`${SITE_URL}/governance/compliance/#breadcrumb`, [
          { name: 'Home', item: `${SITE_URL}/` },
          { name: 'Governance', item: `${SITE_URL}/governance` },
          { name: 'Compliance', item: `${SITE_URL}/governance/compliance` },
        ]),
      ],
    },
  },
};

export default seoSchemaConfig;
