import { Project } from "@/lib/projects";
import { GalleryImage } from "@/lib/gallery";
import styles from "./projectGallery.module.css";
import Image from "next/image";

interface ProjectGalleryProps {
  project: Project;
  images: GalleryImage[];
}

export default function ProjectGallery({ project: p, images }: ProjectGalleryProps) {
  if (!images || images.length === 0) return null;
  
  const blocks: { type: "full"; images: GalleryImage[] }[] | any[] = [];
  let i = 0;
  let isFullWidthTurn = true;

  while (i < images.length) {
    if (isFullWidthTurn) {
      blocks.push({ type: "full", images: [images[i]] });
      i += 1;
    } else {
      blocks.push({ type: "row", images: images.slice(i, i + 3) });
      i += 3;
    }
    isFullWidthTurn = !isFullWidthTurn;
  }

  return (
    <section className={styles.gallerySection}>
      {blocks.map((block, blockIndex) => {
        if (block.type === "full") {
          const image = block.images[0];
          return (
            <figure key={image.publicId} className={styles.galleryFullWidth}>
              <div className={styles.imageWrapper}>
                <Image
                  src={image.url}
                  alt={`${p.title} — ${blockIndex + 1}`}
                  fill
                  sizes="100vw"
                  className={styles.galleryImg}
                />
              </div>
            </figure>
          );
        }

        return (
          <div key={`row-${blockIndex}`} className={styles.centerContainer}>
            <div className={styles.galleryRow}>
              {block.images.map((image: GalleryImage, index: number) => (
                <figure key={image.publicId} className={styles.rowItem}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={image.url}
                      alt={`${p.title} — ${blockIndex + 1}.${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className={styles.galleryImg}
                    />
                  </div>
                </figure>
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}