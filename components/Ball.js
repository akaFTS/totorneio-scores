import styles from "./Ball.module.css";

export default function Ball({ isGold, isOrange, isTurnaround }) {
  const maybeGoldStyle = isGold ? styles.gold : "";
  const maybeOrangeStyle = isOrange ? styles.orange : "";
  const maybeTurnaroundStyle = isTurnaround ? styles.turnaround : "";

  return (
    <div
      className={`${styles.ball} ${maybeGoldStyle} ${maybeOrangeStyle} ${maybeTurnaroundStyle}`}
    />
  );
}
