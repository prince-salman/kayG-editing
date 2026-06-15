import React from 'react';
import styles from './Footer.module.css';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.brand}>
            <h3>KayG_Editing</h3>
            <p>{t('footer_desc')}</p>
          </div>
          <div className={styles.links}>
            <h4>{t('footer_links')}</h4>
            <ul>
              <li><a href="#portfolio">{t('nav_portfolio')}</a></li>
              <li><a href="#contact">{t('contact_title')}</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>
            &copy; {new Date().getFullYear()} KayG_Editing. All rights reserved. | Website developed by <a href="https://portofolio-salman.netlify.app/" target="_blank" rel="noopener noreferrer" className={styles.devLink}>Salman</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
