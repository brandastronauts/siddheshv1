// Single source of truth for all site content
// All page copy and structure comes from this file

const siteContent = {
  brand: {
    siteName: "Institute for Ethical AI Research",
    ethicsTagline: "Advancing responsible AI through rigorous research and open science",
    contact: {
      research: "research@institute.example.org",
      press: "press@institute.example.org",
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
      meta: {
        description: "Institute for Ethical AI Research - Advancing responsible AI",
      },
      sections: [
        {
          type: "hero",
          heading: "Advancing Ethical AI Through Rigorous Research",
          subheading: "We pioneer transparent, accountable approaches to artificial intelligence that serve humanity's best interests.",
          cta: { label: "Explore Our Work", path: "/methodology" },
          secondaryCta: { label: "Collaborate With Us", path: "/collaborate" },
        },
        {
          type: "ticker",
          items: [
            "12 Active Research Programs",
            "47 Published Papers",
            "23 Partner Institutions",
            "8 Countries",
          ],
        },
        {
          type: "grid3",
          heading: "Our Focus Areas",
          items: [
            {
              title: "AI Safety",
              description: "Developing frameworks for safe and reliable AI systems that align with human values.",
              icon: "shield",
            },
            {
              title: "Transparency",
              description: "Creating methods for explainable AI that stakeholders can understand and trust.",
              icon: "eye",
            },
            {
              title: "Governance",
              description: "Informing policy through evidence-based research on AI regulation and ethics.",
              icon: "scale",
            },
          ],
        },
        {
          type: "statsBar",
          stats: [
            { value: "150+", label: "Researchers Worldwide" },
            { value: "47", label: "Peer-Reviewed Papers" },
            { value: "12", label: "Active Projects" },
            { value: "2018", label: "Founded" },
          ],
        },
        {
          type: "highlightBox",
          heading: "Latest Research",
          text: "Our new paper on interpretable machine learning frameworks has been accepted at NeurIPS 2024.",
          cta: { label: "Read the Paper", path: "/publications-open-science" },
        },
      ],
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
          recipientEmail: "collaborate@institute.example.org",
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
            { title: "Research Inquiries", description: "For questions about our research or collaboration opportunities.", email: "research@institute.example.org", icon: "mail" },
            { title: "Media & Press", description: "For media inquiries, interviews, and press materials.", email: "press@institute.example.org", icon: "newspaper" },
            { title: "General Inquiries", description: "For all other questions and feedback.", email: "info@institute.example.org", icon: "message" },
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
          recipientEmail: "contact@institute.example.org",
        },
      ],
    },
  },
};

export default siteContent;
