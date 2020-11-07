import BoardItem from "../BoardItem/BoardItem";
import styles from "./BoardGroup.module.css";
import AddBoardItem from "../BoardItem/AddBoardItem";

const BoardGroup = ({ groupName, boards, open, id }) => {
  const boardsList = boards
    ? Object.keys(boards).map((board) => {
        return {
          ...boards[board],
          key: board,
        };
      })
    : null;

  console.log("Logging boardsList => ", boardsList);

  return (
    <section className={styles.BoardGroup}>
      <header className={styles.BoardGroup__header}>
        <h3>{groupName} Boards</h3>
      </header>
      <hr />
      <section className={styles.BoardGroup__grid}>
        {boardsList &&
          boardsList.map(({ name, key }) => (
            <BoardItem key={key} title={name} id={key} />
          ))}
        <AddBoardItem add={open} />
      </section>
    </section>
  );
};

export default BoardGroup;
