import { Project } from "@/lib/projects";
import styles from "./projectBrief.module.css";

interface ProjectBriefProps {
  project: Project;
}

export default function ProjectBrief({ project: p }: ProjectBriefProps) {
  return (
    <section className={styles.briefSection}>
      <div className={styles.centerWrapper}>
        <div className={styles.briefGrid}>
          
          <dl className={styles.specsList}>
            <Spec label="Тип объекта" value={p.type} />
            <Spec label="Локация" value={p.location} />
            <Spec label="Площадь" value={p.area} />
            <Spec label="Срок проектирования" value={p.timeline} />
            <Spec label="Год проектирования" value={String(p.year)} />
          </dl>

          <div className={styles.briefBlocks}>
            <div>
              <div className={styles.eyebrow}>Дизайн код</div>
              <p className={styles.designCodeTitle}>{p.designCode}</p>
            </div>
            <div>
              <div className={styles.eyebrow}>Принцип проектирования</div>
                <div className={styles.designPrincipleText}>
                  {p.designPrinciple.split('\n').map((line, idx) => (
                    <p key={idx} className={styles.designPrincipleParagraph}>{line}</p>
                  ))}
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className={styles.specItem}>
      <dt className={styles.specLabel}>{label}</dt>
      <dd className={styles.specValue}>{value}</dd>
    </div>
  );
}
