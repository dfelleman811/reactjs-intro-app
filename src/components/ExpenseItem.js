// filenaming convention is to use Pascale Case

import './ExpenseItem.css'; // we can style with standard css styling - just need to be aware of attribute naming that might be different in JSX

// components are just functions that return html code
// React will ensure we get one parameter - that is an object that holds all the properties. It's called 'props' - with key:value pairs
// keys are the attribute names defined in App.js
function ExpenseItem(props) {
   
  // you MUST only have one root or parent element per return statement/jsx code snippet
  return (
    // use className attribute to give classes to these elements
    <div className="expense-item">
      <div>{ props.date.toString() }</div>
      <div className="expense-item__description">
        <h2>{ props.title }</h2>
        <div className="expense-item__price">${ props.amount }</div>
      </div>
    </div>
  );
}
// need to export it in order to use it
export default ExpenseItem;