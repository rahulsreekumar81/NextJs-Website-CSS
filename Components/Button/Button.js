import styles from "../../styles/Button.module.css";
const Button = ({ button_text, icon }) => {
  return <button className={styles.start_btn}>{button_text}</button>;
};
export default Button;
