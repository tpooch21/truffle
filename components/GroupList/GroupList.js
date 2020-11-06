import styles from "./GroupList.module.css";
import GroupItem from "./GroupItem/GroupItem";
import AddGroupItem from "./GroupItem/AddGroupItem";

const GroupList = ({ groups }) => (
  <section className={styles.GroupList}>
    <header>
      <h4>Groups</h4>
    </header>
    {groups.map((group) => (
      <GroupItem key={group.key} name={group.name} id={group.key} />
    ))}
    <AddGroupItem />
  </section>
);

export default GroupList;
