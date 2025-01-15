'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed w-full z-10 transition-colors duration-300 ${
        isScrolled ? 'bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold">
            NextJs Projects
          </Link>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="#" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="https://github.com/Shifath19/Bootcamp-Shifath" target='blank' className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                  Github
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </motion.header>
  )
}

export default Header

