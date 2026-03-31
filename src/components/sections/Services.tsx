"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const icons = {
  bridge: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10" aria-hidden="true">
      <path d="M3 12h18M3 12l4-4m-4 4l4 4M21 12l-4-4m4 4l-4 4" strokeLinecap="round" />
      <rect x="8" y="8" width="8" height="8" rx="1" />
    </svg>
  ),
  ecr: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10" aria-hidden="true">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" strokeLinecap="round" />
    </svg>
  ),
  mainDeck: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10" aria-hidden="true">
      <path d="M3 17l4-8 4 4 3-6 4 10H3z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 20h18" strokeLinecap="round" />
    </svg>
  ),
  ccr: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10" aria-hidden="true">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" strokeLinecap="round" />
      <path d="M6 8h4M6 11h6M14 8h4" strokeLinecap="round" />
    </svg>
  ),
};

const zoneKeys = ["bridge", "ecr", "mainDeck", "ccr"] as const;

export default function Services() {
  const t = useTranslations("services");

  return (
    <section id="services" className="relative bg-navy-800 py-28 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-cyan-accent/20 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-accent/[0.02] blur-[150px] rounded-full" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <p className="text-cyan-accent tracking-[0.4em] text-xs uppercase mb-4 text-glow-cyan">
            {t("label")}
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-5">
            {t("title")}
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto leading-relaxed">
            {t("description")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {zoneKeys.map((key, i) => {
            const items: string[] = t.raw(`zones.${key}.items`);
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative rounded-2xl p-px overflow-hidden"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-accent/20 via-transparent to-sky-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative bg-navy-900/80 backdrop-blur-sm rounded-2xl p-8 h-full border border-white/[0.04] group-hover:border-transparent transition-all duration-500">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-cyan-accent group-hover:text-white transition-colors duration-300 p-3 rounded-xl bg-cyan-accent/[0.06] group-hover:bg-cyan-accent/[0.12] group-hover:shadow-[0_0_20px_rgba(0,212,212,0.15)] transition-all duration-500">
                      {icons[key]}
                    </div>
                    <div>
                      <p className="text-cyan-accent/50 text-[10px] tracking-[0.3em] uppercase">
                        {t(`zones.${key}.tag`)}
                      </p>
                      <h3 className="text-white font-bold text-xl group-hover:text-cyan-accent transition-colors duration-300">
                        {t(`zones.${key}.name`)}
                      </h3>
                    </div>
                  </div>

                  <ul className="space-y-3 pl-1">
                    {items.map((item: string) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-slate-400 group-hover:text-slate-300 text-sm transition-colors duration-300"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-accent/40 mt-1.5 shrink-0 group-hover:bg-cyan-accent transition-colors duration-300" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
