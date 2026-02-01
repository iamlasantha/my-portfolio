import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center px-4 relative z-10">
            <div className="text-center max-w-lg mx-auto">
                <h1 className="text-9xl font-bold text-gray-800 dark:text-gray-800/50 mb-0 leading-none select-none">
                    404
                </h1>
                <div className="relative -mt-12 mb-8">
                    <h2 className="text-3xl font-bold text-white mb-4 relative z-10">Page Not Found</h2>
                    <div className="h-1 w-24 bg-primary mx-auto rounded-full"></div>
                </div>

                <p className="text-gray-400 mb-10 text-lg">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>

                <Link
                    href="/"
                    className="inline-block px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1"
                >
                    Return Home
                </Link>
            </div>
        </div>
    )
}
