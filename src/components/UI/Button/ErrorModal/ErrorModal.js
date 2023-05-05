// import Card from "../../Card";
import {createPortal} from 'react-dom';

import Button from "../Button";
import classes from "./ErrorModal.module.css";

const Backdrop = props => {
  return <div className={classes.backdrop} onClick={props.onCloseModal}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.modalData.title}</h2>
      </header>

      <div className={classes.content}>
        <p>{props.modalData.message}</p>
      </div>

      <footer className={classes.actions}>
        <Button onClick={props.onCloseModal}>Close</Button>
      </footer>
    </div>
  );
};

const ErrorModal = props => {
  return (
    <>
      {
        createPortal(<Backdrop onCloseModal={props.onCloseModal} />, document.getElementById('backdrop-root'))
      }

      {
        createPortal(<ModalOverlay modalData={props.modalData} onCloseModal={props.onCloseModal} />, document.getElementById('overlay-root'))
      }
    </>
  );
};

export default ErrorModal;