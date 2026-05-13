import { isAdmin, isEditor } from '../access/isAdmin.js'

export const SEODefaults = {
  slug: 'seo-defaults',
  label: 'SEO Defaults',
  access: {
    read: () => true,
    update: isEditor,
  },
  admin: {
    group: 'Site Configuration',
    description: 'Fallback metadata, OpenGraph, robots, and structured data settings.',
  },
  fields: [
    { name: 'siteName', type: 'text', defaultValue: 'Blue Blocks Micro Research Institute' },
    { name: 'baseUrl', type: 'text', defaultValue: 'https://research.blueblocks.in' },
    { name: 'defaultTitle', type: 'text', defaultValue: 'Blue Blocks Micro Research Institute' },
    {
      name: 'defaultDescription',
      type: 'textarea',
      defaultValue:
        'A longitudinal research institute studying innovation, Montessori development, and human potential through continuous observation from birth to adulthood.',
    },
    { name: 'defaultImage', type: 'upload', relationTo: 'media' },
    {
      name: 'robots',
      type: 'text',
      defaultValue: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1',
    },
    { name: 'organizationSchema', type: 'json' },
  ],
}
