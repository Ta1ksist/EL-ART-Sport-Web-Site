import Image from "next/image";
import styles from "./projectSoon.module.css";
import { Project } from "@/lib/projects";


interface ProjectSoonProps {
  project: Project;
}

export default function ProjectSoon({ project }: ProjectSoonProps) {
  return (
    <div className={styles.projectCardSoon}>
      <div className={styles.imageWrapper}>
        <Image 
          src={project.cover} 
          alt={project.title} 
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          loading="lazy" 
          className={styles.image} 
        />
        <div className={styles.overlay}>
          <span className={styles.soonText}>Скоро</span>
        </div>
      </div>
      <div className={styles.metaInfo}>
        <div className={styles.metaTextContainer}>
          <div className={styles.styleLocation}>
            Анонс · {project.type} · {project.area} · {project.location}
          </div>
          <h3 className={styles.projectTitle}>{project.title}</h3>
        </div>
        <div className={styles.year}>{project.year}</div>
      </div>
    </div>
  );
}