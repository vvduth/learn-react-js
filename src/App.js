
import './App.css';
import NewExpense from './components/NewEnpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
const App = () => {

  const expenses = [
    { 
      id: 'e1',
      title: 'Car Insurance', 
      amount : 126.98, 
      date: new Date(2019,5,27)},
    {
      id: 'e2',
      title: 'Toilet Paper', 
      amount : 25.98, 
      date: new Date(2020,3,27),
    },
    {
      id: 'e3',
      title: 'New Macbook Pro', 
      amount : 1726.98, 
      date: new Date(2021,9,27), 
    },
    {
      id: 'e4',
      title: 'New Coffee Machine', 
      amount : 176.98, 
      date: new Date(2021,9,17), 
    },
  ]

  const addExpenseHandler = expense => {
    console.log('In app.js');
    console.log(expense);
  }
  return (
    <div>
       <NewExpense onAddExpense = {addExpenseHandler}/>
       <Expenses items={expenses}/>

    </div>
  );
}

//no communication between 2 child compos, in this case is expenses and new expense
//pass the prop/state from one child to parent and from parent pass it to the others child

export default App;
