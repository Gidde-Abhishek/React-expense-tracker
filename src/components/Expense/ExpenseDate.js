function ExpenseDate(props) {
  const expenseDay = props.date.toLocaleDateString("en-IN", {
    day: "numeric",
  });
  const expenseMonth = props.date.toLocaleDateString("en-IN", {
    month: "long",
  });
  const expenseYear = props.date.toLocaleDateString("en-IN", {
    year: "numeric",
  });

  return (
    <div className="date">
      <div className="day">{expenseDay}</div>
      <div className="month">{expenseMonth}</div>
      <div className="year">{expenseYear}</div>
    </div>
  );
}

export default ExpenseDate;
