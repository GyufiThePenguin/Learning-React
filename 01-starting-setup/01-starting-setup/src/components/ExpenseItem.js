import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css"
import Card from "./Card.js"

// You can use JS Object destructuring for props:
// function ExpenseItem({date, title, amount}) {

function ExpenseItem(props) {

    // You caan access an object prop like:
    // <h2>{props.expense.title}</h2>

    

    return (
        <Card className="expense-item">

            <ExpenseDate date={props.date}/>

            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;
