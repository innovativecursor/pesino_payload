import { GlobalConfig } from 'payload'

export const AboutPage: GlobalConfig = {
  slug: 'about-page',

  label: 'About Page',

  access: {
    read: () => true,
  },

  fields: [
    {
      name: 'gallery',
      label: 'About Gallery',
      type: 'array',

      fields: [
        {
          name: 'image',
          label: 'Image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
}

export default AboutPage