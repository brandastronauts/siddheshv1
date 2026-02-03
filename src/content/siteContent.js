// Single source of truth for all site content
// All page copy and structure comes from this file

const siteContent = {
  brand: {
    siteName: "Blue Blocks Micro Research Institute",
    headerTagline: "Micro Research Institute",
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
            src: "/src/assets/banners/home-precision.jpg",
            alt: "Precision research environment",
            variant: "hero",
            privacyBlur: false,
            caption: ""
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
      metaDescription:
        "The 0–18 Continuum: a longitudinal, embedded micro-research institution tracking human innovation capacity across fifteen years of continuous observation.",
      seo: {
        title: "The 0–18 Continuum | The Institute | Blue Blocks Micro Research Institute",
        canonical: "https://blueblocks.in/the-institute",
        robots: "noindex,nofollow,noarchive,nosnippet",
        openGraph: {
          type: "website",
          url: "https://blueblocks.in/the-institute",
          title: "The 0–18 Continuum",
          description:
            "A new category of research institution built for questions requiring decades, not semesters — continuous observation from birth to age 18.",
          image: {
            url: "https://blueblocks.in/og/the-institute.jpg",
            width: 1200,
            height: 630,
            alt: "Research environment"
          }
        }
      },
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "The Institute",
          url: "https://blueblocks.in/the-institute",
          isPartOf: { "@type": "WebSite", url: "https://blueblocks.in/" },
          about: {
            "@type": "Thing",
            name: "Longitudinal Micro-Research (0–18)"
          }
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://blueblocks.in/" },
            { "@type": "ListItem", position: 2, name: "The Institute", item: "https://blueblocks.in/the-institute" }
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Who does the observation?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "25 Embedded Research Fellows—AMI-certified practitioners who hold dual roles as educators and researchers."
              }
            },
            {
              "@type": "Question",
              name: "Do you experiment on children?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "No. We observe naturally occurring behavior. We never manipulate environments or interfere with the child's work cycle."
              }
            },
            {
              "@type": "Question",
              name: "How do you protect children's privacy?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Published datasets use codes instead of names (Subject-847-A, not personal identities). Photos are blurred/cropped. No combination of data points allows re-identification."
              }
            }
          ]
        }
      ],
      sections: [
        {
          id: "inst-hero",
          type: "hero",
          variant: "stark",
          headline: "The 0-18 Continuum.",
          subheadline:
            "We are a new category of research institution—built for questions that require decades, not semesters. By embedding rigorous observation protocols into a living Montessori environment, we have created the world's longest continuous record of human innovation capacity. Most child development studies observe children once or twice. We've been watching the same children for fifteen years. Not surveys. Not lab visits. Daily observation records from their actual teachers, in their actual classrooms, working on actual problems.",
          primaryCta: { label: "Download Institute Prospectus", href: "#" },
          image: {
            src: "/src/assets/banners/institute-stark.jpg",
            alt: "High trust research institute visual",
            variant: "hero",
            privacyBlur: false,
            caption: ""
          }
        },

        {
          id: "inst-live-ticker",
          type: "ticker",
          text:
            "PROTOCOL STATUS: Active Observation Cycle (Year 16) /// COHORT: N=847 Subjects (0-18) /// DATA INTEGRITY: Longitudinal Continuity [100%] /// CURRENT PHASE: TRL-9 Outcome Correlation"
        },

        {
          id: "inst-mission",
          type: "textBlock",
          header: "The Continuity Challenge - The Problem We Are Solving",
          body:
            "Scientific inquiry is often constrained by the academic calendar. Grants expire, researchers relocate, and funding cycles shift. This structural fragmentation creates 'snapshots' of development, making it difficult to study the long, unbroken arc of human potential. To understand the genesis of innovation, one must observe the full transition from infancy to adulthood without interruption. You can't understand how capabilities develop by observing children at age 6, then again at age 12. You need continuous records showing what happened in between."
        },

        {
          id: "inst-solution",
          type: "highlightBox",
          title: "The Embedded Solution - How We Solved It:",
          body:
            "We built an institution where research never ends because the environment never changes. By integrating the 'School' and the 'Lab,' we maintain zero-attrition contact with our subjects. We do not just measure capacity; we document its entire developmental trajectory. Same children, same teachers, fifteen years. When children graduate at 18, we have complete records from their first day to their last. No grant deadlines. No funding cycles. The research continues as long as the school operates."
        },

        {
          id: "inst-philosophy",
          type: "grid3",
          header: "The Micro-Research Framework\nHow We Actually Do This",
          items: [
            {
              title: "Observation Without Interference",
              icon: "eye",
              body:
                "Children's regular teachers record observations during or after class—never during conversations or activities that require teacher attention. Observations take under 5 minutes to record. Teachers write what happened, not what they think it means. Analysis comes later. The child should never notice they're being observed. This ensures high Ecological Validity."
            },
            {
              title: "The Embedded Fellow",
              icon: "users",
              body:
                "Our data collectors are not visitors; they are practitioners. By spending 35,000+ hours with the subjects, our 25 Embedded Fellows render the 'Observer Effect' negligible, capturing behavioral nuances that external researchers miss. They're the children's daily guides. Children don't act differently because observation is invisible. Teachers record behavior patterns they notice across weeks and months, not single moments."
            },
            {
              title: "Open Science Archival",
              icon: "database",
              body:
                "We operate as a pre-print repository for raw educational data. All methodologies, anonymized datasets, and TRL-9 outcome reports are archived via Zenodo, contributing to the global commons of Educational Science."
            }
          ]
        },

        {
          id: "inst-labs",
          type: "cards",
          header: "Centers of Observation",
          cards: [
            {
              tag: "Simulation Wing",
              headline: "Space Lab",
              body:
                "A controlled environment for observing high-stakes collaboration. Features lunar terrain simulation and avionics stress-testing to validate student payloads to ISRO standards.",
              image: { src: "", alt: "Space lab facility", variant: "card", privacyBlur: true }
            },
            {
              tag: "Prototyping Wing",
              headline: "Drone Research Centre",
              body:
                "Dedicated to the longitudinal study of 'Iterative Failure.' Tracks the engineering lifecycle from initial aerodynamic testing to Patent-Ready flight stability.",
              image: { src: "", alt: "Drone research environment", variant: "card", privacyBlur: true }
            },
            {
              tag: "Biosystem Wing",
              headline: "Terra Utopia",
              body:
                "Measuring systems thinking in real-time. Students manage complex ecological variables, generating longitudinal data on soil moisture and resource allocation.",
              image: { src: "", alt: "Environmental research facility", variant: "card", privacyBlur: true }
            },
            {
              tag: "Synthesis Hub",
              headline: "Data Wing",
              body:
                "The central processing unit where Embedded Fellows synthesize behavioral observations into longitudinal records. This facility ensures all data meets IRB and Ethical Privacy standards.",
              image: { src: "", alt: "Data wing facility", variant: "card", privacyBlur: true }
            }
          ]
        },

        {
          id: "inst-stats",
          type: "statsBar",
          header: "The Blue Blocks Advantage",
          stats: [
            { value: "15 Years", label: "Continuous Observation" },
            { value: "847", label: "Subjects Tracked (0-18)" },
            { value: "35,000+", label: "Hours of Data Per Child" },
            { value: "5", label: "Innovation Labs" }
          ]
        },

        {
          id: "inst-inquiries",
          type: "textBlock",
          header: "Institutional Access",
          body:
            "Access to the Blue Blocks Micro Research Institute is restricted to protect the integrity of the observational environment. We welcome collaboration proposals from Post-Doctoral Researchers, Industrial Partners, and Policy Makers.",
          cta: { label: "Request IRB Guidelines", href: "/governance" }
        },

        {
          id: "inst-faq",
          type: "accordion",
          header: "FAQs",
          items: [
            {
              q: "Who does the observation?",
              a:
                "25 Embedded Research Fellows—AMI-certified practitioners who hold dual roles as educators and researchers."
            },
            {
              q: "Do you experiment on children?",
              a:
                "No. We observe naturally occurring behavior. We never manipulate environments or interfere with the child's work cycle."
            },
            {
              q: "How do you protect children's privacy?",
              a:
                "Published datasets use codes instead of names (Subject-847-A, not 'Rahul Kumar'). Specific school location becomes 'urban Montessori school, Hyderabad, India.' Photos: faces blurred or cropped out. No combination of data points allows re-identification."
            },
            {
              q: "Do parents consent?",
              a:
                "Yes. All families provide comprehensive consent at enrollment and may withdraw at any time."
            },
            {
              q: "What is 'Micro Research'?",
              a:
                "A methodology characterized by high-frequency, low-complexity studies designed for practitioner execution."
            },
            {
              q: "What do you study? (Domains)",
              a:
                "We focus on three domains: Innovation (0-18), Montessori (0-18), and Parenting (0-18)."
            },
            {
              q: "How many children have you observed?",
              a:
                "847 children since 2009."
            }
          ]
        }
      ]
    },

    "/methodology": {
      title: "Methodology",
      metaDescription:
        "The Micro-Research Framework: high-frequency observation embedded in learning environments, designed for ecological validity and publication-ready datasets.",
      seo: {
        title: "The Micro-Research Framework | Methodology | Blue Blocks Micro Research Institute",
        canonical: "https://blueblocks.in/methodology",
        robots: "noindex,nofollow,noarchive,nosnippet",
        openGraph: {
          type: "article",
          url: "https://blueblocks.in/methodology",
          title: "The Micro-Research Framework",
          description:
            "A practitioner-executable research system: bounded questions, observable behavior, minimal footprint, publication-ready protocols.",
          image: {
            url: "https://blueblocks.in/og/methodology.jpg",
            width: 1200,
            height: 630,
            alt: "Micro-research framework"
          }
        }
      },
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Methodology",
          url: "https://blueblocks.in/methodology",
          isPartOf: { "@type": "WebSite", url: "https://blueblocks.in/" },
          about: { "@type": "Thing", name: "Micro-Research Framework" }
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://blueblocks.in/" },
            { "@type": "ListItem", position: 2, name: "Methodology", item: "https://blueblocks.in/methodology" }
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "ScholarlyArticle",
          headline: "The Micro-Research Framework",
          author: { "@type": "Organization", name: "Blue Blocks Micro Research Institute" },
          isPartOf: { "@type": "WebSite", name: "Blue Blocks Micro Research Institute" },
          about: ["longitudinal observation", "ecological validity", "education research"],
          url: "https://blueblocks.in/methodology"
        }
      ],
      sections: [
        {
          id: "meth-hero",
          type: "hero",
          variant: "stark",
          headline: "The Micro-Research Framework.",
          subheadline:
            "We built Blue Blocks to generate research, not accommodate it. Since 2009, we've run high-frequency observation directly inside learning environments—recording what actually happens rather than staging what we hope to measure. This isn't retrofitted academic study. It's methodology embedded in practice from day one.",
          primaryCta: { label: "Download Framework Paper (PDF)", href: "#" },
          image: {
            src: "/src/assets/banners/methodology-framework.jpg",
            alt: "Precision methodology environment",
            variant: "hero",
            privacyBlur: false,
            caption: ""
          }
        },

        {
          id: "meth-pillars",
          type: "grid3",
          header: "The Four Pillars of Micro-Research - What makes a study 'Micro'?",
          intro:
            "Micro-Research is designed for consistency, ecological validity, and publication intent. The methodology is optimized so protocols remain executable for years.",
          items: [
            {
              title: "Single Bounded Question",
              icon: "target",
              body:
                "We ask one thing at a time. Not \"How does age, gender, and material type affect work duration?\" but \"How long do 4-year-olds work with the pink tower?\" Compound questions get split. One question, one protocol, one dataset."
            },
            {
              title: "Observable Behavior",
              icon: "eye",
              body:
                "\"Child concentrated deeply\" is inference. \"Child repeated stacking sequence 7 times without interruption\" is observation. We capture actions, gestures, exact words spoken. Analysis comes later. The observation record stays behavioral."
            },
            {
              title: "Minimal Footprint",
              icon: "feather",
              body:
                "Our Fellows observe while teaching. They're not clipboard-wielding strangers disrupting routines. A protocol that takes 12 minutes won't get done. We've learned—through failure—that consistency beats comprehensiveness. Five-minute protocols run for years. Twenty-minute protocols die in six weeks."
            },
            {
              title: "Publication-Ready",
              icon: "file",
              body:
                "If a protocol won't eventually get a DOI and land in Zenodo, we don't run it. This forces clarity. \"Interesting to track\" becomes \"worth publishing\" or gets dropped. The discipline of publication-intent changes what we're willing to measure."
            }
          ],
          columns: 4
        },

        {
          id: "meth-compound",
          type: "comparisonTable",
          heading: "The Compound Effect - Why Twenty Small Studies Beat One Large Study?",
          intro:
            "Running one micro-study tells you almost nothing. Running two hundred over fifteen years builds a dataset that shows developmental patterns nobody else can see.",
          headers: ["Dimension", "Traditional Academic Study", "Blue Blocks Micro-Research"],
          rows: [
            ["Frequency", "1 Study every 3 Years", "20+ Studies Annually"],
            ["Observer", "External Researcher (High Interference)", "Teaching Fellow (Embedded)"],
            ["Duration", "2-3 Years Funding Cycle", "Continuous (Long term)"],
            ["Cumulative Output (10 Yrs)", "~5 Major Papers", "~200+ Micro-Studies"]
          ]
        },

        {
          id: "meth-cycle",
          type: "timeline",
          heading: "The 4-Week Cycle - Protocol to Publication in Four Weeks",
          items: [
            {
              year: "Week 1",
              title: "Protocol Design",
              description:
                "We draft the single question, sketch the recording sheet, and test it with three observations. If recording takes more than 5 minutes, we simplify. Most protocols fail this test twice before passing."
            },
            {
              year: "Week 2",
              title: "Data Capture",
              description:
                "Fellows collect data during the work cycle. Recording happens in the moment, not from memory later. Each Fellow handles one protocol at a time."
            },
            {
              year: "Week 3",
              title: "Synthesis",
              description:
                "We strip identifying details (names become codes, \"Tellapur campus\" becomes \"Site A\"). Then we look for patterns. Sometimes we find what we expected. Sometimes we don't. Everything gets recorded, even the failures."
            },
            {
              year: "Week 4",
              title: "Publication",
              description:
                "Internal review catches errors. Then: DOI registration, dataset upload to Zenodo, and internal documentation update. The study enters our longitudinal archive."
            }
          ]
        },

        {
          id: "meth-examples",
          type: "accordion",
          header: "Examples of Protocols We Have Run",
          items: [
            {
              q: "Example A: The 3-Day Material Choice Study",
              a:
                "Question: What material do children choose first when entering the prepared environment?\n\nProtocol: Record child's age (years + months), first material touched, time of entry.\n\nTime Cost: 10 seconds per child."
            },
            {
              q: "Example B: The 2-Week Help Study",
              a:
                "Question: When do children help each other without adult prompting?\n\nProtocol: Record helper age, recipient age, type of help (material retrieval, demonstration, cleanup), whether adult was nearby.\n\nTime Cost: 2 minutes per incident."
            }
          ]
        }
      ]
    },

    "/publications-open-science": {
      title: "Publications & Open Science",
      metaDescription:
        "The Research Docket: manuscripts in progress, intellectual property registry, longitudinal data dictionaries, and data access protocols for the Blue Blocks Micro Research Institute.",
      seo: {
        title: "Publications & Open Science | The Research Docket | Blue Blocks Micro Research Institute",
        canonical: "https://blueblocks.in/publications-open-science",
        robots: "noindex,nofollow,noarchive,nosnippet",
        openGraph: {
          type: "website",
          url: "https://blueblocks.in/publications-open-science",
          title: "The Research Docket",
          description:
            "Everything we publish gets a DOI and lands in Zenodo. Track manuscripts, datasets, patents, and access protocols.",
          image: {
            url: "https://blueblocks.in/og/docket.jpg",
            width: 1200,
            height: 630,
            alt: "Research docket DOI archive"
          }
        }
      },
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Publications & Open Science",
          url: "https://blueblocks.in/publications-open-science",
          isPartOf: { "@type": "WebSite", url: "https://blueblocks.in/" }
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://blueblocks.in/" },
            { "@type": "ListItem", position: 2, name: "Publications & Open Science", item: "https://blueblocks.in/publications-open-science" }
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "The Research Docket",
          hasPart: [
            { "@type": "CreativeWork", name: "Methodology Track Manuscripts" },
            { "@type": "CreativeWork", name: "Aerospace Track Manuscripts" },
            { "@type": "CreativeWork", name: "Innovation Track Manuscripts" }
          ]
        }
      ],
      sections: [
        {
          id: "docket-hero",
          type: "hero",
          variant: "clean",
          headline: "The Research Docket",
          subheadline:
            "Everything we publish gets a DOI and lands in Zenodo. This page tracks what's currently in progress—manuscripts under review, datasets being cleaned, patents in examination, and intellectual property filings currently processing through the Blue Blocks Micro Research Institute.",
          primaryCta: { label: "Subscribe for DOI Alerts", href: "#doi-alerts" },
          secondaryCta: { label: "View Citation Guidelines >", href: "#citation-guidelines" },
          image: {
            src: "/src/assets/banners/publications-doi.jpg",
            alt: "DOI docket hero visual",
            variant: "hero",
            privacyBlur: false,
            caption: ""
          }
        },

        {
          id: "citation-guidelines",
          type: "highlightBox",
          title: "Citation Standard",
          body:
            "All Blue Blocks publications must cite our foundational methodology paper (DOI: 10.5281/zenodo.XXXXX) and dataset specification (DOI: 10.5281/zenodo.YYYYY). This ensures methodological consistency across our 15-year research program.",
          cta: { label: "View Methodology", href: "/methodology" }
        },

        {
          id: "manuscript-docket",
          type: "cards",
          header: "What We Are Writing (2026 Cycle)",
          intro:
            "Current status of longitudinal studies undergoing internal review.",
          variant: "blogGrid",
          cards: [
            {
              tag: "Final Editorial Phase",
              headline: "Standardization of Micro-Observations in Non-Clinical Settings (0-18)",
              meta: "Domain: Methodology | Est: Q1 2026",
              body:
                "Defining the protocol for 25 embedded fellows to document behavioral data without disrupting the \"Children's House\" environment.",
              cta: { label: "Read Abstract", href: "#" },
              image: { src: "", alt: "Methodology manuscript", variant: "card", privacyBlur: false }
            },
            {
              tag: "Data Cleaning",
              headline: "Vibration Analysis & Structural Integrity of SBB-1 Payload (Post-Flight)",
              meta: "Domain: Aerospace | Est: Q2 2026",
              body:
                "A technical review of the thermal and vibrational data collected during the PSLV-C62 launch integration.",
              cta: { label: "Notify Me", href: "#doi-alerts" },
              image: { src: "", alt: "Aerospace manuscript", variant: "card", privacyBlur: false }
            },
            {
              tag: "Early Draft",
              headline: "The \"Sovereign IP\" Effect: Longitudinal Impact of Patent Ownership",
              meta: "Domain: Innovation | Est: 2027",
              body:
                "Synthesizing 5 years of data from the Drone Research Centre to map the cognitive leap from \"play\" to \"invention.\"",
              cta: { label: "Request Access", href: "/collaborate" },
              image: { src: "", alt: "Innovation manuscript", variant: "card", privacyBlur: false }
            },
            {
              tag: "Drafting",
              headline: "Academic Performance vs. Project Completion: 15-Year Montessori Cohort Analysis",
              meta: "Domain: Education Research | Est: Q4 2026",
              body:
                "Mapping standardized test scores against open-ended engineering project completion rates across the 6-12 continuum.",
              cta: { label: "Notify Me", href: "#doi-alerts" },
              image: { src: "", alt: "Education manuscript", variant: "card", privacyBlur: false }
            }
          ]
        },

        {
          id: "ip-registry",
          type: "bento",
          header: "Intellectual Property Registry",
          intro: "Highlighted outcomes currently in examination or filing preparation.",
          items: [
            {
              size: "lg",
              tag: "Flight Qualified - ISRO PSLV-C62",
              headline: "Thermal Sensor CubeSat Payload (1U Form Factor)",
              body:
                "Modular sensor housing for low Earth orbit thermal data collection. Inventors: Cohort SBB-1 (Ages 12-16).",
              footer: "Mission Complete",
              image: { src: "", alt: "CubeSat payload", variant: "card", privacyBlur: false }
            },
            {
              size: "md",
              tag: "Patent Pending - #4421",
              headline: "\"The Guardian\" Sanitization Drone",
              body:
                "Dual-rotor autonomous drone for bio-hazard control. Inventors: Drone Research Centre (Ages 9-11).",
              footer: "Examination Stage",
              image: { src: "", alt: "Sanitization drone", variant: "card", privacyBlur: true }
            },
            {
              size: "sm",
              tag: "Filing Prep",
              headline: "Sub-Soil Moisture Array",
              body:
                "Passive sensor network for semi-arid zones. Inventors: Terra Utopia Team.",
              footer: "Preparation",
              image: { src: "", alt: "Moisture array sensors", variant: "card", privacyBlur: false }
            }
          ]
        },

        {
          id: "data-schemas",
          type: "accordion",
          header: "Longitudinal Data Dictionaries",
          intro:
            "We are currently k-anonymizing 15 years of student records. The Variable Schemas are available for external review.",
          items: [
            {
              q: "Schema: The Innovation Index (Variable Set A)",
              a:
                "Defines metrics for TRL Achievement and Prototyping Density. Collected by Technical Research Associates in the Innovation Labs."
            },
            {
              q: "Schema: The Bio-Metric Log (Variable Set B)",
              a:
                "Anonymized physiological data including Heart Rate Variability (HRV) and Cortisol indicators. Collected by Embedded Fellows during naturalistic work cycles. (Format: CSV)"
            },
            {
              q: "Schema: The Academic Correlation (Variable Set C)",
              a:
                "Longitudinal mapping of standardized test scores against open-ended engineering project completion rates. (Format: SQL)"
            }
          ],
          footerCta: { label: "Download Schema Definitions (.zip)", href: "#" }
        },

        {
          id: "access-tiers",
          type: "pricing",
          header: "Data Access Protocols",
          columns: [
            {
              title: "Open Access",
              sub: "Public / General",
              body:
                "Published papers (PDF), aggregate statistics, patent abstracts, methodology frameworks. All materials licensed CC-BY-4.0.",
              cta: { label: "Browse Zenodo", href: "#" },
              badge: "CC-BY-4.0"
            },
            {
              title: "Researcher Access",
              sub: "PhD students, postdocs, faculty",
              body:
                "De-identified individual-level datasets, observation records (anonymized), engineering telemetry logs. Requires IRB approval and signed Data Use Agreement.",
              cta: { label: "Submit Access Request", href: "/collaborate" },
              badge: "IRB + DUA"
            },
            {
              title: "Internal Only",
              sub: "Internal research team",
              body:
                "Identifiable data (names, faces), unredacted observation videos, raw consent forms, linking keys between names and anonymous codes.",
              cta: { label: "Staff Access", href: "#" },
              badge: "Restricted"
            }
          ]
        },

        {
          id: "downloadables",
          type: "cards",
          header: "Framework Documents (All Open Access)",
          intro: "",
          variant: "iconCards",
          cards: [
            {
              tag: "PDF",
              headline: "Micro Research Methodology Framework",
              meta: "DOI: 10.5281/zenodo.XXXXX",
              body:
                "The complete operational manual including ethics and protocols.",
              cta: { label: "Download (PDF)", href: "#" }
            },
            {
              tag: "Spec",
              headline: "Micro Dataset Specification v1.0",
              meta: "DOI: 10.5281/zenodo.YYYYY",
              body:
                "The technical schema for variable definitions and anonymization standards.",
              cta: { label: "Download Spec", href: "#" }
            },
            {
              tag: "Guide",
              headline: "Citation Guide",
              meta: "Standard",
              body:
                "Standard format for attributing Micro-Studies in academic work.",
              cta: { label: "View Guide", href: "#" }
            }
          ]
        },

        {
          id: "ethics-note",
          type: "textBlock",
          variant: "muted",
          header: "",
          body:
            "Ethical Statement: All shared data is anonymized using k-anonymity protocols to protect subject privacy. Names are replaced with alphanumeric codes; ages are converted to ranges; faces are obscured. No re-identification pathway exists in public datasets."
        },

        {
          id: "doi-alerts",
          type: "form",
          header: "Subscribe for DOI Alerts",
          intro:
            "Get notified when a new paper, dataset, or schema is assigned a DOI and released to Zenodo.",
          submit: {
            to: "media@blueblocks.in",
            subject: "DOI Alerts Subscription — Blue Blocks Micro Research Institute",
            successMessage: "Draft email opened in your mail client."
          },
          fields: [
            { name: "name", label: "Full Name", type: "text", required: true },
            { name: "email", label: "Email", type: "email", required: true },
            {
              name: "interest",
              label: "Primary Interest",
              type: "select",
              required: true,
              options: [
                { label: "Methodology", value: "methodology" },
                { label: "Aerospace / Telemetry", value: "aerospace" },
                { label: "Innovation / Patents", value: "innovation" },
                { label: "Education / Montessori", value: "education" },
                { label: "All", value: "all" }
              ]
            },
            {
              name: "notes",
              label: "Optional Note",
              type: "textarea",
              required: false,
              placeholder: "Your lab / department, and what kind of datasets you work with."
            }
          ]
        },

        {
          id: "docket-faq",
          type: "accordion",
          header: "FAQs",
          items: [
            {
              q: "Are your publications peer-reviewed?",
              a:
                "All manuscripts get internal review by our research council (3-5 reviewers). Methodological papers also get external pre-publication review by independent PhD-level researchers before we register DOIs and upload to Zenodo."
            },
            {
              q: "Can I access your data?",
              a:
                "Yes, three ways. (1) Open access: Published papers and aggregate data are freely available on Zenodo—download anytime, no permission needed. (2) Researcher access: De-identified individual-level datasets require IRB approval from your institution and signed Data Use Agreement—apply through our Collaborate page, 2-4 week review. (3) Visiting fellowship: Come work in our archive with full dataset access (2-8 weeks)."
            },
            {
              q: "Where do you publish?",
              a:
                "All publications are archived on Zenodo with DOI registration, ensuring they are citable and permanent."
            }
          ]
        }
      ]
    },

    "/governance": {
      title: "Governance & Oversight",
      metaDescription:
        "Governance & Oversight: IRB-aligned standards, privacy architecture, student IP rights, and research council review protocols for embedded longitudinal observation.",
      seo: {
        title: "Governance & Oversight | Blue Blocks Micro Research Institute",
        canonical: "https://blueblocks.in/governance",
        robots: "noindex,nofollow,noarchive,nosnippet",
        openGraph: {
          type: "website",
          url: "https://blueblocks.in/governance",
          title: "Governance & Oversight",
          description:
            "Protocols and oversight ensuring pedagogical integrity, privacy, and IRB-aligned research standards.",
          image: {
            url: "https://blueblocks.in/og/governance.jpg",
            width: 1200,
            height: 630,
            alt: "Governance and oversight"
          }
        }
      },
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Governance & Oversight",
          url: "https://blueblocks.in/governance",
          isPartOf: { "@type": "WebSite", url: "https://blueblocks.in/" },
          about: { "@type": "Thing", name: "Research governance and IRB alignment" }
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://blueblocks.in/" },
            { "@type": "ListItem", position: 2, name: "Governance", item: "https://blueblocks.in/governance" }
          ]
        }
      ],
      sections: [
        {
          id: "gov-hero",
          type: "hero",
          variant: "stark",
          headline: "Governance & Oversight.",
          subheadline:
            "Our research framework is guided by a commitment to Pedagogical Integrity. The Institute's advisory council ensures that all protocols align with both Montessori Principles and Global Privacy Standards (IRB). We prioritize a 'Child-First' methodology, where scientific observation seamlessly integrates with, and respects, the educational environment. Every observation protocol gets reviewed before launch.",
          primaryCta: { label: "View IRB Guidelines", href: "#irb-guidelines" },
          image: {
            src: "/src/assets/banners/governance-oversight.jpg",
            alt: "Abstract governance visual",
            variant: "hero",
            privacyBlur: false,
            caption: ""
          }
        },

        {
          id: "gov-board",
          type: "cards",
          variant: "profiles",
          header: "Board of Directors & Leadership - Who Runs This",
          intro:
            "Internal leadership responsible for longitudinal integrity, pedagogy alignment, and institutional stewardship.",
          cards: [
            {
              headline: "Pavan Goyal",
              tag: "Principal Investigator & Founder",
              body:
                "Credentials: AMI Diploma (0-18)\n\nOversees the longitudinal integrity of the 0-18 study. Holds rare complete AMI certification across all developmental planes.",
              image: { src: "", alt: "Professional headshot placeholder", variant: "avatar", privacyBlur: false }
            },
            {
              headline: "Munira Hussain",
              tag: "Director of Pedagogy",
              body:
                "Credentials: AMI Diploma / M.Ed\n\nEnsures all research protocols integrate seamlessly with the Montessori curriculum without disrupting the 'Children's House.'",
              image: { src: "", alt: "Professional headshot placeholder", variant: "avatar", privacyBlur: false }
            },
            {
              headline: "[Name Pending]",
              tag: "Non-Executive Director",
              body:
                "Credentials: [Relevant Industry Credential]\n\nAdvises on long-term institutional strategy and external partnerships.",
              image: { src: "", alt: "Professional headshot placeholder", variant: "avatar", privacyBlur: false }
            }
          ]
        },

        {
          id: "gov-council",
          type: "cards",
          variant: "profiles",
          header: "Research Council & Advisory Board",
          intro:
            "External experts who provide technical validation for student innovation and methodological oversight.",
          cards: [
            {
              headline: "[Prof. Name Pending]",
              tag: "Technical Validation Advisor",
              body:
                "Affiliation: IIT Hyderabad (Dept of Design)\n\nFocus: Reviews TRL claims and engineering prototypes for the Space & Drone Labs.",
              image: { src: "", alt: "Professional headshot placeholder", variant: "avatar", privacyBlur: false }
            },
            {
              headline: "[Name Pending]",
              tag: "Independent Ethics Auditor",
              body:
                "Affiliation: [External Institution / Parent Body]\n\nFocus: Ensures compliance with child safety protocols and consent architecture.",
              image: { src: "", alt: "Professional headshot placeholder", variant: "avatar", privacyBlur: false }
            },
            {
              headline: "Ad-Hoc Committee",
              tag: "Peer Review Panel",
              body:
                "Status: Convened per Publication\n\nFocus: A rotating panel of external PhDs convened solely to validate foundational methodology papers prior to DOI registration.",
              image: { src: "", alt: "Professional headshot placeholder", variant: "avatar", privacyBlur: false }
            }
          ]
        },

        {
          id: "gov-standards",
          type: "accordion",
          header: "Standards & Protocols",
          intro:
            "Operating procedures derived from AMI principles and international research standards.",
          items: [
            {
              q: "Micro-Research Design Standards",
              a:
                "Boundedness: Every study must address a single, bounded research question.\nCapture Time: Observations must be recordable in <5 minutes.\nDuration: Data collection cycles must not exceed 3 weeks to prevent observer fatigue.\nInterference: Protocols must result in Zero Interference with the child's natural work cycle. The child should never notice being observed. Observer stays in normal classroom role, records discreetly.\n\nREAD MORE→"
            },
            {
              q: "Privacy & Informed Consent",
              a:
                "Enrollment Consent: All families sign comprehensive research waivers upon school entry.\nChild Assent: Students aged 7+ are granted the 'Right to Decline' participation without consequence.\nWithdrawal: Parents maintain the right to withdraw data access at any time.\nData Anonymization: All published records use alphanumeric codes (Subject-847-A, not names). Photos published only with separate photo consent and face obscuration. No re-identification pathway exists in public datasets."
            },
            {
              q: "Privacy & Informed Consent (Withdrawal While Enrolled)",
              a:
                "Enrollment Consent: All families sign comprehensive research waivers upon school entry.\nChild Assent: Subjects aged 7+ are granted the 'Right to Decline' participation without consequence.\nWithdrawal: Parents maintain the right to withdraw data access at any time while remaining enrolled in the school."
            }
          ]
        },

        {
          id: "gov-ip-security",
          type: "grid3",
          header: "Student IP Rights & Data Security",
          intro:
            "Safety, IP, and data handling are designed to protect students while preserving the integrity of longitudinal records.",
          items: [
            {
              title: "Student IP Rights",
              icon: "shield",
              body:
                "We fundamentally believe that age does not preclude ownership.\n\nSovereignty: Utility patents generated in the Innovation Labs are filed in the name of the student inventors.\nInstitute Role: The Institute acts as the 'Facilitator' and funds the filing process but claims 0% ownership of student-generated IP.\nAttribution: All student contributions to larger papers are cited as 'Co-Authors,' not subjects."
            },
            {
              title: "Data Security & Anonymization",
              icon: "lock",
              body:
                "K-Anonymity: All datasets are scrubbed of PII (Personally Identifiable Information). Names are replaced with alphanumeric codes (e.g., Subject-847-A).\nVisual Privacy: Faces in published documentation are obscured or digitized.\nStorage: Longitudinal records are stored in an air-gapped internal server (The Data Wing), accessible only to the Principal Investigator and Lead Fellows."
            },
            {
              title: "Operational Safety (Labs)",
              icon: "alert",
              body:
                "All high-stakes lab activity follows safety protocols designed for minors. Observation is non-intrusive, documentation is governed by ethics review, and any external access is scheduled to prevent interference with the work cycle."
            }
          ]
        },

        {
          id: "gov-team-overview",
          type: "grid3",
          header: "The Research & Observation Team",
          intro:
            "Data collection is conducted by a dual-layer team, ensuring both pedagogical sensitivity and technical accuracy.",
          items: [
            {
              title: "Embedded Research Fellows (AMI)",
              icon: "user",
              body:
                "Who They Are: AMI-Certified Pedagogues.\nObservation Focus: Developmental & Behavioral Data.\nFunction: They're the child's regular teacher, not a stranger with a clipboard. Children behave naturally because observation is invisible. The guide records observations during lunch or after school, never during work cycles.\n\nREAD MORE FOR PROFILES."
            },
            {
              title: "Research Associates (Subject Experts)",
              icon: "tool",
              body:
                "Who They Are: Engineers, Data Scientists, and Domain Specialists.\nObservation Focus: Performance & Competency Data.\nFunction: These experts conduct focused observations within the Innovation Labs. They track 'External Output'—measuring engineering fidelity, failure recovery rates, and technical precision during high-stakes prototyping (e.g., Drone flight tests).\n\nREAD MORE FOR PROFILES."
            },
            {
              title: "Apply as a Visiting Researcher",
              icon: "arrow",
              body:
                "Footer Note: To apply for a Visiting Researcher position, please visit the Collaborate page.",
              cta: { label: "Go to Collaborate", href: "/collaborate" }
            }
          ]
        },

        {
          id: "irb-guidelines",
          type: "textBlock",
          header: "IRB Guidelines",
          body:
            "IRB guidelines are provided to credentialed collaborators to protect the integrity of the observational environment. Submit an inquiry via Collaborate to request access to the latest IRB standards and consent architecture.",
          cta: { label: "Submit a Collaboration Inquiry", href: "/collaborate" }
        }
      ]
    },

    "/collaborate": {
      title: "Collaborate",
      metaDescription:
        "Collaborative Science: access pathways for scholars, institutions, and media partners to work with the Blue Blocks Micro Research Institute's 0–18 longitudinal infrastructure.",
      seo: {
        title: "Collaborate | Blue Blocks Micro Research Institute",
        canonical: "https://blueblocks.in/collaborate",
        robots: "noindex,nofollow,noarchive,nosnippet",
        openGraph: {
          type: "website",
          url: "https://blueblocks.in/collaborate",
          title: "Collaborative Science",
          description:
            "Partner with the Institute: visiting fellowships, dataset access (IRB + DUA), joint MOUs, methodology transfer, and grant alliances.",
          image: {
            url: "https://blueblocks.in/og/collaborate.jpg",
            width: 1200,
            height: 630,
            alt: "Collaboration network"
          }
        }
      },
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Collaborate",
          url: "https://blueblocks.in/collaborate",
          isPartOf: { "@type": "WebSite", url: "https://blueblocks.in/" }
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://blueblocks.in/" },
            { "@type": "ListItem", position: 2, name: "Collaborate", item: "https://blueblocks.in/collaborate" }
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Blue Blocks Micro Research Institute",
          url: "https://blueblocks.in/",
          contactPoint: [
            {
              "@type": "ContactPoint",
              contactType: "research proposals",
              email: "research@blueblocks.in",
              availableLanguage: ["English"]
            }
          ]
        }
      ],
      sections: [
        {
          id: "col-hero",
          type: "hero",
          variant: "stark",
          headline: "Collaborative Science.",
          subheadline:
            "Scientific breakthrough rarely happens in isolation. The Blue Blocks Micro Research Institute opens its longitudinal infrastructure to external partners who share our commitment to rigorous, non-intrusive inquiry. We offer a 15-year continuous dataset (0-18) that simply does not exist elsewhere. No other institution in India has comparable longitudinal density. If you're studying child development and need real data, not theory, we can work together.",
          primaryCta: { label: "Submit Research Proposal", href: "#collab-form" },
          secondaryCta: { label: "View Data Access Protocols >", href: "/publications-open-science" },
          image: {
            src: "/src/assets/banners/collaborate-network.jpg",
            alt: "Network node collaboration visual",
            variant: "hero",
            privacyBlur: false,
            caption: ""
          }
        },

        {
          id: "col-pathways",
          type: "grid3",
          header: "Ways To Work With Us",
          intro: "",
          items: [
            {
              title: "The Scholar Track",
              icon: "user",
              body:
                "Designed for PhD Candidates, Post-Docs, and Faculty.\n\nVisiting Fellowships: We host 2-3 visiting scholars annually for intensive 2-8 week residencies. You work alongside our research fellows, access the 15-year dataset, and publish collaboratively.\n\nData Access: Apply for credentialed access to our anonymized longitudinal datasets (Tier 2 access under our data classification standard). Requires IRB approval from your institution and signed data use agreement.\n\nJoint Authorship: Join specific micro-studies as co-investigator. We provide the observational infrastructure; you bring analytical frameworks or comparative data."
            },
            {
              title: "The Institutional Track",
              icon: "building",
              body:
                "Designed for Universities, Policy Tanks, and NGOs.\n\nJoint MOUs: Formalize long-term research alignments.\n\nMethodology Adoption: Adopt the Micro Research framework in your own school or lab. We train your staff, transfer our observation protocols, and help you set up ethics infrastructure.\n\nGrant Alliances: Co-application for international research grants requiring longitudinal K-12 data."
            },
            {
              title: "Data Access Protocols",
              icon: "lock",
              body:
                "Access tiers are defined in the Publications & Open Science docket. Open access materials are public; researcher access requires IRB approval and a signed Data Use Agreement.",
              cta: { label: "View Protocols", href: "/publications-open-science" }
            }
          ]
        },

        {
          id: "col-affiliations",
          type: "logoStrip",
          header: "Who We Work With",
          intro: "Our network of technical validators and academic collaborators.",
          logos: [
            {
              name: "IIT Hyderabad",
              role: "Academic Partner (Dept. of Design)",
              note: "Prototyping Validation & Design Thinking Methodology.",
              image: { src: "/src/assets/brand/iit-hyderabad-logo.png", alt: "IIT Hyderabad logo", variant: "logo" }
            },
            {
              name: "IN-SPACe / ISRO",
              role: "Technical Partner",
              note: "Aerospace Payload Qualification & Launch Authorization.",
              image: { src: "/src/assets/brand/inspace-logo.png", alt: "IN-SPACe logo", variant: "logo" }
            },
            {
              name: "ISRO",
              role: "Launch Partner (Mission Context)",
              note: "Launch integration context for aerospace qualification workflows.",
              image: { src: "/src/assets/brand/isro-logo.png", alt: "ISRO logo", variant: "logo" }
            },
            {
              name: "Association Montessori Internationale (AMI)",
              role: "Pedagogical Affiliate",
              note: "Alignment with Global Montessori Standards (0-18).",
              image: { src: "/src/assets/brand/ami-logo.png", alt: "AMI logo", variant: "logo" }
            }
          ],
          scrollable: true,
          style: "greyscale"
        },

        {
          id: "col-transfer",
          type: "highlightBox",
          title: "Methodology Transfer Program",
          body:
            "We believe that 'Micro Research' should be the standard for all laboratory schools. We offer a structured Transfer Program to help other institutions replicate our observational infrastructure.",
          bullets: [
            "Protocol Training: Training your staff to become Embedded Researchers.",
            "Ethics Architecture: Setting up your internal IRB and Consent frameworks.",
            "Data Schema Licensing: Adopting our standardized variables for cross-institutional comparison."
          ]
        },

        {
          id: "col-start",
          type: "buttonCards",
          header: "How to Start",
          cards: [
            {
              headline: "Individual Researchers",
              body:
                "For PhD candidates, Post-Docs, and Faculty seeking data access or fellowships. Apply for visiting fellowships (2-8 weeks) or dataset access (requires IRB approval).",
              button: { label: "Apply for Scholar Credentials", href: "#collab-form" }
            },
            {
              headline: "Institutional Partners",
              body:
                "For Universities, Research Organizations, Policy Institutes, and NGOs seeking formal alliance.",
              button: { label: "Request MOU Guidelines", href: "#collab-form" }
            },
            {
              headline: "Press & Publishing",
              body:
                "For media inquiries, citation permissions, and interview requests.",
              button: { label: "Download Media Kit", href: "/newsroom" }
            }
          ],
          footerNote: "Timeline: Proposals are reviewed on a rolling basis (2-4 weeks)."
        },

        {
          id: "collab-form",
          type: "form",
          header: "Submit a Collaboration Request",
          intro:
            "Select your track and share a short proposal. We'll respond with the appropriate access steps (IRB, DUA, residency availability, or media guidelines).",
          submit: {
            to: "research@blueblocks.in",
            subject: "Collaboration Request — Blue Blocks Micro Research Institute",
            successMessage: "Draft email opened in your mail client."
          },
          fields: [
            {
              name: "track",
              label: "Collaboration Track",
              type: "select",
              required: true,
              options: [
                { label: "Scholar Track (PhD / Postdoc / Faculty)", value: "scholar" },
                { label: "Institutional Track (University / NGO / Policy)", value: "institution" },
                { label: "Media Track (Press / Publishing)", value: "media" }
              ]
            },
            { name: "name", label: "Full Name", type: "text", required: true },
            { name: "email", label: "Email", type: "email", required: true },
            { name: "affiliation", label: "Affiliation / Organization", type: "text", required: true },
            { name: "country", label: "Country", type: "text", required: false },
            {
              name: "intent",
              label: "What are you requesting?",
              type: "select",
              required: true,
              options: [
                { label: "Visiting Fellowship (2–8 weeks)", value: "fellowship" },
                { label: "Dataset Access (IRB + DUA)", value: "data-access" },
                { label: "Joint Authorship / Micro-Study Collaboration", value: "joint-authorship" },
                { label: "MOU / Long-term Alliance", value: "mou" },
                { label: "Methodology Transfer Program", value: "transfer" },
                { label: "Media / Citation / Interview", value: "media" }
              ]
            },
            {
              name: "message",
              label: "Proposal / Message",
              type: "textarea",
              required: true,
              placeholder:
                "Briefly describe your research question, timeline, data needs, and what you plan to publish."
            }
          ]
        },

        {
          id: "col-faq",
          type: "accordion",
          header: "FAQs",
          items: [
            {
              q: "Can I visit as a researcher?",
              a:
                "Yes. We host 2-3 visiting researchers annually. Applications for 2-8 week residencies are available through the Scholar Track."
            },
            {
              q: "Can other schools use your methodology?",
              a:
                "Yes. Micro Research is explicitly designed for adoption by other institutions. We offer a Methodology Transfer program."
            },
            {
              q: "Are you affiliated with a university?",
              a:
                "We are independent but maintain a strategic partnership with the Department of Design at IIT Hyderabad."
            }
          ]
        }
      ]
    },

    "/newsroom": {
      title: "Newsroom",
      metaDescription:
        "The Institutional Record: launches, patents, breakthroughs, and methodological lessons — documented with high-trust press resources and protocols.",
      seo: {
        title: "Newsroom | The Institutional Record | Blue Blocks Micro Research Institute",
        canonical: "https://blueblocks.in/newsroom",
        robots: "noindex,nofollow,noarchive,nosnippet",
        openGraph: {
          type: "website",
          url: "https://blueblocks.in/newsroom",
          title: "The Institutional Record",
          description:
            "This newsroom documents what we've learned, what we've built, and what went wrong—mission milestones, patents, breakthroughs, and dead-ends.",
          image: {
            url: "https://blueblocks.in/og/newsroom.jpg",
            width: 1200,
            height: 630,
            alt: "High-contrast newsroom visual"
          }
        }
      },
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Newsroom",
          url: "https://blueblocks.in/newsroom",
          isPartOf: { "@type": "WebSite", url: "https://blueblocks.in/" }
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://blueblocks.in/" },
            { "@type": "ListItem", position: 2, name: "Newsroom", item: "https://blueblocks.in/newsroom" }
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Global Highlights",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              item: {
                "@type": "NewsArticle",
                headline: "Blue Blocks Payload Authorized for ISRO Mission",
                about: "Aerospace payload qualification and launch authorization"
              }
            },
            {
              "@type": "ListItem",
              position: 2,
              item: {
                "@type": "NewsArticle",
                headline: "Micro Research Framework Published (Open Access)",
                about: "Publication event and methodology release"
              }
            },
            {
              "@type": "ListItem",
              position: 3,
              item: {
                "@type": "NewsArticle",
                headline: "Nobel Peace Center Features Student Innovation",
                about: "International recognition of youth-led innovation"
              }
            }
          ]
        }
      ],
      sections: [
        {
          id: "news-hero",
          type: "hero",
          variant: "stark",
          headline: "The Institutional Record.",
          subheadline:
            "This newsroom documents what we've learned, what we've built, and what went wrong. Satellite launches, patent filings, scientific breakthroughs, methodological dead-ends—all of it matters.",
          primaryCta: { label: "Subscribe to Monthly Digest", href: "#digest-form" },
          secondaryCta: { label: "Download Media Kit >", href: "#media-kit" },
          image: {
            src: "/src/assets/banners/newsroom-press.jpg",
            alt: "Printing press editorial visual",
            variant: "hero",
            privacyBlur: false,
            caption: ""
          }
        },

        {
          id: "news-featured",
          type: "featuredStories",
          header: "Global Highlights",
          layout: "asymmetric",
          main: {
            image: { src: "", alt: "CubeSat or rocket launch", variant: "card", privacyBlur: false },
            tag: "Mission Milestone",
            headline: "Blue Blocks Payload Authorized for ISRO Mission",
            excerpt:
              "Twelve teenagers (ages 12-16) designed a thermal sensor payload. IN-SPACe authorized it for PSLV-C62 launch after eighteen months of technical review. The payload will gather temperature data in low Earth orbit if it survives launch vibration.",
            cta: { label: "Read Full Dispatch", href: "#" }
          },
          side: [
            {
              tag: "Publication Event",
              headline: "Micro Research Framework Published (Open Access)",
              excerpt:
                "We have formally published the architectural blueprint for embedded longitudinal observation. This framework allows other institutions to replicate this without external funding. We spent three years figuring out what doesn't work before we got here.",
              cta: { label: "View Press Release", href: "/methodology" }
            },
            {
              tag: "International",
              headline: "Nobel Peace Center Features Student Innovation",
              excerpt:
                "Blue Blocks student projects have been selected for exhibition as exemplars of \"Youth-Led Innovation,\" validating our 0-18 Sovereignty Model on a global stage.",
              cta: { label: "Read Coverage", href: "#" }
            }
          ]
        },

        {
          id: "news-feed",
          type: "cards",
          header: "What Has Happened Recently",
          variant: "newsGrid",
          cards: [
            {
              tag: "Institutional Alliance",
              headline: "IIT Hyderabad Design Dept. Formalizes Advisory Role",
              meta: "October 15, 2025",
              body:
                "The Department of Design at IIT Hyderabad joins the Research Council to provide technical validation for student prototyping.",
              cta: { label: "Read Update", href: "#" },
              image: { src: "", alt: "Institutional partnership visual", variant: "card", privacyBlur: false }
            },
            {
              tag: "Student IP",
              headline: "Utility Patent #4421 Filed: The \"Guardian\" Drone",
              meta: "September 02, 2025",
              body:
                "The Drone Research Centre has filed its fifth utility patent, marking a significant milestone in our study of \"Innovation Agency\" in the 9-11 age group.",
              cta: { label: "Read Update", href: "#" },
              image: { src: "", alt: "Drone research visual", variant: "card", privacyBlur: true }
            },
            {
              tag: "Fellowship",
              headline: "Visiting Scholar Applications Open for 2026 Cycle",
              meta: "August 10, 2025",
              body:
                "We are now accepting proposals for the Winter Residency. PhD candidates focusing on longitudinal behavioral observation are encouraged to apply.",
              cta: { label: "Apply via Collaborate", href: "/collaborate" },
              image: { src: "", alt: "Fellowship visual", variant: "card", privacyBlur: false }
            }
          ]
        },

        {
          id: "media-kit",
          type: "grid3",
          header: "For the Press",
          intro: "What journalists need to cover the Institute accurately.",
          items: [
            {
              title: "Logos & Identity",
              icon: "download",
              body:
                "High-resolution vector files of the Institute seal and approved typography.",
              cta: { label: "Download Asset Pack .zip", href: "#" }
            },
            {
              title: "Principal Investigator",
              icon: "user",
              body:
                "Approved biography and headshots for Pavan Goyal (PI) and Munira Hussain (Director of Pedagogy).",
              cta: { label: "Download Bio Sheet", href: "#" }
            },
            {
              title: "Attribution Standards",
              icon: "file",
              body:
                "Correct naming conventions for \"Blue Blocks Micro Research Institute\" and DOI referencing styles.",
              cta: { label: "View Style Guide", href: "/publications-open-science" }
            }
          ]
        },

        {
          id: "digest-form",
          type: "form",
          header: "Subscribe to the Monthly Digest",
          intro:
            "Receive a monthly summary of mission milestones, publications, patents, and institutional updates.",
          submit: {
            to: "media@blueblocks.in",
            subject: "Monthly Digest Subscription — Blue Blocks Micro Research Institute",
            successMessage: "Draft email opened in your mail client."
          },
          fields: [
            { name: "name", label: "Full Name", type: "text", required: true },
            { name: "email", label: "Email", type: "email", required: true },
            {
              name: "role",
              label: "I am a…",
              type: "select",
              required: true,
              options: [
                { label: "Journalist / Media", value: "media" },
                { label: "Researcher / Academic", value: "researcher" },
                { label: "Policy / Institution", value: "policy" },
                { label: "General Subscriber", value: "general" }
              ]
            },
            {
              name: "notes",
              label: "Optional Note",
              type: "textarea",
              required: false,
              placeholder: "Publication interests, deadlines, or verification requests."
            }
          ]
        },

        {
          id: "news-faq",
          type: "accordion",
          header: "Media Inquiries & Protocols",
          items: [
            {
              q: "Can I interview student researchers for a story?",
              a:
                "Direct access to minors is strictly regulated to protect the educational environment. Interviews are possible but must be: (1) Pre-approved by the Ethics Committee, (2) Conducted in the presence of a parent and a Research Fellow, and (3) Non-disruptive to the work cycle."
            },
            {
              q: "Can we film inside the Innovation Labs?",
              a:
                "We prioritize the child's right to privacy and a distraction-free environment. External film crews are generally not permitted during school hours. We provide a repository of high-resolution, anonymized B-roll and stock footage for media use upon request."
            },
            {
              q: "How do we verify the claims made in student patents?",
              a:
                "All technical claims regarding student inventions (Satellites, Drones) are validated by our external partners at IIT Hyderabad or IN-SPACe before public release. We can provide technical briefs and TRL (Technology Readiness Level) certification documents for fact-checking."
            },
            {
              q: "Can journalists visit the campus?",
              a:
                "Yes, by appointment only. Media visits are scheduled outside of core observational hours to ensure zero interference with the longitudinal study. Please contact media@blueblocks.in at least 5 business days in advance."
            },
            {
              q: "How should I refer to the school vs. the institute?",
              a:
                "Please distinguish between the two entities. \"Blue Blocks Montessori School\" is the educational body. \"Blue Blocks Micro Research Institute\" is a research organization. When citing data, please attribute the Institute."
            }
          ]
        }
      ]
    },

    "/contact": {
      title: "Contact",
      metaDescription:
        "Contact the Blue Blocks Micro Research Institute for research proposals, data access requests, institutional partnerships, and media inquiries.",
      seo: {
        title: "Contact | Blue Blocks Micro Research Institute",
        canonical: "https://blueblocks.in/contact",
        robots: "noindex,nofollow,noarchive,nosnippet",
        openGraph: {
          type: "website",
          url: "https://blueblocks.in/contact",
          title: "Contact the Institute",
          description:
            "Research proposals, data access requests, institutional partnerships, and media inquiries.",
          image: {
            url: "https://blueblocks.in/og/contact.jpg",
            width: 1200,
            height: 630,
            alt: "Contact and institutional access"
          }
        }
      },
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact",
          url: "https://blueblocks.in/contact",
          isPartOf: { "@type": "WebSite", url: "https://blueblocks.in/" }
        },
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Blue Blocks Micro Research Institute",
          url: "https://blueblocks.in/",
          contactPoint: [
            {
              "@type": "ContactPoint",
              contactType: "research proposals",
              email: "research@blueblocks.in",
              availableLanguage: ["English"]
            },
            {
              "@type": "ContactPoint",
              contactType: "media inquiries",
              email: "media@blueblocks.in",
              availableLanguage: ["English"]
            }
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://blueblocks.in/" },
            { "@type": "ListItem", position: 2, name: "Contact", item: "https://blueblocks.in/contact" }
          ]
        }
      ],
      sections: [
        {
          id: "contact-hero",
          type: "hero",
          variant: "stark",
          headline: "Contact the Institute.",
          subheadline:
            "Access is structured to protect the integrity of the observational environment. Use the form below for research proposals, dataset access requests, institutional partnerships, and press inquiries.",
          primaryCta: { label: "Send an Inquiry", href: "#contact-form" },
          secondaryCta: { label: "View Data Access Protocols", href: "/publications-open-science" }
        },

        {
          id: "contact-channels",
          type: "grid3",
          header: "Primary Channels",
          intro: "Use the correct channel to reduce review time.",
          items: [
            {
              title: "Research Proposals",
              icon: "mail",
              body:
                "Visiting fellowships, joint authorship, micro-study collaboration, and methodology transfer requests.",
              cta: { label: "Email research@blueblocks.in", href: "mailto:research@blueblocks.in" }
            },
            {
              title: "Media & Press",
              icon: "file",
              body:
                "Press verification, citations, interviews, and media kit requests. Student access is regulated.",
              cta: { label: "Email media@blueblocks.in", href: "mailto:media@blueblocks.in" }
            },
            {
              title: "Institutional Partnerships",
              icon: "building",
              body:
                "MOUs, grant alliances, and long-term collaborations requiring governance and IRB alignment.",
              cta: { label: "Start via Collaborate", href: "/collaborate" }
            }
          ]
        },

        {
          id: "contact-form",
          type: "form",
          header: "Inquiry Form",
          intro:
            "This form opens a draft email in your mail client. Include your affiliation, timeline, and what you intend to publish or validate.",
          submit: {
            to: "research@blueblocks.in",
            subject: "Inquiry — Blue Blocks Micro Research Institute",
            successMessage: "Draft email opened in your mail client."
          },
          fields: [
            {
              name: "category",
              label: "Inquiry Type",
              type: "select",
              required: true,
              options: [
                { label: "Research Proposal / Micro-Study Collaboration", value: "research-proposal" },
                { label: "Dataset Access (IRB + DUA)", value: "data-access" },
                { label: "Visiting Fellowship (2–8 weeks)", value: "fellowship" },
                { label: "Institutional Partnership / MOU", value: "mou" },
                { label: "Media / Press", value: "media" },
                { label: "Other", value: "other" }
              ]
            },
            { name: "name", label: "Full Name", type: "text", required: true },
            { name: "email", label: "Email", type: "email", required: true },
            { name: "affiliation", label: "Affiliation / Organization", type: "text", required: true },
            { name: "country", label: "Country", type: "text", required: false },
            {
              name: "timeline",
              label: "Timeline / Deadline",
              type: "text",
              required: false,
              placeholder: "e.g., Q2 2026, or 'within 4 weeks'"
            },
            {
              name: "message",
              label: "Message",
              type: "textarea",
              required: true,
              placeholder:
                "Describe your research question, data needs, intended outputs (paper/policy/brief), and any verification requests."
            }
          ]
        },

        {
          id: "contact-location",
          type: "split",
          header: "Institutional Address",
          left: {
            type: "text",
            title: "Operational Note",
            body:
              "Campus visits are by appointment only and scheduled outside core observational hours to ensure zero interference with the longitudinal study.\n\nFor press visits: contact media@blueblocks.in at least 5 business days in advance.\n\nFor researcher access: review Data Access Protocols before applying.",
            ctas: [
              { label: "Data Access Protocols", href: "/publications-open-science" },
              { label: "Newsroom", href: "/newsroom" }
            ]
          },
          right: {
            type: "map",
            embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3830.9687590791937!2d78.3536551751226!3d17.450666000979226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93b95e80d3f3%3A0x1d18b58cbd3b4930!2sBlue%20Blocks%20Pre%20School!5e1!3m2!1sen!2sus!4v1770146907132!5m2!1sen!2sus",
            title: "Blue Blocks location map"
          }
        },

        {
          id: "contact-faq",
          type: "accordion",
          header: "Contact FAQs",
          items: [
            {
              q: "Do you respond to every request?",
              a:
                "We respond to requests that include a clear affiliation, research intent, and timeline. Incomplete requests may not be reviewed."
            },
            {
              q: "Can journalists interview students directly?",
              a:
                "Direct access to minors is strictly regulated. Interviews require Ethics Committee approval, parent presence, and non-disruptive scheduling."
            },
            {
              q: "Where should dataset access requests go?",
              a:
                "Start through Collaborate. Researcher access requires IRB approval and a signed Data Use Agreement."
            }
          ]
        }
      ]
    },
  },
};

export default siteContent;
