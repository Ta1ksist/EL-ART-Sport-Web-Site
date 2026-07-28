import styles from "./aboutPartners.module.css";
import Image from "next/image";

interface Partner {
  name: string;
  type: string;
  logo: string;
}

const PARTNERS: Partner[] = [
  { name: 'Court Masters', type: 'Комплексный консалтинг', logo: '/Partners/courtmasters.png' },
  { name: 'ARZ', type: 'Архитектурное бюро', logo: '/Partners/arz.svg' },
];

export default function AboutPartners() {
  return (
    <section className={styles.partnersSection}>
      <div className={styles.centerWrapper}>
        
        <span className={styles.eyebrow}>Партнеры</span>
        <h2 className={styles.mainTitle}>Надежные союзы, сильные проекты.</h2>
        
        <div className={styles.partnersGrid}>
          {PARTNERS.map((partner) => (
            <div key={partner.name} className={styles.partnerCard}>
              
              <div className={styles.partnerLogo}>
                {partner.logo ? (
                  <Image 
                   src={partner.logo} 
                   alt={partner.name} 
                   width={400} /* Увеличили масштаб для четкости */
                   height={140}
                   className={styles.logoImg} 
                  />
                ) : (
                  <span>
                    {partner.name
                      .split(' ')
                      .slice(0, 2)
                      .map((word) => word[0])
                      .join('')}
                  </span>
                )}
              </div>
              
              <div className={styles.partnerInfo}>
                <p className={styles.partnerName}>{partner.name}</p>
                <p className={styles.partnerRole}>{partner.type}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
