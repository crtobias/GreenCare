"use client";
import { useState } from "react";
import styles from "./page2.module.css";

export default function Page2() {
  const [BackChange, setBackChange] = useState("fondo1");

  const handleClick = () => {
    switch (BackChange) {
      case "fondo3":
        setBackChange("fondo1");
        break;
      case "fondo1":
        setBackChange("fondo2");
        break;
      case "fondo2":
        setBackChange("fondo3");
        break;
      default:
        setBackChange("fondo1");
        break;
    }
  };

  return (
    <main className={styles.main}>

      <div className={styles.container}>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id maxime corporis similique dicta nostrum corrupti in cupiditate! Dolorum amet provident temporibus adipisci rerum. Ipsum vero blanditiis repellendus consequuntur soluta doloremque!</p>
        <button className={styles.button} onClick={handleClick}>
          random fondo
        </button>
      </div>


      <div className={`${styles.fondo1} ${styles[BackChange]}`}></div>
    </main>
  );
}
