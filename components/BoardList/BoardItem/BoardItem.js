import styles from "./BoardItem.module.css";

const BoardItem = ({ title, image }) => (
  <button
    className={styles.BoardItem}
    style={{ backgroundImage: `url(${image})` }}
  >
    <p>{title}</p>
  </button>
);

export default BoardItem;
