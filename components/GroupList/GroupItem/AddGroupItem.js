import styles from "./GroupItem.module.css";

const AddGroupItem = () => {
  return (
    <button className={`${styles.GroupItem} ${styles.addGroup}`}>
      Add Group
    </button>
  );
};

export default AddGroupItem;
