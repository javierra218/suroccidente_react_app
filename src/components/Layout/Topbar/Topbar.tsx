import React from 'react';
import { Layout, Button, Space, Avatar, Badge, Dropdown, Menu } from 'antd';
import { useNavigate, Link } from 'react-router-dom';
import { UserOutlined, BellOutlined, SettingOutlined, LogoutOutlined, DownOutlined } from '@ant-design/icons';
import logo from '../../../assets/images/logo.svg';
import './Topbar.css';

const { Header } = Layout;

const Topbar: React.FC = () => {
  const navigate = useNavigate();

  const handleMenuClick = (key: string) => {
    switch (key) {
      case 'profile':
        navigate('/perfil');
        break;
      case 'settings':
        navigate('/configuracion');
        break;
      case 'logout':
        // Aquí iría la lógica de cierre de sesión
        console.log('Cerrar sesión');
        break;
    }
  };

  const userMenu = (
    <Menu onClick={({ key }) => handleMenuClick(key)}>
      <Menu.Item key="profile" icon={<UserOutlined />}>
        Mi Perfil
      </Menu.Item>
      <Menu.Item key="settings" icon={<SettingOutlined />}>
        Configuración
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout" icon={<LogoutOutlined />}>
        Cerrar Sesión
      </Menu.Item>
    </Menu>
  );

  return (
    <Header className="topbar">
      <div className="topbar-left">
        <Link to="/tabla_de_datos" className="logo-link">
          <img src={logo} alt="Logo Suroccidente" className="logo" />
        </Link>
        <h1 className="topbar-title">Suroccidente App</h1>
      </div>

      <Space size="large" className="topbar-right">
        <Badge count={5} size="small">
          <Button type="text" icon={<BellOutlined />} className="notification-button" />
        </Badge>

        <Dropdown overlay={userMenu} trigger={['click']}>
          <Space className="user-dropdown">
            <Avatar icon={<UserOutlined />} />
            <span className="username">Usuario</span>
            <DownOutlined />
          </Space>
        </Dropdown>
      </Space>
    </Header>
  );
};

export default Topbar;
