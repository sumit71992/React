import { useState } from 'react'
import './ExpenseForm.css'

function ExpenseForm() {
const [enteredTitle, setEnteredTitle] = useState('');
const [enteredAmount, setEnteredAmount] = useState('');
const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value);
    }
    const amountChangeHandler = (event) =>{
        setEnteredAmount(event.target.value);
    }
    const dateChangeHandler = (event) =>{
        setEnteredDate(event.target.value);
    }
  return (
    <form>
        <div className="add-expense-controls">
            <div className="add-expense-control">
                <label>Title</label>
                <input type="text" onChange={titleChangeHandler} />
            </div>
            <div className="add-expense-control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01"  onChange={amountChangeHandler}/>
            </div>
            <div className="add-expense-control">
                <label>Date</label>
                <input type="date" min="2023-01-01" max="2030-12-31"  onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className="add-expense-actions">
            <button type='submit'>Add Expense</button>
        </div>
    </form>
  )
}

export default ExpenseForm