import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {
  // a way of sending a complete different content if the condition doesn't match
  // this approach should be used only if the entire content is to be modified instread of a part
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">
      Found no expenses.
    </h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map(expense => <ExpenseItem expense={expense} key={expense.id} />
      )}
    </ul>
  );
};

export default ExpensesList;