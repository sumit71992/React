import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expense = [
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
  return (
    <div className="App">
      {expense.map((el) => {
        return <ExpenseItem
          title={el.title}
          amount={el.amount}
          date={el.date}
          location={el.location}
        />;
      })}
    </div>
  );
}

export default App;
