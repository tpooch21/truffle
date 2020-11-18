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
import { mutate } from "swr";

const BoardsContainer = ({ currentGroupId = null }) => {
  // Modal display state
  const [displayModal, toggleDisplayModal] = useState(false);
  /* Modal will be displayed for both board and group additions, so if 'modalForBoard' is true
  it's being displayed for a board, and if it's false, the user is adding a group */
  const [modalForBoard, toggleModalForBoard] = useState(true);
  const [modalGroup, updateModalGroup] = useState("");
  const [userInput, updateUserInput] = useState("");

  const toggleModalDisplay = (key, name) => {
    /* If a group key is being passed as an arg, then the function was called from the 'Add Board' handler. modalForBoard should be set to true */
    const isBoardModal = key !== undefined;

    // If modal is being closed (meaning displayModal is true), no need to determine whether a board or group modal should be displayed next
    if (!displayModal) toggleModalForBoard(isBoardModal);

    toggleDisplayModal(!displayModal);
    if (key) updateModalGroup({ key, name });
  };

  const handleUserInput = (e) => {
    updateUserInput(e.target.value);
  };

  // delegates duties to the appropriate handler, based on whether a board or group is being added
  const handleSubmit = (e, isBoard, imgPath) => {
    e.preventDefault();
    if (isBoard) handleAddBoard(imgPath);
    else handleAddGroup();
  };

  const handleAddBoard = (img) => {
    // Create new board in firebase under boards collection
    const boardData = {
      name: userInput,
      groupId: modalGroup.key,
      groupName: modalGroup.name,
      img: img,
    };
    fetch("http://localhost:3000/api/boards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(boardData),
    })
      .then((res) => res.json())
      .then((data) => {
        const patchBody = {
          boardId: data.boardKey,
          boardName: userInput,
          img: img,
        };
        fetch(`http://localhost:3000/api/group/${modalGroup.key}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(patchBody),
        })
          .then((res) => {
            console.log("Board added!");
            toggleDisplayModal(false);
            updateUserInput("");
            mutate("http://localhost:3000/api/groups");
          })
          .catch((err) => console.log(err.message));
      });
  };

  const handleAddGroup = () => {
    const postData = { name: userInput };
    fetch("http://localhost:3000/api/groups", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then(() => {
        toggleDisplayModal(false);
        updateUserInput("");
        mutate("http://localhost:3000/api/groups");
      })
      .catch((err) => console.log(err));
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
        <GroupList open={() => toggleModalDisplay()} />
        <BoardList currentGroupId={currentGroupId} open={toggleModalDisplay} />
      </div>
    </>
  );
};

export default BoardsContainer;
