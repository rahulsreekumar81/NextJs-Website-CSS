import styles from "../../styles/CompanyProfile.module.css";
import Image from "next/image";
const CompanyProfile = () => {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.headingContainer}>
        <h2 className={styles.primaryHeading}>
          Company Profile<span className={styles.fullStop}>.</span>
        </h2>
        <h4 className={styles.secondaryHeading}>Short Introduction</h4>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.imageContainer}>
          <img
            src="\companyimage.png"
            alt="company-image"
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          {/* ⏩  Todo handle background ellipse shape */}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </section>
  );
};
export default CompanyProfile;
