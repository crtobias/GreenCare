"use client";
import styles from "./page1.module.css";

export default function Page1() {


  return (
    <main className={styles.main}>
        
        <div className={styles.content}>
        <h1 className={styles.title}>GreenCare</h1>
        <h4 className={styles.subtitle}>Cuidando nuestra naturaleza juntos.</h4>
        <p className={styles.text}>Promovemos prácticas sostenibles para un futuro más verde.</p>
        <p className={styles.text2}>Únete a nuestra comunidad y comienza a hacer la diferencia hoy mismo.</p>
        </div>
        <botton className={styles.botton}><p className={styles.bottontext}>unete ahora</p></botton>
        <div className={styles.fondo}></div>
    </main>
  );
}
