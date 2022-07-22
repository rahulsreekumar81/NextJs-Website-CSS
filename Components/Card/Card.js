import styles from "../../styles/Card.module.css";
import Image from "next/image";
const Card = ({ image, head, content }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.icon}>
        <Image src={image} alt="icon" height="150px" width="150px" />
      </div>
      <div className={styles.cardHead}>
        <h2>{head}</h2>
      </div>
      <div className={styles.cardContent}>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Card;
