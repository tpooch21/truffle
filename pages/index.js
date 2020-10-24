import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout/Layout";
import HomeContainer from "../containers/HomeContainer/HomeContainer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Layout>
        <HomeContainer />
      </Layout>
    </div>
  );
}
