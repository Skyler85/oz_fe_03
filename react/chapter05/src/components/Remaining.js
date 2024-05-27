import React, { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'
import { formatNumberToWon } from '../utils'

const Remaining = () => {
  const { expenses, incomes } = useContext(AppContext)

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost)
  }, 0)
  const totalIncomes = incomes.reduce((total, item) => {
    return (total += item.amount)
  }, 0)

  const alertType = totalExpenses > totalIncomes ? 'alert-danger' : 'alert-success'

  return (
    <div className={`alert p-4 ${alertType}`}>
      {/* TODO 수입과 지출을 합한사여 남은 돈을 계산하세요 */}
      남은 돈: { formatNumberToWon(totalIncomes - totalExpenses) }
    </div>
  )
}

export default Remaining