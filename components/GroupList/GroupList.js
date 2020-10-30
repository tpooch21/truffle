import styles from "./GroupList.module.css";
import GroupItem from "./GroupItem/GroupItem";

const GroupList = ({ boards }) => (
  <section className={styles.GroupList}>
    <header>
      <h4>Groups</h4>
    </header>
    {boards.map(({ group }) => (
      <GroupItem name={group} />
    ))}
  </section>
);

export default GroupList;
