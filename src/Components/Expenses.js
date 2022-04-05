import React from "react";
import ExpenseItem from "./ExpenseItem";

function Expenses({ items }) {
  return (
    <div>
      <ExpenseItem
        title={items[0].title}
        amount={items[0].amount}
        date={items[0].date}
      />
      <ExpenseItem
        title={items[1].title}
        amount={items[1].amount}
        date={items[1].date}
      />
      <ExpenseItem
        title={items[2].title}
        amount={items[2].amount}
        date={items[2].date}
      />
    </div>
  );
}

export default Expenses;
