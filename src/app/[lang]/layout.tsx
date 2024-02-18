/* eslint-disable @next/next/no-page-custom-font */
import '@/styles/reset.css';
import '@/styles/globals.css';

import AntdStyledComponentsRegistry from '@/components/AntdStyledComponentsRegistry';
import MainLayout from '@/components/layout/MainLayout';
import { ThemeProvider } from '@/contexts/ThemeConfigContext';
import type { Locale } from '@/i18n-config';
import { i18n } from '@/i18n-config';

export const metadata = {
  title: 'Graviton Invest',
  description:
    "Graviton Invest, yatırımcılara finansal piyasaları anlamalarına yardımcı olmak için kapsamlı temel analiz araçları sunar. Hisseleri, endeksleri ve şirketleri inceleyin, analizlerimizi takip edin ve bilinçli yatırım kararları verin. Finans dünyasını anlamak için Graviton Invest'i keşfedin.",
  viewport: 'width=device-width, initial-scale=1',
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export interface RootLayoutProps {
  children: React.ReactNode;
  params: { lang: Locale };
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  return (
    <html lang={params.lang}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </head>
      <body>
        <ThemeProvider>
          <AntdStyledComponentsRegistry params={params}>
            <MainLayout params={params}>{children}</MainLayout>
          </AntdStyledComponentsRegistry>
        </ThemeProvider>
      </body>
    </html>
  );
}
