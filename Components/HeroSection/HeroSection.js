import Button from "../Button/Button";
// import Image from "next/image";
import styles from "../../styles/HeroSection.module.css";
const HeroSection = () => {
  return (
    <section className={styles.section_container}>
      <div>
        <h1>
          Your strategy is only as good as
          <br /> you execute it<span className={styles.fullStop}>.</span>
        </h1>
        {/* <Image
          src="/Cover.png"
          alt="background"
          layout="fill"
          className={styles.imageContainer}
        /> */}
        <Button button_text="Get Started" className={styles.buttonPrimary} />
      </div>
    </section>
  );
};
export default HeroSection;
