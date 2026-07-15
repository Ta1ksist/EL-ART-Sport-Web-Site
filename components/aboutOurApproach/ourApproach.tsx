import styles from "./ourApproach.module.css";
import Image from "next/image";

interface OurApproachProps {
  imageSrc: any;
}

export default function OurApproach({ imageSrc }: OurApproachProps) {
  const finalSrc = imageSrc?.src || imageSrc;

  return (
    <section className={styles.section}>
      <div className={styles.centerWrapper}>
        <div className={styles.grid}>
          
          <div className={styles.imgBlock}>
            <Image 
              src={finalSrc} 
              alt="Деталь интерьера студии EL'ART" 
              fill
              sizes="(max-width: 768px) 100vw, 55vw"
              className={styles.imgFull} 
            />
          </div>
          

          <div className={styles.approachRight}>
            <div className={styles.eyebrow}>Наш подход</div>
            
            <p className={styles.subTitle}>
              Мы относимся к каждому пространству как к диалогу между бизнес-целями 
              клиента, архитектурой здания и инженерией спортивных стандартов.
            </p>
            
            <p className={styles.bodyText}>
              По меркам индустрии мы работаем вдумчиво и без спешки. Разработка 
              комплексного спортивного объекта обычно занимает несколько месяцев — этого 
              времени достаточно, чтобы безупречно спроектировать инженерные узлы, 
              продумать логистику посетителей и подобрать износостойкие материалы. 
              Мы не гонимся за сиюминутными трендами, а создаем технологичные пространства, 
              которые работают эффективно и долговечно.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
