import styles from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";

const Modal = ({ show, children }) => {
  return show ? (
    <>
      <Backdrop />
      <section className={styles.Modal}>{children}</section>
    </>
  ) : null;
};

export default Modal;
