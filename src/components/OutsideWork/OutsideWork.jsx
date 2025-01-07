import React from "react";
import styles from "./OutsideWork.module.css";

const OutsideWork = ({ images }) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.header}>Experience</h2>
      <div className={styles.grid}>
        {images.map((image, index) => (
          <div key={index} className={styles.imageContainer}>
            <img src={image.src} alt={image.alt || `Image ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OutsideWork;
