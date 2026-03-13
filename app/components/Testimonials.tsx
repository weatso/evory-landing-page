"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah & Jonathan",
    role: "Bali Destination Wedding",
    text: "Evory tidak hanya membuat undangan, mereka menangkap esensi emosi kami. Para tamu tidak berhenti membicarakan betapa elegan dan mewahnya sistem digital yang mereka bangun. Sempurna.",
  },
  {
    name: "Amanda & Michael",
    role: "The Ritz-Carlton Reception",
    text: "Sangat taktis dan profesional. Dari undangan fisik dengan foil emas yang memukau hingga manajemen RSVP digital yang membebaskan kami dari stres. Evory adalah investasi terbaik kami.",
  },
  {
    name: "Jessica & David",
    role: "Intimate Garden Vows",
    text: "Tim dokumentasi mereka luar biasa. Mereka tidak mengatur pose yang kaku, melainkan membiarkan kami menjadi diri sendiri dan menangkap tawa, tangis, serta keajaiban di setiap detiknya.",
  }
];

export default function Testimonials() {
  return (
    <section className="relative py-24 md:py-32 bg-[#07303F] overflow-hidden">
      
      {/* BACKGROUND GRADIENT ORB (Pencahayaan Ambien Emas) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#E5C185]/15 via-[#07303F]/0 to-transparent rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#E5C185] tracking-[0.4em] uppercase text-xs font-bold mb-4"
          >
            Client Stories
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="font-sans font-bold text-4xl md:text-5xl text-white"
          >
            Echoes of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E5C185] to-amber-100 italic">Eternity.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="relative p-8 md:p-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:bg-white/10 transition-colors duration-300 group flex flex-col"
            >
              <Quote className="w-8 h-8 md:w-10 md:h-10 text-[#E5C185] opacity-50 mb-6 group-hover:scale-110 transition-transform duration-500 shrink-0" />
              
              <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-8 grow">
                &quot;{t.text}&quot;
              </p>
              
              <div className="pt-6 border-t border-white/10 shrink-0">
                <h4 className="text-white font-bold text-base md:text-lg">{t.name}</h4>
                <p className="text-[#E5C185] text-[10px] md:text-xs uppercase tracking-widest mt-1">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}