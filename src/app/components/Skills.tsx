'use client'

import { skills } from '@/contents/skills'
import { motion } from 'framer-motion'
import { fadeInUp, cardHover, staggerContainer } from '@/utils/animations'

export default function Skills() {
    return (
        <section id="skills" className="py-16 md:py-20 bg-transparent scroll-mt-20">
            <div className="container max-w-7xl mx-auto px-4">
                <motion.div
                    className="text-center mb-16"
                    {...fadeInUp}
                >
                    <h2 className="text-3xl font-bold mb-4">Technical Expertise</h2>
                    <div className="w-24 h-1.5 bg-green-500 mx-auto rounded-full"></div>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                >
                    {/* Frontend */}
                    <motion.div
                        className="bg-[#1a1f35] border-2 border-emerald-500/30 rounded-2xl p-8 hover:border-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] hover:-translate-y-1 hover:bg-[#1f243d] transition-all duration-300 group"
                        variants={fadeInUp}
                        {...cardHover}
                    >
                        <h3 className="text-xl font-bold mb-6 text-emerald-400 border-b border-emerald-500/20 pb-2">Frontend</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {skills.frontend.map((skill) => (
                                <div key={skill.name} className="flex flex-col items-center justify-center gap-3 p-4 rounded-xl bg-[#111625] hover:bg-[#1a1f35] transition-colors border border-white/5 text-gray-300 group-hover:text-white">
                                    {skill.icon && <skill.icon className="text-3xl" />}
                                    <span className="text-sm font-medium">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Backend */}
                    <motion.div
                        className="bg-[#1a1f35] border-2 border-emerald-500/30 rounded-2xl p-8 hover:border-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] hover:-translate-y-1 hover:bg-[#1f243d] transition-all duration-300 group"
                        variants={fadeInUp}
                        {...cardHover}
                    >
                        <h3 className="text-xl font-bold mb-6 text-emerald-400 border-b border-emerald-500/20 pb-2">Backend</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {skills.backend.map((skill) => (
                                <div key={skill.name} className="flex flex-col items-center justify-center gap-3 p-4 rounded-xl bg-[#111625] hover:bg-[#1a1f35] transition-colors border border-white/5 text-gray-300 group-hover:text-white">
                                    {skill.icon ? (
                                        <skill.icon className="text-3xl" />
                                    ) : (
                                        <div className="h-[30px] flex items-center justify-center font-bold text-lg">API</div>
                                    )}
                                    <span className="text-sm font-medium">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Tools */}
                    <motion.div
                        className="bg-[#1a1f35] border-2 border-emerald-500/30 rounded-2xl p-8 hover:border-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] hover:-translate-y-1 hover:bg-[#1f243d] transition-all duration-300 group"
                        variants={fadeInUp}
                        {...cardHover}
                    >
                        <h3 className="text-xl font-bold mb-6 text-emerald-400 border-b border-emerald-500/20 pb-2">DevOps & Tools</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {skills.tools.map((skill) => (
                                <div key={skill.name} className="flex flex-col items-center justify-center gap-3 p-4 rounded-xl bg-[#111625] hover:bg-[#1a1f35] transition-colors border border-white/5 text-gray-300 group-hover:text-white">
                                    {skill.icon && <skill.icon className="text-3xl" />}
                                    <span className="text-sm font-medium">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
