import type { CollectionConfig } from 'payload'
import path from 'path'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  admin: {
    hidden: true,
  },
  upload: {
    staticDir: path.resolve('/var/www/pesino-media'), // For linux
    // staticDir: path.resolve('F:\Shawn\pesino-uploads'), // For windows
    // staticDir: 'media', // Folder where files will be stored
    //  staticURL: '/media/images',
    mimeTypes: ['image/*'], // Allow images & videos
  },
  fields: [],
}
