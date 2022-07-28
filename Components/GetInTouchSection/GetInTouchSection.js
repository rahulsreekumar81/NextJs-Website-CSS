import styles from "../../styles/GetInTouch.module.css";

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
        <form className={styles.form} action="#">
          <div className={styles.inputContainer}>
            <input
              type="email"
              name="email"
              placeholder="Type your Email Address"
              className={styles.formField}
            />
            <button type="submit" className={styles.button}>
              Send Now
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
export default GetInTouchSection;
