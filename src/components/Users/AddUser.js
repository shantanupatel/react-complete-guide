import {useState} from 'react';
import classes from './AddUser.module.css';
import Card from "../UI/Card";
import Button from "../UI/Button/Button";
import ErrorModal from "../UI/Button/ErrorModal/ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [modalError, setModalError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    // validation to check that the username field is not empty or the user age field is not empty
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setModalError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty)."
      });

      return;
    }

    // validation to check that the entered userage is not less than 1
    if (+enteredAge < 1) {
      setModalError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0)."
      });

      return;
    }

    const userData = {
      username: enteredUsername,
      age: +enteredAge
    };

    props.onAddUser(userData);

    setEnteredUsername('');
    setEnteredAge('');
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const handleModalClose = event => {
    if (event) {
      setModalError(null);
    }
  };

  return (
    <div>
      {modalError && <ErrorModal modalData={modalError} onCloseModal={handleModalClose} />}

      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler} />

          <label htmlFor="age">Age</label>
          <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler} />

          {/* <button type="submit">Add User</button> */}
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;