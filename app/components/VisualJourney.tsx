"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const images = [
    "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=2070",
    "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1974",
    "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069",
    "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070",
];

export default function VisualJourney() {
    const containerRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);

    return (
        <section ref={containerRef} className="py-16 md:py-40 px-4 md:px-6 bg-[#F9F8F4] overflow-hidden relative">
            <div className="max-w-7xl mx-auto">
                {/* DI HP: Tinggi diatur otomatis (h-auto), tata letak horizontal (flex-row)
                  DI DESKTOP: Tinggi absolut (md:h-[120vh]) 
                */}
                <div className="flex flex-row gap-3 md:gap-10 h-auto md:h-[120vh]">

                    {/* KOLOM 1: Kiri di HP & Desktop */}
                    <motion.div style={{ y: y1 }} className="flex-1 flex flex-col gap-3 md:gap-10 h-full justify-start pt-10 md:pt-20">
                        <div className="relative w-full aspect-[4/5] overflow-hidden rounded-sm group">
                            <Image src={images[0]} alt="Evory Moment" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                        </div>
                        <div className="relative w-full aspect-square overflow-hidden rounded-sm group">
                            <Image src={images[1]} alt="Evory Detail" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                        </div>
                    </motion.div>

                    {/* KOLOM 2: Kanan di HP, Tengah di Desktop */}
                    <motion.div style={{ y: y2 }} className="flex-1 flex flex-col gap-3 md:gap-10 h-full justify-center mt-8 md:mt-0">
                        <div className="relative w-full aspect-[3/4] overflow-hidden rounded-sm group">
                            <Image src={images[2]} alt="Evory Connection" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:opacity-0" />
                        </div>
                        <div className="p-2 md:p-8 flex flex-col justify-center text-center">
                            <p className="font-serif text-lg md:text-3xl italic text-zinc-800 mb-2 md:mb-4">&quot;Elegance never fades.&quot;</p>
                            <p className="text-[8px] md:text-[10px] tracking-[0.3em] uppercase text-[#D4AF37]">Evory Standard</p>
                        </div>
                    </motion.div>

                    {/* KOLOM 3: Disembunyikan di HP, Kanan di Desktop */}
                    <motion.div style={{ y: y3 }} className="flex-1 flex-col gap-10 h-full justify-end pb-20 hidden md:flex">
                        <div className="relative w-full aspect-square overflow-hidden rounded-sm group">
                            <Image src={images[4]} alt="Evory Flowers" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                        </div>
                        <div className="relative w-full aspect-[4/5] overflow-hidden rounded-sm group">
                            <Image src={images[3]} alt="Evory Celebration" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}