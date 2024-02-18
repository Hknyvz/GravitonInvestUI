'use client';

import { Badge, Button, Card, Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React, { useState } from 'react';
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';
import { ImCross } from 'react-icons/im';

import { useThemeConfig } from '@/contexts/ThemeConfigContext';
import type {
  BalanceResponseDataItem,
  Values,
} from '@/models/balance/GetBalanceResponseDto';
import type GetFinancialResponseData from '@/models/balance/GetBalanceResponseDto';

import styles from './styles.module.css';
import TableChart from './TableChart';

interface IFinancialTableProps {
  data: GetFinancialResponseData;
  tableHeaderTitle: string;
}

function FinancialTable({ data, tableHeaderTitle }: IFinancialTableProps) {
  const [firstPeriod, setFirstPeriod] = useState<number>(-1);
  const [LastPeriod, setLastPeriod] = useState<number>(4);
  const { themeConfig } = useThemeConfig();

  const handleShiftUp = (): void => {
    if (data.periods) {
      if (LastPeriod === data.periods.length - 1) {
        return;
      }
      setFirstPeriod(firstPeriod + 1);
      setLastPeriod(LastPeriod + 1);
    }
  };

  const handleShiftDown = (): void => {
    if (firstPeriod === -1) {
      return;
    }
    setFirstPeriod(firstPeriod - 1);
    setLastPeriod(LastPeriod - 1);
  };

  const columnsValue = (): ColumnsType<BalanceResponseDataItem> => {
    if (data.periods) {
      return data.periods?.reduce<ColumnsType<BalanceResponseDataItem>>(
        (accumulator, num, index) => {
          if (index > firstPeriod && index < LastPeriod) {
            accumulator.push({
              title: num,
              dataIndex: 'values',
              key: num,
              render: (values: Values) =>
                values && values[num]?.toLocaleString('tr-TR'),
            });
          } else if (index === LastPeriod) {
            accumulator.push({
              title: () => (
                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <div>{num}</div>
                  <Button
                    onClick={handleShiftUp}
                    shape="circle"
                    icon={<AiFillRightCircle fontSize={23} />}
                  />
                </div>
              ),
              dataIndex: 'values',
              key: num,
              render: (values: Values) =>
                values && values[num]?.toLocaleString('tr-TR'),
            });
          }
          return accumulator;
        },
        []
      );
    }
    return [];
  };

  const columns: ColumnsType<BalanceResponseDataItem> = [
    {
      title: () => (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <>
            <div>{tableHeaderTitle}</div>
            {data.periods && firstPeriod !== -1 && (
              <Button
                onClick={handleShiftDown}
                shape="circle"
                icon={<AiFillLeftCircle fontSize={23} />}
              />
            )}
          </>
        </div>
      ),
      dataIndex: 'title',
      key: 'title',
      width: 600,
      render: (item, fullData) => {
        if (fullData.values) {
          const resultArray = Object.entries(fullData.values)
            .map(([key, value]) => ({
              date: key,
              value,
            }))
            .reverse();
          return (
            <div style={{ paddingLeft: fullData.offset * 15 }}>
              <Space
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                }}
              >
                <div>{item}</div>
                <TableChart data={resultArray} />
              </Space>
            </div>
          );
        }

        return <div style={{ paddingLeft: fullData.offset * 15 }}>{item}</div>;
      },
    },
    ...columnsValue(),
  ];

  const getRowClassName = (record: BalanceResponseDataItem): string => {
    if (
      !record.values &&
      (record.offset === 3 || record.offset === 2 || record.offset === 1)
    ) {
      return themeConfig
        ? styles.highlightedRowDark ?? ''
        : styles.highlightedRow ?? '';
    }
    return '';
  };
  return (
    <div style={{ paddingLeft: 10, paddingRight: 10 }}>
      <Space className={styles.titleCard}>
        <Card type="inner">{data.company?.name}</Card>
      </Space>
      <Badge.Ribbon
        placement="start"
        text={
          <>
            <Space>
              <ImCross size={10} />
              1000 TRY
            </Space>
          </>
        }
        color="red"
        style={{ zIndex: 1000, top: -6 }}
      >
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
    </div>
  );
}

export default FinancialTable;
