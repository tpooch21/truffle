import BoardItem from "../BoardItem/BoardItem";
import styles from "./BoardGroup.module.css";
import AddBoardItem from "../BoardItem/AddBoardItem";

const BoardGroup = ({ groupName, boards, open }) => {
  const boardsList = boards
    ? Object.keys(boards).map((board) => {
        return boards[board].name;
      })
    : null;

  return (
    <section className={styles.BoardGroup}>
      <header className={styles.BoardGroup__header}>
        <h3>{groupName} Boards</h3>
      </header>
      <hr />
      <section className={styles.BoardGroup__grid}>
        {boardsList &&
          boardsList.map((board) => <BoardItem key={board} title={board} />)}
        <AddBoardItem add={open} />
      </section>
    </section>
  );
};

export default BoardGroup;
