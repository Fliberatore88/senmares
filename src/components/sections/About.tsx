"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "15+", label: "Years of experience" },
  { value: "500+", label: "Vessels serviced" },
  { value: "24/7", label: "Technical support" },
  { value: "100%", label: "Certified technicians" },
];

export default function About() {
  return (
    <section id="about" className="bg-[#020b18] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sky-400 tracking-[0.3em] text-sm uppercase mb-3">Who We Are</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Naval electronics<br />experts you can trust
            </h2>
            <p className="text-slate-400 mb-4 leading-relaxed">
              SENMARES is a specialized naval electronics service company based in Buenos Aires, Argentina. We provide electronic repair, automation control, and technical consulting for vessels operating in Argentine and international waters.
            </p>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Our team of certified technicians offers comprehensive coverage across every critical system of your vessel — from the navigation bridge to the engine room — ensuring operational continuity and regulatory compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="px-6 py-3 bg-sky-500 hover:bg-sky-400 text-white font-semibold rounded-full transition-colors text-center">
                Get in Touch
              </a>
              <a href="#services" className="px-6 py-3 border border-slate-600 hover:border-sky-500 text-slate-300 hover:text-sky-400 font-semibold rounded-full transition-colors text-center">
                View Services
              </a>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-[#0d1f35] border border-slate-700/50 rounded-2xl p-8 text-center"
              >
                <p className="text-4xl font-bold text-sky-400 mb-2">{stat.value}</p>
                <p className="text-slate-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}