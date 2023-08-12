import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

function ExpenseList({ filteredExpense }) {

  if (filteredExpense.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }
  return (
    <ul className="expenses-list">
      {filteredExpense.map((item, index) => (
        <ExpenseItem
          key={index}
          amount={item.amount}
          title={item.title}
          date={item.date.toDateString()}
        />
      ))}
    </ul>
  );
}

export default ExpenseList;
