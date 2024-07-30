import React from "react";
import styles from "./AboutMe.module.css";

export const AboutMe = () => {
  return (
    <section id="aboutMe" className={styles.aboutMe}>
      <div className={styles.containerSection}>
        <h2>ABOUT ME</h2>
        <p>
          <span>Hi there, I'm Andres Gomez</span>Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quisquam, quaerat. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Quisquam, quaerat. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Quisquam, quaerat. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quaerat.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quaerat.
        </p>
        <div className={styles.row}>
          <div className={styles.col}>
            <h3>Personal Data</h3>
            <ul>
              <li>
                <strong>Birthday</strong>
                20/09/2000
              </li>
              <li>
                <strong>Phone</strong>
                +61 0404332389
              </li>
              <li>
                <strong>Email</strong>
                andresgom2009@gmail.com
              </li>
              <li>
                <strong>Website</strong>
              </li>
              <li>
                <strong>Address</strong>
                113 Mount St, Coogee, NSW.
              </li>
            </ul>
          </div>
          <div className={styles.col}>
            <h3>Interest</h3>
            <div className={styles.containerInterest}>
              <div className={styles.interest}>
                {/* <i className="fa-solid fa-gamepad"></i> */}
                <span>Games</span>
              </div>
              <div className={styles.interest}>
                {/* <i className="fa-solid fa-headphones"></i> */}
                <span>Music</span>
              </div>
              <div className={styles.interest}>
                {/* <i className="fa-solid fa-plane"></i> */}
                <span>Travel</span>
              </div>
              <div className={styles.interest}>
                {/* <i className="fa-brands fa-windows"></i> */}
                <span>Windows</span>
              </div>
              <div className={styles.interest}>
                {/* <i className="fa-brands fa-windows"></i> */}
                <span>Windows</span>
              </div>
              <div className={styles.interest}>
                {/* <i className="fa-solid fa-basketball"></i> */}
                <span>Sport</span>
              </div>
              <div className={styles.interest}>
                {/* <i className="fa-solid fa-book"></i> */}
                <span>Read</span>
              </div>
            </div>
          </div>
        </div>
        <button>
          Download CV
          {/* Download CV<i className="fa-solid fa-download"></i> */}
          <span className={styles.overlay}></span>
        </button>
      </div>
    </section>
  );
};
 
export default AboutMe;