"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const t = useTranslations("nav");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: t("services"), href: "#services" },
    { label: t("about"), href: "#about" },
    { label: t("contact"), href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy-950/80 backdrop-blur-xl shadow-lg shadow-black/30 border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group cursor-pointer">
          <div className="relative w-9 h-9 rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-105 ring-1 ring-white/10">
            <Image
              src="/senmares_logo_palette/favicon-64.png"
              alt=""
              width={36}
              height={36}
              priority
              className="w-full h-full object-cover scale-125"
            />
          </div>
          <span className="text-white font-bold text-lg tracking-[0.15em] transition-colors duration-300 group-hover:text-cyan-accent">
            SENMARES
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-slate-400 hover:text-white transition-colors duration-300 text-sm tracking-wider uppercase cursor-pointer"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop right side */}
        <div className="hidden md:flex items-center gap-3">
          <LanguageSwitcher />
          <a
            href="#contact"
            className="px-5 py-2 bg-cyan-accent/10 hover:bg-cyan-accent/20 text-cyan-accent text-sm font-semibold rounded-full transition-all duration-300 border border-cyan-accent/30 hover:border-cyan-accent/50 cursor-pointer"
          >
            {t("getInTouch")}
          </a>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white p-2 cursor-pointer"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <div className="w-6 flex flex-col gap-1.5">
            <motion.div
              animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-white origin-center"
            />
            <motion.div
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-white"
            />
            <motion.div
              animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-white origin-center"
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-navy-950/95 backdrop-blur-xl">
          <div className="px-6 pb-6 pt-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3.5 text-slate-300 hover:text-cyan-accent transition-colors tracking-wider uppercase text-sm border-b border-slate-800/50 cursor-pointer"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-4 flex items-center justify-between">
              <LanguageSwitcher />
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="px-5 py-3 bg-cyan-accent/10 border border-cyan-accent/30 text-cyan-accent text-sm font-semibold rounded-full cursor-pointer"
              >
                {t("getInTouch")}
              </a>
            </div>
          </div>
        </div>
      )}
    </motion.nav>
  );
}
