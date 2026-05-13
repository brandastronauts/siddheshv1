import { isAdmin, isEditor } from '../access/isAdmin.js'

export const Redirects = {
  slug: 'redirects',
  admin: {
    useAsTitle: 'from',
    defaultColumns: ['from', 'to', 'statusCode', 'updatedAt'],
    group: 'Operations',
  },
  access: {
    read: () => true,
    create: isEditor,
    update: isEditor,
    delete: isAdmin,
  },
  fields: [
    { name: 'from', type: 'text', required: true, unique: true, index: true },
    { name: 'to', type: 'text', required: true },
    {
      name: 'statusCode',
      type: 'select',
      defaultValue: '301',
      options: [
        { label: '301 Permanent', value: '301' },
        { label: '302 Temporary', value: '302' },
        { label: '307 Temporary', value: '307' },
        { label: '308 Permanent', value: '308' },
      ],
    },
  ],
}
