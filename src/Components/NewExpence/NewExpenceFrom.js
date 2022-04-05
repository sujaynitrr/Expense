import React, { useState } from "react";

function NewExpenceFrom({ saveExpenceHandler }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };
  const amountHandler = (e) => {
    setAmount(e.target.value);
  };
  const dateHandler = (e) => {
    setDate(e.target.value);
  };

  const fromSubmitHandler = (e) => {
    e.preventDefault();
    const newExpense = {
      title: title,
      amount: amount,
      date: new Date(date),
    };
    saveExpenceHandler(newExpense);
    console.log(newExpense);
    setTitle("");
    setAmount("");
    setDate("");
  };
  return (
    <div>
      <form onSubmit={fromSubmitHandler}>
        <div>
          <label>Title</label>
          <input
            type="text"
            placeholder="please enter title"
            onChange={titleHandler}
            value={title}
          />
        </div>
        <div>
          <label>Amount</label>
          <input
            type="number"
            placeholder="please enter amount"
            onChange={amountHandler}
            value={amount}
          />
        </div>

        <div>
          <label>Date</label>
          <input
            type="date"
            placeholder="please enter date"
            onChange={dateHandler}
            value={date}
          />
        </div>

        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
}

export default NewExpenceFrom;
