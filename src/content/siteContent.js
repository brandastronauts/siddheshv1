// Single source of truth for all site content
// All page copy and structure comes from this file

const siteContent = {
  brand: {
    siteName: "Blue Blocks Micro Research Institute",
    ethicsTagline: "Compiling the world's first 15-year, high-frequency longitudinal dataset on human innovation capacity from birth to age 18.",
    contact: {
      research: "research@blueblocks.in",
      press: "press@blueblocks.in",
    },
  },

  nav: [
    { label: "Home", path: "/" },
    { label: "The Institute", path: "/the-institute" },
    { label: "Methodology", path: "/methodology" },
    { label: "Publications", path: "/publications-open-science" },
    { label: "Governance", path: "/governance" },
    { label: "Collaborate", path: "/collaborate" },
    { label: "Newsroom", path: "/newsroom" },
    { label: "Contact", path: "/contact" },
  ],

  pages: {
    "/": {
      title: "Home",
      metaDescription:
        "The Blue Blocks Micro Research Institute compiles a 15-year, high-frequency longitudinal dataset on human innovation capacity from birth to age 18.",
      
      seo: {
        title: "The World's First Micro Research Institute | Blue Blocks Micro Research Institute",
        canonical: "https://blueblocks.in/",
        robots: "noindex,nofollow,noarchive,nosnippet",
        openGraph: {
          type: "website",
          url: "https://blueblocks.in/",
          title: "The World's First Micro Research Institute",
          description:
            "A 15-year embedded, high-frequency longitudinal dataset on human innovation capacity from birth to age 18.",
          image: {
            url: "https://blueblocks.in/og/home.jpg",
            width: 1200,
            height: 630,
            alt: "Precision research environment"
          }
        },
        twitter: {
          card: "summary_large_image",
          title: "The World's First Micro Research Institute",
          description:
            "High-frequency embedded observation from birth to 18 — ecological truth over lab isolation.",
          image: "https://blueblocks.in/og/home.jpg"
        }
      },

      schemas: [
        {
          "@context": "https://schema.org",
          "@type": ["Organization", "ResearchOrganization", "EducationalOrganization"],
          name: "Blue Blocks Micro Research Institute",
          url: "https://blueblocks.in/",
          logo: "https://blueblocks.in/logo.png",
          email: "research@blueblocks.in",
          sameAs: [
            "https://zenodo.org/"
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Blue Blocks Micro Research Institute",
          url: "https://blueblocks.in/",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://blueblocks.in/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        },
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Home",
          url: "https://blueblocks.in/",
          isPartOf: { "@type": "WebSite", url: "https://blueblocks.in/" },
          about: {
            "@type": "Thing",
            name: "Longitudinal innovation capacity dataset (0–18)"
          }
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://blueblocks.in/" }
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Is the Blue Blocks Research Institute separate from the school?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Yes. It is a distinct internal entity with its own governance and objectives. While the school focuses on the Cambridge/AMI curriculum, the Institute is solely dedicated to longitudinal observation and providing the pedagogical architecture for high-stakes industrial projects."
              }
            },
            {
              "@type": "Question",
              name: "What does Micro Research mean?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Micro Research is a protocol of small-scale, high-frequency observation studies that run continuously for years. Each micro-study tracks a single variable in under 5 minutes, and the accumulation over years creates statistical significance."
              }
            },
            {
              "@type": "Question",
              name: "Are the student projects simulations or real-world applications?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "We do not simulate. Projects meet Technology Readiness Level standards and outputs are required to be functionally valid, flight-qualified, or legally protected Intellectual Property."
              }
            },
            {
              "@type": "Question",
              name: "How can external researchers access your data?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "We operate on Open Science principles. Methodology papers, anonymized telemetry and patent filings are archived in the Zenodo Community Repository. External collaboration is invited via our Collaborate pathway."
              }
            }
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "Dataset",
          name: "Blue Blocks 0–18 Longitudinal Innovation Capacity Dataset",
          description:
            "A high-frequency embedded observation dataset tracking the day-by-day evolution of innovation capacity from birth to age 18 in a living Montessori environment.",
          creator: {
            "@type": "Organization",
            name: "Blue Blocks Micro Research Institute",
            url: "https://blueblocks.in/"
          },
          keywords: [
            "longitudinal study",
            "innovation capacity",
            "micro-research",
            "education research",
            "ecological validity",
            "0-18 dataset"
          ],
          url: "https://blueblocks.in/publications-open-science",
          license: "https://creativecommons.org/licenses/by/4.0/"
        },
        {
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Featured News & Events",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              item: {
                "@type": "Article",
                headline: "Mission SBB-1: Flight Qualification & Valorization",
                about: "Aerospace mission pedagogy and resilience under TRL-9 constraints",
                author: { "@type": "Organization", name: "Blue Blocks Micro Research Institute" }
              }
            },
            {
              "@type": "ListItem",
              position: 2,
              item: {
                "@type": "Article",
                headline: "Marrakesh: Defining Future Human Capital",
                about: "Innovation economies and longitudinal hypothesis development",
                author: { "@type": "Organization", name: "Blue Blocks Micro Research Institute" }
              }
            },
            {
              "@type": "ListItem",
              position: 3,
              item: {
                "@type": "Article",
                headline: "Oslo Summit: A Global Benchmark",
                datePublished: "2026-01-28",
                about: "International benchmark release and open-data protocol archive",
                author: { "@type": "Organization", name: "Blue Blocks Micro Research Institute" }
              }
            }
          ]
        }
      ],

      sections: [
        {
          id: "home-hero",
          type: "hero",
          variant: "precision",
          headline: "The World's First Micro Research Institute",
          subheadline:
            "We are compiling the most granular dataset on human innovation capacity from birth to age 18. Fifteen years of embedded observation across toddlers, elementary students, and adolescents. Not lab experiments. Not surveys. Daily records of what children actually do when given real engineering challenges.",
          primaryCta: { label: "Read the Methodology Paper", href: "/methodology" },
          secondaryCta: { label: "Zenodo Community", href: "https://zenodo.org/", external: true },
          image: {
            src: "",
            alt: "Precision research environment",
            variant: "hero",
            privacyBlur: true,
            caption:
              "Background should imply precision (e.g., black-and-white shot of a student calibrating a sensor)."
          }
        },

        {
          id: "home-purpose",
          type: "grid3",
          header: "Why Schools Can't Usually Do Research",
          intro:
            "Universities have research funding and the PhDs, but lack long-term access to developing children. Schools have children for 15 years, but no research infrastructure. Blue Blocks runs both. By embedding a Micro-research Institute within a Montessori environment, we capture the data universities miss, the granular, day-by-day evolution of innovation capacity.\n\nThis depth requires us to reject the sporadic nature of clinical studies. Instead, we deploy Micro-Research: a continuous protocol of high-frequency, embedded data capture. We consciously sacrifice the sterile control of the laboratory for the 'Ecological Truth' of the living environment, prioritizing authentic behavior over artificial isolation.",
          items: [
            {
              title: "Longitudinal Continuity (0-18, The 15-Year Dataset)",
              body:
                "Most child development studies observe children once or twice. We've tracked the same children continuously through our Embedded Research Fellows from age 3 to 18. This continuity shows us the trajectory of how capabilities develop not just what children can do at one moment, but proving that the engineer of 18 is built by the sensorial explorer of 3."
            },
            {
              title: "Ecological Validity - Real Projects, Not Lab Tasks",
              body:
                "We reject the 'Goldfish Bowl' fallacy of academic research. Children in sterile labs behave like subjects; children in Innovation Labs behave like engineers. Our data is derived from TRL-9 ecosystems where the risk of failure is real, not simulated. When we observe problem-solving behavior, children are solving actual problems by designing flight hardware, not completing worksheets about flight hardware; they are actually saving a mission."
            },
            {
              title: "Sovereign Intellectual Property",
              body:
                "The ultimate metric of educational efficacy is not testing, but creation. Our students transition from passive learners to Sovereign IP holders, with 5 utility patents filed by elementary-aged students. With this we prove that children can contribute to the global innovation economy even before they turn 18 and graduate."
            }
          ]
        },

        {
          id: "home-featured-news",
          type: "cards",
          variant: "pressRoom",
          header: "What's Happened Recently",
          cards: [
            {
              tag: "ISRO / IN-SPACe / Pedagogical Review",
              headline: "Mission SBB-1: Flight Qualification & Valorization",
              body:
                "Blue Blocks Montessori School, in technical collaboration with TakeMe2Space, integrated a 1U payload aboard ISRO PSLV-C62. The Blue Blocks Micro Research Institute served as the pedagogical partner, structuring the mission to test adolescent resilience. While the payload met all flight qualifications (Thermal/Vibration), the launch vehicle's Stage 4 ignition failure at T+847 seconds provided the ultimate lesson. The mission outcome validated the curriculum not through orbital success, but through Valorization: proving to the students that their engineering was \"real enough to fail in real ways.",
              action: { label: "Read Technical Brief (Links to IN-SPACe DOI)", href: "#" }
            },
            {
              tag: "IMF Annual Meetings",
              headline: "Marrakesh: Defining Future Human Capital",
              body:
                "Blue Blocks' pedagogical framework was presented as a scalable model for \"Innovation Economies.\" The case study highlighted how early-stage exposure to high-stakes engineering creates a resilient R&D pipeline for the nation. Focus: Investigating whether early exposure to high-stakes engineering impacts long-term innovation capacity. Longitudinal Hypothesis: We posit that adolescents exposed to TRL-9 constraints (Technology Readiness Level 9) develop significantly higher 'Problem-Solving Agency' by the time they reach tertiary education. Preliminary Findings: While full data maturation is projected for 2026-2030, early indicators suggest a strong correlation: students who held utility patents between ages 12-16 are already pursuing STEM majors at markedly higher rates than matched control groups.",
              action: { label: "View Presentation", href: "#" }
            },
            {
              tag: "International Diplomacy / MONISC",
              headline: "Oslo Summit: A Global Benchmark",
              body:
                "On January 28, 2026, at the Nobel Peace Center, Founder Pavan Goyal delivered the \"World Premiere\" of the Blue Blocks Innovation Pedagogy (0–18). Selected by the Monisc Committee (supported by the Norwegian UNESCO Commission) as a \"global benchmark\" for integrating space science, this session formally releases our student-generated datasets to the international network. The Zenodo archive preserves the complete administrative context: the Official Invitation, the Pedagogical Framework presentation, and the open-data release protocols.",
              action: { label: "Access Proceedings Archive", href: "#" }
            }
          ]
        },

        {
          id: "home-operational-calendar",
          type: "list",
          sectionName: "Operational Calendar",
          header: "Annual Research Protocols",
          intro:
            "Our research activities follow the academic and developmental seasons. We run observation studies, student patent reviews, and technical testing on predictable cycles. Specific dates for public defenses and open workshops are announced 30 days in advance via our newsletter.",
          items: [
            {
              title: "The Patent Defense Cycle",
              meta: "Quarterly (Internal)",
              description:
                "Student researchers defend their utility designs before the Patent Review Board. Board decides: file patent, return for redesign, or abandon.",
              statusLine: "Next Cycle: Awaiting Submission Phase"
            },
            {
              title: "The Space Lab Simulation Series",
              meta: "Bi-Annual",
              description:
                "Live stress-testing of avionics on the lunar terrain simulator. These aren't simulations—we're testing actual flight hardware before it goes to ISRO for integration. Open to academic partners by invitation (email: research@blueblocks.in).",
              statusLine: "Status: Scheduled for Q3"
            },
            {
              title: "Terra Utopia Environmental Study",
              meta: "Annual",
              description:
                "Systematic measurement of soil and biosystem data in Terra Utopia. This isn't just environmental science class—data feeds into STEM research.",
              statusLine: "Status: Data Collection Active"
            }
          ]
        },

        {
          id: "home-publications",
          type: "libraryCards",
          sectionName: "Research Pipeline",
          header: "Active Research & Manuscript Pipeline (2026 Cycle) - What We Are Writing",
          intro:
            "The Blue Blocks Micro Research Institute operates on an annual publication cycle. The following longitudinal studies are currently in the data-cleaning or peer-review phase. Pre-prints will be assigned a DOI via Zenodo upon release.",
          cards: [
            {
              status: "[In Draft - Internal Review]",
              title: "Standardization of Micro-Observations in Non-Clinical Settings",
              body:
                "Defining the protocol for 25 embedded fellows to document behavioral data without disrupting the \"Children's House\" environment."
            },
            {
              status: "[Forensic Analysis]",
              title: "SBB-1 Mission Integrity: Pre-Flight Qualification & Launch Anomaly",
              body:
                "A correlation study of the TRL-9 Flight Qualification data (Vibration/Thermal) against the PSLV-C62 launch telemetry, specifically analyzing the deviation metrics during the Stage 4 ignition failure at T+847 seconds."
            },
            {
              status: "[Longitudinal Compilation]",
              title: "From 0 to 1: The Genesis of Patentable Thought (Ages 6-12)",
              body:
                "Synthesizing 5 years of data from the Drone Research Centre to map the cognitive leap from \"play\" to \"invention.\""
            }
          ],
          cta: { label: "Access Restricted - Awaiting Publication", disabled: true }
        },

        {
          id: "home-faq",
          type: "accordion",
          header: "Methodological Inquiries",
          items: [
            {
              q: "Is the Blue Blocks Research Institute separate from the school?",
              a:
                "Yes. It is a distinct internal entity with its own governance and objectives. While the school focuses on the Cambridge/AMI curriculum, the Institute is solely dedicated to longitudinal observation and providing the pedagogical architecture for high-stakes industrial projects (SBB-1, Patents)."
            },
            {
              q: "What does \"Micro Research\" mean?",
              a:
                "It is a protocol of small-scale, high-frequency observation studies that run continuously for years. Rather than conducting one large study on 'how children learn math,' we execute 20+ micro-studies per year—each addressing one specific variable, recordable in under 5 minutes, sustained over time. The power of 'Micro' lies in accumulation; over 15 years, 200+ studies, 847 children generating a granular dataset becomes significant."
            },
            {
              q: "Are the student projects simulations or real-world applications?",
              a:
                "We do not simulate. All Institute projects must meet TRL (Technology Readiness Level) Standards. Whether it is a drone patent or a CubeSat payload, the output is required to be functionally valid, flight-qualified, or legally protected Intellectual Property."
            },
            {
              q: "How can external researchers access your data?",
              a:
                "We operate on Open Science principles. Our methodology papers, anonymized telemetry from the Space Lab, and patent filings are archived in our Zenodo Community Repository. We invite global collaboration to analyze this unique 0-18 developmental dataset."
            },
            {
              q: "How do you ensure data validity in a non-clinical setting?",
              a:
                "We rely on \"Ecological Consistency\" rather than sterile isolation. Standard clinical studies often suffer from the \"Visitor Effect\"—where research subjects exhibit altered behavior because a stranger is watching. Our data is collected by Embedded Research Fellows (the students' daily guides) who have spent 35,000+ hours with the students. This invisibility allows us to detect subtle, naturalistic developmental patterns that sporadic external observation invariably misses."
            },
            {
              q: "What is the role of the Innovation Labs?",
              a:
                "These are not classrooms; they are data collection environments. Whether in the Space Lab or Terra Utopia, the environment is designed to elicit naturalistic engineering behaviors, which are then documented by our Research Fellows. They're classrooms where we observe and record how students approach complex technical problems. Some projects lead to patents; some lead to flight hardware; most lead to learning through failure and iteration."
            }
          ]
        },

        {
          id: "home-visual-evidence",
          type: "textBlock",
          sectionName: "Visual Evidence",
          intro:
            "As a Micro Research Institute dealing with minors (Ages 0-18), we adhere to strict ethical guidelines regarding visual data. We prioritize subject privacy over public display.",
          header: "Why You Don't See Stock Photos Here",
          body:
            "We do not use staged photography. All imagery released by the Institute must undergo a three-stage ethical clearance process to ensure it documents the process, not just the child. A curated, anonymized archive of our Labs and Methodologies is currently being digitized.",
          cta: { label: "Request Media Kit (Press Only)", href: "/newsroom" }
        }
      ]
    },

    "/the-institute": {
      title: "The Institute",
      meta: {
        description: "Learn about our mission, team, and research approach",
      },
      sections: [
        {
          type: "hero",
          heading: "About the Institute",
          subheading: "Founded in 2018, we bring together researchers, ethicists, and technologists to ensure AI benefits everyone.",
        },
        {
          type: "textBlock",
          heading: "Our Mission",
          content: "The Institute for Ethical AI Research is dedicated to advancing the responsible development and deployment of artificial intelligence technologies. We conduct independent research, develop ethical frameworks, and engage with policymakers to shape the future of AI governance.",
        },
        {
          type: "grid3",
          heading: "Our Values",
          items: [
            { title: "Integrity", description: "We maintain the highest standards of research ethics and transparency.", icon: "check" },
            { title: "Independence", description: "Our research is free from commercial or political influence.", icon: "shield" },
            { title: "Collaboration", description: "We believe in open science and cross-disciplinary partnerships.", icon: "users" },
          ],
        },
      ],
    },

    "/methodology": {
      title: "Methodology",
      meta: {
        description: "Our research methodology and approach",
      },
      sections: [
        {
          type: "hero",
          heading: "Our Methodology",
          subheading: "Rigorous, reproducible research methods that advance the field of AI ethics.",
        },
        {
          type: "timeline",
          heading: "Research Process",
          items: [
            { year: "Phase 1", title: "Problem Identification", description: "We identify critical challenges in AI ethics through stakeholder engagement." },
            { year: "Phase 2", title: "Literature Review", description: "Comprehensive analysis of existing research and frameworks." },
            { year: "Phase 3", title: "Empirical Research", description: "Conducting experiments and gathering data through rigorous methods." },
            { year: "Phase 4", title: "Peer Review", description: "All findings undergo external review before publication." },
            { year: "Phase 5", title: "Open Publication", description: "Research is published openly with full data and code." },
          ],
        },
      ],
    },

    "/publications-open-science": {
      title: "Publications & Open Science",
      meta: {
        description: "Our published research and open science initiatives",
      },
      sections: [
        {
          type: "hero",
          heading: "Publications & Open Science",
          subheading: "All our research is freely available to advance the field.",
        },
        {
          type: "libraryCards",
          heading: "Recent Publications",
          items: [
            {
              title: "Interpretable ML Frameworks for Healthcare",
              authors: "Chen, Martinez, Williams",
              year: "2024",
              journal: "NeurIPS",
              type: "paper",
            },
            {
              title: "Ethical Guidelines for Generative AI",
              authors: "Institute Working Group",
              year: "2024",
              journal: "Technical Report",
              type: "report",
            },
            {
              title: "Bias Detection in Large Language Models",
              authors: "Thompson, Lee, Kumar",
              year: "2023",
              journal: "ICML",
              type: "paper",
            },
          ],
        },
        {
          type: "downloadList",
          heading: "Resources",
          items: [
            { title: "Annual Report 2023", format: "PDF", size: "2.4 MB" },
            { title: "Ethics Framework v2.0", format: "PDF", size: "1.1 MB" },
            { title: "Research Data Guidelines", format: "PDF", size: "450 KB" },
          ],
        },
      ],
    },

    "/governance": {
      title: "Governance",
      meta: {
        description: "Our governance structure and leadership",
      },
      sections: [
        {
          type: "hero",
          heading: "Governance",
          subheading: "Transparent governance ensures our research maintains the highest ethical standards.",
        },
        {
          type: "cards",
          heading: "Leadership",
          items: [
            { title: "Dr. Sarah Chen", subtitle: "Executive Director", description: "Former AI ethics lead at major tech company with 15 years research experience." },
            { title: "Prof. James Williams", subtitle: "Research Director", description: "Distinguished professor of computer science and AI ethics." },
            { title: "Dr. Maya Patel", subtitle: "Policy Director", description: "Expert in technology policy with experience at international organizations." },
          ],
        },
        {
          type: "accordion",
          heading: "Policies",
          items: [
            { question: "Research Ethics Policy", answer: "All research conducted by the Institute adheres to strict ethical guidelines including informed consent, data privacy, and conflict of interest disclosure." },
            { question: "Open Access Policy", answer: "We are committed to making all our research freely available within 6 months of publication." },
            { question: "Funding Transparency", answer: "We publicly disclose all funding sources and maintain strict independence from funders in research direction." },
          ],
        },
      ],
    },

    "/collaborate": {
      title: "Collaborate",
      meta: {
        description: "Partner with us on research and initiatives",
      },
      sections: [
        {
          type: "hero",
          heading: "Collaborate With Us",
          subheading: "Join our network of researchers, institutions, and organizations advancing ethical AI.",
        },
        {
          type: "buttonCards",
          heading: "Partnership Opportunities",
          items: [
            { title: "Research Partnership", description: "Collaborate on joint research projects.", icon: "microscope" },
            { title: "Institutional Membership", description: "Join our global network of partner institutions.", icon: "building" },
            { title: "Fellowship Program", description: "Apply for our visiting researcher program.", icon: "graduation" },
            { title: "Corporate Advisory", description: "Get guidance on implementing ethical AI practices.", icon: "briefcase" },
          ],
        },
        {
          type: "form",
          heading: "Get in Touch",
          description: "Interested in collaborating? Fill out the form below and we'll be in touch.",
          fields: [
            { name: "name", label: "Full Name", type: "text", required: true },
            { name: "email", label: "Email Address", type: "email", required: true },
            { name: "organization", label: "Organization", type: "text", required: false },
            { name: "interest", label: "Area of Interest", type: "select", required: true, options: ["Research Partnership", "Institutional Membership", "Fellowship Program", "Corporate Advisory", "Other"] },
            { name: "message", label: "Message", type: "textarea", required: true },
          ],
          submitLabel: "Send Inquiry",
          recipientEmail: "collaborate@blueblocks.in",
        },
      ],
    },

    "/newsroom": {
      title: "Newsroom",
      meta: {
        description: "Latest news and announcements",
      },
      sections: [
        {
          type: "hero",
          heading: "Newsroom",
          subheading: "Stay updated with our latest research, events, and announcements.",
        },
        {
          type: "cards",
          heading: "Latest News",
          items: [
            { title: "NeurIPS 2024 Paper Accepted", subtitle: "October 2024", description: "Our paper on interpretable ML frameworks has been accepted for presentation." },
            { title: "New Partnership Announced", subtitle: "September 2024", description: "We've partnered with three leading universities to expand our research network." },
            { title: "Ethics Guidelines Released", subtitle: "August 2024", description: "Version 2.0 of our Generative AI Ethics Guidelines is now available." },
          ],
        },
        {
          type: "list",
          heading: "Upcoming Events",
          items: [
            { title: "Annual Conference 2024", description: "December 10-12, 2024 - Join us for our flagship event on AI ethics.", link: "#" },
            { title: "Webinar: Responsible AI in Practice", description: "November 15, 2024 - A practical guide for organizations.", link: "#" },
            { title: "Workshop: Bias in ML Systems", description: "November 8, 2024 - Hands-on workshop for practitioners.", link: "#" },
          ],
        },
      ],
    },

    "/contact": {
      title: "Contact",
      meta: {
        description: "Get in touch with the Institute",
      },
      sections: [
        {
          type: "hero",
          heading: "Contact Us",
          subheading: "We welcome inquiries from researchers, media, and the public.",
        },
        {
          type: "grid3",
          heading: "Contact Information",
          items: [
            { title: "Research Inquiries", description: "For questions about our research or collaboration opportunities.", email: "research@blueblocks.in", icon: "mail" },
            { title: "Media & Press", description: "For media inquiries, interviews, and press materials.", email: "press@blueblocks.in", icon: "newspaper" },
            { title: "General Inquiries", description: "For all other questions and feedback.", email: "info@blueblocks.in", icon: "message" },
          ],
        },
        {
          type: "form",
          heading: "Send a Message",
          description: "Fill out the form below and we'll respond within 2 business days.",
          fields: [
            { name: "name", label: "Your Name", type: "text", required: true },
            { name: "email", label: "Email Address", type: "email", required: true },
            { name: "subject", label: "Subject", type: "select", required: true, options: ["Research Inquiry", "Media Request", "Partnership", "General Question", "Other"] },
            { name: "message", label: "Your Message", type: "textarea", required: true },
          ],
          submitLabel: "Send Message",
          recipientEmail: "contact@blueblocks.in",
        },
      ],
    },
  },
};

export default siteContent;
