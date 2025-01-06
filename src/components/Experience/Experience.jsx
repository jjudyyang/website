import React from "react";
import styles from "./Experience.module.css";

export const Experience = () => {
  const experiences = [
    {
      company: "Treasury Board Secretariat Ontario",
      position: "Product Management Intern",
      dates: "May 2024 - November 2024",
    },
    {
      company: "Pepper eCommerce",
      position: "Operations Analyst (Product Support)",
      dates: "September 2023 - December 2023",
    },
    {
      company: "Kindred AI",
      position: "QA Robotics Engineer",
      dates: "January 2023 - April 2023",
    },
  ];

  return (
    <section className={styles.container} id="experience">
      <div className={styles.leftColumn}>
        <h2 className={styles.title}>Experience</h2>
        <a
  href="https://drive.google.com/file/d/1r_gU4p5hiDYHFVErXvOCHQZP_sBitt2E/view"
  className={styles.resumeButton}
  target="_blank"
  rel="noopener noreferrer"
>
  Resume
</a>

      </div>
      <div className={styles.rightColumn}>
        {experiences.map((exp, index) => (
          <div key={index} className={styles.experienceSection}>
            <h3 className={styles.company}>{exp.company}</h3>
            <h4 className={styles.position}>{exp.position}</h4>
            <p className={styles.dates}>{exp.dates}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
