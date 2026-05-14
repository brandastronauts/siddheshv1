import { isAdmin } from '../access/isAdmin.js'

export const Webhooks = {
  slug: 'webhooks',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'event', 'enabled', 'updatedAt'],
    group: 'Operations',
    hidden: true,
  },
  access: {
    read: isAdmin,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'endpoint', type: 'text', required: true },
    {
      name: 'event',
      type: 'select',
      required: true,
      options: [
        { label: 'Content Published', value: 'content-published' },
        { label: 'Content Updated', value: 'content-updated' },
        { label: 'Content Deleted', value: 'content-deleted' },
      ],
    },
    { name: 'enabled', type: 'checkbox', defaultValue: true },
    { name: 'secretHint', type: 'text', admin: { description: 'Store real secrets in environment variables.' } },
  ],
}
