import { boardList } from "../data/boardData";
import fire from "../firebaseConfig";

export async function getAllBoardIds() {
  const boardsRef = fire.database().ref("boards");
  const boardSnap = await boardsRef.once("value");

  const boardIds = Object.keys(boardSnap.val());

  return boardIds.map((id) => ({
    params: {
      id,
    },
  }));
}

export async function getBoardById(id) {
  const boardRef = fire.database().ref(`boards/${id}`);
  const currentBoard = await boardRef.once("value");

  return {
    id,
    currentBoard: currentBoard.val(),
  };
}
