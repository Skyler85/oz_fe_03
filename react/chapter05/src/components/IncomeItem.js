//TODO 제출된 수입 목록을 관리하는 컴포넌트를 구현하세요

import React, { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'
import { TiDelete } from 'react-icons/ti'

function IncomeItem({ id, name, amount }) {
  const { dispatch } = useContext(AppContext)
  const handleDeleteIncome = () => {
    dispatch({
      type: 'DELETE_INCOME',
      payload: id
    })
  }
  return (
    <li
      className='list-group-item d-flex justify-content-between align-items-center'
    >
      {name}
      <div>
        <span className='badge bg-secondary me-3'
        >{amount}</span>
        <TiDelete size={'1.5em'} onClick={handleDeleteIncome}/>
        </div>
    </li>
  )
}

export default IncomeItem