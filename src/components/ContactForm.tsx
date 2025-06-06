'use client'

import { useRef } from 'react'
import emailjs from '@emailjs/browser'

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = formRef.current
    if (!form) return

    // Add hidden fields for title and time
    let titleInput = form.querySelector('input[name="title"]') as HTMLInputElement
    if (!titleInput) {
      titleInput = document.createElement('input')
      titleInput.type = 'hidden'
      titleInput.name = 'title'
      form.appendChild(titleInput)
    }
    titleInput.value = 'New Contact Form Submission'

    let timeInput = form.querySelector('input[name="time"]') as HTMLInputElement
    if (!timeInput) {
      timeInput = document.createElement('input')
      timeInput.type = 'hidden'
      timeInput.name = 'time'
      form.appendChild(timeInput)
    }
    timeInput.value = new Date().toLocaleTimeString()

    // Validate fields
    const name = (form.querySelector('input[name="name"]') as HTMLInputElement)?.value.trim()
    const email = (form.querySelector('input[name="email"]') as HTMLInputElement)?.value.trim()
    const message = (form.querySelector('textarea[name="message"]') as HTMLTextAreaElement)?.value.trim()
    if (!name || !email || !message) {
      alert('Error: Please fill in all fields.')
      return
    }

    try {
      await emailjs.sendForm(
        'service_l6sg2lf',
        'template_1mvml4j',
        form,
        'UNOlhfwx158k0-z9V'
      )
      alert('Message sent successfully')
      form.reset()
    } catch (error) {
      alert('Error sending message. Please try again.')
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" action="#" autoComplete="off" noValidate>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required />
      </div>
      <button type="submit">Send Message</button>
    </form>
  )
} 