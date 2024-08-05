import React from "react";
import styles from "./AboutMe.module.css";
import { FaGamepad } from "react-icons/fa";
import { FaMusic } from "react-icons/fa";
import { MdTravelExplore } from "react-icons/md";
import { MdOutlineSystemSecurityUpdateGood } from "react-icons/md";
import { MdOutlineSportsBasketball } from "react-icons/md";
import { IoBookSharp } from "react-icons/io5";
import { FaBowlFood } from "react-icons/fa6";


 const AboutMe = () => {
  return (
    <section id="aboutMe" className={styles.aboutMe}>
      <div className={styles.containerSection}>
        <h2>ABOUT ME</h2>
        <p>
          <span>Hi there, I'm Andres Gomez</span>I'm a passionate individual
          with a diverse range of interests, including games, music, travel,
          sports, and reading. As a full-stack developer, I enjoy creating and
          working on various projects that challenge and inspire me. Whether I'm
          coding, exploring new places, or diving into a good book, I always
          strive to learn and grow. Thanks for stopping by, and feel free to
          connect with me!
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
                <FaGamepad />
                <span>Games</span>
              </div>
              <div className={styles.interest}>
                <FaMusic />
                <span>Music</span>
              </div>
              <div className={styles.interest}>
                <MdTravelExplore />
                <span>Travel</span>
              </div>
              <div className={styles.interest}>
                <MdOutlineSystemSecurityUpdateGood />
                <span>Technology</span>
              </div>
              <div className={styles.interest}>
                <FaBowlFood />
                <span>Windows</span>
              </div>
              <div className={styles.interest}>
                <MdOutlineSportsBasketball />
                <span>Sport</span>
              </div>
              <div className={styles.interest}>
                <IoBookSharp />
                <span>Read</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
