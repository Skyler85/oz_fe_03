import React, { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'
import { formatNumberToWon } from '../utils'

function IncomeTotal() {
  const { incomes } = useContext(AppContext)

  const total = incomes.reduce((total, item) => {
    return (total += item.amount)
  }, 0)

  return (
    <div className={`alert alert-primary p-4 `}>
      <span>총 수입: {formatNumberToWon(total)}</span>
    </div>
  )
}

export default IncomeTotal