// Single source of truth for all site content
// All page copy and structure comes from this file

const SITE_URL = 'https://research.blueblocks.in';

const siteContent = {
  brand: {
    siteName: "Blue Blocks Micro Research Institute",
    headerTagline: "Micro Research Institute",
    ethicsTagline: "Compiling the world's first longitudinal dataset on human innovation capacity from birth to age 18. 15 years completed; Year 16 ongoing.",
    contact: {
      research: "research@blueblocks.in",
      press: "press@blueblocks.in",
    },
  },

  nav: [
    { label: "Home", path: "/", icon: "home" },
    { label: "The Institute", path: "/the-institute", icon: "institute" },
    { label: "Methodology", path: "/methodology", icon: "methodology", children: [
      { label: "Innovation", path: "/methodology/innovation", icon: "lightbulb" },
    ]},
    { label: "Publications", path: "/publications", icon: "publication" },
    { label: "Governance", path: "/governance", icon: "governance", children: [
      { label: "Ethics & Privacy", path: "/governance/ethics", icon: "lock" },
      { label: "Research Standards", path: "/governance/standards", icon: "clipboardList" },
      { label: "Regulatory Compliance", path: "/governance/compliance", icon: "scale" },
      { label: "Our Standards", path: "/governance/our-standards", icon: "badgeCheck" },
      { label: "Team", path: "/team", icon: "team" },
    ]},
    { label: "Collaborate", path: "/collaborate", icon: "collaborate" },
    { label: "Newsroom", path: "/newsroom", icon: "newsroom" },
    { label: "Contact", path: "/contact", icon: "contact" },
  ],

  pages: {
    "/": {
      title: "Home",
      metaDescription:
        "The Blue Blocks Micro Research Institute compiles a longitudinal dataset on human innovation capacity from birth to age 18. 15 years completed; Year 16 ongoing.",
      
      seo: {
        title: "The World's First Micro Research Institute | Blue Blocks Micro Research Institute",
        canonical: "https://siddheshv1.lovable.app/",
        robots: "noindex,nofollow,noarchive,nosnippet",
        openGraph: {
          type: "website",
          url: "https://siddheshv1.lovable.app/",
          title: "The World's First Micro Research Institute",
          description:
            "A longitudinal dataset on human innovation capacity from birth to age 18. 15 years completed; Year 16 ongoing.",
          image: {
            url: "https://siddheshv1.lovable.app/og/home.jpg",
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
          image: "https://siddheshv1.lovable.app/og/home.jpg"
        }
      },

      schemas: [
        {
          "@context": "https://schema.org",
          "@type": ["Organization", "ResearchOrganization", "EducationalOrganization"],
          name: "Blue Blocks Micro Research Institute",
          url: "https://siddheshv1.lovable.app/",
          logo: "https://siddheshv1.lovable.app/logo.png",
          email: "research@blueblocks.in",
          sameAs: [
            "https://zenodo.org/"
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Blue Blocks Micro Research Institute",
          url: "https://siddheshv1.lovable.app/",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://siddheshv1.lovable.app/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        },
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Home",
          url: "https://siddheshv1.lovable.app/",
          isPartOf: { "@type": "WebSite", url: "https://siddheshv1.lovable.app/" },
          about: {
            "@type": "Thing",
            name: "Longitudinal innovation capacity dataset (0–18)"
          }
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://siddheshv1.lovable.app/" }
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Is the Blue Blocks Micro Research Institute separate from the school?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Yes. It is a distinct internal entity with its own governance and objectives. While Blue Blocks Montessori School focuses on the Cambridge/AMI curriculum, the Institute is solely dedicated to longitudinal observation and providing the pedagogical architecture for high-stakes industrial projects."
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
            url: "https://siddheshv1.lovable.app/"
          },
          keywords: [
            "longitudinal study",
            "innovation capacity",
            "micro-research",
            "education research",
            "ecological validity",
            "0-18 dataset"
          ],
          url: "https://siddheshv1.lovable.app/publications",
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
                headline: "Saparya: From Pink Tower to CubeSat",
                about: "AMI Saparya 2026 — Montessori pedagogy and adolescent-led CubeSat engineering",
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
            "We are compiling the most granular dataset on human innovation capacity from birth to age 18. 15 years completed; Year 16 ongoing. \nEmbedded observation across toddlers, elementary students, and adolescents. Not lab experiments. Not surveys. Daily records of what children actually do when given real engineering challenges.",
          primaryCta: { label: "Read the Methodology Paper", href: "/methodology" },
          secondaryCta: { label: "Zenodo Community", href: "https://zenodo.org/communities/blueblocksmicroresearchinstitute/records?q=&l=list&p=1&s=10&sort=newest", external: true },
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
            "Universities have research funding and the PhDs, but lack long-term access to developing children. Schools have children for 15 years, but no research infrastructure. Blue Blocks Micro Research Institute runs both. By embedding a Micro-research Institute within a Montessori environment, we capture the data universities miss, the granular, day-by-day evolution of innovation capacity.\n\nThis depth requires us to reject the sporadic nature of clinical studies. Instead, we deploy Micro-Research: a continuous protocol of high-frequency, embedded data capture. We consciously sacrifice the sterile control of the laboratory for the 'Ecological Truth' of the living environment, prioritizing authentic behavior over artificial isolation.",
          items: [
            {
              title: "Longitudinal Continuity (0-18)",
              icon: "calendar",
              body:
                "Most child development studies observe children once or twice. We've tracked the same children continuously through our Embedded Research Fellows from age 3 to 18. 15 years completed; Year 16 ongoing. This continuity shows us the trajectory of how capabilities develop not just what children can do at one moment, but proving that the engineer of 18 is built by the sensorial explorer of 3."
            },
            {
              title: "Ecological Validity - Real Projects, Not Lab Tasks",
              icon: "target",
              body:
                "We reject the 'Goldfish Bowl' fallacy of academic research. Children in sterile labs behave like subjects; children in Innovation Labs behave like engineers. Our data is derived from TRL-9 ecosystems where the risk of failure is real, not simulated. When we observe problem-solving behavior, children are solving actual problems by designing flight hardware, not completing worksheets about flight hardware; they are actually saving a mission."
            },
            {
              title: "Sovereign Intellectual Property",
              icon: "lightbulb",
              body:
                "The ultimate metric of educational efficacy is not testing, but creation. Our students transition from passive learners to Sovereign IP holders, with five utility patents filed to date by elementary-aged students. With this we prove that children can contribute to the global innovation economy even before they turn 18 and graduate."
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
              action: { label: "Read Technical Brief →", href: "https://doi.org/10.5281/zenodo.18195108", external: true }
            },
            {
              tag: "AMI Saparya 2026 & Monisc",
              headline: "Saparya: From Pink Tower to CubeSat",
              body:
                "At the AMI Saparya 2026 and Monisc conferences, Blue Blocks students presented the SBB-1 mission as a fully authorized aerospace endeavor, demonstrating the scalability of Montessori pedagogy. This case study documents how adolescent learners (ages 12-16) utilized a \"Lab-to-Launch\" framework to engineer a flight-ready CubeSat payload. Answering whether student-led teams can satisfy commercial space deployment standards, the project achieved definitive valorization. By navigating rigorous technical and regulatory constraints—from proprietary PCB design to securing formal IN-SPACe authorization for an ISRO PSLV-C62 launch—the students earned director-level commendation, establishing a definitive operational benchmark for adolescent-led aerospace innovation.",
              action: { label: "View Presentation →", href: "https://doi.org/10.5281/zenodo.18337934", external: true }
            },
            {
              tag: "International Diplomacy / MONISC",
              headline: "Oslo Summit: A Global Benchmark",
              body:
                "On January 28, 2026, at the Nobel Peace Center, Founder Pavan Goyal delivered the \"World Premiere\" of the Blue Blocks Innovation Pedagogy (0–18). Selected by the Monisc Committee (supported by the Norwegian UNESCO Commission) as a \"global benchmark\" for integrating space science, this session formally releases our student-generated datasets to the international network. The Zenodo archive preserves the complete administrative context: the Official Invitation, the Pedagogical Framework presentation, and the open-data release protocols.",
              action: { label: "Access Proceedings Archive", href: "/proceedings/oslo-2026" },
              secondaryAction: { label: "Proceedings in Progress", disabled: true }
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
              title: "The Patent Filing Cycle",
              meta: "Quarterly (Internal)",
              description:
                "Students actively working on patenting new designs in the space section. Designs not yet presented before Patent Review Board.",
              statusLine: "Next Cycle: Awaiting Submission Phase"
            },
            {
              title: "The Space Lab Simulation Series: Launch Architecture & Anomaly Mitigation",
              meta: "Bi-Annual",
              description:
                "Following the SBB-1 CubeSat launch, adolescent engineers now conduct computational modeling and stress testing of PSLV systems. Students analyze structural and aerodynamic vulnerabilities while testing actual flight hardware under extreme conditions prior to ISRO integration.",
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
                "Defining the protocol for 25 embedded fellows to document behavioral data without disrupting the \"Children's House\" environment."
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
              q: "Is the Blue Blocks Micro Research Institute separate from the school?",
              a:
                "Yes. It is a distinct internal entity with its own governance and objectives. While Blue Blocks Montessori School focuses on the Cambridge/AMI curriculum, the Institute is solely dedicated to longitudinal observation and providing the pedagogical architecture for high-stakes industrial projects (SBB-1, Patents)."
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
          id: "home-explore-registries",
          type: "buttonCards",
          header: "Explore Registries",
          cards: [
            {
              title: "Publications",
              icon: "archive",
              description: "Administrative records, case studies, datasets, and open science archives.",
              image: "https://images.unsplash.com/photo-1450101215322-bf5cd27642fc?auto=format&fit=crop&w=1600&q=80",
              button: { label: "Browse Publications", href: "/publications" }
            },
            {
              title: "Patents",
              icon: "lightbulb",
              description: "Student innovation outcomes, patent filings, and technical documentation.",
              image: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=1600&q=80",
              button: { label: "View Patents", href: "/patents" }
            },
            {
              title: "Books",
              icon: "book",
              description: "Long-form publications supporting families, educators, and research partners.",
              image: "https://images.unsplash.com/photo-1455885666463-39f77c2476e4?auto=format&fit=crop&w=1600&q=80",
              button: { label: "Explore Books", href: "/books" }
            },
            {
              title: "Team",
              icon: "users",
              description: "Researchers, embedded fellows, leadership, and institutional collaborators.",
              image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=1600&q=80",
              button: { label: "Meet the Team", href: "/team" }
            },
            {
              title: "Downloads",
              icon: "download",
              description: "Technical briefs, presentations, proceedings, and public documents.",
              image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80",
              button: { label: "Access Downloads", href: "/downloads" }
            }
          ]
        },

        {
          id: "home-visual-evidence",
          type: "galleryGrid",
          sectionName: "Visual Evidence",
          intro:
            "As a Micro Research Institute dealing with minors (Ages 0-18), we adhere to strict ethical guidelines regarding visual data. We prioritize subject privacy over public display.",
          header: "Visual Documentation Standards",
          body:
            "Temporary technical placeholders are used until ethical clearance for institutional imagery is completed. All Institute imagery undergoes a three-stage review to ensure it documents process without exposing minors or private data.",
          cta: { label: "Request Media Kit (Press Only)", href: "/downloads" },
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
        "The 0–18 Continuum: a longitudinal, embedded micro-research institution tracking human innovation capacity. 15 years completed; Year 16 ongoing.",
      seo: {
        title: "The 0–18 Continuum | The Institute | Blue Blocks Micro Research Institute",
        canonical: "https://siddheshv1.lovable.app/the-institute",
        robots: "noindex,nofollow,noarchive,nosnippet",
        openGraph: {
          type: "website",
          url: "https://siddheshv1.lovable.app/the-institute",
          title: "The 0–18 Continuum",
          description:
            "A new category of research institution built for questions requiring decades, not semesters — continuous observation from birth to age 18.",
          image: {
            url: "https://siddheshv1.lovable.app/og/the-institute.jpg",
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
          url: "https://siddheshv1.lovable.app/the-institute",
          isPartOf: { "@type": "WebSite", url: "https://siddheshv1.lovable.app/" },
          about: {
            "@type": "Thing",
            name: "Longitudinal Micro-Research (0–18)"
          }
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://siddheshv1.lovable.app/" },
            { "@type": "ListItem", position: 2, name: "The Institute", item: "https://siddheshv1.lovable.app/the-institute" }
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
            "We are a new category of research institution—built for questions that require decades, not semesters. By embedding rigorous observation protocols into a living Montessori environment, we have created the world's longest continuous record of human innovation capacity. Most child development studies observe children once or twice. We've been watching the same children for fifteen years. 15 years completed; Year 16 ongoing. Not surveys. Not lab visits. Daily observation records from their actual teachers, in their actual classrooms, working on actual problems.",
          primaryCta: { label: "Institute Prospectus Available Soon", href: "#", disabled: true },
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
            "We built an institution where research never ends because the environment never changes. By integrating the 'School' and the 'Lab,' we maintain zero-attrition contact with our subjects. We do not just measure capacity; we document its entire developmental trajectory. Same children, same teachers, fifteen years. 15 years completed; Year 16 ongoing. When children graduate at 18, we have complete records from their first day to their last. No grant deadlines. No funding cycles. The research continues as long as the school operates."
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
              headline: "Terra Utopia & Biomimicry Hive",
              body:
                "Measuring systems thinking in real-time. Inside the Biomimicry Hive, students translate evolutionary blueprints into regenerative engineering. Simultaneously, Terra Utopia manages complex ecological variables, allowing adolescents to generate longitudinal data on soil moisture, closed-loop agriculture, and circular resource allocation.",
              image: { src: "/src/assets/placeholders/labs/terra-utopia.jpg", alt: "Environmental research facility", variant: "card", privacyBlur: true }
            },
            {
              size: "sm",
              tag: "Synthesis Hub",
              headline: "Data Wing",
              body:
                "The central processing unit where Embedded Fellows synthesize behavioral observations into longitudinal records. This facility ensures all data meets Institutional Review Board (IRB) and Ethical Privacy standards.",
              image: { src: "/src/assets/placeholders/labs/data-wing.jpg", alt: "Data wing facility", variant: "card", privacyBlur: true }
            }
          ]
        },

        {
          id: "inst-stats",
          type: "statsBar",
          header: "The Blue Blocks Advantage",
          stats: [
            { value: "15 Years", label: "Completed Observation" },
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
          cta: { label: "View Governance Standards", href: "/governance" }
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
              q: "What datasets are you building?",
              a:
                "We are building: (1) Longitudinal Behavioral Data from 847 subjects, (2) Biometric & Sensory Log, (3) Academic Performance Correlation, (4) Patent & TRL Outcomes."
            },
            {
              q: "Can I visit the Innovation Labs?",
              a:
                "Visits are restricted. Contact research@blueblocks.in for visiting scholar applications."
            }
          ]
        },

        {
          id: "inst-related",
          type: "relatedCards",
          header: "Related",
          cards: [
            { title: "Methodology", description: "Learn about our research protocols.", icon: "methodology", href: "/methodology" },
            { title: "Publications", description: "Research docket and publications.", icon: "publication", href: "/publications" },
            { title: "Governance", description: "Standards and oversight.", icon: "governance", href: "/governance" }
          ]
        }
      ]
    },

    "/methodology": {
      title: "Methodology",
      metaDescription:
        "Micro Research Methodology: embedded, high-frequency longitudinal observation protocols for tracking human innovation capacity from 0 to 18.",
      seo: {
        title: "Methodology | Micro Research Framework | Blue Blocks Micro Research Institute",
        canonical: "https://siddheshv1.lovable.app/methodology",
        robots: "noindex,nofollow,noarchive,nosnippet",
        openGraph: {
          type: "website",
          url: "https://siddheshv1.lovable.app/methodology",
          title: "Micro Research Methodology",
          description:
            "High-frequency observation protocols designed for practitioner execution — ecological validity over laboratory control.",
          image: {
            url: "https://siddheshv1.lovable.app/og/methodology.jpg",
            width: 1200,
            height: 630,
            alt: "Methodology framework"
          }
        }
      },
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Methodology",
          url: "https://siddheshv1.lovable.app/methodology",
          isPartOf: { "@type": "WebSite", url: "https://siddheshv1.lovable.app/" },
          about: { "@type": "Thing", name: "Micro Research Methodology" }
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://siddheshv1.lovable.app/" },
            { "@type": "ListItem", position: 2, name: "Methodology", item: "https://siddheshv1.lovable.app/methodology" }
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What's the difference between 'Jungle Research' and 'Zoo Research'?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Zoo Research brings children to labs or exposes them to unfamiliar observers. The setting is controlled but unnatural — children know they're being studied, so they perform. Jungle Research observes children in their everyday environment with familiar adults present. Nothing changes. Behavior stays authentic. Access spans years, not hours. We only conduct Jungle Research."
              }
            },
            {
              "@type": "Question",
              name: "What are the 'Four Gates' and why can't studies bypass them?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Four checkpoints every study must pass before data collection begins. Gate 1 (Longitudinal): Does this connect to children we've observed before? Gate 2 (Naturalistic): Can we observe without disrupting the environment? Gate 3 (Specificity): Is the question bounded and precise — not vague? Gate 4 (Micro): One question, under three weeks of collection, under five minutes per observation, single output. Fail any gate, the study gets redesigned or rejected. No exceptions."
              }
            },
            {
              "@type": "Question",
              name: "What does 'Continuity Advantage' mean?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Most research produces snapshots — isolated observations at single points in time. We produce something closer to cinema — the same children observed across developmental phases, year after year. This reveals what episodic observation misses: how behaviors emerge, how they evolve, what triggers transitions, what persists."
              }
            },
            {
              "@type": "Question",
              name: "How do you prevent observer bias when Fellows already know the children?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Three ways. First, the See/Hear Rule: record only what you can see or hear. Actions, words, timing, context — nothing else. Second, inter-rater reliability: Fellows record the same footage, we compare sheets, discrepancies reveal drift into interpretation. We require 80% agreement minimum before deployment and reassess every quarter. Third, disclosure: every publication states that embedded observers have perspectives we reduce but do not eliminate."
              }
            },
            {
              "@type": "Question",
              name: "What qualifications do your observers need?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Per BEOP v1.0: professional Montessori credential (AMI, AMS, or equivalent), minimum three months working in the specific environment, eight hours of BEOP Observer Training, demonstrated inter-rater reliability at 80% or higher, quarterly reliability checks, and annual ethics refresher."
              }
            },
            {
              "@type": "Question",
              name: "What's the difference between observation and interpretation?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Observation records behavior: 'Child attempted task four times; completed on fifth attempt.' Interpretation assigns meaning: 'Child struggled.' We capture actions, exact words, timing, context. We don't record emotions, motivations, or judgments — those belong in analysis, clearly separated from the raw record."
              }
            },
            {
              "@type": "Question",
              name: "You acknowledge you can't establish causation. What can you establish?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Correlations, patterns, sequences, temporal relationships. We observe that X precedes Y, or that children who do A tend to also do B. We do not claim X causes Y — that requires experimental manipulation, which we don't conduct. Our contribution is pattern detection across time."
              }
            },
            {
              "@type": "Question",
              name: "Your sample isn't random — families chose Montessori. How does that affect findings?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "It's a selection effect we state explicitly. Our panel consists of children whose families opted into this educational approach — that's not representative of all children. Findings may differ in other contexts, populations, or pedagogies. We note this in every publication."
              }
            },
            {
              "@type": "Question",
              name: "What happens to findings that contradict established Montessori literature?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "They go into the archive like everything else. Methodological honesty means documenting what we observe, not what we expected. The Montessori tradition gives us our observation culture — systematic watching, careful recording, pattern recognition. It doesn't predetermine our conclusions."
              }
            },
            {
              "@type": "Question",
              name: "Why do you publish to Zenodo?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Zenodo provides DOIs, version control, and permanent archival — the infrastructure required for research that will be cited and built upon. Every micro-study becomes a citable, permanent record. We also pursue peer review for work that warrants it. Zenodo and peer-reviewed journals serve different functions; we use both."
              }
            },
            {
              "@type": "Question",
              name: "What happens to a study that produces no clear pattern?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "It gets documented with 'no significant pattern observed' as the finding. Null results are results — they stop other researchers from chasing the same dead end. We record what we hypothesized, what we observed, and why the data didn't converge. The archive includes failures."
              }
            },
            {
              "@type": "Question",
              name: "Can parents opt out of having their child observed?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Opted-out children are excluded from all data collection. Their behavior is never recorded, even if a protocol is running in their environment. This applies retroactively: if a parent withdraws consent, we remove that child's data from any unpublished study. The consent process is documented in MREF v1.0."
              }
            },
            {
              "@type": "Question",
              name: "How is children's privacy protected in published research?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Names become codes at point of collection — not later. Campus names become Site A, Site B. Age is recorded in years and months, never birthdates. Anonymization happens during data capture, not during publication prep. The Child Data Classification Standard (CDCS v1.0) defines four tiers of data sensitivity with handling requirements for each."
              }
            },
            {
              "@type": "Question",
              name: "Who has oversight of research ethics?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Internal ethics review is mandatory before any publication. The review checks consent compliance, anonymization completeness, and whether limitations are accurately stated. We follow MREF v1.0 standards and document compliance in every publication. The ethics framework itself is published — anyone can assess whether we follow our own rules."
              }
            }
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: "The Micro-Research Framework Paper",
          description: "Operational methodology for high-frequency embedded observation in living learning environments.",
          url: "https://bb-researchv2.vercel.app/downloads/micro-research-framework",
          creator: { "@type": "Organization", name: "Blue Blocks Micro Research Institute" },
          encodingFormat: "application/pdf"
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
          primaryCta: { label: "View Framework Paper", disabled: true },
          secondaryCta: { label: "Zenodo Upload in Process", disabled: true },
          image: {
            src: "/src/assets/banners/methodology-framework.jpg",
            alt: "Methodology framework visual",
            variant: "hero",
            privacyBlur: false,
            caption: ""
          }
        },

        {
          id: "meth-pillars",
          type: "cards",
          header: "The Four Pillars of Micro-Research — What makes a study \"Micro\"?",
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
              icon: "minimize",
              body:
                "Our Fellows observe while teaching. They're not clipboard-wielding strangers disrupting routines. A protocol that takes 12 minutes won't get done. We've learned through failure that consistency beats comprehensiveness. Five-minute protocols run for years. Twenty-minute protocols die in six weeks."
            },
            {
              title: "Publication-Ready",
              icon: "file",
              body:
                "If a protocol won't eventually get a DOI and land in Zenodo, we don't run it. This forces clarity. \"Interesting to track\" becomes \"worth publishing\" or gets dropped. The discipline of publication-intent changes what we're willing to measure."
            }
          ]
        },

        {
          id: "meth-compound",
          type: "comparisonTable",
          header: "The Compound Effect — Why Twenty Small Studies Beat One Large Study?",
          intro:
            "Running one micro-study tells you almost nothing. Running two hundred over fifteen years builds a dataset that shows developmental patterns nobody else can see.",
          columns: ["Traditional Academic Study", "Blue Blocks Micro-Research"],
          rows: [
            { label: "Frequency", values: ["1 Study every 3 Years", "20+ Studies Annually"] },
            { label: "Observer", values: ["External Researcher (High Interference)", "Teaching Fellow (Embedded)"] },
            { label: "Duration", values: ["2–3 Years Funding Cycle", "Continuous (Long term)"] },
            { label: "Cumulative Output (10 Yrs)", values: ["~5 Major Papers", "~200+ Micro-Studies"] }
          ]
        },

        {
          id: "meth-cycle",
          type: "timeline",
          header: "The 4-Week Cycle — Protocol to Publication in Four Weeks",
          items: [
            {
              year: "Week 1",
              title: "Protocol Design",
              body:
                "We draft the single question, sketch the recording sheet, and test it with three observations. If recording takes more than 5 minutes, we simplify. Most protocols fail this test twice before passing."
            },
            {
              year: "Week 2",
              title: "Data Capture",
              body:
                "Fellows collect data during the work cycle. Recording happens in the moment, not from memory later. Each Fellow handles one protocol at a time."
            },
            {
              year: "Week 3",
              title: "Synthesis",
              body:
                "We strip identifying details. Names become codes. Campus becomes Site A. Patterns are identified. Expected or unexpected, everything is recorded."
            },
            {
              year: "Week 4",
              title: "Publication",
              body:
                "Internal review catches errors. DOI registration follows. Dataset uploaded to Zenodo. Documentation updated. Study enters longitudinal archive."
            }
          ]
        },

        {
          id: "meth-examples",
          type: "accordion",
          header: "Examples of Protocols We Have Run",
          items: [
            {
              q: "Example A — The 3-Day Material Choice Study",
              a: "Question: What material do children choose first when entering the prepared environment?\n\nProtocol: Record child's age (years + months), first material touched, time of entry.\n\nTime Cost: 10 seconds per child."
            },
            {
              q: "Example B — The 2-Week Help Study",
              a: "Question: When do children help each other without adult prompting?\n\nProtocol: Record helper age, recipient age, type of help, adult presence.\n\nTime Cost: 2 minutes per incident."
            }
          ]
        },

        {
          id: "meth-faq-fundamentals",
          type: "accordion",
          header: "Methodology Fundamentals",
          items: [
            {
              q: "What's the difference between 'Jungle Research' and 'Zoo Research'?",
              a: "Zoo Research brings children to labs or exposes them to unfamiliar observers. The setting is controlled but unnatural — children know they're being studied, so they perform. Jungle Research observes children in their everyday environment with familiar adults present. Nothing changes. Behavior stays authentic. Access spans years, not hours. We only conduct Jungle Research. Any study requiring artificial conditions or external observers gets rejected at the design stage — not as preference, but as policy."
            },
            {
              q: "What are the 'Four Gates' and why can't studies bypass them?",
              a: "Four checkpoints every study must pass before data collection begins. Gate 1 (Longitudinal): Does this connect to children we've observed before? Gate 2 (Naturalistic): Can we observe without disrupting the environment? Gate 3 (Specificity): Is the question bounded and precise — not vague? Gate 4 (Micro): One question, under three weeks of collection, under five minutes per observation, single output. Fail any gate, the study gets redesigned or rejected. No exceptions. The gates exist because loose questions produce unusable data."
            },
            {
              q: "What does 'Continuity Advantage' mean?",
              a: "Most research produces snapshots — isolated observations at single points in time. We produce something closer to cinema — the same children observed across developmental phases, year after year. This reveals what episodic observation misses: how behaviors emerge, how they evolve, what triggers transitions, what persists. Institutions with rotating subjects and temporary access cannot replicate this. Continuity is our primary methodological asset."
            }
          ]
        },

        {
          id: "meth-faq-observer",
          type: "accordion",
          header: "Observer Protocol & Bias Mitigation",
          items: [
            {
              q: "How do you prevent observer bias when Fellows already know the children?",
              a: "Three ways. First, the See/Hear Rule: record only what you can see or hear. Actions, words, timing, context — nothing else. 'Child was frustrated' fails. 'Child pushed materials away, said I can't do this' passes. Second, inter-rater reliability: Fellows record the same footage, we compare sheets, discrepancies reveal drift into interpretation. We require 80% agreement minimum before deployment and reassess every quarter. Third, disclosure: every publication states that embedded observers have perspectives we reduce but do not eliminate."
            },
            {
              q: "What qualifications do your observers need?",
              a: "Per BEOP v1.0: professional Montessori credential (AMI, AMS, or equivalent), minimum three months working in the specific environment, eight hours of BEOP Observer Training, demonstrated inter-rater reliability at 80% or higher, quarterly reliability checks, and annual ethics refresher. We don't use untrained volunteers. Embedded observation requires trained observers — that's the trade-off."
            },
            {
              q: "What's the difference between observation and interpretation?",
              a: "Observation records behavior: 'Child attempted task four times; completed on fifth attempt.' Interpretation assigns meaning: 'Child struggled.' We capture actions, exact words, timing, context. We don't record emotions, motivations, or judgments — those belong in analysis, clearly separated from the raw record. This separation is what makes our data usable by other researchers."
            }
          ]
        },

        {
          id: "meth-faq-quality",
          type: "accordion",
          header: "Data Quality & Limitations",
          items: [
            {
              q: "You acknowledge you can't establish causation. What can you establish?",
              a: "Correlations, patterns, sequences, temporal relationships. We observe that X precedes Y, or that children who do A tend to also do B. We do not claim X causes Y — that requires experimental manipulation, which we don't conduct. Our contribution is pattern detection across time: seeing what emerges over years of continuous observation. Causal claims belong to controlled experiments. Descriptive claims grounded in extensive naturalistic data belong to us."
            },
            {
              q: "Your sample isn't random — families chose Montessori. How does that affect findings?",
              a: "It's a selection effect we state explicitly. Our panel consists of children whose families opted into this educational approach — that's not representative of all children. Findings may differ in other contexts, populations, or pedagogies. We note this in every publication. Generalization requires evidence from multiple settings; we provide one data point, not universal claims."
            },
            {
              q: "What happens to findings that contradict established Montessori literature?",
              a: "They go into the archive like everything else. Methodological honesty means documenting what we observe, not what we expected. The Montessori tradition gives us our observation culture — systematic watching, careful recording, pattern recognition. It doesn't predetermine our conclusions."
            }
          ]
        },

        {
          id: "meth-faq-publication",
          type: "accordion",
          header: "Publication & Evidence",
          items: [
            {
              q: "Why do you publish to Zenodo?",
              a: "Zenodo provides DOIs, version control, and permanent archival — the infrastructure required for research that will be cited and built upon. Every micro-study becomes a citable, permanent record. We also pursue peer review for work that warrants it. Zenodo and peer-reviewed journals serve different functions; we use both."
            },
            {
              q: "What happens to a study that produces no clear pattern?",
              a: "It gets documented with 'no significant pattern observed' as the finding. Null results are results — they stop other researchers from chasing the same dead end. We record what we hypothesized, what we observed, and why the data didn't converge. The archive includes failures. Selective publication of only positive results is a known way to corrupt an evidence base; we avoid it."
            }
          ]
        },

        {
          id: "meth-faq-ethics",
          type: "accordion",
          header: "Ethics & Child Protection",
          items: [
            {
              q: "Can parents opt out of having their child observed?",
              a: "Yes. Opted-out children are excluded from all data collection. Their behavior is never recorded, even if a protocol is running in their environment. This applies retroactively: if a parent withdraws consent, we remove that child's data from any unpublished study. The consent process is documented in MREF v1.0."
            },
            {
              q: "How is children's privacy protected in published research?",
              a: "Names become codes at point of collection — not later. Campus names become Site A, Site B. Age is recorded in years and months, never birthdates. Anonymization happens during data capture, not during publication prep. The Child Data Classification Standard (CDCS v1.0) defines four tiers of data sensitivity with handling requirements for each."
            },
            {
              q: "Who has oversight of research ethics?",
              a: "Internal ethics review is mandatory before any publication. The review checks consent compliance, anonymization completeness, and whether limitations are accurately stated. We follow MREF v1.0 standards and document compliance in every publication. The ethics framework itself is published — anyone can assess whether we follow our own rules."
            }
          ]
        },

        {
          id: "meth-related",
          type: "relatedCards",
          header: "Related",
          cards: [
            { title: "The Institute", description: "Learn about our research infrastructure.", icon: "institute", href: "/the-institute" },
            { title: "Publications", description: "View research docket.", icon: "publication", href: "/publications" },
            { title: "Downloads", description: "Framework documents and schemas.", icon: "download", href: "/downloads" }
          ]
        }
      ]
    },

    "/publications": {
      title: "Publications & Open Science",
      metaDescription:
        "Publications, research docket, and open science archive for the Blue Blocks Micro Research Institute longitudinal dataset.",
      seo: {
        title: "Publications & Open Science | Blue Blocks Micro Research Institute",
        canonical: "https://siddheshv1.lovable.app/publications",
        robots: "noindex,nofollow,noarchive,nosnippet",
        openGraph: {
          type: "website",
          url: "https://siddheshv1.lovable.app/publications",
          title: "Publications & Open Science",
          description:
            "Research docket, intellectual property registry, and open access materials for the Blue Blocks longitudinal dataset.",
          image: {
            url: "https://siddheshv1.lovable.app/og/publications.jpg",
            width: 1200,
            height: 630,
            alt: "Open science research archive"
          }
        },
        twitter: {
          card: "summary_large_image",
          title: "Publications & Open Science | Blue Blocks",
          description: "Research docket and open science archive.",
          image: "https://siddheshv1.lovable.app/og/publications.jpg"
        }
      },
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Blue Blocks Micro Research Institute",
          url: "https://siddheshv1.lovable.app/"
        },
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Blue Blocks Micro Research Institute",
          url: "https://siddheshv1.lovable.app/",
          logo: "https://siddheshv1.lovable.app/logo.png",
          email: "research@blueblocks.in"
        },
        {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Publications & Open Science",
          url: "https://siddheshv1.lovable.app/publications",
          description: "Research docket, intellectual property registry, and open access materials.",
          isPartOf: { "@type": "WebSite", url: "https://siddheshv1.lovable.app/" },
          hasPart: [
            { "@type": "WebPage", url: "https://siddheshv1.lovable.app/publications/in-space-authorization-letter" },
            { "@type": "WebPage", url: "https://siddheshv1.lovable.app/publications/saparya-imf-case-study" }
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://siddheshv1.lovable.app/" },
            { "@type": "ListItem", position: 2, name: "Publications", item: "https://siddheshv1.lovable.app/publications" }
          ]
        }
      ],
      sections: [
        {
          id: "pub-hero",
          type: "hero",
          variant: "stark",
          headline: "Publications & Open Science",
          subheadline: "Everything we publish is archived for traceability. This docket lists public administrative records, case studies, datasets, and publication pipelines. Where applicable, each item carries a DOI and is preserved in Zenodo for citation permanence. Our objective is continuity, citation stability, and governance transparency rather than promotional publishing.",
          primaryCta: { label: "Browse Our Zenodo Community", href: "https://zenodo.org/communities/blueblocksmicroresearchinstitute/records?q=&l=list&p=1&s=10&sort=newest", external: true },
          secondaryCta: { label: "View Citation Standards", href: "/publications/citation-standards" },
          image: {
            src: "/src/assets/banners/publications-doi.jpg",
            alt: "Open science research archive",
            variant: "hero",
            privacyBlur: false,
            caption: ""
          }
        },

        {
          id: "pub-live-ticker",
          type: "ticker",
          text: "DOCKET STATUS: Active (2026 Cycle) /// MANUSCRIPTS IN REVIEW: 3 /// DOI ASSIGNMENTS: Pending /// OPEN ACCESS: CC-BY-4.0"
        },

        {
          id: "publications-list",
          type: "cards",
          header: "Published Records",
          intro: "Formal publications with DOI identifiers, archived for citation and institutional traceability.",
          variant: "blogGrid",
          cards: [
            {
              tag: "Published Record",
              headline: "IN-SPACe Authorization Letter (SBB-1 / Blue Blocks)",
              meta: "DOI: 10.5281/zenodo.18195108",
              body: "Official authorization archived for governance traceability, regulatory documentation continuity, and citation permanence.",
              cta: { label: "View Publication", href: "/publications/in-space-authorization-letter" },
              image: { src: "/src/assets/placeholders/labs/authorization-letter.jpg", alt: "IN-SPACe authorization document", variant: "card" }
            },
            {
              tag: "Published Case Study",
              headline: "SAPARYA / IMF Conference Case Study (SBB-1 Mission & Valorization)",
              meta: "DOI: 10.5281/zenodo.18337934",
              body: "A documented adolescent engineering mission presented as an institutional case study in responsibility, professional constraints, and authentic engineering stakes.",
              cta: { label: "View Publication", href: "/publications/saparya-imf-case-study" },
              image: { src: "/src/assets/placeholders/labs/conference-presentation.jpg", alt: "Conference presentation", variant: "card" }
            }
          ]
        },

        {
          id: "manuscript-docket",
          type: "cards",
          variant: "blogGrid",
          header: "Manuscript Docket (In Progress)",
          intro:
            "The following manuscripts are in active development. Pre-prints will be assigned a DOI via Zenodo upon release.",
          cards: [
            {
              tag: "Early Draft",
              headline: "The \"Sovereign IP\" Effect: Longitudinal Impact of Patent Ownership",
              meta: "Domain: Innovation | Est: 2027",
              body:
                "Defining the protocol for 25 embedded fellows to document behavioral data without disrupting the \"Children's House\" environment.",
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
          type: "cards",
          header: "Intellectual Property Registry",
          intro: "Highlighted innovation outcomes emerging from the Institute's longitudinal research environments. These inventions represent student-generated engineering work conducted under authentic professional constraints. Five utility patents filed to date.",
          variant: "blogGrid",
          cards: [
            {
              tag: "Patent Pending · Robotics / Unmanned Aerial Systems",
              headline: "System for Automated Security (UAV)",
              meta: "Application No: 202041031343",
              body: "A responsive aerial surveillance platform engineered to reduce emergency response latency through encrypted alert ingestion, geolocation triangulation, and autonomous safety-response execution.",
              cta: { label: "View Patent", href: "/patents/automated-security-uav" },
              image: { src: "/src/assets/placeholders/labs/patent-uav.jpg", alt: "Patent-001-Providing Security", variant: "card", privacyBlur: false }
            },
            {
              tag: "Patent Pending · Robotics / Rescue Systems",
              headline: "Borehole Rescue System (BRS)",
              meta: "Application No: 202041027026",
              body: "A vertical-access rescue apparatus designed for narrow subterranean environments, integrating adaptive aerial stabilization, lidar-based collision avoidance, and automated retention mechanisms for safe subject extraction.",
              cta: { label: "View Patent", href: "/patents/borehole-rescue-system" },
              image: { src: "/src/assets/placeholders/labs/patent-rescue.jpg", alt: "Patent-002-Rescue Person", variant: "card", privacyBlur: false }
            },
            {
              tag: "Patent Pending · Autonomous Logistics / Public Health Engineering",
              headline: "Autonomous Contactless Delivery System (ACDS)",
              meta: "Application No: TBD",
              body: "An autonomous logistics platform enabling sterile delivery workflows during contagion scenarios through robotic handling, sanitation atomization, and computer-vision verification systems.",
              cta: { label: "View Patent", href: "/patents/contactless-delivery-system" },
              image: { src: "/src/assets/placeholders/labs/patent-delivery.jpg", alt: "Patent-003-Essential Item", variant: "card", privacyBlur: false }
            },
            {
              tag: "Patent Pending · Medical Robotics / Telerobotics",
              headline: "Autonomous Medical Assistance System (AMAS)",
              meta: "Application No: 202041027075",
              body: "A contactless medical support platform featuring robotic manipulation systems, imaging diagnostics, and sanitation protocols for epidemiological crisis environments.",
              cta: { label: "View Patent", href: "/patents/autonomous-medical-assistance-system" },
              image: { src: "/src/assets/placeholders/labs/patent-medical.jpg", alt: "Patent-004-Medical Assistance", variant: "card", privacyBlur: false }
            },
            {
              tag: "Patent Pending · Bio-Telemetry / Public Health Surveillance",
              headline: "Autonomous Health Monitoring System (AHMS)",
              meta: "Application No: TBD",
              body: "A remote epidemiological surveillance network using infrared thermography, video plethysmography, and autonomous navigation to monitor health indicators in high-density environments.",
              cta: { label: "View Patent", href: "/patents/autonomous-health-monitoring-system" },
              image: { src: "/src/assets/placeholders/labs/patent-health.jpg", alt: "Patent-005-health Parameter", variant: "card", privacyBlur: false }
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
              cta: { label: "Browse Zenodo", href: "/publications#open-access" },
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
              cta: { label: "Secure Offline Storage", disabled: true },
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
              headline: "Micro Research Methodology Framework",
              body:
                "The complete operational manual including ethics and protocols.",
              cta: { label: "DOI Link (When Available)", disabled: true }
            },
            {
              headline: "Micro Dataset Specification v1.0",
              body:
                "The technical schema for variable definitions and anonymization standards.",
              cta: { label: "DOI Link (When Available)", disabled: true }
            },
            {
              tag: "Guide",
              headline: "Citation Guide",
              meta: "Standard",
              body:
                "Standard format for attributing Micro-Studies in academic work.",
              cta: { label: "View Guide", href: "/publications/citation-standards" }
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
        },

        {
          id: "pub-related",
          type: "relatedCards",
          header: "Related",
          cards: [
            { title: "Methodology", description: "Learn about our research protocols.", icon: "methodology", href: "/methodology" },
            { title: "Patents", description: "View patent registry.", icon: "patent", href: "/patents" },
            { title: "Books", description: "Long-form publications.", icon: "book", href: "/books" },
            { title: "Downloads", description: "Framework documents.", icon: "download", href: "/downloads" },
            { title: "Governance", description: "Standards and oversight.", icon: "governance", href: "/governance" }
          ]
        }
      ]
    },

    "/governance": {
      title: "Governance & Oversight",
      metaDescription:
        "Governance & Oversight: privacy architecture, student IP rights, and research council review protocols for embedded longitudinal observation.",
      seo: {
        title: "Governance & Oversight | Blue Blocks Micro Research Institute",
        canonical: "https://siddheshv1.lovable.app/governance",
        robots: "noindex,nofollow,noarchive,nosnippet",
        openGraph: {
          type: "website",
          url: "https://siddheshv1.lovable.app/governance",
          title: "Governance & Oversight",
          description:
            "Protocols and oversight ensuring pedagogical integrity, privacy, and research governance standards.",
          image: {
            url: "https://siddheshv1.lovable.app/og/governance.jpg",
            width: 1200,
            height: 630,
            alt: "Governance and oversight"
          }
        }
      },
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Who is responsible for ethical oversight?",
              acceptedAnswer: { "@type": "Answer", text: "The Research Council provides independent oversight. All protocols are reviewed before launch." }
            },
            {
              "@type": "Question",
              name: "Can parents withdraw consent?",
              acceptedAnswer: { "@type": "Answer", text: "Yes, at any time. Withdrawal removes future observations but does not retroactively remove anonymized data already aggregated." }
            },
            {
              "@type": "Question",
              name: "How do you prevent re-identification?",
              acceptedAnswer: { "@type": "Answer", text: "We use k-anonymity: no combination of published variables (age range, school type, city) produces a group smaller than k=5. Individual re-identification is structurally prevented." }
            }
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
            "Our research framework is guided by a commitment to Pedagogical Integrity. The Institute's advisory council ensures that all protocols align with both Montessori Principles and Global Privacy Standards. We prioritize a \"Child-First\" methodology, where scientific observation seamlessly integrates with, and respects, the educational environment. Every observation protocol gets reviewed before launch.",
          primaryCta: { label: "IRB Guidelines – Available Soon", href: "#", disabled: true },
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
          cards: [
            {
              headline: "Pavan Goyal",
              tag: "Principal Investigator & Founder",
              body:
                "**Credentials:** AMI Diploma (0-18)\n\nOversees the longitudinal integrity of the 0-18 study. Holds rare complete AMI certification across all developmental planes.",
              image: { src: "/src/assets/placeholders/avatars/pavan.webp", alt: "Pavan Goyal", variant: "avatar", privacyBlur: false },
              cta: { label: "View Profile", href: "/team/pavan-goyal" }
            },
            {
              headline: "Munira Hussain",
              tag: "Director of Pedagogy",
              body:
                "**Credentials:** AMI Diploma / M.Ed\n\nEnsures all research protocols integrate seamlessly with the Montessori curriculum without disrupting the \"Children's House.\"",
              image: { src: "/src/assets/placeholders/avatars/munira.jpg", alt: "Munira Hussain", variant: "avatar", privacyBlur: false },
              cta: { label: "View Profile", href: "/team/munira-hussain" }
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
              headline: "Prof. AVR Srikar",
              tag: "Technical Validation Advisor",
              body:
                "**Affiliation:** IIT Hyderabad (Dept of Design)\n\nReviews TRL claims and engineering prototypes for the Space & Drone Labs.",
              image: { src: "/src/assets/placeholders/avatars/advisor-placeholder.jpg", alt: "Prof. AVR Srikar", variant: "avatar", privacyBlur: false }
            },
            {
              headline: "Prof. Apoorv Gogar",
              tag: "Methodological Oversight Advisor",
              body:
                "**Affiliation:** Indian School of Business\n\nReviews research design and business application frameworks for student innovation projects.",
              image: { src: "/src/assets/placeholders/avatars/advisor-placeholder.jpg", alt: "Prof. Apoorv Gogar", variant: "avatar", privacyBlur: false }
            },
            {
              headline: "Rahul Jindal",
              tag: "Technology Validation Advisor",
              body:
                "**Affiliation:** Director, Google\n\nProvides technical review for software and systems architecture in student technology projects.",
              image: { src: "/src/assets/placeholders/avatars/advisor-placeholder.jpg", alt: "Rahul Jindal", variant: "avatar", privacyBlur: false }
            },
            {
              headline: "Sucheth Davaluri",
              tag: "Industry Validation Advisor",
              body:
                "**Affiliation:** Vice-Chairman & CEO, Neuland Laboratories\n\nReviews commercialization pathways and industry-readiness of student innovations.",
              image: { src: "/src/assets/placeholders/avatars/advisor-placeholder.jpg", alt: "Sucheth Davaluri", variant: "avatar", privacyBlur: false }
            },
            {
              headline: "Manish Gupta",
              tag: "Enterprise Technology Advisor",
              body:
                "**Affiliation:** Director, SAP\n\nEvaluates scalability and enterprise integration potential of student technology solutions.",
              image: { src: "/src/assets/placeholders/avatars/advisor-placeholder.jpg", alt: "Manish Gupta", variant: "avatar", privacyBlur: false }
            },
            {
              headline: "Ronak Kumar",
              tag: "Aerospace Domain Advisor",
              body:
                "**Affiliation:** Founder, TakeMe2Space\n\nProvides technical mentorship and validation for Space Lab projects including satellite and propulsion initiatives.",
              image: { src: "/src/assets/placeholders/avatars/advisor-placeholder.jpg", alt: "Ronak Kumar", variant: "avatar", privacyBlur: false }
            }
          ]
        },

        {
          id: "gov-research-team",
          type: "cards",
          variant: "profiles",
          header: "Research Team",
          intro: "Academic and operational researchers supporting longitudinal data integrity, STEM research modules, classroom-based documentation, and institutional research infrastructure across the 0–18 continuum.",
          cards: [
            {
              headline: "D. Vinay Shyam Donakanti",
              tag: "Research Data Analyst Intern",
              body: "**Training:** B.Tech Computer Science & Data Science\n\nSupports digitization, coding, and structuring of Montessori observation records into standardized research datasets. Assists in data pipeline development, analytics documentation, and longitudinal data consistency across the 0–18 research archive.",
              image: { src: "/src/assets/placeholders/avatars/vinay-donakanti.webp", alt: "D. Vinay Shyam Donakanti", variant: "avatar", privacyBlur: false },
              cta: { label: "View Profile", href: "/team/vinay-donakanti" }
            },
            {
              headline: "Sreedhar Reddy Boddu",
              tag: "Research & Data Analyst",
              body: "**Training:** B.Tech Civil Engineering (NIT Goa); Data Science & Analytics Certifications\n\nSupports ETL processes, dashboard development, and structured data visualization for classroom observation records. Contributes to predictive modeling frameworks and KPI tracking within the institute's longitudinal dataset architecture.",
              image: { src: "/src/assets/placeholders/avatars/sreedhar-boddu.webp", alt: "Sreedhar Reddy Boddu", variant: "avatar", privacyBlur: false },
              cta: { label: "View Profile", href: "/team/sreedhar-boddu" }
            },
            {
              headline: "Sandhya Rao M",
              tag: "AMI Elementary Guide | Biomimicry Educator",
              body: "**Training:** AMI Elementary Diploma; M.P.T. Community-Based Rehabilitation\n\nIntegrates Montessori pedagogy with structured research documentation in the Elementary environment. Contributes to interdisciplinary observation protocols, developmental research alignment, and nature-integrated inquiry frameworks.",
              image: { src: "/src/assets/placeholders/avatars/sandhya-rao.webp", alt: "Sandhya Rao M", variant: "avatar", privacyBlur: false },
              cta: { label: "View Profile", href: "/team/sandhya-rao" }
            },
            {
              headline: "Dr. Sreemoyee Chakraborty",
              tag: "STEM Research Lead | Palaeontology & Earth Sciences",
              body: "**Training:** PhD, Palaeontology (ISI / University of Calcutta)\n\nLeads fossil-based STEM research modules and scientific inquiry frameworks within the institute. Contributes domain expertise in paleoclimate interpretation, geological data modeling, and child-led scientific investigation design.",
              image: { src: "/src/assets/placeholders/avatars/sreemoyee-chakraborty.webp", alt: "Dr. Sreemoyee Chakraborty", variant: "avatar", privacyBlur: false },
              cta: { label: "View Profile", href: "/team/sreemoyee-chakraborty" }
            },
            {
              headline: "Dr. Shobha Ediga",
              tag: "Microbiological & Biochemical Research Lead",
              body: "**Training:** PhD, Plant Sciences (University of Hyderabad)\n\nProvides research oversight in biological sciences, laboratory methodologies, and adolescent-level scientific investigation. Supports integration of microbiology, biochemistry, and environmental inquiry within the Erdkinder research framework.",
              image: { src: "/src/assets/placeholders/avatars/shobha-ediga.webp", alt: "Dr. Shobha Ediga", variant: "avatar", privacyBlur: false },
              cta: { label: "View Profile", href: "/team/shobha-ediga" }
            },
            {
              headline: "Sruthi Matta",
              tag: "Research Team Lead — Pedagogy & Innovation",
              body: "**Training:** Graduate Diploma in Journalism (Concordia University); AEC Media Strategies & Advertising; B.A. Humanities\n\nLeads research initiatives focused on pedagogy and innovation frameworks. Develops rapid-cycle micro-research protocols, interdisciplinary documentation models, and inquiry systems embedded within natural classroom environments.",
              image: { src: "/src/assets/placeholders/avatars/sruthi-matta.webp", alt: "Sruthi Matta", variant: "avatar", privacyBlur: false },
              cta: { label: "View Profile", href: "/team/sruthi-matta" }
            }
          ]
        },

        {
          id: "irb-guidelines",
          type: "accordion",
          header: "Standards & Protocols",
          intro:
            "Operating procedures derived from AMI principles and international research standards.",
          items: [
            {
              q: "Micro-Research Design Standards",
              a:
                "**Boundedness:** Every study must address a single, bounded research question.\n\n**Capture:** Observations must be recordable in <5 minutes.\n\n**Duration:** Data collection cycles must not exceed 3 weeks to prevent observer fatigue.\n\n**Continuity:** Protocols must support longitudinal tracking across developmental planes.\n\n**Observer Reliability:** All data collectors must meet inter-rater agreement thresholds before contributing to the dataset."
            },
            {
              q: "Privacy & Informed Consent",
              a:
                "Enrollment Consent: All families sign comprehensive research waivers upon school entry.\n\nChild Assent: Students aged 7+ are granted the \"Right to Decline\" participation without consequence.\n\nWithdrawal: Parents maintain the right to withdraw data access at any time.\n\nData Anonymization: All published records use alphanumeric codes (Subject-847-A, not names). Photos published only with separate photo consent and face obscuration. No re-identification pathway exists in public datasets."
            },
            {
              q: "Observer Standards & Reliability",
              a:
                "**Credential Requirement:** All observers must hold a professional Montessori credential (AMI, AMS, or equivalent).\n\n**Environment Integration:** Minimum 3 months working in the specific classroom before eligibility.\n\n**Training:** Completion of BEOP Observer Training (8+ hours).\n\n**Reliability Threshold:** ≥80% inter-rater agreement required.\n\n**Ongoing Calibration:** Quarterly reassessment + annual ethics refresher."
            },
            {
              q: "Continuity & Panel Tracking",
              a:
                "**Panel Definition:** Children tracked longitudinally across developmental phases.\n\n**Historical Linking:** New observations connect to prior records.\n\n**Attrition Protocol:** Exited students retain archived anonymized data.\n\n**Cross-Study Mapping:** Internal identifiers enable longitudinal analysis without identity exposure."
            }
          ]
        },

        {
          id: "gov-ip",
          type: "twoColumn",
          variant: "cards",
          header: "Student IP Rights & Data Security",
          left: {
            heading: "Student IP Rights",
            icon: "award",
            lead: "We fundamentally believe that age does not preclude ownership.",
            items: [
              { label: "Sovereignty", text: "Utility patents generated in the Innovation Labs are filed in the name of the student inventors." },
              { label: "Institute Role", text: "The Institute acts as the \"Facilitator\" and funds the filing process but claims 0% ownership of student-generated IP." },
              { label: "Attribution", text: "All student contributions to larger papers are cited as \"Co-Authors,\" not subjects." }
            ]
          },
          right: {
            heading: "Data Security & Anonymization",
            icon: "shieldCheck",
            items: [
              { label: "K-Anonymity", text: "All datasets are scrubbed of PII (Personally Identifiable Information). Names are replaced with alphanumeric codes (e.g., Subject-847-A)." },
              { label: "Visual Privacy", text: "Faces in published documentation are obscured or digitized." },
              { label: "Storage", text: "Longitudinal records are stored in an air-gapped internal server (The Data Wing), accessible only to the Principal Investigator and Lead Fellows." }
            ]
          }
        },

        {
          id: "gov-team",
          type: "twoColumn",
          variant: "cards",
          header: "The Research & Observation Team",
          intro:
            "Data collection is conducted by a dual-layer team, ensuring both pedagogical sensitivity and technical accuracy.",
          left: {
            heading: "Embedded Research Fellows (AMI)",
            icon: "graduation",
            items: [
              { label: "Who They Are", text: "AMI-Certified Pedagogues." },
              { label: "Observation Focus", text: "Developmental & Behavioral Data." },
              { label: "Function", text: "They're the child's regular teacher, not a stranger with a clipboard. Children behave naturally because observation is invisible. The guide records observations during lunch or after school, never during work cycles." }
            ]
          },
          right: {
            heading: "Research Associates (Subject Experts)",
            icon: "flask",
            items: [
              { label: "Who They Are", text: "Engineers, Data Scientists, and Domain Specialists." },
              { label: "Observation Focus", text: "Performance & Competency Data." },
              { label: "Function", text: "These experts conduct focused observations within the Innovation Labs. They track \"External Output\"—measuring engineering fidelity, failure recovery rates, and technical precision during high-stakes prototyping (e.g., Drone flight tests)." }
            ]
          },
          footer: "To apply for a Visiting Researcher position, please visit the Collaborate tab.",
          cta: { label: "View Full Team →", href: "/team" }
        },

        {
          id: "gov-related",
          type: "relatedCards",
          header: "Related",
          cards: [
            { title: "Patents", description: "View patent registry.", icon: "patent", href: "/patents" },
            { title: "Publications", description: "Research docket.", icon: "publication", href: "/publications" },
            { title: "Collaborate", description: "Submit access requests.", icon: "collaborate", href: "/collaborate" }
          ]
        }
      ]
    },

    "/collaborate": {
      title: "Collaborate",
      metaDescription:
        "Collaboration pathways for researchers, industry partners, and policy makers seeking access to Blue Blocks Micro Research Institute's longitudinal dataset.",
      seo: {
        title: "Collaborate | Blue Blocks Micro Research Institute",
        canonical: "https://siddheshv1.lovable.app/collaborate",
        robots: "noindex,nofollow,noarchive,nosnippet",
        openGraph: {
          type: "website",
          url: "https://siddheshv1.lovable.app/collaborate",
          title: "Collaborate with the Institute",
          description:
            "Pathways for researchers, industry partners, and policy makers seeking access to the longitudinal dataset.",
          image: {
            url: "https://siddheshv1.lovable.app/og/collaborate.jpg",
            width: 1200,
            height: 630,
            alt: "Collaboration pathways"
          }
        }
      },
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Collaborate",
          url: "https://bb-researchv2.vercel.app/collaborate",
          isPartOf: { "@type": "WebSite", url: "https://bb-researchv2.vercel.app/" },
          about: { "@type": "Thing", name: "Research collaboration and data access" }
        }
      ],
      sections: [
        {
          id: "collab-hero",
          type: "hero",
          variant: "stark",
          headline: "Collaborative Science.",
          subheadline:
            "Scientific breakthrough rarely happens in isolation. The Blue Blocks Micro Research Institute opens its longitudinal infrastructure to external partners who share our commitment to rigorous, non-intrusive inquiry. We offer a 15-year continuous dataset (0-18) that simply does not exist elsewhere. No other institution in India has comparable longitudinal density. If you're studying child development and need real data, not theory, we can work together.",
          primaryCta: { label: "Submit Research Proposal", href: "/contact" },
          secondaryCta: { label: "Our Data is Open Access", href: "/publications" },
          image: {
            src: "/src/assets/banners/collaborate-network.jpg",
            alt: "Collaboration network visual",
            variant: "hero",
            privacyBlur: false,
            caption: ""
          }
        },

        {
          id: "collab-tracks",
          type: "twoColumn",
          variant: "cards",
          header: "Ways To Work With Us",
          left: {
            heading: "The Scholar Track",
            icon: "graduation",
            lead: "Designed for PhD Candidates, Post-Docs, and Faculty.",
            items: [
              { label: "Visiting Fellowships", text: "We host 2-3 visiting scholars annually for intensive 2-8 week residencies. You work alongside our research fellows, access the 15-year dataset, and publish collaboratively." },
              { label: "Data Access", text: "Apply for credentialed access to our anonymized longitudinal datasets (Tier 2 access under our data classification standard). Requires IRB approval from your institution and signed data use agreement." },
              { label: "Joint Authorship", text: "Join specific micro-studies as co-investigator. We provide the observational infrastructure; you bring analytical frameworks or comparative data." }
            ]
          },
          right: {
            heading: "The Institutional Track",
            icon: "building",
            lead: "Designed for Universities, Policy Tanks, and NGOs.",
            items: [
              { label: "Joint MOUs", text: "Formalize long-term research alignments." },
              { label: "Methodology Adoption", text: "Adopt the Micro Research framework in your own school or lab. We train your staff, transfer our observation protocols, and help you set up ethics infrastructure." },
              { label: "Grant Alliances", text: "Co-application for international research grants requiring longitudinal K-12 data." }
            ]
          }
        },

        {
          id: "collab-logos",
          type: "logoStrip",
          header: "Who We Work With",
          intro: "Our network of technical validators, academic collaborators, and industry partners.",
          logos: [
            { name: "IIT Hyderabad", src: "/src/assets/brand/iit-hyderabad-logo.png", alt: "IIT Hyderabad logo", role: "Academic Partner (Dept. of Design)", collaboration: "Prototyping Validation & Design Thinking Methodology." },
            { name: "IN-SPACe / ISRO", src: "/src/assets/brand/inspace-logo.png", alt: "IN-SPACe logo", role: "Technical Partner", collaboration: "Aerospace Payload Qualification & Launch Authorization." },
            { name: "AMI", src: "/src/assets/brand/ami-logo.png", alt: "AMI logo", role: "Pedagogical Affiliate", collaboration: "Alignment with Global Montessori Standards (0-18)." },
            { name: "Cambridge Assessment International Education", src: "/src/assets/brand/cambridge-logo.png", alt: "Cambridge Assessment International Education – Academic Partner", role: "Academic Partner", collaboration: "International curriculum alignment and assessment framework for secondary programs." },
            { name: "Zenodo / CERN", src: "/src/assets/brand/zenodo-logo.svg", alt: "Zenodo – Publication Partner", role: "Publication Partner", collaboration: "Open-access archival and DOI registration for all Institute research outputs. Operated by CERN." },
            { name: "TakeMe2Space", src: "/src/assets/brand/takeme2space-logo.png", alt: "TakeMe2Space – Industry Partner", role: "Industry Partner", collaboration: "Aerospace mentorship and technical validation for Space Lab projects." }
          ]
        },

        {
          id: "collab-transfer",
          type: "grid3",
          header: "Methodology Transfer Program",
          intro:
            "We believe that \"Micro Research\" should be the standard for all laboratory schools. We offer a structured Transfer Program to help other institutions replicate our observational infrastructure.",
          items: [
            {
              title: "Protocol Training",
              icon: "clipboardList",
              body: "Training your staff to become Embedded Researchers."
            },
            {
              title: "Ethics Architecture",
              icon: "shield",
              body: "Setting up your internal IRB and Consent frameworks."
            },
            {
              title: "Data Schema Licensing",
              icon: "database",
              body: "Adopting our standardized variables for cross-institutional comparison."
            }
          ]
        },

        {
          id: "collaborate-form",
          type: "buttonCards",
          header: "How to Start",
          cards: [
            {
              headline: "Individual Researchers",
              icon: "user",
              body: "For PhD candidates, Post-Docs, and Faculty seeking data access or fellowships. Apply for visiting fellowships (2-8 weeks) or dataset access (requires IRB approval).",
              button: { label: "Apply for Scholar Credentials", href: "/contact" }
            },
            {
              headline: "Institutional Partners",
              icon: "building",
              body: "For Universities, Research Organizations, Policy Institutes, and NGOs seeking formal alliance.",
              button: { label: "Request MOU Guidelines", href: "/contact" }
            },
            {
              headline: "Press & Publishing",
              icon: "newspaper",
              body: "For media inquiries, citation permissions, and interview requests.",
              button: { label: "Blue Blocks CubeSat Press Kit", href: "https://drive.google.com/drive/folders/1qAxUfbSOFcN3TYDPlX_7tHrYXFU39fxY?usp=sharing", external: true }
            }
          ],
          footerNote: "Timeline: Proposals are reviewed on a rolling basis (2-4 weeks)."
        },

        {
          id: "collab-faq",
          type: "accordion",
          header: "Collaboration FAQs",
          items: [
            {
              q: "Can I visit as a researcher?",
              a: "We host 2-3 visiting researchers annually. Applications for 2-8 week residencies are available through the Scholar Track."
            },
            {
              q: "Can other schools use your methodology?",
              a: "Yes. Micro Research is explicitly designed for adoption by other institutions. We offer a Methodology Transfer program."
            },
            {
              q: "Are you affiliated with a university?",
              a: "We are independent but maintain a strategic partnership with the Department of Design at IIT Hyderabad."
            }
          ]
        },

        {
          id: "collab-related",
          type: "relatedCards",
          header: "Related",
          cards: [
            { title: "Publications", description: "Research docket.", icon: "publication", href: "/publications" },
            { title: "Methodology", description: "Research protocols.", icon: "methodology", href: "/methodology" },
            { title: "Downloads", description: "Framework documents.", icon: "download", href: "/downloads" },
            { title: "Governance", description: "Standards and oversight.", icon: "governance", href: "/governance" }
          ]
        }
      ]
    },

    "/newsroom": {
      title: "Newsroom",
      metaDescription:
        "Institutional news, mission milestones, publications, and press materials from Blue Blocks Micro Research Institute.",
      seo: {
        title: "Newsroom | Blue Blocks Micro Research Institute",
        canonical: "https://siddheshv1.lovable.app/newsroom",
        robots: "noindex,nofollow,noarchive,nosnippet",
        openGraph: {
          type: "website",
          url: "https://siddheshv1.lovable.app/newsroom",
          title: "Newsroom",
          description:
            "Institutional news, mission milestones, publications, and press materials.",
          image: {
            url: "https://siddheshv1.lovable.app/og/newsroom.jpg",
            width: 1200,
            height: 630,
            alt: "Institutional newsroom"
          }
        }
      },
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Newsroom",
          url: "https://siddheshv1.lovable.app/newsroom",
          isPartOf: { "@type": "WebSite", url: "https://siddheshv1.lovable.app/" },
          about: { "@type": "Thing", name: "Institutional news and press materials" }
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://siddheshv1.lovable.app/" },
            { "@type": "ListItem", position: 2, name: "Newsroom", item: "https://siddheshv1.lovable.app/newsroom" }
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Latest News",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              item: {
                "@type": "NewsArticle",
                headline: "Blue Blocks Payload Authorized for ISRO Mission",
                about: "Mission milestone and authorization"
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
            "This newsroom documents what we've learned, what we've built, and what went wrong. Satellite launches, patent filings, scientific breakthroughs, methodological dead-ends—all of it matters. 15 years completed; Year 16 ongoing. Five utility patents filed to date.",
          primaryCta: { label: "Monthly Digest – Available Shortly", disabled: true },
          secondaryCta: { label: "Currently CubeSat Press Kit Available", href: "https://drive.google.com/drive/folders/1qAxUfbSOFcN3TYDPlX_7tHrYXFU39fxY?usp=sharing", external: true },
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
              headline: "Publishing in Progress",
              excerpt:
                "We are currently finalizing our architectural blueprint for embedded longitudinal observation and will be publishing it shortly. This upcoming framework will allow other institutions to replicate our approach without external funding. We spent three years figuring out what doesn't work before getting to this point.",
              cta: { label: "View Press Release", disabled: true },
              image: { src: "/src/assets/placeholders/labs/protocol-notes.jpg", alt: "Methodology framework", variant: "card", privacyBlur: false }
            },
            {
              tag: "International",
              headline: "Nobel Peace Center Features Student Innovation",
              excerpt:
                "Blue Blocks Micro Research Institute student projects have been selected for exhibition as exemplars of \"Youth-Led Innovation,\" validating our 0-18 Sovereignty Model on a global stage. Proceedings yet to be released by MONISC.",
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
          intro: "What journalists need to cover the Blue Blocks Micro Research Institute accurately.",
          items: [
            {
              title: "Logos & Identity",
              icon: "download",
              body:
                "High-resolution vector files of the Institute seal and approved typography.",
              cta: { label: "Download Media Kit", href: "/downloads/blue-blocks-mri-media-kit.pdf" }
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
              cta: { label: "View Style Guide", href: "/publications" }
            }
          ]
        },

        {
          id: "digest-form",
          type: "form",
          header: "Subscribe to the Monthly Digest",
          intro:
            "Receive a monthly summary of mission milestones, publications, patents, and institutional updates. For direct inquiries, email research@blueblocks.in.",
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
          ],
          contactNote: { label: "Email Research Team", href: "mailto:research@blueblocks.in" }
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
        },

        {
          id: "news-faq",
          type: "accordion",
          header: "Newsroom FAQs",
          items: [
            {
              q: "Can journalists visit the campus?",
              a: "Yes, by appointment only. Media visits are scheduled outside of core observational hours to ensure zero interference with the longitudinal study. Please contact media@blueblocks.in at least 5 business days in advance."
            },
            {
              q: "How should I refer to the school vs. the institute?",
              a: "Please distinguish between the two entities. \"Blue Blocks Montessori School\" is the educational body. \"Blue Blocks Micro Research Institute\" is a research organization. When citing data, please attribute the Institute."
            }
          ]
        },

        {
          id: "news-related",
          type: "relatedCards",
          header: "Related",
          cards: [
            { title: "Publications", description: "Research docket.", icon: "publication", href: "/publications" },
            { title: "Patents", description: "View patent registry.", icon: "patent", href: "/patents" },
            { title: "Technical Briefs", description: "Mission documentation.", icon: "brief", href: "/technical-briefs/sbb-1" },
            { title: "Downloads", description: "Media kit and resources.", icon: "download", href: "/downloads" }
          ]
        }
      ]
    },

    "/contact": {
      title: "Contact",
      metaDescription: "Contact Blue Blocks Micro Research Institute for inquiries, collaborations, and media requests.",
      seo: {
        title: "Contact | Blue Blocks Micro Research Institute",
        canonical: "https://siddheshv1.lovable.app/contact",
        robots: "noindex,nofollow,noarchive,nosnippet",
        openGraph: {
          type: "website",
          url: "https://siddheshv1.lovable.app/contact",
          title: "Contact",
          description: "Reach out to Blue Blocks Micro Research Institute for research, media, or partnership inquiries.",
          image: {
            url: "https://siddheshv1.lovable.app/og/contact.jpg",
            width: 1200,
            height: 630,
            alt: "Contact page visual"
          }
        }
      },
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact",
          url: "https://siddheshv1.lovable.app/contact",
          isPartOf: { "@type": "WebSite", url: "https://siddheshv1.lovable.app/" }
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://siddheshv1.lovable.app/" },
            { "@type": "ListItem", position: 2, name: "Contact", item: "https://siddheshv1.lovable.app/contact" }
          ]
        }
      ],
      sections: [
        {
          id: "contact-hero",
          type: "hero",
          variant: "stark",
          headline: "Contact Us.",
          subheadline:
            "For research inquiries, collaboration proposals, media requests, or general questions, please reach out via the following channels.",
          primaryCta: { label: "Email Research Team", href: "mailto:research@blueblocks.in" },
          secondaryCta: { label: "Email Press Office", href: "mailto:press@blueblocks.in" },
          image: {
            src: "/src/assets/banners/contact-institutional.jpg",
            alt: "Contact page visual",
            variant: "hero",
            privacyBlur: false,
            caption: ""
          }
        },
        {
          id: "contact-form",
          type: "form",
          header: "Submit an Inquiry",
          description: "Use this form to reach the appropriate team directly. All required fields are marked with an asterisk.",
          fields: [
            { name: "name", label: "Full Name", type: "text", required: true, placeholder: "e.g. Dr. Jane Smith" },
            { name: "email", label: "Institutional Email", type: "email", required: true, placeholder: "you@institution.edu" },
            { name: "inquiryType", label: "Inquiry Type", type: "select", required: true, options: [
              { label: "Research Collaboration", value: "research" },
              { label: "Media Inquiry", value: "media" },
              { label: "General Question", value: "general" },
              { label: "Data Access Request", value: "data-access" }
            ]},
            { name: "institution", label: "Institution / Organization", type: "text", required: false, placeholder: "Optional" },
            { name: "phone", label: "Phone Number", type: "text", required: false, placeholder: "Optional" },
            { name: "message", label: "Message", type: "textarea", required: true, placeholder: "Please describe your inquiry in detail..." }
          ],
          submitLabel: "Send Inquiry",
          submit: {
            to: "research@blueblocks.in",
            mediaTo: "press@blueblocks.in",
            subject: "Website Inquiry",
            successMessage: "Thank you. Our team will respond within 2–3 working days."
          }
        }
      ]
    },

    "/privacy": {
      title: "Privacy Policy",
      metaDescription: "Privacy policy for Blue Blocks Micro Research Institute website and data handling.",
      seo: {
        title: "Privacy Policy | Blue Blocks Micro Research Institute",
        canonical: "https://siddheshv1.lovable.app/privacy",
        robots: "noindex,nofollow,noarchive,nosnippet",
        openGraph: {
          type: "website",
          url: "https://siddheshv1.lovable.app/privacy",
          title: "Privacy Policy",
          description: "Privacy policy detailing data collection, usage, and protection at Blue Blocks Micro Research Institute.",
          image: {
            url: "https://siddheshv1.lovable.app/og/privacy.jpg",
            width: 1200,
            height: 630,
            alt: "Privacy policy visual"
          }
        }
      },
      schemas: [],
      sections: [
        {
          id: "privacy-intro",
          type: "textBlock",
          heading: "Introduction",
          body: "We are committed to protecting your privacy in accordance with the Information Technology Act, 2000, IT Rules 2011, and the Digital Personal Data Protection Act, 2023."
        },
        {
          id: "privacy-collection",
          type: "textBlock",
          heading: "Information We Collect",
          body: "Website Visitors:\n• Technical data: IP address, browser type, pages visited, time on site\n• Cookies: As described in the Cookies section below\n\nContact Form Submissions:\n• Name, email address, institution (if provided), message content\n\nData Access Requests:\n• Name, credentials, institutional affiliation, research purpose, ethics approval\n\nResearch Data:\nOur research involving children is governed separately by our Micro Research Ethics Framework (MREF) and is not collected through this Website."
        },
        {
          id: "privacy-use",
          type: "textBlock",
          heading: "How We Use Information",
          body: "• To respond to inquiries\n• To process data access requests\n• To improve the Website\n• To analyze usage patterns\n• To comply with legal obligations"
        },
        {
          id: "privacy-sharing",
          type: "textBlock",
          heading: "Data Sharing",
          body: "We do not sell or trade your information. We may share with:\n• Service providers (hosting, analytics) under data processing agreements\n• Legal authorities when required by law\n• Research collaborators only with your explicit consent"
        },
        {
          id: "privacy-retention",
          type: "textBlock",
          heading: "Data Retention",
          body: "• Contact submissions: 2 years\n• Data access requests: Duration of agreement plus 5 years\n• Analytics: 26 months"
        },
        {
          id: "privacy-rights",
          type: "textBlock",
          heading: "Your Rights",
          body: "You have the right to: access, correct, erase, restrict, port your data, object to processing, and withdraw consent. Contact: privacy@blueblocks.in"
        },
        {
          id: "privacy-children",
          type: "textBlock",
          heading: "Children's Privacy",
          body: "This Website is not directed at children under 18. We do not collect personal information from children through the Website."
        },
        {
          id: "privacy-grievance",
          type: "textBlock",
          heading: "Grievance Officer",
          body: "In accordance with the IT Act, our Grievance Officer can be reached at grievance@blueblocks.in. Complaints will be addressed within 30 days."
        },
        {
          id: "privacy-cookies-what",
          type: "textBlock",
          heading: "What Are Cookies",
          sectionName: "Cookies",
          body: "Cookies are small text files placed on your device to help websites function and provide information to website owners."
        },
        {
          id: "privacy-cookies-use",
          type: "textBlock",
          heading: "Cookies We Use",
          body: "Essential Cookies:\nNecessary for the Website to function (security, load balancing). Cannot be disabled.\n\nAnalytics Cookies:\nWe use Google Analytics to understand how visitors use our Website. Cookies: _ga, _ga_*, _gid. Retention: 26 months.\n\nPreference Cookies:\nRemember your choices (cookie consent, language preferences)."
        },
        {
          id: "privacy-cookies-manage",
          type: "textBlock",
          heading: "Managing Cookies",
          body: "You can manage cookies through:\n• Our cookie consent banner (shown on first visit)\n• Your browser settings\n• Google Analytics opt-out: tools.google.com/dlpage/gaoptout\n\nNote: Blocking all cookies may affect Website functionality."
        },
        {
          id: "privacy-disclaimer-general",
          type: "textBlock",
          heading: "General",
          sectionName: "Disclaimer",
          body: "Information on this Website is for general informational and educational purposes. We make no warranties about completeness, accuracy, or reliability."
        },
        {
          id: "privacy-disclaimer-research",
          type: "textBlock",
          heading: "Research Findings",
          body: "Our research findings:\n• Are context-specific (Montessori school in Hyderabad) and may not generalize\n• Are observational and do not establish causation\n• Should not be the sole basis for educational, medical, or developmental decisions\n• Are subject to limitations stated in each publication"
        },
        {
          id: "privacy-disclaimer-advice",
          type: "textBlock",
          heading: "Not Professional Advice",
          body: "Nothing on this Website constitutes medical advice, psychological counseling, educational prescriptions, legal advice, or professional consultation of any kind. Consult qualified professionals for specific concerns."
        },
        {
          id: "privacy-disclaimer-methodology",
          type: "textBlock",
          heading: "Methodology Adoption",
          body: "Our methodology and standards are published openly. However:\n• Successful implementation requires appropriate training\n• We are not responsible for outcomes from adoption of our methods\n• Institutions remain responsible for their own ethical compliance"
        },
        {
          id: "privacy-copyright-ownership",
          type: "textBlock",
          heading: "Ownership",
          sectionName: "Copyright & Licensing",
          body: "Unless otherwise stated, all content on this Website is copyright © Blue Blocks Micro Research Institute."
        },
        {
          id: "privacy-copyright-publications",
          type: "textBlock",
          heading: "Research Publications",
          body: "Our methodology papers (DOI-001, DOI-001a) and micro-study publications are licensed under:\nCreative Commons Attribution 4.0 International (CC BY 4.0)\nYou may share and adapt with appropriate attribution."
        },
        {
          id: "privacy-copyright-standards",
          type: "textBlock",
          heading: "Research Standards",
          body: "Our standards (BEOP, MREF, CDCS) are licensed under:\nCreative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)\nYou may adopt and adapt with attribution. Modified versions must be clearly distinguished and released under the same license."
        },
        {
          id: "privacy-copyright-data",
          type: "textBlock",
          heading: "Public Data",
          body: "Tier 1 (fully anonymized) datasets are licensed under CC BY 4.0."
        },
        {
          id: "privacy-copyright-website",
          type: "textBlock",
          heading: "Website Content",
          body: "General website content is All Rights Reserved. You may view, share links, and quote brief excerpts with attribution. Substantial reproduction requires permission."
        },
        {
          id: "privacy-copyright-trademarks",
          type: "textBlock",
          heading: "Trademarks",
          body: "'Blue Blocks', 'Blue Blocks Micro Research Institute', 'Micro Research', and associated logos are trademarks. Use requires prior written permission."
        },
        {
          id: "privacy-copyright-attribution",
          type: "textBlock",
          heading: "Attribution Format",
          body: "For publications: [Author]. [Year]. [Title]. Blue Blocks Micro Research Institute. [DOI].\nFor website: Blue Blocks Micro Research Institute. [Page]. research.blueblocks.in. Accessed [Date]."
        },
        {
          id: "privacy-copyright-permissions",
          type: "textBlock",
          heading: "Permissions",
          body: "For uses not covered above, contact: permissions@blueblocks.in"
        },
        {
          id: "privacy-accessibility-commitment",
          type: "textBlock",
          heading: "Our Commitment",
          sectionName: "Accessibility",
          body: "We are committed to digital accessibility for people with disabilities. We aim to conform to WCAG 2.1 Level AA guidelines."
        },
        {
          id: "privacy-accessibility-measures",
          type: "textBlock",
          heading: "Measures Taken",
          body: "• Text alternatives for non-text content\n• Sufficient color contrast\n• Keyboard accessibility\n• Clear, consistent navigation\n• Semantic HTML markup"
        },
        {
          id: "privacy-accessibility-limitations",
          type: "textBlock",
          heading: "Known Limitations",
          body: "• Some older PDF documents may not be fully screen-reader compatible\n• Some data visualizations may lack full text alternatives\n\nWe are working to address these issues."
        },
        {
          id: "privacy-accessibility-feedback",
          type: "textBlock",
          heading: "Feedback",
          body: "If you encounter accessibility barriers, please contact: accessibility@blueblocks.in\nWe aim to respond within 5 business days."
        },
        {
          id: "privacy-ethics-commitment",
          type: "textBlock",
          heading: "Our Commitment",
          sectionName: "Research Ethics",
          body: "We conduct research that is ethically sound, transparent, and respectful of all participants—particularly the children whose development we observe. As educators first and researchers second, the welfare of children always takes precedence."
        },
        {
          id: "privacy-ethics-principles",
          type: "textBlock",
          heading: "Core Principles",
          body: "Education First:\nEducational welfare always supersedes research interests. Research never disrupts learning.\n\nEmbedded, Not Intrusive:\nResearch is conducted by educators already part of children's environment. We do not introduce external observers.\n\nInformed Consent:\n• Enrollment consent from families\n• Annual reaffirmation\n• Additional consent for elevated-visibility studies\n• Age-appropriate assent from children\n• Right to withdraw at any time\n\nPrivacy and Confidentiality:\n• Tiered data classification (CDCS)\n• De-identification protocols\n• Secure storage with access controls\n\nTransparency:\nWe are transparent about methodology, limitations, conflicts of interest, and bias mitigation."
        },
        {
          id: "privacy-ethics-governance",
          type: "textBlock",
          heading: "Governance",
          body: "Our research is governed by:\n• Micro Research Ethics Framework (MREF)\n• Ethics Advisory Committee\n• Blue Blocks Embedded Observation Protocol (BEOP)\n• Classified Data and Consent Standards (CDCS)"
        },
        {
          id: "privacy-ethics-concerns",
          type: "textBlock",
          heading: "Concerns",
          body: "If you have concerns about our research practices: ethics@blueblocks.in\nConcerns are reviewed by our Ethics Advisory Committee within 30 days."
        },
        {
          id: "privacy-contact",
          type: "textBlock",
          heading: "Contact",
          body: "For questions about these policies:\n\nGeneral Legal:\nlegal@blueblocks.in\n\nPrivacy & Data:\nprivacy@blueblocks.in\n\nResearch Ethics:\nethics@blueblocks.in\n\nAccessibility:\naccessibility@blueblocks.in\n\nPermissions:\npermissions@blueblocks.in\n\nGrievances (IT Act):\ngrievance@blueblocks.in\n\nBlue Blocks Micro Research Institute\nOperating under Blue Blocks Research Institute Foundation\nHyderabad, Telangana, India"
        },
      ]
    },

    "/terms": {
      title: "Terms of Use",
      metaDescription: "Terms of use for Blue Blocks Micro Research Institute website and services.",
      seo: {
        title: "Terms of Use | Blue Blocks Micro Research Institute",
        canonical: "https://siddheshv1.lovable.app/terms",
        robots: "noindex,nofollow,noarchive,nosnippet",
        openGraph: {
          type: "website",
          url: "https://siddheshv1.lovable.app/terms",
          title: "Terms of Use",
          description: "Terms and conditions governing the use of Blue Blocks Micro Research Institute website and services.",
          image: {
            url: "https://siddheshv1.lovable.app/og/terms.jpg",
            width: 1200,
            height: 630,
            alt: "Terms of use visual"
          }
        }
      },
      schemas: [],
      sections: [
        {
          id: "terms-acceptance",
          type: "textBlock",
          heading: "Acceptance",
          body: "By accessing research.blueblocks.in ('the Website'), you accept these Terms of Use. If you do not agree, please do not use the Website."
        },
        {
          id: "terms-permitted",
          type: "textBlock",
          heading: "Permitted Use",
          body: "You may use the Website for:\n• Viewing content for personal, educational, or research purposes\n• Downloading publicly available documents and data\n• Contacting us through provided channels\n• Sharing links to our content"
        },
        {
          id: "terms-prohibited",
          type: "textBlock",
          heading: "Prohibited Use",
          body: "You may not:\n• Use the Website for unlawful purposes\n• Attempt unauthorized access to our systems\n• Scrape or harvest content without permission\n• Misrepresent your identity or affiliation\n• Use content to harm, exploit, or endanger children"
        },
        {
          id: "terms-data",
          type: "textBlock",
          heading: "Research Data",
          body: "Access to research data beyond publicly available Tier 1 data requires a Data Access Agreement. Unauthorized access or distribution of research data is prohibited and may result in legal action."
        },
        {
          id: "terms-warranties",
          type: "textBlock",
          heading: "Disclaimer of Warranties",
          body: "The Website and content are provided 'as is' without warranties of any kind. We do not warrant that the Website will be uninterrupted, error-free, or free of harmful components."
        },
        {
          id: "terms-liability",
          type: "textBlock",
          heading: "Limitation of Liability",
          body: "To the maximum extent permitted by law, Blue Blocks Micro Research Institute shall not be liable for any indirect, incidental, special, or consequential damages. Our total liability shall not exceed INR 10,000."
        },
        {
          id: "terms-research-disclaimer",
          type: "textBlock",
          heading: "Research Disclaimer",
          body: "Research findings on this Website are for informational purposes only. They do not constitute professional advice (medical, psychological, educational, or otherwise). Our research is context-specific and may not be generalizable without replication."
        },
        {
          id: "terms-governing",
          type: "textBlock",
          heading: "Governing Law",
          body: "These Terms are governed by Indian law. Disputes shall be subject to the exclusive jurisdiction of courts in Hyderabad, Telangana, India."
        },
      ]
    },

    "/technical-briefs/sbb-1": {
      title: "Technical Brief: SBB-1",
      metaDescription: "Technical brief for the SBB-1 mission by Blue Blocks Micro Research Institute.",
      seo: {
        title: "Technical Brief: SBB-1 | Blue Blocks Micro Research Institute",
        canonical: "https://siddheshv1.lovable.app/technical-briefs/sbb-1",
        robots: "noindex,nofollow,noarchive,nosnippet",
        openGraph: {
          type: "article",
          url: "https://siddheshv1.lovable.app/technical-briefs/sbb-1",
          title: "Technical Brief: SBB-1",
          description: "Detailed technical brief on the SBB-1 mission payload and flight qualification.",
          image: {
            url: "https://siddheshv1.lovable.app/og/technical-briefs/sbb-1.jpg",
            width: 1200,
            height: 630,
            alt: "SBB-1 technical brief"
          }
        }
      },
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "TechArticle",
          name: "Technical Brief: SBB-1",
          url: "https://siddheshv1.lovable.app/technical-briefs/sbb-1",
          isPartOf: { "@type": "WebSite", url: "https://siddheshv1.lovable.app/" }
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://siddheshv1.lovable.app/" },
            { "@type": "ListItem", position: 2, name: "Technical Briefs", item: "https://siddheshv1.lovable.app/technical-briefs/sbb-1" }
          ]
        }
      ],
      sections: [
        {
          id: "sbb1-header",
          type: "dossierHeader",
          title: "SBB-1 Mission Dossier",
          subtitle: "Flight Qualification, Payload Integration & Valorization — A pedagogical aerospace mission by Blue Blocks Micro Research Institute in collaboration with TakeMe2Space, authorized by IN-SPACe for ISRO PSLV-C62.",
          classification: "Institutional Archive · Not for Distribution",
          dataPanel: [
            { label: "Mission Designator", value: "SBB-1" },
            { label: "Launch Vehicle", value: "ISRO PSLV-C62" },
            { label: "Authorization", value: "IN-SPACe (Govt. of India)" },
            { label: "Payload Class", value: "1U CubeSat (Thermal Sensor)" },
            { label: "Status", value: "Flight-Qualified · Launch Anomaly (Stage 4)" }
          ]
        },
        {
          id: "sbb1-abstract",
          type: "dossierSection",
          number: "01",
          label: "Mission Overview",
          variant: "abstract",
          body: "Mission SBB-1 represents a first-of-its-kind pedagogical aerospace mission in which adolescent students (ages 12–16) at Blue Blocks Montessori School designed, engineered, and flight-qualified a 1U CubeSat thermal sensor payload for deployment aboard ISRO's Polar Satellite Launch Vehicle (PSLV-C62).\n\nThe Blue Blocks Micro Research Institute served as the pedagogical architecture partner, structuring the mission within a 'Lab-to-Launch' framework that tested adolescent resilience, professional engineering discipline, and regulatory navigation under authentic TRL-9 (Technology Readiness Level 9) constraints.\n\nThe payload successfully passed all flight qualification tests — including thermal vacuum cycling and random vibration testing — and received formal authorization from the Indian National Space Promotion and Authorisation Centre (IN-SPACe), Government of India. The mission launched on 30 December 2024. While the payload met every engineering standard, the PSLV-C62 launch vehicle experienced a Stage 4 ignition failure at T+847 seconds, resulting in a sub-nominal orbit insertion."
        },
        {
          id: "sbb1-quote",
          type: "dossierQuoteStrip",
          quote: "The mission outcome validated the curriculum not through orbital success, but through what the Institute terms 'Valorization' — proving to the students that their engineering was real enough to fail in real ways."
        },
        {
          id: "sbb1-finding",
          type: "dossierSection",
          number: "02",
          label: "Key Finding",
          header: "Valorization Through Failure",
          body: "The Stage 4 anomaly provided an unscripted, high-stakes lesson in aerospace engineering reality. Students confronted genuine mission failure — not a simulated exercise — and were required to process the technical, emotional, and professional dimensions of an outcome beyond their control. This experience is now documented as the single most significant pedagogical event in the Institute's longitudinal study.\n\nThe SBB-1 mission conclusively demonstrates that adolescent-led teams, guided by Montessori principles of self-directed learning and intrinsic motivation, can meet the rigorous technical and regulatory standards required for deployment on national space platforms."
        },
        {
          id: "sbb1-specs",
          type: "dossierSpecTable",
          number: "03",
          label: "Technical Specifications",
          header: "Payload Specifications",
          rows: [
            { label: "Form Factor", value: "1U CubeSat standard (10 × 10 × 10 cm)" },
            { label: "Primary Instrument", value: "Multi-point thermal sensor array" },
            { label: "Mass", value: "Within PSLV auxiliary payload allocation limits" },
            { label: "Power", value: "Autonomous battery system with regulated DC output" },
            { label: "Data Interface", value: "Standard CubeSat communication protocol" },
            { label: "PCB Design", value: "Student-led, fabricated and assembled in-house" },
            { label: "Integration Partner", value: "TakeMe2Space (technical collaboration)" }
          ]
        },
        {
          id: "sbb1-qualification",
          type: "dossierSpecTable",
          number: "04",
          label: "Qualification & Validation",
          header: "Flight Qualification Tests (Passed)",
          rows: [
            { label: "Thermal Vacuum", value: "Simulated orbital thermal extremes (-20°C to +60°C)" },
            { label: "Random Vibration", value: "Launch-load simulation per ISRO specifications" },
            { label: "EMC", value: "Verified non-interference with launch vehicle systems" },
            { label: "Structural Integrity", value: "Mechanical stress analysis and fit-check verification" },
            { label: "Facility Sign-Off", value: "All tests conducted at ISRO-approved facilities with formal sign-off" }
          ]
        },
        {
          id: "sbb1-timeline",
          type: "dossierTimeline",
          number: "05",
          label: "Mission Timeline",
          events: [
            { date: "2023 Q1", description: "Concept definition and student team formation" },
            { date: "2023 Q2–Q3", description: "PCB design, component selection, and prototyping" },
            { date: "2023 Q4", description: "IN-SPACe application filed with Government of India" },
            { date: "2024 Q1–Q2", description: "Technical reviews, design iterations, and mentor consultations" },
            { date: "2024 Q3", description: "Flight qualification tests completed — Thermal, Vibration, EMC (Pass)" },
            { date: "2024 Q4", description: "IN-SPACe authorization formally granted" },
            { date: "30 Dec 2024", description: "PSLV-C62 launch from Satish Dhawan Space Centre, Sriharikota" },
            { date: "T+847s", description: "Stage 4 ignition anomaly — sub-nominal orbit insertion" }
          ]
        },
        {
          id: "sbb1-authorization",
          type: "dossierNotice",
          label: "Authorization Record",
          body: "IN-SPACe Authorization No. IN-SPACe/AUTH/2024/SBB-1 — Government of India, Department of Space. Formal authorization for Blue Blocks Montessori School payload integration aboard ISRO PSLV-C62."
        },
        {
          id: "sbb1-pedagogical",
          type: "dossierPrinciples",
          number: "06",
          label: "Pedagogical Architecture",
          header: "The Lab-to-Launch Framework",
          intro: "The 'Lab-to-Launch' framework is the Institute's proprietary pedagogical model for integrating high-stakes industrial projects into the Montessori curriculum. The framework operates on three principles:",
          principles: [
            {
              number: "01",
              title: "Authentic Constraints",
              body: "Students operate within the same regulatory, engineering, and timeline constraints as professional aerospace teams. No simplified or 'educational' versions of standards are used."
            },
            {
              number: "02",
              title: "Self-Directed Navigation",
              body: "Consistent with Montessori pedagogy, students determine their own work allocation, problem-solving approaches, and team structures. Adult mentors provide domain expertise but do not direct the engineering process."
            },
            {
              number: "03",
              title: "Valorization as Outcome",
              body: "Success is not measured by mission outcome (orbital deployment) but by the degree to which students internalize professional engineering identity. The question is not 'Did the payload reach orbit?' but 'Do the students now understand themselves as engineers?'"
            }
          ],
          conclusion: "The SBB-1 mission is the first complete execution of this framework, spanning 18 months from concept to launch. The Stage 4 anomaly, while unplanned, provided the most powerful validation of Principle 3 — students experienced genuine professional failure and demonstrated measurable resilience and reflective capacity in post-mission debriefs."
        },
        {
          id: "sbb1-gallery",
          type: "dossierGallery",
          number: "07",
          label: "Visual Documentation",
          images: [
            { src: "/src/assets/placeholders/labs/avionics.jpg", alt: "Avionics integration bench", caption: "Payload avionics integration" },
            { src: "/src/assets/placeholders/labs/satellite-hardware.jpg", alt: "CubeSat hardware assembly", caption: "1U CubeSat assembly" },
            { src: "/src/assets/placeholders/labs/authorization-letter.jpg", alt: "IN-SPACe authorization document", caption: "IN-SPACe authorization" },
            { src: "/src/assets/placeholders/labs/drone-prototype.jpg", alt: "Prototype testing phase", caption: "Early prototype testing" },
            { src: "/src/assets/placeholders/labs/protocol-notes.jpg", alt: "Flight qualification protocol notes", caption: "Qualification protocols" },
            { src: "/src/assets/placeholders/labs/space-lab.jpg", alt: "Student workspace during mission", caption: "Mission operations workspace" }
          ]
        },
        {
          id: "sbb1-archive",
          type: "dossierArchiveNotice",
          body: "This technical brief is maintained as part of the Blue Blocks Micro Research Institute's institutional archive. It is not intended for commercial distribution. All mission data, student identities, and proprietary methodologies are protected under the Institute's governance framework. Citation of this document must reference the institutional DOI and conform to academic standards."
        },
        {
          id: "sbb1-related",
          type: "dossierRelated",
          header: "Related Documentation",
          cards: [
            { title: "IN-SPACe Authorization Letter", description: "Official authorization record archived on Zenodo.", icon: "publication", href: "/publications/in-space-authorization-letter" },
            { title: "Saparya Conference Presentation", description: "SBB-1 case study presented at AMI Saparya 2026.", icon: "presentation", href: "/presentations/marrakesh-human-capital" },
            { title: "Downloads Hub", description: "Access mission documents and media kit.", icon: "download", href: "/downloads" }
          ]
        }
      ]
    },

    "/presentations/marrakesh-human-capital": {
      title: "Presentation: Marrakesh Human Capital",
      metaDescription: "Presentation on defining future human capital through innovation economies by Blue Blocks Micro Research Institute.",
      seo: {
        title: "Presentation: Marrakesh Human Capital | Blue Blocks Micro Research Institute",
        canonical: "https://siddheshv1.lovable.app/presentations/marrakesh-human-capital",
        robots: "noindex,nofollow,noarchive,nosnippet",
        openGraph: {
          type: "presentation",
          url: "https://siddheshv1.lovable.app/presentations/marrakesh-human-capital",
          title: "Presentation: Marrakesh Human Capital",
          description: "Insights into innovation economies and longitudinal hypothesis development presented at IMF Annual Meetings.",
          image: {
            url: "https://siddheshv1.lovable.app/og/presentations/marrakesh-human-capital.jpg",
            width: 1200,
            height: 630,
            alt: "Marrakesh presentation"
          }
        }
      },
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "PresentationDigitalDocument",
          name: "Presentation: Marrakesh Human Capital",
          url: "https://siddheshv1.lovable.app/presentations/marrakesh-human-capital",
          isPartOf: { "@type": "WebSite", url: "https://siddheshv1.lovable.app/" }
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://siddheshv1.lovable.app/" },
            { "@type": "ListItem", position: 2, name: "Presentations", item: "https://siddheshv1.lovable.app/presentations/marrakesh-human-capital" }
          ]
        }
      ],
      sections: [
        {
          id: "presentation-hero",
          type: "hero",
          variant: "stark",
          headline: "Presentation: Marrakesh Human Capital",
          subheadline:
            "A detailed presentation on innovation economies and longitudinal hypothesis development, delivered at the IMF Annual Meetings.",
          primaryCta: { label: "Download Presentation Slides", href: "/downloads/marrakesh-presentation" },
          image: {
            src: "/src/assets/banners/presentations/marrakesh-human-capital.jpg",
            alt: "Marrakesh presentation visual",
            variant: "hero",
            privacyBlur: false,
            caption: ""
          }
        }
      ]
    },

    "/proceedings/oslo-2026": {
      title: "Proceedings Archive: Oslo 2026",
      metaDescription: "Archive of proceedings from the Oslo Summit 2026 featuring Blue Blocks Micro Research Institute.",
      seo: {
        title: "Proceedings Archive: Oslo 2026 | Blue Blocks Micro Research Institute",
        canonical: "https://siddheshv1.lovable.app/proceedings/oslo-2026",
        robots: "noindex,nofollow,noarchive,nosnippet",
        openGraph: {
          type: "collection",
          url: "https://siddheshv1.lovable.app/proceedings/oslo-2026",
          title: "Proceedings Archive: Oslo 2026",
          description: "Official proceedings and archival materials from the Oslo Summit 2026.",
          image: {
            url: "https://siddheshv1.lovable.app/og/proceedings/oslo-2026.jpg",
            width: 1200,
            height: 630,
            alt: "Oslo proceedings"
          }
        }
      },
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Proceedings Archive: Oslo 2026",
          url: "https://siddheshv1.lovable.app/proceedings/oslo-2026",
          isPartOf: { "@type": "WebSite", url: "https://siddheshv1.lovable.app/" }
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://siddheshv1.lovable.app/" },
            { "@type": "ListItem", position: 2, name: "Proceedings", item: "https://siddheshv1.lovable.app/proceedings/oslo-2026" }
          ]
        }
      ],
      sections: [
        {
          id: "proceedings-hero",
          type: "hero",
          variant: "stark",
          headline: "Proceedings Archive: Oslo 2026",
          subheadline:
            "Comprehensive archive of the Oslo Summit 2026, including presentations, datasets, and official documentation.",
          primaryCta: { label: "View MONISC Proceedings", disabled: true },
          image: {
            src: "/src/assets/banners/proceedings/oslo-2026.jpg",
            alt: "Oslo proceedings visual",
            variant: "hero",
            privacyBlur: false,
            caption: ""
          }
        }
      ]
    },

    "/downloads": {
      title: "Downloads",
      metaDescription: "Download media kits, research frameworks, and institutional documents from Blue Blocks Micro Research Institute.",
      seo: {
        title: "Downloads | Blue Blocks Micro Research Institute",
        canonical: "https://siddheshv1.lovable.app/downloads",
        robots: "noindex,nofollow,noarchive,nosnippet",
        openGraph: {
          type: "website",
          url: "https://siddheshv1.lovable.app/downloads",
          title: "Downloads",
          description: "Access media kits, research frameworks, and institutional documents.",
          image: {
            url: "https://siddheshv1.lovable.app/og/downloads.jpg",
            width: 1200,
            height: 630,
            alt: "Downloads page visual"
          }
        }
      },
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Downloads",
          url: "https://siddheshv1.lovable.app/downloads",
          isPartOf: { "@type": "WebSite", url: "https://siddheshv1.lovable.app/" }
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://siddheshv1.lovable.app/" },
            { "@type": "ListItem", position: 2, name: "Downloads", item: "https://siddheshv1.lovable.app/downloads" }
          ]
        }
      ],
      sections: [
        {
          id: "downloads-hero",
          type: "hero",
          variant: "stark",
          headline: "Downloads",
          subheadline: "This hub consolidates public reference materials, conference artifacts, and citation-grade documentation.",
          primaryCta: { label: "View Publications", href: "/publications" },
          image: {
            src: "/src/assets/banners/downloads-archive.jpg",
            alt: "Downloads page visual",
            variant: "hero",
            privacyBlur: false,
            caption: ""
          }
        },
        {
          id: "downloads-publications",
          type: "downloadList",
          header: "Publications",
          intro: "Official publications and research records. Access via DOI for citation integrity and version control.",
          items: [
            {
              title: "IN-SPACe Authorization Letter",
              description: "Official authorization record for SBB-1 mission",
              format: "DOI",
              href: "https://doi.org/10.5281/zenodo.18195108"
            },
            {
              title: "SAPARYA Conference Booklet — IMF 7th National Montessori Conference",
              description: "Full case study: From Pink Tower to CubeSat",
              format: "DOI",
              href: "https://doi.org/10.5281/zenodo.18337934"
            },
            {
              title: "SAPARYA Presentation Slides",
              description: "Visual presentation materials from IMF conference",
              format: "DOI",
              href: "https://doi.org/10.5281/zenodo.18337934"
            }
          ]
        },
        {
          id: "downloads-books",
          type: "downloadList",
          header: "Books & Sample Chapters",
          intro: "Sample chapters and supplementary materials from published books.",
          items: [
            {
              title: "Lining The Nest - Sample Chapter",
              description: "Preview chapter from the book on building structured learning environments",
              format: "PDF",
              href: "/downloads/lining-the-nest-sample-chapter.pdf"
            }
          ]
        },
        {
          id: "downloads-patents",
          type: "downloadList",
          header: "Patents / Technical Documentation",
          intro: "Patent filings by student inventors. Access via DOI for citation integrity.",
          items: [
            {
              title: "Autonomous Contactless Delivery System (ACDS)",
              description: "Electromechanical delivery unit with multi-axis robotic arm and sanitation systems for contactless distribution.",
              format: "DOI",
              href: "https://doi.org/10.5281/zenodo.18195108"
            },
            {
              title: "Autonomous Medical Assistance System (AMAS)",
              description: "Telerobotic intervention platform for contactless medical support during epidemiological crises.",
              format: "DOI",
              href: "https://doi.org/10.5281/zenodo.18195108"
            },
            {
              title: "Autonomous Health Monitoring System (AHMS)",
              description: "Remote epidemiological surveillance network using infrared thermography and video plethysmography.",
              format: "DOI",
              href: "https://doi.org/10.5281/zenodo.18195108"
            },
            {
              title: "System for Automated Security (UAV)",
              description: "Responsive aerial surveillance system for emergency security operations with encrypted alert ingestion and geolocation triangulation.",
              format: "DOI",
              href: "https://doi.org/10.5281/zenodo.18195108"
            },
            {
              title: "Borehole Rescue System (BRS)",
              description: "Vertical-access rescue apparatus with adaptive aerial platform, lidar-based collision avoidance, and automated retention mechanisms.",
              format: "DOI",
              href: "https://doi.org/10.5281/zenodo.18195108"
            }
          ]
        },
        {
          id: "downloads-media",
          type: "downloadList",
          header: "Media & Press Resources",
          intro: "Resources for journalists and media partners.",
          items: [
            {
              title: "Media Kit (PDF)",
              description: "Complete media kit with logos, brand guidelines, and approved imagery",
              format: "PDF",
              href: "/downloads/blue-blocks-mri-media-kit.pdf"
            },
            {
              title: "Brand Assets",
              description: "High-resolution logos and typography files",
              format: "ZIP",
              href: "/downloads/brand-assets.zip"
            },
            {
              title: "Leadership Bio Sheet",
              description: "Approved biographies and headshots for Pavan Goyal and Munira Hussain",
              format: "PDF",
              href: "/downloads/leadership-bio.pdf"
            }
          ]
        },
        {
          id: "downloads-note",
          type: "textBlock",
          variant: "muted",
          header: "",
          body: "Note: Some downloads are placeholder files pending official release. Contact press@blueblocks.in for specific document requests or verification."
        },
        {
          id: "downloads-related",
          type: "relatedCards",
          header: "Related",
          cards: [
            { title: "Publications", description: "Research docket.", icon: "publication", href: "/publications" },
            { title: "Patents", description: "IP registry.", icon: "patent", href: "/patents" },
            { title: "Books", description: "Long-form publications.", icon: "book", href: "/books" },
            { title: "Newsroom", description: "Press resources.", icon: "news", href: "/newsroom" }
          ]
        }
      ]
    },

    "/staff-access": {
      title: "Staff Access",
      metaDescription: "Internal access portal for Blue Blocks Micro Research Institute staff and researchers.",
      seo: {
        title: "Staff Access | Blue Blocks Micro Research Institute",
        canonical: "https://siddheshv1.lovable.app/staff-access",
        robots: "noindex,nofollow,noarchive,nosnippet",
        openGraph: {
          type: "website",
          url: "https://siddheshv1.lovable.app/staff-access",
          title: "Staff Access",
          description: "Secure internal access portal for staff and researchers.",
          image: {
            url: "https://siddheshv1.lovable.app/og/staff-access.jpg",
            width: 1200,
            height: 630,
            alt: "Staff access portal"
          }
        }
      },
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Staff Access",
          url: "https://siddheshv1.lovable.app/staff-access",
          isPartOf: { "@type": "WebSite", url: "https://siddheshv1.lovable.app/" }
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://siddheshv1.lovable.app/" },
            { "@type": "ListItem", position: 2, name: "Staff Access", item: "https://siddheshv1.lovable.app/staff-access" }
          ]
        }
      ],
      sections: [
        {
          id: "staff-access-hero",
          type: "hero",
          variant: "stark",
          headline: "Staff Access",
          subheadline:
            "Secure portal for internal staff and researchers to access sensitive data and administrative tools.",
          primaryCta: { label: "Contact for Access", href: "/contact" },
          image: {
            src: "/src/assets/banners/staff-access.jpg",
            alt: "Staff access visual",
            variant: "hero",
            privacyBlur: false,
            caption: ""
          }
        }
      ]
    },

    "/sitemap": {
      title: "Sitemap",
      metaDescription: "Sitemap for Blue Blocks Micro Research Institute website.",
      seo: {
        title: "Sitemap | Blue Blocks Micro Research Institute",
        canonical: "https://siddheshv1.lovable.app/sitemap",
        robots: "noindex,nofollow,noarchive,nosnippet",
        openGraph: {
          type: "website",
          url: "https://siddheshv1.lovable.app/sitemap",
          title: "Sitemap",
          description: "Comprehensive sitemap of Blue Blocks Micro Research Institute website.",
          image: {
            url: "https://siddheshv1.lovable.app/og/sitemap.jpg",
            width: 1200,
            height: 630,
            alt: "Sitemap visual"
          }
        }
      },
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Sitemap",
          url: "https://siddheshv1.lovable.app/sitemap",
          isPartOf: { "@type": "WebSite", url: "https://siddheshv1.lovable.app/" }
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://siddheshv1.lovable.app/" },
            { "@type": "ListItem", position: 2, name: "Sitemap", item: "https://siddheshv1.lovable.app/sitemap" }
          ]
        }
      ],
      sections: [
        {
          id: "sitemap-hero",
          type: "hero",
          variant: "stark",
          headline: "Sitemap",
          subheadline: "Complete navigation index for the Blue Blocks Micro Research Institute website. Use this page to find any resource or verify that all routes are accessible.",
          primaryCta: { label: "View Publications", href: "/publications" },
          image: {
            src: "/src/assets/banners/downloads-archive.jpg",
            alt: "Sitemap navigation",
            variant: "hero",
            privacyBlur: false
          }
        },
        {
          id: "sitemap-navigation",
          type: "sitemap"
        }
      ]
    },

    "/books": {
      title: "Books",
      metaDescription: "Long-form publications and books by Blue Blocks Micro Research Institute.",
      seo: {
        title: "Books | Blue Blocks Micro Research Institute",
        canonical: "https://siddheshv1.lovable.app/books",
        robots: "noindex,nofollow,noarchive,nosnippet",
        openGraph: {
          type: "collection",
          url: "https://siddheshv1.lovable.app/books",
          title: "Books",
          description: "Long-form publications authored or curated by Blue Blocks Micro Research Institute.",
          image: {
            url: "https://siddheshv1.lovable.app/og/books.jpg",
            width: 1200,
            height: 630,
            alt: "Books collection"
          }
        }
      },
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Books",
          url: "https://siddheshv1.lovable.app/books",
          isPartOf: { "@type": "WebSite", url: "https://siddheshv1.lovable.app/" }
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://siddheshv1.lovable.app/" },
            { "@type": "ListItem", position: 2, name: "Books", item: "https://siddheshv1.lovable.app/books" }
          ]
        }
      ],
      sections: [
        {
          id: "books-hero",
          type: "hero",
          variant: "stark",
          headline: "Books",
          subheadline: "Selected long-form publications supporting families, educators, and institutional partners. These titles serve as reflective documentation rather than promotional literature.",
          primaryCta: { label: "View Featured Book", href: "/books/lining-the-nest" },
          image: {
            src: "/src/assets/banners/books.jpg",
            alt: "Books collection visual",
            variant: "hero",
            privacyBlur: false,
            caption: ""
          }
        },
        {
          id: "books-list",
          type: "cards",
          header: "Published Books",
          intro: "Long-form publications authored by Blue Blocks Micro Research Institute leadership.",
          variant: "blogGrid",
          cards: [
            {
              tag: "Featured",
              headline: "Lining The Nest",
              meta: "By Pavan Goyal • 280 pages",
              body: "A structured narrative exploring how environments shape responsibility, curiosity, and long-horizon learning culture.",
              cta: { label: "View Book Details", href: "/books/lining-the-nest" },
              image: { src: "/src/assets/placeholders/card-default.jpg", alt: "Lining The Nest book cover", variant: "card" }
            }
          ]
        },
        {
          id: "books-purchase",
          type: "highlightBox",
          variant: "accent",
          header: "Purchase Options",
          body: "Lining The Nest is available in paperback and digital formats through Amazon India.",
          cta: { label: "Buy on Amazon", href: "https://amzn.in/d/09xLf6FE", external: true }
        },
        {
          id: "books-related",
          type: "relatedCards",
          header: "Related",
          cards: [
            { title: "Publications", description: "Research docket.", icon: "publication", href: "/publications" },
            { title: "Methodology", description: "Research protocols.", icon: "methodology", href: "/methodology" },
            { title: "Team", description: "Meet the authors.", icon: "team", href: "/team" },
            { title: "Downloads", description: "Sample chapters.", icon: "download", href: "/downloads" }
          ]
        }
      ]
    },

    "/patents": {
      title: "Patents",
      metaDescription: "Patent registry and intellectual property filings by Blue Blocks Micro Research Institute.",
      seo: {
        title: "Patents | Blue Blocks Micro Research Institute",
        canonical: "https://siddheshv1.lovable.app/patents",
        robots: "noindex,nofollow,noarchive,nosnippet",
        openGraph: {
          type: "collection",
          url: "https://siddheshv1.lovable.app/patents",
          title: "Patents",
          description: "Registry of patents and intellectual property filings by Blue Blocks Micro Research Institute.",
          image: {
            url: "https://siddheshv1.lovable.app/og/patents.jpg",
            width: 1200,
            height: 630,
            alt: "Patents registry"
          }
        }
      },
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Patents",
          url: "https://siddheshv1.lovable.app/patents",
          isPartOf: { "@type": "WebSite", url: "https://siddheshv1.lovable.app/" }
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://siddheshv1.lovable.app/" },
            { "@type": "ListItem", position: 2, name: "Patents", item: "https://siddheshv1.lovable.app/patents" }
          ]
        }
      ],
      sections: [
        {
          id: "patents-hero",
          type: "hero",
          variant: "stark",
          headline: "Patent Registry",
          subheadline: "This registry documents student-generated inventions produced within high-stakes prototyping environments. The Institute facilitates filing and documentation, while intellectual property remains with student inventors (with parental consent where applicable). Five utility patents filed to date.",
          primaryCta: { label: "View Governance", href: "/governance" },
          image: {
            src: "/src/assets/banners/patents.jpg",
            alt: "Patents registry visual",
            variant: "hero",
            privacyBlur: false,
            caption: ""
          }
        },
        {
          id: "patents-grid",
          type: "patentGrid",
          header: "Filed Patents",
          intro: "Registry of utility patents filed by student inventors. Application numbers are assigned upon filing; some entries show 'TBD' where filing is in preparation.",
          patents: [
            {
              title: "Automated Security UAV",
              applicationNo: "Filed",
              inventors: "Drone Research Centre (Ages 10-14)",
              status: "Filed",
              description: "Autonomous unmanned aerial vehicle for perimeter security and surveillance applications.",
              href: "/patents/automated-security-uav"
            },
            {
              title: "Borehole Rescue System",
              applicationNo: "Filed",
              inventors: "Student Engineers (Ages 11-15)",
              status: "Filed",
              description: "Mechanical rescue system designed for borehole emergencies, developed in response to real-world incidents.",
              href: "/patents/borehole-rescue-system"
            },
            {
              title: "Contactless Delivery System",
              applicationNo: "Filed",
              inventors: "Drone Research Centre (Ages 10-13)",
              status: "Filed",
              description: "Automated contactless delivery mechanism for healthcare and logistics applications.",
              href: "/patents/contactless-delivery-system"
            },
            {
              title: "Autonomous Medical Assistance System",
              applicationNo: "Filed",
              inventors: "Student Engineers (Ages 12-16)",
              status: "Filed",
              description: "Autonomous system for medical assistance in remote or emergency situations.",
              href: "/patents/autonomous-medical-assistance-system"
            },
            {
              title: "Autonomous Health Monitoring System ('Guardian' Drone)",
              applicationNo: "#4421",
              inventors: "Drone Research Centre (Ages 9-11)",
              status: "Filed",
              description: "Autonomous health monitoring drone system—the youngest patent holders in the Institute's registry.",
              href: "/patents/autonomous-health-monitoring-system"
            }
          ]
        },
        {
          id: "patents-ip-rights",
          type: "textBlock",
          header: "Student IP Rights",
          body: "All Intellectual Property created by students remains attributed to the student inventors. Blue Blocks Micro Research Institute facilitates the filing process and provides the pedagogical context but does not claim ownership. Patents are filed under the inventors' names with institutional support."
        },
        {
          id: "patents-faq",
          type: "accordion",
          header: "Frequently Asked Questions",
          items: [
            {
              q: "Who owns the patents?",
              a: "All patents are filed under the student inventors' names. The Institute facilitates the process but does not claim ownership of student-generated IP."
            },
            {
              q: "How can children file patents?",
              a: "Children can be named as inventors on patent applications. The Institute provides legal support, technical documentation assistance, and the pedagogical framework that enables students to develop patentable innovations."
            },
            {
              q: "Are these patents commercially available?",
              a: "Licensing inquiries can be directed through our Contact page. All licensing decisions involve the student inventors and their families."
            },
            {
              q: "What is the age range of inventors?",
              a: "Our patent registry includes inventors as young as 9 years old. The age ranges reflect the cohorts working in different Innovation Labs (Drone Research Centre, Space Lab, etc.)."
            }
          ]
        },
        {
          id: "patents-related",
          type: "relatedCards",
          header: "Related",
          cards: [
            { title: "Publications", description: "Research docket.", icon: "publication", href: "/publications" },
            { title: "Governance", description: "IP rights policy.", icon: "governance", href: "/governance" },
            { title: "Newsroom", description: "Patent announcements.", icon: "news", href: "/newsroom" },
            { title: "Collaborate", description: "Licensing inquiries.", icon: "collaborate", href: "/collaborate" }
          ]
        }
      ]
    },

    "/team": {
      title: "Team",
      metaDescription: "Meet the leadership, researchers, and staff of Blue Blocks Micro Research Institute.",
      seo: {
        title: "Team | Blue Blocks Micro Research Institute",
        canonical: "https://siddheshv1.lovable.app/team",
        robots: "noindex,nofollow,noarchive,nosnippet",
        openGraph: {
          type: "collection",
          url: "https://siddheshv1.lovable.app/team",
          title: "Team",
          description: "Leadership, researchers, and staff of Blue Blocks Micro Research Institute.",
          image: {
            url: "https://siddheshv1.lovable.app/og/team.jpg",
            width: 1200,
            height: 630,
            alt: "Team members"
          }
        }
      },
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Team",
          url: "https://siddheshv1.lovable.app/team",
          isPartOf: { "@type": "WebSite", url: "https://siddheshv1.lovable.app/" }
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://siddheshv1.lovable.app/" },
            { "@type": "ListItem", position: 2, name: "Team", item: "https://siddheshv1.lovable.app/team" }
          ]
        }
      ],
      sections: [
        {
          id: "team-hero",
          type: "hero",
          variant: "stark",
          headline: "Team",
          subheadline: "Meet the researchers, embedded fellows, and domain specialists who drive the Blue Blocks Micro Research Institute's mission. 15 years of longitudinal research requires institutional stability and deep domain expertise.",
          primaryCta: { label: "Contact", href: "/contact" },
          image: {
            src: "/src/assets/banners/team.jpg",
            alt: "Team members visual",
            variant: "hero",
            privacyBlur: false,
            caption: ""
          }
        },
        {
          id: "team-governance-leadership",
          type: "cards",
          variant: "profiles",
          header: "Governance Leadership",
          cards: [
            {
              headline: "Pavan Goyal",
              tag: "Principal Investigator & Founder",
              body: "Oversees the longitudinal integrity of the 0-18 study. Holds rare complete AMI certification across all developmental planes (AMI Diploma 0-18).",
              image: { src: "/src/assets/placeholders/avatars/pavan.webp", alt: "Pavan Goyal", variant: "avatar", privacyBlur: false },
              cta: { label: "View Profile", href: "/team/pavan-goyal" }
            },
            {
              headline: "Munira Hussain",
              tag: "Director of Pedagogy",
              body: "Ensures all research protocols integrate seamlessly with the Montessori curriculum without disrupting the \"Children's House.\" Credentials: AMI Diploma / M.Ed.",
              image: { src: "/src/assets/placeholders/avatars/munira.jpg", alt: "Munira Hussain", variant: "avatar", privacyBlur: false },
              cta: { label: "View Profile", href: "/team/munira-hussain" }
            }
          ]
        },
        {
          id: "team-advisory-board",
          type: "cards",
          variant: "profiles",
          header: "Research Council & Advisory Board",
          cards: [
            {
              headline: "Prof. AVR Srikar",
              tag: "Technical Validation Advisor",
              body: "IIT Hyderabad (Dept of Design). Reviews TRL claims and engineering prototypes for the Space & Drone Labs.",
              image: { src: "/src/assets/placeholders/avatars/advisor-placeholder.jpg", alt: "Prof. AVR Srikar", variant: "avatar", privacyBlur: false }
            },
            {
              headline: "Prof. Apoorv Gogar",
              tag: "Methodological Oversight Advisor",
              body: "Indian School of Business. Reviews research design and business application frameworks for student innovation projects.",
              image: { src: "/src/assets/placeholders/avatars/advisor-placeholder.jpg", alt: "Prof. Apoorv Gogar", variant: "avatar", privacyBlur: false }
            },
            {
              headline: "Rahul Jindal",
              tag: "Technology Validation Advisor",
              body: "Director, Google. Provides technical review for software and systems architecture in student technology projects.",
              image: { src: "/src/assets/placeholders/avatars/advisor-placeholder.jpg", alt: "Rahul Jindal", variant: "avatar", privacyBlur: false }
            },
            {
              headline: "Sucheth Davaluri",
              tag: "Industry Validation Advisor",
              body: "Vice-Chairman & CEO, Neuland Laboratories. Reviews commercialization pathways and industry-readiness of student innovations.",
              image: { src: "/src/assets/placeholders/avatars/advisor-placeholder.jpg", alt: "Sucheth Davaluri", variant: "avatar", privacyBlur: false }
            },
            {
              headline: "Manish Gupta",
              tag: "Enterprise Technology Advisor",
              body: "Director, SAP. Evaluates scalability and enterprise integration potential of student technology solutions.",
              image: { src: "/src/assets/placeholders/avatars/advisor-placeholder.jpg", alt: "Manish Gupta", variant: "avatar", privacyBlur: false }
            },
            {
              headline: "Ronak Kumar",
              tag: "Aerospace Domain Advisor",
              body: "Founder, TakeMe2Space. Provides technical mentorship and validation for Space Lab projects including satellite and propulsion initiatives.",
              image: { src: "/src/assets/placeholders/avatars/advisor-placeholder.jpg", alt: "Ronak Kumar", variant: "avatar", privacyBlur: false }
            }
          ]
        },
        {
          id: "team-research-team",
          type: "cards",
          variant: "profiles",
          header: "Research Team",
          intro: "Academic and operational researchers supporting longitudinal data integrity, STEM research modules, classroom-based documentation, and institutional research infrastructure across the 0–18 continuum.",
          cards: [
            {
              headline: "D. Vinay Shyam Donakanti",
              tag: "Research Data Analyst Intern",
              body: "B.Tech Computer Science & Data Science. Supports digitization, coding, and structuring of Montessori observation records into standardized research datasets.",
              image: { src: "/src/assets/placeholders/avatars/vinay-donakanti.webp", alt: "D. Vinay Shyam Donakanti", variant: "avatar", privacyBlur: false },
              cta: { label: "View Profile", href: "/team/vinay-donakanti" }
            },
            {
              headline: "Sreedhar Reddy Boddu",
              tag: "Research & Data Analyst",
              body: "B.Tech Civil Engineering (NIT Goa); Data Science & Analytics Certifications. Supports ETL processes, dashboard development, and structured data visualization.",
              image: { src: "/src/assets/placeholders/avatars/sreedhar-boddu.webp", alt: "Sreedhar Reddy Boddu", variant: "avatar", privacyBlur: false },
              cta: { label: "View Profile", href: "/team/sreedhar-boddu" }
            },
            {
              headline: "Sandhya Rao M",
              tag: "AMI Elementary Guide | Biomimicry Educator",
              body: "AMI Elementary Diploma; M.P.T. Community-Based Rehabilitation. Integrates Montessori pedagogy with structured research documentation.",
              image: { src: "/src/assets/placeholders/avatars/sandhya-rao.webp", alt: "Sandhya Rao M", variant: "avatar", privacyBlur: false },
              cta: { label: "View Profile", href: "/team/sandhya-rao" }
            },
            {
              headline: "Dr. Sreemoyee Chakraborty",
              tag: "STEM Research Lead | Palaeontology & Earth Sciences",
              body: "PhD, Palaeontology (ISI / University of Calcutta). Leads fossil-based STEM research modules and scientific inquiry frameworks.",
              image: { src: "/src/assets/placeholders/avatars/sreemoyee-chakraborty.webp", alt: "Dr. Sreemoyee Chakraborty", variant: "avatar", privacyBlur: false },
              cta: { label: "View Profile", href: "/team/sreemoyee-chakraborty" }
            },
            {
              headline: "Dr. Shobha Ediga",
              tag: "Microbiological & Biochemical Research Lead",
              body: "PhD, Plant Sciences (University of Hyderabad). Provides research oversight in biological sciences and adolescent-level scientific investigation.",
              image: { src: "/src/assets/placeholders/avatars/shobha-ediga.webp", alt: "Dr. Shobha Ediga", variant: "avatar", privacyBlur: false },
              cta: { label: "View Profile", href: "/team/shobha-ediga" }
            },
            {
              headline: "Sruthi Matta",
              tag: "Research Team Lead — Pedagogy & Innovation",
              body: "Graduate Diploma in Journalism (Concordia University); B.A. Humanities. Leads research initiatives focused on pedagogy and innovation frameworks.",
              image: { src: "/src/assets/placeholders/avatars/sruthi-matta.webp", alt: "Sruthi Matta", variant: "avatar", privacyBlur: false },
              cta: { label: "View Profile", href: "/team/sruthi-matta" }
            }
          ]
        },
        {
          id: "team-fellows",
          type: "twoColumn",
          variant: "cards",
          header: "Research & Observation Team",
          intro:
            "Data collection is conducted by a dual-layer team, ensuring both pedagogical sensitivity and technical accuracy.",
          left: {
            heading: "Embedded Research Fellows (AMI)",
            icon: "graduation",
            items: [
              { label: "Who They Are", text: "AMI-Certified Pedagogues." },
              { label: "Observation Focus", text: "Developmental & Behavioral Data." },
              { label: "Function", text: "They're the child's regular teacher, not a stranger with a clipboard. Children behave naturally because observation is invisible. The guide records observations during lunch or after school, never during work cycles." }
            ]
          },
          right: {
            heading: "Research Associates (Subject Experts)",
            icon: "flask",
            items: [
              { label: "Who They Are", text: "Engineers, Data Scientists, and Domain Specialists." },
              { label: "Observation Focus", text: "Performance & Competency Data." },
              { label: "Function", text: "These experts conduct focused observations within the Innovation Labs. They track \"External Output\"—measuring engineering fidelity, failure recovery rates, and technical precision during high-stakes prototyping (e.g., Drone flight tests)." }
            ]
          }
        },
        {
          id: "team-associates",
          type: "cards",
          variant: "profiles",
          header: "Research Associates",
          intro: "Engineers, data scientists, and domain specialists who conduct focused observations and technical validation within the Innovation Labs.",
          cards: [
            {
              headline: "Aerospace Systems Associate",
              tag: "Research Associate – Aerospace Systems",
              body: "**Domain:** Aerospace Engineering & Flight Systems\n\nFocuses on flight qualification protocols, payload integration testing, and mission-critical systems validation. Supports the Space Lab's TRL assessment pipeline and contributes to vibration and thermal test documentation.",
              image: { src: "/src/assets/placeholders/avatars/headshot-1.jpg", alt: "Aerospace Systems Associate", variant: "avatar", privacyBlur: false }
            },
            {
              headline: "Autonomous Systems Associate",
              tag: "Research Associate – Autonomous Systems",
              body: "**Domain:** Robotics & Autonomous Navigation\n\nConducts performance analytics on drone prototypes and autonomous delivery systems. Validates sensor fusion accuracy, path-planning algorithms, and failure recovery rates during field testing.",
              image: { src: "/src/assets/placeholders/avatars/headshot-2.jpg", alt: "Autonomous Systems Associate", variant: "avatar", privacyBlur: false }
            },
            {
              headline: "Data & Longitudinal Analysis Associate",
              tag: "Research Associate – Data Science",
              body: "**Domain:** Statistical Analysis & Dataset Architecture\n\nManages the longitudinal data pipeline from raw observation records to anonymized publishable datasets. Maintains K-anonymity standards and coordinates DOI assignment through Zenodo.",
              image: { src: "/src/assets/placeholders/avatars/headshot-3.jpg", alt: "Data Science Associate", variant: "avatar", privacyBlur: false }
            }
          ]
        },
        {
          id: "team-research",
          type: "cards",
          variant: "profiles",
          header: "Research Cohorts – Student Researchers",
          intro: "Students who transition from learning about innovation to producing it. They design functional prototypes under real-world engineering constraints — not simulations.",
          cards: [
            {
              headline: "Adolescent Research Cohort",
              tag: "Student Researchers (Ages 12–16)",
              body: "Students who transition from learning about innovation to producing it. They design functional prototypes under real-world engineering constraints — not simulations.",
              image: { src: "/src/assets/placeholders/labs/space-lab.jpg", alt: "Adolescent Research Cohort", variant: "avatar", privacyBlur: true },
              cta: { label: "View Details", href: "/team/adolescent-research-cohort" }
            }
          ]
        },
        {
          id: "team-privacy-note",
          type: "textBlock",
          variant: "muted",
          header: "",
          body: "Privacy Note: To protect the privacy of minors and maintain the integrity of the research environment, individual student profiles are not published. Student contributions are documented through the patent registry and mission archives."
        },
        {
          id: "team-related",
          type: "relatedCards",
          header: "Related",
          cards: [
            { title: "Governance", description: "Oversight & advisory board.", icon: "governance", href: "/governance" },
            { title: "Patents", description: "Student innovations.", icon: "patent", href: "/patents" },
            { title: "Collaborate", description: "Join the team.", icon: "collaborate", href: "/collaborate" },
            { title: "Downloads", description: "Leadership bios.", icon: "download", href: "/downloads" }
          ]
        }
      ]
    },

    // ==================== PUBLICATIONS DETAIL PAGES ====================
    "/publications/in-space-authorization-letter": {
      title: "IN-SPACe Authorization Letter",
      metaDescription: "Official IN-SPACe authorization record for the SBB-1 mission payload by Blue Blocks Micro Research Institute.",
      seo: {
        title: "IN-SPACe Authorization Letter | Blue Blocks Micro Research Institute",
        canonical: "https://siddheshv1.lovable.app/publications/in-space-authorization-letter",
        robots: "noindex,nofollow,noarchive,nosnippet",
        openGraph: {
          type: "article",
          url: "https://siddheshv1.lovable.app/publications/in-space-authorization-letter",
          title: "IN-SPACe Authorization Letter",
          description: "Official authorization record for the SBB-1 mission activity.",
          image: {
            url: "https://siddheshv1.lovable.app/og/publications/in-space-authorization-letter.jpg",
            width: 1200,
            height: 630,
            alt: "IN-SPACe Authorization Letter"
          }
        }
      },
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "ScholarlyArticle",
          headline: "Authorization Certificate for Establishment and Operation of Student-Engineered Hosted Payload SBB-1",
          description: "Official authorization archived for governance traceability, regulatory documentation continuity, and citation permanence.",
          identifier: "10.5281/zenodo.18195108",
          sameAs: "https://doi.org/10.5281/zenodo.18195108",
          datePublished: "2026",
          author: { "@type": "Organization", name: "Blue Blocks Micro Research Institute" },
          publisher: { "@type": "Organization", name: "Blue Blocks Micro Research Institute" }
        }
      ],
      sections: [
        {
          id: "pub-detail-hero",
          type: "hero",
          variant: "publication",
          headline: "Authorization Certificate for Establishment and Operation of Student-Engineered Hosted Payload SBB-1",
          subheadline: "Authorization No. PMA/IN-SPACe/AUTH/2026/115",
          image: { src: "/src/assets/banners/publications-doi.jpg", alt: "IN-SPACe Authorization Certificate", variant: "hero", privacyBlur: false }
        },
        {
          id: "pub-detail-meta",
          type: "metaStrip",
          items: [
            { label: "DOI", value: "10.5281/zenodo.18195108", href: "https://doi.org/10.5281/zenodo.18195108", external: true },
            { label: "Type", value: "Administrative Record" },
            { label: "Status", value: "Archived" },
            { label: "Authority", value: "IN-SPACe (Dept. of Space, GoI)" },
            { label: "Auth. No", value: "PMA/IN-SPACe/AUTH/2026/115" },
            { label: "Date", value: "07 Jan 2026" },
            { label: "Affiliation", value: "Blue Blocks Micro Research Institute" },
            { label: "Access", value: "Open Access" }
          ]
        },
        {
          id: "pub-introduction",
          type: "twoColumn",
          compact: true,
          left: {
            sections: [
              {
                title: "Introduction",
                body: "This record archives a regulatory milestone in Indian K-12 space education, the first IN-SPACe authorization granted directly to a Montessori educational institution for a student-engineered orbital payload. The certificate validates that the SBB-1 payload, developed by students of Blue Blocks Montessori School under the pedagogical guidance of Blue Blocks Micro Research Institute and technical partnership with TM2Space, meets India's national space regulatory requirements for flight certification under the \"Lab-to-Launch\" framework."
              }
            ]
          },
          right: {
            panels: [
              {
                title: "Repository & Access",
                links: [
                  { label: "View on Zenodo (DOI)", href: "https://doi.org/10.5281/zenodo.18195108", external: true },
                  { label: "Download PDF", href: "/downloads/in-space-authorization-letter.pdf", download: true },
                  { label: "IN-SPACe Registry", href: "https://www.inspace.gov.in", external: true }
                ]
              }
            ]
          }
        },
        {
          id: "pub-abstract",
          type: "twoColumn",
          compact: true,
          left: {
            sections: [
              {
                title: "Abstract",
                subtitle: "Official Record Summary:",
                body: "This record summarizes the formal Authorization Certificate No. PMA/IN-SPACe/AUTH/2026/115 issued by the Indian National Space Promotion and Authorization Centre (IN-SPACe). The certificate formally designates Blue Blocks Montessori Educational Society as both the Authorized Entity and the Applicant, granting legal authorization for the establishment and operation of the SBB-1 hosted payload. As the Applicant, Blue Blocks Montessori Educational Society assumes sole legal responsibility for ensuring the payload's compliance with the Convention on International Liability for Damage Caused by Space Objects (Liability Convention) and the Convention on Registration of Objects Launched into Outer Space (Registration Convention). The authorization is supported by official registry references, including the Department of Space (DOS) Master Registry entry INRSO/DOS/SC/2025/011-01 for the hosted payload dated 29 December 2025, and the International Telecommunication Union (ITU) filing reference IND2025-78363, coordinated through the Host Entity."
              }
            ]
          },
          right: {
            panels: [
              {
                title: "Related Publications",
                links: [
                  { label: "SAPARYA / IMF Case Study", href: "/publications/saparya-imf-case-study" },
                  { label: "Blue Blocks Innovation Portal", href: "https://blueblocks.in/Innovation/CubeSat-Mission/", external: true }
                ]
              }
            ]
          }
        },
        {
          id: "pub-methodology",
          type: "twoColumn",
          compact: true,
          left: {
            sections: [
              {
                title: "Methodology",
                body: "The SBB-1 payload was developed under the proprietary \"Lab-to-Launch\" pedagogical framework — a structured methodology enabling K-12 students to operate within professional aerospace constraints while managing the complete product lifecycle from PCB design to payload integration. The framework operates through a tripartite institutional structure: the school provides the student research team responsible for design, development, and testing; the research institute delivers pedagogical scaffolding, research standards, and regulatory navigation; and TM2Space contributes technical architecture, flight hardware validation, and launch integration. This approach ensures student-led execution with institutional accountability, progressive skill development mapped to space-grade certification milestones, and regulatory alignment with IN-SPACe compliance requirements — maintaining pedagogical integrity while meeting the engineering rigor demanded by orbital deployment."
              }
            ]
          },
          right: {
            panels: [
              {
                title: "Framework Outcomes",
                citation: "• Student-led execution with institutional accountability\n• Progressive skill development mapped to certification milestones\n• Regulatory alignment with IN-SPACe compliance standards\n• Pedagogical integrity alongside engineering rigor"
              }
            ]
          }
        },
        {
          id: "pub-results",
          type: "twoColumn",
          compact: true,
          left: {
            sections: [
              {
                title: "Payload Specifications & Architecture",
                body: "The IN-SPACe authorization validates the deployment of the SBB-1 payload, which was independently designed and developed by the student research team. While the payload is hosted on the MOI-1 bus, its architecture remains distinct and proprietary. The authorized configuration includes:",
                bullets: [
                  "Custom Avionics: An in-house designed microcontroller unit featuring AES-256 encryption for secure data handling and RS485 differential serial communication.",
                  "Sensor Integration:",
                  "BME280: For environmental sensing (Pressure, Temperature, Humidity).",
                  "BNO055: For attitude determination (9-axis Orientation).",
                  "206 PT RTD: For precision thermal monitoring in a 1206 SMD form factor."
                ]
              }
            ]
          },
          right: {
            panels: [
              {
                title: "Sensor Suite",
                citation: "The sensor suite provides comprehensive environmental and orientation telemetry for in-orbit characterization of the hosted payload environment."
              }
            ]
          }
        },
        {
          id: "pub-discussion",
          type: "twoColumn",
          compact: true,
          left: {
            sections: [
              {
                title: "Regulatory & Legal Compliance",
                body: "Authorization No. PMA/IN-SPACe/AUTH/2026/115 formally designates the Blue Blocks Montessori Educational Society as the Authorized Entity and Applicant. As the Applicant, the Society assumes sole legal responsibility for ensuring the payload's compliance with two critical international treaties:",
                bullets: [
                  "The Convention on International Liability for Damage Caused by Space Objects (Liability Convention).",
                  "The Convention on Registration of Objects Launched into Outer Space (Registration Convention)."
                ]
              },
              {
                body: "This authorization is substantiated by the Department of Space (DOS) Master Registry entry INRSO/DOS/SC/2025/011-01 (dated 29 December 2025) and the International Telecommunication Union (ITU) filing reference IND2025-78363."
              }
            ]
          },
          right: {
            panels: [
              {
                title: "Cross-References",
                links: [
                  { label: "Methodology", href: "/methodology" },
                  { label: "Patent Registry", href: "/patents" },
                  { label: "Governance", href: "/governance" },
                  { label: "Downloads", href: "/downloads" }
                ]
              }
            ]
          }
        },
        {
          id: "pub-supplementary",
          type: "twoColumn",
          compact: true,
          left: {
            sections: [
              {
                title: "Supplementary Materials",
                subtitle: "Official Logs & Registry:",
                bullets: [
                  "IN-SPACe Authorization Registry: https://www.inspace.gov.in/inspace?id=inspace_authorizations",
                  "Mission Home & Logs: https://blueblocks.in/Innovation/CubeSat-Mission"
                ]
              },
              {
                subtitle: "Independent Media Coverage:",
                bullets: [
                  "NDTV (National): \"17 Hyderabad Students Build Payload for Upcoming ISRO Launch\" — https://www.ndtv.com/india-news/17-hyderabad-students-build-payload-for-upcoming-isro-launch-10569889",
                  "India Today (National): \"Blue Blocks Co-founder Munira Hussain: Students' CubeSat Set for ISRO Launch\" — https://www.indiatoday.in/technology/video/blue-blocks-co-founder-munira-hussain-students-cubesat-set-for-isro-launch-ytvd-2848900-2026-01-08",
                  "Telangana Today (Regional): \"Hyderabad School Students Make History with CubeSat on ISRO's PSLV-C62\" — https://telanganatoday.com/hyderabad-school-students-make-history-with-cubesat-on-isros-pslv-c62"
                ]
              }
            ]
          },
          right: {
            panels: [
              {
                title: "How to Cite (APA)",
                citation: "Goyal, P. (2026). Authorization Certificate For Establishment and operations of a hosted payload, namely Students of BlueBlocks-1 (SBB-1) (Authorization No. PMA/IN-SPACe/AUTH/2026/115). Blue Blocks Micro Research Institute. https://research.blueblocks.in/publications/CubeSat-INSPACE"
              }
            ]
          }
        },
        {
          id: "pub-faq",
          type: "accordion",
          header: "Frequently Asked Questions",
          items: [
            { q: "Is this the original authorization document?", a: "The Zenodo DOI record serves as the authoritative archival version." },
            { q: "Can institutions use this for verification?", a: "Yes. The page exists specifically for governance traceability." },
            { q: "Does this expose student identities?", a: "No. Privacy protections are maintained." },
            { q: "Can media cite this document?", a: "Yes, with DOI attribution." }
          ]
        },
        
        {
          id: "pub-archival-note",
          type: "textBlock",
          variant: "muted",
          body: "This record is maintained as part of the Blue Blocks Micro Research Institute open archival framework to support governance transparency, citation permanence, and research continuity."
        },
        {
          id: "pub-related",
          type: "relatedCards",
          header: "Related Registry",
          cards: [
            { title: "Methodology", description: "Lab-to-Launch framework.", icon: "publication", href: "/methodology" },
            { title: "Patents", description: "Student IP registry.", icon: "patent", href: "/patents" },
            { title: "Governance", description: "Institutional oversight.", icon: "book", href: "/governance" },
            { title: "Downloads", description: "All documents.", icon: "default", href: "/downloads" }
          ]
        }
      ]
    },

    "/publications/saparya-imf-case-study": {
      title: "Valorization In Orbit — An Adolescent CubeSat Mission",
      metaDescription: "Peer-reviewed case study presented at Saparya 7th National Montessori Conference documenting how seventeen adolescent students designed, built, and launched the SBB-1 CubeSat hosted payload.",
      seo: {
        title: "Valorization In Orbit — An Adolescent CubeSat Mission | Blue Blocks Micro Research Institute",
        canonical: "https://siddheshv1.lovable.app/publications/saparya-imf-case-study",
        robots: "noindex,nofollow,noarchive,nosnippet",
        openGraph: {
          type: "article",
          url: "https://siddheshv1.lovable.app/publications/saparya-imf-case-study",
          title: "Valorization In Orbit — An Adolescent CubeSat Mission",
          description: "Case study on adolescent CubeSat mission presented at Saparya 7th National Montessori Conference.",
          image: {
            url: "https://siddheshv1.lovable.app/og/publications/saparya-imf-case-study.jpg",
            width: 1200,
            height: 630,
            alt: "SAPARYA Case Study"
          }
        }
      },
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "ScholarlyArticle",
          headline: "Valorization In Orbit — An Adolescent CubeSat Mission",
          description: "Case study documenting how seventeen students designed and built the SBB-1 CubeSat hosted payload, presented at Saparya 7th National Montessori Conference.",
          identifier: "10.5281/zenodo.18337934",
          sameAs: "https://doi.org/10.5281/zenodo.18337934",
          datePublished: "2026-01-23",
          author: { "@type": "Organization", name: "Blue Blocks Micro Research Institute" },
          publisher: { "@type": "Organization", name: "Blue Blocks Micro Research Institute" }
        }
      ],
      sections: [
        {
          id: "saparya-hero",
          type: "hero",
          variant: "publication",
          headline: "Valorization In Orbit — An Adolescent CubeSat Mission",
          subheadline: "Saparya 7th National Montessori Conference | Mumbai | 23–24 January 2026",
          image: { src: "/src/assets/banners/publications-doi.jpg", alt: "SAPARYA Case Study", variant: "hero", privacyBlur: false }
        },
        {
          id: "saparya-meta",
          type: "metaStrip",
          items: [
            { label: "DOI", value: "10.5281/zenodo.18337934", href: "https://doi.org/10.5281/zenodo.18337934", external: true },
            { label: "Type", value: "Conference Case Study" },
            { label: "Status", value: "Published" },
            { label: "Event", value: "Saparya 7th National Montessori Conference" },
            { label: "Date", value: "23–24 January 2026" },
            { label: "Affiliation", value: "Blue Blocks Micro Research Institute" },
            { label: "Access", value: "Open Access" }
          ]
        },
        {
          id: "saparya-abstract",
          type: "twoColumn",
          compact: true,
          left: {
            sections: [
              {
                title: "Abstract",
                body: "This case study documents how seventeen students (ages 12–15) from Blue Blocks Montessori School designed and built the SBB-1 CubeSat hosted payload, received official authorization from IN-SPACe after an 18-month technical review, and witnessed their payload's launch aboard ISRO's PSLV-C62 rocket on January 12, 2026. Though the mission ended in failure when Stage 4 of the launch vehicle malfunctioned, the experience embodied Dr. Montessori's concept of \"valorization\" — adolescents developing personal worth through meaningful contribution to society. The document connects Montessori's developmental stages through the symbolic 10cm cube, from the Pink Tower to the CubeSat, demonstrating how adolescents can engage in genuine professional work when given authentic challenges and responsibility."
              }
            ]
          },
          right: {
            panels: [
              {
                title: "Repository & Access",
                links: [
                  { label: "View on Zenodo (DOI)", href: "https://doi.org/10.5281/zenodo.18337934", external: true },
                  { label: "Conference Booklet (PDF)", href: "/downloads", download: false },
                  { label: "Presentation Slides (PDF)", href: "/downloads", download: false }
                ]
              }
            ]
          }
        },
        {
          id: "saparya-introduction",
          type: "twoColumn",
          compact: true,
          left: {
            sections: [
              {
                title: "Introduction",
                body: "This record archives a peer-reviewed case study presented at Saparya, the 7th National Montessori Conference organized by the Indian Montessori Foundation (IMF) in Mumbai. The presentation documents how seventeen adolescent students (ages 12–15) from Blue Blocks Montessori School designed, built, and launched a CubeSat hosted payload, and how the experience embodied Dr. Montessori's concept of \"valorization\" even when the mission ended in launch vehicle failure."
              }
            ]
          },
          right: {
            panels: [
              {
                title: "Related Publications",
                links: [
                  { label: "IN-SPACe Authorization Letter", href: "/publications/in-space-authorization-letter" },
                  { label: "Methodology", href: "/methodology" }
                ]
              }
            ]
          }
        },
        {
          id: "saparya-methodology",
          type: "twoColumn",
          compact: true,
          left: {
            sections: [
              {
                title: "Methodology",
                body: "The presentation employs a longitudinal case study methodology, tracking the student cohort across the 18-month mission lifecycle from initial design through launch day. Data sources include mission documentation, IN-SPACe regulatory correspondence, student reflections, and observational records from the prepared environment.\n\nThe theoretical framework draws on Dr. Maria Montessori's developmental psychology, specifically her writings on the \"valorization of the personality\" during the third plane of development (ages 12–18). The case study tests whether aerospace engineering, conducted under authentic professional constraints, can serve as a vehicle for valorization when adolescents assume genuine responsibility for outcomes."
              }
            ]
          },
          right: {
            panels: [
              {
                title: "Theoretical Framework",
                citation: "Valorization of the personality — Dr. Maria Montessori's concept describing adolescents developing personal worth through meaningful contribution to society, tested here through authentic aerospace engineering constraints."
              }
            ]
          }
        },
        {
          id: "saparya-results",
          type: "twoColumn",
          compact: true,
          left: {
            sections: [
              {
                title: "Results — The 10cm Cube as Developmental Thread",
                body: "The presentation traces a symbolic geometric connection across Montessori's planes of development, from the 10cm Pink Tower cube (first plane sensorial material) through the Binomial Cube (second plane mathematical abstraction) to the 10cm³ CubeSat standard (third plane professional application). This continuity illustrates how foundational Montessori materials prepare the child for complex real-world engagement."
              },
              {
                title: "Valorization Through Authentic Work",
                body: "Despite mission failure at T+847 seconds when PSLV-C62's Stage 4 malfunctioned, the student researchers demonstrated measurable valorization outcomes:",
                bullets: [
                  "Sustained engagement across 18 months",
                  "Professional-grade documentation practices",
                  "Regulatory navigation with IN-SPACe",
                  "Resilient response to public failure"
                ]
              },
              {
                title: "Institutional Architecture",
                body: "The mission operated through a tripartite structure enabling adolescent-led execution:",
                bullets: [
                  "The school provided the student research team",
                  "The research institute delivered pedagogical scaffolding and regulatory navigation",
                  "TM2Space contributed technical architecture and launch integration"
                ]
              }
            ]
          },
          right: {
            panels: [
              {
                title: "Key Finding",
                citation: "The case argues that valorization emerges from the authenticity of the challenge, not the success of the outcome."
              }
            ]
          }
        },
        {
          id: "saparya-discussion",
          type: "twoColumn",
          compact: true,
          left: {
            sections: [
              {
                title: "Discussion — Conference Session Context",
                body: "The presentation was delivered under the session theme \"Serving the Future\", examining how adolescents develop through purposeful, real-world work. The Blue Blocks case demonstrated that adolescents can undertake the full lifecycle of a professional aerospace mission, engaging with domain experts as part of their prepared environment while assuming real responsibility within a collaborative community."
              },
              {
                title: "Implications for Montessori Secondary Education",
                body: "The case study suggests that valorization does not require insulation from failure. The PSLV-C62 Stage 4 anomaly, a public, high-stakes failure beyond the students' control, became itself a pedagogical event. Student responses documented in the case study indicate that authentic engagement with uncertainty may strengthen rather than undermine the valorization process."
              }
            ]
          },
          right: {
            panels: [
              {
                title: "Cross-References",
                links: [
                  { label: "Patent Registry", href: "/patents" },
                  { label: "Governance", href: "/governance" },
                  { label: "Downloads", href: "/downloads" },
                  { label: "Publications Index", href: "/publications" }
                ]
              }
            ]
          }
        },
        {
          id: "saparya-acknowledgments",
          type: "textBlock",
          header: "Acknowledgments",
          body: "The authors acknowledge:\n\n• IN-SPACe for mission authorization\n• ISRO for payload integration and Mission Control access\n• The Indian Montessori Foundation (IMF)\n• Association Montessori Internationale (AMI)\n• Mission advisors who treated adolescent work with professional rigor"
        },
        {
          id: "saparya-supplementary",
          type: "twoColumn",
          compact: true,
          left: {
            sections: [
              {
                title: "Supplementary Materials",
                body: "Conference Materials:",
                bullets: [
                  "Saparya 7th National Montessori Conference Booklet (Mumbai, 23–24 January 2026)",
                  "Presentation Abstract (Public Version)"
                ]
              },
              {
                title: "Authors",
                body: "Gorinta, Sanjay Ramaraju · Padhy, Sanshray · Ponnala, Sreshta · Rudraraju, Ashrith · Reddy, Atla Ashrith · Kumar, Bikki Maneesh · Goyal, Saachi · Hussain Kagalwalla, Ummehani · Mehta, Aahan Hemal · Gupta, Amaira · Sunkara, Dhruti · Adusumilli, Karthikeya · Aditya Rao, Pratheetha · Vijaya Krishna, Ranvir · Reddy, Bolusani Varun · Satya Rallapalli, Viaan · Agarwal, Vedika\n\nProject Leader:\nMr. Pavan Goyal (Founder, Blue Blocks; Trustee, Indian Montessori Foundation)"
              }
            ]
          },
          right: {
            panels: [
              {
                title: "How to Cite (APA)",
                citation: "Gorinta, S. R., Padhy, S., Ponnala, S., Rudraraju, A., Reddy, A. A., Kumar, B. M., Goyal, S., Hussain Kagalwalla, U., Mehta, A. H., Gupta, A., Sunkara, D., Adusumilli, K., Aditya Rao, P., Vijaya Krishna, R., Reddy, B. V., Satya Rallapalli, V., & Agarwal, V. (2026). Valorization in orbit — An adolescent CubeSat mission [Conference presentation]. Saparya 7th National Montessori Conference, Mumbai, India. https://doi.org/10.5281/zenodo.18195108"
              },
              {
                title: "Downloads",
                links: [
                  { label: "Conference Booklet (PDF)", href: "/downloads", download: false },
                  { label: "Presentation Slides (PDF)", href: "/downloads", download: false }
                ]
              }
            ]
          }
        },
        {
          id: "saparya-faq",
          type: "accordion",
          header: "Frequently Asked Questions",
          items: [
            {
              q: "Was the SBB-1 mission successful?",
              a: "The SBB-1 payload achieved full flight qualification and was integrated aboard ISRO PSLV-C62. While the launch vehicle's Stage 4 failed at T+847 seconds (preventing orbital deployment), the pedagogical mission succeeded: students experienced genuine engineering stakes and valorization of their work."
            },
            {
              q: "Can other schools replicate this framework?",
              a: "Yes. The SAPARYA framework is designed to be replicable. The case study includes implementation guidelines and the core principles can be adapted to various high-stakes project types beyond aerospace."
            },
            {
              q: "How can I access the full dataset?",
              a: "The published case study includes aggregate findings. De-identified individual-level data requires IRB approval and a signed Data Use Agreement. Apply through the Collaborate page."
            },
            {
              q: "Can media cite this document?",
              a: "Yes, with DOI attribution."
            }
          ]
        },
        {
          id: "saparya-archival-note",
          type: "textBlock",
          variant: "muted",
          body: "This record is maintained as part of the Blue Blocks Micro Research Institute open archival framework to support governance transparency, citation permanence, and research continuity."
        },
        {
          id: "saparya-related",
          type: "relatedCards",
          header: "Related Registry",
          cards: [
            { title: "Methodology", description: "Lab-to-Launch framework.", icon: "publication", href: "/methodology" },
            { title: "Patents", description: "Student IP registry.", icon: "patent", href: "/patents" },
            { title: "Governance", description: "Institutional oversight.", icon: "book", href: "/governance" },
            { title: "Downloads", description: "All documents.", icon: "default", href: "/downloads" }
          ]
        }
      ]
    },

    "/publications/citation-standards": {
      title: "Citation Standards & Guide",
      metaDescription: "Blue Blocks Micro Research Institute citation standards and guide for affiliated publications and datasets.",
      seo: {
        title: "Citation Standards & Guide | Blue Blocks Micro Research Institute",
        canonical: "https://siddheshv1.lovable.app/publications/citation-standards",
        robots: "noindex,nofollow,noarchive,nosnippet",
        openGraph: {
          type: "website",
          url: "https://siddheshv1.lovable.app/publications/citation-standards",
          title: "Citation Standards & Guide",
          description: "Policy requirements for all affiliated publications and datasets."
        }
      },
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Citation Standards & Guide",
          url: "https://siddheshv1.lovable.app/publications/citation-standards",
          isPartOf: { "@type": "WebSite", url: "https://siddheshv1.lovable.app/" }
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://siddheshv1.lovable.app/" },
            { "@type": "ListItem", position: 2, name: "Publications", item: "https://siddheshv1.lovable.app/publications" },
            { "@type": "ListItem", position: 3, name: "Citation Standards", item: "https://siddheshv1.lovable.app/publications/citation-standards" }
          ]
        }
      ],
      sections: [
        {
          id: "citation-hero",
          type: "hero",
          variant: "publication",
          headline: "Citation Standards & Guide",
          subheadline: "Blue Blocks Micro Research Institute — Policy requirements for all affiliated publications and datasets.",
          image: {
            src: "/src/assets/banners/publications-doi.jpg",
            alt: "Citation standards",
            variant: "hero",
            privacyBlur: false
          }
        },
        {
          id: "citation-standards",
          type: "textBlock",
          header: "Citation Standards",
          body: "To maintain methodological consistency across our 15-year longitudinal research program, all affiliated publications and datasets must cite the Institute's foundational methodology and dataset specifications."
        },
        {
          id: "citation-requirements",
          type: "grid3",
          header: "Requirements",
          items: [
            {
              title: "Foundational Citations",
              icon: "file",
              body: "Retrieve current foundational DOIs from our primary Zenodo community page and include them in your references."
            },
            {
              title: "Digital Archiving",
              icon: "archive",
              body: "Add DOIs under \"Related Identifiers\" using \"References\" or \"IsSupplementedBy.\""
            },
            {
              title: "Researcher Identity",
              icon: "users",
              body: "Link approved ORCID iD to outputs."
            }
          ]
        },
        {
          id: "citation-adherence",
          type: "textBlock",
          variant: "muted",
          body: "Adherence ensures contributions map accurately to the Blue Blocks research legacy."
        },
        {
          id: "citation-guide-methodology",
          type: "twoColumn",
          compact: true,
          left: {
            sections: [
              {
                title: "Citing Methodology",
                body: "Blue Blocks Micro Research Institute. (2025).\nMicro Research Methodology: A Framework for Embedded Educational Research (Version 2.0).\nZenodo.\nhttps://doi.org/10.5281/zenodo.XXXXXXX"
              },
              {
                title: "Citing Datasets",
                body: "Blue Blocks Micro Research Institute. (2025).\nMicro Dataset Specification (Version 1.0).\nZenodo.\nhttps://doi.org/10.5281/zenodo.XXXXXXX"
              }
            ]
          },
          right: {
            panels: [
              {
                title: "Formatting Requirements",
                citation: "• Include both DOIs in references\n• Add under \"Related Identifiers\"\n• Link ORCID iD"
              },
              {
                title: "Why This Matters",
                citation: "Consistent citation builds an interconnected evidence base. Proper attribution ensures every contribution maps accurately to the Blue Blocks research legacy and supports longitudinal traceability across the 15-year dataset."
              }
            ]
          }
        },
        {
          id: "citation-related",
          type: "relatedCards",
          header: "Related",
          cards: [
            { title: "Publications", description: "Research docket.", icon: "publication", href: "/publications" },
            { title: "Methodology", description: "Research protocols.", icon: "methodology", href: "/methodology" },
            { title: "Downloads", description: "Framework documents.", icon: "download", href: "/downloads" }
          ]
        }
      ]
    },

    // ==================== PATENTS DETAIL PAGES ====================
    "/patents/automated-security-uav": {
      title: "Patent Portfolio : System for Automated Security (UAV)",
      metaDescription: "Patent filing for System for Automated Security UAV — a responsive aerial surveillance system developed by Blue Blocks Micro Research Institute students.",
      seo: {
        title: "Patent Portfolio : System for Automated Security (UAV) | Patents | Blue Blocks Micro Research Institute",
        canonical: "https://siddheshv1.lovable.app/patents/automated-security-uav",
        robots: "noindex,nofollow,noarchive,nosnippet",
        openGraph: {
          type: "article",
          url: "https://siddheshv1.lovable.app/patents/automated-security-uav",
          title: "Patent: System for Automated Security (UAV)",
          description: "Utility patent for a responsive aerial surveillance system."
        }
      },
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: "System for Automated Security (UAV)",
          description: "A responsive aerial surveillance system designed to mitigate latency in emergency security operations.",
          identifier: "202041031343",
          creator: { "@type": "Organization", name: "Blue Blocks Micro Research Institute" }
        }
      ],
      stickyCta: { label: "Download Patent PDF", href: "/downloads/security-uav-patent.pdf", type: "download" },
      sections: [
        {
          id: "patent-hero", type: "hero", variant: "publication",
          headline: "Patent Portfolio : System for Automated Security (UAV)",
          subheadline: "Patent Pending · Application No. 202041031343 · Robotics / Unnamed Aerial Systems (UAS)",
          image: { src: "/src/assets/placeholders/labs/drone-centre.jpg", alt: "Automated Security UAV", variant: "hero" }
        },
        {
          id: "patent-meta", type: "metaStrip",
          items: [
            { label: "Filing Date", value: "July 22, 2020" },
            { label: "Status", value: "Pending" },
            { label: "Category", value: "Robotics / Unnamed Aerial Systems (UAS)" },
            { label: "Age Group", value: "Adolescent Researchers (12-16 years)" }
          ]
        },
        {
          id: "patent-abstract", type: "twoColumn", compact: true,
          left: { sections: [
            { title: "Patent Abstract", body: "A responsive aerial surveillance system designed to mitigate latency in emergency security operations. The invention comprises a drone-based security unit capable of receiving encrypted alert signals from a user device, automatically triangulating the subject's geolocation. Upon arrival, the unit's controller executes a decision matrix based on sensor fusion data, including acoustic and visual inputs, to perform safety actions ranging from suspect apprehension to environmental illumination and alarm activation." },
            { title: "Inventors", body: "Aryan Oleti (Student inventor)\nHasith Sankuri (student inventor)\nAkshat Gupta (student inventor)" },
            { title: "Application Number", body: "202041031343" }
          ]},
          right: { panels: [
            { title: "Registry Links", links: [
              { label: "Patent Registry", href: "/patents" },
              { label: "Publications", href: "/publications" },
              { label: "Downloads", href: "/downloads" }
            ]},
            { title: "Download", links: [
              { label: "Download PDF", href: "/downloads/security-uav-patent.pdf", external: true }
            ]}
          ]}
        },
        {
          id: "patent-specs", type: "comparisonTable",
          header: "Technical Specifications",
          columns: ["Component Subsystem", "Hardware / Operational Parameters"],
          rows: [
            ["Security Unit Architecture", "Unmanned Aerial Vehicle (UAV); Multi-rotor or Fixed-wing configuration with retractable aerodynamic wings."],
            ["Sensor Array", "Gyroscope, MEMS Accelerometer, Acoustic Sensors, Thermal/Heat Sensors, Proximity Sensors."],
            ["Avionics & Compute", "Onboard Controller (RISC/CISC Architecture) running User Identification Module and Gesture Sensing Module."],
            ["Navigation & Tracking", "GPS/GNSS Coordinates, Relative Positioning Algorithms, Real-time Image Recognition for target locking."],
            ["Safety Payloads", "Integrated deterrents including: Taser, Pepper Spray, High-Velocity Jet Spray, Gas Emitter, and Laser Tracking Systems."],
            ["Communication Protocol", "Wireless Network Integration (4G/5G/WiMAX) for bi-directional telemetry between User Device, UAV, and Remote Server."]
          ]
        },
        {
          id: "patent-citation", type: "twoColumn", compact: true,
          left: { sections: [
            { title: "How to Cite", body: "Blue Blocks Micro Research Institute. (2020). System for Automated Security (UAV) [Patent application No. 202041031343]. Indian Patent Office." }
          ]},
          right: { panels: [
            { title: "Cross-References", links: [
              { label: "Methodology", href: "/methodology" },
              { label: "Governance", href: "/governance" },
              { label: "Downloads", href: "/downloads" }
            ]}
          ]}
        },
        {
          id: "patent-faq", type: "accordion", header: "Frequently Asked Questions",
          items: [
            { q: "Who owns this patent?", a: "Student inventors retain IP ownership. The Institute facilitates the filing process but does not claim ownership." },
            { q: "How is the patent verified?", a: "All filings undergo institutional review board oversight before submission." },
            { q: "Is licensing available?", a: "Licensing inquiries are handled on a case-by-case basis through the Contact page, with involvement of the student inventors and their families." },
            { q: "How is student privacy maintained?", a: "Minor protection protocols are maintained throughout the filing and publication process." }
          ]
        },
        {
          id: "patent-archival", type: "textBlock", variant: "muted",
          body: "This record is maintained as part of the Blue Blocks Micro Research Institute open archival framework to support governance transparency, citation permanence, and research continuity."
        },
        {
          id: "patent-related", type: "relatedCards", header: "Related Registry",
          cards: [
            { title: "Publications", description: "Research docket.", icon: "publication", href: "/publications" },
            { title: "Methodology", description: "Lab-to-Launch framework.", icon: "publication", href: "/methodology" },
            { title: "Governance", description: "Institutional oversight.", icon: "book", href: "/governance" },
            { title: "Downloads", description: "All documents.", icon: "default", href: "/downloads" }
          ]
        }
      ]
    },

    "/patents/borehole-rescue-system": {
      title: "Patent Portfolio : Borehole Rescue System (BRS)",
      metaDescription: "Patent filing for Borehole Rescue System — a vertical-access rescue apparatus developed by Blue Blocks Micro Research Institute students.",
      seo: {
        title: "Patent Portfolio : Borehole Rescue System (BRS) | Patents | Blue Blocks Micro Research Institute",
        canonical: "https://siddheshv1.lovable.app/patents/borehole-rescue-system",
        robots: "noindex,nofollow,noarchive,nosnippet"
      },
      schemas: [
        { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://siddheshv1.lovable.app/" },
          { "@type": "ListItem", position: 2, name: "Patents", item: "https://siddheshv1.lovable.app/patents" },
          { "@type": "ListItem", position: 3, name: "Borehole Rescue System", item: "https://siddheshv1.lovable.app/patents/borehole-rescue-system" }
        ]}
      ],
      stickyCta: { label: "Download Patent PDF", href: "/downloads/borehole-rescue-patent.pdf", type: "download" },
      sections: [
        {
          id: "patent-hero", type: "hero", variant: "publication",
          headline: "Patent Portfolio : Borehole Rescue System (BRS)",
          subheadline: "Patent Pending · Application No. 202041027026 · Robotics / Subterranean Rescue Systems",
          image: { src: "/src/assets/placeholders/labs/avionics.jpg", alt: "Borehole Rescue System", variant: "hero" }
        },
        {
          id: "patent-meta", type: "metaStrip",
          items: [
            { label: "Filing Date", value: "July 25, 2020" },
            { label: "Status", value: "Pending" },
            { label: "Category", value: "Robotics / Subterranean Rescue Systems" },
            { label: "Age Group", value: "Adolescent Researchers (12-16 years)" }
          ]
        },
        {
          id: "patent-abstract", type: "twoColumn", compact: true,
          left: { sections: [
            { title: "Patent Abstract", body: "The present disclosure details a vertical-access rescue apparatus featuring an adaptive aerial platform capable of contracting its physical footprint to traverse narrow subterranean shafts. Equipped with anti-collision Lidar sensors and a specialized retention mechanism, the device autonomously stabilizes within the borehole environment. It provides a secure, mechanically actuated platform for lifting subjects to the surface, significantly reducing the operational risks associated with conventional parallel-pit rescue techniques." },
            { title: "Inventors", body: "Dhairya Singh Bangari (Student inventor)\nSanshray Padhy (Student inventor)\nAyushmaan (Student inventor)" },
            { title: "Application Number", body: "202041027026" }
          ]},
          right: { panels: [
            { title: "Registry Links", links: [
              { label: "Patent Registry", href: "/patents" },
              { label: "Publications", href: "/publications" },
              { label: "Downloads", href: "/downloads" }
            ]},
            { title: "Download", links: [
              { label: "Download PDF", href: "/downloads/borehole-rescue-patent.pdf", external: true }
            ]}
          ]}
        },
        {
          id: "patent-specs", type: "comparisonTable",
          header: "Technical Specifications",
          columns: ["Component Subsystem", "Hardware / Operational Parameters"],
          rows: [
            ["Chassis Architecture", "Unmanned Aerial Vehicle (UAV) configuration (Quadcopter/Drone) featuring Retractable Wings with a Scissor Hinge Mechanism."],
            ["Avionics & Compute", "Onboard Microcontroller unit (CISC/RISC architecture) processing real-time control signals via wireless telemetry (LAN/WAN/4G)."],
            ["Sensor Array", "Anti-Collision Sensors (Proximity/Lidar), Gas Detection Modules (for poisonous subterranean gases), Gyroscopes, and MEMS Accelerometers."],
            ["Vision & Navigation", "Low-latency Camera module with Noiseless Capturing capabilities; supports Thermal and Infrared imaging for low-light subterranean visibility."],
            ["Payload & Actuation", "Foldable Platform for subject retention; automated expansion/retraction logic driven by borehole dimensional analysis."],
            ["Communication", "Bi-directional audio transmission (Sound Transmitter/Receiver) enabling direct communication between the surface operator and the subject."]
          ]
        },
        {
          id: "patent-citation", type: "twoColumn", compact: true,
          left: { sections: [
            { title: "How to Cite", body: "Blue Blocks Micro Research Institute. (2020). Borehole Rescue System (BRS) [Patent application No. 202041027026]. Indian Patent Office." }
          ]},
          right: { panels: [
            { title: "Cross-References", links: [
              { label: "Methodology", href: "/methodology" },
              { label: "Governance", href: "/governance" },
              { label: "Downloads", href: "/downloads" }
            ]}
          ]}
        },
        {
          id: "patent-faq", type: "accordion", header: "Frequently Asked Questions",
          items: [
            { q: "Who owns this patent?", a: "Student inventors retain IP ownership. The Institute facilitates the filing process but does not claim ownership." },
            { q: "How is the patent verified?", a: "All filings undergo institutional review board oversight before submission." },
            { q: "Is licensing available?", a: "Licensing inquiries are handled on a case-by-case basis through the Contact page." },
            { q: "How is student privacy maintained?", a: "Minor protection protocols are maintained throughout the filing and publication process." }
          ]
        },
        {
          id: "patent-archival", type: "textBlock", variant: "muted",
          body: "This record is maintained as part of the Blue Blocks Micro Research Institute open archival framework to support governance transparency, citation permanence, and research continuity."
        },
        {
          id: "patent-related", type: "relatedCards", header: "Related Registry",
          cards: [
            { title: "Publications", description: "Research docket.", icon: "publication", href: "/publications" },
            { title: "Methodology", description: "Lab-to-Launch framework.", icon: "publication", href: "/methodology" },
            { title: "Governance", description: "Institutional oversight.", icon: "book", href: "/governance" },
            { title: "Downloads", description: "All documents.", icon: "default", href: "/downloads" }
          ]
        }
      ]
    },

    "/patents/contactless-delivery-system": {
      title: "Patent Portfolio : Autonomous Contactless Delivery System (ACDS)",
      metaDescription: "Patent filing for Autonomous Contactless Delivery System — an autonomous logistics ecosystem engineered for contactless distribution during high-risk contagion scenarios.",
      seo: {
        title: "Patent Portfolio : Autonomous Contactless Delivery System (ACDS) | Patents | Blue Blocks Micro Research Institute",
        canonical: "https://siddheshv1.lovable.app/patents/contactless-delivery-system",
        robots: "noindex,nofollow,noarchive,nosnippet"
      },
      schemas: [
        { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://siddheshv1.lovable.app/" },
          { "@type": "ListItem", position: 2, name: "Patents", item: "https://siddheshv1.lovable.app/patents" },
          { "@type": "ListItem", position: 3, name: "Contactless Delivery System", item: "https://siddheshv1.lovable.app/patents/contactless-delivery-system" }
        ]}
      ],
      sections: [
        {
          id: "patent-hero", type: "hero", variant: "publication",
          headline: "Patent Portfolio : Autonomous Contactless Delivery System (ACDS)",
          subheadline: "Patent Pending · Robotics / Autonomous Logistics / Public Health Engineering",
          image: { src: "/src/assets/placeholders/labs/drone-prototype.jpg", alt: "Contactless Delivery System", variant: "hero" }
        },
        {
          id: "patent-meta", type: "metaStrip",
          items: [
            { label: "Filing Date", value: "June 25, 2020" },
            { label: "Status", value: "Pending" },
            { label: "Category", value: "Robotics / Autonomous Logistics / Public Health Engineering" },
            { label: "Age Group", value: "Adolescent Researchers (12-16 years)" }
          ]
        },
        {
          id: "patent-abstract", type: "twoColumn", compact: true,
          left: { sections: [
            { title: "Patent Abstract", body: "An autonomous logistics ecosystem engineered to facilitate contactless distribution during high-risk contagion scenarios. The architecture integrates a mobile Delivery Unit equipped with a multi-axis robotic arm and an onboard sanitation sprinkler system for the dynamic disinfection of essential goods. Controlled via a centralized Server Arrangement, the unit employs computer vision algorithms for biological quality inspection (ripeness/defects) and GPS-Autonomous telemetry to execute sterile, human-independent supply chain operations." },
            { title: "Inventors", body: "Akira Mani (Student Inventor)\nAditi Vuppala (Student Inventor)\nUma V Jayaraman (Student Inventor)\nNayonika Vadlamudi (Student Inventor)" },
            { title: "Application Number", body: "—" }
          ]},
          right: { panels: [
            { title: "Registry Links", links: [
              { label: "Patent Registry", href: "/patents" },
              { label: "Publications", href: "/publications" },
              { label: "Downloads", href: "/downloads" }
            ]},
            { title: "Download", links: [
              { label: "Download PDF", href: "/downloads/acds-patent.pdf", external: true }
            ]}
          ]}
        },
        {
          id: "patent-specs", type: "comparisonTable",
          header: "Technical Specifications",
          columns: ["Component Subsystem", "Hardware / Operational Parameters"],
          rows: [
            ["Chassis Architecture", "Electromechanical Delivery Unit with GPS-Autonomous Control; capable of 3D movement without ground operator intervention."],
            ["Manipulation", "Programmable Robotic Arm featuring servo-actuated Upper and Lower Claws (Gripping Structure) for secure payload handling."],
            ["Sanitation Protocol", "Integrated Sprinkler/Atomizer System dispensing variable concentration fluids (0.1-10% Sodium Hypochlorite, Phenol) for surface disinfection."],
            ["Vision & Compute", "High-performance Digital Camera utilizing Machine Learning Algorithms for object recognition and quality assurance (Freshness/Ripeness analysis)."],
            ["Navigation Sensors", "Sensor fusion array including MEMS Accelerometers, Gyroscopes, Collision Sensors, and Proximity Sensors."],
            ["Payload Integrity", "Thermally Insulated Storage compartment to maintain payload sanctity against external pressure/temperature variables."]
          ]
        },
        {
          id: "patent-citation", type: "twoColumn", compact: true,
          left: { sections: [
            { title: "How to Cite", body: "Blue Blocks Micro Research Institute. (2020). Autonomous Contactless Delivery System (ACDS) [Patent application]. Indian Patent Office." }
          ]},
          right: { panels: [
            { title: "Cross-References", links: [
              { label: "Methodology", href: "/methodology" },
              { label: "Governance", href: "/governance" },
              { label: "Downloads", href: "/downloads" }
            ]}
          ]}
        },
        {
          id: "patent-faq", type: "accordion", header: "Frequently Asked Questions",
          items: [
            { q: "Who owns this patent?", a: "Student inventors retain IP ownership. The Institute facilitates the filing process but does not claim ownership." },
            { q: "How is the patent verified?", a: "All filings undergo institutional review board oversight before submission." },
            { q: "Is licensing available?", a: "Licensing inquiries are handled on a case-by-case basis through the Contact page." },
            { q: "How is student privacy maintained?", a: "Minor protection protocols are maintained throughout the filing and publication process." }
          ]
        },
        {
          id: "patent-archival", type: "textBlock", variant: "muted",
          body: "This record is maintained as part of the Blue Blocks Micro Research Institute open archival framework to support governance transparency, citation permanence, and research continuity."
        },
        {
          id: "patent-related", type: "relatedCards", header: "Related Registry",
          cards: [
            { title: "Publications", description: "Research docket.", icon: "publication", href: "/publications" },
            { title: "Methodology", description: "Lab-to-Launch framework.", icon: "publication", href: "/methodology" },
            { title: "Governance", description: "Institutional oversight.", icon: "book", href: "/governance" },
            { title: "Downloads", description: "All documents.", icon: "default", href: "/downloads" }
          ]
        }
      ]
    },

    "/patents/autonomous-medical-assistance-system": {
      title: "Patent Portfolio : Autonomous Medical Assistance System (AMAS)",
      metaDescription: "Patent filing for Autonomous Medical Assistance System — a telerobotic intervention platform designed for contactless medical support during epidemiological crises.",
      seo: {
        title: "Patent Portfolio : Autonomous Medical Assistance System (AMAS) | Patents | Blue Blocks Micro Research Institute",
        canonical: "https://siddheshv1.lovable.app/patents/autonomous-medical-assistance-system",
        robots: "noindex,nofollow,noarchive,nosnippet"
      },
      schemas: [
        { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://siddheshv1.lovable.app/" },
          { "@type": "ListItem", position: 2, name: "Patents", item: "https://siddheshv1.lovable.app/patents" },
          { "@type": "ListItem", position: 3, name: "Autonomous Medical Assistance System", item: "https://siddheshv1.lovable.app/patents/autonomous-medical-assistance-system" }
        ]}
      ],
      sections: [
        {
          id: "patent-hero", type: "hero", variant: "publication",
          headline: "Patent Portfolio : Autonomous Medical Assistance System (AMAS)",
          subheadline: "Patent Pending · Application No. 202041027075 · Medical Robotics / Telerobotics / Epidemiology",
          image: { src: "/src/assets/placeholders/labs/space-lab.jpg", alt: "Autonomous Medical Assistance System", variant: "hero" }
        },
        {
          id: "patent-meta", type: "metaStrip",
          items: [
            { label: "Filing Date", value: "June 25, 2020" },
            { label: "Status", value: "Pending" },
            { label: "Category", value: "Medical Robotics / Telerobotics / Epidemiology" },
            { label: "Age Group", value: "Adolescent Researchers (12-16 years)" }
          ]
        },
        {
          id: "patent-abstract", type: "twoColumn", compact: true,
          left: { sections: [
            { title: "Patent Abstract", body: "A telerobotic intervention platform designed for contactless medical support during epidemiological crises. The system comprises a deployable Medical Unit integrated with variable-geometry robotic arms for the sterile retrieval of biological specimens and the precise distribution of vaccines. Guided by a sensor fusion array and high-fidelity imaging devices, the unit executes autonomous navigation protocols while utilizing an onboard Sanitation Arrangement (UVGI and chemical atomizers) to enforce sterility in contaminated zones." },
            { title: "Inventors", body: "Trisha Mohit Sachanandani (Student Inventor)\nAnanya (Student Inventor)\nAarini Khadse (Student Inventor)\nAnya (Student Inventor)" },
            { title: "Application Number", body: "202041027075" }
          ]},
          right: { panels: [
            { title: "Registry Links", links: [
              { label: "Patent Registry", href: "/patents" },
              { label: "Publications", href: "/publications" },
              { label: "Downloads", href: "/downloads" }
            ]},
            { title: "Download", links: [
              { label: "Download PDF", href: "/downloads/amas-patent.pdf", external: true }
            ]}
          ]}
        },
        {
          id: "patent-specs", type: "comparisonTable",
          header: "Technical Specifications",
          columns: ["Component Subsystem", "Hardware / Operational Parameters"],
          rows: [
            ["Chassis Architecture", "Autonomous Medical Unit with GPS-Guided Navigation and Flight Management Systems."],
            ["Manipulation", "Retractable Robotic Arms with detachable end-effectors tailored for handling fragile medical entities (vials/syringes)."],
            ["Sterilization Protocol", "Dual-mode Sanitation Arrangement: UVGI System (UVC Radiation) for DNA disruption and Sprinkler/Atomizer for chemical disinfection (Sodium Hypochlorite)."],
            ["Vision & Diagnostics", "RGB-D Cameras with Machine Learning algorithms for patient condition analysis (Health Statistics/Wound Severity) and surface irregularity detection."],
            ["Sensor Fusion", "Integrated array including Proximity Sensors, Motion Trackers, Gyroscopes, and Accelerometers for collision avoidance and stability."],
            ["Payload Integrity", "Thermally Insulated Storage compartment ensuring bio-specimen viability and vaccine cold-chain maintenance."]
          ]
        },
        {
          id: "patent-citation", type: "twoColumn", compact: true,
          left: { sections: [
            { title: "How to Cite", body: "Blue Blocks Micro Research Institute. (2020). Autonomous Medical Assistance System (AMAS) [Patent application No. 202041027075]. Indian Patent Office." }
          ]},
          right: { panels: [
            { title: "Cross-References", links: [
              { label: "Methodology", href: "/methodology" },
              { label: "Governance", href: "/governance" },
              { label: "Downloads", href: "/downloads" }
            ]}
          ]}
        },
        {
          id: "patent-faq", type: "accordion", header: "Frequently Asked Questions",
          items: [
            { q: "Who owns this patent?", a: "Student inventors retain IP ownership. The Institute facilitates the filing process but does not claim ownership." },
            { q: "How is the patent verified?", a: "All filings undergo institutional review board oversight before submission." },
            { q: "Is licensing available?", a: "Licensing inquiries are handled on a case-by-case basis through the Contact page." },
            { q: "How is student privacy maintained?", a: "Minor protection protocols are maintained throughout the filing and publication process." }
          ]
        },
        {
          id: "patent-archival", type: "textBlock", variant: "muted",
          body: "This record is maintained as part of the Blue Blocks Micro Research Institute open archival framework to support governance transparency, citation permanence, and research continuity."
        },
        {
          id: "patent-related", type: "relatedCards", header: "Related Registry",
          cards: [
            { title: "Publications", description: "Research docket.", icon: "publication", href: "/publications" },
            { title: "Methodology", description: "Lab-to-Launch framework.", icon: "publication", href: "/methodology" },
            { title: "Governance", description: "Institutional oversight.", icon: "book", href: "/governance" },
            { title: "Downloads", description: "All documents.", icon: "default", href: "/downloads" }
          ]
        }
      ]
    },

    "/patents/autonomous-health-monitoring-system": {
      title: "Patent Portfolio : Autonomous Health Monitoring System (AHMS)",
      metaDescription: "Patent filing for Autonomous Health Monitoring System — a remote epidemiological surveillance network developed by Blue Blocks Micro Research Institute students.",
      seo: {
        title: "Patent Portfolio : Autonomous Health Monitoring System (AHMS) | Patents | Blue Blocks Micro Research Institute",
        canonical: "https://siddheshv1.lovable.app/patents/autonomous-health-monitoring-system",
        robots: "noindex,nofollow,noarchive,nosnippet"
      },
      schemas: [
        { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://siddheshv1.lovable.app/" },
          { "@type": "ListItem", position: 2, name: "Patents", item: "https://siddheshv1.lovable.app/patents" },
          { "@type": "ListItem", position: 3, name: "Autonomous Health Monitoring System", item: "https://siddheshv1.lovable.app/patents/autonomous-health-monitoring-system" }
        ]}
      ],
      sections: [
        {
          id: "patent-hero", type: "hero", variant: "publication",
          headline: "Patent Portfolio : Autonomous Health Monitoring System (AHMS)",
          subheadline: "Patent Pending · Medical Robotics / Public Health Surveillance / Bio-Telemetry",
          image: { src: "/src/assets/placeholders/labs/drone-centre.jpg", alt: "Autonomous Health Monitoring System", variant: "hero" }
        },
        {
          id: "patent-meta", type: "metaStrip",
          items: [
            { label: "Filing Date", value: "June 25, 2020" },
            { label: "Status", value: "Pending" },
            { label: "Category", value: "Medical Robotics / Public Health Surveillance / Bio-Telemetry" },
            { label: "Age Group", value: "Adolescent Researchers (12-16 years)" }
          ]
        },
        {
          id: "patent-abstract", type: "twoColumn", compact: true,
          left: { sections: [
            { title: "Patent Abstract", body: "A remote epidemiological surveillance network designed for the mass filtration of asymptomatic carriers during infectious disease outbreaks. The system deploys an autonomous Monitoring Unit equipped with infrared thermography and video plethysmography modules to capture non-invasive biometric data (body temperature, heart rate). Governed by a Server Arrangement with pre-loaded machine learning logic, the unit executes GPS-Autonomous navigation to patrol high-density zones, identifying subjects exceeding pre-determined thermal thresholds." },
            { title: "Inventors", body: "Shourya Cheruku (Student Inventor)\nAnshul A. (Student Inventor)\nNihal Gautham (Student Inventor)\nVivasvath (Student Inventor)" },
            { title: "Application Number", body: "\u2014" }
          ]},
          right: { panels: [
            { title: "Registry Links", links: [
              { label: "Patent Registry", href: "/patents" },
              { label: "Publications", href: "/publications" },
              { label: "Downloads", href: "/downloads" }
            ]},
            { title: "Download", links: [
              { label: "Download PDF", href: "/downloads/ahms-patent.pdf", external: true }
            ]}
          ]}
        },
        {
          id: "patent-specs", type: "comparisonTable",
          header: "Technical Specifications",
          columns: ["Component Subsystem", "Hardware / Operational Parameters"],
          rows: [
            ["Chassis Architecture", "Mobile Monitoring Unit (UAV/Drone configuration) capable of GPS-Autonomous Control and obstacle avoidance via proximity sensing."],
            ["Biometric Sensors", "Infrared Thermometer for thermal scanning; Video Plethysmography algorithms for remote heart rate/breathing rate analysis."],
            ["Vision & Recognition", "Imaging Instrument (RGB/RGB-D Camera) integrated with Facial Recognition Modules for subject identification and demographic analysis (Age/Gender)."],
            ["Compute Logic", "Onboard Processor (RISC/CISC) running Machine Learning Algorithms to compensate for environmental variables (ambient temperature/pressure)."],
            ["Navigation", "Sensor fusion array including Gyroscopes, Accelerometers, and Motion Trackers for stable flight and \"Point of Origin\" return protocols."],
            ["Response System", "Audio-visual feedback system (Sound Emitting Device) to issue real-time health alerts to subjects exceeding bio-parameter thresholds."]
          ]
        },
        {
          id: "patent-citation", type: "twoColumn", compact: true,
          left: { sections: [
            { title: "How to Cite", body: "Blue Blocks Micro Research Institute. (2020). Autonomous Health Monitoring System (AHMS) [Patent application]. Indian Patent Office." }
          ]},
          right: { panels: [
            { title: "Cross-References", links: [
              { label: "Methodology", href: "/methodology" },
              { label: "Governance", href: "/governance" },
              { label: "Downloads", href: "/downloads" }
            ]}
          ]}
        },
        {
          id: "patent-faq", type: "accordion", header: "Frequently Asked Questions",
          items: [
            { q: "Who owns this patent?", a: "Student inventors retain IP ownership. The Institute facilitates the filing process but does not claim ownership." },
            { q: "How is the patent verified?", a: "All filings undergo institutional review board oversight before submission." },
            { q: "Is licensing available?", a: "Licensing inquiries are handled on a case-by-case basis through the Contact page." },
            { q: "How is student privacy maintained?", a: "Minor protection protocols are maintained throughout the filing and publication process." }
          ]
        },
        {
          id: "patent-archival", type: "textBlock", variant: "muted",
          body: "This record is maintained as part of the Blue Blocks Micro Research Institute open archival framework to support governance transparency, citation permanence, and research continuity."
        },
        {
          id: "patent-related", type: "relatedCards", header: "Related Registry",
          cards: [
            { title: "Publications", description: "Research docket.", icon: "publication", href: "/publications" },
            { title: "Methodology", description: "Lab-to-Launch framework.", icon: "publication", href: "/methodology" },
            { title: "Governance", description: "Institutional oversight.", icon: "book", href: "/governance" },
            { title: "Downloads", description: "All documents.", icon: "default", href: "/downloads" }
          ]
        }
      ]
    },

    // ==================== BOOKS DETAIL PAGES ====================
    "/books/lining-the-nest": {
      title: "Lining The Nest",
      metaDescription: "Lining The Nest - A guide for families and educators on building structured learning environments by Blue Blocks Micro Research Institute.",
      seo: {
        title: "Lining The Nest | Books | Blue Blocks Micro Research Institute",
        canonical: "https://siddheshv1.lovable.app/books/lining-the-nest",
        robots: "noindex,nofollow,noarchive,nosnippet",
        openGraph: {
          type: "book",
          url: "https://siddheshv1.lovable.app/books/lining-the-nest",
          title: "Lining The Nest",
          description: "A guide for families and educators on building structured learning environments."
        }
      },
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "Book",
          name: "Lining The Nest",
          url: "https://bb-researchv2.vercel.app/books/lining-the-nest",
          author: { "@type": "Person", name: "Pavan Goyal", affiliation: { "@type": "Organization", name: "Blue Blocks Micro Research Institute" } },
          numberOfPages: 280,
          inLanguage: "en",
          offers: {
            "@type": "Offer",
            url: "https://amzn.in/d/09xLf6FE",
            availability: "https://schema.org/InStock"
          },
          sameAs: ["https://amzn.in/d/09xLf6FE"]
        }
      ],
      sections: [
        {
          id: "book-hero",
          type: "hero",
          variant: "stark",
          headline: "Lining The Nest",
          subheadline: "A comprehensive guide for families and educators on building structured learning environments that foster innovation capacity from early childhood through adolescence. Drawing on 15 years of longitudinal observation at Blue Blocks Micro Research Institute.",
          primaryCta: { label: "Buy on Amazon", href: "https://amzn.in/d/09xLf6FE", external: true },
          secondaryCta: { label: "Download Sample Chapter", href: "/downloads/lining-the-nest-sample-chapter.pdf" },
          image: { src: "/src/assets/placeholders/card-default.jpg", alt: "Lining The Nest book cover", variant: "hero" }
        },
        {
          id: "book-meta",
          type: "metaStrip",
          items: [
            { label: "Format", value: "Paperback / Digital" },
            { label: "Pages", value: "280" },
            { label: "Author", value: "Pavan Goyal" },
            { label: "Publisher", value: "Blue Blocks Press" },
            { label: "Language", value: "English" },
            { label: "ISBN", value: "Pending" }
          ]
        },
        {
          id: "book-overview",
          type: "textBlock",
          header: "Overview",
          body: "Lining The Nest examines how structured environments support developmental responsibility over time. It emphasizes observation-led decision making, gradual autonomy, and continuity between home, school, and research environments.\n\nThe title references the metaphor of preparation: just as birds line their nests before eggs arrive, adults must prepare the environment before expecting children to innovate. The book argues that innovation capacity is not innate talent but an emergent property of well-structured environments."
        },
        {
          id: "book-content",
          type: "twoColumn",
          left: {
            header: "Key Themes",
            body: "The book is organized around five core themes:\n\n**Environment as behavioral scaffold:** How structured spaces shape behavior before instruction begins.\n\n**Structured independence:** Balancing freedom with clear boundaries to foster self-direction.\n\n**Responsibility transfer:** Moving ownership of decisions from adults to children over time.\n\n**Observation-led pedagogy:** Using systematic observation rather than testing to guide development.\n\n**Long-horizon developmental culture:** Building habits and capacities measured in years, not semesters."
          },
          right: {
            header: "Key Topics",
            items: [
              "Creating the prepared environment at home",
              "Scaffolding problem-solving without interference",
              "From play to invention: recognizing cognitive leaps",
              "Supporting adolescent agency and IP creation",
              "Integrating real-world constraints into learning",
              "The role of failure in building resilience",
              "Balancing structure and freedom"
            ],
            cta: { label: "View Author Profile", href: "/team/pavan-goyal" }
          }
        },
        {
          id: "book-purchase",
          type: "highlightBox",
          variant: "accent",
          header: "Purchase Options",
          body: "Lining The Nest is available in paperback and digital formats through Amazon India. International shipping available.",
          cta: { label: "Buy on Amazon", href: "https://amzn.in/d/09xLf6FE", external: true }
        },
        {
          id: "book-sample",
          type: "grid3",
          header: "Sample & Downloads",
          items: [
            {
              title: "Sample Chapter",
              icon: "download",
              body: "Preview Chapter 3: 'The Reasoning Child' to get a sense of the book's approach.",
              cta: { label: "Download PDF", href: "/downloads/lining-the-nest-sample-chapter.pdf" }
            },
            {
              title: "Author Profile",
              icon: "user",
              body: "Learn more about Pavan Goyal, AMI-certified educator and Principal Investigator.",
              cta: { label: "View Profile", href: "/team/pavan-goyal" }
            },
            {
              title: "Methodology",
              icon: "methodology",
              body: "Understand the research methodology that informs the book's recommendations.",
              cta: { label: "View Methodology", href: "/methodology" }
            }
          ]
        },
        {
          id: "book-faq",
          type: "accordion",
          header: "Frequently Asked Questions",
          items: [
            {
              q: "Where can I purchase this book?",
              a: "Lining The Nest is available on Amazon India. International shipping and digital formats are available."
            },
            {
              q: "Can I quote from this book?",
              a: "Yes, with proper attribution. Please cite using standard academic citation format referencing the author and publisher."
            },
            {
              q: "Are bulk orders available?",
              a: "Yes. For institutional or bulk orders, please reach out through our Contact page."
            }
          ]
        },
        {
          id: "book-related",
          type: "relatedCards",
          header: "Related",
          cards: [
            { title: "All Books", description: "Browse collection.", icon: "book", href: "/books" },
            { title: "Methodology", description: "Research protocols.", icon: "methodology", href: "/methodology" },
            { title: "Team", description: "Meet the author.", icon: "team", href: "/team/pavan-goyal" },
            { title: "Publications", description: "Research docket.", icon: "publication", href: "/publications" }
          ]
        }
      ]
    },

    // ==================== TEAM DETAIL PAGES ====================
    "/team/pavan-goyal": {
      title: "Pavan Goyal",
      metaDescription: "Profile of Pavan Goyal, Principal Investigator and Founder of Blue Blocks Micro Research Institute.",
      seo: {
        title: "Pavan Goyal | Team | Blue Blocks Micro Research Institute",
        canonical: "https://siddheshv1.lovable.app/team/pavan-goyal",
        robots: "noindex,nofollow,noarchive,nosnippet",
        openGraph: {
          type: "profile",
          url: "https://siddheshv1.lovable.app/team/pavan-goyal",
          title: "Pavan Goyal - Principal Investigator",
          description: "Profile of Pavan Goyal, Principal Investigator and Founder."
        }
      },
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Pavan Goyal",
          url: "https://siddheshv1.lovable.app/team/pavan-goyal",
          jobTitle: "Principal Investigator & Founder",
          worksFor: { "@type": "Organization", name: "Blue Blocks Micro Research Institute" }
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://siddheshv1.lovable.app/" },
            { "@type": "ListItem", position: 2, name: "Team", item: "https://siddheshv1.lovable.app/team" },
            { "@type": "ListItem", position: 3, name: "Pavan Goyal", item: "https://siddheshv1.lovable.app/team/pavan-goyal" }
          ]
        }
      ],
      sections: [
        {
          id: "profile-hero",
          type: "hero",
          variant: "stark",
          headline: "Pavan Goyal",
          subheadline: "Principal Investigator & Founder. Oversees the longitudinal integrity of the 0-18 study. Holds rare complete AMI certification across all developmental planes (AMI Diploma 0-18).",
          primaryCta: { label: "Contact", href: "mailto:research@blueblocks.in" },
          secondaryCta: { label: "Back to Team", href: "/team" },
          image: { src: "/src/assets/placeholders/avatars/pavan.webp", alt: "Pavan Goyal", variant: "hero" }
        },
        {
          id: "profile-meta",
          type: "metaStrip",
          items: [
            { label: "Role", value: "Principal Investigator & Founder" },
            { label: "Credentials", value: "AMI Diploma (0-18)" },
            { label: "Focus", value: "Longitudinal Study Integrity" },
            { label: "Tenure", value: "15+ years" }
          ]
        },
        {
          id: "profile-card",
          type: "profile",
          name: "Pavan Goyal",
          role: "Principal Investigator & Founder",
          image: { src: "/src/assets/placeholders/avatars/pavan.webp", alt: "Pavan Goyal", variant: "avatar" },
          email: "research@blueblocks.in",
          socials: [
            { type: "linkedin", href: "https://www.linkedin.com/in/pavangoyal/", label: "LinkedIn" },
            { type: "website", href: "https://blueblocks.in", label: "Website" }
          ],
          bio: "Oversees the longitudinal integrity of the 0-18 study. Holds rare complete AMI certification across all developmental planes (AMI Diploma 0-18). 15+ years of embedded observation experience."
        },
        {
          id: "profile-content",
          type: "textBlock",
          header: "Biography",
          body: "Pavan Goyal is the Principal Investigator and Founder of Blue Blocks Micro Research Institute. He oversees the longitudinal integrity of the 0-18 study and holds the rare distinction of complete AMI certification across all developmental planes.\n\nWith over 15 years of embedded observation experience, Pavan has pioneered the Micro Research methodology that enables continuous, high-frequency data capture without disrupting the educational environment. His work bridges the gap between traditional academic research and the living laboratory of the Montessori environment.\n\nPavan is the author of 'Lining The Nest' and has presented the Institute's findings at international forums including the IMF Annual Meetings and the Nobel Peace Center."
        },
        {
          id: "profile-related",
          type: "relatedCards",
          header: "Related",
          cards: [
            { title: "All Team", description: "View profiles.", icon: "team", href: "/team" },
            { title: "Governance", description: "Leadership structure.", icon: "governance", href: "/governance" },
            { title: "Books", description: "Lining The Nest.", icon: "book", href: "/books/lining-the-nest" }
          ]
        }
      ]
    },

    "/team/munira-hussain": {
      title: "Munira Hussain",
      metaDescription: "Profile of Munira Hussain, Director of Pedagogy at Blue Blocks Micro Research Institute.",
      seo: {
        title: "Munira Hussain | Team | Blue Blocks Micro Research Institute",
        canonical: "https://siddheshv1.lovable.app/team/munira-hussain",
        robots: "noindex,nofollow,noarchive,nosnippet",
        openGraph: {
          type: "profile",
          url: "https://siddheshv1.lovable.app/team/munira-hussain",
          title: "Munira Hussain - Director of Pedagogy",
          description: "Profile of Munira Hussain, Director of Pedagogy."
        }
      },
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Munira Hussain",
          url: "https://siddheshv1.lovable.app/team/munira-hussain",
          jobTitle: "Director of Pedagogy",
          worksFor: { "@type": "Organization", name: "Blue Blocks Micro Research Institute" }
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://siddheshv1.lovable.app/" },
            { "@type": "ListItem", position: 2, name: "Team", item: "https://siddheshv1.lovable.app/team" },
            { "@type": "ListItem", position: 3, name: "Munira Hussain", item: "https://siddheshv1.lovable.app/team/munira-hussain" }
          ]
        }
      ],
      sections: [
        {
          id: "profile-hero",
          type: "hero",
          variant: "stark",
          headline: "Munira Hussain",
          subheadline: "Director of Pedagogy. Ensures all research protocols integrate seamlessly with the Montessori curriculum without disrupting the 'Children's House.' Credentials: AMI Diploma / M.Ed.",
          primaryCta: { label: "Contact", href: "mailto:research@blueblocks.in" },
          secondaryCta: { label: "Back to Team", href: "/team" },
          image: { src: "/src/assets/placeholders/avatars/munira.jpg", alt: "Munira Hussain", variant: "hero" }
        },
        {
          id: "profile-meta",
          type: "metaStrip",
          items: [
            { label: "Role", value: "Director of Pedagogy" },
            { label: "Credentials", value: "AMI Diploma / M.Ed" },
            { label: "Focus", value: "Curriculum Integration" },
            { label: "Specialization", value: "Children's House" }
          ]
        },
        {
          id: "profile-card",
          type: "profile",
          name: "Munira Hussain",
          role: "Director of Pedagogy",
          image: { src: "/src/assets/placeholders/avatars/munira.jpg", alt: "Munira Hussain", variant: "avatar" },
          email: "research@blueblocks.in",
          socials: [
            { type: "linkedin", href: "https://www.linkedin.com/in/munirahussain/", label: "LinkedIn" }
          ],
          bio: "Ensures all research protocols integrate seamlessly with the Montessori curriculum without disrupting the Children's House. Credentials: AMI Diploma / M.Ed."
        },
        {
          id: "profile-content",
          type: "textBlock",
          header: "Biography",
          body: "Munira Hussain serves as Director of Pedagogy at Blue Blocks Micro Research Institute. She ensures that all research protocols integrate seamlessly with the Montessori curriculum without disrupting the sacred environment of the 'Children's House.'\n\nWith dual credentials in AMI methodology and educational leadership (M.Ed), Munira brings a unique perspective that balances research objectives with pedagogical integrity. Her work ensures that observation protocols enhance rather than interfere with the natural learning process."
        },
        {
          id: "profile-related",
          type: "relatedCards",
          header: "Related",
          cards: [
            { title: "All Team", description: "View profiles.", icon: "team", href: "/team" },
            { title: "Methodology", description: "Research protocols.", icon: "methodology", href: "/methodology" },
            { title: "Governance", description: "Leadership structure.", icon: "governance", href: "/governance" }
          ]
        }
      ]
    },

    "/team/adolescent-research-cohort": {
      title: "Adolescent Research Cohort",
      metaDescription: "Information about the Adolescent Research Cohort at Blue Blocks Micro Research Institute.",
      seo: {
        title: "Adolescent Research Cohort | Team | Blue Blocks Micro Research Institute",
        canonical: "https://siddheshv1.lovable.app/team/adolescent-research-cohort",
        robots: "noindex,nofollow,noarchive,nosnippet"
      },
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://siddheshv1.lovable.app/" },
            { "@type": "ListItem", position: 2, name: "Team", item: "https://siddheshv1.lovable.app/team" },
            { "@type": "ListItem", position: 3, name: "Adolescent Research Cohort", item: "https://siddheshv1.lovable.app/team/adolescent-research-cohort" }
          ]
        }
      ],
      sections: [
        {
          id: "cohort-hero",
          type: "hero",
          variant: "stark",
          headline: "The Adolescent Research Cohort",
          subheadline: "This cohort consists of students aged 12–16 who work on Institute innovation projects across aerospace, autonomous systems, environmental monitoring, and applied research.",
          primaryCta: { label: "View Patents", href: "/patents" },
          secondaryCta: { label: "Back to Team", href: "/team" },
          image: { src: "/src/assets/placeholders/labs/space-lab.jpg", alt: "Adolescent Research Cohort", variant: "hero" }
        },
        {
          id: "cohort-content",
          type: "textBlock",
          header: "Contribution, Not Enrichment",
          body: "They don't study engineering concepts in the abstract. They build.\n\nThe SBB-1 CubeSat — a functional satellite designed, assembled, and presented by this cohort — demonstrated that adolescents can meet TRL-9 (Technology Readiness Level 9) engineering constraints when given access to real problems and proper mentorship.\n\nParticipation is project-based, not course-based. Students enter when they demonstrate readiness — curiosity, persistence, and tolerance for failure. They work alongside Research Fellows, external advisors from the Research Council, and industry partners.\n\nOutputs include:\n• Hardware prototypes\n• Published datasets\n• Patent filings\n• Conference presentations\n\nThis is not enrichment. It is contribution."
        },
        {
          id: "cohort-related",
          type: "relatedCards",
          header: "Related",
          cards: [
            { title: "Patents", description: "Student innovations.", icon: "patent", href: "/patents" },
            { title: "Technical Brief: SBB-1", description: "Mission documentation.", icon: "brief", href: "/technical-briefs/sbb-1" },
            { title: "Governance", description: "Privacy protocols.", icon: "governance", href: "/governance" }
          ]
        }
      ]
    },

    // ==================== NEWSROOM SUBPAGES ====================
    "/newsroom/dispatch/isro-payload-authorization": {
      title: "ISRO Payload Authorization Dispatch",
      metaDescription: "Official dispatch on Blue Blocks payload authorization for ISRO PSLV-C62 mission.",
      seo: {
        title: "ISRO Payload Authorization | Newsroom | Blue Blocks Micro Research Institute",
        canonical: "https://siddheshv1.lovable.app/newsroom/dispatch/isro-payload-authorization",
        robots: "noindex,nofollow,noarchive,nosnippet"
      },
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          name: "ISRO Payload Authorization Dispatch",
          url: "https://siddheshv1.lovable.app/newsroom/dispatch/isro-payload-authorization"
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://siddheshv1.lovable.app/" },
            { "@type": "ListItem", position: 2, name: "Newsroom", item: "https://siddheshv1.lovable.app/newsroom" },
            { "@type": "ListItem", position: 3, name: "ISRO Payload Authorization", item: "https://siddheshv1.lovable.app/newsroom/dispatch/isro-payload-authorization" }
          ]
        }
      ],
      sections: [
        {
          id: "dispatch-hero",
          type: "hero",
          variant: "stark",
          headline: "Blue Blocks Payload Authorized for ISRO Mission",
          subheadline: "Twelve teenagers (ages 12-16) designed a thermal sensor payload. IN-SPACe authorized it for PSLV-C62 launch after eighteen months of technical review.",
          primaryCta: { label: "Read Technical Brief", href: "/technical-briefs/sbb-1" },
          secondaryCta: { label: "Back to Newsroom", href: "/newsroom" },
          image: { src: "/src/assets/placeholders/labs/avionics.jpg", alt: "ISRO Payload Authorization", variant: "hero" }
        },
        {
          id: "dispatch-content",
          type: "textBlock",
          header: "Full Dispatch",
          body: "Blue Blocks Montessori School, in technical collaboration with TakeMe2Space, has received official authorization from IN-SPACe (Indian National Space Promotion and Authorization Centre) to integrate a 1U payload aboard ISRO PSLV-C62.\n\nThe payload, designed by twelve teenagers aged 12-16, underwent eighteen months of technical review including thermal and vibration testing to meet flight qualification standards. This marks one of the first instances of a student-designed payload receiving official government authorization for an ISRO launch vehicle.\n\nThe Blue Blocks Micro Research Institute served as the pedagogical partner, structuring the mission to test adolescent resilience under TRL-9 constraints."
        },
        {
          id: "dispatch-related",
          type: "relatedCards",
          header: "Related",
          cards: [
            { title: "Technical Brief: SBB-1", description: "Full mission documentation.", icon: "brief", href: "/technical-briefs/sbb-1" },
            { title: "IN-SPACe Authorization", description: "Official record.", icon: "publication", href: "/publications/in-space-authorization-letter" },
            { title: "All News", description: "Back to newsroom.", icon: "news", href: "/newsroom" }
          ]
        }
      ]
    },

    "/newsroom/coverage/nobel-peace-center": {
      title: "Nobel Peace Center Coverage",
      metaDescription: "Coverage of Blue Blocks Micro Research Institute's exhibition at the Nobel Peace Center.",
      seo: {
        title: "Nobel Peace Center | Newsroom | Blue Blocks Micro Research Institute",
        canonical: "https://siddheshv1.lovable.app/newsroom/coverage/nobel-peace-center",
        robots: "noindex,nofollow,noarchive,nosnippet"
      },
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          name: "Nobel Peace Center Coverage",
          url: "https://siddheshv1.lovable.app/newsroom/coverage/nobel-peace-center"
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://siddheshv1.lovable.app/" },
            { "@type": "ListItem", position: 2, name: "Newsroom", item: "https://siddheshv1.lovable.app/newsroom" },
            { "@type": "ListItem", position: 3, name: "Nobel Peace Center", item: "https://siddheshv1.lovable.app/newsroom/coverage/nobel-peace-center" }
          ]
        }
      ],
      sections: [
        {
          id: "coverage-hero",
          type: "hero",
          variant: "stark",
          headline: "Nobel Peace Center Features Student Innovation",
          subheadline: "Blue Blocks Micro Research Institute student projects have been selected for exhibition as exemplars of 'Youth-Led Innovation,' validating our 0-18 Sovereignty Model on a global stage.",
          primaryCta: { label: "View MONISC Proceedings", disabled: true },
          secondaryCta: { label: "Back to Newsroom", href: "/newsroom" },
          image: { src: "/src/assets/placeholders/card-default.jpg", alt: "Nobel Peace Center", variant: "hero" }
        },
        {
          id: "coverage-content",
          type: "textBlock",
          header: "International Recognition",
          body: "On January 28, 2026, at the Nobel Peace Center in Oslo, Founder Pavan Goyal delivered the 'World Premiere' of the Blue Blocks Innovation Pedagogy (0-18). Selected by the Monisc Committee (supported by the Norwegian UNESCO Commission) as a 'global benchmark' for integrating space science with youth education.\n\nThis international recognition validates the Institute's approach to treating children as capable innovators rather than passive learners. Student projects were exhibited alongside the presentation, demonstrating the tangible outcomes of the 0-18 methodology.\n\nProceedings yet to be released by MONISC."
        },
        {
          id: "coverage-related",
          type: "relatedCards",
          header: "Related",
          cards: [
            { title: "MONISC Proceedings", description: "Awaiting release.", icon: "archive", href: "#" },
            { title: "Methodology", description: "Our approach.", icon: "methodology", href: "/methodology" },
            { title: "All News", description: "Back to newsroom.", icon: "news", href: "/newsroom" }
          ]
        }
      ]
    },

    "/newsroom/updates/iit-hyderabad-advisory": {
      title: "IIT Hyderabad Advisory Role",
      metaDescription: "Update on IIT Hyderabad Design Department formalizing advisory role with Blue Blocks Micro Research Institute.",
      seo: {
        title: "IIT Hyderabad Advisory | Newsroom | Blue Blocks Micro Research Institute",
        canonical: "https://siddheshv1.lovable.app/newsroom/updates/iit-hyderabad-advisory",
        robots: "noindex,nofollow,noarchive,nosnippet"
      },
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          name: "IIT Hyderabad Advisory Role",
          url: "https://siddheshv1.lovable.app/newsroom/updates/iit-hyderabad-advisory",
          datePublished: "2025-10-15"
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://siddheshv1.lovable.app/" },
            { "@type": "ListItem", position: 2, name: "Newsroom", item: "https://siddheshv1.lovable.app/newsroom" },
            { "@type": "ListItem", position: 3, name: "IIT Hyderabad Advisory", item: "https://siddheshv1.lovable.app/newsroom/updates/iit-hyderabad-advisory" }
          ]
        }
      ],
      sections: [
        {
          id: "update-hero",
          type: "hero",
          variant: "stark",
          headline: "IIT Hyderabad Design Dept. Formalizes Advisory Role",
          subheadline: "The Department of Design at IIT Hyderabad joins the Research Council to provide technical validation for student prototyping.",
          primaryCta: { label: "View Governance", href: "/governance" },
          secondaryCta: { label: "Back to Newsroom", href: "/newsroom" },
          image: { src: "/src/assets/placeholders/labs/data-wing.jpg", alt: "IIT Hyderabad Partnership", variant: "hero" }
        },
        {
          id: "update-meta",
          type: "metaStrip",
          items: [
            { label: "Date", value: "October 15, 2025" },
            { label: "Category", value: "Institutional Alliance" },
            { label: "Partner", value: "IIT Hyderabad" }
          ]
        },
        {
          id: "update-content",
          type: "textBlock",
          header: "Partnership Details",
          body: "The Department of Design at IIT Hyderabad has formalized an advisory role with Blue Blocks Micro Research Institute. Faculty members will join the Research Council to provide independent technical validation for student prototyping projects.\n\nThis partnership strengthens the Institute's external oversight mechanisms and provides students with access to university-level engineering expertise during the prototyping phase."
        },
        {
          id: "update-related",
          type: "relatedCards",
          header: "Related",
          cards: [
            { title: "Governance", description: "Advisory structure.", icon: "governance", href: "/governance" },
            { title: "Collaborate", description: "Partner with us.", icon: "collaborate", href: "/collaborate" },
            { title: "All News", description: "Back to newsroom.", icon: "news", href: "/newsroom" }
          ]
        }
      ]
    },

    "/newsroom/updates/utility-patent-4421": {
      title: "Utility Patent #4421 Filed",
      metaDescription: "Update on the filing of Utility Patent #4421 - The Guardian Drone by Blue Blocks Micro Research Institute students.",
      seo: {
        title: "Utility Patent #4421 | Newsroom | Blue Blocks Micro Research Institute",
        canonical: "https://siddheshv1.lovable.app/newsroom/updates/utility-patent-4421",
        robots: "noindex,nofollow,noarchive,nosnippet"
      },
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          name: "Utility Patent #4421 Filed",
          url: "https://siddheshv1.lovable.app/newsroom/updates/utility-patent-4421",
          datePublished: "2025-09-02"
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://siddheshv1.lovable.app/" },
            { "@type": "ListItem", position: 2, name: "Newsroom", item: "https://siddheshv1.lovable.app/newsroom" },
            { "@type": "ListItem", position: 3, name: "Patent #4421", item: "https://siddheshv1.lovable.app/newsroom/updates/utility-patent-4421" }
          ]
        }
      ],
      sections: [
        {
          id: "update-hero",
          type: "hero",
          variant: "stark",
          headline: "Utility Patent #4421 Filed: The 'Guardian' Drone",
          subheadline: "The Drone Research Centre has filed its fifth utility patent, marking a significant milestone in our study of 'Innovation Agency' in the 9-11 age group.",
          primaryCta: { label: "View Patent", href: "/patents/autonomous-health-monitoring-system" },
          secondaryCta: { label: "Back to Newsroom", href: "/newsroom" },
          image: { src: "/src/assets/placeholders/labs/drone-centre.jpg", alt: "Guardian Drone Patent", variant: "hero" }
        },
        {
          id: "update-meta",
          type: "metaStrip",
          items: [
            { label: "Date", value: "September 02, 2025" },
            { label: "Category", value: "Student IP" },
            { label: "Patent Number", value: "#4421" },
            { label: "Lab", value: "Drone Research Centre" }
          ]
        },
        {
          id: "update-content",
          type: "textBlock",
          header: "Milestone Achievement",
          body: "The Drone Research Centre has filed its fifth utility patent, marking a significant milestone in our longitudinal study of 'Innovation Agency' in the 9-11 age group.\n\nThe 'Guardian' drone represents an autonomous health monitoring system designed by some of the youngest patent holders in the Institute's registry. This filing demonstrates that children as young as 9 can contribute meaningfully to the global innovation economy when given appropriate scaffolding and real-world problems to solve.\n\nFive utility patents have now been filed to date by Blue Blocks Micro Research Institute students."
        },
        {
          id: "update-related",
          type: "relatedCards",
          header: "Related",
          cards: [
            { title: "Patent Details", description: "Guardian drone.", icon: "patent", href: "/patents/autonomous-health-monitoring-system" },
            { title: "All Patents", description: "View registry.", icon: "patent", href: "/patents" },
            { title: "All News", description: "Back to newsroom.", icon: "news", href: "/newsroom" }
          ]
        }
      ]
    },

    "/newsroom/updates/visiting-scholars-2026": {
      title: "Visiting Scholar Applications 2026",
      metaDescription: "Information about visiting scholar applications for the 2026 Winter Residency at Blue Blocks Micro Research Institute.",
      seo: {
        title: "Visiting Scholars 2026 | Newsroom | Blue Blocks Micro Research Institute",
        canonical: "https://siddheshv1.lovable.app/newsroom/updates/visiting-scholars-2026",
        robots: "noindex,nofollow,noarchive,nosnippet"
      },
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          name: "Visiting Scholar Applications 2026",
          url: "https://siddheshv1.lovable.app/newsroom/updates/visiting-scholars-2026",
          datePublished: "2025-08-10"
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://siddheshv1.lovable.app/" },
            { "@type": "ListItem", position: 2, name: "Newsroom", item: "https://siddheshv1.lovable.app/newsroom" },
            { "@type": "ListItem", position: 3, name: "Visiting Scholars 2026", item: "https://siddheshv1.lovable.app/newsroom/updates/visiting-scholars-2026" }
          ]
        }
      ],
      sections: [
        {
          id: "update-hero",
          type: "hero",
          variant: "stark",
          headline: "Visiting Scholar Applications Open for 2026 Cycle",
          subheadline: "We are now accepting proposals for the Winter Residency. PhD candidates focusing on longitudinal behavioral observation are encouraged to apply.",
          primaryCta: { label: "Apply via Collaborate", href: "/collaborate" },
          secondaryCta: { label: "Back to Newsroom", href: "/newsroom" },
          image: { src: "/src/assets/placeholders/labs/space-lab.jpg", alt: "Visiting Scholars", variant: "hero" }
        },
        {
          id: "update-meta",
          type: "metaStrip",
          items: [
            { label: "Date", value: "August 10, 2025" },
            { label: "Category", value: "Fellowship" },
            { label: "Residency", value: "Winter 2026" },
            { label: "Duration", value: "2-8 weeks" }
          ]
        },
        {
          id: "update-content",
          type: "textBlock",
          header: "Fellowship Opportunity",
          body: "Blue Blocks Micro Research Institute is now accepting proposals for the Winter 2026 Visiting Scholar Residency. PhD candidates focusing on longitudinal behavioral observation are particularly encouraged to apply.\n\nVisiting scholars gain access to the Institute's archive and can work directly with the longitudinal dataset during their 2-8 week residency. Proposals should demonstrate clear alignment with the Institute's research focus on innovation capacity development.\n\nApplications are reviewed by the Research Council on a rolling basis."
        },
        {
          id: "update-related",
          type: "relatedCards",
          header: "Related",
          cards: [
            { title: "Collaborate", description: "Submit proposal.", icon: "collaborate", href: "/collaborate" },
            { title: "Methodology", description: "Research approach.", icon: "methodology", href: "/methodology" },
            { title: "Governance", description: "Ethics & access.", icon: "governance", href: "/governance" }
          ]
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════════
    // INNOVATION RESEARCH
    // ═══════════════════════════════════════════════════════════════
    "/methodology/innovation": {
      title: "Innovation Research",
      metaDescription: "How we study innovation in environments we designed — curriculum, space, and teaching integrated for longitudinal observation.",
      seo: {
        title: "Innovation Research | Blue Blocks Micro Research Institute",
        canonical: `${SITE_URL}/methodology/innovation`,
        openGraph: {
          type: "article",
          url: `${SITE_URL}/methodology/innovation`,
          title: "Innovation Research | Blue Blocks Micro Research Institute",
          description: "How we study innovation in environments we designed — curriculum, space, and teaching integrated for longitudinal observation.",
        },
      },
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Innovation Research",
          description: "How we study innovation in environments we designed — curriculum, space, and teaching integrated for longitudinal observation.",
          url: `${SITE_URL}/methodology/innovation`,
          publisher: { "@type": "Organization", name: "Blue Blocks Micro Research Institute", url: SITE_URL },
        },
      ],
      sections: [
        {
          id: "innov-hero",
          type: "hero",
          headline: "INNOVATION RESEARCH",
          subheadline: "How We Study What We Built",
        },
        {
          id: "innov-integration",
          type: "textBlock",
          heading: "The Architect-Scientist Advantage",
          body: "Most innovation research studies programs others designed, in spaces others built, with children others teach.\n\nOur Innovation research is different.\n\nWe designed the program. We built the spaces. We teach the children. And now we study what emerges.\n\nSame team. Full integration. No black boxes.\n\nWhen a university finds that 'innovation training works,' they can't tell you if it was the curriculum, the room, or the teacher. We can. Because we designed all three.",
        },
        {
          id: "innov-dip",
          type: "textBlock",
          heading: "Our Framework",
          body: "Didactic Innovation Principles (DIP) is our proprietary framework for designing environments where innovation emerges naturally.\n\nDIP draws on:\n• Montessori prepared environment theory\n• Developmental psychology across four planes (0-6, 6-12, 12-18)\n• 15 years of iterative refinement based on embedded observation\n\nDIP is not a teaching method. It's an environment design philosophy — principles for creating spaces where children naturally explore, construct, fail, iterate, and innovate.",
        },
        {
          id: "innov-dip-principles",
          type: "textBlock",
          sectionName: "The DIP Principles (Summary)",
          body: "• Prepared Environment: Every material, every placement is intentional\n• Developmental Alignment: Space design changes with the child's plane\n• Error as Information: Environment allows failure without adult intervention\n• Iteration Access: Children can repeat, refine, and retry\n• Cross-Domain Materials: Innovation happens at intersections",
        },
        {
          id: "innov-labs",
          type: "textBlock",
          heading: "Purpose-Designed Research Environments",
          body: "DIP Labs are physical spaces built on Didactic Innovation Principles. They are not generic classrooms with innovation materials added. They are research environments designed from the ground up for innovation emergence.",
        },
        {
          id: "innov-labs-diff",
          type: "textBlock",
          sectionName: "What makes a DIP Lab different",
          body: "• Layout based on observed movement patterns and collaboration emergence\n• Materials selected based on developmental observation, not catalogs\n• Zones designed for specific innovation behaviors (construction, iteration, documentation)\n• Continuous refinement — the space evolves based on what we observe",
        },
        {
          id: "innov-labs-current",
          type: "textBlock",
          sectionName: "Current DIP Labs",
          body: "• DIP Lab 1: First Plane (3-6) — Sensorial innovation foundations\n• DIP Lab 2: Second Plane (6-12) — Construction and collaborative innovation\n• Innovation Studio: Third Plane (12-18) — Design thinking and prototyping",
        },
        {
          id: "innov-curriculum",
          type: "textBlock",
          heading: "A Developmental Sequence",
          body: "Our innovation curriculum spans all four developmental planes. It was designed by AMI-trained educators with deep expertise in innovation pedagogy — the same team that conducts the research.",
        },
        {
          id: "innov-curriculum-arc",
          type: "textBlock",
          sectionName: "Curriculum Arc",
          body: "First Plane (0-6): Foundations\nSensorial exploration, error recognition, basic construction, materials manipulation. Innovation readiness through prepared environment.\n\nSecond Plane (6-12): Construction\nComplex construction, collaborative problem-solving, iteration cycles, documentation of process. Innovation as practice.\n\nThird Plane (12-18): Application\nDesign thinking methodology, real-world prototyping, external partnerships (ISRO CubeSat, IIT collaborations). Innovation as contribution.\n\nEach plane builds on the previous. We track children through all planes — observing how innovation capacity develops longitudinally.",
        },
        {
          id: "innov-loop",
          type: "textBlock",
          heading: "How Observation Shapes Design",
          body: "This is not static curriculum and fixed spaces. It's a living system.",
        },
        {
          id: "innov-loop-steps",
          type: "textBlock",
          sectionName: "The Loop",
          body: "1. We design a space/curriculum element based on developmental principles\n2. We observe how children actually use it\n3. We publish findings\n4. We refine the design based on observation\n5. We observe again\n\nThis has been running for 15 years. The DIP Labs and curriculum you see today are the result of hundreds of iterations — each informed by embedded observation.\n\nExample: Our construction collapse research revealed specific latency patterns. This informed how we position materials and when guides intervene (or don't). The space was adjusted. We observed the change. The findings were published. The loop continues.",
        },
        {
          id: "innov-context",
          type: "textBlock",
          heading: "Context That Others Lack",
          body: "When we publish findings on innovation development, the context is unique:\n• The space was designed by us — we know every design decision\n• The curriculum was designed by us — we know every pedagogical choice\n• The observation is embedded — zero observer effect\n• The refinement loop is continuous — we act on what we learn\n\nThis is Integrated Design-Research applied to innovation. It means our data has context that external researchers cannot provide.\n\nFor researchers:\nIf you use our innovation data, you're not just getting observations. You're getting observations from an environment we designed, using a curriculum we created, refined over 15 years. The design rationale is documented. The context is known.",
        },
        {
          id: "innov-canon",
          type: "highlightBox",
          heading: "The Full Story — Innovation Canon (Coming Soon)",
          body: "We are preparing a comprehensive Innovation Canon Paper documenting:\n• The complete design rationale for DIP\n• 15 years of environment iteration\n• The full 0-18 curriculum framework\n• How observation shaped every design decision\n\nThis will be published with a DOI and linked here — the definitive reference for understanding how our innovation research environment came to be.\n\nFor early access or collaboration inquiries: research@blueblocks.in",
        },
        {
          id: "innov-cta",
          type: "grid3",
          header: "Work With Us",
          items: [
            {
              title: "For Researchers",
              icon: "microscope",
              body: "Access innovation data from designed environments. Understand the context others can't provide.",
              email: "research@blueblocks.in",
            },
            {
              title: "For Institutions",
              icon: "building",
              body: "Partner on innovation environment design. Learn from 15 years of iteration.",
              email: "research@blueblocks.in",
            },
            {
              title: "For Educators",
              icon: "graduation",
              body: "Explore DIP principles for your own environment. Replicate with attribution.",
              email: "research@blueblocks.in",
            },
          ],
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════
    // ETHICS & PRIVACY
    // ═══════════════════════════════════════════════════════════════
    "/governance/ethics": {
      title: "Ethics & Privacy",
      metaDescription: "Consent, privacy protection, child rights, and what we never do.",
      seo: {
        title: "Ethics & Privacy | Blue Blocks Micro Research Institute",
        canonical: `${SITE_URL}/governance/ethics`,
        openGraph: {
          type: "website",
          url: `${SITE_URL}/governance/ethics`,
          title: "Ethics & Privacy | Blue Blocks Micro Research Institute",
          description: "Consent, privacy protection, child rights, and what we never do.",
        },
      },
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Ethics & Privacy",
          description: "Consent, privacy protection, child rights, and what we never do.",
          url: `${SITE_URL}/governance/ethics`,
          about: { "@type": "Thing", name: "Research Ethics and Child Privacy" },
        },
      ],
      sections: [
        {
          id: "ethics-hero",
          type: "hero",
          headline: "ETHICS & PRIVACY",
          subheadline: "Consent, privacy protection, child rights, and what we never do.",
        },
        {
          id: "ethics-commitment",
          type: "textBlock",
          heading: "Our Commitment",
          body: "• Protecting privacy of every child\n• Obtaining meaningful consent\n• Never compromising education\n• Maintaining transparency",
        },
        {
          id: "ethics-consent",
          type: "textBlock",
          heading: "Consent Architecture",
          body: "Enrollment Consent\nAll families consent at enrollment. May withdraw while remaining enrolled.\n\nOngoing Consent\nReaffirmed annually. Notified of publications.\n\nChild Assent\nAge 7+. May decline without consequence.",
        },
        {
          id: "ethics-committee",
          type: "textBlock",
          heading: "Ethics Advisory Committee",
          body: "Principal Investigator + External advisor (IIT) + Parent representative. Reviews all studies.",
        },
        {
          id: "ethics-never",
          type: "comparisonTable",
          heading: "What We Never Do",
          headers: ["We Never", "Why"],
          rows: [
            ["Collect medical info without consent", "Privacy"],
            ["Record income/caste data", "Discrimination risk"],
            ["Conduct covert observation", "Transparency"],
            ["Share identified data", "Protection"],
          ],
        },
        {
          id: "ethics-rights",
          type: "textBlock",
          heading: "Children's Rights",
          body: "• Right to natural behavior\n• Right to privacy\n• Right to decline\n• Right to education first",
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════
    // RESEARCH STANDARDS
    // ═══════════════════════════════════════════════════════════════
    "/governance/standards": {
      title: "Research Standards",
      metaDescription: "Study design, observer requirements, data standards, publication standards, and citation standards.",
      seo: {
        title: "Research Standards | Blue Blocks Micro Research Institute",
        canonical: `${SITE_URL}/governance/standards`,
        openGraph: {
          type: "website",
          url: `${SITE_URL}/governance/standards`,
          title: "Research Standards | Blue Blocks Micro Research Institute",
          description: "Study design, observer requirements, data standards, publication standards, and citation standards.",
        },
      },
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Research Standards",
          description: "Study design, observer requirements, data standards, publication standards, and citation standards.",
          url: `${SITE_URL}/governance/standards`,
          about: { "@type": "Thing", name: "Research Standards and Data Governance" },
        },
      ],
      sections: [
        {
          id: "standards-hero",
          type: "hero",
          headline: "RESEARCH STANDARDS",
          subheadline: "Study design, observer requirements, data standards, publication standards, and citation standards.",
        },
        {
          id: "standards-design",
          type: "comparisonTable",
          heading: "Study Design Standards",
          headers: ["Constraint", "Specification"],
          rows: [
            ["Research question", "Single bounded question"],
            ["Capture time", "<5 minutes"],
            ["Duration", "<3 weeks"],
            ["Design", "Publication-ready"],
          ],
        },
        {
          id: "standards-observer",
          type: "textBlock",
          heading: "Observer Standards",
          body: "• AMI diploma required\n• Micro Research Protocol Training\n• Annual refresher\n• >80% inter-rater reliability",
        },
        {
          id: "standards-data",
          type: "textBlock",
          heading: "Data Standards",
          body: "All datasets follow Blue Blocks Micro Dataset Specification v1.0",
        },
        {
          id: "standards-publication",
          type: "textBlock",
          heading: "Publication Standards",
          body: "• Data verification\n• Anonymization check\n• Quality assessment\n• Ethics confirmation\n• PI sign-off",
        },
        {
          id: "standards-citation",
          type: "textBlock",
          heading: "Citation Standards",
          body: "Every study must cite DOI-001 (Methodology) and DOI-002 (Dataset Spec).",
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════
    // REGULATORY COMPLIANCE
    // ═══════════════════════════════════════════════════════════════
    "/governance/compliance": {
      title: "Regulatory Compliance",
      metaDescription: "Compliance with international research ethics, GDPR, India's DPDP Act, and IRB-equivalent oversight for child development research.",
      seo: {
        title: "Regulatory Compliance | Blue Blocks Micro Research Institute",
        canonical: `${SITE_URL}/governance/compliance`,
        openGraph: {
          type: "website",
          url: `${SITE_URL}/governance/compliance`,
          title: "Regulatory Compliance | Blue Blocks Micro Research Institute",
          description: "Compliance with international research ethics, GDPR, India's DPDP Act, and IRB-equivalent oversight for child development research.",
        },
      },
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Regulatory Compliance",
          description: "Compliance with international research ethics, GDPR, India's DPDP Act, and IRB-equivalent oversight.",
          url: `${SITE_URL}/governance/compliance`,
          about: { "@type": "Thing", name: "Regulatory Compliance and Data Protection" },
        },
      ],
      sections: [
        {
          id: "compliance-hero",
          type: "hero",
          headline: "Regulatory Compliance",
          subheadline: "We comply with international research ethics standards and applicable data protection regulations.",
        },
        {
          id: "compliance-helsinki",
          type: "textBlock",
          heading: "International Ethics",
          body: "Declaration of Helsinki\nWorld Medical Association (1964, amended 2013)\nCore principles: respect for individuals, subject wellbeing takes precedence, special protection for children, informed consent, ethics review.\n\nBelmont Report (1979)\nThree principles: Respect for Persons, Beneficence, Justice.\n\nUN Convention on Rights of the Child\nArticles 3, 12, 16, 19, 28: Best interests, right to express views, privacy, protection, education.",
        },
        {
          id: "compliance-dpdp",
          type: "textBlock",
          heading: "Data Protection",
          body: "India: DPDP Act 2023 — Primary Regulation\n• Lawful processing with consent\n• Purpose limitation\n• Data minimization\n• Security safeguards\n• Data principal rights\n\nChildren's data: Verifiable parental consent via our Longitudinal Consent Architecture.\n\nGDPR Alignment\nFor international collaboration: lawfulness, fairness, transparency, purpose limitation, minimization, accuracy, storage limitation, integrity, accountability.\n\nOther Indian Regulations\n• IT Act 2000: Reasonable security practices\n• POCSO Act 2012: Child protection, mandatory reporting\n• ICMR Guidelines 2017: Research ethics",
        },
        {
          id: "compliance-irb",
          type: "textBlock",
          heading: "IRB Equivalence",
          body: "Ethics Advisory Committee = IRB Equivalent\n\nOur EAC performs all core IRB functions:\n• Protocol review before data collection\n• Continuing oversight\n• Adverse event review\n• Modification approval\n• Documentation\n\nFor institutions requiring IRB approval for collaboration, our EAC approval satisfies this requirement.",
        },
        {
          id: "compliance-docs",
          type: "textBlock",
          heading: "Compliance Documentation",
          body: "• Consent records for all participating families\n• EAC meeting minutes\n• Protocol review records\n• Data processing logs\n• Training records\n• Annual compliance self-assessment",
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════
    // OUR STANDARDS
    // ═══════════════════════════════════════════════════════════════
    "/governance/our-standards": {
      title: "Our Standards",
      metaDescription: "Three standards we created. Published with DOIs. Free to adopt (CC-BY-4.0).",
      seo: {
        title: "Our Standards | Blue Blocks MRI",
        canonical: `${SITE_URL}/governance/our-standards`,
        openGraph: {
          type: "website",
          url: `${SITE_URL}/governance/our-standards`,
          title: "Our Standards | Blue Blocks MRI",
          description: "Three standards we created. Published with DOIs. Free to adopt (CC-BY-4.0).",
        },
      },
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Our Standards",
          description: "Three standards we created. Published with DOIs. Free to adopt (CC-BY-4.0).",
          url: `${SITE_URL}/governance/our-standards`,
          about: { "@type": "Thing", name: "Blue Blocks Open Standards" },
        },
      ],
      sections: [
        {
          id: "ours-hero",
          type: "hero",
          headline: "Our Standards",
          subheadline: "Three standards we created. Published with DOIs. Free to adopt (CC-BY-4.0).",
        },
        {
          id: "ours-beop",
          type: "textBlock",
          heading: "BEOP v1.0",
          sectionName: "Blue Blocks Embedded Observation Protocol",
          body: "• Observer qualifications\n• Inter-rater reliability (≥80%)\n• Recording format\n• Quality assurance",
          cta: { label: "Download (In Progress)", href: "https://zenodo.org/" },
        },
        {
          id: "ours-mref",
          type: "textBlock",
          heading: "MREF v1.0",
          sectionName: "Micro Research Ethics Framework",
          body: "• Longitudinal Consent Architecture\n• Child protection\n• IRB-equivalent committee\n• Publication ethics",
          cta: { label: "Download (In Progress)", href: "https://zenodo.org/" },
        },
        {
          id: "ours-cdcs",
          type: "textBlock",
          heading: "CDCS v1.0",
          sectionName: "Child Data Classification Standard",
          body: "• 4-tier classification\n• Handling requirements\n• Security standards\n• Retention/destruction",
          cta: { label: "Download (In Progress)", href: "https://zenodo.org/" },
        },
        {
          id: "ours-adoption",
          type: "textBlock",
          heading: "Adoption",
          body: "Free to adopt under CC-BY-4.0. Optional certification available.\n\nContact: research@blueblocks.in",
        },
      ],
    },

    "/faq": {
      title: "FAQ",
      metaDescription: "Answers to common questions about Blue Blocks Micro Research Institute — our methodology, publications, privacy, and collaboration.",
      seo: {
        title: "FAQ | Blue Blocks Micro Research Institute",
        canonical: `${SITE_URL}/faq`,
        robots: "noindex,nofollow,noarchive,nosnippet",
      },
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "What is Blue Blocks Micro Research Institute?", acceptedAnswer: { "@type": "Answer", text: "A longitudinal research organization embedded within Blue Blocks Montessori school in Hyderabad, India. We observe and document child development from birth through age 18." }},
            { "@type": "Question", name: "What is Micro Research?", acceptedAnswer: { "@type": "Answer", text: "A methodology we developed for embedded educational observation — high-frequency, low-complexity studies designed for practitioner execution." }},
            { "@type": "Question", name: "How is this different from a university lab?", acceptedAnswer: { "@type": "Answer", text: "Universities face structural constraints: researchers graduate, grants end. We built an institution where research never ends because the school never ends." }},
            { "@type": "Question", name: "Where do you publish?", acceptedAnswer: { "@type": "Answer", text: "All publications on Zenodo with DOI registration. Open access." }},
            { "@type": "Question", name: "How do you protect children's privacy?", acceptedAnswer: { "@type": "Answer", text: "All research data anonymized. Names never recorded. Individuals never identified." }},
          ],
        },
      ],
      heroTitle: "FAQ",
      heroSubtitle: "Answers to common questions about our institute, research methodology, publications, privacy, and collaboration.",
      faqSections: [
        {
          title: "About the Institute",
          items: [
            { q: "What is Blue Blocks Micro Research Institute?", a: "A longitudinal research organization embedded within Blue Blocks Montessori school in Hyderabad, India. We observe and document child development from birth through age 18." },
            { q: "What is Micro Research?", a: "A methodology we developed for embedded educational observation — high-frequency, low-complexity studies designed for practitioner execution." },
            { q: "How is this different from a university lab?", a: "Universities face structural constraints: researchers graduate, grants end. We built an institution where research never ends because the school never ends." },
            { q: "Are you affiliated with a university?", a: "Independent, but partnered with IIT Hyderabad and affiliated with AMI." },
          ],
        },
        {
          title: "About Our Research",
          items: [
            { q: "What do you study?", a: "Three domains: Innovation (0–18), Montessori (0–18), Parenting (0–18)." },
            { q: "How many children have you observed?", a: "847 children since 2009." },
            { q: "How long have you been doing this?", a: "Since 2009 — 15 years of continuous observation." },
            { q: "Who does the observation?", a: "25 Embedded Research Fellows — AMI-certified practitioners." },
          ],
        },
        {
          title: "About Publications",
          items: [
            { q: "Where do you publish?", a: "All publications on Zenodo with DOI registration. Open access." },
            { q: "Are publications peer-reviewed?", a: "Internal review before release. Formal peer review for foundational papers." },
            { q: "Can I access your data?", a: "Yes — published papers are open; anonymized datasets require application." },
          ],
        },
        {
          title: "About Privacy",
          items: [
            { q: "How do you protect children's privacy?", a: "All research data anonymized. Names never recorded. Individuals never identified." },
            { q: "Do parents consent?", a: "Yes. All families provide consent at enrollment. May withdraw anytime." },
            { q: "Do you experiment on children?", a: "No. We observe naturally occurring behavior. Never manipulate environments." },
          ],
        },
        {
          title: "About Collaboration",
          items: [
            { q: "Can I access your data?", a: "Qualified researchers can apply. Requirements: institutional affiliation, research purpose, ethics approval." },
            { q: "Can I visit as a researcher?", a: "2–3 visiting researchers annually. Apply through our website." },
            { q: "Can other schools use your methodology?", a: "Yes. Micro Research is designed for adoption by other institutions." },
          ],
        },
        {
          title: "About the School",
          items: [
            { q: "Is this a real school?", a: "Yes. Blue Blocks is a fully operating Montessori school (0–18)." },
            { q: "Can I enroll my child?", a: "Visit blueblocks.in for school inquiries." },
          ],
        },
      ],
    },
  },
};

