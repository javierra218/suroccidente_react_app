import React from 'react';
import { Table, Select, Input, Space } from 'antd';
import type { TableData } from '../../../models/TableData';
import { useTableData } from '../../../hooks/useTableData';
import TableControls from './TableControls';
import './InteractiveTable.css';

const { Option: SelectOption } = Select;

const InteractiveTable: React.FC = () => {
  const {
    data,
    options,
    loading,
    showMore,
    setShowMore,
    useEpsData,
    handleTypeChange,
    handleValueChange,
    handleStatusChange,
    handleSearch,
    handleToggleEpsData
  } = useTableData();

  const columns = [
    {
      title: 'Columna 1',
      dataIndex: 'type',
      key: 'type',
      render: (text: string, record: TableData) => {
        if (record.isNumeric) {
          return record.editableColumns?.includes('type') ? (
            <Input
              type="number"
              value={text}
              onChange={e => handleTypeChange(e.target.value, record)}
              style={{ width: '100%' }}
            />
          ) : (
            <Input type="number" value={text} disabled style={{ width: '100%' }} />
          );
        }

        return record.editableColumns?.includes('type') ? (
          <Select
            value={text || undefined}
            onChange={value => handleTypeChange(value, record)}
            style={{ width: '100%' }}
            placeholder="Selecciona un valor"
          >
            {options.types.map(option => (
              <SelectOption key={option.value} value={option.value}>
                {option.value}
              </SelectOption>
            ))}
          </Select>
        ) : (
          <Select value={text || undefined} disabled style={{ width: '100%' }}>
            <SelectOption value={text}>{text}</SelectOption>
          </Select>
        );
      }
    },
    {
      title: 'Columna 2',
      dataIndex: 'value',
      key: 'value',
      render: (text: string | number, record: TableData) => {
        if (record.isNumeric) {
          return record.editableColumns?.includes('value') ? (
            <Input
              type="number"
              value={text}
              onChange={e => handleValueChange(Number(e.target.value), record)}
              style={{ width: '100%' }}
            />
          ) : (
            <Input type="number" value={text} disabled style={{ width: '100%' }} />
          );
        }

        return record.editableColumns?.includes('value') ? (
          <Select
            value={text?.toString() || undefined}
            onChange={value => handleValueChange(value, record)}
            style={{ width: '100%' }}
            placeholder="Selecciona un valor"
          >
            {options.types.map(option => (
              <SelectOption key={option.value} value={option.value}>
                {option.value}
              </SelectOption>
            ))}
          </Select>
        ) : (
          <Select value={text?.toString() || undefined} disabled style={{ width: '100%' }}>
            <SelectOption value={text?.toString()}>{text?.toString()}</SelectOption>
          </Select>
        );
      }
    },
    {
      title: 'Columna 3',
      dataIndex: 'status',
      key: 'status',
      render: (text: string, record: TableData) => {
        if (record.isNumeric) {
          return record.editableColumns?.includes('status') ? (
            <Input
              type="number"
              value={text}
              onChange={e => handleStatusChange(e.target.value, record)}
              style={{ width: '100%' }}
            />
          ) : (
            <Input type="number" value={text} disabled style={{ width: '100%' }} />
          );
        }

        return record.editableColumns?.includes('status') ? (
          <Select
            value={text || undefined}
            onChange={value => handleStatusChange(value, record)}
            style={{ width: '100%' }}
            placeholder="Selecciona un valor"
          >
            {options.types.map(option => (
              <SelectOption key={option.value} value={option.value}>
                {option.value}
              </SelectOption>
            ))}
          </Select>
        ) : (
          <Select value={text || undefined} disabled style={{ width: '100%' }}>
            <SelectOption value={text}>{text}</SelectOption>
          </Select>
        );
      }
    }
  ];

  return (
    <div className="interactive-table">
      <Space direction="vertical" style={{ width: '100%' }}>
        <TableControls
          showMore={showMore}
          useEpsData={useEpsData}
          onShowMoreChange={setShowMore}
          onEpsDataChange={handleToggleEpsData}
          onSearch={handleSearch}
        />
        <Table columns={columns} dataSource={data} rowKey="id" loading={loading} pagination={false} bordered />
      </Space>
    </div>
  );
};

export default InteractiveTable;
