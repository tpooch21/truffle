import styles from "./BoardItem.module.css";
import Link from "next/link";

const BoardItem = ({ title, image, id }) => {
  return (
    <Link href={`/boards/${id}`}>
      <a className={styles.BoardItem}>{title}</a>
    </Link>
  );
};

export default BoardItem;
