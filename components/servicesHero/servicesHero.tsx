import styles from "./servicesHero.module.css";

export default function ServicesHero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroCenterWrapper}>
        <div className={styles.heroGrid}>
          
          <div className={styles.heroLeft}>
            <div className={styles.eyebrow}>Наши Услуги</div>
            <h1 className={styles.mainTitle}>
              Полный цикл ведения проекта — от идеи до запуска.
            </h1>
          </div>
          
          <div className={styles.heroRight}>
            <p className={styles.heroDesc}>
             Гибкий формат работы под ваш бюджет и задачи. 
             Каждое направление доступно как самостоятельная услуга или в 
             рамках единого комплексного проекта «под ключ».
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
