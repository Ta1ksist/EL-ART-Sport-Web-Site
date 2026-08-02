'use client';

import { useState, useCallback, useEffect, useRef } from "react";
import { Project } from "@/lib/projects";
import { GalleryImage } from "@/lib/gallery";
import styles from "./projectGallery.module.css";
import Image from "next/image";

interface ProjectGalleryProps {
  project: Project;
  images: GalleryImage[];
}

export default function ProjectGallery({ project: p, images }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const touchStartX = useRef<number | null>(null);

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
      return (current - 1 + images.length) % images.length;
    });
  }, [images.length]);

  const showNext = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null) return null;
      return (current + 1) % images.length;
    });
  }, [images.length]);

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

  function handleTouchStart(e: React.TouchEvent) {
    if (e.touches && e.touches.length > 0) {
      touchStartX.current = e.touches[0].clientX;
    }
  }

  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    
    if (e.changedTouches && e.changedTouches.length > 0) {
      const deltaX = e.changedTouches[0].clientX - touchStartX.current;

      if (Math.abs(deltaX) > 40) {
        if (deltaX < 0) showNext();
        else showPrev();
      }
    }

    touchStartX.current = null;
  }

  if (!images || images.length === 0) return null;

  return (
    <>
      <section className={styles.gallerySection}>
        <div className={styles.masonryGrid}>
          {images.map((image, index) => (
            <figure key={image.publicId} className={styles.masonryItem}>
              <button
                type="button"
                className={styles.imageButton}
                onClick={() => openLightbox(index)}
                aria-label={`Открыть фото ${index + 1}`}
              >
                <Image
                  src={image.url}
                  alt={`${p.title} — ${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className={styles.masonryImg}
                />
              </button>
            </figure>
          ))}
        </div>
      </section>

      {activeIndex !== null && (
        <div
          className={`${styles.lightboxOverlay} ${isClosing ? styles.lightboxOverlayClosing : styles.lightboxOverlayOpening}`}
          onClick={closeLightbox}
        >
          <button
            type="button"
            className={styles.lightboxClose}
            onClick={closeLightbox}
            aria-label="Закрыть"
          >
            ✕
          </button>

          <button
            type="button"
            className={`${styles.lightboxNav} ${styles.lightboxNavPrev}`}
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Предыдущее фото"
          >
            ‹
          </button>

          <div
            className={styles.lightboxImageWrapper}
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className={styles.lightboxTrack}
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {images.map((img, idx) => {
                const isPreload = Math.abs(idx - activeIndex) <= 1 || idx === images.length - 1 || idx === 0;

                return (
                  <div key={img.publicId} className={styles.lightboxSlide}>
                    <Image
                      src={img.url}
                      alt={`${p.title} — ${idx + 1}`}
                      width={img.width}
                      height={img.height}
                      className={styles.lightboxImage}
                      sizes="100vw"
                      priority={isPreload}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <button
            type="button"
            className={`${styles.lightboxNav} ${styles.lightboxNavNext}`}
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Следующее фото"
          >
            ›
          </button>

          <div className={styles.lightboxCounter}>
            {activeIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
