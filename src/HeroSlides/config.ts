import { GlobalConfig } from 'payload'

export const HeroSlides: GlobalConfig = {
  slug: 'hero-slides',
  label: 'Hero Slides',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'slides',
      label: 'Slides',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'title',
          label: 'Green Title',
          type: 'text',
          required: true,
        },
        {
          name: 'line1',
          label: 'Title Line 1',
          type: 'text',
          required: true,
        },
        {
          name: 'line2',
          label: 'Title Line 2',
          type: 'text',
          required: true,
        },
        {
          name: 'line3',
          label: 'Title Line 3',
          type: 'text',
          required: true,
        },
        {
          name: 'desktopImage',
          label: 'Desktop Hero Image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'mobileImage',
          label: 'Mobile Hero Image',
          type: 'upload',
          relationTo: 'media',
          required: false,
        },
      ],
    },
  ],
}

export default HeroSlides
