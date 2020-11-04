import { boardList } from "../data/boardData";

export const getAllBoardIds = () => {
  const boardIds = [];
  boardList.forEach(({ boards }) => {
    boards.forEach(({ id }) => {
      boardIds.push(id);
    });
  });

  return boardIds.map((id) => ({
    params: {
      id: id.toString(),
    },
  }));
};

export const getBoardById = (id) => {
  let currentBoard;
  id = parseInt(id);
  boardList.forEach(({ boards }) => {
    boards.forEach((board) => {
      if (board.id === id) currentBoard = board;
    });
  });

  return {
    id,
    currentBoard,
  };
};
