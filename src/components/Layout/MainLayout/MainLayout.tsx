import { Layout } from 'antd';
import React from 'react';
import Topbar from '../Topbar/Topbar';
import './MainLayout.css';

const { Content } = Layout;

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Layout className="main-layout">
      <Topbar />
      <Content className="main-content">{children}</Content>
    </Layout>
  );
};

export default MainLayout;
