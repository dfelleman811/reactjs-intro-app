import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  // we can use state to store user input
  // for the title - it starts as an empty string
  // and the handler for any change to the input will set the new input and update the state
  // we don't really need to update the view (the user is doing this by typing in input)
  // but we want to ensure that we store the input somewhere more persistent than this callback function
  // i'm initializing all states with a string - because that's the data type of input read in
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = event => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = event => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = event => {
    setEnteredDate(event.target.value);
  };

  let newExpense = {
    title: enteredTitle,
    amount: enteredAmount,
    date: enteredDate,
  };

  console.log(newExpense);
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
