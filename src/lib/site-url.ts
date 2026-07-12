/** Canonical production host (www redirects to no-www on Vercel). */
const productionUrl = "https://morteza-karimi.com";

export function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);
  }

  // Avoid vercel.app deployment URLs in SEO metadata — use production domain.
  return productionUrl;
}

export function normalizeSiteUrl(url: string): string {
  return url.replace(/\/$/, "");
}

/** Ensures SEO URLs match trailingSlash: true in next.config. */
export function withTrailingSlash(pathname: string): string {
  if (!pathname || pathname === "/") {
    return "/";
  }

  return pathname.endsWith("/") ? pathname : `${pathname}/`;
}

export function absoluteUrl(pathname: string): string {
  return `${getSiteUrl()}${withTrailingSlash(pathname)}`;
}
