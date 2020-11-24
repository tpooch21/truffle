import styles from "./Toolbar.module.css";
import Link from "next/link";

const Toolbar = () => (
  <div className={styles.Toolbar}>
    <div className={styles.TbButtonWrapper}>
      <Link href="/">
        <a>
          <button className={styles.ToolbarButton}>Home</button>
        </a>
      </Link>
      <Link href="/boards">
        <a>
          <button className={styles.ToolbarButton}>Boards</button>
        </a>
      </Link>
    </div>
    <h1>Truffle</h1>
    <div className={styles.logo}></div>
  </div>
);

export default Toolbar;
