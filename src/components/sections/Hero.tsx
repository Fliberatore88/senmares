"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";

const WaveBackground = dynamic(() => import("@/components/ui/WaveBackground"), {
  ssr: false,
});

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-700/80 to-[#0a5555]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_0%,rgba(2,11,24,0.4)_70%)]" />

      <WaveBackground />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(2,11,24,0.6)_100%)]" />

      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,120 L0,120 Z"
            fill="#0d1f35"
          />
        </svg>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.7, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center mb-4"
        >
          <div className="relative w-56 h-56 md:w-80 md:h-80">
            <div
              className="w-full h-full overflow-hidden"
              style={{
                maskImage: "radial-gradient(circle, black 35%, transparent 65%)",
                WebkitMaskImage: "radial-gradient(circle, black 35%, transparent 65%)",
              }}
            >
              <Image
                src="/senmares_logo_palette/senmares_hero_gradient_bg.png"
                alt="SENMARES"
                width={360}
                height={360}
                priority
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 -z-10 bg-cyan-accent/10 blur-[60px] rounded-full scale-75" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-6xl md:text-8xl font-bold text-white mb-4 leading-[1.1] tracking-tight"
        >
          {t("heading1")}
          <br />
          <span className="gradient-text">{t("heading2")}</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-4 mb-6"
        >
          <div className="h-px w-8 md:w-16 bg-gradient-to-r from-transparent to-cyan-accent/50" />
          <p className="text-cyan-accent tracking-[0.4em] text-xs md:text-sm uppercase text-glow-cyan">
            {t("tagline")}
          </p>
          <div className="h-px w-8 md:w-16 bg-gradient-to-l from-transparent to-cyan-accent/50" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-slate-300/80 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {t("description")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="group relative px-10 py-4 bg-cyan-accent text-navy-950 font-bold rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,212,212,0.5)] hover:scale-105 cursor-pointer text-sm tracking-wider uppercase"
          >
            {t("ctaContact")}
          </a>
          <a
            href="#services"
            className="px-10 py-4 border border-white/15 hover:border-cyan-accent/40 text-white/90 hover:text-cyan-accent font-bold rounded-full transition-all duration-300 hover:scale-105 cursor-pointer text-sm tracking-wider uppercase backdrop-blur-sm"
          >
            {t("ctaServices")}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
