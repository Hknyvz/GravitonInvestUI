/* eslint-disable @next/next/no-page-custom-font */
import '@/styles/reset.css'
import '@/styles/globals.css'
import AntdStyledComponentsRegistry from '@/components/AntdStyledComponentsRegistry'
import MainLayout from '@/components/layout/MainLayout'
import { ApiResponse } from '@/models/shared/ApiResponse'
import { ListActiveCompaniesResponseDto } from '@/models/company/ListActiveCompaniesResponseDto'
import { ThemeProvider } from '@/contexts/ThemeConfigContext'
import { LocaleProvider } from '@/contexts/LocaleConfigContext'
import { Locale, i18n } from '@/i18n-config'
import { getDictionary } from '@/get-dictionary'

export const metadata = {
  title: 'Graviton Invest',
  description: 'Graviton Invest, yatırımcılara finansal piyasaları anlamalarına yardımcı olmak için kapsamlı temel analiz araçları sunar. Hisseleri, endeksleri ve şirketleri inceleyin, analizlerimizi takip edin ve bilinçli yatırım kararları verin. Finans dünyasını anlamak için Graviton Invest\'i keşfedin.',
  viewport: "width=device-width, initial-scale=1"
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  let result = await getData();
  const dictionary = await getDictionary(params.lang);
  return (
    <html lang={params.lang}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap" rel="stylesheet"></link>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </head>
      <body>
        <LocaleProvider>
          <ThemeProvider>
            <AntdStyledComponentsRegistry>
              <MainLayout data={result.result.data} localizations={{ ...dictionary["companySearch"], locale: params.lang }}>
                {children}
              </MainLayout>
            </AntdStyledComponentsRegistry>
          </ThemeProvider>
        </LocaleProvider>
      </body>
    </html >
  )
}


async function getData(): Promise<ApiResponse<ListActiveCompaniesResponseDto>> {
  let result = await fetch(`http://localhost:5000/api/Company/GetCompany`);
  if (!result.ok) {
    throw new Error('Failed to fetch data')
  }

  return result.json();
}