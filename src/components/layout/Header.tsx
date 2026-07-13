import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { brand } from "@/lib/brand";
import { LocaleSwitcher } from "./LocaleSwitcher";
import {siteConfig} from "@/lib/site";

const navItems = [
  { href: "/", key: "home" as const },
  { href: "/about", key: "about" as const },
  { href: "/skills", key: "skills" as const },
  { href: "/contact", key: "contact" as const },
  { href: siteConfig.resumeUrl, key: 'cv' as const}
];

function NavLinks({ className }: { className?: string }) {
  const t = useTranslations("nav");

  return (
    <nav className={className} aria-label="Main">
      {navItems.map((item) => (
        <Link
          key={item.key}
          href={item.href}
          className="shrink-0 rounded-lg px-3 py-2 text-sm text-(--color-muted) transition-colors hover:bg-accent-soft hover:text-(--color-accent)"
        >
          {t(item.key)}
        </Link>
      ))}
    </nav>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-(--color-surface-border) bg-background/85 backdrop-blur-xl">
      <div className="container-narrow flex h-16 items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-2.5 transition-opacity hover:opacity-90"
          aria-label="Morteza Karimi"
        >
          <Image
            src={brand.logo}
            alt=""
            width={32}
            height={32}
            className="size-8"
            aria-hidden
          />
        </Link>

        <NavLinks className="hidden items-center gap-1 md:flex" />

        <LocaleSwitcher />
      </div>

      <NavLinks className="container-narrow flex items-center gap-1 overflow-x-auto border-t  border-(--color-surface-border) px-6 py-2 md:hidden" />
    </header>
  );
}
