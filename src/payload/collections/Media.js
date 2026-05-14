import { isAdmin, isEditor } from '../access/isAdmin.js'

export const Media = {
  slug: 'media',
  upload: {
    staticDir: 'public/media',
    adminThumbnail: 'thumbnail',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 480,
        height: 320,
        fit: 'cover',
      },
      {
        name: 'card',
        width: 960,
        height: 640,
        fit: 'cover',
      },
      {
        name: 'hero',
        width: 1920,
        height: 1080,
        fit: 'cover',
      },
    ],
    mimeTypes: ['image/*'],
  },
  access: {
    read: () => true,
    create: isEditor,
    update: isEditor,
    delete: isAdmin,
  },
  admin: {
    useAsTitle: 'alt',
    defaultColumns: ['alt', 'filename', 'updatedAt'],
    description: 'Upload and manage images used across the website.',
    group: 'Website Content',
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
      label: 'Alt Text',
      admin: {
        description: 'Describe the image for accessibility and SEO.',
        placeholder: 'e.g. Students presenting a research prototype',
      },
    },
    {
      name: 'caption',
      type: 'textarea',
      label: 'Caption (Optional)',
      admin: {
        placeholder: 'Optional short caption shown near the image',
      },
    },
  ],
}
