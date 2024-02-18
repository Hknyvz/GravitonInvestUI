import React, { cache } from 'react';

import FinancialTable from '@/components/financial/FinancialTable';
import { getDictionary } from '@/get-dictionary';
import type { Locale } from '@/i18n-config';
import { getBalance } from '@/services/financialServices';

const getCachedData = cache(async (code: string, lang: Locale) => {
  return getBalance(code, lang);
});

export async function generateMetadata({
  params: { code, lang },
}: {
  params: { code: string; lang: Locale };
}) {
  const data = await getCachedData(code, lang);
  return {
    title: data.result.company?.name,
  };
}

export const revalidate = 10;

async function page({
  params: { code, lang },
}: {
  params: { code: string; lang: Locale };
}) {
  const data = await getCachedData(code, lang);
  const tableTitle = (await getDictionary(lang)).tableLanguage
    .balanceTableTitle;
  return (
    <>
      <FinancialTable
        tableHeaderTitle={tableTitle}
        data={data.result}
      ></FinancialTable>
    </>
  );
}

export default page;
