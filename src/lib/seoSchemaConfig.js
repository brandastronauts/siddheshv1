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
      title: "Children are the Data",
      description: "17-year longitudinal panel of 1045 children tracking human innovation capacity from birth to age 18. Embedded observation within an AMI Montessori environment in Hyderabad, India.",
      keywords: 'micro research institute, child development research, longitudinal panel, Montessori research, innovation pedagogy, Blue Blocks Micro Research Institute, Blue Blocks, Hyderabad, CubeSat education, ISRO, student patents',
      robots: 'index, follow',
      canonical: `${SITE_URL}/`,
    },
    openGraph: {
      type: 'website',
      title: "Children are the Data",
      description: '17-year longitudinal panel of 1045 children tracking human innovation capacity from birth to age 18. Embedded observation within an AMI Montessori environment in Hyderabad, India.',
      url: `${SITE_URL}/`,
      site_name: OG_SITE_NAME,
      image: `${SITE_URL}/images/og-home.jpg`,
      locale: 'en_IN',
    },
    twitter: {
      card: 'summary_large_image',
      title: "Children are the Data",
      description: '17-year longitudinal panel of 1045 children tracking human innovation capacity from birth to age 18. Embedded observation within an AMI Montessori environment in Hyderabad, India.',
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
          name: "Children are the Data",
          description: "17-year longitudinal panel of 1045 children tracking human innovation capacity from birth to age 18. Embedded observation within an AMI Montessori environment in Hyderabad, India.",
          isPartOf: { '@id': PERMANENT_IDS.WEBSITE },
          about: { '@id': PERMANENT_IDS.INSTITUTE },
        },
        {
          '@type': 'ResearchOrganization',
          '@id': PERMANENT_IDS.INSTITUTE,
          name: 'Blue Blocks Micro Research Institute',
          alternateName: ['Blue Blocks Research'],
          disambiguatingDescription: 'The research arm of Blue Blocks Montessori School in Hyderabad, conducting longitudinal observational research on child development within authentic AMI Montessori environments since 2009.',
          description: 'Blue Blocks Micro Research Institute conducts longitudinal observational research on child development across a 17-year dataset of 1045 children within authentic AMI Montessori environments. Research domains include executive function development, autonomy-supportive parenting, resilience formation, and the cognitive architecture of innovation pedagogy. The institute operates as a department of Blue Blocks Montessori School and is led by Principal Investigator Pavan Goyal.',
          url: SITE_URL,
          logo: {
            '@type': 'ImageObject',
            url: `${SITE_URL}/images/bbmri-logo.svg`,
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
            { '@type': 'Thing', name: 'Longitudinal panel', sameAs: 'https://en.wikipedia.org/wiki/Longitudinal_study' },
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
          sameAs: [
            'https://zenodo.org/communities/blueblocksmicroresearchinstitute',
            PARENT_URL,
          ],
          location: {
            '@type': 'Place',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Hyderabad',
              addressRegion: 'Telangana',
              addressCountry: 'IN',
            },
          },
        },
        {
          '@type': 'Person',
          '@id': PERMANENT_IDS.PAVAN,
          name: 'Pavan Goyal',
          jobTitle: 'Principal Investigator & Founder',
          worksFor: { '@id': PERMANENT_IDS.INSTITUTE },
          sameAs: [
            'https://orcid.org/0009-0009-8840-8505',
            PARENT_URL,
          ],
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
      description: "Blue Blocks Micro Research Institute: 17 years of continuous embedded observation across 1045 children. The world's longest record of human innovation capacity within an AMI Montessori environment.",
      keywords: 'micro research institute, longitudinal child development, embedded observation, Montessori research, innovation capacity, ecological validity, Blue Blocks Micro Research Institute',
      robots: 'index, follow',
      canonical: `${SITE_URL}/institute`,
    },
    openGraph: {
      type: 'article',
      title: 'The 0-18 Continuum | Blue Blocks Micro Research Institute',
      description: "17 years of continuous observation. 1045 children. 35,000+ hours of data per child. The world's longest record of human innovation capacity.",
      url: `${SITE_URL}/institute`,
      site_name: OG_SITE_NAME,
      image: `${SITE_URL}/images/og-institute.jpg`,
    },
    twitter: {
      card: 'summary_large_image',
      title: 'The 0-18 Continuum | Blue Blocks Micro Research Institute',
      description: '17 years of continuous observation. 1045 children. 35,000+ hours per child. Embedded research within AMI Montessori environments.',
    },
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': `${SITE_URL}/institute/#webpage`,
          url: `${SITE_URL}/institute`,
          name: 'The 0-18 Continuum | Blue Blocks Micro Research Institute',
          description: '17 years of continuous embedded observation across 1045 children within an AMI Montessori environment.',
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
          description: 'Dedicated to the longitudinal panel of iterative failure. Tracks the engineering lifecycle from initial aerodynamic testing to patent-ready flight stability.',
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
          '@id': `${SITE_URL}/data/longitudinal-1045/#dataset`,
          name: 'Blue Blocks Longitudinal Child Development Dataset (2009-2026)',
          description: '17-year observational dataset tracking developmental milestones, executive function indicators, and autonomy-supportive behaviour patterns across 1045 children in AMI-certified Montessori environments.',
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
          '@type': 'ScholarlyArticle',
          '@id': `${SITE_URL}/methodology/#article`,
          name: 'Micro-Research Methodology Framework — Paper 01',
          identifier: 'https://doi.org/10.5281/zenodo.18584816',
          url: `${SITE_URL}/methodology`,
          sameAs: 'https://doi.org/10.5281/zenodo.18584816',
          publisher: { '@id': PERMANENT_IDS.INSTITUTE },
          author: {
            '@type': 'Person',
            name: 'Pavan Goyal',
            sameAs: 'https://orcid.org/0009-0009-8840-8505',
          },
          about: 'The operational framework for running high-frequency, low-footprint observation studies inside Montessori learning environments. Covers the Four Pillars, Four Gates, 4-Week Cycle, and 17-year compound dataset methodology.',
          license: 'https://creativecommons.org/licenses/by/4.0/',
        },
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
      description: 'Integrated design-research on innovation development. Didactic Innovation Principles (DIP), purpose-designed labs, and a 17-year design-research loop.',
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

  '/publications/iran-war-case-study': {
    meta: {
      title: 'Age-Differentiated Responses to Geopolitical Violence: Iran Crisis Case Study | Blue Blocks Micro Research Institute',
      description: 'Qualitative case study documenting how children aged 6–16 responded emotionally, cognitively, and morally to the Iran crisis (2026). 28 participants across three age cohorts. Semi-structured group discussions conducted 5–10 March 2026 at Blue Blocks Montessori School, Hyderabad. Published by Blue Blocks Micro Research Institute.',
      keywords: 'Iran crisis 2026, children and war, geopolitical violence, child development, age-differentiated responses, moral reasoning children, cognitive development, Piaget, Kohlberg, qualitative case study, Montessori education, screen time research, media literacy, Blue Blocks Micro Research Institute, Blue Blocks Montessori School, BlueBlocks, Blue Blocks Education Society, Blue Blocks Research Institute Foundation',
      canonical: `${SITE_URL}/publications/iran-war-case-study`,
    },
    openGraph: {
      type: 'article',
      title: 'Age-Differentiated Responses to Geopolitical Violence: Iran Crisis Case Study | Blue Blocks Micro Research Institute',
      description: 'How do children process geopolitical violence without social media? Qualitative case study of 28 children (ages 6–16) responding to the Iran crisis, conducted within days of the event. Published with DOI.',
      url: `${SITE_URL}/publications/iran-war-case-study`,
      image: `${SITE_URL}/images/og-iran-case-study.jpg`,
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Iran Crisis Case Study: Children\'s Responses to Geopolitical Violence | Blue Blocks Micro Research Institute',
      description: '28 children, 3 age cohorts, 5 days after the event. How children in a screen-limited Montessori environment process war. DOI: 10.5281/zenodo.18996507',
      image: `${SITE_URL}/images/og-iran-case-study.jpg`,
    },
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': `${SITE_URL}/publications/iran-war-case-study/#webpage`,
          url: `${SITE_URL}/publications/iran-war-case-study`,
          name: 'Age-Differentiated Responses to Geopolitical Violence: Iran Crisis Case Study | Blue Blocks Micro Research Institute',
          description: 'Qualitative case study documenting how children aged 6-16 responded emotionally, cognitively, and morally to the Iran crisis (2026). 28 participants, three age cohorts, conducted 5-10 March 2026.',
          isPartOf: { '@id': PERMANENT_IDS.WEBSITE },
          about: { '@id': `${SITE_URL}/publications/iran-war-case-study/#article` },
        },
        {
          '@type': 'ScholarlyArticle',
          '@id': `${SITE_URL}/publications/iran-war-case-study/#article`,
          headline: 'Age-Differentiated Responses to Geopolitical Violence: A Qualitative Case Study on the Iran Crisis in 2026 Among School Children of Blue Blocks, Hyderabad, India',
          description: 'Qualitative case study documenting age-differentiated emotional, cognitive, and moral responses of 28 children (aged 6-16) to the Iran crisis following the assassination of Supreme Leader Ayatollah Ali Khamenei on 28 February 2026. Data collected 5-10 March 2026 via semi-structured group discussions across three developmental cohorts at an AMI-guided Montessori school that actively limits screen time. Analysis uses Piaget (cognitive development), Kohlberg (moral development), and Braun & Clarke (thematic analysis) frameworks.',
          abstract: 'Five semi-structured group discussions were conducted across three age cohorts (6-10, 10-13, and 13-16) with approximately 28 participating children. The study addresses four research questions spanning awareness, emotional response, cognitive complexity, and moral reasoning. The central hypothesis posits that children\'s responses to an acute geopolitical conflict will vary systematically by developmental age. Thematic analysis of verbatim transcripts was mapped against a priori developmental frameworks (Piaget, Kohlberg). A distinctive feature of this sample is that the school actively discourages screen time and social media exposure, making this a rare examination of how children process geopolitical violence in the absence of algorithmic digital feeds.',
          author: [
            {
              '@type': 'Person',
              name: 'Sumedha Chakraborty',
              affiliation: { '@id': PERMANENT_IDS.INSTITUTE },
            },
            {
              '@type': 'Person',
              '@id': PERMANENT_IDS.PAVAN,
              name: 'Pavan Goyal',
              affiliation: { '@id': PERMANENT_IDS.INSTITUTE },
            },
            {
              '@type': 'Person',
              name: 'Soumya Matta',
              affiliation: { '@id': PERMANENT_IDS.INSTITUTE },
            },
            {
              '@type': 'Person',
              name: 'V. S. Donakanti',
              affiliation: { '@id': PERMANENT_IDS.INSTITUTE },
            },
            {
              '@type': 'Person',
              name: 'S. R. Boddu',
              affiliation: { '@id': PERMANENT_IDS.INSTITUTE },
            },
          ],
          sourceOrganization: { '@id': PERMANENT_IDS.INSTITUTE },
          publisher: { '@id': PERMANENT_IDS.INSTITUTE },
          datePublished: '2026-03-10',
          dateCreated: '2026-03-10',
          url: `${SITE_URL}/publications/iran-war-case-study`,
          identifier: 'https://doi.org/10.5281/zenodo.18996507',
          sameAs: 'https://doi.org/10.5281/zenodo.18996507',
          inLanguage: 'en',
          about: [
            { '@type': 'Thing', name: 'Geopolitical violence', sameAs: 'https://en.wikipedia.org/wiki/Political_violence' },
            { '@type': 'Thing', name: 'Child development', sameAs: 'https://en.wikipedia.org/wiki/Child_development' },
            { '@type': 'Thing', name: 'Moral development', sameAs: 'https://en.wikipedia.org/wiki/Lawrence_Kohlberg%27s_stages_of_moral_development' },
            { '@type': 'Thing', name: 'Cognitive development', sameAs: 'https://en.wikipedia.org/wiki/Piaget%27s_theory_of_cognitive_development' },
            { '@type': 'Thing', name: 'Qualitative research', sameAs: 'https://en.wikipedia.org/wiki/Qualitative_research' },
            { '@type': 'Thing', name: 'Media literacy', sameAs: 'https://en.wikipedia.org/wiki/Media_literacy' },
            { '@type': 'Thing', name: 'Montessori education', sameAs: 'https://en.wikipedia.org/wiki/Montessori_education' },
          ],
          keywords: [
            'Iran crisis 2026',
            'children and geopolitical violence',
            'age-differentiated responses',
            'moral reasoning',
            'cognitive development',
            'qualitative case study',
            'Montessori education',
            'screen time',
            'media literacy',
          ],
          isPartOf: {
            '@type': 'Periodical',
            name: 'Blue Blocks Research Papers',
            publisher: { '@id': PERMANENT_IDS.INSTITUTE },
          },
          citation: [
            {
              '@type': 'ScholarlyArticle',
              name: 'Practitioner-Led Methodology Framework',
              identifier: 'https://doi.org/10.5281/zenodo.18584816',
              sameAs: 'https://doi.org/10.5281/zenodo.18584816',
            },
          ],
          spatialCoverage: {
            '@type': 'Place',
            name: 'Hyderabad, Telangana, India',
          },
          temporalCoverage: '2026-03-05/2026-03-10',
          educationalLevel: 'Primary and Secondary (Ages 6-16)',
          countryOfOrigin: {
            '@type': 'Country',
            name: 'India',
          },
        },
        { ...instituteNode },
        {
          '@type': 'ResearchProject',
          '@id': `${SITE_URL}/publications/iran-war-case-study/#project`,
          name: 'Age-Differentiated Responses to Geopolitical Violence: Iran Crisis Case Study',
          description: 'Rapid communication case study documenting children\'s emotional, cognitive, and moral responses to the Iran crisis (February-March 2026) across three developmental age cohorts in a screen-limited AMI Montessori environment.',
          parentOrganization: { '@id': PERMANENT_IDS.INSTITUTE },
          foundingDate: '2026-03-05',
          member: [{ '@id': PERMANENT_IDS.PAVAN }],
          result: { '@id': `${SITE_URL}/publications/iran-war-case-study/#article` },
          knowsAbout: [
            { '@type': 'Thing', name: 'Geopolitical violence', sameAs: 'https://en.wikipedia.org/wiki/Political_violence' },
            { '@type': 'Thing', name: 'Child development', sameAs: 'https://en.wikipedia.org/wiki/Child_development' },
            { '@type': 'Thing', name: 'Moral development', sameAs: 'https://en.wikipedia.org/wiki/Lawrence_Kohlberg%27s_stages_of_moral_development' },
          ],
        },
        breadcrumb(`${SITE_URL}/publications/iran-war-case-study/#breadcrumb`, [
          { name: 'Home', item: `${SITE_URL}/` },
          { name: 'Publications', item: `${SITE_URL}/publications` },
          { name: 'Iran War Case Study', item: `${SITE_URL}/publications/iran-war-case-study` },
        ]),
      ],
    },
  },

  // ═══ TEAM PAGE ═══════════════════════════════════════════════════════════
  '/team': {
    meta: {
      title: 'Team | Blue Blocks Micro Research Institute',
      description: 'Meet the research team at Blue Blocks Micro Research Institute led by Principal Investigator Pavan Goyal.',
      canonical: `${SITE_URL}/team`,
    },
    openGraph: {
      type: 'website',
      title: 'Team | Blue Blocks Micro Research Institute',
      url: `${SITE_URL}/team`,
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Team | Blue Blocks Micro Research Institute',
    },
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': `${SITE_URL}/team/#webpage`,
          url: `${SITE_URL}/team`,
          name: 'Team | Blue Blocks Micro Research Institute',
          isPartOf: { '@id': PERMANENT_IDS.WEBSITE },
        },
        { ...instituteNode },
        {
          '@type': 'Person',
          '@id': PERMANENT_IDS.PAVAN,
          name: 'Pavan Goyal',
          jobTitle: 'Principal Investigator & Founder',
          affiliation: {
            '@type': 'ResearchOrganization',
            name: 'Blue Blocks Micro Research Institute',
            url: SITE_URL,
          },
          sameAs: [
            'https://orcid.org/0009-0009-8840-8505',
            PARENT_URL,
          ],
          hasCredential: [
            {
              '@type': 'EducationalOccupationalCredential',
              name: 'AMI Diploma 0–3',
              credentialCategory: 'Professional Certification',
              recognizedBy: {
                '@type': 'Organization',
                name: 'Association Montessori Internationale',
                url: 'https://ami-global.org',
              },
            },
            {
              '@type': 'EducationalOccupationalCredential',
              name: 'AMI Diploma 3–6',
              credentialCategory: 'Professional Certification',
              recognizedBy: {
                '@type': 'Organization',
                name: 'Association Montessori Internationale',
                url: 'https://ami-global.org',
              },
            },
            {
              '@type': 'EducationalOccupationalCredential',
              name: 'AMI Diploma 6–12',
              credentialCategory: 'Professional Certification',
              recognizedBy: {
                '@type': 'Organization',
                name: 'Association Montessori Internationale',
                url: 'https://ami-global.org',
              },
            },
            {
              '@type': 'EducationalOccupationalCredential',
              name: 'AMI Diploma 12–18 (Erdkinder)',
              credentialCategory: 'Professional Certification',
              recognizedBy: {
                '@type': 'Organization',
                name: 'Association Montessori Internationale',
                url: 'https://ami-global.org',
              },
            },
          ],
        },
        breadcrumb(`${SITE_URL}/team/#breadcrumb`, [
          { name: 'Home', item: `${SITE_URL}/` },
          { name: 'Governance', item: `${SITE_URL}/governance` },
          { name: 'Team', item: `${SITE_URL}/team` },
        ]),
      ],
    },
  },

  // ═══ IN-SPACe Authorization Letter ═══════════════════════════════════════
  '/publications/in-space-authorization-letter': {
    meta: {
      title: 'IN-SPACe Authorization Letter — SBB-1 / Blue Blocks | Blue Blocks Micro Research Institute',
      description: 'IN-SPACe authorization letter for the SBB-1 CubeSat mission. First K-12 student-designed 1U CubeSat payload authorized for ISRO PSLV-C62 launch.',
      canonical: `${SITE_URL}/publications/in-space-authorization-letter`,
    },
    openGraph: {
      type: 'article',
      title: 'IN-SPACe Authorization Letter — SBB-1 / Blue Blocks',
      url: `${SITE_URL}/publications/in-space-authorization-letter`,
    },
    twitter: {
      card: 'summary_large_image',
      title: 'IN-SPACe Authorization Letter — SBB-1 / Blue Blocks',
    },
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': `${SITE_URL}/publications/in-space-authorization-letter/#webpage`,
          url: `${SITE_URL}/publications/in-space-authorization-letter`,
          name: 'IN-SPACe Authorization Letter — SBB-1 / Blue Blocks',
          isPartOf: { '@id': PERMANENT_IDS.WEBSITE },
        },
        { ...instituteNode },
        {
          '@type': 'TechArticle',
          '@id': `${SITE_URL}/publications/in-space-authorization-letter/#article`,
          name: 'IN-SPACe Authorization Letter — SBB-1 / Blue Blocks',
          identifier: 'https://doi.org/10.5281/zenodo.18195108',
          url: `${SITE_URL}/publications/in-space-authorization-letter`,
          sameAs: 'https://doi.org/10.5281/zenodo.18195108',
          publisher: { '@id': PERMANENT_IDS.INSTITUTE },
          author: {
            '@type': 'Person',
            name: 'Pavan Goyal',
            sameAs: 'https://orcid.org/0009-0009-8840-8505',
          },
          about: {
            '@type': 'ResearchProject',
            name: 'SBB-1 CubeSat Mission',
            description: 'First K-12 student-designed 1U CubeSat payload authorized by IN-SPACe for ISRO PSLV-C62 launch. Mission validation through launch vehicle anomaly valorization.',
            funder: {
              '@type': 'GovernmentOrganization',
              name: 'Indian National Space Promotion and Authorization Centre (IN-SPACe)',
              url: 'https://www.inspace.gov.in',
            },
          },
          license: 'https://creativecommons.org/licenses/by/4.0/',
        },
        breadcrumb(`${SITE_URL}/publications/in-space-authorization-letter/#breadcrumb`, [
          { name: 'Home', item: `${SITE_URL}/` },
          { name: 'Publications', item: `${SITE_URL}/publications` },
          { name: 'IN-SPACe Authorization Letter', item: `${SITE_URL}/publications/in-space-authorization-letter` },
        ]),
      ],
    },
  },

  // ═══ Saparya / IMF Case Study ════════════════════════════════════════════
  '/publications/saparya-imf-case-study': {
    meta: {
      title: 'Saparya / IMF Conference Case Study — SBB-1 Mission & Valorization | Blue Blocks Micro Research Institute',
      description: 'Adolescent engineering mission presented at AMI Saparya 2026 and Monisc conferences, documenting a Lab-to-Launch framework for student-led aerospace innovation.',
      canonical: `${SITE_URL}/publications/saparya-imf-case-study`,
    },
    openGraph: {
      type: 'article',
      title: 'Saparya / IMF Conference Case Study — SBB-1 Mission & Valorization',
      url: `${SITE_URL}/publications/saparya-imf-case-study`,
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Saparya / IMF Conference Case Study — SBB-1 Mission',
    },
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': `${SITE_URL}/publications/saparya-imf-case-study/#webpage`,
          url: `${SITE_URL}/publications/saparya-imf-case-study`,
          name: 'Saparya / IMF Conference Case Study — SBB-1 Mission & Valorization',
          isPartOf: { '@id': PERMANENT_IDS.WEBSITE },
        },
        { ...instituteNode },
        {
          '@type': 'ScholarlyArticle',
          '@id': `${SITE_URL}/publications/saparya-imf-case-study/#article`,
          name: 'Saparya / IMF Conference Case Study — SBB-1 Mission & Valorization',
          identifier: 'https://doi.org/10.5281/zenodo.18337934',
          url: `${SITE_URL}/publications/saparya-imf-case-study`,
          sameAs: 'https://doi.org/10.5281/zenodo.18337934',
          publisher: { '@id': PERMANENT_IDS.INSTITUTE },
          author: {
            '@type': 'Person',
            name: 'Pavan Goyal',
            sameAs: 'https://orcid.org/0009-0009-8840-8505',
          },
          about: 'Adolescent engineering mission presented at AMI Saparya 2026 and Monisc conferences, documenting a Lab-to-Launch framework for student-led aerospace innovation.',
          license: 'https://creativecommons.org/licenses/by/4.0/',
        },
        breadcrumb(`${SITE_URL}/publications/saparya-imf-case-study/#breadcrumb`, [
          { name: 'Home', item: `${SITE_URL}/` },
          { name: 'Publications', item: `${SITE_URL}/publications` },
          { name: 'Saparya / IMF Case Study', item: `${SITE_URL}/publications/saparya-imf-case-study` },
        ]),
      ],
    },
  },
};

export default seoSchemaConfig;
