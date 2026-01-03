import type { GridColDef } from "@mui/x-data-grid";

export interface TableRow {
  id: number;
  name: string;
  value: number;
}

export interface ComplexTableRow  {
  id: number;
  name: string;
  femaleCDI: number;
  maleCDI: number;
  femaleCDD: number;
  maleCDD: number;
}

export interface DataTable {
  title: string;
  type: string;
  columns: GridColDef[];
  rows: TableRow[]| ComplexTableRow[];
}



export const initialData : DataTable[] = [
    {
      title: "Employés globaux",
      type: "basic",
      columns:[
        { field: "id", headerName: "ID", width: 100, editable: false },
        { field: "name", headerName: "Information requise", width: 300, editable: false },
        { field: "value", headerName: "Valeur", width: 300, editable: true }
          ],      
      rows: [
        { id: 1, name: "Nombre d'employés (fin de période)", value: 0 },
        { id: 2, name: "Nombre d'employés (moyenne sur la période)", value: 0},
        { id: 3, name: "Nombre d'employés ayant quitté l'entreprise", value: 0 },
        { id: 4, name: 'Turnover', value: 0 },
      ]
    },
    { title: "Employés par contrat et genre",
      type: "complex",
      columns:[
        { field: "id", headerName: "ID", width: 100, editable: false },
        { field: "name", headerName: "Information requise", width: 300, editable: false },
        { field: "femaleCDI", headerName: "Femme en CDI", width: 300, editable: true },
        { field: "maleCDI", headerName: "Homme en CDI", width: 300, editable: true },
        { field: "femaleCDD", headerName: "Femme en CDD", width: 300, editable: true },
        { field: "maleCDD", headerName: "Homme en CDD", width: 300, editable: true }
          ],      
      rows: [
        { id: 1, name: "Nombre d'employés (fin de période)", femaleCDI: 0, maleCDI: 0, femaleCDD: 0, maleCDD: 0 },
        { id: 2, name: "Nombre d'employés (moyenne sur la période)", femaleCDI: 0, maleCDI: 0, femaleCDD: 0, maleCDD: 0},
        { id: 3, name: "Nombre d'employés ayant quitté l'entreprise", femaleCDI: 0, maleCDI: 0, femaleCDD: 0, maleCDD: 0 },
      ]}
  ]