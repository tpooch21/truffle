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
          open={() => open(name)}
          id={key}
        />
      ))}
      {/* <p>Board List</p> */}
    </div>
  );
};

export default BoardList;
