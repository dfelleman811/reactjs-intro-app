import './ExpenseFilter.css';

const ExpenseFilter = (props) => {
  const selectionChangedHandler = (event) => {
    // console.log("from the expense filter")
    // console.log(event.target.value)
    // const index = event.target.options.selectedIndex;
    // const year = event.target.options[index].value;
    props.onYearSelected(event.target.value)
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by Year</label>
        <select value={props.selectedYear} onChange={selectionChangedHandler}>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
