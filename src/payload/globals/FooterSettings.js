import { isAdmin, isEditor } from '../access/isAdmin.js'

const revalidateAfterChange = async () => {
  try {
    const { revalidatePath } = await import('next/cache')
    revalidatePath('/', 'layout')
  } catch {
    // No-op outside Next.js runtime
  }
}

const footerIconOptions = [
  { label: 'None', value: '' },
  { label: 'File / Publication', value: 'publication' },
  { label: 'Lightbulb / Patent', value: 'lightbulb' },
  { label: 'Book', value: 'bookOpen' },
  { label: 'Team / Users', value: 'team' },
  { label: 'Download', value: 'download' },
  { label: 'Archive', value: 'archive' },
  { label: 'Lock', value: 'lock' },
  { label: 'Scroll / Document', value: 'scroll' },
  { label: 'Map Pin / Sitemap', value: 'mapPin' },
  { label: 'Mail', value: 'mail' },
  { label: 'Globe', value: 'globe' },
  { label: 'Shield / Governance', value: 'shield' },
  { label: 'Database', value: 'database' },
  { label: 'Newspaper', value: 'newspaper' },
  { label: 'Calendar', value: 'calendar' },
  { label: 'Badge Check', value: 'badgeCheck' },
  { label: 'Award', value: 'award' },
]

