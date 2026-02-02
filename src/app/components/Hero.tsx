'use client'

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeInUp, fadeIn } from '@/utils/animations';
import { personal } from '@/contents/personal';

export default function Hero() {
  return (
    <section className="py-16 md:py-32 flex items-center min-h-[calc(100vh-4rem)]">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl shadow-primary/20">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/profile.png"
                alt={personal.name}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-7xl font-bold mb-6 tracking-tight"
            {...fadeInUp}
            transition={{ delay: 0.3 }}
          >
            <span className="block text-white mb-2 tracking-widest uppercase text-sm font-semibold opacity-80">{personal.name}</span>
            <motion.span
              className="text-primary text-2xl md:text-4xl font-normal block mt-4"
              {...fadeIn}
              transition={{ delay: 0.8 }}
            >
              {personal.title}
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-400 mb-12 font-light max-w-2xl mx-auto leading-relaxed"
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            {personal.tagline} • {personal.location}
          </motion.p>

          {/* Bio section removed as requested */}

          <motion.div
            className="flex justify-center space-x-6 mb-12"
            {...fadeInUp}
            transition={{ delay: 0.6 }}
          >
            <motion.a
              href={personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl md:text-5xl text-gray-300 hover:text-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href={personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl md:text-5xl text-gray-300 hover:text-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href={personal.socials.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl md:text-5xl text-gray-300 hover:text-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaMedium />
            </motion.a>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            {...fadeInUp}
            transition={{ delay: 0.7 }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-8 py-3 rounded-full hover:opacity-90 transition-opacity font-medium w-full sm:w-auto inline-block cursor-pointer"
              >
                Download CV
              </a>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/#contact"
                className="bg-transparent border border-white/20 text-white px-8 py-3 rounded-full hover:bg-white/5 hover:border-primary/50 transition-all font-medium w-full sm:w-auto inline-block"
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 