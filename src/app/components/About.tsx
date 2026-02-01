'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import {
    fadeInUp,
    fadeInDown,
    fadeIn,
    cardHoverSmall
} from '@/utils/animations'
import { data } from '@/contents/about'
import { FaGraduationCap, FaBriefcase, FaUniversity, FaCode, FaCertificate } from 'react-icons/fa'

export default function About() {
    const bio = [
        "Hi! I am a Management Information Systems undergraduate student at NSBM Green University with a growing passion for DevOps methodologies, Linux environments, and cloud technologies.",
        "My academic journey has equipped me with a strong foundation in information systems, while my personal projects have allowed me to develop practical skills in infrastructure automation, containerization, and CI/CD pipelines.",
        "I enjoy solving complex technical challenges and am constantly exploring new tools and technologies to enhance system efficiency and scalability.",
        "As I progress in my education, I'm focused on bridging theoretical knowledge with hands-on experience in cloud platforms and modern DevOps practices."
    ];

    return (
        <div id="about" className="container max-w-7xl mx-auto py-12 px-4 scroll-mt-20">
            <motion.h1
                className="text-4xl font-bold mb-12 text-center"
                {...fadeInDown}
            >
                About Me
            </motion.h1>
            <div className="w-24 h-1.5 bg-green-500 rounded-full mx-auto -mt-8 mb-12"></div>

            {/* Bio Section */}
            <motion.section
                className="mb-20 min-h-[80vh] flex flex-col justify-center"
                {...fadeInUp}
            >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto items-stretch">
                    {/* Profile Image */}
                    <div className="relative aspect-square md:aspect-auto md:h-full w-full max-w-sm mx-auto md:max-w-none rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                        <Image
                            src="/about-profile.png"
                            alt="Profile"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-60" />
                    </div>

                    {/* Bio Text */}
                    <div className="md:col-span-2 bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm shadow-sm flex flex-col justify-center">
                        {bio.map((paragraph, index) => (
                            <p key={index} className="text-lg text-gray-300 mb-4 leading-relaxed last:mb-0">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Education & Experience Grid */}
            <motion.section
                className="mb-20"
                {...fadeIn}
                transition={{ delay: 0.2 }}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* Education */}
                    <motion.div variants={fadeInUp}>
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <FaGraduationCap className="text-primary" /> Education
                        </h2>
                        <div className="space-y-6">
                            {data.education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white dark:bg-dark/50 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 h-full"
                                    {...cardHoverSmall}
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-white">{edu.school}</h3>
                                            <p className="text-primary font-medium">{edu.degree}</p>
                                        </div>
                                        <div className="bg-white p-2 rounded-lg h-12 w-12 flex items-center justify-center overflow-hidden">
                                            {edu.logo ? (
                                                <div className="relative w-full h-full">
                                                    <Image
                                                        src={edu.logo}
                                                        alt={edu.school}
                                                        fill
                                                        className="object-contain"
                                                    />
                                                </div>
                                            ) : (
                                                <FaUniversity className="text-green-400 text-xl" />
                                            )}
                                        </div>
                                    </div>
                                    <p className="text-gray-400 text-sm mb-4">{edu.location} • {edu.date}</p>
                                    <p className="text-gray-300 text-sm">
                                        {edu.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Experience */}
                    <motion.div variants={fadeInUp} transition={{ delay: 0.1 }}>
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <FaBriefcase className="text-primary" /> Open to Work
                        </h2>
                        <div className="space-y-6">
                            {data.experience.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white dark:bg-dark/50 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 h-full"
                                    {...cardHoverSmall}
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                                            <p className="text-primary font-medium">{exp.company}</p>
                                        </div>
                                        <div className="bg-blue-500/20 p-2 rounded-lg">
                                            <FaCode className="text-blue-400 text-xl" />
                                        </div>
                                    </div>
                                    <p className="text-gray-400 text-sm mb-4">{exp.location} • {exp.date}</p>
                                    <p className="text-gray-300 text-sm">
                                        {exp.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Certifications Section */}
            <motion.section
                className="mb-20"
                {...fadeIn}
                transition={{ delay: 0.3 }}
            >
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold mb-8 flex items-center justify-center gap-2">
                        <FaCertificate className="text-primary" /> Certifications
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {data.certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                className="bg-white/5 p-6 rounded-xl shadow-sm border border-white/5 flex items-center gap-4 hover:border-primary/20 transition-all"
                                variants={fadeInUp}
                                {...cardHoverSmall}
                            >
                                <div className="bg-yellow-500/20 p-3 rounded-full">
                                    <FaCertificate className="text-yellow-400 text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white">{cert.title}</h3>
                                    <p className="text-primary text-sm">{cert.issuer}</p>
                                    <p className="text-gray-400 text-xs mt-1">{cert.date}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>
        </div>
    )
}
