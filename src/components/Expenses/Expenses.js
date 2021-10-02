import React, { useState } from 'react';


import Card from '../UI/Card';
import ExpensesFilter from '../ExpenseFilter/ExpenseFilter';
import ExpensesChart from './ExpensesChart';
import ExpensesList from './ExpensesList';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    
  };

const filterExpenses = props.items.filter(expense => {
    if (filteredYear === '0000'){
      return expense.date.getFullYear().toString() !== filteredYear ;
    } else {
    return expense.date.getFullYear().toString() === filteredYear ;
    }
}  );  


return (
    <li>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
      <div>
        { (filteredYear!=='0000') && <ExpensesChart expenses = {filterExpenses}/>}
        { (filteredYear==='0000') &&  <div>No graph avaiable</div>}
      </div>
      <ExpensesList items = {filterExpenses} />
      </Card>
    </li>
  );
};

export default Expenses;