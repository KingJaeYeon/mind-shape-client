import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { i18n } from "@/app/[locale]/i18n/i18-config";

// Get the preferred locale, similar to the above or using a library
function getLocale(request: NextRequest, defaultLocale: string) {
  return defaultLocale;
}

export async function middleware(request: NextRequest) {
  const { locales, defaultLocale } = i18n;
  const { pathname, basePath } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );
  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request, defaultLocale);
  request.nextUrl.pathname = `/${locale}`;
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|img/|favicon.ico).*)",
};
