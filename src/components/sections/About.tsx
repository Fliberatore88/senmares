"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const stats = [
  { value: 15, suffix: "+", key: "experience" },
  { value: 500, suffix: "+", key: "vessels" },
  { value: 24, suffix: "/7", key: "support" },
  { value: 100, suffix: "%", key: "certified" },
];

export default function About() {
  const t = useTranslations("about");

  return (
    <section id="about" className="relative bg-navy-950 py-28 px-6 overflow-hidden">
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-cyan-accent/[0.03] blur-[180px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-sky-500/[0.03] blur-[120px] rounded-full" />

      <div className="max-w-6xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-cyan-accent tracking-[0.4em] text-xs uppercase mb-4 text-glow-cyan">
              {t("label")}
            </p>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-[1.1]">
              {t("title1")}{" "}
              <span className="gradient-text">{t("title2")}</span>
            </h2>
            <div className="space-y-4 mb-8">
              <p className="text-slate-400 leading-relaxed">{t("p1")}</p>
              <p className="text-slate-400 leading-relaxed">{t("p2")}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="px-8 py-3.5 bg-cyan-accent text-navy-950 font-bold rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,212,212,0.5)] hover:scale-105 text-center cursor-pointer text-sm tracking-wider uppercase"
              >
                {t("ctaContact")}
              </a>
              <a
                href="#services"
                className="px-8 py-3.5 border border-white/15 hover:border-cyan-accent/40 text-white/90 hover:text-cyan-accent font-bold rounded-full transition-all duration-300 hover:scale-105 text-center cursor-pointer text-sm tracking-wider uppercase"
              >
                {t("ctaServices")}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 gap-5"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative rounded-2xl p-px overflow-hidden"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-accent/25 via-transparent to-sky-400/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative bg-navy-800/60 backdrop-blur-sm rounded-2xl p-7 text-center border border-white/[0.04] group-hover:border-transparent transition-all duration-500 h-full">
                  <p className="text-5xl font-bold text-cyan-accent mb-2 group-hover:text-glow-cyan">
                    <AnimatedCounter
                      target={stat.value}
                      suffix={stat.suffix}
                      duration={2.5}
                    />
                  </p>
                  <p className="text-slate-400 text-sm">
                    {t(`stats.${stat.key}`)}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
