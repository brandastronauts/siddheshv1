const SECTION_LABELS = {
  '': 'Home',
  'the-institute': 'Institute',
  methodology: 'Methodology',
  publications: 'Publications',
  governance: 'Governance',
  collaborate: 'Collaborate',
  newsroom: 'Newsroom',
  team: 'Team',
  patents: 'Patents',
  books: 'Books',
  downloads: 'Downloads',
  presentations: 'Presentations & Proceedings',
  proceedings: 'Presentations & Proceedings',
  'technical-briefs': 'Technical Briefs',
  privacy: 'Legal',
  terms: 'Legal',
  faq: 'Help',
  contact: 'Contact',
  sitemap: 'Utility',
  'staff-access': 'Utility',
}

export function sectionOf(pathname) {
  const first = String(pathname || '/').split('/').filter(Boolean)[0] || ''
  return SECTION_LABELS[first] || first.replace(/-/g, ' ').replace(/\b\w/g, (character) => character.toUpperCase())
}
