import React from 'react'
import ExpenseItem from "./ExpenseItem"
import "./Expenses.css"

function Expenses(props) {

    const expenses = props.items;

    return (
        <div className="expenses">
            {expenses.map(item =>(
                <ExpenseItem title={item.title} amount={item.amount} date={item.date}></ExpenseItem>
                
            ))}
        </div>
    )
}

export default Expenses