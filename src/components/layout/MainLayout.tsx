'use client'
import { Layout } from 'antd'
import React, { useState } from 'react'
import SideBar from '@/components/layout/SideBar'
import NavBar from '@/components/layout/NavBar'
import { ListActiveCompaniesDataItem } from '@/models/company/ListActiveCompaniesResponseDto'

interface IMainLayoutProps {
    children: React.ReactNode;
    data: ListActiveCompaniesDataItem[];
    localizations: {
        searchCompany: string;
        companies: string;
        locale: string;
    };

}

function MainLayout({ children, data, localizations }: IMainLayoutProps) {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <>
            <Layout style={{ minHeight: '100vh' }}>
                <SideBar data={data} collapsed={collapsed} />
                <Layout style={{ minHeight: '100vh' }}>
                    <NavBar data={data} collapseAction={() => setCollapsed(!collapsed)} localizations={localizations} />
                    {children}
                </Layout>
            </Layout>
        </>
    )
}

export default MainLayout