import styles from "./GroupItem.module.css";

const GroupItem = ({ name, onClick }) => (
  <button className={styles.GroupButton} onClick={onClick}>
    {name}
  </button>
);

export default GroupItem;
