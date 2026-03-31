"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");

  return (
    <footer className="relative bg-navy-950 py-12 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full overflow-hidden ring-1 ring-white/10">
              <Image
                src="/senmares_logo_palette/favicon-64.png"
                alt=""
                width={32}
                height={32}
                loading="lazy"
                className="w-full h-full object-cover scale-125"
              />
            </div>
            <div>
              <p className="text-white font-bold tracking-[0.15em] text-sm">SENMARES</p>
              <p className="text-slate-400 text-xs">{t("subtitle")}</p>
            </div>
          </div>

          <div className="flex gap-8 text-sm text-slate-400">
            <a href="#services" className="hover:text-cyan-accent transition-colors duration-300 cursor-pointer">
              {nav("services")}
            </a>
            <a href="#about" className="hover:text-cyan-accent transition-colors duration-300 cursor-pointer">
              {nav("about")}
            </a>
            <a href="#contact" className="hover:text-cyan-accent transition-colors duration-300 cursor-pointer">
              {nav("contact")}
            </a>
          </div>

          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Senmares. {t("rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
