import { useState } from "react";
import Link from "next/link";
import styles from "./BoardsContainer.module.css";

const boardList = ["2InfinityAndBeyond", "Job Search"];

const BoardsContainer = () => {
  const [boards, addBoard] = useState(boardList);

  return (
    <div className={styles.BoardsContainer}>
      <ul>
        {boards.map((board) => (
          <li>{board}</li>
        ))}
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </ul>
    </div>
  );
};

export default BoardsContainer;
