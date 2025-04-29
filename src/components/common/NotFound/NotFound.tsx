import { Result, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { HomeOutlined } from '@ant-design/icons';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Result
      status="404"
      title="404"
      subTitle="Lo sentimos, la página que buscas no existe."
      extra={
        <Button type="primary" icon={<HomeOutlined />} onClick={() => navigate('/tabla_de_datos')}>
          Volver al inicio
        </Button>
      }
    />
  );
};

export default NotFound;
