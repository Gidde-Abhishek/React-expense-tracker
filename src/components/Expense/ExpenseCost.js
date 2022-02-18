function ExpenseCost(props) {
  let cost = props.cost;
  if (cost >= 100000) {
    cost = (cost / 100000).toPrecision(3) + " Lakh";
  }
  return <p className="cost">{cost}</p>;
}

export default ExpenseCost;
