import styles from "@/styles/components/cards/rotating.module.css";

const RotatingCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.card_inner}>
        <div className={styles.card_front}>
          <p>Front Side</p>
        </div>
        <div className={styles.card_back}>
          <p>Back Side</p>
        </div>
      </div>
    </div>
  );
};

export default RotatingCard;
