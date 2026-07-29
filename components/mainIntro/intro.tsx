'use client';

import Image from "next/image";
import styles from "./intro.module.css";

const TEAM_AVATARS = [
  { name: 'Закирова Элина', img: '/Team/Закирова Элина.png' },
  { name: 'Гадецкая Елизавета', img: '/Team/Гадецкая Елизавета.png' },
  { name: 'Гадецкая Диана', img: '/Team/Гадецкая Диана.png' },
  { name: 'Герасимова Дарья', img: '/Team/Герасимова Дарья.png' },
  { name: 'Фролова Елизавета', img: '/Team/Фролова Елизавета.png' },
  { name: 'Попова Дарина', img: '/Team/Попова Дарина.png' },
  { name: 'Худяк Дарья', img: '' },
  { name: 'Хмара Елизавета', img: '/Team/Хмара Елизавета.png' },
];

export default function Intro() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
      
        <div className={styles.leftCol}>
          <div className={styles.eyebrow}>Наша студия</div>
          
          <div className={styles.avatarArea}>
            {TEAM_AVATARS.map((member, index) => (
              <div 
                key={member.name} 
                className={`${styles.miniAvatar} ${styles[`pos${index + 1}`]}`}
                style={{ zIndex: index + 1 }}
              >
                {member.img ? (
                  <Image 
                    src={member.img} 
                    alt={member.name} 
                    width={64} 
                    height={64} 
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
            Проектируем спортивные комплексы и коммерческие объекты любого масштаба. 
            Объединяем строгие технологические стандарты, эргономику и уникальный визуальный стиль. 
            Реализуем проекты под ключ: от первой концепции до финальной сдачи объекта.
          </p>
        </div>

      </div>
    </section>
  );
}