import { isAdmin } from '../access/isAdmin.js'

export const SiteSettings = {
  slug: 'site-settings',
  label: 'Site Settings',
  access: {
    read: () => true,
    update: isAdmin,
  },
  admin: {
    description: 'Global brand and navigation details used site-wide.',
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
            description: 'Shown in the website footer.',
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
      name: 'navigation',
      type: 'array',
      label: 'Primary Navigation',
      admin: {
        description: 'Use drag and drop to reorder navigation items.',
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
          label: 'Path',
          admin: {
            placeholder: '/publications',
          },
        },
      ],
    },
  ],
}
