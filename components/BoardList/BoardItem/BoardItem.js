import styles from "./BoardItem.module.css";
import Link from "next/link";

const BoardItem = ({ title, image, id }) => (
  <Link href={`/boards/${id}`}>
    <a
      className={styles.BoardItem}
      style={{ backgroundImage: `url(${image})` }}
    >
      {title}
    </a>
  </Link>
);

export default BoardItem;
