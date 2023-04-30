import "./ExpenseDate.css";
const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="expense-date" id={props.id}>
      <div className="expense-date__month" id={props.id}>{month}</div>
      <div className="expense-date__day" id={props.id}>{day}</div>
      <div className="expense-date__year" id={props.id}>{year}</div>
    </div>
  );
};

export default ExpenseDate;
