import styles from "../../styles/GetInTouch.module.css";
import Button from "../Button/Button";
const GetInTouchSection = () => {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.headingContainer}>
        <h2 className={styles.primaryHeading}>
          Get In Touch<span className={styles.fullStop}>.</span>
        </h2>
        <h4 className={styles.secondaryHeading}>Short Introduction</h4>
      </div>
      <div className={styles.container}>
        <input
          type="email"
          name="email"
          placeholder="Type your Email Address"
          className="inputEmail"
        />
        <Button button_text="Send Now" />
      </div>
    </section>
  );
};
export default GetInTouchSection;
