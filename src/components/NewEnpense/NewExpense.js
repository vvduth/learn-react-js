
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
const NewExpense = (props) => {
    const saveExpenseDatahandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);

    }

    //create a function in parent component, use param from child and pass the function to a props of child compo
    return (
        
            <div className='new-expense'>
                <ExpenseForm onSaveExpenseData = {saveExpenseDatahandler}/>
            </div>
       
    );
};

export default NewExpense;