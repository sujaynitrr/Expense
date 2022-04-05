import React from "react";
import { useState } from "react/cjs/react.production.min";

function ExpenceFilter({ yearFilterHandler }) {
  const yearHandler = (e) => {
    yearFilterHandler(e.target.value);
  };
  return (
    <div>
      <h1>Expence Filter Year wise</h1>
      <label>Filter by year</label>
      <select onChange={yearHandler}>
        <option>2022</option>
        <option>2021</option>
        <option>2020</option>
        <option>2019</option>
      </select>
    </div>
  );
}

export default ExpenceFilter;
