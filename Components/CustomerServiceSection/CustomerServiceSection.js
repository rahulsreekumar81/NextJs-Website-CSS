import styles from "../../styles/CustomerService.module.css";
const CustomerServiceSection = () => {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.flexContainer}>
        <div className={styles.flexChild1}>
          <div className={styles.headingContainer}>
            <h2 className={styles.primaryHeading}>
              Customer Service<span className={styles.fullStop}>.</span>
            </h2>
            <h4 className={styles.secondaryHeading}>Short Introduction</h4>
          </div>
          <div className={styles.listContainer}>
            <div className={styles.communicationContainer}>
              <img src="/call-icon.png" alt="logo" className={styles.logo} />
              <h5 className={styles.contactInfo}>+1-234-567-890</h5>
            </div>
            <div className={styles.communicationContainer}>
              <img src="/message-icon.png" alt="logo" className={styles.logo} />
              <h5 className={styles.contactInfo}>
                Financial Service@gmail.com
              </h5>
            </div>
            <div className={styles.communicationContainer}>
              <img
                src="/location-icon.png"
                alt="logo"
                className={styles.logo}
              />
              <h5 className={styles.contactInfo}>
                Rockefeller PlazaNew York, NY 10112
              </h5>
            </div>
          </div>
        </div>
        <div className={styles.flexChild2}>
          <img src="/mapImage.png" alt="logo" className={styles.image} />
        </div>
      </div>
    </section>
  );
};

export default CustomerServiceSection;
