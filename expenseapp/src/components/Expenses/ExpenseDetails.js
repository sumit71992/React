const ExpenseDetails = (props) => {
  return (
    <div className="expense-item">
      <h2>{props.location}</h2>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button className="expense-item__delete" id={props.id}>Delete Expense</button>
    </div>
  );
};

export default ExpenseDetails;
