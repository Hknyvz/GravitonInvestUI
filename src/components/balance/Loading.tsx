import React from "react";
import { Skeleton as AntdSkeleton } from 'antd'
import { Skeleton } from "@/components/skeleton";
import styles from "./styles.module.css";

function BalanceTableLoading() {
  return (
    <>
      <Skeleton width="%100" height={80} />
      <AntdSkeleton active paragraph={{ rows: 50 }} />
    </>
  );
}

export { BalanceTableLoading };
