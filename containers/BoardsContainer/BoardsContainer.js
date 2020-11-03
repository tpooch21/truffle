import { useState } from "react";
import Link from "next/link";
import styles from "./BoardsContainer.module.css";
import BoardList from "../../components/BoardList/BoardList";
import GroupList from "../../components/GroupList/GroupList";
import { boardList } from "../../data/boardData";
import Modal from "../../components/UI/Modal/Modal";
import AddBoardForm from "../../components/AddBoardForm/AddBoardForm";
import fire from "../../firebaseConfig";

const BoardsContainer = ({ groups }) => {
  const [groupList, addGroup] = useState(groups);
  const [currentGroup, updateCurrentGroup] = useState(groups[0]);
  const [addBoardSelected, toggleAddBoardSelected] = useState(false);
  const [addBoardInput, updateAddBoardInput] = useState("");

  const filterBoardsByGroup = (groupName) => {
    const currIdx = groupList.findIndex((group) => group.name === groupName);
    updateCurrentGroup(groupList[currIdx]);
  };

  const toggleModalDisplay = (val) => {
    toggleAddBoardSelected(val);
  };

  const handleUserInput = (e) => {
    updateAddBoardInput(e.target.value);
  };

  const handleAddBoard = () => {
    // Create new board in firebase under boards collection
    const boardsRef = fire.database().ref("boards");
    const newBoard = boardsRef.push();
    newBoard.set({
      name: addBoardInput,
      groupId: currentGroup.key,
      groupName: currentGroup.name,
    });

    //
    const groupsRef = fire
      .database()
      .ref(`groups/${currentGroup.key}`)
      .child("boards");
    groupsRef.update({ [newBoard.key]: true });

    toggleAddBoardSelected(false);
  };

  return (
    <>
      <Modal show={addBoardSelected} close={() => toggleModalDisplay(false)}>
        <AddBoardForm
          input={addBoardInput}
          onUserInput={handleUserInput}
          onSubmit={handleAddBoard}
        />
      </Modal>
      <div className={styles.BoardsContainer}>
        <GroupList groups={groups} handleGroupSelect={filterBoardsByGroup} />
        <BoardList
          group={currentGroup.name}
          boards={currentGroup.boards}
          open={() => toggleModalDisplay(true)}
        />
      </div>
    </>
  );
};

export default BoardsContainer;
