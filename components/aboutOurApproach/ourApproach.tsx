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
              Каждый наш проект — это баланс между бизнес-целями заказчика, сильной архитектурой здания и строгими регламентами спортивной индустрии.
            </p>
            
            <p className={styles.bodyText}>
              Мы работаем вдумчиво и системно.
               Разработка комплексного спортивного объекта занимает несколько месяцев — этого времени
                достаточно, чтобы глубоко проработать технологические решения, продумать логистику 
                посетителей и подобрать износостойкие материалы. Мы создаем актуальную архитектуру 
                вне времени, которая эффективно работает на ваш бизнес долгие годы .
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
