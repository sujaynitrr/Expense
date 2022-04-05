import React, { useState } from "react";

import ExpenceFilter from "./ExpenceFilter";

import ExpenseItem from "./ExpenseItem";

function Expenses({ items }) {
  const [selectedYear, setSelectedYear] = useState("2022");

  const yearFilterHandler = (year) => {
    setSelectedYear(year);
  };

  const filterExpence = items.filter((expence) => {
    return expence.date.getFullYear().toString() === selectedYear;
  });
  return (
    <div>
      <ExpenceFilter yearFilterHandler={yearFilterHandler} />
      {filterExpence.map((expence) => {
        <ExpenseItem
          key={expence.id}
          title={expence.title}
          amount={expence.amount}
          date={expence.date}
        />;
      })}
    </div>
  );
}

export default Expenses;
