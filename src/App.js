/** @format */

import React, { useState } from 'react'
import './App.css'
import Table from './components/Table'
import Form from './components/Form'

function App() {
  const [records, setRecords] = useState([
    {
      name: 'Moazan',
      age: '23',
    },
    {
      name: 'Zain',
      age: '25',
    },
    {
      name: 'Ali',
      age: '33',
    },
  ])

  const [formState, setFormState] = useState({
    name: '',
    age: '',
  })

  const [rowToEdit, setRowToEdit] = useState(null)

  const handleEditRow = (idx) => {
    const temp = [...records]

    const selected = temp[idx]

    console.log(' ----- selected ---- ', selected)

    setFormState({
      name: selected?.name,
      age: selected?.age,
    })
    setRowToEdit(idx)
  }

  const handleDeleteRow = (targetIndex) => {
    setRecords(records.filter((_, idx) => idx !== targetIndex))
  }

  const handleSubmit = (newRecord) => {
    rowToEdit === null
      ? setRecords([...records, newRecord])
      : setRecords(
          records.map((currRecord, idx) => {
            if (idx !== rowToEdit) return currRecord

            return newRecord
          })
        )
    setRowToEdit(null)
  }

  return (
    <div className="App">
      <h1>Records</h1>
      <Form onSubmit={handleSubmit} defaultValue={rowToEdit !== null && records[rowToEdit]} formState={formState} setFormState={setFormState} />
      <Table records={records} deleteRow={handleDeleteRow} editRow={handleEditRow} />
    </div>
  )
}

export default App
