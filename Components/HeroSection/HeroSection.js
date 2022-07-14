import Button from "../Button/Button";
import styles from "../../styles/HeroSection.module.css";
const HeroSection = () => {
  return (
    <section className={styles.section_container}>
      <div>
        <h1>
          Your strategy is only as good as
          <br /> you execute it<span className={styles.fullStop}>.</span>
        </h1>
        <Button button_text="Get Started" className={styles.buttonPrimary} />
      </div>
    </section>
  );
};
export default HeroSection;
