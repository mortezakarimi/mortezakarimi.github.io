"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { normalizeErrorCode, type ErrorCode } from "@/lib/error-codes";
import { ErrorScene } from "./ErrorScene";

type ErrorPageProps = {
  code?: number;
  reset?: () => void;
  standalone?: boolean;
};

export function ErrorPage({ code = 500, reset, standalone = false }: ErrorPageProps) {
  const t = useTranslations("errors");
  const normalizedCode = normalizeErrorCode(code);
  const messageKey = normalizedCode === "default" ? "default" : String(normalizedCode);
  const displayCode = String(code);

  return (
    <section
      className={`error-page mesh-bg-animated relative flex items-center overflow-hidden ${standalone ? "min-h-screen" : "min-h-[calc(100vh-4rem)]"}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,transparent_0%,var(--color-background)_72%)]" />

      <div className="container-narrow relative z-10 px-6 py-16">
        <div className="glass-card glow-hover mx-auto max-w-2xl rounded-3xl p-8 text-center md:p-12">
          <p className="mb-4 text-sm font-medium tracking-[0.35em] text-[var(--color-accent)] uppercase">
            {t("badge")}
          </p>

          <ErrorScene code={normalizedCode as ErrorCode} displayCode={displayCode} />

          <h1 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">
            {t(`${messageKey}.title`)}
          </h1>

          <p className="mx-auto mb-2 max-w-lg text-lg text-[var(--color-muted)]">
            {t(`${messageKey}.description`)}
          </p>

          <p className="mb-8 text-sm text-[var(--color-muted)]/80">
            {t("hint", { code: displayCode })}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/" className="button button--primary button--md">
              {t("home")}
            </Link>

            {reset ? (
              <button
                type="button"
                onClick={reset}
                className="button button--secondary button--md"
              >
                {t("retry")}
              </button>
            ) : (
              <Link href="/contact" className="button button--secondary button--md">
                {t("contact")}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
