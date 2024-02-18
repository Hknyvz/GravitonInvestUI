import { getRouteDictionary } from '@/get-dictionary';
import type { Locale } from '@/i18n-config';

export const HomeRoute = async (lang: Locale) => {
  const routeDictionary = await getRouteDictionary(lang);
  return `/${lang ?? 'tr'}/${routeDictionary.balance}/FROTO`;
};

export const BalanceRoute = async (lang: Locale, companyCode: string) => {
  const routeDictionary = await getRouteDictionary(lang);
  return `/${lang ?? 'tr'}/${routeDictionary.balance}/${companyCode}`;
};
