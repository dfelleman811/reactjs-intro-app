import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseHandler = (newExpense) => {
    const expenseData = { ...newExpense, id: Math.random() }; // Math.random() shouldn't be used for unique ids - this is for demo only
    // console.log("from NewExpense component:");
    // console.log(expenseData);
    props.onAddExpense(expenseData);
  };

  const toggleFormHandler = () => {
    setShowForm(!showForm);
  };

  if (showForm) {
    return (
      <div className="new-expense">
        <ExpenseForm onSaveExpense={saveExpenseHandler} onShowForm={toggleFormHandler}/>
      </div>
    );
  }
  return (
    <div className="new-expense">
        <button onClick={toggleFormHandler}>Add New Expense</button>
    </div>
  );
};

export default NewExpense;
