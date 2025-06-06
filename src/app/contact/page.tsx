'use client'

import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import ParticleBackground from '@/components/ParticleBackground'
import Link from 'next/link'

export default function ContactPage() {
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute top-8 left-8 z-20"
      >
        <Link href="/">
          <motion.button
            className="px-6 py-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ← Back to Home
          </motion.button>
        </Link>
      </motion.div>
      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-lg mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-gray-200 dark:border-gray-700"
          >
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600"
            >
              Get in Touch
            </motion.h1>
            <motion.form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-6"
              action="#"
              autoComplete="off"
              noValidate
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white transition-all duration-200"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white transition-all duration-200"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white transition-all duration-200"
                  placeholder="Your message..."
                />
              </div>
              <motion.button
                type="submit"
                className="w-full py-3 px-6 bg-gradient-to-r from-primary to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </motion.form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 