import { isAdmin, isEditor } from '../access/isAdmin.js'

export const SearchIndex = {
  slug: 'search-index',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'pathname', 'sourceCollection', 'updatedAt'],
    group: 'Operations',
    hidden: true,
    description: 'Prepared denormalized records for future search indexing.',
  },
  access: {
    read: () => true,
    create: isEditor,
    update: isEditor,
    delete: isAdmin,
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'pathname', type: 'text', required: true, index: true },
    { name: 'excerpt', type: 'textarea' },
    { name: 'sourceCollection', type: 'text' },
    { name: 'sourceId', type: 'text' },
    { name: 'keywords', type: 'array', fields: [{ name: 'value', type: 'text' }] },
  ],
}
