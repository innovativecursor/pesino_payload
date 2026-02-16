import type { CollectionConfig } from 'payload'
import path from 'path'
export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  admin: {
    hidden: false,
  },

  upload: {
    staticDir: path.resolve('/var/www/pesino-media'),
    mimeTypes: ['image/*'],

    imageSizes: [
      {
        name: 'thumbnail',
        width: 300,
        height: 300,
        crop: 'center',
      },
      {
        name: 'medium',
        width: 800,
        height: 600,
        crop: 'center',
      },
      {
        name: 'large',
        width: 1200,
        height: 800,
        crop: 'center',
      },
    ],
  },

  fields: [],
}
