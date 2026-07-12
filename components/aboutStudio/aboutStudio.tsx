import styles from "./aboutStudio.module.css";

export default function AboutStudio() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroCenterWrapper}>
        <div className={styles.heroGrid}>
          <div className={styles.heroLeft}>
            <div className={styles.eyebrow}>О студии</div>
            <h1 className={styles.mainTitle}>
              Небольшая студия,<br />
              <span className={styles.italicText}>по замыслу.</span>
            </h1>
          </div>
        
          <div className={styles.heroRight}>
            <p className={styles.heroDesc}>
              Студия EL'ART была основана Элиной Закировой как камерное проектное бюро, 
              где фокус смещен с количества объектов на их исключительное качество. 
              Мы осознанно сохраняем формат бутика: каждый спортивный комплекс или 
              коммерческий интерьер проходит через одни руки — от первых эскизов и 
              финансовых расчетов до финального авторского надзора на строительной площадке.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
