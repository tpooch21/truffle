import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout/Layout";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Truffle</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <h1>This is Going to be Our Home Page</h1>
        <Link href="/boards">
          <a>View Boards</a>
        </Link>
      </Layout>
    </div>
  );
}
