/** @format */

import React, { useState } from 'react'
import './App.css'
import Table from './components/Table'
import Form from './components/Form'

function App() {

  //states defined here
  const [records, setRecords] = useState([])

  const [formState, setFormState] = useState({
    name: '',
    age: '',
  })

  const [btnTxt, setBtnTxt] = useState('Add');

  const [h1Txt, setH1Txt] = useState('Add Record');

  const [rowToEdit, setRowToEdit] = useState(null)

  const [showTable, setShowTable] = useState(false)



  //functions defined here
  const handleToggleClick = () => {
    setShowTable(true)
  }

  // const handleDisplay

  const handleEditRow = (idx) => {
    setBtnTxt('Update')
    setH1Txt('Update Record')

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
      <h1>{h1Txt}</h1>
      
      

      {!showTable ? (
        <Form onSubmit={handleSubmit} onToggleClick={handleToggleClick} showTable={showTable} setShowTable={setShowTable} defaultValue={rowToEdit !== null && records[rowToEdit]} setH1Txt={setH1Txt} btnTxt={btnTxt} setBtnTxt={setBtnTxt} formState={formState} setFormState={setFormState} />
      ) : (
        <>
        <Form onSubmit={handleSubmit} onToggleClick={handleToggleClick} showTable={showTable} setShowTable={setShowTable} defaultValue={rowToEdit !== null && records[rowToEdit]} setH1Txt={setH1Txt} btnTxt={btnTxt} setBtnTxt={setBtnTxt} formState={formState} setFormState={setFormState} />
        <Table records={records} deleteRow={handleDeleteRow} editRow={handleEditRow} />
        </>
      )}
      
      {/* <Form onSubmit={handleSubmit} defaultValue={rowToEdit !== null && records[rowToEdit]} setH1Txt={setH1Txt} btnTxt={btnTxt} setBtnTxt={setBtnTxt} formState={formState} setFormState={setFormState} />
      <Table records={records} deleteRow={handleDeleteRow} editRow={handleEditRow} /> */}
    </div>
  )
}

export default App
