import {useState} from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12)},
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e5',
    title: 'Desktop Computer',
    amount: 300,
    date: new Date(2019, 2, 9),
  },
];

const App = () => {
  // state for dynamically adding a new expense to the existing list of expenses
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    if (expense) {
      // just pushing a new expense to the existing list won't trigger component refresh
      // instead a state change would trigger component refresh
      setExpenses(prevExpenses => [expense, ...prevExpenses]);
    }
  };

  return (
    <div>
      {/* New Expense Form */}
      <NewExpense onAddExpense={addExpenseHandler} />

      {/* List of Expenses */}
      <Expenses expensesData={expenses} />
    </div>
  );


}

export default App;
