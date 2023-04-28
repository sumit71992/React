import { useState } from "react";

import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";
import ExpenseList from "./ExpenseList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseList items={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
