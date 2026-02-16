'use client'

import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { fetchDataPost } from '../../utils/fetchData'
import endpoints from '../../config/endpoints'
import { MoveRight } from 'lucide-react'

export const ContactData = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      await fetchDataPost(endpoints.contactSubmissions.create, form)
      setForm({ fullName: '', email: '', phone: '', message: '' })
      toast.success('Message sent successfully!')
    } catch (error) {
      console.error(error)
      toast.error('Failed to send message.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="relative">
      <Toaster position="top-right" />

      {isLoading && (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm z-[9999]">
          <div className="relative w-20 h-20">
            <div className="absolute inset-0 rounded-full border-4 border-t-transparent border-b-transparent border-[#0075c5] animate-spin"></div>
            <div className="absolute inset-2 rounded-full border-4 border-t-transparent border-b-transparent border-[#0075c5] animate-[spin_2s_linear_infinite_reverse]"></div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="text-sm text-black font-poppins-400">Name</label>
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              required
              placeholder="Enter Your Name"
              className="w-full  text-black placeholder:text-xs mt-2  rounded-xl border border-black/20 px-3 py-3 outline-none"
            />
          </div>
          <div>
            <label className="text-sm text-black font-poppins-400">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Enter Your Email"
              className="w-full  text-black placeholder:text-xs mt-2  rounded-xl border border-black/20 px-3 py-3 outline-none"
            />
          </div>
        </div>

        <div>
          <label className="text-sm text-black font-poppins-400">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            placeholder="Enter Your Phone No"
            className="w-full  text-black placeholder:text-xs mt-2  rounded-xl border border-black/20 px-3 py-3 outline-none"
          />
        </div>

        <div>
          <label className="text-sm text-black font-poppins-400">Message</label>
          <textarea
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            required
            placeholder="Enter Your Message"
            className="w-full  text-black placeholder:text-xs mt-2  rounded-xl border border-black/20 px-3 py-3 outline-none"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="flex items-center justify-center gap-3 bg-green text-white font-semibold px-8 w-full py-3 rounded-full text-base transition"
        >
          {isLoading ? 'Sending...' : 'Send Message'}
          <MoveRight size={18} />
        </button>
      </form>
    </div>
  )
}
