import { useState, useEffect } from 'react';
import type { TableData } from '../models/TableData';
import type { TableOptions } from '../models/TableOptions';
import { fetchTableData } from '../services/tableService';

export const useTableData = () => {
  const [data, setData] = useState<TableData[]>([]);
  const [options, setOptions] = useState<TableOptions>({ types: [] });
  const [loading, setLoading] = useState(true);
  const [showMore, setShowMore] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [useEpsData, setUseEpsData] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetchTableData(useEpsData);
        setData(response.data);
        setOptions(response.options);
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [useEpsData]);

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

  const handleToggleEpsData = (checked: boolean) => {
    setUseEpsData(checked);
    setLoading(true);
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
    useEpsData,
    handleTypeChange,
    handleValueChange,
    handleStatusChange,
    handleSearch,
    handleToggleEpsData
  };
};
