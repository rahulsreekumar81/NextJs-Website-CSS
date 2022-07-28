import styles from "../../styles/Footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.footerMain}>
        <div className={styles.footerMainItem}>
          <img src="LOGO.png" alt="logo" />
          <h4>+1-234-567-890</h4>
          <h4>Rockefeller PlazaNew York, NY 10112</h4>
        </div>
        <div className={styles.footerMainItem}>
          <h2 className={styles.listTitle}>About</h2>
          <ul className={styles.footerList}>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Customers</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>
        <div className={styles.footerMainItem}>
          <h2 className={styles.listTitle}>Resources</h2>
          <ul className={styles.footerList}>
            <li>
              <a href="#">Docs</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">eBooks</a>
            </li>
            <li>
              <a href="#">Webinars</a>
            </li>
          </ul>
        </div>
        <div className={styles.footerMainItem}>
          <h2 className={styles.listTitle}>Downloads</h2>
          <ul className={styles.footerList}>
            <li>
              <a href="#">
                <img src="LOGO.png" alt="logo" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="LOGO.png" alt="logo" />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
