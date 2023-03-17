import { useState } from "react";
import ExpenseList from "./components/expenses/ExpenseList";
import NewExpense from "./components/new-expense/NewExpense";

// dummy expenseItem data - to mimic receiving data from 'outside' the component - simulates props
// can add as attributes to Components - need to pass these as parameters to functional component -> props
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 90,
    date: new Date(2023, 1, 15),
  },
  {
    id: "e2",
    title: "Groceries",
    amount: 120,
    date: new Date(2023, 1, 24),
  },
  {
    id: "e3",
    title: "Groceries",
    amount: 120,
    date: new Date(2021, 2, 24),
  },
  {
    id: "e4",
    title: "Groceries",
    amount: 120,
    date: new Date(2023, 3, 24),
  },
  {
    id: "e5",
    title: "Pet Food",
    amount: 75,
    date: new Date(2022, 2, 1),
  },
  {
    id: "e6",
    title: "Groceries",
    amount: 120,
    date: new Date(2022, 3, 24),
  },
  {
    id: "e7",
    title: "Netflix",
    amount: 10,
    date: new Date(2023, 2, 15),
  },
];

function App() {
  const [expenses, setExpenseList] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    console.log("from App.js");
    console.log(expense);
    // expenses.push(expense);
    // console.log(expenses);
    setExpenseList((prevExpenses) => {
      return [...prevExpenses, expense];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;

/*
App is a Component! 
it holds something trivial in this sample
it's exported so that we can import into other files 

notice: 
- it's a function named App - note the capital letter
- it returns html code inside of a js file
  - this is normally not valid js code
    - what is being returned is called JSX
      - a special syntax created by the ReactJS team - there are transofmration steps running behind the scens that transform the code to be browser friendly (when you run npm start)
      - stands for JavaScript XML
      - it's how we include HTML in JavaScript files
    *-take a look in the Sources tab in DevTools and you can see how they're transformed*
 it looks like this: 
// function App() {
//   return /*#__PURE__*/ //(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
//     children: "Hello React"
//   }, void 0, false, {
//     fileName: _jsxFileName,
//     lineNumber: 4,
//     columnNumber: 4
//   }, this);
// }

/*


N.B. 
` export default something`
- default is a keyword used with exports - it is the only thing being exported 

ex: export default App
import App from './App'
OR
import a from './App'
import myApp from './App'
etc
- notice how we can provide any name or alias to the default exports

`export const someVar = ...` would be used for a NAMED export and is imported differently.

ex: 
  export const createRoot = () => {...}
  export const myVar = 'something'

import { createRoot } from './path'
import { myVar } from './path'
- notice the difference? 
- you can still alias the import

import { myVar as v } from '.path'

and if you're importing multiple exports from the same location ....
import { createRoot, myVar } from './path'



*/
