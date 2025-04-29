import { useCallback } from 'react';
import type { TableData } from '../models/TableData';

export const useFieldHandlers = (
  data: TableData[],
  handleTypeChange: (value: string, record: TableData) => void,
  handleValueChange: (value: string | number, record: TableData) => void,
  handleStatusChange: (value: string, record: TableData) => void
) => {
  const handleSelectChange = useCallback(
    (id: number, field: string, value: string) => {
      const record = data.find(d => d.id === id);
      if (!record) return;

      switch (field) {
        case 'type':
          handleTypeChange(value, record);
          break;
        case 'value':
          handleValueChange(value, record);
          break;
        case 'status':
          handleStatusChange(value, record);
          break;
      }
    },
    [data, handleTypeChange, handleValueChange, handleStatusChange]
  );

  const handleNumericChange = useCallback(
    (id: number, field: string, value: string) => {
      const record = data.find(d => d.id === id);
      if (!record) return;

      switch (field) {
        case 'type':
          handleTypeChange(value, record);
          break;
        case 'value':
          handleValueChange(Number(value), record);
          break;
        case 'status':
          handleStatusChange(value, record);
          break;
      }
    },
    [data, handleTypeChange, handleValueChange, handleStatusChange]
  );

  return {
    handleSelectChange,
    handleNumericChange
  };
};
