import styles from "./wfc.module.css";

interface Testimonial {
  q: string;
  a: string;
  r: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    q: "##############",
    a: "Иван Иванов",
    r: "ООО 'Иван'",
  },
  {
    q: "##############",
    a: "Иван Иванов",
    r: "ООО 'Другой Иванов'",
  },
];

export default function WordsFromClients() {
  return (
    <section className={styles.section}>
      <div className={styles.eyebrow}>Слова наших клиентов</div>
      
      <div className={styles.grid}>
        {TESTIMONIALS.map((t) => (
          <figure key={t.a}>

            <blockquote className={styles.quote}>
              <span className={styles.quoteMark}>“</span>
              {t.q}
              <span className={styles.quoteMark}>”</span>
            </blockquote>
            
            <figcaption className={styles.caption}>
              <div className={styles.author}>{t.a}</div>
              <div className={styles.role}>{t.r}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
