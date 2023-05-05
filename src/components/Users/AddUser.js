import {useState, useRef} from 'react';
import classes from './AddUser.module.css';
import Card from "../UI/Card";
import Button from "../UI/Button/Button";
import ErrorModal from "../UI/Button/ErrorModal/ErrorModal";

const AddUser = (props) => {
  const [modalError, setModalError] = useState();

  // alternatives to using state
  // store references to the actual DOM node
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const addUserHandler = (event) => {
    event.preventDefault();

    // get the value from field using ref
    const enteredUsername = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

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

    // reset the value from DOM node
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  const handleModalClose = event => {
    if (event) {
      setModalError(null);
    }
  };

  return (
    <div>
      {modalError && <ErrorModal modalData={modalError} onCloseModal={handleModalClose} />}

      {/* form controls also don't require the value property and onChange even handler function. use ref from get reference to the actual DOM node */}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" ref={nameInputRef} type="text" />

          <label htmlFor="age">Age</label>
          <input id="age" ref={ageInputRef} type="number" />

          {/* <button type="submit">Add User</button> */}
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;