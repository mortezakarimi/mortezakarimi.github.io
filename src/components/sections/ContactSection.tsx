"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Card } from "@heroui/react";
import { UiIcon } from "@/lib/icons";
import { siteConfig } from "@/lib/site";
import { SocialLinks } from "./SocialLinks";

export function ContactSection() {
  const t = useTranslations("contact");
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${siteConfig.email}`;
    }
  }

  return (
    <section className="section-padding">
      <div className="container-narrow">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            <span className="text-gradient">{t("title")}</span>
          </h1>
          <p className="mx-auto max-w-2xl text-[var(--color-muted)]">
            {t("subtitle")}
          </p>
        </div>

        <div className="mx-auto grid max-w-lg gap-6">
          <Card className="glass-card glow-hover rounded-2xl p-6" variant="secondary">
            <Card.Header>
              <Card.Title className="flex items-center gap-2 text-lg font-semibold">
                <UiIcon name="envelope" className="size-5 text-[var(--color-accent)]" />
                {t("email")}
              </Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="mb-4 text-[var(--color-muted)]">{siteConfig.email}</p>
              <button
                type="button"
                className="button button--secondary button--sm"
                onClick={copyEmail}
              >
                {copied ? t("copied") : t("copyEmail")}
              </button>
            </Card.Content>
          </Card>

          <Card className="glass-card glow-hover rounded-2xl p-6" variant="secondary">
            <Card.Header>
              <Card.Title className="flex items-center gap-2 text-lg font-semibold">
                <UiIcon name="phone" className="size-5 text-[var(--color-accent)]" />
                {t("phone")}
              </Card.Title>
            </Card.Header>
            <Card.Content>
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
              >
                {siteConfig.phone}
              </a>
            </Card.Content>
          </Card>

          <Card className="glass-card glow-hover rounded-2xl p-6" variant="secondary">
            <Card.Header>
              <Card.Title className="text-lg font-semibold">{t("social")}</Card.Title>
            </Card.Header>
            <Card.Content>
              <SocialLinks showEmail />
            </Card.Content>
          </Card>
        </div>
      </div>
    </section>
  );
}
