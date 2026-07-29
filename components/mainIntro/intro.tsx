import styles from "./intro.module.css";

export default function Intro() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <div className={styles.eyebrow}>Наша студия</div>
        <div>
          <p className={styles.description}>
            Проектируем спортивные комплексы и коммерческие объекты любого масштаба. 
            Объединяем строгие технологические стандарты, эргономику и уникальный визуальный стиль. 
            Реализуем проекты под ключ: от первой концепции до финальной сдачи объекта.
          </p>
        </div>
      </div>
    </section>
  );
}
