// 'use client';

// import { useState, useCallback, useEffect, useRef } from "react";
// import { Project } from "@/lib/projects";
// import { GalleryImage } from "@/lib/gallery";
// import styles from "./projectGallery.module.css";
// import Image from "next/image";

// interface ProjectGalleryProps {
//   project: Project;
//   images: GalleryImage[];
// }

// export default function ProjectGallery({ project: p, images }: ProjectGalleryProps) {
//   const [activeIndex, setActiveIndex] = useState<number | null>(null);
//   const [isClosing, setIsClosing] = useState(false);
//   const [direction, setDirection] = useState<"next" | "prev" | null>(null);
//   const [isAnimating, setIsAnimating] = useState(false);

//   const touchStartX = useRef<number | null>(null);

//   const openLightbox = useCallback((index: number) => {
//     setDirection(null);
//     setIsClosing(false);
//     setActiveIndex(index);
//   }, []);

//   const closeLightbox = useCallback(() => {
//     setIsClosing(true);
//     window.setTimeout(() => {
//       setActiveIndex(null);
//       setIsClosing(false);
//     }, 220);
//   }, []);

//   const goTo = useCallback(
//     (dir: "next" | "prev") => {
//       if (isAnimating) return;
//       setDirection(dir);
//       setIsAnimating(true);

//       window.setTimeout(() => {
//         setActiveIndex((current) => {
//           if (current === null) return null;
//           if (dir === "next") return (current + 1) % images.length;
//           return (current - 1 + images.length) % images.length;
//         });
//         setIsAnimating(false);
//       }, 200);
//     },
//     [images.length, isAnimating]
//   );

//   const showPrev = useCallback(() => goTo("prev"), [goTo]);
//   const showNext = useCallback(() => goTo("next"), [goTo]);

//   useEffect(() => {
//     if (activeIndex === null) return;

//     function handleKeyDown(e: KeyboardEvent) {
//       if (e.key === "Escape") closeLightbox();
//       if (e.key === "ArrowLeft") showPrev();
//       if (e.key === "ArrowRight") showNext();
//     }

//     document.addEventListener("keydown", handleKeyDown);
//     document.body.style.overflow = "hidden";

//     return () => {
//       document.removeEventListener("keydown", handleKeyDown);
//       document.body.style.overflow = "";
//     };
//   }, [activeIndex, closeLightbox, showPrev, showNext]);

//   useEffect(() => {
//     if (activeIndex === null) return;

//     const nextIndex = (activeIndex + 1) % images.length;
//     const prevIndex = (activeIndex - 1 + images.length) % images.length;

//     [nextIndex, prevIndex].forEach((idx) => {
//       const img = new window.Image();
//       img.src = images[idx].url;
//     });
//   }, [activeIndex, images]);

//   function handleTouchStart(e: React.TouchEvent) {
//     touchStartX.current = e.touches[0].clientX;
//   }

//   function handleTouchEnd(e: React.TouchEvent) {
//     if (touchStartX.current === null) return;
//     const deltaX = e.changedTouches[0].clientX - touchStartX.current;

//     if (Math.abs(deltaX) > 50) {
//       if (deltaX < 0) showNext();
//       else showPrev();
//     }

//     touchStartX.current = null;
//   }

//   if (!images || images.length === 0) return null;

//   return (
//     <>
//       <section className={styles.gallerySection}>
//         <div className={styles.masonryGrid}>
//           {images.map((image, index) => (
//             <figure key={image.publicId} className={styles.masonryItem}>
//               <button
//                 type="button"
//                 className={styles.imageButton}
//                 onClick={() => openLightbox(index)}
//                 aria-label={`Открыть фото ${index + 1}`}
//               >
//                 <Image
//                   src={image.url}
//                   alt={`${p.title} — ${index + 1}`}
//                   fill /* Используем fill, чтобы картинка идеально растягивалась по высоте ячейки */
//                   sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                   className={styles.masonryImg}
//                 />
//               </button>
//             </figure>
//           ))}
//         </div>

//       </section>

//       {activeIndex !== null && (
//         <div
//           className={`${styles.lightboxOverlay} ${isClosing ? styles.lightboxOverlayClosing : styles.lightboxOverlayOpening}`}
//           onClick={closeLightbox}
//         >
//           <button
//             type="button"
//             className={styles.lightboxClose}
//             onClick={closeLightbox}
//             aria-label="Закрыть"
//           >
//             ✕
//           </button>

//           <button
//             type="button"
//             className={`${styles.lightboxNav} ${styles.lightboxNavPrev}`}
//             onClick={(e) => {
//               e.stopPropagation();
//               showPrev();
//             }}
//             aria-label="Предыдущее фото"
//           >
//             ‹
//           </button>

//           <div
//             className={styles.lightboxImageWrapper}
//             onClick={(e) => e.stopPropagation()}
//             onTouchStart={handleTouchStart}
//             onTouchEnd={handleTouchEnd}
//           >
//             <div
//               key={activeIndex}
//               className={`${styles.lightboxImageInner} ${
//                 direction === "next" ? styles.slideFromRight : direction === "prev" ? styles.slideFromLeft : ""
//               }`}
//             >
//               <Image
//                 src={images[activeIndex].url}
//                 alt={`${p.title} — ${activeIndex + 1}`}
//                 width={images[activeIndex].width}
//                 height={images[activeIndex].height}
//                 className={styles.lightboxImage}
//                 sizes="100vw"
//                 priority
//               />
//             </div>
//           </div>

//           <button
//             type="button"
//             className={`${styles.lightboxNav} ${styles.lightboxNavNext}`}
//             onClick={(e) => {
//               e.stopPropagation();
//               showNext();
//             }}
//             aria-label="Следующее фото"
//           >
//             ›
//           </button>

//           <div className={styles.lightboxCounter}>
//             {activeIndex + 1} / {images.length}
//           </div>
//         </div>
//       )}
//     </>
//   );
// }


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
    }, 150); // Время синхронизировано с CSS-анимацией закрытия
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
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;

    if (Math.abs(deltaX) > 40) { // Чуть увеличили чувствительность свайпа
      if (deltaX < 0) showNext();
      else showPrev();
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
                // Подгружаем текущую, предыдущую и следующую картинки для мгновенного отклика
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
