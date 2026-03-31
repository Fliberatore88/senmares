"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#020b18]">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#020b18] to-[#020b18]" />

            {/* Wave SVG bottom */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" className="w-full">
                    <path
                        d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,120 L0,120 Z"
                        fill="#0d1f35"
                    />
                </svg>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                {/* Logo SVG */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-center mb-8"
                >
                    <svg width="90" height="70" viewBox="0 0 90 70" xmlns="http://www.w3.org/2000/svg">
                        {/* S como ola */}
                        <path
                            d="M20,20 C20,20 35,10 50,20 C65,30 75,20 75,20"
                            stroke="#38bdf8"
                            strokeWidth="3.5"
                            fill="none"
                            strokeLinecap="round"
                        />
                        <path
                            d="M15,40 C15,40 25,30 40,40 C55,50 70,40 70,40"
                            stroke="#0ea5e9"
                            strokeWidth="3.5"
                            fill="none"
                            strokeLinecap="round"
                        />
                        {/* Barco minimalista navegando la primera ola */}
                        <path d="M42,18 L47,10 L52,18 Z" fill="#7dd3fc" />
                        <rect x="46" y="10" width="2" height="7" fill="#bae6fd" />
                        {/* Hull */}
                        <path d="M38,18 L56,18 L53,23 L41,23 Z" fill="#38bdf8" />
                    </svg>
                </motion.div>

                {/* Brand name */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-6xl md:text-8xl font-bold tracking-widest text-white mb-2"
                >
                    SENMARES
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-sky-400 tracking-[0.3em] text-sm md:text-base uppercase mb-6"
                >
                    Naval Electronics
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10"
                >
                    Electronic repair and automation control services for the maritime industry.
                    Specialized technical solutions for every zone of your vessel.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <a href="#contact" className="px-8 py-3 bg-sky-500 hover:bg-sky-400 text-white font-semibold rounded-full transition-colors duration-200">
                        Contact Us
                    </a>
                    <a href="#services" className="px-8 py-3 border border-sky-500 hover:border-sky-400 text-sky-400 hover:text-sky-300 font-semibold rounded-full transition-colors duration-200">
                        Our Services
                    </a>
                </motion.div>
            </div>
        </section>
    );
}