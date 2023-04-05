import styles from "./Controls.module.css";
import MatchControls from "./MatchControls";
import TeamConfig from "./TeamConfig";

export default function Controls({
  blueTeamData,
  setBlueTeamData,
  redTeamData,
  setRedTeamData,
  isHappyGame,
  setHappyGame,
}) {
  const handleToggleHappy = () => {
    setHappyGame(!isHappyGame);
  };
  const handleSwapTeams = () => {
    const tempTeamData = blueTeamData;
    setBlueTeamData(redTeamData);
    setRedTeamData(tempTeamData);
  };
  const handleResetMatch = () => {
    setBlueTeamData({ names: "", setScore: 0, matchScore: 0 });
    setRedTeamData({ names: "", setScore: 0, matchScore: 0 });
  };
  const handleNextSet = () => {
    const redTeamWon = redTeamData.setScore > blueTeamData.setScore;
    const updatedRedTeamData = {
      ...redTeamData,
      setScore: 0,
      matchScore: redTeamWon
        ? redTeamData.matchScore + 1
        : redTeamData.matchScore,
    };
    const updatedBlueTeamData = {
      ...blueTeamData,
      setScore: 0,
      matchScore: redTeamWon
        ? blueTeamData.matchScore
        : blueTeamData.matchScore + 1,
    };

    // Swap sides for next set
    setBlueTeamData(updatedRedTeamData);
    setRedTeamData(updatedBlueTeamData);
  };
  return (
    <div className={styles.superwrapper}>
      <TeamConfig
        color="red"
        teamData={redTeamData}
        setTeamData={setRedTeamData}
      />
      <TeamConfig
        color="blue"
        teamData={blueTeamData}
        setTeamData={setBlueTeamData}
      />
      <MatchControls
        onSwapTeams={handleSwapTeams}
        onResetMatch={handleResetMatch}
        onNextSet={handleNextSet}
        isHappyGame={isHappyGame}
        onToggleHappy={handleToggleHappy}
      />
    </div>
  );
}
