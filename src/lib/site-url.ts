/** Canonical production host (www redirects to no-www on Vercel). */
export const CANONICAL_HOST = "morteza-karimi.com";
export const CANONICAL_ORIGIN = `https://${CANONICAL_HOST}`;

export const SITE_ALIAS_HOSTS = [
  "morteza-karimi.ir",
  "www.morteza-karimi.ir",
] as const;

const productionUrl = CANONICAL_ORIGIN;

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

export function isAliasHost(host: string | null): boolean {
  if (!host) {
    return false;
  }

  const hostname = host.split(":")[0]?.toLowerCase();
  return SITE_ALIAS_HOSTS.includes(
    hostname as (typeof SITE_ALIAS_HOSTS)[number],
  );
}
