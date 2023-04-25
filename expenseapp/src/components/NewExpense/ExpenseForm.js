import './ExpenseForm.css'

function ExpenseForm() {
    const titleChangeHandler = (event) =>{
        console.log(event.target.value)
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
                <input type="number" min="0.01" step="0.01"  onChange={titleChangeHandler}/>
            </div>
            <div className="add-expense-control">
                <label>Date</label>
                <input type="date" min="2023-01-01" max="2030-12-31"  onChange={titleChangeHandler}/>
            </div>
        </div>
        <div className="add-expense-actions">
            <button type='submit'>Add Expense</button>
        </div>
    </form>
  )
}

export default ExpenseForm