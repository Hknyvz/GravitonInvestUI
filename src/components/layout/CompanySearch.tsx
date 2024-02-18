'use client';

import { AutoComplete, Image, Input } from 'antd';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import { BalanceRoute } from '@/components/redirect';
import { useThemeConfig } from '@/contexts/ThemeConfigContext';
import { getDictionary } from '@/get-dictionary';
import type { Locale } from '@/i18n-config';
import type { ListCompanyResponseItem } from '@/models/company/ListActiveCompaniesResponseDto';
import { getCompanies } from '@/services/companyServices';

interface CompanySearchedOptions {
  label: React.JSX.Element;
  options?: CompanySearchedOptions[];
  value?: string;
}

function CompanySearch() {
  const [data, setData] = useState<ListCompanyResponseItem[]>([]);
  const [companies, setCompanies] = useState<ListCompanyResponseItem[]>([]);
  const [searchedText, setSearchedText] = useState<string>('');
  const [searchedCompanies, setSearchedCompanies] =
    useState<CompanySearchedOptions[]>();
  const { themeConfig } = useThemeConfig();
  const [isClicked, setIsClicked] = useState(false);
  const router = useRouter();
  const [locale] = useState<Locale>(usePathname().split('/')[1] as Locale);
  const [companiesText, setCompaniesText] = useState('');
  const [searchCompanyText, setSearchCompanyText] = useState('');

  useEffect(() => {
    getCompanies().then((p) => {
      setData(p.result.companies);
      setCompanies(p.result.companies);
    });
  }, []);

  useEffect(() => {
    getDictionary(locale).then((p) => {
      setCompaniesText(p.companySearch.companies);
      setSearchCompanyText(p.companySearch.searchCompany);
    });
  }, [locale]);

  useEffect(() => {
    const renderTitle = (title: string) => <span>{title}</span>;

    const renderItem = async (
      title: string,
      name: string,
      code: string,
      companyImage: string
    ): Promise<CompanySearchedOptions> => {
      const nameHighlighted = name.replace(
        new RegExp(`(${searchedText})`, 'gi'),
        '<strong>$1</strong>'
      );
      const titleHighlighted = title.replace(
        new RegExp(`(${searchedText})`, 'gi'),
        '<strong>$1</strong>'
      );
      const imageUrl = `data:image/jpeg;base64,${companyImage}`;
      return {
        value: title,
        label: (
          <Link
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              color: themeConfig ? 'white' : 'black',
              fontSize: '18px',
            }}
            href={await BalanceRoute(locale, code)}
          >
            <div dangerouslySetInnerHTML={{ __html: titleHighlighted }} />
            <span style={{ fontSize: 14 }}>
              <div dangerouslySetInnerHTML={{ __html: nameHighlighted }} />
            </span>
            <Image
              src={imageUrl}
              alt="Base64 Image"
              width={40}
              height={40}
              preview={false}
              style={{ objectFit: 'scale-down' }}
            />
          </Link>
        ),
      };
    };

    const f = async () => {
      const newArray: CompanySearchedOptions[] = [];
      companies.forEach(async (p) => {
        newArray.push(await renderItem(p.code, p.name, p.code, p.companyImage));
      });
      setSearchedCompanies([
        { label: renderTitle(companiesText), options: newArray },
      ]);
    };

    f();
  }, [companies, locale, themeConfig, searchedText, companiesText, isClicked]);

  const handleInput = async (value: string) => {
    if (value) {
      const regex = new RegExp(value, 'i');
      const newItems = data.filter(
        (p) => regex.test(p.name) || regex.test(p.code)
      );
      setSearchedText(value);
      setCompanies(newItems);
    }
  };

  const handlePressEnter = async (event: string, options: any) => {
    const company = companies.filter((p) => p.code === options.value)[0];
    if (company) router.push(await BalanceRoute(locale, company.code));
    handleInput(event);
  };

  function handleClear(): void {
    setSearchedText('');
  }

  function handleClick(): void {
    setIsClicked(true);
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
      <Input.Search
        onClick={handleClick}
        onInput={(e) => handleInput(e.currentTarget.value)}
        size="large"
        placeholder={searchCompanyText}
      />
    </AutoComplete>
  );
}

export default React.memo(CompanySearch);
