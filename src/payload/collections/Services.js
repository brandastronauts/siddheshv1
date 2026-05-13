import { isEditor } from '../access/isAdmin.js'
import { slugField, seoFields } from '../fields/common.js'

export const Services = {
  slug: 'services',
  versions: { drafts: true, maxPerDoc: 25 },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', '_status', 'updatedAt'],
    group: 'Reusable Content',
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
    { name: 'summary', type: 'textarea' },
    { name: 'icon', type: 'text' },
    { name: 'image', type: 'upload', relationTo: 'media' },
    { name: 'body', type: 'textarea' },
    ...seoFields,
  ],
}
