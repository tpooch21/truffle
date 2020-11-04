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
  const [currentGroup, selectCurrentGroup] = useState(null);
  const [addBoardInput, updateAddBoardInput] = useState("");

  const toggleModalDisplay = (val, groupName) => {
    // If modal is being closed, no need to search for selected group, and currentGroup is set to null
    const groupIdx = groupName
      ? groupList.findIndex((group) => group.name === groupName)
      : null;
    const group = groupIdx !== null ? groupList[groupIdx] : null;

    toggleAddBoardSelected(val);
    selectCurrentGroup(group);
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
      const mappedGroups = formatJSON(snap.val());

      // update groupList to display newly-added board following state update
      updateGroupList(mappedGroups);
    });

    toggleAddBoardSelected(false);
    updateAddBoardInput("");
  };

  return (
    <>
      <Modal
        show={addBoardSelected}
        close={() => toggleModalDisplay(false, null)}
        currentGroup={currentGroup}
      >
        <header>
          <h2>Add Board to {currentGroup ? currentGroup.name : ""}</h2>
        </header>
        <AddBoardForm
          input={addBoardInput}
          onUserInput={handleUserInput}
          onSubmit={handleAddBoard}
        />
      </Modal>
      <div className={styles.BoardsContainer}>
        <GroupList groups={groupList} />
        <BoardList groups={groupList} open={toggleModalDisplay} />
      </div>
    </>
  );
};

export default BoardsContainer;
