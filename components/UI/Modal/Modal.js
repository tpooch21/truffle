import styles from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";
import { useEffect } from "react";

const Modal = ({ show, close, children }) => {
  useEffect(() => {}, [show]);

  return show ? (
    <>
      <Backdrop close={close} />
      <section className={styles.Modal}>{children}</section>
    </>
  ) : null;
};

export default Modal;
