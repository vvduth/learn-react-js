import React,{useState} from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
const NewExpense = (props) => {

     const [isEditing, setIsEditing] = useState(false);
    
        
    const saveExpenseDatahandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);

    }
    const isEditHandler = () => {
        setIsEditing(true);
    }
    const onCancelHandler = () => {
        setIsEditing(false);
    }

    

    //create a function in parent component, use param from child and pass the function to a props of child compo
    return (
        
            <div className='new-expense'>
                {!isEditing && (<button onClick={isEditHandler}>Add new expense</button>)}
                {isEditing && (<ExpenseForm onSaveExpenseData = {saveExpenseDatahandler} onCancel = {onCancelHandler}/>)}
            </div>
            //JSX
       
    );
};

export default NewExpense;
