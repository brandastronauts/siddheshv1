// Single source of truth for all site content
// All page copy and structure comes from this file

const SITE_URL = 'https://research.blueblocks.in';

const siteContent = {
  brand: {
    siteName: "Blue Blocks Micro Research Institute",
    headerTagline: "Micro Research Institute",
    ethicsTagline: "Compiling the world's first longitudinal dataset on human innovation capacity from birth to age 18. 17 years completed; Year 18 ongoing.",
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
      { label: "Limitations", path: "/methodology/limitations", icon: "alert" },
      { label: "Tools for Researchers", path: "/methodology/tools", icon: "download" },
    ]},
    { label: "Publications", path: "/publications", icon: "publication", children: [
      { label: "Open Data Access", path: "/publications/data", icon: "database" },
      { label: "Glossary", path: "/publications/glossary", icon: "bookOpen" },
    ]},
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
        "17-year longitudinal panel of 1045 children tracking human innovation capacity from birth to age 18. Embedded observation within an AMI Montessori environment in Hyderabad, India.",
      
      seo: {
        title: "Children are the Data",
        canonical: "https://research.blueblocks.in/",
        robots: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
        openGraph: {
          type: "website",
          url: "https://research.blueblocks.in/",
          title: "Children are the Data",
          description:
            "17-year longitudinal panel of 1045 children tracking human innovation capacity from birth to age 18. Embedded observation within an AMI Montessori environment in Hyderabad, India.",
          image: {
            url: "https://research.blueblocks.in/images/og-home.jpg",
            width: 1200,
            height: 630,
            alt: "Children are the Data"
          }
        },
        twitter: {
          card: "summary_large_image",
          title: "Children are the Data",
          description:
            "17-year longitudinal panel of 1045 children tracking human innovation capacity from birth to age 18. Embedded observation within an AMI Montessori environment in Hyderabad, India.",
          image: "https://research.blueblocks.in/images/og-home.jpg"
        }
      },

      // Schemas managed by seoSchemaConfig.js for this route

      sections: [
        {
          id: "home-hero",
          type: "hero",
          variant: "precision",
          headline: "Children Are the Data",
          subheadline:
            "**17 years - 1045 children - Continuous Observation - Real Evidence**",
          primaryCta: { label: "Read the Methodology Paper", href: "/methodology#meth-framework-papers" },
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
          header: "What Makes Us Different",
          intro:
            "Blue Blocks Micro Research Institute lives inside [Blue Blocks Montessori School](https://www.blueblocks.in). Our educators are our researchers. Our data never leaves context.\n\nMost institutions study children from the outside. We observe from within the same daily environment, across years, tracking how innovation capacity forms — not in snapshots, but across a full developmental arc.\n\nFindings re-enter the classroom within weeks. Observation generates research. Research changes practice. Practice generates new questions. The cycle never stops.\n\nThe classroom and the research are intertwined and work in harmony.",
          items: [
            {
              title: "Longitudinal Continuity (0-18)",
              icon: "calendar",
              body:
                "Most child development studies observe children once or twice. We've tracked the same children continuously through our Embedded Research Fellows from age 3 to 18. 17 years completed; Year 18 ongoing. This continuity shows us the trajectory of how capabilities develop not just what children can do at one moment, but proving that the engineer of 18 is built by the sensorial explorer of 3."
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
            },
            {
              tag: "Press Release / Child Development",
              headline: "Children With Restricted Screen Time Develop Sophisticated Geopolitical Reasoning",
              body:
                "A new case study documents how 28 school children aged 6–16, raised in households with restricted screen time, processed the Iran crisis of 2026 through family conversation, peer discussion, and newspapers alone. Teenagers independently constructed nuclear deterrence logic; six-year-olds across three independent groups defaulted to legal process over violence — without coordination.",
              action: { label: "Read Press Release →", href: "/newsroom/dispatch/iran-crisis-study-press-release" }
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
                "It is a protocol of small-scale, high-frequency observation studies that run continuously for years. Rather than conducting one large study on 'how children learn math,' we execute 20+ micro-studies per year—each addressing one specific variable, recordable in under 5 minutes, sustained over time. The power of 'Micro' lies in accumulation; over 17 years, 200+ studies, 1045 children generating a granular dataset becomes significant."
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
              title: "Methodology",
              icon: "methodology",
              description: "Research design, observation protocols, and the micro-research framework.",
              image: "https://images.unsplash.com/photo-1450101215322-bf5cd27642fc?auto=format&fit=crop&w=1600&q=80",
              button: { label: "View Methodology", href: "/methodology" }
            },
            {
              title: "Governance",
              icon: "governance",
              description: "Ethics, compliance, research standards, and institutional oversight.",
              image: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=1600&q=80",
              button: { label: "View Governance", href: "/governance" }
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
        "The 0–18 Continuum: a longitudinal, embedded micro-research institution tracking human innovation capacity. 17 years completed; Year 18 ongoing.",
      seo: {
        title: "The 0–18 Continuum | The Institute | Blue Blocks Micro Research Institute",
        canonical: "https://siddheshv1.lovable.app/the-institute",
        robots: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
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
                  "Published datasets use codes instead of names (Subject-1045-A, not personal identities). Photos are blurred/cropped. No combination of data points allows re-identification."
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
            "We are a new category of research institution—built for questions that require decades, not semesters. By embedding rigorous observation protocols into a living Montessori environment, we have created the world's longest continuous record of human innovation capacity. Most child development studies observe children once or twice. We've been watching the same children for seventeen years. 17 years completed; Year 18 ongoing. Not surveys. Not lab visits. Daily observation records from their actual teachers, in their actual classrooms, working on actual problems.",
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
            "PROTOCOL STATUS: Active Observation Cycle (Year 18) /// COHORT: N=1045 Subjects (0-18) /// DATA INTEGRITY: Longitudinal Continuity [100%] /// CURRENT PHASE: TRL-9 Outcome Correlation"
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
            "We built an institution where research never ends because the environment never changes. By integrating the 'School' and the 'Lab,' we maintain zero-attrition contact with our subjects. We do not just measure capacity; we document its entire developmental trajectory. Same children, same teachers, seventeen years. 17 years completed; Year 18 ongoing. When children graduate at 18, we have complete records from their first day to their last. No grant deadlines. No funding cycles. The research continues as long as the school operates."
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
                "Dedicated to the Longitudinal Panel on 'Iterative Failure.' Tracks the engineering lifecycle from initial aerodynamic testing to Patent-Ready flight stability.",
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
            { value: "17 Years", label: "Completed Observation" },
            { value: "1045", label: "Subjects Tracked (0-18)" },
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
                "Published datasets use codes instead of names (Subject-1045-A, not 'Rahul Kumar'). Specific school location becomes 'urban Montessori school, Hyderabad, India.' Photos: faces blurred or cropped out. No combination of data points allows re-identification."
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
                "We are building: (1) Longitudinal Behavioral Data from 1045 subjects, (2) Biometric & Sensory Log, (3) Academic Performance Correlation, (4) Patent & TRL Outcomes."
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
        robots: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
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
          primaryCta: { label: "View Framework Paper", href: "#meth-framework-papers" },
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
          type: "pillars",
          header: "The Four Pillars of Micro-Research — What makes a study \"Micro\"?",
          items: [
            {
              title: "Single Bounded Question",
              icon: "target",
              body:
                "Each protocol investigates exactly one question. \"How long does a three-year-old persist on the Pink Tower after initial mastery?\" — not \"How does persistence develop across sensorial materials?\" Compound questions get split into separate studies. This constraint forces clarity and enables replication."
            },
            {
              title: "Observable Behavior",
              icon: "eye",
              body:
                "We record actions, not inferences. \"Child returned to material three times\" — not \"Child showed interest.\" The observation record contains only behavior. Analysis comes later, separately, by different eyes. This discipline protects the data from the observer's expectations."
            },
            {
              title: "Minimal Footprint",
              icon: "feather",
              body:
                "Protocols must be completable in under five minutes by observers already present in the environment. No clipboards. No strangers. No disruption. We've learned — through failure — that consistency beats comprehensiveness. Five-minute protocols run for years. Twenty-minute protocols die in six weeks."
            },
            {
              title: "Publication-Ready",
              icon: "file",
              body:
                "Every protocol is designed as if it will be submitted for peer review. Not \"interesting to track\" — but \"worth publishing.\" This means pre-registered hypotheses, defined sample sizes, and DOI-ready data structures from day one. The discipline of designing for publication changes what we measure."
            }
          ]
        },

        {
          id: "meth-compound",
          type: "comparisonTable",
          header: "The Compound Effect — Why Twenty Small Studies Beat One Large Study?",
          intro:
            "Running one micro-study tells you almost nothing. Running two hundred over seventeen years builds a dataset that shows developmental patterns nobody else can see.",
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
          id: "meth-framework-papers",
          type: "frameworkPapers",
          header: "Our Framework Papers",
          papers: [
            {
              title: "Micro-Research Methodology Framework Paper-01",
              doi: "10.5281/zenodo.18584816",
              link: "https://doi.org/10.5281/zenodo.18584816",
              body: "Most schools produce student projects. Blue Blocks produces student research. The Micro-Research Methodology is how.\n\nDeveloped over seventeen years of classroom practice, this framework turns everyday school activities — a workshop, a field trip, a child's unexpected question — into tightly scoped research cycles with defined observation protocols, compact datasets, and publication-ready outputs. Studies run two to six weeks. Data stays small and manageable. The educational environment stays undisturbed.\n\nThe methodology was designed for one specific problem: schools generate thousands of hours of rich observational data every year, and almost all of it is lost. Micro-Research captures it — rigorously, ethically, and at a scale that teachers and students can sustain without disrupting the work that matters most.\n\nEvery Blue Blocks Micro Research Institute's publication uses this framework. It is the methodological foundation for our work across child development, STEM innovation, developmental psychology, and Montessori implementation research."
            },
            {
              title: "Participatory Scientist-Child Co-Authorship Framework — Paper 02",
              doi: "10.5281/zenodo.18584890",
              link: "https://doi.org/10.5281/zenodo.18584890",
              body: "When a thirteen-year-old designs a flight-grade avionics board, or a six-year-old's question reshapes an architectural investigation, who gets credit?\n\nThis paper answers that question with a formal framework. It defines explicit contribution thresholds that children must meet to qualify as co-authors on scientific publications — original ideas, design contributions, data generation — while reserving analytical interpretation and statistical responsibilities for adult researchers. The framework includes ethics and safeguarding protocols for consent, anonymization, and protection against researcher bias when working with minors.\n\nThe result is a replicable pathway from classroom innovation to peer-reviewed authorship. Not a token \"student project showcase.\" Actual co-authorship, with defined criteria, on published research.\n\nThis is the first full application of this framework — seventeen adolescents listed as co-authors because they met every threshold the framework defines."
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
        robots: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
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
            { "@type": "WebPage", url: "https://siddheshv1.lovable.app/publications/saparya-imf-case-study" },
            { "@type": "WebPage", url: "https://siddheshv1.lovable.app/publications/iran-war-case-study" }
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
              headline: "In-SPACe Authorization Letter (SBB-1 / Blueblocks)",
              meta: "DOI: 10.5281/zenodo.18195108",
              body: "IN-SPACe authorization certificate for the SBB-1 CubeSat payload. Archived for governance traceability, regulatory documentation continuity, and citation permanence.",
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
            },
            {
              tag: "Published Case Study",
              headline: "Age-Differentiated Responses to Geopolitical Violence: Iran Crisis 2026",
              meta: "DOI: 10.5281/zenodo.18996507",
              body: "This record archives a qualitative case study documenting how children aged 6–16 at an AMI-guided Montessori school in Hyderabad, India, responded emotionally, cognitively, and morally to the Iran crisis following the assassination of Supreme Leader Ayatollah Ali Khamenei on 28 February 2026. The study was conducted by the Blue Blocks Micro Research Institute between 5 and 10 March 2026 — within days of the conflict's escalation — making it a real-time documentation of children's responses to a live geopolitical event.",
              cta: { label: "View Publication", href: "/publications/iran-war-case-study" },
              image: { src: "/src/assets/placeholders/labs/protocol-notes.jpg", alt: "Iran crisis case study", variant: "card" }
            },
            {
              tag: "Published Case Study · Adolescent Research · Neurodiversity",
              headline: "Adolescents Interview a Neurodivergent-Run Kitchen — And Redesign Their Own Questions",
              meta: "DOI: 10.5281/zenodo.19219065",
              body: "Erdkinder adolescents designed a 25-question instrument, visited a cloud kitchen run by neurodivergent adults, and rewrote their approach mid-interview. What they chose to report reveals more about children's research instincts than what they were told.",
              cta: { label: "View Publication", href: "/publications/flipside-case-study" },
              image: { src: "/src/assets/placeholders/labs/protocol-notes.jpg", alt: "Flipside case study", variant: "card" }
            },
            {
              tag: "Published Case Study · Adolescent Research · Civic Reasoning · Erdkinder · Structured Debate",
              headline: "Adolescents Who Switched Sides Mid-Debate and Argued Better for It",
              meta: "DOI: 10.5281/zenodo.19480752",
              body: "Twelve Erdkinder adolescents were assigned positions in a live civic debate on voting age — then told, without warning, to switch sides at the halfway mark. Neither team collapsed. Several students turned their own Phase 1 arguments against themselves in Phase 2, producing richer reasoning than before the switch. The finding is not that debate builds civic thinking. The finding is that enforced perspective change might.",
              cta: { label: "Read the Case Study", href: "/publications/structured-debate-side-switch" },
              image: { src: "/src/assets/placeholders/labs/protocol-notes.jpg", alt: "Structured debate side switch case study", variant: "card" }
            },
            {
              tag: "Published Case Study · Adolescent Research · Resilience · Erdkinder · Engineering",
              headline: "When Children Encounter Designed Adversity",
              meta: "DOI: 10.5281/zenodo.19344032",
              body: "Twelve adolescents who lived through a real satellite failure face a new engineering challenge designed to break within thirty minutes. All four teams treated failure as a puzzle. The gap between what they wrote privately about their satellite and what they did publicly in the challenge is the finding that matters most.",
              cta: { label: "Read the Case Study", href: "/publications/resilience-workshop" },
              image: { src: "/src/assets/placeholders/labs/protocol-notes.jpg", alt: "Resilience workshop case study", variant: "card" }
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
              headline: "Academic Performance vs. Project Completion: 17-Year Montessori Cohort Analysis",
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
            "We are currently k-anonymizing 17 years of student records. The Variable Schemas are available for external review.",
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
        robots: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
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
              image: { src: "/src/assets/placeholders/avatars/srikar-avr.webp", alt: "Prof. AVR Srikar", variant: "avatar", privacyBlur: false }
            },
            {
              headline: "Prof. Apoorv Gogar",
              tag: "Methodological Oversight Advisor",
              body:
                "**Affiliation:** Indian School of Business\n\nReviews research design and business application frameworks for student innovation projects.",
              image: { src: "/src/assets/placeholders/avatars/apoorv-gogar.webp", alt: "Prof. Apoorv Gogar", variant: "avatar", privacyBlur: false }
            },
            {
              headline: "Rahul Jindal",
              tag: "Technology Validation Advisor",
              body:
                "**Affiliation:** Director, Google\n\nProvides technical review for software and systems architecture in student technology projects.",
              image: { src: "/src/assets/placeholders/avatars/rahul-jindal.webp", alt: "Rahul Jindal", variant: "avatar", privacyBlur: false }
            },
            {
              headline: "Sucheth Davaluri",
              tag: "Industry Validation Advisor",
              body:
                "**Affiliation:** Vice-Chairman & CEO, Neuland Laboratories\n\nReviews commercialization pathways and industry-readiness of student innovations.",
              image: { src: "/src/assets/placeholders/avatars/sucheth-davaluri.webp", alt: "Sucheth Davaluri", variant: "avatar", privacyBlur: false }
            },
            {
              headline: "Manish Gupta",
              tag: "Enterprise Technology Advisor",
              body:
                "**Affiliation:** Director, SAP\n\nEvaluates scalability and enterprise integration potential of student technology solutions.",
              image: { src: "/src/assets/placeholders/avatars/manish-gupta.webp", alt: "Manish Gupta", variant: "avatar", privacyBlur: false }
            },
            {
              headline: "Ronak Kumar",
              tag: "Aerospace Domain Advisor",
              body:
                "**Affiliation:** Founder, TakeMe2Space\n\nProvides technical mentorship and validation for Space Lab projects including satellite and propulsion initiatives.",
              image: { src: "/src/assets/placeholders/avatars/ronak-kumar.webp", alt: "Ronak Kumar", variant: "avatar", privacyBlur: false }
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
              headline: "Dr. Sreemoyee Chakraborty",
              tag: "STEM Research Lead | Palaeontology & Earth Sciences",
              body: "**Training:** PhD, Palaeontology (ISI / University of Calcutta)\n\nLeads fossil-based STEM research modules and scientific inquiry frameworks within the institute. Contributes domain expertise in paleoclimate interpretation, geological data modeling, and child-led scientific investigation design.",
              image: { src: "/src/assets/placeholders/avatars/sreemoyee-chakraborty.webp", alt: "Dr. Sreemoyee Chakraborty", variant: "avatar", privacyBlur: false },
              cta: { label: "View Profile", href: "/governance/team/dr-sreemoyee-chakraborty" }
            },
            {
              headline: "Dr. Shobha Ediga",
              tag: "Microbiological & Biochemical Research Lead",
              body: "**Training:** PhD, Plant Sciences (University of Hyderabad)\n\nProvides research oversight in biological sciences, laboratory methodologies, and adolescent-level scientific investigation. Supports integration of microbiology, biochemistry, and environmental inquiry within the Erdkinder research framework.",
              image: { src: "/src/assets/placeholders/avatars/shobha-ediga.webp", alt: "Dr. Shobha Ediga", variant: "avatar", privacyBlur: false },
              cta: { label: "View Profile", href: "/governance/team/dr-shobha-ediga" }
            },
            {
              headline: "Sandhya Rao M",
              tag: "AMI Elementary Guide | Biomimicry Educator",
              body: "**Training:** AMI Elementary Diploma; M.P.T. Community-Based Rehabilitation\n\nIntegrates Montessori pedagogy with structured research documentation in the Elementary environment. Contributes to interdisciplinary observation protocols, developmental research alignment, and nature-integrated inquiry frameworks.",
              image: { src: "/src/assets/placeholders/avatars/sandhya-rao.webp", alt: "Sandhya Rao M", variant: "avatar", privacyBlur: false },
              cta: { label: "View Profile", href: "/governance/team/sandhya-rao-m" }
            },
            {
              headline: "Sruthi Matta",
              tag: "Research Team Lead — Pedagogy & Innovation",
              body: "**Training:** Graduate Diploma in Journalism (Concordia University); AEC Media Strategies & Advertising; B.A. Humanities\n\nLeads research initiatives focused on pedagogy and innovation frameworks. Develops rapid-cycle micro-research protocols, interdisciplinary documentation models, and inquiry systems embedded within natural classroom environments.",
              image: { src: "/src/assets/placeholders/avatars/sruthi-matta.webp", alt: "Sruthi Matta", variant: "avatar", privacyBlur: false },
              cta: { label: "View Profile", href: "/governance/team/sruthi-matta" }
            },
            {
              headline: "Sreedhar Reddy Boddu",
              tag: "Research & Data Analyst",
              body: "**Training:** B.Tech Civil Engineering (NIT Goa); Data Science & Analytics Certifications\n\nSupports ETL processes, dashboard development, and structured data visualization for classroom observation records. Contributes to predictive modeling frameworks and KPI tracking within the institute's longitudinal dataset architecture.",
              image: { src: "/src/assets/placeholders/avatars/sreedhar-boddu.webp", alt: "Sreedhar Reddy Boddu", variant: "avatar", privacyBlur: false },
              cta: { label: "View Profile", href: "/governance/team/sreedhar-reddy-boddu" }
            },
            {
              headline: "D. Vinay Shyam Donakanti",
              tag: "Research Data Analyst Intern",
              body: "**Training:** B.Tech Computer Science & Data Science\n\nSupports digitization, coding, and structuring of Montessori observation records into standardized research datasets. Assists in data pipeline development, analytics documentation, and longitudinal data consistency across the 0–18 research archive.",
              image: { src: "/src/assets/placeholders/avatars/vinay-donakanti.webp", alt: "D. Vinay Shyam Donakanti", variant: "avatar", privacyBlur: false },
              cta: { label: "View Profile", href: "/governance/team/vinay-shyam-donakanti" }
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
                "Enrollment Consent: All families sign comprehensive research waivers upon school entry.\n\nChild Assent: Students aged 7+ are granted the \"Right to Decline\" participation without consequence.\n\nWithdrawal: Parents maintain the right to withdraw data access at any time.\n\nData Anonymization: All published records use alphanumeric codes (Subject-1045-A, not names). Photos published only with separate photo consent and face obscuration. No re-identification pathway exists in public datasets."
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
              { label: "K-Anonymity", text: "All datasets are scrubbed of PII (Personally Identifiable Information). Names are replaced with alphanumeric codes (e.g., Subject-1045-A)." },
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
        robots: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
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
            "Scientific breakthrough rarely happens in isolation. The Blue Blocks Micro Research Institute opens its longitudinal infrastructure to external partners who share our commitment to rigorous, non-intrusive inquiry. We offer a 17-year continuous dataset (0-18) that simply does not exist elsewhere. No other institution in India has comparable longitudinal density. If you're studying child development and need real data, not theory, we can work together.",
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
              { label: "Visiting Fellowships", text: "We host 2-3 visiting scholars annually for intensive 2-8 week residencies. You work alongside our research fellows, access the 17-year dataset, and publish collaboratively." },
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
        robots: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
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
            "This newsroom documents what we've learned, what we've built, and what went wrong. Satellite launches, patent filings, scientific breakthroughs, methodological dead-ends—all of it matters. 17 years completed; Year 18 ongoing. Five utility patents filed to date.",
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
              tag: "Research Publication",
              headline: "Children Develop Geopolitical Reasoning Without Screens",
              excerpt:
                "A new case study documents how 28 children aged 6–16, raised with restricted screen time, independently developed sophisticated reasoning about the Iran crisis through family conversation and newspapers alone. Teenagers articulated nuclear deterrence logic; six-year-olds defaulted to legal process over violence.",
              cta: { label: "Read Press Release", href: "/newsroom/dispatch/iran-crisis-study-press-release" },
              image: { src: "/src/assets/placeholders/labs/protocol-notes.jpg", alt: "Iran crisis case study press release", variant: "card", privacyBlur: false }
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
              tag: "Press Release",
              headline: "Hyderabad Study: Children Develop Geopolitical Reasoning Without Algorithms",
              meta: "March 16, 2026",
              body:
                "28 children aged 6–16 with restricted screen time independently developed sophisticated reasoning about the Iran crisis. Teenagers articulated nuclear deterrence logic from scratch; six-year-olds across three independent groups defaulted to legal process over violence.",
              cta: { label: "Read Full Press Release", href: "/newsroom/dispatch/iran-crisis-study-press-release" },
              image: { src: "/src/assets/placeholders/labs/protocol-notes.jpg", alt: "Iran crisis case study", variant: "card", privacyBlur: false }
            },
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
              a: "Yes, by appointment only. Media visits are scheduled outside of core observational hours to ensure zero interference with the Longitudinal Panel. Please contact media@blueblocks.in at least 5 business days in advance."
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
        robots: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
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
        robots: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
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
        robots: "noindex,follow",
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
      title: "SBB-1 Technical Brief: Student CubeSat Payload on PSLV-C62",
      metaDescription: "Full technical brief for SBB-1 — the student-engineered CubeSat payload authorized by IN-SPACe and integrated on ISRO's PSLV-C62 mission.",
      seo: {
        title: "SBB-1 Technical Brief: Student CubeSat Payload on PSLV-C62 | Blue Blocks",
        canonical: "https://research.blueblocks.in/technical-briefs/sbb-1",
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
          body: "The Stage 4 anomaly provided an unscripted, high-stakes lesson in aerospace engineering reality. Students confronted genuine mission failure — not a simulated exercise — and were required to process the technical, emotional, and professional dimensions of an outcome beyond their control. This experience is now documented as the single most significant pedagogical event in the Institute's Longitudinal Panel.\n\nThe SBB-1 mission conclusively demonstrates that adolescent-led teams, guided by Montessori principles of self-directed learning and intrinsic motivation, can meet the rigorous technical and regulatory standards required for deployment on national space platforms."
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
            { title: "In-SPACe Authorization Letter", description: "Full mission publication archived on Zenodo.", icon: "publication", href: "/publications/in-space-authorization-letter" },
            { title: "Saparya Conference Presentation", description: "SBB-1 case study presented at AMI Saparya 2026.", icon: "presentation", href: "/presentations/marrakesh-human-capital" },
            { title: "Downloads Hub", description: "Access mission documents and media kit.", icon: "download", href: "/downloads" }
          ]
        }
      ]
    },

    "/presentations/marrakesh-human-capital": {
      title: "Marrakesh Presentation: Defining Future Human Capital Through Innovation Economies",
      metaDescription: "Presentation delivered at the IMF Annual Meetings in Marrakesh on how longitudinal child development research redefines human capital formation through innovation economies.",
      seo: {
        title: "Marrakesh Human Capital Presentation | IMF Annual Meetings | Blue Blocks",
        canonical: "https://research.blueblocks.in/presentations/marrakesh-human-capital",
        openGraph: {
          type: "article",
          url: "https://research.blueblocks.in/presentations/marrakesh-human-capital",
          title: "Marrakesh Human Capital Presentation",
          description: "Innovation economies and longitudinal hypothesis development presented at IMF Annual Meetings.",
          image: {
            url: "https://research.blueblocks.in/og/presentations/marrakesh-human-capital.jpg",
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
          name: "Defining Future Human Capital Through Innovation Economies",
          url: "https://research.blueblocks.in/presentations/marrakesh-human-capital",
          isPartOf: { "@type": "WebSite", url: "https://research.blueblocks.in/" }
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://research.blueblocks.in/" },
            { "@type": "ListItem", position: 2, name: "Presentations", item: "https://research.blueblocks.in/presentations/marrakesh-human-capital" }
          ]
        }
      ],
      sections: [
        {
          id: "presentation-hero",
          type: "hero",
          variant: "stark",
          headline: "Defining Future Human Capital Through Innovation Economies",
          subheadline: "A presentation delivered at the IMF Annual Meetings in Marrakesh on how longitudinal child development research redefines human capital formation.",
          primaryCta: { label: "Download Presentation Slides", href: "/downloads/marrakesh-presentation" },
          secondaryCta: { label: "View Methodology", href: "/methodology" },
          image: {
            src: "/src/assets/banners/presentations/marrakesh-human-capital.jpg",
            alt: "Marrakesh presentation visual",
            variant: "hero",
            privacyBlur: false,
            caption: ""
          }
        },
        {
          id: "presentation-meta",
          type: "metaStrip",
          items: [
            { label: "Event", value: "IMF Annual Meetings" },
            { label: "Location", value: "Marrakesh, Morocco" },
            { label: "Presenter", value: "Pavan Goyal" },
            { label: "Theme", value: "Human Capital & Innovation Economies" }
          ]
        },
        {
          id: "presentation-context",
          type: "textBlock",
          header: "Event Context",
          body: "The International Monetary Fund (IMF) Annual Meetings convene finance ministers, central bank governors, and development leaders from 190 member countries. The Marrakesh session included a dedicated track on human capital development in emerging economies, where Blue Blocks Micro Research Institute was invited to present its longitudinal findings on how structured innovation ecosystems within schools can produce measurable economic value.\n\nPavan Goyal, Founder and Principal Investigator, presented the Institute's thesis that human capital formation begins not at university or workforce entry, but at age zero — and that Montessori-aligned pedagogy, when combined with authentic research and engineering constraints, produces children who function as economic agents by adolescence."
        },
        {
          id: "presentation-content",
          type: "textBlock",
          header: "What Was Presented",
          body: "The presentation introduced the concept of 'Innovation Economies at School Scale' — documenting how five utility patents filed by students aged 12–16, a flight-qualified CubeSat payload (SBB-1), and a portfolio of published case studies constitute tangible economic output generated within a school ecosystem.\n\nKey data points presented included the 17-year longitudinal observation window across 1,045 children, the Lab-to-Launch framework that produced SBB-1, and the patent portfolio's progression from classroom prototyping to formal IP filings with the Indian Patent Office.\n\nThe 'human capital' framing recontextualized the Institute's research not as educational theory but as empirical evidence that structured environments produce innovation-capable individuals at scale — a direct input to national human capital indices."
        },
        {
          id: "presentation-audience",
          type: "textBlock",
          header: "Audience & Impact",
          body: "The session was attended by representatives from multilateral development institutions, national education ministries, and private sector education investors. The presentation positioned Blue Blocks' work as a replicable model for emerging economies seeking to accelerate human capital development through early-stage innovation ecosystems rather than post-secondary intervention.\n\nThe Marrakesh presentation marked the first time the Institute's longitudinal dataset was framed explicitly as an economic instrument — connecting child development research to sovereign human capital strategy."
        },
        {
          id: "presentation-archive",
          type: "textBlock",
          variant: "muted",
          header: "Archive",
          body: "Presentation slides and supporting materials are available through the Blue Blocks Zenodo Community. All institutional records from the Marrakesh session are preserved under open access.\n\nZenodo Community: https://zenodo.org/communities/blueblocksmicroresearchinstitute/"
        },
        {
          id: "presentation-related",
          type: "relatedCards",
          header: "Related",
          cards: [
            { title: "Methodology", description: "Our research framework.", icon: "methodology", href: "/methodology" },
            { title: "Patents", description: "Student IP portfolio.", icon: "patent", href: "/patents" },
            { title: "SBB-1 Technical Brief", description: "Mission documentation.", icon: "brief", href: "/technical-briefs/sbb-1" },
            { title: "Pavan Goyal", description: "Presenter profile.", icon: "team", href: "/team/pavan-goyal" }
          ]
        }
      ]
    },

    "/proceedings/oslo-2026": {
      title: "Proceedings Archive: Oslo 2026 — Nobel Peace Center",
      metaDescription: "Archive of the January 2026 Oslo Summit where Blue Blocks Innovation Pedagogy (0-18) was presented at the Nobel Peace Center as a global benchmark.",
      seo: {
        title: "Oslo 2026 Proceedings | Nobel Peace Center | Blue Blocks",
        canonical: "https://research.blueblocks.in/proceedings/oslo-2026",
        openGraph: {
          type: "collection",
          url: "https://research.blueblocks.in/proceedings/oslo-2026",
          title: "Proceedings Archive: Oslo 2026 — Nobel Peace Center",
          description: "Official proceedings and archival materials from the Oslo Summit 2026.",
          image: {
            url: "https://research.blueblocks.in/og/proceedings/oslo-2026.jpg",
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
          url: "https://research.blueblocks.in/proceedings/oslo-2026",
          isPartOf: { "@type": "WebSite", url: "https://research.blueblocks.in/" }
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://research.blueblocks.in/" },
            { "@type": "ListItem", position: 2, name: "Proceedings", item: "https://research.blueblocks.in/proceedings/oslo-2026" }
          ]
        }
      ],
      sections: [
        {
          id: "proceedings-hero",
          type: "hero",
          variant: "stark",
          headline: "Proceedings Archive: Oslo 2026 — Nobel Peace Center",
          subheadline: "Comprehensive archive of the Oslo Summit 2026, including presentations, datasets, and official documentation.",
          primaryCta: { label: "View MONISC Proceedings", disabled: true },
          secondaryCta: { label: "View Methodology", href: "/methodology" },
          image: {
            src: "/src/assets/banners/proceedings/oslo-2026.jpg",
            alt: "Oslo proceedings visual",
            variant: "hero",
            privacyBlur: false,
            caption: ""
          }
        },
        {
          id: "proceedings-meta",
          type: "metaStrip",
          items: [
            { label: "Date", value: "January 28, 2026" },
            { label: "Venue", value: "Nobel Peace Center, Oslo, Norway" },
            { label: "Event", value: "MONISC International Conference" },
            { label: "Endorsement", value: "Norwegian UNESCO Commission" }
          ]
        },
        {
          id: "proceedings-about",
          type: "textBlock",
          header: "About the Oslo Summit",
          body: "Pavan Goyal was selected by the MONISC Committee as a global benchmark presenter for integrating space science with youth education. The session titled 'World Premiere: Blue Blocks Innovation Pedagogy (0–18)' was presented before an international audience of educators, researchers, and policymakers. The Norwegian UNESCO Commission endorsed the session as a reference case for youth-led innovation in Montessori-aligned education ecosystems.\n\nThe MONISC International Conference (Montessori International Scientific Congress) is a biennial gathering of Montessori educators, developmental researchers, and policy leaders from across the globe. The 2026 session at the Nobel Peace Center represented the conference's most prominent venue to date, chosen deliberately to signal the intersection of peace education, child agency, and scientific rigour."
        },
        {
          id: "proceedings-presented",
          type: "textBlock",
          header: "What Was Presented",
          body: "The Blue Blocks Innovation Pedagogy (0-18) framework was presented in full, documenting 17 years of longitudinal observation across 1,045 children. Student projects from the Space Lab (including the SBB-1 CubeSat payload) and the Patent Portfolio were exhibited as evidence of the 0-18 Sovereignty Model. The session formally released student-generated datasets to the international Montessori network.\n\nThe presentation traced the complete arc from Pink Tower to CubeSat — demonstrating how the same Montessori principles that guide a three-year-old's sensorial exploration of geometry produce, by adolescence, students capable of designing flight-qualified aerospace hardware. Five utility patents filed by students aged 12–16 were presented as additional evidence of the model's efficacy.\n\nThe longitudinal dataset — covering developmental observations, innovation trajectories, and behavioural patterns across the full 0–18 age range — was formally offered to the international research community for replication and independent analysis."
        },
        {
          id: "proceedings-zenodo",
          type: "textBlock",
          header: "Zenodo Archive",
          body: "All administrative records, the official invitation, the pedagogical framework presentation, and open-data release protocols are preserved in the Blue Blocks Zenodo Community. These materials are archived under open access (CC-BY-4.0) to ensure institutional transparency and enable citation by other researchers.\n\nZenodo Community: https://zenodo.org/communities/blueblocksmicroresearchinstitute/"
        },
        {
          id: "proceedings-status",
          type: "textBlock",
          variant: "muted",
          header: "Status",
          body: "Full proceedings are pending formal release by MONISC. This archive will be updated upon publication. In the interim, the Institute's own presentation materials and supporting documentation are available through Zenodo."
        },
        {
          id: "proceedings-related",
          type: "relatedCards",
          header: "Related Documentation",
          cards: [
            { title: "Methodology", description: "Our research framework.", icon: "methodology", href: "/methodology" },
            { title: "Publications", description: "Open access archive.", icon: "publication", href: "/publications" },
            { title: "SBB-1 Technical Brief", description: "Mission documentation.", icon: "brief", href: "/technical-briefs/sbb-1" },
            { title: "Pavan Goyal", description: "Presenter profile.", icon: "team", href: "/team/pavan-goyal" }
          ]
        }
      ]
    },

    "/downloads": {
      title: "Downloads & Document Repository",
      metaDescription: "Download media kits, research frameworks, patent filings, and institutional documents from Blue Blocks Micro Research Institute. All materials archived on Zenodo under CC-BY-4.0.",
      seo: {
        title: "Downloads & Document Repository | Blue Blocks Micro Research Institute",
        canonical: "https://research.blueblocks.in/downloads",
        openGraph: {
          type: "website",
          url: "https://research.blueblocks.in/downloads",
          title: "Downloads & Document Repository",
          description: "Access media kits, research frameworks, and institutional documents.",
          image: {
            url: "https://research.blueblocks.in/og/downloads.jpg",
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
          name: "Downloads & Document Repository",
          url: "https://research.blueblocks.in/downloads",
          isPartOf: { "@type": "WebSite", url: "https://research.blueblocks.in/" }
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://research.blueblocks.in/" },
            { "@type": "ListItem", position: 2, name: "Downloads", item: "https://research.blueblocks.in/downloads" }
          ]
        }
      ],
      sections: [
        {
          id: "downloads-hero",
          type: "hero",
          variant: "stark",
          headline: "Downloads & Document Repository",
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
          id: "downloads-intro",
          type: "textBlock",
          header: "About This Repository",
          body: "The Blue Blocks Micro Research Institute maintains this document repository as a centralised access point for all publicly available institutional materials. This includes research publications, patent documentation, conference presentations, media resources, and sample chapters from published books. All materials are provided under open access principles and are archived on Zenodo with persistent DOI identifiers wherever possible.\n\nWhen citing materials from this repository, researchers should reference the Zenodo DOI rather than direct PDF links. DOI-based citations ensure version control, permanent accessibility, and proper attribution within academic citation indices. For materials not yet assigned a DOI, cite the institutional URL and access date. All materials are licensed under CC-BY-4.0 unless otherwise indicated.\n\nFor specific document requests, verification of materials, or access to restricted datasets, contact press@blueblocks.in or research@blueblocks.in."
        },
        {
          id: "downloads-publications",
          type: "downloadList",
          header: "Publications",
          intro: "Official publications and research records archived on Zenodo under open access. These documents represent the Institute's formal contribution to the academic record. Access via DOI for citation integrity, version control, and permanent discoverability. Each publication includes methodology documentation, raw observation summaries, and limitation disclosures.",
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
          intro: "Long-form publications authored by the Institute's leadership. Sample chapters are provided for preview purposes. Full editions are available through publishers. These works synthesise longitudinal findings into practitioner-accessible formats for educators, parents, and institutional designers.",
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
          intro: "Five utility patents filed by student inventors aged 12–16 at Blue Blocks Montessori School. Each patent is archived on Zenodo with a persistent DOI for citation integrity. These filings represent tangible intellectual property generated within the Institute's Innovation domain and are documented as evidence of adolescent engineering capability.",
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
          intro: "Resources for journalists, media partners, and conference organisers. The media kit contains approved logos, brand guidelines, and institutional imagery. Leadership bio sheets provide pre-approved biographical text for event programmes and press mentions. All media materials are cleared for editorial use with attribution.",
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
        robots: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
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
        robots: "noindex,follow",
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
        robots: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
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
        robots: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
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
          id: "patents-zenodo", type: "metaStrip",
          items: [
            { label: "Archival Repository", value: "Zenodo (CERN)" },
            { label: "DOI", value: "10.5281/zenodo.18610003", href: "https://doi.org/10.5281/zenodo.18610003", external: true },
            { label: "Status", value: "Active" },
            { label: "Access", value: "Open Access" },
            { label: "License", value: "CC BY 4.0" }
          ]
        },
        {
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
        robots: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
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
          subheadline: "Meet the researchers, embedded fellows, and domain specialists who drive the Blue Blocks Micro Research Institute's mission. 17 years of longitudinal research requires institutional stability and deep domain expertise.",
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
              image: { src: "/src/assets/placeholders/avatars/srikar-avr.webp", alt: "Prof. AVR Srikar", variant: "avatar", privacyBlur: false }
            },
            {
              headline: "Prof. Apoorv Gogar",
              tag: "Methodological Oversight Advisor",
              body: "Indian School of Business. Reviews research design and business application frameworks for student innovation projects.",
              image: { src: "/src/assets/placeholders/avatars/apoorv-gogar.webp", alt: "Prof. Apoorv Gogar", variant: "avatar", privacyBlur: false }
            },
            {
              headline: "Rahul Jindal",
              tag: "Technology Validation Advisor",
              body: "Director, Google. Provides technical review for software and systems architecture in student technology projects.",
              image: { src: "/src/assets/placeholders/avatars/rahul-jindal.webp", alt: "Rahul Jindal", variant: "avatar", privacyBlur: false }
            },
            {
              headline: "Sucheth Davaluri",
              tag: "Industry Validation Advisor",
              body: "Vice-Chairman & CEO, Neuland Laboratories. Reviews commercialization pathways and industry-readiness of student innovations.",
              image: { src: "/src/assets/placeholders/avatars/sucheth-davaluri.webp", alt: "Sucheth Davaluri", variant: "avatar", privacyBlur: false }
            },
            {
              headline: "Manish Gupta",
              tag: "Enterprise Technology Advisor",
              body: "Director, SAP. Evaluates scalability and enterprise integration potential of student technology solutions.",
              image: { src: "/src/assets/placeholders/avatars/manish-gupta.webp", alt: "Manish Gupta", variant: "avatar", privacyBlur: false }
            },
            {
              headline: "Ronak Kumar",
              tag: "Aerospace Domain Advisor",
              body: "Founder, TakeMe2Space. Provides technical mentorship and validation for Space Lab projects including satellite and propulsion initiatives.",
              image: { src: "/src/assets/placeholders/avatars/ronak-kumar.webp", alt: "Ronak Kumar", variant: "avatar", privacyBlur: false }
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
              headline: "Dr. Sreemoyee Chakraborty",
              tag: "STEM Research Lead | Palaeontology & Earth Sciences",
              body: "PhD, Palaeontology (ISI / University of Calcutta). Leads fossil-based STEM research modules and scientific inquiry frameworks.",
              image: { src: "/src/assets/placeholders/avatars/sreemoyee-chakraborty.webp", alt: "Dr. Sreemoyee Chakraborty", variant: "avatar", privacyBlur: false },
              cta: { label: "View Profile", href: "/governance/team/dr-sreemoyee-chakraborty" }
            },
            {
              headline: "Dr. Shobha Ediga",
              tag: "Microbiological & Biochemical Research Lead",
              body: "PhD, Plant Sciences (University of Hyderabad). Provides research oversight in biological sciences and adolescent-level scientific investigation.",
              image: { src: "/src/assets/placeholders/avatars/shobha-ediga.webp", alt: "Dr. Shobha Ediga", variant: "avatar", privacyBlur: false },
              cta: { label: "View Profile", href: "/governance/team/dr-shobha-ediga" }
            },
            {
              headline: "Sandhya Rao M",
              tag: "AMI Elementary Guide | Biomimicry Educator",
              body: "AMI Elementary Diploma; M.P.T. Community-Based Rehabilitation. Integrates Montessori pedagogy with structured research documentation.",
              image: { src: "/src/assets/placeholders/avatars/sandhya-rao.webp", alt: "Sandhya Rao M", variant: "avatar", privacyBlur: false },
              cta: { label: "View Profile", href: "/governance/team/sandhya-rao-m" }
            },
            {
              headline: "Sruthi Matta",
              tag: "Research Team Lead — Pedagogy & Innovation",
              body: "Graduate Diploma in Journalism (Concordia University); B.A. Humanities. Leads research initiatives focused on pedagogy and innovation frameworks.",
              image: { src: "/src/assets/placeholders/avatars/sruthi-matta.webp", alt: "Sruthi Matta", variant: "avatar", privacyBlur: false },
              cta: { label: "View Profile", href: "/governance/team/sruthi-matta" }
            },
            {
              headline: "Sreedhar Reddy Boddu",
              tag: "Research & Data Analyst",
              body: "B.Tech Civil Engineering (NIT Goa); Data Science & Analytics Certifications. Supports ETL processes, dashboard development, and structured data visualization.",
              image: { src: "/src/assets/placeholders/avatars/sreedhar-boddu.webp", alt: "Sreedhar Reddy Boddu", variant: "avatar", privacyBlur: false },
              cta: { label: "View Profile", href: "/governance/team/sreedhar-reddy-boddu" }
            },
            {
              headline: "D. Vinay Shyam Donakanti",
              tag: "Research Data Analyst Intern",
              body: "B.Tech Computer Science & Data Science. Supports digitization, coding, and structuring of Montessori observation records into standardized research datasets.",
              image: { src: "/src/assets/placeholders/avatars/vinay-donakanti.webp", alt: "D. Vinay Shyam Donakanti", variant: "avatar", privacyBlur: false },
              cta: { label: "View Profile", href: "/governance/team/vinay-shyam-donakanti" }
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

    "/publications/saparya-imf-case-study": {
      title: "Valorization In Orbit — An Adolescent CubeSat Mission",
      metaDescription: "Peer-reviewed case study presented at Saparya 7th National Montessori Conference documenting how seventeen adolescent students designed, built, and launched the SBB-1 CubeSat hosted payload.",
      seo: {
        title: "Valorization In Orbit — An Adolescent CubeSat Mission | Blue Blocks Micro Research Institute",
        canonical: "https://siddheshv1.lovable.app/publications/saparya-imf-case-study",
        robots: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
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
                  { label: "In-SPACe Authorization Letter", href: "/publications/in-space-authorization-letter" },
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

    "/publications/in-space-authorization-letter": {
      title: "Authorization Certificate for Establishment and Operation of Student-Engineered Hosted Payload SBB-1",
      metaDescription: "Official IN-SPACe authorization certificate (PMA/IN-SPACe/AUTH/2026/115) for the SBB-1 hosted payload. First authorization granted to a Montessori educational institution for a student-engineered orbital payload under India's Lab-to-Launch framework.",
      seo: {
        title: "IN-SPACe Authorization Certificate — SBB-1 Hosted Payload | Blue Blocks Micro Research Institute",
        canonical: "https://research.blueblocks.in/publications/in-space-authorization-letter",
        robots: "index, follow",
        keywords: "IN-SPACe authorization, SBB-1, CubeSat, hosted payload, Blue Blocks Montessori, ISRO PSLV-C62, space education, Lab-to-Launch, student-engineered payload, aerospace education India",
        openGraph: {
          type: "article",
          url: "https://research.blueblocks.in/publications/in-space-authorization-letter",
          title: "IN-SPACe Authorization Certificate — SBB-1 Hosted Payload",
          description: "First IN-SPACe authorization granted to a Montessori educational institution for a student-engineered orbital payload.",
          image: {
            url: "https://research.blueblocks.in/images/og-standards.jpg",
            width: 1200,
            height: 630,
            alt: "SBB-1 IN-SPACe Authorization"
          }
        }
      },
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "ScholarlyArticle",
          headline: "Authorization Certificate for Establishment and Operation of Student-Engineered Hosted Payload SBB-1",
          description: "Official IN-SPACe authorization certificate for the SBB-1 hosted payload — the first authorization granted to a Montessori educational institution for a student-engineered orbital payload under India's Lab-to-Launch framework.",
          identifier: "10.5281/zenodo.18195108",
          sameAs: "https://doi.org/10.5281/zenodo.18195108",
          datePublished: "2026-01-12",
          author: { "@type": "Person", name: "Pavan Goyal", sameAs: "https://orcid.org/0009-0009-8840-8505" },
          publisher: { "@type": "Organization", name: "Blue Blocks Micro Research Institute" },
          license: "https://creativecommons.org/licenses/by/4.0/"
        }
      ],
      sections: [
        {
          id: "cubesat-hero",
          type: "hero",
          variant: "publication",
          headline: "Authorization Certificate for Establishment and Operation of Student-Engineered Hosted Payload SBB-1",
          subheadline: "Authorization No. PMA/IN-SPACe/AUTH/2026/115",
          image: { src: "/src/assets/banners/publications-doi.jpg", alt: "SBB-1 IN-SPACe Authorization", variant: "hero", privacyBlur: false }
        },
        {
          id: "cubesat-meta",
          type: "metaStrip",
          items: [
            { label: "DOI", value: "10.5281/zenodo.18195108", href: "https://doi.org/10.5281/zenodo.18195108", external: true },
            { label: "Authorization No.", value: "PMA/IN-SPACe/AUTH/2026/115" },
            { label: "Type", value: "Regulatory Record" },
            { label: "Status", value: "Published" },
            { label: "Authorized Entity", value: "Blue Blocks Montessori Educational Society" },
            { label: "Access", value: "Open Access" }
          ]
        },
        {
          id: "cubesat-introduction",
          type: "twoColumn",
          compact: true,
          left: {
            sections: [
              {
                title: "Introduction",
                body: "This record archives a regulatory milestone in Indian K-12 space education — the first IN-SPACe authorization granted directly to a Montessori educational institution for a student-engineered orbital payload. The certificate validates that the SBB-1 payload, developed by students of Blue Blocks Montessori School under the pedagogical guidance of Blue Blocks Micro Research Institute and technical partnership with TM2Space, meets India's national space regulatory requirements for flight certification under the \"Lab-to-Launch\" framework."
              }
            ]
          },
          right: {
            panels: [
              {
                title: "Repository & Access",
                links: [
                  { label: "View on Zenodo (DOI)", href: "https://doi.org/10.5281/zenodo.18195108", external: true },
                  { label: "Technical Brief: SBB-1", href: "/technical-briefs/sbb-1" },
                  { label: "Saparya Case Study", href: "/publications/saparya-imf-case-study" }
                ]
              }
            ]
          }
        },
        {
          id: "cubesat-abstract",
          type: "twoColumn",
          compact: true,
          left: {
            sections: [
              {
                title: "Abstract",
                body: "This record summarizes the formal Authorization Certificate No. PMA/IN-SPACe/AUTH/2026/115 issued by the Indian National Space Promotion and Authorization Centre (IN-SPACe). The certificate formally designates Blue Blocks Montessori Educational Society as both the Authorized Entity and the Applicant, granting legal authorization for the establishment and operation of the SBB-1 hosted payload.\n\nAs the Applicant, Blue Blocks Montessori Educational Society assumes sole legal responsibility for ensuring the payload's compliance with the Convention on International Liability for Damage Caused by Space Objects (Liability Convention) and the Convention on Registration of Objects Launched into Outer Space (Registration Convention).\n\nThe authorization is supported by official registry references, including the Department of Space (DOS) Master Registry entry INRSO/DOS/SC/2025/011-01 for the hosted payload dated 29 December 2025, and the International Telecommunication Union (ITU) filing reference IND2025-78363, coordinated through the Host Entity."
              }
            ]
          },
          right: {
            panels: [
              {
                title: "Key Registry References",
                citation: "DOS Master Registry: INRSO/DOS/SC/2025/011-01 (29 Dec 2025)\nITU Filing: IND2025-78363"
              }
            ]
          }
        },
        {
          id: "cubesat-methodology",
          type: "twoColumn",
          compact: true,
          left: {
            sections: [
              {
                title: "Methodology",
                body: "The SBB-1 payload was developed under the proprietary \"Lab-to-Launch\" pedagogical framework — a structured methodology enabling K-12 students to operate within professional aerospace constraints while managing the complete product lifecycle from PCB design to payload integration.\n\nThe framework operates through a tripartite institutional structure: the school provides the student research team responsible for design, development, and testing; the research institute delivers pedagogical scaffolding, research standards, and regulatory navigation; and TM2Space contributes technical architecture, flight hardware validation, and launch integration.\n\nThis approach ensures student-led execution with institutional accountability, progressive skill development mapped to space-grade certification milestones, and regulatory alignment with IN-SPACe compliance requirements — maintaining pedagogical integrity while meeting the engineering rigor demanded by orbital deployment."
              }
            ]
          },
          right: {
            panels: [
              {
                title: "Framework Architecture",
                citation: "Tripartite structure: School (student research team) + Research Institute (pedagogical scaffolding) + TM2Space (technical architecture and launch integration)."
              }
            ]
          }
        },
        {
          id: "cubesat-results",
          type: "twoColumn",
          compact: true,
          left: {
            sections: [
              {
                title: "Payload Specifications & Architecture",
                body: "The IN-SPACe authorization validates the deployment of the SBB-1 payload, which was independently designed and developed by the student research team. While the payload is hosted on the MOI-1 bus, its architecture remains distinct and proprietary. The authorized configuration includes:"
              },
              {
                title: "Custom Avionics",
                body: "An in-house designed microcontroller unit featuring AES-256 encryption for secure data handling and RS485 differential serial communication."
              },
              {
                title: "Sensor Integration",
                bullets: [
                  "BME280: Environmental sensing (Pressure, Temperature, Humidity)",
                  "BNO055: Attitude determination (9-axis Orientation)",
                  "206 PT RTD: Precision thermal monitoring (1206 SMD form factor)"
                ]
              }
            ]
          },
          right: {
            panels: [
              {
                title: "Key Specification",
                citation: "The payload architecture is distinct and proprietary — independently designed by the student research team, hosted on the MOI-1 bus."
              }
            ]
          }
        },
        {
          id: "cubesat-discussion",
          type: "twoColumn",
          compact: true,
          left: {
            sections: [
              {
                title: "Regulatory & Legal Compliance",
                body: "Authorization No. PMA/IN-SPACe/AUTH/2026/115 formally designates the Blue Blocks Montessori Educational Society as the Authorized Entity and Applicant. As the Applicant, the Society assumes sole legal responsibility for ensuring the payload's compliance with two critical international treaties:",
                bullets: [
                  "The Convention on International Liability for Damage Caused by Space Objects (Liability Convention)",
                  "The Convention on Registration of Objects Launched into Outer Space (Registration Convention)"
                ]
              },
              {
                title: "",
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
                  { label: "Governance", href: "/governance" },
                  { label: "Patent Registry", href: "/patents" },
                  { label: "Downloads Hub", href: "/downloads" }
                ]
              }
            ]
          }
        },
        {
          id: "cubesat-supplementary",
          type: "twoColumn",
          compact: true,
          left: {
            sections: [
              {
                title: "Supplementary Materials",
                body: "Official Logs & Registry:",
                bullets: [
                  "IN-SPACe Authorization Registry: View Official Record",
                  "Mission Home & Logs: Blue Blocks Innovation Portal"
                ]
              },
              {
                title: "Independent Media Coverage",
                bullets: [
                  "NDTV (National): \"17 Hyderabad Students Build Payload for Upcoming ISRO Launch\"",
                  "India Today (National): \"Blue Blocks Co-founder Munira Hussain: Students' CubeSat Set for ISRO Launch\"",
                  "Telangana Today (Regional): \"Hyderabad School Students Make History with CubeSat on ISRO's PSLV-C62\""
                ]
              }
            ]
          },
          right: {
            panels: [
              {
                title: "How to Cite (APA)",
                citation: "Goyal, P. (2026). Authorization Certificate For Establishment and operations of a hosted payload, namely Students of BlueBlocks-1 (SBB-1) (Authorization No. PMA/IN-SPACe/AUTH/2026/115). Blue Blocks Micro Research Institute. https://research.blueblocks.in/publications/in-space-authorization-letter"
              }
            ]
          }
        },
        {
          id: "cubesat-archival-note",
          type: "textBlock",
          variant: "muted",
          body: "This record is maintained as part of the Blue Blocks Micro Research Institute open archival framework to support governance transparency, citation permanence, and research continuity."
        },
        {
          id: "cubesat-related",
          type: "relatedCards",
          header: "Related Registry",
          cards: [
            { title: "Saparya Case Study", description: "Conference presentation on adolescent CubeSat mission.", icon: "publication", href: "/publications/saparya-imf-case-study" },
            { title: "Technical Brief: SBB-1", description: "Full mission documentation.", icon: "brief", href: "/technical-briefs/sbb-1" },
            { title: "Patents", description: "Student IP registry.", icon: "patent", href: "/patents" },
            { title: "Downloads", description: "All documents.", icon: "default", href: "/downloads" }
          ]
        }
      ]
    },

    "/publications/iran-war-case-study": {
      title: "Age-Differentiated Responses to Geopolitical Violence: A Qualitative Case Study on the Iran Crisis in 2026 Among School Children of Blue Blocks, Hyderabad, India",
      metaDescription: "Qualitative case study documenting how children aged 6–16 responded emotionally, cognitively, and morally to the Iran crisis (2026). 28 participants across three age cohorts. Semi-structured group discussions conducted 5–10 March 2026 at Blue Blocks Montessori School, Hyderabad. Published by Blue Blocks Micro Research Institute.",
      seo: {
        title: "Age-Differentiated Responses to Geopolitical Violence: Iran Crisis Case Study | Blue Blocks Micro Research Institute",
        canonical: "https://research.blueblocks.in/publications/iran-war-case-study",
        robots: "index, follow",
        keywords: "Iran crisis 2026, children and war, geopolitical violence, child development, age-differentiated responses, moral reasoning children, cognitive development, Piaget, Kohlberg, qualitative case study, Montessori education, screen time research, media literacy, Blue Blocks Micro Research Institute, Blue Blocks Montessori School, BlueBlocks, Blue Blocks Education Society, Blue Blocks Research Institute Foundation",
        openGraph: {
          type: "article",
          url: "https://research.blueblocks.in/publications/iran-war-case-study",
          title: "Age-Differentiated Responses to Geopolitical Violence: Iran Crisis Case Study | Blue Blocks Micro Research Institute",
          description: "How do children process geopolitical violence without social media? Qualitative case study of 28 children (ages 6–16) responding to the Iran crisis, conducted within days of the event. Published with DOI.",
          image: {
            url: "https://research.blueblocks.in/images/og-iran-case-study.jpg",
            width: 1200,
            height: 630,
            alt: "Iran Crisis Case Study"
          },
          locale: "en_IN",
          article: {
            published_time: "2026-03-10",
            author: "Chakraborty, S., Goyal, P., Matta, S., Donakanti, V. S., Boddu, S. R.",
            section: "Publications"
          }
        },
        twitter: {
          card: "summary_large_image",
          title: "Iran Crisis Case Study: Children's Responses to Geopolitical Violence | Blue Blocks Micro Research Institute",
          description: "28 children, 3 age cohorts, 5 days after the event. How children in a screen-limited Montessori environment process war. DOI: 10.5281/zenodo.18996507",
          image: "https://research.blueblocks.in/images/og-iran-case-study.jpg"
        },
        citation: {
          citation_title: "Age-Differentiated Responses to Geopolitical Violence: A Qualitative Case Study on the Iran Crisis in 2026 Among School Children of Blue Blocks, Hyderabad, India",
          citation_authors: ["Chakraborty, S.", "Goyal, P.", "Matta, S.", "Donakanti, V. S.", "Boddu, S. R."],
          citation_publication_date: "2026",
          citation_publisher: "Blue Blocks Micro Research Institute",
          citation_doi: "10.5281/zenodo.18996507"
        }
      },
      schemas: [
        {
          "@type": "WebPage",
          "@id": "https://research.blueblocks.in/publications/iran-war-case-study/#webpage",
          url: "https://research.blueblocks.in/publications/iran-war-case-study",
          name: "Age-Differentiated Responses to Geopolitical Violence: Iran Crisis Case Study | Blue Blocks Micro Research Institute",
          description: "Qualitative case study documenting how children aged 6-16 responded emotionally, cognitively, and morally to the Iran crisis (2026). 28 participants, three age cohorts, conducted 5-10 March 2026.",
          isPartOf: { "@id": "https://research.blueblocks.in/#website" },
          about: { "@id": "https://research.blueblocks.in/publications/iran-war-case-study/#article" }
        },
        {
          "@type": "ScholarlyArticle",
          "@id": "https://research.blueblocks.in/publications/iran-war-case-study/#article",
          headline: "Age-Differentiated Responses to Geopolitical Violence: A Qualitative Case Study on the Iran Crisis in 2026 Among School Children of Blue Blocks, Hyderabad, India",
          description: "Qualitative case study documenting age-differentiated emotional, cognitive, and moral responses of 28 children (aged 6-16) to the Iran crisis following the assassination of Supreme Leader Ayatollah Ali Khamenei on 28 February 2026. Data collected 5-10 March 2026 via semi-structured group discussions across three developmental cohorts at an AMI-guided Montessori school that actively limits screen time. Analysis uses Piaget (cognitive development), Kohlberg (moral development), and Braun & Clarke (thematic analysis) frameworks.",
          abstract: "Five semi-structured group discussions were conducted across three age cohorts (6-10, 10-13, and 13-16) with approximately 28 participating children. The study addresses four research questions spanning awareness, emotional response, cognitive complexity, and moral reasoning. The central hypothesis posits that children's responses to an acute geopolitical conflict will vary systematically by developmental age. Thematic analysis of verbatim transcripts was mapped against a priori developmental frameworks (Piaget, Kohlberg). A distinctive feature of this sample is that the school actively discourages screen time and social media exposure, making this a rare examination of how children process geopolitical violence in the absence of algorithmic digital feeds.",
          author: [
            { "@type": "Person", name: "Sumedha Chakraborty", affiliation: { "@id": "https://research.blueblocks.in/#microresearch" } },
            { "@type": "Person", "@id": "https://www.blueblocks.in/#pavan", name: "Pavan Goyal", affiliation: { "@id": "https://research.blueblocks.in/#microresearch" } },
            { "@type": "Person", name: "Soumya Matta", affiliation: { "@id": "https://research.blueblocks.in/#microresearch" } },
            { "@type": "Person", name: "V. S. Donakanti", affiliation: { "@id": "https://research.blueblocks.in/#microresearch" } },
            { "@type": "Person", name: "S. R. Boddu", affiliation: { "@id": "https://research.blueblocks.in/#microresearch" } }
          ],
          sourceOrganization: { "@id": "https://research.blueblocks.in/#microresearch" },
          publisher: { "@id": "https://research.blueblocks.in/#microresearch" },
          datePublished: "2026-03-10",
          dateCreated: "2026-03-10",
          url: "https://research.blueblocks.in/publications/iran-war-case-study",
          identifier: "https://doi.org/10.5281/zenodo.18996507",
          sameAs: "https://doi.org/10.5281/zenodo.18996507",
          inLanguage: "en",
          about: [
            { "@type": "Thing", name: "Geopolitical violence", sameAs: "https://en.wikipedia.org/wiki/Political_violence" },
            { "@type": "Thing", name: "Child development", sameAs: "https://en.wikipedia.org/wiki/Child_development" },
            { "@type": "Thing", name: "Moral development", sameAs: "https://en.wikipedia.org/wiki/Lawrence_Kohlberg%27s_stages_of_moral_development" },
            { "@type": "Thing", name: "Cognitive development", sameAs: "https://en.wikipedia.org/wiki/Piaget%27s_theory_of_cognitive_development" },
            { "@type": "Thing", name: "Qualitative research", sameAs: "https://en.wikipedia.org/wiki/Qualitative_research" },
            { "@type": "Thing", name: "Media literacy", sameAs: "https://en.wikipedia.org/wiki/Media_literacy" },
            { "@type": "Thing", name: "Montessori education", sameAs: "https://en.wikipedia.org/wiki/Montessori_education" }
          ],
          keywords: [
            "Iran crisis 2026", "children and geopolitical violence", "age-differentiated responses",
            "moral reasoning", "cognitive development", "qualitative case study",
            "Montessori education", "screen time", "media literacy"
          ],
          isPartOf: {
            "@type": "Periodical",
            name: "Blue Blocks Research Papers",
            publisher: { "@id": "https://research.blueblocks.in/#microresearch" }
          },
          citation: [
            {
              "@type": "ScholarlyArticle",
              name: "Practitioner-Led Methodology Framework",
              identifier: "https://doi.org/10.5281/zenodo.18584816",
              sameAs: "https://doi.org/10.5281/zenodo.18584816"
            }
          ],
          spatialCoverage: { "@type": "Place", name: "Hyderabad, Telangana, India" },
          temporalCoverage: "2026-03-05/2026-03-10",
          educationalLevel: "Primary and Secondary (Ages 6-16)",
          countryOfOrigin: { "@type": "Country", name: "India" }
        },
        {
          "@type": "ResearchProject",
          "@id": "https://research.blueblocks.in/publications/iran-war-case-study/#project",
          name: "Age-Differentiated Responses to Geopolitical Violence: Iran Crisis Case Study",
          description: "Rapid communication case study documenting children's emotional, cognitive, and moral responses to the Iran crisis (February-March 2026) across three developmental age cohorts in a screen-limited AMI Montessori environment.",
          parentOrganization: { "@id": "https://research.blueblocks.in/#microresearch" },
          foundingDate: "2026-03-05",
          member: [{ "@id": "https://www.blueblocks.in/#pavan" }],
          result: { "@id": "https://research.blueblocks.in/publications/iran-war-case-study/#article" },
          knowsAbout: [
            { "@type": "Thing", name: "Geopolitical violence", sameAs: "https://en.wikipedia.org/wiki/Political_violence" },
            { "@type": "Thing", name: "Child development", sameAs: "https://en.wikipedia.org/wiki/Child_development" },
            { "@type": "Thing", name: "Moral development", sameAs: "https://en.wikipedia.org/wiki/Lawrence_Kohlberg%27s_stages_of_moral_development" }
          ]
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://research.blueblocks.in/publications/iran-war-case-study/#breadcrumb",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://research.blueblocks.in/" },
            { "@type": "ListItem", position: 2, name: "Publications", item: "https://research.blueblocks.in/publications" },
            { "@type": "ListItem", position: 3, name: "Iran War Case Study", item: "https://research.blueblocks.in/publications/iran-war-case-study" }
          ]
        }
      ],
      sections: [
        {
          id: "iran-hero",
          type: "hero",
          variant: "publication",
          headline: "Age-Differentiated Responses to Geopolitical Violence",
          subheadline: "A Qualitative Case Study on the Iran Crisis in 2026 Among School Children of Blue Blocks, Hyderabad, India",
          image: { src: "/src/assets/banners/publications-doi.jpg", alt: "Iran Crisis Case Study", variant: "hero", privacyBlur: false }
        },
        {
          id: "iran-meta",
          type: "metaStrip",
          items: [
            { label: "DOI", value: "10.5281/zenodo.18996507", href: "https://doi.org/10.5281/zenodo.18996507", external: true },
            { label: "Type", value: "Qualitative Case Study" },
            { label: "Status", value: "Published" },
            { label: "Data Collection", value: "5–10 March 2026" },
            { label: "Affiliation", value: "Blue Blocks Micro Research Institute" },
            { label: "Access", value: "Open Access" }
          ]
        },
        {
          id: "iran-introduction",
          type: "twoColumn",
          compact: true,
          left: {
            sections: [
              {
                title: "Introduction",
                body: "This record archives a qualitative case study documenting how children aged 6–16 at an AMI-guided Montessori school in Hyderabad, India, responded emotionally, cognitively, and morally to the Iran crisis following the assassination of Supreme Leader Ayatollah Ali Khamenei on 28 February 2026. The study was conducted by the Blue Blocks Micro Research Institute between 5 and 10 March 2026 — within days of the conflict's escalation — making it a real-time documentation of children's responses to a live geopolitical event\n\nA distinctive feature of this sample is that the school actively discourages screen time and social media exposure. The children's awareness of the conflict was mediated almost entirely through family conversation, peer discussion, and print newspapers rather than through algorithmic digital feeds. This makes the study a rare examination of how children process geopolitical violence in the absence of the media environments that characterise most contemporary childhoods."
              }
            ]
          },
          right: {
            panels: [
              {
                title: "Repository & Access",
                links: [
                  { label: "View on Zenodo (DOI)", href: "https://doi.org/10.5281/zenodo.18996507", external: true },
                  { label: "Methodology Framework (DOI)", href: "https://doi.org/10.5281/zenodo.18584816", external: true }
                ]
              }
            ]
          }
        },
        {
          id: "iran-abstract",
          type: "twoColumn",
          compact: true,
          left: {
            sections: [
              {
                title: "Abstract",
                body: "Official Record Summary:\n\nFive semi-structured group discussions were conducted across three age cohorts (6–10, 10–13, and 13–16) with approximately 28 participating children. The study addresses four research questions spanning awareness, emotional response, cognitive complexity, and moral reasoning. The central hypothesis posits that children's responses to an acute geopolitical conflict will vary systematically by developmental age, with factual awareness present across all age groups, cognitive complexity and moral abstraction increasing with age, and emotional responses in younger children anchored to concrete personal proximity rather than empathy for distant others. Thematic analysis of verbatim transcripts was used, mapped against a priori developmental frameworks (Piaget, Kohlberg). Findings are reported across the four domains with developmental comparisons. Implications are discussed for educators, parents, and media literacy researchers.\n\nAll participants were minors up to age 16. Parental consent was obtained for all sessions. Participant identities have been fully anonymised, and no linkage file has been created or retained due to the sensitive nature of the topic."
              }
            ]
          },
          right: {
            panels: [
              {
                title: "Related Publications",
                links: [
                  { label: "Practitioner-led Methodology Framework", href: "https://doi.org/10.5281/zenodo.18584816", external: true },
                  { label: "Publications Index", href: "/publications" }
                ]
              }
            ]
          }
        },
        {
          id: "iran-methodology",
          type: "twoColumn",
          compact: true,
          left: {
            sections: [
              {
                title: "Methodology",
                body: "The study is a qualitative case study using semi-structured group discussions as the primary data collection method, consistent with rapid communication case study methodology appropriate for documenting responses to novel, time-sensitive events (Yin, 2018). The design is descriptive and exploratory; no experimental manipulation or comparison condition was used. The unit of analysis is the age cohort group discussion.\n\nSessions were facilitated by members of the Blue Blocks Micro Research Institute team using an age-adapted question guide covering four domains: awareness, emotion, cognition, and moral reasoning. Sessions were audio-recorded with consent and transcribed verbatim. Where children had significant factual gaps, facilitators provided brief contextual information — a methodological feature noted throughout the paper, as responses offered after facilitator framing cannot be treated as fully independent prior knowledge.\n\nThematic analysis (Braun & Clarke, 2006) was used, with themes inductively identified from the data and mapped against the developmental framework. The study makes no quantitative claims; the analysis is solely interpretive."
              }
            ]
          },
          right: {
            panels: [
              {
                title: "Analytical Framework",
                citation: "Piaget (cognitive development), Kohlberg (moral development), Braun & Clarke (thematic analysis) — mapped against four domains: Awareness, Emotion, Cognition, Moral Reasoning."
              }
            ]
          }
        },
        {
          id: "iran-parameters",
          type: "tableBlock",
          header: "Study Parameters",
          headers: ["Parameter", "Detail"],
          rows: [
            ["Participants", "Approximately 28 children across five sessions"],
            ["Age Cohorts", "6–10 (three sessions), 10–13 (one session), 13–16 (one session)"],
            ["Data Collection Window", "5–10 March 2026"],
            ["Session Duration", "15–30 minutes per session"],
            ["Data Type", "Verbatim audio transcripts, thematically coded"],
            ["Analytical Framework", "Piaget (cognitive development), Kohlberg (moral development), Braun & Clarke (thematic analysis)"],
            ["Domains Examined", "Awareness, Emotion, Cognition, Moral Reasoning"],
            ["Anonymisation", "Full anonymisation; no linkage file created or retained"]
          ]
        },
        {
          id: "iran-discussion",
          type: "twoColumn",
          compact: true,
          left: {
            sections: [
              {
                title: "Discussion",
                body: "The study contributes to a significant gap in the existing literature. While a substantial body of research documents the psychological effects of direct war exposure on children, far less attention has been paid to how children in non-conflict countries process and respond to geopolitical violence they encounter through family conversation and newspapers rather than through direct media immersion.\n\nThe study setting — an AMI-guided Montessori school that actively limits screen time — provides a rare analytical environment. The Montessori philosophy of open inquiry, child-led discussion, and multi-age grouping made it a particularly suitable context for semi-structured group conversations on complex topics. Students at the school come predominantly from urban, educated, upper-middle-class families in Hyderabad, Telangana.\n\nThe paper discusses implications across three domains: for educators (the role of honest, age-calibrated conversation in supporting factual calibration and moral development); for parents (the finding that children with restricted screen time are not shielded from awareness of major events — they simply lack the framework to understand personal relevance); and for media literacy researchers (the consistent gap between geopolitical reasoning sophistication and source criticism across all age groups). Limitations including sample size, single-school setting, and the methodological effects of in-session facilitation are acknowledged and discussed."
              }
            ]
          },
          right: {
            panels: [
              {
                title: "Cross-References",
                links: [
                  { label: "Methodology", href: "/methodology" },
                  { label: "Governance", href: "/governance" },
                  { label: "Ethics & Privacy", href: "/governance/ethics" },
                  { label: "Publications Index", href: "/publications" }
                ]
              }
            ]
          }
        },
        {
          id: "iran-supplementary",
          type: "twoColumn",
          compact: true,
          left: {
            sections: [
              {
                title: "Supplementary Materials",
                body: "Data & Ethics:\n\nAnonymised transcripts are retained in secure storage at Blue Blocks Micro Research Institute, Hyderabad, and are available to qualified researchers upon reasonable request, subject to an appropriate data-sharing agreement. No personal identification markers appear anywhere in the publication. The voluntary nature of participation is documented in the paper's ethics note."
              },
              {
                title: "Related Publications",
                body: "",
                bullets: [
                  "DOI — Iran War Case Study Publication: https://doi.org/10.5281/zenodo.18996507",
                  "DOI — Practitioner-led Methodology Framework: https://doi.org/10.5281/zenodo.18584816"
                ]
              },
              {
                title: "Media Coverage",
                body: "This section will be updated as coverage is published."
              }
            ]
          },
          right: {
            panels: [
              {
                title: "How to Cite (APA)",
                citation: "Chakraborty, S., Goyal, P., Matta, S., Donakanti, V. S., & Boddu, S. R. (2026). Age-differentiated responses to geopolitical violence: A qualitative case study on the reactions pertaining to emotional, cognitive, and moral reactions to the Iran crisis in 2026 among school children of Blue Blocks, Hyderabad, India. Blue Blocks Micro Research Institute. https://research.blueblocks.in/publications/iran-war-case-study"
              }
            ]
          }
        },
        {
          id: "iran-zenodo-cta",
          type: "highlightBox",
          header: "Read the Full Paper on Zenodo",
          body: "The complete paper is available as an open-access record on Zenodo.",
          cta: { label: "Read the Full Paper on Zenodo", href: "https://doi.org/10.5281/zenodo.18996507", external: true }
        },
        {
          id: "iran-archival-note",
          type: "textBlock",
          variant: "muted",
          body: "This record is maintained as part of the Blue Blocks Micro Research Institute open archival framework to support governance transparency, citation permanence, and research continuity."
        },
        {
          id: "iran-related",
          type: "relatedCards",
          header: "Related Registry",
          cards: [
            { title: "Methodology", description: "Research framework.", icon: "publication", href: "/methodology" },
            { title: "Governance", description: "Institutional oversight.", icon: "book", href: "/governance" },
            { title: "Publications", description: "Research docket.", icon: "publication", href: "/publications" },
            { title: "Downloads", description: "All documents.", icon: "default", href: "/downloads" }
          ]
        }
      ]
    },

    "/publications/resilience-workshop": {
      title: "When Children Encounter Designed Adversity — The Resilience Workshop: A Case Study from the Blue Blocks Erdkinder Environment",
      metaDescription: "Case study: 12 adolescents who survived a real satellite failure face a designed engineering challenge. All four teams treated failure as a puzzle, not a problem.",
      seo: {
        title: "Adolescent Resilience Workshop",
        canonical: "https://research.blueblocks.in/publications/resilience-workshop",
        robots: "index, follow",
        keywords: "adolescent resilience, designed adversity, failure framing, cognitive transfer, Montessori Erdkinder, engineering challenge, CubeSat, SBB-1, embedded observation, practitioner-led research, micro research, cross-study series, STEM education, Blue Blocks Micro Research Institute",
        openGraph: {
          type: "article",
          url: "https://research.blueblocks.in/publications/resilience-workshop",
          title: "Adolescent Resilience Workshop | Blue Blocks Micro Research Institute",
          description: "Case study: 12 adolescents who survived a real satellite failure face a designed engineering challenge. All four teams treated failure as a puzzle, not a problem.",
          image: {
            url: "https://research.blueblocks.in/images/og-home.jpg",
            width: 1200,
            height: 630,
            alt: "Resilience Workshop Case Study"
          },
          locale: "en_IN",
          article: {
            published_time: "2026-04-07",
            author: "Chakraborty, S., Bose, P., Khare, K.",
            section: "Publications"
          }
        },
        twitter: {
          card: "summary_large_image",
          title: "Adolescent Resilience Workshop | Blue Blocks Micro Research Institute",
          description: "Case study: 12 adolescents who survived a real satellite failure face a designed engineering challenge. All four teams treated failure as a puzzle, not a problem.",
          image: "https://research.blueblocks.in/images/og-home.jpg"
        },
        citation: {
          citation_title: "When Children Encounter Designed Adversity - The Resilience Workshop: A Case Study from the Blue Blocks Erdkinder Environment",
          citation_authors: ["Blue Blocks Micro Research Institute", "Chakraborty, Sreemoyee", "Bose, Poulomi", "Khare, Kaustav"],
          citation_publication_date: "2026/04/07",
          citation_publisher: "Blue Blocks Micro Research Institute",
          citation_doi: "10.5281/zenodo.19344032"
        }
      },
      schemas: [
        {
          "@type": "WebPage",
          "@id": "https://research.blueblocks.in/publications/resilience-workshop/#webpage",
          url: "https://research.blueblocks.in/publications/resilience-workshop",
          name: "Adolescent Resilience Workshop | Blue Blocks Micro Research Institute",
          description: "Case study: 12 adolescents who survived a real satellite failure face a designed engineering challenge. All four teams treated failure as a puzzle, not a problem.",
          isPartOf: { "@id": "https://research.blueblocks.in/#website" },
          about: { "@id": "https://research.blueblocks.in/publications/resilience-workshop/#article" }
        },
        {
          "@type": "ScholarlyArticle",
          "@id": "https://research.blueblocks.in/publications/resilience-workshop/#article",
          name: "When Children Encounter Designed Adversity - The Resilience Workshop: A Case Study from the Blue Blocks Erdkinder Environment",
          headline: "When Children Encounter Designed Adversity - The Resilience Workshop: A Case Study from the Blue Blocks Erdkinder Environment",
          description: "This case study is the second of a five-case series in which the Blue Blocks Micro Research Institute investigates how children react and adjust when the conditions of learning are designed to give rise to adversity in the environment. The erdkinder adolescents from Blue Blocks participated in a resilience study where on day 1, they were given a worksheet about their satellite project failures, and day 2 gave them a time-bound engineering problem designed to fail. All four teams framed failure as a puzzle, interrogated the challenge brief, and drew on prior physics knowledge as a cognitive resource.",
          url: "https://research.blueblocks.in/publications/resilience-workshop",
          mainEntityOfPage: "https://research.blueblocks.in/publications/resilience-workshop",
          datePublished: "2026-04-07",
          inLanguage: "en",
          identifier: "https://doi.org/10.5281/zenodo.19344032",
          sameAs: "https://doi.org/10.5281/zenodo.19344032",
          author: [
            { "@type": "Organization", "@id": "https://research.blueblocks.in/#microresearch", name: "Blue Blocks Micro Research Institute", url: "https://research.blueblocks.in" },
            { "@type": "Person", name: "Sreemoyee Chakraborty", affiliation: { "@id": "https://research.blueblocks.in/#microresearch" } },
            { "@type": "Person", name: "Poulomi Bose", affiliation: { "@id": "https://research.blueblocks.in/#microresearch" } },
            { "@type": "Person", name: "Kaustav Khare", affiliation: { "@id": "https://research.blueblocks.in/#microresearch" } }
          ],
          publisher: { "@type": "Organization", name: "Blue Blocks Micro Research Institute", url: "https://research.blueblocks.in" },
          isAccessibleForFree: true,
          license: "https://creativecommons.org/licenses/by/4.0/",
          keywords: [
            "adolescent resilience", "designed adversity", "failure framing", "cognitive transfer",
            "Montessori Erdkinder", "engineering challenge", "CubeSat", "SBB-1", "embedded observation",
            "practitioner-led research", "micro research", "cross-study series", "STEM education",
            "Blue Blocks Micro Research Institute"
          ],
          about: [
            { "@type": "Thing", name: "adolescent resilience" },
            { "@type": "Thing", name: "designed adversity" },
            { "@type": "Thing", name: "cross-domain cognitive transfer" },
            { "@type": "Thing", name: "failure framing" }
          ],
          citation: [
            { "@type": "ScholarlyArticle", name: "Blue Blocks Micro Research Methodology: A Practitioner-Led, Longitudinal Framework for Embedded Educational Research", url: "https://doi.org/10.5281/zenodo.18584816" },
            { "@type": "ScholarlyArticle", name: "Bridging the Lab and the Classroom: A Participatory Micro-Research Methodology for Scientist-Child Co-authorship in STEM", url: "https://doi.org/10.5281/zenodo.18584890" },
            { "@type": "ScholarlyArticle", name: "When Children Own the Research Instrument: The Flipside Workspace Field Research Case Study", url: "https://doi.org/10.5281/zenodo.19219065" },
            { "@type": "ScholarlyArticle", name: "Valorization In Orbit — An Adolescent CubeSat Mission", url: "https://doi.org/10.5281/zenodo.18337934" }
          ],
          sourceOrganization: { "@id": "https://research.blueblocks.in/#microresearch" },
          spatialCoverage: { "@type": "Place", name: "Hyderabad, Telangana, India" },
          countryOfOrigin: { "@type": "Country", name: "India" }
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://research.blueblocks.in/publications/resilience-workshop/#breadcrumb",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://research.blueblocks.in/" },
            { "@type": "ListItem", position: 2, name: "Publications", item: "https://research.blueblocks.in/publications" },
            { "@type": "ListItem", position: 3, name: "Resilience Workshop Case Study", item: "https://research.blueblocks.in/publications/resilience-workshop" }
          ]
        }
      ],
      sections: [
        {
          id: "resilience-hero",
          type: "hero",
          variant: "publication",
          headline: "Adolescent Resilience Through Designed Engineering Failure",
          subheadline: "When Children Encounter Designed Adversity — The Resilience Workshop: A Case Study from the Blue Blocks Erdkinder Environment | CS-2026-002",
          image: { src: "/src/assets/banners/publications-doi.jpg", alt: "Resilience Workshop Case Study", variant: "hero", privacyBlur: false }
        },
        {
          id: "resilience-meta",
          type: "metaStrip",
          items: [
            { label: "DOI", value: "10.5281/zenodo.19344032", href: "https://doi.org/10.5281/zenodo.19344032", external: true },
            { label: "Case ID", value: "CS-2026-002" },
            { label: "Type", value: "Qualitative Case Study" },
            { label: "Series", value: "Case 2 of 5 — Child-Driven Inquiry Series" },
            { label: "Status", value: "Published" },
            { label: "Data Collection", value: "March 2026" },
            { label: "Affiliation", value: "Blue Blocks Micro Research Institute" },
            { label: "Access", value: "Open Access — CC BY 4.0" }
          ]
        },
        {
          id: "resilience-introduction",
          type: "twoColumn",
          compact: true,
          left: {
            sections: [
              {
                title: "Introduction",
                body: "What happens when adolescents who have already lived through a genuine project failure — a student-designed satellite payload that reached ISRO's PSLV-C62 launchpad but was lost to a Stage 4 anomaly — are handed an unfamiliar engineering challenge with a built-in first failure?\n\nThis case study follows twelve Erdkinder students from Blue Blocks through a two-day resilience workshop designed to answer that question. Day 1 asked students to write privately about their satellite failure — what they thought had happened, how they felt, and what they now understood differently. Day 2 placed them in four teams of three, gave them a constrained engineering problem (transfer water between containers without pouring, using only paper, tape, straws, and scissors), and watched what happened when the obvious approach failed within the first thirty minutes.\n\nThe study is the second in a five-case series from the Blue Blocks Micro Research Institute investigating child-driven inquiry across varied conditions of adversity, ownership, and engagement. It uses the BBMRI Micro-Research Methodology — a practitioner-led framework for embedded educational observation — and is the first case in the series to introduce adversity as a designed condition rather than a by-product of the activity."
              }
            ]
          },
          right: {
            panels: [
              {
                title: "Repository & Access",
                links: [
                  { label: "Full Paper on Zenodo (DOI)", href: "https://doi.org/10.5281/zenodo.19344032", external: true },
                  { label: "Methodology Framework", href: "https://doi.org/10.5281/zenodo.18584816", external: true },
                  { label: "Co-Authorship Framework", href: "https://doi.org/10.5281/zenodo.18584890", external: true }
                ]
              }
            ]
          }
        },
        {
          id: "resilience-abstract",
          type: "twoColumn",
          compact: true,
          left: {
            sections: [
              {
                title: "Abstract",
                body: "This case study is the second of a five-case series in which the Blue Blocks Micro Research Institute investigates how children react and adjust when the conditions of learning are designed to give rise to adversity in the environment. The present case study is structurally different from the first study in the series because, in this case, the adversity is the designed conditions; it is not a by-product of the activity. The erdkinder adolescents from Blue Blocks participated in a resilience study where on day 1, they were given a worksheet that asked them about their failures and the process of creating the satellite project linking them to real-world failure. Day 2 gave them a completely new challenge — it was a time-bound, simple engineering problem where they were asked to transfer water from one container to another without pouring it directly using only a specified set of materials, where the initial approach was designed to produce partial or complete failure. The analysis observed pre-specified hypotheses based on ownership and adaptability, which held true through the case study. One emergent finding was spontaneous cross-domain cognitive transfer — children drew unprompted on physics concepts from prior learning to solve an unfamiliar engineering problem. Gaps in the record are documented transparently.\n\nEthics Note: All participants were adolescents from Blue Blocks School. Regular parental consent was obtained. Student identities are anonymised using reference codes (P-01 to P-08 for reflection sheets, C-01 to C-12 for Day 2 observations). Weekend reflection sheets were completed at home voluntarily."
              }
            ]
          },
          right: {
            panels: [
              {
                title: "Related Publications",
                links: [
                  { label: "Methodology Framework", href: "/methodology" },
                  { label: "Publications Index", href: "/publications" },
                  { label: "Flipside Case Study (Case 1)", href: "/publications/flipside-case-study" },
                  { label: "Structured Debate Side Switch (Case 3)", href: "/publications/structured-debate-side-switch" },
                  { label: "SAPARYA / IMF — SBB-1 Mission", href: "/publications/saparya-imf-case-study" }
                ]
              }
            ]
          }
        },
        {
          id: "resilience-key-findings",
          type: "twoColumn",
          compact: true,
          left: {
            sections: [
              {
                title: "Key Findings",
                body: "",
                bullets: [
                  "1. All four teams framed failure as a puzzle, not a problem. When the initial engineering approach failed — paper channels leaked, tape seals broke — no team blamed a member, stopped working, or sought adult rescue. All four teams treated the failure as information and iterated.",
                  "2. Three out of four teams interrogated the challenge brief itself. Students re-read the brief, noticed what it did not constrain, and acted on that reading — requesting extra cups and materials the brief permitted but did not display. This brief interrogation behaviour is a qualitatively different orientation to problem-solving than accepting apparent constraints as fixed.",
                  "3. Students spontaneously transferred physics concepts from prior learning. Two teams explicitly drew on Archimedes' principle and siphon mechanics from classroom science to solve an unfamiliar engineering problem. One student's verbatim: \"Remember the thingy which we have in the science lab. The Greek guy thing.\" This cross-domain cognitive transfer was not hypothesised and emerged from the observer record.",
                  "4. Private reflection sheets surfaced emotional content entirely absent from in-session observation. Students who appeared enthusiastic and adaptive during the Day 2 challenge had written — privately, the night before — about sadness, disappointment, and doubt about the satellite failure. The emotional register of the reflection sheets and the behavioural register of the observer sheets are measuring different things. Both are required for a complete picture.",
                  "5. Students who had owned a genuinely hard prior project arrived at the new challenge with failure already normalised. Reflection sheet language clustered around three themes: failure as information, failure as permission to restart, and failure as epistemically valuable. One student wrote: \"to not just succeed but to again learn faithfully until the path to success had a lot of wisdom, and to have that wisdom and succeed, is the greatest thing of all.\"",
                  "6. The designed adversity produced a qualitatively different research yield than incidental adversity. Because the Day 2 challenge was engineered to fail at a predictable point, the study captured the exact moment of failure response — language, behaviour, team dynamics — in real time. This is data that retrospective studies cannot produce."
                ]
              }
            ]
          },
          right: {
            panels: [
              {
                title: "Analytical Framework",
                citation: "Hart (1992) and Cook-Sather (2006) on children's participation, Werner & Smith (1992) on resilience, Lincoln & Guba (1985) on naturalistic inquiry — mapped against adversity response, cognitive transfer, and dual-instrument comparison."
              }
            ]
          }
        },
        {
          id: "resilience-methodology",
          type: "twoColumn",
          compact: true,
          left: {
            sections: [
              {
                title: "Methodology Summary",
                body: "This is a qualitative case study using structured observation and private written reflection as dual data collection instruments. Twelve adolescent students (ages 12-15) from the Blue Blocks Erdkinder programme participated across two days. Day 1 administered a four-part weekend reflection sheet asking students to write privately about their experience of the SBB-1 CubeSat project failure. Day 2 presented a 60-minute time-bound engineering challenge (water transfer using constrained materials) with a built-in first failure point.\n\nFour teams of three were each assigned a dedicated observer using an eight-section structured observation template covering: language at failure, response types, failure framing, brief interrogation behaviour, materials requested, recovery arc, help-seeking, and end-of-session summary. The brief interrogation and materials request sections (Sections D and E) were new additions to this case study's instrument, designed to capture whether students read and acted on what the challenge brief permitted but did not display.\n\nThree hypotheses were pre-specified: H1 (instrument quality — children's resilience framing reveals language adult instruments miss), H2 (engagement behaviour — prior ownership of a hard project produces adaptive problem-framing), and H3 (selective attention — private reflection surfaces content absent from in-session observation). Analysis followed the Embedded Observer Principle of the BBMRI Micro-Research framework."
              }
            ]
          },
          right: {
            panels: [
              {
                title: "Cross-References",
                links: [
                  { label: "Methodology", href: "/methodology" },
                  { label: "Governance", href: "/governance" },
                  { label: "Ethics & Privacy", href: "/governance/ethics" },
                  { label: "Publications Index", href: "/publications" }
                ]
              }
            ]
          }
        },
        {
          id: "resilience-parameters",
          type: "tableBlock",
          header: "Study Parameters",
          headers: ["Parameter", "Detail"],
          rows: [
            ["Participants", "12 adolescents (Erdkinder cohort)"],
            ["Age Range", "12–15 years"],
            ["Study Setting", "Blue Blocks School, Hyderabad, India"],
            ["Data Collection", "March 2026 (two-day workshop)"],
            ["Day 1 Instrument", "Four-part weekend reflection sheet (completed at home)"],
            ["Day 2 Instrument", "Eight-section structured observer sheet (per team)"],
            ["Teams", "4 teams of 3 students, each with dedicated observer"],
            ["Day 2 Task", "Water transfer engineering challenge (60 minutes, built-in first failure)"],
            ["Prior Adversity Condition", "SBB-1 CubeSat mission — IN-SPACe authorized, PSLV-C62 launch, Stage 4 anomaly"],
            ["Reflection Sheets Returned", "8 of 12 (2 outstanding)"],
            ["Hypotheses", "H1 (instrument quality), H2 (engagement behaviour), H3 (selective attention)"],
            ["Emergent Finding", "Spontaneous cross-domain cognitive transfer (physics to engineering)"],
            ["Anonymisation", "Reference codes: P-01 to P-08 (reflections), C-01 to C-12 (observations)"],
            ["Series Position", "Case 2 of 5 — Child-Driven Inquiry Series"]
          ]
        },
        {
          id: "resilience-discussion",
          type: "twoColumn",
          compact: true,
          left: {
            sections: [
              {
                title: "Discussion Summary",
                body: "This study addresses a gap in the adolescent resilience literature: most resilience research observes children after naturally occurring adversity. This study designed the adversity, controlled the failure point, and captured the exact moment of response — providing data that retrospective studies cannot produce.\n\nThe study setting is significant because the prior adversity condition was not hypothetical. The students had genuinely participated in the design of a satellite payload that was certified flight-ready, integrated with an ISRO launch vehicle, and lost to a Stage 4 anomaly. Their reflection sheets describe real disappointment, real sadness, and real philosophical processing of what failure means. When they then encountered a designed failure in the engineering challenge, their behaviour was measurably adaptive — but their private emotional history was only visible through the reflection instrument.\n\nThe primary limitation is the absence of Day 1 observation data. The CubeSat failure — the actual adversity condition — was not observed in real time by the research team. It was reconstructed retrospectively through student reflection sheets. This means H2's evidence is strong for the designed (Day 2) adversity but relies on self-report for the prior (Day 1) adversity. A dedicated Day 1 observer protocol is recommended for Cases 4 and 5."
              }
            ]
          },
          right: {
            panels: [
              {
                title: "How to Cite (APA)",
                citation: "Blue Blocks Micro Research Institute, Chakraborty, S., Bose, P., & Khare, K. (2026). When Children Encounter Designed Adversity — The Resilience Workshop: A Case Study from the Blue Blocks Erdkinder Environment. Blue Blocks Micro Research Institute. Zenodo. https://doi.org/10.5281/zenodo.19344032"
              }
            ]
          }
        },
        {
          id: "resilience-implications",
          type: "twoColumn",
          compact: true,
          left: {
            sections: [
              {
                title: "Implications",
                body: "For Educators\nThe finding that all four teams treated designed failure as a puzzle — and that three teams interrogated the challenge constraints rather than accepting them — suggests that prior ownership of genuinely difficult work builds a transferable orientation to adversity. This has direct implications for curriculum design: engineering challenges with built-in failure points, when preceded by real project experience, produce observable adaptive behaviour that worksheets and discussions about resilience cannot replicate.\n\nFor Resilience Researchers\nThe mismatch between private emotional content (reflection sheets) and public adaptive behaviour (observer notes) raises a methodological concern for single-instrument resilience studies. Students who appeared enthusiastic and adaptive in the session had written privately about sadness and doubt. A study relying only on in-session observation would systematically underestimate the emotional cost of resilience.\n\nFor Montessori Practitioners\nThe study provides empirical evidence for the Erdkinder model's emphasis on real work with real consequences. The students' prior engagement with the CubeSat project — a genuinely difficult, genuinely high-stakes initiative — appears to have produced not just emotional resilience but cognitive equipment: prior knowledge that students treated as a legitimate tool in a new domain."
              }
            ]
          },
          right: {
            panels: [
              {
                title: "Authors",
                links: [
                  { label: "Sreemoyee Chakraborty (Lead Researcher) — ORCID 0000-0001-5180-156X", href: "https://orcid.org/0000-0001-5180-156X", external: true },
                  { label: "Poulomi Bose (Co-Researcher) — ORCID 0009-0007-6156-2161", href: "https://orcid.org/0009-0007-6156-2161", external: true },
                  { label: "Kriti Khare (Co-Researcher) — ORCID 0009-0004-3106-8873", href: "https://orcid.org/0009-0004-3106-8873", external: true },
                  { label: "Pavan Goyal (Project Leader, Contributor) — ORCID 0009-0009-8840-8505", href: "https://orcid.org/0009-0009-8840-8505", external: true }
                ]
              }
            ]
          }
        },
        {
          id: "resilience-references",
          type: "twoColumn",
          compact: true,
          left: {
            sections: [
              {
                title: "References",
                body: "",
                bullets: [
                  "Blue Blocks Micro Research Institute, Goyal, P., Chakraborty, S., & Ediga, S. (2026a). Blue Blocks Micro Research Methodology: A Practitioner-Led, Longitudinal Framework for Embedded Educational Research. Zenodo. https://doi.org/10.5281/zenodo.18584816",
                  "Blue Blocks Micro Research Institute, Goyal, P., Chakraborty, S., & Ediga, S. (2026b). Blue Blocks Bridging the Lab and the Classroom: A Participatory Micro-Research Methodology for Scientist-Child Co-authorship in STEM. Zenodo. https://doi.org/10.5281/zenodo.18584890",
                  "Chakraborty, S., Bose, P., & Khare, K. (2026). When Children Own the Research Instrument: The Flipside Workspace Field Research Case Study from the Blue Blocks Erdkinder Environment. Blue Blocks Micro Research Institute. Zenodo. https://doi.org/10.5281/zenodo.19219065",
                  "Cook-Sather, A. (2006). Sound, presence, and power: 'Student voice' in educational research and reform. Curriculum Inquiry, 36(4), 359–390.",
                  "Greene, S. M., & Hill, M. (2005). Researching children's experiences: Methods and methodological issues. In S. M. Greene & D. M. Hogan (Eds.), Researching Children's Experience: Approaches and Methods (pp. 1–21). Sage.",
                  "Hart, R. A. (1992). Children's Participation: From Tokenism to Citizenship. UNICEF Innocenti Essays No. 4. UNICEF International Child Development Centre.",
                  "Lave, J., & Wenger, E. (1991). Situated Learning: Legitimate Peripheral Participation. Cambridge University Press.",
                  "Lillard, A. S. (2017). Montessori: The Science Behind the Genius (3rd ed.). Oxford University Press.",
                  "Lincoln, Y. S., & Guba, E. G. (1985). Naturalistic Inquiry. Sage.",
                  "Punch, S. (2002). Research with children: The same or different from research with adults? Childhood, 9(3), 321–341.",
                  "Werner, E. E., & Smith, R. S. (1992). Overcoming the Odds: High Risk Children from Birth to Adulthood. Cornell University Press."
                ]
              }
            ]
          },
          right: {
            panels: [
              {
                title: "Series Context",
                citation: "Case 2 of 5 — Child-Driven Inquiry Series. The first case study in the series to introduce adversity as a designed condition rather than a by-product of the activity."
              }
            ]
          }
        },
        {
          id: "resilience-zenodo-cta",
          type: "highlightBox",
          header: "Read the Full Paper on Zenodo",
          body: "The complete paper is available as an open-access record on Zenodo under CC BY 4.0.",
          cta: { label: "Read the Full Paper on Zenodo", href: "https://doi.org/10.5281/zenodo.19344032", external: true }
        },
        {
          id: "resilience-archival-note",
          type: "textBlock",
          variant: "muted",
          body: "This record is maintained as part of the Blue Blocks Micro Research Institute open archival framework to support governance transparency, citation permanence, and research continuity."
        },
        {
          id: "resilience-related",
          type: "relatedCards",
          header: "Related Registry",
          cards: [
            { title: "Methodology", description: "Research framework.", icon: "publication", href: "/methodology" },
            { title: "Flipside Case Study", description: "Case 1 of the five-case series.", icon: "publication", href: "/publications/flipside-case-study" },
            { title: "Structured Debate Side Switch", description: "Case 3 of the five-case series.", icon: "publication", href: "/publications/structured-debate-side-switch" },
            { title: "SAPARYA / IMF (SBB-1)", description: "The CubeSat mission referenced as prior adversity.", icon: "publication", href: "/publications/saparya-imf-case-study" }
          ]
        }
      ]
    },

    "/publications/structured-debate-side-switch": {
      title: "The Structured Debate With Mid-Point Side Switch: A Case Study from the Blue Blocks Erdkinder Environment",
      metaDescription: "Case study: 12 adolescents debated voting age, then switched sides mid-debate. Phase 2 arguments were qualitatively richer. Erdkinder environment, Hyderabad.",
      seo: {
        title: "Debate Side Switch: Adolescent Civic Reasoning",
        canonical: "https://research.blueblocks.in/publications/structured-debate-side-switch",
        robots: "index, follow",
        keywords: "structured debate, side switch, adolescent argumentation, civic reasoning, Erdkinder, perspective-taking, micro research, Blue Blocks Micro Research Institute, qualitative case study, embodied argumentation, voting age, cross-listening, group cohesion, observation instrument, Montessori adolescent, adversarial design, argumentation quality, civic self-positioning, phase analysis, inter-rater reliability",
        openGraph: {
          type: "article",
          url: "https://research.blueblocks.in/publications/structured-debate-side-switch",
          title: "Debate Side Switch: Adolescent Civic Reasoning | Blue Blocks Micro Research Institute",
          description: "Case study: 12 adolescents debated voting age, then switched sides mid-debate. Phase 2 arguments were qualitatively richer. Erdkinder environment, Hyderabad.",
          image: {
            url: "https://research.blueblocks.in/images/og-home.jpg",
            width: 1200,
            height: 630,
            alt: "Structured Debate Side Switch Case Study"
          },
          locale: "en_IN",
          article: {
            published_time: "2026-04-09",
            author: "Chakraborty, S., Matta, S.",
            section: "Publications"
          }
        },
        twitter: {
          card: "summary_large_image",
          title: "Debate Side Switch: Adolescent Civic Reasoning | Blue Blocks Micro Research Institute",
          description: "Case study: 12 adolescents debated voting age, then switched sides mid-debate. Phase 2 arguments were qualitatively richer. Erdkinder environment, Hyderabad.",
          image: "https://research.blueblocks.in/images/og-home.jpg"
        },
        citation: {
          citation_title: "The Structured Debate With Mid-Point Side Switch: A Case Study from the Blue Blocks Erdkinder Environment",
          citation_authors: ["Chakraborty, Sreemoyee", "Matta, Sruthi"],
          citation_publication_date: "2026/04/09",
          citation_publisher: "Zenodo",
          citation_doi: "10.5281/zenodo.19480752"
        }
      },
      schemas: [
        {
          "@type": "WebPage",
          "@id": "https://research.blueblocks.in/publications/structured-debate-side-switch/#webpage",
          url: "https://research.blueblocks.in/publications/structured-debate-side-switch",
          name: "Debate Side Switch: Adolescent Civic Reasoning | Blue Blocks Micro Research Institute",
          description: "Case study: 12 adolescents debated voting age, then switched sides mid-debate. Phase 2 arguments were qualitatively richer. Erdkinder environment, Hyderabad.",
          isPartOf: { "@id": "https://research.blueblocks.in/#website" },
          about: { "@id": "https://research.blueblocks.in/publications/structured-debate-side-switch/#article" }
        },
        {
          "@type": "ScholarlyArticle",
          "@id": "https://research.blueblocks.in/publications/structured-debate-side-switch/#article",
          name: "The Structured Debate With Mid-Point Side Switch: A Case Study from the Blue Blocks Erdkinder Environment",
          headline: "The Structured Debate With Mid-Point Side Switch: A Case Study from the Blue Blocks Erdkinder Environment",
          description: "This case study is the third of a five-case series investigating what children notice, ask, and produce when given ownership of a research instrument — and what happens when that ownership is subsequently disrupted. Twelve adolescent students were divided into two teams and assigned positions in a structured debate on the motion: This house believes the voting age should be lowered to 16. At the midpoint, without prior warning, both teams were asked to switch sides. The central finding is that the switch did not collapse the debate — Phase 2 arguments were in several instances qualitatively richer than Phase 1 output, most notably when students turned their own earlier arguments against themselves.",
          url: "https://research.blueblocks.in/publications/structured-debate-side-switch",
          mainEntityOfPage: "https://research.blueblocks.in/publications/structured-debate-side-switch",
          datePublished: "2026-04-09",
          inLanguage: "en",
          identifier: "https://doi.org/10.5281/zenodo.19480752",
          sameAs: "https://doi.org/10.5281/zenodo.19480752",
          author: [
            { "@type": "Organization", "@id": "https://research.blueblocks.in/#microresearch", name: "Blue Blocks Micro Research Institute", url: "https://research.blueblocks.in" },
            { "@type": "Person", name: "Sreemoyee Chakraborty", affiliation: { "@id": "https://research.blueblocks.in/#microresearch" } },
            { "@type": "Person", name: "Sruthi Matta", affiliation: { "@id": "https://research.blueblocks.in/#microresearch" } }
          ],
          publisher: { "@type": "Organization", name: "Zenodo", url: "https://zenodo.org" },
          isAccessibleForFree: true,
          license: "https://creativecommons.org/licenses/by/4.0/",
          keywords: [
            "structured debate", "side switch", "adolescent argumentation", "civic reasoning",
            "Erdkinder", "perspective-taking", "micro research", "Blue Blocks Micro Research Institute",
            "qualitative case study", "embodied argumentation", "voting age", "cross-listening",
            "group cohesion", "observation instrument", "Montessori adolescent", "adversarial design",
            "argumentation quality", "civic self-positioning", "phase analysis", "inter-rater reliability"
          ],
          about: [
            { "@type": "Thing", name: "Structured debate with perspective-taking constraint" },
            { "@type": "Thing", name: "Adolescent civic reasoning and argumentation" },
            { "@type": "Thing", name: "Mid-point side switch as research instrument disruption" },
            { "@type": "Thing", name: "Cross-listening and argument quality in adolescents" }
          ],
          citation: [
            { "@type": "ScholarlyArticle", name: "Blue Blocks Micro Research Methodology: A Practitioner-Led, Longitudinal Framework for Embedded Educational Research", url: "https://doi.org/10.5281/zenodo.18584816" },
            { "@type": "ScholarlyArticle", name: "Blue Blocks Embedded Observation Protocol (BEOP v1.0)", url: "https://doi.org/10.5281/zenodo.19087415" },
            { "@type": "ScholarlyArticle", name: "Micro Research Ethics Framework (MREF v1.0)", url: "https://doi.org/10.5281/zenodo.19047669" }
          ],
          sourceOrganization: { "@id": "https://research.blueblocks.in/#microresearch" },
          spatialCoverage: { "@type": "Place", name: "Hyderabad, Telangana, India" },
          countryOfOrigin: { "@type": "Country", name: "India" }
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://research.blueblocks.in/publications/structured-debate-side-switch/#breadcrumb",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://research.blueblocks.in/" },
            { "@type": "ListItem", position: 2, name: "Publications", item: "https://research.blueblocks.in/publications" },
            { "@type": "ListItem", position: 3, name: "Structured Debate Side Switch", item: "https://research.blueblocks.in/publications/structured-debate-side-switch" }
          ]
        }
      ],
      sections: [
        {
          id: "debate-hero",
          type: "hero",
          variant: "publication",
          headline: "Adolescents Who Switched Sides Mid-Debate and Argued Better for It",
          subheadline: "The Structured Debate With Mid-Point Side Switch — A Case Study from the Blue Blocks Erdkinder Environment | CS-2026-003",
          image: { src: "/src/assets/banners/publications-doi.jpg", alt: "Structured Debate Side Switch Case Study", variant: "hero", privacyBlur: false }
        },
        {
          id: "debate-meta",
          type: "metaStrip",
          items: [
            { label: "DOI", value: "10.5281/zenodo.19480752", href: "https://doi.org/10.5281/zenodo.19480752", external: true },
            { label: "Case ID", value: "CS-2026-003" },
            { label: "Type", value: "Qualitative Case Study" },
            { label: "Series", value: "Five-Case Series — Case 3 of 5" },
            { label: "Status", value: "Published" },
            { label: "Data Collection", value: "Single session, April 2026" },
            { label: "Setting", value: "Blue Blocks Montessori School, Hyderabad, India" },
            { label: "Affiliation", value: "Blue Blocks Micro Research Institute" },
            { label: "Access", value: "Open Access — CC BY 4.0" }
          ]
        },
        {
          id: "debate-introduction",
          type: "twoColumn",
          compact: true,
          left: {
            sections: [
              {
                title: "Introduction",
                body: "What happens when you give adolescents full ownership of an argument — and then take it away mid-debate? This case study documents exactly that. Twelve students from the Blue Blocks Erdkinder environment were assigned opposing positions on the motion that the voting age should be lowered to 16, given preparation time, and asked to argue their case in a structured debate format. At the midpoint, without any prior warning, both teams were instructed to switch sides and continue from the opposing position.\n\nCS-2026-003 is the third in a five-case series from Blue Blocks Micro Research Institute investigating what children produce when given ownership of a research instrument — and what happens when that ownership is disrupted by design. This case is the most adversarially designed in the set. The side-switch is not a pedagogical strategy being evaluated for effectiveness; it is a deliberate methodological disruption inserted to observe how adolescents handle cognitive and civic dissonance in real time.\n\nThe study was conducted within the Erdkinder environment at Blue Blocks Montessori School, Hyderabad — an adolescent programme structured around self-directed learning, community responsibility, and practical reasoning. Four embedded observers using a structured observation instrument recorded argumentation quality, civic self-positioning, group cohesion, and behavioural response across both phases of the debate. All data collection followed the Blue Blocks Embedded Observation Protocol (BEOP v1.0) and the Micro Research Ethics Framework (MREF v1.0)."
              }
            ]
          },
          right: {
            panels: [
              {
                title: "Repository & Access",
                links: [
                  { label: "Full Paper on Zenodo (DOI)", href: "https://doi.org/10.5281/zenodo.19480752", external: true },
                  { label: "Methodology Framework", href: "https://doi.org/10.5281/zenodo.18584816", external: true },
                  { label: "Observation Protocol (BEOP v1.0)", href: "https://doi.org/10.5281/zenodo.19087415", external: true },
                  { label: "Ethics Framework (MREF v1.0)", href: "https://doi.org/10.5281/zenodo.19047669", external: true }
                ]
              }
            ]
          }
        },
        {
          id: "debate-abstract",
          type: "twoColumn",
          compact: true,
          left: {
            sections: [
              {
                title: "Abstract",
                body: "This case study is the third of a five-case series in which the Blue Blocks Micro Research Institute investigates what children notice, ask, and produce when given ownership of a research instrument — and what happens when that ownership is subsequently disrupted. Case 3 is the most adversarially designed case in the set. Twelve adolescent students were divided into two teams and assigned positions in a structured debate on the motion: This house believes the voting age should be lowered to 16. Each team was given preparation time and ownership of their assigned position. At the midpoint of the debate, without prior warning, both teams were asked to switch sides and continue arguing from the opposing position. Four observers — two per team — recorded behaviour, argumentation quality, civic self-positioning, and group cohesion using a structured observation instrument. The central finding is that the switch did not collapse the debate. Both teams adapted, drew on cross-listening, and produced arguments in Phase 2 that were, in several instances, qualitatively richer than their Phase 1 output — most notably when students turned their own earlier arguments against themselves.\n\nEthics note: All participants are adolescent students at Blue Blocks Montessori School. Participation was voluntary. Informed consent and assent were obtained in accordance with the Micro Research Ethics Framework (MREF v1.0). All student identifiers are anonymised throughout."
              }
            ]
          },
          right: {
            panels: [
              {
                title: "Related Publications",
                links: [
                  { label: "Methodology Framework", href: "/methodology" },
                  { label: "Publications Index", href: "/publications" },
                  { label: "Flipside Case Study", href: "/publications/flipside-case-study" },
                  { label: "Iran War Case Study", href: "/publications/iran-war-case-study" }
                ]
              }
            ]
          }
        },
        {
          id: "debate-key-findings",
          type: "twoColumn",
          compact: true,
          left: {
            sections: [
              {
                title: "Key Findings",
                body: "",
                bullets: [
                  "1. The side switch did not collapse the debate. Both teams continued arguing after the mid-point switch, adapting to their new positions without structural breakdown of the session — demonstrating that adolescents can sustain reasoned argumentation even when their assigned stance is forcibly reversed.",
                  "2. Phase 2 arguments were qualitatively richer in several instances. Students who had just argued one side drew directly on their own Phase 1 arguments to construct counter-positions in Phase 2 — a behaviour observed across both teams and flagged by multiple observers as analytically significant.",
                  "3. Cross-listening was the primary mechanism enabling the switch. Observer data showed that students who had actively listened to the opposing team during Phase 1 adapted more fluidly in Phase 2. Students with lower cross-listening scores showed more resistance and shorter argument construction in Phase 2.",
                  "4. Civic self-positioning shifted measurably between phases. Several students whose personal view aligned with their Phase 1 position showed the most creative argumentation in Phase 2 — having to argue against their own convictions appeared to sharpen rather than suppress their reasoning.",
                  "5. An emergent finding around exam pressure arose unprompted. During Phase 2, students raised exam pressure as an argument against lowering the voting age — a topic not introduced by facilitators, demonstrating that adolescents in the Erdkinder environment actively connect civic questions to their immediate lived experience.",
                  "6. Observer agreement was strong across all four scorers. The structured observation instrument produced consistent scores across both lead and second observers for argumentation quality and group cohesion metrics, supporting the instrument's reliability in an adversarial session design."
                ]
              }
            ]
          },
          right: {
            panels: [
              {
                title: "Analytical Framework",
                citation: "Toulmin (argumentation structure), Kohlberg (civic/moral reasoning) — mapped against argumentation quality, civic self-positioning, and cross-listening domains."
              }
            ]
          }
        },
        {
          id: "debate-methodology",
          type: "twoColumn",
          compact: true,
          left: {
            sections: [
              {
                title: "Methodology Summary",
                body: "CS-2026-003 is a qualitative case study using embedded observation within a live structured debate session. The study design is adversarial by construction: the mid-point side switch is a deliberate disruption introduced to observe how adolescents manage cognitive and civic dissonance under real-time conditions. This is not an evaluation of debate as a pedagogical method; it is a case study of argumentation behaviour under enforced perspective change.\n\nTwelve adolescent participants from the Blue Blocks Erdkinder environment were divided into two teams of six. The session ran in two phases separated by the side switch. Four embedded observers — two assigned per team — used a standardised observation instrument to score five metrics per phase: argumentation quality, civic self-positioning, cross-listening, group cohesion, and individual resistance to the switch. Verbatim quotes were recorded by observers and are reproduced in the appendix. Researcher inference was recorded in a separate column from raw observation, maintaining the separation required by the BEOP protocol.\n\nData was analysed for patterns across both phases and across the four observer records. Hypotheses were pre-registered for the session and assessed against the data post-collection. The analytical framework drew on Toulmin's argumentation model for assessing argument structure, and Kohlberg's moral development stages for interpreting civic self-positioning claims."
              }
            ]
          },
          right: {
            panels: [
              {
                title: "Cross-References",
                links: [
                  { label: "Methodology", href: "/methodology" },
                  { label: "Governance", href: "/governance" },
                  { label: "Ethics & Privacy", href: "/governance/ethics" },
                  { label: "Publications Index", href: "/publications" }
                ]
              }
            ]
          }
        },
        {
          id: "debate-parameters",
          type: "tableBlock",
          header: "Study Parameters",
          headers: ["Parameter", "Detail"],
          rows: [
            ["Participants", "12 adolescent students"],
            ["Age Cohort", "Erdkinder (adolescent cohort, approx. 12–15 years)"],
            ["Teams", "2 teams of 6"],
            ["Observers", "4 (2 per team — lead observer and second observer)"],
            ["Session Structure", "Two-phase structured debate with mid-point side switch"],
            ["Debate Motion", "This house believes the voting age should be lowered to 16"],
            ["Data Collection", "Single session, April 2026"],
            ["Setting", "Blue Blocks Montessori School, Hyderabad, India"],
            ["Data Type", "Structured observer scores (1–5 scale) + verbatim quotes"],
            ["Metrics Scored", "Argumentation quality, civic self-positioning, cross-listening, group cohesion, resistance to switch"],
            ["Analytical Framework", "Toulmin (argumentation), Kohlberg (moral/civic reasoning)"],
            ["Inter-Rater Reliability", "Four observers across two independent scoring streams"],
            ["Observation Protocol", "Blue Blocks Embedded Observation Protocol (BEOP v1.0)"],
            ["Ethics Protocol", "Micro Research Ethics Framework (MREF v1.0)"],
            ["Anonymization", "All student identifiers removed; observer designations used throughout"]
          ]
        },
        {
          id: "debate-discussion",
          type: "twoColumn",
          compact: true,
          left: {
            sections: [
              {
                title: "Discussion Summary",
                body: "This case study addresses a gap in participatory research with adolescents: most studies either observe adolescent reasoning passively or structure debates without disruption. CS-2026-003 introduces disruption as the research instrument itself, testing whether enforced perspective change degrades or improves adolescent argumentation quality. The finding that Phase 2 arguments were in several instances richer than Phase 1 challenges the assumption that position ownership is necessary for high-quality argumentation. It suggests instead that having argued one side deeply — and then being forced to argue against it — can activate a more sophisticated form of reasoning that draws on both positions simultaneously.\n\nThe Erdkinder setting is significant here. The Blue Blocks Montessori adolescent environment emphasizes self-directed reasoning, community responsibility, and the capacity to hold complexity. The students in this case were not performing for a grade; they were engaging with a genuine civic question in a setting where intellectual honesty is normalized. This may explain why the switch produced richer arguments rather than resistance or shutdown.\n\nLimitations acknowledged in the paper include the small sample size of twelve participants and the single-session design, which does not allow for longitudinal pattern claims. The emergent finding around exam pressure — raised unprompted by students — was not captured in the pre-registered hypotheses and is flagged as a direction for a future dedicated micro-study. The paper explicitly does not claim that the side-switch method improves debate ability in general; it documents what happened in this one session with this cohort."
              }
            ]
          },
          right: {
            panels: [
              {
                title: "How to Cite (APA)",
                citation: "Blue Blocks Micro Research Institute, Chakraborty, S., & Matta, S. (2026). The Structured Debate With Mid-Point Side Switch: A Case Study from the Blue Blocks Erdkinder Environment. Blue Blocks Micro Research Institute. Zenodo. https://doi.org/10.5281/zenodo.19480752"
              }
            ]
          }
        },
        {
          id: "debate-implications",
          type: "twoColumn",
          compact: true,
          left: {
            sections: [
              {
                title: "Implications",
                body: "For Educators\nThe mid-point side switch offers a classroom instrument that is easy to implement and produces observable data about how students listen to opposing arguments. Teachers working in Socratic or debate-based programmes may find value in introducing a mid-point reversal not as a surprise but as a structured technique — and observing whether students who listen more actively in Phase 1 argue more effectively in Phase 2.\n\nFor Researchers in Adolescent Argumentation\nThis case provides a replicable single-session design with a structured observation instrument (full instrument in Appendix 1) that other researchers can adapt. The pre-registration of hypotheses against which the emergent exam pressure finding is contrasted demonstrates the value of embedded observation in surfacing findings that hypothesis-driven designs would not anticipate.\n\nFor Civic Education Researchers\nThe voting age debate motion was not chosen arbitrarily — it is a question that directly affects the adolescent participants. The data on civic self-positioning across both phases, and particularly the shift in positioning after the switch, offers a small but replicable window into how adolescents reason about their own civic status when that status is under discussion."
              }
            ]
          },
          right: {
            panels: [
              {
                title: "Authors",
                links: [
                  { label: "Sreemoyee Chakraborty (Lead Researcher) — ORCID 0000-0001-5180-156X", href: "https://orcid.org/0000-0001-5180-156X", external: true },
                  { label: "Sruthi Matta (Co-Researcher) — ORCID 0009-0008-2791-1273", href: "https://orcid.org/0009-0008-2791-1273", external: true }
                ]
              }
            ]
          }
        },
        {
          id: "debate-references",
          type: "twoColumn",
          compact: true,
          left: {
            sections: [
              {
                title: "References",
                body: "",
                bullets: [
                  "Blue Blocks Micro Research Institute, Goyal, P., Chakraborty, S., & Ediga, S. (2026). Blue Blocks Micro Research Methodology: A Practitioner-Led, Longitudinal Framework for Embedded Educational Research. Zenodo. https://doi.org/10.5281/zenodo.18584816",
                  "Blue Blocks Micro Research Institute. (2026). Blue Blocks Embedded Observation Protocol (BEOP v1.0). Zenodo. https://doi.org/10.5281/zenodo.19087415",
                  "Blue Blocks Micro Research Institute. (2026). Micro Research Ethics Framework (MREF v1.0). Zenodo. https://doi.org/10.5281/zenodo.19047669",
                  "Toulmin, S. E. (1958). The Uses of Argument. Cambridge University Press.",
                  "Kohlberg, L. (1969). Stage and sequence: The cognitive-developmental approach to socialisation. In D. A. Goslin (Ed.), Handbook of Socialisation Theory and Research (pp. 347–480). Rand McNally.",
                  "Kuhn, D. (1991). The Skills of Argument. Cambridge University Press.",
                  "Mercier, H., & Sperber, D. (2011). Why do humans reason? Arguments for an argumentative theory. Behavioral and Brain Sciences, 34(2), 57–74."
                ]
              }
            ]
          },
          right: {
            panels: [
              {
                title: "Series Context",
                citation: "Case 3 of 5 — Five-Case Series investigating what children produce when given ownership of a research instrument, and what happens when that ownership is disrupted by design."
              }
            ]
          }
        },
        {
          id: "debate-zenodo-cta",
          type: "highlightBox",
          header: "Read the Full Paper on Zenodo",
          body: "The complete paper is available as an open-access record on Zenodo under CC BY 4.0.",
          cta: { label: "Read the Full Paper on Zenodo", href: "https://doi.org/10.5281/zenodo.19480752", external: true }
        },
        {
          id: "debate-archival-note",
          type: "textBlock",
          variant: "muted",
          body: "This record is maintained as part of the Blue Blocks Micro Research Institute open archival framework to support governance transparency, citation permanence, and research continuity."
        },
        {
          id: "debate-related",
          type: "relatedCards",
          header: "Related Registry",
          cards: [
            { title: "Methodology", description: "Research framework.", icon: "publication", href: "/methodology" },
            { title: "Flipside Case Study", description: "Case 1 of the five-case series.", icon: "publication", href: "/publications/flipside-case-study" },
            { title: "Iran War Case Study", description: "Age-differentiated responses to geopolitical violence.", icon: "publication", href: "/publications/iran-war-case-study" },
            { title: "Publications", description: "Full research docket.", icon: "publication", href: "/publications" }
          ]
        }
      ]
    },

    "/publications/flipside-case-study": {
      title: "When Children Own the Research Instrument: The Flipside Workspace Field Research Case Study from the Blue Blocks Erdkinder Environment",
      metaDescription: "Case study: 12 adolescents designed their own 25-question research instrument and interviewed neurodivergent adults at a Hyderabad cloud kitchen. First of a five-case series.",
      seo: {
        title: "Adolescent Field Research at Neurodivergent Workspace | Blue Blocks Micro Research Institute",
        canonical: "https://research.blueblocks.in/publications/flipside-case-study",
        robots: "index, follow",
        keywords: "child-driven inquiry, neurodivergent entrepreneurship, research instrument design, adolescent fieldwork, Montessori Erdkinder, participatory research, student-authored research, instrument ownership, selective attention, mutual empathy, micro research, embedded observation, child-as-researcher, Blue Blocks Micro Research Institute",
        openGraph: {
          type: "article",
          url: "https://research.blueblocks.in/publications/flipside-case-study",
          title: "Adolescent Field Research at Neurodivergent Workspace | Blue Blocks Micro Research Institute",
          description: "Case study: 12 adolescents designed their own 25-question research instrument and interviewed neurodivergent adults at a Hyderabad cloud kitchen. First of a five-case series.",
          image: {
            url: "https://research.blueblocks.in/images/og-home.jpg",
            width: 1200,
            height: 630,
            alt: "Flipside Case Study"
          },
          locale: "en_IN",
          article: {
            published_time: "2026-03-31",
            author: "Chakraborty, S., Bose, P., Khare, K.",
            section: "Publications"
          }
        },
        twitter: {
          card: "summary_large_image",
          title: "Adolescent Field Research at Neurodivergent Workspace | Blue Blocks Micro Research Institute",
          description: "Case study: 12 adolescents designed their own 25-question research instrument and interviewed neurodivergent adults at a Hyderabad cloud kitchen.",
          image: "https://research.blueblocks.in/images/og-home.jpg"
        },
        citation: {
          citation_title: "When Children Own the Research Instrument: The Flipside Workspace Field Research Case Study from the Blue Blocks Erdkinder Environment",
          citation_authors: ["Chakraborty, Sreemoyee", "Bose, Poulomi", "Khare, Kriti"],
          citation_publication_date: "2026/03/31",
          citation_publisher: "Zenodo",
          citation_doi: "10.5281/zenodo.19219065"
        }
      },
      schemas: [
        {
          "@type": "WebPage",
          "@id": "https://research.blueblocks.in/publications/flipside-case-study/#webpage",
          url: "https://research.blueblocks.in/publications/flipside-case-study",
          name: "Adolescent Field Research at Neurodivergent Workspace | Blue Blocks Micro Research Institute",
          description: "Case study: 12 adolescents designed their own 25-question research instrument and interviewed neurodivergent adults at a Hyderabad cloud kitchen. First of a five-case series.",
          isPartOf: { "@id": "https://research.blueblocks.in/#website" },
          about: { "@id": "https://research.blueblocks.in/publications/flipside-case-study/#article" }
        },
        {
          "@type": "ScholarlyArticle",
          "@id": "https://research.blueblocks.in/publications/flipside-case-study/#article",
          name: "When Children Own the Research Instrument: The Flipside Workspace Field Research Case Study from the Blue Blocks Erdkinder Environment",
          headline: "When Children Own the Research Instrument: The Flipside Workspace Field Research Case Study from the Blue Blocks Erdkinder Environment",
          description: "This case study is the first case of a five-case cross-study series where the Blue Blocks Micro Research Institute investigates what children ask, produce, innovate, and observe when the research instrument ownership is given to the students in varied contexts. A group of Erdkinder adolescents from Blue Blocks School visited the Flipside workspace on 12th March, 2026, which is a cloud kitchen in Hyderabad operated by neurodivergent adults. They equipped themselves with a 25-question self-designed system. The visit included a structured interview session along with a shared cooking session.",
          url: "https://research.blueblocks.in/publications/flipside-case-study",
          mainEntityOfPage: "https://research.blueblocks.in/publications/flipside-case-study",
          datePublished: "2026-03-31",
          inLanguage: "en",
          author: [
            { "@type": "Organization", "@id": "https://research.blueblocks.in/#microresearch", name: "Blue Blocks Micro Research Institute" },
            { "@type": "Person", name: "Sreemoyee Chakraborty", affiliation: { "@id": "https://research.blueblocks.in/#microresearch" } },
            { "@type": "Person", name: "Poulomi Bose", affiliation: { "@id": "https://research.blueblocks.in/#microresearch" } },
            { "@type": "Person", name: "Kriti Khare", affiliation: { "@id": "https://research.blueblocks.in/#microresearch" } }
          ],
          publisher: { "@type": "Organization", name: "Zenodo" },
          isAccessibleForFree: true,
          license: "https://creativecommons.org/licenses/by/4.0/",
          identifier: "https://doi.org/10.5281/zenodo.19219065",
          sameAs: "https://doi.org/10.5281/zenodo.19219065",
          keywords: [
            "child-driven inquiry", "neurodivergent entrepreneurship", "research instrument design",
            "adolescent fieldwork", "Montessori Erdkinder", "participatory research",
            "student-authored research", "instrument ownership", "selective attention",
            "mutual empathy", "micro research", "embedded observation", "child-as-researcher"
          ],
          encoding: {
            "@type": "MediaObject",
            contentUrl: "https://research.blueblocks.in/publications/flipside-case-study/flipside-case-study.md",
            encodingFormat: "text/markdown"
          },
          sourceOrganization: { "@type": "School", "@id": "https://blueblocks.in/#school" },
          about: [
            { "@type": "Thing", name: "Participatory research", sameAs: "https://en.wikipedia.org/wiki/Participatory_action_research" },
            { "@type": "Thing", name: "Neurodiversity", sameAs: "https://en.wikipedia.org/wiki/Neurodiversity" },
            { "@type": "Thing", name: "Montessori education", sameAs: "https://en.wikipedia.org/wiki/Montessori_education" },
            { "@type": "Thing", name: "Qualitative research", sameAs: "https://en.wikipedia.org/wiki/Qualitative_research" },
            { "@type": "Thing", name: "Child development", sameAs: "https://en.wikipedia.org/wiki/Child_development" }
          ],
          citation: [
            { "@type": "ScholarlyArticle", name: "Practitioner-Led Methodology Framework", identifier: "https://doi.org/10.5281/zenodo.18584816", sameAs: "https://doi.org/10.5281/zenodo.18584816" },
            { "@type": "ScholarlyArticle", name: "Participatory Co-Authorship Framework", identifier: "https://doi.org/10.5281/zenodo.18584890", sameAs: "https://doi.org/10.5281/zenodo.18584890" }
          ],
          spatialCoverage: { "@type": "Place", name: "Hyderabad, Telangana, India" },
          temporalCoverage: "2026-03-12",
          countryOfOrigin: { "@type": "Country", name: "India" }
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://research.blueblocks.in/publications/flipside-case-study/#breadcrumb",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://research.blueblocks.in/" },
            { "@type": "ListItem", position: 2, name: "Publications", item: "https://research.blueblocks.in/publications" },
            { "@type": "ListItem", position: 3, name: "Flipside Case Study", item: "https://research.blueblocks.in/publications/flipside-case-study" }
          ]
        }
      ],
      sections: [
        {
          id: "flipside-hero",
          type: "hero",
          variant: "publication",
          headline: "Children as Field Researchers at a Neurodivergent Workspace",
          subheadline: "When Children Own the Research Instrument: The Flipside Workspace Field Research Case Study from the Blue Blocks Erdkinder Environment",
          image: { src: "/src/assets/banners/publications-doi.jpg", alt: "Flipside Case Study", variant: "hero", privacyBlur: false }
        },
        {
          id: "flipside-meta",
          type: "metaStrip",
          items: [
            { label: "DOI", value: "10.5281/zenodo.19219065", href: "https://doi.org/10.5281/zenodo.19219065", external: true },
            { label: "Type", value: "Qualitative Case Study" },
            { label: "Status", value: "Published (Working Paper — Case 1 of 5)" },
            { label: "Data Collection", value: "12 March 2026" },
            { label: "Affiliation", value: "Blue Blocks Micro Research Institute" },
            { label: "Access", value: "Open Access" }
          ]
        },
        {
          id: "flipside-introduction",
          type: "twoColumn",
          compact: true,
          left: {
            sections: [
              {
                title: "Introduction",
                body: "This record archives a qualitative case study documenting what happened when Erdkinder adolescents from Blue Blocks School in Hyderabad were given complete ownership of a research instrument and deployed it at a real-world professional site. The students designed a 25-question interview, visited Flipside — a cloud kitchen in Banjara Hills operated by neurodivergent adults — and conducted structured interviews alongside a shared cooking session on 12 March 2026. This is the first case in a five-case cross-study series investigating what children ask, produce, and observe when instrument ownership is transferred to the students.\n\nA distinctive feature of this study is the triple evidence stream. The research compares three independent records of the same visit: the students' pre-designed question instrument, the mentor's real-time observation log, and the students' own written report authored after the visit. By comparing what was planned, what happened, and what was remembered, the study surfaces patterns of inquiry behaviour, social adaptation, and selective attention that no single data source could reveal alone.\n\nThe visiting students were not passive observers. They operate their own venture — Terra Utopia, a student-run paper recycling initiative — and arrived at Flipside as fellow entrepreneurs with a genuine stake in understanding how a neurodivergent team had built something sustainable. The Montessori Erdkinder philosophy of student agency, real-world engagement, and entrepreneurial practice shaped both the questions the students designed and the quality of their on-site engagement."
              }
            ]
          },
          right: {
            panels: [
              {
                title: "Repository & Access",
                links: [
                  { label: "View on Zenodo (DOI)", href: "https://doi.org/10.5281/zenodo.19219065", external: true },
                  { label: "Methodology Framework (DOI)", href: "https://doi.org/10.5281/zenodo.18584816", external: true }
                ]
              }
            ]
          }
        },
        {
          id: "flipside-abstract",
          type: "twoColumn",
          compact: true,
          left: {
            sections: [
              {
                title: "Abstract",
                body: "Official Record Summary:\n\nThis case study is the first case of a five-case cross-study series where the Blue Blocks Micro Research Institute investigates what children ask, produce, innovate, and observe when the research instrument ownership is given to the students in varied contexts. A group of Erdkinder adolescents from Blue Blocks School visited the Flipside workspace on 12th March, 2026, which is a cloud kitchen in Hyderabad operated by neurodivergent adults. They equipped themselves with a 25-question self-designed system. The visit included a structured interview session along with a shared cooking session. The evidentiary base is supported by the mentors' notes, a student-authored short report, and a question tracker. The case study provides analytically significant evidence, but it also has some limitations across three hypotheses — that children's self-designed instruments include framings adult researchers omit (H1); that children given instrument ownership deviate spontaneously from their prepared list in ways that indicate active inquiry (H2); and that what children choose to record from a response differs systematically from what was said (H3). One of the most notable and emergent findings includes the mutual empathy for public challenges between the Erdkinders and Flipside adults. This was not anticipated in the hypotheses, but added an important layer to the study. Gaps in the observation record are documented transparently.\n\nAll participants were minors. The study was conducted within the Blue Blocks Micro Research Ethics Framework (MREF v1.0). Participant identities have been fully anonymised, and no linkage file has been created or retained."
              }
            ]
          },
          right: {
            panels: [
              {
                title: "Related Publications",
                links: [
                  { label: "Practitioner-led Methodology Framework", href: "https://doi.org/10.5281/zenodo.18584816", external: true },
                  { label: "Participatory Co-Authorship Framework", href: "https://doi.org/10.5281/zenodo.18584890", external: true },
                  { label: "Publications Index", href: "/publications" }
                ]
              }
            ]
          }
        },
        {
          id: "flipside-key-findings",
          type: "numberedCards",
          header: "Key Findings",
          items: [
            {
              number: "1",
              title: "Questions Adult Researchers Omit",
              body: "Students designed questions that adult researchers routinely omit — particularly around emotional experience in professional settings (\"How do you feel when you bake?\") and interpersonal hierarchy (\"Who is the best chef among you all?\"). Seven of 25 questions fell into emotional and experiential categories rarely present in adult-designed instruments for neurodivergent workplaces."
            },
            {
              number: "2",
              title: "Spontaneous Instrument Deviation",
              body: "Within the first minutes of the interview, students abandoned their sequential question list and began reading the room — skipping questions they judged socially inappropriate, consulting a Flipside founder about which questions to ask, and in one case directly challenging the quality of their own instrument (\"What kind of stupid questions have we framed?\")."
            },
            {
              number: "3",
              title: "Role Repositioning",
              body: "Two spontaneous questions not on the prepared list were asked during the visit — \"How do we place an order?\" and \"Where was the recent visit to?\" — both repositioning the student from researcher to customer or peer, a shift no adult-designed protocol anticipates."
            },
            {
              number: "4",
              title: "Selective Amplification in Reporting",
              body: "The student-authored report written after the visit systematically amplified emotional, motivational, and human content (emotional regulation spaces, barefoot walking as a mental health practice, neurodivergent adults as proof of potential) while dropping every operational and business-mechanical detail that dominated half the prepared questions."
            },
            {
              number: "5",
              title: "Emergent Mutual Empathy",
              body: "An unanticipated moment of mutual empathy occurred when neurodivergent adults observed students struggling with mental mathematics under pressure. The adults responded with empathy and camaraderie, recognising shared difficulty across differences. This moment was not produced by any prepared question and was not in any hypothesis."
            },
            {
              number: "6",
              title: "Transparent Gap Documentation",
              body: "Significant gaps in the observation record — including missing pre-visit baseline predictions, an incomplete cooking-activity grid, and absent student initials — are documented transparently and inform template revisions for Cases 2–5."
            }
          ]
        },
        {
          id: "flipside-methodology",
          type: "twoColumn",
          compact: true,
          left: {
            sections: [
              {
                title: "Methodology",
                body: "The study is a qualitative case study using embedded observation and participatory instrument design as the primary data collection method, consistent with micro-research case study methodology (Blue Blocks Micro Research Institute et al., 2026a). The design is descriptive and exploratory; no experimental manipulation or comparison condition was used. The unit of analysis is the group-level visit event, with individual student data available only partially.\n\nTwelve Erdkinder adolescents visited the Flipside workspace in Banjara Hills, Hyderabad on 12 March 2026. Students had designed a 25-question instrument in advance and divided into sub-groups with distinct roles: an accounts team, an interview team, and a kitchen team. The visit comprised two phases: a structured interview session in which students asked questions of Flipside team members, and a baking activity in which students worked alongside Flipside adults in the kitchen. The mentor-observer was instructed to record observable behaviour only and keep inference strictly post-session, consistent with the Embedded Observer Principle of the Blue Blocks Micro Research framework.\n\nData sources include the student-designed question instrument (25 questions + 2 spontaneous), the mentor's real-time observation log with coded entries (DQ-USE, SELF-REV, EM-Q, ENG-SHIFT, PEER-X), a student-authored report written after the visit, and a question tracker documenting which questions were asked and skipped. The study was governed by the participatory micro-research methodology for scientist-child co-authorship (Blue Blocks Micro Research Institute et al., 2026b)."
              }
            ]
          },
          right: {
            panels: [
              {
                title: "Analytical Framework",
                citation: "Hart (children's participation), Cook-Sather (student voice), Punch (child-centred methodology), Lincoln & Guba (naturalistic inquiry), Lave & Wenger (legitimate peripheral participation) — mapped against three domains: Instrument Quality (H1), Engagement Behaviour (H2), Selective Attention (H3)."
              }
            ]
          }
        },
        {
          id: "flipside-parameters",
          type: "tableBlock",
          header: "Study Parameters",
          headers: ["Parameter", "Detail"],
          rows: [
            ["Participants", "12 Erdkinder adolescents from Blue Blocks (individual data for 9)"],
            ["Site", "Flipside Workspace, Banjara Hills, Hyderabad"],
            ["Data Collection Window", "12 March 2026"],
            ["Visit Structure", "Phase 1: Structured interview · Phase 2: Baking activity"],
            ["Instrument", "25-question student-designed interview + 2 spontaneous questions"],
            ["Data Sources", "Mentor observation log (coded), student-authored report, question tracker"],
            ["Observation Coding", "DQ-USE, SELF-REV, EM-Q, ENG-SHIFT, PEER-X"],
            ["Hypotheses Tested", "H1 (Instrument Quality), H2 (Engagement Behaviour), H3 (Selective Attention)"],
            ["Emergent Finding", "Mutual empathy between students and neurodivergent adults"],
            ["Series Position", "Case 1 of 5 — Five-Case Cross-Study"],
            ["Analytical Framework", "Hart, Cook-Sather, Punch, Lincoln & Guba, Lave & Wenger"],
            ["Anonymisation", "Full anonymisation; no linkage file created or retained"],
            ["Ethics Framework", "Blue Blocks MREF v1.0"],
            ["Data Completeness", "Partial — pre-visit baseline and cooking-activity grid not completed"]
          ]
        },
        {
          id: "flipside-discussion",
          type: "twoColumn",
          compact: true,
          left: {
            sections: [
              {
                title: "Discussion",
                body: "The study contributes to a significant gap in participatory research with children. While the field has long advocated for children's voices in research (Hart, 1992; Cook-Sather, 2006), few studies have operationalised child instrument ownership in a real-world professional setting and then tracked what happens across the full cycle of design, deployment, and reporting. Most participatory studies give children a consultative role. This study gave adolescents authorship of the research tool itself — and then documented what they did with that authorship in a live, unscripted encounter.\n\nThe study setting is significant because the students arrived with genuine prior motivation — as fellow entrepreneurs running Terra Utopia — rather than as assigned participants in an adult-designed exercise. The Flipside visit was a context where the children's existing identity made their questions authentic rather than performative. The Montessori Erdkinder philosophy of student agency and real-world engagement provided the developmental environment in which instrument ownership could function as a genuine research act, not a classroom exercise.\n\nThe strongest finding is for H3: students' post-visit reports are not neutral transcriptions of what happened. They are acts of interpretation that reveal the researcher's prior framework — in this case, a consistent lens prioritising human narrative over operational detail. The emergent mutual empathy finding raises a further question for the five-case series: whether such moments of cross-community recognition can be understood systematically, or whether they are irreducibly situational. Limitations including incomplete template sections, absent pre-visit baselines, and single-recorder data compression are documented transparently and inform design revisions for Cases 2–5."
              }
            ]
          },
          right: {
            panels: [
              {
                title: "Cross-References",
                links: [
                  { label: "Methodology", href: "/methodology" },
                  { label: "Governance", href: "/governance" },
                  { label: "Ethics & Privacy", href: "/governance/ethics" },
                  { label: "Publications Index", href: "/publications" }
                ]
              }
            ]
          }
        },
        {
          id: "flipside-supplementary",
          type: "twoColumn",
          compact: true,
          left: {
            sections: [
              {
                title: "Supplementary Materials",
                body: "Data & Ethics:\n\nThe observation template, student-authored report, and question tracker are retained in secure storage at Blue Blocks Micro Research Institute, Hyderabad. Anonymised data is available to qualified researchers upon reasonable request, subject to an appropriate data-sharing agreement. No personal identification markers appear anywhere in the publication. All participants were minors; the study was conducted within the Blue Blocks Micro Research Ethics Framework (MREF v1.0). The voluntary nature of participation is documented in the paper's ethics note."
              },
              {
                title: "Author Information",
                body: "",
                bullets: [
                  "Sreemoyee Chakraborty — STEM Research Lead (ORCID: 0000-0001-5180-156X)",
                  "Poulomi Bose — Embedded Research Fellow (ORCID: 0009-0007-6156-2161)",
                  "Kriti Khare — Embedded Research Fellow (ORCID: 0009-0004-3106-8873)"
                ]
              },
              {
                title: "Related Publications",
                body: "",
                bullets: [
                  "DOI — Flipside Case Study: https://doi.org/10.5281/zenodo.19219065",
                  "DOI — Methodology Framework: https://doi.org/10.5281/zenodo.18584816",
                  "DOI — Co-Authorship Framework: https://doi.org/10.5281/zenodo.18584890"
                ]
              },
              {
                title: "Media Coverage",
                body: "This section will be updated as coverage is published."
              }
            ]
          },
          right: {
            panels: [
              {
                title: "How to Cite (APA)",
                citation: "Chakraborty, S., Bose, P., & Khare, K. (2026). When Children Own the Research Instrument: The Flipside Workspace Field Research Case Study from the Blue Blocks Erdkinder Environment. Blue Blocks Micro Research Institute. https://research.blueblocks.in/publications/flipside-case-study"
              }
            ]
          }
        },
        {
          id: "flipside-zenodo-cta",
          type: "highlightBox",
          header: "Read the Full Paper on Zenodo",
          body: "The complete paper is available as an open-access record on Zenodo.",
          cta: { label: "Read the Full Paper on Zenodo", href: "https://doi.org/10.5281/zenodo.19219065", external: true }
        },
        {
          id: "flipside-archival-note",
          type: "textBlock",
          variant: "muted",
          body: "This record is maintained as part of the Blue Blocks Micro Research Institute open archival framework to support governance transparency, citation permanence, and research continuity."
        },
        {
          id: "flipside-related",
          type: "relatedCards",
          header: "Related Registry",
          cards: [
            { title: "Methodology", description: "Research framework.", icon: "publication", href: "/methodology" },
            { title: "Governance", description: "Institutional oversight.", icon: "book", href: "/governance" },
            { title: "Publications", description: "Research docket.", icon: "publication", href: "/publications" },
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
        robots: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
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
          body: "To maintain methodological consistency across our 17-year longitudinal research program, all affiliated publications and datasets must cite the Institute's foundational methodology and dataset specifications."
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
                citation: "Consistent citation builds an interconnected evidence base. Proper attribution ensures every contribution maps accurately to the Blue Blocks research legacy and supports longitudinal traceability across the 17-year dataset."
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
        robots: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
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
      stickyCta: { label: "View on Zenodo", href: "https://doi.org/10.5281/zenodo.18610003", type: "link" },
      sections: [
        {
          id: "patent-zenodo", type: "metaStrip",
          items: [
            { label: "Archival Repository", value: "Zenodo (CERN)" },
            { label: "DOI", value: "10.5281/zenodo.18610003", href: "https://doi.org/10.5281/zenodo.18610003", external: true },
            { label: "Status", value: "Active" },
            { label: "Access", value: "Open Access" },
            { label: "License", value: "CC BY 4.0" }
          ]
        },
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
            { title: "Zenodo Record", links: [
              { label: "View on Zenodo", href: "https://doi.org/10.5281/zenodo.18610003", external: true }
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
          id: "patent-siblings", type: "relatedCards", header: "Other Patents in This Registry",
          cards: [
            { title: "Borehole Rescue System", icon: "patent", href: "/patents/borehole-rescue-system" },
            { title: "Contactless Delivery System", icon: "patent", href: "/patents/contactless-delivery-system" },
            { title: "Autonomous Medical Assistance System", icon: "patent", href: "/patents/autonomous-medical-assistance-system" },
            { title: "Autonomous Health Monitoring System", icon: "patent", href: "/patents/autonomous-health-monitoring-system" }
          ]
        },
        {
          id: "patent-related", type: "relatedCards", header: "Related Registry",
          cards: [
            { title: "View on Zenodo", description: "Archival DOI record.", icon: "archive", href: "https://doi.org/10.5281/zenodo.18610003", external: true },
            { title: "Publications", description: "Research docket.", icon: "publication", href: "/publications" },
            { title: "Methodology", description: "Lab-to-Launch framework.", icon: "publication", href: "/methodology" },
            { title: "Governance", description: "Institutional oversight.", icon: "book", href: "/governance" }
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
        robots: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
      },
      schemas: [
        { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://siddheshv1.lovable.app/" },
          { "@type": "ListItem", position: 2, name: "Patents", item: "https://siddheshv1.lovable.app/patents" },
          { "@type": "ListItem", position: 3, name: "Borehole Rescue System", item: "https://siddheshv1.lovable.app/patents/borehole-rescue-system" }
        ]}
      ],
      stickyCta: { label: "View on Zenodo", href: "https://doi.org/10.5281/zenodo.18610200", type: "external" },
      sections: [
        {
          id: "patent-hero", type: "hero", variant: "publication",
          headline: "Patent Portfolio : Borehole Rescue System (BRS)",
          subheadline: "Patent Pending · Application No. 202041027026 · Robotics / Subterranean Rescue Systems",
          image: { src: "/src/assets/placeholders/labs/avionics.jpg", alt: "Borehole Rescue System", variant: "hero" }
        },
        {
          id: "patent-zenodo", type: "metaStrip",
          items: [
            { label: "Archival Repository", value: "Zenodo (CERN)" },
            { label: "DOI", value: "10.5281/zenodo.18610200", href: "https://doi.org/10.5281/zenodo.18610200", external: true },
            { label: "Status", value: "Active" },
            { label: "Access", value: "Open Access" },
            { label: "License", value: "CC BY 4.0" }
          ]
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
            { title: "Zenodo Record", links: [
              { label: "View on Zenodo", href: "https://doi.org/10.5281/zenodo.18610200", external: true }
            ]},
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
          id: "patent-siblings", type: "relatedCards", header: "Other Patents in This Registry",
          cards: [
            { title: "Automated Security UAV", icon: "patent", href: "/patents/automated-security-uav" },
            { title: "Contactless Delivery System", icon: "patent", href: "/patents/contactless-delivery-system" },
            { title: "Autonomous Medical Assistance System", icon: "patent", href: "/patents/autonomous-medical-assistance-system" },
            { title: "Autonomous Health Monitoring System", icon: "patent", href: "/patents/autonomous-health-monitoring-system" }
          ]
        },
        {
          id: "patent-related", type: "relatedCards", header: "Related Registry",
          cards: [
            { title: "View on Zenodo", description: "Archival DOI record.", icon: "archive", href: "https://doi.org/10.5281/zenodo.18610200", external: true },
            { title: "Publications", description: "Research docket.", icon: "publication", href: "/publications" },
            { title: "Methodology", description: "Lab-to-Launch framework.", icon: "publication", href: "/methodology" },
            { title: "Governance", description: "Institutional oversight.", icon: "book", href: "/governance" }
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
        robots: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
      },
      schemas: [
        { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://siddheshv1.lovable.app/" },
          { "@type": "ListItem", position: 2, name: "Patents", item: "https://siddheshv1.lovable.app/patents" },
          { "@type": "ListItem", position: 3, name: "Contactless Delivery System", item: "https://siddheshv1.lovable.app/patents/contactless-delivery-system" }
        ]}
      ],
      stickyCta: { label: "View on Zenodo", href: "https://doi.org/10.5281/zenodo.18610450", type: "external" },
      sections: [
        {
          id: "patent-zenodo", type: "metaStrip",
          items: [
            { label: "Archival Repository", value: "Zenodo (CERN)" },
            { label: "DOI", value: "10.5281/zenodo.18610450", href: "https://doi.org/10.5281/zenodo.18610450", external: true },
            { label: "Status", value: "Active" },
            { label: "Access", value: "Open Access" },
            { label: "License", value: "CC BY 4.0" }
          ]
        },
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
            { title: "Zenodo Record", links: [
              { label: "View on Zenodo", href: "https://doi.org/10.5281/zenodo.18610450", external: true }
            ]},
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
          id: "patent-siblings", type: "relatedCards", header: "Other Patents in This Registry",
          cards: [
            { title: "Automated Security UAV", icon: "patent", href: "/patents/automated-security-uav" },
            { title: "Borehole Rescue System", icon: "patent", href: "/patents/borehole-rescue-system" },
            { title: "Autonomous Medical Assistance System", icon: "patent", href: "/patents/autonomous-medical-assistance-system" },
            { title: "Autonomous Health Monitoring System", icon: "patent", href: "/patents/autonomous-health-monitoring-system" }
          ]
        },
        {
          id: "patent-related", type: "relatedCards", header: "Related Registry",
          cards: [
            { title: "View on Zenodo", description: "Archival DOI record.", icon: "archive", href: "https://doi.org/10.5281/zenodo.18610450", external: true },
            { title: "Publications", description: "Research docket.", icon: "publication", href: "/publications" },
            { title: "Methodology", description: "Lab-to-Launch framework.", icon: "publication", href: "/methodology" },
            { title: "Governance", description: "Institutional oversight.", icon: "book", href: "/governance" }
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
        robots: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
      },
      schemas: [
        { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://siddheshv1.lovable.app/" },
          { "@type": "ListItem", position: 2, name: "Patents", item: "https://siddheshv1.lovable.app/patents" },
          { "@type": "ListItem", position: 3, name: "Autonomous Medical Assistance System", item: "https://siddheshv1.lovable.app/patents/autonomous-medical-assistance-system" }
        ]}
      ],
      stickyCta: { label: "View on Zenodo", href: "https://doi.org/10.5281/zenodo.18610847", type: "external" },
      sections: [
        {
          id: "patent-zenodo", type: "metaStrip",
          items: [
            { label: "Archival Repository", value: "Zenodo (CERN)" },
            { label: "DOI", value: "10.5281/zenodo.18610847", href: "https://doi.org/10.5281/zenodo.18610847", external: true },
            { label: "Status", value: "Active" },
            { label: "Access", value: "Open Access" },
            { label: "License", value: "CC BY 4.0" }
          ]
        },
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
            { title: "Zenodo Record", links: [
              { label: "View on Zenodo", href: "https://doi.org/10.5281/zenodo.18610847", external: true }
            ]},
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
          id: "patent-siblings", type: "relatedCards", header: "Other Patents in This Registry",
          cards: [
            { title: "Automated Security UAV", icon: "patent", href: "/patents/automated-security-uav" },
            { title: "Borehole Rescue System", icon: "patent", href: "/patents/borehole-rescue-system" },
            { title: "Contactless Delivery System", icon: "patent", href: "/patents/contactless-delivery-system" },
            { title: "Autonomous Health Monitoring System", icon: "patent", href: "/patents/autonomous-health-monitoring-system" }
          ]
        },
        {
          id: "patent-related", type: "relatedCards", header: "Related Registry",
          cards: [
            { title: "View on Zenodo", description: "Archival DOI record.", icon: "archive", href: "https://doi.org/10.5281/zenodo.18610847", external: true },
            { title: "Publications", description: "Research docket.", icon: "publication", href: "/publications" },
            { title: "Methodology", description: "Lab-to-Launch framework.", icon: "publication", href: "/methodology" },
            { title: "Governance", description: "Institutional oversight.", icon: "book", href: "/governance" }
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
        robots: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
      },
      schemas: [
        { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://siddheshv1.lovable.app/" },
          { "@type": "ListItem", position: 2, name: "Patents", item: "https://siddheshv1.lovable.app/patents" },
          { "@type": "ListItem", position: 3, name: "Autonomous Health Monitoring System", item: "https://siddheshv1.lovable.app/patents/autonomous-health-monitoring-system" }
        ]}
      ],
      stickyCta: { label: "View on Zenodo", href: "https://doi.org/10.5281/zenodo.18628995", type: "external" },
      sections: [
        {
          id: "patent-zenodo", type: "metaStrip",
          items: [
            { label: "Archival Repository", value: "Zenodo (CERN)" },
            { label: "DOI", value: "10.5281/zenodo.18628995", href: "https://doi.org/10.5281/zenodo.18628995", external: true },
            { label: "Status", value: "Active" },
            { label: "Access", value: "Open Access" },
            { label: "License", value: "CC BY 4.0" }
          ]
        },
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
            { title: "Zenodo Record", links: [
              { label: "View on Zenodo", href: "https://doi.org/10.5281/zenodo.18628995", external: true }
            ]},
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
          id: "patent-siblings", type: "relatedCards", header: "Other Patents in This Registry",
          cards: [
            { title: "Automated Security UAV", icon: "patent", href: "/patents/automated-security-uav" },
            { title: "Borehole Rescue System", icon: "patent", href: "/patents/borehole-rescue-system" },
            { title: "Contactless Delivery System", icon: "patent", href: "/patents/contactless-delivery-system" },
            { title: "Autonomous Medical Assistance System", icon: "patent", href: "/patents/autonomous-medical-assistance-system" }
          ]
        },
        {
          id: "patent-related", type: "relatedCards", header: "Related Registry",
          cards: [
            { title: "View on Zenodo", description: "Archival DOI record.", icon: "archive", href: "https://doi.org/10.5281/zenodo.18628995", external: true },
            { title: "Publications", description: "Research docket.", icon: "publication", href: "/publications" },
            { title: "Methodology", description: "Lab-to-Launch framework.", icon: "publication", href: "/methodology" },
            { title: "Governance", description: "Institutional oversight.", icon: "book", href: "/governance" }
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
        robots: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
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
          subheadline: "A comprehensive guide for families and educators on building structured learning environments that foster innovation capacity from early childhood through adolescence. Drawing on 17 years of longitudinal observation at Blue Blocks Micro Research Institute.",
          primaryCta: { label: "Buy on Amazon", href: "https://amzn.in/d/09xLf6FE", external: true },
          secondaryCta: { label: "Download Sample Chapters", href: "#book-sample" },
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
          type: "highlightBox",
          variant: "dark",
          header: "Overview",
          body: "Lining The Nest examines how structured environments support developmental responsibility over time. It emphasizes observation-led decision making, gradual autonomy, and continuity between home, school, and research environments.\n\nThe title references the metaphor of preparation: just as birds line their nests before eggs arrive, adults must prepare the environment before expecting children to innovate. The book argues that innovation capacity is not innate talent but an emergent property of well-structured environments."
        },
        {
          id: "book-themes",
          type: "numberedCards",
          header: "Five Core Themes",
          items: [
            {
              number: "01",
              title: "Environment as Behavioral Scaffold",
              body: "How structured spaces shape behavior before instruction begins. The physical and social environment is the first teacher — design it deliberately."
            },
            {
              number: "02",
              title: "Structured Independence",
              body: "Balancing freedom with clear boundaries to foster self-direction. Children learn to govern themselves when the structure is consistent and transparent."
            },
            {
              number: "03",
              title: "Responsibility Transfer",
              body: "Moving ownership of decisions from adults to children over time. A gradual, documented shift — not abandonment, but planned handover."
            },
            {
              number: "04",
              title: "Observation-Led Pedagogy",
              body: "Using systematic observation rather than testing to guide development. The adult watches, records, and adjusts — never assumes."
            },
            {
              number: "05",
              title: "Long-Horizon Developmental Culture",
              body: "Building habits and capacities measured in years, not semesters. The compound effect of daily structure produces innovation capacity."
            }
          ]
        },
        {
          id: "book-content",
          type: "list",
          header: "Key Topics Covered",
          items: [
            { title: "Creating the prepared environment at home" },
            { title: "Scaffolding problem-solving without interference" },
            { title: "From play to invention: recognizing cognitive leaps" },
            { title: "Supporting adolescent agency and IP creation" },
            { title: "Integrating real-world constraints into learning" },
            { title: "The role of failure in building resilience" },
            { title: "Balancing structure and freedom" }
          ],
          cta: { label: "View Author Profile", href: "/team/pavan-goyal" }
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
          header: "Sample Chapters",
          intro: "Download free sample chapters to preview the book's approach, structure, and depth before purchasing.",
          items: [
            {
              title: "Chapter 1",
              icon: "download",
              body: "The opening chapter that sets the foundation for building structured learning environments.",
              cta: { label: "Download PDF", href: "/downloads/lining-the-nest-chapter-1.pdf" }
            },
            {
              title: "Chapter 2",
              icon: "download",
              body: "Explores the core principles of environment design and early childhood development.",
              cta: { label: "Download PDF", href: "/downloads/lining-the-nest-chapter-2.pdf" }
            },
            {
              title: "Chapter 7: Independence",
              icon: "download",
              body: "A deep dive into fostering independence and self-directed learning within structured environments.",
              cta: { label: "Download PDF", href: "/downloads/lining-the-nest-chapter-7.pdf" }
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
        robots: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
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
            { label: "Focus", value: "Longitudinal Panel Integrity" },
            { label: "Tenure", value: "17+ years" }
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
            { type: "linkedin", href: "https://www.linkedin.com/in/pavangoel?utm_source=share_via&utm_content=profile&utm_medium=member_ios", label: "LinkedIn" },
            { type: "orcid", href: "https://orcid.org/0009-0009-8840-8505", label: "ORCID" },
            { type: "website", href: "https://blueblocks.in", label: "Website" }
          ],
          bio: "Oversees the longitudinal integrity of the 0-18 study. Holds rare complete AMI certification across all developmental planes (AMI Diploma 0-18). 15+ years of embedded observation experience."
        },
        {
          id: "profile-content",
          type: "textBlock",
          header: "Biography",
          body: "Pavan Goyal is the Principal Investigator and Founder of Blue Blocks Micro Research Institute. He oversees the longitudinal integrity of the 0-18 panel and holds the rare distinction of complete AMI certification across all developmental planes.\n\nWith over 17 years of embedded observation experience, Pavan has pioneered the Micro Research methodology that enables continuous, high-frequency data capture without disrupting the educational environment. His work bridges the gap between traditional academic research and the living laboratory of the Montessori environment.\n\nPavan is the author of 'Lining The Nest' and has presented the Institute's findings at international forums including the IMF Annual Meetings and the Nobel Peace Center."
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
        robots: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
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
            { type: "linkedin", href: "https://www.linkedin.com/in/munira-hussain-b515bb14?utm_source=share_via&utm_content=profile&utm_medium=member_ios", label: "LinkedIn" },
            { type: "orcid", href: "https://orcid.org/0009-0003-5904-6206", label: "ORCID" }
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

    // ==================== GOVERNANCE TEAM PROFILE PAGES ====================
    "/governance/team/vinay-shyam-donakanti": {
      title: "Vinay Shyam Donakanti",
      metaDescription: "Research Data Analyst Intern — Educational Data Analysis, Machine Learning, and Data Pipeline Development.",
      seo: {
        title: "Vinay Shyam Donakanti | Governance Team | Blue Blocks Micro Research Institute",
        canonical: `${SITE_URL}/governance/team/vinay-shyam-donakanti`,
        robots: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
        openGraph: {
          type: "profile",
          url: `${SITE_URL}/governance/team/vinay-shyam-donakanti`,
          title: "Vinay Shyam Donakanti - Research Data Analyst Intern",
          description: "Research Data Analyst Intern — Educational Data Analysis, Machine Learning, and Data Pipeline Development.",
          image: `${SITE_URL}/src/assets/placeholders/avatars/vinay-donakanti.webp`
        },
        twitter: {
          card: "summary_large_image",
          title: "Vinay Shyam Donakanti - Research Data Analyst Intern",
          description: "Research Data Analyst Intern — Educational Data Analysis, Machine Learning, and Data Pipeline Development.",
          image: `${SITE_URL}/src/assets/placeholders/avatars/vinay-donakanti.webp`
        }
      },
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Vinay Shyam Donakanti",
          url: `${SITE_URL}/governance/team/vinay-shyam-donakanti`,
          jobTitle: "Research Data Analyst Intern",
          worksFor: { "@type": "Organization", name: "Blue Blocks Micro Research Institute" }
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: "Governance", item: `${SITE_URL}/governance` },
            { "@type": "ListItem", position: 3, name: "Team", item: `${SITE_URL}/team` },
            { "@type": "ListItem", position: 4, name: "Vinay Shyam Donakanti", item: `${SITE_URL}/governance/team/vinay-shyam-donakanti` }
          ]
        }
      ],
      sections: [
        {
          id: "profile-hero",
          type: "hero",
          variant: "stark",
          headline: "Vinay Shyam Donakanti",
          subheadline: "Research Data Analyst Intern. Educational Data Analysis, Machine Learning, and Data Pipeline Development.",
          primaryCta: { label: "Contact", href: "mailto:research@blueblocks.in" },
          secondaryCta: { label: "Back to Team", href: "/team" },
          image: { src: "/src/assets/placeholders/avatars/vinay-donakanti.webp", alt: "Vinay Shyam Donakanti", variant: "hero" }
        },
        {
          id: "profile-meta",
          type: "metaStrip",
          items: [
            { label: "Role", value: "Research Data Analyst Intern" },
            { label: "Training", value: "B.Tech CS & Data Science" },
            { label: "Focus", value: "Educational Data Analysis" },
            { label: "Skills", value: "Python, ML, Data Pipelines" }
          ]
        },
        {
          id: "profile-card",
          type: "profile",
          name: "Vinay Shyam Donakanti",
          role: "Research Data Analyst Intern",
          image: { src: "/src/assets/placeholders/avatars/vinay-donakanti.webp", alt: "Vinay Shyam Donakanti", variant: "avatar" },
          email: "research@blueblocks.in",
          socials: [
            { type: "linkedin", href: "https://www.linkedin.com/in/vinay-shyam-donakanti-1b7724379/", label: "LinkedIn" }
          ],
          bio: "Builds the data infrastructure that makes child-centered research possible. Transforms raw classroom observations into research-ready datasets — digitizing, cleaning, and structuring Montessori observation records so that patterns in children's learning can be seen, tested, and understood."
        },
        {
          id: "profile-pullquote",
          type: "textBlock",
          header: "",
          body: "> \"Children generate data that tells stories we're only beginning to learn how to read. The future of education lies in learning their language rather than forcing them to speak ours.\""
        },
        {
          id: "profile-content",
          type: "textBlock",
          header: "Researcher Profile",
          body: "Vinay Shyam Donakanti builds the data infrastructure that makes child-centered research possible. As Research Data Analyst at Blue Blocks, he transforms raw classroom observations into research-ready datasets — digitizing, cleaning, and structuring Montessori observation records so that patterns in children's learning can be seen, tested, and understood.\n\nThe work changed how he thinks about data. \"Every time I code a child's activity,\" he observes, \"I'm flattening a rich, multidimensional moment into a single category. The question that haunts me is: what are we missing?\" He's become obsessed with the gap between what we measure and what actually matters — what he calls the difference between \"legible\" and \"illegible\" systems.\n\n> \"How much of a child's learning happens in the spaces between our data points?\""
        },
        {
          id: "profile-lens",
          type: "textBlock",
          header: "The Researcher's Lens: The Child as Scientist",
          body: "While processing classroom video data, he noticed something the original observer had missed. A child spent fifteen minutes repeatedly dropping objects from different heights. The field notes read \"exploratory play.\" But watching the footage, Vinay saw something more systematic: the child was varying one parameter (height) while keeping others constant (object, surface), observing outcomes, forming hypotheses.\n\n\"They were conducting experiments,\" he realized. \"Not because someone taught them the scientific method — but because that's what curiosity looks like when you let it run. Children are natural researchers not because they follow our methods, but because they embody the core of research: systematic curiosity, hypothesis testing, iteration. Our job isn't to teach them to be researchers. It's to not interfere with the researchers they already are.\""
        },
        {
          id: "profile-origin",
          type: "textBlock",
          header: "The Origin of Inquiry",
          body: "The insight came during his first year of engineering, stuck on an algorithm problem. After hours of frustration, he took a walk and found himself watching children in a nearby park.\n\n\"They were solving complex coordination problems — who goes first, how to share limited resources, how to modify rules when they didn't work. They were debugging their play in real-time, iterating on solutions, learning from failures without the paralysis of perfectionism that had kept me stuck.\"\n\nThat moment reframed everything. Learning, he realized, happens naturally when we create the right environment for inquiry. The children weren't following a curriculum. They were doing what humans do when not constrained by formal structures: experimenting, failing, adjusting, trying again."
        },
        {
          id: "profile-truth",
          type: "textBlock",
          header: "The Uncomfortable Truth",
          body: "\"Most of what we call 'learning difficulties' are actually data interpretation problems — we're measuring the wrong things, or measuring the right things in the wrong ways.\"\n\nA child who struggles with traditional math tests might be brilliant at spatial reasoning or pattern recognition, but our measurement systems are too crude to capture it. The problem isn't the child — it's our metrics. If we spent half the energy we put into standardizing assessments into developing richer, multi-dimensional measurement tools, we'd discover that far more children are \"gifted\" than we currently recognize — just not in the ways our systems are designed to see."
        },
        {
          id: "profile-obsession",
          type: "textBlock",
          header: "Current Obsession: Legible vs. Illegible Systems",
          body: "His intellectual focus is the tension between measurement and meaning. Every dataset requires simplification — but what gets lost in the translation from lived experience to coded category?\n\n\"I'm obsessed with finding ways to preserve the richness while still enabling analysis,\" he explains. \"Maybe through multi-dimensional tagging systems, narrative annotations alongside structured data, or visualization methods that show uncertainty and context. The goal is to build tools that are honest about what they don't capture — not just efficient at capturing what they do.\""
        },
        {
          id: "profile-mystery",
          type: "textBlock",
          header: "The Vital Mystery",
          body: "If given unlimited resources, he would investigate how children develop their internal models of how the world works — and how those models evolve through experience.\n\n\"We have massive datasets on what children learn — test scores, milestones — but remarkably little on how they learn. The actual cognitive processes. The moment-by-moment sense-making. The theories they construct and revise. I'd want to track not just outcomes but the learning process itself, using observational data, think-aloud protocols, maybe even neuroscience. The goal would be to understand learning as it actually happens — not just as we've designed our systems to measure it.\""
        },
        {
          id: "profile-at-bb",
          type: "textBlock",
          header: "At Blue Blocks",
          body: "He builds the data pipelines that transform classroom observations into research-ready datasets — digitizing records, mapping activities to standardized learning categories, ensuring consistency and reproducibility across the institute's growing archive of child observation data.\n\nBut his ambition extends beyond infrastructure. \"Most educational research happens in universities, far from classrooms, with data that's months or years old. Blue Blocks represents something rare: embedded research where children and researchers learn from each other in real-time. I want to build tools that practitioners can actually use — not just academic papers, but dashboards, visualizations, insights that help educators understand and support children better.\""
        },
        {
          id: "profile-training",
          type: "textBlock",
          header: "Training & Technical Skills",
          body: "• B.Tech in Computer Science & Data Science — Institute of Aeronautical Engineering, Hyderabad (2022-2026)\n• Data Science Certification — Corizo Pvt Ltd / Wipro (2025)\n• Data Analytics Certification — Deloitte Australia / Forage (2025)\n• Technical: Python, pandas, machine learning, data pipeline development, full-stack development\n• Current Project: Educational data analysis and standardized coding schemas for Montessori observation data"
        },
        {
          id: "profile-related",
          type: "relatedCards",
          header: "Related",
          cards: [
            { title: "All Team", description: "View profiles.", icon: "team", href: "/team" },
            { title: "Governance", description: "Leadership structure.", icon: "governance", href: "/governance" },
            { title: "Research Team", description: "Research colleagues.", icon: "users", href: "/governance#gov-research-team" }
          ]
        }
      ]
    },

    "/governance/team/sreedhar-reddy-boddu": {
      title: "Sreedhar Reddy Boddu",
      metaDescription: "Research & Data Analyst — Data Visualization, ETL Pipelines, Predictive Modeling, KPI Tracking.",
      seo: {
        title: "Sreedhar Reddy Boddu | Governance Team | Blue Blocks Micro Research Institute",
        canonical: `${SITE_URL}/governance/team/sreedhar-reddy-boddu`,
        robots: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
        openGraph: {
          type: "profile",
          url: `${SITE_URL}/governance/team/sreedhar-reddy-boddu`,
          title: "Sreedhar Reddy Boddu - Research & Data Analyst",
          description: "Research & Data Analyst — Data Visualization, ETL Pipelines, Predictive Modeling, KPI Tracking."
        }
      },
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Sreedhar Reddy Boddu",
          url: `${SITE_URL}/governance/team/sreedhar-reddy-boddu`,
          jobTitle: "Research & Data Analyst",
          worksFor: { "@type": "Organization", name: "Blue Blocks Micro Research Institute" }
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: "Governance", item: `${SITE_URL}/governance` },
            { "@type": "ListItem", position: 3, name: "Sreedhar Reddy Boddu", item: `${SITE_URL}/governance/team/sreedhar-reddy-boddu` }
          ]
        }
      ],
      sections: [
        {
          id: "profile-hero",
          type: "hero",
          variant: "stark",
          headline: "Sreedhar Reddy Boddu",
          subheadline: "Research & Data Analyst. Data Visualization, ETL Pipelines, Predictive Modeling, KPI Tracking.",
          primaryCta: { label: "Contact", href: "mailto:research@blueblocks.in" },
          secondaryCta: { label: "Back to Team", href: "/team" },
          image: { src: "/src/assets/placeholders/avatars/sreedhar-boddu.webp", alt: "Sreedhar Reddy Boddu", variant: "hero" }
        },
        {
          id: "profile-meta",
          type: "metaStrip",
          items: [
            { label: "Role", value: "Research & Data Analyst" },
            { label: "Training", value: "B.Tech Civil Eng. (NIT Goa)" },
            { label: "Focus", value: "Data Visualization & ETL" },
            { label: "Skills", value: "SQL, Python, Power BI" }
          ]
        },
        {
          id: "profile-card",
          type: "profile",
          name: "Sreedhar Reddy Boddu",
          role: "Research & Data Analyst",
          image: { src: "/src/assets/placeholders/avatars/sreedhar-boddu.webp", alt: "Sreedhar Reddy Boddu", variant: "avatar" },
          email: "research@blueblocks.in",
          socials: [],
          bio: "Learned to read structures before he learned to read data. Trained as a civil engineer at NIT Goa, he brings both the engineer's eye for foundational logic and the political analyst's instinct for finding meaning in messy, real-world datasets."
        },
        {
          id: "profile-pullquote",
          type: "textBlock",
          header: "",
          body: "> \"Children are the ultimate data-gatherers, constantly testing variables in their environment to build their own internal models of the world.\""
        },
        {
          id: "profile-content",
          type: "textBlock",
          header: "Researcher Profile",
          body: "Sreedhar Reddy Boddu learned to read structures before he learned to read data. Trained as a civil engineer at NIT Goa, he spent years understanding how buildings distribute stress — how tension and compression work together to hold a structure in equilibrium. That instinct followed him into an unexpected second career: political analysis, where he spent a year at Showtime Consulting decoding voter behavior, demographic patterns, and the hidden \"human story\" behind campaign data.\n\nNow he brings both lenses to Blue Blocks: the engineer's eye for foundational logic, and the political analyst's instinct for finding meaning in messy, real-world datasets. \"I don't just see numbers,\" he explains. \"I see the underlying stresses and supports within a system. Whether it's a building or a dataset, I'm driven to map the logic that holds everything together.\"\n\n> \"How do you know that the data is telling the truth?\"\n> — A question asked during a project walkthrough that reshaped his approach to data integrity"
        },
        {
          id: "profile-lens",
          type: "textBlock",
          header: "The Researcher's Lens: The Child as Researcher",
          body: "During his observations at Blue Blocks, he noticed something that surprised him: profound self-discipline in children who had not been taught to be disciplined. They chose their own work. They returned materials to designated places without prompting. They laid out floor mats to define their workspace, maintaining boundaries they had set for themselves.\n\n\"This level of focus and agency proves that children are not just passive learners,\" he observes. \"They're disciplined researchers. Their self-directed exploration makes them ideal partners for deep inquiry — not just subjects to study, but collaborators in the research itself.\""
        },
        {
          id: "profile-origin",
          type: "textBlock",
          header: "The Origin of Inquiry: Stresses and Supports",
          body: "His engineering background taught him that the strength of a structure isn't just in the concrete — it's in the calculated management of tension and equilibrium. Every beam, every joint, every load-bearing wall exists in relationship to every other element. Remove one, and the system fails.\n\nHe carries this perspective into data science. A dataset isn't just rows and columns — it's a system under stress. Some variables carry weight; others provide support. Some connections are load-bearing; others are decorative. His job is to map the foundational logic: to see which elements are essential and which are noise.\n\n\"Whether it's a building or a dataset,\" he says, \"I'm looking for the same thing: what's actually holding this together?\""
        },
        {
          id: "profile-truth",
          type: "textBlock",
          header: "The Uncomfortable Truth",
          body: "\"Efficiency is not always the goal of learning.\"\n\nIn data analysis, we seek the shortest path to an insight. But in learning, the \"noise\" and the \"outliers\" — the mistakes and tangents — are often where the most valuable data is hidden. A child who takes the long way around a problem isn't inefficient. They're gathering data points that the direct route would have missed."
        },
        {
          id: "profile-obsession",
          type: "textBlock",
          header: "Current Obsession: Early Signals",
          body: "His intellectual focus is trend forecasting and predictive modeling — specifically, how small variations in early data points can signal major shifts in future outcomes. He's interested in the leading indicators that most analysts miss because they're looking at the wrong scale.\n\n\"In political analysis, I learned that the first signs of a shift don't appear in the headline numbers,\" he explains. \"They appear in the outliers, the anomalies, the data points that don't fit the pattern. The same is true in child development. The children who don't fit our models aren't failures of the model — they're signals we haven't learned to read yet.\""
        },
        {
          id: "profile-mystery",
          type: "textBlock",
          header: "The Vital Mystery",
          body: "If given unlimited resources, he would investigate the correlation between early childhood \"inquiry-based play\" patterns and long-term analytical problem-solving skills in adulthood.\n\n\"We often fail to ask,\" he observes, \"how much 'unstructured' time is required to develop a structured mind. We measure outcomes obsessively — test scores, milestones, competencies. But we rarely ask whether the child who spent hours in unstructured exploration develops differently than the child whose time was optimized for efficiency. My hypothesis is that the 'inefficient' path produces minds that can see what the efficient path trains us to miss.\""
        },
        {
          id: "profile-at-bb",
          type: "textBlock",
          header: "At Blue Blocks",
          body: "He transforms messy classroom observations into clear, interactive dashboards — translating children's complex, non-linear behavior into structured insights that educators and researchers can act on. His technical toolkit includes SQL, Python, Power BI, and ETL pipeline development.\n\nBut his ambition extends beyond visualization. \"Children's observations are inherently non-linear,\" he says. \"They don't follow our categories. My job is to build tools that respect that complexity — that make the data legible without flattening what makes it valuable.\""
        },
        {
          id: "profile-training",
          type: "textBlock",
          header: "Experience & Training",
          body: "• B.Tech in Civil Engineering — National Institute of Technology Goa (2019-2023)\n• Political Analyst — Showtime Consulting (Nov 2023 - Aug 2024): Voter trend analysis, demographic pattern identification, campaign strategy optimization\n• Project Coordinator — Design Alley (May 2023 - Nov 2023): Timeline monitoring, resource allocation, trend analysis\n• Python for Data Science Certification — IBM\n• Microsoft Excel Certification — Simplilearn/Microsoft\n• Technical: SQL, Python, Power BI, ETL, Data Cleaning, KPI Tracking, Predictive Modeling"
        },
        {
          id: "profile-related",
          type: "relatedCards",
          header: "Related",
          cards: [
            { title: "All Team", description: "View profiles.", icon: "team", href: "/team" },
            { title: "Governance", description: "Leadership structure.", icon: "governance", href: "/governance" },
            { title: "Research Team", description: "Research colleagues.", icon: "users", href: "/governance#gov-research-team" }
          ]
        }
      ]
    },

    "/governance/team/sruthi-matta": {
      title: "Sruthi Matta",
      metaDescription: "Research Team Lead — Pedagogy & Innovation — Journalism and Media Strategy background.",
      seo: {
        title: "Sruthi Matta | Governance Team | Blue Blocks Micro Research Institute",
        canonical: `${SITE_URL}/governance/team/sruthi-matta`,
        robots: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
        openGraph: {
          type: "profile",
          url: `${SITE_URL}/governance/team/sruthi-matta`,
          title: "Sruthi Matta - Research Team Lead",
          description: "Research Team Lead — Pedagogy & Innovation — Journalism and Media Strategy background."
        }
      },
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Sruthi Matta",
          url: `${SITE_URL}/governance/team/sruthi-matta`,
          jobTitle: "Research Team Lead — Pedagogy & Innovation",
          worksFor: { "@type": "Organization", name: "Blue Blocks Micro Research Institute" }
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: "Governance", item: `${SITE_URL}/governance` },
            { "@type": "ListItem", position: 3, name: "Sruthi Matta", item: `${SITE_URL}/governance/team/sruthi-matta` }
          ]
        }
      ],
      sections: [
        {
          id: "profile-hero",
          type: "hero",
          variant: "stark",
          headline: "Sruthi Matta",
          subheadline: "Research Team Lead — Pedagogy & Innovation. Journalism and Media Strategy background.",
          primaryCta: { label: "Contact", href: "mailto:research@blueblocks.in" },
          secondaryCta: { label: "Back to Team", href: "/team" },
          image: { src: "/src/assets/placeholders/avatars/sruthi-matta.webp", alt: "Sruthi Matta", variant: "hero" }
        },
        {
          id: "profile-meta",
          type: "metaStrip",
          items: [
            { label: "Role", value: "Research Team Lead" },
            { label: "Training", value: "Journalism (Concordia)" },
            { label: "Focus", value: "Pedagogy & Innovation" },
            { label: "Skills", value: "Research, Media Strategy" }
          ]
        },
        {
          id: "profile-card",
          type: "profile",
          name: "Sruthi Matta",
          role: "Research Team Lead — Pedagogy & Innovation",
          image: { src: "/src/assets/placeholders/avatars/sruthi-matta.webp", alt: "Sruthi Matta", variant: "avatar" },
          email: "research@blueblocks.in",
          socials: [
            { type: "linkedin", href: "https://www.linkedin.com/in/sruthi-m-writer-freelance-journalist/", label: "LinkedIn" },
            { type: "orcid", href: "https://orcid.org/0009-0008-2791-1273", label: "ORCID" }
          ],
          bio: "Spent two years as a multimedia journalist in Montreal. Now leads research on pedagogy and innovation, applying the same methodology she developed in journalism: rapid-cycle inquiry that produces actionable findings."
        },
        {
          id: "profile-pullquote",
          type: "textBlock",
          header: "",
          body: "> \"Not every child is a genius, but every child is an innovator.\""
        },
        {
          id: "profile-content",
          type: "textBlock",
          header: "Researcher Profile",
          body: "Sruthi Matta spent two years as a multimedia journalist in Montreal — writing for The Link, The Concordian, CJLO Magazine, and Goalcast. She investigated the Canadian newsroom diversity survey that revealed 90% of journalists across 209 newsrooms came from non-diverse backgrounds. She covered Concordia's Center for Research on Aging when they partnered with Art Hives to set up a study in a shopping mall — measuring how eyesight, hearing, and balance interrelate in elderly subjects. She wrote opinion pieces on culture shock, the Quebec language ordeal, and ambition versus peer pressure.\n\nShe also built something from scratch: Quebec's first Telugu-language radio show on CJLO 1690AM, bringing together young singers, musicians, and filmmakers from across Canada. For that radio station, she developed a Listener Survey using demographic and psychographic analysis — her first formal exercise in research methodology. The experience taught her that the best stories come from sources who don't know they're sources.\n\n> \"How outdated will we be when they're growing up? And how do we catch up to them instead of holding them back?\""
        },
        {
          id: "profile-lens",
          type: "textBlock",
          header: "The Researcher's Lens: The Child as Innovator",
          body: "Sruthi had met intelligent children before. But intelligence wasn't what changed her thinking — innovation was. When she met the student cohort that launched the SBB-1 Satellite, she watched them field questions at a press conference with composure that most adults never achieve.\n\n\"I was blown away,\" she admits. \"My respect for the school reached new heights. It proved something I now consider foundational: not every child is a genius, but every child is an innovator. The distinction matters. Genius is rare. Innovation is universal — if we don't train it out of them.\""
        },
        {
          id: "profile-formative",
          type: "textBlock",
          header: "The Formative Assignment: Research in Unexpected Places",
          body: "One journalism assignment changed her understanding of what research could look like. Covering Concordia's Center for Research on Aging, she watched scientists set up a study inside a shopping mall — choosing a location where seniors naturally gathered, using art workshops (\"Art Hives\") as both incentive and data collection method. The researchers measured balance, hearing, and eyesight — and their interrelation — in a space that felt nothing like a laboratory.\n\nResearch didn't have to happen in universities. It could meet people where they are. This is the principle she now brings to Blue Blocks: rigorous inquiry conducted in natural settings, with participants who don't feel like subjects."
        },
        {
          id: "profile-truth",
          type: "textBlock",
          header: "The Uncomfortable Truth",
          body: "\"Most people are in denial that they are in denial. It's a spiral society lives in — and refuses to name.\"\n\nIf given unlimited resources, the mystery she would investigate is the psychology of denial itself — how it operates as a protective mechanism that prevents people from seeing what they forfeit by refusing to confront reality. \"Education's unspoken failure,\" she argues, \"is teaching children what to think while ignoring the psychological mechanisms that prevent thinking in the first place.\""
        },
        {
          id: "profile-methodology",
          type: "textBlock",
          header: "Methodology: The Journalist's Discipline",
          body: "She approaches research the way she approached a story: find the thread, pull it, don't stop until you see where it leads. She chose media strategy over a master's thesis precisely because she wanted research that drives action — \"quick, deep, and effective within a shorter time frame.\"\n\nAt LaSalle College, her capstone project required developing a comprehensive media strategy from scratch: market research, competitor analysis, campaign design, and performance measurement using Google Analytics and CRM tools. The discipline stuck. \"Tight deadlines force clarity,\" she says. \"Research that takes years to surface often loses relevance. I design studies that deliver insight fast.\""
        },
        {
          id: "profile-inquiry",
          type: "textBlock",
          header: "Current Inquiry: Generational Patterns",
          body: "Her intellectual focus spans two related territories. The first: preparing children for a future that will make today's adults obsolete. The second: the \"DNA\" of generational trauma — how environments imprint on memory even after the toxicity is removed, and whether that inheritance can be interrupted.\n\n\"The trauma DNA is still engraved in their memory,\" she observes. \"Even when people are strongly trying to get out of that cycle, with therapy and professional help, something persists. I want to understand what that something is — and whether children can be protected from inheriting it.\""
        },
        {
          id: "profile-at-bb",
          type: "textBlock",
          header: "At Blue Blocks",
          body: "She leads research on pedagogy and innovation, applying the same methodology she developed in journalism: rapid-cycle inquiry that produces actionable findings. \"We're sitting on a gold mine of research potential,\" she says. \"Access to natural childhood inquiry that Harvard and Stanford can never have. And we're not going to waste it.\"\n\nHer current focus is building a Micro-Research Protocol — a framework for conducting small-scale, high-impact studies on childhood development that deliver insight fast. The model borrows from journalism's discipline: tight deadlines force clarity. Rigorous inquiry and rapid turnaround are not opposites — they are allies."
        },
        {
          id: "profile-training",
          type: "textBlock",
          header: "Media & Research Experience",
          body: "• Radio Show Host — CJLO 1690AM (2022-2024): Created and hosted Quebec's first Telugu-language radio show; developed Listener Survey using demographic and psychographic analysis.\n• Journalist — The Link, The Concordian, CJLO Magazine (2021-2022): Covered aging research, international student issues, art and music festivals; published opinion pieces on culture shock and Quebec language policy.\n• News Writer — Goalcast (2022-2023): Wrote uplifting, evergreen stories for North American audiences; crafted compelling short-form content optimized for engagement.\n• CBC Montreal: Human interest feature on a boutique helping Montreal women regain confidence and independence.\n• Canadian Newsroom Diversity Survey: Contributed to coverage revealing demographic gaps across 209 Canadian newsrooms.\n• Festival Coverage (3 years): St. Theresa Art Festival, Fringe Montreal, Sight+Sound Festival for radio, magazines, and newspapers.\n\n**Credentials:**\n• Graduate Diploma in Journalism — Concordia University, Montreal (2021-2022)\n• AEC in Media Strategies & Advertising — LaSalle College, Montreal (2022-2023)\n• Bachelor of Arts (Humanities: Geography, History, Public Administration) — Hyderabad\n• Technical: Google Analytics, CRM tools, Marketing Automation, Media Buying & Placement, Market Research & Analytics"
        },
        {
          id: "profile-related",
          type: "relatedCards",
          header: "Related",
          cards: [
            { title: "All Team", description: "View profiles.", icon: "team", href: "/team" },
            { title: "Governance", description: "Leadership structure.", icon: "governance", href: "/governance" },
            { title: "Research Team", description: "Research colleagues.", icon: "users", href: "/governance#gov-research-team" }
          ]
        }
      ]
    },

    "/governance/team/sandhya-rao-m": {
      title: "Sandhya Rao M",
      metaDescription: "AMI Elementary Guide; Biomimicry Educator; Research Team. AMI Elementary Diploma; Biomimicry Foundation (Biomimicry Institute); M.P.T. in Community-Based Rehabilitation.",
      seo: {
        title: "Sandhya Rao M | Governance Team | Blue Blocks Micro Research Institute",
        canonical: `${SITE_URL}/governance/team/sandhya-rao-m`,
        robots: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
        openGraph: {
          type: "profile",
          url: `${SITE_URL}/governance/team/sandhya-rao-m`,
          title: "Sandhya Rao M - AMI Elementary Guide; Biomimicry Educator",
          description: "AMI Elementary Guide; Biomimicry Educator; Research Team. AMI Elementary Diploma; Biomimicry Foundation (Biomimicry Institute); M.P.T. in Community-Based Rehabilitation."
        }
      },
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Sandhya Rao M",
          url: `${SITE_URL}/governance/team/sandhya-rao-m`,
          jobTitle: "AMI Elementary Guide; Biomimicry Educator",
          worksFor: { "@type": "Organization", name: "Blue Blocks Micro Research Institute" },
          description: "AMI Elementary Guide; Biomimicry Educator; Research Team. AMI Elementary Diploma; Biomimicry Foundation (Biomimicry Institute); M.P.T. in Community-Based Rehabilitation."
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: "Governance", item: `${SITE_URL}/governance` },
            { "@type": "ListItem", position: 3, name: "Team", item: `${SITE_URL}/team` },
            { "@type": "ListItem", position: 4, name: "Sandhya Rao M", item: `${SITE_URL}/governance/team/sandhya-rao-m` }
          ]
        }
      ],
      sections: [
        {
          id: "profile-hero",
          type: "hero",
          variant: "stark",
          headline: "Sandhya Rao M",
          subheadline: "AMI Elementary Guide; Biomimicry Educator; Research Team",
          primaryCta: { label: "Contact", href: "mailto:research@blueblocks.in" },
          secondaryCta: { label: "Back to Team", href: "/team" },
          image: { src: "/src/assets/placeholders/avatars/sandhya-rao.webp", alt: "Sandhya Rao M", variant: "hero" }
        },
        {
          id: "profile-meta",
          type: "metaStrip",
          items: [
            { label: "Role", value: "AMI Elementary Guide; Biomimicry Educator; Research Team" },
            { label: "Training", value: "AMI Elementary Diploma; AMI Core Principles; AMI School Leadership; Biomimicry Foundation (Biomimicry Institute)" },
            { label: "Prior Field", value: "M.P.T. in Community-Based Rehabilitation; B.P.T. in Physiotherapy" }
          ]
        },
        {
          id: "profile-card",
          type: "profile",
          name: "Sandhya Rao M",
          role: "AMI Elementary Guide; Biomimicry Educator; Research Team",
          image: { src: "/src/assets/placeholders/avatars/sandhya-rao.webp", alt: "Sandhya Rao M", variant: "avatar" },
          email: "research@blueblocks.in",
          socials: [
            { type: "linkedin", href: "https://www.linkedin.com/in/sandhya-rao-98572116b/", label: "LinkedIn" },
            { type: "orcid", href: "https://orcid.org/0009-0003-7368-2604", label: "ORCID" }
          ],
          bio: "Sandhya Rao's path to education began in an unexpected place: community health. As a physiotherapist researching quality of life among HIV/AIDS patients in Karnataka, she learned to listen — to enter difficult spaces, ask sensitive questions, and document what others overlooked. Now an AMI-trained Elementary guide and certified Biomimicry educator, she works at the intersection of two disciplines that share a common premise: the world is already full of solutions."
        },
        {
          id: "profile-pullquote",
          type: "textBlock",
          header: "",
          body: "> \"What is my task then in this world?\"\n\n— A 12-year-old's response to a story about cosmic purpose"
        },
        {
          id: "profile-content",
          type: "textBlock",
          header: "",
          body: "Sandhya Rao's path to education began in an unexpected place: community health. As a physiotherapist researching quality of life among HIV/AIDS patients in Karnataka, she learned to listen — to enter difficult spaces, ask sensitive questions, and document what others overlooked. That early research, conducted through NGOs and community surveys in English and Kannada, taught her that the most important data often comes from those society underestimates.\n\nShe carried that instinct into the classroom. Now an AMI-trained Elementary guide and certified Biomimicry educator, she works at the intersection of two disciplines that share a common premise: the world is already full of solutions — in nature's designs, and in children's questions. \"Research in Montessori,\" she observes, \"is cosmic. Botany meets geometry. Math meets biology. Data becomes interconnected, not siloed.\"\n\n\"Adults don't believe children can research. Their imagination can be nurtured to think beyond worldly constraints — but we have to stop imposing adult-centric limits first.\""
        },
        {
          id: "profile-lens",
          type: "textBlock",
          header: "The Researcher's Lens: The Child as Scientist",
          body: "She tells a story about six-year-olds. She had just narrated the Montessori \"Leaf as Food Factory\" lesson — describing photosynthesis as tiny workers inside the leaf, mixing water and air, baking them in sunlight to make food for the plant.\n\nThe moment the session ended, the children scattered across the elementary environment with magnifying glasses, peering at every plant they could find. They were looking for the workers.\n\n\"That blew my mind,\" she recalls. \"I never thought to check. I never thought to pretend. But they did — immediately, instinctively. That's research. That's the scientific impulse before we train it out of them.\""
        },
        {
          id: "profile-question",
          type: "textBlock",
          header: "The Question That Stayed",
          body: "During another lesson — the Great Story of the Fruit and the Seed — she told a group of 12-year-olds about the fruit's \"cosmic task\": to protect the seed until it can become a new plant. The fruit exists to serve something beyond itself.\n\nOne child looked up and asked: \"What is my task then in this world?\"\n\n\"I couldn't imagine,\" she says, \"that this story could spark that question. But this is what every child should be asking. This is what a school — a guide — should aim at. Not answers. The right questions.\""
        },
        {
          id: "profile-truth",
          type: "textBlock",
          header: "The Uncomfortable Truth",
          body: "\"Adults don't believe that children can research. We underestimate them — and then we're surprised when they exceed our expectations.\"\n\nHer observation is simple but radical: children's imagination can be nurtured to think beyond worldly constraints — but only if adults stop imposing adult-centric limits first. The barrier to child-led research is not children's capacity. It's adult belief."
        },
        {
          id: "profile-biomimicry",
          type: "textBlock",
          header: "The Biomimicry Lens",
          body: "As a certified Biomimicry educator, Sandhya sees the natural world as a library of solved problems. Every form, shape, and structure in nature is an answer to a design question that evolution has been refining for millions of years. This lens shapes how she observes both ecosystems and children.\n\n\"The way children think and respond during stories and in-depth work is very interesting for me,\" she says. \"Nature doesn't separate disciplines — and neither do children, until we teach them to. In Montessori, botany meets geometry. Math meets zoology. That integration isn't artificial. It's how the world actually works.\""
        },
        {
          id: "profile-obsession",
          type: "textBlock",
          header: "Current Obsession: Leadership and Parenting in Nature",
          body: "Her intellectual focus spans two related territories: how leadership and parenting manifest in the natural world, and what parents actually want from schooling. She's interested in the gap between what families say they value and what educational systems deliver — and whether nature offers models we've overlooked."
        },
        {
          id: "profile-mystery",
          type: "textBlock",
          header: "The Vital Mystery",
          body: "If given unlimited resources, she would investigate the human capacities that matter most for future generations: attention span, empathy, tolerance. How are these changing? How connected are parents and children to nature — and does that connection predict anything about resilience, creativity, or wellbeing?\n\n\"We measure academic outcomes obsessively,\" she observes. \"But we rarely ask: Are children becoming more attentive? More empathetic? More tolerant? These are the capacities that will determine whether the next generation can solve problems we can't even name yet.\""
        },
        {
          id: "profile-at-bb",
          type: "textBlock",
          header: "At Blue Blocks",
          body: "She serves as an AMI Elementary guide, bringing Montessori's integrated, \"cosmic\" approach to research alongside her Biomimicry training. Her role is to create conditions where children's questions lead — where a story about seeds can become an inquiry into purpose, and a lesson about leaves can send six-year-olds hunting for invisible workers with magnifying glasses.\n\n\"All the knowledge and insights I have from working with children,\" she says, \"help me see this data as a rich resource for learning. Not data about children. Data from children — which is a different thing entirely.\""
        },
        {
          id: "profile-credentials",
          type: "textBlock",
          header: "Credentials & Training",
          body: "• AMI Elementary Diploma — Association Montessori Internationale\n• AMI Montessori Core Principles Certification\n• AMI School Leadership Course\n• Biomimicry Foundation Course — Biomimicry Institute\n• Master of Physiotherapy (M.P.T.) — Community-Based Rehabilitation\n• Bachelor of Physiotherapy (B.P.T.)\n• Master's Thesis: Impact on Quality of Life among HIV/AIDS Individuals (Karnataka, India)"
        },
        {
          id: "profile-related",
          type: "relatedCards",
          header: "Related",
          cards: [
            { title: "All Team", description: "View profiles.", icon: "team", href: "/team" },
            { title: "Governance", description: "Leadership structure.", icon: "governance", href: "/governance" },
            { title: "Research Team", description: "Research colleagues.", icon: "users", href: "/governance#gov-research-team" }
          ]
        }
      ]
    },

    "/governance/team/dr-sreemoyee-chakraborty": {
      title: "Dr. Sreemoyee Chakraborty",
      metaDescription: "STEM Research, Palaeontology, & Earth Science. PhD: Palaeontology, Indian Statistical Institute / University of Calcutta (2025).",
      seo: {
        title: "Dr. Sreemoyee Chakraborty | Governance Team | Blue Blocks Micro Research Institute",
        canonical: `${SITE_URL}/governance/team/dr-sreemoyee-chakraborty`,
        robots: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
        openGraph: {
          type: "profile",
          url: `${SITE_URL}/governance/team/dr-sreemoyee-chakraborty`,
          title: "Dr. Sreemoyee Chakraborty - STEM Research, Palaeontology, & Earth Science",
          description: "STEM Research, Palaeontology, & Earth Science. PhD: Palaeontology, Indian Statistical Institute / University of Calcutta (2025).",
          image: `${SITE_URL}/team/dr-sreemoyee-chakraborty.webp`
        },
        twitter: {
          card: "summary_large_image",
          title: "Dr. Sreemoyee Chakraborty - STEM Research, Palaeontology, & Earth Science",
          description: "STEM Research, Palaeontology, & Earth Science. PhD: Palaeontology, Indian Statistical Institute / University of Calcutta (2025).",
          image: `${SITE_URL}/team/dr-sreemoyee-chakraborty.webp`
        }
      },
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Dr. Sreemoyee Chakraborty",
          url: `${SITE_URL}/governance/team/dr-sreemoyee-chakraborty`,
          jobTitle: "STEM Research, Palaeontology, & Earth Science",
          image: `${SITE_URL}/team/dr-sreemoyee-chakraborty.webp`,
          worksFor: { "@type": "Organization", name: "Blue Blocks Micro Research Institute" },
          description: "STEM Research, Palaeontology, & Earth Science. PhD: Palaeontology, Indian Statistical Institute / University of Calcutta (2025)."
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: "Governance", item: `${SITE_URL}/governance` },
            { "@type": "ListItem", position: 3, name: "Team", item: `${SITE_URL}/team` },
            { "@type": "ListItem", position: 4, name: "Dr. Sreemoyee Chakraborty", item: `${SITE_URL}/governance/team/dr-sreemoyee-chakraborty` }
          ]
        }
      ],
      sections: [
        {
          id: "profile-hero",
          type: "hero",
          variant: "stark",
          headline: "Dr. Sreemoyee Chakraborty",
          subheadline: "STEM Research, Palaeontology, & Earth Science",
          primaryCta: { label: "Contact", href: "mailto:research@blueblocks.in" },
          secondaryCta: { label: "Back to Team", href: "/team" },
          image: { src: "/src/assets/placeholders/avatars/sreemoyee-chakraborty.webp", alt: "Dr. Sreemoyee Chakraborty", variant: "hero" }
        },
        {
          id: "profile-meta",
          type: "metaStrip",
          items: [
            { label: "Role", value: "STEM Research, Palaeontology, & Earth Science" },
            { label: "PhD", value: "Palaeontology, Indian Statistical Institute / University of Calcutta (2025)" }
          ]
        },
        {
          id: "profile-card",
          type: "profile",
          name: "Dr. Sreemoyee Chakraborty",
          role: "STEM Research, Palaeontology, & Earth Science",
          image: { src: "/team/dr-sreemoyee-chakraborty.webp", alt: "Dr. Sreemoyee Chakraborty", variant: "avatar" },
          email: "research@blueblocks.in",
          socials: [
            { type: "linkedin", href: "https://www.linkedin.com/in/dr-sreemoyee-chakraborti-238490b6/", label: "LinkedIn" },
            { type: "orcid", href: "https://orcid.org/0000-0001-5180-156X", label: "ORCID" }
          ],
          bio: "Dr. Sreemoyee Chakraborty has spent seven years reading the Earth's autobiography — decoding 50-million-year-old whale skulls, reconstructing ancient climates from fossil beds, and asking what the deep past can teach us about survival. At Blue Blocks, she transitions from purely academic inquiry to what she calls a \"pedagogy of research.\""
        },
        {
          id: "profile-pullquote",
          type: "textBlock",
          header: "",
          body: "> \"Isn't planet Earth the biggest mystery that remains yet to be solved?\""
        },
        {
          id: "profile-content",
          type: "textBlock",
          header: "",
          body: "Dr. Sreemoyee Chakraborty has spent seven years reading the Earth's autobiography — decoding 50-million-year-old whale skulls, reconstructing ancient climates from fossil beds, and asking what the deep past can teach us about survival. A former Research Fellow at the Indian Statistical Institute and exchange delegate to Kanazawa University in Japan, she has designed scientific models, analyzed complex paleo-data, and mentored early-career researchers.\n\nAt Blue Blocks, she transitions from purely academic inquiry to what she calls a \"pedagogy of research\" — an approach where children act as co-contributors, not subjects. She believes this builds the kind of thinking that traditional systems accidentally train out of children.\n\n\"I believe children possess an uninhibited cognitive liberty that most adult researchers have lost.\""
        },
        {
          id: "profile-lens",
          type: "textBlock",
          header: "The Researcher's Lens: The Child as Scientist",
          body: "Dr. Chakraborty challenges the common wisdom that children are \"too young\" for complex STEM research. Her counter-intuitive insight is that adult researchers are often bound by social and academic conditioning, whereas children possess a unique capacity to see what is actually there — not what they've been trained to expect."
        },
        {
          id: "profile-truth",
          type: "textBlock",
          header: "The Uncomfortable Truth",
          body: "\"Adult researchers are often worse observers than children. Our training conditions us to see what we expect. Children see what's actually there.\"\n\nDuring a classroom session, an 11-year-old asked why two fossil categories were being treated as separate when they seemed to describe the same thing. She was right. It was a redundancy that had persisted in the literature for years, unquestioned by experts."
        },
        {
          id: "profile-obsession",
          type: "textBlock",
          header: "Current Obsession: The Climate Marriage",
          body: "She is currently focused on \"bringing in a marriage\" between paleoclimate (past climate data) and current climate science. Her goal is to use the Earth's geological history to decode and solve the present and future climate crisis — treating fossils not as relics, but as data points for planetary survival."
        },
        {
          id: "profile-origin",
          type: "textBlock",
          header: "The Origin of Inquiry",
          body: "Unlike many who find inspiration in the lab, Dr. Chakraborty's \"Eureka!\" moments often strike in the quiet spaces of life — whether swimming in the Great Barrier Reef, exploring Thai food markets, or simply watching particles move while cooking. She believes deep insight arrives when the mind is most at ease, not when it is most focused."
        },
        {
          id: "profile-mystery",
          type: "textBlock",
          header: "The Vital Mystery",
          body: "If given unlimited resources, the mystery she would solve is the origin of life itself: identifying the precise \"tipping point\" that sparked life from a mass of proteins and fats — a phenomenon science has yet to replicate artificially. It remains, for her, the ultimate question."
        },
        {
          id: "profile-at-bb",
          type: "textBlock",
          header: "At Blue Blocks",
          body: "She is designing a fossil investigation module where children analyze real specimens and publish their findings — treated as junior colleagues, not students. The goal is to prove that children, given authentic scientific responsibility, can contribute to the field rather than merely learn about it."
        },
        {
          id: "profile-publications",
          type: "textBlock",
          header: "Selected Publications & Credentials",
          body: "• 2025: Taphofacies from the lower Eocene Naredi Formation of Kutch Basin, western India (Facies).\n• 2025: Evaluating Algorithmic Approaches to Paleoenvironmental Interpretation in the Eocene of Kutch Basin, India (Preprint).\n• 2023: A new skull of early cetacean Remingtonocetus harudiensis from the Eocene of Kutch Basin, India (Palaeoworld).\n• 2017: Sakura Science Programme Delegate, Kanazawa University, Japan."
        },
        {
          id: "profile-related",
          type: "relatedCards",
          header: "Related",
          cards: [
            { title: "All Team", description: "View profiles.", icon: "team", href: "/team" },
            { title: "Governance", description: "Leadership structure.", icon: "governance", href: "/governance" },
            { title: "Research Team", description: "Research colleagues.", icon: "users", href: "/governance#gov-research-team" }
          ]
        }
      ]
    },

    "/governance/team/dr-shobha-ediga": {
      title: "Dr. Shobha Ediga",
      metaDescription: "Microbiological & Biochemical Research Lead; Erdkinder Biology Mentor. Plant Sciences, University of Hyderabad (2013).",
      seo: {
        title: "Dr. Shobha Ediga | Governance Team | Blue Blocks Micro Research Institute",
        canonical: `${SITE_URL}/governance/team/dr-shobha-ediga`,
        robots: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
        openGraph: {
          type: "profile",
          url: `${SITE_URL}/governance/team/dr-shobha-ediga`,
          title: "Dr. Shobha Ediga - Microbiological & Biochemical Research Lead",
          description: "Microbiological & Biochemical Research Lead; Erdkinder Biology Mentor. Plant Sciences, University of Hyderabad (2013).",
          image: `${SITE_URL}/team/dr-shobha-ediga.webp`
        },
        twitter: {
          card: "summary_large_image",
          title: "Dr. Shobha Ediga - Microbiological & Biochemical Research Lead",
          description: "Microbiological & Biochemical Research Lead; Erdkinder Biology Mentor. Plant Sciences, University of Hyderabad (2013).",
          image: `${SITE_URL}/team/dr-shobha-ediga.webp`
        }
      },
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Dr. Shobha Ediga",
          url: `${SITE_URL}/governance/team/dr-shobha-ediga`,
          jobTitle: "Microbiological & Biochemical Research Lead",
          image: `${SITE_URL}/team/dr-shobha-ediga.webp`,
          worksFor: { "@type": "Organization", name: "Blue Blocks Micro Research Institute" },
          description: "Microbiological & Biochemical Research Lead; Erdkinder Biology Mentor. Plant Sciences, University of Hyderabad (2013)."
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: "Governance", item: `${SITE_URL}/governance` },
            { "@type": "ListItem", position: 3, name: "Team", item: `${SITE_URL}/team` },
            { "@type": "ListItem", position: 4, name: "Dr. Shobha Ediga", item: `${SITE_URL}/governance/team/dr-shobha-ediga` }
          ]
        }
      ],
      sections: [
        {
          id: "profile-hero",
          type: "hero",
          variant: "stark",
          headline: "Dr. Shobha Ediga",
          subheadline: "Microbiological & Biochemical Research Lead; Erdkinder Biology Mentor",
          primaryCta: { label: "Contact", href: "mailto:research@blueblocks.in" },
          secondaryCta: { label: "Back to Team", href: "/team" },
          image: { src: "/src/assets/placeholders/avatars/shobha-ediga.webp", alt: "Dr. Shobha Ediga", variant: "hero" }
        },
        {
          id: "profile-meta",
          type: "metaStrip",
          items: [
            { label: "Role", value: "Microbiological & Biochemical Research Lead; Erdkinder Biology Mentor" },
            { label: "PhD", value: "Plant Sciences, University of Hyderabad (2013)" },
            { label: "Honors", value: "Gold Medalist (M.Sc. Biochemistry); Silver Medalist (B.Sc.)" }
          ]
        },
        {
          id: "profile-card",
          type: "profile",
          name: "Dr. Shobha Ediga",
          role: "Microbiological & Biochemical Research Lead; Erdkinder Biology Mentor",
          image: { src: "/src/assets/placeholders/avatars/shobha-ediga.webp", alt: "Dr. Shobha Ediga", variant: "avatar" },
          email: "research@blueblocks.in",
          socials: [
            { type: "linkedin", href: "https://www.linkedin.com/in/dr-shobha-ediga-578b6644/", label: "LinkedIn" }
          ],
          bio: "Dr. Shobha Ediga spent a decade in India's national research laboratories — isolating novel bacterial species, developing food safety standards for FSSAI, and publishing in journals like Scientific Reports and the International Journal of Systematic and Evolutionary Microbiology. Now she brings that rigor to a different laboratory: the classroom."
        },
        {
          id: "profile-pullquote",
          type: "textBlock",
          header: "",
          body: "> \"Why don't humans carry out photosynthesis to make their own food?\"\n\n— A question from a child that she still thinks about"
        },
        {
          id: "profile-content",
          type: "textBlock",
          header: "",
          body: "Dr. Shobha Ediga spent a decade in India's national research laboratories — isolating novel bacterial species, developing food safety standards for FSSAI, and publishing in journals like Scientific Reports and the International Journal of Systematic and Evolutionary Microbiology. Her work on millet quality standards alone involved analyzing 331 samples from agro-climatic regions across India, shaping policy that affects farmer livelihoods and public health.\n\nNow she brings that rigor to a different laboratory: the classroom. As Biology Mentor in Blue Blocks' Erdkinder program, she guides adolescents through the same scientific process she practiced in research institutes — hypothesis, experiment, observation, revision. The difference is the audience. \"Children have not yet learned to fear being wrong,\" she observes. \"That makes them better experimenters than most adults.\"\n\n\"Children don't need constant correction or acceleration. They need intellectual respect.\""
        },
        {
          id: "profile-lens",
          type: "textBlock",
          header: "The Researcher's Lens: The Child as Scientist",
          body: "During a bread mould experiment, an adolescent researcher encountered something puzzling. A single piece of bread, divided into two halves and placed under apparently identical conditions, produced dramatically different results: one half grew mould; the other remained clean.\n\nInstead of accepting this as chance, the student asked the most important research question: Why? She began considering hidden variables — moisture, airflow, handling, exposure to spores, microscopic surface variations. \"This moment,\" Dr. Ediga recalls, \"marked a shift from performing an experiment to thinking like a researcher. She realized that biological systems are highly sensitive, and small, often invisible factors can lead to dramatically different outcomes.\""
        },
        {
          id: "profile-truth",
          type: "textBlock",
          header: "The Uncomfortable Truth",
          body: "\"When we treat children's questions seriously and allow time for exploration, they demonstrate patience, depth, and insight that often surprises adults.\"\n\nMost education systems assume children need to be corrected, accelerated, or kept on track. Dr. Ediga's observation is simpler and more radical: they need intellectual respect. Given that respect — and the time that comes with it — children reveal capacities that adult-centric models systematically underestimate."
        },
        {
          id: "profile-origin",
          type: "textBlock",
          header: "The Origin of Inquiry: Making the Invisible Visible",
          body: "Her eureka moment came in a university laboratory during a DNA extraction. Until then, DNA had existed for her as an abstraction — inferred through gels, absorbance values, and textbook diagrams. But in that moment, watching the molecule precipitate into something she could see and touch, the invisible became tangible.\n\n\"That realization reshaped my approach to research,\" she says. \"It taught me to bridge theory with visualization, to value techniques that make the invisible visible, and to question assumptions simply because something cannot be seen.\" This philosophy — that understanding deepens when abstraction becomes concrete — now guides how she teaches children. The molecular level, she learned, is both precise and remarkably tangible. So is a child's capacity for scientific thinking, if you know how to make it visible."
        },
        {
          id: "profile-obsession",
          type: "textBlock",
          header: "Current Obsession: A Plastic-Free World",
          body: "Her intellectual focus has shifted from the laboratory to a global systems problem: imagining and working toward a zero-waste, plastic-free world — one where everyday materials are designed with environmental accountability rather than convenience alone."
        },
        {
          id: "profile-mystery",
          type: "textBlock",
          header: "The Vital Mystery",
          body: "If given unlimited resources, the mystery she would investigate is plastic at the molecular and biological level: What happens once it enters living systems? How does it silently reshape life over generations? \"We know plastic persists,\" she says. \"We don't yet understand what it does while it persists — inside cells, across species, through time.\"\n\nIt is, for her, the question society is failing to ask — not because the science is too hard, but because the answer might demand more change than we're prepared to make."
        },
        {
          id: "profile-at-bb",
          type: "textBlock",
          header: "At Blue Blocks",
          body: "She serves as Biology Mentor for the Erdkinder (adolescent) program and Cambridge Lower/Upper Secondary examinations. Her role is not to deliver answers but to model how a researcher thinks: how to ask better questions, design small experiments, document observations, and reflect on results.\n\n\"A micro-research setting allows children to experience science as a process of exploration rather than performance,\" she explains. \"My job is to protect that experience — to make sure the question stays more interesting than the answer.\""
        },
        {
          id: "profile-publications",
          type: "textBlock",
          header: "Selected Publications",
          body: "• Induction of cell wall phenolic monomers as part of direct defense response in maize. Scientific Reports (2021).\n• Seedling stage heat tolerance mechanisms in pearl millet. Russian Journal of Plant Physiology (2022).\n• Natural Products Targeting Clinically Relevant Enzymes of Eicosanoid Biosynthesis. Wiley Book Chapter (2017).\n• Blastochloris gulmargensis sp. nov. — novel bacterial species description. IJSEM (2011).\n• Rhodopseudomonas parapalustris sp. nov., R. harwoodiae sp. nov., R. pseudopalustris sp. nov. IJSEM (2012).\n• Rhodoplanes piscinae sp. nov. — novel bacterial species description. IJSEM (2012).\n• Variability of Polyphenols and Antioxidant Activity in Sorghum Genotypes. Scholars Int. J. Biochemistry (2020).\n• Role of phenolics, tannin and flavonoid in maize resistance to pink stem borer. Maydica (2020)."
        },
        {
          id: "profile-experience",
          type: "textBlock",
          header: "Research Experience",
          body: "• ICAR-IIMR (2017-2020): Senior Research Fellow — Development of fortified millet foods; FSSAI quality standards for millets (331 samples analyzed from across India).\n• University of Hyderabad (2005-2006): Junior Research Fellow — Department of Ocean Development.\n• Assistant Professor (2003-2005): Department of Biotechnology, ALFA College of Engineering & Technology.\n\nTechnical Expertise: UFLC & LCMS, Gas Chromatography, Atomic Absorption Spectrophotometry, Protein Analysis (PAGE), Spectrophotometry, Method Validation & Data Analysis."
        },
        {
          id: "profile-related",
          type: "relatedCards",
          header: "Related",
          cards: [
            { title: "All Team", description: "View profiles.", icon: "team", href: "/team" },
            { title: "Governance", description: "Leadership structure.", icon: "governance", href: "/governance" },
            { title: "Research Team", description: "Research colleagues.", icon: "users", href: "/governance#gov-research-team" }
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
        robots: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
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
        robots: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
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
            { title: "In-SPACe Authorization Letter", description: "Full mission publication.", icon: "publication", href: "/publications/in-space-authorization-letter" },
            { title: "All News", description: "Back to newsroom.", icon: "news", href: "/newsroom" }
          ]
        }
      ]
    },

    "/newsroom/dispatch/iran-crisis-study-press-release": {
      title: "Press Release: Children Develop Geopolitical Reasoning Without Screens",
      metaDescription: "Hyderabad study reveals children with restricted screen time independently develop sophisticated geopolitical reasoning about the Iran crisis. 28 children aged 6–16 studied across three age cohorts.",
      _cpt: "news-item",
      _status: "published",
      seo: {
        title: "Children Develop Geopolitical Reasoning Without Screens | Press Release | Blue Blocks Micro Research Institute",
        canonical: "https://research.blueblocks.in/newsroom/dispatch/iran-crisis-study-press-release",
        description: "Hyderabad study reveals children with restricted screen time independently develop sophisticated geopolitical reasoning about the Iran crisis through family conversation and newspapers alone.",
        keywords: "child development, geopolitical reasoning, screen time, Iran crisis, case study, Montessori, longitudinal research, peace education, Hyderabad",
        openGraph: {
          type: "article",
          title: "Children With Restricted Screen Time Develop Sophisticated Geopolitical Reasoning",
          description: "28 school children aged 6–16 processed the Iran crisis through family conversation, peer discussion, and newspapers alone. Teenagers articulated nuclear deterrence logic from scratch.",
          image: { url: "https://research.blueblocks.in/images/og-home.jpg", width: 1200, height: 630 },
          article: {
            published_time: "2026-03-16T00:00:00+05:30",
            author: "Blue Blocks Micro Research Institute",
            section: "Press Release"
          }
        },
        twitter: {
          card: "summary_large_image",
          title: "Children Develop Geopolitical Reasoning Without Screens",
          description: "Teenagers articulated nuclear deterrence logic from scratch; six-year-olds defaulted to legal process over violence — in a school where children learn about world events through conversation, not algorithms.",
          image: "https://research.blueblocks.in/images/og-home.jpg"
        },
        citation: {
          citation_title: "Age-Differentiated Geopolitical Reasoning in Screen-Time-Restricted Children: A Qualitative Case Study of the 2026 Iran Crisis",
          citation_authors: ["Pavan Goyal", "Sreemoyee Chakraborty"],
          citation_publication_date: "2026/03/16",
          citation_publisher: "Blue Blocks Micro Research Institute",
          citation_doi: "10.5281/zenodo.18996507"
        }
      },
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          "@id": "https://research.blueblocks.in/newsroom/dispatch/iran-crisis-study-press-release#article",
          "headline": "Hyderabad study reveals children with restricted screen time independently develop sophisticated geopolitical reasoning about the Iran crisis",
          "alternativeHeadline": "Children With Restricted Screen Time Develop Sophisticated Geopolitical Reasoning",
          "datePublished": "2026-03-16T00:00:00+05:30",
          "dateModified": "2026-03-16T00:00:00+05:30",
          "author": [
            {
              "@type": "Person",
              "name": "Pavan Goyal",
              "jobTitle": "Founder & Principal Investigator",
              "affiliation": { "@type": "ResearchOrganization", "name": "Blue Blocks Micro Research Institute" }
            },
            {
              "@type": "Person",
              "name": "Sreemoyee Chakraborty",
              "jobTitle": "STEM Research Head",
              "affiliation": { "@type": "ResearchOrganization", "name": "Blue Blocks Micro Research Institute" }
            }
          ],
          "publisher": {
            "@type": "ResearchOrganization",
            "@id": "https://research.blueblocks.in/#microresearch",
            "name": "Blue Blocks Micro Research Institute"
          },
          "about": [
            { "@type": "Thing", "name": "Child Development" },
            { "@type": "Thing", "name": "Geopolitical Reasoning" },
            { "@type": "Thing", "name": "Screen Time Research" },
            { "@type": "Thing", "name": "Peace Education" },
            { "@type": "Thing", "name": "Montessori Education" }
          ],
          "description": "A new case study documents how 28 school children aged 6–16, raised in households with restricted screen time, processed the Iran crisis of 2026 through family conversation, peer discussion, and newspapers alone.",
          "url": "https://research.blueblocks.in/newsroom/dispatch/iran-crisis-study-press-release",
          "mainEntityOfPage": "https://research.blueblocks.in/newsroom/dispatch/iran-crisis-study-press-release",
          "isPartOf": { "@type": "WebSite", "@id": "https://research.blueblocks.in/#website" },
          "citation": {
            "@type": "ScholarlyArticle",
            "name": "Age-Differentiated Geopolitical Reasoning in Screen-Time-Restricted Children: A Qualitative Case Study of the 2026 Iran Crisis",
            "url": "https://doi.org/10.5281/zenodo.18996507",
            "sameAs": "https://doi.org/10.5281/zenodo.18996507"
          }
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://research.blueblocks.in/" },
            { "@type": "ListItem", "position": 2, "name": "Newsroom", "item": "https://research.blueblocks.in/newsroom" },
            { "@type": "ListItem", "position": 3, "name": "Iran Crisis Study Press Release", "item": "https://research.blueblocks.in/newsroom/dispatch/iran-crisis-study-press-release" }
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "ScholarlyArticle",
          "@id": "https://doi.org/10.5281/zenodo.18996507",
          "name": "Age-Differentiated Geopolitical Reasoning in Screen-Time-Restricted Children",
          "author": [
            { "@type": "Person", "name": "Pavan Goyal" },
            { "@type": "Person", "name": "Sreemoyee Chakraborty" }
          ],
          "publisher": { "@type": "ResearchOrganization", "name": "Blue Blocks Micro Research Institute" },
          "datePublished": "2026-03-16",
          "url": "https://doi.org/10.5281/zenodo.18996507",
          "isAccessibleForFree": true,
          "inLanguage": "en"
        }
      ],
      sections: [
        {
          id: "pr-hero",
          type: "hero",
          variant: "stark",
          headline: "Children With Restricted Screen Time Develop Sophisticated Geopolitical Reasoning About the Iran Crisis",
          subheadline: "Teenagers articulated nuclear deterrence logic from scratch; six-year-olds across three independent groups defaulted to legal process over violence — in a school where children learn about world events through family conversation and newspapers, not algorithms",
          primaryCta: { label: "Read Full Case Study", href: "https://doi.org/10.5281/zenodo.18996507", external: true },
          secondaryCta: { label: "Back to Newsroom", href: "/newsroom" },
          image: { src: "/src/assets/placeholders/labs/protocol-notes.jpg", alt: "Iran crisis case study press release", variant: "hero" }
        },
        {
          id: "pr-meta",
          type: "metaStrip",
          items: [
            { label: "Date", value: "March 16, 2026" },
            { label: "Location", value: "Hyderabad, India" },
            { label: "DOI", value: "10.5281/zenodo.18996507", href: "https://doi.org/10.5281/zenodo.18996507", external: true },
            { label: "Status", value: "Published — Open Access" },
            { label: "Type", value: "Press Release" }
          ]
        },
        {
          id: "pr-body",
          type: "textBlock",
          variant: "compact",
          header: "Press Release",
          body: "**HYDERABAD, March 16, 2026** — A new case study from the Blue Blocks Micro Research Institute documents how 28 school children aged 6–16, raised in households with restricted screen time, processed the Iran crisis of 2026 through family conversation, peer discussion, and newspapers alone. The findings challenge prevailing assumptions about what children know, feel, and reason about geopolitical violence — and reveal that the gap between what children feel about distant conflicts and what they understand about those conflicts is not a fixed developmental limit but a bridgeable information gap.\n\nThe study, conducted between 5 and 10 March 2026 at Blue Blocks Montessori School in Hyderabad, used semi-structured group discussions across three age cohorts (6–10, 10–13, and 13–16). Among the most striking findings: a teenager in the 13–16 cohort independently constructed the core logic of nuclear deterrence theory — reasoning that launching nuclear weapons destroys the very country the aggressor sought to protect, making the outcome indistinguishable from defeat. The same cohort produced structural critiques of the UN Security Council veto system, linked the current crisis to the Israel-Palestine conflict and Iran's nuclear programme, and identified India, Russia, and Iran as potential mediators with reasoned justifications for each.\n\nAt the other end of the developmental arc, children aged 6–10 independently arrived at the same moral conclusion across three entirely separate, non-overlapping discussion groups: when asked what should happen to leaders who cause harm, they said put them in jail. Not bomb them back. Not go to war. Put them in jail and make them answer for it. This convergence across three independent sessions, without coordination, suggests that children's baseline moral intuitions are rooted in the legal process by default — a natural scaffold for peace education that does not need to begin by establishing that violence is wrong.\n\nThe study also documents what the authors describe as its most educationally significant finding: when facilitators explained how distant conflicts affect non-participating countries, children's responses shifted from detachment to personal engagement within minutes.\n\n*\"What surprised us most wasn't that the children knew about the war — it was what happened when we explained how it could affect them personally. The room went quiet. Children who had been detached two minutes earlier were suddenly asking questions about oil prices and food costs. That shift tells us something important, that distance children show when they hear about a war far away — it isn't indifference. It's an information gap. And it closes in minutes, with a single honest conversation,\"* said **Pavan Goyal, Founder and Principal Investigator, Blue Blocks Micro Research Institute.**\n\nThe study reports that a small number of children initially expressed enthusiasm for the war continuing — engaging with the topic through combat strategy and weapons rather than human cost. The authors attribute this to the romanticisation of conflict in popular culture. Notably, this pattern appeared in children with restricted media access, suggesting that war-as-spectacle narratives reach children through games and peer culture even in low-screen-time households. The enthusiasm dissipated after facilitators explained real-world consequences, reinforcing the study's central finding: explanation works.\n\n*\"What struck us in the oldest cohort was not sadness but something closer to moral injury — a disappointment that something the adults should have handled better simply wasn't. One fifteen-year-old articulated it plainly: leaders sometimes make immoral decisions in the name of national interest, and you have to accept it even if you disagree. That a child of fifteen is carrying that weight is something we cannot ignore,\"* said **Sreemoyee Chakraborty, STEM Research Head, Blue Blocks Micro Research Institute.**\n\nOne finding the authors highlight as particularly significant for educators: none of the children, at any age, questioned the reliability of their own information sources. Even the oldest cohort, which could critique how powerful nations construct self-serving narratives, did not turn that same critical lens on the newspapers, family conversations, and peer discussions through which they had received their own understanding of the conflict. The authors identify this as a specific and tractable target for media literacy education.\n\nThe study employed thematic analysis of verbatim transcripts from five group discussions. All participants are minors up to age 16; parental consent was obtained for all sessions. Participant identities have been fully anonymised with no linkage file created or retained. The full case study is published on Zenodo as an open-access working paper.\n\n**Full case study:** [https://doi.org/10.5281/zenodo.18996507](https://doi.org/10.5281/zenodo.18996507)\n**Research page:** [research.blueblocks.in/publications/iran-war-case-study](/publications/iran-war-case-study)"
        },
        {
          id: "pr-about",
          type: "textBlock",
          variant: "compact",
          header: "About Blue Blocks Micro Research Institute",
          body: "Blue Blocks Micro Research Institute is the research division of Blue Blocks Montessori Educational Society, Hyderabad, India, an [AMI-guided Montessori school](https://montessori-ami.org/events/ami-talks-absorbent-mind-innovative-mind) serving children aged 1–18, in collaboration with [IIT Hyderabad](https://www.prnewswire.com/in/news-releases/students-reach-stratospheric-heights-blue-blocks-school-collaborates-with-iit-hyderabad-to-launch-space-lab-829621956.html). The institute publishes open-access research in child development, education methodology, and participatory science on [Zenodo](https://zenodo.org/communities/blueblocksmicroresearchinstitute/records?q=&l=list&p=1&s=10&sort=newest). The same students whose satellite payload (SBB-1) received [ISRO/IN-SPACe flight authorization](https://www.inspace.gov.in/inspace?id=inspace_authorizations) in 2026 are among the children whose responses to the Iran crisis are documented in this study."
        },
        {
          id: "pr-media-contact",
          type: "highlightBox",
          variant: "callout",
          heading: "Media Contact",
          body: "**Sruthi Matta**, Research Team Lead\nBlue Blocks Micro Research Institute\nEmail: press.research@blueblocks.in\n[research.blueblocks.in](https://research.blueblocks.in)"
        },
        {
          id: "pr-related",
          type: "relatedCards",
          header: "Related",
          cards: [
            { title: "Full Case Study", description: "Read the complete research paper on Zenodo.", icon: "publication", href: "https://doi.org/10.5281/zenodo.18996507", external: true },
            { title: "Research Page", description: "Detailed analysis and methodology.", icon: "brief", href: "/publications/iran-war-case-study" },
            { title: "All News", description: "Back to newsroom.", icon: "news", href: "/newsroom" }
          ]
        }
      ]
    },

    "/newsroom/dispatch/ami-congress-2026-press-release": {
      title: "Press Release: India's Only School at the 30th AMI Montessori Congress",
      metaDescription: "Blue Blocks Montessori School, Hyderabad, presents an official Design Thinking breakout session at the 30th International AMI Montessori Congress in Mérida, Mexico, alongside keynote speakers Dr. Gabor Maté and Dr. Adele Diamond. Blue Blocks adolescents announce SBB-2 — a second student-built satellite.",
      _cpt: "news-item",
      _status: "published",
      seo: {
        title: "India's Only School at the 30th AMI Montessori Congress | Press Release | Blue Blocks Micro Research Institute",
        canonical: "https://research.blueblocks.in/newsroom/dispatch/ami-congress-2026-press-release",
        description: "Blue Blocks Montessori School, Hyderabad, presents an official Design Thinking breakout session alongside keynote speakers Dr. Gabor Maté and Dr. Adele Diamond at the 30th International AMI Montessori Congress in Mérida, Mexico. Blue Blocks adolescents announce SBB-2 — a second student-built satellite.",
        keywords: "AMI Congress 2026, Association Montessori Internationale, Mérida Mexico, Blue Blocks Montessori School, Design Thinking workshop, SBB-2 satellite, SBB-1, Pavan Goyal, Munira Hussain, Dr. Gabor Maté, Dr. Adele Diamond, Dr. Angeline Lillard, Alain Tschudin, Montessori innovation, student-built satellite, IN-SPACe, PSLV-C62, Hyderabad",
        openGraph: {
          type: "article",
          title: "India's Only School at the 30th AMI Montessori Congress",
          description: "Blue Blocks Montessori School, Hyderabad, presents an official Design Thinking breakout session alongside keynote speakers Dr. Gabor Maté and Dr. Adele Diamond in Mérida, Mexico. Blue Blocks adolescents announce SBB-2 — a second student-built satellite.",
          image: { url: "https://research.blueblocks.in/images/og-home.jpg", width: 1200, height: 630 },
          article: {
            published_time: "2026-04-25T00:00:00+05:30",
            author: "Blue Blocks Micro Research Institute",
            section: "Press Release"
          }
        },
        twitter: {
          card: "summary_large_image",
          title: "India's Only School at the 30th AMI Montessori Congress",
          description: "Blue Blocks Montessori School presents an official Design Thinking breakout session in Mérida, Mexico, alongside keynote speakers Dr. Gabor Maté and Dr. Adele Diamond. Adolescents announce SBB-2.",
          image: "https://research.blueblocks.in/images/og-home.jpg"
        },
        citation: {
          citation_title: "Montessori and Innovation: A Design Thinking Workshop for a Changing World — Pre-registration of 30th AMI Congress Presentation",
          citation_authors: ["Pavan Goyal", "Munira Hussain"],
          citation_publication_date: "2026/04/25",
          citation_publisher: "Blue Blocks Micro Research Institute",
          citation_doi: "10.5281/zenodo.19752834"
        }
      },
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          "@id": "https://research.blueblocks.in/newsroom/dispatch/ami-congress-2026-press-release#article",
          "headline": "India's Only School at the 30th AMI Montessori Congress",
          "alternativeHeadline": "Blue Blocks Montessori School Presents at the 30th International AMI Congress in Mérida, Mexico",
          "datePublished": "2026-04-25T00:00:00+05:30",
          "dateModified": "2026-04-25T00:00:00+05:30",
          "author": [
            {
              "@type": "Person",
              "name": "Pavan Goyal",
              "jobTitle": "Co-founder & Principal Investigator",
              "affiliation": { "@type": "ResearchOrganization", "name": "Blue Blocks Micro Research Institute" },
              "sameAs": "https://orcid.org/0009-0009-8840-8505"
            },
            {
              "@type": "Person",
              "name": "Munira Hussain",
              "jobTitle": "Co-founder & AMI Auxiliary Trainer",
              "affiliation": { "@type": "ResearchOrganization", "name": "Blue Blocks Micro Research Institute" }
            }
          ],
          "publisher": {
            "@type": "ResearchOrganization",
            "@id": "https://research.blueblocks.in/#microresearch",
            "name": "Blue Blocks Micro Research Institute",
            "logo": { "@type": "ImageObject", "url": "https://research.blueblocks.in/logo.png" }
          },
          "image": { "@type": "ImageObject", "url": "https://research.blueblocks.in/images/og-home.jpg", "width": 1200, "height": 630 },
          "about": [
            { "@type": "Thing", "name": "AMI Congress 2026" },
            { "@type": "Thing", "name": "Montessori Education" },
            { "@type": "Thing", "name": "Design Thinking" },
            { "@type": "Thing", "name": "Student-Built Satellite" },
            { "@type": "Thing", "name": "SBB-2" }
          ],
          "description": "Blue Blocks Montessori School, Hyderabad, presents an official Design Thinking breakout session at the 30th International AMI Montessori Congress in Mérida, Mexico, alongside keynote speakers Dr. Gabor Maté and Dr. Adele Diamond. Blue Blocks adolescents announce SBB-2 — a second student-built satellite.",
          "url": "https://research.blueblocks.in/newsroom/dispatch/ami-congress-2026-press-release",
          "mainEntityOfPage": "https://research.blueblocks.in/newsroom/dispatch/ami-congress-2026-press-release",
          "isPartOf": { "@type": "WebSite", "@id": "https://research.blueblocks.in/#website" },
          "citation": {
            "@type": "ScholarlyArticle",
            "name": "Montessori and Innovation: A Design Thinking Workshop for a Changing World — Pre-registration of 30th AMI Congress Presentation",
            "url": "https://doi.org/10.5281/zenodo.19752834",
            "sameAs": "https://doi.org/10.5281/zenodo.19752834"
          }
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://research.blueblocks.in/" },
            { "@type": "ListItem", "position": 2, "name": "Newsroom", "item": "https://research.blueblocks.in/newsroom" },
            { "@type": "ListItem", "position": 3, "name": "AMI Congress 2026 Press Release", "item": "https://research.blueblocks.in/newsroom/dispatch/ami-congress-2026-press-release" }
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "Event",
          "name": "30th International AMI Montessori Congress 2026",
          "startDate": "2026-05-01",
          "endDate": "2026-05-04",
          "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
          "eventStatus": "https://schema.org/EventScheduled",
          "location": {
            "@type": "Place",
            "name": "Centro Internacional de Congresos",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Mérida",
              "addressRegion": "Yucatán",
              "addressCountry": "MX"
            }
          },
          "organizer": {
            "@type": "Organization",
            "name": "Association Montessori Internationale",
            "url": "https://montessori-ami.org"
          },
          "url": "https://montessoricongress2026.org/program"
        }
      ],
      sections: [
        {
          id: "pr-hero",
          type: "hero",
          variant: "stark",
          headline: "India's Only School at the 30th AMI Montessori Congress",
          subheadline: "Blue Blocks Montessori School, Hyderabad, presents an official Design Thinking breakout session alongside keynote speakers Dr. Gabor Maté and Dr. Adele Diamond in Mérida, Mexico. Blue Blocks adolescents also announce SBB-2 — a second student-built satellite after losing their first to the PSLV-C62 launch anomaly.",
          primaryCta: { label: "Read Full Press Release (NewsVoir)", href: "https://www.newsvoir.com/", external: true },
          secondaryCta: { label: "Back to Newsroom", href: "/newsroom" },
          image: { src: "/src/assets/banners/newsroom-press.jpg", alt: "AMI Congress 2026 press release", variant: "hero" }
        },
        {
          id: "pr-meta",
          type: "metaStrip",
          items: [
            { label: "Date", value: "April 25, 2026" },
            { label: "Type", value: "Press Release" },
            { label: "Event", value: "30th AMI Congress 2026" },
            { label: "Venue", value: "Mérida, Yucatán, Mexico" },
            { label: "DOI", value: "10.5281/zenodo.19752834", href: "https://doi.org/10.5281/zenodo.19752834", external: true }
          ]
        },
        {
          id: "pr-body",
          type: "textBlock",
          variant: "compact",
          header: "What This Is About",
          body: "On May 1–4, 2026, the Association Montessori Internationale — the organisation founded by Dr. Maria Montessori in 1929 — holds its 30th International Congress at the Centro Internacional de Congresos in Mérida, Yucatán, Mexico. The congress is the triennial global gathering of the Montessori community, bringing together educators, researchers, and practitioners from over 15 countries.\n\nBlue Blocks Montessori School, Hyderabad, is the only school from India presenting at this congress. Co-founders Pavan Goyal and Munira Hussain lead an official breakout session on May 3rd. Blue Blocks adolescents separately present their student-built satellite programme alongside adolescent presentations from Montessori schools worldwide.\n\nThe congress features keynote speakers including Dr. Gabor Maté (Order of Canada, bestselling author of *The Myth of Normal*), Dr. Adele Diamond (Canada Research Chair, University of British Columbia), Dr. Angeline Stoll Lillard (University of Virginia), and AMI President Professor Alain Tschudin (Stellenbosch University)."
        },
        {
          id: "pr-media-brief",
          type: "tableBlock",
          header: "Media Brief",
          columns: ["Item", "Detail"],
          rows: [
            ["Event", "30th International AMI Montessori Congress 2026"],
            ["Dates", "May 1–4, 2026"],
            ["Venue", "Centro Internacional de Congresos, Mérida, Yucatán, Mexico"],
            ["Organiser", "Association Montessori Internationale (est. 1929, Amsterdam)"],
            ["Blue Blocks session", "Montessori and Innovation: A Design Thinking Workshop for a Changing World"],
            ["Session date and time", "May 3, 2026 · 12:00–13:00 · Breakout Room"],
            ["Speakers", "Pavan Goyal & Munira Hussain, Co-founders, Blue Blocks Montessori School"],
            ["Adolescent presentation", "Blue Blocks adolescents share SBB-1 satellite story and announce SBB-2 alongside adolescent presentations from schools worldwide"],
            ["Notable congress speakers", "Dr. Gabor Maté · Dr. Adele Diamond · Dr. Angeline Lillard · Prof. Alain Tschudin (AMI President)"],
            ["India at this congress", "Two Indian voices — Anuradha Shankar (IPS officer/activist) and Blue Blocks Montessori School (the only school from India)"]
          ]
        },
        {
          id: "pr-key-numbers",
          type: "list",
          header: "Key Numbers",
          variant: "bullet",
          items: [
            "19 years of continuous operation (est. 2005)",
            "1,047 children in longitudinal data panel",
            "45,000+ parents engaged through workshops worldwide",
            "30+ open-access research publications across Zenodo, OSF, SSRN, Harvard Dataverse",
            "5 patents filed by school-age children in drone design",
            "1 CubeSat satellite payload authorised by IN-SPACe, Govt. of India (SBB-1)",
            "4 AMI diplomas held by founder Pavan Goyal — first person globally with this combination",
            "2 campuses — Gachibowli and Tellapur, Hyderabad",
            "0 other schools from India presenting at this congress"
          ]
        },
        {
          id: "pr-satellite-story",
          type: "textBlock",
          variant: "compact",
          header: "The Satellite Story",
          body: "SBB-1 was a student-designed and student-built CubeSat payload that received formal authorisation from IN-SPACe, the Department of Space, Government of India (Reference PMA/IN-SPACe/AUTH/2026/115). It was integrated with ISRO's PSLV-C62 launch vehicle and launched on January 12, 2026. The launch experienced an anomaly during the ascent phase, and the payload was lost — through no fault in the SBB-1 hardware, which had completed its full qualification campaign.\n\nBlue Blocks treated the loss as a documented research protocol, not a programme failure. Three independent observation streams tracked the experience: the engineering record, the learner-development record, and the programme-level record.\n\nAt the congress, Blue Blocks formally announces SBB-2 — the second-generation student-built satellite. SBB-2 incorporates three methodological improvements: an external academic partner from the concept phase, a pre-registered observation protocol with an external co-investigator, and an independently auditable data pipeline.\n\nThe student team has also filed five patents in drone design, dedicated to Dr. Maria Montessori on her 150th birthday."
        },
        {
          id: "pr-design-thinking",
          type: "textBlock",
          variant: "compact",
          header: "The Design Thinking Workshop",
          body: "The official breakout session — *Montessori and Innovation: A Design Thinking Workshop for a Changing World* — combines a presentation on how Montessori pedagogy builds innovative capacity across the developmental continuum with a hands-on workshop. Educators and students practise Design Thinking together as active collaborators, working through empathy, ideation, and prototyping in real time.\n\nThe session draws on Blue Blocks Micro Research Institute's 19-year longitudinal data panel of 1,047 Indian children — the only data panel of its kind in India tracking children across the full AMI Montessori continuum from birth to 18 years.\n\nThe pre-registration for this congress presentation is published open-access: DOI: [10.5281/zenodo.19752834](https://doi.org/10.5281/zenodo.19752834)"
        },
        {
          id: "pr-quotes",
          type: "highlightBox",
          variant: "callout",
          heading: "Quotes",
          body: "*\"Presenting in Mérida alongside researchers of the calibre of Adele Diamond and Gabor Maté is the result of 19 years of trusting children. Our students built a satellite. The data from 1,047 children over 19 years tells us why. That story belongs on the world stage.\"*\n— **Pavan Goyal**, Co-founder & Principal Investigator\n\n*\"These are not students presenting a school project. They are the engineers who designed, prototyped, tested, and built a satellite payload that received formal authorisation from the Government of India. They are presenting their own work, in their own words, to the world's foremost Montessori community.\"*\n— **Munira Hussain**, AMI Auxiliary Trainer & Co-founder"
        },
        {
          id: "pr-source-verification",
          type: "tableBlock",
          header: "Source Verification",
          columns: ["Source", "Link"],
          rows: [
            ["Congress programme (session confirmed)", "montessoricongress2026.org/program"],
            ["Congress speaker listing (bio confirmed)", "montessoricongress2026.org/speakers"],
            ["IN-SPACe authorisation (Zenodo)", "doi.org/10.5281/zenodo.18195108"],
            ["Pre-registration of presentation", "doi.org/10.5281/zenodo.19752834"],
            ["Research archive (Zenodo)", "zenodo.org/communities/blueblocksmicroresearchinstitute"],
            ["ORCID — Pavan Goyal", "orcid.org/0009-0009-8840-8505"]
          ]
        },
        {
          id: "pr-cta-bottom",
          type: "highlightBox",
          variant: "callout",
          heading: "Read Full Press Release",
          body: "The full press release is distributed via NewsVoir.\n\n[→ Read Full Press Release (NewsVoir)](https://www.newsvoir.com/)"
        },
        {
          id: "pr-related",
          type: "relatedCards",
          header: "Related Publications",
          cards: [
            { title: "SBB-1 to SBB-2: Open Announcement", description: "Formal announcement of the second-generation student-built satellite payload.", icon: "publication", href: "https://doi.org/10.5281/zenodo.19752834", external: true },
            { title: "IN-SPACe Authorisation Certificate", description: "Government of India space authorisation for SBB-1.", icon: "brief", href: "https://doi.org/10.5281/zenodo.18195108", external: true },
            { title: "AMI Congress Pre-registration", description: "Pre-registration of congress presentation.", icon: "publication", href: "https://doi.org/10.5281/zenodo.19752834", external: true },
            { title: "Iran Crisis Case Study", description: "Age-differentiated responses to geopolitical violence among school children.", icon: "publication", href: "/publications/iran-war-case-study" },
            { title: "Blue Blocks Micro Research Methodology", description: "Foundational methodology paper.", icon: "brief", href: "/methodology" }
          ]
        },
        {
          id: "pr-media-contact",
          type: "highlightBox",
          variant: "callout",
          heading: "Media Contact",
          body: "**Sruthi Matta**, Research Team Lead\nBlue Blocks Micro Research Institute\nEmail: press.research@blueblocks.in\n\nFor high-resolution images, additional photos, or to arrange interviews with the students or school leadership, contact the address above.\n\nBlue Blocks Montessori School · [blueblocks.in](https://blueblocks.in)\nBlue Blocks Micro Research Institute · [research.blueblocks.in](https://research.blueblocks.in)\nGachibowli & Tellapur · Hyderabad, Telangana 500032 · India"
        }
      ]
    },

    "/newsroom/coverage/nobel-peace-center": {
      title: "Nobel Peace Center Features Blue Blocks Student Innovation",
      metaDescription: "Blue Blocks student projects selected for exhibition at the Nobel Peace Center, Oslo, January 2026. Endorsed by MONISC and Norwegian UNESCO Commission.",
      seo: {
        title: "Nobel Peace Center Features Blue Blocks Student Innovation | Newsroom",
        canonical: "https://research.blueblocks.in/newsroom/coverage/nobel-peace-center",
        openGraph: {
          type: "article",
          url: "https://research.blueblocks.in/newsroom/coverage/nobel-peace-center",
          title: "Nobel Peace Center Features Student Innovation",
          description: "Blue Blocks student projects exhibited at the Nobel Peace Center, Oslo, January 2026."
        }
      },
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          headline: "Nobel Peace Center Features Blue Blocks Student Innovation",
          url: "https://research.blueblocks.in/newsroom/coverage/nobel-peace-center",
          datePublished: "2026-01-28",
          publisher: {
            "@type": "Organization",
            name: "Blue Blocks Micro Research Institute",
            url: "https://research.blueblocks.in",
            logo: { "@type": "ImageObject", url: "https://research.blueblocks.in/logo.png" }
          },
          author: { "@type": "Organization", name: "Blue Blocks Micro Research Institute" }
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://research.blueblocks.in/" },
            { "@type": "ListItem", position: 2, name: "Newsroom", item: "https://research.blueblocks.in/newsroom" },
            { "@type": "ListItem", position: 3, name: "Nobel Peace Center", item: "https://research.blueblocks.in/newsroom/coverage/nobel-peace-center" }
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
          primaryCta: { label: "View Oslo Proceedings", href: "/proceedings/oslo-2026" },
          secondaryCta: { label: "Back to Newsroom", href: "/newsroom" },
          image: { src: "/src/assets/placeholders/card-default.jpg", alt: "Nobel Peace Center", variant: "hero" }
        },
        {
          id: "coverage-meta",
          type: "metaStrip",
          items: [
            { label: "Date", value: "January 28, 2026" },
            { label: "Venue", value: "Nobel Peace Center, Oslo, Norway" },
            { label: "Event", value: "MONISC International Conference" },
            { label: "Designation", value: "Youth-Led Innovation" }
          ]
        },
        {
          id: "coverage-content",
          type: "textBlock",
          header: "International Recognition at Oslo",
          body: "On January 28, 2026, at the Nobel Peace Center in Oslo, Norway, Founder Pavan Goyal delivered the 'World Premiere' of the Blue Blocks Innovation Pedagogy (0–18). Selected by the MONISC Committee — supported by the Norwegian UNESCO Commission — as a 'global benchmark' for integrating space science with youth education, the presentation marked the first time an Indian school-based research institute was invited to present at this level.\n\nThe MONISC (Montessori International Scientific Congress) Committee is a biennial body that convenes Montessori educators, developmental scientists, and policy leaders from across the globe. The 2026 conference at the Nobel Peace Center was endorsed by the Norwegian UNESCO Commission, lending the proceedings formal recognition under the UNESCO framework for education, science, and culture."
        },
        {
          id: "coverage-designation",
          type: "textBlock",
          header: "What 'Youth-Led Innovation' Means Institutionally",
          body: "The 'Youth-Led Innovation' designation is not honorary. It signifies that the MONISC Committee, after reviewing the Institute's longitudinal dataset and student output portfolio, determined that the work produced by Blue Blocks students constitutes genuine innovation — not student projects, not simulations, but real engineering, real patents, and real scientific contribution.\n\nThis designation validates the Institute's central thesis: that children, when given authentic constraints and genuine responsibility, produce work of professional-grade significance. The Oslo exhibition was curated to demonstrate this claim with tangible evidence."
        },
        {
          id: "coverage-exhibited",
          type: "textBlock",
          header: "What Was Exhibited",
          body: "Student projects exhibited at the Nobel Peace Center included the SBB-1 CubeSat payload — a 1U thermal sensor designed by students aged 12–16, flight-qualified by ISRO-approved facilities, and authorized by IN-SPACe (Government of India) for integration aboard PSLV-C62. The patent portfolio — five utility patents filed by student inventors — was presented alongside the longitudinal dataset documenting 17 years of continuous observation across 1,045 children.\n\nThe exhibition positioned these outputs not as isolated achievements but as the natural consequence of a pedagogical architecture that treats children as capable research subjects and co-investigators from birth."
        },
        {
          id: "coverage-quote",
          type: "textBlock",
          variant: "muted",
          header: "",
          body: "\"This recognition is not ours — it belongs to 1,045 children observed over 17 years. Oslo confirmed what our classrooms already knew: children, when trusted completely, produce work of global significance.\" — Pavan Goyal, Founder & Principal Investigator"
        },
        {
          id: "coverage-status",
          type: "textBlock",
          header: "Proceedings Status",
          body: "Full proceedings are pending formal release by MONISC. This coverage page will be updated upon publication. In the interim, all institutional materials from the Oslo session — including the official invitation, presentation framework, and open-data release protocols — are preserved in the Blue Blocks Zenodo Community under open access."
        },
        {
          id: "coverage-related",
          type: "relatedCards",
          header: "Related",
          cards: [
            { title: "Oslo Proceedings", description: "Full archive.", icon: "archive", href: "/proceedings/oslo-2026" },
            { title: "SBB-1 Technical Brief", description: "Mission documentation.", icon: "brief", href: "/technical-briefs/sbb-1" },
            { title: "Patents", description: "Student IP portfolio.", icon: "patent", href: "/patents" },
            { title: "Pavan Goyal", description: "Presenter profile.", icon: "team", href: "/team/pavan-goyal" }
          ]
        }
      ]
    },

    "/newsroom/updates/iit-hyderabad-advisory": {
      title: "IIT Hyderabad Design Department Formalizes Advisory Role",
      metaDescription: "The Department of Design at IIT Hyderabad joins the Blue Blocks Micro Research Institute Research Council, providing technical validation for student prototyping and Space Lab design collaboration.",
      seo: {
        title: "IIT Hyderabad Advisory | Newsroom | Blue Blocks Micro Research Institute",
        canonical: "https://research.blueblocks.in/newsroom/updates/iit-hyderabad-advisory",
        openGraph: {
          type: "article",
          url: "https://research.blueblocks.in/newsroom/updates/iit-hyderabad-advisory",
          title: "IIT Hyderabad Design Dept. Formalizes Advisory Role",
          description: "Department of Design at IIT Hyderabad joins the Research Council for technical validation and prototyping."
        }
      },
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          headline: "IIT Hyderabad Design Department Formalizes Advisory Role",
          url: "https://research.blueblocks.in/newsroom/updates/iit-hyderabad-advisory",
          datePublished: "2025-10-15",
          publisher: {
            "@type": "Organization",
            name: "Blue Blocks Micro Research Institute",
            url: "https://research.blueblocks.in",
            logo: { "@type": "ImageObject", url: "https://research.blueblocks.in/logo.png" }
          },
          author: { "@type": "Organization", name: "Blue Blocks Micro Research Institute" }
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://research.blueblocks.in/" },
            { "@type": "ListItem", position: 2, name: "Newsroom", item: "https://research.blueblocks.in/newsroom" },
            { "@type": "ListItem", position: 3, name: "IIT Hyderabad Advisory", item: "https://research.blueblocks.in/newsroom/updates/iit-hyderabad-advisory" }
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
            { label: "Partner", value: "IIT Hyderabad — Dept. of Design" },
            { label: "Advisory Lead", value: "Prof. AVR Srikar" }
          ]
        },
        {
          id: "update-context",
          type: "textBlock",
          header: "Collaboration Context",
          body: "The Indian Institute of Technology Hyderabad (IITH) is one of India's premier engineering and research institutions. The Department of Design at IITH operates at the intersection of engineering, human-centred design, and advanced prototyping — making it a natural partner for the Blue Blocks Micro Research Institute's Innovation domain.\n\nThe advisory relationship was formalised following a series of consultations between IITH faculty and the Institute's leadership on how university-level design methodology could be integrated into the school's prototyping pipeline without compromising the Montessori principle of self-directed learning."
        },
        {
          id: "update-advisory",
          type: "textBlock",
          header: "What the Advisory Relationship Entails",
          body: "Faculty members from the Department of Design, led by Prof. AVR Srikar, have joined the Blue Blocks Micro Research Institute's Research Council in an advisory capacity. Their role is to provide independent technical validation for student prototyping projects — reviewing engineering assumptions, material selections, and fabrication approaches against university-level design standards.\n\nCritically, this is an advisory role, not a directive one. Consistent with the Institute's pedagogical architecture, IITH faculty provide domain expertise and critical feedback but do not direct the design process. Students retain full ownership of engineering decisions. The advisory function ensures that when student projects are presented externally — as patents, publications, or at conferences — they have been stress-tested against professional standards."
        },
        {
          id: "update-spacelab",
          type: "textBlock",
          header: "Space Lab Design Collaboration",
          body: "The most significant output of this partnership to date has been the collaborative review of the Space Lab design — the physical environment within Blue Blocks Montessori School where the SBB-1 CubeSat payload was engineered. IITH faculty provided consultation on workspace ergonomics, tool organisation, and safety protocols for adolescent-accessible electronics fabrication.\n\nThis collaboration informed several design iterations of the Space Lab layout, ensuring the environment met both industrial safety standards and Montessori requirements for child-scaled, self-directed workspaces. The resulting environment was documented as part of the SBB-1 mission dossier."
        },
        {
          id: "update-related",
          type: "relatedCards",
          header: "Related",
          cards: [
            { title: "Governance", description: "Advisory structure.", icon: "governance", href: "/governance" },
            { title: "SBB-1 Technical Brief", description: "Mission documentation.", icon: "brief", href: "/technical-briefs/sbb-1" },
            { title: "Research Team", description: "Our team.", icon: "team", href: "/team" },
            { title: "All News", description: "Back to newsroom.", icon: "news", href: "/newsroom" }
          ]
        }
      ]
    },

    "/newsroom/updates/utility-patent-4421": {
      title: "Utility Patent #4421 Filed: The Guardian Drone — Autonomous Health Monitoring System",
      metaDescription: "The Drone Research Centre has filed its fifth utility patent — the Guardian drone (Autonomous Health Monitoring System) — by student inventors aged 9–11 at Blue Blocks Montessori School.",
      seo: {
        title: "Utility Patent #4421 Filed | Newsroom | Blue Blocks Micro Research Institute",
        canonical: "https://research.blueblocks.in/newsroom/updates/utility-patent-4421",
        openGraph: {
          type: "article",
          url: "https://research.blueblocks.in/newsroom/updates/utility-patent-4421",
          title: "Utility Patent #4421 Filed: The Guardian Drone",
          description: "Fifth utility patent filed by student inventors at Blue Blocks Montessori School's Drone Research Centre."
        }
      },
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          headline: "Utility Patent #4421 Filed: The Guardian Drone",
          url: "https://research.blueblocks.in/newsroom/updates/utility-patent-4421",
          datePublished: "2025-09-02",
          publisher: {
            "@type": "Organization",
            name: "Blue Blocks Micro Research Institute",
            url: "https://research.blueblocks.in",
            logo: { "@type": "ImageObject", url: "https://research.blueblocks.in/logo.png" }
          },
          author: { "@type": "Organization", name: "Blue Blocks Micro Research Institute" }
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://research.blueblocks.in/" },
            { "@type": "ListItem", position: 2, name: "Newsroom", item: "https://research.blueblocks.in/newsroom" },
            { "@type": "ListItem", position: 3, name: "Patent #4421", item: "https://research.blueblocks.in/newsroom/updates/utility-patent-4421" }
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
            { label: "Lab", value: "Drone Research Centre" },
            { label: "Inventor Age Group", value: "9–11 years" }
          ]
        },
        {
          id: "update-patent",
          type: "textBlock",
          header: "About the Patent",
          body: "Patent Application #4421, titled 'Autonomous Health Monitoring System' (internally designated the 'Guardian' drone), is a remote epidemiological surveillance platform designed by students aged 9–11 at Blue Blocks Montessori School's Drone Research Centre. The system employs infrared thermography and video plethysmography to enable non-contact health screening in public spaces — a concept developed by students during post-pandemic classroom discussions on contactless healthcare delivery.\n\nThe patent was filed with the Indian Patent Office (IPO) under the guidance of the Blue Blocks Micro Research Institute. The student inventors conceptualised the system, designed the sensor integration architecture, and documented the use cases. Adult mentors provided regulatory guidance on patent filing requirements but did not contribute to the technical design."
        },
        {
          id: "update-significance",
          type: "textBlock",
          header: "Significance for the Longitudinal Panel",
          body: "This filing is significant within the Institute's Longitudinal Panel because it extends the documented 'Innovation Agency' window downward — demonstrating that children as young as nine can produce patent-grade intellectual property when given authentic engineering problems and self-directed scaffolding.\n\nThe previous four utility patents were filed by students aged 12–16. Patent #4421 is the first to emerge from the 9–11 cohort, suggesting that the innovation capability threshold may be earlier than the Institute's initial models predicted. This finding is now being integrated into the longitudinal dataset for further analysis.\n\nFive utility patents have now been filed to date by Blue Blocks Micro Research Institute students, all archived on Zenodo under open access with persistent DOI identifiers."
        },
        {
          id: "update-related",
          type: "relatedCards",
          header: "Related",
          cards: [
            { title: "Patent Details", description: "Guardian drone specifications.", icon: "patent", href: "/patents/autonomous-health-monitoring-system" },
            { title: "All Patents", description: "Full patent portfolio.", icon: "patent", href: "/patents" },
            { title: "Methodology", description: "Research framework.", icon: "methodology", href: "/methodology" },
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
        robots: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
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
          body: "Didactic Innovation Principles (DIP) is our proprietary framework for designing environments where innovation emerges naturally.\n\nDIP draws on:\n• Montessori prepared environment theory\n• Developmental psychology across four planes (0-6, 6-12, 12-18)\n• 17 years of iterative refinement based on embedded observation\n\nDIP is not a teaching method. It's an environment design philosophy — principles for creating spaces where children naturally explore, construct, fail, iterate, and innovate.",
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
          body: "1. We design a space/curriculum element based on developmental principles\n2. We observe how children actually use it\n3. We publish findings\n4. We refine the design based on observation\n5. We observe again\n\nThis has been running for 17 years. The DIP Labs and curriculum you see today are the result of hundreds of iterations — each informed by embedded observation.\n\nExample: Our construction collapse research revealed specific latency patterns. This informed how we position materials and when guides intervene (or don't). The space was adjusted. We observed the change. The findings were published. The loop continues.",
        },
        {
          id: "innov-context",
          type: "textBlock",
          heading: "Context That Others Lack",
          body: "When we publish findings on innovation development, the context is unique:\n• The space was designed by us — we know every design decision\n• The curriculum was designed by us — we know every pedagogical choice\n• The observation is embedded — zero observer effect\n• The refinement loop is continuous — we act on what we learn\n\nThis is Integrated Design-Research applied to innovation. It means our data has context that external researchers cannot provide.\n\nFor researchers:\nIf you use our innovation data, you're not just getting observations. You're getting observations from an environment we designed, using a curriculum we created, refined over 17 years. The design rationale is documented. The context is known.",
        },
        {
          id: "innov-canon",
          type: "highlightBox",
          heading: "The Full Story — Innovation Canon (Coming Soon)",
          body: "We are preparing a comprehensive Innovation Canon Paper documenting:\n• The complete design rationale for DIP\n• 17 years of environment iteration\n• The full 0-18 curriculum framework\n• How observation shaped every design decision\n\nThis will be published with a DOI and linked here — the definitive reference for understanding how our innovation research environment came to be.\n\nFor early access or collaboration inquiries: research@blueblocks.in",
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
              body: "Partner on innovation environment design. Learn from 17 years of iteration.",
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
          body: "• Observer qualifications\n• Inter-rater reliability (≥80%)\n• Recording format\n• Quality assurance\n\nDOI: 10.5281/zenodo.19087415",
          cta: { label: "View on Zenodo", href: "https://doi.org/10.5281/zenodo.19087415", external: true },
        },
        {
          id: "ours-mref",
          type: "textBlock",
          heading: "MREF v1.0",
          sectionName: "Micro Research Ethics Framework",
          body: "• Longitudinal Consent Architecture\n• Child protection\n• IRB-equivalent committee\n• Publication ethics\n\nDOI: 10.5281/zenodo.19047669",
          cta: { label: "View on Zenodo", href: "https://doi.org/10.5281/zenodo.19047669", external: true },
        },
        {
          id: "ours-cdcs",
          type: "textBlock",
          heading: "CDCS v1.0",
          sectionName: "Child Data Classification Standard",
          body: "• 4-tier classification\n• Handling requirements\n• Security standards\n• Retention/destruction\n\nDOI: 10.5281/zenodo.19202499",
          cta: { label: "View on Zenodo", href: "https://doi.org/10.5281/zenodo.19202499", external: true },
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
        robots: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
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
            { q: "How many children have you observed?", a: "1045 children since 2009." },
            { q: "How long have you been doing this?", a: "Since 2009 — 17 years of continuous observation." },
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

  // ═══════════════════════════════════════════════════════════════
  // PAGE: LIMITATIONS
  // ═══════════════════════════════════════════════════════════════
  "/methodology/limitations": {
    title: "Limitations | Blue Blocks Micro Research Institute",
    metaDescription: "What Micro Research cannot do — explicit boundaries, context limits, and bias mitigation.",
    seo: {
      title: "Limitations | Blue Blocks Micro Research Institute",
      description: "What Micro Research cannot do — explicit boundaries, context limits, and bias mitigation.",
      canonical: "https://research.blueblocks.in/methodology/limitations",
      openGraph: {
        type: "article",
        title: "Limitations | Blue Blocks Micro Research Institute",
        description: "What Micro Research cannot do — explicit boundaries, context limits, and bias mitigation.",
      },
    },
    sections: [
      {
        type: "hero",
        headline: "What Micro Research Cannot Do",
        subheadline: "LIMITATIONS",
        breadcrumb: [
          { label: "Home", path: "/" },
          { label: "Methodology", path: "/methodology" },
          { label: "Limitations" },
        ],
        image: {
          src: "/src/assets/banners/methodology-framework.webp",
          alt: "Limitations",
          variant: "hero",
        },
      },
      {
        type: "textBlock",
        header: "WHY WE PUBLISH LIMITATIONS",
        body: "Honest research acknowledges what it cannot do. We publish our limitations not to undermine our work, but to define its appropriate scope. If you understand what Micro Research is not, you can better understand what it is.",
      },
      {
        type: "numberedCards",
        header: "EXPLICIT LIMITATIONS",
        items: [
          {
            number: 1,
            title: "We Cannot Establish Causation",
            body: "Micro Research is observational. We document patterns, sequences, and associations. We do not establish causation in the experimental sense.\n\nWhen we say 'children who experienced X showed Y,' we are reporting an association, not a causal claim. Causal inference requires experimental design with controlled manipulation of variables. That is not what we do.\n\nOur longitudinal data can support causal hypotheses — but proving them requires different methods.",
          },
          {
            number: 2,
            title: "Our Findings Are Context-Specific",
            body: "All our data comes from one context: a Montessori school in Hyderabad, India, with specific demographic, cultural, and pedagogical characteristics.\n\nFindings may not generalize to:",
            bullets: [
              "Non-Montessori settings",
              "Different cultural contexts",
              "Different socioeconomic populations",
              "Different age ranges than those we study",
            ],
            subsections: [
              {
                label: "",
                items: ["Generalization requires replication. We publish our methods specifically to enable others to test our findings in their contexts."],
              },
            ],
          },
          {
            number: 3,
            title: "We Cannot Eliminate Bias",
            body: "Embedded observation has advantages (zero observer effect) but also risks (observer bias). Our observers know the children. They have expectations. They have theoretical commitments.\n\nWe mitigate bias through:",
            bullets: [
              "Rigorous training",
              "Inter-rater reliability testing",
              "Behavioral-only recording rules",
              "Multiple observers where feasible",
            ],
            subsections: [
              {
                label: "",
                items: ["But we do not claim bias elimination. We claim bias awareness and mitigation."],
              },
            ],
          },
          {
            number: 4,
            title: "We Do Not Replace Experimental Research",
            body: "Micro Research complements experimental research — it does not replace it. Different questions require different methods.",
            subsections: [
              {
                label: "Use experimental methods when you need:",
                items: [
                  "Causal proof",
                  "Variable isolation",
                  "Controlled conditions",
                ],
              },
              {
                label: "Use Micro Research when you need:",
                items: [
                  "Naturalistic behavior",
                  "Longitudinal continuity",
                  "Mechanism-level detail",
                  "Context-rich observation",
                ],
              },
            ],
          },
          {
            number: 5,
            title: "Implementation Cannot Be Fully Controlled",
            body: "While our cyclical model enables rapid implementation of findings, we cannot control implementation with laboratory precision. Guides interpret and adapt findings to their context.\n\nThis is a feature (practice-relevant implementation) but also a limitation (implementation varies). We document implementation approaches but do not claim experimental control over them.",
          },
          {
            number: 6,
            title: "Design-Research Entanglement",
            body: "In our Innovation domain, curriculum and environment were co-designed. We cannot fully separate 'curriculum effect' from 'space effect' — this is by design (they are meant to work together), but it is a methodological limitation.\n\nFindings apply to the integrated system, not necessarily to curriculum or space in isolation.",
          },
          {
            number: 7,
            title: "Sample Characteristics",
            body: "Our longitudinal panel, while large (1045 children), represents families who chose Montessori education and can afford private school fees in an Indian urban context. This is not a representative sample of all children.",
          },
          {
            number: 8,
            title: "Observer Training Variability",
            body: "While we enforce minimum reliability standards (≥80% inter-rater agreement), observer skill varies. Some observations may be more reliable than others. We document observer IDs to enable analysis of observer effects.",
          },
        ],
      },
      {
        type: "checklist",
        header: "HOW WE ADDRESS LIMITATIONS",
        items: [
          "Every publication includes a limitations section",
          "We invite replication in other contexts",
          "We publish null and negative results",
          "We maintain a Failure Archive for internal learning",
          "We welcome critique and respond publicly",
        ],
      },
      {
        type: "relatedCards",
        cards: [
          { title: "Methodology", body: "Our full research methodology.", action: { label: "Read More", href: "/methodology" } },
          { title: "Research Standards", body: "Our governance standards.", action: { label: "Read More", href: "/governance/standards" } },
          { title: "Tools for Researchers", body: "Downloadable templates and forms.", action: { label: "View Tools", href: "/methodology/tools" } },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAGE: TOOLS FOR RESEARCHERS
  // ═══════════════════════════════════════════════════════════════
  "/methodology/tools": {
    title: "Tools for Researchers | Blue Blocks Micro Research Institute",
    metaDescription: "Downloadable research tools — observation forms, consent templates, protocol templates. Open access for replication and adoption.",
    seo: {
      title: "Tools for Researchers | Blue Blocks Micro Research Institute",
      description: "Downloadable research tools — observation forms, consent templates, protocol templates. Open access for replication and adoption.",
      canonical: "https://research.blueblocks.in/methodology/tools",
      openGraph: {
        type: "article",
        title: "Tools for Researchers | Blue Blocks Micro Research Institute",
        description: "Downloadable research tools — observation forms, consent templates, protocol templates. Open access for replication and adoption.",
      },
    },
    sections: [
      {
        type: "hero",
        headline: "Tools for Researchers",
        subheadline: "Downloadable templates and forms. Free to use with attribution.",
        breadcrumb: [
          { label: "Home", path: "/" },
          { label: "Methodology", path: "/methodology" },
          { label: "Tools for Researchers" },
        ],
        image: {
          src: "/src/assets/banners/methodology-framework.webp",
          alt: "Tools for Researchers",
          variant: "hero",
        },
      },
      {
        type: "textBlock",
        header: "WHY WE SHARE TOOLS",
        body: "We want Micro Research to spread. Sharing tools removes friction for institutions wanting to replicate or adopt our methodology.\n\nAll tools are CC-BY-4.0: free to use, adapt, and build upon with attribution.",
      },
      {
        type: "toolCards",
        header: "OBSERVATION TOOLS",
        tools: [
          {
            title: "BEOP Observation Form",
            subtitle: "Standard observation recording form",
            body: "The template used by our Embedded Research Fellows for recording observations per BEOP protocol.",
            details: [
              "Format: PDF (printable), Excel (digital)",
              "Includes: Observer ID, Subject ID, Date/Time, Environment, Behavior fields",
            ],
            downloads: [
              { label: "Download PDF", href: "/downloads/beop-observation-form.pdf" },
              { label: "Download Excel", href: "/downloads/beop-observation-form.xlsx" },
            ],
          },
          {
            title: "Inter-rater Reliability Assessment",
            subtitle: "Tool for testing observer agreement",
            body: "Template for conducting reliability assessments between observers. BEOP requires ≥80% agreement.",
            downloads: [
              { label: "Download", href: "/downloads/reliability-assessment.xlsx" },
            ],
          },
        ],
      },
      {
        type: "toolCards",
        header: "ETHICS TOOLS",
        tools: [
          {
            title: "Consent Template",
            subtitle: "Model consent form for longitudinal observation research",
            body: "Template based on our Longitudinal Consent Architecture. Adapt for your context and jurisdiction.",
            details: [
              "Covers: Purpose, procedures, data use, rights, withdrawal",
            ],
            note: "This is a template. Consult legal/ethics advisors for your context.",
            downloads: [
              { label: "Download", href: "/downloads/consent-template.docx" },
            ],
          },
          {
            title: "Child Assent Template",
            subtitle: "Age-appropriate assent form",
            body: "Template for obtaining assent from children capable of understanding (typically 7+).",
            downloads: [
              { label: "Download", href: "/downloads/child-assent-template.docx" },
            ],
          },
        ],
      },
      {
        type: "toolCards",
        header: "RESEARCH DESIGN TOOLS",
        tools: [
          {
            title: "Four Gates Checklist",
            subtitle: "Pre-study quality check",
            body: "Simple checklist for verifying a study passes all four gates before data collection.",
            downloads: [
              { label: "Download", href: "/downloads/four-gates-checklist.pdf" },
            ],
          },
          {
            title: "Micro-Study Protocol Template",
            subtitle: "Standard format for study protocols",
            body: "Template for documenting: research question, method, observers, timeline, data handling.",
            downloads: [
              { label: "Download", href: "/downloads/protocol-template.docx" },
            ],
          },
        ],
      },
      {
        type: "toolCards",
        header: "PUBLICATION TOOLS",
        tools: [
          {
            title: "Micro-Study Report Template",
            subtitle: "Standard format for publications",
            body: "Template matching our publication format: question, method, findings, limitations.",
            downloads: [
              { label: "Download", href: "/downloads/report-template.docx" },
            ],
          },
          {
            title: "Citation Templates",
            subtitle: "Formats for citing Blue Blocks publications",
            body: "APA, BibTeX, and other formats for our core documents.",
            downloads: [
              { label: "Download", href: "/downloads/citation-templates.txt" },
            ],
          },
        ],
      },
      {
        type: "textBlock",
        header: "USAGE",
        body: "7.1 License\nAll tools are CC-BY-4.0: free to use, adapt, share with attribution.\n\n7.2 Attribution\nWhen using or adapting, please cite:\nAdapted from Blue Blocks Micro Research Institute. [Tool Name]. research.blueblocks.in\n\n7.3 Questions\nresearch@blueblocks.in (subject: Tools Question)",
      },
      {
        type: "textBlock",
        header: "HOW OBSERVATION DATA IS RECORDED",
        body: "The Blue Blocks Micro Research Institute employs a structured observation protocol called BEOP (Behavioural-Event Observation Protocol), specifically designed for embedded longitudinal research within active classroom environments. Embedded Research Fellows — trained teachers who serve simultaneously as observers — record behavioural events in real time using a standardised form that captures Observer ID, Subject ID (anonymised), timestamp, environmental context, and a narrative behavioural description.\n\nAll observation recording follows strict behavioural-only rules: observers document what a child does and says, not what the observer believes the child intends or feels. Interpretive language is prohibited in raw observation logs. This discipline ensures that the dataset remains analytically neutral and can support multiple theoretical frameworks during later analysis.\n\nInter-rater reliability is measured quarterly using paired observation sessions where two independent observers record the same behavioural event simultaneously. Agreement rates are calculated using Cohen's kappa coefficient, with a minimum threshold of κ ≥ 0.80 required for an observer to maintain active research fellow status. Observers who fall below this threshold undergo recalibration training before resuming data collection.\n\nData logging is primarily paper-based during observation sessions to minimise device interference in the classroom environment. Completed observation forms are digitised within 48 hours using a structured spreadsheet format that mirrors the paper form fields. The Institute deliberately avoids real-time digital logging devices (tablets, wearables) in classroom settings to preserve the naturalistic observation conditions that define the methodology.\n\nFor the Innovation domain — including the Space Lab and Drone Research Centre — supplementary data capture includes timestamped photographic documentation (anonymised), engineering log books maintained by students themselves, and periodic video recordings of prototyping sessions (with informed consent and assent). These materials serve as triangulation sources for behavioural observation data.\n\nAll instruments, templates, and reliability assessment tools are available for download above under CC-BY-4.0 licence, enabling external researchers to replicate the methodology in their own institutional contexts.",
      },
      {
        type: "relatedCards",
        cards: [
          { title: "Methodology", body: "Our full research methodology.", action: { label: "Read More", href: "/methodology" } },
          { title: "Limitations", body: "What Micro Research cannot do.", action: { label: "Read More", href: "/methodology/limitations" } },
          { title: "Open Data Access", body: "Request access to anonymized datasets.", action: { label: "Learn More", href: "/publications/data" } },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAGE: OPEN DATA ACCESS
  // ═══════════════════════════════════════════════════════════════
  "/publications/data": {
    title: "Open Data Access | Blue Blocks Micro Research Institute",
    metaDescription: "Request access to anonymized child development research datasets. Data access for qualified researchers with institutional affiliation.",
    seo: {
      title: "Open Data Access | Blue Blocks Micro Research Institute",
      description: "Request access to anonymized child development research datasets. Data access for qualified researchers with institutional affiliation.",
      robots: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
      openGraph: {
        type: "article",
        title: "Open Data Access | Blue Blocks Micro Research Institute",
        description: "Request access to anonymized child development research datasets.",
      },
    },
    sections: [
      {
        type: "hero",
        headline: "Open Data Access",
        subheadline: "We believe in open science. Qualified researchers can access our anonymized datasets.",
        breadcrumb: [
          { label: "Home", path: "/" },
          { label: "Publications", path: "/publications" },
          { label: "Open Data Access" },
        ],
        image: {
          src: "/src/assets/banners/publications-doi.webp",
          alt: "Open Data Access",
          variant: "hero",
        },
      },
      {
        type: "textBlock",
        header: "OUR COMMITMENT",
        body: "Research data should serve science, not sit locked away. We make data available while protecting children's privacy absolutely.",
      },
      {
        type: "tierCards",
        header: "DATA TIERS",
        tiers: [
          {
            label: "Tier 1: Open",
            title: "Public Access",
            subtitle: "No Request Required",
            body: "Published findings and aggregate statistics. Methodology documents.",
            note: "Access: Anyone, via Zenodo",
            cta: { label: "Browse publications", href: "/publications" },
          },
          {
            label: "Tier 2: Researcher",
            title: "Qualified Researchers",
            subtitle: "Request Required",
            body: "Anonymized individual-level observation records.",
            bullets: [
              "Institutional affiliation",
              "Ethics approval",
              "Data Use Agreement",
            ],
            note: "Response time: 10 business days",
            cta: { label: "Request Access", href: "#request" },
          },
          {
            label: "Tier 3: Internal",
            title: "Staff Only",
            subtitle: "Not Available Externally",
            body: "Coded records where we hold the key. Never shared outside Blue Blocks.",
          },
          {
            label: "Tier 4: Restricted",
            title: "PI Only",
            subtitle: "Never Shared",
            body: "Identity keys, consent forms, identifiable data. Never shared under any circumstances.",
          },
        ],
      },
      {
        type: "tableBlock",
        header: "DATA DICTIONARY PREVIEW",
        intro: "Example variables available in Tier 2 datasets:",
        headers: ["Variable", "Type", "Description"],
        rows: [
          ["subject_id", "String", "Anonymized identifier (e.g., CH-047)"],
          ["age_range", "Category", "Age band (e.g., 3-4, 4-5, 5-6)"],
          ["environment", "Category", "Setting (e.g., Children's House, Elementary)"],
          ["behavior_code", "Category", "Observed behavior type"],
          ["duration_seconds", "Integer", "Duration of observed behavior"],
          ["observer_id", "String", "Anonymized observer identifier"],
        ],
      },
      {
        type: "textBlock",
        variant: "muted",
        body: "Full data dictionary provided with approved access.",
      },
      {
        type: "timelineSteps",
        header: "REQUEST PROCESS",
        steps: [
          {
            title: "Check Eligibility",
            bullets: [
              "Affiliated with accredited research institution",
              "Ethics approval from your IRB/ethics committee",
              "Clear research purpose aligned with original consent",
            ],
          },
          {
            title: "Submit Request",
            body: "Email: research@blueblocks.in\nSubject: Data Access Request",
            bullets: [
              "Your name, institution, role",
              "Research purpose and methodology",
              "Specific data requested",
              "Ethics approval documentation",
              "Timeline for data use",
            ],
          },
          {
            title: "Review",
            body: "Ethics Advisory Committee reviews within 10 business days. We may request clarification.",
          },
          {
            title: "Data Use Agreement",
            body: "If approved, sign DUA covering:",
            bullets: [
              "Purpose limitation",
              "No re-identification attempts",
              "No redistribution",
              "Security requirements",
              "Destruction upon completion",
              "Publication review",
            ],
          },
          {
            title: "Secure Transfer",
            body: "Data transferred via secure channel upon signed agreement.",
          },
        ],
      },
      {
        type: "checklist",
        header: "ANONYMIZATION STANDARDS",
        body: "All Tier 2 data is anonymized per CDCS v1.0:",
        items: [
          "Names removed — replaced with codes",
          "Ages generalized — ranges, not exact dates",
          "Locations generalized — environment type only",
          "Unique identifiers removed",
          "Small subgroups suppressed (n<5)",
          "Re-identification is impossible from Tier 2 data.",
        ],
      },
      {
        type: "textBlock",
        header: "BI-DIRECTIONAL LINKING",
        body: "Our data architecture:\n\nZenodo hosts the data files (high authority repository)\nOur website provides context, documentation, request process\nZenodo metadata links to our website\nOur website links to Zenodo\n\nThis creates verified circular authority — CERN points to us, we point to CERN.",
      },
      {
        type: "anchorBlock",
        id: "request",
        header: "SUBMIT REQUEST",
        body: "Email: research@blueblocks.in\nSubject: Data Access Request\nInclude: Name, Institution, Role, Research Purpose, Specific Data, Ethics Status",
      },
      {
        type: "relatedCards",
        cards: [
          { title: "Publications", body: "Browse our published research.", action: { label: "View Publications", href: "/publications" } },
          { title: "Ethics & Privacy", body: "Our ethics framework.", action: { label: "Read More", href: "/governance/ethics" } },
          { title: "Tools for Researchers", body: "Downloadable templates and forms.", action: { label: "View Tools", href: "/methodology/tools" } },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAGE: GLOSSARY
  // ═══════════════════════════════════════════════════════════════
  "/publications/glossary": {
    title: "Glossary | Blue Blocks Micro Research Institute",
    metaDescription: "Key terms used across Blue Blocks Micro Research Institute publications and methodology.",
    seo: {
      title: "Glossary | Blue Blocks Micro Research Institute",
      description: "Key terms used across Blue Blocks Micro Research Institute publications and methodology.",
      robots: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
      openGraph: {
        type: "article",
        title: "Glossary | Blue Blocks Micro Research Institute",
        description: "Key terms used across Blue Blocks Micro Research Institute publications and methodology.",
      },
    },
    sections: [
      {
        type: "hero",
        headline: "Glossary",
        subheadline: "Key terms used across Blue Blocks Micro Research Institute",
        breadcrumb: [
          { label: "Home", path: "/" },
          { label: "Publications", path: "/publications" },
          { label: "Glossary" },
        ],
        image: {
          src: "/src/assets/banners/methodology-framework.webp",
          alt: "Glossary",
          variant: "hero",
        },
  },
  '/newsroom/dispatch/ami-congress-2026-press-release': {
    publishedDate: '2026-04-25',
    newsType: 'dispatch',
    author: 'Blue Blocks Micro Research Institute',
    doi: '10.5281/zenodo.19752834',
    zenodoUrl: 'https://doi.org/10.5281/zenodo.19752834',
    researchDomains: ['Montessori Education', 'Innovation', 'Aerospace'],
  },
      {
        type: "glossaryAccordion",
        header: "Terms & Definitions",
        items: [
          { term: "Activity Classification", definition: "System for categorizing observed behaviors: DA (Designed Activity), SE (Spontaneous Emergence), AM (Activity Modification), CT (Cross-Domain Transfer)." },
          { term: "Analytical Responsibility", definition: "The principle that data interpretation and theoretical framing remain the responsibility of adult researchers, even when children contribute to data generation. (DOI-001a)" },
          { term: "BEOP (Blue Blocks Embedded Observation Protocol)", definition: "Our standard for conducting and documenting behavioral observations, including the 4K Video Test for documentation quality." },
          { term: "Bounded Study", definition: "A research study with explicitly defined scope, duration, and limitations — the core unit of Micro Research." },
          { term: "CDCS (Classified Data and Consent Standards)", definition: "Our tiered system for data classification (Tiers 1-4) and consent management." },
          { term: "Co-authorship Criteria", definition: "Formal standards for when children qualify as co-authors of research publications based on documented contribution to data generation. (DOI-001a)" },
          { term: "Compound Evidence", definition: "The accumulated body of evidence built from many small studies linked through the longitudinal panel." },
          { term: "Conscience Check", definition: "Structured reflection on ethical implications before, during, and after innovation activities in DIEP Labs." },
          { term: "Continuity Advantage", definition: "The structural research capability enabled by continuous longitudinal access to the same children over many years." },
          { term: "Custodian Consciousness", definition: "The mindset of responsibility toward materials, environment, and community cultivated in DIEP Labs." },
          { term: "Cyclical Embedded Research", definition: "The observe-publish-implement-observe loop where research findings return immediately to practice." },
          { term: "DIEP (Didactic Innovation Environment Principles)", definition: "Framework for designing learning environments that support innovation emergence. Guides the design of DIEP Labs." },
          { term: "DIEP Labs", definition: "Four specialized environments for innovation research: Innovation Lab, Biomimicry Hive, Drone Lab, Space Lab." },
          { term: "DIP (Developmental Innovation Protocol)", definition: "The 18-year pedagogical curriculum integrating capability development with ethical sensibility across all developmental planes." },
          { term: "DOI-001", definition: "The foundational Micro Research methodology paper governing embedded observation OF children." },
          { term: "DOI-001a", definition: "The Participatory Micro Research methodology paper governing research WITH children as co-contributors." },
          { term: "Embedded Observer", definition: "A researcher who is already part of children's daily environment (typically an educator), whose presence does not alter natural behavior." },
          { term: "Epistemic Boundaries", definition: "The distinction between data generation (which children can contribute to) and data interpretation (which researchers perform). (DOI-001a)" },
          { term: "Five Gates", definition: "The five review checkpoints every micro-study must pass before publication: Scope, Ethics, Method, Evidence, Limitations." },
          { term: "4K Video Test", definition: "The documentation standard requiring observation records detailed enough that an independent researcher could reconstruct the behavioral sequence." },
          { term: "Integrated Design-Research", definition: "The construct describing how the same entity that designs learning environments also researches them, enabling capture of innovation emergence." },
          { term: "Longitudinal Panel", definition: "The 1045 children tracked continuously since 2009, forming the foundation for compound evidence." },
          { term: "Micro Research", definition: "Practitioner-led, longitudinal methodology for embedded, naturalistic observation studies. (DOI-001)" },
          { term: "Micro-Study", definition: "A single bounded research study following Micro Research methodology, published with a DOI." },
          { term: "MREF (Micro Research Ethics Framework)", definition: "Comprehensive ethics governance for research involving children in educational settings." },
          { term: "Participatory Micro Research", definition: "Methodology for research WITH children as co-contributors to STEM studies, with formal co-authorship criteria. (DOI-001a)" },
          { term: "Role Differentiation", definition: "The explicit separation of child contributor roles from adult researcher roles in participatory research. (DOI-001a)" },
          { term: "Tiered Data Classification", definition: "The four-tier system (Tier 1-4) for classifying research data by identifiability and access restrictions." },
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
  '/publications/iran-war-case-study': 'publication',
  '/publications/flipside-case-study': 'publication',
  '/publications/structured-debate-side-switch': 'publication',
  '/publications/resilience-workshop': 'publication',
  '/publications/citation-standards': 'page',
  '/governance': 'page',
  '/governance/ethics': 'governance-page',
  '/governance/standards': 'governance-page',
  '/governance/compliance': 'governance-page',
  '/governance/our-standards': 'governance-page',
  '/collaborate': 'page',
  '/newsroom': 'page',
  '/newsroom/dispatch/isro-payload-authorization': 'news-item',
  '/newsroom/dispatch/iran-crisis-study-press-release': 'news-item',
  '/newsroom/dispatch/ami-congress-2026-press-release': 'news-item',
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
  '/governance/team/vinay-shyam-donakanti': 'team-member',
  '/governance/team/sreedhar-reddy-boddu': 'team-member',
  '/governance/team/sruthi-matta': 'team-member',
  '/governance/team/sandhya-rao-m': 'team-member',
  '/governance/team/dr-sreemoyee-chakraborty': 'team-member',
  '/governance/team/dr-shobha-ediga': 'team-member',
  '/faq': 'page',
  '/sitemap-html': 'page',
};

// Structured fields extracted from existing section data for CMS mapping.
// These do NOT duplicate or replace section content — they normalize metadata.
const FIELDS_MAP = {
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
  '/publications/iran-war-case-study': {
    doi: '10.5281/zenodo.18996507',
    zenodoUrl: 'https://doi.org/10.5281/zenodo.18996507',
    publishedDate: '2026-03-10',
    authors: [
      { name: 'Chakraborty, S.' }, { name: 'Goyal, P.' }, { name: 'Matta, S.' },
      { name: 'Donakanti, V. S.' }, { name: 'Boddu, S. R.' },
    ],
    researchDomains: ['Education', 'Psychology', 'Geopolitics'],
    publicationStatus: 'Published',
    publicationType: 'Case Study',
  },
  '/publications/in-space-authorization-letter': {
    doi: '10.5281/zenodo.18195108',
    zenodoUrl: 'https://doi.org/10.5281/zenodo.18195108',
    publishedDate: '2026-01-12',
    authors: [{ name: 'Goyal, Pavan' }],
    researchDomains: ['Aerospace', 'Space Education', 'Regulatory'],
    publicationStatus: 'Published',
    publicationType: 'Regulatory Record',
  },
  '/publications/flipside-case-study': {
    doi: '10.5281/zenodo.19219065',
    zenodoUrl: 'https://doi.org/10.5281/zenodo.19219065',
    publishedDate: '2026-03-31',
    authors: [
      { name: 'Chakraborty, Sreemoyee' },
      { name: 'Bose, Poulomi' },
      { name: 'Khare, Kriti' },
    ],
    researchDomains: ['Adolescent Research', 'Neurodiversity', 'Participatory Research'],
    publicationStatus: 'Published',
    publicationType: 'Case Study',
  },
  '/publications/structured-debate-side-switch': {
    doi: '10.5281/zenodo.19480752',
    zenodoUrl: 'https://doi.org/10.5281/zenodo.19480752',
    publishedDate: '2026-04-09',
    authors: [
      { name: 'Chakraborty, Sreemoyee' },
      { name: 'Matta, Sruthi' },
    ],
    researchDomains: ['Adolescent Research', 'Civic Reasoning', 'Erdkinder', 'Structured Debate'],
    publicationStatus: 'Published',
    publicationType: 'Case Study',
  },
  '/publications/resilience-workshop': {
    doi: '10.5281/zenodo.19344032',
    zenodoUrl: 'https://doi.org/10.5281/zenodo.19344032',
    publishedDate: '2026-04-07',
    authors: [
      { name: 'Blue Blocks Micro Research Institute', type: 'organization' },
      { name: 'Chakraborty, Sreemoyee' },
      { name: 'Bose, Poulomi' },
      { name: 'Khare, Kaustav' },
    ],
    researchDomains: ['Adolescent Research', 'Resilience', 'Erdkinder', 'STEM Education'],
    publicationStatus: 'Published',
    publicationType: 'Case Study',
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
  '/newsroom/dispatch/iran-crisis-study-press-release': {
    publishedDate: '2026-03-16',
    newsType: 'dispatch',
    author: 'Blue Blocks Micro Research Institute',
    doi: '10.5281/zenodo.18996507',
    zenodoUrl: 'https://doi.org/10.5281/zenodo.18996507',
    researchDomains: ['Child Development', 'Peace Education', 'Geopolitical Reasoning'],
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
// and ensure all robots directives allow indexing
const processed = JSON.parse(
  JSON.stringify(siteContent)
    .replace(/https:\/\/siddheshv1\.lovable\.app/g, SITE_URL)
    .replace(/https:\/\/bb-researchv2\.vercel\.app/g, SITE_URL)
    .replace(/"robots"\s*:\s*"noindex[^"]*"/g, '"robots":"index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"')
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
