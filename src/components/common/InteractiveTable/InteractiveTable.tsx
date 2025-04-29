import React, { useEffect } from 'react';
import { Table, Select, Input, Space } from 'antd';
import type { TableData } from '../../../models/TableData';
import { useTableData } from '../../../hooks/useTableData';
import { useTableState } from '../../../hooks/useTableState';
import { useFieldHandlers } from '../../../hooks/useFieldHandlers';
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

  const { selectedValues, numericValues, clearValues, updateSelectedValue, updateNumericValue } = useTableState();

  const { handleSelectChange, handleNumericChange } = useFieldHandlers(
    data,
    handleTypeChange,
    handleValueChange,
    handleStatusChange
  );

  useEffect(() => {
    clearValues();
  }, [useEpsData, clearValues]);

  const columns = [
    {
      title: 'Tipo',
      dataIndex: 'type',
      key: 'type',
      render: (text: string, record: TableData) => {
        if (record.isNumeric) {
          return record.editableColumns?.includes('type') ? (
            <Input
              type="number"
              value={numericValues[`${record.id}-type`] || ''}
              onChange={e => {
                updateNumericValue(record.id, 'type', e.target.value);
                handleNumericChange(record.id, 'type', e.target.value);
              }}
              style={{ width: '100%' }}
              placeholder="Ingrese un número"
            />
          ) : (
            <Input type="number" value={text} disabled style={{ width: '100%' }} />
          );
        }

        return record.editableColumns?.includes('type') ? (
          <Select
            value={selectedValues[`${record.id}-type`] || undefined}
            onChange={value => {
              updateSelectedValue(record.id, 'type', value);
              handleSelectChange(record.id, 'type', value);
            }}
            style={{ width: '100%' }}
            placeholder="Seleccione una opción de la lista"
            allowClear
            showSearch
          >
            {options.types.map(option => (
              <SelectOption key={option.value} value={option.value}>
                {option.value}
              </SelectOption>
            ))}
          </Select>
        ) : (
          <Select value={text} disabled style={{ width: '100%' }}>
            <SelectOption value={text}>{text}</SelectOption>
          </Select>
        );
      }
    },
    {
      title: 'Valor',
      dataIndex: 'value',
      key: 'value',
      render: (text: string | number, record: TableData) => {
        if (record.isNumeric) {
          return record.editableColumns?.includes('value') ? (
            <Input
              type="number"
              value={numericValues[`${record.id}-value`] || ''}
              onChange={e => {
                updateNumericValue(record.id, 'value', e.target.value);
                handleNumericChange(record.id, 'value', e.target.value);
              }}
              style={{ width: '100%' }}
              placeholder="Ingrese un número"
            />
          ) : (
            <Input type="number" value={text} disabled style={{ width: '100%' }} />
          );
        }

        return record.editableColumns?.includes('value') ? (
          <Select
            value={selectedValues[`${record.id}-value`] || undefined}
            onChange={value => {
              updateSelectedValue(record.id, 'value', value);
              handleSelectChange(record.id, 'value', value);
            }}
            style={{ width: '100%' }}
            placeholder="Seleccione una opción de la lista"
            allowClear
            showSearch
          >
            {options.types.map(option => (
              <SelectOption key={option.value} value={option.value}>
                {option.value}
              </SelectOption>
            ))}
          </Select>
        ) : (
          <Select value={text?.toString()} disabled style={{ width: '100%' }}>
            <SelectOption value={text?.toString()}>{text?.toString()}</SelectOption>
          </Select>
        );
      }
    },
    {
      title: 'Estado',
      dataIndex: 'status',
      key: 'status',
      render: (text: string, record: TableData) => {
        if (record.isNumeric) {
          return record.editableColumns?.includes('status') ? (
            <Input
              type="number"
              value={numericValues[`${record.id}-status`] || ''}
              onChange={e => {
                updateNumericValue(record.id, 'status', e.target.value);
                handleNumericChange(record.id, 'status', e.target.value);
              }}
              style={{ width: '100%' }}
              placeholder="Ingrese un número"
            />
          ) : (
            <Input type="number" value={text} disabled style={{ width: '100%' }} />
          );
        }

        return record.editableColumns?.includes('status') ? (
          <Select
            value={selectedValues[`${record.id}-status`] || undefined}
            onChange={value => {
              updateSelectedValue(record.id, 'status', value);
              handleSelectChange(record.id, 'status', value);
            }}
            style={{ width: '100%' }}
            placeholder="Seleccione una opción de la lista"
            allowClear
            showSearch
          >
            {options.types.map(option => (
              <SelectOption key={option.value} value={option.value}>
                {option.value}
              </SelectOption>
            ))}
          </Select>
        ) : (
          <Select value={text} disabled style={{ width: '100%' }}>
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
