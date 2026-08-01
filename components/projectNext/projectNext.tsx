import Link from "next/link";
import { getAllProjects, Project } from "@/lib/projects";
import styles from "./projectNext.module.css";

interface ProjectNextProps {
  currentSlug: string;
}

export default function ProjectNext({ currentSlug }: ProjectNextProps) {
  const allProjects = getAllProjects();
  
  const currentIndex = allProjects.findIndex((proj) => proj.slug === currentSlug);
  const next = allProjects[(currentIndex + 1) % allProjects.length];

  if (currentIndex === -1) return null;

  return (
    <section className={styles.nextSection}>
      <div className={styles.centerWrapper}>
        
        <div className={styles.nextHeader}>
          <div className={styles.eyebrow}>Следующий проект</div>
          <Link href="/Projects" className={styles.linkUnderline}>
            Все проекты
          </Link>
        </div>

        <Link href={`/Projects/${next.slug}`} className={styles.nextCard}>
          <div className={styles.nextGrid}>
            
            <div>
              <h3 className={styles.nextProjectTitle}>{next.title}</h3>
              <div className={styles.nextMeta}>
                {next.type} · {next.area} · {next.location}
              </div>
              <div className={`${styles.linkUnderline} ${styles.nextActionLink}`}>
                Смотреть проект →
              </div>
            </div>

            <div className={styles.nextImageBlock}>
              <div className={styles.nextAspect}>
                <img 
                  src={next.cover} 
                  alt={next.title} 
                  loading="lazy" 
                  className={styles.nextImg} 
                />
              </div>
            </div>

          </div>
        </Link>

      </div>
    </section>
  );
}