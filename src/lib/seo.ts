import { routing, type Locale } from "@/i18n/routing";
import { absoluteUrl } from "@/lib/site-url";

export type PageKey = "home" | "about" | "projects" | "skills" | "contact";

export type AppHref = "/" | "/about" | "/projects" | "/skills" | "/contact";

const pagePaths: Record<PageKey, AppHref> = {
  home: "/",
  about: "/about",
  projects: "/projects",
  skills: "/skills",
  contact: "/contact",
};

/** BCP 47 tags used in hreflang annotations. */
export const hreflangTags: Record<Locale, string> = {
  en: "en",
  fa: "fa-IR",
};

/** HTML lang attribute values. */
export const htmlLangTags: Record<Locale, string> = {
  en: "en",
  fa: "fa-IR",
};

export function getPagePath(page: PageKey): AppHref {
  return pagePaths[page];
}

/** Locale paths without next-intl request context (safe in sitemap). */
export function getLocalizedPathname(locale: Locale, page: PageKey): string {
  const path = pagePaths[page];

  if (locale === routing.defaultLocale) {
    return path;
  }

  if (path === "/") {
    return `/${locale}`;
  }

  return `/${locale}${path}`;
}

export function getCanonicalUrl(locale: Locale, page: PageKey): string {
  return absoluteUrl(getLocalizedPathname(locale, page));
}

export function getAlternateLanguages(page: PageKey): Record<string, string> {
  const languages: Record<string, string> = {};

  for (const locale of routing.locales) {
    languages[hreflangTags[locale]] = absoluteUrl(
      getLocalizedPathname(locale, page),
    );
  }

  languages["x-default"] = absoluteUrl(getLocalizedPathname("en", page));

  return languages;
}
