import tableData from '../assets/data/tableData.json';

export interface TableData {
  id: number;
  name: string;
  type: 'A' | 'B' | 'C' | 'D';
  value: number;
  status: string;
  isEditable: boolean;
  isNumeric: boolean;
  isVisible: boolean;
}

export interface Option {
  value: string;
  label: string;
}

export interface TableOptions {
  types: Option[];
  statuses: Option[];
}

export interface TableResponse {
  data: TableData[];
  options: TableOptions;
}

export const fetchTableData = async (): Promise<TableResponse> => {
  // Simulando una llamada a la API con el archivo JSON
  return new Promise(resolve => {
    setTimeout(() => {
      // Aseguramos que los tipos sean correctos
      const typedData: TableData[] = tableData.data.map(item => ({
        ...item,
        type: item.type as 'A' | 'B' | 'C' | 'D'
      }));
      resolve({
        data: typedData,
        options: tableData.options
      });
    }, 1000);
  });
};
