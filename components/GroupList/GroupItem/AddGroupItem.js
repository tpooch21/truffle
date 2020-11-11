import styles from "./GroupItem.module.css";

const AddGroupItem = ({ open }) => {
  return (
    <button className={`${styles.GroupItem} ${styles.addGroup}`} onClick={open}>
      <p>Add Group</p>
    </button>
  );
};

export default AddGroupItem;
