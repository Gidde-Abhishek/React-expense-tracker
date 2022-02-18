import React, { useState } from "react";
import "./ExpenseFilter.css";

function ExpenseFilter(props) {
  const [selectedYear, setSelectedYear] = useState("2022");
  const onSelectCon = (event) => {
    setSelectedYear(event.target.value);
    props.passFilterYear(event.target.value);
  };
  return (
    <div className="filterContainer">
      <div className="filter">
        <label>Date Filter</label>
        <select onChange={onSelectCon} value={selectedYear}>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
        </select>
      </div>
    </div>
  );
}

export default ExpenseFilter;
