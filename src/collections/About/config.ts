import { GlobalConfig } from 'payload'

export const AboutPage: GlobalConfig = {
  slug: 'about-page',

  label: 'About Page',

  access: {
    read: () => true,
  },

  fields: [
    {
      name: 'leftImage',
      label: 'Left Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },

    {
      name: 'address',
      label: 'Address',
      type: 'textarea',
      required: true,
    },

    {
      name: 'gallery',
      label: 'Gallery',
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