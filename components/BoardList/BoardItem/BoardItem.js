import styles from "./BoardItem.module.css";

const BoardItem = ({ title }) => (
  <button className={styles.BoardItem}>{title}</button>
);

export default BoardItem;
