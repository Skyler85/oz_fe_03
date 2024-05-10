import React from "react";
import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";
import { MdDelete } from "react-icons/md";

const ExpenseList = ({ initialExpenses, handleDelete, handleEdit, expense, expenses, clearItems }) => {
  return (
    <>
                <ul className='list'>
                    {initialExpenses.map((expense) => (
                        <ExpenseItem handleEdit={handleEdit} handleDelete={handleDelete} key={expense.id} expense={expense} />
                    ))}
                </ul>
                {expenses.length > 0 ?
                <button onClick={clearItems} className='btn'>목록 지우기 <MdDelete className="btn-icon" /></button>
                : null}
                
            </>
  )
}

export default ExpenseList