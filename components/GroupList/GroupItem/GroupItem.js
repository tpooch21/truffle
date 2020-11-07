import styles from "./GroupItem.module.css";
import Link from "next/link";

const GroupItem = ({ name, id }) => (
  <Link href={`/groups/${id}/`}>
    <a className={styles.GroupItem}>{name}</a>
  </Link>
);

export default GroupItem;
