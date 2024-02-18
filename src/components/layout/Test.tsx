import { Layout } from 'antd';
import React from 'react';

const { Header } = Layout;

function Test({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Layout>
        <Header>
          <div>Test</div>
        </Header>
        {children}
      </Layout>
    </>
  );
}

export default React.memo(Test);
