import Button from "../Button/Button";
import styles from "../../styles/HeroSection.module.css";
const HeroSection = () => {
  return (
    <section className={styles.section_container}>
      <div>
        <h1>Your strategy is only as good as you execute it.</h1>
        <Button button_text="Get Started" />
      </div>
    </section>
  );
};
export default HeroSection;
