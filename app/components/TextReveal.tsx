"use client";

import { motion } from "framer-motion";

interface TextRevealProps {
    text: string;
    className?: string;
    delay?: number;
    highlightWords?: string[];
}

export default function TextReveal({ text, className = "", delay = 0, highlightWords = [] }: TextRevealProps) {
    const words = text.split(" ");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: delay * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 50,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className={`overflow-hidden flex flex-wrap justify-center ${className}`}
        >
            {words.map((word, index) => {
                const cleanWord = word.replace(/[.,]/g, "");
                const isHighlight = highlightWords.includes(cleanWord);

                return (
                    <motion.span
                        variants={child}
                        key={index}
                        className={`mr-[0.25em] inline-block ${isHighlight ? "italic text-[#D4AF37]" : ""}`}
                        style={{ paddingBottom: "0.1em" }}
                    >
                        {word}
                    </motion.span>
                );
            })}
        </motion.div>
    );
}
