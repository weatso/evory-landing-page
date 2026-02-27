"use client";
import { motion } from "framer-motion";
import { QrCode, Gift, Send, Users } from "lucide-react";

const features = [
    {
        icon: <Users className="w-6 h-6 text-[#D4AF37]" strokeWidth={1.5} />,
        title: "Smart RSVP & Guests",
        desc: "Tamu dapat mengonfirmasi kehadiran sekaligus memilih menu makanan. Dilengkapi dengan QR Scanner untuk Check-In otomatis di lokasi acara.",
    },
    {
        icon: <Gift className="w-6 h-6 text-[#D4AF37]" strokeWidth={1.5} />,
        title: "Cashless Digital Gift",
        desc: "Sistem amplop digital yang elegan. Terintegrasi dengan QRIS dan Multi-Rekening, memudahkan tamu memberikan hadiah dari mana saja.",
    },
    {
        icon: <Send className="w-6 h-6 text-[#D4AF37]" strokeWidth={1.5} />,
        title: "WhatsApp Smart Share",
        desc: "Sebarkan ratusan undangan hanya dalam beberapa menit. Generator pesan otomatis yang memanggil nama tamu satu per satu tanpa repot.",
    },
    {
        icon: <QrCode className="w-6 h-6 text-[#D4AF37]" strokeWidth={1.5} />,
        title: "Selfie Check-In",
        desc: "Gantikan buku tamu konvensional dengan Selfie Check-in. Sebuah memori interaktif yang seru bagi tamu dan abadi bagi Anda.",
    },
];

export default function DigitalServices() {
    return (
        <section className="py-20 md:py-32 px-6 md:px-24 bg-[#EBE9E1] text-zinc-800 relative overflow-hidden">

            {/* Decorative Blur Background Element */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37] opacity-10 blur-[150px] pointer-events-none rounded-full" />

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24 relative z-10">

                {/* Left Side: Text and Feature List */}
                <div className="w-full md:w-1/2">
                    <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[10px] tracking-[0.3em] uppercase text-[#D4AF37] font-bold mb-4">
                        The Technology
                    </motion.p>
                    <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="font-serif text-4xl md:text-5xl lg:text-6xl text-zinc-800 mb-8 leading-tight">
                        Seamlessly <span className="italic text-[#D4AF37]">Smart.</span>
                    </motion.h2>
                    <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="font-sans text-sm text-zinc-500 leading-loose mb-12">
                        Pernikahan Anda tidak hanya harus tampil cantik, tapi juga cerdas. Kami mengintegrasikan fitur-fitur kelas enterprise ke dalam undangan digital Anda untuk memastikan setiap aspek dari hari H berjalan lancar.
                    </motion.p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {features.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + (i * 0.1) }}
                                className="group"
                            >
                                <div className="w-12 h-12 rounded-full border border-zinc-300 flex items-center justify-center mb-4 group-hover:bg-white group-hover:border-[#D4AF37] group-hover:shadow-md transition-all duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="font-serif text-xl mb-2 text-zinc-800">{item.title}</h3>
                                <p className="font-sans text-xs text-zinc-500 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Right Side: Interactive Floating Mockup */}
                <div className="w-full md:w-1/2 relative aspect-[3/4] md:aspect-square flex justify-center items-center">

                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative w-full max-w-sm"
                    >
                        {/* Main Phone Mockup */}
                        <div className="relative z-20 w-full aspect-[9/19] bg-white rounded-[2.5rem] p-2 shadow-2xl border-4 border-zinc-200 overflow-hidden">
                            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-6 bg-zinc-200 rounded-b-2xl z-30" /> {/* Notch */}
                            <div className="w-full h-full rounded-[2rem] bg-zinc-100 overflow-hidden relative">
                                {/* Dummy UI of the App */}
                                <div className="p-8 pb-32 h-full flex flex-col justify-end bg-[url('https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800')] bg-cover bg-center">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                    <div className="relative z-10 text-white text-center">
                                        <p className="font-sans text-[8px] tracking-widest uppercase mb-2">Guest Check-In</p>
                                        <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=evorywedding" alt="QR" className="w-24 h-24 mx-auto mb-4 rounded-xl border-4 border-white/50 bg-white" />
                                        <h3 className="font-serif text-2xl italic">Scan & Enter</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Card 1: Gift */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute -right-8 md:-right-16 top-1/4 z-30 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-xl border border-white flex items-center gap-4 w-48"
                        >
                            <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center">
                                <Gift className="w-5 h-5 text-[#D4AF37]" strokeWidth={1.5} />
                            </div>
                            <div>
                                <p className="text-[10px] text-zinc-500 uppercase tracking-wider">You received</p>
                                <p className="font-serif font-bold text-zinc-800">Wedding Gift</p>
                            </div>
                        </motion.div>

                        {/* Floating Card 2: RSVP */}
                        <motion.div
                            animate={{ y: [0, 15, 0] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                            className="absolute -left-6 md:-left-12 bottom-1/4 z-30 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-xl border border-white w-52"
                        >
                            <div className="flex justify-between items-center mb-2">
                                <p className="font-serif font-bold text-zinc-800 text-sm">Attendance</p>
                                <div className="w-2 h-2 rounded-full bg-green-500" />
                            </div>
                            <p className="text-[10px] text-zinc-500 font-sans"><strong>Sarah & Partner</strong> will attend the reception.</p>
                        </motion.div>

                    </motion.div>
                </div>

            </div>
        </section>
    );
}
