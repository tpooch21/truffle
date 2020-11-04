import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./BoardsContainer.module.css";
import BoardList from "../../components/BoardList/BoardList";
import GroupList from "../../components/GroupList/GroupList";
import { boardList } from "../../data/boardData";
import Modal from "../../components/UI/Modal/Modal";
import AddBoardForm from "../../components/AddBoardForm/AddBoardForm";
import fire from "../../firebaseConfig";
import { formatJSON } from "../../helpers/formatFirebaseData";

const BoardsContainer = ({ groups }) => {
  const [groupList, updateGroupList] = useState(groups);
  const [addBoardSelected, toggleAddBoardSelected] = useState(false);
  const [addBoardInput, updateAddBoardInput] = useState("");

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

    // Add board to boards child of current group
    const groupsRef = fire
      .database()
      .ref(`groups/${currentGroup.key}`)
      .child("boards");
    groupsRef.update({
      [newBoard.key]: {
        name: addBoardInput,
      },
    });

    // Fetch new group and board data from firebase following board addition
    const allGroupsRef = fire.database().ref("groups");
    allGroupsRef.on("value", (snap) => {
      console.log("Is this running? ");
      const mappedGroups = formatJSON(snap.val());
      updateGroupList(mappedGroups);
    });

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
        <GroupList groups={groupList} />
        <BoardList groups={groupList} open={() => toggleModalDisplay(true)} />
      </div>
    </>
  );
};

export default BoardsContainer;
