import type { GlobalConfig } from 'payload'
import { revalidateSocialIcons } from './hooks/revalidateSocialIcons'

export const HeaderSocialIcons: GlobalConfig = {
  slug: 'header-social-icons',
  label: 'Header Social Icons',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'socialIcons',
      label: 'Social Icons',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'iconImage',
          label: 'Social Icon Image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'link',
          label: 'Social Link',
          type: 'text',
          required: false,
        },
        {
          name: 'whatsAppNumber',
          label: 'WhatsApp Number',
          type: 'text',
          required: false,
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateSocialIcons],
  },
}
