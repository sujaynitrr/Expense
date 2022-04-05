import React from "react";
import NewExpenceFrom from "./NewExpenceFrom";

function NewExpence({ addExpence }) {
  const saveExpenceHandler = (newExpence) => {
    const expenceData = {
      ...newExpence,
      id: Math.random().toString,
    };
    addExpence(expenceData);
  };
  return (
    <div>
      <NewExpenceFrom saveExpenceHandler={saveExpenceHandler} />
    </div>
  );
}

export default NewExpence;
