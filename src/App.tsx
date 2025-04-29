import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/Layout/MainLayout/MainLayout';
import InteractiveTable from './components/common/InteractiveTable/InteractiveTable';
import UnderConstruction from './components/common/UnderConstruction/UnderConstruction';
import { Typography, Space } from 'antd';
import { TableOutlined } from '@ant-design/icons';

const { Title } = Typography;

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/tabla_de_datos" replace />} />
      <Route
        path="/tabla_de_datos"
        element={
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
        }
      />
      <Route
        path="/perfil"
        element={
          <MainLayout>
            <UnderConstruction />
          </MainLayout>
        }
      />
      <Route
        path="/configuracion"
        element={
          <MainLayout>
            <UnderConstruction />
          </MainLayout>
        }
      />
      <Route
        path="*"
        element={
          <MainLayout>
            <UnderConstruction />
          </MainLayout>
        }
      />
    </Routes>
  );
}

export default App;
