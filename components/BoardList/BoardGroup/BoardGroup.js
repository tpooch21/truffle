import BoardItem from "../BoardItem/BoardItem";
import styles from "./BoardGroup.module.css";
import AddBoardItem from "../BoardItem/AddBoardItem";
import { BsPeopleFill } from 'react-icons/bs';

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
      <header className={styles.BoardGroup__header}>
        <BsPeopleFill style={{ height: "1.2em", width: "1.2em", marginRight: '5px' }}/>
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
