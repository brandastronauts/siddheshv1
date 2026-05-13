import { isEditor } from '../access/isAdmin.js'
import { slugField, seoFields } from '../fields/common.js'

export const Posts = {
  slug: 'posts',
  versions: {
    drafts: true,
    maxPerDoc: 50,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'type', '_status', 'publishedAt', 'updatedAt'],
    group: 'Editorial Content',
    livePreview: {
      url: ({ data }) => {
        const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3001'
        const type = data?.type || 'dispatch'
        const slug = data?.slug || ''
        const path = type === 'publication' ? `/publications/${slug}` : `/newsroom/${type}/${slug}`
        return `${base}${path}`
      },
    },
  },
  access: {
    read: () => true,
    create: isEditor,
    update: isEditor,
    delete: isEditor,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            { name: 'title', type: 'text', required: true },
            slugField('title'),
            {
              name: 'type',
              type: 'select',
              required: true,
              defaultValue: 'dispatch',
              options: [
                { label: 'Publication', value: 'publication' },
                { label: 'News Dispatch', value: 'dispatch' },
                { label: 'News Update', value: 'updates' },
                { label: 'Coverage', value: 'coverage' },
                { label: 'Technical Brief', value: 'technical-brief' },
                { label: 'Proceeding', value: 'proceeding' },
                { label: 'Presentation', value: 'presentation' },
              ],
            },
            { name: 'excerpt', type: 'textarea' },
            { name: 'heroImage', type: 'upload', relationTo: 'media' },
            { name: 'body', type: 'textarea', label: 'Body' },
            {
              name: 'downloads',
              type: 'array',
              fields: [
                { name: 'label', type: 'text', required: true },
                { name: 'file', type: 'upload', relationTo: 'media' },
                { name: 'url', type: 'text' },
              ],
            },
          ],
        },
        {
          label: 'Taxonomy',
          fields: [
            { name: 'authors', type: 'relationship', relationTo: 'authors', hasMany: true },
            { name: 'categories', type: 'relationship', relationTo: 'categories', hasMany: true },
            { name: 'publishedAt', type: 'date', admin: { date: { pickerAppearance: 'dayAndTime' } } },
          ],
        },
        {
          label: 'SEO',
          fields: seoFields,
        },
      ],
    },
  ],
}
