import { isEditor } from '../access/isAdmin.js'
import { slugField } from '../fields/common.js'

export const Categories = {
  slug: 'categories',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'type', 'updatedAt'],
    group: 'Editorial Content',
  },
  access: {
    read: () => true,
    create: isEditor,
    update: isEditor,
    delete: isEditor,
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    slugField('title'),
    {
      name: 'type',
      type: 'select',
      defaultValue: 'general',
      options: [
        { label: 'General', value: 'general' },
        { label: 'Publication', value: 'publication' },
        { label: 'Newsroom', value: 'newsroom' },
        { label: 'Research Domain', value: 'research-domain' },
      ],
    },
    { name: 'description', type: 'textarea' },
  ],
}
