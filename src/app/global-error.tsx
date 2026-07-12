"use client";

import { NextIntlClientProvider } from "next-intl";
import { ErrorPage } from "@/components/error/ErrorPage";
import en from "@/i18n/messages/en.json";
import "./globals.css";

type GlobalErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({ reset }: GlobalErrorProps) {
  return (
    <html lang="en" dir="ltr" className="dark h-full antialiased" data-theme="dark">
      <body className="mesh-bg-animated flex min-h-full flex-col font-sans">
        <NextIntlClientProvider locale="en" messages={en}>
          <main className="flex-1">
            <ErrorPage code={500} reset={reset} standalone />
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
