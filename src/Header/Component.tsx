import { HeaderClient } from './Component.client'
import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'

import type { Header, HeaderSocialIcon } from '@/payload-types'

export async function Header() {
  const headerData = (await getCachedGlobal('header', 1)()) as Header
  const socialIconsData = (await getCachedGlobal('header-social-icons', 1)()) as HeaderSocialIcon

  return <HeaderClient data={headerData} socialIcons={socialIconsData} />
}
