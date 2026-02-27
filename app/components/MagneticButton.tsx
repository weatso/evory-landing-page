"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useRef, ReactNode, useState } from "react";

interface MagneticButtonProps {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
    href?: string;
}

export default function MagneticButton({ children, className = "", onClick, href }: MagneticButtonProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth out the movement with a spring physics model
    const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
    const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

    // Map mouse movement to slight rotation for 3D feel
    const rotateX = useTransform(springY, [-50, 50], [10, -10]);
    const rotateY = useTransform(springX, [-50, 50], [-10, 10]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();

        // Calculate distance from center of element (-1 to 1) and scale by a factor (e.g., 20px max movement)
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        x.set((clientX - centerX) * 0.4);
        y.set((clientY - centerY) * 0.4);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const content = (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            style={{
                x: springX,
                y: springY,
                rotateX: isHovered ? rotateX : 0,
                rotateY: isHovered ? rotateY : 0,
            }}
            className={`inline-block relative ${className}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            {/* Glare effect on hover */}
            {isHovered && (
                <motion.div
                    className="absolute inset-0 bg-white/10 rounded-full blur-md pointer-events-none -z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                />
            )}
            {children}
        </motion.div>
    );

    if (href) {
        return (
            <a href={href} className="inline-block" target="_blank" rel="noopener noreferrer">
                {content}
            </a>
        );
    }

    return (
        <div onClick={onClick} className="inline-block cursor-pointer">
            {content}
        </div>
    );
}
