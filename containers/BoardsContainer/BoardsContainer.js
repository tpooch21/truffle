import { useState } from "react";
import Link from "next/link";
import styles from "./BoardsContainer.module.css";
import BoardList from "../../components/BoardList/BoardList";
import GroupList from "../../components/GroupList/GroupList";
import { boardList } from "../../data/boardData";

const BoardsContainer = ({ groups }) => {
  const [boards, addBoard] = useState(boardList);
  const [currentGroup, updateCurrentGroup] = useState(boardList[0]);

  const filterBoardsByGroup = (groupName) => {
    const groupIdx = boards.findIndex(({ group }) => group === groupName);
    updateCurrentGroup(boards[groupIdx]);
  };

  return (
    <div className={styles.BoardsContainer}>
      <GroupList groups={groups} handleGroupSelect={filterBoardsByGroup} />
      <BoardList group={currentGroup.group} boards={currentGroup.boards} />
    </div>
  );
};

export default BoardsContainer;
