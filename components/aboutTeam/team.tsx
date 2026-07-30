import styles from "./team.module.css";
import Image from "next/image";
import { TEAM } from "@/lib/team"


export default function TeamSection() {
  return (
    <section className={styles.teamSection}>
      <div className={styles.centerWrapper}>
        
        <span className={styles.eyebrow}>Команда</span>
        <h2 className={styles.mainTitle}>Команда специалистов</h2>
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
