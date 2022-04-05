import React from "react";
import Card from "../UI/Card";

function ExpenseItem({ title, amount, date }) {
  return (
    <Card>
      <h1>{title}</h1>
      <h2>{amount}</h2>
      <h3>{date.toLocaleDateString()}</h3>
    </Card>
  );
}

export default ExpenseItem;
