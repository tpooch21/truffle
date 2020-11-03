import styles from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";

const Modal = ({ show, close, children }) => {
  return show ? (
    <>
      <Backdrop close={close} />
      <section className={styles.Modal}>{children}</section>
    </>
  ) : null;
};

export default Modal;
