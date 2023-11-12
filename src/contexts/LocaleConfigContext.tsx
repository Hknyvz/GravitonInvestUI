'use client'
import React, { createContext, useContext, ReactNode, useState } from 'react';
import Cookies from 'js-cookie';

interface LocaleConfigContextProps {
    localeConfig: string;
    setLocaleConfig: (token: string) => void;
}

export const LocaleConfigContext = createContext<LocaleConfigContextProps | undefined>(undefined);

export const useLocaleConfig = () => {
    const context = useContext(LocaleConfigContext);
    if (!context) {
        throw new Error('useLocaleConfig must be used within a LocaleProvider');
    }
    return context;
};

interface LocaleProviderProps {
    children: ReactNode;
}

export const LocaleProvider: React.FC<LocaleProviderProps> = ({ children }) => {

    let locale = Cookies.get("locale") ?? "tr";

    const [localeConfig, setLocaleConfig] = useState<string>(locale);
    return (
        <LocaleConfigContext.Provider value={{ localeConfig, setLocaleConfig }}>
            {children}
        </LocaleConfigContext.Provider>
    );
};