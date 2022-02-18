import React, { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import ErrorCard from "../UI/ErrorCard";

function Expenses(props) {
  const [fYear, setFYear] = useState("2022");

  const getFilteredYear = (filterYear) => {
    setFYear(filterYear);
  };
  let filteredExpenses = props.expense.filter((expense) => {
    return expense.date.getFullYear().toString() === fYear;
  });
  return (
    <div>
      <ExpenseFilter passFilterYear={getFilteredYear} />

      {filteredExpenses.length === 0 ? (
        <ErrorCard errorMsg={`No Expense found for the year ${fYear}`} />
      ) : (
        filteredExpenses.map((exp) => {
          return (
            <ExpenseItem
              title={exp.title}
              cost={exp.cost}
              date={exp.date}
              key={exp.id}
            />
          );
        })
      )}
    </div>
  );
}

export default Expenses;
