// import Card from "../../Card";
import Button from "../Button";
import classes from "./ErrorModal.module.css";

const ErrorModal = props => {
  const handleModalClose = () => {
    props.onCloseModal(true);
  };

  return (
    <div className={classes.backdrop} onClick={handleModalClose}>
      <div className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.modalData.title}</h2>
        </header>

        <div className={classes.content}>
          <p>{props.modalData.message}</p>
        </div>

        <footer className={classes.actions}>
          <Button onClick={handleModalClose}>Close</Button>
        </footer>
      </div>
    </div>
  );
};

export default ErrorModal;