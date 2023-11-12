import type { Locale } from "./i18n-config";

const dictionaries = {
  en: () => import("@/dictionaries/en.json").then((module) => module.default),
  tr: () => import("@/dictionaries/tr.json").then((module) => module.default),
};

const routeDictionaries = {
  en: () =>
    import("@/dictionaries/en_route.json").then((module) => module.default),
  tr: () =>
    import("@/dictionaries/tr_route.json").then((module) => module.default),
};

export const getDictionary = (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries.tr();

export const getRouteDictionary = async (locale: Locale) =>
  routeDictionaries[locale]?.() ?? dictionaries.tr();
