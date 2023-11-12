'use client'
import { useLocaleConfig } from '@/contexts/LocaleConfigContext';
import { useThemeConfig } from '@/contexts/ThemeConfigContext';
import { ListActiveCompaniesDataItem } from '@/models/company/ListActiveCompaniesResponseDto';
import React, { useEffect, useState } from 'react'
import { BalanceRoute } from '@/components/redirect';
import { Locale } from '@/i18n-config';
import Link from 'next/link';
import { AutoComplete, Input } from 'antd';
import { usePathname, useRouter } from 'next/navigation';

interface CompanySearchedOptions {
    label: React.JSX.Element;
    options?: CompanySearchedOptions[];
    value?: string;
}

interface ICompanySearchProp {
    data: ListActiveCompaniesDataItem[],
    companySearch: {
        searchCompany: string;
        companies: string;
    };
}

function CompanySearch({ data, companySearch }: ICompanySearchProp) {
    const [companies, setCompanies] = useState<ListActiveCompaniesDataItem[]>(data);
    const [searchedText, setSearchedText] = useState<string>("")
    const [searchedCompanies, setSearchedCompanies] = useState<CompanySearchedOptions[]>([])
    const [palceHolder, setPalceHolder] = useState("");
    const { themeConfig } = useThemeConfig();
    const { localeConfig } = useLocaleConfig();
    const router = useRouter();

    useEffect(() => {
        const f = async () => {
            let newArray: CompanySearchedOptions[] = [];
            companies.forEach(async p => {
                newArray.push(await renderItem(p.companyCode, p.name, p.companyCode));
            })
            setSearchedCompanies([{ label: renderTitle(companySearch.companies), options: newArray }]);
        }
        const renderTitle = (title: string) => (
            <span>
                {title}
            </span>
        );

        const renderItem = async (title: string, name: string, companyCode: string): Promise<CompanySearchedOptions> => {
            const nameHighlighted = name.replace(new RegExp(`(${searchedText})`, 'gi'), '<strong>$1</strong>');
            const titleHighlighted = title.replace(new RegExp(`(${searchedText})`, 'gi'), '<strong>$1</strong>');
            return ({
                value: title,
                label: (
                    <Link
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            color: themeConfig ? "white" : "black",
                            fontSize: "18px"
                        }}
                        href={await BalanceRoute(localeConfig as Locale, companyCode)}
                    >
                        <div dangerouslySetInnerHTML={{ __html: titleHighlighted }} />
                        <span style={{ fontSize: 14 }}>
                            <div dangerouslySetInnerHTML={{ __html: nameHighlighted }} />
                        </span>
                    </Link>
                ),
            })
        };
        f()
    }, [companies, localeConfig, themeConfig, searchedText, companySearch])

    useEffect(() => {
    }, [])

    const handleInput = async (value: string) => {
        console.log(value)
        if (value) {
            const regex = new RegExp(value, "i");
            let newItems = data.filter(p => regex.test(p.name) || regex.test(p.companyCode));
            setSearchedText(value)
            setCompanies(newItems);
        }
    }

    const handlePressEnter = async (event: string, options: any) => {
        let company = companies.filter(p => p.companyCode === options.value)[0];
        router.push(await BalanceRoute(localeConfig as Locale, company.companyCode));
        handleInput(event)
    }

    function handleClear(): void {
        setSearchedText("");
    }

    return (
        <AutoComplete
            popupClassName="certain-category-search-dropdown"
            popupMatchSelectWidth={800}
            style={{ width: 800 }}
            options={searchedCompanies}
            onSelect={handlePressEnter}
            allowClear={true}
            onClear={handleClear}
        >
            <Input.Search onInput={(e) => handleInput(e.currentTarget.value)} size="large" placeholder={companySearch.searchCompany} />
        </AutoComplete>
    )
}

export default React.memo(CompanySearch);