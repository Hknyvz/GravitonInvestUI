'use client';

// eslint-disable-next-line import/no-extraneous-dependencies
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';
import { ConfigProvider, theme } from 'antd';
import { useServerInsertedHTML } from 'next/navigation';
import React from 'react';

import { useThemeConfig } from '@/contexts/ThemeConfigContext';
import type { Locale } from '@/i18n-config';

const { useToken } = theme;

export interface AndtStyledComponentRegisteryProps {
  children: React.ReactNode;
  params: { lang: Locale };
}

export default function AntdStyledComponentsRegistry({
  children,
  params,
}: AndtStyledComponentRegisteryProps) {
  const [cache] = React.useState(() => createCache());
  const { token } = useToken();

  useServerInsertedHTML(() => (
    <style
      id="antd"
      dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }}
    ></style>
  ));

  const { themeConfig } = useThemeConfig();
  return (
    <ConfigProvider
      theme={{
        algorithm: themeConfig ? theme.darkAlgorithm : theme.defaultAlgorithm,
        components: {
          Layout: {
            headerBg: token.Layout?.headerBg,
          },
          Table: {
            fontSize: 16,
            fontFamily: 'Noto Sans',
            rowHoverBg: themeConfig ? '#302f2f' : '#d4cfcf',
          },
        },
      }}
      locale={{ locale: params.lang }}
    >
      <StyleProvider cache={cache}>{children}</StyleProvider>
    </ConfigProvider>
  );
}
