'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="max-w-md w-full text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="mb-8">
                        <h1 className="text-6xl font-bold text-red-500 mb-4">Oops!</h1>
                        <h2 className="text-2xl font-semibold mb-4 text-white">Something went wrong</h2>
                        <p className="text-gray-400 mb-8">
                            We encountered an unexpected error. Don&apos;t worry, it&apos;s not you - it&apos;s us.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={reset}
                            className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
                        >
                            Try Again
                        </button>
                        <Link
                            href="/"
                            className="px-6 py-3 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-colors border border-white/10"
                        >
                            Back to Home
                        </Link>
                    </div>

                    {process.env.NODE_ENV === 'development' && (
                        <div className="mt-8 p-4 bg-red-950/30 border border-red-900 rounded-lg text-left overflow-auto max-h-48 text-xs text-red-200">
                            <p className="font-mono">{error.message}</p>
                            {error.digest && <p className="font-mono mt-2 text-red-400">Digest: {error.digest}</p>}
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    )
}
