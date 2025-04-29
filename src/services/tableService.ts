import tableData from '../assets/data/tableData.json';

export interface TableData {
  id: number;
  name: string;
  type: string;
  value: number;
  status: string;
  isEditable: boolean;
  isNumeric: boolean;
  isVisible: boolean;
  editableColumns?: string[];
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
      resolve({
        data: tableData.data,
        options: tableData.options
      });
    }, 1000);
  });
};
