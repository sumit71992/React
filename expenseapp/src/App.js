import { useState } from "react";
import AddExpense from "./components/NewExpense/AddExpense";
import Expenses from "./components/Expenses/Expenses";

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
      date: new Date(2022, 4, 20),
      location: "Gaya",
    },
  ];
const [totalExpense, setTotalExpense] = useState(expenses);
  const expenseHandler = (expense)=>{
    setTotalExpense((prevExpenses)=>{
      return [expense, ...prevExpenses];
    });
  }
  
  return (
    <div className="App">
      <AddExpense onAddExpenseFormData={expenseHandler}/>
      <Expenses items={totalExpense}/>
    </div>
  );
};
export default App;
