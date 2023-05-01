import {useState} from "react";

import './App.css';

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import CourseGoalList from "./components/CourseGoals/CourseGoalList/CourseGoalList";
import CourseInput from "./components/CourseGoals/CourseInput/CourseInput";

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

  // todo-app
  const [courseGoals, setCourseGoals] = useState([
    {text: 'Do all exercises!', id: 'g1'},
    {text: 'Finish the course!', id: 'g2'}
  ]);

  const addGoalHandler = enteredText => {
    setCourseGoals(prevGoals => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({text: enteredText, id: Math.random().toString()});
      return updatedGoals;
    });
  };

  const deleteItemHandler = goalId => {
    setCourseGoals(prevGoals => {
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = (
    <p style={{color: '#fff', textAlign: 'center'}}>No goals found. Maybe add one?</p>
  );

  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div>
      <div>
        <section id="goal-form">
          <CourseInput onAddGoal={addGoalHandler} />
        </section>
        <section id="goals">
          {content}
          {/* {courseGoals.length > 0 && (
          <CourseGoalList
            items={courseGoals}
            onDeleteItem={deleteItemHandler}
          />
        ) // <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
        } */}
        </section>
      </div>

      {/* New Expense Form */}
      <NewExpense onAddExpense={addExpenseHandler} />

      {/* List of Expenses */}
      <Expenses expensesData={expenses} />
    </div>
  );
}

export default App;
