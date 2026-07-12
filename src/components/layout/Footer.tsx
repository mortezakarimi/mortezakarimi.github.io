import { useTranslations } from "next-intl";
import { siteConfig } from "@/lib/site";

export function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-surface-border)] py-8">
      <div className="container-narrow flex flex-col items-center gap-2 px-6 text-center text-sm text-[var(--color-muted)]">
        <p>
          © {year} {siteConfig.name}. {t("rights")}
        </p>
        <p>{t("builtWith")}</p>
      </div>
    </footer>
  );
}
