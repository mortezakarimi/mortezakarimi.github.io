import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { brand } from "@/lib/brand";
import { siteConfig } from "@/lib/site";
import { LocaleSwitcher } from "./LocaleSwitcher";

const navClassName =
  "shrink-0 rounded-lg px-3 py-2 text-sm text-(--color-muted) transition-colors hover:bg-accent-soft hover:text-(--color-accent)";

const internalNavItems = [
  { href: "/" as const, key: "home" as const },
  { href: "/about" as const, key: "about" as const },
  { href: "/projects" as const, key: "projects" as const },
  { href: "/skills" as const, key: "skills" as const },
  { href: "/contact" as const, key: "contact" as const },
];

function NavLinks({ className }: { className?: string }) {
  const t = useTranslations("nav");

  return (
    <nav className={className} aria-label="Main">
      {internalNavItems.map((item) => (
        <Link key={item.key} href={item.href} className={navClassName}>
          {t(item.key)}
        </Link>
      ))}
      <a
        href={siteConfig.resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={navClassName}
      >
        {t("cv")}
      </a>
    </nav>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-(--color-surface-border) bg-background/85 backdrop-blur-xl">
      <div className="container-narrow flex h-16 items-center justify-between px-6">
        <Link
          href="/"
          className="flex min-h-11 items-center gap-2.5 transition-opacity hover:opacity-90"
        >
          <Image
            src={brand.logo}
            alt=""
            width={32}
            height={32}
            className="size-8"
            priority
            aria-hidden
          />
          <span className="text-sm font-semibold tracking-tight text-(--color-foreground)">
            {siteConfig.name}
          </span>
        </Link>

        <NavLinks className="hidden items-center gap-1 md:flex" />

        <LocaleSwitcher />
      </div>

      <NavLinks className="container-narrow flex items-center gap-1 overflow-x-auto border-t border-(--color-surface-border) px-6 py-2 md:hidden" />
    </header>
  );
}