// ═══════════════════════════════════════════════════════════════
// CMS ENRICHMENT LAYER
// Adds _cpt, _status, and structured `fields` to every page
// for WordPress CPT + ACF migration readiness.
// Zero impact on rendering — SectionRenderer ignores these keys.
// ═══════════════════════════════════════════════════════════════

const CPT_MAP = {
  '/': 'page',
  '/the-institute': 'page',
  '/methodology': 'page',
  '/methodology/innovation': 'innovation-project',
  '/publications': 'page',
  '/publications/in-space-authorization-letter': 'publication',
  '/publications/saparya-imf-case-study': 'publication',
  '/publications/citation-standards': 'page',
  '/governance': 'page',
  '/governance/ethics': 'governance-page',
  '/governance/standards': 'governance-page',
  '/governance/compliance': 'governance-page',
  '/governance/our-standards': 'governance-page',
  '/collaborate': 'page',
  '/newsroom': 'page',
  '/newsroom/dispatch/isro-payload-authorization': 'news-item',
  '/newsroom/coverage/nobel-peace-center': 'news-item',
  '/newsroom/updates/iit-hyderabad-advisory': 'news-item',
  '/newsroom/updates/utility-patent-4421': 'news-item',
  '/newsroom/updates/visiting-scholars-2026': 'news-item',
  '/contact': 'page',
  '/privacy': 'page',
  '/terms': 'page',
  '/technical-briefs/sbb-1': 'publication',
  '/presentations/marrakesh-human-capital': 'presentation',
  '/proceedings/oslo-2026': 'presentation',
  '/downloads': 'download',
  '/staff-access': 'page',
  '/sitemap': 'page',
  '/books': 'page',
  '/books/lining-the-nest': 'book',
  '/patents': 'page',
  '/patents/automated-security-uav': 'patent',
  '/patents/borehole-rescue-system': 'patent',
  '/patents/contactless-delivery-system': 'patent',
  '/patents/autonomous-medical-assistance-system': 'patent',
  '/patents/autonomous-health-monitoring-system': 'patent',
  '/team': 'page',
  '/team/pavan-goyal': 'team-member',
  '/team/munira-hussain': 'team-member',
  '/team/adolescent-research-cohort': 'team-member',
  '/faq': 'page',
  '/sitemap-html': 'page',
};

