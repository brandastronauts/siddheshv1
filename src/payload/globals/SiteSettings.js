import { isAdmin, isEditor } from '../access/isAdmin.js'

const iconOptions = [
  { label: 'None', value: '' },
  { label: 'Home', value: 'home' },
  { label: 'Institute / Building', value: 'institute' },
  { label: 'Methodology / Flask', value: 'methodology' },
  { label: 'Publications / File', value: 'publication' },
  { label: 'Governance / Shield', value: 'governance' },
  { label: 'Collaborate / Handshake', value: 'collaborate' },
  { label: 'Newsroom / Megaphone', value: 'newsroom' },
  { label: 'Contact / Mail', value: 'contact' },
  { label: 'Lightbulb', value: 'lightbulb' },
  { label: 'Alert / Warning', value: 'alert' },
  { label: 'Download', value: 'download' },
  { label: 'Database', value: 'database' },
  { label: 'Book', value: 'bookOpen' },
  { label: 'Team / Users', value: 'team' },
  { label: 'Lock', value: 'lock' },
  { label: 'Scale', value: 'scale' },
  { label: 'Clipboard List', value: 'clipboardList' },
  { label: 'Badge Check', value: 'badgeCheck' },
  { label: 'Microscope', value: 'microscope' },
  { label: 'Globe', value: 'globe' },
  { label: 'Newspaper', value: 'newspaper' },
  { label: 'Archive', value: 'archive' },
]

export const SiteSettings = {
  slug: 'site-settings',
  label: 'Site Settings',
  access: {
    read: () => true,
    update: isEditor,
  },
  admin: {
    description: 'Global brand, navigation, and contact details used site-wide.',
    group: 'Site Configuration',
  },
  fields: [
    {
      type: 'collapsible',
      label: 'Brand',
      fields: [
        {
          name: 'siteName',
          type: 'text',
          label: 'Site Name',
          defaultValue: 'Blue Blocks Micro Research Institute',
        },
        {
          name: 'headerTagline',
          type: 'text',
          label: 'Header Tagline',
          defaultValue: 'Micro Research Institute',
        },
        {
          name: 'ethicsTagline',
          type: 'textarea',
          label: 'Footer Statement',
          admin: {
            description: 'Shown below the logo in the website footer.',
          },
        },
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
          label: 'Logo (Optional)',
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Contact Emails',
      fields: [
        {
          name: 'researchEmail',
          type: 'email',
          label: 'Research Email',
          defaultValue: 'research@blueblocks.in',
        },
        {
          name: 'pressEmail',
          type: 'email',
          label: 'Press Email',
          defaultValue: 'press@blueblocks.in',
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Research Social Links',
      admin: { initCollapsed: true },
      fields: [
        {
          name: 'socials',
          type: 'group',
          fields: [
            {
              name: 'linkedin',
              type: 'text',
              label: 'LinkedIn URL',
              defaultValue: 'https://www.linkedin.com/company/blue-blocks-micro-research-institute/',
            },
            {
              name: 'twitter',
              type: 'text',
              label: 'X / Twitter URL',
              defaultValue: 'https://x.com/BlueBlocks_BB',
            },
            {
              name: 'email',
              type: 'email',
              label: 'Social Email',
              defaultValue: 'research@blueblocks.in',
            },
          ],
        },
      ],
    },
    {
      name: 'navigation',
      type: 'array',
      label: 'Primary Navigation',
      admin: {
        description: 'Drag to reorder. Each item can have sub-menu children.',
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
          admin: {
            placeholder: '/publications',
            description: 'Use /path for internal links, or https://... for external.',
          },
        },
        {
          name: 'icon',
          type: 'select',
          label: 'Icon',
          options: iconOptions,
          admin: {
            description: 'Optional icon shown next to the label.',
          },
        },
        {
          name: 'external',
          type: 'checkbox',
          label: 'Open in new tab',
          defaultValue: false,
        },
        {
          name: 'children',
          type: 'array',
          label: 'Sub-menu Items',
          admin: {
            description: 'Add dropdown items under this navigation link.',
            initCollapsed: true,
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
              admin: {
                placeholder: '/publications/data',
              },
            },
            {
              name: 'icon',
              type: 'select',
              label: 'Icon',
              options: iconOptions,
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
  ],
}
