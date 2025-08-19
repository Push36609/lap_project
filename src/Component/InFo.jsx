import React from "react";
import styles from "./InFo.module.css";

function Info() {
  const sections = [
    { title: "Administrative Positions/Activities" },
    { title: "Awards/Honors" },
    { title: "Academic Career/ Member" },
    { title: "Other Professional Activities" },
  ];

  return (
    <div className={styles.InfoContainer}>
      {sections.map((section, index) => (
        <div  className={styles.Section} key={index}>
          <h1 className={styles.Heading}>{section.title}</h1>
        <div className={styles.InfoContent}>
          {[1, 2, 3].map((num) => (
            <div key={num} className={styles.InfoBox}>
              container{num}
            </div>
          ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Info;
