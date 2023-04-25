import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css';

const ExpenseItem = (props) =>{
    return (
        <div className="expense-item" id={props.id}>
            <ExpenseDate date={props.date}/>
            <ExpenseDetails id={props.id} title={props.title} amount={props.amount} location={props.location}/>
        </div>
    );
}

export default ExpenseItem;