import React from 'react';
import { Input, Checkbox, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

interface TableControlsProps {
  showMore: boolean;
  useEpsData: boolean;
  onShowMoreChange: (checked: boolean) => void;
  onEpsDataChange: (checked: boolean) => void;
  onSearch: (value: string) => void;
}

const TableControls: React.FC<TableControlsProps> = ({
  showMore,
  useEpsData,
  onShowMoreChange,
  onEpsDataChange,
  onSearch
}) => {
  return (
    <div className="table-controls">
      <Space>
        <Checkbox checked={showMore} onChange={e => onShowMoreChange(e.target.checked)}>
          Ver más filas
        </Checkbox>
        <Checkbox checked={useEpsData} onChange={e => onEpsDataChange(e.target.checked)}>
          Mostrar datos Simulados
        </Checkbox>
      </Space>
      <Input
        placeholder="Buscar en la tabla..."
        prefix={<SearchOutlined />}
        onChange={e => onSearch(e.target.value)}
        style={{ width: 300 }}
        allowClear
      />
    </div>
  );
};

export default TableControls;
