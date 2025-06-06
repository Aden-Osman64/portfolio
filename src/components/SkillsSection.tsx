'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import emailjs from '@emailjs/browser'

const skills = [
  { name: 'JavaScript', level: 90 },
  { name: 'Rust', level: 85 },
  { name: 'React', level: 90 },
  { name: 'Node.js', level: 80 },
  { name: 'Python', level: 75 },
  { name: 'SQL', level: 85 },
  { name: 'Git', level: 90 },
  { name: 'AWS', level: 70 },
]

export default function SkillsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="skills" className="section bg-white dark:bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-900/50" />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            Skills & Technologies
          </h2>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-2">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  className="h-2.5 rounded-full bg-gradient-to-r from-primary to-purple-600"
                />
              </div>
              <div className="mt-2 text-right">
                <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 