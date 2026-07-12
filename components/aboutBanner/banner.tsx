import styles from "./banner.module.css";

interface AboutBannerProps {
  imageSrc: any;
}

export default function AboutBanner({ imageSrc }: AboutBannerProps) {
  const finalSrc = imageSrc?.src || imageSrc;

  return (
    <section className={styles.bannerSection}>
      <img 
        src={finalSrc} 
        alt="Интерьер спроектированного спортивного комплекса" 
        loading="lazy" 
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
