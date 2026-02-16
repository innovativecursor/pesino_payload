export const dynamic = 'force-dynamic'

import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { getPayload } from 'payload'
import config from '../../../../../payload.config'

export async function POST(req: Request) {
  try {
    const payload = await getPayload({ config })
    const data = await req.json()

    await payload.create({
      collection: 'contact-submissions',
      data,
    })

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.TO_EMAIL || process.env.EMAIL_USER,
      subject: `New Contact Submission from ${data.fullName}`,
      text: `You have a new contact form submission:

Full Name: ${data.fullName}
Email: ${data.email}
Phone: ${data.phone}
Message:
${data.message}

Please check your admin panel for more details.`,
    })

    return NextResponse.json({ success: true })
  } catch (err: any) {
    console.error('Error in /api/contact:', err)
    return NextResponse.json({ success: false, error: err.message }, { status: 500 })
  }
}
