import React from "react";
import * as styles from "../../styles";
const Theory: React.FC = () => {
  return (
    <section className="basic-functions flex flex-col gap-10">
      <div className={styles.heading}>0. Theory & Git Setup</div>
      <div className={styles.subheading}>0.1. Setup Section</div>
      <div className="setup-section"></div>
      <div className={styles.subheading}>0.2. Theory Section</div>
      <div className="theory-section"></div>
    </section>
  );
};
export default Theory;
