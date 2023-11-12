'use client'
import { useLocaleConfig } from '@/contexts/LocaleConfigContext'
import { i18n } from '@/i18n-config'
import { Select } from 'antd'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import React from 'react'
import Cookies from 'js-cookie';

export interface ILocalizationSelectProps {
    locale: string
}

function LocalizationSelect({ locale }: ILocalizationSelectProps) {
    const { localeConfig, setLocaleConfig } = useLocaleConfig();
    const router = useRouter();
    const pathName = usePathname();
    const handleOnSelect = (e: string) => {
        setLocaleConfig(e);
        router.push(redirectedPathName(e));
        Cookies.set("locale", e);
    }
    const redirectedPathName = (locale: string) => {
        if (!pathName) return '/'
        const segments = pathName.split('/')
        segments[1] = locale
        return segments.join('/')
    }
    const options = i18n.locales.map((locale, index) => (
        {
            key: index,
            label: locale.toUpperCase(),
            value: locale
        }
    ));
    return (
        <Select
            defaultValue={locale}
            options={options}
            onChange={handleOnSelect}
        />
    )
}

export default LocalizationSelect