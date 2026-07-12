"use client";

import { useLocale, useTranslations } from "next-intl";
import { ToggleButton, ToggleButtonGroup } from "@heroui/react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export function LocaleSwitcher() {
  const t = useTranslations("localeSwitcher");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <ToggleButtonGroup
      selectionMode="single"
      selectedKeys={[locale]}
      size="sm"
      isDetached
      aria-label={t("label")}
      onSelectionChange={(keys) => {
        const selected = Array.from(keys)[0] as string | undefined;
        if (selected && selected !== locale) {
          router.replace(pathname, { locale: selected as "en" | "fa" });
        }
      }}
    >
      {routing.locales.map((loc) => (
        <ToggleButton key={loc} id={loc} variant="ghost">
          {t(loc)}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}
