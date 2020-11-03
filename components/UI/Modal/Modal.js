import styles from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";

const Modal = ({ show }) => {
  return show ? (
    <>
      <Backdrop />
      <section className={styles.Modal}>
        <header className={styles.Modal__header}>
          <h2>Create Custom Board</h2>
        </header>
      </section>
    </>
  ) : null;
};

export default Modal;
