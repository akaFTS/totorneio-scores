import styles from "./MatchControls.module.css";

export default function MatchControls({
  onSwapTeams,
  onNextSet,
  onResetMatch,
}) {
  return (
    <div className={styles.wrapper}>
      <button onClick={onNextSet}>Next Set</button>
      <button onClick={onSwapTeams}>Swap teams</button>
      <button onClick={onResetMatch}>Reset</button>
    </div>
  );
}
