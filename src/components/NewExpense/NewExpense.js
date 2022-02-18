import React from "react";
import NewExpenseForm from "./NewExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  function newExpenseRegister(new_Expense) {
    props.onExpenseDataCollect(new_Expense);
  }

  return (
    <div className="newExpense__container">
      <NewExpenseForm onExpenseInput={newExpenseRegister} />
    </div>
  );
};

export default NewExpense;
