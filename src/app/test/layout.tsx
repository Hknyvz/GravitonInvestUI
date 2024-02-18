'use client';

import { usePathname } from 'next/navigation';
import React from 'react';

import Test from '@/components/layout/Test';

function RootLayoutTest({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  return (
    <html>
      <body>
        {path}
        <Test>{children}</Test>
      </body>
    </html>
  );
}

export default RootLayoutTest;
