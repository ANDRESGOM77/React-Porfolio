import React from "react";
import styles from "./Resume.module.css";

export const Resume = () => {
  return (
    <section id="resume" className={styles.resume}>
      <div className={styles.containerSection}>
        <h2>RESUME</h2>
        <div className={styles.row}>
          <div className={styles.colLeft}>
            <h3>Education</h3>
            <div className={styles.itemLeft}>
              <h4>High school</h4>
              <span className={styles.house}>Colegio Antonio Narino</span>
              <span className={styles.date}>2012-2017</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quaerat.
              </p>
            </div>
            <div className={styles.itemLeft}>
              <h4>High school</h4>
              <span className={styles.house}>Colegio Antonio Narino</span>
              <span className={styles.date}>2012-2017</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quaerat.
              </p>
            </div>
            <div className={styles.itemLeft}>
              <h4>High school</h4>
              <span className={styles.house}>Colegio Antonio Narino</span>
              <span className={styles.date}>2012-2017</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quaerat.
              </p>
            </div>
          </div>
          <div className={styles.colRight}>
            <h3>Experience</h3>
            <div className={styles.itemRight}>
              <h4>Head Barista</h4>
              <span className={styles.house}>Colegio Antonio Narino</span>
              <span className={styles.date}>2012-2017</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quaerat.
              </p>
            </div>
            <div className={styles.itemRight}>
              <h4>Head Barista</h4>
              <span className={styles.house}>Colegio Antonio Narino</span>
              <span className={styles.date}>2012-2017</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quaerat.
              </p>
            </div>
            <div className={styles.itemRight}>
              <h4>Head Barista</h4>
              <span className={styles.house}>Colegio Antonio Narino</span>
              <span className={styles.date}>2012-2017</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quaerat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
