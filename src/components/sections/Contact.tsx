"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const t = useTranslations("contact");

  const contactInfo = [
    {
      label: t("info.admin"),
      value: "administracion@senmares.com",
      href: "mailto:administracion@senmares.com",
      icon: <Mail className="w-5 h-5" />,
    },
    {
      label: t("info.technical"),
      value: "tecnica@senmares.com",
      href: "mailto:tecnica@senmares.com",
      icon: <Mail className="w-5 h-5" />,
    },
    {
      label: t("info.whatsapp"),
      value: "+54 11 5563-5761",
      href: "https://wa.me/541155635761?text=Hello%2C%20I%27d%20like%20to%20request%20a%20quote%20for%20naval%20electronics%20services.",
      icon: <MessageCircle className="w-5 h-5" />,
    },
    {
      label: t("info.phone"),
      value: "+54 11 5563-5761",
      href: "tel:+541155635761",
      icon: <Phone className="w-5 h-5" />,
    },
    {
      label: t("info.address"),
      value: "Sanchez de Bustamante 2286, Cap. Fed. CP 1425",
      href: "https://maps.google.com/?q=Sanchez+de+Bustamante+2286+Buenos+Aires",
      icon: <MapPin className="w-5 h-5" />,
    },
  ];

  return (
    <section id="contact" className="relative bg-navy-800 py-28 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-cyan-accent/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-accent/[0.03] blur-[150px] rounded-full" />
      <div className="absolute top-20 right-0 w-[300px] h-[300px] bg-sky-500/[0.02] blur-[120px] rounded-full" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
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

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 space-y-2"
          >
            {contactInfo.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="group flex items-center gap-4 p-4 rounded-xl hover:bg-white/[0.03] transition-all duration-300 cursor-pointer border border-transparent hover:border-white/[0.04]"
              >
                <div className="text-cyan-accent group-hover:text-white shrink-0 flex items-center justify-center w-11 h-11 rounded-xl bg-cyan-accent/[0.06] group-hover:bg-cyan-accent/[0.15] group-hover:shadow-[0_0_15px_rgba(0,212,212,0.1)] transition-all duration-300">
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-slate-400 text-[10px] uppercase tracking-[0.2em] mb-0.5">
                    {item.label}
                  </p>
                  <p className="text-slate-200 group-hover:text-cyan-accent transition-colors duration-300 text-sm truncate">
                    {item.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3"
          >
            {sent ? (
              <div className="h-full flex items-center justify-center min-h-[400px]">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", damping: 20, stiffness: 90 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-cyan-accent/10 flex items-center justify-center mx-auto mb-6 shadow-[0_0_40px_rgba(0,212,212,0.2)]">
                    <svg className="w-10 h-10 text-cyan-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-white text-2xl font-bold mb-2">
                    {t("success.title")}
                  </h3>
                  <p className="text-slate-400">
                    {t("success.description")}
                  </p>
                </motion.div>
              </div>
            ) : (
              <form
                action="https://formsubmit.co/administracion@senmares.com"
                method="POST"
                onSubmit={() => setSent(true)}
                className="relative rounded-2xl p-px overflow-hidden"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-accent/10 via-transparent to-sky-500/5" />

                <div className="relative bg-navy-900/60 backdrop-blur-sm rounded-2xl p-8 border border-white/[0.02]">
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_subject" value="New message from senmares.com" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-slate-400 text-[10px] uppercase tracking-[0.2em] mb-2">{t("form.name")}</label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        placeholder={t("form.namePlaceholder")}
                        className="w-full bg-navy-950/60 border border-white/[0.06] focus:border-cyan-accent/40 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 outline-none transition-all duration-300 focus:shadow-[0_0_20px_rgba(0,212,212,0.08)]"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-slate-400 text-[10px] uppercase tracking-[0.2em] mb-2">{t("form.email")}</label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        placeholder={t("form.emailPlaceholder")}
                        className="w-full bg-navy-950/60 border border-white/[0.06] focus:border-cyan-accent/40 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 outline-none transition-all duration-300 focus:shadow-[0_0_20px_rgba(0,212,212,0.08)]"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="company" className="block text-slate-400 text-[10px] uppercase tracking-[0.2em] mb-2">{t("form.company")}</label>
                    <input
                      id="company"
                      type="text"
                      name="company"
                      placeholder={t("form.companyPlaceholder")}
                      className="w-full bg-navy-950/60 border border-white/[0.06] focus:border-cyan-accent/40 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 outline-none transition-all duration-300 focus:shadow-[0_0_20px_rgba(0,212,212,0.08)]"
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-slate-400 text-[10px] uppercase tracking-[0.2em] mb-2">{t("form.message")}</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      placeholder={t("form.messagePlaceholder")}
                      rows={5}
                      className="w-full bg-navy-950/60 border border-white/[0.06] focus:border-cyan-accent/40 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 outline-none transition-all duration-300 resize-none focus:shadow-[0_0_20px_rgba(0,212,212,0.08)]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-cyan-accent text-navy-950 font-bold rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,212,212,0.5)] hover:scale-[1.02] cursor-pointer text-sm tracking-wider uppercase"
                  >
                    {t("form.submit")}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
