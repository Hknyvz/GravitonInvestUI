'use client'
import { Affix, Layout, Menu, MenuProps, theme } from "antd";
import { useParams, useRouter } from "next/navigation";
import React from "react";

import Logo from "@/components/layout/Logo";
import { ListActiveCompaniesDataItem } from "@/models/company/ListActiveCompaniesResponseDto";

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
    collapsed: boolean;
    data: ListActiveCompaniesDataItem[];

}

// export interface IMenu {
//     menuItem:
// }

export default function SideBar({ collapsed, data }: SideBarProps) {
    const { token: { colorBgContainer } } = theme.useToken();
    const router = useRouter();

    const items: MenuItem[] = [
        getItem('AUTHENTICATION', '/authentication', null, [], 'group'),
        getItem('Users', '/authentication/users'),
        getItem('Role', '/authentication/roles'),
        getItem(
            'Permissions',
            '/authentication/permissions',
        )
    ];
    return (
        <Affix>
            <Sider
                collapsible
                collapsed={collapsed}
                trigger={null}
                width={280}
                style={{
                    background: colorBgContainer,
                    borderRight: "1px solid #f0f0f0",
                    height: "100%"
                }}
                theme="light"
                key="sideBarSider"
            >
                <Logo collapsed={collapsed} key="sideBarLogo" />
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
