"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "Apakah ada batasan jumlah tamu yang bisa saya input ke dalam undangan?",
        answer: "Anda bisa memasukkan data tamu dalam jumlah yang besar tanpa biaya tambahan.Kami juga menyediakan fitur impor data dari Excel agar Anda tidak perlu mengetik nama tamu satu per satu.",
    },
    {
        question: "Berapa lama proses pembuatan undangan digital?",
        answer: "Untuk paket standar, proses memakan waktu 7-10 hari kerja setelah seluruh aset (foto/video/teks) kami terima. Untuk custom design, estimasi 14-21 hari kerja.",
    },
    {
        question: "Apa bedanya paket Template (Essential/Prestige/Royal) dengan paket Full Custom (The Legacy)?",
        answer: "Paket Template: Kakak memilih desain cantik yang sudah kami sediakan, proses pengerjaannya sangat cepat yaitu 2-4 hari kerja. Paket Full Custom (The Legacy): Kami mendesain undangan dari nol (from scratch) sesuai dengan moodboard Kakak. Proses ini membutuhkan waktu 1-2 minggu karena melibatkan fase desain eksklusif.",
    },
    {
        question: "Bagaimana cara saya mengetahui siapa saja tamu yang sudah mengisi RSVP?",
        answer: "Anda akan mendapatkan akses ke Dashboard Khusus untuk memantau kehadiran tamu dan ucapan yang masuk secara real-time. Setiap kali ada tamu yang mengisi RSVP, data tersebut akan langsung ter-update di dashboard sehingga Anda bisa mengatur kapasitas catering dan kursi dengan lebih akurat.",
    },
    {
        question: "Apakah saya bisa menambahkan fitur 'Kirim Kado Digital' (Angpao Online)?",
        answer: "Sangat bisa. Fitur ini sudah tersedia di seluruh paket undangan digital kami. Anda bisa mencantumkan nomor rekening, link e-wallet, hingga alamat untuk pengiriman kado fisik tanpa ada potongan biaya sepeser pun dari pihak Evory.",
    },
    {
        question: "Apakah tamu harus mengunduh aplikasi untuk membuka undangan?",
        answer: "Tidak. Undangan kami berbasis web dan dapat dibuka langsung melalui browser di smartphone maupun desktop tanpa instalasi apapun.",
    },
    {
        question: "Bagaimana jika ada perubahan jadwal atau lokasi acara mendadak?",
        answer: "Anda tidak perlu panik karena layanan kami sudah terdapat fasilitas Revisi.Perubahan teks seperti jam, tanggal, atau link lokasi bisa kami kerjakan dengan cepat agar informasi yang diterima tamu selalu akurat.",
    },
    {
        question: "Berapa lama link undangan saya akan tetap aktif setelah acara selesai?",
        answer: "Link undangan akan tetap aktif dan dapat diakses selama 6 bulan setelah hari H acara.",
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
