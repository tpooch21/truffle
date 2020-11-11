import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./BoardsContainer.module.css";
import BoardList from "../../components/BoardList/BoardList";
import GroupList from "../../components/GroupList/GroupList";
import Modal from "../../components/UI/Modal/Modal";
import AddItemForm from "../../components/AddItemForms/AddItemForm";
import fire from "../../firebaseConfig";
import { formatJSON } from "../../helpers/formatFirebaseData";
import { getGroupDataById } from "../../helpers/firebaseQueries.js";
import  { mutate } from 'swr';

const BoardsContainer = ({ groups, currentGroup = null }) => {
  // Modal display state
  const [displayModal, toggleDisplayModal] = useState(false);
  /* Modal will be displayed for both board and group additions, so if 'modalForBoard' is true
  it's being displayed for a board, and if it's false, the user is adding a group */
  const [modalForBoard, toggleModalForBoard] = useState(true);

  const [modalGroup, updateModalGroup] = useState("");
  const [userInput, updateUserInput] = useState("");

  const toggleModalDisplay = (groupName) => {
    /**
     * If a groupName is passed in, that means the user is on the main board page, adding a board
     * The groupName arg specifies which group the board should be added to in firebase when it's submitted
     *
     * If there's no groupName, we know the modal is either being closed, or a group is being added (not a board)
     * */
    const groupIdx = groupName
      ? groupList.findIndex((group) => group.name === groupName)
      : null;
    const group = groupIdx !== null ? groupList[groupIdx] : null;

    // As noted above, if there's a group being passed in, the add board modal should be displayed
    const isBoardModal = groupName !== null;

    // If modal is being closed (meaning displayModal is true), no need to determine whether a board or group modal should be displayed next
    if (!displayModal) toggleModalForBoard(isBoardModal);
    toggleDisplayModal(!displayModal);
    if (group) updateModalGroup(group);
  };

  const handleUserInput = (e) => {
    updateUserInput(e.target.value);
  };

  // delegates duties to the appropriate handler, based on whether a board or group is being added
  const handleSubmit = (e, isBoard) => {
    e.preventDefault();
    if (isBoard) handleAddBoard();
    else handleAddGroup();
  };

  const handleAddBoard = () => {
    // Create new board in firebase under boards collection
    const boardsRef = fire.database().ref("boards");
    const newBoard = boardsRef.push();
    newBoard.set({
      name: userInput,
      groupId: modalGroup.key,
      groupName: modalGroup.name,
    });

    // Add board to boards child of current group
    const groupsRef = fire
      .database()
      .ref(`groups/${modalGroup.key}`)
      .child("boards");
    groupsRef.update({
      [newBoard.key]: {
        name: userInput,
      },
    });

    // Fetch new group and board data from firebase following board addition
    const allGroupsRef = fire.database().ref("groups");
    allGroupsRef.on("value", (snap) => {
      const mappedGroups = formatJSON(snap.val());
      // update groupList to display newly-added board following state update
      updateGroupList(mappedGroups);
      toggleDisplayModal(false);
      updateUserInput("");
      fetchCurrentGroupData();
    });

  };

  const handleAddGroup = () => {
    const postData = { name: userInput }
    fetch('http://localhost:3000/api/groups', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData)
    })
    .then(() => {
      toggleModalDisplay(false);
      updateUserInput('');
      mutate('http://localhost:3000/api/groups');
    })
    .catch(err => console.log(err));
  };

  /* When a board is added from a groups/[id] page, the pre-rendered data that was passed as props won't be up to date,
     so we need to fetch it on the client side */
  async function fetchCurrentGroupData() {
    if (currentBoardGroup === null) return;
    else {
      const currentBoard = currentBoardGroup[0];
      fetch(`http://localhost:3000/api/group/${currentBoard.key}`)
        .then(res => res.json())
        .then(data => {
          const formattedGroup = [
            {
              ...data.group,
              key: currentBoard.key
            },
          ];
          updateCurrentBoardGroup(boardFormatted);
        })
        // ADD ERROR HANDLER TO STATE
        .catch(err => console.log(err));
    }
  };

  return (
    <>
      <AddItemForm
        input={userInput}
        onUserInput={handleUserInput}
        onSubmit={handleSubmit}
        show={displayModal}
        close={() => toggleModalDisplay(null)}
        addBoard={modalForBoard}
        modalGroupName={modalGroup.name}
      />
      <div className={styles.BoardsContainer}>
        <GroupList open={() => toggleModalDisplay(null)} />
        <BoardList
          open={toggleModalDisplay}
        />
      </div>
    </>
  );
};

export default BoardsContainer;
