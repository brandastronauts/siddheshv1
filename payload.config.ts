// @ts-nocheck
import path from 'path'
import { fileURLToPath } from 'url'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { buildConfig } from 'payload'
import sharp from 'sharp'
import { Media } from './src/payload/collections/Media.js'
import { PageOverrides } from './src/payload/collections/PageOverrides.js'
import { Users } from './src/payload/collections/Users.js'
import { Authors } from './src/payload/collections/Authors.js'
import { Categories } from './src/payload/collections/Categories.js'
import { FAQs } from './src/payload/collections/FAQs.js'
import { FormSubmissions } from './src/payload/collections/FormSubmissions.js'
import { Posts } from './src/payload/collections/Posts.js'
import { Products } from './src/payload/collections/Products.js'
import { Redirects } from './src/payload/collections/Redirects.js'
import { SearchIndex } from './src/payload/collections/SearchIndex.js'
import { Services } from './src/payload/collections/Services.js'
import { TeamMembers } from './src/payload/collections/TeamMembers.js'
import { Testimonials } from './src/payload/collections/Testimonials.js'
import { Webhooks } from './src/payload/collections/Webhooks.js'
import { FooterSettings } from './src/payload/globals/FooterSettings.js'
import { SEODefaults } from './src/payload/globals/SEODefaults.js'
import { SiteSettings } from './src/payload/globals/SiteSettings.js'
import { ThemeSettings } from './src/payload/globals/ThemeSettings.js'
import { AnnouncementBar } from './src/payload/globals/AnnouncementBar.js'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET || 'dev-payload-secret-change-me',
  db: mongooseAdapter({
    url: process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/blueblocks_payload',
  }),
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: dirname,
      importMapFile: path.resolve(dirname, 'src/app/(payload)/admin/importMap.js'),
    },
    components: {
      graphics: {
        Logo: '/src/payload/admin/Logo.js#default',
        Icon: '/src/payload/admin/Icon.js#default',
      },
    },
    css: path.resolve(dirname, 'src/payload/admin/custom.css'),
    meta: {
      titleSuffix: ' — Blue Blocks CMS',
      description: 'Blue Blocks Micro Research Institute — Content Management System',
    },
    dateFormat: 'dd MMM yyyy, HH:mm',
  },
  collections: [
    Users,
    Media,
    PageOverrides,
    Posts,
    Categories,
    Authors,
    TeamMembers,
    FAQs,
    Testimonials,
    Services,
    Products,
    FormSubmissions,
    Redirects,
    Webhooks,
    SearchIndex,
  ],
  globals: [SiteSettings, FooterSettings, SEODefaults, ThemeSettings, AnnouncementBar],
  graphQL: {
    disable: true,
  },
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'src/payload/payload-types.ts'),
  },
})
