import React from "react";
import styles from "./Resume.module.css";
import CV from "../../assets/Professional Modern CV Resume (2).pdf";

export const Resume = () => {
  return (
    <section id="resume" className={styles.resume}>
      <div className={styles.containerSection}>
        <h2>RESUME</h2>
        <div className={styles.row}>
          <div className={styles.colLeft}>
            <h3>Education</h3>
            <div className={styles.itemLeft}>
              <h4>High school</h4>
              <span className={styles.house}>Colegio Antonio Narino</span>
              <span className={styles.date}>2012-2017</span>
              <p>completed High School</p>
            </div>
            <div className={styles.itemLeft}>
              <h4>Vet Business III</h4>
              <span className={styles.house}>Mercury University</span>
              <span className={styles.date}>2020-2021</span>
              <p>Business Strategy, Project Management, Financial Analysis</p>
            </div>
            <div className={styles.itemLeft}>
              <h4>Vet Business IV</h4>
              <span className={styles.house}>Mercury University</span>
              <span className={styles.date}>2021-2022</span>
              <p>Marketing, Human Resources, Business Communication</p>
            </div>
          </div>
          <div className={styles.colRight}>
            <h3>Experience</h3>
            <div className={styles.itemRight}>
              <h4>Assistant Manager</h4>
              <span className={styles.house}>Cali Press — Coogee </span>
              <span className={styles.date}>current</span>
              <p>
                As an Assistant Manager, you support daily operations by
                overseeing staff, managing inventory, and ensuring excellent
                customer service. You assist with scheduling, training, and
                resolving customer issues, while also handling financial tasks
                like cash handling and sales reporting. Your role is crucial in
                maintaining a welcoming environment and achieving business
                goals.
              </p>
            </div>
            <div className={styles.itemRight}>
              <h4>Team Leader</h4>
              <span className={styles.house}>The Crowne Plaza — Coogee </span>
              <span className={styles.date}>2012-2017</span>
              <p>
                As a Team Leader, you manage the dining staff, coordinate
                service, and ensure guest satisfaction. You oversee shifts,
                train team members, and handle guest concerns, maintaining high
                service standards and a welcoming environment.
              </p>
            </div>
            <div className={styles.itemRight}>
              <h4>Barista, Food and beverage preparation</h4>
              <span className={styles.house}>Gusto Espresso Bar- Coogee</span>
              <span className={styles.date}>2021-2023</span>
              <p>
                As a Barista and Food Preparation team member, you craft
                beverages, prepare food items, and provide excellent customer
                service. Your responsibilities include taking orders,
                maintaining a clean workspace, and ensuring product quality. You
                also assist in restocking supplies and handling customer
                inquiries, contributing to a pleasant and efficient café
                experience.
              </p>
            </div>
          </div>
        </div>
      </div>
      <a href={CV} download>
        <button className="hover">Download CV</button>
      </a>
    </section>
  );
};
