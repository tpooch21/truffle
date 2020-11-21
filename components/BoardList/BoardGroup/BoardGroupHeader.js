import styles from "./BoardGroup.module.css";
import { BsPeopleFill } from "react-icons/bs";

const BoardGroupHeader = ({ groupName, loading }) => (
  <header className={styles.BoardGroup__header}>
    {loading ? (
      <img
        src={"/spinner.svg"}
        alt="loading spinner"
        style={{ height: "2.5rem", width: "2.5rem" }}
      />
    ) : (
      <BsPeopleFill
        style={{ height: "1.2em", width: "1.2em", marginRight: "5px" }}
      />
    )}
    <h3>{groupName} Boards</h3>
  </header>
);

export default BoardGroupHeader;
