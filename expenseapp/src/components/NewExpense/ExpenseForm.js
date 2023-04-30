import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [showForm, setShowForm] = useState(false);
  //or
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    //or
    // setUserInput({
    //     ...userInput,
    //     enteredTitle:event.target.value
    // });
    //or
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredAmount: event.target.value };
    // });
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredDate: event.target.value };
    // });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onAddExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    setShowForm(!showForm);
  };
  if (showForm === false) {
    return <button onClick={toggleForm}>Add Expense</button>;
  } else {
    return (
      <form onSubmit={submitHandler}>
        <div className="add-expense-controls">
          <div className="add-expense-control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="add-expense-control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className="add-expense-control">
            <label>Date</label>
            <input
              type="date"
              min="2022-01-01"
              max="2030-12-31"
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="add-expense-actions">
          <button onClick={toggleForm}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    );
  }
}

export default ExpenseForm;
