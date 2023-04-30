import {useState} from 'react';

import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = props => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

      {Object.keys(props.expensesData).map(key =>
        <ExpenseItem expense={props.expensesData[key]} key={props.expensesData[key].id} />)
      }
    </Card>
  );
};

export default Expenses;