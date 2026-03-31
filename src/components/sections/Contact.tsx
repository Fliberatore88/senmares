"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";

export default function Contact() {
    const [sent, setSent] = useState(false);

    return (
        <section id="contact" className="bg-[#0d1f35] py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-sky-400 tracking-[0.3em] text-sm uppercase mb-3">Get In Touch</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h2>
                    <p className="text-slate-400 max-w-xl mx-auto">
                        Need technical support or a quote? Our team is available to assist you at any port.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        {[
                            {
                                label: "Administration & Quotes",
                                value: "administracion@senmares.com",
                                href: "mailto:administracion@senmares.com",
                                icon: <Mail className="w-5 h-5" />,
                            },
                            {
                                label: "Technical Inquiries",
                                value: "tecnica@senmares.com",
                                href: "mailto:tecnica@senmares.com",
                                icon: <Mail className="w-5 h-5" />,
                            },
                            {
                                label: "WhatsApp",
                                value: "+54 11 5563-5761",
                                href: "https://wa.me/541155635761?text=Hello%2C%20I%27d%20like%20to%20request%20a%20quote%20for%20naval%20electronics%20services.",
                                icon: <MessageCircle className="w-5 h-5" />,
                            },
                            {
                                label: "Phone",
                                value: "+54 11 5563-5761",
                                href: "tel:+541155635761",
                                icon: <Phone className="w-5 h-5" />,
                            },
                            {
                                label: "Address",
                                value: "Sánchez de Bustamante 2286, Cap. Fed. CP 1425",
                                href: "https://maps.google.com/?q=Sanchez+de+Bustamante+2286+Buenos+Aires",
                                icon: <MapPin className="w-5 h-5" />,
                            },
                        ].map((item) => (
                            <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer"
                                className="flex items-center gap-4 group">
                                <div className="text-sky-400 group-hover:text-sky-300 shrink-0 flex items-center">{item.icon}</div>                                <div>
                                    <p className="text-slate-500 text-xs uppercase tracking-widest mb-1">{item.label}</p>
                                    <p className="text-slate-200 group-hover:text-sky-400 transition-colors">{item.value}</p>
                                </div>
                            </a>
                        ))}
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {sent ? (
                            <div className="h-full flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-sky-400 text-5xl mb-4">✓</div>
                                    <h3 className="text-white text-xl font-bold mb-2">Message sent!</h3>
                                    <p className="text-slate-400">We'll get back to you as soon as possible.</p>
                                </div>
                            </div>
                        ) : (
                            <form
                                action="https://formsubmit.co/administracion@senmares.com"
                                method="POST"
                                onSubmit={() => setSent(true)}
                                className="space-y-4"
                            >
                                <input type="hidden" name="_captcha" value="false" />
                                <input type="hidden" name="_subject" value="New message from senmares.com" />

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <input type="text" name="name" required placeholder="Full name"
                                        className="w-full bg-[#020b18] border border-slate-700 focus:border-sky-500 rounded-xl px-4 py-3 text-white placeholder-slate-500 outline-none transition-colors" />
                                    <input type="email" name="email" required placeholder="Email"
                                        className="w-full bg-[#020b18] border border-slate-700 focus:border-sky-500 rounded-xl px-4 py-3 text-white placeholder-slate-500 outline-none transition-colors" />
                                </div>
                                <input type="text" name="company" placeholder="Company / Vessel"
                                    className="w-full bg-[#020b18] border border-slate-700 focus:border-sky-500 rounded-xl px-4 py-3 text-white placeholder-slate-500 outline-none transition-colors" />
                                <textarea name="message" required placeholder="Describe your inquiry..." rows={5}
                                    className="w-full bg-[#020b18] border border-slate-700 focus:border-sky-500 rounded-xl px-4 py-3 text-white placeholder-slate-500 outline-none transition-colors resize-none" />
                                <button type="submit"
                                    className="w-full py-3 bg-sky-500 hover:bg-sky-400 text-white font-semibold rounded-full transition-colors">
                                    Send Message
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}