'use client';

import { Select } from 'antd';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import type { Locale } from '@/i18n-config';
import { i18n } from '@/i18n-config';

export interface ILocalizationSelectProps {
  locale: string;
}

function LocalizationSelect() {
  const router = useRouter();
  const pathName = usePathname();
  const [localePath] = useState(pathName.split('/')[1] as Locale);
  useEffect(() => {
    const loc = localStorage.getItem('locale');
    if (loc && loc !== localePath) {
      router.push(`/${loc}`);
    }
  }, []);

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  const handleOnSelect = (e: string) => {
    localStorage.setItem('locale', e);
    router.push(redirectedPathName(e), { scroll: false });
  };

  const options = i18n.locales.map((locale, index) => ({
    key: index,
    label: locale.toUpperCase(),
    value: locale,
  }));

  return (
    <Select
      defaultValue={localePath}
      options={options}
      onChange={handleOnSelect}
    />
  );
}

export default LocalizationSelect;
