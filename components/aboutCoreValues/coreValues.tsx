import styles from "./coreValues.module.css";

interface ValueItem {
  t: string;
  d: string;
}

const VALUES: ValueItem[] = [
  { 
    t: "Прозрачность", 
    d: "В подборе материалов, в расчетах смет и в строго фиксированных сроках, которые мы гарантируем до начала работ." 
  },
  { 
    t: "Бескомпромиссность", 
    d: "Меньше случайных решений, больше качества. Ни один элемент или инженерный узел не появляется на объекте без глубокого обоснования." 
  },
  { 
    t: "Внимание к деталям", 
    d: "Стыки покрытий или скрытые коммуникации, которые вы не заметите на первый взгляд, потребовали десятков чертежей. Это и есть наша работа." 
  },
];

export default function CoreValues() {
  return (
    <section className={styles.valuesSection}>
      <div className={styles.centerWrapper}>
        
        <div className={styles.eyebrow}>Наши ценности</div>
        
        <div className={styles.valuesGrid}>
          {VALUES.map((v) => (
            <div key={v.t} className={styles.valueCard}>
              <h3 className={styles.valueTitle}>{v.t}</h3>
              <p className={styles.valueDesc}>{v.d}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
