import Link from 'next/link';
import styles from '@/components/footer/footer.module.css';

const NAV_LINKS = [
  { href: '/Services', label: 'Услуги' },
  { href: '/Projects', label: 'Проекты' },
  { href: '/AboutUs', label: 'О нас' },
  { href: '/Contact', label: 'Контакты' },
  { href: '/FAQ', label: 'Частые вопросы' },
];

const LEGAL_LINKS = [
  { href: '/Legal/Privacy-policy', label: 'Политика конфиденциальности' },
  { href: '/Legal/Cookie-policy', label: 'Политика куки-файлов' },
  // { href: '/Legal/About-company', label: 'Информация о компании' },
];

function SocialIcons() {
  return (
    <div className={styles.socials}>
      <a href="https://wa.me/79061114994" rel="noopener noreferrer" target="_blank" aria-label="WhatsApp" className={styles.socialLink}>
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
          <path fill="white" d="M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.76.457 3.473 1.328 4.981L2 22l5.161-1.353a9.923 9.923 0 0 0 4.848 1.264h.004c5.504 0 9.988-4.484 9.988-9.99A9.92 9.92 0 0 0 12.012 2Zm5.842 14.331c-.244.688-1.213 1.254-1.684 1.317-.433.059-.993.096-2.905-.662-2.443-.967-4.004-3.447-4.126-3.61-.12-.162-1.002-1.332-1.002-2.54 0-1.208.629-1.802.853-2.046.224-.244.488-.305.65-.305h.427c.143 0 .325-.054.488.346.162.407.569 1.382.62 1.484.05.102.081.224.01.366s-.102.244-.204.366c-.102.122-.213.272-.305.378-.102.112-.208.234-.091.433.117.199.52 1.8.847 2.102.408.406.84.58.994.65.153.072.244.041.336-.061.091-.102.406-.467.518-.629.112-.163.224-.132.376-.081.153.051.966.457 1.129.539.163.081.274.122.315.193.041.071.041.417-.203 1.106Z"/>
        </svg>
      </a>
      <a href="https://t.me/elinazakirova" rel="noopener noreferrer" target="_blank" aria-label="Telegram" className={styles.socialLink}>
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">
          <path fill="white" d="M13,0C5.8,0,0,5.8,0,13c0,7.2,5.8,13,13,13c7.2,0,13-5.8,13-13C26,5.8,20.2,0,13,0z M19.4,8.9L17.3,19c-0.2,0.7-0.6,0.9-1.2,0.6l-3.3-2.4l-1.6,1.5c-0.2,0.2-0.3,0.3-0.7,0.3l0.2-3.3l6-5.4c0.3-0.2-0.1-0.4-0.4-0.1L9,14.8l-3.2-1c-0.7-0.2-0.7-0.7,0.1-1l12.5-4.8C19.1,7.7,19.6,8,19.4,8.9z"/>
        </svg>
      </a>
      <a href="https://www.instagram.com/ellinazakirova?igsh=MW5icnVycjIwamszMw==" rel="noopener noreferrer" target="_blank" aria-label="Instagram" className={styles.socialLink}>
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
          <path fill="white" d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm0 2h8.5C18.33 4 20 5.67 20 7.75v8.5C20 18.33 18.33 20 16.25 20h-8.5C5.67 20 4 18.33 4 16.25v-8.5C4 5.67 5.67 4 7.75 4zm9.5 1a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
        </svg>
      </a>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        <Link href="/" className={styles.logoBlock}>
          <span className={styles.elartText}>EL'ART</span>
        </Link>


        <div className={styles.mainRow}>
          <nav className={styles.nav}>
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className={styles.navLink}>
                {link.label}
              </Link>
            ))}
          </nav>
          <div className={styles.contactsBlock}>
            <a href="mailto:el.artstudio@mail.ru" className={styles.email}>
              el.artstudio@mail.ru
            </a>
            <SocialIcons />
          </div>
        </div>
        <hr className={styles.divider} />
        <div className={styles.bottom}>
          <nav className={styles.legalNav}>
            {LEGAL_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className={styles.legalLink}>
                {link.label}
              </Link>
            ))}
          </nav>
          <nav className={styles.devNav}>
            <Link href="https://t.me/taksadrom" className={styles.devLink}>Разработчик сайта
            </Link>
          </nav>
          <span className={styles.copy}>© 2026 EL'ART</span>
        </div>
      </div>
    </footer>
  );
}