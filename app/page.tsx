"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import MagneticButton from "./components/MagneticButton";
import FloatingBokeh from "./components/FloatingBokeh";
import DigitalServices from "./components/DigitalServices";
import VisualJourney from "./components/VisualJourney";
import TextReveal from "./components/TextReveal";

// --- DATA GAMBAR ---
const portfolioImages = [
  "https://images.unsplash.com/photo-1519741497674-611481863552",
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622",
  "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8",
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed",
  "https://images.unsplash.com/photo-1520854221256-17451cc331bf",
  "https://images.unsplash.com/photo-1606800052052-a08af7148866",
];

const serviceImages = [
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed",
  "https://images.unsplash.com/photo-1606800052052-a08af7148866",
  "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8",
  "https://images.unsplash.com/photo-1505909182942-e2f09aee3e89",
  "https://images.unsplash.com/photo-1520854221256-17451cc331bf"
];

// --- KOMPONEN PARTIKEL DAUN SAKURA ---
type Petal = { id: number; left: number; duration: number; delay: number; rotate: number; scale: number; sway: number; };
const SakuraRain = () => {
  const [petals, setPetals] = useState<Petal[]>([]);
  useEffect(() => {
    // Only render on client to prevent hydration mismatch, reduce amount for cleaner look
    const isMobile = window.innerWidth < 768;
    const count = isMobile ? 12 : 25;

    const timer = setTimeout(() => {
      const generatedPetals = Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        duration: Math.random() * 12 + 10, // Slower fall (10-22s) 
        delay: Math.random() * 8,
        rotate: Math.random() * 360,
        scale: Math.random() * 0.5 + 0.3, // Smaller, more delicate 
        sway: Math.random() > 0.5 ? Math.random() * 150 : -(Math.random() * 150),
      }));
      setPetals(generatedPetals);
    }, 0);
    return () => clearTimeout(timer);
  }, []);
  if (petals.length === 0) return null;
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {petals.map((p) => (
        <motion.div
          key={p.id}
          initial={{ y: -100, x: 0, opacity: 0, rotate: p.rotate, scale: p.scale }}
          animate={{
            y: "120vh",
            x: [0, p.sway / 2, p.sway],
            opacity: [0, 0.6, 0.8, 0],
            rotate: p.rotate + 360
          }}
          transition={{ duration: p.duration, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
          className="absolute top-0 blur-[1px]"
          style={{ left: `${p.left}%` }}
        >
          {/* Petal shape */}
          <div className="w-3 h-4 md:w-5 md:h-6 bg-gradient-to-br from-white to-pink-100 opacity-60 shadow-sm" style={{ borderRadius: '50% 0 50% 0' }} />
        </motion.div>
      ))}
    </div>
  );
};

