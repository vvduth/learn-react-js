import React, { useState } from 'react';

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from '../ExpenseFilter/ExpenseFilter';
import './Expenses.css'


const Expenses = (props) => {

     const [selectedYear, setSelectedYear] = useState('2021');
   
     const onYearChangeHandler = (year) =>{
         setSelectedYear(year);
    }

    

    console.log({selectedYear});
    return (
      <div>
        
        <ExpensesFilter selected={selectedYear} 
                        onYearChange = {onYearChangeHandler} />
        <Card className="expenses">
            <ExpenseItem 
                title  = {props.items[0].title} 
                amount = {props.items[0].amount}
                date   = {props.items[0].date}></ExpenseItem>
            <ExpenseItem 
                title  = {props.items[1].title} 
                amount = {props.items[1].amount}
                date   = {props.items[1].date}></ExpenseItem>
            <ExpenseItem 
                title  = {props.items[2].title} 
                amount = {props.items[2].amount}
                date   = {props.items[2].date}></ExpenseItem>
            <ExpenseItem 
                title  = {props.items[3].title} 
                amount = {props.items[3].amount}
                date   = {props.items[3].date}></ExpenseItem>
        </Card>

        </div>
    )
}

export default Expenses;