'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink, Github } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  imageUrl: string
  icon: React.ReactNode
  liveLink: string
  repoLink: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, icon, liveLink, repoLink }) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg aspect-square"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-1/2">
        <Image src={imageUrl || "/placeholder.svg"} alt={title} layout="fill" objectFit="cover" />
        <div className="absolute top-2 left-2 bg-white dark:bg-gray-800 rounded-full p-2">
          {icon}
        </div>
      </div>
      <div className="p-4 h-1/2 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 line-clamp-2">{description}</p>
        </div>
        <div className="flex justify-between">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 hover:bg-gray-800 dark:bg-gray-100 dark:hover:bg-gray-200 dark:text-gray-900 text-white font-semibold py-1 px-2 rounded-full text-xs transition duration-300 inline-flex items-center"
          >
            <ExternalLink className="mr-1 h-3 w-3" />
            Demo
          </a>
          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 hover:bg-gray-800 dark:bg-gray-100 dark:hover:bg-gray-200 dark:text-gray-900 text-white font-semibold py-1 px-2 rounded-full text-xs transition duration-300 inline-flex items-center"
          >
            <Github className="mr-1 h-3 w-3" />
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard

