import styles from "./BoardItem.module.css";
import { FiPlusSquare } from "react-icons/fi";

const AddBoardItem = () => {
  const addBoardClasses = [styles.BoardItem, styles.addBoard];
  return (
    <button className={addBoardClasses.join(" ")}>
      <p>Add Board</p>
      <FiPlusSquare style={{ height: "1.3em", width: "1.3em" }} />
    </button>
  );
};

export default AddBoardItem;
