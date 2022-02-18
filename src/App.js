import React, { useState } from "react";
import "./style.css";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expense/Expenses";

let dummy_expenses = [
  {
    id: "exp_0",
    date: new Date(2022, 7, 5),
    title: "4 x iPhone 13 Pro Max & accessories",
    cost: 198000 * 4 * 0.9,
  },
  {
    id: "exp_1",
    date: new Date(2022, 8, 5),
    title: "Nike White Sneakers",
    cost: 8400,
  },
  {
    id: "exp_2",
    date: new Date(2022, 7, 3),
    title: "BMW Booking Charges",
    cost: 500000,
  },
  {
    id: "exp_3",
    date: new Date(2022, 5, 6),
    title: "New Mouse Logitech",
    cost: 799,
  },
  {
    id: "exp_4",
    date: new Date(2022, 5, 6),
    title: "Family Shopping",
    cost: 38600,
  },
];

function App() {
  const [exps, setExps] = useState(dummy_expenses);
  const expenseDataCollect = (new_expense) => {
    setExps((prevExp) => {
      return [...prevExp, new_expense];
    });
  };

  return (
    <div className="App">
      <h1 align="center">
        Abhishek Gidde's
        <br />
        Expense Tracker
      </h1>
      <NewExpense onExpenseDataCollect={expenseDataCollect} />
      <Expenses expense={exps} />
    </div>
  );
}

export default App;
