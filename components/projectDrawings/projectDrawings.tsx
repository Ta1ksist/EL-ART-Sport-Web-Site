'use client';

import { useState, useCallback, useEffect } from "react";
import { Project } from "@/lib/projects";
import { GalleryImage } from "@/lib/gallery";
import styles from "./projectDrawings.module.css";
import Image from "next/image";

interface ProjectDrawingsProps {
  project: Project;
  drawings: GalleryImage[];
}

const drawingsLoader = ({ src, width }: { src: string; width: number }) => {
  if (src.includes('/upload/f_auto,q_auto/')) {
    return src.replace('/upload/f_auto,q_auto/', `/upload/f_auto,q_auto:best,w_${width}/`);
  }
  return src;
};

export default function ProjectDrawings({ project: p, drawings }: ProjectDrawingsProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  const openLightbox = useCallback((index: number) => {
    setIsClosing(false);
    setActiveIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setIsClosing(true);
    window.setTimeout(() => {
      setActiveIndex(null);
      setIsClosing(false);
    }, 150);
  }, []);

  const showPrev = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null) return null;
      return (current - 1 + drawings.length) % drawings.length;
    });
  }, [drawings.length]);

  const showNext = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null) return null;
      return (current + 1) % drawings.length;
    });
  }, [drawings.length]);

  useEffect(() => {
    if (activeIndex === null) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeIndex, closeLightbox, showPrev, showNext]);

  if (!drawings || drawings.length === 0) return null;

  return (
    <section className={styles.drawingsSection}>
      <div className={styles.centerWrapper}>
        <div className={styles.headerArea}>
          <span className={styles.eyebrow}>Документация</span>
          <h2 className={styles.sectionTitle}>Чертежи проекта</h2>
        </div>

        <div className={styles.drawingsGrid}>
          {drawings.map((drawing, index) => (
            <div key={drawing.publicId} className={styles.drawingCard}>
              <button
                type="button"
                className={styles.previewButton}
                onClick={() => openLightbox(index)}
                aria-label={`Открыть чертеж ${index + 1}`}
              >
                <div className={styles.imageContainer}>
                  <Image
                    loader={drawingsLoader}
                    src={drawing.url}
                    alt={`Чертеж проекта ${p.title} — Лист ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={styles.drawingImg}
                  />
                </div>
                <div className={styles.cardFooter}>
                  <span className={styles.drawingIndex}>Лист {String(index + 1).padStart(2, '0')}</span>
                  <span className={styles.zoomLabel}>Увеличить ↗</span>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <div
          className={`${styles.lightboxOverlay} ${isClosing ? styles.lightboxOverlayClosing : styles.lightboxOverlayOpening}`}
          onClick={closeLightbox}
        >
          <button type="button" className={styles.lightboxClose} onClick={closeLightbox}>✕</button>
          
          <button 
            type="button" 
            className={`${styles.lightboxNav} ${styles.lightboxNavPrev}`} 
            onClick={(e) => { e.stopPropagation(); showPrev(); }}
          >
            ‹
          </button>

          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.scrollWrapper}>
              <div className={styles.zoomContainer} style={{ aspectRatio: drawings[activeIndex].width / drawings[activeIndex].height }}>
                <Image
                  loader={drawingsLoader}
                  src={drawings[activeIndex].url}
                  alt={`Чертеж ${p.title} крупно — Лист ${activeIndex + 1}`}
                  fill
                  sizes="100vw"
                  className={styles.lightboxDrawing}
                  priority
                />
              </div>
            </div>
          </div>

          <button 
            type="button" 
            className={`${styles.lightboxNav} ${styles.lightboxNavNext}`} 
            onClick={(e) => { e.stopPropagation(); showNext(); }}
          >
            ›
          </button>

          <div className={styles.lightboxCounter}>
            Лист {activeIndex + 1} / {drawings.length}
          </div>
        </div>
      )}
    </section>
  );
}
