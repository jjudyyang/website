import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <div className={styles.content}>
        {/* Column 1: Text */}
        <div className={styles.textBox}>
          <p>
            Hi there—I’m <strong>Judy Yang</strong>, a Computer Science student
            at the University of Waterloo with a passion for problem-solving and
            creating innovative products that bring everyday delight.
          </p>
          <p>
            My technical background, combined with creative thinking and eagerness to
            tackle challenges drives my work.
          </p>
          <p>
            I aspire to learn as much about the world as possible and bring more empathy
            into tech. I hope to eventually develop a product of my own and share it with
            my community.
          </p>
          <p>
            In my free time, you can find me editing videos, recipe testing or planning my
            next bike trip.
          </p>
          <a href="/resume.pdf" className={styles.button} target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </div>

        {/* Column 2: Image */}
        <div className={styles.imageBox}>
          <img
            src={getImageUrl("about/judyonbridge.png")}
            alt="Judy Yang smiling with bridge in the background"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};
