import styles from "./GroupList.module.css";
import GroupItem from "./GroupItem/GroupItem";
import AddGroupItem from "./GroupItem/AddGroupItem";
import AllBoardsItem from "./GroupItem/AllBoardsItem";
import { useEffect } from "react";
import EmptyGroupItem from "./GroupItem/EmptyGroupItem";

import useGroups from "../../dataHooks/useGroups";
/**
 * Render groupList after fetching group data
 */
const GroupList = ({ open }) => {
  const { data, isLoading, isError } = useGroups();

  const content = isLoading ? (
    [<EmptyGroupItem />, <EmptyGroupItem />, <EmptyGroupItem />]
  ) : (
    <>
      <AllBoardsItem />
      {data.groups.map((group) => (
        <GroupItem key={group.key} name={group.name} id={group.key} />
      ))}
      <AddGroupItem open={open} />
    </>
  );

  return (
    <section className={styles.GroupList}>
      <header className={styles.GroupList__header}>
        {isLoading && (
          <img
            src={"/spinner.svg"}
            alt="loading spinner"
            style={{ height: "2.5rem", width: "2.5rem" }}
          />
        )}
        <h1>{isLoading ? "Loading Groups" : "Groups"}</h1>
      </header>
      {content}
    </section>
  );
};

export default GroupList;
