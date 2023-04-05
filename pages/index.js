import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  streamScoreboard,
  updateTeam,
  updatePlayStyle,
  initialState,
} from "services/firestore";
import MatchBox from "components/MatchBox";
import Controls from "components/Controls";
import styles from "style/index.module.css";

export default function Home() {
  const router = useRouter();
  const [isHappyGame, setHappyGame] = useState(true);
  const [blueTeamData, setBlueTeamData] = useState(initialState);
  const [redTeamData, setRedTeamData] = useState(initialState);
  const matchId = !router.query.match ? "default" : router.query.match;

  useEffect(() => {
    const unsubscribe = streamScoreboard(matchId, (teams, isHappy) => {
      setBlueTeamData(teams.blue);
      setRedTeamData(teams.red);
      setHappyGame(isHappy);
    });
    return unsubscribe;
  }, [setBlueTeamData, setRedTeamData, matchId]);

  const asyncSetBlueTeamData = (data) => {
    updateTeam(matchId, "blue", data);
  };

  const asyncSetRedTeamData = (data) => {
    updateTeam(matchId, "red", data);
  };

  const asyncSetHappyGame = (isHappy) => {
    updatePlayStyle(matchId, isHappy);
  };

  return (
    <main className={styles.container}>
      <MatchBox
        blueTeamData={blueTeamData}
        redTeamData={redTeamData}
        isHappyGame={isHappyGame}
      />
      <Controls
        blueTeamData={blueTeamData}
        redTeamData={redTeamData}
        setBlueTeamData={asyncSetBlueTeamData}
        setRedTeamData={asyncSetRedTeamData}
        isHappyGame={isHappyGame}
        setHappyGame={asyncSetHappyGame}
      />
    </main>
  );
}
