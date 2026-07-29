import Link from 'next/link';
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
                    {[
                        { 
                        n: "01", 
                        t: "Бизнес-план", 
                        d: "Расчет инвестиций, окупаемости, операционных расходов и создание финансовой модели будущего комплекса." 
                        },
                        { 
                        n: "02", 
                        t: "Подбор помещения", 
                        d: "Помощь в подборе. Анализ локаций и оценка пригодности здания под конкретные спортивные дисциплины." 
                        },
                        { 
                        n: "03", 
                        t: "Дизайн-проект", 
                        d: "Разрабатываем уникальную концепцию комплекса, в которой клиенту хочется остаться. Создаем атмосферу, которая продает абонементы и удерживает гостей." 
                        },
                        { 
                        n: "04", 
                        t: "Архитектурный проект", 
                        d: "Создаем знаковую архитектуру, которая формирует правильное первое впечатление. Соединяем масштабный, притягательный экстерьер с технологичным и безопасным пространством внутри здания" 
                        },
                        // { 
                        // n: "05", 
                        // t: "Графический дизайн", 
                        // d: "Создание фирменного стиля, логотипа, навигации по комплексу и брендбука для успешного открытия." 
                        // },
                        { 
                        n: "05", 
                        t: "Управление", 
                        d: "Экспертное сопровождение на всех этапах: от юридических тонкостей до подбора спортивного оборудования." 
                        },
                    ].map((s) => (
                        <li key={s.n} className={styles.card}>
                        <div className={styles.cardNumber}>{s.n}</div>
                        <div className={styles.cardTitle}>{s.t}</div>
                        <p className={styles.cardDescription}>{s.d}</p>
                        </li>
                    ))}
                    </ol>

                </div>
            </div>
        </section>
    );
}
