import { useState } from 'react';
import ExpenseFilter from "./ExpenseFilter";
import Card from "../ui/Card";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

function ExpenseList(props) {

  const [yearSelected, setYearSelected] = useState('');

  const yearSelectedHandler = year => {
    console.log("in ExpenseList componenet")
    console.log(year);
  };

  return (
    <div>
      <ExpenseFilter onYearSelected={yearSelectedHandler}/>
      <Card className="expenses">
        <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        />
        <ExpenseItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        />
        <ExpenseItem
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        />
        <ExpenseItem
          title={props.expenses[3].title}
          amount={props.expenses[3].amount}
          date={props.expenses[3].date}
        />
      </Card>
    </div>
  );
}

export default ExpenseList;
