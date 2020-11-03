import styles from "./BoardList.module.css";
import BoardItem from "./BoardItem/BoardItem";
import AddBoardItem from "./BoardItem/AddBoardItem";

const BoardList = ({ group, boards }) => {
  const boardsList = Object.keys(boards);

  return (
    <section className={styles.BoardList}>
      <header className={styles.BoardList__header}>
        <h3>{group} Boards</h3>
      </header>
      <hr />
      <section className={styles.BoardList__grid}>
        {boardsList.map((board) => (
          <BoardItem key={board} title={board} />
        ))}
        <AddBoardItem />
      </section>
    </section>
  );
};

export default BoardList;
