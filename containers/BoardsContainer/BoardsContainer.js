import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./BoardsContainer.module.css";
import BoardList from "../../components/BoardList/BoardList";
import GroupList from "../../components/GroupList/GroupList";
import { boardList } from "../../data/boardData";
import Modal from "../../components/UI/Modal/Modal";
import AddItemForm from "../../components/AddItemForms/AddItemForm";
import fire from "../../firebaseConfig";
import { formatJSON } from "../../helpers/formatFirebaseData";

const BoardsContainer = ({ groups, currentGroup = null }) => {
  const [groupList, updateGroupList] = useState(groups);
  const [currentBoardGroup, updateCurrentBoardGroup] = useState(currentGroup);

  // Modal display state
  const [displayModal, toggleDisplayModal] = useState(false);
  /* Modal will be displayed for both board and group additions, so if 'modalForBoard' is true
  it's being displayed for a board, and if it's false, the user is adding a group */
  const [modalForBoard, toggleModalForBoard] = useState(true);

  const [modalGroup, updateModalGroup] = useState("");
  const [userInput, updateUserInput] = useState("");

  useEffect(() => {
    updateCurrentBoardGroup(currentGroup);
  }, [currentGroup]);

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
  const handleSubmit = (isBoard) => {
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
    });

    toggleAddBoardSelected(false);
    updateAddBoardInput("");
    fetchCurrentGroupData();
  };

  const handleAddGroup = () => {
    const groupsRef = fire.database().ref("groups");
    groupsRef.push({
      name: userInput,
    });

    groupsRef.on("value").then((snap) => {
      const mappedGroups = formatJSON(snap.val());
      updateGroupList(mappedGroups);
    });
  };

  /* When a board is added from a groups/[id] page, the pre-rendered data that was passed as props won't be up to date,
     so we need to fetch it on the client side */
  const fetchCurrentGroupData = () => {
    if (currentBoardGroup === null) return;
    else {
      const currentBoard = currentBoardGroup[0];
      const groupRef = fire.database().ref(`groups/${currentBoard.key}`);
      groupRef.once("value").then((snap) => {
        const groupData = snap.val();
        const boardFormatted = [
          {
            ...groupData,
            key: groupData.name,
          },
        ];
        updateCurrentBoardGroup(boardFormatted);
      });
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
        <GroupList groups={groupList} open={() => toggleModalDisplay(null)} />
        <BoardList
          groups={currentBoardGroup || groupList}
          open={toggleModalDisplay}
        />
      </div>
    </>
  );
};

export default BoardsContainer;
