'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SERVICES } from '@/lib/services';
import styles from './servicesPreview.module.css';

export default function ServicesPreview() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.mainGrid}>

                    <div className={styles.leftCol}>
                        <div className={styles.eyebrow}>Услуги</div>
                        <h2 className={styles.title}>
                            От первого эскиза до окупаемости
                        </h2>
                        <Link href="/Services" className={styles.link}>
                            Ознакомьтесь с услугами →
                        </Link>

                        <div className={styles.previewArea}>
                            {SERVICES.map((s, index) => (
                                <div
                                    key={s.n}
                                    className={`${styles.previewImage} ${activeIndex === index ? styles.previewImageActive : ''}`}
                                >
                                    <Image
                                        src={s.cover}
                                        alt={s.title}
                                        fill
                                        sizes="(min-width: 768px) 400px, 100vw"
                                        className={styles.previewImg}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <ol className={styles.servicesGrid}>
                        {SERVICES.map((s, index) => (
                            <li
                                key={s.n}
                                className={styles.card}
                                onMouseEnter={() => setActiveIndex(index)}
                                onMouseLeave={() => setActiveIndex(null)}
                            >
                                <div className={styles.cardNumber}>{s.n}</div>
                                <div className={styles.cardTitle}>{s.title}</div>
                                <p className={styles.cardDescription}>{s.lead}</p>
                            </li>
                        ))}
                    </ol>

                </div>
            </div>
        </section>
    );
}