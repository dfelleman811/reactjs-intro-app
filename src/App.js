import ExpenseItem from "./components/ExpenseItem";

function App() {
  // dummy expenseItem data - to mimic receiving data from 'outside' the component - simulates props
  // can add as attributes to Components - need to pass these as parameters to functional component -> props
  const expenses = [
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
      title: "Pet Food",
      amount: 75,
      date: new Date(2023, 2, 1),
    },
    {
      id: "e4",
      title: "Netflix",
      amount: 10,
      date: new Date(2023, 2, 15),
    },
  ];

  return (
    <div>
      <h1>Hello React</h1>
      <p>everything here will render</p>
      <p>even custom components! Below is the one we created</p>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
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
