//TODO 제출된 수입 목록을 관리하는 컴포넌트를 구현하세요
import React, { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'
import IncomeItem from './IncomeItem'

function IncomeList() {
  const { incomes } = useContext(AppContext)

  return (
    <>
      <ul className="list-group mt-3 mb-3">
        {incomes?.map((income) => (
          <IncomeItem 
          key={income.id}
            id={income.id}
            name={income.name}
            amount={income.amount}
          />
        ))}
      </ul>
    </>
  )
}

export default IncomeList