import './ExpenseItem.css';

const ExpenseItem = () =>{
    const date = new Date(2023, 4, 24);
    const title = 'Food';
    const price = 10;
    const LocationOfExpenditure = "Delhi";
    return (
        <div className="expense-item">
            <div>{date.toISOString}</div>
            <h2>{LocationOfExpenditure}</h2>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className="expense-item__price">
                    ${price}
                </div>
                
            </div>
        </div>
    )
}

export default ExpenseItem;