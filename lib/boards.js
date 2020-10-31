import { boardData } from "../data/boardData";

export const getAllBoardIds = () => {
  const boardIds = [];
  boardData.forEach(({ boards }) => {
    boards.forEach(({ id }) => {
      boardIds.push(id);
    });
  });

  return boardIds.map((id) => ({
    params: {
      id,
    },
  }));
};
