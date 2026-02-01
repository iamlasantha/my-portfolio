'use client'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const menuItems = [
        { href: '/#about', label: 'About' },
        { href: '/#skills', label: 'Skills' },
        { href: '/#blogs', label: 'Blog' },
        { href: '/#projects', label: 'Works' },
        { href: '/#contact', label: 'Contact' },
    ];

    return (
        <nav className="fixed w-full bg-[#0A0E27]/80 backdrop-blur-md z-50 border-b border-white/5 transition-colors duration-300">
            <div className="container max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    <Link href="/" className="text-2xl font-bold tracking-tighter hover:text-primary transition-colors">
                        @iamlasantha<span className="text-primary">.</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-10">
                        {menuItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-sm font-medium hover:text-primary transition-colors tracking-wide uppercase text-white"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        className="md:hidden p-2 rounded-lg hover:bg-white/10 text-white transition-colors"
                        onClick={toggleMobileMenu}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        {isMobileMenuOpen ? (
                            <XMarkIcon className="h-6 w-6" />
                        ) : (
                            <Bars3Icon className="h-6 w-6" />
                        )}
                    </motion.button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden overflow-hidden bg-[#0A0E27] border-t border-white/5"
                        >
                            <div className="py-6 space-y-4">
                                {menuItems.map((item, index) => (
                                    <motion.div
                                        key={item.href}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Link
                                            href={item.href}
                                            className="block py-2 text-lg font-medium hover:text-primary transition-colors text-center text-white"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {item.label}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    )
} 