export const slugField = (sourceField = 'title') => ({
  name: 'slug',
  type: 'text',
  required: true,
  unique: true,
  index: true,
  admin: {
    position: 'sidebar',
    description: `URL-safe identifier. Usually derived from ${sourceField}.`,
  },
})

export const linkFields = [
  { name: 'label', type: 'text', label: 'Label' },
  { name: 'href', type: 'text', label: 'URL / Path' },
  { name: 'external', type: 'checkbox', label: 'Open in new tab', defaultValue: false },
]

export const seoFields = [
  {
    name: 'seo',
    type: 'group',
    label: 'SEO',
    fields: [
      { name: 'title', type: 'text', label: 'SEO Title' },
      { name: 'description', type: 'textarea', label: 'SEO Description' },
      { name: 'canonical', type: 'text', label: 'Canonical URL' },
      { name: 'keywords', type: 'text', label: 'Keywords' },
      {
        name: 'robots',
        type: 'text',
        label: 'Robots Directive',
        defaultValue: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1',
      },
      {
        name: 'openGraph',
        type: 'group',
        label: 'Open Graph',
        fields: [
          { name: 'title', type: 'text', label: 'OG Title' },
          { name: 'description', type: 'textarea', label: 'OG Description' },
          {
            name: 'type',
            type: 'select',
            defaultValue: 'website',
            options: [
              { label: 'Website', value: 'website' },
              { label: 'Article', value: 'article' },
            ],
          },
          { name: 'image', type: 'upload', relationTo: 'media', label: 'OG Image' },
        ],
      },
      {
        name: 'structuredData',
        type: 'json',
        label: 'Structured Data JSON-LD',
        admin: {
          description: 'Optional JSON-LD object or array for advanced schema markup.',
        },
      },
    ],
  },
]
