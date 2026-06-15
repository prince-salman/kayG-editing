import React from 'react';
import styles from './Hero.module.css';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.heroContainer}`}>
        <div className={`animate-fade-up ${styles.content}`}>
          <h1 className={styles.title}>{t('hero_title')}</h1>
          <p className={styles.subtitle}>
            {t('hero_subtitle')}
          </p>
          <div className={styles.actions}>
            <a href="#portfolio" className="btn-secondary">{t('hero_btn_explore')}</a>
            <a href="#contact" className="btn-primary">{t('hero_btn_start')}</a>
          </div>
        </div>
      </div>
      <div className={styles.glow}></div>
    </section>
  );
};

export default Hero;
