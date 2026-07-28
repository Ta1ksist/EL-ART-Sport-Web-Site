import styles from "./team.module.css";
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  img: string;
}

const TEAM: TeamMember[] = [
  { name: 'Закирова Элина', role: "Основатель и руководитель EL'ART", img: '/Team/Закирова Элина.png' },
  { name: 'Герасимова Дарья', role: "Дизайнер", img: '/Team/Герасимова Дарья.png' },
  { name: 'Фролова Елизавета', role: "Дизайнер-визуализатор", img: '/Team/Фролова Елизавета.png' },
  { name: 'Попова Дарина', role: "Визуализатор", img: '/Team/Попова Дарина.png' },
  { name: 'Хмара Елизавета', role: "Визуализатор", img: '/Team/Хмара Елизавета.png' },
  { name: 'Худяк Дарья', role: "Дизайнер-визуализатор", img: '' },
  { name: 'Гадецкая Диана', role: "Руководитель проектной части EL'ART", img: '/Team/Гадецкая Диана.png' },
  { name: 'Гадецкая Елизавета', role: "Главный дизайнер студии EL'ART", img: '/Team/Гадецкая Елизавета.png' },
];

export default function TeamSection() {
  return (
    <section className={styles.teamSection}>
      <div className={styles.centerWrapper}>
        
        <span className={styles.eyebrow}>Команда</span>
        <h2 className={styles.mainTitle}>5 человек, одна студия.</h2>
        
        <div className={styles.teamGrid}>
          {TEAM.map((member) => (
            <div key={member.name} className={styles.teamCard}>
              
              <div className={styles.teamAvatar}>
                {member.img ? (
                  <Image 
                   src={member.img} 
                   alt={member.name} 
                   fill
                   sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                   className={styles.avatarImg} 
                  />
                ) : (
                  <span>
                    {member.name
                      .split(' ')
                      .map((word) => word[0])
                      .join('')}
                  </span>
                )}
              </div>
              
              <div className={styles.teamInfo}>
                <p className={styles.teamName}>{member.name}</p>
                <p className={styles.teamRole}>{member.role}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
