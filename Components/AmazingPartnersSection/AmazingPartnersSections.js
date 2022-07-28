import styles from "../../styles/AmazingPartners.module.css";
const AmazingPartnersSection = () => {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.headingContainer}>
        <h2 className={styles.primaryHeading}>
          Our Amazing Partners<span className={styles.fullStop}>.</span>
        </h2>
        <h4 className={styles.secondaryHeading}>Short Introduction</h4>
      </div>
      <div className={styles.iconContainer}>
        <div className={styles.iconWrapper}>
          <img src="/behance.png" alt="logo" className={styles.logo} />
          <img src="/googlelogo.png" alt="logo" className={styles.logo} />
          <img src="/behance.svg" alt="logo" className={styles.logo} />
          <img src="/dribblelogo.png" alt="logo" className={styles.logo} />
        </div>
        <div className={styles.iconWrapper}>
          <img src="/uplabslogo.png" alt="logo" className={styles.logo} />
          <img src="/99designslogo.png" alt="logo" className={styles.logo} />
          <img src="/behance.png" alt="logo" className={styles.logo} />
          <img src="/googlelogo.png" alt="logo" className={styles.logo} />
        </div>
        <div className={styles.iconWrapper}>
          <img src="/behance.png" alt="logo" className={styles.logo} />
          <img src="/uplabslogo.png" alt="logo" className={styles.logo} />
          <img src="/googlelogo.png" alt="logo" className={styles.logo} />
          <img src="/dribblelogo.png" alt="logo" className={styles.logo} />
        </div>
      </div>
    </section>
  );
};

export default AmazingPartnersSection;
