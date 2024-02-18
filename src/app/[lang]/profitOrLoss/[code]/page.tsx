import React, { cache } from 'react';

import FinancialTable from '@/components/financial/FinancialTable';
import { getDictionary } from '@/get-dictionary';
import type { Locale } from '@/i18n-config';
import { getProfitOrLoss } from '@/services/financialServices';

const getCachedData = cache(async (code: string, lang: Locale) => {
  return getProfitOrLoss(code, lang);
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

async function page({
  params: { code, lang },
}: {
  params: { code: string; lang: Locale };
}) {
  const data = await getCachedData(code, lang);
  const tableHeaderTitle = (await getDictionary(lang)).tableLanguage
    .profitOrLossTableTitle;
  return (
    <>
      <FinancialTable
        tableHeaderTitle={tableHeaderTitle}
        data={data.result}
      ></FinancialTable>
    </>
  );
}

export default page;
