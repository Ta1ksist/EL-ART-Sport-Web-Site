import Image from "next/image";
import styles from "./projectSoon.module.css";

interface ProjectSoonProps {
  isRightColumn?: boolean;
}

export default function ProjectSoon({ isRightColumn = false }: ProjectSoonProps) {
  const projectData = {
    imageSrc: "/projects/soon/pash-padel-soon.png",
    title: 'Падел-комплекс «Pash padel»',
    type: "Падел-комплекс",
    area: "3500 м²",
    location: "Россия, Москва",
    year: "В разработке"
  };

  const cardClass = `${styles.projectCardSoon} ${isRightColumn ? styles.gridLinkOdd : ""}`;

  return (
    <div className={cardClass}>
      <div className={styles.imageWrapper}>
        <Image 
          src={projectData.imageSrc} 
          alt={projectData.title} 
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
            Анонс · {projectData.type} · {projectData.area} · {projectData.location}
          </div>
          <h3 className={styles.projectTitle}>{projectData.title}</h3>
        </div>
        <div className={styles.year}>{projectData.year}</div>
      </div>
    </div>
  );
}
