"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import VisualJourney from "./components/VisualJourney";

const Manifesto = () => {
  return (
    <section className="py-24 md:py-32 bg-[#F9F8F4] px-6 text-center flex flex-col items-center justify-center">
      <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[#E5C185] tracking-[0.4em] uppercase text-xs font-bold mb-6">
        The Evory Standard
      </motion.p>
      <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2, duration: 1 }} viewport={{ once: true }} className="font-sans font-light text-3xl md:text-5xl lg:text-6xl text-[#07303F] max-w-4xl leading-tight">
        Bukan sekadar dokumentasi dan undangan. Kami membangun <span className="font-bold">gerbang emosional</span> menuju memori abadi Anda.
      </motion.h2>
    </section>
  );
};

// Sub-komponen pengeksekusi efek geser Parallax horizontal
const EcosystemItem = ({ svc, index, isLast }: { svc: any, index: number, isLast: boolean }) => {
  const itemRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: itemRef, offset: ["start end", "end start"] });
  // Arah geser bergantian: item ganjil ke kiri, genap ke kanan
  const xOffset = useTransform(scrollYProgress, [0, 1], index % 2 === 0 ? ["5%", "-15%"] : ["-15%", "5%"]);

  return (
    <div ref={itemRef} className={`flex flex-col ${!isLast ? 'border-b border-slate-200 pb-16 md:pb-24' : ''}`}>
      <div className="flex flex-col xl:flex-row items-start xl:items-center gap-2 md:gap-4 mb-2 md:mb-4">
        <span className="text-[#E5C185] font-bold tracking-widest text-xs md:text-sm">0{index + 1}</span>
        {svc.status === "Unlocking Soon" && (
          <span className="bg-slate-100 text-slate-500 px-2 md:px-3 py-1 rounded-sm text-[8px] md:text-[10px] uppercase tracking-widest font-bold">Unlocking Soon</span>
        )}
      </div>
      
      <h3 className={`text-lg md:text-4xl font-bold mb-2 md:mb-4 leading-tight ${svc.status === "Unlocking Soon" ? "text-slate-400" : "text-[#07303F]"}`}>
        {svc.title}
      </h3>
      
      <p className="text-[10px] md:text-base text-slate-500 leading-relaxed mb-6 md:mb-8">
        {svc.desc}
      </p>

      {/* HIGHLIGHT BERGESER HORIZONTAL SAAT DI-SCROLL */}
      <div className="w-full overflow-hidden relative mb-6 md:mb-8">
         <motion.div style={{ x: xOffset }} className="flex gap-4 w-[150%] md:w-[120%]">
            {svc.highlights.map((img: string, imgIdx: number) => (
               <div key={imgIdx} className="relative w-32 h-24 md:w-56 md:h-40 shrink-0 rounded-sm overflow-hidden bg-slate-100">
                  <Image src={img} alt="Highlight" fill className="object-cover" />
               </div>
            ))}
         </motion.div>
      </div>
      
      {svc.status === "Available" && (
        <a href={svc.link} target="_blank" rel="noopener noreferrer" className="self-start text-[9px] md:text-xs font-bold uppercase tracking-widest border-b border-[#07303F] pb-1 hover:text-[#E5C185] hover:border-[#E5C185] transition-colors">
          Explore Platform
        </a>
      )}
    </div>
  );
};

