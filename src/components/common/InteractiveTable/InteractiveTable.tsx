import React from 'react';
import { Table, Select, Input, Space } from 'antd';
import type { TableData } from '../../../services/tableService';
import { useTableData } from '../../../hooks/useTableData';
import TableControls from './TableControls';
import './InteractiveTable.css';

const { Option: SelectOption } = Select;

const InteractiveTable: React.FC = () => {
  const { data, options, loading, showMore, setShowMore, handleTypeChange, handleValueChange, handleSearch } =
    useTableData();

  const columns = [
    {
      title: 'Nombre',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Tipo',
      dataIndex: 'type',
      key: 'type',
      render: (text: string, record: TableData) =>
        record.isEditable ? (
          <Select value={text} onChange={value => handleTypeChange(value, record)} style={{ width: 120 }}>
            {options.types.map(option => (
              <SelectOption key={option.value} value={option.value}>
                {option.label}
              </SelectOption>
            ))}
          </Select>
        ) : (
          text
        )
    },
    {
      title: 'Valor',
      dataIndex: 'value',
      key: 'value',
      render: (text: number, record: TableData) =>
        record.isNumeric ? (
          <Input
            type="number"
            value={text}
            onChange={e => handleValueChange(Number(e.target.value), record)}
            style={{ width: 120 }}
          />
        ) : (
          text
        )
    },
    {
      title: 'Estado',
      dataIndex: 'status',
      key: 'status'
    }
  ];

  return (
    <div className="interactive-table">
      <Space direction="vertical" style={{ width: '100%' }}>
        <TableControls showMore={showMore} onShowMoreChange={setShowMore} onSearch={handleSearch} />
        <Table columns={columns} dataSource={data} rowKey="id" loading={loading} pagination={false} />
      </Space>
    </div>
  );
};

export default InteractiveTable;
