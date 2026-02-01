'use client'

import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt, FaStar, FaCodeBranch } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, cardHoverSmall } from '@/utils/animations'
import { DisplayProject } from '@/utils/projectUtils' // Import the unified interface

interface ProjectsProps {
  projects: DisplayProject[];
}

export default function Projects({ projects }: ProjectsProps) {
  if (!projects || projects.length === 0) {
    return null;
  }

  return (
    <section className="py-16 md:py-20 scroll-mt-20" id="projects">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          {...fadeInUp}
        >
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <div className="w-24 h-1.5 bg-green-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {projects.map((project, idx) => (
            <motion.article
              key={idx}
              className="bg-white dark:bg-dark border border-gray-100 dark:border-gray-800 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full"
              variants={fadeInUp}
              {...cardHoverSmall}
            >
              <div className="relative aspect-video w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-400" aria-label="No image available">
                    <FaGithub className="text-6xl opacity-20" />
                  </div>
                )}
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors capitalize">
                    {project.title}
                  </h3>
                  {project.stats && (
                    <div className="flex space-x-3 text-sm text-gray-500">
                      <span className="flex items-center" title="Stars" aria-label={`${project.stats.stars} stars`}>
                        <FaStar className="text-yellow-400 mr-1" aria-hidden="true" /> {project.stats.stars}
                      </span>
                      <span className="flex items-center" title="Forks" aria-label={`${project.stats.forks} forks`}>
                        <FaCodeBranch className="mr-1" aria-hidden="true" /> {project.stats.forks}
                      </span>
                    </div>
                  )}
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3 text-sm flex-1">
                  {project.description}
                </p>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-black dark:hover:text-white transition-colors"
                      title="View Code"
                      aria-label={`View source code for ${project.title}`}
                    >
                      <FaGithub className="h-5 w-5" aria-hidden="true" />
                    </a>
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-primary transition-colors"
                        title="Live Demo"
                        aria-label={`View live demo for ${project.title}`}
                      >
                        <FaExternalLinkAlt className="h-4 w-4" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}