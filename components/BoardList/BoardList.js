import styles from "./BoardList.module.css";
import BoardItem from "./BoardItem/BoardItem";

const BoardList = ({ boards }) => (
  <section className={styles.BoardList}>
    <header className={styles.BoardList__header}>
      <h3>Group X Boards</h3>
    </header>
    <hr />
    <section className={styles.BoardList__grid}>
      {boards.map(({ title, image }) => (
        <BoardItem title={title} image={image} />
      ))}
    </section>
  </section>
);

export default BoardList;
