import { createLocalReq, getPayload } from 'payload'
import config from 'payload.config'
import { headers } from 'next/headers'

export const maxDuration = 60 // This function can run for a maximum of 60 seconds

export async function POST(): Promise<Response> {
  const payload = await getPayload({ config })
  const requestHeaders = await headers()

  // Authenticate by passing request headers
  const { user } = await payload.auth({ headers: requestHeaders })

  if (!user) {
    return new Response('Action forbidden.', { status: 403 })
  }

  try {
    // Example of a successful response (no seeding)
    return Response.json({ success: true, message: 'Seed removed. Nothing to run.' })
  } catch (e) {
    payload.logger.error({ err: e, message: 'Error executing POST route' })
    return new Response('Error.', { status: 500 })
  }
}
