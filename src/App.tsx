import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import InteractiveTable from './components/common/InteractiveTable/InteractiveTable';

function App() {
  return (
    <MainLayout>
      <h1>Tabla Interactiva</h1>
      <InteractiveTable />
    </MainLayout>
  );
}

export default App;
