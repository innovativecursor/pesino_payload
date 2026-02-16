import type { Plugin } from 'payload'

// This plugin will run at Payload init and set admin.hidden = true
// for any collections or globals with the listed slugs. It's defensive
// (uses any) to avoid strict typing issues and runs after other plugins
// so it can modify plugin-registered collections.
export const hideAdminCollections = (): any => ({
  init: (payload: any) => {
    const toHide = ['redirects', 'forms', 'form-submissions', 'search', 'search-results']

    try {
      if (payload.collections && Array.isArray(payload.collections)) {
        payload.collections.forEach((c: any) => {
          const slug = c?.slug || c?.config?.slug
          if (slug && toHide.includes(slug)) {
            c.config = c.config || {}
            c.config.admin = { ...(c.config.admin || {}), hidden: true }
          }
        })
      }

      if (payload.globals && Array.isArray(payload.globals)) {
        payload.globals.forEach((g: any) => {
          const slug = g?.slug || g?.config?.slug
          if (slug && toHide.includes(slug)) {
            g.config = g.config || {}
            g.config.admin = { ...(g.config.admin || {}), hidden: true }
          }
        })
      }
    } catch (err) {
      // be defensive: do not throw during init
      // eslint-disable-next-line no-console
      console.warn('hideAdminCollections plugin failed to hide some items', err)
    }
  },
})
