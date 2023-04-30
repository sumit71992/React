import './AddExpense.css';
import ExpenseForm from './ExpenseForm';

const AddExpense = (props) =>{
    const saveExpenseDataHandler = (enteredExpenseFormData)=>{
        const expenseData = {
            ...enteredExpenseFormData,
            id: Math.random().toString()
        }
        props.onAddExpenseFormData(expenseData);
    }
    return(
        <div className="add-expense">
            <ExpenseForm onAddExpenseData={saveExpenseDataHandler}/>
        </div>
    );
}
export default AddExpense;