import styles from "./BoardItem.module.css";
import Link from "next/link";

const BoardItem = ({ title, img, id }) => {
  return (
    <Link href={`/boards/${id}`}>
      <a
        className={styles.BoardItem}
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
        }}
      >
        {title}
      </a>
    </Link>
  );
};

export default BoardItem;
