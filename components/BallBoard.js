import Ball from "./Ball";
import styles from "./BallBoard.module.css";

export default function BallBoard({
  numBalls,
  hasOrange,
  hasTurnaround,
  allGold,
}) {
  return (
    <div className={styles.ballContainer}>
      {[...Array(numBalls).keys()].map((i) => (
        <Ball
          key={i}
          isGold={allGold}
          isOrange={hasOrange && i == numBalls - 1}
          isTurnaround={hasOrange && i == numBalls - 1 && hasTurnaround}
        />
      ))}
    </div>
  );
}
