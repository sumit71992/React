import {useState} from 'react';

const ExpenseDetails = (props) => {
  const [amount, setAmount] = useState(props.amount);

  const updateTitle = ()=>{
    setAmount(100);
  }
  return (
    <div className="expense-item">
      <h2 id={props.id}>{props.location}</h2>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button className="expense-item__delete" id={props.id} onClick={updateTitle}>Change Price</button>
    </div>
  );
};

export default ExpenseDetails;
