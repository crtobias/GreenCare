"use client";
import styles from "./page.module.css";
import Page1 from "./Pages/page1/page1";
import Page2 from "./Pages/page2/page2";

export default function Home() {

  return (
    <main className={styles.main}>
      <Page1/>
      <Page2/>
    </main>
  );
}
