import { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../ui/Card";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

function ExpenseList(props) {
  const [yearSelected, setYearSelected] = useState(new Date().getFullYear());

  const yearSelectedHandler = (year) => {
    console.log("in ExpenseList componenet");
    console.log(year);
    setYearSelected(year);
  };

  return (
    <div>
      <ExpenseFilter
        selectedYear={yearSelected}
        onYearSelected={yearSelectedHandler}
      />
      <Card className="expenses">
        {props.expenses.map((expense) => {
          if (expense.date.getFullYear() == yearSelected){
            return (<ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />)
        }})}
      </Card>
    </div>
  );
}

export default ExpenseList;
