import { Project } from "@/lib/projects";
import styles from "./projectGallery.module.css";
import Image from "next/image";

interface ProjectGalleryProps {
  project: Project;
}

export default function ProjectGallery({ project: p }: ProjectGalleryProps) {
  if (!p.gallery || p.gallery.length === 0) return null;

  return (
    <section className={styles.gallerySection}>
      
      {p.gallery[0] && (
        <figure className={styles.galleryFullWidth}>
          <div className={styles.imageWrapper}>
            <Image
             src={p.gallery[0]} 
             alt={`${p.title} — 01`} 
             fill
             sizes="100vw"
             className={styles.galleryImg} 
            />
          </div>
        </figure>
      )}

      {(p.gallery[1] || p.gallery[2] || p.gallery[3]) && (
        <div className={styles.centerContainer}>
          <div className={styles.galleryRow}>
            {p.gallery.slice(1, 4).map((src, index) => (
              <figure key={index} className={styles.rowItem}>
                <div className={styles.imageWrapper}>
                  <Image 
                   src={src} 
                   alt={`${p.title} — Row 0${index + 2}`} 
                   fill
                   sizes="(max-width: 768px) 100vw, 33vw" 
                   className={styles.galleryImg} 
                  />
                </div>
              </figure>
            ))}
          </div>
        </div>
      )}

      {p.gallery[4] && (
        <figure className={styles.galleryFullWidth}>
          <div className={styles.imageWrapper}>
            <Image 
             src={p.gallery[4]} 
             alt={`${p.title} — 05`} 
             fill
             sizes="100vw"
             className={styles.galleryImg} 
            />
          </div>
        </figure>
      )}

    </section>
  );
}
