import styles from "./BoardList.module.css";
import BoardItem from "./BoardItem/BoardItem";

const BoardList = ({ group, boards }) => (
  <section className={styles.BoardList}>
    <header className={styles.BoardList__header}>
      <h3>{group} Boards</h3>
    </header>
    <hr />
    <section className={styles.BoardList__grid}>
      {boards.map(({ title, image }) => (
        <BoardItem key={title} title={title} image={image} />
      ))}
    </section>
  </section>
);

export default BoardList;

// {
//   group: "2InfinityAndBeyond",
//   boards: [
//     {
//       title: "Trevor's Module",
//       image: "/mountain.jpg",
//     },
//   ],
// },
