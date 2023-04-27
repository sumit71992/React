import { useState } from "react";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import AddExpense from "./components/NewExpense/AddExpense";
import ExpenseFilter from "./components/Expenses/ExpenseFilter";

const App = () => {
  const expenses = [
    {
      id: "1",
      title: "Food",
      amount: 10,
      date: new Date(2023, 4, 24),
      location: "Delhi",
    },
    {
      id: "2",
      title: "Drama",
      amount: 110,
      date: new Date(2023, 3, 24),
      location: "Mumbai",
    },
    {
      id: "3",
      title: "Movie",
      amount: 100,
      date: new Date(2023, 4, 23),
      location: "Gurgaon",
    },
    {
      id: "4",
      title: "Petrol",
      amount: 1000,
      date: new Date(2023, 4, 20),
      location: "Gaya",
    },
  ];
const [totalExpense, setTotalExpense] = useState(expenses);
const [filteredYear, setFilteredYear] = useState('2023');
  const expenseHandler = (expense)=>{
    const expenseData = [...totalExpense];
    expenseData.push(expense);
    setTotalExpense(expenseData);
  }
  
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
  return (
    <div className="App">
      <AddExpense onAddExpenseFormData={expenseHandler}/>
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      {totalExpense.map((el) => {
         return <ExpenseItem
            id={el.id}
            title={el.title}
            amount={el.amount}
            date={el.date}
            location={el.location}
          />
      })}
    </div>
  );
};
export default App;
