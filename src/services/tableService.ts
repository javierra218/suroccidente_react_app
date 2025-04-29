import tableData from '../assets/data/tableData.json';
import { TableResponse } from '../models/TableResponse';

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
