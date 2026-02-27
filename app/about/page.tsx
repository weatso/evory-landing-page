"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Navbar from "../components/Navbar";
import MagneticButton from "../components/MagneticButton";
import TextReveal from "../components/TextReveal";

export default function About() {
  const mainRef = useRef(null); // Define mainRef for overall scroll tracking

  // Setup Parallax untuk gambar di seksi "Our Story"
  const storyRef = useRef(null);
  const { scrollYProgress: storyScroll } = useScroll({
    target: storyRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(storyScroll, [0, 1], [-100, 100]);

  // Parallax untuk text watermark di background section The Commitment
  const { scrollYProgress: commitmentProgress } = useScroll({
    target: mainRef, // Kita gunakan seluruh body scroll untuk simplicity parallax
    offset: ["start start", "end end"]
  });
  const y1 = useTransform(commitmentProgress, [0, 1], [0, 300]);

  return (
    <main ref={mainRef} className="bg-[#F9F8F4] min-h-screen text-zinc-800 overflow-x-hidden">
      <Navbar />

      {/* 1. HEADER SECTION */}
      <section className="px-6 md:px-24 pt-40 md:pt-56 pb-20 md:pb-32 max-w-7xl mx-auto text-center flex flex-col items-center justify-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="text-[10px] tracking-[0.4em] uppercase text-[#D4AF37] mb-8 font-bold flex items-center gap-4"
        >
          <span className="w-8 h-[1px] bg-[#D4AF37]"></span> Our Philosophy <span className="w-8 h-[1px] bg-[#D4AF37]"></span>
        </motion.p>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
            className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-none md:leading-[1.1] mb-12"
          >
            More than <span className="italic text-zinc-400">invitations.</span> <br /> We build <span className="italic text-[#D4AF37]">legacies.</span>
          </motion.h1>
        </div>
      </section>

      {/* 2. OUR STORY SECTION (With Parallax Image) */}
      <section ref={storyRef} className="px-6 md:px-24 py-16 md:py-24 max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24 items-center">
        <div className="w-full md:w-1/2">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="font-serif text-4xl md:text-5xl mb-8">How It <span className="italic text-[#D4AF37]">Started</span></h2>
            <p className="font-sans text-sm text-zinc-600 leading-loose mb-6">
              Semuanya bermula dari sebuah gagasan sederhana: Undangan digital tidak seharusnya hanya menjadi sekadar tautan yang diklik dan dilupakan dalam hitungan detik.
            </p>
            <p className="font-sans text-sm text-zinc-600 leading-loose">
              Kami menyadari bahwa di balik setiap acara pernikahan, terdapat cerita cinta yang mendalam, emosi yang tulus, dan perjalanan yang panjang. Evory lahir dari keinginan untuk menerjemahkan keindahan tersebut ke dalam sebuah kanvas digital yang elegan, abadi, dan memberikan impresi pertama yang tak terlupakan bagi setiap tamu Anda.
            </p>
          </motion.div>
        </div>

        {/* Gambar dengan Parallax Effect */}
        <div className="w-full md:w-1/2 relative aspect-[3/4] md:aspect-[4/5] overflow-hidden bg-zinc-200">
          <motion.div style={{ y: imageY }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
            <Image
              src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069"
              alt="Evory Story"
              fill
              className="object-cover filter sepia-[0.1]"
            />
          </motion.div>
        </div>
      </section>

      {/* 3. VISION & MISSION SECTION */}
      <section className="bg-[#2C2C2C] text-[#F9F8F4] py-20 md:py-32 px-6 md:px-24 mt-16 md:mt-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[url('https://www.freepnglogos.com/uploads/flower-png/vintage-flowers-png-transparent-image-1.png')] bg-contain bg-no-repeat opacity-5 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* Visi */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <p className="text-[10px] tracking-[0.3em] text-[#D4AF37] uppercase mb-4 font-bold">The Vision</p>
            <h3 className="font-serif text-3xl md:text-4xl mb-6 leading-relaxed">
              Mendefinisikan ulang standar <span className="italic text-[#D4AF37]">digital romance</span> di era modern.
            </h3>
            <p className="font-sans text-sm text-zinc-400 leading-loose">
              Menjadi pionir agensi pernikahan yang memadukan keindahan seni editorial klasik dengan kecanggihan teknologi web, menciptakan warisan digital yang akan dikenang sepanjang masa.
            </p>
          </motion.div>

          {/* Misi */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
            <p className="text-[10px] tracking-[0.3em] text-[#D4AF37] uppercase mb-6 font-bold">Our Mission</p>
            <ul className="space-y-8 font-sans text-sm text-zinc-400">
              <motion.li initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="flex gap-6">
                <span className="font-serif text-2xl text-[#D4AF37] italic">01</span>
                <p className="leading-loose">Merancang undangan digital responsif dan estetik yang merepresentasikan karakter unik dari setiap pasangan.</p>
              </motion.li>
              <motion.li initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="flex gap-6">
                <span className="font-serif text-2xl text-[#D4AF37] italic">02</span>
                <p className="leading-loose">Mengabadikan momen candid dan otentik melalui kacamata jurnalistik yang bercerita.</p>
              </motion.li>
              <motion.li initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.6 }} className="flex gap-6">
                <span className="font-serif text-2xl text-[#D4AF37] italic">03</span>
                <p className="leading-loose">Memberikan pelayanan eksklusif yang berfokus pada detail, kesempurnaan, dan kepuasan klien.</p>
              </motion.li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* 4. THE COMMITMENT SECTION */}
      <section className="px-6 md:px-24 py-20 md:py-32 max-w-5xl mx-auto text-center relative">
        <motion.div
          style={{ y: y1 }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02]"
        >
          <span className="font-serif text-[10rem] md:text-[20rem] whitespace-nowrap text-zinc-900 leading-none">STANDARD</span>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="relative z-10">
          <div className="mb-10 w-full flex justify-center">
            <TextReveal text="The Evory Standard" className="font-serif text-3xl sm:text-4xl md:text-6xl text-zinc-800" highlightWords={["Standard"]} />
          </div>
          <p className="font-sans text-xs md:text-sm text-zinc-600 leading-loose max-w-3xl mx-auto text-justify md:text-center">
            Bagi kami, kesempurnaan bukanlah sebuah pilihan, melainkan keharusan. Keseriusan Evory terletak pada dedikasi kami di setiap piksel, setiap baris kode, dan setiap bidikan lensa.
          </p>
        </motion.div>
      </section>

      {/* 5. THE TEAM SECTION */}
      <section className="bg-[#EBE9E1] px-6 md:px-24 py-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-24">
            <h2 className="font-serif text-5xl italic text-zinc-800">The Visionaries</h2>
            <p className="text-[10px] tracking-[0.3em] uppercase text-zinc-500 mt-4 font-bold">Minds Behind Evory</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            {/* Team Member 1 */}
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group cursor-pointer">
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-zinc-200 mb-8 shadow-xl">
                <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800" alt="Adit - Founder" fill className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105" />
              </div>
              <div className="border-b border-zinc-300 pb-4 mb-4">
                <h3 className="font-serif text-3xl text-zinc-800">Adit</h3>
                <p className="text-[10px] tracking-[0.2em] text-[#D4AF37] uppercase mt-2 font-bold">Founder & Lead Web Developer</p>
              </div>
              <p className="font-sans text-xs text-zinc-600 leading-relaxed">
                Memadukan keahlian teknis dalam pengembangan web dengan insting estetika UI/UX yang tajam. Adit memastikan bahwa setiap baris kode yang ditulis tidak hanya berfungsi sempurna, tetapi juga mampu memberikan pengalaman digital yang memanjakan mata.
              </p>
            </motion.div>

            {/* Team Member 2 */}
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="group cursor-pointer">
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-zinc-200 mb-8 shadow-xl mt-0 md:mt-24">
                <Image src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800" alt="Sarah - Art Director" fill className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105" />
              </div>
              <div className="border-b border-zinc-300 pb-4 mb-4">
                <h3 className="font-serif text-3xl text-zinc-800">Sarah</h3>
                <p className="text-[10px] tracking-[0.2em] text-[#D4AF37] uppercase mt-2 font-bold">Art Director & Photographer</p>
              </div>
              <p className="font-sans text-xs text-zinc-600 leading-relaxed">
                Mata di balik lensa Evory. Sarah memiliki kemampuan luar biasa untuk menangkap keintiman dan emosi mentah menjadi sebuah karya visual bergaya editorial. Ia memastikan setiap detail visual Evory memiliki jiwa.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. MINI CTA FOOTER */}
      <section className="py-16 md:py-24 text-center px-6">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-serif text-2xl sm:text-3xl md:text-4xl text-zinc-800 mb-8">
          Siap memulai perjalanan visual Anda bersama kami?
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
          <MagneticButton>
            <a
              href="https://wa.me/6281234567890?text=Halo%20Evory"
              target="_blank" rel="noopener noreferrer"
              className="inline-block border border-zinc-800 text-zinc-800 px-10 py-4 text-xs tracking-[0.2em] uppercase hover:bg-zinc-800 hover:text-[#F9F8F4] transition-colors duration-300"
            >
              Contact Evory
            </a>
          </MagneticButton>
        </motion.div>
      </section>

    </main>
  );
}