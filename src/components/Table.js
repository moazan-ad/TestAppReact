import React from 'react'
import './Table.css'
import { BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs'

const Table = (props) => {
  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th className="expand">Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.records.map((record, idx) => {
            return (
              <tr key={idx}>
                <td>{record.name}</td>
                <td>{record.age}</td>
                <td>
                  <span className="actions">
                    <BsFillTrashFill className="delete-btn" onClick={() => props.deleteRow(idx)} />
                    <BsFillPencilFill onClick={() => props.editRow(idx)} />
                  </span>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Table