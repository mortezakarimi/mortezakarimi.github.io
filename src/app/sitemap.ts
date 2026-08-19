import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { getAlternateLanguages, getCanonicalUrl, type PageKey } from "@/lib/seo";
import { contentUpdatedAt, routes } from "@/lib/site";

export const dynamic = "force-static";

const pageKeys: Record<(typeof routes)[number], PageKey> = {
  "": "home",
  about: "about",
  projects: "projects",
  skills: "skills",
  contact: "contact",
};

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    for (const route of routes) {
      const page = pageKeys[route];
      const url = getCanonicalUrl(locale, page);
      const alternates = getAlternateLanguages(page);

      entries.push({
        url,
        lastModified: contentUpdatedAt,
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1 : 0.8,
        alternates: {
          languages: alternates,
        },
      });
    }
  }

  return entries;
}
