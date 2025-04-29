import tableData from '../assets/data/tableData.json';
import epsTurnsData from '../assets/data/epsTurnsData.json';
import { TableResponse } from '../models/TableResponse';

export const fetchTableData = async (useEpsData: boolean = false): Promise<TableResponse> => {
  // Simulando una llamada a la API con el archivo JSON seleccionado
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        data: useEpsData ? epsTurnsData.data : tableData.data,
        options: useEpsData ? epsTurnsData.options : tableData.options
      });
    }, 1000);
  });
};
