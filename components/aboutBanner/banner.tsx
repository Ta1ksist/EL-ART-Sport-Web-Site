import styles from "./banner.module.css";
import Image from "next/image";

interface AboutBannerProps {
  imageSrc: any;
}

export default function AboutBanner({ imageSrc }: AboutBannerProps) {
  const finalSrc = imageSrc?.src || imageSrc;

  return (
    <section className={styles.bannerSection}>
      <Image 
        src={finalSrc} 
        alt="Интерьер спроектированного спортивного комплекса" 
        fill
        sizes="100vw"
        className={styles.imgFull} 
      />
      
      <div className={styles.bannerOverlay} />
      
      <div className={styles.bannerContent}>
        <blockquote className={styles.bannerQuote}>
          «Истинная уверенность пространства кроется в его безупречной функции, 
          а не в избыточном декоре».
          <footer className={styles.bannerFooter}>
            — Элина Закирова, Основатель EL'ART
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
