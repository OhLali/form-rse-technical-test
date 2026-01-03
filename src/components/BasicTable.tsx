import type { GridRowModel } from '@mui/x-data-grid'
import { DataGrid } from '@mui/x-data-grid'
import type { DataTable, TableRow } from '../database'

export default function BasicTable({
  dataTable,
  data,
  setData
}: {
  dataTable: DataTable
  data: TableRow[]
  setData: (rows: TableRow[]) => void
}) {

  const processRowUpdate = (newRow: GridRowModel) => {
    const updatedRow: TableRow = {
      id: newRow.id,
      name: newRow.name,
      value: newRow.value 
    }
    const newRows = data.map(row =>
      row.id === updatedRow.id ? updatedRow : row
    )
    setData(newRows)

    return updatedRow   
  }

  return (
    <DataGrid
      columns={dataTable.columns}
      rows={data}
      processRowUpdate={processRowUpdate}
    />
  )
}
