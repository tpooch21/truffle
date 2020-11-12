import styles from "./GroupList.module.css";
import GroupItem from "./GroupItem/GroupItem";
import AddGroupItem from "./GroupItem/AddGroupItem";
import { useEffect } from "react";

import useGroups from '../../dataHooks/useGroups';
/**
 * Render groupList after fetching group data
 */
const GroupList = ({ open }) => {
  const { data, isLoading, isError } = useGroups();

  if (isLoading) {
    return <p>Loading groups...</p>
  }

  return (
    <section className={styles.GroupList}>
      <header className={styles.GroupList__header}>
        <h1>Groups</h1>
      </header>
      {data.groups.map((group) => (
        <GroupItem key={group.key} name={group.name} id={group.key} />
      ))}
      <AddGroupItem open={open} />
    </section>
  );
};

export default GroupList;
