"use client";

import { Tooltip } from "@heroui/react";
import { SocialIcon, type SocialIconKey } from "@/lib/icons";
import { siteConfig } from "@/lib/site";

type SocialLinksProps = {
  showEmail?: boolean;
  size?: "sm" | "md";
};

export function SocialLinks({ showEmail = false, size = "md" }: SocialLinksProps) {
  const sizeClass = size === "sm" ? "size-10" : "size-11";
  const iconSize = size === "sm" ? "size-4" : "size-5";

  const links = [
    ...siteConfig.social,
    ...(showEmail
      ? [{ name: "Email", href: `mailto:${siteConfig.email}`, icon: "email" as const }]
      : []),
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {links.map((link) => (
        <Tooltip key={link.name} delay={250} closeDelay={100}>
          <Tooltip.Trigger className="inline-flex" aria-label={link.name}>
            <a
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={
                link.href.startsWith("mailto")
                  ? undefined
                  : "noopener noreferrer"
              }
              aria-label={link.name}
              title={link.name}
              className={`glass-card glow-hover flex ${sizeClass} items-center justify-center rounded-xl text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]`}
            >
              <SocialIcon
                name={link.icon as SocialIconKey}
                className={iconSize}
              />
            </a>
          </Tooltip.Trigger>
          <Tooltip.Content placement="top" showArrow>
            {link.name}
          </Tooltip.Content>
        </Tooltip>
      ))}
    </div>
  );
}
