import { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../ui/Card";
import ExpensesChart from "./ExpensesChart";

import "./Expenses.css";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [yearSelected, setYearSelected] = useState("2023");

  const yearSelectedHandler = (year) => {
    console.log("in ExpenseList componenet");
    console.log(year);
    setYearSelected(year);
  };

  const filteredExpenses = props.expenses.filter(
    (e) => e.date.getFullYear().toString() === yearSelected
  );

  return (
    <div>
      <Card className="expenses">
       
        <ExpenseFilter
          selectedYear={yearSelected}
          onYearSelected={yearSelectedHandler}
        />
         <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
