export interface TableData {
  id: number;
  type: string;
  value: string | number;
  status: string;
  isEditable: boolean;
  isNumeric: boolean;
  isVisible: boolean;
  editableColumns?: string[];
}
