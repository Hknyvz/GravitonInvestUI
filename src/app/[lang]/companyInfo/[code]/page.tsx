import React from 'react';

import CompanyInfo from '@/components/companyInfo/CompanyInfo';
import type { Locale } from '@/i18n-config';
import { getBalance } from '@/services/financialServices';

export async function generateMetadata({
  params: { code, lang },
}: {
  params: { code: string; lang: Locale };
}) {
  const data = await getBalance(code, lang);
  return {
    title: data.result?.company?.name,
  };
}

async function page({
  params: { code, lang },
}: {
  params: { code: string; lang: Locale };
}) {
  return (
    <>
      <div>
        {code}-{lang}
      </div>
      <CompanyInfo></CompanyInfo>
    </>
  );
}

export default page;
