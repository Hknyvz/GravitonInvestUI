import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import type { Locale } from '@/i18n-config';
import { i18n } from '@/i18n-config';

import { getRouteDictionary } from './get-dictionary';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale && pathname) {
    console.log('pathnameIsMissingLocale', pathname);
    const locale = 'tr';
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
        request.url
      )
    );
  }
  const paths = pathname.split('/');

  const routeDictionary: { [key: string]: string } = await getRouteDictionary(
    paths[1] as Locale
  );
  paths.forEach((item, index) => {
    const path = routeDictionary[item];

    if (path) {
      paths[index] = path;
    }
  });
  const newPath = paths.join('/');

  if (newPath !== pathname) {
    return NextResponse.redirect(`${request.nextUrl.origin}${newPath}`);
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|test|admin|android-chrome-512x512.png|_next/static|_next/image|favicon.ico|favicon-32x32.png|favicon-16x16.png|android-chrome-192x192.png|site.webmanifest).*)',
  ],
};
