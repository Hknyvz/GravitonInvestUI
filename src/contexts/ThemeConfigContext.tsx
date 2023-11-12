'use client'
import React, { createContext, useContext, ReactNode, useState } from 'react';

interface ThemeConfigContextProps {
    themeConfig: boolean;
    setThemeConfig: (token: boolean) => void;
}

export const ThemeConfigContext = createContext<ThemeConfigContextProps | undefined>(undefined);

export const useThemeConfig = () => {
    const context = useContext(ThemeConfigContext);
    if (!context) {
        throw new Error('useThemeConfig must be used within a ThemeProvider');
    }
    return context;
};

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [themeConfig, setThemeConfig] = useState<boolean>(false);
    return (
        <ThemeConfigContext.Provider value={{ themeConfig, setThemeConfig }}>
            {children}
        </ThemeConfigContext.Provider>
    );
};
