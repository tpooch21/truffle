import styles from "./Layout.module.css";
import Toolbar from "../Toolbar/Toolbar";
import Head from "next/head";

const Layout = ({ children }) => (
  <div className={styles.Layout}>
    <Head>
      <meta charset="utf-8" />
      <title>Truffle</title>
      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css2?family=Satisfy&display=swap"
        rel="stylesheet"
      />
    </Head>
    <header className={styles.header}>
      <Toolbar />
    </header>
    <main className={styles.main}>{children}</main>
  </div>
);

export default Layout;
