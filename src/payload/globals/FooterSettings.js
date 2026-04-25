import { isAdmin } from '../access/isAdmin.js'

export const FooterSettings = {
  slug: 'footer-settings',
  label: 'Footer Settings',
  access: {
    read: () => true,
    update: isAdmin,
  },
  admin: {
    description: 'Manage footer social links, governance column, utility bar, and copyright.',
    group: 'Site Configuration',
  },
  fields: [
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
