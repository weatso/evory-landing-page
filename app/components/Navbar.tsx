"use client";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false); 
    if (id === "top") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 w-full z-40 transition-all duration-500 ${
          isScrolled 
            ? "bg-[#F9F8F4]/80 backdrop-blur-md border-b border-slate-200/50 py-4 shadow-sm" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          {/* LOGO */}
          <div className="relative w-32 h-10 md:w-40 md:h-12 cursor-pointer z-50" onClick={() => scrollTo("top")}>
            <Image 
              src={isScrolled || mobileMenuOpen ? "/logo/logo-blue.png" : "/logo/logo-gold.png"} 
              alt="Evory" 
              fill 
              className="object-contain object-left transition-opacity duration-300" 
            />
          </div>

          {/* MENU DESKTOP */}
          <div className="hidden md:flex gap-8 items-center">
            <button onClick={() => scrollTo("ecosystem-section")} className={`text-xs font-bold uppercase tracking-[0.2em] transition-colors ${isScrolled ? "text-[#07303F] hover:text-[#E5C185]" : "text-white hover:text-[#E5C185]"}`}>Services</button>
            <button onClick={() => scrollTo("highlight-section")} className={`text-xs font-bold uppercase tracking-[0.2em] transition-colors ${isScrolled ? "text-[#07303F] hover:text-[#E5C185]" : "text-white hover:text-[#E5C185]"}`}>Portfolio</button>
            <button onClick={() => scrollTo("testimonials-section")} className={`text-xs font-bold uppercase tracking-[0.2em] transition-colors ${isScrolled ? "text-[#07303F] hover:text-[#E5C185]" : "text-white hover:text-[#E5C185]"}`}>Testimonials</button>
            <button onClick={() => scrollTo("faq-section")} className={`text-xs font-bold uppercase tracking-[0.2em] transition-colors ${isScrolled ? "text-[#07303F] hover:text-[#E5C185]" : "text-white hover:text-[#E5C185]"}`}>FAQ</button>
            <a href="https://app.evory.id" target="_blank" rel="noopener noreferrer" className={`border-2 px-6 py-3 text-[10px] font-bold uppercase tracking-widest transition-all ${isScrolled ? "border-[#07303F] text-[#07303F] hover:bg-[#07303F] hover:text-[#F9F8F4]" : "border-[#E5C185] text-[#E5C185] hover:bg-[#E5C185] hover:text-[#07303F]"}`}>
              Dashboard
            </a>
          </div>

          {/* TOMBOL MENU MOBILE */}
          <button className="md:hidden z-50" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
             {mobileMenuOpen ? <X className="text-[#07303F]" /> : <Menu className={isScrolled ? "text-[#07303F]" : "text-white"} />}
          </button>
        </div>
      </motion.nav>

      {/* LACI NAVIGASI MOBILE */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-md z-40 md:hidden"
            />
            
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-[70vw] h-screen bg-[#F9F8F4] z-40 shadow-2xl flex flex-col pt-32 px-8 md:hidden gap-8"
            >
              <button onClick={() => scrollTo("highlight-section")} className="text-[#07303F] text-sm font-bold uppercase tracking-widest text-left w-full border-b border-slate-200 pb-4">Portfolio</button>
              <button onClick={() => scrollTo("ecosystem-section")} className="text-[#07303F] text-sm font-bold uppercase tracking-widest text-left w-full border-b border-slate-200 pb-4">Services</button>
              <button onClick={() => scrollTo("faq-section")} className="text-[#07303F] text-sm font-bold uppercase tracking-widest text-left w-full border-b border-slate-200 pb-4">FAQ</button>
              <a href="https://app.evory.id" target="_blank" rel="noopener noreferrer" className="bg-[#07303F] text-[#F9F8F4] text-center font-bold px-6 py-4 text-xs tracking-[0.2em] uppercase mt-4">
                Dashboard
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}