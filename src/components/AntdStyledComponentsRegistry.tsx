'use client';

import React from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { StyleProvider, createCache, extractStyle } from '@ant-design/cssinjs';
import { ConfigProvider, theme } from 'antd';
import { useThemeConfig } from '@/contexts/ThemeConfigContext';
import { useLocaleConfig } from '@/contexts/LocaleConfigContext';
const { useToken } = theme;
export default function AntdStyledComponentsRegistry({ children }: { children: React.ReactNode }) {
    const [cache] = React.useState(() => createCache());
    const { token } = useToken();
    useServerInsertedHTML(() => (
        <style id="antd" dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }}></style>
    ));

    const { themeConfig } = useThemeConfig()
    const { localeConfig } = useLocaleConfig()
    return (
        <ConfigProvider theme={{
            algorithm: themeConfig ? theme.darkAlgorithm : theme.defaultAlgorithm,
            components: {
                Layout: {
                    headerBg: token.Layout?.headerBg
                },
                Table: {
                    fontSize: 16,
                    fontFamily: "Noto Sans",
                    rowHoverBg: themeConfig ? "#302f2f" : "#d4cfcf"
                }
            }
        }} locale={{ locale: localeConfig }}>
            <StyleProvider cache={cache}>
                {children}
            </StyleProvider>
        </ConfigProvider>
    );
}