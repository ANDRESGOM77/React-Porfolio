import React from "react";
import styles from "./Hero.module.css";
import heroImg from "../../assets/hero-avatar.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import instaLight from "../../assets/instagram-dark.svg";
import instaDark from "../../assets/instagram-light.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/Professional Modern CV Resume (2).pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const instagramIcon = theme === "light" ? instaLight : instaDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight: linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Avatar picture of Andres Gomez"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Andres
          <br />
          Gomez
        </h1>
        <h2>Full-stack Developer</h2>
        <span>
          <a href="https://www.instagram.com/andres_gomez77/" target="_blank">
            <img src={instagramIcon} alt="Instagram" />
          </a>
          <a href="https://github.com/ANDRESGOM77" target="_blank">
            <img src={githubIcon} alt="GitHub" />
          </a>
          <a
            href="https://www.linkedin.com/in/andres-julian-gomez-suarez/"
            target="_blank"
          >
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
        </span>
        <p>
          I'm a full-stack developer with a passion for building scalable and
          efficient applications.
        </p>
        <a href={CV} download>
          <button className="hover">Download CV</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
