'use client';

import { useState } from "react";
import styles from "./contactForm.module.css";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <section className={styles.mainSection}>
      <div className={styles.centerWrapper}>
        <div className={styles.mainGrid}>
          
          <div className={styles.formContainer}>
            {sent ? (
              <div className={styles.successBlock}>
                <div className={styles.eyebrow}>Заявка принята</div>
                <h2 className={styles.successTitle}>Благодарим вас.</h2>
                <p className={styles.successDesc}>
                  Мы получили ваши данные и свяжемся с вами в течение двух рабочих дней для уточнения деталей.
                </p>
              </div>
            ) : (
              <form
                className={styles.formFields}
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <Field label="Ваше имя" name="name" required />
                {/* <Field label="Электронная почта" name="email" type="email" required /> */}
                <Field label="Телефон" name="phone" type="tel" required/>
                <Field label="Город" name="city" />
                
                <div>
                  <label className={styles.label} htmlFor="project">
                    Тип объекта
                  </label>
                  <select
                    id="project"
                    name="project"
                    className={styles.select}
                    defaultValue=""
                  >
                    <option value="" disabled>Выберите из списка…</option>
                    <option>Спортивный комплекс</option>
                    <option>Жилье</option>
                    <option>Коммерция</option>
                  </select>
                </div>

                <div>
                  <span className={styles.label}>Есть ли готовое помещение?</span>
                  <div className={styles.radioGroup}>
                    <label className={styles.radioLabel}>
                      <input 
                        type="radio" 
                        name="hasPremises" 
                        value="yes" 
                        className={styles.radioInput} 
                      />
                      <span className={styles.radioCustom}>Да, помещение есть</span>
                    </label>
                    <label className={styles.radioLabel}>
                      <input 
                        type="radio" 
                        name="hasPremises" 
                        value="no" 
                        className={styles.radioInput} 
                      />
                      <span className={styles.radioCustom}>Нет, есть земельный участок</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className={styles.label} htmlFor="message">
                    Краткое описание задачи
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className={styles.textarea}
                    placeholder="Площадь объекта, стадия готовности, ваши цели..."
                  />
                </div>

                <button type="submit" className={styles.submitBtn}>
                  Отправить запрос →
                </button>
              </form>
            )}
          </div>

          <aside className={styles.aside}>            
            <Detail label="Email">
              <a href="mailto:el.artstudio@mail.ru" className={styles.linkUnderline}>
                el.artstudio@mail.ru
              </a>
            </Detail>
            
            <Detail label="Телефон">
              <a href="tel:+79061114994" className={styles.linkUnderline}>+7 (906) 111-49-94</a>
            </Detail>
            
            <Detail label="Время работы">
              Понедельник — Пятница · 09:00 — 19:00<br />
              Онлайн конференции проводятся по предварительной записи
            </Detail>
            
            <Detail label="Мы в сети">
              <div className={styles.socialsRow}>
                <a href="https://www.instagram.com/ellinazakirova?igsh=MW5icnVycjIwamszMw==" className={styles.linkUnderline}>Instagram</a>
                <a href="https://t.me/elinazakirova" className={styles.linkUnderline}>Telegram</a>
                <a href="https://wa.me/79061114994" className={styles.linkUnderline}>WhatsApp</a>
              </div>
            </Detail>
          </aside>
        </div>
      </div>
    </section>
  );
}


function Field({
  label, name, type = "text", required,
}: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className={styles.label} htmlFor={name}>
        {label}{required && <span style={{ color: 'var(--color-black)' }}> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className={styles.input}
      />
    </div>
  );
}


function Detail({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className={styles.detailItem}>
      <div className={styles.label}>{label}</div>
      <div className={styles.detailContent}>{children}</div>
    </div>
  );
}
