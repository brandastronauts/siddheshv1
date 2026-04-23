// @ts-nocheck
import path from 'path'
import { fileURLToPath } from 'url'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { buildConfig } from 'payload'
import sharp from 'sharp'
import { Media } from './src/payload/collections/Media.js'
import { PageOverrides } from './src/payload/collections/PageOverrides.js'
import { Users } from './src/payload/collections/Users.js'
import { SiteSettings } from './src/payload/globals/SiteSettings.js'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET || 'dev-payload-secret-change-me',
  db: postgresAdapter({
    pool: {
      connectionString:
        process.env.DATABASE_URL ||
        'postgres://postgres:postgres@127.0.0.1:5432/blueblocks_payload',
    },
  }),
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: dirname,
      importMapFile: path.resolve(dirname, 'src/app/(payload)/admin/importMap.js'),
    },
    meta: {
      titleSuffix: ' - Blue Blocks CMS',
    },
  },
  collections: [Users, Media, PageOverrides],
  globals: [SiteSettings],
  graphQL: {
    disable: true,
  },
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'src/payload/payload-types.ts'),
  },
})
