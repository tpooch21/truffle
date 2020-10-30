import styles from "./GroupItem.module.css";

const GroupItem = ({ name }) => (
  <button className={styles.GroupButton}>{name}</button>
);

export default GroupItem;
