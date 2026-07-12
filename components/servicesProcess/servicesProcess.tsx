import styles from "./servicesProcess.module.css";

interface ProcessItem {
  n: string;
  t: string;
  d: string;
}

const PROCESS: ProcessItem[] = [
  { n: "I", t: "Аналитика", d: "Обмер объекта, аудит инженерных сетей, фиксация технических особенностей и формирование бизнес-задачи проекта." },
  { n: "II", t: "Концепция", d: "Разработка функционального планировочного решения, зонирования пространства и единого дизайн-кода интерьера." },
  { n: "III", t: "Проектирование", d: "Создание полного пакета строительных чертежей, планов коммуникаций, спецификаций материалов и 3D-визуализаций." },
  { n: "IV", t: "Реализация", d: "Координация работы строительных бригад, инженерных подрядчиков и ведение строгого авторского надзора на объекте." },
];

export default function ServicesProcess() {
  return (
    <section className={styles.processSection}>
      <div className={styles.centerWrapper}>
        <div className={styles.processGrid}>
          
          <div>
            <div className={styles.eyebrow}>Рабочий процесс</div>
            <h2 className={styles.mainTitle}>Четыре этапа реализации.</h2>
          </div>
          
          <ol className={styles.processList}>
            {PROCESS.map((p) => (
              <li key={p.n} className={styles.processItem}>
                <div className={styles.processNumber}>{p.n}</div>
                <div>
                  <div className={styles.processStepTitle}>{p.t}</div>
                  <p className={styles.processStepDesc}>{p.d}</p>
                </div>
              </li>
            ))}
          </ol>

        </div>
      </div>
    </section>
  );
}
