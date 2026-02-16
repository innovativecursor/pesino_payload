import { GlobalConfig } from 'payload'

export const Hero: GlobalConfig = {
  slug: 'hero',
  label: 'Hero Section',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'stats',
      label: 'Hero Stats',
      type: 'array',
      fields: [
        {
          name: 'value',
          label: 'Value',
          type: 'text',
          required: true,
          admin: {
            description: 'The number (e.g. "500")',
          },
        },
        {
          name: 'suffix',
          label: 'Suffix',
          type: 'text',
          required: false,
          admin: {
            description: 'The symbol after the number (e.g. "+")',
          },
        },
        {
          name: 'label',
          label: 'Label',
          type: 'text',
          required: true,
          admin: {
            description: 'The text below the number (e.g. "Product Range")',
          },
        },
      ],
    },
    {
      name: 'heading',
      type: 'text',
      required: false, // Explicitly set to false to trigger DB Drop Not Null
      defaultValue: '', // Safety fallback
      admin: {
        hidden: true,
      },
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      required: false, // Explicitly set to false to trigger DB Drop Not Null
      admin: {
        hidden: true,
      },
    },
  ],
}

export default Hero
