import styles from "./GroupItem.module.css";
import Link from "next/link";

const GroupItem = ({ name, id }) => (
  <Link href={`/groups/${id}/`}>
    <a className={styles.GroupItem}><p>{name}</p></a>
  </Link>
);

export default GroupItem;
