import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  updateDoc,
  onSnapshot,
  collection,
  setDoc,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAU0LH5rnETKG7PFUxmivbuGVKfgGMweQA",
  authDomain: "totorneio-scores.firebaseapp.com",
  projectId: "totorneio-scores",
  storageBucket: "totorneio-scores.appspot.com",
  messagingSenderId: "399859484207",
  appId: "1:399859484207:web:6c48f025aa60101c1728da",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const initialState = {
  names: "",
  matchScore: 0,
  setScore: 0,
};

const createScoreboard = (scoreBoardId) => {
  const matchDocRef = doc(db, "matches", scoreBoardId);
  return setDoc(matchDocRef, {
    teams: {
      blue: initialState,
      red: initialState,
    },
  });
};

export const streamScoreboard = (scoreboardId, onTeamsUpdate) => {
  return onSnapshot(
    doc(db, "matches", scoreboardId),
    (doc) => {
      if (!doc.exists()) {
        createScoreboard(scoreboardId);
      } else {
        const data = doc.data();
        onTeamsUpdate(data.teams, data.isHappy);
      }
    },
    (e) => {
      console.log(e);
    }
  );
};

export const updateTeam = (scoreBoardId, team, teamData) => {
  const matchDocRef = doc(db, "matches", scoreBoardId);
  const fieldName = `teams.${team}`;
  return updateDoc(matchDocRef, {
    [fieldName]: teamData,
  });
};

export const updatePlayStyle = (scoreBoardId, isHappy) => {
  const matchDocRef = doc(db, "matches", scoreBoardId);
  return updateDoc(matchDocRef, { isHappy });
};
