import React from "react";
import styles from "./Footer.module.css";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaSlack } from "react-icons/fa";

function Footer() {
  const { theme } = useTheme();

  // const instagramIcon = theme === "light" ? instaLight : instaDark;
  // const githubIcon = theme === "light" ? githubLight : githubDark;
  // const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <footer className={styles.footer}>
      <div className={styles.socials}>
      <FaGithub />
      <CiLinkedin />
      <FaInstagram />
      <FaSlack />
      </div>
    </footer>
  );
}

export default Footer;
