// Single source of truth for all site content
// All page copy and structure comes from this file

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
    { label: "Home", path: "/" },
    { label: "The Institute", path: "/the-institute" },
    { label: "Methodology", path: "/methodology" },
    { label: "Publications", path: "/publications" },
    { label: "Governance", path: "/governance" },
    { label: "Collaborate", path: "/collaborate" },
    { label: "Newsroom", path: "/newsroom" },
    { label: "Contact", path: "/contact" },
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
            "We are compiling the most granular dataset on human innovation capacity from birth to age 18. 15 years completed; Year 16 ongoing. Embedded observation across toddlers, elementary students, and adolescents. Not lab experiments. Not surveys. Daily records of what children actually do when given real engineering challenges.",
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
            "Universities have research funding and the PhDs, but lack long-term access to developing children. Schools have children for 15 years, but no research infrastructure. Blue Blocks Micro Research Institute runs both. By embedding a Micro-research Institute within a Montessori environment, we capture the data universities miss, the granular, day-by-day evolution of innovation capacity.\n\nThis depth requires us to reject the sporadic nature of clinical studies. Instead, we deploy Micro-Research: a continuous protocol of high-frequency, embedded data capture. We consciously sacrifice the sterile control of the laboratory for the 'Ecological Truth' of the living environment, prioritizing authentic behavior over artificial isolation.",
          items: [
            {
              title: "Longitudinal Continuity (0-18)",
              body:
                "Most child development studies observe children once or twice. We've tracked the same children continuously through our Embedded Research Fellows from age 3 to 18. 15 years completed; Year 16 ongoing. This continuity shows us the trajectory of how capabilities develop not just what children can do at one moment, but proving that the engineer of 18 is built by the sensorial explorer of 3."
            },
            {
              title: "Ecological Validity - Real Projects, Not Lab Tasks",
              body:
                "We reject the 'Goldfish Bowl' fallacy of academic research. Children in sterile labs behave like subjects; children in Innovation Labs behave like engineers. Our data is derived from TRL-9 ecosystems where the risk of failure is real, not simulated. When we observe problem-solving behavior, children are solving actual problems by designing flight hardware, not completing worksheets about flight hardware; they are actually saving a mission."
            },
            {
              title: "Sovereign Intellectual Property",
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
                "Blue Blocks Montessori School, in technical collaboration with TakeMe2Space, integrated a 1U payload aboard ISRO PSLV-C62. The Blue Blocks Micro Research Institute served as the pedagogical partner, structuring the mission to test adolescent resilience. While the payload met all flight qualifications (Thermal/Vibration), the launch vehicle's Stage 4 ignition failure at T+847 seconds provided the ultimate lesson. The mission outcome validated the curriculum not through orbital success, but through Valorization: proving to the students that their engineering was \\\"real enough to fail in real ways.",
              action: { label: "Read Technical Brief", href: "/technical-briefs/sbb-1" }
            },
            {
              tag: "IMF Annual Meetings",
              headline: "Marrakesh: Defining Future Human Capital",
              body:
                "Blue Blocks Micro Research Institute's pedagogical framework was presented as a scalable model for \\\"Innovation Economies.\\\" The case study highlighted how early-stage exposure to high-stakes engineering creates a resilient R&D pipeline for the nation. Focus: Investigating whether early exposure to high-stakes engineering impacts long-term innovation capacity. Longitudinal Hypothesis: We posit that adolescents exposed to TRL-9 constraints (Technology Readiness Level 9) develop significantly higher 'Problem-Solving Agency' by the time they reach tertiary education. Preliminary Findings: While full data maturation is projected for 2026-2030, early indicators suggest a strong correlation: students who held utility patents between ages 12-16 are already pursuing STEM majors at markedly higher rates than matched control groups.",
              action: { label: "View Presentation", href: "/presentations/marrakesh-human-capital" }
            },
            {
              tag: "International Diplomacy / MONISC",
              headline: "Oslo Summit: A Global Benchmark",
              body:
                "On January 28, 2026, at the Nobel Peace Center, Founder Pavan Goyal delivered the \\\"World Premiere\\\" of the Blue Blocks Innovation Pedagogy (0–18). Selected by the Monisc Committee (supported by the Norwegian UNESCO Commission) as a \\\"global benchmark\\\" for integrating space science, this session formally releases our student-generated datasets to the international network. The Zenodo archive preserves the complete administrative context: the Official Invitation, the Pedagogical Framework presentation, and the open-data release protocols.",
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
                "Defining the protocol for 25 embedded fellows to document behavioral data without disrupting the \\\"Children's House\\\" environment."
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
                "Synthesizing 5 years of data from the Drone Research Centre to map the cognitive leap from \\\"play\\\" to \\\"invention.\\\""
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
              q: "What does \\\"Micro Research\\\" mean?",
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
                "We rely on \\\"Ecological Consistency\\\" rather than sterile isolation. Standard clinical studies often suffer from the \\\"Visitor Effect\\\"—where research subjects exhibit altered behavior because a stranger is watching. Our data is collected by Embedded Research Fellows (the students' daily guides) who have spent 35,000+ hours with the students. This invisibility allows us to detect subtle, naturalistic developmental patterns that sporadic external observation invariably misses."
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
              description: "Administrative records, case studies, datasets, and open science archives.",
              image: "https://images.unsplash.com/photo-1450101215322-bf5cd27642fc?auto=format&fit=crop&w=1200&q=80",
              button: { label: "Browse Publications", href: "/publications" }
            },
            {
              title: "Patents",
              description: "Student innovation outcomes, patent filings, and technical documentation.",
              image: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=1200&q=80",
              button: { label: "View Patents", href: "/patents" }
            },
            {
              title: "Books",
              description: "Long-form publications supporting families, educators, and research partners.",
              image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80",
              button: { label: "Explore Books", href: "/books" }
            },
            {
              title: "Team",
              description: "Researchers, embedded fellows, leadership, and institutional collaborators.",
              image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
              button: { label: "Meet the Team", href: "/team" }
            },
            {
              title: "Downloads",
              description: "Technical briefs, presentations, proceedings, and public documents.",
              image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80",
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
            { title: "Governance", description: "IRB-aligned standards and oversight.", icon: "governance", href: "/governance" }
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
              name: "Why not run a proper clinical study with control groups?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "We believe that laboratory isolation distorts natural behavior. A child solving a puzzle in front of a 'researcher' is not the same child building a drone in their own lab space. Ecological truth comes from embedding observation into daily environment. In micro-research, every child is both subject and agent — the environment doesn't adapt to research; research adapts to the environment."
              }
            },
            {
              "@type": "Question",
              name: "How do you maintain scientific rigor without a control group?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "By maintaining 15 years of continuous internal comparison: the same children, tracked over time, compared against themselves at earlier developmental stages."
              }
            }
          ]
        }
      ],
      sections: [
        {
          id: "meth-hero",
          type: "hero",
          variant: "stark",
          headline: "The Micro Research Framework.",
          subheadline:
            "Micro Research is not a shortcut. It is a protocol—designed for practitioners, not PhDs. The core principle is simple: high-frequency observation accumulated over years produces the same statistical power as large-sample, one-time studies. But with one crucial advantage: you track the same individual across time instead of comparing strangers. We know how Subject-847 was at age 5, at age 12, and at age 17. No cross-sectional study can do that.",
          primaryCta: { label: "Download Framework Paper", href: "/downloads/micro-research-framework" },
          secondaryCta: { label: "View Publications", href: "/publications" },
          image: {
            src: "/src/assets/banners/methodology-framework.jpg",
            alt: "Methodology framework visual",
            variant: "hero",
            privacyBlur: false,
            caption: ""
          }
        },

        {
          id: "meth-principles",
          type: "grid3",
          header: "The Microprotocol Stack",
          intro:
            "Each observation follows a bounded protocol: single variable, under 5 minutes, executed by the practitioner (not an external observer). Hundreds of these micro-observations, compiled over years, form the dataset. Statistical power comes from longitudinal accumulation, not sample scale.",
          items: [
            {
              title: "Bounded Observations",
              icon: "clock",
              body:
                "Each observation unit must be scoped to a single variable and recordable in under 5 minutes. Complexity emerges from volume, not from individual observation depth."
            },
            {
              title: "Practitioner Execution",
              icon: "user",
              body:
                "Observation is executed by embedded guides—not external researchers. This minimizes the 'Visitor Effect' that distorts natural behavior."
            },
            {
              title: "Publication Intent",
              icon: "file",
              body:
                "Every observation record is generated with the expectation of eventual publication. This shifts the quality of documentation from 'notes' to 'evidence.'"
            }
          ]
        },

        {
          id: "meth-timeline",
          type: "timeline",
          header: "From Observation to Archival: The Data Lifecycle",
          items: [
            {
              title: "Capture",
              body: "Embedded Fellow observes naturalistic behavior and logs structured notes."
            },
            {
              title: "Tag & Store",
              body: "Data is coded, anonymized, and archived in the Data Wing."
            },
            {
              title: "Aggregate",
              body: "Multiple observations are synthesized into pattern summaries."
            },
            {
              title: "Analyze",
              body: "Research Council reviews patterns for statistical significance."
            },
            {
              title: "Publish",
              body: "DOI-assigned publications are archived to Zenodo for open access."
            }
          ]
        },

        {
          id: "meth-ecological",
          type: "textBlock",
          header: "Ecological Validity vs. Laboratory Control",
          body:
            "We prioritize 'Ecological Truth' over sterile experimentation. By embedding our protocols in the actual learning environment, we capture data that is representative of real behavior — not laboratory simulations. Yes, this introduces variance — but the variance is authentic. A drone built by a 10-year-old in our lab will fail for real reasons — not sanitized ones. We observe what children actually do when solving real problems, not what they do when being studied."
        },

        {
          id: "meth-comparison",
          type: "comparisonTable",
          header: "Clinical Studies vs. Micro Research",
          columns: ["Clinical Studies", "Micro Research"],
          rows: [
            { label: "Sample Size", values: ["Large (statistical power)", "Longitudinal (temporal power)"] },
            { label: "Observation Duration", values: ["Single point / short-term", "Years / Continuous"] },
            { label: "Observer", values: ["External Researcher", "Embedded Practitioner"] },
            { label: "Setting", values: ["Lab / Controlled", "Naturalistic / Ecological"] },
            { label: "Behavioral Validity", values: ["Subject to 'Visitor Effect'", "High Ecological Validity"] }
          ]
        },

        {
          id: "meth-faq",
          type: "accordion",
          header: "Methodological FAQs",
          items: [
            {
              q: "Why not run a proper clinical study with control groups?",
              a:
                "We believe that laboratory isolation distorts natural behavior. A child solving a puzzle in front of a 'researcher' is not the same child building a drone in their own lab space. Ecological truth comes from embedding observation into daily environment. In micro-research, every child is both subject and agent — the environment doesn't adapt to research; research adapts to the environment."
            },
            {
              q: "How do you maintain scientific rigor without a control group?",
              a:
                "By maintaining 15 years of continuous internal comparison: the same children, tracked over time, compared against themselves at earlier developmental stages. We don't need to compare Child A to Child B; we compare Child A at age 5 to Child A at age 15. Each child becomes their own control over the longitudinal arc."
            },
            {
              q: "Are your findings reproducible?",
              a:
                "The protocols are reproducible. The dataset is unique. Our goal is to make the methodology framework open-source via Zenodo so that other embedded institutions can replicate the approach."
            },
            {
              q: "What software do you use?",
              a:
                "Observation logging is internal (custom forms). Data processing is handled in the Data Wing. Analysis uses standard statistical tools. Final publications are prepared in LaTeX / PDF."
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
          headline: "Publications & Open Science.",
          subheadline:
            "This is the institutional research docket. Papers, frameworks, and intellectual property generated through 15 years of embedded longitudinal research. We operate on Open Science principles—methodology papers, anonymized datasets, and outcome reports are archived in Zenodo for public access. Five utility patents filed to date.",
          primaryCta: { label: "Browse Zenodo Archive", href: "https://zenodo.org/", external: true },
          secondaryCta: { label: "View Methodology", href: "/methodology" },
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
          text:
            "DOCKET STATUS: Active (2026 Cycle) /// MANUSCRIPTS IN REVIEW: 3 /// DOI ASSIGNMENTS: Pending /// OPEN ACCESS: CC-BY-4.0"
        },

        {
          id: "publications-list",
          type: "cards",
          header: "Published Records",
          intro: "Formal publications with DOI identifiers, archived for citation and institutional traceability.",
          variant: "blogGrid",
          cards: [
            {
              tag: "Administrative Record",
              headline: "IN-SPACe Authorization Letter (SBB-1 / Blue Blocks)",
              meta: "DOI: 10.5281/zenodo.18195108 • January 2026",
              body: "Official authorization record for the SBB-1 mission activity, preserved as a permanent institutional artifact for governance traceability.",
              cta: { label: "View Publication", href: "/publications/in-space-authorization-letter" },
              image: { src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=800&q=80", alt: "Mission control", variant: "card" }
            },
            {
              tag: "IMF Case Study",
              headline: "SAPARYA: Building Innovation Capacity (0–18) Through Embedded Research",
              meta: "IMF 7th National Montessori Conference • November 2024",
              body: "Case study documenting the pedagogical framework and preliminary findings from the SAPARYA initiative.",
              cta: { label: "View Publication", href: "/publications/saparya-imf-case-study" },
              image: { src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80", alt: "Conference presentation", variant: "card" }
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
              headline: "The \\\"Sovereign IP\\\" Effect: Longitudinal Impact of Patent Ownership",
              meta: "Domain: Innovation | Est: 2027",
              body:
                "Synthesizing 5 years of data from the Drone Research Centre to map the cognitive leap from \\\"play\\\" to \\\"invention.\\\"",
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
          intro: "Highlighted outcomes currently in examination or filing preparation. Five utility patents filed to date.",
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
            { title: "Governance", description: "IRB-aligned standards.", icon: "governance", href: "/governance" }
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
        canonical: "https://siddheshv1.lovable.app/governance",
        robots: "noindex,nofollow,noarchive,nosnippet",
        openGraph: {
          type: "website",
          url: "https://siddheshv1.lovable.app/governance",
          title: "Governance & Oversight",
          description:
            "Protocols and oversight ensuring pedagogical integrity, privacy, and IRB-aligned research standards.",
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
          "@type": "WebPage",
          name: "Governance & Oversight",
          url: "https://siddheshv1.lovable.app/governance",
          isPartOf: { "@type": "WebSite", url: "https://siddheshv1.lovable.app/" },
          about: { "@type": "Thing", name: "Research governance and IRB alignment" }
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://siddheshv1.lovable.app/" },
            { "@type": "ListItem", position: 2, name: "Governance", item: "https://siddheshv1.lovable.app/governance" }
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
            "Our research framework is guided by a commitment to Pedagogical Integrity. The Blue Blocks Micro Research Institute's advisory council ensures that all protocols align with both Montessori Principles and Global Privacy Standards (IRB). We prioritize a 'Child-First' methodology, where scientific observation seamlessly integrates with, and respects, the educational environment. Every observation protocol gets reviewed before launch.",
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
              image: { src: "/src/assets/placeholders/avatars/pavan.jpg", alt: "Pavan Goyal", variant: "avatar", privacyBlur: false },
              cta: { label: "View Profile", href: "/team/pavan-goyal" }
            },
            {
              headline: "Munira Hussain",
              tag: "Director of Pedagogy",
              body:
                "Credentials: AMI Diploma / M.Ed\n\nEnsures all research protocols integrate seamlessly with the Montessori curriculum without disrupting the 'Children's House.'",
              image: { src: "/src/assets/placeholders/avatars/munira.jpg", alt: "Munira Hussain", variant: "avatar", privacyBlur: false },
              cta: { label: "View Profile", href: "/team/munira-hussain" }
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
                "Raw data is retained for the duration of the longitudinal study (15 years completed; Year 16 ongoing). Access tiers: (1) Open Access—published papers, aggregate stats. (2) Researcher Access—de-identified datasets, requires IRB + DUA. (3) Internal Only—identifiable data, staff only."
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
            "All Intellectual Property created by students remains attributed to the student inventors. Blue Blocks Micro Research Institute facilitates the filing process and provides the pedagogical context but does not claim ownership. Five utility patents filed to date by elementary-aged students. Patents are filed under the inventors' names with institutional support. Licensing inquiries can be directed through the Contact page."
        },

        {
          id: "gov-faq",
          type: "accordion",
          header: "Governance FAQs",
          items: [
            {
              q: "Who is responsible for ethical oversight?",
              a:
                "The Research Council provides independent oversight. All protocols are reviewed before launch."
            },
            {
              q: "Can parents withdraw consent?",
              a:
                "Yes, at any time. Withdrawal removes future observations but does not retroactively remove anonymized data already aggregated."
            },
            {
              q: "How do you prevent re-identification?",
              a:
                "We use k-anonymity: no combination of published variables (age range, school type, city) produces a group smaller than k=5. Individual re-identification is structurally prevented."
            }
          ]
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
          "@type": "WebPage",
          name: "Collaborate",
          url: "https://siddheshv1.lovable.app/collaborate",
          isPartOf: { "@type": "WebSite", url: "https://siddheshv1.lovable.app/" },
          about: { "@type": "Thing", name: "Research collaboration and data access" }
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://siddheshv1.lovable.app/" },
            { "@type": "ListItem", position: 2, name: "Collaborate", item: "https://siddheshv1.lovable.app/collaborate" }
          ]
        }
      ],
      sections: [
        {
          id: "collab-hero",
          type: "hero",
          variant: "stark",
          headline: "Collaborate.",
          subheadline:
            "The Blue Blocks Micro Research Institute welcomes proposals from researchers, industry partners, and policy makers. Access to longitudinal datasets requires formal application and IRB alignment. 15 years of data; five utility patents filed to date.",
          primaryCta: { label: "Submit Proposal", href: "#collaborate-form" },
          secondaryCta: { label: "View Governance", href: "/governance" },
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
          type: "grid3",
          header: "Collaboration Tracks",
          intro:
            "Select the pathway that matches your institutional context. All tracks require formal application.",
          items: [
            {
              title: "Academic Research",
              icon: "microscope",
              body:
                "For PhD students, postdocs, and faculty seeking access to de-identified datasets. Requires IRB approval from your institution and a signed Data Use Agreement.",
              cta: { label: "Apply for Access", href: "#collaborate-form" }
            },
            {
              title: "Industry Partnership",
              icon: "building",
              body:
                "For organizations exploring educational methodology or innovation pipeline development. Proposals reviewed by the Research Council.",
              cta: { label: "Submit Proposal", href: "#collaborate-form" }
            },
            {
              title: "Visiting Fellowship",
              icon: "user",
              body:
                "2-8 week residency in the archive with full dataset access. Applications open for the 2026 Winter Residency.",
              cta: { label: "Apply for Fellowship", href: "#collaborate-form" }
            }
          ]
        },

        {
          id: "collab-logos",
          type: "logoStrip",
          header: "Institutional Affiliations",
          intro: "We work with academic partners and regulatory bodies.",
          logos: [
            { name: "ISRO", src: "/src/assets/brand/isro-logo.jpg", alt: "ISRO logo" },
            { name: "IN-SPACe", src: "/src/assets/brand/inspace-logo.png", alt: "IN-SPACe logo" },
            { name: "IIT Hyderabad", src: "/src/assets/brand/iit-hyderabad-logo.png", alt: "IIT Hyderabad logo" },
            { name: "AMI", src: "/src/assets/brand/ami-logo.png", alt: "AMI logo" }
          ]
        },

        {
          id: "collaborate-form",
          type: "form",
          header: "Submit a Collaboration Proposal",
          intro:
            "Use this form to submit a formal proposal. Include sufficient detail for the Research Council to evaluate alignment with our protocols.",
          submit: {
            to: "research@blueblocks.in",
            subject: "Collaboration Proposal — Blue Blocks Micro Research Institute",
            successMessage: "Draft email opened in your mail client."
          },
          fields: [
            { name: "name", label: "Full Name", type: "text", required: true },
            { name: "email", label: "Institutional Email", type: "email", required: true },
            { name: "affiliation", label: "Institution / Organization", type: "text", required: true },
            {
              name: "track",
              label: "Collaboration Track",
              type: "select",
              required: true,
              options: [
                { label: "Academic Research", value: "academic" },
                { label: "Industry Partnership", value: "industry" },
                { label: "Visiting Fellowship", value: "fellowship" },
                { label: "Other", value: "other" }
              ]
            },
            {
              name: "proposal",
              label: "Proposal Summary",
              type: "textarea",
              required: true,
              placeholder: "Briefly describe your research interest, expected outcomes, and how access to our dataset would support your work."
            },
            {
              name: "irb",
              label: "Do you have IRB approval?",
              type: "select",
              required: false,
              options: [
                { label: "Yes", value: "yes" },
                { label: "In Progress", value: "in-progress" },
                { label: "Not Yet", value: "no" },
                { label: "Not Applicable", value: "na" }
              ]
            }
          ]
        },

        {
          id: "collab-faq",
          type: "accordion",
          header: "Collaboration FAQs",
          items: [
            {
              q: "How long does the review process take?",
              a:
                "Initial response within 5 business days. Full review takes 2-4 weeks depending on complexity and IRB requirements."
            },
            {
              q: "Can I access identifiable data?",
              a:
                "No. External researchers only access de-identified datasets. Identifiable data remains internal only."
            },
            {
              q: "Do you charge for data access?",
              a:
                "Open Access materials are free. Researcher access may involve administrative fees for DUA processing."
            },
            {
              q: "Can I visit the Innovation Labs?",
              a:
                "Through the Visiting Fellowship track only. Casual visits are not permitted to protect the educational environment."
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
            { title: "Governance", description: "IRB-aligned standards.", icon: "governance", href: "/governance" }
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
          primaryCta: { label: "Subscribe to Monthly Digest", href: "#digest-form" },
          secondaryCta: { label: "Download Media Kit >", href: "/downloads" },
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
                "Blue Blocks Micro Research Institute student projects have been selected for exhibition as exemplars of \\\"Youth-Led Innovation,\\\" validating our 0-18 Sovereignty Model on a global stage.",
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
              headline: "Utility Patent #4421 Filed: The \\\"Guardian\\\" Drone",
              meta: "September 02, 2025",
              body:
                "The Drone Research Centre has filed its fifth utility patent, marking a significant milestone in our study of 'Innovation Agency' in the 9-11 age group. Five utility patents filed to date.",
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
          intro: "What journalists need to cover the Blue Blocks Micro Research Institute accurately.",
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
                "Correct naming conventions for \\\"Blue Blocks Micro Research Institute\\\" and DOI referencing styles.",
              cta: { label: "View Style Guide", href: "/publications" }
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
            src: "/src/assets/banners/contact-hero.jpg",
            alt: "Contact page visual",
            variant: "hero",
            privacyBlur: false,
            caption: ""
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
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Privacy Policy",
          url: "https://siddheshv1.lovable.app/privacy",
          isPartOf: { "@type": "WebSite", url: "https://siddheshv1.lovable.app/" }
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://siddheshv1.lovable.app/" },
            { "@type": "ListItem", position: 2, name: "Privacy Policy", item: "https://siddheshv1.lovable.app/privacy" }
          ]
        }
      ],
      sections: [
        {
          id: "privacy-content",
          type: "textBlock",
          header: "Privacy Policy",
          body:
            "Blue Blocks Micro Research Institute is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your information when you visit our website or engage with our research data."
        }
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
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Terms of Use",
          url: "https://siddheshv1.lovable.app/terms",
          isPartOf: { "@type": "WebSite", url: "https://siddheshv1.lovable.app/" }
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://siddheshv1.lovable.app/" },
            { "@type": "ListItem", position: 2, name: "Terms of Use", item: "https://siddheshv1.lovable.app/terms" }
          ]
        }
      ],
      sections: [
        {
          id: "terms-content",
          type: "textBlock",
          header: "Terms of Use",
          body:
            "By accessing or using the Blue Blocks Micro Research Institute website, you agree to comply with these terms. Please read them carefully before using our services."
        }
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
          id: "tech-brief-hero",
          type: "hero",
          variant: "stark",
          headline: "Technical Brief: SBB-1",
          subheadline:
            "Comprehensive technical documentation of the SBB-1 CubeSat payload, flight qualification, and mission outcomes.",
          primaryCta: { label: "Download Full Brief", href: "/downloads/sbb-1-technical-brief" },
          image: {
            src: "/src/assets/banners/technical-briefs/sbb-1.jpg",
            alt: "SBB-1 technical brief visual",
            variant: "hero",
            privacyBlur: false,
            caption: ""
          }
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
          primaryCta: { label: "Download Proceedings", href: "/downloads/oslo-2026-proceedings" },
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
          subheadline:
            "Access media kits, research frameworks, and institutional documents for press and academic use.",
          primaryCta: { label: "Request Media Kit", href: "/downloads/media-kit" },
          image: {
            src: "/src/assets/banners/downloads.jpg",
            alt: "Downloads page visual",
            variant: "hero",
            privacyBlur: false,
            caption: ""
          }
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
          primaryCta: { label: "Login", href: "/staff-login" },
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
          id: "sitemap-content",
          type: "textBlock",
          header: "Sitemap",
          body:
            "This page provides a comprehensive overview of all pages and resources available on the Blue Blocks Micro Research Institute website."
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
          subheadline:
            "Explore long-form publications and books authored or curated by Blue Blocks Micro Research Institute.",
          primaryCta: { label: "Browse Books", href: "/books" },
          image: {
            src: "/src/assets/banners/books.jpg",
            alt: "Books collection visual",
            variant: "hero",
            privacyBlur: false,
            caption: ""
          }
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
          headline: "Patents",
          subheadline:
            "Five utility patents filed to date by Blue Blocks Micro Research Institute students. Explore the registry and learn about our intellectual property.",
          primaryCta: { label: "View Patent Registry", href: "/patents" },
          image: {
            src: "/src/assets/banners/patents.jpg",
            alt: "Patents registry visual",
            variant: "hero",
            privacyBlur: false,
            caption: ""
          }
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
          subheadline:
            "Meet the leadership, researchers, and staff who drive the Blue Blocks Micro Research Institute's mission.",
          primaryCta: { label: "View Profiles", href: "/team" },
          image: {
            src: "/src/assets/banners/team.jpg",
            alt: "Team members visual",
            variant: "hero",
            privacyBlur: false,
            caption: ""
          }
        }
      ]
    }
  },
};

export default siteContent;
