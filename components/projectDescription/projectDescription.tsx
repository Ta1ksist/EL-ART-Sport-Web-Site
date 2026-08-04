import Image from "next/image";
import { Project } from "@/lib/projects";
import { DescriptionImage } from "@/lib/gallery";
import styles from "./projectDescription.module.css";

interface ProjectDescriptionProps {
  project: Project;
  description: DescriptionImage[];
}

export default function ProjectDescription({ project, description }: ProjectDescriptionProps) {
  if (!project.description1 && !project.description2 && (!description || description.length === 0)) {
    return null;
  }

  const sortedImages = description 
    ? [...description].sort((a, b) => a.publicId.localeCompare(b.publicId, undefined, { numeric: true }))
    : [];

  const firstThreeImages = sortedImages.slice(0, 3);
  const remainingImages = sortedImages.slice(3);

  const renderFormattedText = (text: string) => {
    if (!text) return null;

    const separator = text.includes("\n") ? "\n" : ":";
    const parts = text.split(separator);

    if (parts.length > 1) {
      const title = parts[0].trim().replace(/:$/, "");
      const body = parts.slice(1).join(separator).trim();

      return (
        <div className={styles.textGroup}>
          <h3 className={styles.conceptTitle}>{title}</h3>
          <p className={styles.descriptionText}>{body}</p>
        </div>
      );
    }

    return <p className={styles.descriptionText}>{text}</p>;
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {project.description1 && (
          <div className={styles.textBlock1}>
            {renderFormattedText(project.description1)}
          </div>
        )}

        {firstThreeImages.length > 0 && (
          <div className={`${styles.imageGrid} ${styles[`count${firstThreeImages.length}`]}`}>
            {firstThreeImages.map((img, index) => (
              <div 
                key={img.publicId || `first-${index}`} 
                className={`${styles.imageWrapper} ${styles[`img${index + 1}`]}`}
              >
                <Image
                  src={img.url}
                  alt={`${project.title} — концепция, кадр ${index + 1}`}
                  width={img.width || 1200}
                  height={img.height || 800}
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className={styles.img}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        )}

        {project.description2 && (
          <div className={styles.textBlock2}>
            {renderFormattedText(project.description2)}
          </div>
        )}

        {remainingImages.length > 0 && (
          <div className={styles.remainingImagesGrid}>
            {remainingImages.map((img, index) => (
              <div key={img.publicId || `rem-${index}`} className={styles.remainingImageWrapper}>
                <Image
                  src={img.url}
                  alt={`${project.title} — детали реализации, кадр ${index + 4}`}
                  width={img.width || 1200}
                  height={img.height || 800}
                  sizes="100vw"
                  className={styles.img}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
