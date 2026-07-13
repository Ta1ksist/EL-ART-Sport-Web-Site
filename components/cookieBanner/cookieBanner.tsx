'use client';

import { useState, useEffect } from 'react';
import styles from './cookieBanner.module.css';

export default function CookieBanner() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setIsOpen(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAction = (status: 'accepted' | 'declined') => {
    localStorage.setItem('cookie_consent', status);
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className={styles.bannerContainer}>
      <div className={styles.card}>
        <div className={styles.content}>
          <div className={styles.textGroup}>
            <h3 className={styles.title}>Cookies Policy</h3>
            <p className={styles.description}>
              Мы используем файлы cookie для персонализации сервисов и повышения вашего комфорта.
               Оставаясь на сайте, вы соглашаетесь с их использованием.
            </p>
          </div>
          
          <div className={styles.actions}>
            <button
              onClick={() => handleAction('declined')}
              className={`${styles.btn} ${styles.btnDecline}`}
            >
              Отказаться
            </button>
            <button
              onClick={() => handleAction('accepted')}
              className={`${styles.btn} ${styles.btnAccept}`}
            >
              Принять
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
