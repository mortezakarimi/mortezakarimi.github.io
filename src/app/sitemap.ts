import type { MetadataRoute } from "next";
import { getPathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { siteConfig, routes } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    for (const route of routes) {
      const href = route ? `/${route}` : "/";
      const pathname = getPathname({
        locale,
        href: href as "/" | "/about" | "/skills" | "/contact",
      });
      const url = `${siteConfig.url}${pathname}`;

      const alternates: Record<string, string> = {};
      for (const loc of routing.locales) {
        alternates[loc] = `${siteConfig.url}${getPathname({
          locale: loc,
          href: href as "/" | "/about" | "/skills" | "/contact",
        })}`;
      }

      entries.push({
        url,
        lastModified: new Date(),
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
