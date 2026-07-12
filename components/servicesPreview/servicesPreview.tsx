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
                            От первого эскиза до финального варианта.
                        </h2>
                        <Link href="/Services" className={styles.link}>
                            Ознакомьтесь с услугами →
                        </Link>
                    </div>
                    
                    <ol className={styles.servicesGrid}>
                    {[
                        { 
                        n: "01", 
                        t: "Подбор помещения", 
                        d: "Помощь в подборе. Анализ локаций, технический аудит объекта и оценка пригодности здания под конкретные спортивные дисциплины." 
                        },
                        { 
                        n: "02", 
                        t: "Бизнес-план", 
                        d: "Расчет инвестиций, окупаемости, операционных расходов и создание финансовой модели будущего комплекса." 
                        },
                        { 
                        n: "03", 
                        t: "Комплексный консалтинг", 
                        d: "Экспертное сопровождение на всех этапах: от юридических тонкостей до подбора спортивного оборудования." 
                        },
                        { 
                        n: "04", 
                        t: "Архитектурный проект", 
                        d: "Проектирование зонирования, расчет нагрузок, вентиляции и планирование потоков посетителей по стандартам." 
                        },
                        { 
                        n: "05", 
                        t: "Дизайн-проект", 
                        d: "Разработка интерьерных решений, подбор износостойких материалов, профессионального освещения и мебели." 
                        },
                        { 
                        n: "06", 
                        t: "Графический дизайн", 
                        d: "Создание фирменного стиля, логотипа, навигации по комплексу и брендбука для успешного открытия." 
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
