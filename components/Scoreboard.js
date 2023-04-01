import NameBox from "./NameBox";
import styles from "./Scoreboard.module.css";
import ScoreBox from "./ScoreBox";

export default function Scoreboard({ blueTeamData, redTeamData }) {
  return (
    <div className={styles.wrapper}>
      <NameBox names={blueTeamData.names} color="blue" />
      <ScoreBox
        matchScore={blueTeamData.matchScore}
        setScore={blueTeamData.setScore}
        color="yellow"
      />
      <ScoreBox
        matchScore={redTeamData.matchScore}
        setScore={redTeamData.setScore}
        color="green"
        reverse
      />
      <NameBox names={redTeamData.names} color="red" />
    </div>
  );
}
