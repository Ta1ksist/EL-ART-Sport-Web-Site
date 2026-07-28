import Link from "next/link";
import styles from "./aboutContact.module.css";

export default function AboutContact() {
  return (
    <section className={styles.contactSection}>
      <div className={styles.centerWrapper}>
        
        <h2 className={styles.title}>Встретимся в Zoom</h2>
        
        {/* <p className={styles.contactDesc}>
          У нас нет физического офиса — мы работаем удалённо по всему миру. 
          Но это не мешает нам проводить детальные встречи, показывать экран, 
          обсуждать чертежи и вдохновляться вместе. 
          Назначьте время — и мы созвонимся в удобный для вас день.
        </p> */}
        
        <Link href="/Contact" className={styles.contactBtn}>
          Назначить встречу
        </Link>

      </div>
    </section>
  );
}
