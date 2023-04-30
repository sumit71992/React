import ExpenseItem from './ExpenseItem';
import  './ExpenseList.css';

const ExpenseList = (props) =>{
    let filteredExpenseContent = <h3>No Expenses found !!!</h3>;
    if (props.items.length === 1) {
      filteredExpenseContent = props.items.map((expense) => {
        return (
          <>
            <ExpenseItem
              key={expense.id}
              location={expense.location}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
            <div>
              <strong>Only single Expense here. Please add more...</strong>
            </div>
          </>
        );
      });
    }
    if (props.items.length > 1) {
      filteredExpenseContent = props.items.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            location={expense.location}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      });
    }
    return <ul className='expense-list'>{filteredExpenseContent}</ul>
}

export default ExpenseList