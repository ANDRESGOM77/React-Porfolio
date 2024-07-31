import React from "react";
import styles from "./Projects.module.css";
import project1 from "../../assets/project1.jpg";
// import project2 from "../../assets/project2.jpg"
// import project3 from "../../assets/project3.jpeg"
// import project4 from "../../assets/project4.jpeg"
// import project5 from "../../assets/project5.jpeg"
// import project6 from "../../assets/project6.jpeg"

const Portfolio = () => {
  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className={styles.containerSection}>
        <h2>PORTFOLIO</h2>
        <div className={styles.gallery}>
          <div className={styles.project}>
            <a href="https://github.com/ANDRESGOM77/E-commerce-BE" >
              <img src={project1} alt="E-commerce" />
            </a>
            <div className={styles.overlay}>
              <h3>Creative Design</h3>
              <p>Photography</p>
            </div>
          </div>
          <div className={styles.project}>
          <a href="https://github.com/ANDRESGOM77/E-commerce-BE" >
              <img src={project1} alt="E-commerce" />
            </a>
            <div className={styles.overlay}>
              <h3>Creative Design</h3>
              <p>Photography</p>
            </div>
          </div>
          <div className={styles.project}>
          <a href="https://github.com/ANDRESGOM77/E-commerce-BE" >
              <img src={project1} alt="E-commerce" />
            </a>
            <div className={styles.overlay}>
              <h3>Creative Design</h3>
              <p>Photography</p>
            </div>
          </div>
          <div className={styles.project}>
          <a href="https://github.com/ANDRESGOM77/E-commerce-BE" >
              <img src={project1} alt="E-commerce" />
            </a>
            <div className={styles.overlay}>
              <h3>Creative Design</h3>
              <p>Photography</p>
            </div>
          </div>
          <div className={styles.project}>
          <a href="https://github.com/ANDRESGOM77/E-commerce-BE" >
              <img src={project1} alt="E-commerce" />
            </a>
            <div className={styles.overlay}>
              <h3>Creative Design</h3>
              <p>Photography</p>
            </div>
          </div>
          <div className={styles.project}>
          <a href="https://github.com/ANDRESGOM77/E-commerce-BE" >
              <img src={project1} alt="E-commerce" />
            </a>
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
