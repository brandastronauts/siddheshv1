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
              action: { label: "Read Technical Brief", href: "/technical-briefs/sbb-1" }
            },
            {
              tag: "IMF Annual Meetings",
              headline: "Marrakesh: Defining Future Human Capital",
              body:
                "Blue Blocks' pedagogical framework was presented as a scalable model for \"Innovation Economies.\" The case study highlighted how early-stage exposure to high-stakes engineering creates a resilient R&D pipeline for the nation. Focus: Investigating whether early exposure to high-stakes engineering impacts long-term innovation capacity. Longitudinal Hypothesis: We posit that adolescents exposed to TRL-9 constraints (Technology Readiness Level 9) develop significantly higher 'Problem-Solving Agency' by the time they reach tertiary education. Preliminary Findings: While full data maturation is projected for 2026-2030, early indicators suggest a strong correlation: students who held utility patents between ages 12-16 are already pursuing STEM majors at markedly higher rates than matched control groups.",
              action: { label: "View Presentation", href: "/presentations/marrakesh-human-capital" }
            },
            {
              tag: "International Diplomacy / MONISC",
              headline: "Oslo Summit: A Global Benchmark",
              body:
                "On January 28, 2026, at the Nobel Peace Center, Founder Pavan Goyal delivered the \"World Premiere\" of the Blue Blocks Innovation Pedagogy (0–18). Selected by the Monisc Committee (supported by the Norwegian UNESCO Commission) as a \"global benchmark\" for integrating space science, this session formally releases our student-generated datasets to the international network. The Zenodo archive preserves the complete administrative context: the Official Invitation, the Pedagogical Framework presentation, and the open-data release protocols.",
              action: { label: "Access Proceedings Archive", href: "/proceedings/oslo-2026" }
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
          header: "Active Research & Manuscript Pipeline (2026 Cycle)\nWhat We Are Writing",
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
          type: "galleryGrid",
          sectionName: "Visual Evidence",
          intro:
            "As a Micro Research Institute dealing with minors (Ages 0-18), we adhere to strict ethical guidelines regarding visual data. We prioritize subject privacy over public display.",
          header: "Why You Don't See Stock Photos Here",
          body:
            "We do not use staged photography. All imagery released by the Institute must undergo a three-stage ethical clearance process to ensure it documents the process, not just the child. A curated, anonymized archive of our Labs and Methodologies is currently being digitized.",
          cta: { label: "Request Media Kit (Press Only)", href: "/contact" },
          items: [
            {
              tag: "Space Lab",
              title: "Avionics Bench",
              image: {
                src: "/src/assets/placeholders/visual-evidence/avionics-rig-1.jpg",
                alt: "Avionics test rig and measurement tools",
                privacyBlur: false
              },
              caption: "Instrumentation-ready bench setup used for pre-integration validation."
            },
            {
              tag: "Space Lab",
              title: "Lunar Terrain Simulator",
              image: {
                src: "/src/assets/placeholders/visual-evidence/lunar-sim-1.jpg",
                alt: "High-contrast lunar terrain simulation environment",
                privacyBlur: false
              },
              caption: "Controlled environment used for stress-testing collaboration and procedural rigor."
            },
            {
              tag: "Drone Research Centre",
              title: "Prototype Frame",
              image: {
                src: "/src/assets/placeholders/visual-evidence/drone-frame-1.jpg",
                alt: "Drone prototype frame on workbench",
                privacyBlur: false
              },
              caption: "Iterative design artifacts logged across longitudinal prototyping cycles."
            },
            {
              tag: "Research Protocols",
              title: "Measurement & Calibration",
              image: {
                src: "/src/assets/placeholders/visual-evidence/lab-bench-1.jpg",
                alt: "Calibration tools and precision instruments",
                privacyBlur: false
              },
              caption: "Precision tooling used to preserve repeatability and minimize observer interference."
            },
            {
              tag: "Data Wing",
              title: "Secure Data Processing",
              image: {
                src: "/src/assets/placeholders/visual-evidence/data-wing-1.jpg",
                alt: "Secure data center infrastructure",
                privacyBlur: false
              },
              caption: "Air-gapped processing environment supporting anonymization and integrity checks."
            },
            {
              tag: "Terra Utopia",
              title: "Environmental Instrumentation",
              image: {
                src: "/src/assets/placeholders/visual-evidence/field-soil-1.jpg",
                alt: "Soil sensors and environmental measurement instruments",
                privacyBlur: false
              },
              caption: "Longitudinal biosystem measurements captured as part of annual cycles."
            }
          ]
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
          primaryCta: { label: "Download Institute Prospectus", href: "/downloads/institute-prospectus" },
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
          type: "bento",
          header: "Centers of Observation",
          items: [
            {
              size: "lg",
              tag: "Simulation Wing",
              headline: "Space Lab",
              body:
                "A controlled environment for observing high-stakes collaboration. Features lunar terrain simulation and avionics stress-testing to validate student payloads to ISRO standards.",
              image: { src: "/src/assets/placeholders/labs/space-lab.jpg", alt: "Space lab facility", variant: "card", privacyBlur: true }
            },
            {
              size: "md",
              tag: "Prototyping Wing",
              headline: "Drone Research Centre",
              body:
                "Dedicated to the longitudinal study of 'Iterative Failure.' Tracks the engineering lifecycle from initial aerodynamic testing to Patent-Ready flight stability.",
              image: { src: "/src/assets/placeholders/labs/drone-centre.jpg", alt: "Drone research environment", variant: "card", privacyBlur: true }
            },
            {
              size: "sm",
              tag: "Biosystem Wing",
              headline: "Terra Utopia",
              body:
                "Measuring systems thinking in real-time. Students manage complex ecological variables.",
              image: { src: "/src/assets/placeholders/labs/terra-utopia.jpg", alt: "Environmental research facility", variant: "card", privacyBlur: true }
            },
            {
              size: "sm",
              tag: "Synthesis Hub",
              headline: "Data Wing",
              body:
                "Central processing unit for Embedded Fellows to synthesize observations into longitudinal records.",
              image: { src: "/src/assets/placeholders/labs/data-wing.jpg", alt: "Data wing facility", variant: "card", privacyBlur: true }
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
          primaryCta: { label: "Download Framework Paper (PDF)", href: "/downloads/micro-research-framework" },
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
              cta: { label: "Read Abstract", href: "/publications-open-science#manuscript-docket" },
              image: { src: "/src/assets/placeholders/labs/protocol-notes.jpg", alt: "Methodology manuscript", variant: "card", privacyBlur: false }
            },
            {
              tag: "Data Cleaning",
              headline: "Vibration Analysis & Structural Integrity of SBB-1 Payload (Post-Flight)",
              meta: "Domain: Aerospace | Est: Q2 2026",
              body:
                "A technical review of the thermal and vibrational data collected during the PSLV-C62 launch integration.",
              cta: { label: "Notify Me", href: "#doi-alerts" },
              image: { src: "/src/assets/placeholders/labs/avionics.jpg", alt: "Aerospace manuscript", variant: "card", privacyBlur: false }
            },
            {
              tag: "Early Draft",
              headline: "The \"Sovereign IP\" Effect: Longitudinal Impact of Patent Ownership",
              meta: "Domain: Innovation | Est: 2027",
              body:
                "Synthesizing 5 years of data from the Drone Research Centre to map the cognitive leap from \"play\" to \"invention.\"",
              cta: { label: "Request Access", href: "/collaborate" },
              image: { src: "/src/assets/placeholders/labs/drone-centre.jpg", alt: "Innovation manuscript", variant: "card", privacyBlur: false }
            },
            {
              tag: "Drafting",
              headline: "Academic Performance vs. Project Completion: 15-Year Montessori Cohort Analysis",
              meta: "Domain: Education Research | Est: Q4 2026",
              body:
                "Mapping standardized test scores against open-ended engineering project completion rates across the 6-12 continuum.",
              cta: { label: "Notify Me", href: "#doi-alerts" },
              image: { src: "/src/assets/placeholders/labs/data-wing.jpg", alt: "Education manuscript", variant: "card", privacyBlur: false }
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
              image: { src: "/src/assets/placeholders/labs/avionics.jpg", alt: "CubeSat payload", variant: "card", privacyBlur: false }
            },
            {
              size: "md",
              tag: "Patent Pending - #4421",
              headline: "\"The Guardian\" Sanitization Drone",
              body:
                "Dual-rotor autonomous drone for bio-hazard control. Inventors: Drone Research Centre (Ages 9-11).",
              footer: "Examination Stage",
              image: { src: "/src/assets/placeholders/labs/drone-centre.jpg", alt: "Sanitization drone", variant: "card", privacyBlur: true }
            },
            {
              size: "sm",
              tag: "Filing Prep",
              headline: "Sub-Soil Moisture Array",
              body:
                "Passive sensor network for semi-arid zones. Inventors: Terra Utopia Team.",
              footer: "Preparation",
              image: { src: "/src/assets/placeholders/labs/terra-utopia.jpg", alt: "Moisture array sensors", variant: "card", privacyBlur: false }
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
          footerCta: { label: "Download Schema Definitions (.zip)", href: "/downloads/schema-definitions" }
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
              cta: { label: "Browse Zenodo", href: "/publications-open-science#open-access" },
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
              cta: { label: "Staff Access", href: "/staff-access" },
              badge: "Restricted"
            }
          ]
        },

        {
          id: "open-access",
          type: "textBlock",
          header: "Open Access Repository",
          body:
            "Our Open Access materials are available through the Zenodo Community Repository. When the official Blue Blocks Zenodo profile is published, a direct link will appear here. Until then, methodology papers and aggregate datasets can be requested via our Collaborate page."
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
              cta: { label: "Download (PDF)", href: "/downloads/micro-research-framework" }
            },
            {
              tag: "Spec",
              headline: "Micro Dataset Specification v1.0",
              meta: "DOI: 10.5281/zenodo.YYYYY",
              body:
                "The technical schema for variable definitions and anonymization standards.",
              cta: { label: "Download Spec", href: "/downloads/micro-dataset-specification" }
            },
            {
              tag: "Guide",
              headline: "Citation Guide",
              meta: "Standard",
              body:
                "Standard format for attributing Micro-Studies in academic work.",
              cta: { label: "View Guide", href: "/downloads/citation-guide" }
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
              image: { src: "/src/assets/placeholders/avatars/pavan.jpg", alt: "Pavan Goyal", variant: "avatar", privacyBlur: false }
            },
            {
              headline: "Munira Hussain",
              tag: "Director of Pedagogy",
              body:
                "Credentials: AMI Diploma / M.Ed\n\nEnsures all research protocols integrate seamlessly with the Montessori curriculum without disrupting the 'Children's House.'",
              image: { src: "/src/assets/placeholders/avatars/munira.jpg", alt: "Munira Hussain", variant: "avatar", privacyBlur: false }
            },
            {
              headline: "[Name Pending]",
              tag: "Non-Executive Director",
              body:
                "Credentials: [Relevant Industry Credential]\n\nAdvises on long-term institutional strategy and external partnerships.",
              image: { src: "/src/assets/placeholders/avatars/director-placeholder.jpg", alt: "Non-Executive Director", variant: "avatar", privacyBlur: false }
            }
          ]
        },

        {
          id: "gov-council",
          type: "cards",
          variant: "profiles",
          header: "Research Council & Advisory Board",
          intro:
            "External academic advisors providing independent oversight on data access, ethical review, and methodological integrity.",
          cards: [
            {
              headline: "[Advisor 1]",
              tag: "External Academic Advisor",
              body:
                "Affiliation: [University / Organization]\n\nRole: Provides independent review of observation protocols and IRB alignment.",
              image: { src: "/src/assets/placeholders/avatars/advisor-placeholder.jpg", alt: "Academic Advisor", variant: "avatar", privacyBlur: false }
            },
            {
              headline: "[Advisor 2]",
              tag: "IRB / Ethics Consultant",
              body:
                "Affiliation: [Relevant Institution]\n\nRole: Oversees privacy architecture and k-anonymization standards.",
              image: { src: "/src/assets/placeholders/avatars/advisor-placeholder.jpg", alt: "Ethics Consultant", variant: "avatar", privacyBlur: false }
            }
          ]
        },

        {
          id: "irb-guidelines",
          type: "accordion",
          header: "IRB-Aligned Standards & Privacy Architecture",
          intro:
            "Our research governance framework is built on IRB principles adapted for embedded observation.",
          items: [
            {
              q: "Informed Consent",
              a:
                "All families provide comprehensive consent at enrollment. Consent forms explain: what data is collected, how it's used, how long it's retained, and the right to withdraw at any time. No child is observed without parental consent."
            },
            {
              q: "Anonymization Protocols",
              a:
                "Published datasets use k-anonymity standards. Names become alphanumeric codes. Ages become ranges. School location becomes 'urban Montessori school, Hyderabad, India.' Photos: faces blurred or cropped. No combination of published data points allows re-identification."
            },
            {
              q: "Data Retention & Access",
              a:
                "Raw data is retained for the duration of the longitudinal study (currently 15+ years). Access tiers: (1) Open Access—published papers, aggregate stats. (2) Researcher Access—de-identified datasets, requires IRB + DUA. (3) Internal Only—identifiable data, staff only."
            },
            {
              q: "Ethics Review Process",
              a:
                "All new observation protocols are reviewed by the Research Council before deployment. Reviews assess: scientific merit, privacy impact, disruption to learning environment, consent adequacy."
            }
          ]
        },

        {
          id: "gov-ip",
          type: "textBlock",
          header: "Student IP Rights",
          body:
            "When students invent, they own. Utility patents filed by the Institute list student inventors by name (with parental consent). IP rights remain with student inventors. The Institute facilitates filing and provides pedagogical context, but does not claim ownership of student inventions. All patent decisions go through the Patent Review Board, which includes student representation."
        },

        {
          id: "gov-faq",
          type: "accordion",
          header: "Governance FAQs",
          items: [
            {
              q: "Who reviews observation protocols?",
              a:
                "The Research Council (internal + external advisors) reviews all new protocols before they are deployed."
            },
            {
              q: "Can parents withdraw consent?",
              a:
                "Yes. Parents can withdraw their child from observation at any time. Historical data is anonymized or deleted upon request."
            },
            {
              q: "How do you handle data breaches?",
              a:
                "All identifiable data is stored in air-gapped systems with role-based access. In the event of a breach, affected families would be notified within 72 hours."
            }
          ]
        }
      ]
    },

    "/collaborate": {
      title: "Collaborate",
      metaDescription:
        "Collaborate with the Blue Blocks Micro Research Institute: visiting fellowships, institutional partnerships, methodology transfer, and joint research opportunities.",
      seo: {
        title: "Collaborate | Blue Blocks Micro Research Institute",
        canonical: "https://blueblocks.in/collaborate",
        robots: "noindex,nofollow,noarchive,nosnippet",
        openGraph: {
          type: "website",
          url: "https://blueblocks.in/collaborate",
          title: "Collaborate with the Institute",
          description:
            "Visiting fellowships, institutional partnerships, methodology transfer, and joint research opportunities.",
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
        }
      ],
      sections: [
        {
          id: "col-hero",
          type: "hero",
          variant: "network",
          headline: "Collaborate With Us.",
          subheadline:
            "We are actively building a network of academic partners, policymakers, and research institutions who share our commitment to longitudinal observation. Whether you're a PhD student seeking unique datasets, a university exploring Methodology Transfer, or a government body interested in replicating our model—this is where you start.",
          primaryCta: { label: "Submit a Proposal", href: "#collab-form" },
          secondaryCta: { label: "View Access Tiers", href: "/publications-open-science#access-tiers" },
          image: {
            src: "/src/assets/banners/collaborate-network.jpg",
            alt: "Collaboration network visual",
            variant: "hero",
            privacyBlur: false,
            caption: ""
          }
        },

        {
          id: "col-tracks",
          type: "grid3",
          header: "Collaboration Tracks - How to Work With Us",
          intro:
            "We've structured collaboration into three distinct pathways based on intent and timeline.",
          items: [
            {
              title: "Scholar Track",
              icon: "graduation",
              body:
                "For PhD candidates, Post-Docs, and Faculty. Apply for visiting fellowships (2-8 weeks on-site) or remote dataset access (requires IRB approval + Data Use Agreement). Timeline: 2-4 weeks for review."
            },
            {
              title: "Institutional Track",
              icon: "building",
              body:
                "For Universities, Research Organizations, Policy Institutes, and NGOs. Formal MOU process for long-term alliances, joint authorship, or Methodology Transfer. Timeline: 4-8 weeks for review."
            },
            {
              title: "Media Track",
              icon: "mic",
              body:
                "For Journalists, Publishers, and Documentary Filmmakers. Access to approved B-roll, leadership interviews, and attribution guidelines. Timeline: 1-2 weeks for review."
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
            image: { src: "/src/assets/placeholders/labs/avionics.jpg", alt: "CubeSat or rocket launch", variant: "card", privacyBlur: false },
            tag: "Mission Milestone",
            headline: "Blue Blocks Payload Authorized for ISRO Mission",
            excerpt:
              "Twelve teenagers (ages 12-16) designed a thermal sensor payload. IN-SPACe authorized it for PSLV-C62 launch after eighteen months of technical review. The payload will gather temperature data in low Earth orbit if it survives launch vibration.",
            cta: { label: "Read Full Dispatch", href: "/newsroom/dispatch/isro-payload-authorization" }
          },
          side: [
            {
              tag: "Publication Event",
              headline: "Micro Research Framework Published (Open Access)",
              excerpt:
                "We have formally published the architectural blueprint for embedded longitudinal observation. This framework allows other institutions to replicate this without external funding. We spent three years figuring out what doesn't work before we got here.",
              cta: { label: "View Press Release", href: "/methodology" },
              image: { src: "/src/assets/placeholders/labs/protocol-notes.jpg", alt: "Methodology framework", variant: "card", privacyBlur: false }
            },
            {
              tag: "International",
              headline: "Nobel Peace Center Features Student Innovation",
              excerpt:
                "Blue Blocks student projects have been selected for exhibition as exemplars of \"Youth-Led Innovation,\" validating our 0-18 Sovereignty Model on a global stage.",
              cta: { label: "Read Coverage", href: "/newsroom/coverage/nobel-peace-center" },
              image: { src: "/src/assets/placeholders/card-default.jpg", alt: "International recognition", variant: "card", privacyBlur: false }
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
              cta: { label: "Read Update", href: "/newsroom/updates/iit-hyderabad-advisory" },
              image: { src: "/src/assets/placeholders/labs/data-wing.jpg", alt: "Institutional partnership visual", variant: "card", privacyBlur: false }
            },
            {
              tag: "Student IP",
              headline: "Utility Patent #4421 Filed: The \"Guardian\" Drone",
              meta: "September 02, 2025",
              body:
                "The Drone Research Centre has filed its fifth utility patent, marking a significant milestone in our study of \"Innovation Agency\" in the 9-11 age group.",
              cta: { label: "Read Update", href: "/newsroom/updates/utility-patent-4421" },
              image: { src: "/src/assets/placeholders/labs/drone-centre.jpg", alt: "Drone research visual", variant: "card", privacyBlur: true }
            },
            {
              tag: "Fellowship",
              headline: "Visiting Scholar Applications Open for 2026 Cycle",
              meta: "August 10, 2025",
              body:
                "We are now accepting proposals for the Winter Residency. PhD candidates focusing on longitudinal behavioral observation are encouraged to apply.",
              cta: { label: "Read Update", href: "/newsroom/updates/visiting-scholars-2026" },
              image: { src: "/src/assets/placeholders/labs/space-lab.jpg", alt: "Fellowship visual", variant: "card", privacyBlur: false }
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
              cta: { label: "Download Asset Pack .zip", href: "/downloads/brand-asset-pack" }
            },
            {
              title: "Principal Investigator",
              icon: "user",
              body:
                "Approved biography and headshots for Pavan Goyal (PI) and Munira Hussain (Director of Pedagogy).",
              cta: { label: "Download Bio Sheet", href: "/downloads/leadership-bio-sheet" }
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
              q: "How do I verify claims made about the Institute?",
              a:
                "All press materials include DOI references where applicable. For verification, contact press@blueblocks.in with your publication name and deadline."
            }
          ]
        }
      ]
    },

    "/contact": {
      title: "Contact",
      metaDescription:
        "Contact the Blue Blocks Micro Research Institute: research inquiries, press requests, collaboration proposals, and institutional correspondence.",
      seo: {
        title: "Contact | Blue Blocks Micro Research Institute",
        canonical: "https://blueblocks.in/contact",
        robots: "noindex,nofollow,noarchive,nosnippet",
        openGraph: {
          type: "website",
          url: "https://blueblocks.in/contact",
          title: "Contact the Institute",
          description:
            "Research inquiries, press requests, collaboration proposals, and institutional correspondence.",
          image: {
            url: "https://blueblocks.in/og/contact.jpg",
            width: 1200,
            height: 630,
            alt: "Institutional contact"
          }
        }
      },
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Contact",
          url: "https://blueblocks.in/contact",
          isPartOf: { "@type": "WebSite", url: "https://blueblocks.in/" }
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
          headline: "Contact.",
          subheadline:
            "For research inquiries, press requests, or collaboration proposals. We respond to all institutional correspondence within 5 business days.",
          primaryCta: { label: "Submit Inquiry", href: "#contact-form" },
          image: {
            src: "/src/assets/banners/contact-institutional.jpg",
            alt: "Institutional contact visual",
            variant: "hero",
            privacyBlur: false,
            caption: ""
          }
        },

        {
          id: "contact-channels",
          type: "grid3",
          header: "Direct Channels",
          items: [
            {
              title: "Research Inquiries",
              icon: "microscope",
              body:
                "For data access requests, IRB documentation, visiting fellowships, and academic collaborations.",
              cta: { label: "research@blueblocks.in", href: "mailto:research@blueblocks.in" }
            },
            {
              title: "Press & Media",
              icon: "mic",
              body:
                "For interview requests, media kit access, attribution verification, and publication inquiries.",
              cta: { label: "press@blueblocks.in", href: "mailto:press@blueblocks.in" }
            },
            {
              title: "General",
              icon: "mail",
              body:
                "For general correspondence, partnerships, and institutional inquiries.",
              cta: { label: "info@blueblocks.in", href: "mailto:info@blueblocks.in" }
            }
          ]
        },

        {
          id: "contact-form",
          type: "form",
          header: "Submit an Inquiry",
          intro:
            "Use this form for research proposals, press requests, or general institutional correspondence.",
          submit: {
            to: "info@blueblocks.in",
            subject: "Website Inquiry — Blue Blocks Micro Research Institute",
            successMessage: "Draft email opened in your mail client."
          },
          fields: [
            { name: "name", label: "Full Name", type: "text", required: true },
            { name: "email", label: "Email", type: "email", required: true },
            {
              name: "type",
              label: "Inquiry Type",
              type: "select",
              required: true,
              options: [
                { label: "Research / Data Access", value: "research" },
                { label: "Press / Media", value: "press" },
                { label: "Collaboration Proposal", value: "collaboration" },
                { label: "General Inquiry", value: "general" },
                { label: "Staff Access Request", value: "staff-access" }
              ]
            },
            { name: "affiliation", label: "Affiliation / Organization", type: "text", required: false },
            {
              name: "message",
              label: "Message",
              type: "textarea",
              required: true,
              placeholder: "Please include relevant context: your research question, publication, deadline, or specific request."
            }
          ]
        },

        {
          id: "contact-faq",
          type: "accordion",
          header: "Contact FAQs",
          items: [
            {
              q: "How long does it take to get a response?",
              a:
                "We respond to all institutional correspondence within 5 business days. Complex requests (IRB, fellowships) may require 2-4 weeks for review."
            },
            {
              q: "Can I visit the Institute?",
              a:
                "Visits are by appointment only to protect the educational environment. Apply through the Collaborate page for visiting fellowship opportunities."
            },
            {
              q: "Can I interview minors?",
              a:
                "Direct access to minors is strictly regulated. Interviews require Ethics Committee approval, parental presence, and non-disruptive scheduling."
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

    // ============ NEW PAGES ============

    "/technical-briefs/sbb-1": {
      title: "Technical Brief: Mission SBB-1",
      metaDescription:
        "Flight qualification record, authorization pathway, and institutional archive summary for the SBB-1 payload aboard ISRO PSLV-C62.",
      seo: {
        title: "Technical Brief: Mission SBB-1 | Blue Blocks Micro Research Institute",
        canonical: "https://blueblocks.in/technical-briefs/sbb-1",
        robots: "noindex,nofollow,noarchive,nosnippet",
        openGraph: {
          type: "article",
          url: "https://blueblocks.in/technical-briefs/sbb-1",
          title: "Technical Brief: Mission SBB-1",
          description:
            "Flight qualification record, authorization pathway, and institutional archive summary for the SBB-1 payload.",
          image: {
            url: "https://blueblocks.in/og/sbb-1.jpg",
            width: 1200,
            height: 630,
            alt: "Aerospace technical brief"
          }
        }
      },
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Technical Brief: Mission SBB-1",
          url: "https://blueblocks.in/technical-briefs/sbb-1",
          isPartOf: { "@type": "WebSite", url: "https://blueblocks.in/" }
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://blueblocks.in/" },
            { "@type": "ListItem", position: 2, name: "Technical Briefs", item: "https://blueblocks.in/technical-briefs" },
            { "@type": "ListItem", position: 3, name: "Mission SBB-1", item: "https://blueblocks.in/technical-briefs/sbb-1" }
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "Report",
          name: "Mission SBB-1 Technical Brief",
          author: { "@type": "Organization", name: "Blue Blocks Micro Research Institute" },
          about: "Flight qualification and authorization pathway for student-built payload"
        }
      ],
      sections: [
        {
          id: "sbb1-hero",
          type: "hero",
          variant: "stark",
          headline: "Technical Brief: Mission SBB-1",
          subheadline:
            "Flight Qualification, Authorization & Pedagogical Valorization. This document records the institutional documentation pathway for the SBB-1 payload authorization and its pre-integration flight qualification.",
          primaryCta: { label: "Download Demo Technical Brief", href: "/downloads/sbb-1-technical-brief", download: true },
          secondaryCta: { label: "Read Newsroom Dispatch", href: "/newsroom/dispatch/isro-payload-authorization" },
          image: {
            src: "/src/assets/banners/technical-brief-aero.jpg",
            alt: "Aerospace engineering environment",
            variant: "hero",
            privacyBlur: false,
            caption: ""
          }
        },
        {
          id: "sbb1-summary",
          type: "textBlock",
          header: "Executive Summary",
          body:
            "Blue Blocks Montessori School, in technical collaboration with TakeMe2Space, integrated a 1U student payload for launch aboard ISRO PSLV-C62. The Blue Blocks Micro Research Institute served as the pedagogical research partner, structuring the mission as a longitudinal protocol to test adolescent resilience, TRL-9 performance under constraints, and failure recovery behavior."
        },
        {
          id: "sbb1-metadata",
          type: "comparisonTable",
          heading: "Mission Metadata",
          intro: "",
          headers: ["Field", "Value"],
          rows: [
            ["Document ID", "SBB1-AUTH-001 (Demo Archive Copy)"],
            ["Payload", "SBB-1 (1U) — Thermal sensor module"],
            ["Launch Vehicle", "PSLV-C62"],
            ["Authorization Body", "IN-SPACe (Department of Space, Govt. of India)"],
            ["Qualification Focus", "Thermal + Vibration readiness"],
            ["Outcome Note", "Launch vehicle anomaly (Stage 4 ignition failure at T+847 seconds)"],
            ["Archive Status", "Curated institutional record (demo)"]
          ]
        },
        {
          id: "sbb1-abstract",
          type: "textBlock",
          header: "Abstract",
          body:
            "This brief records the institutional documentation pathway for the SBB-1 payload authorization and its pre-integration flight qualification. It summarizes the compliance requirements expected of a student payload intended for Low Earth Orbit operations, including debris mitigation adherence, radio/frequency allocation requirements, and safety verification protocols."
        },
        {
          id: "sbb1-compliance",
          type: "list",
          sectionName: "Compliance Layer",
          header: "Qualification & Compliance Requirements",
          items: [
            {
              title: "Orbital Debris Mitigation",
              description: "IADC-aligned debris mitigation principles for student payloads."
            },
            {
              title: "Frequency Allocation",
              description: "Radio frequency coordination and allocation verification."
            },
            {
              title: "Integration Safety Review",
              description: "Pre-integration safety verification protocols."
            },
            {
              title: "Qualification Readiness",
              description: "Thermal + Vibration qualification assumptions validated."
            }
          ]
        },
        {
          id: "sbb1-why",
          type: "highlightBox",
          title: "Why It Matters",
          body:
            "Traditional academic projects are designed to succeed in controlled conditions. This mission was designed to test what happens when reality does not cooperate. The launch anomaly did not invalidate the learning protocol — it strengthened it. The mission outcome validated the curriculum not through orbital success, but through Valorization: proving to the students that their engineering was 'real enough to fail in real ways.'"
        },
        {
          id: "sbb1-gallery",
          type: "cards",
          header: "Mission Documentation",
          variant: "iconCards",
          cards: [
            {
              tag: "Hardware",
              headline: "Satellite Hardware",
              body: "CubeSat thermal sensor module components.",
              image: { src: "/src/assets/placeholders/labs/satellite-hardware.jpg", alt: "Satellite hardware", variant: "card" }
            },
            {
              tag: "Avionics",
              headline: "Avionics Integration",
              body: "Pre-flight avionics qualification setup.",
              image: { src: "/src/assets/placeholders/labs/avionics.jpg", alt: "Avionics integration", variant: "card" }
            },
            {
              tag: "Protocols",
              headline: "Protocol Documentation",
              body: "Flight qualification documentation archive.",
              image: { src: "/src/assets/placeholders/labs/protocol-notes.jpg", alt: "Protocol notes", variant: "card" }
            }
          ]
        }
      ]
    },

    "/presentations/marrakesh-human-capital": {
      title: "Marrakesh: Defining Future Human Capital",
      metaDescription:
        "A framework for building Innovation Economies (0–18), presented at the IMF Annual Meetings in Marrakesh.",
      seo: {
        title: "Marrakesh Presentation | Future Human Capital | Blue Blocks Micro Research Institute",
        canonical: "https://blueblocks.in/presentations/marrakesh-human-capital",
        robots: "noindex,nofollow,noarchive,nosnippet",
        openGraph: {
          type: "article",
          url: "https://blueblocks.in/presentations/marrakesh-human-capital",
          title: "Marrakesh: Defining Future Human Capital",
          description:
            "A framework for building Innovation Economies (0–18), presented at the IMF Annual Meetings.",
          image: {
            url: "https://blueblocks.in/og/marrakesh.jpg",
            width: 1200,
            height: 630,
            alt: "Conference presentation"
          }
        }
      },
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Marrakesh: Defining Future Human Capital",
          url: "https://blueblocks.in/presentations/marrakesh-human-capital",
          isPartOf: { "@type": "WebSite", url: "https://blueblocks.in/" }
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://blueblocks.in/" },
            { "@type": "ListItem", position: 2, name: "Presentations", item: "https://blueblocks.in/presentations" },
            { "@type": "ListItem", position: 3, name: "Marrakesh", item: "https://blueblocks.in/presentations/marrakesh-human-capital" }
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: "Marrakesh: Defining Future Human Capital",
          author: { "@type": "Organization", name: "Blue Blocks Micro Research Institute" },
          about: "Innovation economy framework presentation"
        }
      ],
      sections: [
        {
          id: "marr-hero",
          type: "hero",
          variant: "stark",
          headline: "Marrakesh: Defining Future Human Capital",
          subheadline:
            "A framework for building Innovation Economies (0–18). At the IMF Annual Meetings, Blue Blocks' model was positioned as a scalable prototype for an Innovation Economy pipeline.",
          primaryCta: { label: "Download Demo Deck Outline", href: "/downloads/marrakesh-deck-outline", download: true },
          secondaryCta: { label: "Request Full Deck", href: "/contact?subject=Full%20Marrakesh%20Deck%20Request" },
          image: {
            src: "/src/assets/banners/presentation-conference.jpg",
            alt: "Conference presentation hall",
            variant: "hero",
            privacyBlur: false,
            caption: ""
          }
        },
        {
          id: "marr-overview",
          type: "textBlock",
          header: "Overview",
          body:
            "At the IMF Annual Meetings, Blue Blocks' model was positioned as a scalable prototype for an Innovation Economy pipeline. The presentation highlighted how early-stage exposure to high-stakes engineering creates a resilient R&D pipeline for the nation."
        },
        {
          id: "marr-thesis",
          type: "highlightBox",
          title: "Core Thesis",
          body:
            "Universities have research funding and PhDs — but lack long-term access to developing children. Schools have children for 15 years — but lack research infrastructure. Blue Blocks runs both."
        },
        {
          id: "marr-hypothesis",
          type: "textBlock",
          variant: "accent",
          header: "Longitudinal Hypothesis",
          body:
            "We posit that adolescents exposed to TRL-9 constraints develop higher Problem-Solving Agency by tertiary education."
        },
        {
          id: "marr-indicators",
          type: "grid3",
          header: "Early Indicators",
          items: [
            {
              title: "STEM Persistence",
              body: "Patent-holding students show stronger STEM persistence in tertiary education."
            },
            {
              title: "Prototype Ownership",
              body: "Prototype ownership correlates with autonomy and self-directed learning."
            },
            {
              title: "Failure Recovery",
              body: "Failure recovery improves when constraints are real, not simulated."
            }
          ]
        },
        {
          id: "marr-slides",
          type: "list",
          sectionName: "Presentation Outline",
          header: "Slide Outline (8 Sections)",
          items: [
            { title: "1. The Research Gap", description: "Why traditional education systems fail to produce innovators." },
            { title: "2. Embedded Solution", description: "Integrating research into the learning environment." },
            { title: "3. Micro-Research Architecture", description: "High-frequency, practitioner-executable protocols." },
            { title: "4. TRL-9 Environments", description: "Real constraints, real failure, real learning." },
            { title: "5. IP as Output Metric", description: "Patents as evidence of educational efficacy." },
            { title: "6. Failure Recovery Variable", description: "Measuring resilience through authentic setbacks." },
            { title: "7. Replication Model", description: "How to transfer this methodology to other institutions." },
            { title: "8. Collaboration Pathways", description: "Opportunities for academic and policy partnerships." }
          ]
        }
      ]
    },

    "/proceedings/oslo-2026": {
      title: "Oslo Summit 2026 Proceedings Archive",
      metaDescription:
        "Proceedings archive from the Oslo Summit at the Nobel Peace Center, January 2026 — institutional release record and open-data protocols.",
      seo: {
        title: "Oslo Summit 2026 Proceedings Archive | Blue Blocks Micro Research Institute",
        canonical: "https://blueblocks.in/proceedings/oslo-2026",
        robots: "noindex,nofollow,noarchive,nosnippet",
        openGraph: {
          type: "website",
          url: "https://blueblocks.in/proceedings/oslo-2026",
          title: "Oslo Summit 2026 Proceedings Archive",
          description:
            "Institutional release record from the Nobel Peace Center presentation, January 28, 2026.",
          image: {
            url: "https://blueblocks.in/og/oslo.jpg",
            width: 1200,
            height: 630,
            alt: "Oslo summit auditorium"
          }
        }
      },
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Oslo Summit 2026 Proceedings Archive",
          url: "https://blueblocks.in/proceedings/oslo-2026",
          isPartOf: { "@type": "WebSite", url: "https://blueblocks.in/" }
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://blueblocks.in/" },
            { "@type": "ListItem", position: 2, name: "Proceedings", item: "https://blueblocks.in/proceedings" },
            { "@type": "ListItem", position: 3, name: "Oslo 2026", item: "https://blueblocks.in/proceedings/oslo-2026" }
          ]
        }
      ],
      sections: [
        {
          id: "oslo-hero",
          type: "hero",
          variant: "stark",
          headline: "Proceedings Archive: Oslo Summit 2026",
          subheadline:
            "Nobel Peace Center — institutional release record. On January 28, 2026, Founder Pavan Goyal delivered the world premiere of the Blue Blocks Innovation Pedagogy (0–18).",
          primaryCta: { label: "Download Archive Items", href: "/downloads/oslo-archive-items", download: true },
          secondaryCta: { label: "View Publications", href: "/publications-open-science" },
          image: {
            src: "/src/assets/banners/proceedings-auditorium.jpg",
            alt: "Grand auditorium for proceedings",
            variant: "hero",
            privacyBlur: false,
            caption: ""
          }
        },
        {
          id: "oslo-context",
          type: "textBlock",
          header: "Context",
          body:
            "On January 28, 2026, at the Nobel Peace Center, Founder Pavan Goyal delivered the world premiere of the Blue Blocks Innovation Pedagogy (0–18). Selected by the Monisc Committee (supported by the Norwegian UNESCO Commission) as a global benchmark, this session formalized the release of student-generated datasets into an international open science network."
        },
        {
          id: "oslo-archive",
          type: "cards",
          header: "Archive Items",
          variant: "iconCards",
          cards: [
            {
              tag: "Document",
              headline: "Official Invitation Letter (Demo)",
              body: "Formal invitation from the Monisc Committee for the Oslo Summit presentation."
            },
            {
              tag: "Presentation",
              headline: "Pedagogical Framework Presentation (Demo)",
              body: "The 0–18 Innovation Pedagogy framework as presented at the Nobel Peace Center."
            },
            {
              tag: "Protocol",
              headline: "Open-Data Release Protocol (Demo)",
              body: "Documentation of the open science data release and archival procedures."
            }
          ]
        },
        {
          id: "oslo-ethics",
          type: "highlightBox",
          title: "Ethical Statement",
          body:
            "This archive does not disclose identifiable records. Public access artifacts preserve methodological context, not subject identity. All student data referenced has been anonymized per k-anonymity standards."
        }
      ]
    },

    "/downloads": {
      title: "Downloads",
      metaDescription:
        "Downloadable institutional artifacts and documentation from the Blue Blocks Micro Research Institute.",
      seo: {
        title: "Downloads | Blue Blocks Micro Research Institute",
        canonical: "https://blueblocks.in/downloads",
        robots: "noindex,nofollow,noarchive,nosnippet",
        openGraph: {
          type: "website",
          url: "https://blueblocks.in/downloads",
          title: "Downloads",
          description:
            "Downloadable institutional artifacts and documentation.",
          image: {
            url: "https://blueblocks.in/og/downloads.jpg",
            width: 1200,
            height: 630,
            alt: "Downloads archive"
          }
        }
      },
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Downloads",
          url: "https://blueblocks.in/downloads",
          isPartOf: { "@type": "WebSite", url: "https://blueblocks.in/" }
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://blueblocks.in/" },
            { "@type": "ListItem", position: 2, name: "Downloads", item: "https://blueblocks.in/downloads" }
          ]
        }
      ],
      sections: [
        {
          id: "downloads-hero",
          type: "hero",
          variant: "stark",
          headline: "Downloads",
          subheadline:
            "This area contains downloadable institutional artifacts and documentation. Where \"demo\" is specified, files are placeholders until official PDFs are released via DOI.",
          image: {
            src: "/src/assets/banners/downloads-archive.jpg",
            alt: "Downloads archive visual",
            variant: "hero",
            privacyBlur: false,
            caption: ""
          }
        },
        {
          id: "downloads-list",
          type: "downloadList",
          header: "Available Downloads",
          items: [
            {
              title: "Institute Prospectus (Demo)",
              description: "Institutional overview, governance architecture, research domains, labs.",
              href: "/downloads/institute-prospectus"
            },
            {
              title: "Micro Research Methodology Framework (Demo)",
              description: "Operational method: bounded protocols, ecological validity, publication intent.",
              href: "/downloads/micro-research-framework"
            },
            {
              title: "Micro Dataset Specification v1.0 (Demo)",
              description: "Variable dictionary, anonymization conventions, data structures.",
              href: "/downloads/micro-dataset-specification"
            },
            {
              title: "Citation Guide (Demo)",
              description: "How to cite Institute materials and DOI-based assets.",
              href: "/downloads/citation-guide"
            },
            {
              title: "Schema Definitions (.zip) (Demo)",
              description: "Variable sets (Innovation Index, Bio-Metric Log, Academic Correlation).",
              href: "/downloads/schema-definitions"
            },
            {
              title: "Brand Asset Pack (.zip) (Demo)",
              description: "Logos, identity, typography guidance placeholders.",
              href: "/downloads/brand-asset-pack"
            },
            {
              title: "Leadership Bio Sheet (Demo)",
              description: "Approved bios/headshots placeholders.",
              href: "/downloads/leadership-bio-sheet"
            }
          ]
        }
      ]
    },

    "/downloads/institute-prospectus": {
      title: "Institute Prospectus",
      metaDescription: "Institutional overview, governance architecture, research domains, and labs.",
      seo: {
        title: "Institute Prospectus (Demo) | Blue Blocks Micro Research Institute",
        canonical: "https://blueblocks.in/downloads/institute-prospectus",
        robots: "noindex,nofollow,noarchive,nosnippet"
      },
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Institute Prospectus",
          url: "https://blueblocks.in/downloads/institute-prospectus"
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://blueblocks.in/" },
            { "@type": "ListItem", position: 2, name: "Downloads", item: "https://blueblocks.in/downloads" },
            { "@type": "ListItem", position: 3, name: "Institute Prospectus", item: "https://blueblocks.in/downloads/institute-prospectus" }
          ]
        }
      ],
      downloadMeta: {
        filename: "institute-prospectus-demo.txt",
        version: "Demo v1.0",
        lastUpdated: "February 2026"
      },
      sections: [
        {
          id: "dl-hero",
          type: "hero",
          variant: "stark",
          headline: "Institute Prospectus (Demo)",
          subheadline: "Institutional overview, governance architecture, research domains, and labs.",
          image: { src: "/src/assets/banners/governance-oversight.jpg", alt: "Governance banner", variant: "hero" }
        },
        {
          id: "dl-info",
          type: "highlightBox",
          title: "Download Information",
          body: "Version: Demo v1.0\nLast Updated: February 2026\n\nThis is a demo placeholder file. The official PDF will be released with DOI upon publication."
        },
        {
          id: "dl-button",
          type: "downloadButton",
          label: "Download Demo File",
          filename: "institute-prospectus-demo.txt",
          content: "BLUE BLOCKS MICRO RESEARCH INSTITUTE\nInstitute Prospectus (Demo)\n\nThis is a placeholder file.\nThe official prospectus will be released with DOI upon publication.\n\nFor inquiries: research@blueblocks.in"
        }
      ]
    },

    "/downloads/micro-research-framework": {
      title: "Micro Research Methodology Framework",
      metaDescription: "Operational method: bounded protocols, ecological validity, publication intent.",
      seo: {
        title: "Micro Research Framework (Demo) | Blue Blocks Micro Research Institute",
        canonical: "https://blueblocks.in/downloads/micro-research-framework",
        robots: "noindex,nofollow,noarchive,nosnippet"
      },
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Micro Research Methodology Framework",
          url: "https://blueblocks.in/downloads/micro-research-framework"
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://blueblocks.in/" },
            { "@type": "ListItem", position: 2, name: "Downloads", item: "https://blueblocks.in/downloads" },
            { "@type": "ListItem", position: 3, name: "Micro Research Framework", item: "https://blueblocks.in/downloads/micro-research-framework" }
          ]
        }
      ],
      downloadMeta: {
        filename: "micro-research-framework-demo.txt",
        version: "Demo v1.0",
        lastUpdated: "February 2026"
      },
      sections: [
        {
          id: "dl-hero",
          type: "hero",
          variant: "stark",
          headline: "Micro Research Methodology Framework (Demo)",
          subheadline: "Operational method: bounded protocols, ecological validity, publication intent.",
          image: { src: "/src/assets/banners/methodology-framework.jpg", alt: "Methodology banner", variant: "hero" }
        },
        {
          id: "dl-info",
          type: "highlightBox",
          title: "Download Information",
          body: "Version: Demo v1.0\nLast Updated: February 2026\nDOI: 10.5281/zenodo.XXXXX (pending)\n\nThis is a demo placeholder file. The official PDF will be released with DOI upon publication."
        },
        {
          id: "dl-button",
          type: "downloadButton",
          label: "Download Demo File",
          filename: "micro-research-framework-demo.txt",
          content: "BLUE BLOCKS MICRO RESEARCH INSTITUTE\nMicro Research Methodology Framework (Demo)\n\nThis is a placeholder file.\nThe official framework paper will be released with DOI upon publication.\n\nFor inquiries: research@blueblocks.in"
        }
      ]
    },

    "/downloads/micro-dataset-specification": {
      title: "Micro Dataset Specification v1.0",
      metaDescription: "Variable dictionary, anonymization conventions, data structures.",
      seo: {
        title: "Micro Dataset Specification (Demo) | Blue Blocks Micro Research Institute",
        canonical: "https://blueblocks.in/downloads/micro-dataset-specification",
        robots: "noindex,nofollow,noarchive,nosnippet"
      },
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Micro Dataset Specification",
          url: "https://blueblocks.in/downloads/micro-dataset-specification"
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://blueblocks.in/" },
            { "@type": "ListItem", position: 2, name: "Downloads", item: "https://blueblocks.in/downloads" },
            { "@type": "ListItem", position: 3, name: "Dataset Specification", item: "https://blueblocks.in/downloads/micro-dataset-specification" }
          ]
        }
      ],
      downloadMeta: {
        filename: "micro-dataset-specification-demo.txt",
        version: "Demo v1.0",
        lastUpdated: "February 2026"
      },
      sections: [
        {
          id: "dl-hero",
          type: "hero",
          variant: "stark",
          headline: "Micro Dataset Specification v1.0 (Demo)",
          subheadline: "Variable dictionary, anonymization conventions, data structures.",
          image: { src: "/src/assets/banners/governance-oversight.jpg", alt: "Dataset banner", variant: "hero" }
        },
        {
          id: "dl-info",
          type: "highlightBox",
          title: "Download Information",
          body: "Version: Demo v1.0\nLast Updated: February 2026\nDOI: 10.5281/zenodo.YYYYY (pending)\n\nThis is a demo placeholder file."
        },
        {
          id: "dl-button",
          type: "downloadButton",
          label: "Download Demo File",
          filename: "micro-dataset-specification-demo.txt",
          content: "BLUE BLOCKS MICRO RESEARCH INSTITUTE\nMicro Dataset Specification v1.0 (Demo)\n\nThis is a placeholder file.\nThe official specification will be released with DOI upon publication.\n\nFor inquiries: research@blueblocks.in"
        }
      ]
    },

    "/downloads/citation-guide": {
      title: "Citation Guide",
      metaDescription: "How to cite Institute materials and DOI-based assets.",
      seo: {
        title: "Citation Guide (Demo) | Blue Blocks Micro Research Institute",
        canonical: "https://blueblocks.in/downloads/citation-guide",
        robots: "noindex,nofollow,noarchive,nosnippet"
      },
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Citation Guide",
          url: "https://blueblocks.in/downloads/citation-guide"
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://blueblocks.in/" },
            { "@type": "ListItem", position: 2, name: "Downloads", item: "https://blueblocks.in/downloads" },
            { "@type": "ListItem", position: 3, name: "Citation Guide", item: "https://blueblocks.in/downloads/citation-guide" }
          ]
        }
      ],
      downloadMeta: {
        filename: "citation-guide-demo.txt",
        version: "Demo v1.0",
        lastUpdated: "February 2026"
      },
      sections: [
        {
          id: "dl-hero",
          type: "hero",
          variant: "stark",
          headline: "Citation Guide (Demo)",
          subheadline: "How to cite Institute materials and DOI-based assets.",
          image: { src: "/src/assets/banners/governance-oversight.jpg", alt: "Citation banner", variant: "hero" }
        },
        {
          id: "dl-info",
          type: "highlightBox",
          title: "Download Information",
          body: "Version: Demo v1.0\nLast Updated: February 2026\n\nThis is a demo placeholder file."
        },
        {
          id: "dl-button",
          type: "downloadButton",
          label: "Download Demo File",
          filename: "citation-guide-demo.txt",
          content: "BLUE BLOCKS MICRO RESEARCH INSTITUTE\nCitation Guide (Demo)\n\nThis is a placeholder file.\nThe official citation guide will be released upon publication.\n\nFor inquiries: research@blueblocks.in"
        }
      ]
    },

    "/downloads/schema-definitions": {
      title: "Schema Definitions",
      metaDescription: "Variable sets (Innovation Index, Bio-Metric Log, Academic Correlation).",
      seo: {
        title: "Schema Definitions (Demo) | Blue Blocks Micro Research Institute",
        canonical: "https://blueblocks.in/downloads/schema-definitions",
        robots: "noindex,nofollow,noarchive,nosnippet"
      },
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Schema Definitions",
          url: "https://blueblocks.in/downloads/schema-definitions"
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://blueblocks.in/" },
            { "@type": "ListItem", position: 2, name: "Downloads", item: "https://blueblocks.in/downloads" },
            { "@type": "ListItem", position: 3, name: "Schema Definitions", item: "https://blueblocks.in/downloads/schema-definitions" }
          ]
        }
      ],
      downloadMeta: {
        filename: "schema-definitions-demo.txt",
        version: "Demo v1.0",
        lastUpdated: "February 2026"
      },
      sections: [
        {
          id: "dl-hero",
          type: "hero",
          variant: "stark",
          headline: "Schema Definitions (.zip) (Demo)",
          subheadline: "Variable sets (Innovation Index, Bio-Metric Log, Academic Correlation).",
          image: { src: "/src/assets/banners/governance-oversight.jpg", alt: "Schema banner", variant: "hero" }
        },
        {
          id: "dl-info",
          type: "highlightBox",
          title: "Download Information",
          body: "Version: Demo v1.0\nLast Updated: February 2026\n\nThis is a demo placeholder file."
        },
        {
          id: "dl-button",
          type: "downloadButton",
          label: "Download Demo File",
          filename: "schema-definitions-demo.txt",
          content: "BLUE BLOCKS MICRO RESEARCH INSTITUTE\nSchema Definitions (Demo)\n\nThis is a placeholder file.\nThe official schema definitions will be released upon publication.\n\nVariable Sets:\n- Innovation Index (Variable Set A)\n- Bio-Metric Log (Variable Set B)\n- Academic Correlation (Variable Set C)\n\nFor inquiries: research@blueblocks.in"
        }
      ]
    },

    "/downloads/brand-asset-pack": {
      title: "Brand Asset Pack",
      metaDescription: "Logos, identity, typography guidance placeholders.",
      seo: {
        title: "Brand Asset Pack (Demo) | Blue Blocks Micro Research Institute",
        canonical: "https://blueblocks.in/downloads/brand-asset-pack",
        robots: "noindex,nofollow,noarchive,nosnippet"
      },
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Brand Asset Pack",
          url: "https://blueblocks.in/downloads/brand-asset-pack"
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://blueblocks.in/" },
            { "@type": "ListItem", position: 2, name: "Downloads", item: "https://blueblocks.in/downloads" },
            { "@type": "ListItem", position: 3, name: "Brand Asset Pack", item: "https://blueblocks.in/downloads/brand-asset-pack" }
          ]
        }
      ],
      downloadMeta: {
        filename: "brand-asset-pack-demo.txt",
        version: "Demo v1.0",
        lastUpdated: "February 2026"
      },
      sections: [
        {
          id: "dl-hero",
          type: "hero",
          variant: "stark",
          headline: "Brand Asset Pack (.zip) (Demo)",
          subheadline: "Logos, identity, typography guidance placeholders.",
          image: { src: "/src/assets/banners/governance-oversight.jpg", alt: "Brand assets banner", variant: "hero" }
        },
        {
          id: "dl-info",
          type: "highlightBox",
          title: "Download Information",
          body: "Version: Demo v1.0\nLast Updated: February 2026\n\nThis is a demo placeholder file."
        },
        {
          id: "dl-button",
          type: "downloadButton",
          label: "Download Demo File",
          filename: "brand-asset-pack-demo.txt",
          content: "BLUE BLOCKS MICRO RESEARCH INSTITUTE\nBrand Asset Pack (Demo)\n\nThis is a placeholder file.\nThe official brand assets will be released upon request.\n\nFor press inquiries: press@blueblocks.in"
        }
      ]
    },

    "/downloads/leadership-bio-sheet": {
      title: "Leadership Bio Sheet",
      metaDescription: "Approved bios/headshots placeholders.",
      seo: {
        title: "Leadership Bio Sheet (Demo) | Blue Blocks Micro Research Institute",
        canonical: "https://blueblocks.in/downloads/leadership-bio-sheet",
        robots: "noindex,nofollow,noarchive,nosnippet"
      },
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Leadership Bio Sheet",
          url: "https://blueblocks.in/downloads/leadership-bio-sheet"
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://blueblocks.in/" },
            { "@type": "ListItem", position: 2, name: "Downloads", item: "https://blueblocks.in/downloads" },
            { "@type": "ListItem", position: 3, name: "Leadership Bio Sheet", item: "https://blueblocks.in/downloads/leadership-bio-sheet" }
          ]
        }
      ],
      downloadMeta: {
        filename: "leadership-bio-sheet-demo.txt",
        version: "Demo v1.0",
        lastUpdated: "February 2026"
      },
      sections: [
        {
          id: "dl-hero",
          type: "hero",
          variant: "stark",
          headline: "Leadership Bio Sheet (Demo)",
          subheadline: "Approved bios/headshots placeholders.",
          image: { src: "/src/assets/banners/governance-oversight.jpg", alt: "Leadership banner", variant: "hero" }
        },
        {
          id: "dl-info",
          type: "highlightBox",
          title: "Download Information",
          body: "Version: Demo v1.0\nLast Updated: February 2026\n\nThis is a demo placeholder file."
        },
        {
          id: "dl-button",
          type: "downloadButton",
          label: "Download Demo File",
          filename: "leadership-bio-sheet-demo.txt",
          content: "BLUE BLOCKS MICRO RESEARCH INSTITUTE\nLeadership Bio Sheet (Demo)\n\nThis is a placeholder file.\nThe official leadership bios will be released upon request.\n\nPavan Goyal - Principal Investigator & Founder\nMunira Hussain - Director of Pedagogy\n\nFor press inquiries: press@blueblocks.in"
        }
      ]
    },

    "/staff-access": {
      title: "Staff Access (Restricted)",
      metaDescription: "Internal research archive access for authorized staff only.",
      seo: {
        title: "Staff Access (Restricted) | Blue Blocks Micro Research Institute",
        canonical: "https://blueblocks.in/staff-access",
        robots: "noindex,nofollow,noarchive,nosnippet"
      },
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Staff Access",
          url: "https://blueblocks.in/staff-access"
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://blueblocks.in/" },
            { "@type": "ListItem", position: 2, name: "Staff Access", item: "https://blueblocks.in/staff-access" }
          ]
        }
      ],
      sections: [
        {
          id: "staff-hero",
          type: "hero",
          variant: "stark",
          headline: "Staff Access (Restricted)",
          subheadline: "Internal research archive. Access is restricted to protect minors, consent governance, identifiable records, and linking keys between subject codes and individuals.",
          primaryCta: { label: "Request Staff Access", href: "/contact?subject=Staff%20Access%20Request" },
          secondaryCta: { label: "Go to Open Access", href: "/publications-open-science#open-access" },
          image: {
            src: "/src/assets/banners/governance-oversight.jpg",
            alt: "Restricted access banner",
            variant: "hero",
            privacyBlur: false,
            caption: ""
          }
        },
        {
          id: "staff-notice",
          type: "highlightBox",
          title: "Access Restriction Notice",
          body:
            "This area is restricted to protect:\n• Minors' privacy and welfare\n• Consent governance protocols\n• Identifiable records\n• Linking keys between subject codes and individuals\n\nUnauthorized access attempts are logged."
        },
        {
          id: "staff-actions",
          type: "buttonCards",
          header: "What You Can Do",
          cards: [
            {
              headline: "Request Staff Access",
              body: "If you are an authorized staff member, submit an access request through the contact form.",
              button: { label: "Request Access", href: "/contact?subject=Staff%20Access%20Request" }
            },
            {
              headline: "View Open Access Materials",
              body: "Public datasets and publications are available without restriction.",
              button: { label: "Go to Open Access", href: "/publications-open-science#open-access" }
            }
          ]
        }
      ]
    },

    "/newsroom/dispatch/isro-payload-authorization": {
      title: "Dispatch: Payload Authorized for ISRO Mission",
      metaDescription: "Twelve students designed a thermal sensor payload, authorized by IN-SPACe for PSLV-C62 launch.",
      seo: {
        title: "Dispatch: Payload Authorized for ISRO Mission | Blue Blocks Micro Research Institute",
        canonical: "https://blueblocks.in/newsroom/dispatch/isro-payload-authorization",
        robots: "noindex,nofollow,noarchive,nosnippet"
      },
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          headline: "Dispatch: Payload Authorized for ISRO Mission",
          author: { "@type": "Organization", name: "Blue Blocks Micro Research Institute" },
          datePublished: "2025-06-15",
          url: "https://blueblocks.in/newsroom/dispatch/isro-payload-authorization"
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://blueblocks.in/" },
            { "@type": "ListItem", position: 2, name: "Newsroom", item: "https://blueblocks.in/newsroom" },
            { "@type": "ListItem", position: 3, name: "Dispatch", item: "https://blueblocks.in/newsroom/dispatch/isro-payload-authorization" }
          ]
        }
      ],
      sections: [
        {
          id: "dispatch-hero",
          type: "hero",
          variant: "stark",
          headline: "Dispatch: Payload Authorized for ISRO Mission",
          subheadline: "Twelve students (ages 12–16) contributed to development of a thermal sensor payload intended for Low Earth Orbit operations.",
          primaryCta: { label: "Read Technical Brief", href: "/technical-briefs/sbb-1" },
          secondaryCta: { label: "Request Media Kit", href: "/contact?subject=Media%20Kit%20Request" },
          image: { src: "/src/assets/banners/newsroom-press.jpg", alt: "Newsroom banner", variant: "hero" }
        },
        {
          id: "dispatch-summary",
          type: "textBlock",
          header: "Summary",
          body:
            "Twelve students (ages 12–16) contributed to development of a thermal sensor payload intended for Low Earth Orbit operations. After extensive technical review and qualification readiness checks, the payload was approved for integration aboard ISRO PSLV-C62 via IN-SPACe authorization pathways."
        },
        {
          id: "dispatch-timeline",
          type: "timeline",
          heading: "Mission Timeline",
          items: [
            { year: "Phase 1", title: "Prototype Iteration", description: "Multiple iteration cycles logged during initial development." },
            { year: "Phase 2", title: "Qualification Layer", description: "Thermal and vibration qualification readiness testing." },
            { year: "Phase 3", title: "Authorization Milestone", description: "IN-SPACe formal authorization for launch integration." },
            { year: "Phase 4", title: "Launch & Outcome", description: "Launch vehicle anomaly (Stage 4 ignition failure at T+847 seconds) → Resilience protocol dataset recorded." }
          ]
        }
      ]
    },

    "/newsroom/coverage/nobel-peace-center": {
      title: "Coverage: Nobel Peace Center Features Student Innovation",
      metaDescription: "Blue Blocks student projects and methodology presented at the Nobel Peace Center as exemplars of youth-led innovation.",
      seo: {
        title: "Coverage: Nobel Peace Center Features Student Innovation | Blue Blocks Micro Research Institute",
        canonical: "https://blueblocks.in/newsroom/coverage/nobel-peace-center",
        robots: "noindex,nofollow,noarchive,nosnippet"
      },
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          headline: "Coverage: Nobel Peace Center Features Student Innovation",
          author: { "@type": "Organization", name: "Blue Blocks Micro Research Institute" },
          datePublished: "2026-01-28",
          url: "https://blueblocks.in/newsroom/coverage/nobel-peace-center"
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://blueblocks.in/" },
            { "@type": "ListItem", position: 2, name: "Newsroom", item: "https://blueblocks.in/newsroom" },
            { "@type": "ListItem", position: 3, name: "Coverage", item: "https://blueblocks.in/newsroom/coverage/nobel-peace-center" }
          ]
        }
      ],
      sections: [
        {
          id: "coverage-hero",
          type: "hero",
          variant: "stark",
          headline: "Coverage: Nobel Peace Center Features Student Innovation",
          subheadline: "Blue Blocks student projects and institutional methodology were presented in an international forum as exemplars of youth-led innovation.",
          primaryCta: { label: "View Oslo Proceedings", href: "/proceedings/oslo-2026" },
          image: { src: "/src/assets/banners/proceedings-auditorium.jpg", alt: "Nobel Peace Center", variant: "hero" }
        },
        {
          id: "coverage-overview",
          type: "textBlock",
          header: "Overview",
          body:
            "Blue Blocks student projects and institutional methodology were presented in an international forum as exemplars of youth-led innovation. The presentation was selected by the Monisc Committee (supported by the Norwegian UNESCO Commission) as a global benchmark for integrating space science with education."
        },
        {
          id: "coverage-showcased",
          type: "grid3",
          header: "What Was Showcased",
          items: [
            { title: "0–18 Longitudinal Model", body: "Continuous observation from birth to adulthood." },
            { title: "TRL-Based Environments", body: "Real constraints, real failure, real learning." },
            { title: "Patent-Backed Outputs", body: "Student IP as evidence of educational efficacy." },
            { title: "Open Science Archival", body: "Citation discipline and DOI-based publication." }
          ]
        },
        {
          id: "coverage-disclaimer",
          type: "highlightBox",
          title: "Disclaimer",
          body: "This coverage page is a curated summary. Verified external links will be added upon publication clearance."
        }
      ]
    },

    "/newsroom/updates/iit-hyderabad-advisory": {
      title: "Update: IIT Hyderabad Formalizes Advisory Role",
      metaDescription: "The Department of Design at IIT Hyderabad joins the Research Council for technical validation.",
      seo: {
        title: "Update: IIT Hyderabad Advisory | Blue Blocks Micro Research Institute",
        canonical: "https://blueblocks.in/newsroom/updates/iit-hyderabad-advisory",
        robots: "noindex,nofollow,noarchive,nosnippet"
      },
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          headline: "Update: IIT Hyderabad Formalizes Advisory Role",
          author: { "@type": "Organization", name: "Blue Blocks Micro Research Institute" },
          datePublished: "2025-10-15",
          url: "https://blueblocks.in/newsroom/updates/iit-hyderabad-advisory"
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://blueblocks.in/" },
            { "@type": "ListItem", position: 2, name: "Newsroom", item: "https://blueblocks.in/newsroom" },
            { "@type": "ListItem", position: 3, name: "Update", item: "https://blueblocks.in/newsroom/updates/iit-hyderabad-advisory" }
          ]
        }
      ],
      sections: [
        {
          id: "update-hero",
          type: "hero",
          variant: "stark",
          headline: "Update: IIT Hyderabad Formalizes Advisory Role",
          subheadline: "The Department of Design at IIT Hyderabad joins the Research Council to provide technical validation for student prototyping.",
          primaryCta: { label: "Learn About Collaboration", href: "/collaborate" },
          image: { src: "/src/assets/banners/newsroom-press.jpg", alt: "Update banner", variant: "hero" }
        },
        {
          id: "update-content",
          type: "textBlock",
          header: "Partnership Details",
          body:
            "The Department of Design at IIT Hyderabad has formalized its advisory role with the Blue Blocks Micro Research Institute. This partnership provides technical validation for student prototyping initiatives and strengthens the academic credibility of our longitudinal research programs.\n\nThe collaboration includes:\n• Design thinking methodology integration\n• Prototyping validation protocols\n• Joint research opportunities for graduate students"
        }
      ]
    },

    "/newsroom/updates/utility-patent-4421": {
      title: "Update: Utility Patent #4421 Filed",
      metaDescription: "The Drone Research Centre has filed its fifth utility patent for 'The Guardian' sanitization drone.",
      seo: {
        title: "Update: Utility Patent #4421 Filed | Blue Blocks Micro Research Institute",
        canonical: "https://blueblocks.in/newsroom/updates/utility-patent-4421",
        robots: "noindex,nofollow,noarchive,nosnippet"
      },
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          headline: "Update: Utility Patent #4421 Filed",
          author: { "@type": "Organization", name: "Blue Blocks Micro Research Institute" },
          datePublished: "2025-09-02",
          url: "https://blueblocks.in/newsroom/updates/utility-patent-4421"
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://blueblocks.in/" },
            { "@type": "ListItem", position: 2, name: "Newsroom", item: "https://blueblocks.in/newsroom" },
            { "@type": "ListItem", position: 3, name: "Update", item: "https://blueblocks.in/newsroom/updates/utility-patent-4421" }
          ]
        }
      ],
      sections: [
        {
          id: "update-hero",
          type: "hero",
          variant: "stark",
          headline: "Update: Utility Patent #4421 Filed",
          subheadline: "The Drone Research Centre has filed its fifth utility patent, marking a significant milestone in our study of 'Innovation Agency' in the 9-11 age group.",
          primaryCta: { label: "View IP Registry", href: "/publications-open-science#ip-registry" },
          image: { src: "/src/assets/banners/newsroom-press.jpg", alt: "Patent update banner", variant: "hero" }
        },
        {
          id: "update-content",
          type: "textBlock",
          header: "Patent Details",
          body:
            "The Drone Research Centre has filed its fifth utility patent: \"The Guardian\" Sanitization Drone.\n\nInventors: Drone Research Centre students (Ages 9-11)\nStatus: Examination Stage\nDescription: Dual-rotor autonomous drone for bio-hazard control.\n\nThis milestone supports our longitudinal study of 'Innovation Agency' — tracking how early patent ownership affects future STEM engagement and problem-solving capacity."
        }
      ]
    },

    "/newsroom/updates/visiting-scholars-2026": {
      title: "Update: Visiting Scholar Applications Open for 2026",
      metaDescription: "Applications are now open for the 2026 Winter Residency visiting scholar program.",
      seo: {
        title: "Update: Visiting Scholars 2026 | Blue Blocks Micro Research Institute",
        canonical: "https://blueblocks.in/newsroom/updates/visiting-scholars-2026",
        robots: "noindex,nofollow,noarchive,nosnippet"
      },
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          headline: "Update: Visiting Scholar Applications Open for 2026 Cycle",
          author: { "@type": "Organization", name: "Blue Blocks Micro Research Institute" },
          datePublished: "2025-08-10",
          url: "https://blueblocks.in/newsroom/updates/visiting-scholars-2026"
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://blueblocks.in/" },
            { "@type": "ListItem", position: 2, name: "Newsroom", item: "https://blueblocks.in/newsroom" },
            { "@type": "ListItem", position: 3, name: "Update", item: "https://blueblocks.in/newsroom/updates/visiting-scholars-2026" }
          ]
        }
      ],
      sections: [
        {
          id: "update-hero",
          type: "hero",
          variant: "stark",
          headline: "Update: Visiting Scholar Applications Open for 2026 Cycle",
          subheadline: "We are now accepting proposals for the Winter Residency. PhD candidates focusing on longitudinal behavioral observation are encouraged to apply.",
          primaryCta: { label: "Apply for Fellowship", href: "/collaborate" },
          image: { src: "/src/assets/banners/newsroom-press.jpg", alt: "Fellowship update banner", variant: "hero" }
        },
        {
          id: "update-content",
          type: "textBlock",
          header: "Fellowship Details",
          body:
            "Applications are now open for the 2026 Visiting Scholar program.\n\nDuration: 2-8 weeks\nFocus Areas: Longitudinal behavioral observation, micro-research methodology, education research\nEligibility: PhD candidates, Post-Docs, Faculty\n\nVisiting scholars will have access to our archive, methodology training, and collaboration opportunities with Embedded Research Fellows."
        }
      ]
    },

    "/sitemap": {
      title: "Sitemap",
      metaDescription: "Internal sitemap for navigation and QA.",
      seo: {
        title: "Sitemap | Blue Blocks Micro Research Institute",
        canonical: "https://blueblocks.in/sitemap",
        robots: "noindex,nofollow,noarchive,nosnippet"
      },
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Sitemap",
          url: "https://blueblocks.in/sitemap"
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://blueblocks.in/" },
            { "@type": "ListItem", position: 2, name: "Sitemap", item: "https://blueblocks.in/sitemap" }
          ]
        }
      ],
      sections: [
        {
          id: "sitemap-hero",
          type: "hero",
          variant: "stark",
          headline: "Sitemap",
          subheadline: "Full navigation list for Institute website pages.",
          image: { src: "/src/assets/banners/downloads-archive.jpg", alt: "Sitemap banner", variant: "hero" }
        },
        {
          id: "sitemap-content",
          type: "sitemap"
        }
      ]
    },

    "/privacy": {
      title: "Privacy Policy",
      metaDescription:
        "Privacy Policy for Blue Blocks Micro Research Institute: how we handle contact requests, website analytics, and privacy safeguards.",
      seo: {
        title: "Privacy Policy | Blue Blocks Micro Research Institute",
        canonical: "https://blueblocks.in/privacy",
        robots: "noindex,nofollow,noarchive,nosnippet",
        openGraph: {
          type: "website",
          url: "https://blueblocks.in/privacy",
          title: "Privacy Policy",
          description:
            "How we handle contact inquiries, website data, and privacy safeguards — aligned with ethical research standards.",
          image: {
            url: "https://blueblocks.in/og/privacy.jpg",
            width: 1200,
            height: 630,
            alt: "Privacy governance and institutional oversight"
          }
        }
      },
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Privacy Policy",
          url: "https://blueblocks.in/privacy",
          isPartOf: { "@type": "WebSite", url: "https://blueblocks.in/" }
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://blueblocks.in/" },
            { "@type": "ListItem", position: 2, name: "Privacy Policy", item: "https://blueblocks.in/privacy" }
          ]
        }
      ],
      sections: [
        {
          id: "privacy-hero",
          type: "hero",
          variant: "stark",
          headline: "Privacy Policy.",
          subheadline:
            "We operate under strict privacy expectations consistent with ethical research governance. This policy explains how website-level data is handled and how inquiries are processed.",
          primaryCta: { label: "Contact the Institute", href: "/contact" },
          secondaryCta: { label: "Governance & Oversight", href: "/governance" },
          image: {
            src: "/src/assets/banners/governance-oversight.jpg",
            alt: "Privacy and oversight",
            variant: "hero",
            privacyBlur: false,
            caption: "Privacy governance applies to all public-facing Institute systems."
          }
        },
        {
          id: "privacy-last-updated",
          type: "highlightBox",
          title: "Last Updated",
          body:
            "Last Updated: February 2026\n\nIf you have questions about this policy, contact us at privacy@blueblocks.in (or use the contact form).",
          cta: { label: "Open Contact Page", href: "/contact" }
        },
        {
          id: "privacy-scope",
          type: "textBlock",
          header: "1) Scope",
          body:
            "This Privacy Policy applies to the Blue Blocks Micro Research Institute website and its public pages.\n\nIt covers:\n• contact form submissions and email inquiries\n• newsletter / DOI alert subscriptions\n• website analytics and performance logs (if enabled)\n• download requests (media kit, guidelines)\n\nThis policy does not replace or disclose internal research governance processes related to minors and longitudinal records."
        },
        {
          id: "privacy-data-we-collect",
          type: "textBlock",
          header: "2) Information We Collect",
          body:
            "We collect limited information necessary to respond to inquiries.\n\nA) Information you provide:\n• name, email address, affiliation\n• message content and context\n• optional deadlines, publication intent, verification requests\n\nB) Automatic technical information (if enabled):\n• IP address (server logs)\n• device/browser metadata\n• timestamps and pages accessed\n\nWe do not intentionally collect sensitive personal information through the public website."
        },
        {
          id: "privacy-how-we-use",
          type: "textBlock",
          header: "3) How We Use Information",
          body:
            "We use collected information only for:\n• responding to research proposals, partnerships, and press inquiries\n• verifying institutional affiliation for access-tier requests\n• sending DOI alerts or institutional updates (only if you opt in)\n• maintaining security and operational integrity\n\nWe do not sell personal information and do not use contact data for advertising profiling."
        },
        {
          id: "privacy-sharing",
          type: "textBlock",
          header: "4) Sharing & Disclosure",
          body:
            "We may share inquiry information only when necessary:\n\n• internal review by Institute staff\n• governance review (ethics/oversight verification where applicable)\n• legal obligations when required by law\n\nWe do not share personal information with unrelated third parties."
        },
        {
          id: "privacy-retention",
          type: "textBlock",
          header: "5) Data Retention",
          body:
            "We retain inquiry data only as long as needed to:\n\n• Complete proposal review and correspondence\n• Maintain operational records\n• Document access approvals (where relevant)\n\nYou may request deletion of your inquiry information unless retention is legally required."
        },
        {
          id: "privacy-security",
          type: "textBlock",
          header: "6) Security",
          body:
            "We maintain reasonable technical and organizational safeguards to reduce unauthorized access.\n\nSecurity practices may include:\n• access restrictions and role-based permissions\n• secure storage practices\n• anonymization principles for public materials\n\nNo public website can guarantee absolute security."
        },
        {
          id: "privacy-rights",
          type: "textBlock",
          header: "7) Your Rights",
          body:
            "You may request:\n\n• access to the data you submitted\n• correction of inaccurate information\n• deletion of inquiry records\n\nTo request any of the above, email: privacy@blueblocks.in"
        },
        {
          id: "privacy-faq",
          type: "accordion",
          header: "Privacy FAQs",
          items: [
            {
              q: "Do you collect children's data through this website?",
              a:
                "No. The public website does not collect identifiable data about minors. Research datasets are governed separately under Institute consent and IRB standards."
            },
            {
              q: "Do you run tracking ads or advertising pixels?",
              a:
                "We do not run advertising-based tracking. If analytics are enabled, they are used only for site performance, stability, and security monitoring."
            },
            {
              q: "How do I request removal of my details?",
              a:
                "Email privacy@blueblocks.in with your request and the email address used during submission."
            }
          ]
        }
      ]
    },

    "/terms": {
      title: "Terms of Use",
      metaDescription:
        "Terms of Use for the Blue Blocks Micro Research Institute website: permitted use, intellectual property, citations, disclaimers, and data access conditions.",
      seo: {
        title: "Terms of Use | Blue Blocks Micro Research Institute",
        canonical: "https://blueblocks.in/terms",
        robots: "noindex,nofollow,noarchive,nosnippet",
        openGraph: {
          type: "website",
          url: "https://blueblocks.in/terms",
          title: "Terms of Use",
          description:
            "Rules governing use of this website, citations, intellectual property, and institutional materials.",
          image: {
            url: "https://blueblocks.in/og/terms.jpg",
            width: 1200,
            height: 630,
            alt: "Terms and institutional governance"
          }
        }
      },
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Terms of Use",
          url: "https://blueblocks.in/terms",
          isPartOf: { "@type": "WebSite", url: "https://blueblocks.in/" }
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://blueblocks.in/" },
            { "@type": "ListItem", position: 2, name: "Terms of Use", item: "https://blueblocks.in/terms" }
          ]
        }
      ],
      sections: [
        {
          id: "terms-hero",
          type: "hero",
          variant: "stark",
          headline: "Terms of Use.",
          subheadline:
            "These terms govern access to and use of public-facing Institute materials. By using this website, you agree to the conditions below.",
          primaryCta: { label: "View Publications", href: "/publications-open-science" },
          secondaryCta: { label: "Contact", href: "/contact" },
          image: {
            src: "/src/assets/banners/governance-oversight.jpg",
            alt: "Institutional governance banner",
            variant: "hero",
            privacyBlur: false,
            caption: "Terms protect open science while ensuring ethical constraints remain intact."
          }
        },
        {
          id: "terms-last-updated",
          type: "highlightBox",
          title: "Last Updated",
          body:
            "Last Updated: February 2026\n\nIf you do not agree to these terms, please discontinue use of the website.",
          cta: { label: "Privacy Policy", href: "/privacy" }
        },
        {
          id: "terms-permitted",
          type: "textBlock",
          header: "1) Permitted Use",
          body:
            "You may use this website for:\n• reading Institute publications and updates\n• referencing open access materials\n• submitting collaboration requests\n\nYou may not use this website to:\n• scrape content for resale or automated republishing\n• misrepresent institutional claims\n• attempt to access restricted datasets without approval"
        },
        {
          id: "terms-ip",
          type: "textBlock",
          header: "2) Intellectual Property",
          body:
            "All content on this website — including frameworks, methodology descriptions, visuals, and documentation — is protected unless explicitly labeled open access.\n\nStudent-generated inventions and patents remain attributed to student inventors where applicable and recorded in the Institute registry."
        },
        {
          id: "terms-citation",
          type: "textBlock",
          header: "3) Citations & Attribution",
          body:
            "When citing Institute materials, you must:\n• cite DOI records where provided\n• preserve context and disclaimers\n• avoid implying institutional endorsement\n\nWhere possible, DOI-based citation is preferred."
        },
        {
          id: "terms-disclaimer",
          type: "textBlock",
          header: "4) Disclaimers",
          body:
            "This website provides institutional documentation and research summaries.\n\nWhile we aim for accuracy, materials may be updated without notice.\n\nNothing on this site constitutes:\n• legal advice\n• medical advice\n• guaranteed research outcomes"
        },
        {
          id: "terms-restricted",
          type: "textBlock",
          header: "5) Restricted Access & Data",
          body:
            "Certain datasets and materials are restricted due to:\n• protection of minors\n• consent conditions\n• anonymization and k-anonymity requirements\n• institutional security protocols\n\nRequests for restricted access may require IRB approval and a signed Data Use Agreement."
        },
        {
          id: "terms-external-links",
          type: "textBlock",
          header: "6) External Links",
          body:
            "This website may link to third-party resources such as Zenodo.\n\nWe do not control third-party sites and are not responsible for external policies or content."
        },
        {
          id: "terms-changes",
          type: "textBlock",
          header: "7) Changes",
          body:
            "We may update these Terms of Use at any time.\n\nContinued use of the website indicates acceptance of the updated terms."
        },
        {
          id: "terms-faq",
          type: "accordion",
          header: "Terms FAQs",
          items: [
            {
              q: "Can I reuse content from this site in my paper?",
              a:
                "Yes, if the material is marked open access or you cite it properly. DOI-based citations are preferred."
            },
            {
              q: "Can I access restricted datasets?",
              a:
                "Not without approval. Researcher access requires IRB clearance and a signed agreement."
            },
            {
              q: "Where should I request access?",
              a:
                "Use the Collaborate page and submit an access request through the relevant track."
            }
          ]
        }
      ]
    },
  },
};

export default siteContent;
