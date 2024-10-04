import styles from "@/styles/components/game/result/result_summary.module.css";

const ResultsSummary = () => {
  return (
    <div className={styles.resultsSummaryContainer}>
      <div className={styles.confetti}>
        {[...Array(20)].map((_, index) => (
          <div key={index} className={styles.confettiPiece}></div>
        ))}
      </div>
      <div className={styles.result}>
        <div className={styles.headingTertiary}>Your Result</div>
        <div className={styles.resultBox}>
          <div className={styles.headingPrimary}>78</div>
          <p className={styles.resultText}>of 100</p>
        </div>
        <div className={styles.resultTextBox}>
          <div className={styles.headingSecondary}>excellent</div>
          <p className={styles.paragraph}>
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
        <div className={styles.summaryCta}>
          <button className={styles.btn}>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default ResultsSummary;
