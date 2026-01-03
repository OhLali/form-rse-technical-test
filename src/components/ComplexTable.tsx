import { DataGrid, type GridRowModel } from '@mui/x-data-grid'
import type { DataTable } from '../database'

export default function ComplexTable({
  dataTable,
  data,
  setData
}: {
  dataTable: DataTable
  data: GridRowModel[]
  setData: (rows: GridRowModel[]) => void
}) {

  const processRowUpdate = (newRow: GridRowModel) => {
    const newRows = data.map(row =>
      row.id === newRow.id ? newRow : row
    )

    setData(newRows)

    return newRow 
  }

  return (
    <DataGrid
      columns={dataTable.columns}
      rows={data}
      processRowUpdate={processRowUpdate}
    />
  )
}

