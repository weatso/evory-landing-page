"use client";

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [bg, setBg] = useState("transparent");
  const [menuOpen, setMenuOpen] = useState(false);

  // Mencegah scroll saat menu terbuka
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    // Sembunyikan navbar saat scroll ke bawah, munculkan saat scroll ke atas
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    // Ubah background menjadi solid jika sudah melewati hero section
    if (latest > 100) setBg("rgba(249, 248, 244, 0.9)");
    else setBg("transparent");
  });

  return (
    <>
      <motion.nav
        variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
        animate={hidden && !menuOpen ? "hidden" : "visible"}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed top-0 w-full z-50 px-6 md:px-12 py-6 flex justify-between items-center backdrop-blur-sm transition-colors duration-300"
        style={{ backgroundColor: menuOpen ? "transparent" : bg }}
      >
        <Link href="/" onClick={() => setMenuOpen(false)} className="relative z-[60] flex items-center h-10 md:h-14 hover:opacity-70 transition-opacity">
          <img src="/logo.svg" alt="Evory Logo" className="object-contain h-full w-auto" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 font-sans text-[10px] md:text-xs tracking-[0.2em] uppercase text-zinc-800 font-medium relative z-[60]">
          <Link href="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
          <Link href="/about" className="hover:text-[#D4AF37] transition-colors">About Us</Link>
          <Link href="/works" className="hover:text-[#D4AF37] transition-colors">Works</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden font-sans text-[10px] tracking-[0.2em] uppercase text-zinc-800 font-bold relative z-[60] p-2 hover:opacity-70 transition-opacity"
        >
          {menuOpen ? "CLOSE" : "MENU"}
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[55] bg-[#F9F8F4] flex flex-col items-center justify-center gap-12"
          >
            <Link onClick={() => setMenuOpen(false)} href="/" className="font-serif text-5xl italic text-zinc-800 hover:text-[#D4AF37] transition-colors">
              Home
            </Link>
            <Link onClick={() => setMenuOpen(false)} href="/about" className="font-serif text-5xl italic text-zinc-800 hover:text-[#D4AF37] transition-colors">
              About Us
            </Link>
            <Link onClick={() => setMenuOpen(false)} href="/works" className="font-serif text-5xl italic text-zinc-800 hover:text-[#D4AF37] transition-colors">
              Works
            </Link>

            <div className="absolute bottom-12 text-center">
              <p className="text-[10px] tracking-[0.3em] uppercase text-zinc-400 font-sans mb-4">Connect with Us</p>
              <div className="flex gap-6 font-sans text-[10px] uppercase tracking-[0.2em] text-zinc-800 mt-2">
                <a href="#" className="hover:text-[#D4AF37]">Instagram</a>
                <a href="#" className="hover:text-[#D4AF37]">WhatsApp</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}