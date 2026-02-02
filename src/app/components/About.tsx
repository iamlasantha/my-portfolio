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
import { FaGraduationCap, FaBriefcase, FaUniversity, FaCode, FaCertificate, FaLinkedin } from 'react-icons/fa'

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
                <div className="flex justify-center max-w-6xl mx-auto">
                    {/* Bio Text - Centered & No Image */}
                    <div className="w-full max-w-4xl bg-white/5 p-8 md:p-12 rounded-2xl border border-white/10 backdrop-blur-sm shadow-sm flex flex-col justify-center">
                        {bio.map((paragraph, index) => (
                            <p key={index} className="font-bilbo text-2xl md:text-3xl text-gray-300 mb-4 leading-relaxed text-justify last:mb-0 tracking-wide">
                                {index === 0 && '"'}
                                {paragraph}
                                {index === bio.length - 1 && '"'}
                            </p>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Education & Experience Timeline */}
            <motion.section
                className="mb-20"
                {...fadeIn}
                transition={{ delay: 0.2 }}
            >
                <div className="max-w-4xl mx-auto space-y-20">

                    {/* Education Timeline */}
                    <div className="relative">
                        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
                            <div className="p-3 rounded-lg bg-green-500/10">
                                <FaGraduationCap className="text-primary text-2xl" />
                            </div>
                            Education
                        </h2>

                        <div className="border-l-2 border-white/10 ml-3 md:ml-24 space-y-12 pb-4">
                            {data.education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    className="relative pl-8 md:pl-12"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    {/* Timeline Dot */}
                                    <div className="absolute top-2 -left-[9px] w-5 h-5 rounded-full border-4 border-dark bg-primary shadow-lg shadow-primary/50" />

                                    {/* Date - Left Side Desktop */}
                                    <div className="md:absolute md:-left-52 md:top-1 md:w-40 md:text-right mb-2 md:mb-0">
                                        <span className="text-xl font-bold text-primary block">{edu.date}</span>
                                        <span className="text-sm text-gray-400">{edu.location}</span>
                                    </div>

                                    {/* Content Card */}
                                    <div className="bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/5">
                                        <div className="flex items-center justify-between mb-4">
                                            <div>
                                                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary transition-colors">{edu.school}</h3>
                                                <p className="text-gray-300 font-medium text-lg mt-1">{edu.degree}</p>
                                            </div>
                                            {edu.logo && (
                                                <div className="hidden md:block w-16 h-16 bg-white rounded-lg p-2 shrink-0 opacity-80 group-hover:opacity-100 transition-opacity">
                                                    <Image
                                                        src={edu.logo}
                                                        alt={edu.school}
                                                        width={64}
                                                        height={64}
                                                        className="object-contain w-full h-full"
                                                    />
                                                </div>
                                            )}
                                        </div>
                                        <p className="text-gray-400 leading-relaxed">
                                            {edu.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Experience Timeline */}
                    <div className="relative">
                        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
                            <div className="p-3 rounded-lg bg-blue-500/10">
                                <FaBriefcase className="text-blue-400 text-2xl" />
                            </div>
                            Experience
                        </h2>

                        <div className="border-l-2 border-white/10 ml-3 md:ml-24 space-y-12 pb-4">
                            {data.experience.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    className="relative pl-8 md:pl-12"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    {/* Timeline Dot */}
                                    <div className="absolute top-2 -left-[9px] w-5 h-5 rounded-full border-4 border-dark bg-blue-500 shadow-lg shadow-blue-500/50" />

                                    {/* Date - Left Side Desktop */}
                                    <div className="md:absolute md:-left-52 md:top-1 md:w-40 md:text-right mb-2 md:mb-0">
                                        <span className="text-xl font-bold text-blue-400 block">{exp.date}</span>
                                        <span className="text-sm text-gray-400">{exp.location}</span>
                                    </div>

                                    {/* Content Card */}
                                    <div className="bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all duration-300 group hover:shadow-lg hover:shadow-blue-500/5">
                                        <div className="flex items-center justify-between mb-4">
                                            <div>
                                                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">{exp.title}</h3>
                                                <p className="text-gray-300 font-medium text-lg mt-1">{exp.company}</p>
                                            </div>
                                            <div className="hidden md:flex bg-blue-500/20 p-3 rounded-lg items-center justify-center shrink-0">
                                                <FaCode className="text-blue-400 text-2xl" />
                                            </div>
                                        </div>
                                        <p className="text-gray-400 leading-relaxed">
                                            {exp.description}
                                        </p>

                                        {/* Roles Badges */}
                                        {/* @ts-ignore - roles is optional/new property */}
                                        {exp.roles && (
                                            <div className="mt-6 flex flex-wrap gap-3">
                                                {/* @ts-ignore */}
                                                {exp.roles.map((role, i) => (
                                                    <span
                                                        key={i}
                                                        className="px-4 py-1.5 bg-blue-500/10 text-blue-400 rounded-lg text-sm font-medium border border-blue-500/20 hover:bg-blue-500/20 transition-colors"
                                                    >
                                                        {role}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </motion.section>

            {/* Stories & Achievements Section */}
            <motion.section
                className="mb-20"
                {...fadeIn}
                transition={{ delay: 0.3 }}
            >
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl font-bold mb-8 flex items-center justify-center gap-2">
                        <FaLinkedin className="text-primary" /> Stories & Achievements
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {data.stories.map((story, index) => (
                            <motion.a
                                key={index}
                                href={story.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/5 p-6 rounded-xl shadow-sm border border-white/5 flex flex-col gap-4 hover:border-primary/20 transition-all group"
                                variants={fadeInUp}
                                {...cardHoverSmall}
                            >
                                <div className="flex items-start justify-between">
                                    <div className="bg-blue-600/20 p-3 rounded-full">
                                        <FaLinkedin className="text-blue-500 text-xl" />
                                    </div>
                                    <span className="text-xs text-gray-500 border border-white/10 px-2 py-1 rounded-full">{story.date}</span>
                                </div>

                                <div>
                                    <h3 className="font-bold text-white text-lg group-hover:text-primary transition-colors">{story.title}</h3>
                                    <p className="text-gray-400 text-sm mt-2 line-clamp-2">{story.description}</p>
                                </div>

                                <div className="mt-auto pt-4 border-t border-white/5 flex items-center text-sm text-primary font-medium">
                                    Read on LinkedIn <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </motion.section>
        </div>
    )
}
