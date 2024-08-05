import React from "react";
import "./Navbar.css";
import Logo from "../../../public/Hotpot.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='containerHeader'>
      <section>
        <div className='logo'>
          <Link to="/">Andres</Link>
        </div>
        <nav id="nav">
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/AboutMe">ABOUT</Link>
            </li>
            <li>
              <Link to="/Resume">RESUME</Link>
            </li>
            <li>
              <Link to="/Projects">PORTFOLIO</Link>
            </li>
            <li>
              <Link to="/ContactMe">CONTACT ME</Link>
            </li>
          </ul>
        </nav>
       
      </section>
    </div>
  );
};


export default Navbar