import Button from "../Button/Button";
import styles from "../../styles/HeroSection.module.css";
const HeroSection = () => {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.hero}>
        <div className={styles.container}>
          <h1>
            Your strategy is only as good as
            <br /> you execute it<span className={styles.fullStop}>.</span>
          </h1>
          <Button button_text="Get Started" className={styles.buttonPrimary} />
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
