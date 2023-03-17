import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // we can use state to store user input
  // for the title - it starts as an empty string
  // and the handler for any change to the input will set the new input and update the state
  // we don't really need to update the view (the user is doing this by typing in input)
  // but we want to ensure that we store the input somewhere more persistent than this callback function
  // i'm initializing all states with a string - because that's the data type of input read in
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // can also track state as a single object
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // react schedules the updates - it doesn't do them immediately
    // if you're state update depends on a previous state - it's best to pass a function to the setXXX method like so
    // setUserInput((previousState) => {
    //   return { ...previousState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
    // setUserInput((previousState) => {
    //   return { ...previousState, enteredAmount: event.target.value };
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
    // setUserInput((previousState) => {
    //   return { ...previousState, enteredDate: event.target.value };
    // });
  };

  const submitHandler = (event) => {
    // stop default form behavior
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    }
    // console.log(expenseData);
    // console.log(userInput)
    props.onSaveExpense(expenseData);
    // reset form
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2023-12-31"
            value={enteredDate}
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
