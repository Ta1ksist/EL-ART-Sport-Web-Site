import Image from "next/image";
import styles from "./intro.module.css";
import { TEAM } from "@/lib/team";

export default function Intro() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
      
        <div className={styles.leftCol}>
          <div className={styles.eyebrow}>Наша студия</div>
          
          <div className={styles.avatarArea}>
            {TEAM.map((member) => (
              <div key={member.name} className={styles.miniAvatar}>
                {member.img ? (
                  <Image 
                    src={member.img} 
                    alt={member.name} 
                    width={78}
                    height={78} 
                    className={styles.avatarImg}
                  />
                ) : (
                  <span className={styles.initials}>
                    {member.name
                      .split(' ')
                      .map((word) => word[0])
                      .join('')}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className={styles.description}>
            Проектируем спортивные комплексы и коммерческие
            объекты любого масштаба. Опираясь на профильное 
            архитектурное образование, объединяем строгие технологические
            стандарты, эргономику и уникальный визуальный стиль. <br/>
            Реализуем проекты под ключ:
            <br/>
            от первой концепции до финальной сдачи объекта.
          </p>
        </div>

      </div>
    </section>
  );
}
