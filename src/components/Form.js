/** @format */

import React, { useState } from 'react'
import Table from './Table'
import './Form.css'

const Form = (props) => {
  //states defined here
  const { formState, setFormState } = props
  const { btnTxt, setBtnTxt } = props
  const { setH1Txt } = props
  const [errors, setErrors] = useState("")
  const { showTable, setShowTable } = props



  //functions defined here




  const validateForm = () => {
    if (formState.name && formState.age) {
      setErrors("")
      return true
    } else {
      let errorFields = []
      for(const [key, value] of Object.entries(formState)) {
        if(!value) {
          errorFields.push(key)
        }
      }
      setErrors(errorFields.join(", "))
      return false
    }
  }

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }



  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validateForm()) return

    props.onSubmit(formState)
    setFormState({
      name:'',
      age:''
  })
    props.setShowTable(true)
    setBtnTxt('Add')
    setH1Txt('Add Record')
  }

  const clearFields = (e) => {
    e.preventDefault()
    setFormState({
      name:'',
      age:''
  })
  }


  return (
    <div className="form-container">
      <div className="form">
        <form>
          <div className="form-group">
            <input name="name" type="text" value={formState.name} onChange={handleChange} placeholder='Enter Name' />
          </div>
          <div className="form-group">
            <input name="age" type="number" value={formState.age} onChange={handleChange} placeholder='Enter Age' />
          </div>
          {errors && <div className='errors'>{`Please include: ${errors}`}</div>}
          <div className='btn_group'>
          <button type="submit" className="btn" onClick={handleSubmit}>
            {btnTxt}
          </button>
          <button className="btn" onClick={clearFields}>
            Reset
            </button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Form
