import styles from "./servicesRoadmap.module.css";

interface RoadmapItem {
  n: string;
  t: string; 
  d: string; 
}

const roadmap: RoadmapItem[] = [
  {
    n: "01",
    t: "Исследование и концепт",
    d: "Архитектура линий, вдохновленная искусством.",
  },
  {
    n: "02",
    t: "Эскизный проект",
    d: "Создаем цифровую модель будущего объекта с точностью до миллиметра.",
  },
  {
    n: "03",
    t: "Рабочая документация",
    d: "Финальные чертежи, спецификации материалов и подготовка к строительству.",
  },
  {
    n: "04",
    t: "Строительство",
    d: "Реализация проекта под ключ под строгим авторским надзором.",
  },
];

export default function ServicesRoadmap() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.eyebrow}>Наш подход</div>
          <h2 className={styles.title}>Пять тихих глав.</h2>
        </div>

        <div className={styles.timelineWrapper}>
          <div className={styles.verticalLine} />

          <ol className={styles.list}>
            {roadmap.map((p, i) => {
              const isEven = i % 2 === 0;

              const itemClass = `${styles.item} ${isEven ? styles.itemEven : styles.itemOdd}`;

              return (
                <li key={p.n} className={itemClass}>
                  <div className={styles.node}>
                    <div className={styles.outerCircle}>
                      <span className={styles.innerCircle} />
                    </div>
                  </div>

                  <div className={styles.content}>
                    <div className={styles.innerContent}>
                      <div className={styles.number}>{p.n}</div>
                      <h3 className={styles.itemTitle}>{p.t}</h3>
                      <p className={styles.description}>
                        {p.d}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
