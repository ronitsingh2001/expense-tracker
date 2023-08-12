import { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

function Expenses({ expenses }) {
  const [filterYear, setFilterYear] = useState("2023");

  // let infoText = "2019, 2020, 2021 & 2022";

  // if (filterYear === "2022") {
  //   infoText = "2019, 2020, 2021 & 2023";
  // } else if (filterYear === "2021") {
  //   infoText = "2019, 2020, 2021 & 2022";
  // } else if (filterYear === "2020") {
  //   infoText = "2019, 2021, 2022 & 2023";
  // } else if(filterYear==="2019") {
  //   infoText = "2020, 2021, 2022 & 2023";
  // }

  const filteredExpense = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filterYear
  );

  const onDropDownHandler = (e) => {
    setFilterYear(e);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterYear}
        dropDownHandler={onDropDownHandler}
      />
      <ExpensesChart expenses={filteredExpense} />
      <ExpenseList filteredExpense={filteredExpense} />
    </Card>
  );
}

export default Expenses;
