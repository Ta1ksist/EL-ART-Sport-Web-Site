import styles from "./team.module.css";

interface TeamMember {
  name: string;
  role: string;
  img: string;
}

const TEAM: TeamMember[] = [
  { name: 'Закирова Элина', role: "Основатель и руководитель EL'ART", img: '/Team/Закирова Элина.png' },
  { name: 'Северинов Алексей', role: 'Сооснователь и ведущий специалист консалтинга Court Masters', img: '/Team/Северинов Алексей.png' },
  { name: 'Закиров Ринат', role: 'Основатель и ведущий архитектор ARZ', img: '/Team/Закирова Ринат.png' },
  { name: 'Гадецкая Диана', role: "Руководитель проектной части EL'ART", img: '/Team/Гадецкая Диана.png' },
  { name: 'Колесникова Елизавета', role: "Главный дизайнер студии EL'ART", img: '/Team/Гадецкая Елизавета.png' },
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
                  <img src={member.img} alt={member.name} loading="lazy" />
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
