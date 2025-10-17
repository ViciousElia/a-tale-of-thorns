// components/ContactForm.tsx
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function ContactForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit(formData: FormData) {
    setIsLoading(true)

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        body: formData.get('body')
      })
    })

    if (response.ok) {
      router.refresh() // Reloads the page fresh
    }

    setIsLoading(false)
  }

  return (
    <form action={handleSubmit} className="flex flex-col gap-4 w-[100%] md:w-[50%]">
      <input name="name" placeholder="Name" required className="p-2 border-b-1 border-r-1 border-mid-500" />
      <input name="email" type="email" placeholder="Email" required className="p-2 border-b-1 border-r-1 border-mid-500" />
      <input name="subject" placeholder="Subject" required className="p-2 border-b-1 border-r-1 border-mid-500" />
      <textarea name="body" placeholder="Message" required className="h-50 p-2 border-b-1 border-r-1 border-mid-500" />
      <button type="submit" disabled={isLoading} className="p-2 border-b-1 border-r-1 border-mid-500 bg-gray-500 text-mid-50" >
        {isLoading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}