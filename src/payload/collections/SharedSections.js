import { isAdmin, isEditor, publishedOrEditor } from '../access/isAdmin.js'
import { contentBlocks } from './PageOverrides.js'

/**
 * Shared Sections — reusable page sections (Payload "reusable content" pattern).
 *
 * A shared section is one or more blocks from the same block library pages use. Pages include it with the
 * "Shared Section" block. Editing it here updates every page that references it. Shared sections cannot
 * contain other shared sections (prevents loops).
 */
export const SharedSections = {
  slug: 'shared-sections',
  labels: { singular: 'Shared Section', plural: 'Shared Sections' },
  access: {
    read: publishedOrEditor,
    create: isEditor,
    update: isEditor,
    delete: isAdmin,
  },
  admin: {
    useAsTitle: 'title',
    group: 'Website Content',
    defaultColumns: ['title', 'category', '_status', 'updatedAt'],
    listSearchableFields: ['title', 'description'],
    description: 'Reusable sections (e.g. a FAQ, citation note, CTA strip or "Related" links). Edit once, update everywhere.',
  },
  versions: { drafts: true, maxPerDoc: 50 },
  hooks: {
    afterChange: [
      async ({ doc }) => {
        if (doc?._status !== 'published') return doc
        try {
          const { revalidatePath } = await import('next/cache')
          revalidatePath('/', 'layout') // shared content can appear on any page
        } catch (error) {
          console.error('[shared-sections] revalidation failed (pages refresh on the ISR window):', error?.message || error)
        }
        return doc
      },
    ],
    beforeDelete: [
      async ({ req, id }) => {
        const used = await req.payload.find({ collection: 'page-overrides', where: { 'sections.section': { equals: id } }, limit: 1, depth: 0, draft: true })
        if (used.totalDocs > 0) throw new Error(`This shared section is used on ${used.totalDocs} page(s). Remove it from those pages first.`)
      },
    ],
  },
  fields: [
    { name: 'title', type: 'text', required: true, label: 'Name', admin: { description: 'Editor-facing name, e.g. "Patent FAQ" or "Publication citation note".' } },
    {
      name: 'category',
      type: 'select',
      label: 'Category',
      admin: { position: 'sidebar' },
      options: ['FAQ', 'Related links', 'Call to action', 'Citation / notice', 'Contact', 'Other'].map((v) => ({ label: v, value: v.toLowerCase().replace(/[^a-z]+/g, '-') })),
    },
    { name: 'description', type: 'textarea', label: 'Notes (internal)' },
    {
      name: 'usedOn',
      type: 'text',
      hasMany: true,
      virtual: true,
      label: 'Used on pages',
      admin: { readOnly: true, position: 'sidebar', description: 'Pages that reference this section.' },
      hooks: {
        afterRead: [
          async ({ req, data }) => {
            if (!data?.id || !req?.payload) return []
            try {
              const res = await req.payload.find({ collection: 'page-overrides', where: { 'sections.section': { equals: data.id } }, limit: 200, depth: 0, draft: true, select: { pathname: true } })
              return res.docs.map((d) => d.pathname)
            } catch (error) {
              console.error('[shared-sections] usedOn lookup failed:', error?.message || error)
              return []
            }
          },
        ],
      },
    },
    { name: 'sections', type: 'blocks', label: 'Section Content', minRows: 1, blocks: contentBlocks },
  ],
}
