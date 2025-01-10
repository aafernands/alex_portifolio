import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {

  const currentDate = new Date().getFullYear()

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Welcome to Portfolio Page!</h1>
      </main>
      <footer className={styles.footer}>
        <p> © {currentDate} | FNDS Labs All rights reserved.
        </p>
      </footer>
    </div>
  );
}