export const FooterSettings = {
  slug: 'footer-settings',
  label: 'Footer Settings',
  access: {
    read: () => true,
    update: isEditor,
  },
  admin: {
    description: 'Manage social links, column headings, registries, legal links, newsletter copy, and copyright.',
    group: 'Site Configuration',
  },
  hooks: {
    afterChange: [revalidateAfterChange],
  },
  fields: [
    {
      type: 'collapsible',
      label: 'Column Headings',
      admin: {
        description: 'Section titles shown above each footer column.',
        initCollapsed: true,
      },
      fields: [
        {
          name: 'columnHeadings',
          type: 'group',
          label: false,
          fields: [
            { name: 'navigation', type: 'text', label: 'Navigation column heading', defaultValue: 'Navigation' },
            { name: 'more', type: 'text', label: 'More column heading', defaultValue: 'More' },
            { name: 'governance', type: 'text', label: 'Governance column heading', defaultValue: 'Governance' },
            { name: 'registries', type: 'text', label: 'Registries row heading', defaultValue: 'Registries & Archives' },
          ],
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Social Media Links',
      admin: { initCollapsed: false },
      fields: [
        {
          name: 'socialLinks',
          type: 'array',
          label: 'Social Links',
          admin: {
            description: 'Shown in the footer brand column. Drag to reorder.',
            initCollapsed: false,
          },
          fields: [
            {
              name: 'platform',
              type: 'select',
              required: true,
              label: 'Platform',
              options: [
                { label: 'Facebook', value: 'facebook' },
                { label: 'Instagram', value: 'instagram' },
                { label: 'YouTube', value: 'youtube' },
                { label: 'LinkedIn', value: 'linkedin' },
                { label: 'WhatsApp', value: 'whatsapp' },
                { label: 'Twitter / X', value: 'twitter' },
                { label: 'Other', value: 'other' },
              ],
            },
            {
              name: 'url',
              type: 'text',
              required: true,
              label: 'URL',
              admin: { placeholder: 'https://...' },
            },
            {
              name: 'label',
              type: 'text',
              required: true,
              label: 'Accessibility Label',
              admin: { placeholder: 'Blue Blocks on Facebook' },
            },
          ],
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Navigation Column Links',
      admin: {
        description: 'Links shown in the footer "Navigation" column. Leave empty to auto-use the first 4 header links.',
        initCollapsed: true,
      },
      fields: [
        {
          name: 'navigationLinks',
          type: 'array',
          label: 'Navigation Links',
          admin: {
            description: 'Enter the path of a header link to reuse it; the label is inherited unless overridden.',
            initCollapsed: false,
          },
          fields: [
            { name: 'path', type: 'text', required: true, label: 'Path / URL', admin: { placeholder: '/methodology' } },
            { name: 'labelOverride', type: 'text', label: 'Label Override (Optional)', admin: { description: 'Leave blank to inherit the header link label.' } },
            { name: 'external', type: 'checkbox', label: 'Open in new tab', defaultValue: false },
          ],
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'More Column Links',
      admin: {
        description: 'Links shown in the footer "More" column. Leave empty to auto-use the remaining header links.',
        initCollapsed: true,
      },
      fields: [
        {
          name: 'moreLinks',
          type: 'array',
          label: 'More Links',
          admin: {
            description: 'Enter the path of a header link to reuse it; the label is inherited unless overridden.',
            initCollapsed: false,
          },
          fields: [
            { name: 'path', type: 'text', required: true, label: 'Path / URL', admin: { placeholder: '/collaborate' } },
            { name: 'labelOverride', type: 'text', label: 'Label Override (Optional)', admin: { description: 'Leave blank to inherit the header link label.' } },
            { name: 'external', type: 'checkbox', label: 'Open in new tab', defaultValue: false },
          ],
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Governance Column',
      admin: { initCollapsed: false },
      fields: [
        {
          name: 'governanceLinks',
          type: 'array',
          label: 'Governance Links',
          admin: {
            description: 'Links in the Governance column on the right side of the footer.',
            initCollapsed: false,
          },
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
              label: 'Label',
            },
            {
              name: 'path',
              type: 'text',
              required: true,
              label: 'Path / URL',
              admin: { placeholder: '/governance/ethics' },
            },
            {
              name: 'external',
              type: 'checkbox',
              label: 'Open in new tab',
              defaultValue: false,
            },
          ],
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Utility Bar',
      admin: { initCollapsed: true },
      fields: [
        {
          name: 'utilityLinks',
          type: 'array',
          label: 'Utility Links',
          admin: {
            description: 'Small links shown below the navigation columns.',
          },
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
              label: 'Label',
            },
            {
              name: 'path',
              type: 'text',
              required: true,
              label: 'Path / URL',
            },
            {
              name: 'external',
              type: 'checkbox',
              label: 'Open in new tab',
              defaultValue: false,
            },
          ],
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Registries & Archives Row',
      admin: {
        description: 'Icon-link row shown above the newsletter section.',
        initCollapsed: true,
      },
      fields: [
        {
          name: 'registriesLinks',
          type: 'array',
          label: 'Registry Links',
          admin: {
            description: 'Drag to reorder. Each link can have an icon.',
            initCollapsed: false,
          },
          fields: [
            { name: 'label', type: 'text', required: true, label: 'Label' },
            { name: 'path', type: 'text', required: true, label: 'Path / URL', admin: { placeholder: '/publications' } },
            { name: 'icon', type: 'select', label: 'Icon', options: footerIconOptions },
            { name: 'external', type: 'checkbox', label: 'Open in new tab', defaultValue: false },
          ],
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Bottom-Bar Legal Links',
      admin: {
        description: 'Links shown next to the copyright (e.g. Privacy / Terms / Sitemap).',
        initCollapsed: true,
      },
      fields: [
        {
          name: 'legalLinks',
          type: 'array',
          label: 'Legal Links',
          admin: { initCollapsed: false },
          fields: [
            { name: 'label', type: 'text', required: true, label: 'Label' },
            { name: 'path', type: 'text', required: true, label: 'Path / URL' },
            { name: 'icon', type: 'select', label: 'Icon', options: footerIconOptions },
            { name: 'external', type: 'checkbox', label: 'Open in new tab', defaultValue: false },
          ],
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Newsletter Copy',
      admin: {
        description: 'All editable copy for the newsletter signup form.',
        initCollapsed: true,
      },
      fields: [
        {
          name: 'newsletter',
          type: 'group',
          label: false,
          fields: [
            { name: 'heading', type: 'text', label: 'Heading', defaultValue: 'Subscribe to our Newsletter' },
            { name: 'description', type: 'textarea', label: 'Description', defaultValue: 'Monthly digest, DOI releases, and protocol updates. Announced 30 days in advance.' },
            { name: 'emailPlaceholder', type: 'text', label: 'Email field placeholder', defaultValue: 'you@institution.edu' },
            { name: 'consentText', type: 'textarea', label: 'Consent checkbox label', defaultValue: 'I agree to receive institutional updates from Blue Blocks Micro Research Institute.' },
            { name: 'buttonLabel', type: 'text', label: 'Submit button label', defaultValue: 'Subscribe' },
            { name: 'submittingLabel', type: 'text', label: 'Button label while submitting', defaultValue: 'Submitting…' },
            { name: 'successMessage', type: 'text', label: 'Success message', defaultValue: 'Thank you. Your submission has been received successfully.' },
            { name: 'helperText', type: 'text', label: 'Helper text (next to button)', defaultValue: 'No spam. Unsubscribe anytime.' },
          ],
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'School Link & Copyright',
      admin: { initCollapsed: true },
      fields: [
        {
          name: 'schoolLink',
          type: 'text',
          label: 'School Website URL',
          defaultValue: 'https://www.blueblocks.in/',
          admin: { placeholder: 'https://www.blueblocks.in/' },
        },
        {
          name: 'schoolLinkLabel',
          type: 'text',
          label: 'School Website Button Label',
          defaultValue: 'Blue Blocks Montessori School',
        },
        {
          name: 'copyrightText',
          type: 'text',
          label: 'Copyright Override',
          admin: {
            description: 'Leave blank to use: © {year} {Site Name}. All rights reserved.',
            placeholder: 'Custom copyright text...',
          },
        },
      ],
    },
  ],
}
