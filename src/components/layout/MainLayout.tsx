'use client';

import React from 'react';

import type { Locale } from '@/i18n-config';

import FinancialLayout from './FinancialLayout';

interface IMainLayoutProps {
  children: React.ReactNode;
  params: { lang: Locale };
}

function MainLayout({ children, params }: IMainLayoutProps) {
  return (
    <>
      <FinancialLayout params={params}>{children}</FinancialLayout>
    </>
  );
}

export default MainLayout;
