// filenaming convention is to use Pascale Case

import './ExpenseItem.css'; // we can style with standard css styling - just need to be aware of attribute naming that might be different in JSX

// components are just functions that return html code
function ExpenseItem() {
  // you MUST only have one root or parent element per return statement/jsx code snippet
  return (
    // use className attribute to give classes to these elements
    <div className="expense-item">
      <div>March 15, 2023</div>
      <div className="expense-item__description">
        <h2>Car insurance</h2>
        <div className="expense-item__price">$90.00</div>
      </div>
    </div>
  );
}
// need to export it in order to use it
export default ExpenseItem;
