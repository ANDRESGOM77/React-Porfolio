import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../../../public/Hotpot.png";

export const Navbar = () => {
  return (
    <div className={styles.containerHeader}>
      <section>
        <div className={styles.logo}>
          <a href="/">Andres</a>
        </div>
        <nav id="nav">
          <ul>
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/AboutMe">ABOUT</a>
            </li>
            <li>
              <a href="/Resume">RESUME</a>
            </li>
            <li>
              <a href="/Projects">PORTFOLIO</a>
            </li>
            <li>
              <a href="/ContactMe">CONTACT ME</a>
            </li>
          </ul>
        </nav>
        <div className={styles.navResponsive} ></div>
      </section>
    </div>
  );
};
