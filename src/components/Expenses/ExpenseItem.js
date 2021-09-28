import './ExpenseItem.css';
import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props){ //or props withou curly brakets

    const [title, setTitle1] = useState(props.title);

    const clickHandler = () => {
        setTitle1("Updated");
    }

    return (
    <Card className = "expense-item">
        <ExpenseDate date={props.date}/>
        <div className = "expense-item__description">
            <h2>{title}</h2>
            <div className = "expense-item__price">${props.amount}</div>
        </div>
        <button onClick = {clickHandler}>Change title</button>
    </Card>
        
    );
}
export default ExpenseItem;

//double forward data App => Item => Date