import Link from 'next/link';
import styles from './cta.module.css';

export default function CTA() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        
        <h2 className={styles.title}>
          Хотите открыть спортивный комплекс? 
          <br />
          <span className={styles.italicText}>Давайте обсудим</span>
        </h2>
        
        <div className={styles.buttonGroup}>
          <Link href="/Contact" className={`${styles.btnBase} ${styles.btnPrimary}`}>
            Оставить заявку
          </Link>
          
          {/* <a href="#" className={`${styles.btnBase} ${styles.btnSecondary}`}>
            Скачать коммерческое предложение ↓
          </a> */}
        </div>

      </div>
    </section>
  );
}
