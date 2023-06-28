import React from 'react'
import ExpenseItem from "./ExpenseItem"
import "./css/Expenses.css"
import Card from '../UI/Card';


//This is an arrow function
const Expenses = (props) => {

    const expenses = props.items;

    return (
        <Card className="expenses">
            {expenses.map(item =>(
                <ExpenseItem title={item.title} amount={item.amount} date={item.date}></ExpenseItem>
                
            ))}
        </Card>
    )
}

export default Expenses