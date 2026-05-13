import { isEditor } from '../access/isAdmin.js'
import { slugField } from '../fields/common.js'

export const Authors = {
  slug: 'authors',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'role', 'updatedAt'],
    group: 'Editorial Content',
  },
  access: {
    read: () => true,
    create: isEditor,
    update: isEditor,
    delete: isEditor,
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    slugField('name'),
    { name: 'role', type: 'text' },
    { name: 'email', type: 'email' },
    { name: 'avatar', type: 'upload', relationTo: 'media' },
    { name: 'bio', type: 'textarea' },
    {
      name: 'links',
      type: 'array',
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'url', type: 'text', required: true },
      ],
    },
  ],
}
