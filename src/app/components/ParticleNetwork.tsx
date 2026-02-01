"use client";

import { useEffect, useRef } from "react";

interface Particle {
    x: number;
    y: number;
    dx: number;
    dy: number;
    size: number;
}

const ParticleNetwork = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];
        // const particleCount = 100; // Number of particles - REPLACED BY DYNAMIC COUNT
        const connectionDistance = 150; // Distance to connect particles
        const mouseParams = { x: 0, y: 0, radius: 200 }; // Interaction radius

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        const initParticles = () => {
            particles = [];
            const numberOfParticles = (window.innerWidth * window.innerHeight) / 15000; // Responsive count
            for (let i = 0; i < numberOfParticles; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    dx: (Math.random() - 0.5) * 0.5, // Slow horizontal speed
                    dy: (Math.random() - 0.5) * 0.5, // Slow vertical speed
                    size: Math.random() * 2 + 1,
                });
            }
        };

        const drawParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Update and draw particles
            particles.forEach((particle) => {
                // Move particle
                particle.x += particle.dx;
                particle.y += particle.dy;

                // Bounce off edges
                if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1;
                if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1;

                // Draw particle
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fillStyle = "rgba(100, 255, 218, 0.5)"; // Light teal color
                ctx.fill();

                // Connect particles
                particles.forEach((otherParticle) => {
                    const dx = particle.x - otherParticle.x;
                    const dy = particle.y - otherParticle.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(100, 255, 218, ${0.1 - distance / connectionDistance / 10})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(otherParticle.x, otherParticle.y);
                        ctx.stroke();
                    }
                });

                // Interactive: Connect to mouse
                const dx = mouseParams.x - particle.x;
                const dy = mouseParams.y - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < mouseParams.radius) {
                    // Optional: gently attract particle to mouse
                    // const forceDirectionX = dx / distance;
                    // const forceDirectionY = dy / distance;
                    // const force = (mouseParams.radius - distance) / mouseParams.radius;
                    // const directionX = forceDirectionX * force * 0.05;
                    // const directionY = forceDirectionY * force * 0.05;
                    // particle.dx += directionX; 
                    // particle.dy += directionY;

                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(100, 255, 218, ${0.2 - distance / mouseParams.radius / 5})`; // Slightly brighter connection to cursor
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particle.x, particle.y);
                    ctx.lineTo(mouseParams.x, mouseParams.y);
                    ctx.stroke();
                }
            });

            animationFrameId = requestAnimationFrame(drawParticles);
        };

        const handleMouseMove = (event: MouseEvent) => {
            mouseParams.x = event.clientX;
            mouseParams.y = event.clientY;
        };

        window.addEventListener("resize", resizeCanvas);
        window.addEventListener("mousemove", handleMouseMove);

        resizeCanvas();
        drawParticles();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
            style={{ background: '#0A0E27' }} // Fallback background color matching theme
        />
    );
};

export default ParticleNetwork;
