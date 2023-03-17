import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {

    const saveExpenseHandler = newExpense => {
        const expenseData = {...newExpense, id: Math.random()} // Math.random() shouldn't be used for unique ids - this is for demo only
        // console.log("from NewExpense component:");
        // console.log(expenseData);
        props.onAddExpense(expenseData);
    };

    return <div className="new-expense">
        <ExpenseForm onSaveExpense={saveExpenseHandler}/>
    </div>
};

export default NewExpense;