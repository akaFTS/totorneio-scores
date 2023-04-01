import NameBox from "./NameBox";
import styles from "./Scoreboard.module.css";
import ScoreBox from "./ScoreBox";

export default function Scoreboard({ blueTeamData, redTeamData }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.side}>
        <div className={styles.name}>
          <NameBox names={blueTeamData.names} color="blue" />
        </div>
        <ScoreBox
          matchScore={blueTeamData.matchScore}
          setScore={blueTeamData.setScore}
          color="yellow"
        />
      </div>
      <div className={styles.side}>
        <ScoreBox
          matchScore={redTeamData.matchScore}
          setScore={redTeamData.setScore}
          color="green"
          reverse
        />
        <div className={styles.name}>
          <NameBox names={redTeamData.names} color="red" />
        </div>
      </div>
    </div>
  );
}
