"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Particle component for ambient light
export default function FloatingBokeh() {
    const [particles, setParticles] = useState<{ id: number; left: number; top: number; size: number; duration: number; delay: number }[]>([]);

    useEffect(() => {
        const isMobile = window.innerWidth < 768;
        const particleCount = isMobile ? 15 : 40; // Kurangi jumlah di mobile agar performa aman

        const generateParticles = Array.from({ length: particleCount }).map((_, i) => ({
            id: i,
            left: Math.random() * 100, // percentage
            top: Math.random() * 100, // percentage
            size: Math.random() * 4 + 2, // 2px to 6px
            duration: Math.random() * 10 + 10, // 10s to 20s animation duration
            delay: Math.random() * 5, // random start delay
        }));

        setParticles(generateParticles);
    }, []);

    if (particles.length === 0) return null;

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute rounded-full bg-[#D4AF37] blur-[1px]" // Warm golden bokeh
                    style={{
                        left: `${p.left}%`,
                        top: `${p.top}%`,
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                    }}
                    initial={{ opacity: 0, y: 0, scale: 0.5 }}
                    animate={{
                        opacity: [0, 0.4, 0.8, 0.4, 0], // Pulse in and out
                        y: [-20, -100], // Float up gently
                        x: [0, Math.random() > 0.5 ? 30 : -30], // Slight drift sideways
                        scale: [0.5, 1.2, 0.5]
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        delay: p.delay,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
}
