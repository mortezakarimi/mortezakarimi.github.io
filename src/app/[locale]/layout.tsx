import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import { Vazirmatn } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { htmlLangTags } from "@/lib/seo";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic", "latin"],
  display: "swap",
});

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  const isRtl = locale === "fa";
  const fontClass =
    locale === "fa"
      ? `${vazirmatn.variable} font-fa`
      : `${geistSans.variable} ${geistMono.variable}`;

  return (
    <html
      lang={htmlLangTags[locale as Locale]}
      dir={isRtl ? "rtl" : "ltr"}
      className={`dark ${fontClass} h-full antialiased`}
      data-theme="dark"
    >
      <head>
        <link rel="preconnect" href="https://www.gravatar.com" />
        <link rel="dns-prefetch" href="https://www.gravatar.com" />
      </head>
      <body className="mesh-bg flex min-h-full flex-col">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
