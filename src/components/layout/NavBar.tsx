'use client';

import { Layout, Switch } from 'antd';
import React, { useEffect } from 'react';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';

import { useThemeConfig } from '@/contexts/ThemeConfigContext';

import CompanySearch from './CompanySearch';
import LocalizationSelect from './LocalizationSelect';
import style from './styles.module.css';

export interface NavBarProps {
  collapseAction: () => void;
}

function NavBar() {
  const { themeConfig, setThemeConfig } = useThemeConfig();
  const { Header } = Layout;

  useEffect(() => {
    const theme: boolean = JSON.parse(localStorage.getItem('theme') as string);
    setThemeConfig(theme);
  }, [setThemeConfig]);

  function handleThemeSwitch(checked: boolean): void {
    setThemeConfig(checked);
    localStorage.setItem('theme', JSON.stringify(checked));
  }
  return (
    <>
      <Header style={{ paddingLeft: 15 }}>
        <div className={style.header}>
          <div className={style.search}>
            <CompanySearch />
          </div>
          <div className={style.headerRight}>
            <LocalizationSelect />
            <Switch
              onChange={handleThemeSwitch}
              checked={themeConfig}
              checkedChildren={<BsFillSunFill size={20} />}
              unCheckedChildren={
                <div style={{ marginTop: 2, marginLeft: 3 }}>
                  <BsFillMoonFill size={20} />
                </div>
              }
            />
          </div>
        </div>
      </Header>
    </>
  );
}

export default React.memo(NavBar);
