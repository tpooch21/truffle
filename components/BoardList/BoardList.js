import styles from "./BoardList.module.css";
import BoardItem from "./BoardItem/BoardItem";

const BoardList = ({ boards }) => (
  <section className={styles.BoardList}>
    <header>
      <h3>Group X Boards</h3>
    </header>
    {boards.map(({ title }) => (
      <BoardItem title={title} />
    ))}
  </section>
);

export default BoardList;
