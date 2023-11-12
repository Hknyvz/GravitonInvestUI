import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { Locale, i18n } from "@/i18n-config";

import { getRouteDictionary } from "./get-dictionary";

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const locale = "tr";
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
        request.url
      )
    );
  } else {
    const paths = pathname.split("/");

    const routeDictionary: { [key: string]: string } = await getRouteDictionary(
      paths[1] as Locale
    );
    paths.forEach((item, index) => {
      let path = routeDictionary[item];

      if (path) {
        paths[index] = path;
      }
    });
    let newPath = paths.join("/");

    if (newPath !== pathname) {
      return NextResponse.redirect(`${request.nextUrl.origin}${newPath}`);
    }
  }
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|favicon-32x32.png|favicon-16x16.png|site.webmanifest).*)",
  ],
};
