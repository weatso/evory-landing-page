"use client";
import { motion } from "framer-motion";

const steps = [
    {
        num: "01",
        title: "Consultation",
        desc: "Diskusi mendalam untuk memahami visi, karakter, dan cerita cinta unik Anda.",
    },
    {
        num: "02",
        title: "Concept & Design",
        desc: "Tim desainer dan art director kami merancang *moodboard* dan kerangka digital.",
    },
    {
        num: "03",
        title: "The Execution",
        desc: "Proses produksi, *coding*, dan pengambilan gambar dengan gaya sinematik.",
    },
    {
        num: "04",
        title: "Everlasting Memories",
        desc: "Momen bahagia Anda diluncurkan sebagai mahakarya digital abadi.",
    },
];

export default function HowItWorks() {
    return (
        <section className="py-20 md:py-32 px-6 md:px-24 bg-[#F9F8F4] relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
                    <h2 className="font-serif text-4xl md:text-6xl text-zinc-800 mb-6">The Journey</h2>
                    <p className="text-[10px] tracking-[0.3em] uppercase text-[#D4AF37] font-bold">How We Create Magic</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
                    {/* Connecting Line */}
                    <div className="hidden md:block absolute top-[20%] left-0 w-full h-[1px] bg-zinc-300 -z-10" />

                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="relative text-center md:text-left group"
                        >
                            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white border border-zinc-200 flex items-center justify-center font-serif text-xl text-[#D4AF37] mb-6 shadow-sm mx-auto md:mx-0 group-hover:scale-110 transition-transform duration-300">
                                {step.num}
                            </div>
                            <h3 className="font-serif text-2xl text-zinc-800 mb-4">{step.title}</h3>
                            <p className="font-sans text-xs text-zinc-500 leading-relaxed">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
