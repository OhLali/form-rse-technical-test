import './App.css'
import {Grid}  from '@mui/material'
import Header from './components/Header'
import { useState } from 'react';
import ComplexTable from './components/ComplexTable';
import BasicTable from './components/basicTable';
import { initialData, type ComplexTableRow, type DataTable, type TableRow } from './database';


function App() {
  const [tables, setTables] = useState<DataTable[]>(initialData)

  const updateTableRows = (
    index: number,
    rows: TableRow[] | ComplexTableRow[]
  ) => {
    setTables(prev => {
      const copy = [...prev]
      copy[index] = {
        ...copy[index],
        rows
      }
      return copy
    })
  }

  return (
    <Grid container spacing={2} direction="column" >
      <Header />
      {tables.map((table, index) => {
        if (table.type === "basic") {
          return (
            <BasicTable
              key={table.title}
              dataTable={table}
              data={table.rows as TableRow[]}
              setData={(rows) => updateTableRows(index, rows as TableRow[])}
            />
          )} else {
       return (
          <ComplexTable
            key={table.title}
            dataTable={table}
            data={table.rows as ComplexTableRow[]}
            setData={(rows) => updateTableRows(index, rows as ComplexTableRow[])}
          />
        )}})}
    </Grid>
  )
}

export default App
