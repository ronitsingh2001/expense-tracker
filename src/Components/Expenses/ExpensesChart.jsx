import React from "react";
import Chart from "../Chart/Chart";

function ExpensesChart(props) {
  const chartDataPoints = [
    { label: "jan", value: 0 },
    { label: "feb", value: 0 },
    { label: "mar", value: 0 },
    { label: "apr", value: 0 },
    { label: "may", value: 0 },
    { label: "jun", value: 0 },
    { label: "jul", value: 0 },
    { label: "aug", value: 0 },
    { label: "sep", value: 0 },
    { label: "oct", value: 0 },
    { label: "nov", value: 0 },
    { label: "dec", value: 0 },
  ];


  props.expenses.forEach((exp) => {
    const expenseMonth = exp.date.getMonth();
    chartDataPoints[expenseMonth].value += exp.amount;
  });

  return <Chart dataPoints={chartDataPoints} />;
}

export default ExpensesChart;