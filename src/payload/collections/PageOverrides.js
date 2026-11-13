import { isAdmin, isEditor, isReviewer, publishedOrEditor } from '../access/isAdmin.js'

const HREF_PATTERN = /^(\/(?!\/)[^\s]*|#[^\s]*|https?:\/\/[^\s]+|mailto:[^\s]+|tel:[^\s]+)$/
const PATHNAME_PATTERN = /^\/([A-Za-z0-9\-._~]+(\/[A-Za-z0-9\-._~]+)*)?$/

/** Accepts /internal-path, #anchor, https://…, mailto: and tel: (blank allowed). Verified against all existing links. */
const validateHref = (value) => {
  if (value === undefined || value === null || String(value).trim() === '') return true
  return HREF_PATTERN.test(String(value).trim()) || 'Use /path for an internal page, #anchor, https://… for an external link, mailto: or tel:.'
}

const SECTION_LABELS = {
  '': 'Home', 'the-institute': 'Institute', methodology: 'Methodology', publications: 'Publications',
  governance: 'Governance', collaborate: 'Collaborate', newsroom: 'Newsroom', team: 'Team', patents: 'Patents',
  books: 'Books', downloads: 'Downloads', presentations: 'Presentations & Proceedings', proceedings: 'Presentations & Proceedings',
  'technical-briefs': 'Technical Briefs', privacy: 'Legal', terms: 'Legal', faq: 'Help', contact: 'Contact',
  sitemap: 'Utility', 'staff-access': 'Utility',
}
const sectionOf = (pathname) => {
  const first = String(pathname || '/').split('/').filter(Boolean)[0] || ''
  return SECTION_LABELS[first] || first.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
}

/** Session-authenticated draft preview (no shared secret in the admin UI). */
const draftPreviewUrl = (pathname) => {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3001'
  const path = String(pathname || '/').replace(/\/+$/, '') || '/'
  return `${base}/api/draft?path=${encodeURIComponent(path)}`
}


const idField = {
  name: 'id',
  type: 'text',
  label: 'Section ID (Optional)',
  admin: {
    placeholder: 'home-hero',
    description: 'Used for in-page anchors. Leave blank unless needed.',
  },
}

const linkGroupFields = [
  {
    name: 'label',
    type: 'text',
    label: 'Button Label',
    admin: { placeholder: 'Read more' },
  },
  {
    name: 'href',
    type: 'text',
    label: 'Destination URL',
    validate: validateHref,
    admin: {
      placeholder: '/publications',
      description: 'Use /path for internal pages, or https:// for external links.',
    },
  },
  { name: 'external', type: 'checkbox', label: 'Open in new tab', defaultValue: false },
  { name: 'disabled', type: 'checkbox', label: 'Disable button', defaultValue: false },
  { name: 'download', type: 'checkbox', label: 'Treat as download', defaultValue: false },
]

const imageGroupFields = [
  { name: 'asset', type: 'upload', relationTo: 'media', label: 'Image from Media Library' },
  {
    name: 'src',
    type: 'text',
    label: 'External/Image URL (Optional)',
    admin: {
      placeholder: 'https://... or /images/example.jpg',
      description: 'Use this only when not uploading to Media Library.',
    },
  },
  {
    name: 'alt',
    type: 'text',
    label: 'Alt Text',
    admin: { placeholder: 'Describe the image for accessibility' },
  },
  { name: 'privacyBlur', type: 'checkbox', label: 'Blur image for privacy', defaultValue: false },
  {
    name: 'preserveContent',
    type: 'checkbox',
    label: 'Show original image (no crop, filter or overlay)',
    // No defaultValue on purpose: "never saved" (undefined) must stay distinguishable from "explicitly off" (false),
    // otherwise records created before this field existed would silently lose their source-image behaviour.

    admin: { description: 'Use for source-authoritative figures that must be shown exactly as supplied.' },
  },
  { name: 'caption', type: 'textarea', label: 'Caption (Optional)' },
]

const keyValueArrayField = {
  name: 'items',
  type: 'array',
  label: 'Items',
  admin: { description: 'Drag and drop to reorder.' },
  fields: [
    { name: 'label', type: 'text', label: 'Label', required: true },
    { name: 'value', type: 'text', label: 'Value', required: true },
    { name: 'href', type: 'text', label: 'Link URL (Optional)' },
    { name: 'external', type: 'checkbox', label: 'Open in new tab', defaultValue: false },
  ],
}

const textListField = (name, label, rowLabel = 'Item') => ({
  name,
  type: 'array',
  label,
  admin: { description: 'Add, remove, and reorder items.' },
  fields: [{ name: 'text', type: 'text', label: rowLabel, required: true }],
})

const sideColumnFields = [
  { name: 'heading', type: 'text', label: 'Heading' },
  { name: 'icon', type: 'text', label: 'Icon Key (Optional)' },
  { name: 'lead', type: 'textarea', label: 'Lead Text (Optional)' },
  {
    name: 'items',
    type: 'array',
    label: 'Points',
    fields: [
      { name: 'label', type: 'text', label: 'Label' },
      { name: 'text', type: 'textarea', label: 'Text' },
    ],
  },
  {
    name: 'sections',
    type: 'array',
    label: 'Content Sections',
    admin: { initCollapsed: true, description: 'Rich text sections (used by publication pages).' },
    fields: [
      { name: 'title', type: 'text', label: 'Section Title' },
      { name: 'body', type: 'textarea', label: 'Body Text' },
      {
        name: 'bullets',
        type: 'array',
        label: 'Bullet Points',
        fields: [{ name: 'text', type: 'text', label: 'Bullet' }],
      },
    ],
  },
  {
    name: 'panels',
    type: 'array',
    label: 'Side Panels',
    admin: { initCollapsed: true, description: 'Sidebar panels with links/citations (used by publication pages).' },
    fields: [
      { name: 'title', type: 'text', label: 'Panel Title' },
      {
        name: 'links',
        type: 'array',
        label: 'Links',
        fields: [
          { name: 'label', type: 'text', label: 'Label' },
          { name: 'href', type: 'text', label: 'URL' },
          { name: 'external', type: 'checkbox', label: 'Open in new tab', defaultValue: false },
          { name: 'download', type: 'checkbox', label: 'Download link', defaultValue: false },
        ],
      },
      { name: 'citation', type: 'textarea', label: 'Citation Text' },
      {
        name: 'profiles',
        type: 'array',
        label: 'Profile Links',
        fields: [
          { name: 'name', type: 'text', label: 'Name' },
          { name: 'role', type: 'text', label: 'Role' },
          { name: 'image', type: 'text', label: 'Image URL' },
          { name: 'href', type: 'text', label: 'Profile URL' },
        ],
      },
      {
        name: 'images',
        type: 'array',
        label: 'Gallery Images',
        fields: [
          { name: 'src', type: 'text', label: 'Image URL' },
          { name: 'alt', type: 'text', label: 'Alt Text' },
        ],
      },
    ],
  },
]

const heroBlock = {
  slug: 'hero',
  labels: { singular: 'Hero Banner', plural: 'Hero Banners' },
  fields: [
    idField,
    {
      name: 'variant',
      type: 'select',
      label: 'Style Variant',
      defaultValue: 'stark',
      options: [
        { label: 'Stark (Default)', value: 'stark' },
        { label: 'Precision', value: 'precision' },
        { label: 'Publication', value: 'publication' },
        { label: 'Archive', value: 'archive' },
      ],
    },
    { name: 'headline', type: 'text', required: true, label: 'Headline' },
    { name: 'subheadline', type: 'textarea', label: 'Subheadline' },
    {
      name: 'breadcrumb',
      type: 'array',
      label: 'Breadcrumb (Optional)',
      admin: { initCollapsed: true },
      fields: [
        { name: 'label', type: 'text', label: 'Label', required: true },
        { name: 'path', type: 'text', label: 'Path (Optional)' },
      ],
    },
    { name: 'primaryCta', type: 'group', label: 'Primary Button', fields: linkGroupFields },
    { name: 'secondaryCta', type: 'group', label: 'Secondary Button', fields: linkGroupFields },
    { name: 'image', type: 'group', label: 'Hero Image (Optional)', fields: imageGroupFields },
  ],
}

const tickerBlock = {
  slug: 'ticker',
  labels: { singular: 'Ticker', plural: 'Tickers' },
  fields: [
    idField,
    { name: 'text', type: 'text', required: true, label: 'Ticker Text' },
    textListField('items', 'Ticker Items (Optional)', 'Ticker Item'),
  ],
}

const grid3Block = {
  slug: 'grid3',
  labels: { singular: '3-Column Highlights', plural: '3-Column Highlights' },
  fields: [
    idField,
    { name: 'header', type: 'text', required: true, label: 'Heading' },
    { name: 'intro', type: 'textarea', label: 'Intro Text (Optional)' },
    {
      name: 'items',
      type: 'array',
      label: 'Highlight Cards',
      minRows: 1,
      admin: { description: 'Add, remove, and reorder cards.' },
      fields: [
        { name: 'title', type: 'text', label: 'Title', required: true },
        { name: 'icon', type: 'text', label: 'Icon Key (Optional)' },
        { name: 'body', type: 'textarea', label: 'Body' },
        { name: 'cta', type: 'group', label: 'Card Button (Optional)', fields: linkGroupFields },
      ],
    },
  ],
}

const cardsBlock = {
  slug: 'cards',
  labels: { singular: 'Card Grid', plural: 'Card Grids' },
  fields: [
    idField,
    { name: 'header', type: 'text', label: 'Heading', required: true },
    { name: 'intro', type: 'textarea', label: 'Intro Text (Optional)' },
    {
      name: 'variant',
      type: 'select',
      label: 'Layout Variant',
      defaultValue: 'blogGrid',
      options: [
        { label: 'Standard Grid', value: 'blogGrid' },
        { label: 'Icon Cards', value: 'iconCards' },
        { label: 'Profiles', value: 'profiles' },
        { label: 'News Grid', value: 'newsGrid' },
        { label: 'Press Room', value: 'pressRoom' },
      ],
    },
    {
      name: 'loadMore',
      type: 'group',
      label: 'Incremental Disclosure (Optional)',
      admin: { description: 'Show only the first N cards, with a button to reveal the rest. All cards stay in the page HTML for search engines.' },
      fields: [
        { name: 'batchSize', type: 'number', label: 'Cards shown per batch', min: 1, admin: { placeholder: '6' } },
        { name: 'label', type: 'text', label: 'Button label', admin: { placeholder: 'LOAD MORE' } },
      ],
    },
    {
      name: 'cards',
      type: 'array',
      label: 'Cards',
      minRows: 1,
      admin: { description: 'Add, remove, and reorder cards by drag-and-drop.' },
      fields: [
        { name: 'tag', type: 'text', label: 'Tag' },
        { name: 'headline', type: 'text', label: 'Headline', required: true },
        { name: 'authors', type: 'text', label: 'Authors (Optional)' },
        { name: 'meta', type: 'text', label: 'Meta Line' },
        { name: 'doi', type: 'text', label: 'DOI URL (Optional)', admin: { description: 'When set, the meta line links to this DOI.' } },
        { name: 'body', type: 'textarea', label: 'Body' },
        {
          name: 'verbatim',
          type: 'checkbox',
          label: 'Verbatim abstract (plain text, 4-line preview)',
          // No defaultValue on purpose (see image.preserveContent).

          admin: { description: 'Tick for source-authoritative abstracts: shown as plain text, clamped to a short preview in the listing. The full text lives on the landing page.' },
        },
        { name: 'icon', type: 'text', label: 'Icon Key (Optional)' },
        { name: 'image', type: 'group', label: 'Card Image (Optional)', fields: imageGroupFields },
        { name: 'action', type: 'group', label: 'Card Link', fields: linkGroupFields },
        {
          name: 'secondaryAction',
          type: 'group',
          label: 'Secondary Label (Optional)',
          fields: [
            { name: 'label', type: 'text', label: 'Label' },
            { name: 'disabled', type: 'checkbox', label: 'Disabled', defaultValue: true },
          ],
        },
      ],
    },
  ],
}

const listBlock = {
  slug: 'list',
  labels: { singular: 'List Section', plural: 'List Sections' },
  fields: [
    idField,
    { name: 'sectionName', type: 'text', label: 'Small Section Label (Optional)' },
    { name: 'header', type: 'text', label: 'Heading', required: true },
    { name: 'intro', type: 'textarea', label: 'Intro Text (Optional)' },
    {
      name: 'items',
      type: 'array',
      label: 'List Rows',
      minRows: 1,
      fields: [
        { name: 'title', type: 'text', label: 'Title', required: true },
        { name: 'meta', type: 'text', label: 'Meta (Optional)' },
        { name: 'description', type: 'textarea', label: 'Description' },
        { name: 'statusLine', type: 'text', label: 'Status Line (Optional)' },
      ],
    },
    { name: 'cta', type: 'group', label: 'Section Button (Optional)', fields: linkGroupFields },
  ],
}

const libraryCardsBlock = {
  slug: 'libraryCards',
  labels: { singular: 'Library Cards', plural: 'Library Cards' },
  fields: [
    idField,
    { name: 'sectionName', type: 'text', label: 'Small Section Label (Optional)' },
    { name: 'header', type: 'text', label: 'Heading', required: true },
    { name: 'intro', type: 'textarea', label: 'Intro Text (Optional)' },
    {
      name: 'cards',
      type: 'array',
      label: 'Library Cards',
      fields: [
        { name: 'status', type: 'text', label: 'Status (Optional)' },
        { name: 'title', type: 'text', label: 'Title', required: true },
        { name: 'body', type: 'textarea', label: 'Body' },
      ],
    },
    { name: 'cta', type: 'group', label: 'Section Button (Optional)', fields: linkGroupFields },
  ],
}

const accordionBlock = {
  slug: 'accordion',
  labels: { singular: 'FAQ / Accordion', plural: 'FAQ / Accordions' },
  fields: [
    idField,
    { name: 'header', type: 'text', label: 'Heading', required: true },
    { name: 'intro', type: 'textarea', label: 'Intro Text (Optional)' },
    {
      name: 'items',
      type: 'array',
      label: 'Questions',
      minRows: 1,
      admin: { description: 'Add, remove, and reorder FAQ rows.' },
      fields: [
        { name: 'q', type: 'text', label: 'Question', required: true },
        { name: 'a', type: 'textarea', label: 'Answer', required: true },
      ],
    },
    { name: 'footerCta', type: 'group', label: 'Footer Button (Optional)', fields: linkGroupFields },
  ],
}

const statsBarBlock = {
  slug: 'statsBar',
  labels: { singular: 'Stats Bar', plural: 'Stats Bars' },
  fields: [
    idField,
    { name: 'header', type: 'text', label: 'Heading (Optional)' },
    {
      name: 'stats',
      type: 'array',
      label: 'Stats',
      minRows: 1,
      fields: [
        { name: 'value', type: 'text', label: 'Value', required: true },
        { name: 'label', type: 'text', label: 'Label', required: true },
      ],
    },
  ],
}

const highlightBoxBlock = {
  slug: 'highlightBox',
  labels: { singular: 'Highlight Box', plural: 'Highlight Boxes' },
  fields: [
    idField,
    { name: 'heading', type: 'text', label: 'Heading (Optional)' },
    { name: 'title', type: 'text', label: 'Title (Optional)' },
    { name: 'body', type: 'textarea', label: 'Body' },
    textListField('bullets', 'Bullet Points (Optional)', 'Bullet Point'),
    {
      name: 'variant',
      type: 'select',
      label: 'Visual Variant',
      options: [
        { label: 'Default', value: 'default' },
        { label: 'Compact', value: 'compact' },
        { label: 'Accent', value: 'accent' },
        { label: 'Dark', value: 'dark' },
        { label: 'Callout', value: 'callout' },
      ],
    },
    { name: 'cta', type: 'group', label: 'Button (Optional)', fields: linkGroupFields },
  ],
}

const timelineBlock = {
  slug: 'timeline',
  labels: { singular: 'Timeline', plural: 'Timelines' },
  fields: [
    idField,
    { name: 'header', type: 'text', label: 'Heading', required: true },
    {
      name: 'items',
      type: 'array',
      label: 'Timeline Items',
      minRows: 1,
      fields: [
        { name: 'year', type: 'text', label: 'Year / Date' },
        { name: 'title', type: 'text', label: 'Title', required: true },
        { name: 'body', type: 'textarea', label: 'Body' },
      ],
    },
  ],
}

const comparisonTableBlock = {
  slug: 'comparisonTable',
  labels: { singular: 'Comparison Table', plural: 'Comparison Tables' },
  fields: [
    idField,
    { name: 'heading', type: 'text', label: 'Heading (Optional)' },
    { name: 'header', type: 'text', label: 'Heading' },
    { name: 'intro', type: 'textarea', label: 'Intro (Optional)' },
    textListField('columns', 'Column Names', 'Column Name'),
    textListField('headers', 'Header Row (Optional)', 'Header Cell'),
    {
      name: 'rows',
      type: 'array',
      label: 'Rows',
      fields: [
        { name: 'label', type: 'text', label: 'Row Label' },
        textListField('values', 'Values', 'Value'),
      ],
    },
  ],
}

const bentoBlock = {
  slug: 'bento',
  labels: { singular: 'Bento Grid', plural: 'Bento Grids' },
  fields: [
    idField,
    { name: 'header', type: 'text', label: 'Heading', required: true },
    {
      name: 'items',
      type: 'array',
      label: 'Bento Cards',
      minRows: 1,
      fields: [
        {
          name: 'size',
          type: 'select',
          label: 'Card Size',
          defaultValue: 'md',
          options: [
            { label: 'Small', value: 'sm' },
            { label: 'Medium', value: 'md' },
            { label: 'Large', value: 'lg' },
          ],
        },
        { name: 'tag', type: 'text', label: 'Tag (Optional)' },
        { name: 'headline', type: 'text', label: 'Headline', required: true },
        { name: 'body', type: 'textarea', label: 'Body' },
        { name: 'image', type: 'group', label: 'Card Image (Optional)', fields: imageGroupFields },
      ],
    },
  ],
}

const logoStripBlock = {
  slug: 'logoStrip',
  labels: { singular: 'Partner Logo Strip', plural: 'Partner Logo Strips' },
  fields: [
    idField,
    { name: 'header', type: 'text', label: 'Heading (Optional)' },
    { name: 'intro', type: 'textarea', label: 'Intro (Optional)' },
    {
      name: 'logos',
      type: 'array',
      label: 'Logos',
      minRows: 1,
      fields: [
        { name: 'name', type: 'text', label: 'Name', required: true },
        { name: 'asset', type: 'upload', relationTo: 'media', label: 'Logo from Media Library' },
        { name: 'src', type: 'text', label: 'Logo URL (Optional)' },
        { name: 'alt', type: 'text', label: 'Alt Text' },
        { name: 'role', type: 'text', label: 'Role (Optional)' },
        { name: 'collaboration', type: 'textarea', label: 'Collaboration Note (Optional)' },
      ],
    },
  ],
}

const buttonCardsBlock = {
  slug: 'buttonCards',
  labels: { singular: 'Button Card Grid', plural: 'Button Card Grids' },
  fields: [
    idField,
    { name: 'header', type: 'text', label: 'Heading', required: true },
    {
      name: 'cards',
      type: 'array',
      label: 'Cards',
      minRows: 1,
      fields: [
        { name: 'title', type: 'text', label: 'Title', required: true },
        { name: 'icon', type: 'text', label: 'Icon Key (Optional)' },
        { name: 'description', type: 'textarea', label: 'Description' },
        { name: 'image', type: 'text', label: 'Background Image URL (Optional)' },
        { name: 'button', type: 'group', label: 'Button', fields: linkGroupFields },
      ],
    },
    { name: 'footerNote', type: 'textarea', label: 'Footer Note (Optional)' },
  ],
}

const downloadListBlock = {
  slug: 'downloadList',
  labels: { singular: 'Download List', plural: 'Download Lists' },
  fields: [
    idField,
    { name: 'header', type: 'text', label: 'Heading', required: true },
    { name: 'intro', type: 'textarea', label: 'Intro Text (Optional)' },
    {
      name: 'items',
      type: 'array',
      label: 'Download Items',
      minRows: 1,
      fields: [
        { name: 'title', type: 'text', label: 'Title', required: true },
        { name: 'description', type: 'textarea', label: 'Description' },
        { name: 'format', type: 'text', label: 'Format (Optional)' },
        { name: 'size', type: 'text', label: 'Size (Optional)' },
        { name: 'href', type: 'text', label: 'File / URL', required: true },
      ],
    },
  ],
}

const textBlock = {
  slug: 'textBlock',
  labels: { singular: 'Text Section', plural: 'Text Sections' },
  fields: [
    idField,
    { name: 'sectionName', type: 'text', label: 'Small Section Label (Optional)' },
    { name: 'header', type: 'text', label: 'Heading' },
    { name: 'body', type: 'textarea', label: 'Body Text', required: true },
    {
      name: 'variant',
      type: 'select',
      label: 'Visual Variant',
      options: [
        { label: 'Default', value: 'default' },
        { label: 'Muted', value: 'muted' },
        { label: 'Compact', value: 'compact' },
      ],
    },
    { name: 'cta', type: 'group', label: 'Optional Button', fields: linkGroupFields },
  ],
}

const formBlock = {
  slug: 'form',
  labels: { singular: 'Form Section', plural: 'Form Sections' },
  fields: [
    idField,
    { name: 'header', type: 'text', label: 'Heading', required: true },
    { name: 'intro', type: 'textarea', label: 'Intro Text (Optional)' },
    { name: 'description', type: 'textarea', label: 'Description (Optional)' },
    {
      name: 'fields',
      type: 'array',
      label: 'Form Fields',
      fields: [
        { name: 'name', type: 'text', label: 'Field Key', required: true },
        { name: 'label', type: 'text', label: 'Label', required: true },
        {
          name: 'type',
          type: 'select',
          label: 'Input Type',
          defaultValue: 'text',
          options: [
            { label: 'Text', value: 'text' },
            { label: 'Email', value: 'email' },
            { label: 'Phone', value: 'tel' },
            { label: 'Textarea', value: 'textarea' },
            { label: 'Select', value: 'select' },
          ],
        },
        { name: 'placeholder', type: 'text', label: 'Placeholder (Optional)' },
        { name: 'required', type: 'checkbox', label: 'Required', defaultValue: false },
        textListField('options', 'Select Options (for select fields)', 'Option'),
      ],
    },
    { name: 'submitLabel', type: 'text', label: 'Submit Button Label (Optional)' },
    {
      name: 'submit',
      type: 'group',
      label: 'Submit Settings (Optional)',
      fields: [
        { name: 'to', type: 'text', label: 'Email To (Optional)' },
        { name: 'subject', type: 'text', label: 'Email Subject (Optional)' },
        { name: 'successMessage', type: 'textarea', label: 'Success Message (Optional)' },
      ],
    },
    { name: 'contactNote', type: 'group', label: 'Contact Link (Optional)', fields: linkGroupFields },
  ],
}

const featuredStoriesBlock = {
  slug: 'featuredStories',
  labels: { singular: 'Featured Stories', plural: 'Featured Stories' },
  fields: [
    idField,
    { name: 'header', type: 'text', label: 'Heading', required: true },
    {
      name: 'layout',
      type: 'select',
      label: 'Layout',
      options: [
        { label: 'Default', value: 'default' },
        { label: 'Large Main Story', value: 'mainLarge' },
        { label: 'Asymmetric', value: 'asymmetric' },
      ],
    },
    {
      name: 'main',
      type: 'group',
      label: 'Main Story',
      fields: [
        { name: 'tag', type: 'text', label: 'Tag (Optional)' },
        { name: 'headline', type: 'text', label: 'Headline', required: true },
        { name: 'excerpt', type: 'textarea', label: 'Excerpt' },
        { name: 'image', type: 'group', label: 'Image (Optional)', fields: imageGroupFields },
        { name: 'cta', type: 'group', label: 'Button (Optional)', fields: linkGroupFields },
      ],
    },
    {
      name: 'side',
      type: 'array',
      label: 'Side Stories',
      fields: [
        { name: 'tag', type: 'text', label: 'Tag (Optional)' },
        { name: 'headline', type: 'text', label: 'Headline', required: true },
        { name: 'excerpt', type: 'textarea', label: 'Excerpt' },
        { name: 'image', type: 'group', label: 'Image (Optional)', fields: imageGroupFields },
        { name: 'cta', type: 'group', label: 'Button (Optional)', fields: linkGroupFields },
      ],
    },
  ],
}

const pricingBlock = {
  slug: 'pricing',
  labels: { singular: 'Pricing Columns', plural: 'Pricing Columns' },
  fields: [
    idField,
    { name: 'header', type: 'text', label: 'Heading', required: true },
    {
      name: 'columns',
      type: 'array',
      label: 'Columns',
      minRows: 1,
      fields: [
        { name: 'title', type: 'text', label: 'Title', required: true },
        { name: 'sub', type: 'text', label: 'Sub-title (Optional)' },
        { name: 'body', type: 'textarea', label: 'Body' },
        { name: 'badge', type: 'text', label: 'Badge (Optional)' },
        { name: 'cta', type: 'group', label: 'Button (Optional)', fields: linkGroupFields },
      ],
    },
  ],
}

const galleryGridBlock = {
  slug: 'galleryGrid',
  labels: { singular: 'Gallery Grid', plural: 'Gallery Grids' },
  fields: [
    idField,
    { name: 'sectionName', type: 'text', label: 'Small Section Label (Optional)' },
    { name: 'header', type: 'text', label: 'Heading', required: true },
    { name: 'intro', type: 'textarea', label: 'Intro Text (Optional)' },
    { name: 'body', type: 'textarea', label: 'Body (Optional)' },
    { name: 'cta', type: 'group', label: 'Button (Optional)', fields: linkGroupFields },
    {
      name: 'items',
      type: 'array',
      label: 'Gallery Items',
      minRows: 1,
      fields: [
        { name: 'tag', type: 'text', label: 'Tag (Optional)' },
        { name: 'title', type: 'text', label: 'Title', required: true },
        { name: 'caption', type: 'textarea', label: 'Caption (Optional)' },
        { name: 'image', type: 'group', label: 'Image', fields: imageGroupFields },
      ],
    },
  ],
}

const sitemapBlock = {
  slug: 'sitemap',
  labels: { singular: 'Sitemap Section', plural: 'Sitemap Sections' },
  fields: [idField],
}

const metaStripBlock = {
  slug: 'metaStrip',
  labels: { singular: 'Info Strip', plural: 'Info Strips' },
  fields: [idField, keyValueArrayField],
}

const twoColumnBlock = {
  slug: 'twoColumn',
  labels: { singular: 'Two Column Section', plural: 'Two Column Sections' },
  fields: [
    idField,
    { name: 'header', type: 'text', label: 'Heading' },
    { name: 'intro', type: 'textarea', label: 'Intro (Optional)' },
    {
      name: 'variant',
      type: 'select',
      label: 'Variant',
      options: [
        { label: 'Default', value: 'default' },
        { label: 'Comparison', value: 'comparison' },
        { label: 'Cards', value: 'cards' },
      ],
    },
    { name: 'compact', type: 'checkbox', label: 'Compact Spacing', defaultValue: false },
    { name: 'left', type: 'group', label: 'Left Column', fields: sideColumnFields },
    { name: 'right', type: 'group', label: 'Right Column', fields: sideColumnFields },
    { name: 'footer', type: 'textarea', label: 'Footer Text (Optional)' },
    { name: 'cta', type: 'group', label: 'Button (Optional)', fields: linkGroupFields },
  ],
}

const relatedCardsBlock = {
  slug: 'relatedCards',
  labels: { singular: 'Related Links', plural: 'Related Links' },
  fields: [
    idField,
    { name: 'header', type: 'text', label: 'Heading', defaultValue: 'Related' },
    {
      name: 'cards',
      type: 'array',
      label: 'Related Items',
      fields: [
        { name: 'title', type: 'text', label: 'Title', required: true },
        { name: 'description', type: 'textarea', label: 'Description' },
        { name: 'icon', type: 'text', label: 'Icon Key (Optional)' },
        { name: 'href', type: 'text', label: 'Link', required: true },
      ],
    },
  ],
}

const patentGridBlock = {
  slug: 'patentGrid',
  labels: { singular: 'Patent Grid', plural: 'Patent Grids' },
  fields: [
    { name: 'header', type: 'text', label: 'Heading', required: true },
    { name: 'intro', type: 'textarea', label: 'Intro Text (Optional)' },
    { name: 'filterNote', type: 'textarea', label: 'Filter Note (Optional)' },
    {
      name: 'patents',
      type: 'array',
      label: 'Patents',
      fields: [
        { name: 'title', type: 'text', label: 'Title', required: true },
        { name: 'category', type: 'text', label: 'Category (Optional)' },
        { name: 'status', type: 'text', label: 'Status (Optional)' },
        { name: 'filingDate', type: 'text', label: 'Filing Date (Optional)' },
        { name: 'ageGroup', type: 'text', label: 'Age Group (Optional)' },
        { name: 'applicationNo', type: 'text', label: 'Application Number (Optional)' },
        { name: 'inventors', type: 'text', label: 'Inventors (Optional)' },
        { name: 'description', type: 'textarea', label: 'Description' },
        { name: 'href', type: 'text', label: 'Detail URL (Optional)' },
      ],
    },
  ],
}

const profileBlock = {
  slug: 'profile',
  labels: { singular: 'Profile', plural: 'Profiles' },
  fields: [
    idField,
    { name: 'name', type: 'text', label: 'Name', required: true },
    { name: 'role', type: 'text', label: 'Role' },
    { name: 'email', type: 'email', label: 'Email (Optional)' },
    { name: 'image', type: 'group', label: 'Profile Image (Optional)', fields: imageGroupFields },
    { name: 'bio', type: 'textarea', label: 'Bio' },
    {
      name: 'socials',
      type: 'array',
      label: 'Social Links (Optional)',
      fields: [
        { name: 'type', type: 'text', label: 'Type (e.g. linkedin)' },
        { name: 'label', type: 'text', label: 'Label' },
        { name: 'href', type: 'text', label: 'URL', required: true },
      ],
    },
  ],
}

const glossaryAccordionBlock = {
  slug: 'glossaryAccordion',
  labels: { singular: 'Glossary Accordion', plural: 'Glossary Accordions' },
  fields: [
    { name: 'header', type: 'text', label: 'Heading', required: true },
    {
      name: 'items',
      type: 'array',
      label: 'Terms',
      fields: [
        { name: 'term', type: 'text', label: 'Term', required: true },
        { name: 'definition', type: 'textarea', label: 'Definition', required: true },
      ],
    },
  ],
}

const faqGroupsBlock = {
  slug: 'faqGroups',
  labels: { singular: 'FAQ Page (Grouped)', plural: 'FAQ Pages (Grouped)' },
  fields: [
    idField,
    { name: 'heroTitle', type: 'text', label: 'Page Title', defaultValue: 'FAQ' },
    { name: 'heroSubtitle', type: 'textarea', label: 'Page Subtitle' },
    {
      name: 'groups',
      type: 'array',
      label: 'FAQ Groups',
      minRows: 1,
      admin: { description: 'Each group becomes a sidebar jump-link and a titled list of questions.' },
      fields: [
        { name: 'title', type: 'text', label: 'Group Title', required: true },
        {
          name: 'items',
          type: 'array',
          label: 'Questions',
          minRows: 1,
          fields: [
            { name: 'q', type: 'text', label: 'Question', required: true },
            { name: 'a', type: 'textarea', label: 'Answer', required: true },
          ],
        },
      ],
    },
  ],
}

const publishedPaperBlock = {
  slug: 'publishedPaper',
  labels: { singular: 'Published Paper / Dataset Body', plural: 'Published Papers / Dataset Bodies' },
  fields: [
    idField,
    {
      name: 'html',
      type: 'code',
      label: 'Article HTML (verbatim from source)',
      required: true,
      admin: {
        language: 'html',
        description: 'Verbatim conversion of the source DOCX/PDF. Do not reword; text must stay identical to the source document.',
      },
    },
    { name: 'authorsHtml', type: 'code', label: 'Authors Panel HTML (Optional)', admin: { language: 'html' } },
    { name: 'doi', type: 'text', label: 'DOI URL' },
    { name: 'panelTitle', type: 'text', label: 'Sidebar Panel Title', admin: { placeholder: 'Publication & Access' } },
    { name: 'doiCta', type: 'group', label: 'DOI / Access Button', fields: linkGroupFields },
    { name: 'backCta', type: 'group', label: 'Back Link', fields: linkGroupFields },
    { name: 'image', type: 'group', label: 'Cover Image (Optional)', fields: imageGroupFields },
  ],
}

const numberedCardsBlock = {
  slug: 'numberedCards',
  labels: { singular: 'Numbered Cards', plural: 'Numbered Cards' },
  fields: [
    idField,
    { name: 'header', type: 'text', label: 'Heading', required: true },
    {
      name: 'items',
      type: 'array',
      label: 'Cards',
      fields: [
        { name: 'number', type: 'text', label: 'Number', required: true },
        { name: 'title', type: 'text', label: 'Title', required: true },
        { name: 'body', type: 'textarea', label: 'Body' },
      ],
    },
  ],
}

const tierCardsBlock = {
  slug: 'tierCards',
  labels: { singular: 'Tier Cards', plural: 'Tier Cards' },
  fields: [
    { name: 'header', type: 'text', label: 'Heading', required: true },
    {
      name: 'tiers',
      type: 'array',
      label: 'Tiers',
      fields: [
        { name: 'label', type: 'text', label: 'Tier Label' },
        { name: 'title', type: 'text', label: 'Title', required: true },
        { name: 'subtitle', type: 'text', label: 'Subtitle (Optional)' },
        { name: 'body', type: 'textarea', label: 'Body' },
        textListField('bullets', 'Bullets (Optional)', 'Bullet'),
        { name: 'note', type: 'textarea', label: 'Note (Optional)' },
        { name: 'cta', type: 'group', label: 'Button (Optional)', fields: linkGroupFields },
      ],
    },
  ],
}

const toolCardsBlock = {
  slug: 'toolCards',
  labels: { singular: 'Tool Cards', plural: 'Tool Cards' },
  fields: [
    { name: 'header', type: 'text', label: 'Heading', required: true },
    {
      name: 'tools',
      type: 'array',
      label: 'Tools',
      fields: [
        { name: 'title', type: 'text', label: 'Title', required: true },
        { name: 'subtitle', type: 'text', label: 'Subtitle (Optional)' },
        { name: 'body', type: 'textarea', label: 'Body' },
        textListField('details', 'Details (Optional)', 'Detail'),
        {
          name: 'downloads',
          type: 'array',
          label: 'Downloads (Optional)',
          fields: [
            { name: 'label', type: 'text', label: 'Label', required: true },
            { name: 'href', type: 'text', label: 'URL', required: true },
          ],
        },
      ],
    },
  ],
}

const checklistBlock = {
  slug: 'checklist',
  labels: { singular: 'Checklist', plural: 'Checklists' },
  fields: [
    { name: 'header', type: 'text', label: 'Heading', required: true },
    { name: 'intro', type: 'textarea', label: 'Intro (Optional)' },
    { name: 'body', type: 'textarea', label: 'Body (Optional)' },
    textListField('items', 'Checklist Items', 'Item'),
  ],
}

const tableBlock = {
  slug: 'tableBlock',
  labels: { singular: 'Table', plural: 'Tables' },
  fields: [
    idField,
    { name: 'header', type: 'text', label: 'Heading', required: true },
    { name: 'intro', type: 'textarea', label: 'Intro (Optional)' },
    textListField('headers', 'Column Headers', 'Header'),
    {
      name: 'rows',
      type: 'array',
      label: 'Rows',
      fields: [textListField('cells', 'Cells', 'Cell')],
    },
  ],
}

const anchorBlock = {
  slug: 'anchorBlock',
  labels: { singular: 'Anchor Text Block', plural: 'Anchor Text Blocks' },
  fields: [
    idField,
    { name: 'header', type: 'text', label: 'Heading' },
    { name: 'body', type: 'textarea', label: 'Body' },
  ],
}

const timelineStepsBlock = {
  slug: 'timelineSteps',
  labels: { singular: 'Timeline Steps', plural: 'Timeline Steps' },
  fields: [
    { name: 'header', type: 'text', label: 'Heading', required: true },
    {
      name: 'steps',
      type: 'array',
      label: 'Steps',
      fields: [
        { name: 'title', type: 'text', label: 'Title', required: true },
        { name: 'body', type: 'textarea', label: 'Body' },
        textListField('bullets', 'Bullets (Optional)', 'Bullet'),
      ],
    },
  ],
}

const pillarsBlock = {
  slug: 'pillars',
  labels: { singular: 'Pillars', plural: 'Pillars' },
  fields: [
    { name: 'header', type: 'text', label: 'Heading', required: true },
    {
      name: 'items',
      type: 'array',
      label: 'Pillars',
      fields: [
        { name: 'title', type: 'text', label: 'Title', required: true },
        { name: 'icon', type: 'text', label: 'Icon Key (Optional)' },
        { name: 'body', type: 'textarea', label: 'Body' },
      ],
    },
  ],
}

const frameworkPapersBlock = {
  slug: 'frameworkPapers',
  labels: { singular: 'Framework Papers', plural: 'Framework Papers' },
  fields: [
    idField,
    { name: 'header', type: 'text', label: 'Heading', required: true },
    {
      name: 'papers',
      type: 'array',
      label: 'Papers',
      fields: [
        { name: 'title', type: 'text', label: 'Title', required: true },
        { name: 'doi', type: 'text', label: 'DOI (Optional)' },
        { name: 'link', type: 'text', label: 'Link (Optional)' },
        { name: 'body', type: 'textarea', label: 'Summary' },
      ],
    },
  ],
}

const dossierHeaderBlock = {
  slug: 'dossierHeader',
  labels: { singular: 'Dossier Header', plural: 'Dossier Headers' },
  fields: [
    idField,
    { name: 'title', type: 'text', label: 'Title', required: true },
    { name: 'subtitle', type: 'textarea', label: 'Subtitle (Optional)' },
    { name: 'classification', type: 'text', label: 'Classification (Optional)' },
    { ...keyValueArrayField, name: 'dataPanel', label: 'Mission Data Panel' },
  ],
}

const dossierSectionBlock = {
  slug: 'dossierSection',
  labels: { singular: 'Dossier Section', plural: 'Dossier Sections' },
  fields: [
    idField,
    { name: 'number', type: 'text', label: 'Section Number (Optional)' },
    { name: 'label', type: 'text', label: 'Section Label (Optional)' },
    { name: 'header', type: 'text', label: 'Heading' },
    { name: 'body', type: 'textarea', label: 'Body', required: true },
    {
      name: 'variant',
      type: 'select',
      label: 'Variant',
      options: [
        { label: 'Default', value: 'default' },
        { label: 'Abstract', value: 'abstract' },
      ],
    },
  ],
}

const dossierQuoteStripBlock = {
  slug: 'dossierQuoteStrip',
  labels: { singular: 'Dossier Quote Strip', plural: 'Dossier Quote Strips' },
  fields: [idField, { name: 'quote', type: 'textarea', label: 'Quote', required: true }],
}

const dossierSpecTableBlock = {
  slug: 'dossierSpecTable',
  labels: { singular: 'Dossier Spec Table', plural: 'Dossier Spec Tables' },
  fields: [
    idField,
    { name: 'number', type: 'text', label: 'Section Number (Optional)' },
    { name: 'label', type: 'text', label: 'Section Label (Optional)' },
    { name: 'header', type: 'text', label: 'Heading' },
    {
      name: 'rows',
      type: 'array',
      label: 'Rows',
      fields: [
        { name: 'label', type: 'text', label: 'Label', required: true },
        { name: 'value', type: 'text', label: 'Value', required: true },
      ],
    },
  ],
}

const dossierTimelineBlock = {
  slug: 'dossierTimeline',
  labels: { singular: 'Dossier Timeline', plural: 'Dossier Timelines' },
  fields: [
    idField,
    { name: 'number', type: 'text', label: 'Section Number (Optional)' },
    { name: 'label', type: 'text', label: 'Section Label (Optional)' },
    {
      name: 'events',
      type: 'array',
      label: 'Events',
      fields: [
        { name: 'date', type: 'text', label: 'Date', required: true },
        { name: 'description', type: 'textarea', label: 'Description', required: true },
      ],
    },
  ],
}

const dossierNoticeBlock = {
  slug: 'dossierNotice',
  labels: { singular: 'Dossier Notice', plural: 'Dossier Notices' },
  fields: [
    idField,
    { name: 'label', type: 'text', label: 'Label (Optional)' },
    { name: 'body', type: 'textarea', label: 'Body', required: true },
  ],
}

const dossierPrinciplesBlock = {
  slug: 'dossierPrinciples',
  labels: { singular: 'Dossier Principles', plural: 'Dossier Principles' },
  fields: [
    idField,
    { name: 'number', type: 'text', label: 'Section Number (Optional)' },
    { name: 'label', type: 'text', label: 'Section Label (Optional)' },
    { name: 'header', type: 'text', label: 'Heading' },
    { name: 'intro', type: 'textarea', label: 'Intro (Optional)' },
    {
      name: 'principles',
      type: 'array',
      label: 'Principles',
      fields: [
        { name: 'number', type: 'text', label: 'Number (Optional)' },
        { name: 'title', type: 'text', label: 'Title', required: true },
        { name: 'body', type: 'textarea', label: 'Body', required: true },
      ],
    },
    { name: 'conclusion', type: 'textarea', label: 'Conclusion (Optional)' },
  ],
}

const dossierGalleryBlock = {
  slug: 'dossierGallery',
  labels: { singular: 'Dossier Gallery', plural: 'Dossier Galleries' },
  fields: [
    idField,
    { name: 'number', type: 'text', label: 'Section Number (Optional)' },
    { name: 'label', type: 'text', label: 'Section Label (Optional)' },
    {
      name: 'images',
      type: 'array',
      label: 'Images',
      fields: [
        { name: 'asset', type: 'upload', relationTo: 'media', label: 'Image from Media Library' },
        { name: 'src', type: 'text', label: 'Image URL (Optional)' },
        { name: 'alt', type: 'text', label: 'Alt Text' },
        { name: 'caption', type: 'text', label: 'Caption (Optional)' },
      ],
    },
  ],
}

const dossierArchiveNoticeBlock = {
  slug: 'dossierArchiveNotice',
  labels: { singular: 'Dossier Archive Notice', plural: 'Dossier Archive Notices' },
  fields: [idField, { name: 'body', type: 'textarea', label: 'Body', required: true }],
}

const dossierRelatedBlock = {
  slug: 'dossierRelated',
  labels: { singular: 'Dossier Related Links', plural: 'Dossier Related Links' },
  fields: [
    idField,
    { name: 'header', type: 'text', label: 'Heading (Optional)' },
    {
      name: 'cards',
      type: 'array',
      label: 'Related Items',
      fields: [
        { name: 'title', type: 'text', label: 'Title', required: true },
        { name: 'description', type: 'textarea', label: 'Description (Optional)' },
        { name: 'icon', type: 'text', label: 'Icon Key (Optional)' },
        { name: 'href', type: 'text', label: 'Link', required: true },
      ],
    },
  ],
}

/**
 * Reference to a Shared Section (collection `shared-sections`). Edit the shared section once and every page
 * that references it updates. Mirrors Payload's documented "reusable content" pattern.
 */
const sharedSectionBlock = {
  slug: 'sharedSection',
  labels: { singular: 'Shared Section (reusable)', plural: 'Shared Sections (reusable)' },
  fields: [
    {
      name: 'section',
      type: 'relationship',
      relationTo: 'shared-sections',
      required: true,
      label: 'Shared Section',
      admin: { description: 'Pick a reusable section. Changes made to it appear on every page that uses it.' },
    },
  ],
}

/** The content block library (shared by Pages and Shared Sections). */
export const contentBlocks = [
  heroBlock,
  tickerBlock,
  grid3Block,
  cardsBlock,
  listBlock,
  libraryCardsBlock,
  accordionBlock,
  statsBarBlock,
  highlightBoxBlock,
  timelineBlock,
  comparisonTableBlock,
  bentoBlock,
  logoStripBlock,
  buttonCardsBlock,
  downloadListBlock,
  textBlock,
  formBlock,
  featuredStoriesBlock,
  pricingBlock,
  galleryGridBlock,
  sitemapBlock,
  metaStripBlock,
  twoColumnBlock,
  relatedCardsBlock,
  patentGridBlock,
  profileBlock,
  glossaryAccordionBlock,
  faqGroupsBlock,
  publishedPaperBlock,
  numberedCardsBlock,
  tierCardsBlock,
  toolCardsBlock,
  checklistBlock,
  tableBlock,
  anchorBlock,
  timelineStepsBlock,
  pillarsBlock,
  frameworkPapersBlock,
  dossierHeaderBlock,
  dossierSectionBlock,
  dossierQuoteStripBlock,
  dossierSpecTableBlock,
  dossierTimelineBlock,
  dossierNoticeBlock,
  dossierPrinciplesBlock,
  dossierGalleryBlock,
  dossierArchiveNoticeBlock,
  dossierRelatedBlock,
]

// Pages can use every content block plus references to shared sections.
const blocks = [...contentBlocks, sharedSectionBlock]

export const PageOverrides = {
  slug: 'page-overrides',
  labels: { singular: 'Page', plural: 'Pages' },
  access: {
    // Visitors may only read PUBLISHED pages. Without this filter `?draft=true` exposes unpublished drafts.
    read: publishedOrEditor,
    create: isEditor,
    update: isEditor,
    delete: isAdmin,
  },
  admin: {
    useAsTitle: 'internalName',
    defaultColumns: ['internalName', 'pathname', 'section', '_status', 'lastEditedBy', 'updatedAt'],
    // Search box matches page name, page title or URL path.
    listSearchableFields: ['internalName', 'pageTitle', 'pathname'],
    pagination: { defaultLimit: 100, limits: [25, 50, 100, 200] },
    // "Preview" opens the saved draft (editor session required; no shared secret exposed to the browser).
    preview: (doc) => draftPreviewUrl(doc?.pathname),
    description:
      'Edit any website page. Set the URL Path (e.g. /methodology/innovation), then add sections from the block library. If you leave the sections empty, the page falls back to its built-in design — perfect for incremental editing.',
    group: 'Website Content',
    livePreview: {
      // Previously this loaded the public URL, so Live Preview showed the PUBLISHED page, not the draft.
      url: ({ data }) => draftPreviewUrl(data?.pathname),
      breakpoints: [
        { label: 'Mobile', name: 'mobile', width: 375, height: 667 },
        { label: 'Tablet', name: 'tablet', width: 768, height: 1024 },
        { label: 'Desktop', name: 'desktop', width: 1440, height: 900 },
      ],
    },
  },
  versions: { drafts: true, maxPerDoc: 50 },
  hooks: {
    beforeChange: [
      // Attribution is server-controlled: whatever a client sends is overwritten.
      ({ data, req, operation, originalDoc }) => {
        const userId = req?.user?.id
        if (operation === 'create') data.createdBy = userId || undefined
        else data.createdBy = originalDoc?.createdBy ?? undefined
        if (userId) data.lastEditedBy = userId
        else if (originalDoc) data.lastEditedBy = originalDoc.lastEditedBy ?? undefined // scripts/system saves keep the last human editor
        return data
      },
    ],
    // Publishing must refresh the live site immediately (otherwise pages only update on the 60s ISR window).
    // Failures are logged and never block the save.
    afterChange: [
      async ({ doc }) => {
        if (doc?._status !== 'published' || typeof doc?.pathname !== 'string') return doc
        try {
          const { revalidatePath } = await import('next/cache')
          const targets = new Set([doc.pathname, '/sitemap.xml', '/sitemap-html'])
          const parent = doc.pathname.split('/').slice(0, -1).join('/')
          if (parent) targets.add(parent) // listing page, e.g. /publications for /publications/<slug>
          targets.forEach((t) => revalidatePath(t))
        } catch (error) {
          console.error('[page-overrides] revalidation after publish failed (page will refresh on the 60s ISR window):', error?.message || error)
        }
        return doc
      },
    ],
    beforeValidate: [
      ({ data }) => {
        if (data?.pathname && typeof data.pathname === 'string') {
          const normalized = data.pathname.trim().replace(/\/+$/, '')
          data.pathname = normalized.startsWith('/') ? normalized || '/' : `/${normalized}`
          if (data.pathname === '') data.pathname = '/'
        }
        return data
      },
    ],
  },
  fields: [
    {
      name: 'internalName',
      type: 'text',
      required: true,
      hooks: { beforeDuplicate: [({ value }) => `${value || 'Page'} (copy)`] },
      label: 'Page Name',
      admin: {
        placeholder: 'e.g. Publications page',
        description: 'Editor-friendly name shown only in CMS.',
      },
    },
    {
      name: 'pathname',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      // A duplicate must never collide with (or replace) the live page's URL.
      hooks: { beforeDuplicate: [({ value }) => `${value === '/' ? '' : value}/copy-${Date.now().toString(36)}`] },
      validate: (value) =>
        PATHNAME_PATTERN.test(String(value || '').trim().replace(/\/+$/, '') || '/') ||
        'Use a path like /publications/my-paper (letters, numbers, - _ . ~ only; no spaces, no trailing slash).',
      label: 'Page URL Path',
      admin: {
        placeholder: '/publications',
        description: 'Must exactly match the route used on the website.',
      },
    },
    {
      name: 'section',
      type: 'text',
      label: 'Website Section',
      virtual: true, // derived from the URL; never stored, always correct
      admin: { readOnly: true, position: 'sidebar', description: 'Derived from the URL path.' },
      hooks: { afterRead: [({ siblingData }) => sectionOf(siblingData?.pathname)] },
    },
    {
      name: 'createdBy',
      type: 'relationship',
      relationTo: 'users',
      label: 'Created By',
      access: { read: isReviewer },
      admin: { readOnly: true, position: 'sidebar' },
    },
    {
      name: 'lastEditedBy',
      type: 'relationship',
      relationTo: 'users',
      label: 'Last Edited By',
      access: { read: isReviewer },
      admin: { readOnly: true, position: 'sidebar' },
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Page Content',
          fields: [
            {
              name: 'sections',
              type: 'blocks',
              label: 'Page Sections',
              blocks,
              admin: {
                description:
                  'Add, remove, and reorder sections. Section types map directly to existing frontend components.',
              },
            },
            {
              name: 'stickyCta',
              type: 'group',
              label: 'Sticky Bottom Button (Optional)',
              admin: { initCollapsed: true },
              fields: [
                { name: 'label', type: 'text', label: 'Button Label' },
                { name: 'href', type: 'text', label: 'Button Link' },
                {
                  name: 'type',
                  type: 'select',
                  label: 'Button Type',
                  defaultValue: 'download',
                  options: [
                    { label: 'Download', value: 'download' },
                    { label: 'Link', value: 'link' },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'SEO & Metadata',
          fields: [
            {
              name: 'pageTitle',
              type: 'text',
              label: 'Page/Browser Title (Optional)',
              admin: { placeholder: 'Publications | Blue Blocks Micro Research Institute' },
            },
            {
              name: 'metaDescription',
              type: 'textarea',
              label: 'Meta Description (Optional)',
              admin: { description: 'Used when SEO description is not set.' },
            },
            {
              name: 'publishedAt',
              type: 'date',
              label: 'Published Date (Optional)',
              admin: {
                position: 'sidebar',
                description: 'Editorial reference date for this page override.',
                date: { pickerAppearance: 'dayAndTime' },
              },
            },
            {
              name: 'seo',
              type: 'group',
              label: 'SEO Settings',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  label: 'SEO Title',
                  admin: { placeholder: 'Search result title' },
                },
                {
                  name: 'description',
                  type: 'textarea',
                  label: 'SEO Description',
                },
                {
                  name: 'canonical',
                  type: 'text',
                  label: 'Canonical URL',
                  admin: { placeholder: 'https://research.blueblocks.in/publications' },
                },
                { name: 'keywords', type: 'text', label: 'Keywords (Optional)' },
                {
                  name: 'robots',
                  type: 'text',
                  label: 'Robots Directive (Optional)',
                  defaultValue:
                    'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1',
                },
                {
                  type: 'collapsible',
                  label: 'Open Graph',
                  admin: { initCollapsed: true },
                  fields: [
                    { name: 'ogTitle', type: 'text', label: 'Open Graph Title' },
                    { name: 'ogDescription', type: 'textarea', label: 'Open Graph Description' },
                    {
                      name: 'ogType',
                      type: 'select',
                      label: 'Open Graph Type',
                      defaultValue: 'website',
                      options: [
                        { label: 'Website', value: 'website' },
                        { label: 'Article', value: 'article' },
                      ],
                    },
                    {
                      name: 'ogImage',
                      type: 'upload',
                      relationTo: 'media',
                      label: 'Open Graph Image',
                    },
                    {
                      name: 'ogImageUrl',
                      type: 'text',
                      label: 'Open Graph Image URL (Optional)',
                    },
                    {
                      name: 'ogImageAlt',
                      type: 'text',
                      label: 'Open Graph Image Alt Text',
                    },
                  ],
                },
                {
                  type: 'collapsible',
                  label: 'Twitter',
                  admin: { initCollapsed: true },
                  fields: [
                    { name: 'twitterTitle', type: 'text', label: 'Twitter Title' },
                    { name: 'twitterDescription', type: 'textarea', label: 'Twitter Description' },
                    {
                      name: 'twitterImage',
                      type: 'upload',
                      relationTo: 'media',
                      label: 'Twitter Image',
                    },
                    {
                      name: 'twitterImageUrl',
                      type: 'text',
                      label: 'Twitter Image URL (Optional)',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Header & Footer',
          fields: [
            { name: 'hideHeader', type: 'checkbox', label: 'Hide the entire site header on this page' },
            { name: 'hideFooter', type: 'checkbox', label: 'Hide the entire site footer on this page' },
            { name: 'hideBreadcrumbs', type: 'checkbox', label: 'Hide breadcrumbs on this page' },
            {
              name: 'hideHeaderPaths',
              type: 'text',
              hasMany: true,
              label: 'Hide these links from the Header on this page',
              admin: {
                description:
                  'Enter the exact path of each Header link to hide on this page (e.g. /collaborate). Press Enter after each. Leave empty to show all header links.',
              },
            },
            {
              name: 'hideFooterPaths',
              type: 'text',
              hasMany: true,
              label: 'Hide these links from the Footer on this page',
              admin: {
                description:
                  'Enter the exact path of each Footer link to hide on this page. Press Enter after each. Leave empty to show all footer links.',
              },
            },
          ],
        },
        {
          label: 'Structured Data',
          fields: [
            {
              name: 'schemas',
              type: 'array',
              label: 'JSON-LD Schema Nodes',
              admin: {
                description:
                  'Advanced: add one JSON object per schema node. These are rendered as JSON-LD on this page.',
              },
              fields: [
                {
                  name: 'label',
                  type: 'text',
                  label: 'Label (Optional)',
                  admin: { placeholder: 'BreadcrumbList' },
                },
                {
                  name: 'schema',
                  type: 'json',
                  label: 'Schema JSON',
                  required: true,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
