import React from "react";
import styles from "./Projects.module.css";
import project1 from "../../assets/project1.jpg";
import watch from "../../assets/project2.jpeg";
import Calculator from "../../assets/project3.jpeg";
import project4 from "../../assets/project4.jpeg";
import project5 from "../../assets/project5.jpeg";
import project6 from "../../assets/project6.jpeg";

const Portfolio = () => {
  let projects = [
    {
      image: project1,
      alt: "E-commerce",
      link: "https://github.com/ANDRESGOM77/E-commerce-BE",
    },
    {
      image: watch,
      alt: "Digital watch",
      link: "https://github.com/ANDRESGOM77/Digital-Clock",
    },
    {
      image: Calculator,
      alt: "calculator",
      link: "https://github.com/ANDRESGOM77/Calculator",
    },
    {
      image: project4,
      alt: "Date of birth",
      link: "https://github.com/falfada/best-day-of-the-year",
    },
    {
      image: project5,
      alt: "Dungeons and dragons",
      link: "https://github.com/SouptheFull-Stack/DND-Character-Builder-and-Database",
    },
    { image: project6, alt: "Portfolio", link: "" },
  ];
  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className={styles.containerSection}>
        <h2>PORTFOLIO</h2>
        <div className={styles.gallery}>

            <div className={styles.project}>
              <img src={project1} />
              <div className={styles.overlay}>
                <h3>Creative Design</h3>
                <a href="https://github.com/ANDRESGOM77/E-commerce-BE">
                  <p>E-commerce</p>
                </a>
              </div>
            </div>
            <div className={styles.project}>
            <img src={watch} />
              <div className={styles.overlay}>
                <h3>Creative Design</h3>
                <a href="https://github.com/ANDRESGOM77/Digital-Clock">
                  <p>Digital watch</p>
                </a>
              </div>
            </div>
            <div className={styles.project}>
              <img src={Calculator} />
              <div className={styles.overlay}>
                <h3>Creative Design</h3>
                <a href="https://github.com/ANDRESGOM77/Calculator">
                  <p>Calculator</p>
                </a>
              </div>
            </div>
            <div className={styles.project}>
              <img src={project4} />
              <div className={styles.overlay}>
                <h3>Creative Design</h3>
                <a href="https://github.com/falfada/best-day-of-the-year">
                  <p>E-commerce</p>
                </a>
              </div>
            </div>
            <div className={styles.project}>
              <img src={project5} />
              <div className={styles.overlay}>
                <h3>Creative Design</h3>
                <a href="https://github.com/SouptheFull-Stack/DND-Character-Builder-and-Databas">
                  <p>Dnd</p>
                </a>
              </div>
            </div>
            <div className={styles.project}>
              <img src={project6} />
              <div className={styles.overlay}>
                <h3>Creative Design</h3>
                <a href="https://github.com/ANDRESGOM77/React-Porfolio">
                  <p>Portfolio</p>
                </a>
              </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Portfolio;
