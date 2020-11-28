import styles from "./Toolbar.module.css";
import Link from "next/link";

const Toolbar = () => (
  <div className={styles.Toolbar}>
    <header className={styles.ToolbarHeader}>
      <h1>Truffle</h1>
    </header>
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
  </div>
);

export default Toolbar;
