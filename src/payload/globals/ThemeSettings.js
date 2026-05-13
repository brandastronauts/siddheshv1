import { isAdmin } from '../access/isAdmin.js'

export const ThemeSettings = {
  slug: 'theme-settings',
  label: 'Theme Settings',
  access: {
    read: () => true,
    update: isAdmin,
  },
  admin: {
    group: 'Site Configuration',
    description: 'Editable design tokens for future theme controls. Current CSS remains the source of truth.',
  },
  fields: [
    {
      name: 'colors',
      type: 'group',
      fields: [
        { name: 'primaryNavy', type: 'text', defaultValue: 'hsl(var(--primary-navy))' },
        { name: 'accentCyan', type: 'text', defaultValue: 'hsl(var(--accent-cyan))' },
        { name: 'secondaryBlue', type: 'text', defaultValue: 'hsl(var(--secondary-blue))' },
        { name: 'surface', type: 'text', defaultValue: 'hsl(var(--surface))' },
      ],
    },
    {
      name: 'typography',
      type: 'group',
      fields: [
        { name: 'sans', type: 'text', defaultValue: 'Manrope' },
        { name: 'serif', type: 'text', defaultValue: 'Fraunces' },
      ],
    },
  ],
}
