import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookieName, i18nLocales } from "@/app/[locale]/i18n/i18-config";
import acceptLanguage, { languages } from "accept-language";

acceptLanguage.languages(i18nLocales.locales);
// Get the preferred locale, similar to the above or using a library
function getLocale(request: NextRequest, defaultLocale: string) {
  return defaultLocale;
}

export async function middleware(request: any) {
  // const { locales, defaultLocale } = i18nLocales;
  // const { pathname, basePath } = request.nextUrl;
  //
  // const pathnameHasLocale = locales.some(
  //   (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  // );
  // if (pathnameHasLocale) return;
  //
  // // Redirect if there is no locale
  // const locale = getLocale(request, defaultLocale);
  // request.nextUrl.pathname = `/${locale}`;
  // // e.g. incoming request is /products
  // // The new URL is now /en-US/products
  // return NextResponse.redirect(request.nextUrl);

  let lng;
  if (request.cookies.has(cookieName))
    lng = acceptLanguage.get(request?.cookies?.get(cookieName).value);
  if (!lng) lng = acceptLanguage.get(request.headers.get("Accept-Language"));
  if (!lng) lng = i18nLocales.defaultLocale;

  // Redirect if lng in path is not supported
  if (
    !i18nLocales.locales.some((loc) =>
      request.nextUrl.pathname.startsWith(`/${loc}`),
    ) &&
    !request.nextUrl.pathname.startsWith("/_next")
  ) {
    return NextResponse.redirect(
      new URL(`/${lng}${request.nextUrl.pathname}`, request.url),
    );
  }

  if (request.headers.has("referer")) {
    const refererUrl = new URL(request.headers.get("referer"));
    const lngInReferer = i18nLocales.locales.find((l) =>
      refererUrl.pathname.startsWith(`/${l}`),
    );
    const response = NextResponse.next();
    if (lngInReferer) response.cookies.set(cookieName, lngInReferer);
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|img/|favicon.ico).*)",
};
