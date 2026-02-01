import Link from 'next/link'
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa'
import { personal } from '@/contents/personal'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-dark border-t border-gray-100 dark:border-gray-800 py-12">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <Link href="/" className="text-2xl font-bold tracking-tighter hover:text-primary transition-colors">
              @iamlasantha<span className="text-primary">.</span>
            </Link>
            <p className="text-sm text-gray-500 mt-2">
              © {new Date().getFullYear()} {personal.name}. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href={personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-black dark:text-gray-500 dark:hover:text-white transition-colors"
            >
              <FaGithub className="h-6 w-6" />
            </a>
            <a
              href={personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#0077b5] dark:text-gray-500 dark:hover:text-[#0077b5] transition-colors"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
            <a
              href={personal.socials.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-black dark:text-gray-500 dark:hover:text-white transition-colors"
            >
              <FaMedium className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
} 