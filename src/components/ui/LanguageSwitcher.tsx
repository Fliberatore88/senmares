"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { routing } from "@/i18n/routing";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale(newLocale: string) {
    // Replace the locale segment in the path
    const segments = pathname.split("/");
    if (routing.locales.includes(segments[1] as "en" | "es")) {
      segments[1] = newLocale;
    } else {
      segments.splice(1, 0, newLocale);
    }
    router.replace(segments.join("/") || "/");
  }

  const otherLocale = locale === "en" ? "es" : "en";

  return (
    <button
      onClick={() => switchLocale(otherLocale)}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 hover:border-cyan-accent/30 text-slate-400 hover:text-cyan-accent transition-all duration-300 text-xs font-medium tracking-wider uppercase cursor-pointer"
      aria-label={`Switch to ${otherLocale === "en" ? "English" : "Spanish"}`}
    >
      <span className={locale === "en" ? "text-white" : "text-slate-500"}>EN</span>
      <span className="text-slate-600">/</span>
      <span className={locale === "es" ? "text-white" : "text-slate-500"}>ES</span>
    </button>
  );
}
