import Link from "next/link";
import Image from 'next/image';
import { PROJECTS } from "@/lib/projects";
import ProjectSoon from "@/components/projectSoon/projectSoon";
import styles from "./projectsPreview.module.css";

export default function ProjectsPreview() {
  const featured = PROJECTS.slice(0, 4);
  const completedProjectsCount = featured.filter(p => !p.isSoon).length;
  
  let completedIndex = 0;

  return (
    <section className={styles.section}>
      <div className={styles.centerWrapper}>
        <div className={styles.header}>
          <div>
            <div className={styles.eyebrow}>Избранные объекты</div>
            <h2 className={styles.title}>Наши проекты</h2>
          </div>
          <Link href="/Projects" className={styles.linkUnderline}>
            Все проекты →
          </Link>
        </div>

        <div className={styles.grid}>
          {featured.map((p, i) => {
            if (p.isSoon) {
              return <ProjectSoon key={p.slug} project={p} />;
            }
            completedIndex++;
            return (
              <Link 
                key={p.slug} 
                href={`/Projects/${p.slug}`}
                className={styles.projectCard}
              >
                <div className={styles.imageWrapper}>
                  <Image
                    src={p.cover}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={i < 2}
                    className={styles.image}
                  />
                  <div className={styles.overlay} />
                </div>

                <div className={styles.metaInfo}>
                  <div className={styles.metaTextContainer}>
                    <div className={styles.styleLocation}>
                      {p.type} · {p.area} · {p.location}
                    </div>
                    <h3 className={styles.projectTitle}>{p.title}</h3>
                  </div>
                  
                  <div className={styles.counter}>
                    {String(completedIndex).padStart(2, "0")} / {String(completedProjectsCount).padStart(2, "0")}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className={styles.mobileFooter}>
          <Link href="/Projects" className={styles.linkUnderline}>
            Все проекты →
          </Link>
        </div>

      </div>
    </section>
  );
}
