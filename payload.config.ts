import { postgresAdapter } from '@payloadcms/db-postgres'

import sharp from 'sharp'
import path from 'path'
import { buildConfig, PayloadRequest } from 'payload'
import { fileURLToPath } from 'url'

import { Categories } from './src/collections/Categories'
import { Media } from './src/collections/Media'
import { Pages } from './src/collections/Pages'
import { Posts } from './src/collections/Posts'
import { Users } from './src/collections/Users'
import { Footer } from './src/Footer/config'
import { Header } from './src/Header/config'
import { Hero } from './src/HeroPart/config'
import { plugins } from './src/plugins'
import { defaultLexical } from '@/fields/defaultLexical'
import { getServerSideURL } from './src/utilities/getURL'
import { Products } from './src/collections/Products'
import ContactSubmissions from './src/collections/contact-submissions'
import AboutPage from '@/collections/About/config'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    components: {
      beforeLogin: ['@/components/BeforeLogin'],

      beforeDashboard: ['@/components/BeforeDashboard'],
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
    user: Users.slug,
    livePreview: {
      breakpoints: [
        {
          label: 'Mobile',
          name: 'mobile',
          width: 375,
          height: 667,
        },
        {
          label: 'Tablet',
          name: 'tablet',
          width: 768,
          height: 1024,
        },
        {
          label: 'Desktop',
          name: 'desktop',
          width: 1440,
          height: 900,
        },
      ],
    },
  },

  editor: defaultLexical,
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  collections: [Pages, Posts, Media, Categories, Users, Products, ContactSubmissions],
  cors: [getServerSideURL()].filter(Boolean),
  globals: [Header, Footer, Hero, AboutPage],
  plugins: [...plugins],
  secret: process.env.PAYLOAD_SECRET,
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'src/payload-types.ts'),
  },
  jobs: {
    access: {
      run: ({ req }: { req: PayloadRequest }): boolean => {
        if (req.user) return true

        const authHeader = req.headers.get('authorization')
        return authHeader === `Bearer ${process.env.CRON_SECRET}`
      },
    },
    tasks: [],
  },
})
