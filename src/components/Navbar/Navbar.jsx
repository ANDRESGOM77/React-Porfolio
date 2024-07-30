import React from 'react'
import styles from './Navbar.module.css'

export const Navbar = () => {
  return (
    <div className={styles.containerHeader}>
    <section>
        <div className={styles.logo}>
            <a href="#">Andres</a>
        </div>
        <nav id="nav" >
            <ul>
                <li><a href="/" onclick="Select()">HOME</a></li>
                <li><a href="#aboutMe" onclick="Select()">ABOUT </a></li>
                <li><a href="#resume" onclick="Select()">RESUME</a></li>
                <li><a href="#portfolio" onclick="Select()">PORTFOLIO</a></li>
                <li><a href="#contactMe" onclick="Select()">CONTACT ME</a></li>
            </ul>
        </nav>
        <div className={styles.navResponsive} onclick="ShowHideMenu()">
            
        </div>
    </section>
</div>
  )
}
