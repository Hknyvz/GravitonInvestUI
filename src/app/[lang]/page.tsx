import { HomeRoute } from '@/components/redirect';
import { Locale } from '@/i18n-config';
import { redirect } from 'next/navigation'

async function page({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  redirect(await HomeRoute(lang));
}

export default page