import { Card, Typography, Space, Button } from 'antd';
import { ToolOutlined, HomeOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;

const UnderConstruction = () => {
  const navigate = useNavigate();

  return (
    <Card>
      <Space direction="vertical" size="large" style={{ width: '100%', textAlign: 'center' }}>
        <ToolOutlined style={{ fontSize: '48px', color: '#488704' }} />
        <Title level={2} style={{ color: '#488704' }}>
          Página en Construcción
        </Title>
        <Text>Esta funcionalidad estará disponible próximamente.</Text>
        <Button type="primary" icon={<HomeOutlined />} onClick={() => navigate('/tabla_de_datos')}>
          Volver al inicio
        </Button>
      </Space>
    </Card>
  );
};

export default UnderConstruction;
