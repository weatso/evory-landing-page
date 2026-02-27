"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "../components/Navbar";
import { useState } from "react";

const worksData = [
    { id: 1, src: "https://images.unsplash.com/photo-1519741497674-611481863552", title: "A Tale of Two", category: "Wedding", height: "h-[400px]" },
    { id: 2, src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622", title: "The First Dance", category: "Engagement", height: "h-[300px]" },
    { id: 3, src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8", title: "Golden Hour", category: "Pre-Wedding", height: "h-[500px]" },
    { id: 4, src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed", title: "Eternal Vows", category: "Wedding", height: "h-[350px]" },
    { id: 5, src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf", title: "Tears of Joy", category: "Micro Wedding", height: "h-[450px]" },
    { id: 6, src: "https://images.unsplash.com/photo-1606800052052-a08af7148866", title: "Just Married", category: "Elopement", height: "h-[300px]" },
    { id: 7, src: "https://images.unsplash.com/photo-1505909182942-e2f09aee3e89", title: "The Getaway", category: "Post-Wedding", height: "h-[400px]" },
    { id: 8, src: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e", title: "Bridal Party", category: "Wedding", height: "h-[500px]" },
];

export default function Works() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <main className="bg-[#F9F8F4] min-h-screen text-zinc-800 overflow-x-hidden pt-32">
            <Navbar />

            <section className="px-6 md:px-24 mb-20 text-center">
                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-[10px] tracking-[0.4em] uppercase text-[#D4AF37] mb-6 font-bold">
                    Our Portfolio
                </motion.p>
                <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="font-serif text-5xl md:text-7xl mb-8">
                    Selected <span className="italic text-[#D4AF37]">Stories.</span>
                </motion.h1>
            </section>

            <section className="px-6 md:px-12 pb-32">
                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {worksData.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className={`relative w-full overflow-hidden group cursor-pointer ${item.height} mb-6 break-inside-avoid`}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <Image
                                src={`${item.src}?q=80&w=800`}
                                alt={item.title}
                                fill
                                className={`object-cover transition-transform duration-700 ${hoveredIndex === index ? "scale-110 filter brightness-75" : "filter sepia-[0.2]"}`}
                            />

                            <div
                                className={`absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 ${hoveredIndex === index ? "opacity-100" : "opacity-0"}`}
                            >
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={hoveredIndex === index ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <p className="font-sans text-[9px] tracking-[0.2em] uppercase text-[#D4AF37] mb-2">{item.category}</p>
                                    <h3 className="font-serif text-2xl lg:text-3xl text-white">{item.title}</h3>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Footer minimal untuk works */}
            <footer className="border-t border-zinc-800 py-12 text-center text-[10px] uppercase tracking-[0.2em] opacity-40">
                © {new Date().getFullYear()} EVORY WEDDING. All rights reserved.
            </footer>
        </main>
    );
}
