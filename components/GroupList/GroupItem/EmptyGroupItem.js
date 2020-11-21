import styles from "./GroupItem.module.css";

const EmptyGroupItem = ({ open }) => {
  return (
    <button className={`${styles.GroupItem} ${styles.emptyGroup}`}></button>
  );
};

export default EmptyGroupItem;
