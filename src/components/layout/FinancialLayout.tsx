'use client';

import { Layout } from 'antd';
import React from 'react';

import type { Locale } from '@/i18n-config';

import NavBar from './NavBar';
import SideBar from './SideBar';

interface IFinancialLayoutProps {
  children: React.ReactNode;
  params: { lang: Locale };
}

function FinancialLayout({ children, params }: IFinancialLayoutProps) {
  return (
    <Layout style={{ minHeight: '100vh', width: '100%' }}>
      <SideBar params={params} />
      <Layout style={{ minHeight: '100vh' }}>
        <NavBar />
        {children}
      </Layout>
    </Layout>
  );
}

export default React.memo(FinancialLayout);
