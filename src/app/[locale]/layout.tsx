import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import "../globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const baseUrl = "https://senmares.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  const otherLocale = locale === "en" ? "es" : "en";

  return {
    metadataBase: new URL(baseUrl),
    title: t("title"),
    description: t("description"),
    authors: [{ name: "SENMARES" }],
    robots: { index: true, follow: true },
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        en: `${baseUrl}/en`,
        es: `${baseUrl}/es`,
        [otherLocale]: `${baseUrl}/${otherLocale}`,
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `${baseUrl}/${locale}`,
      siteName: "SENMARES",
      locale: locale === "en" ? "en_US" : "es_AR",
      type: "website",
      images: [
        {
          url: "/senmares_logo_palette/senmares_banner_navy_bg.png",
          width: 1312,
          height: 736,
          alt: "SENMARES - Naval Electronics",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["/senmares_logo_palette/senmares_banner_navy_bg.png"],
    },
  };
}

function JsonLd({ locale }: { locale: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "SENMARES",
    description:
      locale === "en"
        ? "Electronic repair and automation control services for the maritime industry."
        : "Servicios de reparación electrónica y control de automatización para la industria marítima.",
    url: `${baseUrl}/${locale}`,
    logo: `${baseUrl}/senmares_logo_palette/senmares_banner_navy_bg.png`,
    image: `${baseUrl}/senmares_logo_palette/senmares_banner_navy_bg.png`,
    telephone: "+54-11-5563-5761",
    email: "administracion@senmares.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sanchez de Bustamante 2286",
      addressLocality: "Buenos Aires",
      postalCode: "1425",
      addressCountry: "AR",
    },
    sameAs: [],
    serviceType: [
      "Naval Electronics Repair",
      "Maritime Automation Control",
      "Vessel Electronic Systems",
    ],
    areaServed: {
      "@type": "GeoCircle",
      description: "Argentine and international waters",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = (await import(`../../../messages/${locale}.json`)).default;

  return (
    <html lang={locale} className={inter.variable} data-scroll-behavior="smooth">
      <head>
        <JsonLd locale={locale} />
      </head>
      <body className="font-[family-name:var(--font-inter)]">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
