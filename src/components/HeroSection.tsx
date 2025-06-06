'use client'

import { motion, useAnimation } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { useSpring, animated } from '@react-spring/web'
import { useInView } from 'react-intersection-observer'
import ParticleBackground from './ParticleBackground'
import { useEffect, useState } from 'react'

const TypewriterText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text])

  return <span>{displayText}</span>
}

export default function HeroSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const springs = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: inView ? 1 : 0, transform: inView ? 'translateY(0px)' : 'translateY(20px)' },
    config: { tension: 300, friction: 20 },
  })

  const floatingAnimation = {
    initial: { y: 0 },
    animate: {
      y: [-5, 5, -5],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      <div className="container relative z-10">
        <animated.div ref={ref} style={springs} className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <motion.h1
                className="text-5xl md:text-7xl font-bold mb-6"
                variants={floatingAnimation}
                initial="initial"
                animate="animate"
              >
                <span className="text-gray-900 dark:text-white">Hi, I'm </span>
                <span className="relative inline-block">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                    <TypewriterText text="Aden Osman" />
                  </span>
                  <motion.span
                    className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-purple-600"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                  />
                </span>
              </motion.h1>
            </div>
            <motion.p
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              Software Developer passionate about creating elegant solutions
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center gap-4"
          >
            <a
              href="#projects"
              className="btn btn-primary transform hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-xl"
            >
              View My Work
            </a>
            <a
              href="/contact"
              className="btn bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transform hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-xl"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center gap-6 mt-8"
          >
            {[
              { icon: FaGithub, href: 'https://github.com' },
              { icon: FaLinkedin, href: 'https://linkedin.com' },
              { icon: FaTwitter, href: 'https://twitter.com' },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transform hover:scale-110 transition-transform duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </animated.div>
      </div>
    </section>
  )
} 