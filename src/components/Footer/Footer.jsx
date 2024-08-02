import "./Footer.css";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaSlack } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="socials">
        <a href="https://github.com/ANDRESGOM77">
          <FaGithub className="Git" />
        </a>
        <a href="https://www.linkedin.com/in/andres-julian-gomez-suarez/">
          <CiLinkedin className="link" />
        </a>
        <a href="https://www.instagram.com/andres_gomez77/">
          <FaInstagram className="Insta" />
        </a>
        <FaSlack className="slack" />
      </div>
    </footer>
  );
}

export default Footer;
