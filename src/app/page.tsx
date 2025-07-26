'use client'

import HeroSection from '@/components/HeroSection'
import SkillsSection from '@/components/SkillsSection'
import EducationSection from '@/components/EducationSection'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <SkillsSection />
      <EducationSection />

      {/* Projects Section */}
      <section id="projects" className="section bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600"
          >
            Featured Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* ClearFund Project Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <img 
                  src="/clearfund-preview.png" 
                  alt="ClearFund Project Preview" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">ClearFund</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  A modern crowdfunding platform built with Next.js and Tailwind CSS, featuring real-time updates and secure payment processing.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Next.js</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Tailwind CSS</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">TypeScript</span>
                </div>
                <div className="flex gap-4">
                  <a
                    href="https://digitalsystemsproject.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                  >
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href="https://github.com/Aden-Osman64/digitalsystemsproject"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                  >
                    <FaGithub />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
            {/* MealMaxxers Project Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <img 
                  src="/mealmaxxers-preview.png" 
                  alt="MealMaxxers Project Preview" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">MealMaxxers</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                MealMaxxers generates personalized daily meal plans with calories and macros tailored to users’ fitness goals in a clean, easy-to-use app.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Next.js</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Tailwind CSS</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">TypeScript</span>
                </div>
                <div className="flex gap-4">
                  <a
                    href="https://meal-maxxers.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                  >
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href="https://github.com/Aden-Osman64/MealMaxxer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                  >
                    <FaGithub />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Me Button */}
      <div className="flex justify-center my-12">
        <a href="/contact" className="btn bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transform hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-xl">
          Contact Me
        </a>
      </div>
    </main>
  )
} 