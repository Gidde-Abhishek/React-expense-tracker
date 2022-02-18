import React, { useState } from "react";
import "./NewExpenseForm.css";

const generateExpId = (title, cost) => {
  let expIdPrefix = "exp_";
  let expUnique =
    title.substring(0, 4) +
    Math.floor(cost / 100) +
    Math.floor(Math.random() * 100) * 100;
  return expIdPrefix + expUnique;
};

function NewExpenseForm(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const expenseFormRegister = (event) => {
    /*onSubmit*/

    event.preventDefault();
    const expenseData = {
      id: generateExpId(title, amount),
      title,
      cost: amount * 1,
      date: new Date(date),
    };
    props.onExpenseInput(expenseData);
    console.log(expenseData.id);
    setTitle("");
    setAmount("");
    setDate("");
  };

  const titleChangeHandler = (event) => {
    let value = event.target.value;
    setTitle(value);
  };
  const amountChangeHandler = (event) => {
    let value = event.target.value;
    setAmount(value);
  };
  const dateChangeHandler = (event) => {
    let value = event.target.value;
    setDate(value);
  };

  const [formVisibility, setFormvisibility] = useState("hide");

  const showAddExpenseForm = () => {
    setFormvisibility("show");
  };
  const hideAddExpenseForm = () => {
    setFormvisibility("hide");
  };
  return (
    <div className="addExpense_Container">
      <div>
        <button onClick={showAddExpenseForm}>Add Expense</button>
        <button onClick={hideAddExpenseForm} className={`${formVisibility}`}>
          Cancel
        </button>
      </div>
      <div className={`addExpense__form ${formVisibility}`}>
        <form onSubmit={expenseFormRegister}>
          <div className="newExpenseForm__controls ">
            <div className="newExpenseForm__control">
              <label>Title</label>
              <input type="text" onChange={titleChangeHandler} value={title} />
            </div>
            <div className="newExpenseForm__control">
              <label>Amount</label>
              <span className="currency-prefix">₹ </span>
              <input
                type="number"
                min={0}
                step={5}
                onChange={amountChangeHandler}
                value={amount}
              />
            </div>
            <div className="newExpenseForm__control">
              <label>Date</label>
              <input type="date" onChange={dateChangeHandler} value={date} />
            </div>
            <div className="newExpenseForm__control">
              <button type="submit">Add Expense</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewExpenseForm;
