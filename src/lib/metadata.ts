import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getPathname } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { siteConfig } from "@/lib/site";

type PageKey = "home" | "about" | "skills" | "contact";

type CreateMetadataOptions = {
  locale: Locale;
  page: PageKey;
  path?: string;
};

function getLocalizedPath(locale: Locale, path: string) {
  return getPathname({ locale, href: (path || "/") as "/" | "/about" | "/skills" | "/contact" });
}

export async function createPageMetadata({
  locale,
  page,
  path = "",
}: CreateMetadataOptions): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "metadata" });
  const href = path ? `/${path}` : "/";
  const pathname = getLocalizedPath(locale, href);
  const canonical = `${siteConfig.url}${pathname}`;
  const title = t(`${page}.title`);
  const description = t(`${page}.description`);

  const languages: Record<string, string> = {};
  for (const loc of routing.locales) {
    languages[loc] = `${siteConfig.url}${getLocalizedPath(loc, href)}`;
  }
  languages["x-default"] = `${siteConfig.url}${getLocalizedPath("en", href)}`;

  return {
    title,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: locale === "fa" ? "fa_IR" : "en_US",
      type: "website",
      images: [
        {
          url: siteConfig.avatar,
          width: 480,
          height: 480,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary",
      title,
      description,
      images: [siteConfig.avatar],
    },
  };
}
