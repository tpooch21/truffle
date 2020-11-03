import styles from "./Backdrop.module.css";

const Backdrop = ({ close }) => (
  <div onClick={close} className={styles.Backdrop}></div>
);

export default Backdrop;
