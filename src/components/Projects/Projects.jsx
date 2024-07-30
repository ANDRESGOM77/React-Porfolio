import React from 'react'
import styles from "./Projects.module.css"


const Portfolio = () => {
    return (
      <section id="portfolio" className={styles.portfolio}>
        <div className={styles.containerSection}>
          <h2>PORTFOLIO</h2>
          <div className={styles.gallery}>
            <div className={styles.project}>
              <img src="" alt="Project1" />
              <div className={styles.overlay}>
                <h3>Creative Design</h3>
                <p>Photography</p>
              </div>
            </div>
            <div className={styles.project}>
              <img src="" alt="Project1" />
              <div className={styles.overlay}>
                <h3>Creative Design</h3>
                <p>Photography</p>
              </div>
            </div>
            <div className={styles.project}>
              <img src="" alt="Project1" />
              <div className={styles.overlay}>
                <h3>Creative Design</h3>
                <p>Photography</p>
              </div>
            </div>
            <div className={styles.project}>
              <img src="" alt="Project1" />
              <div className={styles.overlay}>
                <h3>Creative Design</h3>
                <p>Photography</p>
              </div>
            </div>
            <div className={styles.project}>
              <img src="" alt="Project1" />
              <div className={styles.overlay}>
                <h3>Creative Design</h3>
                <p>Photography</p>
              </div>
            </div>
            <div className={styles.project}>
              <img src="" alt="Project1" />
              <div className={styles.overlay}>
                <h3>Creative Design</h3>
                <p>Photography</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Portfolio;
