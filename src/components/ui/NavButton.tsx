import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";

const variants = {
  primary: "button button--primary button--md",
  secondary: "button button--secondary button--md",
  tertiary: "button button--tertiary button--md",
} as const;

type NavButtonProps = {
  href: string;
  variant: keyof typeof variants;
  children: ReactNode;
  external?: boolean;
};

export function NavButton({
  href,
  variant,
  children,
  external = false,
}: NavButtonProps) {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={variants[variant]}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={variants[variant]}>
      {children}
    </Link>
  );
}
