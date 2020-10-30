import { useState } from "react";
import Link from "next/link";
import styles from "./BoardsContainer.module.css";
import BoardList from "../../components/BoardList/BoardList";
import GroupList from "../../components/GroupList/GroupList";

const boardList = [
  {
    group: "2InfinityAndBeyond",
    title: "Trevor's Module",
    image: "/mountain.jpg",
  },
  { group: "Job Search", title: "Get me a Job", image: "/beach.jpg" },
  {
    group: "Muggles",
    title: "Harry Potter Marathon Tracker",
    image: "/forest.jpg",
  },
];

const BoardsContainer = () => {
  const [boards, addBoard] = useState(boardList);

  return (
    <div className={styles.BoardsContainer}>
      <GroupList boards={boards} />
      <BoardList boards={boards} />
    </div>
  );
};

export default BoardsContainer;
