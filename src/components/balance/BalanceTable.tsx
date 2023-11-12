'use client'
import { BalanceResponseDataItem, Values } from '@/models/balance/GetBalanceResponseDto'
import type { ColumnsType } from 'antd/es/table';
import React, { useState } from 'react'
import { Badge, Button, Card, Space, Table } from "antd";
import GetBalanceResponseData from '@/models/balance/GetBalanceResponseDto';
import styles from "./styles.module.css";
import "./styles.module.css";
import { useThemeConfig } from '@/contexts/ThemeConfigContext';
import { ImCross } from "react-icons/im"
import TableChart from './TableChart';
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';

interface IBalanceTableProps {
    data: GetBalanceResponseData;
    tableLanguage: {
        tableHeaderTitle: string
    }
}

function BalanceTable({ data, tableLanguage }: IBalanceTableProps) {

    const [firstPeriod, setFirstPeriod] = useState<number>(-1);
    const [LastPeriod, setLastPeriod] = useState<number>(4);
    const { themeConfig } = useThemeConfig();

    const columnsValue = (): ColumnsType<BalanceResponseDataItem> => {
        if (data.periods) {

            return data.periods?.reduce<ColumnsType<BalanceResponseDataItem>>((accumulator, num, index) => {
                if (index > firstPeriod && index < LastPeriod) {
                    accumulator.push({
                        title: num,
                        dataIndex: "values",
                        key: num,
                        render: (values: Values) => values && values[num]?.toLocaleString("tr-TR")
                    });
                }
                else if (index === LastPeriod) {
                    accumulator.push({
                        title: () =>
                            <div style={{ display: 'flex', justifyContent: "space-between" }}>
                                <div>{num}</div>
                                <Button onClick={handleShiftUp} shape='circle' icon={<AiFillRightCircle fontSize={23} />} />
                            </div>,
                        dataIndex: "values",
                        key: num,
                        render: (values: Values) => values && values[num]?.toLocaleString("tr-TR")
                    })
                }
                return accumulator;
            }, []);
        }
        return [];
    }

    const columns: ColumnsType<BalanceResponseDataItem> = [
        {
            title: () =>
                <div style={{ display: 'flex', justifyContent: "space-between" }}>
                    <>
                        <div>{tableLanguage.tableHeaderTitle}</div>
                        {data.periods && firstPeriod != -1 &&
                            <Button onClick={handleShiftDown} shape='circle' icon={<AiFillLeftCircle fontSize={23} />} />
                        }
                    </>
                </div>,
            dataIndex: "title",
            key: "title",
            width: 600,
            render: (item, data) => {
                {
                    if (data.values) {
                        const resultArray = Object.entries(data.values).map(([key, value]) => ({
                            date: key,
                            value: value,
                        })).reverse();
                        return (
                            <div style={{ paddingLeft: data.offset * 15 }}>
                                <Space style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                                    <div>
                                        {item}
                                    </div>
                                    <TableChart data={resultArray} />
                                </Space>
                            </div>
                        )
                    }
                    else {
                        return (
                            <div style={{ paddingLeft: data.offset * 15 }}>
                                {item}
                            </div>
                        )
                    }
                }
            }
        },
        ...columnsValue()
    ];

    const handleShiftUp = (): void => {
        if (data.periods) {
            if (LastPeriod === data.periods.length - 1) {
                return;
            }
            setFirstPeriod(firstPeriod + 1)
            setLastPeriod(LastPeriod + 1)
        }
    }

    const handleShiftDown = (): void => {
        if (firstPeriod === -1) {
            return;
        }
        setFirstPeriod(firstPeriod - 1)
        setLastPeriod(LastPeriod - 1)
    }
    const getRowClassName = (record: BalanceResponseDataItem) => {
        if (!record.values && (record.offset === 3 || record.offset === 2 || record.offset === 1)) {
            return themeConfig ? styles.highlightedRowDark : styles.highlightedRow;
        }
        return '';
    };
    return (
        <div style={{ paddingLeft: 10, paddingRight: 10 }}>
            <Space className={styles.titleCard}>
                <Card type='inner'>
                    {data.company?.name}
                </Card>
            </Space>
            <Badge.Ribbon placement='start' text={
                <>
                    <Space>
                        <ImCross size={10} />
                        1000 TRY
                    </Space>
                </>} color="red" style={{ zIndex: 1000, top: -6 }}>
                <Table
                    rowClassName={getRowClassName}
                    columns={columns}
                    dataSource={data.rows}
                    pagination={false}
                    rowKey={(p) => p.order + p.title}
                    sticky
                    bordered
                ></Table>
            </Badge.Ribbon>
        </div >
    )
}

export default BalanceTable