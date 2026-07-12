'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './navigation.module.css';

const NAV_LINKS = [
  { href: '/Services', label: 'Услуги' },
  { href: '/Projects', label: 'Проекты' },
  { href: '/AboutUs', label: 'О нас' },
  { href: '/Contact', label: 'Контакты' },
  { href: '/FAQ', label: 'Частые вопросы' },
];

const LEGAL_LINKS = [
  { href: '/Legal/privacy-policy', label: 'Политика конфиденциальности' },
  { href: '/Legal/cookie-policy', label: 'Политика куки-файлов' },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isLight = pathname === '/';
  const isDark = !isLight || scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header className={`${styles.header} ${isDark ? styles.scrolled : ''} ${menuOpen ? styles.headerMenuOpen : ''}`}>
        <div className={styles.container}>
          <Link href="/" className={styles.logo} onClick={() => setMenuOpen(false)}>
            <span className={`${styles.logoText} ${isDark && !menuOpen ? styles.logoTextDark : ''}`}>
              EL'ART
            </span>
          </Link>
          
          <nav className={styles.nav}>
            {NAV_LINKS.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className={`${styles.navLink} ${pathname.startsWith(link.href) ? styles.active : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            className={`${styles.burgerBtn} ${menuOpen ? styles.burgerActive : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
          >
            <span className={styles.burgerLine} style={{ backgroundColor: isDark && !menuOpen ? '#212121' : '#ffffff' }} />
            <span className={styles.burgerLine} style={{ backgroundColor: isDark && !menuOpen ? '#212121' : '#ffffff' }} />
          </button>
        </div>
      </header>

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}>
        <div className={styles.mobileMenuWrapper}>
          
          <nav className={styles.mobileNav}>
            {NAV_LINKS.map((link, index) => (
              <div 
                key={link.href} 
                className={styles.animatedItem} 
                style={{ animationDelay: `${0.1 + index * 0.08}s` }}
              >
                <Link 
                  href={link.href} 
                  className={`${styles.mobileNavLink} ${pathname.startsWith(link.href) ? styles.mobileActive : ''}`} 
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </div>
            ))}
          </nav>

          <div className={`${styles.mobileFooter} ${styles.animatedItem}`} style={{ animationDelay: '0.5s' }}>
            <div className={styles.mobileFooterLinks}>
              {LEGAL_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className={styles.mobileFooterLink} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </Link>
              ))}
              <div className={styles.supportBlock}>
                <span className={styles.supportLabel}>Связаться с нами</span>
                <a href="mailto:el.artstudio@mail.ru" className={styles.supportEmail}>el.artstudio@mail.ru</a>
              </div>
            </div>
            
            <div className={styles.mobileCopyright}>
              <p>© 2026 EL'ART</p>
              <p className={styles.studioSignature}>Architecture & Business Logic</p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
