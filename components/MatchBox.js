import Scoreboard from "./Scoreboard";
import BallBoard from "./BallBoard";
import styles from "./MatchBox.module.css";

function getBallsConfigForScoreboard(blueScore, redScore, isHappyGame) {
  // Standard fussball. One ball
  if (!isHappyGame) {
    return { numBalls: 1 };
  }

  // Both teams have less than 4 points. Three balls
  if (blueScore < 4 && redScore < 4) {
    return { numBalls: 3 };
  }

  // Both teams have 6 points. Golden rule!
  if (blueScore == 6 && redScore == 6) {
    return { numBalls: 6, allGold: true };
  }

  // Both teams have more than 4 points. Five balls + orange
  if (blueScore >= 4 && redScore >= 4) {
    return { numBalls: 6, hasOrange: true };
  }

  // One team has 6 points and the other less than 4. Turnaround rule!
  if (blueScore == 6 || redScore == 6) {
    return { numBalls: 4, hasOrange: true, hasTurnaround: true };
  }

  // Remaining: one team has over 4 points. Three balls + orange
  return { numBalls: 4, hasOrange: true };
}

export default function MatchBox({ blueTeamData, redTeamData, isHappyGame }) {
  const ballsConfig = getBallsConfigForScoreboard(
    blueTeamData.setScore,
    redTeamData.setScore,
    isHappyGame
  );
  return (
    <div className={styles.superwrapper}>
      <Scoreboard blueTeamData={blueTeamData} redTeamData={redTeamData} />
      <BallBoard
        numBalls={ballsConfig.numBalls}
        hasOrange={ballsConfig.hasOrange}
        hasTurnaround={ballsConfig.hasTurnaround}
        allGold={ballsConfig.allGold}
      />
    </div>
  );
}
