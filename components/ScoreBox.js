import styles from "./ScoreBox.module.css";

export default function ScoreBox({ matchScore, setScore, color, reverse }) {
  const colorVar = {
    "--box-color": `var(--brand-${color})`,
  };
  return (
    <div
      style={colorVar}
      className={`${styles.wrapper} ${reverse ? styles.reverse : ""}`}
    >
      <div className={`${styles.score} ${styles.matchScore}`}>
        <span>{matchScore}</span>
      </div>
      <div className={styles.score}>
        <span>{setScore}</span>
      </div>
      <div className={styles.triangle}></div>
    </div>
  );
}
