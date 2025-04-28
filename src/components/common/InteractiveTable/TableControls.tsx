import React from 'react';
import { Input, Checkbox, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

interface TableControlsProps {
  showMore: boolean;
  onShowMoreChange: (checked: boolean) => void;
  onSearch: (value: string) => void;
}

const TableControls: React.FC<TableControlsProps> = ({ showMore, onShowMoreChange, onSearch }) => {
  return (
    <div className="table-controls">
      <Checkbox checked={showMore} onChange={e => onShowMoreChange(e.target.checked)}>
        Ver más filas
      </Checkbox>
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
