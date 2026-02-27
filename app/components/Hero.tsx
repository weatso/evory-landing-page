"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const evoryLetters = "EVORY".split("");

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#2C2C2C]">
      {/* Fallback Image & Video Cinematic Effect */}
      <motion.div
        className="absolute inset-0 z-0 origin-center bg-[#1A1A1A]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {/* Fallback Image if Video fails to load or takes too long */}
        <Image
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070"
          alt="Evory Hero Fallback"
          fill
          className="object-cover brightness-[0.35] absolute inset-0 z-0"
          priority
        />

        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full brightness-[0.35] relative z-10"
        >
          {/* Menggunakan link video alternatif yang lebih reliable */}
          <source src="https://cdn.pixabay.com/video/2021/02/10/64640-511749832_large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>

      {/* Typography & Logo Reveal */}
      <div className="relative z-10 text-center text-[#F9F8F4] flex flex-col items-center">

        {/* LOGO EVORY */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mb-6 relative w-20 h-20 md:w-28 md:h-28"
        >
          <Image
            src="/logo.svg"
            alt="Evory Logo"
            fill
            className="object-contain drop-shadow-lg"
          />
        </motion.div>

        {/* NAMA BRAND STAGGERED REVEAL */}
        <div className="overflow-hidden flex gap-1 md:gap-2">
          {evoryLetters.map((letter, i) => (
            <motion.h1
              key={i}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 1.2,
                ease: [0.76, 0, 0.24, 1],
                delay: i * 0.1 + 0.3, // Staggered delay per huruf
              }}
              className="font-serif text-6xl md:text-8xl lg:text-9xl tracking-widest uppercase"
            >
              {letter}
            </motion.h1>
          ))}
        </div>

        {/* TAGLINE AGENSI */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="font-sans mt-6 text-[9px] sm:text-xs md:text-sm tracking-[0.3em] sm:tracking-[0.4em] uppercase text-[#D4AF37] px-4 text-center"
        >
          Illuminating Your Best Moments
        </motion.p>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center justify-center opacity-70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <p className="text-[8px] uppercase tracking-[0.3em] font-sans text-white mb-2 rotate-90 hidden md:block opacity-50 absolute -left-10 bottom-6">Scroll</p>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-white opacity-50 font-light" strokeWidth={1} />
        </motion.div>
      </motion.div>
    </section>
  );
}