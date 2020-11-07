import styles from "./GroupList.module.css";
import GroupItem from "./GroupItem/GroupItem";
import AddGroupItem from "./GroupItem/AddGroupItem";
import { useEffect } from "react";
const GroupList = ({ groups }) => {
  useEffect(() => {
    console.log("GroupList is re-rendering");
  }, [groups]);

  return (
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
};

export default GroupList;
