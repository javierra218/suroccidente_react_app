import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import InteractiveTable from './components/common/InteractiveTable/InteractiveTable';
import { Typography, Space } from 'antd';
import { TableOutlined } from '@ant-design/icons';

const { Title } = Typography;

function App() {
  return (
    <MainLayout>
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Space align="center">
          <TableOutlined style={{ fontSize: '24px', color: '#488704' }} />
          <Title level={2} style={{ margin: 0, color: '#488704' }}>
            Gestión de Datos
          </Title>
        </Space>
        <InteractiveTable />
      </Space>
    </MainLayout>
  );
}

export default App;
