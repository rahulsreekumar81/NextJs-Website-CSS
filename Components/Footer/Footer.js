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
          <h2 className={styles.listTitle}>Learn More</h2>
          <ul className={styles.footerList}>
            <li>
              <a href="#">How it work</a>
            </li>
            <li>
              <a href="#">Who we are</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Blogs</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
          </ul>
        </div>
        <div className={styles.footerMainItem}>
          <h2 className={styles.listTitle}>Social</h2>
          <ul className={styles.footerList}>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Pinterest</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
          </ul>
        </div>
        <div className={styles.footerMainItem}>
          <h2 className={styles.listTitle}>Downloads</h2>
          <ul className={styles.footerList}>
            <li>
              <a href="#">
                <img src="Play-store.png" alt="logo" className={styles.logo} />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="App-store.png" alt="logo" className={styles.logo} />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
