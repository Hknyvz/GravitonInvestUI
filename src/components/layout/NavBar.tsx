import { Button, Dropdown, Layout, Space, Switch, theme } from 'antd';
import React from 'react';
import NavbarMenu from './NavbarMenu';
import { ListActiveCompaniesDataItem } from '@/models/company/ListActiveCompaniesResponseDto';
import { useThemeConfig } from '@/contexts/ThemeConfigContext';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import LocalizationSelect from './LocalizationSelect';
const { Header } = Layout;

const navBarStyle: React.CSSProperties = {
  color: '#6c6c6c',
  height: 64,
  paddingInline: 10,
  lineHeight: '64px',
  backgroundColor: '#FFFFFF',
  display: 'flex',
  justifyContent: 'space-between',
};

export interface NavBarProps {
  collapseAction: () => void;
  data: ListActiveCompaniesDataItem[];
  localizations: {
    searchCompany: string;
    companies: string;
    locale: string;
  }
}

export default function NavBar({ collapseAction, data, localizations }: NavBarProps) {
  const { setThemeConfig } = useThemeConfig();

  function handleThemeSwitch(checked: boolean): void {
    setThemeConfig(checked)
  }

  return (
    <Header style={{ paddingLeft: 15 }}>
      <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
        <Button
          type="text"
          onClick={collapseAction}
          icon={<GiHamburgerMenu />}
        ></Button>
        <NavbarMenu data={data} localizations={localizations}></NavbarMenu>
        <Space>
          <LocalizationSelect locale={localizations.locale} />
          <Switch
            onChange={handleThemeSwitch}
            checkedChildren={<BsFillSunFill size={20} />}
            unCheckedChildren={<div style={{ marginTop: 2, marginLeft: 3 }}><BsFillMoonFill size={20} /></div>} />
        </Space>
      </div>
    </Header >
  );
}
