import Link from 'next/link';
import { SERVICES } from '@/lib/services';
import styles from './servicesPreview.module.css';

export default function ServicesPreview() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.mainGrid}>

                    <div>
                        <div className={styles.eyebrow}>Услуги</div>
                        <h2 className={styles.title}>
                            От первого эскиза до окупаемости
                        </h2>
                        <Link href="/Services" className={styles.link}>
                            Ознакомьтесь с услугами →
                        </Link>
                    </div>

                    <ol className={styles.servicesGrid}>
                        {SERVICES.map((s) => (
                            <li key={s.n} className={styles.card}>
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