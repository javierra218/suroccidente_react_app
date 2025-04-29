import { useState, useCallback } from 'react';

export const useTableState = () => {
  const [selectedValues, setSelectedValues] = useState<Record<string, string>>({});
  const [numericValues, setNumericValues] = useState<Record<string, string>>({});

  const clearValues = useCallback(() => {
    setSelectedValues({});
    setNumericValues({});
  }, []);

  const updateSelectedValue = useCallback((id: number, field: string, value: string) => {
    setSelectedValues(prev => ({ ...prev, [`${id}-${field}`]: value }));
  }, []);

  const updateNumericValue = useCallback((id: number, field: string, value: string) => {
    setNumericValues(prev => ({ ...prev, [`${id}-${field}`]: value }));
  }, []);

  return {
    selectedValues,
    numericValues,
    clearValues,
    updateSelectedValue,
    updateNumericValue
  };
};
