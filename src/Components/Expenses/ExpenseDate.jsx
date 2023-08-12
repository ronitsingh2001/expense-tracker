import "./ExpenseDate.css";

function ExpenseDate({ date }) {
  const dateArry = date.split(" ");
  return (
    <div className="expense-date">
      <div className="expense-date__month">{dateArry[1]}</div>
      <div className="expense-date__year">{dateArry[3]}</div>
      <div className="expense-date__day">{dateArry[2]}</div>
    </div>
  );
}
export default ExpenseDate;
