import { redirect } from 'next/navigation';

import { HomeRoute } from '@/components/redirect';
import type { Locale } from '@/i18n-config';

async function page({ params: { lang } }: { params: { lang: Locale } }) {
  redirect(await HomeRoute(lang));
}

export default page;