// Structured fields extracted from existing section data for CMS mapping.
// These do NOT duplicate or replace section content — they normalize metadata.
const FIELDS_MAP = {
  '/publications/in-space-authorization-letter': {
    doi: '10.5281/zenodo.18195108',
    zenodoUrl: 'https://doi.org/10.5281/zenodo.18195108',
    publishedDate: '2026-01-07',
    authors: [{ name: 'Blue Blocks Micro Research Institute', type: 'organization' }],
    researchDomains: ['Aerospace', 'Regulatory'],
    publicationStatus: 'Archived',
    publicationType: 'Administrative Record',
  },
  '/publications/saparya-imf-case-study': {
    doi: '10.5281/zenodo.18337934',
    zenodoUrl: 'https://doi.org/10.5281/zenodo.18337934',
    publishedDate: '2026-01-23',
    authors: [
      { name: 'Gorinta, Sanjay Ramaraju' }, { name: 'Padhy, Sanshray' }, { name: 'Ponnala, Sreshta' },
      { name: 'Rudraraju, Ashrith' }, { name: 'Reddy, Atla Ashrith' }, { name: 'Kumar, Bikki Maneesh' },
      { name: 'Goyal, Saachi' }, { name: 'Hussain Kagalwalla, Ummehani' }, { name: 'Mehta, Aahan Hemal' },
      { name: 'Gupta, Amaira' }, { name: 'Sunkara, Dhruti' }, { name: 'Adusumilli, Karthikeya' },
      { name: 'Aditya Rao, Pratheetha' }, { name: 'Vijaya Krishna, Ranvir' }, { name: 'Reddy, Bolusani Varun' },
      { name: 'Satya Rallapalli, Viaan' }, { name: 'Agarwal, Vedika' },
    ],
    researchDomains: ['Aerospace', 'Montessori', 'Innovation'],
    publicationStatus: 'Published',
    publicationType: 'Conference Presentation',
  },
  '/technical-briefs/sbb-1': {
    doi: '',
    publishedDate: '2024-12-30',
    authors: [{ name: 'Blue Blocks Micro Research Institute', type: 'organization' }],
    researchDomains: ['Aerospace', 'Innovation'],
    publicationStatus: 'Archived',
    publicationType: 'Technical Brief',
  },
  '/patents/automated-security-uav': {
    applicationNumber: '202041027026',
    filingDate: '2020-06-25',
    grantDate: '',
    status: 'Granted',
    category: 'Aerospace / UAV / Security Systems',
    inventors: ['Student Inventors (Blue Blocks)'],
    researchDomains: ['Aerospace', 'Autonomous Systems'],
  },
  '/patents/borehole-rescue-system': {
    applicationNumber: '202041027026',
    filingDate: '2020-06-25',
    grantDate: '',
    status: 'Granted',
    category: 'Robotics / Search & Rescue / Autonomous Navigation',
    inventors: ['Gorinta, Sanjay Ramaraju', 'Padhy, Sanshray'],
    researchDomains: ['Robotics', 'Autonomous Systems'],
  },
  '/patents/contactless-delivery-system': {
    applicationNumber: '',
    filingDate: '2020-06-25',
    grantDate: '',
    status: 'Pending',
    category: 'Robotics / Autonomous Logistics / Public Health Engineering',
    inventors: ['Akira Mani', 'Aditi Vuppala', 'Uma V Jayaraman', 'Nayonika Vadlamudi'],
    researchDomains: ['Robotics', 'Public Health'],
  },
  '/patents/autonomous-medical-assistance-system': {
    applicationNumber: '202041027075',
    filingDate: '2020-06-25',
    grantDate: '',
    status: 'Pending',
    category: 'Medical Robotics / Telerobotics / Epidemiology',
    inventors: ['Trisha Mohit Sachanandani', 'Ananya', 'Aarini Khadse', 'Anya'],
    researchDomains: ['Medical Robotics', 'Public Health'],
  },
  '/patents/autonomous-health-monitoring-system': {
    applicationNumber: '',
    filingDate: '2020-06-25',
    grantDate: '',
    status: 'Pending',
    category: 'Medical Robotics / Public Health Surveillance / Bio-Telemetry',
    inventors: ['Student Inventors (Blue Blocks)'],
    researchDomains: ['Medical Robotics', 'Public Health'],
  },
  '/newsroom/dispatch/isro-payload-authorization': {
    publishedDate: '2024-12-30',
    newsType: 'dispatch',
    author: 'Blue Blocks Micro Research Institute',
    researchDomains: ['Aerospace'],
  },
  '/newsroom/coverage/nobel-peace-center': {
    publishedDate: '2026-01-28',
    newsType: 'coverage',
    author: 'Blue Blocks Micro Research Institute',
    researchDomains: ['International', 'Innovation'],
  },
  '/newsroom/updates/iit-hyderabad-advisory': {
    publishedDate: '2025-10-15',
    newsType: 'update',
    author: 'Blue Blocks Micro Research Institute',
    researchDomains: ['Institutional Alliance'],
  },
  '/newsroom/updates/utility-patent-4421': {
    publishedDate: '2025-09-01',
    newsType: 'update',
    author: 'Blue Blocks Micro Research Institute',
    researchDomains: ['Innovation', 'IP'],
  },
  '/newsroom/updates/visiting-scholars-2026': {
    publishedDate: '2025-08-10',
    newsType: 'update',
    author: 'Blue Blocks Micro Research Institute',
    researchDomains: ['Fellowship'],
  },
  '/team/pavan-goyal': {
    role: 'Principal Investigator & Founder',
    credentials: ['AMI Diploma (0-18)'],
    affiliations: ['Blue Blocks Micro Research Institute'],
    tenure: '15+ years',
  },
  '/team/munira-hussain': {
    role: 'Director of Pedagogy',
    credentials: ['AMI Diploma', 'M.Ed'],
    affiliations: ['Blue Blocks Micro Research Institute'],
  },
  '/team/adolescent-research-cohort': {
    role: 'Student Researchers (Ages 12-16)',
    credentials: [],
    affiliations: ['Blue Blocks Micro Research Institute'],
  },
  '/books/lining-the-nest': {
    publishedDate: '',
    authors: [{ name: 'Pavan Goyal' }],
    isbn: '',
    pageCount: 280,
    purchaseUrl: 'https://amzn.in/d/09xLf6FE',
  },
};

// Post-process: replace all legacy domain references with canonical SITE_URL
const processed = JSON.parse(
  JSON.stringify(siteContent)
    .replace(/https:\/\/siddheshv1\.lovable\.app/g, SITE_URL)
    .replace(/https:\/\/bb-researchv2\.vercel\.app/g, SITE_URL)
);

// Enrich every page with _cpt, _status, and fields
Object.keys(processed.pages).forEach((route) => {
  const page = processed.pages[route];
  page._cpt = CPT_MAP[route] || 'page';
  page._status = 'published';
  if (FIELDS_MAP[route]) {
    page.fields = FIELDS_MAP[route];
  }
});

export default processed;
