import styles from "./BoardList.module.css";
import BoardGroup from "./BoardGroup/BoardGroup";
import useGroups from "../../dataHooks/useGroups";
/**
 * Render boardList after fetching board data (by group)
 */
const BoardList = ({ currentGroupId, open }) => {
  const { data, isLoading, isError } = useGroups(currentGroupId);

  // Should be displayed if user hasn't selected a specific group
  const allBoardsHeader = (
    <header className={styles.allBoardsHeader}>
      <h1>All Boards</h1>
    </header>
  );

  // If boards are still being fetched (isLoading is true), signal to BoardGroup that the special 'loading' board group should be rendered
  // Otherwise, perform the standard operation of mapping over the boards by group, and creating a BoardGroup for each group
  const content = isLoading ? (
    <BoardGroup groupName="Loading" loading={true} />
  ) : data.groups.length > 0 ? (
    data.groups.map(({ key, name, boards }) => (
      <BoardGroup
        key={key}
        groupName={name}
        boards={boards}
        open={() => open(key, name)}
        id={key}
      />
    ))
  ) : (
    <>
      <h2 className={styles.addGroupMessage}>
        Add a Group to Start Creating Boards!
      </h2>
      <hr />
    </>
  );

  return (
    <div className={styles.BoardList}>
      {!currentGroupId && !isLoading && allBoardsHeader}
      {content}
    </div>
  );
};

export default BoardList;
