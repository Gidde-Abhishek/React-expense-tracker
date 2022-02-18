import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseCost from "./ExpenseCost";
import Card from "../UI/Card";

function ExpenseItem(props) {
  let taxBtnText_hook = "+ Add 18% GST";
  const [cost, setCost] = useState(props.cost);
  const [title, setTitle] = useState(props.title);
  const [taxBtnText, setTaxBtnText] = useState(taxBtnText_hook);

  const updateTax = () => {
    if (taxBtnText === "+ Add 18% GST") {
      setCost(props.cost + props.cost * 0.18);
      setTaxBtnText("- Exc 18% GST");
      setTitle(props.title + " With TAX");
    } else {
      setCost(props.cost);
      setTaxBtnText("+ Add 18% GST");
      setTitle(props.title + " Tax Extra");
    }
  };

  return (
    <Card className="container">
      <ExpenseDate date={props.date} />
      <h2 className="title">{title}</h2>
      <ExpenseCost cost={cost} />
      <button className="gstBtn" onClick={updateTax}>
        {taxBtnText}
      </button>
    </Card>
  );
}

export default ExpenseItem;
