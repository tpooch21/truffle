import styles from "./GroupList.module.css";
import GroupItem from "./GroupItem/GroupItem";

const GroupList = ({ boards, handleGroupSelect }) => (
  <section className={styles.GroupList}>
    <header>
      <h4>Groups</h4>
    </header>
    {boards.map(({ group }) => (
      <GroupItem
        key={group}
        name={group}
        onClick={() => handleGroupSelect(group)}
      />
    ))}
  </section>
);

export default GroupList;
