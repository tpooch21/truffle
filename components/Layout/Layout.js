import styles from "./Layout.module.css";
import Toolbar from "../Toolbar/Toolbar";

const Layout = ({ children }) => (
  <div className={styles.Layout}>
    <header className={styles.header}>
      <Toolbar />
    </header>
    <main className={styles.main}>{children}</main>
  </div>
);

export default Layout;
