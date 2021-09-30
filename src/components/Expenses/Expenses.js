import React, { useState } from 'react';


import Card from '../UI/Card';
import ExpensesFilter from '../ExpenseFilter/ExpenseFilter';

import ExpensesList from './ExpensesList';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

const filterExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear ;
}  );  


return (
    <li>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
      <ExpensesList items = {filterExpenses} />
      </Card>
    </li>
  );
};

export default Expenses;