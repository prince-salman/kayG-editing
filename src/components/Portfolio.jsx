import React from 'react';
import styles from './Portfolio.module.css';
import { useLanguage } from '../context/LanguageContext';

const Portfolio = () => {
  const { t } = useLanguage();

  const projects = [
    { id: 1, videoId: "1ci_5UlseEoabVUherydqTm0mgY9INVox" },
    { id: 2, videoId: "1dGMt_vZgYDj-0549-sOe0DvxFUhy2rJn" },
    { id: 3, videoId: "1dEcCIoTaJvBvaxP4WnnWoo27UqIERnmY" },
    { id: 4, videoId: "1dAPlNK2B_e9afIrnbOGl2zyPJxIUYmvA" },
    { id: 5, videoId: "1dHNNTjg4MEBYHLGyT52hcJe1GISQgBo_" },
    { id: 6, videoId: "1d8wEUOqr3htnc9rX8Qwpx_XVgjHfRPvJ" },
    { id: 7, videoId: "1dJ9WEQX7TMzVF_gjFRjl9xdlNO89tVwa" },
    { id: 8, videoId: "1OF0QwWp7zOwaGvwOcMwOtlotH-rQLh2S" }
  ];

  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className="container">
        <h2 className="section-title">{t('port_title')}</h2>
        <p className="section-subtitle">
          {t('port_subtitle')}
        </p>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div className={styles.card} key={project.id}>
              <div className={styles.videoWrapper}>
                <iframe 
                  src={`https://drive.google.com/file/d/${project.videoId}/preview`} 
                  width="100%" 
                  height="100%" 
                  title={`Portfolio Video ${index + 1}`}
                  allow="autoplay; encrypted-media; fullscreen"
                  allowFullScreen
                  className={styles.iframe}
                ></iframe>
              </div>
              <div className={styles.info}>
                <h3 className={styles.projectTitle}>{t('nav_portfolio')}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
