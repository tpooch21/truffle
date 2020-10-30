import { useState } from "react";
import Link from "next/link";
import styles from "./BoardsContainer.module.css";
import BoardList from "../../components/BoardList/BoardList";
import GroupList from "../../components/GroupList/GroupList";

const boardList = [
  {
    group: "2InfinityAndBeyond",
    boards: [
      {
        title: "Trevor's Module",
        image: "/mountain.jpg",
      },
    ],
  },
  {
    group: "Job Search",
    boards: [
      {
        title: "Get me a Job",
        image: "/beach.jpg",
      },
    ],
  },
  {
    group: "Muggles",
    boards: [
      {
        title: "Harry Potter Marathon Tracker",
        image: "/forest.jpg",
      },
    ],
  },
];

const BoardsContainer = () => {
  const [boards, addBoard] = useState(boardList);
  const [currentGroup, updateCurrentGroup] = useState(boardList[0]);

  const filterBoardsByGroup = (groupName) => {
    const groupIdx = boards.findIndex(({ group }) => group === groupName);
    updateCurrentGroup(boards[groupIdx]);
  };

  return (
    <div className={styles.BoardsContainer}>
      <GroupList boards={boards} handleGroupSelect={filterBoardsByGroup} />
      <BoardList group={currentGroup.group} boards={currentGroup.boards} />
    </div>
  );
};

export default BoardsContainer;
