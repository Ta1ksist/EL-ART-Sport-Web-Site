import Link from "next/link";
import styles from "./servicesCta.module.css";

export default function ServicesCta() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.centerWrapper}>
        
        <h2 className={styles.ctaTitle}>Готовы обсудить проект?</h2>
        
        <p className={styles.ctaDesc}>
          Каждый успешный спортивный комплекс начинается с детального диалога. 
          Расскажите нам о ваших планах на пространство, и мы предложим оптимальные решения.
        </p>
        
        <Link href="/Contact" className={styles.ctaBtn}>
          Записаться на консультацию
        </Link>

      </div>
    </section>
  );
}
