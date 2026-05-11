// Lightweight core data for Header/Footer (critical rendering path)
// Extracted from siteContent.js to avoid loading 237KB on initial paint

export const brand = {
  siteName: "Blue Blocks Micro Research Institute",
  headerTagline: "Micro Research Institute",
  ethicsTagline: "Compiling the world's first longitudinal dataset on human innovation capacity from birth to age 18. 17 years completed; Year 18 ongoing.",
  contact: {
    research: "research@blueblocks.in",
    press: "press@blueblocks.in",
  },
  socials: {
    linkedin: "https://www.linkedin.com/company/blue-blocks-micro-research-institute/",
    twitter: "https://x.com/BlueBlocks_BB",
    email: "research@blueblocks.in",
  },
};

export const nav = [
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
];
