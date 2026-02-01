'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPaperPlane, FaCheck, FaExclamationCircle } from 'react-icons/fa'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setMessage(data.message)
        setEmail('')
        setTimeout(() => setStatus('idle'), 5000) // Reset after 5 seconds
      } else {
        setStatus('error')
        setMessage(data.message)
      }
    } catch (error) {
      console.error(error); // Log the error to avoid unused var warning
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
  }

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
              <div>
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-3 rounded-lg border dark:text-white border-gray-300 dark:border-gray-600 bg-white text-gray-900 dark:bg-dark focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
                    required
                    disabled={status === 'loading' || status === 'success'}
                  />
                  <button
                    type="submit"
                    disabled={status === 'loading' || status === 'success'}
                    className={`px-8 py-3 rounded-lg transition-all duration-300 flex items-center justify-center min-w-[140px]
                      ${status === 'success'
                        ? 'bg-green-500 hover:bg-green-600 text-white'
                        : status === 'error'
                          ? 'bg-red-500 hover:bg-red-600 text-white'
                          : 'bg-primary hover:bg-primary/90 text-white'
                      }
                      disabled:opacity-80 disabled:cursor-not-allowed
                    `}
                  >
                    {status === 'loading' ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    ) : status === 'success' ? (
                      <>
                        <FaCheck className="mr-2" /> Subscribed
                      </>
                    ) : status === 'error' ? (
                      <>
                        <FaExclamationCircle className="mr-2" /> Retry
                      </>
                    ) : (
                      <>
                        Subscribe <FaPaperPlane className="ml-2 text-xs" />
                      </>
                    )}
                  </button>
                </form>
                {message && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mt-3 text-sm font-medium
                      ${status === 'success' ? 'text-green-600 dark:text-green-400' : 'text-red-500 dark:text-red-400'}
                    `}
                  >
                    {message}
                  </motion.p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 