import React from "react";
import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ initialExpenses, handleDelete}) => {
  return (
    <>
                <ul className='list'>
                    {initialExpenses.map((expense) => (
                        <ExpenseItem handleDelete={handleDelete} key={expense.id} expense={expense} />
                    ))}
                </ul>
                <button className='btn'>목록 지우기</button>
            </>
  )
}

export default ExpenseList