// --- KOMPONEN GALERI POLAROID ---
const PolaroidGallery = () => {
  const [rotations, setRotations] = useState<number[]>([]);
  useEffect(() => {
    const timer = setTimeout(() => { setRotations(portfolioImages.map((_, i) => (i % 2 === 0 ? -3 : 3) * Math.random())); }, 0);
    return () => clearTimeout(timer);
  }, []);
  return (
    <section className="relative py-16 md:py-32 px-6 md:px-24 bg-[#2C2C2C] text-white overflow-hidden">
      <SakuraRain />
      <div className="relative z-20 mb-20 text-center">
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-serif text-5xl md:text-7xl italic">Selected Romance</motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }} viewport={{ once: true }} className="text-[10px] uppercase tracking-widest opacity-50 mt-4">Our Polaroid Memories</motion.p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto relative z-20">
        {portfolioImages.map((url, i) => {
          const rot = rotations[i] || 0;
          return (
            <motion.div key={i} initial={{ opacity: 0, y: 50, rotate: rot }} whileInView={{ opacity: 1, y: 0, rotate: rot * 0.7 }} whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }} transition={{ delay: i * 0.1 }} className="bg-white p-3 pb-12 shadow-[0_10px_30px_rgba(0,0,0,0.3)] transform transition-all duration-300 relative">
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-zinc-100 filter sepia-[0.2]">
                <Image src={`${url}?q=80&w=800`} alt={`P${i}`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
              </div>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 font-serif italic text-zinc-800 text-lg opacity-80 whitespace-nowrap">
                {["Our Vows", "First Dance", "The Kiss", "Forever Begins", "Golden Hour", "Us"][i]}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

// --- KOMPONEN UTAMA HALAMAN ---
export default function Home() {
  // Setup Sticky Frame
  const stickySectionRef = useRef(null);
  const { scrollYProgress: stickyScroll } = useScroll({ target: stickySectionRef, offset: ["start start", "end end"] });
  const frameY = useTransform(stickyScroll, [0, 1], ["0%", "-80%"]);
  const text1Opacity = useTransform(stickyScroll, [0, 0.4, 0.5], [1, 1, 0]);
  const text2Opacity = useTransform(stickyScroll, [0.5, 0.6, 1], [0, 1, 1]);
  const t1Pointer = useTransform(stickyScroll, (v) => (v < 0.5 ? "auto" : "none") as "auto" | "none");
  const t2Pointer = useTransform(stickyScroll, (v) => (v >= 0.5 ? "auto" : "none") as "auto" | "none");

  // Setup Intro Section Parallax Text
  const introSectionRef = useRef(null);
  const { scrollYProgress: introScroll } = useScroll({
    target: introSectionRef,
    offset: ["start end", "end start"]
  });
  // Parallax lambat untuk background text "FOREVER"
  const textY = useTransform(introScroll, [0, 1], ["0%", "50%"]);

  // Setup Dolly Zoom
  const dollyRef = useRef(null);
  const { scrollYProgress: dollyScroll } = useScroll({ target: dollyRef, offset: ["start end", "end start"] });
  const scaleImage = useTransform(dollyScroll, [0, 1], [1.5, 1]);

  return (
    <main className="bg-[#F9F8F4] relative">
      <Navbar />
      <Hero />

      <VisualJourney />

      {/* Intro Section - Now With Parallax BG Text & Text Reveal */}
      <section ref={introSectionRef} className="py-24 md:py-40 px-6 text-center relative overflow-hidden bg-white">

        {/* Background Faded Parallax Text */}
        <motion.div
          style={{ y: textY }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] overflow-hidden"
        >
          <span className="font-serif text-[15rem] md:text-[30rem] whitespace-nowrap text-zinc-900 leading-none">FOREVER</span>
        </motion.div>

        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[10px] tracking-[0.4em] uppercase text-[#D4AF37] font-bold mb-6 font-sans relative z-10">Welcome to Evory</motion.p>

        {/* Menggunakan TextReveal untuk Animasi Kata-per-Kata yang Elegan */}
        <div className="relative z-10 max-w-5xl mx-auto">
          <TextReveal
            text="We craft digital elegance."
            className="font-serif text-5xl md:text-7xl text-zinc-800 leading-tight mb-8 font-light"
            highlightWords={["digital", "elegance"]}
          />
        </div>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.8, duration: 1 }} viewport={{ once: true }} className="font-sans text-sm md:text-base text-zinc-500 max-w-2xl mx-auto leading-relaxed relative z-10">
          Setiap detail dirancang dengan cermat untuk memastikan undangan dan dokumentasi Anda tidak hanya dilihat, melainkan **dirasakan**.
        </motion.p>
      </section>

      <PolaroidGallery />
      <DigitalServices />

      {/* Sticky Frame Section */}
      <section ref={stickySectionRef} className="relative h-[500vh] bg-[#F9F8F4]">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden z-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-32 w-full max-w-6xl px-6">
            <div className="relative w-[280px] h-[420px] sm:w-[320px] sm:h-[480px] md:w-[420px] md:h-[580px] p-4 pb-16 md:pb-20 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] transform rotate-[-2deg] z-20 flex-shrink-0">
              <div className="relative w-full h-full bg-zinc-200 overflow-hidden shadow-inner filter sepia-[0.1]">
                <motion.div style={{ y: frameY }} className="h-[500%] w-full flex flex-col">
                  {serviceImages.map((url, i) => (
                    <div key={i} className="h-1/5 w-full relative border-b-4 border-white">
                      <Image src={`${url}?q=80&w=800`} alt={`img-${i}`} fill className="object-cover" />
                    </div>
                  ))}
                </motion.div>
              </div>
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-serif italic text-2xl text-zinc-700 opacity-80 whitespace-nowrap">Our Journey Together</div>
              <div className="absolute top-0 left-0 w-full h-full p-4 pb-20 bg-white shadow-md rotate-[5deg] -z-10 border border-zinc-100"></div>
              <div className="absolute top-0 left-0 w-full h-full p-4 pb-20 bg-white shadow-sm rotate-[-4deg] -z-20 border border-zinc-100"></div>
            </div>

            <div className="relative w-full md:w-[400px] h-[300px] font-sans z-20">
              <motion.div style={{ opacity: text1Opacity, pointerEvents: t1Pointer }} className="absolute inset-0 flex flex-col justify-center text-center md:text-left">
                <p className="text-[10px] tracking-[0.3em] text-[#D4AF37] uppercase mb-4 font-bold flex items-center justify-center md:justify-start gap-2"><span className="w-4 h-[1px] bg-[#D4AF37]"></span>The Experience</p>
                <div className="mx-auto md:mx-0 min-h-[50px]">
                  <TextReveal text="Digital Invitation" className="font-serif text-3xl md:text-6xl mb-4 md:mb-6 text-zinc-800 text-center md:text-left" />
                </div>
                <p className="text-xs md:text-sm text-zinc-500 leading-relaxed mb-6 md:mb-8 max-w-sm mx-auto md:mx-0">Desain responsif, elegan, dan abadi. Sempurna untuk impresi pertama momen bahagia Anda.</p>
                <div className="mx-auto md:mx-0">
                  <MagneticButton>
                    <button className="border border-zinc-800 px-8 py-3 md:px-10 md:py-4 text-[9px] md:text-[10px] tracking-[0.2em] uppercase hover:bg-black hover:text-white transition-all shadow-sm">Explore More</button>
                  </MagneticButton>
                </div>
              </motion.div>
              <motion.div style={{ opacity: text2Opacity, pointerEvents: t2Pointer }} className="absolute inset-0 flex flex-col justify-center text-center md:text-left px-6 md:px-0">
                <p className="text-[10px] tracking-[0.3em] text-[#D4AF37] uppercase mb-4 font-bold flex items-center justify-center md:justify-start gap-2"><span className="w-4 h-[1px] bg-[#D4AF37]"></span>The Creator</p>
                <div className="mx-auto md:mx-0 min-h-[50px]">
                  <TextReveal text="Content Creator" className="font-serif text-3xl md:text-6xl mb-4 md:mb-6 text-zinc-800 text-center md:text-left" />
                </div>
                <p className="text-xs md:text-sm text-zinc-500 leading-relaxed mb-6 md:mb-8 max-w-sm mx-auto md:mx-0">Mengabadikan emosi dan tawa bahagia dalam visual sinematik bergaya editorial.</p>
                <div className="mx-auto md:mx-0">
                  <MagneticButton>
                    <button className="border border-zinc-800 px-8 py-3 md:px-10 md:py-4 text-[9px] md:text-[10px] tracking-[0.2em] uppercase hover:bg-black hover:text-white transition-all shadow-sm">Our Works</button>
                  </MagneticButton>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* DOLLY ZOOM SECTION */}
      <section ref={dollyRef} className="relative h-screen md:h-screen w-full overflow-hidden bg-black flex items-center justify-center z-20">
        <FloatingBokeh />
        <motion.div style={{ scale: scaleImage }} className="absolute inset-0 w-full h-[120%] -top-[10%] opacity-60">
          <Image src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070" alt="Dolly Zoom" fill className="object-cover" />
        </motion.div>
        <div className="relative z-10 text-center text-white px-6">
          <motion.h2 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }} className="font-serif text-4xl sm:text-5xl md:text-8xl italic mb-6">A Masterpiece.</motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }} viewport={{ once: true }} className="font-sans text-[9px] sm:text-xs md:text-sm tracking-[0.3em] uppercase">Setiap detik adalah mahakarya seni.</motion.p>
        </div>
      </section>

      {/* NEW SECTIONS ADDED */}
      <div className="relative z-30 bg-[#F9F8F4]">
        <HowItWorks />
        <Testimonials />
        <FAQ />
      </div>

      {/* --- FOOTER CTA --- */}
      <footer className="bg-[#2C2C2C] text-[#F9F8F4] py-20 md:py-32 px-6 md:px-24 flex flex-col items-center text-center relative overflow-hidden z-30 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
        <FloatingBokeh />
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="relative z-10">
          <p className="text-[10px] tracking-[0.3em] text-[#D4AF37] uppercase mb-6 font-bold">Ready to create magic?</p>
          <h2 className="font-serif text-5xl md:text-7xl mb-8 leading-tight">Let&apos;s craft your <br /> <span className="italic text-[#D4AF37]">eternal story.</span></h2>
          <p className="text-sm text-zinc-400 mb-12 max-w-md mx-auto leading-relaxed">Kami siap mendengarkan visi Anda dan mewujudkannya dalam undangan digital dan dokumentasi yang tak terlupakan.</p>
          <MagneticButton>
            <a href="https://wa.me/6281234567890?text=Halo%20Evory" target="_blank" rel="noopener noreferrer" className="inline-block border border-[#D4AF37] text-[#D4AF37] px-12 py-4 text-xs tracking-[0.2em] uppercase hover:bg-[#D4AF37] hover:text-[#2C2C2C] transition-colors duration-300">Let&apos;s Talk</a>
          </MagneticButton>
        </motion.div>

        <div className="w-full max-w-6xl border-t border-zinc-700 mt-20 md:mt-32 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
          <h3 className="font-serif text-3xl tracking-widest text-[#D4AF37]">EVORY</h3>
          <div className="flex gap-8 font-sans text-[10px] tracking-[0.3em] uppercase opacity-50">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 hover:text-[#D4AF37] transition-all">Instagram</a>
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 hover:text-[#D4AF37] transition-all">WhatsApp</a>
            <a href="mailto:hello@evory.com" className="hover:opacity-100 hover:text-[#D4AF37] transition-all">Email</a>
          </div>
          <p className="text-[10px] opacity-30 tracking-[0.2em]">© {new Date().getFullYear()} EVORY WEDDING</p>
        </div>
      </footer>
    </main>
  );
}