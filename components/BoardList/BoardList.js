import styles from "./BoardList.module.css";
import BoardGroup from "./BoardGroup/BoardGroup";
import useGroups from '../../dataHooks/useGroups';
/**
 * Render boardList after fetching board data (by group)
 */
const BoardList = ({ currentGroupId, open }) => {
  const { data, isLoading, isError } = useGroups(currentGroupId);

  if (isLoading) return <p>BoardList is Loading...</p>

  return (
    <div className={styles.BoardList}>
      {data.groups.length > 0 ? data.groups.map(({ key, name, boards }) => (
        <BoardGroup
          key={key}
          groupName={name}
          boards={boards}
          open={() => open(name)}
          id={key}
        />
      )) :
      <>
        <h2 className={styles.addGroup}>Add a Group to Start Creating Boards!</h2>
        <hr />
      </>}
    </div>
  );
};

export default BoardList;
