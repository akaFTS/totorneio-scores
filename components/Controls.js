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
    if (redTeamData.setScore > blueTeamData.score) {
      setRedTeamData({
        names: redTeamData.names,
        setScore: 0,
        matchScore: redTeamData.matchScore + 1,
      });
      setBlueTeamData({
        ...blueTeamData,
        setScore: 0,
      });
    } else {
      setBlueTeamData({
        names: blueTeamData.names,
        setScore: 0,
        matchScore: blueTeamData.matchScore + 1,
      });
      setRedTeamData({
        ...redTeamData,
        setScore: 0,
      });
    }
  };
  return (
    <div className={styles.superwrapper}>
      <TeamConfig
        color="blue"
        teamData={blueTeamData}
        setTeamData={setBlueTeamData}
      />
      <TeamConfig
        color="red"
        teamData={redTeamData}
        setTeamData={setRedTeamData}
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
