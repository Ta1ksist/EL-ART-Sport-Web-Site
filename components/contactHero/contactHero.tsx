import styles from "./contactHero.module.css";

export default function ContactHero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroCenterWrapper}>
        <div className={styles.heroGrid}>
          
          <div className={styles.heroLeft}>
            <div className={styles.eyebrow}>Контакты</div>
            <h1 className={styles.mainTitle}>
              Расскажите нам<br />о вашем проекте.
            </h1>
          </div>
          
          <div className={styles.heroRight}>
            <p className={styles.heroDesc}>
              Мы изучаем каждый запрос и отвечаем в течение двух рабочих дней. 
              Если вы хотите сразу обсудить задачу голосом, свяжитесь с нашей студией с понедельника по пятницу, с 08:00 до 18:00.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
