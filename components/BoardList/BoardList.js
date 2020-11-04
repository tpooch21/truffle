import styles from "./BoardList.module.css";
import BoardGroup from "./BoardGroup/BoardGroup";

const BoardList = ({ groups, open }) => {
  return (
    <div className={styles.BoardList}>
      {groups.map(({ key, name, boards }) => (
        <BoardGroup
          key={key}
          groupName={name}
          boards={boards}
          open={() => open(true, name)}
          id={key}
        />
      ))}
    </div>
  );
};

export default BoardList;
