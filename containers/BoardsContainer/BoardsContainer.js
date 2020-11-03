import { useState } from "react";
import Link from "next/link";
import styles from "./BoardsContainer.module.css";
import BoardList from "../../components/BoardList/BoardList";
import GroupList from "../../components/GroupList/GroupList";
import { boardList } from "../../data/boardData";
import Modal from "../../components/UI/Modal/Modal";

const BoardsContainer = ({ groups }) => {
  const [groupList, addGroup] = useState(groups);
  const [currentGroup, updateCurrentGroup] = useState(groups[0]);
  const [addBoardSelected, toggleAddBoardSelected] = useState(false);

  const filterBoardsByGroup = (groupName) => {
    const currIdx = groupList.findIndex((group) => group.name === groupName);
    updateCurrentGroup(groupList[currIdx]);
  };

  return (
    <>
      <Modal show={addBoardSelected} />
      <div className={styles.BoardsContainer}>
        <GroupList groups={groups} handleGroupSelect={filterBoardsByGroup} />
        <BoardList group={currentGroup.name} boards={currentGroup.boards} />
      </div>
    </>
  );
};

export default BoardsContainer;
