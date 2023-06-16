/** @format */

import React from 'react'
import './Form.css'

const Form = (props) => {
  const { formState, setFormState } = props

  const validateForm = () => {
    if (formState.name && formState.age) {
      return true
    } else {
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
  }

  return (
    <div className="form-container">
      <div className="form">
        <form >
          <div className="form-group">
            <input name="name" type="text" value={formState.name} onChange={handleChange} />
          </div>
          <div className="form-group">
            <input name="age" type="number" value={formState.age} onChange={handleChange} />
          </div>

          <button type="submit" className="btn" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Form
