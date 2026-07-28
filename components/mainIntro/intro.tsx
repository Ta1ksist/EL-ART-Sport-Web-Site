import styles from "./intro.module.css";

export default function Intro() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>

        <div className={styles.eyebrow}>Наша студия</div>

        <div>
          <p className={styles.description}>
            В каждый проект мы вкладываем знания, профессиональные навыки, душу и любовь. 
            Создаём жилые и общественные пространства с уникальным стилем и продуманной функциональностью.
          </p>
          
          {/* <div className={styles.statsGroup}>
            <div>
              <div className={styles.statNumber}>10 000+</div>
              <div className={styles.statLabel}>Квадратных метров</div>
            </div>
          </div> */}
        </div>

      </div>
    </section>
  );
}
