import React from "react";
import styles from "./Footer.module.css";
import instaLight from "../../assets/instagram-dark.svg";
import instaDark from "../../assets/instagram-light.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";

function Footer() {
  const { theme } = useTheme();

  const instagramIcon = theme === "light" ? instaLight : instaDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <footer className={styles.footer}>
      <div className={styles.socials}>
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
      </div>
    </footer>
  );
}

export default Footer;
