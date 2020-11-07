import styles from "./GroupItem.module.css";

const AddGroupItem = ({ open }) => {
  return (
    <button className={`${styles.GroupItem} ${styles.addGroup}`} onClick={open}>
      Add Group
    </button>
  );
};

export default AddGroupItem;
