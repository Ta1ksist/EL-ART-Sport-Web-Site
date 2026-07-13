import styles from "./hero.module.css";
import "next/image";

const PARTICLES = [
  "p1", "p2", "p3", "p4", "p5", "p6",
  "p7", "p8", "p9", "p10", "p11", "p12",
] as const;

export default function MainScene() {
  return (
    <div className={styles.scene}>
      <video
        className={styles.bgVideo}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/HERO/hero.mp4" type="video/mp4" />
      </video>
      <div className={styles.bgMain} />
      <div className={styles.cityGlow} />
      <div className={styles.flare} />
      <div className={styles.particles}>
        {PARTICLES.map((id) => (
          <div
            key={id}
            className={`${styles.particle} ${styles[id]}`} />
        ))}
      </div>
      <div className={styles.vignette} />
      <div className={styles.titleWrap}>
        <p className={styles.titleMain}>EL'ART</p>
        <p className={styles.titleSub}>Спортивный комплекс под ключ.</p>
      </div>
    </div>
  );
}