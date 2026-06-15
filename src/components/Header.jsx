import React from 'react';
import styles from './Header.module.css';
import { useLanguage } from '../context/LanguageContext';

const Header = () => {
  const { lang, t, toggleLanguage } = useLanguage();

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <div className={styles.logo}>
          <a href="#">KayG_Editing</a>
        </div>
        <nav className={styles.nav}>
          <ul>
            <li><a href="#portfolio">{t('nav_portfolio')}</a></li>
            <li>
              <button className={styles.langToggle} onClick={toggleLanguage}>
                {lang === 'id' ? 'EN' : 'ID'}
              </button>
            </li>
            <li><a href="#contact" className="btn-primary">{t('nav_order')}</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
