import { Skeleton as AntdSkeleton } from 'antd';
import React from 'react';

import { Skeleton } from '@/components/skeleton';

function BalanceTableLoading() {
  return (
    <>
      <Skeleton width="%100" height={80} />
      <AntdSkeleton active paragraph={{ rows: 50 }} />
    </>
  );
}

export { BalanceTableLoading };
