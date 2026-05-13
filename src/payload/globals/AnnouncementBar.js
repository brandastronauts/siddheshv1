import { isAdmin, isEditor } from '../access/isAdmin.js'

export const AnnouncementBar = {
  slug: 'announcement-bar',
  label: 'Announcement Bar',
  access: {
    read: () => true,
    update: isEditor,
  },
  admin: {
    group: 'Site Configuration',
    description: 'A dismissible banner shown at the top of every page. Disable it here when not in use.',
  },
  fields: [
    {
      name: 'enabled',
      type: 'checkbox',
      defaultValue: false,
      label: 'Show announcement bar',
    },
    {
      name: 'type',
      type: 'select',
      defaultValue: 'info',
      options: [
        { label: 'Info (blue)', value: 'info' },
        { label: 'Success (green)', value: 'success' },
        { label: 'Warning (amber)', value: 'warning' },
        { label: 'Urgent (red)', value: 'urgent' },
      ],
    },
    {
      name: 'message',
      type: 'text',
      required: true,
      admin: { placeholder: 'e.g. Registration for the AMI Congress 2026 is now open.' },
    },
    {
      name: 'linkLabel',
      type: 'text',
      admin: { placeholder: 'e.g. Learn more' },
    },
    {
      name: 'linkUrl',
      type: 'text',
      admin: { placeholder: 'e.g. /newsroom/dispatch/ami-congress-2026-press-release' },
    },
    {
      name: 'dismissible',
      type: 'checkbox',
      defaultValue: true,
      label: 'Allow visitors to dismiss',
    },
  ],
}
