import "./ExpenseItem.css"

// You can use JS Object destructuring for props:
// function ExpenseItem({date, title, amount}) {

function ExpenseItem(props) {

    // You caan access an object prop like:
    // <h2>{props.expense.title}</h2>

    const month = props.date.toLocaleString('hu-HU',{month:"long"});
    const day = props.date.toLocaleString('hu-HU',{day:"2-digit"});
    const year = props.date.getFullYear();

    return (
        <div className="expense-item">
            
            <div>{month}</div>
            <div>{year}</div>
            <div>{day}</div>

            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
