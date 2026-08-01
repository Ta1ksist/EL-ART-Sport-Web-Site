import { Project } from "@/lib/projects";
import styles from "./projectHero.module.css";
import Image from "next/image";

interface ProjectHeroProps {
  project: Project;
}

export default function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <section className={styles.coverSection}>
      <Image 
       src={project.cover}
       alt={project.title}
       className={styles.coverImage}
       fill
       sizes="100vw"
       priority
      />
      <div className={styles.coverOverlay} />
      
      <div className={`${styles.centerWrapper} ${styles.coverContent}`}>
        <div className={styles.eyebrow}>
          {project.type} · {project.year}
        </div>
        <h1 className={styles.mainTitle}>{project.title}</h1>
        <div className={styles.coverLocation}>{project.location}</div>
      </div>
    </section>
  );
}