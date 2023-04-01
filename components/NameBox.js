import styles from "./NameBox.module.css";

export default function NameBox({ names, color }) {
  const colorVar = {
    "--box-color": `var(--brand-${color})`,
  };
  return (
    <div style={colorVar} className={styles.names}>
      <span>{names}</span>
    </div>
  );
}
