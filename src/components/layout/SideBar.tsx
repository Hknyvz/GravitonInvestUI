'use client';

import type { MenuProps } from 'antd';
import { Affix, Layout, Menu, theme } from 'antd';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import Logo from '@/components/layout/Logo';
import { getDictionary } from '@/get-dictionary';
import type { Locale } from '@/i18n-config';
import type { StringDictionary } from '@/models/shared/StringDict';

const { Sider } = Layout;

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group' | 'divider'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

type MenuItem = Required<MenuProps>['items'][number];

export interface SideBarProps {
  params: { lang: Locale };
}

export default function SideBar({ params }: SideBarProps) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const router = useRouter();
  const [menuItems, setMenuItems] = useState<StringDictionary>({});
  const code = usePathname().split('/').reverse()[0];
  useEffect(() => {
    getDictionary(params.lang).then((p) => {
      setMenuItems(p.menuTitle);
    });
  }, [params.lang]);

  const items: MenuItem[] = [
    getItem('', '/authentication', null, [], 'group'),
    getItem(menuItems.companyInfo, `/${params.lang}/companyInfo/${code}`),
    getItem(menuItems.balanceSheet, `/${params.lang}/balance/${code}`),
    getItem(menuItems.profitOrLoss, `/${params.lang}/profitOrLoss/${code}`),
    getItem(menuItems.cashFlows, `/${params.lang}/cashFlow/${code}`),
  ];
  return (
    <Affix style={{ maxWidth: 280 }}>
      <Sider
        collapsible
        collapsed={false}
        trigger={null}
        width={280}
        style={{
          background: colorBgContainer,
          borderRight: '1px solid #f0f0f0',
          height: '100%',
        }}
        theme="light"
        key="sideBarSider"
      >
        <Logo collapsed={false} key="sideBarLogo" />
        <Menu
          onClick={(e) => {
            router.push(e.key);
          }}
          style={{
            height: 'calc(100vh - 64px)',
            overflow: 'auto',
            padding: '8px',
          }}
          theme="light"
          defaultSelectedKeys={['1']}
          mode="inline"
          items={items}
        />
      </Sider>
    </Affix>
  );
}
