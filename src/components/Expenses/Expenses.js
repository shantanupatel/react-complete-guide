import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expenses = props => {
  return (
    <Card className="expenses">
      {Object.keys(props.expensesData).map(key =>
        <ExpenseItem expense={props.expensesData[key]} key={props.expensesData[key].id} />)
      }
    </Card>
  );
};

export default Expenses;