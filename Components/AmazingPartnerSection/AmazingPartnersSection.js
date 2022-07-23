import styles from "../../styles/AmazingPartner.module.css";
const AmazingPartnersSection = () => {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.container}>
        <div className={styles.evenColumns}>
          <div className={styles.headingContainer}>
            <h2 className={styles.primaryHeading}>
              Our Amazing Partners<span className={styles.fullStop}>.</span>
            </h2>
            <h4 className={styles.secondaryHeading}>Short Introduction</h4>
          </div>
          <div className={styles.iconsContainer}>
            <img src="\behance.png" alt="logo" className={styles.logo} />
            <img src="\behance.png" alt="logo" className={styles.logo} />
            <img src="\behance.png" alt="logo" className={styles.logo} />
            <img src="\behance.png" alt="logo" className={styles.logo} />

            <img src="\behance.png" alt="logo" className={styles.logo} />
            <img src="\behance.png" alt="logo" className={styles.logo} />
            <img src="\behance.png" alt="logo" className={styles.logo} />
            <img src="\behance.png" alt="logo" className={styles.logo} />

            <img src="\behance.png" alt="logo" className={styles.logo} />
            <img src="\behance.png" alt="logo" className={styles.logo} />
            <img src="\behance.png" alt="logo" className={styles.logo} />
            <img src="\behance.png" alt="logo" className={styles.logo} />

            <img src="\behance.png" alt="logo" className={styles.logo} />
            <img src="\behance.png" alt="logo" className={styles.logo} />
            <img src="\behance.png" alt="logo" className={styles.logo} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmazingPartnersSection;
