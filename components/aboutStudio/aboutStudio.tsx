import styles from "./aboutStudio.module.css";

export default function AboutStudio() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroCenterWrapper}>
        <div className={styles.heroGrid}>
          
          <div className={styles.heroLeft}>
            <div className={styles.eyebrow}>О студии</div>
            <h1 className={styles.mainTitle}>
              Проектируем пространства для бизнеса,<br />
              <span className={styles.italicText}>
                где функция управляет красотой.
              </span>
            </h1>
          </div>
        
          <div className={styles.heroRight}>
            <p className={styles.heroDesc}>
              Студия EL'ART была основана Элиной Закировой как проектное бюро с фокусом на глубокой проработке каждого проекта. 
              Мы осознанно сохраняем формат дизайн-бутика с четкой внутренней структурой:
               наши ресурсы позволяют реализовывать масштабные коммерческие объекты, 
               сохраняя при этом персональный контроль над процессами. 
               Слаженная команда экспертов ведет каждый спортивный комплекс или интерьер комплексно — от первого эскиза до авторского надзора.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
