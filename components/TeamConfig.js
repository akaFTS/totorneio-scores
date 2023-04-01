import styles from "./TeamConfig.module.css";

export default function TeamConfig({ color, teamData, setTeamData }) {
  const handleNameChange = (event) => {
    setTeamData({ ...teamData, names: event.target.value });
  };

  const addPoint = () => {
    setTeamData({ ...teamData, setScore: teamData.setScore + 1 });
  };

  const removePoint = () => {
    setTeamData({ ...teamData, setScore: teamData.setScore - 1 });
  };

  const colorVar = {
    "--box-color": `var(--brand-${color})`,
  };
  return (
    <div className={styles.container} style={colorVar}>
      <span>{color} team</span>
      <input type="text" value={teamData.names} onChange={handleNameChange} />
      <button onClick={addPoint}>+1 point</button>
      <button onClick={removePoint}> -1 point</button>
    </div>
  );
}
