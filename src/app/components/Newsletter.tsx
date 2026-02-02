'use client'

import { FaPaperPlane } from 'react-icons/fa'

export default function Newsletter() {


  return (
    <section className="py-20">
      <div className="bg-white dark:bg-dark/50 rounded-lg shadow-md overflow-hidden animate-slide-up border border-gray-100 dark:border-gray-800">
        <div className="p-8 md:p-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Subscribe to My Newsletter</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Get the latest updates on my projects, blog posts, and tech insights delivered straight to your inbox.
                </p>
              </div>
              <div className="flex flex-col items-start md:items-end">
                <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                  <a
                    href="https://medium.com/@iamlasantha/subscribe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 rounded-lg bg-primary hover:bg-primary/90 text-white transition-all duration-300 flex items-center justify-center font-medium group w-full md:w-auto"
                  >
                    Subscribe on Medium <FaPaperPlane className="ml-2 text-xs group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 text-left md:text-right">
                  Join other subscribers on my Medium publication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 