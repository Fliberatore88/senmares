"use client";

import { motion } from "framer-motion";
import { services } from "@/data/services";

const icons = {
  Bridge: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <path d="M3 12h18M3 12l4-4m-4 4l4 4M21 12l-4-4m4 4l-4 4" strokeLinecap="round" />
      <rect x="8" y="8" width="8" height="8" rx="1" />
    </svg>
  ),
  ECR: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" strokeLinecap="round" />
    </svg>
  ),
  "Main Deck": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <path d="M3 17l4-8 4 4 3-6 4 10H3z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 20h18" strokeLinecap="round" />
    </svg>
  ),
  CCR: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" strokeLinecap="round" />
      <path d="M6 8h4M6 11h6M14 8h4" strokeLinecap="round" />
    </svg>
  ),
};

export default function Services() {
  return (
    <section id="services" className="bg-[#0d1f35] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sky-400 tracking-[0.3em] text-sm uppercase mb-3">What We Do</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Specialized electronic repair and automation solutions covering every critical zone of your vessel.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.zoneEn}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-[#0a1628] border border-slate-700/50 hover:border-sky-500/50 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:shadow-sky-900/20"
            >
              <div className="flex items-start gap-5">
                <div className="text-sky-400 group-hover:text-sky-300 transition-colors mt-1 shrink-0">
                  {icons[service.zoneEn as keyof typeof icons]}
                </div>
                <div>
                  <p className="text-sky-500 text-xs tracking-widest uppercase mb-1">{service.zoneEn}</p>
                  <h3 className="text-white font-bold text-xl mb-4">{service.zone}</h3>
                  <ul className="space-y-2">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-slate-400 text-sm">
                        <span className="text-sky-500 mt-1 shrink-0">›</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}