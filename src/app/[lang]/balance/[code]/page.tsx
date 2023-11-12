import BalanceTable from '@/components/balance/BalanceTable';
import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import GetBalanceResponseData from '@/models/balance/GetBalanceResponseDto';
import { ApiResponse } from '@/models/shared/ApiResponse';
import React from 'react'

export async function generateMetadata({ params: { code, lang } }: { params: { code: string, lang: Locale } }) {
    const data = await getData(code, lang);
    return {
        title: data.result.company?.name,
    }
}

async function page({ params: { code, lang } }: { params: { code: string, lang: Locale } }) {
    const data = await getData(code, lang);
    const dictionary = await getDictionary(lang);
    return (
        <>
            <BalanceTable data={data.result} tableLanguage={dictionary["tableLanguage"]} ></BalanceTable>
        </>
    )
}

async function getData(code: string, lang: Locale): Promise<ApiResponse<GetBalanceResponseData>> {
    let result = await fetch(`http://localhost:5000/api/FinancialData/GetBalance?companyCode=${code}&Language=${lang}`, { next: { revalidate: 3600 } });
    if (!result.ok) {
        throw new Error('Failed to fetch data')
    }
    let response: ApiResponse<GetBalanceResponseData> = await result.json();
    if (response.meta.statusCode > 299) {
    }
    return response;
}

export default page