const ExpenseFilter = (props) => {
  const selectionChangedHandler = (event) => {
    const index = event.target.options.selectedIndex;
    const year = event.target.options[index].value;
    props.onYearSelected(year)
  };

  return (
    <div>
      <div>
        <label>Filter by Year</label>
        <select onChange={selectionChangedHandler}>
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
