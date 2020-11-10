import styles from "./BoardList.module.css";
import BoardGroup from "./BoardGroup/BoardGroup";

const BoardList = ({ groups, open }) => {

  return (
    <div className={styles.BoardList}>
      {groups.length > 0 ? groups.map(({ key, name, boards }) => (
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
