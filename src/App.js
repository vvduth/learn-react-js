
import './App.css';
import Expenses from './components/Expenses/Expenses';
const App = () => {

  const expenses = [
    { 
      id: 'e1',
      title: 'Car Insurance', 
      amount : 126.98, 
      date: new Date(2021,5,27)},
    {
      id: 'e2',
      title: 'Toilet Paper', 
      amount : 25.98, 
      date: new Date(2021,3,27),
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
  return (
    <div>
       <h2>Let's get started</h2>
       <Expenses items={expenses}/>

    </div>
  );
}

export default App;
