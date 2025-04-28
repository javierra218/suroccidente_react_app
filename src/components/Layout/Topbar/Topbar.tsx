import React from 'react';
import { Layout, Button, Space } from 'antd';
import { MenuOutlined, UserOutlined, BellOutlined } from '@ant-design/icons';
import './Topbar.css';

const { Header } = Layout;

const Topbar: React.FC = () => {
  return (
    <Header className="topbar">
      <div className="topbar-left">
        <Button type="text" icon={<MenuOutlined />} />
        <h1 className="topbar-title">Suroccidente App</h1>
      </div>

      <Space size="middle">
        <Button type="text" icon={<BellOutlined />} />
        <Button type="text" icon={<UserOutlined />} />
      </Space>
    </Header>
  );
};

export default Topbar;
