"use client";
import { motion } from "framer-motion";

const testimonials = [
    {
        name: "Rizky & Amanda",
        desc: "Evory benar-benar mengerti apa yang kami mau. Undangan digitalnya lebih dari sekadar link, rasanya seperti menonton teaser film pernikahan kami sendiri. Sangat mewah!",
    },
    {
        name: "Kevin & Sarah",
        desc: "Puas banget! Detail animasinya sangat halus, foto-fotonya diedit dengan gaya editorial yang kami request. Tamu-tamu banyak yang memuji undangan kami.",
    },
    {
        name: "Dimas & Tiara",
        desc: "Awalnya skeptis dengan undangan website, tapi setelah melihat portfolio Evory kami langsung yakin. Prosesnya cepat, pelayanannya sangat berkelas.",
    },
];

export default function Testimonials() {
    return (
        <section className="py-20 md:py-32 px-6 md:px-24 bg-[#2C2C2C] text-[#F9F8F4]">
            <div className="max-w-6xl mx-auto">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
                    <p className="text-[10px] tracking-[0.3em] uppercase text-[#D4AF37] font-bold mb-6">Social Proof</p>
                    <h2 className="font-serif text-4xl md:text-6xl mb-6">Love <span className="italic text-[#D4AF37]">Letters.</span></h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {testimonials.map((testi, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="p-8 border border-zinc-700 hover:border-[#D4AF37] transition-colors duration-300 relative"
                        >
                            <div className="text-[#D4AF37] text-4xl font-serif absolute top-4 left-6 opacity-30">"</div>
                            <p className="font-sans text-sm text-zinc-400 leading-loose mb-8 mt-4 relative z-10 italic">
                                "{testi.desc}"
                            </p>
                            <div className="font-serif text-xl border-t border-zinc-800 pt-6">
                                {testi.name}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
