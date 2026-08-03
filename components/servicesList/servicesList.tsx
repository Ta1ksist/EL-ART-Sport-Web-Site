import styles from "./servicesList.module.css";
import Image from "next/image";
import { SERVICES } from "@/lib/services";
import Link from "next/link";

export default function ServicesList() {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.centerWrapper}>
        <div className={styles.servicesGrid}>
          {SERVICES.map((s) => (
            <div key={s.n} className={styles.serviceCard}>
              {s.cover && (
                <div className={styles.coverWrap}>
                  <Image
                    src={s.cover}
                    alt={s.title}
                    className={styles.coverImage}
                    fill
                    quality={90}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={s.n === "01"}
                  />
                </div>
              )}

              <div className={styles.cardHeader}>
                <div className={styles.cardNumber}>{s.n}</div>
                <div className={styles.eyebrow}>Услуга</div>
              </div>

              <h2 className={styles.cardTitle}>{s.title}</h2>
              <p className={styles.cardLead}>{s.lead}</p>

              <div className={styles.innerDivider}>
                <div className={styles.innerLabel}>Что входит в состав</div>
                <ul className={styles.includesList}>
                  {s.includes.map((item) => (
                    <li key={item} className={styles.includesItem}>
                      <span className={styles.lineMarker} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {s.download && (
                <div className={styles.downloadArea}>
                  <a 
                    href={s.download} 
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.downloadLink}
                  >
                    <span>Скачать пример проекта</span>
                    <span className={styles.downloadIcon}>↓</span>
                  </a>
                </div>
              )}
            </div>
          ))}
          {SERVICES.length % 2 !== 0 && (
            <div className={styles.gridFiller} aria-hidden="true" />
          )}
        </div>
      </div>
    </section>
  );
}
