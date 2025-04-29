import { useState, useEffect } from 'react';
import type { TableData, TableOptions } from '../services/tableService';
import { fetchTableData } from '../services/tableService';

export const useTableData = () => {
  const [data, setData] = useState<TableData[]>([]);
  const [options, setOptions] = useState<TableOptions>({ types: [] });
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

  const handleValueChange = (value: string | number, record: TableData) => {
    const newData = data.map(item => {
      if (item.id === record.id) {
        return { ...item, value: value };
      }
      return item;
    });
    setData(newData);
  };

  const handleStatusChange = (value: string, record: TableData) => {
    const newData = data.map(item => {
      if (item.id === record.id) {
        return { ...item, status: value };
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

  return {
    data: filteredData,
    options,
    loading,
    showMore,
    setShowMore,
    searchText,
    handleTypeChange,
    handleValueChange,
    handleStatusChange,
    handleSearch
  };
};
