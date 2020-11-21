import styles from "./BoardItem.module.css";

const LoadingBoardItem = () => {
  const addBoardClasses = [styles.BoardItem, styles.addBoard];
  return <button className={addBoardClasses.join(" ")}></button>;
};

export default LoadingBoardItem;
