import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { siteConfig } from "@/lib/site";
import { NavButton } from "@/components/ui/NavButton";
import { SocialLinks } from "./SocialLinks";

export function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();
  const location =
    locale === "fa" ? siteConfig.location.fa : siteConfig.location.en;

  return (
    <section className="mesh-bg-animated relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,var(--color-background)_70%)]" />

      <div className="container-narrow relative z-10 px-6 py-16">
        <div className="glass-card glow-hover mx-auto max-w-2xl rounded-3xl p-8 text-center md:p-12">
          <div className="relative mx-auto mb-6 size-32 overflow-hidden rounded-full ring-2 ring-[var(--color-accent)]/40 ring-offset-4 ring-offset-[var(--color-background)]">
            <Image
              src={siteConfig.avatar}
              alt={siteConfig.name}
              fill
              sizes="128px"
              priority
              className="object-cover"
            />
          </div>

          <p className="mb-2 text-sm font-medium tracking-widest text-[var(--color-accent)] uppercase">
            {t("greeting")}
          </p>

          <h1 className="mb-3 text-4xl font-bold tracking-tight md:text-5xl">
            <span className="text-gradient">{siteConfig.name}</span>
          </h1>

          <p className="mb-2 text-xl font-semibold text-[var(--color-foreground)]">
            {t("headline")}
          </p>

          <p className="mb-4 text-lg font-medium text-[var(--color-accent)]">
            {t("title")}
          </p>

          <p className="mb-4 text-[var(--color-muted)]">{t("subtitle")}</p>

          <p className="mx-auto mb-6 max-w-xl leading-relaxed text-[var(--color-muted)]">
            {t("description")}
          </p>

          <p className="mb-1 text-sm text-[var(--color-muted)]">
            {t("role", { company: siteConfig.company })}
          </p>
          <p className="mb-8 text-sm text-[var(--color-muted)]">
            {t("location", { location })}
          </p>

          <div className="mb-8">
            <SocialLinks />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <NavButton href="/about" variant="primary">
              {t("ctaAbout")}
            </NavButton>
            <NavButton href="/skills" variant="secondary">
              {t("ctaSkills")}
            </NavButton>
            <NavButton href="/contact" variant="tertiary">
              {t("ctaContact")}
            </NavButton>
          </div>
        </div>
      </div>
    </section>
  );
}
