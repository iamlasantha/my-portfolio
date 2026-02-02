'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ParallaxBackground() {
    const ref = useRef(null);
    const { scrollY } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    // Create different scroll speeds for depth perception
    const y1 = useTransform(scrollY, [0, 1000], [0, 300]);   // Moves down slowly
    const y2 = useTransform(scrollY, [0, 1000], [0, -200]);  // Moves up slowly
    const y3 = useTransform(scrollY, [0, 1000], [0, 100]);   // Moves down very slowly
    const rotate1 = useTransform(scrollY, [0, 1000], [0, 90]);
    const rotate2 = useTransform(scrollY, [0, 1000], [0, -45]);

    return (
        <div ref={ref} className="fixed inset-0 w-full h-full pointer-events-none -z-10 overflow-hidden">

            {/* Orb 1: Top Right - Primary Color */}
            <motion.div
                style={{ y: y1, rotate: rotate1 }}
                className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[100px]"
            />

            {/* Orb 2: Bottom Left - Secondary Color */}
            <motion.div
                style={{ y: y2, rotate: rotate2 }}
                className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-secondary/10 blur-[120px]"
            />

            {/* Orb 3: Center Right - Mixed */}
            <motion.div
                style={{ y: y3 }}
                className="absolute top-[40%] right-[10%] w-[300px] h-[300px] rounded-full bg-blue-500/10 blur-[80px]"
            />

            {/* Grid Overlay for texture */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />

        </div>
    );
}
