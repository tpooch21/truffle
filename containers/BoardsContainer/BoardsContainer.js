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

const BoardsContainer = ({ groups, currentGroup = null }) => {
  const [groupList, updateGroupList] = useState(groups);
  const [addBoardSelected, toggleAddBoardSelected] = useState(false);
  const [currentBoardGroup, updateCurrentBoardGroup] = useState(currentGroup);

  const [modalGroup, updateModalGroup] = useState("");
  const [addBoardInput, updateAddBoardInput] = useState("");
  const [addGroupInput, updateAddGroupInput] = useState("");

  useEffect(() => {
    updateCurrentBoardGroup(currentGroup);
  }, [currentGroup]);

  const toggleModalDisplay = (val, groupName) => {
    // If modal is being closed, no need to search for selected group, and currentGroup is set to null
    const groupIdx = groupName
      ? groupList.findIndex((group) => group.name === groupName)
      : null;
    const group = groupIdx !== null ? groupList[groupIdx] : null;

    toggleAddBoardSelected(val);
    updateModalGroup(group);
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
    fetchCurrentGroupData();
  };

  const handleAddGroup = () => {
    const groupsRef = fire.database().ref("groups");
    groupsRef.push({
      name: addGroupInput,
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
      <Modal
        show={addBoardSelected}
        close={() => toggleModalDisplay(false, null)}
      >
        <header>
          <h2>Add Board to {modalGroup ? modalGroup.name : ""}</h2>
        </header>
        <AddBoardForm
          input={addBoardInput}
          onUserInput={handleUserInput}
          onSubmit={handleAddBoard}
        />
      </Modal>
      <div className={styles.BoardsContainer}>
        <GroupList groups={groupList} />
        <BoardList
          groups={currentBoardGroup || groupList}
          open={toggleModalDisplay}
        />
      </div>
    </>
  );
};

export default BoardsContainer;
