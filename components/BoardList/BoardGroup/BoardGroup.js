import BoardItem from "../BoardItem/BoardItem";
import styles from "./BoardGroup.module.css";
import AddBoardItem from "../BoardItem/AddBoardItem";
import BoardGroupHeader from './BoardGroupHeader';

const BoardGroup = ({ groupName, boards, open, id }) => {
  const boardsList = boards
    ? Object.keys(boards).map((board) => {
        return {
          ...boards[board],
          key: board,
        };
      })
    : null;

  return (
    <section className={styles.BoardGroup}>
      <BoardGroupHeader groupName={groupName} />
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
