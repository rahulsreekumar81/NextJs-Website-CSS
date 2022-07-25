import styles from "../../styles/CustomerService.module.css";
const CustomerServiceSection = () => {
  return (
    <section className={styles.paddingBlock900}>
      <div className="container">
        <div className={styles.evenColumns}>
          <div>
            <h2 className={styles.primaryHeading}>
              Customer Service<span className={styles.fullStop}>.</span>
            </h2>
            <h4 className={styles.secondaryHeading}>Short Introduction</h4>
          </div>
          <ul className={styles.numberedList}>
            <li className={styles.listItems}>
              <h5 className={styles.listItem}>+1-234-567-890</h5>
            </li>
            <li className={styles.listItems}>
              <h5 className={styles.listItem}>Financial Service@gmail.com</h5>
            </li>
            <li className={styles.listItems}>
              <h5 className={styles.listItem}>
                Rockefeller PlazaNew York, NY 10112
              </h5>
            </li>
          </ul>
        </div>
        <div>
          <img src="/mapImage.png" alt="map" className={styles.mapImage} />
        </div>
      </div>
    </section>
  );
};

export default CustomerServiceSection;
