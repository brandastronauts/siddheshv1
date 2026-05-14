import { isEditor } from '../access/isAdmin.js'
import { slugField, seoFields } from '../fields/common.js'

export const Products = {
  slug: 'products',
  versions: { drafts: true, maxPerDoc: 25 },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'status', '_status', 'updatedAt'],
    group: 'Reusable Content',
    hidden: true,
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
      name: 'status',
      type: 'select',
      defaultValue: 'concept',
      options: [
        { label: 'Concept', value: 'concept' },
        { label: 'In Research', value: 'research' },
        { label: 'Filed Patent', value: 'patent-filed' },
        { label: 'Archived', value: 'archived' },
      ],
    },
    { name: 'summary', type: 'textarea' },
    { name: 'image', type: 'upload', relationTo: 'media' },
    { name: 'body', type: 'textarea' },
    {
      name: 'relatedDownloads',
      type: 'array',
      fields: [
        { name: 'label', type: 'text' },
        { name: 'url', type: 'text' },
      ],
    },
    ...seoFields,
  ],
}