const StickyEcosystem = () => {
  const services = [
    { 
      title: "Digital Invitation", 
      desc: "Platform manajemen tamu cerdas, QR Scanner real-time, dan desain responsif yang mencerminkan kemewahan acara Anda.", 
      status: "Available", link: "https://app.evory.id",
      highlights: [
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=600",
        "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=600",
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=600"
      ]
    },
    { 
      title: "Physical Invitation", 
      desc: "Kertas premium, cetak letterpress eksklusif, dan sentuhan foil emas untuk impresi pertama yang tak terlupakan.", 
      status: "Available", link: "https://app.evory.id",
      highlights: [
        "https://images.unsplash.com/photo-1505909182942-e2f09aee3e89?q=80&w=600",
        "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=600",
        "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=600"
      ]
    },
    { 
      title: "Content Creation", 
      desc: "Pendekatan visual bergaya editorial dan sinematik. Kami menangkap emosi murni di balik layar hari bahagia Anda.", 
      status: "Available", link: "https://app.evory.id",
      highlights: [
        "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=600",
        "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=600",
        "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600"
      ]
    },
    { 
      title: "Wedding Photography", 
      desc: "Menyatukan cahaya, sudut, dan momen yang tidak bisa diulang menjadi mahakarya visual seumur hidup.", 
      status: "Unlocking Soon", link: "#",
      highlights: [
        "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=600",
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=600"
      ]
    },
    { 
      title: "Photobooth Experience", 
      desc: "Bukan sekadar foto, melainkan studio mini interaktif yang akan menjadi pusat tawa bagi tamu undangan Anda.", 
      status: "Unlocking Soon", link: "#",
      highlights: [
        "https://images.unsplash.com/photo-1529636798458-92182e662485?q=80&w=600",
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=600"
      ]
    }
  ];

  return (
    <section id="ecosystem-section" className="bg-white relative">
      <div className="max-w-7xl mx-auto flex flex-row">
        
        {/* KIRI: 1 GAMBAR PAKEM (STATIS) */}
        <div className="w-[35%] md:w-1/2 h-screen sticky top-0 bg-[#07303F] overflow-hidden border-r border-slate-100">
           <Image 
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000" 
              alt="Evory Ecosystem" 
              fill 
              className="object-cover opacity-60 mix-blend-overlay"
           />
           <div className="absolute inset-0 flex items-center justify-center p-4 md:p-12 text-center pointer-events-none z-10">
              <h2 className="text-white font-sans font-bold text-6xl leading-tight hidden md:block drop-shadow-lg">
                The <br/><span className="text-[#E5C185]">Ecosystem.</span>
              </h2>
              <h2 className="text-white font-sans font-bold text-2xl tracking-widest uppercase md:hidden rotate-[-90deg] whitespace-nowrap opacity-50 drop-shadow-md">
                ECOSYSTEM
              </h2>
           </div>
        </div>

        {/* KANAN: DAFTAR LAYANAN DENGAN PARALLAX HIGHLIGHT */}
        <div className="w-[65%] md:w-1/2 py-12 md:py-32 px-6 md:px-16 flex flex-col gap-16 md:gap-32">
          {services.map((svc, i) => (
            <EcosystemItem key={i} svc={svc} index={i} isLast={i === services.length - 1} />
          ))}
        </div>

      </div>
    </section>
  );
};

const PartnerMarquee = () => {
  const partnerLogos = [
    "/logo/logo-blue.png",
    "/logo/logo-gold.png",
    "/logo/logo-emblem.png",
    "/logo/logo-blue.png",
    "/logo/logo-gold.png",
  ];

  return (
    <div className="py-12 md:py-16 bg-[#F9F8F4] border-y border-slate-200 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-[#F9F8F4] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-[#F9F8F4] to-transparent z-10 pointer-events-none"></div>
      <div className="text-center mb-6 md:mb-8">
        <p className="text-[8px] md:text-[10px] tracking-[0.3em] uppercase text-slate-400 font-bold">Trusted By Industry Leaders</p>
      </div>
      <motion.div 
        animate={{ x: ["0%", "-50%"] }} 
        transition={{ ease: "linear", duration: 25, repeat: Infinity }}
        className="flex whitespace-nowrap items-center gap-16 md:gap-24 px-12"
      >
        {[...partnerLogos, ...partnerLogos, ...partnerLogos].map((logo, i) => (
          <div key={i} className="relative shrink-0 w-24 h-10 md:w-32 md:h-12 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
             <Image src={logo} alt={`Partner ${i}`} fill className="object-contain" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default function Home() {
  return (
    <main className="bg-[#F9F8F4] relative font-sans">
      <Navbar />
      <Hero />
      
      <Manifesto />
      <StickyEcosystem />

      {/* PORTFOLIO HIGHLIGHT DIKEMBALIKAN */}
      <div id="highlight-section">
        <VisualJourney />
      </div>

      <PartnerMarquee />
      
      {/* ID PENANDA UNTUK NAVIGASI JANGKAR */}
      <div id="testimonials-section">
        <Testimonials />
      </div>
      
      <div id="faq-section">
        <FAQ />
      </div>

      <footer className="bg-[#07303F] text-white py-24 px-6 md:px-24 flex flex-col items-center text-center relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <p className="text-[10px] tracking-[0.3em] text-[#E5C185] uppercase mb-6 font-bold">Enter The Platform</p>
          <h2 className="font-sans font-bold text-4xl md:text-5xl mb-8 leading-tight">Start managing your eternal story today.</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://app.evory.id" target="_blank" rel="noopener noreferrer" className="border-2 border-[#E5C185] bg-[#E5C185] text-[#07303F] font-bold px-10 py-4 text-xs tracking-[0.2em] uppercase hover:bg-transparent hover:text-[#E5C185] transition-colors duration-300 w-full sm:w-auto">
              Open Dashboard
            </a>
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="border-2 border-transparent text-white font-bold px-10 py-4 text-xs tracking-[0.2em] uppercase hover:border-white transition-colors duration-300 w-full sm:w-auto">
              Contact Sales
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 opacity-5 pointer-events-none w-96 h-96">
            <Image src="/logo/logo-emblem.png" alt="Emblem" fill className="object-contain" />
        </div>
      </footer>
    </main>
  );
}