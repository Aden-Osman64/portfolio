'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGraduationCap, FaSchool, FaUniversity } from 'react-icons/fa'

const education = [
  {
    title: 'BSc Computer Science',
    institution: 'University of the West of England',
    period: '2022 - 2025',
    description: 'Studying computer science with a focus on software development and modern technologies.',
    icon: FaUniversity,
  },
  {
    title: 'A-Levels',
    institution: 'Cabot Learning Federation',
    period: '2018 - 2020',
    description: 'Completed A-Levels in Mathematics, Biology, and Chemistry.',
    icon: FaSchool,
  },
  {
    title: 'GCSEs',
    institution: 'City Academy Bristol',
    period: '2013 - 2018',
    description: 'Achieved excellent grades in core subjects including Mathematics, English, and Sciences.',
    icon: FaGraduationCap,
  },
]

export default function EducationSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="education" className="section bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white dark:to-gray-800/50" />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text">
            Education Journey
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            My academic path that shaped my passion for technology
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary to-purple-600" />

          {education.map((edu, index) => (
            <motion.div
              key={edu.title}
              variants={itemVariants}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:ml-auto md:mr-[50%] md:pr-12' : 'md:mr-auto md:ml-[50%] md:pl-12'
              }`}
            >
              <div className="relative">
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-white dark:ring-gray-900" />
                
                <div className="card p-6 md:p-8 transform hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                      <edu.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {edu.title}
                      </h3>
                      <p className="text-primary font-medium">{edu.institution}</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {edu.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 