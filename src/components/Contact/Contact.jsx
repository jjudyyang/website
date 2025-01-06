import React from "react";

import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <p>judy yang</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href="mailto:j636yang@uwaterloo.ca" target="_blank" rel="noopener noreferrer">Email</a>
        </li>
        <li className={styles.link}>
          <a href="https://www.linkedin.com/in/jjudyyang/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </li>
        <li className={styles.link}>
          <a href="https://drive.google.com/file/d/1r_gU4p5hiDYHFVErXvOCHQZP_sBitt2E/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Resume</a>
        </li>
      </ul>
    </footer>
  );
};
