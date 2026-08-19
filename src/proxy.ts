import createMiddleware from "next-intl/middleware";
import { NextResponse, type NextRequest } from "next/server";
import { routing } from "./i18n/routing";
import { CANONICAL_ORIGIN, isAliasHost } from "./lib/site-url";

const handleI18nRouting = createMiddleware(routing);

const STATIC_FILE = /\.[a-z0-9]+$/i;

export function proxy(request: NextRequest) {
  const host = request.headers.get("host");

  if (isAliasHost(host)) {
    const destination = new URL(
      `${request.nextUrl.pathname}${request.nextUrl.search}`,
      CANONICAL_ORIGIN,
    );
    return NextResponse.redirect(destination, 301);
  }

  if (STATIC_FILE.test(request.nextUrl.pathname)) {
    return NextResponse.next();
  }

  return handleI18nRouting(request);
}

export const config = {
  matcher: ["/", "/(fa|en)/:path*", "/((?!_next|_vercel).*)"],
};
