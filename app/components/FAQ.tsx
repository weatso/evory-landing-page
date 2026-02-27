"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "Berapa lama proses pembuatan undangan digital?",
        answer: "Untuk paket standar, proses memakan waktu 7-10 hari kerja setelah seluruh aset (foto/video/teks) kami terima. Untuk custom design, estimasi 14-21 hari kerja.",
    },
    {
        question: "Apakah tamu harus mengunduh aplikasi untuk membuka undangan?",
        answer: "Tidak. Undangan kami berbasis *web* dan dapat dibuka langsung melalui *browser* di *smartphone* maupun *desktop* tanpa instalasi apapun.",
    },
    {
        question: "Apakah bisa request musik latar secara custom?",
        answer: "Tentu. Anda dapat memberikan file musik original atau kami akan membantu merekomendasikan instrumen yang memiliki lisensi bebas pakai untuk menghindari pemblokiran.",
    },
    {
        question: "Sampai kapan link undangan akan aktif?",
        answer: "Undangan digital akan tetap aktif selama 1 tahun sejak tanggal hari H pernikahan Anda, sebagai arsip digital momen indah Anda.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 md:py-32 px-6 md:px-24 bg-[#F9F8F4] text-zinc-800">
            <div className="max-w-4xl mx-auto">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                    <p className="text-[10px] tracking-[0.3em] uppercase text-[#D4AF37] font-bold mb-4">Got Questions?</p>
                    <h2 className="font-serif text-4xl md:text-5xl">Frequently Asked <span className="italic text-[#D4AF37]">Questions</span></h2>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="border-b border-zinc-300 pb-4"
                        >
                            <button
                                onClick={() => toggleFaq(index)}
                                className="w-full flex justify-between items-center py-4 text-left font-serif text-xl hover:text-[#D4AF37] transition-colors"
                            >
                                {faq.question}
                                <motion.div
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ChevronDown className="w-5 h-5 text-zinc-400" />
                                </motion.div>
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <p className="font-sans text-sm text-zinc-500 leading-loose pb-6">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
