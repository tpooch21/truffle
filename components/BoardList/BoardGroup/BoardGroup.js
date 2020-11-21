import BoardItem from "../BoardItem/BoardItem";
import styles from "./BoardGroup.module.css";
import AddBoardItem from "../BoardItem/AddBoardItem";
import BoardGroupHeader from "./BoardGroupHeader";
import LoadingBoardItem from "../BoardItem/LoadingBoardItem";

const BoardGroup = ({ groupName, boards, open, id, loading }) => {
  // Construct boardList from boards object, they need to have access to their boardIds (keys) so that they can fetch the appopriate data when clicked on
  const boardsList = boards
    ? Object.keys(boards).map((board) => {
        return {
          ...boards[board],
          key: board,
        };
      })
    : null;

  // If loading, we'll render some empty board shadows instead of an AddBoardItem (boardsList will already be null)
  // groupName will be 'Loading Boards'
  // Could use an additional 'Loading Boards' header component
  const alternateContent = loading ? (
    [<LoadingBoardItem />, <LoadingBoardItem />, <LoadingBoardItem />]
  ) : (
    <AddBoardItem add={open} />
  );

  return (
    <section className={styles.BoardGroup}>
      <BoardGroupHeader groupName={groupName} loading={loading} />
      <hr />
      <section className={styles.BoardGroup__grid}>
        {boardsList &&
          boardsList.map(({ name, img, key }) => (
            <BoardItem key={key} img={img} title={name} id={key} />
          ))}
        {alternateContent}
      </section>
    </section>
  );
};

export default BoardGroup;
