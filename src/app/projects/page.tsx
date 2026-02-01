'use client'

import { allProjects } from '@/contents/projects'
import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt, FaStar, FaCodeBranch } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, cardHoverSmall } from '@/utils/animations'
import { useState, useEffect } from 'react'

// Unified, normalized format for display
interface DisplayProject {
  title: string;
  description: string;
  image?: string;
  link: string; // Code link
  demoLink?: string;
  tags: string[];
  stats?: {
    stars?: number;
    forks?: number;
  };
  isManual: boolean;
}

export default function ProjectsPage() {
  const [displayProjects, setDisplayProjects] = useState<DisplayProject[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAndNormalizeProjects = async () => {
      try {
        const promises = allProjects.map(async (item) => {
          if (item.type === 'manual') {
            return {
              title: item.title,
              description: item.description,
              image: item.image,
              link: item.link,
              demoLink: item.demoLink,
              tags: item.technologies,
              isManual: true,
            } as DisplayProject;
          } else {
            // Fetch GitHub Data
            try {
              // Note: Unauthenticated requests are rate-limited.
              const res = await fetch(`https://api.github.com/repos/${item.owner}/${item.repo}`);
              if (!res.ok) {
                console.warn(`Failed to fetch repo: ${item.repo}`);
                return null;
              }
              const data = await res.json();
              return {
                title: data.name.replace(/-/g, ' '),
                description: data.description || "No description provided.",
                image: item.customImage,
                link: data.html_url,
                demoLink: data.homepage,
                tags: [data.language].filter(Boolean), // GitHub primary lang
                stats: {
                  stars: data.stargazers_count,
                  forks: data.forks_count,
                },
                isManual: false,
              } as DisplayProject;
            } catch (error) {
              console.error(`Error loading ${item.repo}`, error);
              return null;
            }
          }
        });

        const results = await Promise.all(promises);
        setDisplayProjects(results.filter((p): p is DisplayProject => p !== null));
      } catch (err) {
        console.error("Error processing projects", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAndNormalizeProjects();
  }, []);

  return (
    <div className="container max-w-7xl mx-auto py-12 px-4">
      <motion.h1
        className="text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Projects
      </motion.h1>
      <div className="w-24 h-1.5 bg-green-500 rounded-full mx-auto -mt-8 mb-16"></div>

      {loading ? (
        <div className="flex justify-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      ) : (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {displayProjects.map((project, idx) => (
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
                  <div className="flex items-center justify-center h-full text-gray-400">
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
                      <span className="flex items-center" title="Stars"><FaStar className="text-yellow-400 mr-1" /> {project.stats.stars}</span>
                      <span className="flex items-center" title="Forks"><FaCodeBranch className="mr-1" /> {project.stats.forks}</span>
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
                    >
                      <FaGithub className="h-5 w-5" />
                    </a>
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-primary transition-colors"
                        title="Live Demo"
                      >
                        <FaExternalLinkAlt className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      )}
    </div>
  )
}