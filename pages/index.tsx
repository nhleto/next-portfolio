import type { NextPage } from "next";
import Header from "../components/Header";
import styles from "../styles/Home.module.scss"

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <div className={styles.divider}></div>
    </>
  );
};

export default Home;
