import styles from "./GroupList.module.css";
import GroupItem from "./GroupItem/GroupItem";

const GroupList = ({ groups, handleGroupSelect }) => (
  <section className={styles.GroupList}>
    <header>
      <h4>Groups</h4>
    </header>
    {groups.map((group) => (
      <GroupItem
        key={group.name}
        name={group.name}
        onClick={() => handleGroupSelect(group.name)}
      />
    ))}
  </section>
);

export default GroupList;
