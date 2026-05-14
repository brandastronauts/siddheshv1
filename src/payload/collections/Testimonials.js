import { isEditor } from '../access/isAdmin.js'

export const Testimonials = {
  slug: 'testimonials',
  admin: {
    useAsTitle: 'quote',
    defaultColumns: ['attribution', 'context', 'updatedAt'],
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
    { name: 'quote', type: 'textarea', required: true },
    { name: 'attribution', type: 'text' },
    { name: 'role', type: 'text' },
    { name: 'context', type: 'text' },
    { name: 'image', type: 'upload', relationTo: 'media' },
  ],
}
