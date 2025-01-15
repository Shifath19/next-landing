'use client'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import { Rocket, Zap, Layers, BarChart } from 'lucide-react'

const projects = [
  {
    title: 'Next.js Starter',
    description: 'A feature-rich boilerplate for Next.js applications',
    imageUrl: '/next-starter.png',
    icon: <Rocket className="h-5 w-5 text-blue-500" />,
    liveLink: 'https://shifath-next-starter.bootcamp.aganitha.ai/',
    repoLink: 'https://github.com/Shifath19/Bootcamp-Shifath/tree/main/next-js-starter',
  },
  {
    title: 'Kaminari Starter',
    description: 'Lightning-fast starter kit for modern web development',
    imageUrl: '/kaminari.png',
    icon: <Zap className="h-5 w-5 text-yellow-500" />,
    liveLink: 'https://shifath-kaminari-app.bootcamp.aganitha.ai/',
    repoLink: 'https://github.com/Shifath19/next-ex-2',
  },
  {
    title: 'T3 Starter',
    description: 'Typesafe, full-stack starter using the T3 Stack',
    imageUrl: '/t3-app.png',
    icon: <Layers className="h-5 w-5 text-purple-500" />,
    liveLink: '',
    repoLink: 'https://github.com/Shifath19/Bootcamp-Shifath/tree/main/t3-crud',
  },
  {
    title: 'Product Dashboard',
    description: 'Comprehensive dashboard for product analytics',
    imageUrl: '/dashboard.png',
    icon: <BarChart className="h-5 w-5 text-green-500" />,
    liveLink: 'https://shifath-product-dashboard.bootcamp.aganitha.ai/',
    repoLink: 'https://github.com/Shifath19/Bootcamp-Shifath/tree/main/product-dashboard',
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

