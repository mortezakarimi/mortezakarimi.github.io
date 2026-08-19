import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";
import {
  getAlternateLanguages,
  getCanonicalUrl,
  htmlLangTags,
  type PageKey,
} from "@/lib/seo";
import { getSiteUrl } from "@/lib/site-url";
import { siteConfig } from "@/lib/site";

type CreateMetadataOptions = {
  locale: Locale;
  page: PageKey;
};

export async function createPageMetadata({
  locale,
  page,
}: CreateMetadataOptions): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "metadata" });
  const canonical = getCanonicalUrl(locale, page);
  const title = t(`${page}.title`);
  const description = t(`${page}.description`);

  return {
    title,
    description,
    authors: [{ name: siteConfig.name, url: getSiteUrl() }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    metadataBase: new URL(getSiteUrl()),
    alternates: {
      canonical,
      languages: getAlternateLanguages(page),
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: locale === "fa" ? "fa_IR" : "en_US",
      alternateLocale: routing.locales
        .filter((loc) => loc !== locale)
        .map((loc) => (loc === "fa" ? "fa_IR" : "en_US")),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    other: {
      "content-language": htmlLangTags[locale],
    },
  };
}
