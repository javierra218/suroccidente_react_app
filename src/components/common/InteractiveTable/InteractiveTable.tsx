import React, { useEffect, useState } from 'react';
import { Table, Select, Input, Checkbox, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import type { TableData, Option } from '../../../services/tableService';
import { fetchTableData } from '../../../services/tableService';
import './InteractiveTable.css';

const { Option: SelectOption } = Select;

const InteractiveTable: React.FC = () => {
  const [data, setData] = useState<TableData[]>([]);
  const [options, setOptions] = useState<{ types: Option[]; statuses: Option[] }>({ types: [], statuses: [] });
  const [loading, setLoading] = useState(true);
  const [showMore, setShowMore] = useState(false);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetchTableData();
        setData(response.data);
        setOptions(response.options);
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const handleTypeChange = (value: string, record: TableData) => {
    const newData = data.map(item => {
      if (item.id === record.id) {
        return { ...item, type: value };
      }
      return item;
    });
    setData(newData);
  };

  const handleValueChange = (value: number, record: TableData) => {
    const newData = data.map(item => {
      if (item.id === record.id) {
        return { ...item, value: value };
      }
      return item;
    });
    setData(newData);
  };

  const handleSearch = (value: string) => {
    setSearchText(value);
  };

  const filteredData = data.filter(item => {
    const matchesSearch =
      searchText === '' ||
      Object.values(item).some(val => String(val).toLowerCase().includes(searchText.toLowerCase()));
    return (item.isVisible || showMore) && matchesSearch;
  });

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
        <div className="table-controls">
          <Checkbox checked={showMore} onChange={e => setShowMore(e.target.checked)}>
            Ver más filas
          </Checkbox>
          <Input
            placeholder="Buscar en la tabla..."
            prefix={<SearchOutlined />}
            onChange={e => handleSearch(e.target.value)}
            style={{ width: 300 }}
            allowClear
          />
        </div>
        <Table columns={columns} dataSource={filteredData} rowKey="id" loading={loading} pagination={false} />
      </Space>
    </div>
  );
};

export default InteractiveTable;
