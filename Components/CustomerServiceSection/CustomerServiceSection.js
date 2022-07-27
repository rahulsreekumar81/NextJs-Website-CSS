import styles from "../../styles/CustomerService.module.css";
const CustomerServiceSection = () => {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.flexContainer}>
        <div className={styles.flexChild1}>
          <div className={styles.headingContainer}>
            <h2 className={styles.primaryHeading}>Customer Service</h2>
            <h4 className={styles.secondaryHeading}>Short Introduction</h4>
          </div>
          <div className={styles.listContainer}>
            <ul className={styles.list}>
              <li className={styles.listItems}>
                <h5 className={styles.listItems}>+1-234-567-890</h5>
              </li>
              <li className={styles.listItems}>
                <h5 className={styles.listItems}>
                  Financial Service@gmail.com
                </h5>
              </li>
              <li className={styles.listItems}>
                <h5 className={styles.listItems}>
                  Rockefeller PlazaNew York, NY 10112
                </h5>
              </li>
            </ul>
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
