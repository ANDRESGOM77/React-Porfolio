import React from "react";
import styles from "./ContactMe.module.css"

export const ContactMe = () => {
  return (
    <section className={styles.contactMe} id="contact-me">
      <div className={styles.containerSection}>
        <h3>CONTACT ME</h3>
        <div className={styles.row}>
          <div className={styles.col}>
            <input type="text" placeholder="Your name" />
            <input type="text" placeholder="Your Phone Number" />
            <input type="text" placeholder="Email Address" />
            <input type="text" placeholder="Topic" />
            <textarea placeholder="Message" rows={10} cols={30} />
            <button>
              Send Message
              
              <span className={styles.overlay} />
            </button>
          </div>
          <div className={styles.col}>
            <img src="" alt="Location of Sydney" />
            <div className={styles.info}>
              <ul>
                <li>
                 
                  Sydney, Australia
                </li>
                <li>
                  
                  Contact Me: +61 0404332389
                </li>
                <li>
                  
                  Email Me: andresgom2009@gmail.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
