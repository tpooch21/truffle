import styles from "./BoardList.module.css";
import BoardItem from "./BoardItem/BoardItem";

const BoardList = ({ group, boards }) => (
  <section className={styles.BoardList}>
    <header className={styles.BoardList__header}>
      <h3>{group} Boards</h3>
    </header>
    <hr />
    <section className={styles.BoardList__grid}>
      {boards.map(({ id, title, image }) => (
        <BoardItem key={id} title={title} image={image} id={id} />
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
