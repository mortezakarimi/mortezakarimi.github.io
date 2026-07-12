import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { ErrorPage } from "@/components/error/ErrorPage";
import en from "@/i18n/messages/en.json";
import "./globals.css";

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

export default function RootNotFound() {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`dark ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      data-theme="dark"
    >
      <body className="mesh-bg-animated flex min-h-full flex-col">
        <NextIntlClientProvider locale="en" messages={en}>
          <main className="flex-1">
            <ErrorPage code={404} standalone />
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
