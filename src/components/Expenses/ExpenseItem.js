import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

function ExpenseItem({title,amount,date}){ //or props withou curly brakets

    const clickHandler = () => {
        console.log("hello");
    }

    return (
    <Card className = "expense-item">
        <ExpenseDate date={date}/>
        <div className = "expense-item__description">
            <h2>{title}</h2>
            <div className = "expense-item__price">${amount}</div>
        </div>
        <button onClick = {clickHandler}>Change title</button>
    </Card>
        
    );
}
export default ExpenseItem;

//double forward data App => Item => Date