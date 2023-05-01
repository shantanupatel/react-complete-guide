import {useState} from 'react';

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };

    props.onAddExpense(expenseData);

    // close the form on submit
    setIsEditing(false);
  };

  const stopIsEditingHandler = () => {
    setIsEditing(false);
  };

  // let content;

  // if (isEditing) {
  //   content = <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopIsEditingHandler} />;
  // } else {
  //   content = <button type="button" onClick={startEditingHandler}>Add New Expense</button>;
  // }

  return (
    <div className="new-expense">
      {/* {content} */}

      {!isEditing && <button type="button" onClick={startEditingHandler}>Add New Expense</button>}

      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopIsEditingHandler} />}
    </div>
  );
};

export default NewExpense;