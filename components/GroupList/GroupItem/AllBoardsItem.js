import styles from "./GroupItem.module.css";
import Link from "next/link";
import { HiOutlineClipboard } from "react-icons/hi";
import { IconContext } from "react-icons";

const AllBoardsItem = ({ name, id }) => (
  <IconContext.Provider value={{ size: "1.3rem" }}>
    <Link href={`/boards`}>
      <a className={`${styles.GroupItem} ${styles.allBoardsLink}`}>
        <HiOutlineClipboard />
        <p style={{ marginLeft: "0.5rem" }}>All Boards</p>
      </a>
    </Link>
  </IconContext.Provider>
);

export default AllBoardsItem;
